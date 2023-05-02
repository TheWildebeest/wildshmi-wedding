import { Arima, Caveat, Kumbh_Sans, Merienda } from "@next/font/google";
import localFont from "@next/font/local";

const annissaScript = localFont({
  src: "../../../public/assets/fonts/annisa.otf",
  display: "swap",
});

const arima = Arima({
  subsets: ["latin-ext"],
  display: "swap",
});

const caveat = Caveat({
  // weight: ['400'],
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const kumbh = Kumbh_Sans({
  subsets: ["latin-ext"],
  display: "swap",
});

const merienda = Merienda({
  subsets: ["latin-ext"],
  display: "swap",
});

const fonts = {
  annissaScript: annissaScript.className,
  arima: arima.className,
  caveat: caveat.className,
  kumbh: kumbh.className,
  merienda: merienda.className,
};

export default fonts;
