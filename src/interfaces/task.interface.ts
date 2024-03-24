export interface InitialStace {
  tasks: TaskInterface[];
  taskID: string;
}

export interface TaskInterface {
  id: string;
  title: string;
  description: string;
}
