import apiService from '../api/apiService';

// add resume api called by user input
export const addResumeAPI = async (resumeData) => {
   return await apiService("POST", "/allResumes", resumeData);
}