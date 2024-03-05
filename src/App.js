import './App.css';
import Home from './components/Home';
import HOC from './components/hoc/HOC';
import Welcome from './components/hoc/Welcome';
import CallbackMemo from './components/callback/CallbackMemo';
import Parent from './components/purecomponent/Parent';
import AllRoutes from './components/router/AllRoutes';
import Register from './pages/Register';
import ArrayOperations from './components/arrayoperations/ArrayOperations';

import Promises from './components/promise/Promises';
import LifeCycle from './components/lifecycle/LifeCycle';
import EsFeatures from './components/es6/EsFeatures';
import SpreadRest from './components/spreadrest/SpreadRest';
import ReactHooks from './components/hooks/ReactHooks';
import RWD from './pages/RWD';
import Miscellanious from './components/Miscellanious';
import ObjOperartions from './components/objectoperations/ObjOperations';
import UnControlledComp from './components/uncontrolledcomp/UncontrolledComp';
import PrimNonPrim from './components/primitivetype/PrimNonPrim';
import Login from './components/lazyloading/Login';
import { Suspense, lazy, useEffect, useState } from 'react';
import Pseudo from './components/pseudo/Pseudo';
import Closure from './components/closure/Closure';
import UserPosts from './pages/UserPosts';
import Header from './components/Header';
import Test from './Test';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Debounce from './components/debouncing/Debounce';
import SearchFilter from './components/searchfilter/SearchFilter';
import CallbackFunction from './components/callback/CallbackFunction';



// Lazy loading -delayForDemo() is not necessary ,this is to check how it is working by setting a delay
const LazyComp1 = lazy(() => delayForDemo(import('./components/lazyloading/LazyComp1')));
const LazyComp2 = lazy(() => import('./components/lazyloading/LazyComp2'))


async function delayForDemo(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  return promise;
}

// function delayForDemo(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 5000);
//   }).then(() => promise);
// }


function App() {
  const NewFeaturedComponent = () => HOC(Welcome);

  // const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  // useEffect = () => {
  //   localStorage.setItem("darkMode", JSON.stringify(darkMode))
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark")
  //   }
  //   else {
  //     document.documentElement.classList.remove("dark")
  //   }
  // }
  // const onClickHandler = () => {
  //   setDarkMode(!darkMode)
  // }


  return (
    // <div className={darkMode ? "dark" : "app"}  >
    //   <button className='bi bi-sun' onClick={onClickHandler}></button>   
    //   <button className="btn btn-primary">Click me</button>

    //   <Header></Header>
    //   <AllRoutes></AllRoutes>
    // </div>

    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "5px", padding: "5px" }}>
      <div className="App">
        <main >
          <div className="grid">
            <section>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyComp1 />
              </Suspense>
            </section>

            <Test></Test>
            <UserPosts></UserPosts>
            <Pseudo></Pseudo>
            <Login></Login>
            <Debounce></Debounce>
            <SearchFilter></SearchFilter>
            

            <NewFeaturedComponent></NewFeaturedComponent>
            <Parent></Parent>
            <Register></Register>
            <CallbackMemo></CallbackMemo>
            <CallbackFunction></CallbackFunction>
            <Closure></Closure>

            <ArrayOperations></ArrayOperations>
            <Promises></Promises>
            <LifeCycle></LifeCycle>
            <ReactHooks></ReactHooks>
            <EsFeatures></EsFeatures>
            <SpreadRest></SpreadRest>
            <Miscellanious></Miscellanious>
            <ObjOperartions></ObjOperartions>
            <UnControlledComp></UnControlledComp>
            <PrimNonPrim></PrimNonPrim>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
