import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/redux/store/Store';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>

    //  <AllRoutes> 
    //    <Home apiPath={"movie/now_playing"}></Home> 
    //    </AllRoutes>  
    //    <NewFeaturedComponent></NewFeaturedComponent>
    //   <Parent></Parent>
    //   <Register></Register>
    //   <CallbackMemo></CallbackMemo>
    //   <Closure></Closure>

    //   <ArrayOperations></ArrayOperations>
    //   <Promises></Promises>
    //   <LifeCycle></LifeCycle>
    //   <ReactHooks></ReactHooks>
    //   <EsFeatures></EsFeatures>
    //   <SpreadRest></SpreadRest>

    //   <RWD></RWD> 
);


