import { useState } from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App(){
  const [todo , setTodo] = useState([
    {
      id : 1,
      name : "Tohid"
    },
    {
      id : 2,
      name : "Hasan"
    },
    {
      id : 3,
      name : "Emam"
    }
  ]);

  const pressHandler = (id)=>{
    setTodo(prev =>{
      return prev.filter(item => item.id != id)
    })
  }

  const AddTodoHandler = (text)=>{
    setTodo(prev =>{
      return [
       
        {name : text, id : Math.random().toString()},
        ...prev
      ]
    })
  }

  return(
    <View style = {styles.container}>
      <Header />
      <View  style = {styles.content}>
        <AddTodo  AddTodo = {AddTodoHandler}/>
        <View style = {styles.list}>
          <FlatList
            keyExtractor={(item)=>item.id}
            data={todo}
            renderItem = {({item})=>(
              <TodoItem item = {item}  pressHandler = {pressHandler}/>
            )}    
          />
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff'
  },
  content : {
    padding : 40
  },
  list : {
    marginTop : 20
  }
})