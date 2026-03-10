import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* landing */}
      <section className="min-h-screen bg-[url('/meeting01.png')] bg-fixed bg-cover">
        <article className='w-full min-h-screen flex justify-center items-center '>
          <div className='p-12 w-80 md:w-100 sm:w-110 bg-[rgba(59,79,85,0.5)] rounded-xl shadow-xl text-white text-center'>
            <h3 className='text-3xl'>Designed to get hired. Your skills, your story, your next job — all in one.</h3>
            <Link className='bg-black mt-5 block w-55 mx-auto p-3 rounded active:bg-gray-950 cursor-pointer' to={"/steps"}>Make Your Resume</Link>
          </div>
        </article>
      </section>

      {/* tools */}
      <section className='bg-white max-w-250 mx-auto'>
        <h1 className='text-4xl text-center mt-10 font-bold'>Tools</h1>
        <div className='p-2 flex flex-col md:flex-row justify-center items-center'>
          <article className='md:w-1/2'>
            <h3 className='text-xl font-medium my-2'>Resume</h3>
            <h4 className='text-slate-800'>Create unlimited new resumes and easily edit them afterwards.</h4>
            <h3 className='text-xl font-medium my-2'>Cover Letters</h3>
            <h4 className='text-slate-800'>Easily write professional cover letters.</h4>
            <h3 className='text-xl font-medium my-2'>Jobs</h3>
            <h4 className='text-slate-800'>Automatically receive new and relevant job postings.</h4>
            <h3 className='text-xl font-medium my-2'>Applications</h3>
            <h4 className='text-slate-800'>Effortlessly manage and track your job applications in an organized manner.</h4>
          </article>

          <article className='md:w-1/2 text-right'>
            <img className='max-md:w-80 w-100 inline-block' src="/resume.png" alt="resumeImg" />
          </article>
        </div>
      </section>

      {/* image */}
      <section className="min-h-screen bg-[url('/meeting02.png')] bg-fixed bg-cover"></section>

      {/* testimony */}
      <section className='bg-white max-w-250 mx-auto'>
        <h1 className='text-4xl text-center mt-10 font-bold'>Testimony</h1>
        <div className='p-2 mt-5 flex flex-col md:flex-row justify-center items-start'>
          <article className='md:w-1/2'>
            <h3 className='text-2xl font-medium mb-10'>Trusted by professionals worldwide</h3>
            <h4 className='my-5 text-slate-800'>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</h4>           
            <h4 className='my-5 text-slate-800'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</h4>
            <h4 className='my-5 text-slate-800'>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</h4>
          </article>

          <article className='md:w-100 grid grid-cols-3 grid-rows-3 gap-2 ml-auto'>
            <img src="/grid1.png" alt="gridImg01" />
            <img src="/grid2.png" alt="gridImg02" />
            <img src="/grid3.png" alt="gridImg03" />
            <img src="/grid4.png" alt="gridImg04" />
            <img src="/grid5.png" alt="gridImg05" />
            <img src="/grid6.png" alt="gridImg06" />
            <img src="/grid7.png" alt="gridImg07" />
            <img src="/grid8.png" alt="gridImg08" />
            <img src="/grid9.png" alt="gridImg09" />
          </article>
        </div>
      </section>      
    </>
  )
}

export default Home