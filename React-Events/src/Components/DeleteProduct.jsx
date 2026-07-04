import React from 'react'

const DeleteProduct = () => {
    function deleteProduct(id) {
        alert(`Deleted Product Id is: ${id}`)
    }
  return (
    <div>
      <button onClick={() => deleteProduct("101")}>Delete</button>
    </div>
  )
}

export default DeleteProduct
