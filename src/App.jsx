import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import ImportWallet from "./components/select-wallet/ImportWallet";
import SelectWallet from "./pages/SelectWallet";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/select-wallet" element={<SelectWallet /> } />
        <Route path="/import-wallet" element={<ImportWallet /> } />
        <Route path="/dashboard" element={<DashboardPage /> } />
      </Routes>
    </BrowserRouter>
  );
}
