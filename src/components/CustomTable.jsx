import { Table } from 'antd';

const CustomTable = ({ columns, data, handleChange }) => {
  return (
    <>
      <Table columns={columns} scroll={{ x: 'max-content' }} dataSource={data} onChange={handleChange} />
    </>
  );
};
export default CustomTable;
