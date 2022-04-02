import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';

const FormSesionInit = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className="m-auto max-w-md"
      layout="vertical"
      name="basic"
      /*  labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }} */
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        /*  wrapperCol={{ offset: 8, span: 16 }} */
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item /* wrapperCol={{ offset: 8, span: 16 }} */>
        <Button type="primary" htmlType="submit" className="w-full">
          Log in
        </Button>
        Nuevo en Ecommerce ?
      </Form.Item>

      <Form.Item /* wrapperCol={{ offset: 8, span: 16 }} */>
        <Link href="/register/">
          <a className="border-none text-gray-700 hover:text-gray-900">
            <Button type="primary" htmlType="submit" className="w-full">
              Crear una Cuenta
            </Button>
          </a>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default FormSesionInit;
