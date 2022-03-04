import "styles/globals.css";
import "styles/custom-swiper.css";
import "swiper/css";
import "swiper/css/pagination";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Loading from "components/molecules/Loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <div className="flex flex-col">
      <div className="h-full bg-gray-100">
        <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
          <div className="flex flex-col min-h-screen max-h-full">
            {pageLoading ? <Loading /> : <Component {...pageProps} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
