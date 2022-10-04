import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {GiMusicalNotes} from 'react-icons/gi'
import {SiYoutubemusic} from 'react-icons/si'

  

const Menu = () => {


  return (
    <div>

      <Navbar variant="dark" className="mb-3" style={{backgroundColor:'#000000', color:'black',padding: '20px'}} >
          <Navbar.Brand href="/" ><SiYoutubemusic/>Mason Video</Navbar.Brand>
          <Nav className="me-auto" bg="dark">
            <Nav.Link href="/all">Geral</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown" menuVariant='dark'>
              <NavDropdown.Item href="/categoria/filmes">Filmes</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/musicas">Músicas</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/jogos">Jogos</NavDropdown.Item>  
              <NavDropdown.Item href="/categoria/entretenimento">Entretenimento</NavDropdown.Item>                       
            </NavDropdown>           
            <Nav.Link href="/suporte">Suporte</Nav.Link>
            <Nav.Link href="/avaliacao">Avaliações</Nav.Link>
          </Nav>
      </Navbar>

    </div>
  )
}

export default Menu