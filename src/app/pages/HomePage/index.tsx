import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux'; //useDispatch
import { useHomeSlice } from './slice';
import { selectHome } from './slice/selectors';

export function HomePage() {
  const { actions } = useHomeSlice();

  // Used to dispatch slice actions
  const dispatch = useDispatch();

  // `selectors` are used to read the state. Explained in other chapter
  // Will be inferred as `string` type ✅
  const username = useSelector(selectHome);

  const btnCLick = () => {
    dispatch(actions.changeAppName('Changed'));
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <p>{username.appName}</p>
        <button onClick={btnCLick}>click me</button>
      </div>
    </>
  );
}
