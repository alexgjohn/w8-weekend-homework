import styled from "styled-components"
import Header from './components/Header';
import RouterContainer from './containers/RouterContainer';

const Background = styled.div`
  background-color: lightpink;
`

function App() {
  return (
    <Background className="App">
      <Header/>
      <RouterContainer/>
      
    </Background>
  );
}

export default App;
