import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';

import blurBg from './src/assets/bg-blur.png';

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
      className='bg-gray-900 flex-1 relative'
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >

      <StatusBar style="light" />
    </ImageBackground>
  );
}
