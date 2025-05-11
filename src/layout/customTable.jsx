import React, { useState } from 'react';
import { Button, Space, Table } from 'antd';
import { CheckOutlined ,CloseOutlined ,MehOutlined ,SmileOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons'; 

const data = [
    {
      key: '1',
      itemName: 'Test Item 1',
      nameOnDisplay: 'Display Name 1',
      price: 70.5,
      printer: 'None',
      Kds: 'KDS 1',
      category: 'Category A',
      size: 'Large',
      taxRate: '10%',
      modifierGroup: 'Modifier Group 1',
      barcode: '1234567890',
      active: 'Yes',
      haHours: 'Happy',
      color: '#ff0000',
      createdAt: '2024-12-01',
    },
    {
      key: '2',
      itemName: 'Test Item 2',
      nameOnDisplay: 'Display Name 2',
      price: 45.0,
      printer: 'HP',
      Kds: 'KDS 2',
      category: 'Category B',
      size: 'Medium',
      taxRate: '8%',
      modifierGroup: 'Modifier Group 2',
      barcode: '0987654321',
      active: 'No',
      haHours: 'Sad',
      color: '#ffff00',
      createdAt: '2025-01-15',
    },
  ];
const CustomTable = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
      sorter: (a, b) => a.itemName.localeCompare(b.itemName),
      sortOrder: sortedInfo.columnKey === 'itemName' ? sortedInfo.order : null,
      ellipsis: true,
      align: 'center',
    },
    {
      title: 'Name on Display',
      dataIndex: 'nameOnDisplay',
      key: 'nameOnDisplay',
      ellipsis: true,
      align: 'center',
      render: (data) => <div className="">{data}</div>

    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'price' ? sortedInfo.order : null,
      ellipsis: true,
      align: 'center',

    },
    {
      title: 'Printer',
      dataIndex: 'printer',
      key: 'printer',
      filters: [
        { text: 'None', value: 'None' },
        { text: 'HP', value: 'HP' },
      ],
      filteredValue: filteredInfo.printer || null,
      onFilter: (value, record) => record.printer === value,
      ellipsis: true,
      align: 'center',

    },
    {
      title: 'KDS',
      dataIndex: 'Kds',
      key: 'Kds',
      ellipsis: true,
      align: 'center',

    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      ellipsis: true,
      align: 'center',

    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      ellipsis: true,
      align: 'center',

    },
    {
      title: 'Tax Rate',
      dataIndex: 'taxRate',
      key: 'taxRate',
      ellipsis: true,
      align: 'center',

    },
    {
      title: 'Modifier Group',
      dataIndex: 'modifierGroup',
      key: 'modifierGroup',
      ellipsis: true,
      align: 'center',

    },
    {
      title: 'Barcode',
      dataIndex: 'barcode',
      key: 'barcode',
      ellipsis: true,
      align: 'center',

    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      filters: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filteredValue: filteredInfo.active || null,
      onFilter: (value, record) => record.active === value,
      ellipsis: true,
      align: 'center',
      render: (data) => <div  className="flex justify-center gap-2">
       {data == 'Yes' ? <CheckOutlined /> : <CloseOutlined />} </div>
    },
    {
      title: 'HA Hours',
      dataIndex: 'haHours',
      key: 'haHours',
      ellipsis: true,
      align: 'center',
      render: (data) => <div  className="flex justify-center gap-2">
       {data == 'Happy' ? <SmileOutlined /> : <MehOutlined />} </div>
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
      ellipsis: true,
      align: 'center',
      render: (data) => <div  className="flex justify-start gap-2">
         <div style={{background: data}} className="w-[20px] h-[20px]"></div> {data}
        </div>
         

    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => dayjs(a.createdAt).unix() - dayjs(b.createdAt).unix(),
      sortOrder: sortedInfo.columnKey === 'createdAt' ? sortedInfo.order : null,
      ellipsis: true,
      align: 'center',
    },
    {
      title: 'Add New Item',
      dataIndex: '',
      key: '',
      ellipsis: true,
      align: 'center',
      render: (data) => <div className="flex justify-between gap-2">
        <div className="flex gap-2 text-orange-400 cursor-pointer">
          <EditOutlined />
          <span>
            Edit
          </span>
        </div>
        <div className="flex gap-2 text-red-600 cursor-pointer">
          <DeleteOutlined />
          <span>
            Delete
          </span>
        </div>
      </div>
    },
  ];
  
  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns}   scroll={{ x: 'max-content' }} dataSource={data} onChange={handleChange} />
    </>
  );
};
export default CustomTable;