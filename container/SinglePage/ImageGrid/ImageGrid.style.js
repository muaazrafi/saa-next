import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ImageGridWrapper = styled.div`
  position: relative;

  .image-grid-first {
    height: 400px;
    object-fit: cover;
  }
  .image-grid-second {
    display: block;
    height: 200px;
    padding-bottom: 10px;
    object-fit: cover;
  }
  .image-grid-third {
    display: block;
    height: 200px;
    object-fit: cover;
  }
`;
  
  export default ImageGridWrapper;
  