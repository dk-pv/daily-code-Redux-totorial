

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './nameSlice'

const Name = () => {
    const dispatch = useDispatch()
    const name = useSelector(state => state.name.value)
  return (
    <div>
      <h1>my name is : {name}</h1>
      <button onClick={() => dispatch(changeName())}>change name</button>
    </div>
  )
}

export default Name
