import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
  StackStyles,
  HomeIconStyles,
  InsideHomeShape,
  HomeLinkWrapperStyles,
  CurrentSectionTitleStyles,
} from './SectionNav.styles';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const SectionNav: React.FC = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <HomeLinkWrapperStyles>
        <div>
          <HomeIconStyles />
          <InsideHomeShape />
        </div>
        <span>Home</span>
      </HomeLinkWrapperStyles>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
    >
      User Management
    </Link>,
    <CurrentSectionTitleStyles key="3">
      List of Users
    </CurrentSectionTitleStyles>,
  ];

  return (
    <StackStyles spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </StackStyles>
  );
};

export default SectionNav;
