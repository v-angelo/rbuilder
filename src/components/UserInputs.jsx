import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { TextField } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import jobTypes from '../assets/jobRole.json';

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Review & Submit'];

function UserInputs() {

    const [activeStep, setActiveStep] = React.useState(0);
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

    console.log(resumeData);

    const handleChange = (e) => {
        setResumeData({
            ...resumeData,
            [e.target.name]: e.target.value
        });
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <section>
                    <h3 className='px-3 text-2xl font-semibold'>Personal Details</h3>
                    <div className="p-3 flex flex-col">
                        <TextField name='fullName' onChange={handleChange} id="standard-name" label="Full Name" variant="standard" />
                        <TextField name='location' onChange={handleChange} id="standard-loc" label="Location" variant="standard" />

                        <FormControl variant="standard">
                            <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                            <Select name='job' onChange={handleChange} defaultValue={''}
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Job"
                            >
                                {
                                    jobTypes.jobRoles.map(role => (
                                        <MenuItem key={role} value={role}>{role}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </section>
            );

            case 1: return (
                <section>
                    <h3 className='px-3 text-2xl font-semibold'>Contact Details</h3>
                    <div className="p-3 flex flex-col">
                        <TextField id="standard-email" label="Email" variant="standard" />
                        <TextField id="standard-phone" label="Phone" variant="standard" />
                        <TextField id="standard-linkdin" label="Linkdin" variant="standard" />
                        <TextField id="standard-github" label="GitHub" variant="standard" />
                    </div>
                </section>
            );

            case 2: return (
                <section>
                    <h3 className='px-3 text-2xl font-semibold'>Educational Details</h3>
                    <div className="p-3 flex flex-col">
                        <TextField id="standard-degree" label="Bachelor's Degree" variant="standard" />
                        <TextField id="standard-university" label="University/College Name" variant="standard" />
                        <TextField id="standard-year" label="Year of Graduation" variant="standard" />
                    </div>
                </section>
            );

            case 3: return (
                <div>
                    <h5 className='p-3'>Our AI will generate skills & summary according to the job role. Click the <span className='font-medium'>GENERATE AI SKILLS & SUMMARY</span> button to proceed.</h5>
                </div>
            );

            default: return null;
        }

    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper className='overflow-x-auto' activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button>FINISH</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1, ml: 2 }}>Step {activeStep + 1}</Typography>

                    {/* render form according to activeStep count */}
                    <Box>
                        {renderStepContent(activeStep)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {
                            activeStep === steps.length - 1 ?
                                <Button>GENERATE AI SKILLS & SUMMARY</Button>
                                : <Button onClick={handleNext}>Next</Button>
                        }

                    </Box>
                </React.Fragment>
            )}
        </Box>
    );

}

export default UserInputs