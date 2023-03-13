import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutMain from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
}
