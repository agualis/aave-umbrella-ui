export const UMBRELLA_DATA_AGGREGATION_HELPER_ABI = [
  {
    inputs: [
      { internalType: "contract IUmbrella", name: "umbrella", type: "address" },
      { internalType: "contract IAaveOracle", name: "aaveOracle", type: "address" },
      { internalType: "address", name: "user", type: "address" },
    ],
    name: "getAllAggregatedData",
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "price", type: "uint256" },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "symbol", type: "string" },
              { internalType: "uint8", name: "decimals", type: "uint8" },
            ],
            internalType: "struct DataAggregationHelper.TokenData",
            name: "stakeTokenData",
            type: "tuple",
          },
          { internalType: "uint256", name: "totalAssets", type: "uint256" },
          { internalType: "uint256", name: "targetLiquidity", type: "uint256" },
          { internalType: "bool", name: "isStakeConfigured", type: "bool" },
          {
            components: [
              {
                components: [
                  { internalType: "address", name: "token", type: "address" },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "string", name: "symbol", type: "string" },
                  { internalType: "uint8", name: "decimals", type: "uint8" },
                ],
                internalType: "struct DataAggregationHelper.TokenData",
                name: "rewardTokenData",
                type: "tuple",
              },
              { internalType: "uint256", name: "maxEmissionPerSecond", type: "uint256" },
              { internalType: "uint256", name: "distributionEnd", type: "uint256" },
            ],
            internalType: "struct DataAggregationHelper.RewardTokenData[]",
            name: "rewardsTokenData",
            type: "tuple[]",
          },
        ],
        internalType: "struct DataAggregationHelper.StakeTokenData[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "address", name: "stakeToken", type: "address" },
          {
            components: [
              { internalType: "enum DataAggregationHelper.TokenType", name: "typeOfToken", type: "uint8" },
              {
                components: [
                  { internalType: "address", name: "token", type: "address" },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "string", name: "symbol", type: "string" },
                  { internalType: "uint8", name: "decimals", type: "uint8" },
                ],
                internalType: "struct DataAggregationHelper.TokenData",
                name: "tokenData",
                type: "tuple",
              },
            ],
            internalType: "struct DataAggregationHelper.TokenFromRoute[]",
            name: "tokensFromRoute",
            type: "tuple[]",
          },
        ],
        internalType: "struct DataAggregationHelper.TokenRouteData[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "address", name: "stakeToken", type: "address" },
          { internalType: "uint256", name: "stakeUserBalance", type: "uint256" },
          {
            components: [
              { internalType: "address", name: "reward", type: "address" },
              { internalType: "uint256", name: "currentReward", type: "uint256" },
            ],
            internalType: "struct DataAggregationHelper.RewardTokenUserData[]",
            name: "rewardsTokenUserData",
            type: "tuple[]",
          },
        ],
        internalType: "struct DataAggregationHelper.StakeTokenUserData[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "address", name: "stakeToken", type: "address" },
          {
            components: [
              { internalType: "enum DataAggregationHelper.TokenType", name: "typeOfToken", type: "uint8" },
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "userBalance", type: "uint256" },
            ],
            internalType: "struct DataAggregationHelper.BalanceOfTokenFromRoute[]",
            name: "balancesOfRouteTokens",
            type: "tuple[]",
          },
        ],
        internalType: "struct DataAggregationHelper.TokenRouteBalances[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
