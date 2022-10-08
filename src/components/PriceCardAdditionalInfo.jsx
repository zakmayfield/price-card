import {
  Box,
  Heading,
  List,
  ListItem
} from '@chakra-ui/react';

const PriceCardAdditionalInfo = () => {
  return (
    <Box
      bg='#67BCBD'
      w={{ base: '100%', md: '50%' }}
      textAlign='left'
      py='8'
      px='5'
    >
      <Heading as='h4' fontSize={{ base: '2xl', md: 'lg' }} mb='4'>
        Why Us
      </Heading>

      <List fontSize={{ base: 'sm', md: 'xs' }} as='b'>
        <ListItem>Tutorials by leading industry experts</ListItem>
        <ListItem>Peer & expert code reviews</ListItem>
        <ListItem>Coding exercises</ListItem>
        <ListItem>Access to our GitHub repos</ListItem>
        <ListItem>Community forum</ListItem>
        <ListItem>Flashcard Decks</ListItem>
        <ListItem>New videos every week</ListItem>
      </List>
    </Box>
  );
};

export default PriceCardAdditionalInfo;
