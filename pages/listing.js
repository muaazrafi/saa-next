import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Sticky from "react-stickynode";
import { BsMap, BsMapFill } from "react-icons/bs";
import Search from "container/Listing/Search/Search/Search";
import SectionGrid from "components/SectionGrid/SectionGrid";
import { PostPlaceholder } from "components/UI/ContentLoader/ContentLoader";
import ListingMap from "container/Listing/ListingMap";
import {
  getAPIData,
  paginator,
  processAPIData,
} from "library/helpers/get-api-data";
import { getDeviceType } from "library/helpers/get-device-type";
import { SINGLE_POST_PAGE } from "settings/constant";
import {
  LISTING_PAGE_POST_LIMIT,
  LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP,
  LISTING_PAGE_COLUMN_WIDTH_WITH_MAP,
} from "settings/config";
import ListingWrapper, {
  PostsWrapper,
  ShowMapCheckbox,
} from "container/Listing/Listing.style";
import { fetchApartments } from "store/services/apartment";

export default function ListingPage({ processedData, deviceType }) {
  const dispatcher = useDispatch();
  const [posts, setPosts] = useState([]);

  const [showMap, setShowMap] = useState(false);
  const { apartments, loading, search, init } = useSelector(
    (state) => state.apartments
  );

  useEffect(() => {
    if (apartments.length === 0 && loading) {
      console.log("*******************");
      console.log("*******************");
      console.log("Only One Time:", loading);
      console.log("*******************");
      console.log("*******************");
      dispatcher(fetchApartments(search));
    }
  }, [apartments]);

  const handleMapToggle = () => {
    setShowMap((showMap) => !showMap);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = paginator(posts, processedData, LISTING_PAGE_POST_LIMIT);
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP;
  if (showMap) {
    columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITH_MAP;
  }

  let columnCount = "col-24";
  if (deviceType === "desktop" && showMap === true) {
    columnCount = "col-12";
  }

  return (
    <ListingWrapper>
      <Head>
        <title>SAA Listing</title>
      </Head>

      <Sticky
        top={82}
        innerZ={999}
        activeClass="isHeaderSticky"
        innerClass="sticky-white-bg"
      >
        <Search
          mapShowBtn={
            <ShowMapCheckbox>
              <i onClick={handleMapToggle}>
                {showMap ? <BsMapFill size="30px" /> : <BsMap size="30px" />}
              </i>
            </ShowMapCheckbox>
          }
        />
      </Sticky>

      <PostsWrapper className={columnCount}>
        <SectionGrid
          link={SINGLE_POST_PAGE}
          columnWidth={columnWidth}
          deviceType={deviceType}
          data={apartments}
          totalItem={processedData.length}
          limit={LISTING_PAGE_POST_LIMIT}
          loading={loading}
          handleLoadMore={handleLoadMore}
          placeholder={<PostPlaceholder />}
        />
      </PostsWrapper>
      {showMap && <ListingMap loading={loading} mapData={apartments} />}
    </ListingWrapper>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: "hotel",
      name: "listingHotel",
    },
  ];
  const pageData = await getAPIData(apiUrl);
  const processedData = processAPIData(pageData);
  const deviceType = getDeviceType(req);
  return {
    props: { processedData, deviceType },
  };
}
