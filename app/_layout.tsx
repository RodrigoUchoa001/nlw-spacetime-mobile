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
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';

export default function Layout(){
    const [ isUserAuthenticated, setIUserAuthenticated ] = useState< null | boolean >(null);

    useEffect(() => {
        SecureStore.getItemAsync('token').then(token => {
            console.log(!!token);
            setIUserAuthenticated(!!token); //o '!!' converte pra boolean. Se o token existir, converte pra true; se ñ converte pra false
        });
    }, []); //quando n passo nada dentro do array, o useEffect é executado uma vez só

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

            <Stack screenOptions={
                { 
                    headerShown: false, // pra n aparecer a tab no topo
                    contentStyle: {
                        backgroundColor: 'transparent',
                    },
                    animation: 'fade', //animação ao trocar de tela
                }
            }>
                <Stack.Screen name='index' redirect={isUserAuthenticated}/> {/* o nome das rotas tem q ser o msm dos arquivos na pasta app */}
                <Stack.Screen name='memories'/> {/* o redirect acima faz com q pule pra próxima tela (essa de memories) caso o for passado lá dentro seja true */}
                <Stack.Screen name='new'/> 
            </Stack>

        </ImageBackground>


    );
}