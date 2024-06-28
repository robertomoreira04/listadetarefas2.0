import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>Lista de Tarefas</h1>

          <span>Bem vindo, Roberto!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={5}/>
          <StatsCard title="Tarefas Pendentes" value={4}/>
          <StatsCard title="Tarefas Realizadas" value={1}/>
        </div>
      </div>
    </header>
  );
};
