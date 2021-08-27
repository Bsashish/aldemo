/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { GlobalStyle } from 'styles/global-styles';

import { TopTen } from './pages/TopTen/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import SideBar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Alerts } from './pages/Alerts';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import SettingsPage from './pages/settings';

const CustomContainer = styled(Container)`
  max-height: calc(100vh - 65px);
  overflow-y: auto;
`;

const StyledDiv = styled.div`
  width: 100%;
`;

export function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <div className="App wrapper">
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <StyledDiv>
          <ThemeProvider theme={theme}>
            <Topbar setIsOpen={setIsOpen} />
            <CustomContainer fluid className="content is-open p-0">
              <Switch>
                <Route exact path="/" component={TopTen} />
                <Route exact path="/alerts" component={Alerts} />
                <Route exact path='/settings' component={SettingsPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </CustomContainer>
          </ThemeProvider>
        </StyledDiv>

      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}
