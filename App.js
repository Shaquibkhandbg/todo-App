import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, FlatList, StatusBar } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
 

  // state to manage courseGoals(array of task)
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  // function to control modal view
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  // close the model
   function endAddGoalHandler(){
    setModalIsVisible(false);
   }

  // fn to handle Add Goal button
  function addGoalHandler(enteredGoalText) {
    //  setCourseGoals([...courseGoals, enteredGoalText])
    setCourseGoals((currentCourseGoals) => [...courseGoals, 
    // {text: enteredGoalText, key: Math.random().toString()},
    {text: enteredGoalText, id: Math.random().toString()},

    ]); // optimised way
    
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return  currentCourseGoals.filter((goal)=> goal.id !== id);
    } )
    
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
    <Button title="Add New Goal" color='#5e0acc' onPress={startAddGoalHandler}/>
     <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      {/* displaying list of goals */}
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={
          (itemData) => {
            return( 
            <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}/>
            )
          }
        } 
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={true} overScrollMode='true'/>    
         
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    
  },

  

  goalsContainer: {
    flex: 5,
  },

  
});
