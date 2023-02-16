import React from 'react';
import { Button, Card, Col, Form, Row, Select, Typography } from 'antd';
import { useSetRecoilState } from 'recoil';
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';
import { subjectAtom } from '../store';
import { ROUTEPATH } from '../types';

function Home() {
  const navigate = useNavigate();
  const setSubject = useSetRecoilState(subjectAtom);
  const [form] = useForm();
  return (
    <Row>
      <Col span={24}>
        <Card
          title={<Typography.Text>기술 인터뷰 문제은행</Typography.Text>}
          actions={[
            <Button
              onClick={() => {
                form.submit();
                navigate(`${ROUTEPATH.QUESTIONS}/1`);
              }}
              type="primary"
              htmlType="submit"
            >
              시작
            </Button>,
          ]}
        >
          <Form
            form={form}
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={({ subject }: { subject: string }) => {
              console.log('set subject value = ', subject);
              setSubject(subject);
            }}
            autoComplete="off"
          >
            <Form.Item
              label="주제"
              name="subject"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
              initialValue="frontend"
            >
              <Select
                style={{ width: 200 }}
                onChange={value => {
                  console.log(value);
                }}
                options={[
                  { value: 'frontend', label: 'Front-end' },
                  { value: 'backend', label: 'Back-end' },
                  { value: 'cs', label: 'Computer Science' },
                ]}
              />
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
