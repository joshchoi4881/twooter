import React, { useState, useEffect } from "react";
import { useConnectedWallet } from "@terra-money/wallet-provider";
import * as query from "../contract/query";
import Header from "../components/Header";

const Leaderboard = () => {
  const [scores, setScores] = useState();
  const [loading, setLoading] = useState(true);
  const connectedWallet = useConnectedWallet();

  useEffect(() => {
    setLoading(true);
    const getScores = async () => {
      if (connectedWallet && connectedWallet.network.name === "testnet") {
        return (await query.getScores(connectedWallet)).scores;
      }
    };
    getScores().then((scores) => {
      setScores(scores);
      setLoading(false);
    });
  }, [connectedWallet]);

  const renderScores = (scores) => {
    if (!scores || scores.length < 1) {
      return <div>no scores available</div>;
    }
    return scores.map((score, i) => {
      return (
        <div key={i} className="score">
          <span>
            {score[0].slice(0, 5) + "..." + score[0].slice(-4)}:{" "}
            {score[1].toString().padStart(2, "0")}
          </span>
        </div>
      );
    });
  };

  return (
    <main className="App">
      <Header />
      <div className="score-board-container">
        <h3>scoreboard</h3>
        {loading ? <div>loading...</div> : renderScores(scores)}
        <div></div>
      </div>
    </main>
  );
};

export default Leaderboard;
