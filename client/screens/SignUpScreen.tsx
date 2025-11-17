import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../components/Button';
import pb from '../lib/pocketbase';


export default function SignUpScreen({ navigation }: any ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSignUp = async () => {
        try {
            const data = {
                name,
                email,
                emailVisibility: true,
                password,
                passwordConfirm
            };
            const record = await pb.collection('users').create(data);
            Alert.alert('Konto skapat!', 'Du kan nu logga in');
            console.log('User created:', record);
        }
        catch (error: any) {
            console.error('Fungerade inte att skapa konto', error.data || error);
            Alert.alert('Fel vid skapande av konto', error.message);

        }
    };

    return (
       <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1,  justifyContent: 'center', alignItems: 'center', paddingVertical: 5, backgroundColor: "#F9F8F6" }}
             enableOnAndroid={true}
             extraScrollHeight={150}
             keyboardShouldPersistTaps="handled">
            <View className="flex-1 items-center justify-around bg-background">
                <View className="items-center">
                    <Text className="title mt-20 pb-10">Skapa ett konto</Text>
                </View>
                <View className="flex-1 w-full text-left">
                    <Text className="text font-bold pb-1 text-left">Namn:</Text>
                    <TextInput
                        placeholder="Namn"
                        value={name}
                        onChangeText={setName}
                        className="inputForm placeholder:text-gray-500"/>
                    <Text className="text font-bold pb-1 text-left">Email:</Text>
                    <TextInput
                        placeholder="E-postadress"
                        value={email}
                        onChangeText={setEmail}
                        className="inputForm placeholder:text-gray-500"/>
                    <Text className="text font-bold pb-1 text-left">Lösenord:</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="********"
                        className="inputForm placeholder:text-gray-500"/>
                    <Text className="text font-bold pb-1 text-left">Upprepa lösenord:</Text>
                    <TextInput
                        value={passwordConfirm}
                        onChangeText={setPasswordConfirm}
                        secureTextEntry
                        placeholder="********"
                        className="inputForm placeholder:text-gray-500 align-stretch"/>
                    <Button
                        title="Skapa konto"
                        onPress={handleSignUp} />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}
