import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';

import { deleteTask, setTaskID } from '../features/tasks/taskSlice';
import style from './TaskList.module.scss';

const TaskList = () => {
  const taskList = useSelector((state: RootState) => state.tasks);

  console.log(taskList);

  const dispatch = useDispatch();

  return (
    <div className={style.tasks}>
      {taskList.tasks.map((task) => (
        <article key={task.id} className={style.task}>
          <h2> {task.title} </h2>
          <p> {task.description} </p>
          <button onClick={() => handleDelete(task.id, dispatch)}>X</button>
          <button onClick={() => handleEdit(task.id, dispatch)}>Edit</button>
        </article>
      ))}
    </div>
  );
};

const handleDelete = (id: string, dispatch: AppDispatch) => {
  dispatch(deleteTask(id));
};
const handleEdit = (id: string, dispatch: AppDispatch) => {
  dispatch(setTaskID(id));
};

export default TaskList;
