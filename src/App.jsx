import './App.css'
import {lazy, Suspense, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsRefreshing} from "./redux/auth/selectors.js";
import {refreshUser} from "./redux/auth/operations.js";
import {Route, Routes} from "react-router-dom";
import AppBar from "./components/AppBar/AppBar.jsx";
import {RestrictedRoute} from "./components/RestrictedRoute.jsx";
import {PrivateRoute} from "./components/PrivateRoute.jsx";

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
        <AppBar/>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register"
                   element={<RestrictedRoute redirectTo='/tasks' component={<RegisterPage/>}/>}/>
            <Route path="/login"
                   element={<RestrictedRoute component={<LoginPage/>} redirectTo="/tasks"/>}/>
            <Route path="/tasks" element={<PrivateRoute component={<TasksPage/>} redirectTo="/login"/>}/>
          </Routes>
        </Suspense>
      </div>
  )
}

export default App
