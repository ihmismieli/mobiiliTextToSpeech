import { useState } from "react";
import { TextInput, View, Text, Pressable, StyleSheet } from "react-native";
import * as Speech from 'expo-speech';
import SegmentedControl from '@react-native-segmented-control/segmented-control';



export default function TextToSpeech() {

    const [text, setText] = useState("");

    const [spoken, setSpoken] = useState("");

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [languages, setLanguages] = useState(["English", "Finnish", "Swedish", "Spanish"])

    const languageOptions = ['en', 'fi', 'sv', 'es']

    const speak = () => {
        setSpoken(text);
        const thingToSay = text;
        const language = languageOptions[selectedIndex];
        Speech.speak(thingToSay, {
            language: language,
        });
        setText("");
    }

    return (

        <View style={styles.container}>
            <SegmentedControl
                values={languages}
                selectedIndex={selectedIndex}
                style={styles.segmentedControl}
                onChange={(event) => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
            />
            <TextInput
                placeholder="Type something here..."
                onChangeText={text => setText(text)}
                value={text}
                style={styles.textInput}
            />
            <Pressable onPress={speak} style={styles.button}>
                <Text style={styles.text}>SAY IT</Text>
            </Pressable>
            <Text style={styles.spoken}>{spoken}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
        backgroundColor: '#403F4C',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%' //tarvitaan, jos haluaa valikon esiin
    },
    segmentedControl: {
        height: 40,
        width: '80%',
        backgroundColor: '#FFF1D0',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    textInput: {
        margin: 20,
        borderColor: 'black',
        paddingHorizontal: 50,
        borderWidth: 1,
        borderRadius: 10,
    },
    spoken: {
        fontSize:20,
        marginTop: 40,
    }

});