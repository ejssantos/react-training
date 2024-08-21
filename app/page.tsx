import NewPost from "./components/NewPost";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Post author="Eduardo José" body="Analista/Programador" />
      <Post author="Amanda Nunes" body="Administradora de Banco de Dados" />  
      <Post author="Sergey Kadirov" body="Especialista em Segurança Digital" />
      <PostsList /> */}
      
      <NewPost />
    </main>
  );
}
