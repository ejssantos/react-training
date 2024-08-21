//import styles from '../page.module.css'
import styles from './PostsList.module.css'
import Post from './Post'

function PostsList() {
  return (
    <ul className={ styles.posts }>
      <Post author="Eduardo José" body="Analista/Programador" />
      <Post author="Amanda Nunes" body="Administradora de Banco de Dados" />  
      <Post author="Sergey Kadirov" body="Especialista em Segurança Digital"/>
    </ul>
  )
}

export default PostsList;