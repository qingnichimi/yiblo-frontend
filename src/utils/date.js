
export const formatDate = (val) => {
    var date = new Date(val)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDay()
    if (month < 10) {
        month = '0' + day
    }
    if (day < 10) {
        day = '0' + day
    }
    return year + '-' + month + '-' + day
}
export const formatDateTime = (val) => {
    var date = new Date(val)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (month < 10) {
        month = '0' + day
    }
    if (day < 10) {
        day = '0' + day
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
}
