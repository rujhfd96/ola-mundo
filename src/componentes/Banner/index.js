import styles from './Banner.module.css'



export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Pedro Gadelha, desenvolvedor Front-end junior. Aqui compartilho vários conhecimentos, espero que aprenda algo novo 
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                src='./assets/circulo_colorido.png'
                aria-hidden={true}/>

                <img 
                className={styles.minhaFoto}
                src='./assets/minha_foto.png'
                alt="Foto do Pedro"/>
                
            </div>
        </div>
    )
}