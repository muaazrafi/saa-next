import React from "react";
import { Card, Form, Select, Button, Input, Alert, Row, Col, Tag } from "antd";
import { each } from "lodash";

const InviteFriends = ({ booking }) => {
  const onFinish = (values) => {
    console.log("Let's wire this up");
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
                  if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && !invalid ) {
                    invalid = true
                  }
                })
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

        <Button type="warning" htmlType="submit" style={ { width: '100%', marginTop: '10px' } } >
          Send Invite
        </Button>
      </Form>
    </Card>
  );
};

export default InviteFriends;
