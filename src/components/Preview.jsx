import React from 'react';
import { Divider, Button } from '@mui/material';

function Preview({ resumeData }) {
  return (
    <section className='px-10'>
      <h2 className='text-3xl font-medium mb-3'>{resumeData?.fullName}</h2>
      <h4 className='my-2'>Phone: {resumeData?.phone}</h4>
      <h4 className='my-2'>Email: {resumeData?.email}</h4>
      <h4 className='my-2'>LinkdIn: <a href=''>{resumeData?.linkdin}</a></h4>
      <h4 className='my-2'>GitHub: <a href=''>{resumeData?.github}</a></h4>
      <h4 className='mt-2 mb-5'>Location: {resumeData?.location}</h4>

      <Divider className='' />

      <h3 className='text-2xl font-medium my-3'>Professional Summary</h3>
      <p className='mb-5'>{resumeData?.summary}</p>

      <Divider className='' />

      <h3 className='text-2xl font-medium my-3'>Technical Skills</h3>
      {
        resumeData?.skills?.map((item, index )=> (
          <Button key={index} sx={{margin: "5px 3px", color: "black", borderColor: "black" }} variant='outlined'>{item}</Button>
        ))
      }

      <Divider className='' />

      <h3 className='text-2xl font-medium my-3'>Education</h3>
      <h4 className='my-2'>Bachelor's degree in <span className='font-medium'>{resumeData?.degree}</span></h4>
      <h4 className='my-2'>University/College Name: {resumeData?.university}</h4>
      <h4 className='my-2'>Year of Graduation: {resumeData?.passOut}</h4>
    </section>
  );
}

export default Preview;