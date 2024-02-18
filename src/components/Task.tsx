import { Check, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { ITask } from "../App";

interface TaskProps {
  task: ITask;
  handleRemoveTask: (id: number) => void;
  handleMarkCompleted: (id: number) => void;
}

export function Task({ task, handleRemoveTask, handleMarkCompleted } : TaskProps) {

  const checkboxCheckedClassname = task.completed
  ? styles['checkbox-checked']
  : styles['checkbox-unchecked']
const paragraphCheckedClassname = task.completed
  ? styles['paragraph-checked']
  : ''

  const removeTask = () => {
    handleRemoveTask(task.id)
  }

  const completedTask = () => {
    handleMarkCompleted(task.id)
  }

  return (
    <div className={styles.task}>
      <label htmlFor="checkbox" onClick={completedTask}>
        <input readOnly type="checkbox" />
        <span  className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
        {task.completed && <Check size={12} />}
        </span>
        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
         {task.title}
        </p>
      </label>
      <button onClick={removeTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}