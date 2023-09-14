import './Formulario.css';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'
import { useState } from 'react';

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')
    const [time, setTime] = useState('Engenharia')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,cargo,imagem,time
        })
        setCargo('')
        setNome('')
        setImagem('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha para criar o card do colaborador:</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa valor={time} aoAlterado={valor=>setTime(valor)} obrigatorio={true} label="Time" itens={props.times} />
                <Botao> Criar Card </Botao>
            </form>
        </section>
    )
}

export default Formulario