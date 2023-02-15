export const createToken = (payload, expiresIn = '60s') => {
    return jwt.sign(payload, process.env.jwt_secret, { expiresIn })
};
export const verifyToken = (token) => {
    return jwt.verify(token, process.env.jwt_secret)
};
export const cleanStringForRegex = (val = '') => {
    if (val) return val.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
}

export const checkType = (user, type) => {
    if (user?.profile?.type !== type) {
        throw new Meteor.Error('not-allowed', 'not-allowed');
    }
}
export const userActive = (user) => {
    if (!user?.profile?.active) {
        throw new Meteor.Error('not-allowed-active', 'not-allowed-active');
    }
}
export const isAuthorized = (user) => {
    if (!user) {
        throw new Meteor.Error('not-allowed', 'not-allowed');
    }
}

export const checkRole = (user, roles = []) => {
    if (!roles.includes(user?.profile?.role)) {
        throw new Meteor.Error('not-allowed', 'not-allowed');
    }
}

export const CustomToast = function (toast = true, position = 'top-end', showConfirmButton = false, timer = 3000, timerProgressBar = true) {
    return Swal.mixin({
        toast: toast,
        position: position,
        showConfirmButton: showConfirmButton,
        timer: timer,
        timerProgressBar: timerProgressBar,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        showCloseButton: true
    })
}


