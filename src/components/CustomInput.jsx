import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ViewBase, TextInput, Button } from "react-native";

export default function CustomInput() {
    // exercice 1.1 et 1.2
    /*const [keyword, setText] = useState("bienvenue")
    const [fontSize, setFontSize] = useState(10)*/

    // exercice 1.3
    const [state, setState] = useState({keyword:'', fontSize:10, error:""})

    // 1.3 créer une fonction 
   
    function handleSetState(key, value){
        setState({
            // récupère ce que contient obj state
            ...state,
            // modifie la clé par valeur en parametre
            [key] : value
        });
        /*clearTimeout(time)
        time = setTimeout(() => {
            console.log("Hello");
            displayEroor;
        }, 3000)
        */
    }

    // exercice 2.1, 2.2 et 2.3
    // le useEffet se lance a chaque fois que sa dépendence est modifié "state.keyword"
    // lorsque nest plus modifié alors 
    const [time, setTime] = useState(0);
    useEffect(() => {

        clearTimeout(time);
        setTime(setTimeout(() => {
            console.log("in settimeout")
            if (state.keyword === "TEST") {

                
                handleSetState("error","3 seconds later ! "+Math.floor(Math.random() * 10))
    
            }else{

                handleSetState("error","")

            }
        }, 3000))

    }, [state.keyword]);

    return (
        <>
            {// 1.1, 1.2
            /*<View style={styles.container}>
                <TextInput onChangeText={setText} value={keyword} style={{fontSize:fontSize}}></TextInput>
                <View style={styles.buttons}>
                    <Button title="+" onPress={() => setFontSize(fontSize + 3)} ></Button>
                    <Button title="-" onPress={() => setFontSize(fontSize - 3)} ></Button>
                </View> 
            </View>*/ 
            }

            {// 1.3
            <View style={styles.container}>
                <TextInput onChangeText={(t) => handleSetState("keyword", t) } value={state.keyword} style={{fontSize:state.fontSize}}></TextInput>
                <View style={styles.buttons}>

                    <Button title="++" onPress={() => handleSetState("fontSize",state.fontSize+3) } style={{backgroundColor:"black",borderWidth:3,borderColor:"red"}}></Button>
                    <Button title="--" onPress={() => handleSetState("fontSize",state.fontSize-3) } style={{color:"red"}}></Button>

                </View> 
            </View>
            }
            
            <Text style={{color:"red"}}>{state.error}</Text>
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
})