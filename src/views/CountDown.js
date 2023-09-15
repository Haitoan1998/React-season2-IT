import React, { useEffect, useState } from "react";

class CountDown extends React.Component {
  state = {
    count: 5,
  };
  componentDidMount() {
    console.log("lần đầu của componendidmut", this.state.count);
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
      console.log("lần đầu của setinterval", this.state.count);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        this.hanleTimeout();
        clearInterval(this.timer);
      }
    }
  }
  hanleTimeout = () => {
    alert("hết giờ");
  };
  render() {
    console.log("render", this.state.count);
    return <div>{this.state.count}</div>;
  }
}
export default CountDown;

export function NewCountDown() {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count === 0) {
      return;
    }
    console.log(2, count);
    let timer = setInterval(() => {
      console.log(3, count);
      setCount((prev) => {
        return prev - 1;
      });
    }, 1000);
    return () => {
      console.log(4, count);
      clearInterval(timer);
    };
  }, [count]);
  console.log(1, count);
  return <div>{count}</div>;
}
