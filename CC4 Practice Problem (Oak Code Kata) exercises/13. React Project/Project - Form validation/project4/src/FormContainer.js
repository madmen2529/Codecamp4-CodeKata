import React, { Component } from "react";
import FormComponent from "./components/FormComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const { value, name, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render = () => (
    <FormComponent handleChange={this.handleChange} {...this.state} />
  );
}
