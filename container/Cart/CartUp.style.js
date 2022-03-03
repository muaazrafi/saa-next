import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CartUp = styled.div`
  position: fixed;
  right: 0px;
  z-index: 1500;

  .cart-button{
    height: 36px;
    width: 70px;
  }

  .react-multi-carousel-list {
    min-height: 150px;
    background-color: #e9e8ec;
  }

  .react-multi-carousel-item {
    height: 170px;
  }

  .rasterize {
    height: 250px;
    object-fit: cover;
    width: 100%;
  }
`;

export const CartDrawer = styled.div`
  .ant-card-head {
    background: #F6F6F6;
  }
`;

export default CartUp;