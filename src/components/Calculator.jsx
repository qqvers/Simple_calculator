import { useState } from "react";

export default function Calculator() {
  const [valueCalc, setValueCalc] = useState("0");
  const [lastValue, setLastValue] = useState("0");
  const [sign, setSign] = useState("");

  function SingleFunction(event) {
    if (isFinite(event)) {
      if (valueCalc !== "0") {
        setValueCalc((prevState) => {
          return prevState + event;
        });
      }
      if (valueCalc === "0") {
        setValueCalc(event);
      }
    }
    if (event === "C") {
      setValueCalc("0");
      setLastValue("0");
    }
    if (event === "CE") {
      setValueCalc("0");
    }

    if (event === "Backspace") {
      setValueCalc((prevState) => {
        return prevState.slice(0, -1);
      });
    }
    if (event === "1/x") {
      setValueCalc((prevState) => {
        return 1 / parseInt(prevState);
      });
    }

    if (event === "x^2") {
      setValueCalc((prevState) => {
        return prevState * prevState;
      });
    }
    if (event === "sqrt") {
      setValueCalc((prevState) => {
        return Math.sqrt(prevState);
      });
    }
    if (event === "+/-") {
      setValueCalc((prevState) => {
        return -1 * prevState;
      });
    }
    if (event === ",") {
      if (!valueCalc.includes(".")) {
        setValueCalc((prevState) => {
          return prevState + ".";
        });
      }
    }
    if (event === "=") {
      if (sign === "+")
        setValueCalc((prevState) => {
          return parseFloat(lastValue) + parseFloat(prevState);
        });
      if (sign === "-")
        setValueCalc((prevState) => {
          return parseFloat(lastValue) - parseFloat(prevState);
        });
      if (sign === "*")
        setValueCalc((prevState) => {
          return parseFloat(lastValue) * parseFloat(prevState);
        });
      if (sign === "/")
        setValueCalc((prevState) => {
          return parseFloat(lastValue) / parseFloat(prevState);
        });
      if (sign === "%")
        setValueCalc((prevState) => {
          return parseFloat(lastValue) * (parseFloat(prevState) / 100);
        });
    }

    if (event === "+") {
      setLastValue(valueCalc);
      setValueCalc("0");
      setSign("+");
    }
    if (event === "-") {
      setLastValue(valueCalc);
      setValueCalc("0");
      setSign("-");
    }
    if (event === "*") {
      setLastValue(valueCalc);
      setValueCalc("0");
      setSign("*");
    }
    if (event === "/") {
      setLastValue(valueCalc);
      setValueCalc("0");
      setSign("/");
    }
    if (event === "%") {
      setLastValue(valueCalc);
      setValueCalc("0");
      setSign("%");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="grid grid-cols-4 grid-rows-7 justify-items-center gap-1 bg-gray-400 rounded p-3 bg-opacity-70 w-[20rem] h-[30rem]">
        <input
          type="text"
          className="col-span-4 w-full text-right bg-white bg-opacity-90 text-4xl text-black focus:outline-none pr-2"
          value={valueCalc}
          readOnly
        />
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="%"
        >
          %
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="CE"
        >
          CE
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="C"
        >
          C
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="Backspace"
        >
          ⌫
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="1/x"
        >
          1/x
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="x^2"
        >
          x^2
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="sqrt"
        >
          x^1/2
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="/"
        >
          /
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="7"
        >
          7
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="8"
        >
          8
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="9"
        >
          9
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="*"
        >
          *
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="4"
        >
          4
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="5"
        >
          5
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="6"
        >
          6
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="-"
        >
          -
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="1"
        >
          1
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="2"
        >
          2
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="3"
        >
          3
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="+"
        >
          +
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="+/-"
        >
          +/-
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="0"
        >
          0
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value=","
        >
          ,
        </button>
        <button
          className="custom-button"
          onClick={(e) => SingleFunction(e.target.value)}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}
