import {View, StyleSheet, Text} from 'react-native';

export default function Header(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}> My Todo </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        height : 80,
        width : '100%',
        paddingTop : 40,
        backgroundColor : 'coral'
    },
    title : {
        textAlign : 'center',
        fontSize : 20,
        color : 'white'
    }
})