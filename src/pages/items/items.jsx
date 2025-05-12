import { Button, Checkbox, ColorPicker, Form, Input, InputNumber, Modal } from 'antd';
import CustomModal from '../../components/CustomModal';
import CustomTable from '../../components/CustomTable';
import CustomSelect from '../../components/CustomSelect';
import { useState } from 'react';

const kdsOptions = [
  { label: 'KDS 1', value: 'kds1' },
  { label: 'KDS 2', value: 'kds2' },
  { label: 'None', value: 'none' }
];

const categoryOptions = [
  { label: 'Food', value: 'food' },
  { label: 'Drink', value: 'drink' },
  { label: 'Dessert', value: 'dessert' }
];

const sizeOptions = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' }
];

const taxRateOptions = [
  { label: '5%', value: '5' },
  { label: '10%', value: '10' },
  { label: '15%', value: '15' }
];

const modifierGroupOptions = [
  { label: 'Sauce', value: 'sauce' },
  { label: 'Toppings', value: 'toppings' },
  { label: 'Extras', value: 'extras' }
];

import {
  CheckOutlined,
  CloseOutlined,
  MehOutlined,
  SmileOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
  ScheduleOutlined
} from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 30 },
    sm: { span: 9 }
  },
  wrapperCol: {
    xs: { span: 30 },
    sm: { span: 13 }
  }
};

