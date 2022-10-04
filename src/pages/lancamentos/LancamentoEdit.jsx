import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LancamentoService from '../../services/bibliotecavideos/LancamentoService'
import Swal from "sweetalert2";


const LancamentoEdit = () => {

  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors}}  = useForm()
  const params = useParams()
  const [lancamentos, setLancamentos] = useState([])

  function salvarlancamento(dadoslancamento) {
    if (params.id) {
        LancamentoService.update(params.id, dadoslancamento)
        Swal.fire({
          icon: 'success',
          title: 'Vídeo alterado!'
        })
      }


    navigate('/all')  
  }

  useEffect(() => {
    
    setLancamentos(LancamentoService.getAll())

      if (params.id) {
          const lancamento = LancamentoService.get(params.id)

          for (let campo in lancamento) {
              setValue(campo, lancamento[campo])
          }
      }
    

  }, [])

  return (
      <div align='center' style={{color:'black'}}>
        <Col md={8} className='mt-3'>
          <Form>
              <Form.Group className="mb-3" controlId="video">
                  <Form.Label>Link do Vídeo: </Form.Label>
                  <Form.Control isInvalid={errors.video} type="text" {...register("video", { maxLenght: 300 })} style={{ backgroundColor:'black', color:'white'}}/>
                  {errors.video && <span className="text-danger">{errors.video.message}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="thumb">
                  <Form.Label>Lnk Imagem de Apresentação: </Form.Label>
                  <Form.Control isInvalid={errors.thumb} type="text" {...register("thumb", { maxLenght: 300 })} style={{ backgroundColor:'black', color:'white'}}/>
                  {errors.thumb && <span className="text-danger">{errors.thumb.message}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="nome">
                  <Form.Label>Nome ou Título: </Form.Label>
                  <Form.Control isInvalid={errors.nome} type="text" {...register("nome", { maxLenght: 25 })} style={{ backgroundColor:'black', color:'white'}}/>
                  {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="tipoid">
                  <Form.Label>Categoria: </Form.Label>
                  <Form.Control isInvalid={errors.tipoid} type="text" {...register("tipoid", { required: 'Campo "Tipo" Obrigatório', minLenght: 1, maxLenght: 1 })} style={{ backgroundColor:'black', color:'white'}}/>
                  {errors.tipo && <span className="text-warning">{errors.tipo.message}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="descricao">
                  <Form.Label>Descição: </Form.Label>
                  <textarea style={{ width: '100%', height: '150px',backgroundColor:'black', color:'white'}} {...register("descricao", { maxLenght: 300 })} ></textarea>
              </Form.Group>
          </Form>
          <Link to={-1} className="m-2"><Button variant="secondary" >
              Voltar
          </Button></Link>
          <Button variant="primary" onClick={handleSubmit(salvarlancamento)}>
              Alterar
          </Button>
        </Col>
      </div>     

    
  )
}

export default LancamentoEdit