import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

function ToDoForm({ onAdd, existingTasks }) {
  const [taskText, setTaskText] = React.useState('');
  
  const handleAddPressed = () => {
    // Convert new task and existing tasks to lowercase for case-insensitive comparison
    const lowerCaseTaskText = taskText.toLowerCase();

    if (existingTasks.map(task => task.toLowerCase()).includes(lowerCaseTaskText)) {
      Alert.alert('Duplicate Task', 'This task already exists. Please enter a different task.');
      return;
    }

    // Add the task
    onAdd(taskText);

     // Clear the input after adding the task
     setTaskText('');
  }

    return (
    <>
   
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" onPress={handleAddPressed}/>
      </View>
      
    </>
    );
  }

  const styles = StyleSheet.create({
    
    form: {
      flexDirection: 'row',
      backgroundColor: 'skyblue',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
   
  });

export default ToDoForm;