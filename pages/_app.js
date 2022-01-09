import "styles/globals.css";
import "styles/custom-swiper.css";
import "swiper/css";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col">
      <div className="h-full bg-gray-100">
        <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
          <div className="flex flex-col min-h-screen max-h-full">
          <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
