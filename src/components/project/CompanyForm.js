import {useEffect, useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './CompanyForm.module.css'

function CompanyForm ({ handleSubmit, btnText, projectData }) {
        const [project, setProject] = useState(projectData || {})

    
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })        
    }

    return (
        <form  onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome da empresa" name="companyName" placeholder="Insira o nome da empresa" handleOnChange={handleChange} value={project.companyName ? project.companyName : ''} />
            <Input type="text" text="Endereço" name="companyAddress" placeholder="Insira o endereço da empresa" handleOnChange={handleChange} value={project.companyAddress ? project.companyAddress : ''} />
            <Input type="text" text="Ramo" name="companyBranch" placeholder="Insira o ramo da empresa" handleOnChange={handleChange} value={project.companyBranch ? project.companyBranch : ''} />
            <Input type="text" text="Site" name="companySite" placeholder="Insira o site da empresa" handleOnChange={handleChange} value={project.companySite ? project.companySite : ''} />
            <Input type="text" text="Telefone" name="companyPhone" placeholder="Insira o telefone da empresa" handleOnChange={handleChange} value={project.companyPhone ? project.companyPhone : ''} />
            <SubmitButton text={btnText} />   
        </form>        
    )  
}

export default CompanyForm