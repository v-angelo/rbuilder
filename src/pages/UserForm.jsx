import UserInputs from '../components/UserInputs';
import Preview from '../components/Preview';
import { useState } from 'react';

function UserForm() {

  const [resumeData, setResumeData] = useState({
    fullName: "",
    location: "",
    job: "",
    email: "",
    phone: "",
    linkdin: "",
    github: "",
    degree: "",
    university: "",
    passOut: "",
    skills: [],
    summary: ""
  });

  return (
    <main className='flex flex-col md:flex-row max-w-6xl mx-auto mt-10'>
      <section className='md:w-1/2 p-3'>
        <UserInputs
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      </section>

      <section className='md:w-1/2'>
        {resumeData.fullName &&
          <Preview
            resumeData={resumeData}            
          />
        }
      </section>
    </main>
  )
}

export default UserForm;