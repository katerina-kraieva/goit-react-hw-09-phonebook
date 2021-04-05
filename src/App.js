import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import AppBar from './Components/AppBar/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);
const PhoneBookPage = lazy(() =>
  import('./views/PhoneBookPage/PhoneBookPage' /* webpackChunkName: "phonebook-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

    return (
      <>
        <AppBar />
        <Suspense
          fallback={
            <Loader type="Rings" color="rgb(236, 8, 38)" height={200} width={200} />
          }
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={PhoneBookPage}
            />
          </Switch>
        </Suspense>
      </>
    );
  }


