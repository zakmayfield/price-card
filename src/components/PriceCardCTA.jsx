import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

const PriceCardCTA = () => {
  return (
    <Box
      bg='#56B0AF'
      w={{ base: '100%', md: '50%' }}
      textAlign='left'
      py='8'
      px='5'
    >
      <Heading as='h4' fontSize={{base: '2xl', md: 'lg'}} mb='4'>
        Monthly Subscription
      </Heading>

      <Flex alignItems='center'>
        <Text fontSize='3xl' as='b' mr='2'>
          $29
        </Text>
        <Text className='per-month' fontSize='sm' as='b'>
          per month
        </Text>
      </Flex>

      <Text className='full-access' fontSize='sm'>
        Full access for less than $1 a day
      </Text>

      <Button bg='gold' color='#212121' size='lg' w='100%' mt='4' fontSize='md'>
        Sign Up
      </Button>
    </Box>
  );
};

export default PriceCardCTA;
