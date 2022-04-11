import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cloneDeep, uniqBy, capitalize } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import Sticky from "react-stickynode";
import { BsMap, BsMapFill } from "react-icons/bs";
import Search from "container/Listing/Search/Search/Search";
import SectionGrid from "components/SectionGrid/SectionGrid";
import { PostPlaceholder } from "components/UI/ContentLoader/ContentLoader";
import ListingMap from "container/Listing/ListingMap";
import { getDeviceType } from "library/helpers/get-device-type";
import { SINGLE_POST_PAGE } from "settings/constant";
import {
  LISTING_PAGE_APARTMENT_LIMIT,
  LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP,
  LISTING_PAGE_COLUMN_WIDTH_WITH_MAP,
} from "settings/config";
import ListingWrapper, {
  PostsWrapper,
  ShowMapCheckbox,
} from "container/Listing/Listing.style";
import { updateSearch, loadUp } from "store/apartmentsSlice";
import { fetchApartments } from "store/services/apartment";

export default function ListingPage({ processedData, deviceType }) {
  const dispatcher = useDispatch();
  const router = useRouter();
  const [showMap, setShowMap] = useState(false);
  const { apartments, loading, search, total, loadMore } = useSelector(
    (state) => state.apartments
  );

  const cityName = capitalize(router.query.city);

  useEffect(() => {
    const { q } = router.query;
    let searchParam = {};
    if (q) {
      searchParam = JSON.parse(q);
    } else {
      let modifiedSearch = cloneDeep(search);
      modifiedSearch.property_city_matches = router.query.city;
      searchParam = modifiedSearch;
    }
    if (apartments.length === 0 && loading) {
      dispatcher(updateSearch(searchParam));
      dispatcher(fetchApartments(searchParam));
    }
  }, [apartments]);

  const handleMapToggle = () => {
    setShowMap((showMap) => !showMap);
  };

  const handleLoadMore = () => {
    let modifiedSearch = cloneDeep(search);
    modifiedSearch.page = search.page + 1;
    dispatcher(updateSearch(modifiedSearch));
    dispatcher(loadUp());
    dispatcher(fetchApartments(modifiedSearch));
  };

  let columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP;
  if (showMap) {
    columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITH_MAP;
  }

  let columnCount = "col-24";
  if (deviceType === "desktop" && showMap === true) {
    columnCount = "col-12";
  }

  const nextPage = parseInt(total / LISTING_PAGE_APARTMENT_LIMIT);

  return (
    <ListingWrapper>
      <Head>
      <title>Student Apartments in {cityName} | Study Abroad Apartments</title>
        <meta name="description" content={`Studying in ${cityName}? We have amazing student housing in ${cityName} for your liking. Visit our list of apartments to find a place to stay in ${cityName}`}></meta>
        <meta name="keywords" content={`Apartments,Apartments in,Accommodation,International student,International students,Intern,Interns,Internship,Internships,Study Abroad,Young professionals,Things to do in,For rent,Available,Apartment to share,Flat to share,Group of friends,Moving to,Europe,Help book apartment,Help book room,Help book flat,Help book accommodation,Student accommodation,Explore the city,Neighborhoods,Affordable apartments,Rent for students,Find apartment,Suited for students, interns, young pro’s,Housing options,Quality student accommodation,University,Universities,Landmarks,Activities,Provides,Studio,Student apartment,Student apartments,Overseas,student,students,Home abroad,Student housing,Find and book,Verified landlord,Verified landlords,Peace of mind for students, Peace of mind for parents,Flatshare,Reliable listing,Reliable listings,Accommodation options,Barcelona,Madrid,Florence,Rome,Prague,Paris,London,New York,Milan,student apartment,student roommate finder,best places to study abroad,homestay or apartment study abroad,${search.property_city_matches} apartments, Florence apartments, Prague apartments, student apartments nyc, best websites to find housing for students in paris,uniplaces madrid,sites like uniplaces,find housing anywhere,housinganywhere,uniplaces firenze,student com,housing anywhere,housing anywere,uniplaces number,unipla es,uniplaces promo,uniplaces rome,housing anywhere amsterdam,uniplaces milan,uniplaces madrid contact,eae business school uniplaces,uniplaces,uniplaces madrid,sites like uniplaces,find housing anywhere,housinganywhere,uniplaces firenze,student com,housing anywhere,housing anywere,uniplaces number,unipla es`} />
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
          totalItem={total}
          limit={LISTING_PAGE_APARTMENT_LIMIT}
          loading={loading}
          handleLoadMore={handleLoadMore}
          loadMore={loadMore}
          canLoadMore={search.page < nextPage}
          placeholder={<PostPlaceholder />}
        />
      </PostsWrapper>
      {showMap && <ListingMap loading={loading} mapData={  uniqBy(apartments, function(apar) { return [apar.latitude, apar.longitude].join(); })} />}
    </ListingWrapper>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const deviceType = getDeviceType(req);
  return {
    props: { deviceType },
  };
}
