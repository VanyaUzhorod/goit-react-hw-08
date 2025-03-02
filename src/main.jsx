import { createRoot } from "react-dom/client";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
