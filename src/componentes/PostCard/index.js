import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'


export default function PostCard (props){
    return(
        <Link to = {`/posts/${props.post.id}`}>
        <div className={styles.post}>
            <img className={styles.capa}
            src={`/assets/posts/${props.post.id}/capa.png`}
            alt = "imagem de capa do post"
            />

            <h2 className={styles.titulo}>{props.post.titulo}</h2>
            <BotaoPrincipal>Ler</BotaoPrincipal>
        </div>
        </Link>
    )
}