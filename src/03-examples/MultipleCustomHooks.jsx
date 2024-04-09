

import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHooks = () => {
  const {counter,increment,decrement} = useCounter(1)
  const {data,isLoading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
    <h1>Información de Pokemon</h1>
    <hr />
    {isLoading ? <LoadingMessage /> : 
    (<PokemonCard 
    id={data?.id} 
    name={data?.name}
    sprites={[
      data.sprites.front_default,
      data.sprites.front_shiny,
      data.sprites.back_default,
      data.sprites.back_shiny,
    ]}
    
    />)}
    <h2>{data?.name}</h2>
    <button type='button' className='btn btn-primary' onClick={()=> counter > 1 ? decrement() : null}>Anterior Pokemon</button>
    <button type='button' className='btn btn-primary' onClick={()=>increment()}>Siguiente Pokemon</button>
    </>
  )
}

