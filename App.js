import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {

const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(1);
const [gender, setGender] = useState('male');
const [time, setTime] = useState(1);
const [promilles, setPromilles] = useState(0);

const amountOfBottles = Array();
amountOfBottles.push({label: '1', value: 1});
amountOfBottles.push({label: '2', value: 2});
amountOfBottles.push({label: '3', value: 3});
amountOfBottles.push({label: '4', value: 4});
amountOfBottles.push({label: '5', value: 5});
amountOfBottles.push({label: '6', value: 6});
amountOfBottles.push({label: '7', value: 7});
amountOfBottles.push({label: '8', value: 8});
amountOfBottles.push({label: '9', value: 9});
amountOfBottles.push({label: '10', value: 10});
amountOfBottles.push({label: '11', value: 11});
amountOfBottles.push({label: '12', value: 12});
amountOfBottles.push({label: '13', value: 13});
amountOfBottles.push({label: '14', value: 14});
amountOfBottles.push({label: '15', value: 15});
amountOfBottles.push({label: '16', value: 16});
amountOfBottles.push({label: '17', value: 17});
amountOfBottles.push({label: '18', value: 18});
amountOfBottles.push({label: '19', value: 19});
amountOfBottles.push({label: '20', value: 20});

const times = Array();
times.push({label: '1', value: 1});
times.push({label: '2', value: 2});
times.push({label: '3', value: 3});
times.push({label: '4', value: 4});
times.push({label: '5', value: 5});
times.push({label: '6', value: 6});
times.push({label: '7', value: 7});
times.push({label: '8', value: 8});
times.push({label: '9', value: 9});
times.push({label: '10', value: 10});
times.push({label: '11', value: 11});
times.push({label: '12', value: 12});
times.push({label: '13', value: 13});
times.push({label: '14', value: 14});
times.push({label: '15', value: 15});
times.push({label: '16', value: 16});
times.push({label: '17', value: 17});
times.push({label: '18', value: 18});
times.push({label: '19', value: 19});
times.push({label: '20', value: 20});
times.push({label: '21', value: 21});
times.push({label: '22', value: 22});
times.push({label: '23', value: 23});
times.push({label: '24', value: 24});

const genders = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
]

function calculate() {
  let result = 0;
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsLeft = grams-burning * time;
  if (gender === 'male') {
    result = gramsLeft / (weight * 0.7)
  } else {
    result = gramsLeft / (weight * 0.6);
  } 
  if (result < 0) {
    result = 0
  }
  setPromilles(result);
}



  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text)}
          placeholder="in kilograms"
          keyboardType='numeric'>
        </TextInput>
      </View>
      <View style={styles.field}>
        <Text>Bottles</Text>
        <Picker style={styles.bottles}
        onValueChange={(itemValue) => setBottles(itemValue)}
        selectedValue={bottles}
        >
          {amountOfBottles.map((bottles,index) => (
            <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
          ))
          }
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Time</Text>
        <Picker style={styles.time}
        onValueChange={(itemValue) => setTime(itemValue)}
        selectedValue={time}
        >
          {times.map((time,index) => (
            <Picker.Item key={index} label={time.label} value={time.value}/>
          ))
          }
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
        style={styles.radio}
        buttonSize = {10}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}
        />
        <Text>{promilles.toFixed(2)}</Text>
      </View>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  field: {
    margin: 10
  },
  input: {
    marginLeft: 10
  },
  radio: {
    marginTop: 10,
    marginBottom: 10
  }
});
