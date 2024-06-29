import { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContent";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  
  const { tasks, setTasks } = useContext(TasksContext)

  // Função disparada ao adicionar tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 letras. ");
      return;
    }

    //Adicionando Tarefa
    const newTasks = [
      ...tasks, // Pega as tarefas já existentes em "tasks"
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));

    setTaskTitle("");
  }

  function handleToggleTaskStatus (taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        }
      }

      return task
    })

    setTasks(newTasks);
  }

  function handleRemoveTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label 
              className={task.done ? styles.done : ""} 
              htmlFor={`task-${task.id}`}>{task.title}</label>

              <button className={styles.button}
              onClick={() => handleRemoveTask(task.id)}>Remover</button>

            </li>
          )
        })}
      </ul>
    </section>
  );
};

