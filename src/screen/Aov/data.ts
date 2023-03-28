import { ImageSourcePropType } from "react-native";

export interface Character {
    order: number;
    image: ImageSourcePropType,
}

export const charaters: Character[] = [
    {
        order: 0,
        image: require('@images/aov/nhanvat0.png'),
    },
    {
        order: 1,
        image: require('@images/aov/nhanvat1.png'),
    },
    {
        order: 2,
        image: require('@images/aov/nhanvat2.png'),
    },
    {
        order: 3,
        image: require('@images/aov/nhanvat3.png'),
    },
    {
        order: 4,
        image: require('@images/aov/nhanvat4.png'),
    },
    {
        order: 5,
        image: require('@images/aov/nhanvat5.png'),
    },
    {
        order: 6,
        image: require('@images/aov/nhanvat6.png'),
    },
    {
        order: 7,
        image: require('@images/aov/nhanvat7.png'),
    },
    {
        order: 8,
        image: require('@images/aov/nhanvat8.png'),
    },
    {
        order: 9,
        image: require('@images/aov/nhanvat9.png'),
    },
]

export const converNumberToImages = (number: number) => {
    switch (number) {
        case 0: return require('@images/aov/nhanvat0.png')
        case 1: return require('@images/aov/nhanvat1.png')
        case 2: return require('@images/aov/nhanvat2.png')
        case 3: return require('@images/aov/nhanvat3.png')
        case 4: return require('@images/aov/nhanvat4.png')
        case 5: return require('@images/aov/nhanvat5.png')
        case 6: return require('@images/aov/nhanvat6.png')
        case 7: return require('@images/aov/nhanvat7.png')
        case 8: return require('@images/aov/nhanvat8.png')
        case 9: return require('@images/aov/nhanvat9.png')
        default: return require('@images/aov/nhanvat0.png')
    }
}

export const converOrderToImages = (order: string) => {
    switch (order) {
        case 'big': return require('@images/aov/sp2.png')
        case 'small': return require('@images/aov/ad2.png')
        case '0': return require('@images/aov/nhanvat0.png')
        case '1': return require('@images/aov/nhanvat1.png')
        case '2': return require('@images/aov/nhanvat2.png')
        case '3': return require('@images/aov/nhanvat3.png')
        case '4': return require('@images/aov/nhanvat4.png')
        case '5': return require('@images/aov/nhanvat5.png')
        case '6': return require('@images/aov/nhanvat6.png')
        case '7': return require('@images/aov/nhanvat7.png')
        case '8': return require('@images/aov/nhanvat8.png')
        case '9': return require('@images/aov/nhanvat9.png')
        default: return require('@images/aov/sp2.png')
    }
}