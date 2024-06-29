import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksProvider } from "./context/TasksContent";

import "./styles/global.css";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}

export default App;

