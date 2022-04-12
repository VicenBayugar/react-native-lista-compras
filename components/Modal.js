import {Modal, StyleSheet, View, Text, Button} from 'react-native'
import React, { useState } from "react";

const ModalItem = (props) => {
    const {visible, onDelete, item, onCancel} = props;
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
        <View style={styles.modalCentrado}>
          <View style={styles.modalVista}>
            <View style={styles.tituloModal}>
              <Text style={styles.tituloText}>Eliminar producto</Text>
              <Text style={styles.tituloText} onPress={onCancel.bind(this)}>
                X
              </Text>
            </View>
            <View style={styles.cuerpoModal}>
              <Text style={styles.cuerpoText}>
                ¿Está seguro que desea eliminar {item.value}?
              </Text>
            </View>
            <View style={styles.botonModal}>
              <Button
                onPress={onDelete.bind(this, item.id)}
                title="Confirmar"
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    modalCentrado: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalVista: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 0.7,
  },
  tituloModal: {
    flex: 2.3,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    backgroundColor: "#777777",
    flexDirection: "row",
  },
  cuerpoModal: {
    flex: 7.2,

    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  botonModal: {
    flex: 2.5,
  },
  tituloText: {
    color: "white",
    fontSize: 17,
  },
  cuerpoText: {
    fontSize: 18,
  },})

export default ModalItem;