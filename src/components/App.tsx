import 'components/App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BusinessListContainer, BusinessContainer } from 'containers';
import { Header } from 'components';
import { Store } from 'store';
import { Translations } from 'localization';

const usersLocale = 'en';

function App() {
return (
    <div>
      <IntlProvider locale={usersLocale} messages={Translations[usersLocale]}>
        <Provider store={Store}>
          <Header />
          <div className='content-container'>
            <BrowserRouter>
              <Routes>
                <Route path="/business/:id" element={<BusinessContainer />} />
                <Route path="/" element={<BusinessListContainer />} />
                <Route path="*" element={<BusinessListContainer />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Provider>
      </IntlProvider>
    </div>
  );
}

export default App;
