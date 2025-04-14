import { TouchableOpacity, Text } from 'react-native';

const MyButton = ({ title, onPress,style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}   >
      <Text style={{ color: 'White', textAlign: 'center',  backgroundColor: 'orange', fontWeight:'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
}

export default MyButton;