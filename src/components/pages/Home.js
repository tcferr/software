import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Software</span>
            </h1>
            <p>Comece a gerenciar seus clientes agora mesmo!</p>
            <LinkButton to="/newcompany" text="Cadastrar Empresa" />                     
        </section>
    )
}

export default Home