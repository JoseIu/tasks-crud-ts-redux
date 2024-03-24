import { useState } from 'react';

const useTask = () => {
  const [taskState, setTaskState] = useState({
    id: '',
    title: '',
    description: '',
  });

  const setTitle = (title: string) => setTaskState((prev) => ({ ...prev, title }));

  const setDescription = (description: string) =>
    setTaskState((prev) => ({ ...prev, description }));
  const setID = (id: string) => setTaskState((prev) => ({ ...prev, id }));
  return {
    ...taskState,
    setTitle,
    setDescription,
    setID,
  };
};

export default useTask;
