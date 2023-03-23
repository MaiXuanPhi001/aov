import {Platform} from 'react-native';

export const theme = {
  colors: {
    text: '#242424',
    background: '#f5f5f5',
    orange: '#FE930F',
    orangeBol: '#FF6500',
    lightGray: '#A5A5A5',
    gray: '#424242',
    gray1: '#fbfafb',
    smoke: '#E6E6E6',
    white: '#ffffff',
    black: '#000000',
    placeholder: '#707070',
    blue: '#0d5cb6',
    blue2: '#0a6dd9',
    blue3: '#91d5ff',
    blue4: '#e6f7ff',
    red: '#E83625',
    red2: '#cf1421',
    red3: '#ffaba6',
    red4: '#fff1f0',
    gradient: ['#F04831', '#E73222', '#D9100C'],
    green: '#088A08',
    green2: '#389e0e',
    green4: '#d8f3c1',
    green5: '#f6ffec',
    lightGreen: '#29bb89',
    lightGreen2: '#30D878',
    green3: '#5cba47',
    yellow: '#FFDF00',
    dark: '#00000060',
    bg_opacity: '#00000020',
    gray2: '#9A9A9A',
    darkRed: '#BF0404',
    darkBlue: '#304FDF',
    lightRed: '#FA634D',
    blueLight2: '#40BFFF',
    btnColor: ['#002366', '#002366', '#002366'],
    lightBlue: '#3E79F7',
    lightBlue2: '#32CFCB',
    orangeTranparent: 'rgba(245, 155,0,0.2)',
    gray3: '#E0E0E0',
    gray4: '#f5f5f5',
    gray5: '#fafafa',
    backgroundOpacity: 'rgba(0, 0, 0, 0.4)',
    blueTitle: '#092C4C',
    orange2: '#F95B00',
    primary: '#50C2C9',
    grayBorderInput: '#C2C2C2',
    gayProgressBar: '#F4F4F4',
    aqua: 'aqua',
    btnLogin: '#272A38',
    borderStatis: '#4B4E5B',
    headerTable: '#171A24',
    greenBtnBuy: '#1BBD61',
    redBold: '#d20f0d',
    textRed: '#fb4e4f',
    grayTab: '#f5f5f5',
    red_oclock: '#FF0000',
    purple: '#db5fd1',
    yellowInfo: '#fffbe6',
    big: '#ffc04a',
    small: '#61adff',
    green6: '#f6ffec',
  },

  fonts: {
    fontWeight: {
      heavy: '700',
      bold: 'bold',
      semibold: Platform.OS === 'android' ? 'bold' : '600',
      regular: 'normal',
      light: '300',
    },
    fontFamily: {
      bold: 'Lato-Bold',
      medium: 'Lato-Medium',
      regular: 'Lato-Regular',
      semibold: 'Lato-Semibold',
    },
  },
};
