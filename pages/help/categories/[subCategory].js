import Head from "next/head";
import Tenants from "../../../components/Tenants/Tenants";
import { useRouter } from "next/router";

export default function tenants(props) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  return (
    <>
      {router.query?.subCategory === `${id}` && <Tenants />}
      {/* {router.query?.subCategory === "landlords" && <Landlords />} */}
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
