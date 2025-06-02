"use client";

import { baseSepolia, Chain } from "wagmi/chains";

export const isE2eTestEnabled = process.env.NEXT_PUBLIC_E2E_TEST_ENABLED === "true";
console.log("NEXT_PUBLIC_BASE_SEPOLIA CI: ", process.env.NEXT_PUBLIC_BASE_SEPOLIA);
if (isE2eTestEnabled) console.warn("E2E tests are enabled. This should only be used in a testing environment.");
export const baseSepoliaE2eForkUrl = "http://127.0.0.1:8545";

export const baseSepoliaUsingFork: Chain = {
  ...baseSepolia,
  rpcUrls: {
    default: { http: [baseSepoliaE2eForkUrl] },
  },
};
