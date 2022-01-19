import {
  TitleStyles,
  UserSideBarWrapper,
  SubtitleStyles,
} from './UsersSideBar.styles';

const UsersSideBar: React.FC = () => {
  return (
    <UserSideBarWrapper>
      <TitleStyles>
        <span>User Account Information</span>
      </TitleStyles>
      <SubtitleStyles>
        <span>Contact Information</span>
      </SubtitleStyles>
    </UserSideBarWrapper>
  );
};

export default UsersSideBar;
