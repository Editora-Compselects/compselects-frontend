import { HeroSection } from '../components/home/HeroSection';
import { Destaques } from '../components/home/Destaques';
import { Eventos } from '../components/home/Eventos';
import { Sobre } from '../components/home/Sobre';
import { Comunidade } from '../components/home/Comunidade';
import { Newsletter } from '../components/home/Newsletter';
import { NavBarSkeleton } from '../components/general/NavBarSkeleton';
 
const Home = () => {
  return (
    <>
        <NavBarSkeleton/>
        <HeroSection/>
        <Destaques/>
        <Sobre/>
        <Comunidade/>
        <Eventos/>
        <Newsletter/>
    </>
  );
};

export default Home;