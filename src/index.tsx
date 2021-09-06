import React, { Component } from "react";
import { Alert, Button, Modal, Platform, StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';

export class LiveTryon extends Component {
  state = {
    modalVisible: false,
    pId: '',
    cId: ''
  };
  openModelForproduct = (pId: string, cId: string) => {
    this.setState({ modalVisible: true, pId: pId, cId: cId});
  }
  setModalVisible = (visible: any) => {
    console.log(visible);
    this.setState({ modalVisible: visible });
  }
  
  
  render() {
      const { modalVisible } = this.state;
      return (
        <View style={styles2.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setModalVisible(!modalVisible);
            }}
          >
             <WebView style={styles.fullBox}
             allowsInlineMediaPlayback={true}
             source={{ uri: `https://tryon.ammazza.me/?client_id=${this.state.cId}&product_id=${this.state.pId}${Platform.OS === 'ios' ? '?is_ios=true' : ''}` }} />
            <Button
  onPress={() => this.setModalVisible(false)}
  title="Close"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            
              
          </Modal>
          
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  fullBox: {

  }
});


const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
