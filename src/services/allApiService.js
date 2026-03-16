import apiService from '../api/apiService';

// add resume api called by user input when finished button clicked
export const addResumeAPI = async (resumeData) => {
   return await apiService("POST", "/allResumes", resumeData);
}

// get resume api called by viewResume when page loads
export const getResumeAPI = async (id) => {
   return await apiService("GET", `/allResumes/${id}`, {});
}