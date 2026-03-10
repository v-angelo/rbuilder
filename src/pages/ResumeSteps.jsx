import { FaDownload } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { Link } from "react-router-dom";

function ResumeSteps() {
  return (
    <section>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-center my-10'>Create a Job-Winning Resume in Minutes</h1>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-evenly items-center">
        <article className="w-75 sm:w-90 h-70 flex flex-col justify-baseline items-center my-5 shadow-2xl rounded-2xl px-2 py-5 text-center">
          <IoDocumentText className="text-5xl text-blue-600 mt-10" />
          <h2 className="text-2xl my-2 font-medium">Add your Information</h2>
          <h3 className="text-slate-800">Add pre-written examples to each section</h3>
          <h2 className="text-2xl my-2 font-medium">Step 1</h2>
        </article>
  
        <article className="w-75 sm:w-90 h-70 flex flex-col justify-baseline items-center my-5 shadow-2xl rounded-2xl px-2 py-5 text-center">
          <FaDownload className="text-5xl text-red-500 mt-10" />
          <h2 className="text-2xl my-2 font-medium">Download your Resume</h2>
          <h3 className="text-slate-800">Download and start applying</h3>
          <h2 className="text-2xl my-2 font-medium">Step 2</h2>
        </article>
      </div>

      <Link to={"/form"} className="w-40 my-5 text-center text-white active:bg-slate-600 mx-auto block bg-[#3b4f55] p-3 rounded">LET'S START</Link>

    </section>
  )
}

export default ResumeSteps