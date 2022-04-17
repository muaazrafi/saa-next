import React, { useEffect } from "react";
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
    <div className="container">
      {loading ? (
        <Skeleton active={true} />
      ) : (
        <>{privacy && renderHTML(privacy.page.content)}</>
      )}
    </div>
  );
};

export default PrivacyPolicy;
