import styled from 'styled-components';

export const RightHeaderWrapperStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding: 18px 24px 17px;
  position: absolute;
  width: calc(100% - 312px);
  height: 80px;
  left: 312px;
  top: 0px;
  background: #404040;
  box-sizing: border-box;

  h4 {
    font-family: 'Open Sans' !important;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
