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
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import SideBar from './components/Sidebar';
import Topbar from './components/Topbar';

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
        <Container fluid className="content is-open p-0">
          <Topbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}
