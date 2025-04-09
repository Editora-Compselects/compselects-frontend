import { DepoimentosAutores } from "../components/autores/DepoimentosAutores";
import { NossosAutores } from "../components/autores/NossosAutores";
import { SejaUmAutor } from "../components/autores/SejaUmAutor";
import { NavBarSkeleton } from "../components/general/NavBarSkeleton";

const Autores = () => {
  return (
    <>
        <NavBarSkeleton/>
        <NossosAutores/>
        <SejaUmAutor/>
        <DepoimentosAutores/>
    </>
  );
};

export default Autores;