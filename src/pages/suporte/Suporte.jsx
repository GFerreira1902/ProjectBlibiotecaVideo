import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Dropdown, DropdownButton, Form, Modal, Row } from 'react-bootstrap'
import { Link, useParams,useNavigate } from 'react-router-dom'
import SuporteService from '../../services/bibliotecavideos/SuporteService'
import {useForm} from 'react-hook-form'
import Swal from "sweetalert2";


const Suporte = () => {

    const handleSuporte = () => setShowLan(false);
    const handleShowLan = () => setShowLan(true);
    const [showlan, setShowLan] = useState(false);
    const {register, handleSubmit, formState: {errors}}  = useForm()
    const navigate = useNavigate()
    const params = useParams()
    const [suportes, setSuportes] = useState([])

    
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

        setSuportes(SuporteService.getAll())

    }, [])

    return (
        <div className="mt-5"  align='center' style={{color:'black'}}>
            <h1>Contate-nos</h1>

            <Col md={8} className="mt-3">
                <Form >
                    <Form.Group className="mb-3" controlId="acao" >
                        <Form.Label>O que deseja fazer: </Form.Label>
                        <Form.Select className='mb-3' aria-label="Default select example" {...register("acao", { maxLenght: 300 })} style={{ backgroundColor:'black', color:'white'}}>
                        {errors.acao && <span className="text-danger">{errors.acao.message}</span>}
                            <option></option>
                            <option value="Critica">Critica</option>
                            <option value="Elogio">Elogio</option>
                            <option value="Sugestão">Sugestão</option>
                            <option value="Reclamação">Reclamação</option>
                        </Form.Select>
                    </Form.Group>
                    <textarea placeholder='Conte mais...' controlId="descricao" style={{width:'100%',height:'200px',backgroundColor:'black', color:'white'}}   {...register("descricao", { maxLenght: 300 })}></textarea>
                </Form>
                <Button variant="dark" onClick={(handleSubmit(salvarsuporte))}>
                    Enviar
                </Button>
            </Col>
            

        </div>
    )
}

export default Suporte