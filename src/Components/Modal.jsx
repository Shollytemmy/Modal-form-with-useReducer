import React from 'react'

export  function Modal({modalContent, closeModal}) {

  setTimeout(() =>{
    closeModal()


  }, 2000)
  return (
    <div className='modal'>{modalContent}</div>
  )
}
