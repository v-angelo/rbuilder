import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#3b4f55] w-full text-white text-center py-10 shadow-xl'>
      <h4 className='text-xl mb-5'>Contact Us</h4>
      <h5><i className="fa-solid fa-envelope"></i> resumebuilder@gmail.com</h5>
      <h5><i className="fa-solid fa-phone"></i> 9087654321</h5>
      <div className='my-5 flex flex-col justify-center items-center'>
        <h4 className='text-xl'>Connect With Us</h4>
        <article>
          <span className='px-1 cursor-pointer hover:opacity-85'><i className="fa-brands fa-whatsapp"></i></span>
          <span className='px-1 cursor-pointer hover:opacity-85'><i className="fa-brands fa-facebook"></i></span>
          <span className='px-1 cursor-pointer hover:opacity-85'><i className="fa-brands fa-instagram"></i></span>
        </article>
      </div>


      <h6 className='text-slate-300'>Designed & build with ❤️ using React</h6>

    </footer>
  )
}

export default Footer