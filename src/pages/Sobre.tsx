import { Box } from '@radix-ui/themes';
import { HistoriaMissao } from '../components/sobre/HistoriaMissao';
import { Equipe } from '../components/sobre/Equipe';
import { Parcerias } from '../components/sobre/Parcerias';
import { NavBarSkeleton } from '../components/general/NavBarSkeleton';

const Sobre = () => {
  return (
    <>
        <NavBarSkeleton/>
        <HistoriaMissao/>
        <Equipe/>
        <Parcerias/>
    </>
  );
};

export default Sobre;