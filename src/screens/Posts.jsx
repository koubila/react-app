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
    ScrollView,

  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Posts = ({post} ) => {
    const navigation = useNavigation();
    return(
   

            <View>
                <Text>{post.id}</Text>
                <Text>{post.title}</Text>
                <Text>{post.body}</Text>
            </View>
     
    
        
    )
}

export default Posts;