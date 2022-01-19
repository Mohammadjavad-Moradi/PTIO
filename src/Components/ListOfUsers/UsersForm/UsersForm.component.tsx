import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  TitleStyles,
  FormWrapperStyles,
  FormFieldStyles,
  LabelStyles,
  SelectStyles,
  InputStyles,
  ErrorMessageStyles,
  FieldContainerStyles,
  RadioButtonStyles,
  RadioFieldContainerStyles,
  CheckboxSelectStyles,
  RolesSelectBoxStyles,
  RolesOptionBoxStyles,
  RolesOptionStyles,
  CancelButtonStyles,
  AddButtonStyles,
  ButtonWrapperStyles,
  ArrowDownStyles,
} from './UsersForm.styles';

interface Inputs {
  LoginUserName: string;
  fullName: string;
  Designation: string;
  EntryDaysLeftForThisLogin: string;
  employeeProfile: string;
  rolesPermissions: string;
  branch: string[];
}

const items = ['Accountant', 'Head of Branch', 'learn GraphQL'];

const UsersForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [expanded, setExpanded] = useState(false);
  const [selections, setSelections] = useState([]);

  const toggleExpanded = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  const handleChange = (event: any) => {
    // if (event.target.checked) {
    //   return setSelections([...selections, event.target.name]);
    // }
    // const filtered = selections.filter((name) => name !== event.target.name);
    // return setSelections(filtered);
  };

  return (
    <FormWrapperStyles>
      <TitleStyles>
        <span>User Aount Information</span>
      </TitleStyles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldStyles>
          <LabelStyles>Employee profile</LabelStyles>
          <FieldContainerStyles>
            <SelectStyles
              {...register('employeeProfile', {
                required: 'This field is required',
              })}
              style={{
                borderColor: errors.employeeProfile ? '#ed3238' : '#BCBCBC',
              }}
            >
              <option value="">Select an employee</option>
              <option value="A">Category A</option>
              <option value="B">Category B</option>
            </SelectStyles>
            {errors.employeeProfile?.message && (
              <ErrorMessageStyles>This field is required</ErrorMessageStyles>
            )}
          </FieldContainerStyles>
        </FormFieldStyles>
        <FormFieldStyles>
          <LabelStyles>Login user name</LabelStyles>
          <FieldContainerStyles>
            <InputStyles
              {...register('LoginUserName', {
                required: 'This field is required',
              })}
              style={{
                borderColor: errors.employeeProfile ? '#ed3238' : '#BCBCBC',
              }}
            />
            {errors.LoginUserName?.message && (
              <ErrorMessageStyles>This field is required</ErrorMessageStyles>
            )}
          </FieldContainerStyles>
        </FormFieldStyles>
        <FormFieldStyles>
          <LabelStyles>Full name</LabelStyles>
          <FieldContainerStyles>
            <InputStyles
              {...register('fullName', { required: 'This field is required' })}
              style={{
                borderColor: errors.employeeProfile ? '#ed3238' : '#BCBCBC',
              }}
            />
            {errors.fullName?.message && (
              <ErrorMessageStyles>This field is required</ErrorMessageStyles>
            )}
          </FieldContainerStyles>
        </FormFieldStyles>
        <FormFieldStyles>
          <LabelStyles>Designation</LabelStyles>
          <FieldContainerStyles>
            <InputStyles
              {...register('Designation', {
                required: 'This field is required',
              })}
              style={{
                borderColor: errors.employeeProfile ? '#ed3238' : '#BCBCBC',
              }}
            />
            {errors.Designation?.message && (
              <ErrorMessageStyles>This field is required</ErrorMessageStyles>
            )}
          </FieldContainerStyles>
        </FormFieldStyles>
        <FormFieldStyles>
          <LabelStyles>Roles/Permissions</LabelStyles>
          <CheckboxSelectStyles>
            <RolesSelectBoxStyles onClick={toggleExpanded}>
              <h6>Type to search roles and permissions</h6>
              <ArrowDownStyles />
            </RolesSelectBoxStyles>
            {expanded && (
              <RolesOptionBoxStyles>
                {items.map((item) => (
                  <RolesOptionStyles htmlFor="one" key={item}>
                    <input
                      type="checkbox"
                      name={item}
                      value={item}
                      onChange={handleChange}
                    />
                    {item}
                  </RolesOptionStyles>
                ))}
              </RolesOptionBoxStyles>
            )}
          </CheckboxSelectStyles>
        </FormFieldStyles>
        <FormFieldStyles>
          <LabelStyles>Entry days left for this login</LabelStyles>
          <FieldContainerStyles>
            <InputStyles
              {...register('EntryDaysLeftForThisLogin', {
                required: 'This field is required',
              })}
              style={{
                borderColor: errors.employeeProfile ? '#ed3238' : '#BCBCBC',
              }}
            />
            {errors.EntryDaysLeftForThisLogin?.message && (
              <ErrorMessageStyles>This field is required</ErrorMessageStyles>
            )}
          </FieldContainerStyles>
        </FormFieldStyles>
        <FormFieldStyles>
          <LabelStyles>Roles/Permissions</LabelStyles>
          <FieldContainerStyles>
            <SelectStyles
              {...register('rolesPermissions', {
                required: 'This field is required',
              })}
              style={{
                borderColor: errors.employeeProfile ? '#ed3238' : '#BCBCBC',
              }}
            >
              <option value="">Select an employee</option>
              <option value="A">Category A</option>
              <option value="B">Category B</option>
            </SelectStyles>
            {errors.rolesPermissions?.message && (
              <ErrorMessageStyles>This field is required</ErrorMessageStyles>
            )}
          </FieldContainerStyles>
        </FormFieldStyles>
        <FormFieldStyles>
          <LabelStyles>User status</LabelStyles>
          <RadioFieldContainerStyles>
            <div>
              <span>Active</span>
              <RadioButtonStyles value="active" name="status" />
            </div>
            <div>
              <span>Not Active</span>
              <RadioButtonStyles value="notActive" name="status" />
            </div>
          </RadioFieldContainerStyles>
        </FormFieldStyles>
        <ButtonWrapperStyles>
          <CancelButtonStyles>Cancel</CancelButtonStyles>
          <AddButtonStyles type="submit">Add</AddButtonStyles>
        </ButtonWrapperStyles>
      </form>
    </FormWrapperStyles>
  );
};

export default UsersForm;
