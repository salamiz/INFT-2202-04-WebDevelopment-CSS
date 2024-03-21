/**
 * Name: Zulkifli Salami
 * Code snippet generated with the assistance of ChatGPT, an AI language model developed by OpenAI.

  Assistance provided by:
  - ChatGPT (OpenAI GPT-4 model), which provided guidelines and examples for the code structure and logic.
  
  Note: The code generated by AI is a starting point and has been adapted and verified by Zulkifli Salami to fit the specific needs of this project.
  
  Date of Generation: 03/21/2024
  Code Generator: ChatGPT by OpenAI
  Version: GPT-4
  URL: https://openai.com/chatgpt
 */


const express = require('express');
const router = express.Router();
const { homeView, page1View, page2View, handleFormSubmit, successView } = require('../controllers/userController');

// Home page route
router.get('/', homeView);

// Additional page routes
router.get('/page1', page1View);
router.get('/page2', page2View);

// Handle form submission
router.post('/submit-form', handleFormSubmit);

// Success page route
router.get('/success', successView);

module.exports = router;