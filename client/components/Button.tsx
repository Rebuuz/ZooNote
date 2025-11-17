import { Pressable, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }:ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-primary pb-2 pt-2 px-10 rounded-xl items-center active:bg-white active:border active:border-primary"
    >
      <Text className="text-white text-base font-semibold active:text-primary">{title}</Text>
    </Pressable>
  );
}