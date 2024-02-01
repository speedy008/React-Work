import React, { useState } from 'react'

interface Props {
    children:string,
    maxChar?: number
}

const ExpandableComponent = ({children, maxChar = 50} :Props) => {
    const [isExapnded, setExapnded] = useState(false)
    if(children.length <= maxChar) return <p>{children}</p>
    const text = isExapnded ? children : children.substring(0,maxChar)

    return <div>{text}<button onClick={() => setExapnded(!isExapnded)}>{isExapnded ? 'Less' : 'More'}</button></div>

}

export default ExpandableComponent