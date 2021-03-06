import Navbar from './components/Navbar';
import Content from './components/Content';
import './static/saas/base/App.scss';
import './static/saas/main.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation,
  useHistory
} from "react-router-dom";
import Shop from './components/Shop';
import { DataContextProvider } from './context/DataContext';
import Checkout from './components/Checkout';
import DetailProduct from './components/DetailProduct';
import { CookiesProvider } from 'react-cookie';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const Main = withRouter(({ location }) => {
    // const navbarPage = ['/']
    // const notFoundPage = ['/', '/comego', '/timesheet', '/overview', '/booking']
    // const [cookie] = useCookies(["token"]);

    return (
      <div>
        <LoadingScreen />
        <Navbar></Navbar>
        <Route exact path="/" component={Content} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/detailproduct" component={DetailProduct} />
        <Footer></Footer>
      </div>
    );
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <CookiesProvider>
            <DataContextProvider>
              <ThemeProvider theme={darkTheme}>
                <Main></Main>
              </ThemeProvider>
            </DataContextProvider>
          </CookiesProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
