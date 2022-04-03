import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, Select, Button } from "antd";
import { each } from "lodash";
import { handleLoading } from "store/bookingSlice";
import { inviteSplit } from "store/services/booking";

const InviteFriends = ({ booking }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.booking);

  const onFinish = (values) => {
    dispatch(handleLoading(true));
    dispatch(
      inviteSplit({
        split: {
          booking_id: booking.id,
          emails: values.emails,
        },
      })
    );
  };

  return (
    <Card title="Invite Friends">
      <Form name="normal_login" onFinish={onFinish} labelCol={{ span: 24 }}>
        <Form.Item
          label="Enter your friend's email and we'll send them an invite:"
          name="emails"
          rules={[
            { required: true, message: "Please enter one valid E-mail!" },
            ({ getFieldValue }) => ({
              validator(rule, emails) {
                let invalid = false;
                each(emails, (email) => {
                  if (
                    !email.match(
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) &&
                    !invalid
                  ) {
                    invalid = true;
                  }
                });
                if (invalid) {
                  return Promise.reject("List has invalid email addresses.");
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="friends@email.com"
            allowClear
          ></Select>
        </Form.Item>

        <Button
          type="warning"
          htmlType="submit"
          style={{ width: "100%", marginTop: "10px" }}
          loading={loading}
        >
          Send Invite
        </Button>
      </Form>
    </Card>
  );
};

export default InviteFriends;
