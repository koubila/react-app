import React from "react";
import { StyleSheet, Text, View, ViewBase } from "react-native/types";

export default function Counter({ defVal = 10, label}) {
    const [count, setCount] = useState(11)
    const [hasClick, setHasClick] = useState(false)
    return (
        <View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: "red",
    }
})