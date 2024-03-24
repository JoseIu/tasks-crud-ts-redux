import './App.scss';
import TaskForms from './components/TaskForms';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <>
      <h1>TASKS CRUD REACT + TS + REDUX</h1>
      <TaskForms />
      <TaskList />
    </>
  );
};

export default App;
