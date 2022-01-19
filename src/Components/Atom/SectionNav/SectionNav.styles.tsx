import styled from 'styled-components';

import { ReactComponent as Home } from '../../../assets/icons/Home.svg';
import { ReactComponent as InsideHome } from '../../../assets/icons/insideHome.svg';
import Stack from '@mui/material/Stack';

export const StackStyles = styled(Stack)`
  margin: 64px 0 40px;
`;

export const HomeIconStyles = styled(Home)`
  position: relative;
`;

export const InsideHomeShape = styled(InsideHome)`
  position: absolute;
  left: 30px;
  top: 74px;
  z-index: 1;
`;

export const HomeLinkWrapperStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  gap: 10px;
`;

export const CurrentSectionTitleStyles = styled.span`
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff6600;
`;
