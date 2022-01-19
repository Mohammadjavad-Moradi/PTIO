import styled from 'styled-components';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { ReactComponent as ArrowDown } from '../../../assets/icons/ArrowDown.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/ArrowUp.svg';

export const AccordionStyles = styled(MuiAccordion)`
  width: 312px;
  &.MuiAccordion-root:before {
    background-color: #fff;
  }
`;

export const SlideBarItemStyles = styled(MuiAccordionSummary)`
  height: 48px;
  width: 312px;
  border-radius: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px 12px 24px;
  justify-content: space-between;
`;

export const WrapperStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const IconStyles = styled.img`
  height: 20px;
  width: 20px;
  left: 2px;
  top: 2px;
`;

export const TextStyles = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
`;

export const TextExpandedStyles = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #ff6600;
`;

export const ArrwoDownStyles = styled(ArrowDown)`
  height: 4px;
  width: 8px;
`;

export const ArrowUpStyles = styled(ArrowUp)`
  height: 4px;
  width: 8px;
`;

export const SlideBarSubtitle = styled(MuiAccordionDetails)``;

export const ActiveBoxStyles = styled.div`
  height: 48px;
  width: 5px;
  left: 0px;
  top: 0px;
  position: absolute;
  background-color: #ff6600;
  border-radius: 0 5px 5px 0;
`;
