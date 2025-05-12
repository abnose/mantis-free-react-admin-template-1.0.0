import { Modal } from 'antd';

const CustomModal = ({ header, children, width, open, handleCancel }) => {
  return (
    <Modal footer={null} closable={false} open={open} title={null} width={width} onCancel={handleCancel} zIndex={10000} centered>
      <div className="flex justify-between items-center px-2 pb-3 border-b mb-5 border-gray-200">
        <h2 className="text-xl font-semibold">{header}</h2>
        <button onClick={handleCancel} className="text-red-500 hover:text-red-700 font-bold text-lg">
          ✕
        </button>
      </div>
      {children}
    </Modal>
  );
};

export default CustomModal;
