import styled from 'styled-components';

import { ReactComponent as ArrowDown } from '../../../assets/icons/ArrowDown.svg';
import { ReactComponent as Checked } from '../../../assets/icons/Shape.svg';

export const FormWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
`;

export const TitleStyles = styled.div`
  color: #404040;
  padding: 16px 24px;
  background-color: #fff;
  height: 48px;
  box-shadow: 0px 4px 10px rgba(134, 134, 134, 0.1);
`;

export const FormFieldStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  margin: 32px;
`;

export const LabelStyles = styled.div`
  flex: 1;
  text-align: right;
  line-height: 40px;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
`;

export const SelectStyles = styled.select`
  flex: 2;
  width: 345px;
  font-size: 14px;
  height: 40px;
  padding: 10px 16px;
  color: #535353;
  background-color: #fff;
  background-repeat: no-repeat, repeat;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const InputStyles = styled.input`
  height: 40px;
  color: #535353;
  width: 345px;
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid;
`;

export const ErrorMessageStyles = styled.div`
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #ed3238;
`;

export const FieldContainerStyles = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const RadioButtonStyles = styled(({ ...props }) => (
  <input type="radio" {...props} />
))`
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1em;
  height: 1em;
  border: 0.05em solid #b1b1b1;
  border-radius: 50%;
  transform: translateY(0.1em);
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ff6600;
    z-index: 1;
  }
  &:checked::before {
    transform: scale(1);
    z-index: 1;
  }
`;

export const RadioFieldContainerStyles = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  width: 345px;
  div {
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    gap: 10px;
    position: relative;
  }
`;

export const CheckboxSelectStyles = styled.div`
  flex: 2;
  width: 345px;
  height: auto;
`;

export const RolesSelectBoxStyles = styled.div`
  border: 1px solid black;
  width: 345px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 16px;
  h6 {
    font-family: 'Open Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    letter-spacing: 0em;
    color: #535353;
  }
`;

export const RolesOptionBoxStyles = styled.div`
  height: 192px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  width: 345px;
`;

export const RolesOptionStyles = styled.label`
  line-height: 48px;
  width: 341px;
  padding: 4px 16px 4px 24px;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  input[type='checkbox'] {
    appearance: none;
    background-color: #fff;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid currentColor;
    border-radius: 0.15em;
    transform: translateY(0.9em);
    display: grid;
    place-content: center;
  }
  input[type='checkbox']::before {
    content: '';
    width: 1.2em;
    height: 1.2em;
    border-radius: 0.2em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ff6600;
    transform-origin: bottom left;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      37% 100%,
      37% 89%,
      96% 39%,
      90% 27%,
      38% 73%,
      16% 48%,
      8% 58%,
      37% 89%,
      37% 100%,
      0 100%
    );
  }
  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
`;

export const ArrowDownStyles = styled(ArrowDown)`
  padding: 18px 16px;
`;

export const CheckedShape = styled(Checked)`
  background-color: #ff6600;
`;

export const ButtonWrapperStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 24px;
  width: 616px;
`;

export const CancelButtonStyles = styled.button`
  height: 40px;
  width: 83px;
  border-radius: 4px;
  padding: 10px, 16px, 11px, 16px;
  color: #ff6600;
  border: 1px solid #ff6600;
  background-color: #fff;
`;

export const AddButtonStyles = styled.button`
  height: 40px;
  width: 63px;
  left: 897px;
  top: 1161px;
  border-radius: 4px;
  border: 1px solid #ff6600;
  padding: 10px, 16px, 11px, 16px;
  background-color: #ff6600;
  color: #fff;
`;
