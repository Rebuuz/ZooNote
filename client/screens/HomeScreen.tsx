import React from "react";
import {View, Text } from "react-native";
import { useAuth } from "../lib/AuthContext";
import Feather from '@expo/vector-icons/Feather';
import Button from "components/Button";

export default function Home() {
    const { user } = useAuth();

    return (
        <View className="flex-1 bg-background pt-20">
            <View className="flex-row justify-between">
                <View className="flex-col">
                    <Text className="mdTitle px-5">Välkommen</Text>
                    <Text className="mdTitle px-5">{user?.name}</Text>
                </View>
                //fixa en meny med react native popup menu 
                <Button>
                    <Feather className="mr-5" name="settings" size={30} color="#8ed5e8" />
                </Button>  
            </View>
        </View>
    );
}
