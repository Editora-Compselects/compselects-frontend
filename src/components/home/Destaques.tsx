import { Box } from "@chakra-ui/react/box";
import { BestSellers } from "./BestSellers";
import { DestaquesDoMes } from "./DestaquesDoMes";
import { Lancamento } from "./Lancamento";

export const Destaques = () => {
  return (
    <Box>
        <BestSellers/>
        <Lancamento/>
        <DestaquesDoMes/>
    </Box>
  );
};