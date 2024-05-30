import {Image, Text, VStack, Button, Link} from 'native-base';
import Logo from '../src/assets/logo.png'
import Background from '../src/assets/BackGroundInicial.png'
import { ImageBackground, StyleSheet } from 'react-native';

export default function Principal(){
    return(
        <ImageBackground source={Background} resizeMode='cover' style={styles.image}>
        <VStack flex={1} alignItems={'center'} p={5}>
                <Image source={Logo} alt='logo'mt={235}/>
                <Text fontSize="3xl" fontWeight='bold' color='#fff' top={2}>
                 Wolves Bookstore
                </Text>
                <Button
                size='lg'
                variant='unstyled'
                w='100%'
                bg='yellow.800'
                mt='50'
                borderRadius='lg'
                >
                    Entrar
                </Button>
        </VStack>
        </ImageBackground>
    );   
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
    }
  });