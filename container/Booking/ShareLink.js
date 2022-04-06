import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert, Button, Card, notification } from "antd";

const ShareLink = ({ booking }) => {
  return (
    <Card title="Share Booking Link">
      <Alert
        message="You can also share this unique url to invite friends:"
        description={booking.invitation_path}
        type="info"
        className="referralLinkAlert"
        action={
          <CopyToClipboard
            text={booking.invitation_path}
            onCopy={() => {
              notification["success"]({
                message: "Copied",
                description: "Successfully copied invitation link.",
              });
            }}
          >
            <Button>Copy</Button>
          </CopyToClipboard>
        }
      />
    </Card>
  );
};

export default ShareLink;
