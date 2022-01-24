import React from "react";

import { QueryClientProvider, QueryClient } from "react-query";

import { List } from "./components";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <List />
      </div>
    </QueryClientProvider>
  );
}

export default App;
