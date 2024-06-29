import { useContext } from "react";
import { TasksContext } from "../../context/TasksContent";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  const {tasks} = useContext(TasksContext)

  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1
    return total 
  }, 0 );

  const totalDone = totalTasks - totalPending;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>Lista de Tarefas</h1>

          <span>Bem vindo, Roberto!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks}/>
          <StatsCard title="Tarefas Pendentes" value={totalPending}/>
          <StatsCard title="Tarefas Realizadas" value={totalDone}/>
        </div>
      </div>
    </header>
  );
};
