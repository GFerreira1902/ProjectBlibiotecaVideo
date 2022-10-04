import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { Link, useParams,useNavigate } from 'react-router-dom'
import LancamentoService from '../../services/bibliotecavideos/LancamentoService'
import {useForm} from 'react-hook-form'
import Swal from "sweetalert2";
import ReactPlayer from 'react-player/youtube'


const LancamentoVideo = () => {

    const handleLancamento = () => setShowLan(false);
    const handleShowLan = () => setShowLan(true);
    const handleClose = () => setShowLan(false);    
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [showlan, setShowLan] = useState(false);
    const {register, handleSubmit, formState: {errors}}  = useForm()
    const navigate = useNavigate()
    const params = useParams()
    const [lancamentos, setLancamentos] = useState([])
    const [videos, setVideos] = useState([])

    function alterarlancamento(dados){
        if (params.id) {
                LancamentoService.update(params.id, dados)
            }

    }
   

    useEffect(() => {
        setVideos (LancamentoService.get(params.id))
        setLancamentos(LancamentoService.getAll())
        if (params.id) {
            const video = LancamentoService.get(params.id)
            
        }    

    }, [])

    function apagar(id) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            LancamentoService.delete(id)
            setLancamentos(LancamentoService.getAll())
        }
        navigate('/lancamento')
    }

    function copiarTexto() {
        // Selecionamos por ID o nosso input 
        var textoCopiado = document.getElementById("video");

        // Selecina todo o link
        textoCopiado.select();

        // Copia link selecionado 
        document.execCommand("copy");

        Swal.fire({
            icon: 'info',
            title: 'Link do Vídeo Copiado!'
        })
        handleClose()
    }

    
    return (
        <div className="mt-5" style={{color:'black'}} >
            <Row>
                <Col md={5} >   
                    <h1>{videos.nome}</h1>
                </Col>
                <Col md={7} className='mt-3'>    
                    <Button onClick={handleShowLan} variant='dark'>Compartilhar</Button>
                </Col>
            </Row>
            <Row>
                <Col md={7} >
                    <Card align='center'>
                        <ReactPlayer url={videos.video} style={{width:'100%'}}/>
                    </Card>
               
                    
                    <div>
                        <textarea style={{ backgroundColor:'black', color: 'white',width:'100%', height:'200px', marginTop:'5%', padding: '20px'}} variant='dark' value={videos.descricao} disabled></textarea>
                        
                    </div>
                </Col>

                <Col md={5} >
                    {lancamentos.map((lancamento, i) => (
                       
                        <a href={"/lancamento/"+i} >
                            <Card style={{ backgroundColor: '#000000', width: '350px', height: '245px', margin: '10px', color: 'white', textAlign: 'center', borderRadius: '35px', justifyContent: 'center' }} border='primary' key={lancamento.id} href="#">
                                <Card.Img variant='top' src={lancamento.thumb} style={{ width: '100%', height: '70%', borderRadius: '35px' }} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '15px', }} >{lancamento.nome}</Card.Title>                                                               
                                </Card.Body>
                            </Card>
                        </a>
                        
                    ))}                      
                </Col>
            </Row>
            

            <Modal show={showlan} onHide={handleLancamento} >
                <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="video">
                            <Form.Label>Link do Vídeo: </Form.Label>
                            <Form.Control type="text" {...register("video", { maxLenght: 300 })} value={videos.video}/>
                            {errors.video && <span className="text-danger">{errors.video.message}</span>}
                        </Form.Group>
                    </Form>    
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "black", Color: "white" }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={(copiarTexto)}>
                        Copiar Link
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default LancamentoVideo