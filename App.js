import React from 'react'; 
import {View, Text, SafeAreaView, Button} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

// global olacak state'leri tanımlayalım
// global state'lerin başlangıç değerleri yazılır 
const initialState ={
  counter: 0,
};

// REDUCERS
function reducers(state, action){
  switch(action.type){
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
      //break;

    default:
      return state;
  }
}

export default () => {
  return(
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={{flex:1}}>
         <First/>
        <Second/>
     </SafeAreaView>
    </Provider>
  );
}

//First.js
const First = () => {
const counter = useSelector(selector => selector.counter);
const dispatch = useDispatch() //burada parantez içine yazılan değer action'a karşılık gelir

const handleUpdate = () => {
  dispatch({type: 'UPDATE_COUNTER'});
};

  return(
    <View style={{flex:1, backgroundColor:'#eceff1'}}>
      <Text style={{fontSize:  30}}>First: {counter}</Text>
      <Button title='Update' onPress={handleUpdate}/>
    </View>
  );
}

//Second.js
const Second = () => {
  const counter = useSelector(selector => selector.counter);

  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:  30}}>Second: {counter}</Text>
    </View>
  );
}