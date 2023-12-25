import Navbar from "@/pages/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </div>
    </>
  );
}
