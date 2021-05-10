import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ed920e",
  primaryBright: "#ff911e",
  primaryDark: "#de7200",
  secondary: "#ed920e",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffd0a7b8",
  backgroundDisabled: "#b55b25",
  contrast: "#191326",
  invertedContrast: "#ff6f19",
  input: "#eeeaf4",
  inputSecondary: "#ffffff",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#828b93",
  textSubtle: "#ffffff",
  borderColor: "#98a3ac",
  card: "#ff5e00e3",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ed920e",
  background: "#b95500",
  backgroundDisabled: "#3c3742",
  contrast: "#ff6f19",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#ed920e",
  borderColor: "#524B63",
  card: "#000000cc",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
