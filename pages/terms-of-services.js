import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import renderHTML from "react-render-html";
import { Skeleton } from "antd";
import { handleLoading } from "/store/contentSlice";
import { fetchTos } from "/store/services/content";

const TermsOfSrvices = (props) => {
  const { tos, loading } = useSelector((state) => state.content);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tos) {
      dispatch(handleLoading(true));
      dispatch(fetchTos());
    }
  }, [tos]);

  return (
    <div
      className="container"
      style={{
        background: "#f5f5f5",
        marginTop: "25px",
        marginBottom: "25px",
        borderRadius: "15px",
        padding: '20px 25px'
      }}
    >
      {loading ? (
        <Skeleton active={true} />
      ) : (
        <>{tos && renderHTML(tos.page.content)}</>
      )}
    </div>
  );
};

export default TermsOfSrvices;
