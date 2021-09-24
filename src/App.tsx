import React, { useEffect } from "react";
import Router from "./Router";

const App: React.FC = () => {
  useEffect(() => {
    console.log("이거 실행되나");
  });
  return <Router />;
};

export default App;
