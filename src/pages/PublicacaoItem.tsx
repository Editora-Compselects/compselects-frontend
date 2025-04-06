import { NavBarSkeleton } from "../components/general/NavBarSkeleton";
import { DetalhesPublicacao } from "../components/publicacoes/DetalhesPublicacao";

const PublicacaoItem = () => {
  return (
    <>
        <NavBarSkeleton/>
        <DetalhesPublicacao/>
    </>
  );
};

export default PublicacaoItem;