import {
  StyleSheet,
  View,
  Text
} from "react-native";
import React, { useState } from "react";
import ModalItem from "./components/Modal"
import AddItem from "./components/AddItem";
import ListItems from "./components/ListItems";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (t) => setTextItem(t);

  const addItem = () => {
    if (textItem !== "") {
      setItemList((currentItems) => [
        ...currentItems,
        { id: counter, value: textItem },
      ]);
      setTextItem("");
      setCounter(counter + 1);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onHandlerModal = (id) => {
    setItemSelected(itemList.filter((item) => item.id === id)[0]);
    setModalVisible(true);
  };

  const onHandlerDelete = (id) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Lista de compras</Text>
      </View>
      <View style={styles.body}>
        <AddItem 
          onChange={onHandlerChangeItem}
          onAddItem={addItem}
          value={textItem}/>
        <ListItems itemList={itemList} onHandlerModal={onHandlerModal}/>
      </View>
      <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: "#31313A",
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    titulo: {
      fontSize: 25,
      color: "white",
    },
    body: {
      flex: 10,
      padding: 30,
    },
  });