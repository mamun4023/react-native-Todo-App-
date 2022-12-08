
import { useRef, useState } from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export default function AddTodo({AddTodo}){
    
    const [text, setText] = useState('');
    const todoInput = useRef();

    const SubmitHandler = ()=>{
        AddTodo(text)
        todoInput.current.clear();
    }
    
    return(
        <View>
            <TextInput
                style = {styles.input}
                placeholder='new todo...'
                ref={todoInput}
                onChangeText={(val)=>setText(val)}
                
            />
            <Button 
                title='Add Todo'  
                color= 'coral'
                onPress={SubmitHandler}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input : {
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
    }
})