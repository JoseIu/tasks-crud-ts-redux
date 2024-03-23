import { useSelector } from 'react-redux';

import './App.scss';
import { RootState } from './app/store';
import TaskForms from './components/TaskForms';
import TaskList from './components/TaskList';

const App = () => {
  const tasksSstate = useSelector((state: RootState) => state.tasks);

  console.log(tasksSstate);
  return (
    <>
      <h1>TASKS CRUD REACT + TS + REDUX</h1>
      <TaskForms />
      <TaskList />
    </>
  );
};

export default App;
