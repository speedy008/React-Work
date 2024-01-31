import React from 'react'

interface NavbarProps  {
    cartItemCount: number
}

function Navbar({cartItemCount}:NavbarProps) {
  return (
    <div>Cart Item: {cartItemCount}</div>
  )
}

export default Navbar