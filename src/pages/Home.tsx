import { Box } from '@radix-ui/themes';
import { HeroSection } from '../components/home/HeroSection';
import { Destaques } from '../components/home/Destaques';
import { Eventos } from '../components/home/Eventos';
import { Sobre } from '../components/home/Sobre';
import { Comunidade } from '../components/home/Comunidade';
import { Newsletter } from '../components/home/Newsletter';

const Home = () => {
  return (
    <Box>
        <HeroSection/>
        <Destaques/>
        <Sobre/>
        <Comunidade/>
        <Eventos/>
        <Newsletter/>
    </Box>
  );
};

export default Home;