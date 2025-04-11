import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        setLoading(true);
        setError(null); 

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Usuário não encontrado");
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setLoading(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {loading ? (
                <h1>Carregando...</h1>
            ) : error ? ( 
                <h1>{error}</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>

                            <a className={styles.itemLink} target='_blank' href={html_url}>Visitar no github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposList;