import Head from "next/head";
import Landlords from "../../components/Landlords/Landlords";

export default function landlords(props) {
  return (
    <>
      <Landlords />
      <Head>
        <title>International Student Housing | Study Abroad Apartments</title>
        <meta
          name='description'
          content='Study Abroad Apartments assists students in finding reliable housing when studying abroad or interning. Visit us and find an apartment or room today.'
        />
      </Head>
    </>
  );
}
