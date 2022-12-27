import "../styles/globals.css";
import Footer from "./components/HeaderAndFooter/Footer";
import Header from "./components/HeaderAndFooter/Header";

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="luxury">
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}
