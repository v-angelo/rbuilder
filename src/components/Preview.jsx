import React from 'react';
import { Divider, Button } from '@mui/material';

function Preview() {
  return (
    <section className='px-10'>
      <h2 className='text-3xl font-medium mb-3'>Full Name</h2>
      <h4 className='my-2'>Phone: 9496437283</h4>
      <h4 className='my-2'>Email: asdfg@gmail.com</h4>
      <h4 className='my-2'>LinkdIn: <a href=''>url</a></h4>
      <h4 className='my-2'>GitHub: <a href=''>url</a></h4>
      <h4 className='mt-2 mb-5'>Location: Location</h4>

      <Divider className='bg-slate-300' />

      <h3 className='text-2xl font-medium my-3'>Professional Summary</h3>
      <p className='mb-5'>Summary</p>

      <Divider className='bg-slate-300' />

      <h3 className='text-2xl font-medium my-3'>Technical Skills</h3>
      <Button sx={{marginBottom: "20px"}} variant='text'>Skills</Button>

      <Divider className='bg-slate-300' />
      
      <h3 className='text-2xl font-medium my-3'>Education</h3>
      <h4 className='my-2'>Bachelor's degree in <span className='font-medium'>degree</span></h4>
      <h4 className='my-2'>University/College</h4>
      <h4 className='my-2'>Year of Graduation</h4>  
    </section>
  );
}

export default Preview;