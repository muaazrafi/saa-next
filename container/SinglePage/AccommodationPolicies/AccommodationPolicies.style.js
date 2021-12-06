import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const AccommodationPoliciesArea = styled.div`
  padding: 29px 0;
  .location_meta {
    margin-bottom: 29px;
  }
  a {
    &:hover {
      color: #31b8bd;
    }
  }
`;

export const ContentArea1 = styled.div`
  padding: 29px 0;
  float: left;
`;
export const ContentArea2 = styled.div`
  padding: 29px 0;
  float: right;
`;
export const AccommodationPolicieswrapper = styled.div`
  border-radius: 4px;
  padding: 0px 0px 30px;
  margin-bottom: 5px;
`;

export default AccommodationPoliciesArea;