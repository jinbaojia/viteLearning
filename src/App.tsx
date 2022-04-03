import React from 'react';
import styles from './App.module.scss';
import Head from './Head';
console.log('🚀 ~ file: App.tsx ~ line 3 ~ styles', styles);

function App() {
  return (
    <div className={styles.a_b}>
      c
      <Head></Head>a
    </div>
  );
}

export default App;
