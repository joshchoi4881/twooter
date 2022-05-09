import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider, getChainOptions } from "@terra-money/wallet-provider";
import App from "./App";
import Play from "./components/Play";
import Leaderboard from "./components/Leaderboard";
import Guide from "./components/Guide";
import "./styles/index.css";

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <React.StrictMode>
      <WalletProvider {...chainOptions}>
        <div className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/play" element={<Play />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/guide" element={<Guide />} />
            </Routes>
          </BrowserRouter>
        </div>
      </WalletProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
