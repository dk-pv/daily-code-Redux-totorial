import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store2 from "./changeName/store2.jsx";


createRoot(document.getElementById("root")).render(
  <Provider store={store2}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
