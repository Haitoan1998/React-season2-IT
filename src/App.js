import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useEffect, useState } from "react";
import Todo from "./views/Todo";
import "../src/views/Nav.css";
import Json from "./views/Json";
import CountDown, { NewCountDown } from "./views/CountDown";
import { Routes, Route } from "react-router-dom";
import TodoData from "./views/todoData";
import Blog from "./views/blog";
import AddBlog from "./views/addBlog";
import Notfound from "./views/notfound";
import YoutubeSearch from "./views/YoutubeSearch";

function App() {
  const [name, setName] = useState("Eric");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "game", type: "toan" },
    { id: "todo2", title: "music", type: "toan" },
    { id: "todo3", title: "music", type: "an" },
    { id: "todo4", title: "music", type: "an" },
  ]);

  const handleClick = () => {
    if (!address) {
      return;
    }
    setName(address);
    setTodos((prev) => {
      return [...prev, { id: Math.random(), title: address }];
    });
    setAddress("");
  };
  useEffect(() => {}, [name, todos]);
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };
  const deleteitem = (id) => {
    let data = todos.filter((item) => item.id != id.id);
    setTodos(data);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Json />} />
          <Route path="/todo" element={<TodoData />} />
          <Route
            path="/timer"
            element={
              <>
                <CountDown />
                <br />
                <NewCountDown />
              </>
            }
          />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/search" element={<YoutubeSearch />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        {/* <Todo todos={todos} deleteitem={deleteitem} />
        <hr />
        <Todo
          todos={todos.filter((item) => {
            return item.type === "an";
          })}
        /> */}
        {/* <button
          onClick={(event) => {
            handleClick();
          }}
        >
          Click me
        </button>
        <input
          type="text"
          value={address}
          onChange={(event) => {
            handleOnChange(event);
          }}
        /> */}
      </header>
    </div>
  );
}

export default App;
