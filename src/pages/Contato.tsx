import { FaleConosco } from "../components/contato/FaleConosco";
import { Form } from "../components/contato/Form";
import { NavBarSkeleton } from "../components/general/NavBarSkeleton";

const Contato = () => {
  return (
    <>
        <NavBarSkeleton/>
        <FaleConosco/>
        <Form/>
    </>
  );
};

export default Contato;