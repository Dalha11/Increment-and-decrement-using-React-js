import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import List from './List.jsx'
import "./index.css";
import Mycomponent from "./Mycomponent";
// import Button from "./Button";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <List/> */}
    {/* <Button/> */}
    <Mycomponent/>
  </StrictMode>
);
