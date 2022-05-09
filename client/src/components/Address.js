import { useConnectedWallet } from "@terra-money/wallet-provider";

const Address = () => {
  const connectedWallet = useConnectedWallet();
  const { terraAddress } = { ...connectedWallet };

  return (
    <div>
      {terraAddress && (
        <button className="wallet-address">
          {terraAddress.slice(0, 5) + "..." + terraAddress.slice(-4)}
        </button>
      )}
    </div>
  );
};

export default Address;
