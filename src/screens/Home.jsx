import React,{ useEffect, useState } from 'react';
import { 
    TextInput,
    StyleSheet,
    Button,
    Alert, 
    Image, 
    Platform,
    Text, 
    TouchableHighlight, 
    View,
} from 'react-native';


const Home = ({navigation}) => {


    return(
        <View>
            <Text>Home</Text>

            <Button title="Go to List Users" onPress={() => navigation.navigate('Utilisateurs')}/>

            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>

            <Button title="Go to About" onPress={() => navigation.navigate('Apropos')}/>
            
        </View>
    )
}

export default Home;