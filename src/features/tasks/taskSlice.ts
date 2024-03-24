import { createSlice } from '@reduxjs/toolkit';
import { InitialStace } from '../../interfaces/task.interface';

const initialState: InitialStace = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: 'Task1',
      description: 'First task',
    },
    {
      id: crypto.randomUUID(),
      title: 'Task2',
      description: 'Second task',
    },
    {
      id: crypto.randomUUID(),
      title: 'Task3',
      description: 'Third task',
    },
  ],

  taskID: '',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const { payload } = action;
      const findTask = state.tasks.findIndex((task) => task.id === payload);
      console.log(findTask);

      if (findTask === -1) return;

      state.tasks.splice(findTask, 1);
    },
    editTask: (state, action) => {
      const taskFinded = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (taskFinded === -1) return;

      state.tasks[taskFinded] = action.payload;
      state.taskID = '';
    },
    setTaskID: (state, action) => {
      state.taskID = action.payload;
    },
  },
});
export const { addTask, deleteTask, editTask, setTaskID } = taskSlice.actions;
export default taskSlice.reducer;
