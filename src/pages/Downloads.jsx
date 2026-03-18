import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { deleteDownloadResumeAPI, getDownloadResumeAPI } from '../services/allApiService';

function Downloads() {

  const [allDownloads, setAllDownloads] = useState([]);

  console.log(allDownloads);

  useEffect(() => {
    getAllDownloads();
  }, []);


  const getAllDownloads = async () => {
    const result = await getDownloadResumeAPI();
    if (result.status == 200) {
      setAllDownloads(result.data);
    }
  }

  const removeDownload = async (id) => {
    await deleteDownloadResumeAPI(id);
    getAllDownloads();
  }

  return (
    <section className='mx-auto max-w-5xl'>
      <header className='flex justify-between my-10 mx-3'>
        <h1 className='text-3xl'>Downloaded Resume History</h1>
        <Link className='flex w-18 justify-between items-center text-xl' to={'/form'}><IoArrowBackSharp />Back</Link>
      </header>

      <section className='flex flex-wrap justify-center'>
        {
          allDownloads.length > 0 ?
            allDownloads?.map((resume, index) => (
              <article key={index} className='rounded-xl shadow-2xl p-3 w-80 h-80 my-5 mx-3'>
                <div className='text-lg flex justify-between items-center'>
                  <h5 className='font-medium text-slate-600 text-sm'>Review at: {resume?.timeStamp}</h5>
                  <MdDelete onClick={() => removeDownload(resume?.id)} className='text-red-500 text-xl cursor-pointer' />
                </div>
                <Link to={`/resume/${resume?.resumeId}/view`}>
                  <img className='w-70 m-2' src={resume?.resumeImg} alt="resumeImg" />
                </Link>
              </article>
            ))
            : <div className='my-10 text-xl text center mx-auto'>No Resumes are downloaded yet!!</div>
        }
      </section>

    </section>
  );
}

export default Downloads;