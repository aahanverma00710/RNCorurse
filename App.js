
import { StyleSheet, Text, View, Button ,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appConinter} >
       <View style={styles.inputContainer} >
          <TextInput style={styles.textInput} placeholder="Your course gole"/>
          <Button title="Add Goal" />
       </View>
       <View>
          <Text>List of goals</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appConinter: {
      padding: 50,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textInput: {
      borderBottomColor: '#cccccc',
      borderWidth: 1,
      width: '80%',
      marginRight: 8,
      padding: 8,
    },
  
});