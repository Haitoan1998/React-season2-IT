import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, id) {
  const [dataCustom, setData] = useState([]);
  const [errCustom, serErr] = useState(false);
  const [inputCustom, setInputCustom] = useState(1);
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    console.log(ourRequest);
    async function fetcData() {
      try {
        let res = await axios.get(url + id, {
          cancelToken: ourRequest.token,
        });
        let data = res && res.data ? res.data : [];
        console.log(data);
        setData(data);
        serErr(true);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          serErr(false);
          console.log(error.message);
        }
      }
    }
    setTimeout(() => {
      fetcData();
    }, 1000);

    return () => {
      ourRequest.cancel("Operation canceled by the user.");
    };
  }, [inputCustom, errCustom]);

  return { dataCustom, errCustom, serErr, inputCustom, setInputCustom };
}
