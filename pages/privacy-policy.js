import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import renderHTML from "react-render-html";
import { Skeleton } from "antd";
import { handleLoading } from "/store/contentSlice";
import { fetchPrivacy } from "/store/services/content";

const PrivacyPolicy = (props) => {
  const { privacy, loading } = useSelector((state) => state.content);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!privacy) {
      dispatch(handleLoading(true));
      dispatch(fetchPrivacy());
    }
  }, [privacy]);

  return (
    <>
      <Head>
        <title>Privacy Policy | Study Abroad Apartments</title>
      </Head>
      <div
        className="container"
        style={{
          background: "#f5f5f5",
          marginTop: "25px",
          marginBottom: "25px",
          borderRadius: "15px",
          padding: "20px 25px",
        }}
      >
        {loading ? (
          <Skeleton active={true} />
        ) : (
          <>{privacy && renderHTML(privacy.page.content)}</>
        )}
      </div>
    </>
  );
};

export default PrivacyPolicy;
