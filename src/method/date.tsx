import moment from "moment"

export const getDate = (): string => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return `${year}-${month}-${day}`
}

export const timestamp = (time: number): string => {
    'worklet'
    const date = new Date(time * 1000)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    return `${year}-${month}-${day} ${hour}:${minute}`
}

export const minuteSecond = (second: number): string => {
    const time: string = moment.utc(moment.duration(second, 's').asMilliseconds()).format('mm:ss')
    return time
}

export const formatDate = (input: string): string => {
    const datePart: any = input.match(/\d+/g)
    const year = datePart[0].substring(0)
    const month = datePart[1]
    const day = datePart[2]

    return day + '-' + month + '-' + year;
}

export const getToDayYMD = (): string => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()

    return year + '-' + month.toString().padStart(2, '0') + '-' + date.toString().padStart(2, '0');
}

export const formatDateYMD = (str: string): string => {
    var array = str.split(/\D/)
    const date = array[0].padStart(2, '0')
    const month = array[1].padStart(2, '0')
    const year = array[2].padStart(2, '0')
    return year + '-' + month + '-' + date
}

export const getTimeStamp = (input: string): number => {
    let date = new Date(input)
    let timestamp = date.getTime()
    return timestamp
}

export const getTomorrow = (): string => {
    const today = new Date()
    // to return the date number(1-31) for the specified date
    let tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    //returns the tomorrow date
    return tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate()
}

export const getYesterday = (today: string): string => {
    var date = new Date(today);
    date.setDate(date.getDate() - 1);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}-${month}-${day}`
}