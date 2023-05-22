// o nativewind só consegue estilizar componentes do proprio react native
// com isso consigo estilizar o svg
const StyledStripes = styled(Stripes);

import { styled } from 'nativewind';
import blurBg from '../src/assets/bg-blur.png';
import Stripes from '../src/assets/stripes.svg';
import { ImageBackground } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout(){
    const [ hasLoadedFonts ] = useFonts({
        Roboto_400Regular, 
        Roboto_700Bold,
        BaiJamjuree_700Bold
    });

    // se as fontes ainda n carregaram, n mostra nada, 
    // só mostra as coisas depois delas terem carregado
    if (!hasLoadedFonts){
        return <SplashScreen />;
    }

    return (
        <ImageBackground 
        source={blurBg} 
        className='bg-gray-900 flex-1 relative'
        imageStyle={{ position: 'absolute', left: '-100%' }}
        >
            <StyledStripes className='absolute left-2'/>
            <StatusBar style="light" />

            

        </ImageBackground>


    );
}