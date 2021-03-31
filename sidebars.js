module.exports = {
  docs: [
    {
      type: "category",
      label: "Beacon",
      items: [
        "beacon/introduction",
        "beacon/contributing",
        "beacon/wallets",
        "beacon/security-audit",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/installation",
        "getting-started/simple-example",
        "getting-started/advanced-example",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/getting-started",
        "guides/active-account",
        "guides/disconnecting-a-wallet",
        "guides/network",
        "guides/request-permissions",
        "guides/sign-payload",
        "guides/broadcast-request",
        "guides/simple-contract-call",
        "guides/fa1.2-transfer",
        "guides/fa2-transfer",
        "guides/contract-error-handling",
        "guides/subscribe-to-event",
        // TODO: "guides/info",
        "guides/standalone-delegation",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        "advanced/ui-elements",
        {
          type: "category",
          label: "Flows",
          items: [
            "advanced/flows/connection",
            "advanced/flows/extension-communication",
            "advanced/flows/ledger-extension",
            "advanced/flows/local-mnemonic",
            "advanced/flows/p2p-direct",
            "advanced/flows/p2p-extension",
          ],
          collapsed: true,
        },
      ],
      collapsed: true,
    },
    "CHANGELOG",
    {
      type: "link",
      label: "TypeDoc Reference",
      href: "https://typedocs.walletbeacon.io",
    },
  ],
  wallet: ["wallet/getting-started", "wallet/security"],
};
