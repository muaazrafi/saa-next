import React from "react";
import { Row, Col, Breadcrumb, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "./DropDown";
import { SearchOutlined } from "@ant-design/icons";
import ArticleData from "./ArticleData";

const ManageBookingLayout = ({ articleData }) => {
  const tenantsLinks = {
    booking: "/help/articles/extendmybooking",
    CancellationPolicy: "/help/articles/cancellationpolicy",
    StudyAboardGuarantee: "/help/articles/StudyAbroadGuarantees",
    StudyAboardPolicy: "/help/articles/cancelltion",
    PropertyIssuesHelp: "/help/articles/propertyissues",
    DateChanges: "/help/articles/changesindate",
    Contract: "/help/articles/mycontract",
  };
  const router = useRouter();
  return (
    <>
      <div className='main-bookingheader'>
        <Breadcrumb separator='>' className='breadcrumb'>
          <Breadcrumb.Item>StudyAboardApartement</Breadcrumb.Item>
          <Breadcrumb.Item href='/categories/tenants'>Tenants</Breadcrumb.Item>
          <Breadcrumb.Item href=''>Manging My Bookings</Breadcrumb.Item>
        </Breadcrumb>
        <Input
          prefix={<SearchOutlined />}
          className='searchbooking'
          type='text'
          placeholder='search'
          size='large'
        />
      </div>
      <div className='container'>
        <div>
          <div>
            <h3 style={{ paddingLeft: "20px", fontWeight: "bold" }}>
              Article in this section
            </h3>
          </div>
          <Row>
            <Col span={4}>
              <Link href={tenantsLinks.booking}>
                <div
                  className={`${
                    router.pathname === tenantsLinks.booking && "selected"
                  } extend`}>
                  <p className='linked'>
                    Extend My Ongoing <br />
                    Booking
                  </p>
                </div>
              </Link>
              <Link href={tenantsLinks.CancellationPolicy}>
                <div
                  className={`${
                    router.pathname === tenantsLinks.CancellationPolicy &&
                    "selected"
                  } policy`}>
                  <p className='linked'>
                    Cancellation Policy before 2nd of March 2022
                  </p>
                </div>
              </Link>
              <Link href={tenantsLinks.StudyAboardGuarantee}>
                <div
                  className={`${
                    router.pathname === tenantsLinks.StudyAboardGuarantee &&
                    "selected"
                  } guarantees`}>
                  <p className='linked'>
                    StudyAboardApartments Guarantees and Force Majeure for
                    Tenants
                  </p>
                </div>
              </Link>
              <Link href={tenantsLinks.StudyAboardPolicy}>
                <div
                  className={`${
                    router.pathname === tenantsLinks.StudyAboardPolicy &&
                    "selected"
                  } Policy`}>
                  <p className='linked'>
                    StudyAboardApartement Cancellation Policy
                  </p>
                </div>
              </Link>
              <Link href={tenantsLinks.PropertyIssuesHelp}>
                <div
                  className={`${
                    router.pathname === tenantsLinks.PropertyIssuesHelp &&
                    "selected"
                  } issuesHelp`}>
                  <p className='linked'>
                    Help - I have moving issues with my property
                  </p>
                </div>
              </Link>
              <Link href={tenantsLinks.DateChanges}>
                <div
                  className={`${
                    router.pathname === tenantsLinks.DateChanges && "selected"
                  } changesDate`}>
                  <p className='linked'>Changes in my dates</p>
                </div>
              </Link>
              <Link href={tenantsLinks.Contract}>
                <div
                  className={`${
                    router.pathname === tenantsLinks.Contract && "selected"
                  } contracts`}>
                  <p className='linked'>My Contract</p>
                </div>
              </Link>
            </Col>
            <Col span={18}>
              <ArticleData articleData={articleData} />
            </Col>
          </Row>
          <div>
            <div className='article-footer'>
              <span>Was this article Helpful</span>
              <div className='article-vote'>
                <a className='articlebtn'>Yes</a>
                <a className='articlebtn'>No</a>
              </div>
              <small>
                <span>1 out of 5 found this helpful</span>
              </small>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <Link href='/help/articles/cancellationpolicy'>
                  Cancellation Policy before 2nd of March 2022
                </Link>
                <br />
                <Link href='/help/articles/propertyissues'>
                  Help - I have moving issues with my property
                </Link>
                <br />
                <Link href='/help/articles/cancelltion'>
                  Spotahome Cancellation Policy
                </Link>
                <br />
                <Link href='/help/articles/guaranteesandforce'>
                  Spotahome Guarantees and Force Majeure for Tenants
                </Link>
                <br />
                <Link href='/help/articles/mycontract'>My Contract</Link>
              </div>
              <div>
                <Link href='#'>
                  Cancellation Policy before 2nd of March 2022
                </Link>
                <br />
                <Link href='#'>
                  Cancellation Policy before 2nd of March 2022
                </Link>
                <br />
                <Link href='#'>
                  Cancellation Policy before 2nd of March 2022
                </Link>
                <br />
                <Link href='#'>
                  Cancellation Policy before 2nd of March 2022
                </Link>
                <br />
                <Link href='#'>
                  Cancellation Policy before 2nd of March 2022
                </Link>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageBookingLayout;
