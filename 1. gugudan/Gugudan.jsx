const React = require('react');
const { useState } = React;

const Gugudan = () => {
    const [first, setFirst] = useState(Math.random() * 9);
    const [second, setSecond] = useState(Math.random() * 9);
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef();

    const onChangeInput = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
      e.preventDefault();
      if (parseInt(this.state.value) === this.state.first * this.state.second) {
        setResult("정답 : " + value);
        setFirst(Math.random() * 9);
        setSecond(Math.random() * 9);
        setValue('');
      } else {
        setResult("땡");
        setValue("")
      }
      inputRef.current.focus();
    };

    return (
      <>
        <div>
          {first}곱하기{second}는?
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="number"
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
          />
          <button>입력</button>
        </form>
        <div>{result}</div>
      </>
    );
  };

  module.exports = Gugudan;