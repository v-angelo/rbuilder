import React from 'react';
import { FaBackward, FaFileDownload } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
import Preview from '../components/Preview';
import Edit from '../components/Edit';

function viewResume() {
  return (
    <section className='max-w-4xl mx-auto'>
      <article className='max-w-lg mx-auto flex justify-evenly items-center text-3xl my-10'>
        <FaFileDownload className='text-blue-500' />
        <Edit />
        <IoMdRefresh className='text-red-500' />
        <FaBackward className='text-green-500' />
      </article>

      <article>
        <Preview />
      </article>
    </section>
  );
}

export default viewResume;