import React from 'react';
import { View, Text, Button } from 'react-native';
import { Image } from 'react-native';

export default function LoginScreen({ navigation }: any ) {
  return (
    <View className="flex-1 flex-shrink-0 justify-center items-center bg-background">
    <Image
        source={require('../assets/zoonote_logo1-nbg.png')}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />
      <Text className="text-4xl font-bold pb-20 text-primary uppercase">Logga in</Text>
      <Text>Välkommen till ZooNote App!</Text> 
      <Button
        title="Logga in"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

// const styles = StyleSheet.create({

//     title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     },
    
//     text: {
//     fontSize: 16,
//     marginBottom: 20,
//     }
// });