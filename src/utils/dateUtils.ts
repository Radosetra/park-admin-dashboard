export function convertToStr(date:Date | string) :string {
    let str = date + ""
    return str.replace(/T.*$/, '')
}