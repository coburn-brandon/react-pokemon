import { useState, useEffect } from "react";

async function fetchData(url, setData) {
  const response = await fetch(url);

  const data = await response.json();

  setData(data);
}

export function useFetch(url) {
  const [data, setData] = useState({});

  useEffect(
    () => {
      fetchData(url, setData);
    },
    [url]
  );

  return data;
}
