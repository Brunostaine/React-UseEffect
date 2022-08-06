import React, { useEffect } from 'react'

const UseEffect2 = () => {

    useEffect(() => {
        console.log("serei executado apenas uma vez")
    }, [])
  return (
    <div>
        <h2>UseEffect com array vazio</h2>

    </div>
  )
}

export default UseEffect2