import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubmenuStyles = styled.div`
  position: relative;
  padding: 0;
  margin-left: 30px;
  margin-top: 10px;
`;

export const SubItemStyles = styled(({ ...props }) => <Link {...props} />)`
  display: block;
  text-decoration: none;
  &:link,
  &:visited {
    color: ${(props) => (props.ispath === 'true' ? '#ff6600' : 'inherit')};
  }
  span {
    position: relative;
    line-height: 40px;
  }
  span::before {
    content: '';
    height: 40px;
    width: 11px;
    border-bottom: 1px solid #ff6600;
    border-left: 1px solid #ff6600;
    position: absolute;
    bottom: 10px;
    left: -11px;
    z-index: 0;
    margin-left: -5px;
  }
`;
