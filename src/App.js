

import Header from './components/Header';
import CircusShopContainer from './containers/CircusShopContainer';
import RouterContainer from './containers/RouterContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <RouterContainer/>
      <CircusShopContainer/>
    </div>
  );
}

export default App;
