import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider} from "react-redux";
import { userStore } from "./user/userStore.jsx";
// import simpleStore from "./simple/simpleStore.jsx";
// import textStore from "./textcolor/textStore.jsx";
// import bgColorStore from "./bgColor/bgolorStore.jsx";
// import store2 from "./changeName/store2.jsx";


createRoot(document.getElementById("root")).render(
  <Provider store={userStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
