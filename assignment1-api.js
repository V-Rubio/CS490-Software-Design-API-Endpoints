const axios = require('axios');

// CREATE
async function createStudentInfo() {
  try {
    const response = await axios.post(
      'https://student-info-api.netlify.app/.netlify/functions/submit_student_info?UCID=sgl24',
      {
        UCID:"vsg3",
        first_name:"Victoria",
        last_name:"Rubio",
        github_username:"V-Rubio",
        discord_username:"vi.rubio",
        favorite_language:"JavaScript",
        favorite_cartoon:"Avatar the Last Airbender",
        movie_or_game_or_book:"1984 by George Orwell"
      }
    );
    console.log('POST Response:', response.data);
  } catch (error) {
    console.error('POST Error:', error.response?.data || error.message);
  }
}

// READ
async function getStudentInfo(UCID) {
  try {
    const response = await axios.get(`https://student-info-api.netlify.app/.netlify/functions/submit_student_info?UCID=${UCID}`);
    console.log('GET Response:', response.data);
  } catch (error) {
    console.error('GET Error:', error.message);
  }
}

// UPDATE
async function updateStudentInfo(UCID) {
  try {
    const response = await axios.put(`https://student-info-api.netlify.app/.netlify/functions/submit_student_info?UCID=${UCID}`, {
        last_name:"Rubio"
    });
    console.log('PUT Response:', response.data);
  } catch (error) {
    console.error('PUT Error:', error.message);
  }
}

// DELETE
async function deleteStudentInfo(UCID) {
  try {
    const response = await axios.delete(`https://student-info-api.netlify.app/.netlify/functions/submit_student_info?UCID=${UCID}`);
    console.log('DELETE Response:', response.data);
  } catch (error) {
    console.error('DELETE Error:', error.message);
  }
}

/*

// Run functions
getStudentInfo('sgl24');

createStudentInfo();
getStudentInfo('vsg3');
updateStudentInfo('vsg3');
deleteStudentInfo('vsg3');

*/


getStudentInfo('vsg3');


// Run with node fileName.js in terminal