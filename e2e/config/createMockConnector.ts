import { WalletDetailsParams } from "@rainbow-me/rainbowkit";
import { Address } from "viem";
import { CreateConnectorFn, mock } from "wagmi";

const defaultAnvilAccount: Address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export function createMockConnector(walletDetails: WalletDetailsParams): CreateConnectorFn {
  const mockConnector: CreateConnectorFn = (config) => {
    return {
      ...mock({
        accounts: [defaultAnvilAccount],
      })(config),
      rkDetails: walletDetails.rkDetails,
    };
  };

  return mockConnector;
}
