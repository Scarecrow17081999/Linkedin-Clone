import { Space, Spin } from "antd";
import './Loader.scss';
const Loader = () => (
  <Space className="loader" size="middle">
    Loading Please Wait...
    <Spin size="large" />
  </Space>
);
export default Loader;