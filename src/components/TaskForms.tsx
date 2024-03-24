import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { addTask, editTask } from '../features/tasks/taskSlice';
import useTask from '../lib/hooks/useTask';
import style from './TaskForm.module.scss';

const TaskForms = () => {
  const { title, description, setTitle, setDescription, setID } = useTask();

  const dispatch = useDispatch();
  const taskList = useSelector((state: RootState) => state.tasks.tasks);

  const taskToEdit = useSelector((state: RootState) => state.tasks.taskID);

  useEffect(() => {
    setTaskToEdit(taskToEdit);
  }, [taskToEdit]);

  const setTaskToEdit = (taskToEdit: string) => {
    if (!taskToEdit) return;
    const task = taskList.find((task) => task.id === taskToEdit);

    if (!task) return;
    setTitle(task.title);
    setDescription(task.description);
    setID(task.id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskToEdit) {
      dispatch(editTask({ id: taskToEdit, title, description }));
      setDescription('');
      setTitle('');
      return;
    }

    dispatch(addTask({ id: crypto.randomUUID(), title, description }));
    setDescription('');
    setTitle('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          value={title}
          type="text"
          name="title"
          id="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          name="description"
          id="description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input type="submit" value={taskToEdit ? 'Edit' : 'Add'} />
      </form>
    </>
  );
};

export default TaskForms;
