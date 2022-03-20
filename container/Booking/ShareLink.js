import React from "react";
import { Alert, Button, Card } from "antd";

const ShareLink = ({ booking }) => {
  return (
    <Card title="Share Booking Link">
      <Alert
        message="You can also share this unique url to invite friends:"
        description={booking.invitation_path}
        type="info"
        className="referralLinkAlert"
        action={<Button>Copy</Button>}
      />
    </Card>
  );
};

export default ShareLink;
