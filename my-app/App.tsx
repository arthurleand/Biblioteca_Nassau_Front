import Principal from "./src/Principal";
import {Box, NativeBaseProvider, StatusBar} from "native-base";

import { TEMAS } from "./src/estilos/temas"; 
import BuscaLivro from "./src/BuscaLivro";

export default function App(){
  return(
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.yellow[800]}/>
      <BuscaLivro></BuscaLivro>
      <Box safeAreaTop bg='violet.600'></Box>
    </NativeBaseProvider>
  )
}
