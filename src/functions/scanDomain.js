const axios = require('axios');

//runs on domain using api calls to virustotal and whois

async function getDomainInfoFromVirusTotal(domain, apiKey) {
  let url = `https://www.virustotal.com/api/v3/domains/${domain}`;
  try {
    const response = await axios.get(url, {
      headers: {
        'x-apikey': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getDomainInfoFromWhois(domain, apiKey) {
  let url = `https://whoisxmlapi.com/whoisserver/WhoisService?domainName=${domain}&apiKey=${apiKey}&outputFormat=json`;
  try {
    const response = await axios.get(url, {
      contentType: 'application/json',

    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getDomainInfoFromVirusTotal,
  getDomainInfoFromWhois
};


