import React, { Component } from "react";

export class TextInput2 extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: props.value.length == 0 };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.setState({ placeholder: ev.nativeEvent.text.length == 0 });
    this.props.onChange && this.props.onChange(ev);
  }
  render() {
    const { placeholderStyle, style, onChange, ...rest } = this.props;

    return (
      <TextInput
        {...rest}
        onChange={this.handleChange}
        style={this.state.placeholder ? [style, placeholderStyle] : style}
      />
    );
  }
}
