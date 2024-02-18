
import { ITask } from "../App";
import { Empty } from "./Empty";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface TasksProps {
  data: ITask[];
  handleRemove: (id: number) => void;
  handleCompleted: (id: number) => void;
}

export function Tasks ({ data, handleRemove, handleCompleted }: TasksProps) {
  const totalCreated = data.length;

  const totalCompleted = data.reduce((acc, curr) => {
    if(curr.completed) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
   <div>

    <header className={styles.info}>
      <div className={styles.box}>
        <strong className={styles.created}>Tarefas criadas</strong>
        <span>{totalCreated}</span>
      </div>

      <div className={styles.box}>
        <strong className={styles.completed}>Concluídas</strong>
        <span>{totalCompleted == 0 ? totalCompleted : `${totalCompleted} de ${totalCreated}`}</span>
      </div>
    </header>

    <div className={styles.tasks}>
      {totalCreated > 0 ? data.map((task, index) => (
        <Task 
          key={`${task.id}-${index}`}
          task={task} 
          handleRemoveTask={handleRemove} 
          handleMarkCompleted={handleCompleted} 
        />
      )): <Empty />}
    </div>
   </div>
  )
}