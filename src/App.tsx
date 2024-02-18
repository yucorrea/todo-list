import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

export interface ITask {
  id: number;
  title: string;
  completed: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (title: string) => {
    const task = {
      id: new Date().getTime(),
      title,
      completed: false
    }

    setTasks(state => [...state, task])
  }

  const handleRemoveTasks = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks)
  }

  const handleCompletedTask = (id: number) => {
    const newTasks = tasks.map(task =>  {
      if(task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task
    });

    setTasks(newTasks)
  }

  return (
    <div>
      <Header handleAddTask={handleAddTask} />
      <main className={styles.wrapper}>
       <Tasks 
          data={tasks} 
          handleRemove={handleRemoveTasks} 
          handleCompleted={handleCompletedTask} 
        />
      </main>
    </div>
  )
}
