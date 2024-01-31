import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"
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
    const [selectedItemType, setSelectedItemType] = useState<{cityname:string,type:string} | null>(null)
    const handleSelectedItemtype = (item: {cityname:string, type:string}) => {
        setSelectedItemType(item)
        setAlertVisiblity(true)
    }
    const [alertVisiblity, setAlertVisiblity] = useState(false)
    const [tags, setTag] = useState(['a','b'])
    const [customer, SetCustomer] = useState({
        name: 'kajal',
        address: {
            city: 'Ahemdabad',
            zipcode: 382416
        }
    })
    //object updates
    const handleClick = () => {
        SetCustomer({
            ...customer,
            address:{...customer.address,zipcode: 367890}
        })
        //setTag([...tags, 'exciting']) // adding
        //setTag(tags.filter(tag => tag !== 'a')) //remove 
        //setTag(tags.map(tag => tag == 'a' ? 'abc' : tag)) //update the perticular tag value in array
    }

    

  return <>
            {alertVisiblity && (
                <Alert alertType={selectedItemType?.type} onClose={() => setAlertVisiblity(false)}><span>{selectedItemType?.cityname}</span></Alert>
            )}
            <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItemtype} /><br/> 
            {customer.address.zipcode}
            <br />
            {tags}
            <button onClick={handleClick}>Click Me!!</button>
         </>
 }

 export default App