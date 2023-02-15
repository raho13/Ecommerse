
export class Utilities {
    constructor() {

    }
    isDate(value) {
        if (Object.prototype.toString.call(moment(value, 'DD.MM.YYYY').toDate()) === "[object Date]") {
            // it is a date
            if (isNaN(moment(value, 'DD.MM.YYYY').toDate())) { // d.getTime() or d.valueOf() will also work
                // date object is not valid
            } else {
                if (moment(value, 'DD.MM.YYYY').isValid()) {
                    if (!(/[a-zA-Z]/g.test(value)) && isFinite(moment(value, 'DD.MM.YYYY').toDate().getTime())) {
                        return true
                    }
                }
            }
        } else {
            // not a date object
        }
        return false
    }
    isNumber(value) {
        return isFinite(parseFloat(value)) && !(/[a-zA-Z]/g.test(value)) && !this.isDate(value)
    }
    cleanStrForRegExp(text) {
        if (text) return text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    getRegex(text) {
        return new RegExp(text, "i")
    }
    call(...args) {
        return new Promise((resolve, reject) => {
            try {
                Meteor.call(...args, (err, res) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(res)
                })
            } catch (error) {
                console.log(error)
            }
        })
    }
    uploadFile({ Col , file, other }) {
        return new Promise((resolve, reject) => {
            if (!file) {
                reject("File cannot be null");
            }

            const upload = Col.insert({ file, chunkSize: "dynamic", ...other }, false);
            upload.on("end", function (error, fileObj) {
                if (error) {
                    reject(`Error during upload: ${error}`);
                } else {
                    resolve(fileObj);
                }
            });

            upload.start();
        });
    }
    isDev() {
        return Meteor.absoluteUrl().includes("localhost")
    }
    isUser(role, user = Meteor.user()) {

        if (Array.isArray(role)) {
            return role.some(crr => crr === user.profile.role)
        } else {
            return role === user.profile.role
        }
    }


}
