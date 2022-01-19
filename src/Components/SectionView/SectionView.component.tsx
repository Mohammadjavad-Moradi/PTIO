import SectionNav from '../Atom/SectionNav/SectionNav.component';
import Router from '../../Router/Router';

import { SectionWrapperStyles } from './SectionView.styles';

const SectionView: React.FC = () => {
  return (
    <SectionWrapperStyles>
      <SectionNav />
      <Router />
    </SectionWrapperStyles>
  );
};

export default SectionView;
