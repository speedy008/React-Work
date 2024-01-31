import React from 'react'

interface CartProps {
    cartItem: string[]
    onClear: () => void
}

function Cart({cartItem, onClear}:CartProps,) {
  return (
    <div><ul>{cartItem.map(item => <li key={item}>{item}</li>)}</ul><button onClick={onClear}>Clear</button></div>
  )
}

export default Cart