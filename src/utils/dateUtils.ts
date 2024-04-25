export function convertToStr(date:Date) :string {
    let str = date + ""
    return str.replace(/T.*$/, '')
}