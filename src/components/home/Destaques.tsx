import { Box } from "@chakra-ui/react/box";
import { BestSellers } from "./BestSellers";
import { DestaquesDoMes } from "./DestaquesDoMes";
import { Lancamentos } from "./Lancamento";
import { AtalhosHomePage } from "./AtalhosHomePage";

export const Destaques = () => {
  return (
    <Box>
        <AtalhosHomePage/>
        <div id='lancamentos'>
          <Lancamentos/>
        </div>
        <div id='destaques'>
          <DestaquesDoMes/>
        </div>
        <div id='best-sellers'>
          <BestSellers/>
        </div>
    </Box>
  );
};