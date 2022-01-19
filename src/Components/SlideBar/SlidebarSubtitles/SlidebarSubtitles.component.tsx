import { SubmenuStyles, SubItemStyles } from './SlidebarSubtitles.styles';
import { SubItemType } from '../SlideBarItem/SlideBarItem.component';
import { useLocation } from 'react-router-dom';

interface SliderBarSubtitlePropType {
  subtitleContent: SubItemType[];
}

const SlidebarSubtitles: React.FC<SliderBarSubtitlePropType> = ({
  subtitleContent,
}) => {
  //console.log(window.location.pathname);
  let location = useLocation();
  //console.log(location);
  return (
    <SubmenuStyles>
      {subtitleContent.map((item) => (
        <SubItemStyles
          key={item.subTitle}
          to={item.linkUrl}
          ispath={item.linkUrl === location.pathname ? 'true' : undefined}
        >
          <span>{item.subTitle}</span>
        </SubItemStyles>
      ))}
    </SubmenuStyles>
  );
};

export default SlidebarSubtitles;
