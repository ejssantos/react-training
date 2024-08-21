import styles from "../page.module.css";

// Passing Data to Components with Props
// CSS styling e CSS Modules
function Post(props: any) {
  return (
    //<div style={{color: 'red', textAlign: 'center'}}>
    <div className={ styles.description }>
      <p>
        {props.author} : { props.body }
      </p>
    </div>
  )
}

export default Post;