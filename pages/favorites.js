import React, { useEffect } from "react";
import Link from "next/link";
import { Row, Col, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import VerifyAuth from "container/Auth/VerifyAuth";
import ResendConfirmation from "/container/Auth/ResendConfirmation";
import Nav from "/container/Dashboard/Nav";
import ProductCard from "components/ProductCard/ProductCard";
import { FormContent } from "/container/Stylis/InnerContainer.style";
import { handleLoading } from "/store/apartmentsSlice";
import { fetchFavourites } from "/store/services/favorite";
import { range } from "lodash";

const Favorites = (props) => {
  const dispatch = useDispatch();
  const { favorites, loading } = useSelector((state) => state.apartments);

  useEffect(() => {
    dispatch(handleLoading(true));
    dispatch(fetchFavourites());
  }, []);

  return (
    <>
      <VerifyAuth />
      <ResendConfirmation />
      <FormContent>
        <Nav current="favorites" />
        <br />
        {loading ? (
          <Row gutter={20}>
            {range(1, 6).map((item, i) => (
              <Col xxl={7} xl={7} lg={7} md={7} sm={24} xs={24} key={`skele-fav-${i}`} style={{ marginBottom: '10px' }} >
                <Card loading={true}></Card>
              </Col>
            ))}
          </Row>
        ) : (
          <>
            {favorites.length > 0 ? (
              <Row gutter={20}>
                {favorites.map((apar) => {
                  return (
                    <Col xxl={7} xl={7} lg={7} md={7} sm={24} xs={24} key={`apar-fav-${apar.id}`} >
                      <ProductCard {...apar} />
                    </Col>
                  );
                })}
              </Row>
            ) : (
              <h2>
                No favorites added, please continue searching in{" "}
                <Link href="/listings/barcelona">Barcelona</Link> or{" "}
                <Link href="/listings/madrid">Madrid</Link>{" "}
              </h2>
            )}
          </>
        )}
      </FormContent>
    </>
  );
};

export default Favorites;
