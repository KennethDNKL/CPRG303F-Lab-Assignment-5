import React, {useState} from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList'; 
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';


function HomeScreen({navigation}) {

  const [tasks, setTasks] = useState([
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]
  );

  /**const addTask = (newTask) => {
    // Add task
    //setTasks(tasks.concat(newTask));
    setTasks([...tasks, newTask]);
  }*/

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks= {tasks}/>   
        <ToDoForm onAdd = {addTask} existingTasks={tasks}/>
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
      />   
      </SafeAreaView>
      
     </MainLayout>
  );
}

export default HomeScreen;
