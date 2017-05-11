
import React from 'react'

const FormContainer = ({changeState, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      From: <input type='date' name='fromDate' onChange={changeState} required />
      To: <input type='date' name='toDate' onChange={changeState} required />
      <input type='submit' />
    </form>
  )
}

export default FormContainer
