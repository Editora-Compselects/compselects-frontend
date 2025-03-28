import { Box } from "@chakra-ui/react/box";
import { BestSellers } from "./BestSellers";
import { DestaquesDoMes } from "./DestaquesDoMes";
import { Lancamentos } from "./Lancamento";
import { AtalhosHomePage } from "./AtalhosHomePage";

export const Destaques = () => {
  return (
    <Box>
        <AtalhosHomePage/>
        <Lancamentos/>
        <DestaquesDoMes/>
        <BestSellers/>
    </Box>
  );
};