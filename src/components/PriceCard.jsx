import PriceCardHeader from './PriceCardHeader';
import PriceCardCTA from './PriceCardCTA';
import PriceCardAdditionalInfo from './PriceCardAdditionalInfo';
import { Box, Flex } from '@chakra-ui/react';

const PriceCard = () => {
  return (
    <Box maxW='600px'>
      <PriceCardHeader />

      <Flex color='#f5f5f5' flexDirection={{ base: 'column', md: 'row' }}>
        <PriceCardCTA />
        <PriceCardAdditionalInfo />
      </Flex>
    </Box>
  );
};

export default PriceCard;
