import css from "./Indicator.module.css";
import { passwordStrength } from "check-password-strength";

const Indicator = ({ inputValue }) => {
  function changeWeakColor() {
    if (inputValue.length === 0) {
      return css.weak;
    }
    if (inputValue.length > 0 && inputValue.length < 8) {
      return css.strong + " " + css.activeWeak;
    }
    if (
      passwordStrength(inputValue).value === "Weak" ||
      passwordStrength(inputValue).value === "Too weak"
    ) {
      console.log("Weak");
      return css.weak + " " + css.activeWeak;
    }
    if (passwordStrength(inputValue).value === "Medium") {
      console.log("Medium");
      return css.weak + " " + css.activeMedium;
    }
    if (passwordStrength(inputValue).value === "Strong") {
      console.log("Strong");
      return css.weak + " " + css.activeStrong;
    }
    return css.weak;
  }
  function changeMediumColor() {
    if (passwordStrength(inputValue).value === "Medium") {
      return css.medium + " " + css.activeMedium;
    }
    if (passwordStrength(inputValue).value === "Strong") {
      return css.medium + " " + css.activeStrong;
    }
    if (inputValue.length > 0 && inputValue.length < 8) {
      return css.medium + " " + css.activeWeak;
    }
    return css.medium;
  }
  function changeStongColor() {
    if (inputValue.length > 0 && inputValue.length < 8) {
      return css.strong + " " + css.activeWeak;
    }
    if (passwordStrength(inputValue).value === "Strong") {
      return css.strong + " " + css.activeStrong;
    }
    return css.strong;
  }
  function changeTextColor() {
    if (passwordStrength(inputValue).value === "Weak") {
      return css.text + " " + css.textRed;
    } else if (passwordStrength(inputValue).value === "Medium") {
      return css.text + " " + css.textOrange;
    } else if (passwordStrength(inputValue).value === "Strong") {
      return css.text + " " + css.textGreen;
    }
    return css.text;
  }

  return (
    <>
      <div className={css.indicators}>
        <span className={changeWeakColor()}></span>
        <span className={changeMediumColor()}></span>
        <span className={changeStongColor()}></span>
      </div>

      <p className={changeTextColor()}>
        Password strength: {passwordStrength(inputValue).value}
      </p>
    </>
  );
};

export default Indicator;
