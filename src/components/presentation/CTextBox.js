import React from "react"
import {TextInput,View} from "react-native"
class CTextBox extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.placeholder)
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
            <TextInput style={{borderColor:'#0f1243',borderRadius:10,margin:10,borderWidth:2,padding:5,height:50}} placeholder={this.props.placeholder} onChangeText={username=>this.setState({username})}></TextInput>
        )
    }
}
export default CTextBox