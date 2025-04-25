import React,{useState} from 'react';
import { View, Text, Button,FlatList,StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const allProjects = [
    'Project_1', 'Project_2', 'Project_3', 'Project_4', 'Project_5',
    'Project_6', 'Project_7', 'Project_8', 'Project_9', 'Project_10',
  ];

  const [projects, setProjects] = useState<string[]>(allProjects.slice(0, 5)); // Load the first 5 items
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const loadMore = () => {
    const nextPage = page + 1;
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (startIndex < allProjects.length) {
      setProjects((prevProjects) => [
        ...prevProjects,
        ...allProjects.slice(startIndex, endIndex),
      ]);
      setPage(nextPage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Project</Text>
      <FlatList
        data={projects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.buttonContainer}>
            <Button
              title={item}
              onPress={() => navigation.navigate(item as keyof RootStackParamList)}
            />
          </View>
        )}
        onEndReached={loadMore} // Triggered when the user scrolls to the end
        onEndReachedThreshold={0.5} // Load more when 50% of the list's end is visible
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 5,
  },
});


   
export default HomeScreen;
