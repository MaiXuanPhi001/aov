import { theme } from "@theme/index"

export const bet: Function = (order: string): string => {
    const bet: string =
        order === 'red' ? 'Đỏ' :
            order === 'green' ? 'Xanh' :
                order === 'violet' ? 'Tím' :
                    order === 'big' ? 'Lớn' :
                        order === 'small' ? 'Nhỏ' : order

    return bet
}

export const leftColor: Function = (order: string): string => {
    const leftColor: string =
        order === 'red' ? theme.colors.textRed :
            order === 'green' ? theme.colors.green3 :
                order === 'violet' ? theme.colors.purple :
                    order === 'big' ? theme.colors.big :
                        order === 'small' ? theme.colors.small :
                            Number(order) % 2 === 0 ? theme.colors.textRed : theme.colors.green3

    return leftColor
}

export const rightColor: Function = (order: string): string => {
    const rightColor: string =
        (order === 'red' || order === 'green' || order === 'violet' ||
            order === 'big' || order === 'small') ? leftColor :
            (Number(order) === 0 || Number(order) === 5) ? theme.colors.purple : leftColor(order)

    return rightColor
} 