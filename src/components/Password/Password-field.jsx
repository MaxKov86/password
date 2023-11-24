import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Indicator from "../Indicator/Indicator";
import { Component } from "react";
import css from "./Password-field.module.css";

export default class PasswordField extends Component {
  state = {
    value: "",
    type: "password",
  };
  handelInputChange = (e) => {
    console.log(e.target.type);
    this.setState({ value: e.target.value });
  };

  toogle = () => {
    this.setState((prevState) =>
      prevState.type === "password" ? { type: "text" } : { type: "password" }
    );
  };

  render() {
    const { type } = this.state;
    const { value } = this.state;
    return (
      <div className={css.field}>
        <label className={css.label}>
          <input
            className={css.password}
            type={type}
            placeholder="Entry your password"
            onChange={this.handelInputChange}
          />

          {type === "password" ? (
            <FaEyeSlash className={css.eye} onClick={this.toogle} />
          ) : (
            <FaEye className={css.eye} onClick={this.toogle} />
          )}
        </label>

        <Indicator inputValue={value} />
      </div>
    );
  }
}
