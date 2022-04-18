import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { FavoriteIcon, FavoriteWrapper } from "./Favorite.style";
import { handlePopUp } from "/store/authSlice";
import { create, destroy } from "/store/services/favorite";

const Favorite = ({ id, btn = false }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const router = useRouter();
  const [active, setActive] = useState(router.pathname === "/favorites");

  const favoritisim = () => {
    console.log("Apartment ID: ", id);
    if (!currentUser) {
      dispatch(handlePopUp(true));
      notification["warning"]({
        message: "Sign In",
        description: "Please sign in first.",
      });
      return false;
    }
    if (active) {
      destroy(id);
    } else {
      create({
        favourite: {
          apartment_id: id,
          user_id: currentUser.id,
        },
      });
    }
    setActive(!active);
  };

  const SVG = () => {
    return (
      <FavoriteWrapper className={active ? "active" : ""}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.64 18.232">
          <path
            d="M60.16,56h-.04a4.551,4.551,0,0,0-3.8,2.08A4.551,4.551,0,0,0,52.52,56h-.04A4.522,4.522,0,0,0,48,60.52a9.737,9.737,0,0,0,1.912,5.308A33.506,33.506,0,0,0,56.32,72a33.506,33.506,0,0,0,6.408-6.172A9.737,9.737,0,0,0,64.64,60.52,4.522,4.522,0,0,0,60.16,56Z"
            transform="translate(-47 -55)"
          />
        </svg>{" "}
        {btn && "Save"}
      </FavoriteWrapper>
    );
  };

  return (
    <>
      {btn ? (
        <span onClick={favoritisim}>
          <SVG />
        </span>
      ) : (
        <FavoriteIcon onClick={favoritisim}>
          <SVG />
        </FavoriteIcon>
      )}
    </>
  );
};

export default Favorite;
