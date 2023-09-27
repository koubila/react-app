import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import axios from "axios";
import Posts from './Posts';

const Details = ({navigation, route }) => {
    const [posts, setPosts] = useState([]) 
    const userId = route.params.userId
    console.log(userId)

    useEffect(() => {

        const fetchPosts = async () => {

            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts?userId="+userId)
                console.log(response)
                setPosts(response.data)
            }catch (err) {
                console.log(err)
            }
        }
        fetchPosts()

    },[])

    return(
        
        <ScrollView>
            <Text>User ID:  {userId}</Text>
            {
                posts.map((eachPost) => {
                    console.log(eachPost)
                    return(

                        <Posts post={eachPost}></Posts>
                    )
                    
                    
                })
            }
            
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </ScrollView>
    

    )
}

export default Details;