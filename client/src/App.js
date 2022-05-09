import { WalletStatus, useWallet } from "@terra-money/wallet-provider";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./styles/App.css";

const App = () => {
  const { status, connect, disconnect } = useWallet();

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            key={`connect-EXTENSION`}
            type="button"
            className="cta-button connect-wallet-button"
            onClick={() => connect("EXTENSION")}
          >
            connect wallet
          </button>
        </div>
      );
    } else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          className="cta-button connect-wallet-button"
          onClick={() => disconnect()}
        >
          disconnect
        </button>
      );
    }
  };

  return (
    <main className="App">
      <Header />
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          <img
            src="https://media.giphy.com/media/10ONuT5STdCiRy/giphy.gif"
            alt="twitter"
          />
        </div>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <div className="game-menu-container">
          <Menu />
        </div>
      )}
      {renderConnectButton()}
    </main>
  );
};

export default App;
