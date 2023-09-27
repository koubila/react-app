import React, { useEffect, useState } from "react";
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
import { useNavigation } from '@react-navigation/native';

const User = ({user} ) => {
    const navigation = useNavigation();
    return(

    <View>
        <Text>{user.id}</Text>
        <Text>{user.name}</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details', {userId:user.id })}/>
    </View>
        
    )
}

export default User;