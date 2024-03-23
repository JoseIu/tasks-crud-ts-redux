import { useState } from 'react';

const useTask = () => {
  const [taskState, setTaskState] = useState({
    id: '',
    title: '',
    description: '',
  });

  const setTitle = (title: string) => setTaskState({ ...taskState, title });

  const setDescription = (description: string) => setTaskState({ ...taskState, description });

  return {
    ...taskState,
    setTitle,
    setDescription,
  };
};

export default useTask;
