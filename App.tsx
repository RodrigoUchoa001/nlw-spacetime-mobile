import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';

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
    <View className='bg-gray-900 flex-1 items-center justify-center'>
      <Text className='font-alt text-gray-50 text-5xl'>
        Rocketseat
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
