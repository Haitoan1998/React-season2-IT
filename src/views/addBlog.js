import React, { useState } from "react";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!title || !content) {
            alert("sai định dạng");
            return;
          }
          console.log(">>>> data: ", title, content);
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
        <label htmlFor="content">content</label>
        <input
          id="content"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