const Items = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [data, setData] = useState([
    {
      key: '1',
      itemName: 'Grilled Chicken',
      nameOnDisplay: 'Grilled Chicken Deluxe',
      price: 12.99,
      printer: 'Kitchen Printer 1',
      Kds: 'KDS 1',
      category: 'Entrees',
      size: 'Large',
      taxRate: '8%',
      modifierGroup: 'Chicken Toppings',
      barcode: '111222333',
      active: 'Yes',
      haHours: 'Happy',
      color: '#FFA500',
      createdAt: '2025-04-01',
      sort: 1,
      pageBreak: 'N/A',
      pageSort: 1,
      Qty: 100,
      mainBarcode: '111222333444',
      ainMod: 2,
      maxMod: 5,
      itemNumber: 101,
      unitName: 'Plate',
      manufacture: 'Local Farm Co.',
      freeModifierCount: 1,
      weightRequired: true,
      foodStampable: false,
      visible: true
    },
    {
      key: '2',
      itemName: 'Veggie Wrap',
      nameOnDisplay: 'Fresh Veggie Wrap',
      price: 9.5,
      printer: 'HP',
      Kds: 'KDS 2',
      category: 'Wraps',
      size: 'Medium',
      taxRate: '7%',
      modifierGroup: 'Wrap Add-ons',
      barcode: '444555666',
      active: 'No',
      haHours: 'Sad',
      color: '#00FF00',
      createdAt: '2025-04-05',
      sort: 2,
      pageBreak: 'Section A',
      pageSort: 2,
      Qty: 50,
      mainBarcode: '444555666777',
      ainMod: 1,
      maxMod: 3,
      itemNumber: 102,
      unitName: 'Wrap',
      manufacture: 'Green Farms',
      freeModifierCount: 2,
      weightRequired: false,
      foodStampable: true,
      visible: false
    },
    {
      key: '3',
      itemName: 'Chocolate Cake',
      nameOnDisplay: 'Choco Delight Cake',
      price: 6.75,
      printer: 'Bakery Printer',
      Kds: 'KDS 3',
      category: 'Desserts',
      size: 'Small',
      taxRate: '10%',
      modifierGroup: 'Cake Options',
      barcode: '777888999',
      active: 'Yes',
      haHours: 'Happy',
      color: '#8B4513',
      createdAt: '2025-04-10',
      sort: 3,
      pageBreak: 'Section B',
      pageSort: 3,
      Qty: 25,
      mainBarcode: '777888999000',
      ainMod: 0,
      maxMod: 0,
      itemNumber: 103,
      unitName: 'Slice',
      manufacture: 'Sweet Bakery',
      freeModifierCount: 0,
      weightRequired: false,
      foodStampable: false,
      visible: true
    }
  ]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedRow, setSelectedRow] = useState(null);
  // Modal -----
  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };
  const handleSubmit = () => {
    const values = form.getFieldsValue();
    if (selectedRow) {
      const updatedData = data.map((item) => (item.key === selectedRow ? { ...item, ...values, key: selectedRow } : item));
      setData(updatedData);
    } else {
      const newItem = { ...values, key: Date.now().toString() };
      setData([...data, newItem]);
    }
    handleCancel();
    setSelectedRow(null);
  };
  // Table -----
  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
      sorter: (a, b) => a.itemName.localeCompare(b.itemName),
      sortOrder: sortedInfo.columnKey === 'itemName' ? sortedInfo.order : null,
      align: 'center'
    },
    {
      title: 'Name on Display',
      dataIndex: 'nameOnDisplay',
      key: 'nameOnDisplay',
      align: 'center',
      render: (data) => <div className="">{data}</div>
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'price' ? sortedInfo.order : null,
      align: 'center'
    },
    {
      title: 'Printer',
      dataIndex: 'printer',
      key: 'printer',
      filters: [
        { text: 'None', value: 'None' },
        { text: 'HP', value: 'HP' }
      ],
      filteredValue: filteredInfo.printer || null,
      onFilter: (value, record) => record.printer === value,
      align: 'center'
    },
    {
      title: 'KDS',
      dataIndex: 'Kds',
      key: 'Kds',
      align: 'center'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      align: 'center'
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      align: 'center'
    },
    {
      title: 'Tax Rate',
      dataIndex: 'taxRate',
      key: 'taxRate',
      align: 'center'
    },
    {
      title: 'Modifier Group',
      dataIndex: 'modifierGroup',
      key: 'modifierGroup',
      align: 'center'
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
      align: 'center',
      width: 150,
      render: (data) => (
        <div className="flex justify-center items-center  gap-2">
          <div style={{ background: data }} className="w-[20px] h-[20px]"></div>
          <span>{data}</span>
        </div>
      )
    },
    {
      title: 'Barcode',
      dataIndex: 'barcode',
      key: 'barcode',
      align: 'center'
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      filters: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' }
      ],
      filteredValue: filteredInfo.active || null,
      onFilter: (value, record) => record.active === value,
      align: 'center',
      render: (data) => <div className="flex justify-center gap-2">{data == 'Yes' ? <CheckOutlined /> : <CloseOutlined />} </div>
    },
    {
      title: () => (
        <div onClick={handleEdit} className=" cursor-pointer text-[#1890ff]">
          <PlusSquareOutlined /> Add Item
        </div>
      ),
      dataIndex: '',
      key: '',
      align: 'center',
      width: 150,
      render: (data) => (
        <div className="flex justify-between gap-2">
          <div onClick={() => handleEdit(data)} className="flex gap-2 text-orange-400 cursor-pointer">
            <EditOutlined />
            <span>Edit</span>
          </div>
          <div
            onClick={() => {
              Modal.confirm({
                onOk: () => handleDelete(data),
                title: 'Are You Sure!',
                content: 'You Want Delete This Item?',
                footer: (_, { OkBtn, CancelBtn }) => (
                  <>
                    <CancelBtn />
                    <OkBtn />
                  </>
                )
              });
            }}
            className="flex gap-2 text-red-600 cursor-pointer"
          >
            <DeleteOutlined />
            <span>Delete</span>
          </div>
        </div>
      )
    },
    {
      title: 'Schedule',
      dataIndex: 'schedule',
      key: 'schedule',
      align: 'center',
      render: (data) => <div className="flex justify-center gap-2">{<ScheduleOutlined />} </div>
    },
    {
      title: 'HA Hours',
      dataIndex: 'haHours',
      key: 'haHours',
      align: 'center',
      render: (data) => <div className="flex justify-center gap-2">{data == 'Happy' ? <SmileOutlined /> : <MehOutlined />} </div>
    }
  ];
  const handleDelete = (rowData) => {
    const items = data?.filter((item) => item.key !== rowData.key);
    setData(items);
  };
  const handleEdit = (rowData) => {
    setSelectedRow(rowData?.key || null);
    form.setFieldsValue({
      ...rowData
    });
    setOpen(true);
  };
  const handleChangeTable = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  return (
    <div className="">
      <CustomTable handleChange={handleChangeTable} columns={columns} data={data} />

      <CustomModal open={open} header={'Edit Form'} width={1200} handleCancel={handleCancel}>
        <Form {...formItemLayout} form={form} variant={'filled'} initialValues={{ variant: 'filled' }} onFinish={handleSubmit}>
          <div className="grid grid-cols-3 gap-2">
            <Form.Item label="Item Name" name="itemName" rules={[{ required: true, message: 'Please Fill Item Name!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Name on Display" name="nameOnDisplay" rules={[{ required: true, message: 'Please Fill Name on Display!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Sort" name="sort" rules={[{ required: true, message: 'Please Fill Sort!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please Fill Price!' }]}>
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item label="Printer" name="printer" rules={[{ required: true, message: 'Please Fill Printer!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="KDS" name="Kds" rules={[{ required: true, message: 'Please Select KDS!' }]}>
              <CustomSelect options={kdsOptions} />
            </Form.Item>

            <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please Select Category!' }]}>
              <CustomSelect options={categoryOptions} />
            </Form.Item>

            <Form.Item label="Size" name="size" rules={[{ required: true, message: 'Please Select Size!' }]}>
              <CustomSelect options={sizeOptions} />
            </Form.Item>

            <Form.Item label="Tax Rate" name="taxRate" rules={[{ required: true, message: 'Please Fill Tax Rate!' }]}>
              <CustomSelect options={taxRateOptions} />
            </Form.Item>

            <Form.Item
              label="Modifier Group"
              name="modifierGroup"
              rules={[{ required: true, message: 'Please Select Modifier Group input!' }]}
            >
              <CustomSelect options={modifierGroupOptions} />
            </Form.Item>

            <Form.Item label="Color" name="color" rules={[{ required: true, message: 'Please Select Color!' }]}>
              <ColorPicker
                allowClear
                showText
                className="w-full flex justify-start bg-gray-100/95 border-none"
                mode={['single', 'gradient']}
                onChangeComplete={(color) => {
                  form.setFieldValue('color', color.toHexString());
                }}
              />
            </Form.Item>

            <Form.Item label="Page Break" name="pageBreak" rules={[{ required: true, message: 'Please Fill Page Break!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Page Sort" name="pageSort" rules={[{ required: true, message: 'Please Fill Page Sort!' }]}>
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item label="Qty" name="Qty" rules={[{ required: true, message: 'Please Fill Qty!' }]}>
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item label="Main Barcode" name="mainBarcode" rules={[{ required: true, message: 'Please Fill Main Barcode!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Barcode" name="barcode" rules={[{ required: true, message: 'Please Fill Barcode!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Main Mod" name="ainMod" rules={[{ required: true, message: 'Please Fill Main Mode!' }]}>
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item label="Max Mod" name="maxMod" rules={[{ required: true, message: 'Please Fill Max Mode!' }]}>
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item label="Item Number" name="itemNumber" rules={[{ required: true, message: 'Please Fill Item Number!' }]}>
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item label="Unit Name" name="unitName" rules={[{ required: true, message: 'Please Fill Unit Name!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Manufacture" name="manufacture" rules={[{ required: true, message: 'Please Fill Manufacture!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Free Modifier Count"
              name="freeModifierCount"
              rules={[{ required: true, message: 'Please Fill Item Number!' }]}
            >
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item label="Weight Required" name="weightRequired" valuePropName="checked">
              <Checkbox className="ml-[.2em]" />
            </Form.Item>

            <Form.Item label="Food Stampable" name="foodStampable" valuePropName="checked">
              <Checkbox className="ml-[.2em]" />
            </Form.Item>

            <Form.Item label="Visible" name="visible" valuePropName="checked">
              <Checkbox className="ml-[.2em]" />
            </Form.Item>

            <Form.Item label="Active" name="active" valuePropName="checked">
              <Checkbox className="ml-[.2em]" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 13, span: 16 }}>
              <div className="flex gap-2">
                <Button onClick={handleCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </CustomModal>
    </div>
  );
};

export default Items;
