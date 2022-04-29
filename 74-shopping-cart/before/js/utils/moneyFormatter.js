const formatter = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"})

export function moneyFormatter (price) {
    return formatter.format(price);
}