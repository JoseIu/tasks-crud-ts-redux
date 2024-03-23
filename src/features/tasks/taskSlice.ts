import { createSlice } from '@reduxjs/toolkit';
import { TaskInterface } from '../../interfaces/task.interface';

const initialState: TaskInterface[] = [
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
];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const { payload } = action;
      const findTask = state.findIndex((task) => task.id === payload);
      console.log(findTask);

      if (findTask === -1) return;

      state.splice(findTask, 1);
    },
  },
});
export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
