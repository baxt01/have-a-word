import React from 'react';
const axios = require('axios');

export default async function Translate () {
const encodedParams = new URLSearchParams();
encodedParams.set('from', 'auto');
encodedParams.set('to', 'en');
encodedParams.set('text', 'xin chào');

const options = {
  method: 'POST',
  url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '33df205f37msh6cb553b466fa03ap1ad12fjsn220ce4afdbc8',
    'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
    }
}