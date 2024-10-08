
import './App.css';
import { WorkersTable } from './features/WorkersTable'
import { Header } from './features/Header';
import classes from './features/WorkersTable/index.module.css'

function App() {
  return (
    <div className={classes.poppins}>
      <Header/>
      <WorkersTable />
    </div>
  );
}

export default App;
