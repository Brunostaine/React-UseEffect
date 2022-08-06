import React, { useEffect, useState } from 'react'

const CleanUp = () => {

    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {

        const timer = setTimeout(() => {
            console.log("Hello World")
        }, 2000)

        // Finaliza o hook quando muda de pagina
        return () => clearTimeout(timer)

    }, [anotherNumber])
  return (
    <div>
        <h2>CleanUp</h2>
        <p></p>
    </div>
  )
}

export default CleanUp