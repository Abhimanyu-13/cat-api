import './App.css';
import { useEffect } from 'react';
import { Main } from './Routes/Main';
import { loginUser } from './Store/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginUser())
  }, [dispatch])

  const user = useSelector((state) => state.user)
  return (
    <Main isAuthenticated={user.userLoggedIn} />
  );
}

export default App;
