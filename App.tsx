import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';

import blurBg from './src/assets/bg-blur.png';
import Stripes from './src/assets/stripes.svg';
import NLWLogo from './src/assets/slw-spacetime-logo.svg';
import { styled } from 'nativewind';
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session';
import { useEffect } from 'react';
import { api } from './src/lib/api';

// o nativewind só consegue estilizar componentes do proprio react native
// com isso consigo estilizar o svg
const StyledStripes = styled(Stripes);

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/824bf518d887965f19bb',
};

export default function App() {
  const [ hasLoadedFonts ] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '824bf518d887965f19bb',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime',
      }),
    },
    discovery,
  );

  useEffect(() => {
    // console.log(makeRedirectUri({
    //   scheme: 'nlwspacetime',
    // }));

    if (response?.type === 'success') {
      const { code } = response.params;

      api.post('/register', {
        code,
      }).then(res => {
        const { token } = res.data;

        SecureStore.setItemAsync('token', token); //salvando o token com nome "token"
      }).catch(err => {
        console.error(err);
      })
    }
  }, [response]);

  // se as fontes ainda n carregaram, n mostra nada, 
  // só mostra as coisas depois delas terem carregado
  if (!hasLoadedFonts){
    return null;
  }

  return (
    <ImageBackground 
      source={blurBg} 
      className='bg-gray-900 flex-1 relative px-8 py-10'
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

        <TouchableOpacity
          activeOpacity={0.7}
          className='rounded-full bg-green-500 px-5 py-2'
          onPress={() => signInWithGithub()}
        >
          <Text className='font-alt text-sm uppercase text-black'>Cadastrar Lembrança</Text>

        </TouchableOpacity>
      </View>

      <Text className='text-center font-body text-sm leading-relaxed text-gray-200'>
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style="light" />
    </ImageBackground>
  );
}
