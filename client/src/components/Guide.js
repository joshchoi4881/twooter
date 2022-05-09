import Header from "./Header";

const Guide = () => {
  return (
    <main className="App">
      <Header />
      <div className="score-board-container">
        <h3>how to play</h3>
        <div>
          <span className="help">
            click the twitter logo as many times as you can within the time
            limit
          </span>
        </div>
      </div>
    </main>
  );
};

export default Guide;
