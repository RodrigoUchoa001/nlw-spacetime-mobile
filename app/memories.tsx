import { View, TouchableOpacity, ScrollView, Text, Image } from "react-native";
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
        <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
            <View className="flex-row px-8 mt-4 items-center justify-between">
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

            <View className="mt-6 space-y-10">
                <View className="space-y-4">
                    <View className="flex-row items-center gap-2">
                        <View className="h-px w-5 bg-gray-50"/>
                        <Text className="font-body text-xs text-gray-100">12 de abril, 2023</Text>
                    </View>
                    <View className="space-y-4 px-8">
                        <Image 
                            source={{uri: 'http://10.0.0.220:3333/uploads/f44d36f6-5f9a-4121-8e49-c8175fbf0314.jpg'}} 
                            className="aspect-video w-full rounded-lg"
                            alt=""
                        />
                        <Text className="font-body text-base leading-relaxed text-gray-100">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor voluptatem culpa cum reiciendis dignissimos fugit, magni sunt aliquam nulla tenetur impedit laborum iusto illo voluptas voluptatum corporis sed, ut explicabo.
                        </Text>
                        <Link href="/memories/id" asChild>
                            <TouchableOpacity className="flex-row items-center gap-2">
                                <Text className="font-body text=sm text-gray-200">Ler mais</Text>
                                <Icon name="arrow-right" size={16} color="#8cebb6"/>
                            </TouchableOpacity>
                        </Link>
                    </View>

                </View>

            </View>
        </ScrollView>
    )
}