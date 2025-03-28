import { Box } from '@radix-ui/themes';
import { HeroSection } from '../components/home/HeroSection';
import { Destaques } from '../components/home/Destaques';

const Home = () => {
  return (
    <Box>
        <HeroSection/>
        <Destaques/>
    </Box>
  );
};

export default Home;