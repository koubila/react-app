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
import axios from "axios";
import User from '../components/User';

const Users = ({navigation}, children) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // GET REQUEST
        axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
          //console.log(data.data);
        
          // SETTER
          setUsers(data.data)

        });

    }, []);

    return(
        <>
        <View>
            <Text>Liste des utilisateurs :</Text>
            {
                // GETTER
               users.map((eachUser) => {
                    return (
                 
                        <User user={eachUser} />

                    )   
                })
            }
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
        </>
    )
}

export default Users;