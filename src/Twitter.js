import React, { useEffect, useState,  memo } from 'react'

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}


function Twitter(props) {
    const { loading } = props
    const{tweet, setTweet} = useState()

//componentDidMount
useEffect(() =>{
    const { posts, loading } = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
}, [])

//componentDidUpdate
useEffect(() => {
    console.log('componentDidUpdate',loading)
}, [loading])

//componentDidUpdate
useEffect(() => {
    return () => (
        console.log('componentWillUnmount: fui removido : (')
    )
})

const handleTweet = () => {
    setTweet('tweet atualizando')
}
console.log('tweet atualizando', tweet)
      const { posts } = props
    return (
      <div>
         <button onClick={handleTweet}>Re-render</button>
         <p>Testes Ciclo de vidas e suas fases </p>
      </div>
    )
  }
export default memo[Twitter, areEqual]

