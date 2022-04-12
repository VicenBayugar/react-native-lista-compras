import React from 'react'
import {TextInput, Button, StyleSheet} from "react-native";

const AddItem = (props) => {
    const {onChange, onAddItem, value} = props;
  return (
    <>
        <TextInput
        style={styles.input}
        placeholder="Escribe un producto..."
        value={value}
        onChangeText={onChange}
        />
        <Button onPress={onAddItem} title="Agregar" />
    </>
  )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 5,
        padding: 5,
      },
})

export default AddItem