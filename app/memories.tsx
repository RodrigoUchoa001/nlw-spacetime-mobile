import { View, TouchableOpacity, ScrollView } from "react-native";
import NLWLogo from '../src/assets/slw-spacetime-logo.svg';
import { Link, useRouter } from "expo-router";
import Icon from '@expo/vector-icons/Feather';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as SecureStore from 'expo-secure-store';

export default function NewMemory(){
    const { bottom, top } = useSafeAreaInsets(); //pra colocar safearea na primeira view
    const router = useRouter();

    async function signOut(){
        await SecureStore.deleteItemAsync('token');

        router.push('/');
    }

    return (
        <ScrollView className="flex-1 px-8" contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
            <View className="flex-row mt-4 items-center justify-between">
                <NLWLogo />

                <TouchableOpacity onPress={signOut} className="h-10 w-10 items-center justify-center rounded-full bg-red-500">
                    <Icon name="log-out" size={16} color='#000'/>
                </TouchableOpacity>

                <View className="flex-row gap-2">
                    <Link href='/new' asChild>
                        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
                            <Icon name="plus" size={16} color='#000'/>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}