import { ImageSourcePropType } from "react-native";

export interface Character {
    id: number;
    image: ImageSourcePropType,
}

export const charaters: Character[] = [
    {
        id: 0,
        image: require('@images/aov/nhanvat0.png'),
    },
    {
        id: 1,
        image: require('@images/aov/nhanvat1.png'),
    },
    {
        id: 2,
        image: require('@images/aov/nhanvat2.png'),
    },
    {
        id: 3,
        image: require('@images/aov/nhanvat3.png'),
    },
    {
        id: 4,
        image: require('@images/aov/nhanvat4.png'),
    },
    {
        id: 5,
        image: require('@images/aov/nhanvat5.png'),
    },
    {
        id: 6,
        image: require('@images/aov/nhanvat6.png'),
    },
    {
        id: 7,
        image: require('@images/aov/nhanvat7.png'),
    },
    {
        id: 8,
        image: require('@images/aov/nhanvat8.png'),
    },
    {
        id: 9,
        image: require('@images/aov/nhanvat9.png'),
    },
]