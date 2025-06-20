import "react-image-gallery/styles/css/image-gallery.css";
import "react-dates/lib/css/_datepicker.css";
import "react-multi-carousel/lib/styles.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "antd/lib/date-picker/style/index.css";
import "react-intl-tel-input/dist/main.css";
import "antd/dist/antd.css";
import Router from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "styled-components";
import theme from "themes/default.theme";
import GlobalStyles from "themes/global.style";
import Layout from "container/Layout/Layout";
import { SearchProvider } from "context/SearchProvider";
import { store } from "store/store";
import { Provider } from "react-redux";
import HashRouter from "container/Auth/HashRouter";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, router, pageProps }) {
  const { query } = router;

  return (
    <Provider store={store}>
      <SearchProvider query={query}>
        <ThemeProvider theme={theme}>
          <Layout>
            <GlobalStyles />
            <HashRouter />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SearchProvider>
    </Provider>
  );
}

export default App;
