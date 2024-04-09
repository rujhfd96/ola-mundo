import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu(){
    const localizacao = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>
               <Link className={
                `${styles.link}
                ${ localizacao.pathname === '/' ? styles.linkDestacado : ''}` 
               }to='/'>
                Início
               </Link>
               <Link className={
                `${styles.link}
                ${ localizacao.pathname === '/sobremim' ? styles.linkDestacado : ''}`
            } to='/sobremim'>
                Sobre Mim
               </Link>
            </nav>
        </header>
    )
}