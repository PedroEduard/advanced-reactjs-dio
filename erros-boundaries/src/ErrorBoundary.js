import React, { Component } from 'react'
import ErroImg from './Erro.png'

class ErrorBoundary extends Component {

  constructor(props){
    super(props)
    this.state = {
      hasError: true
    //se o nosso erro for verdadeiro ele exibe a imagem ,caso nao roda o nosso programa normalmente
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  render() {
    if(this.state.hasError) {
      return <img src={ErroImg} />
    }
    return this.props.children
  }
}

export default ErrorBoundary




