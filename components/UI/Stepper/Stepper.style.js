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

  .stepper-progress {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 79px;
    &.ant-progress-line {
      line-height: 1;
    }
    .ant-progress-outer {
      .ant-progress-inner {
        border-radius: 0;
        background-color: ${themeGet('border.3', '#E6E6E6')};

        .ant-progress-bg {
          height: 10px !important;
          border-top-left-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
          background-color: ${themeGet('primary.0', '#0088E5')};
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        }
      }
    }
  }
`;

export default Wrapper;