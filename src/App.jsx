import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import styles from './App.module.css';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <div>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          className={styles.input} 
          placeholder="Digite seu nome de usuário do GitHub" 
          onBlur={(e) => setNomeUsuario(e.target.value)} 
        />
      </div>

      {nomeUsuario.length > 4 && (
        <div className={styles.content}>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </div>
      )}
    </div>
  );
}

export default App;
