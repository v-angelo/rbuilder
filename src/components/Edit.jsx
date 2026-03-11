import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from 'react-icons/md';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section>
      <Button onClick={handleOpen}><MdEditDocument className='text-3xl' /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className='text-center' id="modal-modal-title" variant="h4" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* basic details */}
            <section>
              <h3 className='px-3 text-2xl font-semibold'>Personal Details</h3>
              <div className="p-3 flex flex-col">
                <TextField id="standard-name" label="Full Name" variant="standard" />
                <TextField id="standard-loc" label="Location" variant="standard" />

                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </section>

            {/* contact details */}
            <section>
              <h3 className='px-3 text-2xl font-semibold'>Contact Details</h3>
              <div className="p-3 flex flex-col">
                <TextField id="standard-email" label="Email" variant="standard" />
                <TextField id="standard-phone" label="Phone" variant="standard" />
                <TextField id="standard-linkdin" label="Linkdin" variant="standard" />
                <TextField id="standard-github" label="GitHub" variant="standard" />
              </div>
            </section>

            {/* education details */}
            <section>
              <h3 className='px-3 text-2xl font-semibold'>Educational Details</h3>
              <div className="p-3 flex flex-col">
                <TextField id="standard-degree" label="Bachelor's Degree" variant="standard" />
                <TextField id="standard-university" label="University/College Name" variant="standard" />
                <TextField id="standard-year" label="Year of Graduation" variant="standard" />
              </div>
            </section>

            {/* skills */}
            <section>
              <h3 className='px-3 text-2xl font-semibold'>Skills</h3>
              <div className='flex p-3'>
                <input type="text" placeholder='Add Skill' />
                <Button variant='text'>Add</Button>
              </div>
              <h3 className='px-3 text-2xl font-semibold'>Added Skills:</h3>
              {/* display all existing skills */}
              <div className="p-3 flex flex-wrap justify-between items-center">
                <Button variant='contained'>
                  Add <FaXmark />
                </Button>
              </div>
            </section>

            {/* summary */}
            <section>
              <h3 className='px-3 text-2xl font-semibold'>Summary</h3>
              <TextField></TextField>
            </section>

            {/* update */}
            <button className='p-2 bg-green-500 rounded cursor-pointer active:opacity-85 hover:ring-2 mx-auto block mt-5 w-30 font-medium'>Update</button>
          </Box>
        </Box>
      </Modal>
    </section>
  );

}

export default Edit;