import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLoading } from "../../store/helpArticlesSlice";
import { fetchHelpArticles } from "../../store/services/help-articles";

import Link from "next/link";

const TenantsLinks = ({ mainTitle, href }) => {
  const { helpArticles, loading } = useSelector((state) => state.helpArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLoading(true));
    dispatch(fetchHelpArticles());
  }, []);

  return (
    <>
      <div className='contentTenant'>
        <Link href={href}>
          <p className='textTenants'>{mainTitle}</p>
        </Link>
      </div>

      {loading &&
        helpArticles.map((link) => {
          return (
            <div className='tenantsContent'>
              <Link href={link.href}>
                <p className='linkTenants'>{link.title}</p>
              </Link>
            </div>
          );
        })}
    </>
  );
};
export default TenantsLinks;
