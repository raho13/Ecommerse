export const KeyForMaintenanceMethods = 'company-156'

export const COMPANY = {
    NAME: "156 Company"
}
export const Roles = {
    superadmin: "superadmin",
    admin: "admin",
    dispatcher: "dispatcher",
    operator: "operator",
    operator_dispatcher: "operator_dispatcher"
}
export const ALL_ROLES = [Roles.superadmin, Roles.admin, Roles.dispatcher, Roles.operator, Roles.operator_dispatcher]

export const Types = {
    admin: "admin"
}

export const Languages = ['az'];

export const UsersPerPage = 10
export const RejectionReasonsPerPage = 10
export const DriversPerPage = 10
export const CarBrandsPerPage = 10
export const CarModelsPerPage = 10
export const CarNumbersPerPage = 10
export const OrdersPerPage = 10
export const DoneOrdersPerPage = 10
export const OperationsPerPage = 10
export const TariffsPerPage = 10
export const BalanceLLCPerPage = 10
export const LicenceCategoriesPerPage = 10
export const DepartmentsPerPage = 10
export const GroupsPerPage = 10
export const PositionsPerPage = 10
export const ReportPerPage = 10


export const BanTypes = {
    sedan: 'SEDAN',
    moto: 'MOTO',
    bus: 'BUS',
    truck: "TRUCK"
}

export const OrderTypes = ['evacuation', 'cargoTransportation', 'truckEmpty', "sunkenCar", "parking"]
export const PaymentTypes = {
    cash: "Cash",
    card: "Card",
    corporative: "Corporative",
    service: "Service",
    online: "Online"
}
export const ORDER_STATUSES = {
    accepted: "accepted",
    wanted: "wanted",
    inTransit: "inTransit",
    forwarded: "forwarded",
    wrongCall: "wrongCall",
    interested: "interested",
    callAgain: "callAgain",
    rejected: "rejected",
    completed: "completed",
}

export const OrderStatus = Object.keys(ORDER_STATUSES)

export const experienceBonus = [
    { start: 0, end: 1, value: 0 },
    { start: 1, end: 2, value: 20 },
    { start: 2, end: 3, value: 40 },
    { start: 3, end: 4, value: 60 },
    { start: 4, end: 5, value: 80 },
    { start: 5, value: 100 },
]


export const middleReceiptBonus = [
    { start: 0, end: 30, value: -200 },
    { start: 30, end: 35, value: 0 },
    { start: 35, end: 40, value: 50 },
    { start: 40, end: 45, value: 80 },
    { start: 45, value: 120 }
]

export const completedBonus = {
    afternoon: 0.7,
    middle: 1,
    night: 1.3
}
export const rejectedBonus = {
    afternoon: -0.2,
    middle: -0.2,
    night: -0.2
}


export const afternoonCompletedBonus = [
    { start: 0, end: 40000, value: 0 },
    { start: 40000, end: 50000, value: 100 },
    { start: 50000, end: 60000, value: 150 },
    { start: 60000, end: 80000, value: 200 },
    { start: 80000, end: 100000, value: 350 },
    { start: 100000, value: 500 }
]

export const middleCompletedBonus = [
    { start: 0, end: 20000, value: 0 },
    { start: 20000, end: 25000, value: 150 },
    { start: 25000, end: 30000, value: 200 },
    { start: 30000, end: 35000, value: 250 },
    { start: 35000, end: 40000, value: 350 },
    { start: 40000, value: 500 }
]

export const nightCompletedBonus = [
    { start: 0, end: 24000, value: 0 },
    { start: 24000, end: 30000, value: 200 },
    { start: 30000, end: 40000, value: 250 },
    { start: 40000, end: 50000, value: 350 },
    { start: 50000, value: 500 }
]

export const rankFields = [
    {
        field: 'callCount',
        coef: 1
    },
    {
        field: 'completedCount',
        coef: 4
    },
    {
        field: 'amount',
        coef: 5
    },
    {
        field: 'rejectedCount',
        coef: 2
    }
]


export const orderExportKeys = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Order Date', key: 'createdAt', width: 20 },
    { header: 'banType', key: 'banType', width: 30 },
    { header: 'status', key: 'status', width: 30 },
    { header: 'note', key: 'note', width: 30 },
    { header: "paymentType", key: "paymentType", width: 30 },
    { header: "totalPrice", key: "totalPrice", width: 30 },
]

