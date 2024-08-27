import React from 'react'
import './Footer.css'

const Foter = () => {

    const year = new Date()
    
  return (
    <div className='footer'>
        <p>Copyright &copy; {year.getFullYear()}, Cryptoplace - All Right Resesrved.</p>
    </div>
  )
}

export default Foter