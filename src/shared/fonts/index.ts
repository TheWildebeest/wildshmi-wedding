import { Caveat, Arima, Merienda } from "@next/font/google";
import localFont from "@next/font/local";

const arima = Arima({
  subsets: ["latin-ext"],
  display: 'swap'

})

const caveat = Caveat({
  // weight: ['400'],
  subsets: ["latin-ext"],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

const merienda = Merienda({
  subsets: ["latin-ext"],
  display: 'swap'
});
  
const annissaScript = localFont({
  src: "../../../public/assets/fonts/annisa.otf",
  display: 'swap'
});

const fonts = {
  arima: arima.className,
  caveat: caveat.className,
  annissaScript: annissaScript.className,
  merienda: merienda.className
};

export default fonts