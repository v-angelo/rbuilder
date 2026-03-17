import React, { useEffect, useRef, useState } from 'react';
import { FaBackward, FaFileDownload } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { useParams } from 'react-router-dom';
import { downloadResumeAPI, getResumeAPI } from '../services/allApiService';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function viewResume() {

  const { id } = useParams();
  const [resumeData, setResumeData] = useState({});
  const previewRef = useRef();
  // console.log(resumeData);

  const getResumeDetails = async () => {
    if (id) {
      const result = await getResumeAPI(id);
      setResumeData(result.data);
    }
  }

  useEffect(() => {
    getResumeDetails();
  }, []);

  const downloadResume = async () => {
    const previewTag = previewRef.current;
    const canvas = await html2canvas(previewTag);
    // const resumeImg = canvas.toDataURL('image/png');

    canvas.toBlob(blob => {
      const shortURL = URL.createObjectURL(blob);
      generatePDF(shortURL);
    });    
  }

  const generatePDF = async (resumeImg) => {
    // get time of download, id imagae of resume into an object
    const today = new Date();
    const timeStamp = `${today.toLocaleTimeString()}, ${today.toLocaleTimeString()}`;
    
    const pdf = new jsPDF();
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(resumeImg, "PNG", 0, 0, 0, 0);

    const downloadDetails = {
      timeStamp, resumeId: id, resumeImg
    }

    const result = await downloadResumeAPI(downloadDetails);
    console.log(result);    

    if (result.status == 201) {
      pdf.save(`${resumeData?.fullName}.pdf`)
    }    
  }

  return (
    <section className='max-w-4xl mx-auto'>
      <article className='max-w-lg mx-auto flex justify-evenly items-center text-3xl my-10'>
        <button onClick={downloadResume}>
          <FaFileDownload className='text-blue-500 cursor-pointer' />
        </button>
        <Edit />
        <IoMdRefresh className='text-red-500' />
        <FaBackward className='text-green-500' />
      </article>

      <article ref={previewRef}>
        <Preview resumeData={resumeData} />
      </article>
    </section>
  );
}

export default viewResume;