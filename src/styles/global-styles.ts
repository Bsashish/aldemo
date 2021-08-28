import { createGlobalStyle } from 'styled-components';
import colors from 'utils/colors';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .App {
    display: flex;
    width: 100%;
    align-items: stretch;
    background: #F6F6F7;
  }

  // Side bar styles
  .sidebar {
    width: 100%;
    background: ${colors.white};
    transition: all 0.5s;
    @media only screen and (max-width: 768px) {
      position: absolute;
      z-index: 1501;
      margin-left: -100%;
    }

    @media only screen and (min-width: 1024px) {
      width: 225px;
    }
  }

  .sidebar.is-open {
    margin-left: 0;
    transition: 0.5s;
  }

  .sidebar-header {
    background: #FFFFFF;
    height: 65px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .menu-open {
    background: #6d7fcc;
  }

  .nav-item:hover {
    color: #7386d5;
    background: #fff;
  }

  .items-menu {
    color: #fff;
    background: #6d7fcc;
  }

  li a.dropdown-toggle::after {
    display: inline-flex;
    position: relative;
    left: 60%;
    top: 10%;
  }

  .sidebar-header > span {
    position: relative;
    float: right;
    margin: 0.5em;
    font-size: 2rem;
    cursor: pointer;
    display: none;
  }
  .side-menu {
    overflow-y: auto;
    padding: 0px;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    height: 80%;

    @media screen and (max-width: 768px) {
      margin-top: 0;
      height: 100%;
    }
  }

  .side-menu::-webkit-scrollbar {
    width: 6px;
  }

  .side-menu::-webkit-scrollbar-thumb {
    background: #7C8DA6;
    border-radius: 3px;
  }

  .side-menu::-webkit-scrollbar-thumb:hover {
    background: #3a4c99;
  }

  /* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
  .content {
    margin-left: 0;
    height: 100vh;
  }

  .sidebar-sm {
    display: none;
  }

  .table-row {
    button {
      visibility: hidden;
    }

    &:hover {
      button {
        visibility: visible;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    body {
      overflow: hidden;
    }

    .sidebar-sm {
      display: block;
    }

    .sidebar.is-open {
      min-width: 100%;
      max-width: 100%;
      margin-left: 0;
      transition: all 0.5s, height 0s;
    }

    .sidebar.is-open > .sidebar-header span {
      display: unset;
    }

    li a.dropdown-toggle::after {
      display: inline-block;
      position: relative;
      left: 68%;
    }
  }
  .topBar{
    background: #FCFCFC;
    height: 65px;
  }
`;
