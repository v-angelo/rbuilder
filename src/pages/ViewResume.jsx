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
    const imgUrl = canvas.toDataURL('image/jpeg', 0.7);
    console.log(imgUrl);

    generatePDF(imgUrl);

    // canvas.toBlob(blob => {
    //   const shortURL = URL.createObjectURL(blob);
    //   generatePDF(shortURL);
    // });
    
  }

  const generatePDF = async (resumeImg) => {
    // get time of download, id imagae of resume into an object
    const today = new Date();
    const timeStamp = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`;

    const pdf = new jsPDF();

    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(resumeImg);
    const ratio = imgProps.height / imgProps.width;

    const pageHeight = pageWidth * ratio;
    pdf.addImage(resumeImg, "JPEG", 0, 0, pageWidth, pageHeight);

    const downloadDetails = {
      timeStamp, resumeId: id, resumeImg
    }

    const result = await downloadResumeAPI(downloadDetails);
    // console.log(result, resumeImg);

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
        <Edit
          resumeData = {resumeData}
          setResumeData = {setResumeData} 
        />
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