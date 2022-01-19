import SlidebarSubtitles from '../SlidebarSubtitles/SlidebarSubtitles.component';

import {
  SlideBarItemStyles,
  WrapperStyles,
  IconStyles,
  TextStyles,
  ArrwoDownStyles,
  AccordionStyles,
  ArrowUpStyles,
  SlideBarSubtitle,
  TextExpandedStyles,
  ActiveBoxStyles,
} from './SlideBarItem.styles';

export interface SubItemType {
  subTitle: string;
  linkUrl: string;
}

interface SlideBarItemPropType {
  src: string;
  title: string;
  expanded: boolean;
  handleClick(id: string): void;
  id: string;
  expandedSrc: string;
  subtitleContent: SubItemType[];
}

const SlideBarItem: React.FC<SlideBarItemPropType> = ({
  src,
  expandedSrc,
  title,
  expanded,
  handleClick,
  id,
  subtitleContent,
}) => {
  return (
    <AccordionStyles
      disableGutters
      elevation={0}
      square
      expanded={expanded}
      className="MuiAccordionroot"
    >
      <SlideBarItemStyles
        onClick={() => handleClick(id)}
        expandIcon={
          expanded ? (
            <ArrowUpStyles aria-hidden="true" />
          ) : (
            <ArrwoDownStyles aria-hidden="true" />
          )
        }
      >
        <WrapperStyles>
          {expanded ? (
            <>
              <ActiveBoxStyles />
              <IconStyles src={expandedSrc} alt={title} />
              <TextExpandedStyles>{title}</TextExpandedStyles>
            </>
          ) : (
            <>
              <IconStyles src={src} alt={title} />
              <TextStyles>{title}</TextStyles>
            </>
          )}
        </WrapperStyles>
      </SlideBarItemStyles>
      <SlideBarSubtitle>
        <SlidebarSubtitles subtitleContent={subtitleContent} />
      </SlideBarSubtitle>
    </AccordionStyles>
  );
};

export default SlideBarItem;
