import React from "react"
import {Text,View,TouchableOpacity} from "react-native";
import Constants from 'expo-constants';
import {CTextBox,CButton,CPopup} from './components/presentation'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.child=React.createRef()
    }
    testFunction=()=>{
        console.log('This is test function in login');
        this.child.current.setModalVisible(true)
    }
    render(){
        return(
            <View style={{flex:1,marginTop:Constants.statusBarHeight,height:100+'%',width:100+'%',justifyContent:"center"}}>
                <CTextBox placeholder="Enter Username"></CTextBox>
                <CTextBox placeholder={"Enter Password"}></CTextBox>
                <CPopup ref={this.child}/>
                <CButton text={"Login"} onPress={this.testFunction} disabled={false}></CButton>
            </View>
        )
    }
}
export default Login;