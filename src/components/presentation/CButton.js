import React from "react";
import { Text, TouchableOpacity } from "react-native";
class CButton extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      disabled: this.props.disabled
    };
  }
  render() {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderRadius: 10,
          height: 50,
          backgroundColor: "trasnparent",
          padding: 5,
          margin: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
        disabled={this.state.disabled}
        onPress={() => this.props.onPress()}
      >
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
export default CButton;
