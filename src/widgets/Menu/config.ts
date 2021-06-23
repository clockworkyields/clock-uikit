export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1176F401497A51A222f16bc1B6e5778eDbaB2b12",
        external: true,
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/add/BNB/0x1176F401497A51A222f16bc1B6e5778eDbaB2b12",
        external: true,
      },
    ],
  },
  {
    label: "Farms",
    icon: "VerifiedIcon",
    href: "/farms",
  },
  {
    label: "Caves",
    icon: "UnverifiedIcon",
    href: "/caves",
  },
  {
    label: "Blizzard",
    icon: "PoolIcon",
    href: "/pools",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "PancakeSwap",
        href: "https://pancakeswap.info/token/0x1176F401497A51A222f16bc1B6e5778eDbaB2b12",
        external: true,
      },
    ],
  },
  {
    label: "Github",
    icon: "GithubIcon",
    href: "https://github.com/clockworkyields",
    external: true,
  },
  {
    label: "Blog",
    icon: "MediumIcon",
    href: "https://clockwork-yields.medium.com/",
    external: true,
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/clockworkyields",
      },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/YetiTracker",
      // },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/ClockworkYields",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
