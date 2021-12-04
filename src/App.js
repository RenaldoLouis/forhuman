import Navbar from './components/Navbar';
import Content from './components/Content';
import './static/saas/base/App.scss';
import './static/saas/main.scss';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;
