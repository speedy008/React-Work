import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
const items = [
    {
        "cityname":"Ahemdabad",
        "type":"primary"
    },
    {
        "cityname":"kochi",
        "type":"secondary",
    },
    {
        "cityname":"Bangalore",
        "type":"success",
    },
    {
        "cityname":"Mumbai",
        "type":"danger",
    },
    {
        "cityname":"Baroda",
        "type":"warning",
    }
];

 function App(){
    const [product, setProduct] = useState(['Product1', 'Product2'])
    const [game, setGame] = useState({
        id:1,
        player: {
            name:'Kajal'
        }
    })
    const [pizza, setPizza] = useState({
        name: 'Spicay Pepperoni',
        topping: ['Mushroom','allepino']
    })
    const [cart, setCart] = useState({
        discount:.1,
        cartItems:[
            { id:1,title: 'Product 1',qty: 1 },
            { id:2,title: 'Product 2',qty: 1 },
        ]
    })
    const handleClick = () => {
        setGame({...game,player:{...game.player,name: 'Wicked'}})
    }
    const handlePizza = () => {
        setPizza({...pizza,topping: [...pizza.topping,'cheese']})
    }
    const handleQty = () => {
        setCart({...cart, cartItems: cart.cartItems.map(ct => ct.id == 1 ? {...ct,qty: 2} : ct)})
    }

  return <div><Navbar cartItemCount={product.length} /><br /><Cart cartItem={product} onClear={() => setProduct([])} />
  <br></br>
  <h1>Exercise 1</h1>
  <p>{game.player.name}</p>
  <button onClick={handleClick}>change Name</button>
  <br></br>
  <h1>Exercise 2</h1>
    <ul>{pizza.topping.map(top => <li>{top}</li>)}</ul>
  <button onClick={handlePizza}>Add Topping</button>
  <h1>Exercise 3</h1>
  <ul>{cart.cartItems.map(item => <li key={item.id}><p>ID: {item.id}</p><p>Title: {item.title}</p><p>QTY: {item.qty}</p></li>)}</ul>
  <button onClick={handleQty}>Change QTY</button>
  </div>
            
 }

 export default App