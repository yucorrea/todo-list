import {  PlusCircle } from "@phosphor-icons/react";
import logo from "./../assets/logo.svg";
import styles from "./Header.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface HeaderProps {
  handleAddTask: (text: string) => void;
}

export function Header({ handleAddTask }: HeaderProps) {
  const [task, setTask] = useState("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
    setTask(e.target.value)
  }

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleAddTask(task)
  }

  const onInvalidInput = (e: InvalidEvent<HTMLInputElement>) => {
    e.target.setCustomValidity("Informe o nome da tarefa!")
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo todo" />

       <form className={styles.form} onSubmit={addTask}>
         <input 
            value={task}
            name="item" 
            placeholder="Adicione uma nova tarefa" 
            onChange={onChangeText} 
            required
            onInvalid={onInvalidInput}
          />
         <button type="submit">
          Criar <PlusCircle size={24} />
         </button>
       </form>

    </header>
  )
}