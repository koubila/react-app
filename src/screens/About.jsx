import React from 'react';
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

const About = ({navigation}) => {

    return(
        <View>
            <Text>About</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default About;