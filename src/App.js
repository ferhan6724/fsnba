import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import ContainerCard from './components/ContainerCard';



function App() {
  return (
    <Container className='text-center mt-5'>
      <Header/>
      <ContainerCard/>
          </Container>
  );
}

export default App;
