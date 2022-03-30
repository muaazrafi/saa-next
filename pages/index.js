import Head from 'next/head';
import Link from 'next/link';
import Container from 'components/UI/Container/Container';


export default function HomePage (props) {
  let limit;

  if (deviceType === 'mobile') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE;
  }
  if (deviceType === 'tablet') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE;
  }

  if (deviceType === 'desktop') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE;
  }
  return (
    <>
      <Head>
        <title>SAA Home Page</title>
      </Head>
      <Container fluid={true}>
        Home Page Under Progress
      </Container>
    </>
  );
}
