import { Box, Button, CheckIcon, Select, Text, VStack } from "native-base";

export default function BuscaLivro(){
    return(
        <VStack flex={1} alignItems={'center'} p={5} backgroundColor={"gray.200"}>
            <Text fontSize="3xl" bold italic >
                Livros
            </Text>
            <Select w='100%'mt={4} placeholder="Escolha o livro" 
            _selectedItem={{
                endIcon: <CheckIcon size="5" />
            }}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
            </Select>

            <Button
                size='lg'
                variant='unstyled'
                w='100%'
                bg='yellow.800'
                mt='550'
                borderRadius='lg'
                >
                    Ver Sinopse
            </Button>
            <Box bg='violet.600'></Box>

        </VStack>
    )}