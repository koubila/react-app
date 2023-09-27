import React from "react";
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

export default function Checkboxes() {

    const onPress = () => console.log("PRESS");

    return (
        <>
            <View style={styles.container}>
            <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
            /><Text>Select All</Text>
            </View>

            <View style={styles.container}>
            <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
            /><Text>Checkbox One</Text>
            </View>

            <View style={styles.container}>
            <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
            /><Text>Checkbox Two</Text>
            </View>

            <View style={styles.container}>
            <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
            /><Text>Checkbox Three</Text>
            </View>

            <View style={styles.container}>
            <Button
            title=" "
            onPress={() => Alert.alert('Simple Button pressed')}
            /><Text>Checkbox Four</Text>
            </View>

            <TouchableHighlight  onPress={onPress} underlayColor="transparent"  style={{ marginVertical: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1 }}>
                    <View style={{padding: 5, backgroundColor: "grey"}}>
                        {
                            // checked variable
                            (false) ? (
                            
                                <Image source={require('../../assets/tick.png')} style={styles.checkboxTickImg} />
                          )
                            :
                            (<View style={styles.uncheckedCheckbox} />)
                        }
                    </View>
                    <Text>
                        Check
                    </Text>
                </View>

            </TouchableHighlight>

            <TouchableHighlight  onPress={onPress} underlayColor="transparent"  style={{ marginVertical: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1 }}>
                    <View style={{padding: 14, width: 15, height: 15, backgroundColor: "grey"}}>
                        {
                            // checked variable
                            (false) ? (
                            <View style={styles.selectedUI}> 
                                <Image source={require('../../assets/tick.png')} style={styles.checkboxTickImg} />
                            </View>)
                            :
                            (<View style={styles.uncheckedCheckbox} />)
                        }
                    </View>
                    <Text>
                        Check
                    </Text>
                </View>
                
            </TouchableHighlight>

        <TouchableHighlight  onPress={onPress} underlayColor="transparent"  style={{ marginVertical: 20 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1 }}>
                <View style={{padding: 14, width: 15, height: 15, backgroundColor: "grey"}}>
                    {
                        // checked variable
                        (false) ? (
                        <View style={styles.selectedUI}> 
                            <Image source={require('../../assets/tick.png')} style={styles.checkboxTickImg} />
                        </View>)
                        :
                        (<View style={styles.uncheckedCheckbox} />)
                    }
                </View>
                <Text>
                    Check
                </Text>
            </View>

        </TouchableHighlight>
            
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:.1,
        flexDirection:"row",
        borderWidth: 2,
        borderColor: "red",
        padding: 5,
        borderRadius: 15,
        justifyContent:"space-between"

    },
    buttons: {
        marginLeft:50,
        flexDirection:"row",
        

    },
    checkboxTickImg:{
       aspectRatio:1,
       height: 15,
    }
})