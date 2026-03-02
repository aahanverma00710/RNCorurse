
import { StyleSheet, Text, View, Button ,TextInput, ScrollView,FlatList} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goadInputHandler(enteredText) {
     setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
      if(enteredGoalText.trim().length === 0) {
        console.warn('Please enter a valid goal');
        return;
      }
      setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  }


  return (
    <View style={styles.appConinter} >
       <View style={styles.inputContainer} >
          <TextInput style={styles.textInput} placeholder="Your course gole"
          onChangeText={goadInputHandler}/>
          <Button title="Add Goal" onPress={addGoalHandler}/>
       </View>
       <View style={styles.goalsContainer} >
         <FlatList data={courseGoals} 
         renderItem={(itemData) => {
          return (
            <View  style={styles.goalItem} >
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )
         }
        } keyExtractor={(item, index) => {return item.id}}/>
       </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    appConinter: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    textInput: {
      borderBottomColor: '#cccccc',
      borderWidth: 1,
      width: '70%',
      marginRight: 8,
      padding: 8,
    },
    
    goalsContainer: {
      flex: 8,
    },
    goalItem: {
      marginBottom: 8,
      padding: 8,
      backgroundColor: '#5e08cc',
      borderRadius: 4,
  
    },
    goalText: {
      color: '#ffffff',
    },
  
});