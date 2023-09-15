import React from "react";
import useFetch from "../customHook/useFetch";
import { useParams, useNavigate } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  const nav = useNavigate();

  const { dataCustom: data, errCustom: err } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/",
    id
  );
  return (
    <>
      <button
        onClick={() => {
          nav("/", { replace: true });
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          nav("/addblog");
        }}
      >
        add blog
      </button>
      <div>
        {err === true && data ? (
          <>
            {data.id}
            {data.title}
          </>
        ) : (
          <>loading...</>
        )}
      </div>
    </>
  );
}
