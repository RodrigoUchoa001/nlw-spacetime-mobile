import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';

import blurBg from './src/assets/bg-blur.png';
import Stripes from './src/assets/stripes.svg';
import NLWLogo from './src/assets/slw-spacetime-logo.svg';
import { styled } from 'nativewind';

// o nativewind só consegue estilizar componentes do proprio react native
// com isso consigo estilizar o svg
const StyledStripes = styled(Stripes);

export default function App() {
  const [ hasLoadedFonts ] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  // se as fontes ainda n carregaram, n mostra nada, 
  // só mostra as coisas depois delas terem carregado
  if (!hasLoadedFonts){
    return null;
  }

  return (
    <ImageBackground 
      source={blurBg} 
      className='bg-gray-900 flex-1 relative px-8'
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className='absolute left-2'/>

      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />

        <View className='space-y-2'>
          <Text 
          className='text-center font-title text-2xl leading-tight text-gray-50'>
            Sua cápsula do tempo
          </Text>
          
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
          </Text>
        </View>

      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}
