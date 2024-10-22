import { View, Text, Button, StyleSheet, TextInput, Modal, Image} from 'react-native'
import React from 'react'
import { useState } from 'react';

const GoalInput = ({onAddGoal,visible, onCancel}) => {
  // state to manage enteredtext in Inputbox
  const [enteredGoalText, setEnteredGoalText] = useState("");

   // fn to handle Input field
   function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

   // function to handle the Add Goal button click
  function addGoalHandler(){
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');  // Clear input after adding the goal
  }



  return (
    <Modal visible={visible} animationType='slide'>
    <View style={styles.inputContainer}>
    <Image style={styles.image} source={require('../assets/images/goal1.png')}/>
    <TextInput
      style={styles.textInput}
      placeholder="your course Goal"
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />
    <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#f31282'/>
        </View>
        <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc' />
        </View>
    </View>
  </View>
  </Modal>
  );
};

export default GoalInput

const styles = StyleSheet.create({

    inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    backgroundColor: '#311b6b',
    padding:16
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    color: '#120438',
    width: "100%",
    marginRight: 8,
    padding: 15,
    borderRadius: 7,
  },

  image: {
    width: 200,
    height: 200,
    margin: 20
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15

  },

  button: {
    width: '30%',
    marginHorizontal: 8,
    
  },


});