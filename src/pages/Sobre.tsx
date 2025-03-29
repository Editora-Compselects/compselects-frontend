import { Box } from '@radix-ui/themes';
import { HistoriaMissao } from '../components/sobre/HistoriaMissao';
import { Equipe } from '../components/sobre/Equipe';
import { Parcerias } from '../components/sobre/Parcerias';

const Sobre = () => {
  return (
    <Box>
        <HistoriaMissao/>
        <Equipe/>
        <Parcerias/>
    </Box>
  );
};

export default Sobre;