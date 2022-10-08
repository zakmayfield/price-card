import { Heading, Text, Flex } from '@chakra-ui/react';

const PriceCardHeader = () => {
  return (
    <Flex
      flexDirection='column'
      align='flex-start'
      p='5'
      pt='0'
      maxW={{ base: '450px', md: '600px' }}
    >
      <Heading as='h3' fontSize={{base: '3xl', md: '2xl'}} color='teal' mb='5'>
        Join our community
      </Heading>
      <Heading as='h4' fontSize='lg' color='gold' mb='2'>
        {' '}
        30-day, hassel-free money back guarentee
      </Heading>
      <Text fontSize='sm' textAlign='left' color='teal.500'>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for developers who are serious about honing their
        skills.
      </Text>
    </Flex>
  );
};

export default PriceCardHeader;
