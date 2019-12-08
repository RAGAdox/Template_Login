import React from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";
import CButton from './CButton'
class CPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  testPopup(){
      console.log('This is CPopup function');
      
  }
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }
  render() {
    return (
      <Modal
        style={{justifyContent:'center'}}
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed");
        }}
      >
        <View style={{position:"relative",top:35+'%',alignItems:"center",backgroundColor:'#fc0012',borderColor:'#0f1243',marginLeft:2.5+'%',marginRight:2.5+'%',borderRadius:10,borderWidth:2,padding:5,height:30+'%',width:95+'%'}}>
          <Text style={{flex:1}}>Hiii RAGAdox</Text>
          <TouchableHighlight  style={{flex:1}}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
          <CButton text={"Ok"}></CButton>
        </View>
      </Modal>
    );
  }
}
export default CPopup