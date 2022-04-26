import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './services/index';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  const {users} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  
  return (
    <div className="App">
      {users.map((user) => ( <p>{user.name}</p>))}
    </div>
  );
}

export default App;
