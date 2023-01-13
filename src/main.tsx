import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { TransactionsProvider } from "./context/TransactionContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </TransactionsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
