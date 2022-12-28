import { Toaster } from "react-hot-toast";
import AuthProvider from "../components/Context/AuthProvider";
import "../styles/globals.css";
import Footer from "./components/HeaderAndFooter/Footer";
import Header from "./components/HeaderAndFooter/Header";

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="luxury" style={{ backgroundColor: "black" }}>
      <AuthProvider>
        <Header></Header>
        <Component {...pageProps} />
        <Toaster position="top-center" reverseOrder={false} />
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}
