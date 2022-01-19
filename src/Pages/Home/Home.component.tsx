import Header from '../../Components/Atom/Header/Header.component';
import SlideBarWrapper from '../../Components/SlideBar/SlideBarWrapper/SlideBarWrapper.component';
import SectionView from '../../Components/SectionView/SectionView.component';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SlideBarWrapper />
      <SectionView />
    </>
  );
};

export default Home;
