import React, { useState, useEffect } from "react";
import { useConnectedWallet } from "@terra-money/wallet-provider";
import * as execute from "../helpers/execute";
import LoadingIndicator from "./Loader";

const DEFAULT_SCORE = 0;
const DEFAULT_TIME = 15;
const DEFAULT_POSITION = {
  top: "15%",
  left: "50%",
};
const DEFAULT_LOADING = false;

const Play = () => {
  const [score, setScore] = useState(DEFAULT_SCORE);
  const [time, setTime] = useState(DEFAULT_TIME);
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [loading, setLoading] = useState(DEFAULT_LOADING);
  const connectedWallet = useConnectedWallet();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);
    return countdown;
  }, []);

  useEffect(() => {
    if (time === 0) {
      setPosition({ display: "none" });
      submit();
    }
  }, [time]);

  const handleClick = () => {
    let audio = new Audio("Zergling.mp3");
    audio.volume = 0.2;
    audio.play();
    setScore((score) => score + 1);
    setPosition({
      top: `${Math.floor(Math.random() * 80)}%`,
      left: `${Math.floor(Math.random() * 80)}%`,
    });
  };

  const submit = async () => {
    setLoading(true);
    if (connectedWallet && connectedWallet.network.name === "testnet") {
      await execute.setScore(connectedWallet, score);
      window.location.href = "/leaderboard";
    }
    setLoading(false);
  };

  return (
    <div className="score-board-container">
      <div className="play-container">
        <span>score: {score}</span>
        <span>shoot!</span>
        <span>time: {time} s</span>
      </div>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div className="game-container">
          <img
            id="twitter"
            src={"twitter.png"}
            alt="twitter"
            style={{ ...position }}
            onClick={handleClick}
          />
          <img id="elon" src="elon.png" alt="elon" style={{ width: "200px" }} />
        </div>
      )}
    </div>
  );
};

export default Play;
