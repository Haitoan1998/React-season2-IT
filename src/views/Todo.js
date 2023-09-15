import React from "react";

export default function Todo(props) {
  const todos = props.todos;

  return (
    <div>
      <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              {item.id}
              {item.title}
              <span
                onClick={() => {
                  props.deleteitem(item);
                }}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
