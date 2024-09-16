import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PPB258F5');
              `,
            }}
          />
          <meta name="theme-color" content="#0088E5" />
          <meta
            name="keywords"
            content="Apartments,Apartments in,Accommodation,International student,International students,Intern,Interns,Internship,Internships,Study Abroad,Young professionals,Things to do in,For rent,Available,Apartment to share,Flat to share,Group of friends,Moving to,Europe,Help book apartment,Help book room,Help book flat,Help book accommodation,Student accommodation,Explore the city,Neighborhoods,Affordable apartments,Rent for students,Find apartment,Suited for students, interns, young pro’s,Housing options,Quality student accommodation,University,Universities,Landmarks,Activities,Provides,Studio,Student apartment,Student apartments,Overseas,student,students,Home abroad,Student housing,Find and book,Verified landlord,Verified landlords,Peace of mind for students, Peace of mind for parents,Flatshare,Reliable listing,Reliable listings,Accommodation options,Barcelona,Madrid,Florence,Rome,Prague,Paris,London,New York,Milan,student apartment,student roommate finder,best places to study abroad,homestay or apartment study abroad,Barcelona apartments, Florence apartments, Prague apartments, student apartments nyc, best websites to find housing for students in paris,uniplaces madrid,sites like uniplaces,find housing anywhere,housinganywhere,uniplaces firenze,student com,housing anywhere,housing anywere,uniplaces number,unipla es,uniplaces promo,uniplaces rome,housing anywhere amsterdam,uniplaces milan,uniplaces madrid contact,eae business school uniplaces,uniplaces,uniplaces madrid,sites like uniplaces,find housing anywhere,housinganywhere,uniplaces firenze,student com,housing anywhere,housing anywere,uniplaces number,unipla es"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@studyabroadapts" />
          <meta
            name="twitter:title"
            content="Fast and Easy Student Apartment Housing Finder"
          />
          <meta
            name="twitter:description"
            content="Study Abroad Apartments assists students in finding safe, reliable housing when studying abroad in Barcelona, Florence, Madrid, Prague, Rome, New York, and many other cities."
          />
          <meta
            name="twitter:image"
            content="https://studyabtoadapartments.nyc3.digitaloceanspaces.com/assets/logo_vedyje.png"
          />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
          <link
            rel="icon"
            href="/images/favicon.ico"
            type="image/png"
            sizes="16x16"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,600,600i,700,700i&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PPB258F5"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}
