import './App.css';
import { Box } from '@chakra-ui/react';
import PriceCard from './components/PriceCard'

function App() {
  return (
    <div className="App">
      <Box className="App-header" p='5'>
        <PriceCard />
      </Box>
    </div>
  );
}

export default App;
