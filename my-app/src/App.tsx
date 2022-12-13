import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useSWR from "swr";


function App() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, isValidating } = useSWR(
    "https://random-data-api.com/api/v2/users",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {data.first_name}!</h1>
        {isValidating && <span>Updating...</span>}
      </header>
    </div>
  );
}

export default App;
