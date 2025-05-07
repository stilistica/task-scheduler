import './App.css'
import {lazy, Suspense, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsRefreshing} from "./redux/auth/selectors.js";
import {refreshUser} from "./redux/auth/operations.js";
import {Route, Routes} from "react-router-dom";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage.jsx'));
const TasksPage = lazy(() => import('./pages/TasksPage/TasksPage.jsx'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return isRefreshing ? (
      <strong>Refreshing user...</strong>
  ) : (
      <div className='app'>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </Suspense>
      </div>
  )
}

export default App
