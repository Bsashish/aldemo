/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { TopTen } from './pages/TopTen/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import SideBar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Alerts } from './pages/Alerts';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

export function App() {
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
        <SideBar />
        <ThemeProvider theme={theme}>
          <Container fluid className="content is-open p-0">
            <Topbar />
            <Switch>
              <Route exact path="/" component={TopTen} />
              <Route exact path="/alerts" component={Alerts} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </ThemeProvider>
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}
