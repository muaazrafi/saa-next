import React from "react";

const ViewSeasonalPricing = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Pricing Details"
        visible={isModalVisible}
        onOk={false}
        onCancel={handleCancel}
      >
                <p>Depending on the seasonal dates of your booking request, rent can vary from month to month</p>
                <ul>
                    <li ng-repeat="season in apartment.seasons" ng-show="greaterThanToday(season.end_date)">{season.start_date} to {season.end_date}: <b>{season.monthly_price} per month</b></li>
                </ul>
                <p>
                    If your booking falls outside of those seasons at any time, the monthly price defaults to { apartment.fallback_price}.
                </p>
                <p ng-if="apartment.has_surcharge_for_extra_tenants">
                    This apartment charges an additional surcharge for groups larger than { apartment.extra_tenant_threshold} people. For each additional tenant, a surcharge of {apartment.additional_guest_monthly_price} is added to the monthly rent.
                </p>
                <p ng-if="apartment.penalizes_short_stay">
                    The landlord for this apartment charges {apartment.short_stay_penalty} more per month price for a stay of less than {apartment.penalty_breakpoint} days.
                </p>

                <p ng-if="apartment.discounts_long_stay">
                    If you book the apartment for more than {apartment.discount_breakpoint} days, your monthly rent is discounted by {apartment.long_stay_discount}.
                </p>
      </Modal>
    </>
  );
};

export default ViewSeasonalPricing;
