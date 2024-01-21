import React from 'react';
import styles from './App.module.css';
import MainContent from './components/ui/MainContent/MainContent';
import UsersPage from './pages/users';

function App() {
  return (
    <div className={styles.app}>
      <MainContent>
        <UsersPage />
      </MainContent>
    </div>
  );
}

export default App;
