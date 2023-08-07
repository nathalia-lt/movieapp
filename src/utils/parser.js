
//parses é onde eu coloco funcoes que vou usar muitas vezes durante o meu projeto


export function numberToMoney(value) {
    return "$ " +  parseFloat(value).toFixed(2)
}


export function dateStrToYear(value) {
    if (!value) {
        return new Date().getFullYear()
    }
    const date = new Date(value)
    return date.getFullYear()
}