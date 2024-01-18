import React from 'react';
import styles from './App.module.css';
import MainContent from './components/ui/MainContent';
import UserList from './components/users/UserList';

function App() {

  return (
    <div className={styles.app}>
      <MainContent>
        <UserList />
      </MainContent>
    </div>
  );
}

export default App;
