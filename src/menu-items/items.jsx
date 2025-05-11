// assets
import { UnorderedListOutlined } from '@ant-design/icons';

// icons
const icons = {
  UnorderedListOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'items',
  title: 'Items',
  type: 'group',
  children: [
    {
      id: 'item',
      title: 'Items',
      type: 'item',
      url: '/items-page',
      icon: icons.UnorderedListOutlined
    }
  ]
};

export default pages;
