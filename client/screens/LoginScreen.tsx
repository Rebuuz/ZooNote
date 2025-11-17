import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import Button from '../components/Button'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth } from 'lib/AuthContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigation';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,'Login'>;

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => { 
    const res = await login(email, password);
    if (res.success) {
      console.log('Inloggad användare:', res);
    } else {
      setError(res.error || 'Fel vid inloggning');
      console.log('Inloggning misslyckades:', res.error);
    }
  };

  return (
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1,  justifyContent: 'center', alignItems: 'center', paddingVertical: 5, backgroundColor: "#F9F8F6" }}
      enableOnAndroid={true}
      extraScrollHeight={150}
      keyboardShouldPersistTaps="handled">
          <View className="flex-2 items-center justify-around bg-background">
            <Image
                source={require('../assets/images/zoonote_logo1-nbg.png')}
                style={{ width: 300, height: 300, marginBottom: 0, marginTop: 0 }}
              />
              <Text className="title uppercase pb-2">Logga in</Text>
              <Text className='subtitle pb-10'>Välkommen till ZooNote App</Text> 
              <View className="w-full items-start">
                <Text className="text mb-2 font-bold text-gray-800">E-post:</Text>
                <TextInput
                  placeholder="E-postadress"
                  className="inputForm placeholder:text-gray-500 align-stretch"
                  value={email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={setEmail}/>
                <Text className="text mb-2 font-bold text-gray-800">Lösenord:</Text>
                <TextInput
                  placeholder="********"
                  className="inputForm placeholder:text-gray-500"
                  value={password}
                  secureTextEntry
                  onChangeText={setPassword}/>
                  {error && <Text className='text-sm text-red-600'>{error}</Text>}
              </View>
            <Button
              title="Logga in"
              onPress={handleLogin} />
            <Text className="text-sm text-gray-600 mt-4 mb-5">Har du inget konto? <Text className="text-primary font-bold" onPress={() => navigation.navigate('SignUp')}>Registrera dig</Text></Text>
          </View>
        </KeyboardAwareScrollView>
  );
}