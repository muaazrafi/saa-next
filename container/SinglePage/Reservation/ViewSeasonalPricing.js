import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "antd";

const ViewSeasonalPricing = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { apartment } = useSelector((state) => state.apartment);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  

  const greaterThanToday = (date) => {
    var today = new Date();
    var end_date = new Date(date);
    return end_date > today;
  };

  return (
    <>
      {apartment && apartment.has_multiple_monthly_prices && (
        <>
          <a onClick={showModal} style={{ display: "block", fontSize: "12px" }}>
            View Seasonal Pricing
          </a>
          <Modal
            title="Pricing Details"
            visible={isModalVisible}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Close
              </Button>,
            ]}
            onCancel={handleCancel}
          >
            {apartment.seasons && (
              <>
                <p>
                  Depending on the seasonal dates of your booking request, rent
                  can vary from month to month
                </p>
                <ul>
                  {apartment.seasons.map((season) => {
                    if (greaterThanToday(season.end_date)) {
                      return (
                        <li>
                          {season.start_date} to {season.end_date}:{" "}
                          <b>{season.monthly_price} per month</b>
                        </li>
                      );
                    }
                  })}
                </ul>
              </>
            )}

            <p>
              If your booking falls outside of those seasons at any time, the
              monthly price defaults to {apartment.fallback_price}.
            </p>
            {apartment.has_surcharge_for_extra_tenants && (
              <p>
                This apartment charges an additional surcharge for groups larger
                than {apartment.extra_tenant_threshold} people. For each
                additional tenant, a surcharge of{" "}
                {apartment.additional_guest_monthly_price} is added to the
                monthly rent.
              </p>
            )}

            {apartment.penalizes_short_stay && (
              <p>
                The landlord for this apartment charges{" "}
                {apartment.short_stay_penalty} more per month price for a stay
                of less than {apartment.penalty_breakpoint} days.
              </p>
            )}

            {apartment.discounts_long_stay && (
              <p>
                If you book the apartment for more than{" "}
                {apartment.discount_breakpoint} days, your monthly rent is
                discounted by {apartment.long_stay_discount}.
              </p>
            )}
          </Modal>
        </>
      )}
    </>
  );
};

export default ViewSeasonalPricing;
