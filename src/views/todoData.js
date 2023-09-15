import React, { useState } from "react";
import useFetch from "../customHook/useFetch";

export default function TodoData() {
  const [input, setInput] = useState(1);
  const {
    dataCustom: dataID,
    errCustom: errID,
    setInputCustom,
  } = useFetch("https://jsonplaceholder.typicode.com/posts/", input);
  return (
    <>
      <div>
        {errID === true && dataID ? (
          <div>
            <div>{dataID.id}</div>
            <div>{dataID.title}</div>
            <div>{dataID.completed}</div>
          </div>
        ) : (
          <div>lỗi</div>
        )}
      </div>{" "}
      <input
        type="number"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
          setInputCustom(input);
        }}
      />
    </>
  );
}
