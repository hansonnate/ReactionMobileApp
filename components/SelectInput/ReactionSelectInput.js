/**
 *  Select Input component
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import { Text } from 'react-native';caret-down



//Internal imports
// import styles from 'Navbar.module.scss'

export const ReactionSelectInput = ({ placeholder, label, chosenList, chooseList, setChosen, setChooseList, chosenSingle, isMultiple, setChosenSingle }) => {

    const [changed, setChanged] = useState(false);
    const [showSelect, setShowSelect] = useState(false);
    // const [items, setItems] = useState(chooseList);


    function handleSelect(item) {
        if(isMultiple) {
            let chosen = [...chosenList];
            let items = [...chooseList];
            let index = items.findIndex(obj => obj.id === item.id);
            //arr.findIndex(obj => obj.email === email);
            items.splice(index, 1);
            setChooseList(items);
            chosen.push(item);
            setChosen(chosen);
            setChanged(true);
        } else {
            setChosenSingle(item.name);
            setShowSelect(false);
        }
    }

    function handleRemoveSelected(item) {
        let chosen = [...chosenList];
        let items = [...chooseList];
        let index = chosen.findIndex(obj => obj.id === item.id);
        chosen.splice(index, 1);
        items.push(item);
        setChosen(chosen);
        setChooseList(items);
        setChanged(true);
    }

    function handlePress() {
        if(!isMultiple) {
            setShowSelect(!showSelect)
        }
    }


    return (
        <Pressable onPress={() => handlePress()} style={styles.container}>
            {label && <Text style={styles.label}>{label.toUpperCase()} {changed && <Text style={styles.changedAlert}>changed</Text>}</Text>}
            {isMultiple && <View style={!changed ? styles.input : styles.inputChanged}>
                {chosenList && chosenList.length === 0 && <Text style={styles.text}>{placeholder ? placeholder : 'Choose Item...'}</Text>}
                {chosenList && chosenList.length > 0 && <ScrollView style={styles.chosenContainer} horizontal>{chosenList.map((item) => <View key={item.id} style={styles.chosenItem}><Text style={{ color: "#ED9146" }}>{item.name}</Text><Pressable onPress={() => handleRemoveSelected(item)}><IonIcons name='close' size={15} style={{ color: '#A3A4A8' }}></IonIcons></Pressable></View>)}</ScrollView>}
                {!chosenList && <Text style={styles.text}>Add List to Props</Text>}
                <Pressable onPress={() => setShowSelect(!showSelect)}><IonIcons name='caret-down' size={17} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
            </View>}
            {!isMultiple && <View style={!changed ? styles.input : styles.inputChanged}>
                {chosenSingle === '' && <Text style={styles.text}>{placeholder ? placeholder : 'Choose Item...'}</Text>}
                {!chosenSingle && <Text style={styles.text}>Add chosenSingle to Props</Text>}
                {chosenSingle != '' && <Text style={styles.text}>{chosenSingle}</Text>}
                <Pressable onPress={() => setShowSelect(!showSelect)}><IonIcons name='caret-down' size={17} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
            </View>}
            {showSelect && chooseList && chooseList.length > 0 && <ScrollView style={styles.chooseContainer}>{chooseList.map((item) => <Pressable key={item.id} onPress={() => handleSelect(item)}>{({ pressed }) => (<Text key={item.id} style={pressed ? styles.chooseItemPressed : styles.chooseItem}>{item.name}</Text>)}</Pressable>)}</ScrollView>}
            {showSelect && chooseList && chooseList.length === 0 && <ScrollView style={styles.chooseContainer}><Text>No more to choose from</Text></ScrollView>}
        </Pressable>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 5,
        
    },
    input: {
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
    },
    inputChanged: {
        // height: 40,
        // borderWidth: 2,
        // borderRadius: 5,
        // borderColor: "#F4E3C2",
        // padding: 10,
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#F4E3C2",
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
    },
    label: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontSize: 10,
        color: '#738C91',
        fontFamily: 'Gill Sans',
    },
    changedAlert: {
        color: '#F4E3C2',
    },
    chosenContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    chooseContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#E9E9E9',
        marginTop: 5,
    },
    chosenItem: {
        borderWidth: 1,
        // borderColor: '#ED9146',
        borderColor: "#F4E3C2",
        borderRadius: 5,
        backgroundColor: "#F4E3C2",
        marginEnd: 3,
        padding: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 18,
    },
    chooseItemPressed: {
        borderWidth: 1,
        // borderColor: '#ED9146',
        borderColor: "#E9E9E9",
        borderRadius: 5,
        backgroundColor: "#E9E9E9",
        marginEnd: 3,
        padding: 3,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
        // color: "#ED9146"
    },
    chooseItem: {
        borderWidth: 1,
        // backgroundColor: '#ED9146',
        borderColor: 'white',
        borderRadius: 5,
        marginEnd: 3,
        padding: 3,
        paddingLeft: 10,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
        // color: "#ED9146"
    },
    dropdown: {
        // position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#E9E9E9",
        // top: 50,
        // zIndex: 11,
    },
    text: {
        fontSize: 17,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
});
