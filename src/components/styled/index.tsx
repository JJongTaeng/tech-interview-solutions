import styled from '@emotion/styled';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

const FOOTER_HEIGHT = 200;
const HEADER_HEIGHT = 64;
export const CONTENT_PADDING = 50;

export const FixedHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
`;

export const CenterContent = styled(Content)`
  padding: ${CONTENT_PADDING}px 50px;
  .site-layout-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledFooter = styled(Footer)`
  height: ${FOOTER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Contents = styled.div`
  min-height: calc(
    100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT + CONTENT_PADDING * 2}px
  );
  width: 100%;
  max-width: 1400px;
  padding: 1rem;
  background-color: white;
`;
