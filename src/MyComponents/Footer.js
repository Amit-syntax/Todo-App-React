import React from 'react'

export default function Footer() {
  const footerStyle = {
    top: 'calc(100vh - 40px)'
  }
  return (
    <footer className='bg-dark text-white text-center py-2 position-absolute w-100 ' style={footerStyle}>
      copyright &copy; 2022
    </footer>
  )
}