export const addErrorClass = (form, requiredArr) => {
    let error = false
    for (let i = 0; i < form?.length; i++) {
        if (form?.elements?.[i]?.name) {

            let modalId = form?.id
            let inputName = form?.elements?.[i]?.name
            let remove = !!form.elements[i].value
            if (requiredArr?.length) {
                if (requiredArr.includes(form?.elements?.[i]?.name)) {
                    if (!form.elements[i].value) {
                        error = true
                    }

                    $(`#${modalId} *[name=${inputName}]`).siblings(`.invalid-feedback`).remove()
                    if (remove) {
                        $(`#${modalId} *[name=${inputName}]`).removeClass("is-invalid")
                    } else {
                        $(`#${modalId} *[name=${inputName}]`).addClass("is-invalid")
                        let selector = $(`#${modalId} *[name=${inputName}]`).siblings(':last')
                        if ($(selector).prop('tagName') !== 'DIV') {
                            selector = $(`#${modalId} *[name=${inputName}]`)
                        }
                        $(`<div class="invalid-feedback">${TAPi18n.__('notificationText.fieldIsRequired')}</div>`).insertAfter(selector)
                    }
                }
            } else {
                if (!form.elements[i].value) {
                    error = true
                }
                $(`#${modalId} *[name=${inputName}]`).siblings(`.invalid-feedback`).remove()
                if (remove) {
                    $(`#${modalId} *[name=${inputName}]`).removeClass("is-invalid")
                } else {
                    $(`#${modalId} *[name=${inputName}]`).addClass("is-invalid")
                    let selector = $(`#${modalId} *[name=${inputName}]`).siblings(':last')
                    if ($(selector).prop('tagName') !== 'DIV') {
                        selector = $(`#${modalId} *[name=${inputName}]`)
                    }
                    $(`<div class="invalid-feedback">${TAPi18n.__('notificationText.fieldIsRequired')}</div>`).insertAfter(selector)
                }
            }

        }
    }
    return error
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const stringToBoolean = (stringValue) => {
    switch (stringValue?.toLowerCase()?.trim()) {
        case "true":
        case "yes":
        case "1":
            return true;

        case "false":
        case "no":
        case "0":
        case null:
        case undefined:
            return false;

        default:
            return JSON.parse(stringValue);
    }
}
export function splitDate(str) {
    const arr = str.replace(" ", "").split("-")
    return [moment(arr[0], "DD.MM.YYYY").toDate(), moment(arr[1], "DD.MM.YYYY").toDate()]
}

export const dateIntervalIns = (date = false, selector = '#search-daterange', int = false) => {

    if ($(selector)) {
        var lastYear = TAPi18n.__('lastYear');
        var thisYear = TAPi18n.__('thisYear');
        var lastQuarter = TAPi18n.__('lastQuarter');
        var thisQuarter = TAPi18n.__('thisQuarter');
        var lastMonth = TAPi18n.__('lastMonth');
        var thisMonth = TAPi18n.__('thisMonth');
        var lastWeek = TAPi18n.__('lastWeek');
        var thisWeek = TAPi18n.__('thisWeek');
        var yesterday = TAPi18n.__('yesterday');
        var today = TAPi18n.__('today');

        let stDate;
        let ndDate;

        if (date) {
            stDate = moment(date.slice(0, 10), "DD.MM.YYYY");
            ndDate = moment(date.slice(-10), "DD.MM.YYYY");
        } else {
            stDate = moment().startOf('month').format("DD.MM.YYYY");
            ndDate = moment().endOf('month').format("DD.MM.YYYY");
        }

        $(selector).daterangepicker({
            drops: 'down',
            opens: 'left',
            autoApply: true,
            alwaysShowCalendars: true,
            showCustomRangeLabel: true,
            buttonClasses: 'btn btn-sm',
            startDate: stDate,
            endDate: ndDate,
            locale: {
                firstDay: 1,
                format: 'DD.MM.YYYY',
                fromLabel: TAPi18n.__('from'),
                toLabel: TAPi18n.__('to'),
                applyLabel: TAPi18n.__('select'),
                cancelLabel: TAPi18n.__('cancel'),
                customRangeLabel: TAPi18n.__('customRange'),
                daysOfWeek: [
                    TAPi18n.__('sun'),
                    TAPi18n.__('mon'),
                    TAPi18n.__('tue'),
                    TAPi18n.__('wed'),
                    TAPi18n.__('thu'),
                    TAPi18n.__('fri'),
                    TAPi18n.__('sat')
                ],
                monthNames: [
                    TAPi18n.__('january'),
                    TAPi18n.__('february'),
                    TAPi18n.__('march'),
                    TAPi18n.__('april'),
                    TAPi18n.__('may'),
                    TAPi18n.__('june'),
                    TAPi18n.__('july'),
                    TAPi18n.__('august'),
                    TAPi18n.__('september'),
                    TAPi18n.__('october'),
                    TAPi18n.__('november'),
                    TAPi18n.__('december')
                ]
            },
            ranges: {
                [today]: [
                    moment().startOf('day').toDate(),
                    moment().endOf('day').toDate()
                ],
                [yesterday]: [
                    moment().subtract(1, 'day').startOf('day').toDate(),
                    moment().subtract(1, 'day').endOf('day').toDate()
                ],
                [thisWeek]: [
                    moment().startOf('week').toDate(),
                    moment().endOf('week').toDate()
                ],
                [lastWeek]: [
                    moment().subtract(1, 'week').startOf('week').toDate(),
                    moment().subtract(1, 'week').endOf('week').toDate()
                ],
                [thisMonth]: [
                    moment().startOf('month').toDate(),
                    moment().endOf('month').toDate()
                ],
                [lastMonth]: [
                    moment().subtract(1, 'month').startOf('month').toDate(),
                    moment().subtract(1, 'month').endOf('month').toDate()
                ],
                [thisQuarter]: [
                    moment().startOf('quarter').toDate(),
                    moment().endOf('quarter').toDate()
                ],
                [lastQuarter]: [
                    moment().subtract(1, 'quarter').startOf('quarter').toDate(),
                    moment().subtract(1, 'quarter').endOf('quarter').toDate()
                ],
                [thisYear]: [
                    moment().startOf('year').toDate(),
                    moment().endOf('year').toDate()
                ],
                [lastYear]: [
                    moment().subtract(1, 'year').startOf('year').toDate(),
                    moment().subtract(1, 'year').endOf('year').toDate()
                ]
            }
        });
    }
}

export const getDateIntervalQuery = (dateInterval) => {
    let startInterval = moment(dateInterval.slice(0, 10), "DD.MM.YYYY").startOf('day').toDate(),
        endInterval = moment(dateInterval.slice(-10), "DD.MM.YYYY").endOf("day").toDate();
    let dateQuery = { $gte: startInterval, $lte: endInterval }
    return dateQuery
}
export const getDateIntervalQueryMonth = (dateInterval) => {
    let startInterval = moment(dateInterval, "YYYY-MM").startOf('month').toDate(),
        endInterval = moment(dateInterval, "YYYY-MM").endOf("month").toDate();
    let dateQuery = { $gte: startInterval, $lte: endInterval }
    return dateQuery
}

export function secondsToDhms(seconds) {
    seconds = Number(seconds);
    let d = Math.floor(seconds / (3600 * 24));
    let h = Math.floor(seconds % (3600 * 24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);
    let dDisplay = d > 0 ? d + " gün, " : "";
    let hDisplay = h > 0 ? h + " saat, " : "";
    let mDisplay = m > 0 ? m + " dəqiqə, " : "";
    let sDisplay = s > 0 ? s + " saniyə" : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

export function sortArray(datas, key) {
    function compare(a, b) {
        if (a[key] < b[key]) {
            return 1;
        }
        if (a[key] > b[key]) {
            return -1;
        }
        return 0;
    }

    // console.log('datas',datas)
    datas.sort(compare);
    // console.log('sortDatas',datas)
    return datas;
}

export function getPercent(array, percent) {
    return array.slice(0, Math.ceil((array.length * percent) / 100))
}

export function getArrayPartsManual(array, workShift = 'afternoon', sortField = 'callCount') {

    let sortedArray = sortArray(array.filter((e) => e.userWorkShift === workShift), sortField)

    let first = (sortedArray.length * 30) / 100
    let second = (sortedArray.length * 70) / 100
    let third = sortedArray.length
    let firstPart = [], secondPart = [], thirdPart = []
    for (let i = 0; i < sortedArray.length; i++) {
        let data = sortedArray[i]
        if (i < first) {
            // console.log('1',i)
            firstPart.push(data)
        } else if (i < second) {
            // console.log('2',i)
            secondPart.push(data)
        } else if (i < third) {
            // console.log('3',i)
            thirdPart.push(data)
        }
    }
    return { firstPart, secondPart, thirdPart }

}

export function getArrayParts(sortableArray, workShift = 'afternoon', sortField = 'callCount') {
    let array = sortArray(sortableArray.filter((e) => e.userWorkShift === workShift), sortField)
    let arrayLength = array.length;
    let firstPart = array.slice(0, Math.floor(arrayLength * 0.3));
    let secondPart = array.slice(Math.floor(arrayLength * 0.3), Math.floor(arrayLength * 0.7));
    let thirdPart = array.slice(Math.floor(arrayLength * 0.7), arrayLength);
    return { firstPart, secondPart, thirdPart }
}

