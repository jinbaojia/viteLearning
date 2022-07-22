import styles from './App.module.scss';
import Head from './Head';
import worker_script from './worker';
const myWorker = new Worker(worker_script);

function App() {
  myWorker.onmessage = (m) => {
    console.log('msg from worker: ', m.data);
  };
  return (
    <div className={styles.a_b}>
      <button
        onClick={() => {
          myWorker.postMessage('im from main');
        }}
      >
        sssssss
      </button>
    </div>
  );
}

export default App;
