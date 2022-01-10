import { useNavigate } from 'react-router-dom'

import CompanyForm from '../project/CompanyForm'

import styles from './NewCompany.module.css'

function NewCompany() {
    
    const navigate = useNavigate()
    
    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
            navigate('/company', { message: 'Projeto criado com sucesso!' })
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newcompany_container}>
            <h1>Cadastrar Empresa</h1>
            <p>Cadastre a empresa para depois cadastrar seus colaboradores</p>
            <CompanyForm handleSubmit={createPost} btnText="Cadatrar Empresa" />
        </div>
    )
}

export default NewCompany