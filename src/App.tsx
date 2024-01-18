import React from 'react';
import { useGetUsersQuery } from './slices/api';

function App() {
  const { data: users } = useGetUsersQuery();
  console.log(users);

  return (
    <div className="App">
    </div>
  );
}

export default App;