export const callReportExportKeys = [
    { header: 'tables.operator', key: 'userName', width: 50 },
    { header: "setting.done_order", key: "completed", width: 30 },
    { header: "addOrder.accepted", key: "accepted", width: 30 },
    { header: "wrongCall", key: "wrongCall", width: 30 },
    { header: "wanted", key: "wanted", width: 30 },
    { header: "rejected", key: "rejected", width: 30 },
    { header: "tables.allCallCount", key: "total", width: 30 },
    // {header:"tables.done_percentage", key:"getPercent", width:30},
]

export const amountReportExportKeys = [
    { header: 'tables.operator', key: 'userName', width: 50 },
    { header: 'tables.cash', key: 'cashAmount', width: 50 },
    { header: 'tables.card', key: 'cardAmount', width: 50 },
    { header: 'tables.online', key: 'onlineAmount', width: 50 },
    { header: 'tables.service', key: 'serviceAmount', width: 50 },
    { header: 'tables.corporative', key: 'corporativeAmount', width: 50 },
    { header: 'addOrder.accepted', key: 'acceptedAmount', width: 50 },
    { header: 'rejected', key: 'rejectedAmount', width: 50 }
]

export const amountAllReportExportKeys = [
    { header: 'tables.orderTime', key: 'date', width: 50 },
    { header: 'setting.done_order', key: 'completed', width: 50 },
    { header: 'addOrder.accepted', key: 'accepted', width: 50 },
    { header: 'wrongCall', key: 'wrongCall', width: 50 },
    { header: 'wanted', key: 'interested', width: 50 },
    { header: 'rejected', key: 'rejected', width: 50 },
    { header: 'tables.allCallCount', key: 'totalCount', width: 50 },
    { header: 'tables.done_percentage"', key: 'acceptedPercent', width: 50 }
]

export const salaryReportExportKeys = [
    { header: 'workShift', key: 'userWorkShift', width: 50 },
    { header: "tables.operator", key: "userName", width: 30 },
    { header: "experience", key: "experience", width: 30 },
    { header: "experienceBonus", key: "experience", width: 30 },
    { header: "completedCount", key: "completedCount", width: 30 },
    { header: "completedAmount", key: "completedBonus", width: 30 },
    { header: "rejectedCount", key: "rejectedCount", width: 30 },
    { header: "rejectedBonus", key: "rejectedBonus", width: 30 },
    { header: "middleReceipt", key: "middleReceipt", width: 30 },
    { header: "middleReceiptBonus", key: "middleReceiptBonus", width: 30 },
    { header: "amount", key: "completedAmount", width: 30 },
    { header: "amountBonus", key: "completedAmountBonus", width: 30 },
    // {header:"satisfactionPenal", key:"total", width:30},
    { header: "salary", key: "salary", width: 30 }
    // {header:"tables.done_percentage", key:"getPercent", width:30},
]

export const rankReportExportKeys = [
    { header: 'workShift', key: 'userWorkShift', width: 50 },
    { header: "tables.operator", key: "userName", width: 30 },
    { header: "callCount", key: "callCount", width: 30 },
    { header: "rejectedCount", key: "rejectedCount", width: 30 },
    { header: "rejectedPercent", key: "rejectedPercent", width: 30 },
    { header: "completedCount", key: "completedCount", width: 30 },
    { header: "completedPercent", key: "completedPercent", width: 30 },
    { header: "amount", key: "amount", width: 30 },
    { header: "progress", key: "progress", width: 30 },
    { header: "goalPercent", key: "progress", width: 30 },
    { header: "goalProgress", key: "goalProgress", width: 30 },
    { header: "goal", key: "goal", width: 30 },
    { header: "call", key: "callCount2", width: 30 },
    { header: "completed", key: "completedCount2", width: 30 },
    { header: "amount", key: "amount2", width: 30 },
    { header: "rejected", key: "rejectedCount2", width: 30 },
    { header: "progress", key: "getPercent", width: 30 },
    { header: "row", key: "row", width: 30 },
    { header: "point", key: "point", width: 30 }
]

export const dispectertOrderExportKeys = [
    { header: 'dispatcher', key: 'fullname', width: 50 },
    { header: "total", key: "total", width: 30 },
    { header: "completed", key: "completed", width: 30 },
    { header: "rejected", key: "rejected", width: 30 },
]
export const dispectertExportKeys = [
    { header: 'dispatcher', key: 'fullname', width: 50 },
    { header: "Ümumi", key: "total", width: 30 },
    { header: "Təyin olunmuş", key: "finished", width: 30 },
    { header: "Təyin olunmamış", key: "not_finished", width: 30 },
]