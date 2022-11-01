import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);