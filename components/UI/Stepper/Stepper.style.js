import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .ant-steps{
    margin-bottom: 20px;
  }

`;

export default Wrapper;