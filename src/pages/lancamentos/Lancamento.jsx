import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LancamentoService from '../../services/bibliotecavideos/LancamentoService'
import {GrMoreVertical} from 'react-icons/gr'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import FilmeService from '../../services/bibliotecavideos/FilmeService'
import MusicasService from '../../services/bibliotecavideos/MusicasService'
import JogosService from '../../services/bibliotecavideos/JogosService'
import EntretenimentoService from '../../services/bibliotecavideos/EntretenimentoService'
import { mask } from 'remask';
import Swal from "sweetalert2";
import LancamentoValidator from '../../validators/LancamentoValidator'

const Lancamento = () => {

  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors}}  = useForm()
  const [showlan, setShowLan] = useState(false);
  const [show, setShow] = useState(false);
  const params = useParams()
  const [lancamentos, setLancamentos] = useState([])
  const [filmes, setFilme] = useState ([])
  const [musicas, setMusicas] = useState ([])
  const [jogos, setJogos] = useState ([])
  const [entretenimento, setEntretenimento] = useState ([])

  const handleLancamento = () => setShowLan(false);
  const handleShowLan = () => setShowLan(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function salvarlancamento(dadoslancamento) {
    LancamentoService.create(dadoslancamento)
    console.log(dadoslancamento)
    Swal.fire({
      icon: 'success',
      title: 'Vídeo adicionado!'
    })
    handleLancamento()
  }

  useEffect(() => {
    
    setLancamentos(LancamentoService.getAll())
    setFilme(FilmeService.getAll())
    setMusicas(MusicasService.getAll())
    setJogos(JogosService.getAll())
    setEntretenimento(EntretenimentoService.getAll())
    

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')) {
      console.log(id)
      LancamentoService.delete(id)
      setLancamentos(LancamentoService.getAll())
    }
  }

  function handleChange(event) { 
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }


  return (
    <div>
      <Row>
        <Col lg={1}>
          <Button variant='dark' onClick={handleShowLan} className='float-end'>Adicionar Genérico<IoMdAddCircleOutline className="fs3" /></Button>
        </Col>
          <h2 className='mt-5 mb-3'>Genéricos</h2>
          {lancamentos.map((lancamento,i) => (
            <Card style={{ backgroundColor:'#000000', width: '250px', height: '280px', margin: '10px',color: 'white', textAlign: 'left', boxShadow: '20px 10px 10px black', borderRadius:'35px',justifyContent:'center' }} border='primary' key={i} className='mb-4'>
              <Card.Img variant='top' src={lancamento.thumb} style={{width:'100%',height:'50%',borderRadius:'35px'}}/>
              <Card.Body>
                <Link to={"/all/"+i} style={{textDecoration:'none',color:'white',}}><Card.Title style={{fontSize:'15px', paddingBottom:'40px'}} >{lancamento.nome}</Card.Title></Link>
                <BsTrash onClick={() => apagar(i)} className='text-danger fs-5 float-end mt-2' />
                <a href={'all/edit/'+i}><BsPencilFill className='text-light fs-5'/></a>               
              </Card.Body>
            </Card>
          ))}
      </Row>
      <Row>
            <h2 className='mt-2 mb-4'>Filmes</h2>
            {filmes.map((filme,i) => (
              <Card style={{ backgroundColor:'#000000', width: '250px', height: '280px', margin: '10px',color: 'white', textAlign: 'left', boxShadow: '20px 10px 10px black', borderRadius:'35px',justifyContent:'center' }} border='primary' key={i} className='mb-4'>
                <Card.Img variant='top' src={filme.thumb} style={{width:'100%',height:'50%',borderRadius:'35px'}}/>
                <Card.Body>
                  <Link to={"/categoria/filme/"+i} style={{textDecoration:'none',color:'white',}}><Card.Title style={{fontSize:'15px', paddingBottom:'40px'}} >{filme.nome}</Card.Title></Link>
                </Card.Body>
              </Card>
            ))}

      </Row>

      <Row>
            <h2 className='mt-2 mb-4'>Músicas</h2>
            {musicas.map((musica,i) => (
              <Card style={{ backgroundColor:'#000000', width: '250px', height: '280px', margin: '10px',color: 'white', textAlign: 'left', boxShadow: '20px 10px 10px black', borderRadius:'35px',justifyContent:'center' }} border='primary' key={i} className='mb-4'>
                <Card.Img variant='top' src={musica.thumb} style={{width:'100%',height:'50%',borderRadius:'35px'}}/>
                <Card.Body>
                  <Link to={"/categoria/musicas/"+i} style={{textDecoration:'none',color:'white',}}><Card.Title style={{fontSize:'15px', paddingBottom:'40px'}} >{musica.nome}</Card.Title></Link>
                </Card.Body>  
              </Card>
            ))}
      </Row>

      <Row>
            <h2 className='mt-2 mb-4'>Jogos</h2>
            {jogos.map((jogo,i) => (
              <Card style={{ backgroundColor:'#000000', width: '250px', height: '280px', margin: '10px',color: 'white', textAlign: 'left', boxShadow: '20px 10px 10px black', borderRadius:'35px',justifyContent:'center' }} border='primary' key={i} className='mb-4'>
                <Card.Img variant='top' src={jogo.thumb} style={{width:'100%',height:'50%',borderRadius:'35px'}}/>
                <Card.Body>
                  <Link to={"/categoria/jogos/"+i} style={{textDecoration:'none',color:'white',}}><Card.Title style={{fontSize:'15px', paddingBottom:'40px'}} >{jogo.nome}</Card.Title></Link>
                </Card.Body>
              </Card>
            ))}
      </Row>

      <Row>
            <h2 className='mt-2 mb-4'>Entretenimento</h2>
            {entretenimento.map((entretenimento,i) => (
              <Card style={{ backgroundColor:'#000000', width: '250px', height: '280px', margin: '10px',color: 'white', textAlign: 'left', boxShadow: '20px 10px 10px black', borderRadius:'35px',justifyContent:'center' }} border='primary' key={i} className='mb-4'>
                <Card.Img variant='top' src={entretenimento.thumb} style={{width:'100%',height:'50%',borderRadius:'35px'}}/>
                <Card.Body>
                  <Link to={"/categoria/entretenimento/"+i} style={{textDecoration:'none',color:'white',}}><Card.Title style={{fontSize:'15px', paddingBottom:'40px'}} >{entretenimento.nome}</Card.Title></Link>            
                </Card.Body>
              </Card>
            ))}
      </Row>
      <Modal show={showlan} onHide={handleLancamento} >
        <Modal.Header style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>
          <Modal.Title>Novo Vídeo</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          <Form>
            <Form.Group className="mb-3" controlId="video">
              <Form.Label>Link do Vídeo: </Form.Label>
              <Form.Control isInvalid={errors.video} type="text" {...register("video", LancamentoValidator.video)} />
              {errors.video && <span className="text-danger">{errors.video.message}</span>}
            </Form.Group>         
            <Form.Group className="mb-3" controlId="thumb">
              <Form.Label>Lnk Imagem de Apresentação: </Form.Label>
              <Form.Control isInvalid={errors.thumb} type="text" {...register("thumb", LancamentoValidator.thumb)} />
              {errors.thumb && <span className="text-danger">{errors.thumb.message}</span>}
            </Form.Group>         
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome ou Título: </Form.Label>
              <Form.Control isInvalid={errors.nome} type="text" {...register("nome", LancamentoValidator.nome)} />
              {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipoid">
              <Form.Label>Categoria: </Form.Label>
              <Form.Select {...register("tipoid")} >
                <option selected disabled>Genérico</option>
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
          <Button variant="secondary" onClick={handleLancamento}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmit(salvarlancamento)}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>     

    
  )
}

export default Lancamento