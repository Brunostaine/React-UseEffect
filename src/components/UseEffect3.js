import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {

    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda!")
        }
    }, [anotherNumber])
  return (
    <div>
        <h2>UseEffect com arrays</h2>
        <p>AnotherNumber: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar estado</button>
    </div>
  )
}

export default UseEffect3