import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getDownloadResumeAPI } from '../services/allApiService';

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

  return (
    <section className='mx-auto max-w-5xl'>
      <header className='flex justify-between my-10 mx-3'>
        <h1 className='text-3xl'>Downloaded Resume History</h1>
        <Link className='flex w-18 justify-between items-center text-xl' to={'/form'}><IoArrowBackSharp />Back</Link>
      </header>

      <article className='rounded-xl shadow-2xl p-3 w-70 h-80 my-5 mx-3'>
        <div className='text-lg flex justify-between items-center'>
          <h5 className='font-medium'>Review at: time</h5>
          <MdDelete className='text-red-500' />
        </div>
        <figure>
          <img src="" alt="resumeImg" />
        </figure>
      </article>
    </section>
  );
}

export default Downloads;