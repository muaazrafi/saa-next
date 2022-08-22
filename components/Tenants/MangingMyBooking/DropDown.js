import React, { useEffect } from "react";
import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { handleLoading } from "../../../store/helpArticlesSlice";
import { fetchHelpArticles } from "../../../store/services/helpArticles";

const DropDown = () => {
  const { help_articles } = useSelector(
    (state) => state.articles.help_Articles,
  );

  const router = useRouter();
  console.log(router);
  const articleParam = router.query.article;

  const dispatch = useDispatch();
  useEffect(() => {
    if (articleParam) {
      dispatch(handleLoading(true));
      dispatch(fetchHelpArticles(articleParam));
    }
  }, [articleParam]);

  const menu = (
    <Menu>
      <Menu.Item>
        {help_articles &&
          help_articles.map((link) => {
            return (
              <Link href={link.slug}>
                <div
                  className={`${
                    router.pathname === link.slug && "selected"
                  } extend`}>
                  <p className='linked'>{link.title}</p>
                </div>
              </Link>
            );
          })}
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <a className='dropBtn' onClick={(e) => e.preventDefault()}>
          <Space className='dropMenu'>
            Article in this section
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default DropDown;
