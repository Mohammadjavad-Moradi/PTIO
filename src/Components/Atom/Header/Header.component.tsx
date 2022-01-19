import RightHeader from '../RightHeader/RightHeader.component';

import { HeaderStyles, LeftHeader, PilahuintioImg } from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <LeftHeader>
        <PilahuintioImg />
      </LeftHeader>
      <RightHeader />
    </HeaderStyles>
  );
};

export default Header;
