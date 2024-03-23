import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import useTask from '../lib/hooks/useTask';
import style from './TaskForm.module.scss';

const TaskForms = () => {
  const { title, description, setTitle, setDescription } = useTask();

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTask({ id: crypto.randomUUID(), title, description }));
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

        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default TaskForms;
