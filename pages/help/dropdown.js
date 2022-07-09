import Head from "next/head";
import DropDown from "../../components/Tenants/MangingMyBooking/DropDown";
export default function section(props) {
  return (
    <>
      <DropDown />
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
