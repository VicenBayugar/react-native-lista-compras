import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const ListItems = (props) => {
    const {itemList, onHandlerModal} = props;
  return (
    <FlatList
          data={itemList}
          renderItem={(data) => (
            <TouchableOpacity onPress={onHandlerModal.bind(this, data.item.id)}>
              <View style={styles.lista}>
                <Text style={styles.listaTexto}>
                  {data.item.id}){data.item.value}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
  )
}

const styles = StyleSheet.create({
    lista: {
        marginTop: 15,
      },
      listaTexto: {
        fontSize: 18,
      },
})

export default ListItems;