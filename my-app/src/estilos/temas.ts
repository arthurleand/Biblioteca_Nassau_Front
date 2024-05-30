import{extendTheme} from 'native-base';

export const TEMAS = extendTheme({
    colors: {
        yellow:{
            800: '#DB8606'
        },
        white:'fff',
        black:'#000'
    },
    fontSizes:{
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    },
    background: require('../assets/BackGroundInicial.png')
});