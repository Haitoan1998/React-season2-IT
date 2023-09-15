import React, { useEffect, useState } from "react";
import "./Nav.css";
import axios from "axios";

import useFetch from "../customHook/useFetch";
import { NavLink } from "react-router-dom";

export default function Json() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("");
  const [completed1, setCompleted1] = useState(true);
  const [newData, setNewData] = useState([]);

  let {
    dataCustom: data,
    errCustom: err,
    serErr,
  } = useFetch("https://jsonplaceholder.typicode.com/todos/", "");

  useEffect(() => {
    if (data && data.length > 0) {
      let data1 = data.slice(0, 5);
      setNewData(data1);
    }
  }, [data]);
  console.log(newData);
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!title) {
            alert("sai định dạng");
            return;
          }
          let dataPost = {
            userId: 1,
            title: title,
            completed: completed1,
          };
          let res = await axios.post(
            "https://jsonplaceholder.typicode.com/todos",
            dataPost
          );
          if (res && res.data) {
            let data = newData;
            console.log(res.data);
            data.unshift(res.data);
            setNewData(data);
            setCompleted1(!completed1);
          }

          console.log(">>>> data: ", title, completed1);
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="completed">completed</label>
        <input
          id="completed"
          type="text"
          value={completed}
          onChange={(e) => {
            setCompleted(e.target.value);
            setCompleted1(!completed1);
          }}
        />
        <button type="submit">add</button>
      </form>
      <table id="customers">
        <tr>
          <th>id</th>
          <th>title</th>
          <th>complete</th>
        </tr>
        {newData && newData.length > 0 ? (
          newData.map((item, index) => {
            console.log(newData);
            return (
              <tr>
                <td>{item.id}</td>
                <NavLink to={`/blog/${item.id}`}>
                  <td>{item.title}</td>{" "}
                </NavLink>
                <td>{item.completed}</td>{" "}
                <td
                  onClick={() => {
                    let dataDelete = newData.filter(
                      (item1) => item1.id !== item.id
                    );
                    setNewData(dataDelete);
                  }}
                >
                  X
                </td>
              </tr>
            );
          })
        ) : (
          <div>loading....</div>
        )}
      </table>
    </>
  );
}
