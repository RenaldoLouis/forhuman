import Navbar from './components/Navbar';
import Content from './components/Content';
import './static/saas/base/App.scss';
import './static/saas/main.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Navbar></Navbar>
        <Content></Content>
      </ThemeProvider>
    </div>
  );
}

export default App;
