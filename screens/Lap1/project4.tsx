import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Project_4'>;
};

const project4: React.FC<Props> = ({ navigation }) => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
      <Text>Click {count} times</Text>
      <Button
        title="Click Click"
        onPress={() => setCount(count + 1)}/>

<Button
        title="Reset"
        onPress={() => setCount(0)}
        color="red" // Optional: Add color to differentiate the reset button
      />
    </View>
  );
};

export default project4;
