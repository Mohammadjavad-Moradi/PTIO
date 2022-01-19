import { useState } from 'react';
import SlideBarItem from '../SlideBarItem/SlideBarItem.component';

import { SlideBarStyles } from './SlideBarWrapper.styles';

const slideBarData = [
  {
    src: 'assets/icon_company.png',
    expandedSrc: 'assets/icon_company.png',
    title: 'Company',
    subtitleContent: [
      {
        subTitle: 'List of Users',
        linkUrl: '',
      },
      {
        subTitle: 'Permissions/Rols',
        linkUrl: '',
      },
    ],
  },
  {
    src: 'assets/icon_user.jpg',
    expandedSrc: 'assets/icon_user_expanded.jpg',
    title: 'User Management',
    subtitleContent: [
      {
        subTitle: 'List of Users',
        linkUrl: '/usersmanagement/listofusers',
      },
      {
        subTitle: 'Permissions/Rols',
        linkUrl: '',
      },
    ],
  },
  {
    src: 'assets/icon_customer.png',
    expandedSrc: 'assets/icon_customer.png',
    title: 'Customer Management',
    subtitleContent: [
      {
        subTitle: 'List of Users',
        linkUrl: '',
      },
      {
        subTitle: 'Permissions/Rols',
        linkUrl: '',
      },
    ],
  },
  {
    src: 'assets/icon_credit.png',
    expandedSrc: 'assets/icon_credit.png',
    title: 'Credit and Loan Management',
    subtitleContent: [
      {
        subTitle: 'List of Users',
        linkUrl: '',
      },
      {
        subTitle: 'Permissions/Rols',
        linkUrl: '',
      },
    ],
  },
  {
    src: './assets/icon_account.png',
    expandedSrc: './assets/icon_account.png',
    title: 'Account',
    subtitleContent: [
      {
        subTitle: 'List of Users',
        linkUrl: '',
      },
      {
        subTitle: 'Permissions/Rols',
        linkUrl: '',
      },
    ],
  },
  {
    src: './assets/icon_portfolio.png',
    expandedSrc: './assets/icon_portfolio.png',
    title: 'Portfolio',
    subtitleContent: [
      {
        subTitle: 'List of Users',
        linkUrl: '',
      },
      {
        subTitle: 'Permissions/Rols',
        linkUrl: '',
      },
    ],
  },
  {
    src: './assets/icon_gurantees.png',
    expandedSrc: './assets/icon_gurantees.png',
    title: 'Guarentees',
    subtitleContent: [
      {
        subTitle: 'List of Users',
        linkUrl: '',
      },
      {
        subTitle: 'Permissions/Rols',
        linkUrl: '',
      },
    ],
  },
];

const SlideBarWrapper: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean | string>(false);
  const handleClick = (id: string) => {
    id === expanded ? setExpanded(false) : setExpanded(id);
  };

  return (
    <SlideBarStyles>
      {slideBarData.map((item) => (
        <SlideBarItem
          src={item.src}
          expandedSrc={item.expandedSrc}
          title={item.title}
          handleClick={handleClick}
          expanded={expanded === item.title}
          id={item.title}
          subtitleContent={item.subtitleContent}
          key={item.title}
        />
      ))}
    </SlideBarStyles>
  );
};

export default SlideBarWrapper;
