import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, DropdownButton, Form, Modal, Row } from 'react-bootstrap'
import { Link, useParams,useNavigate } from 'react-router-dom'
import SuporteService from '../../services/bibliotecavideos/SuporteService'
import {useForm} from 'react-hook-form'
import Swal from "sweetalert2";


const Avaliacao = () => {

    const handleSuporte = () => setShowLan(false);
    const handleShowLan = () => setShowLan(true);
    const [showlan, setShowLan] = useState(false);
    const {register, handleSubmit, formState: {errors}}  = useForm()
    const navigate = useNavigate()
    const params = useParams()
    const [avaliacoes, setAvaliacao] = useState([])

    
    function salvarsuporte(dadossuporte) {
        SuporteService.create(dadossuporte)
        console.log(dadossuporte)
    }

    function savefeed() {
        Swal.fire({
            icon: 'success',
            title: 'Feedback Enviado!'
        })
        
    }

    useEffect(() => {

        setAvaliacao(SuporteService.getAll())

    }, [])

    return (
        <div className="mt-5"  align='center' style={{color:'black'}}>
            <h1>Avaliações</h1>

            <Col md={8} className="mt-3 " align='left'>

                {avaliacoes.map((avaliacao, i) => (
                    <Card bg='dark' border='light' text='white' className='mb-3'>
                        <Card.Header variant='dark'><Card.Title>{avaliacao.acao}</Card.Title></Card.Header>
                        <Card.Body className='' style={{height: '150px'}}>
                            <Card.Text>{avaliacao.descricao}</Card.Text>
                        </Card.Body>
                    </Card>                                                                        
                ))}
            </Col>
            

        </div>
    )
}

export default Avaliacao