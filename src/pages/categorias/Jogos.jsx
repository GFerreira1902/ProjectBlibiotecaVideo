import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Form, Modal, Row} from 'react-bootstrap'
import { IoMdAddCircleOutline } from 'react-icons/io'
import {useForm} from 'react-hook-form'
import JogosService from '../../services/bibliotecavideos/JogosService'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { mask } from 'remask';
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from "sweetalert2";
import JogosValidator from '../../validators/JogosValidator'


const Jogos = () => {

  const navigate = useNavigate
  const {register, handleSubmit, setValue, formState: {errors}}  = useForm()
  const [showcat, setShowCat] = useState(false);
  const handleCategoria = () => setShowCat(false); 
  const handleShowCat = () => setShowCat(true);
  const params = useParams()
  const [categorias, setCategorias] = useState ([])

  function salvarcategoria(dados) {
    JogosService.create(dados)
    console.log(dados)
    Swal.fire({
      icon: 'success',
      title: 'Vídeo adicionado!'
    })
    handleCategoria()
  }

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')) {
      console.log(id)
      JogosService.delete(id)
      setCategorias(JogosService.getAll())
    }
  }

  function handleChange(event) { 
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  useEffect(() => {

    setCategorias(JogosService.getAll())

  }, [])  


  return (
    <div>
      <Col lg={1}>
        <Button variant='dark' onClick={handleShowCat} className='float-end'>Adicionar Jogo<IoMdAddCircleOutline className="fs3" /></Button>
      </Col>
      <Row>

          <h2 className='mt-5 mb-3'>Jogos</h2>
          {categorias.map((categoria,i) => (
            <Card style={{ backgroundColor:'#000000', width: '250px', height: '280px', margin: '10px', marginTop: '8%',color: 'white', textAlign: 'left', boxShadow: '20px 10px 10px black', borderRadius:'35px',justifyContent:'center' }} border='primary' key={i}>
              <Card.Img variant='top' src={categoria.thumb} style={{width:'100%',height:'50%',borderRadius:'35px'}}/>
              <Card.Body>
                <Link to={"/categoria/jogos/"+i} style={{textDecoration:'none',color:'white',}}><Card.Title style={{fontSize:'15px', paddingBottom:'40px'}} >{categoria.nome}</Card.Title></Link>
                <BsTrash onClick={() => apagar(i)} className='text-danger fs-5 mt-2 float-end' />
                <a href={'/categoria/jogos/edit/'+i}><BsPencilFill className='text-light fs-5' style={{justifyContent:'right'}}/></a>               
              </Card.Body>
            </Card>
          ))}
      </Row>
      <Modal show={showcat} onHide={handleCategoria} >
        <Modal.Header style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>
          <Modal.Title>Novo Vídeo</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          <Form>
            <Form.Group className="mb-3" controlId="video">
              <Form.Label>Link do Vídeo: </Form.Label>
              <Form.Control isInvalid={errors.video} type="text" {...register("video", JogosValidator.video)} />
              {errors.video && <span className="text-danger">{errors.video.message}</span>}
            </Form.Group>         
            <Form.Group className="mb-3" controlId="thumb">
              <Form.Label>Lnk Imagem de Apresentação: </Form.Label>
              <Form.Control isInvalid={errors.thumb} type="text" {...register("thumb", JogosValidator.thumb)} />
              {errors.thumb && <span className="text-danger">{errors.thumb.message}</span>}
            </Form.Group>         
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome ou Título: </Form.Label>
              <Form.Control isInvalid={errors.nome} type="text" {...register("nome", JogosValidator.nome)} />
              {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipoid">
              <Form.Label>Categoria: </Form.Label>
              <Form.Select {...register("tipoid")} >
                <option selected disabled>Jogos</option>
                {errors.tipo && <span>Campo Obrigatório</span>}
              </Form.Select>  
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataadd">
              <Form.Label>Data de Adição: </Form.Label>
              <Form.Control type="text" {...register("dataadd")} mask="99/99/9999" onChange={handleChange}/>
              {errors.dataadd && <span className="text-danger">{errors.dataadd.message}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="descricao">
              <Form.Label>Descição: </Form.Label>
              <textarea style={{width:'100%', height: '150px'}} {...register("descricao", { maxLenght: 300 })}></textarea>
            </Form.Group>  
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", Color: "white" }}>
          <Button variant="secondary" onClick={handleCategoria}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmit(salvarcategoria)}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Jogos