const { getDomainInfoFromVirusTotal } = require("../functions/scanDomain")
const { saveDomainIndl, findDomain } = require("../dl/dlDomain")
require("dotenv").config();
const apiKeyVirustotal = process.env.API_KEY_VIRUSTOTAL;

//saves domain name if no exists in the database
async function saveDomainInService(domain) {
  if (await checkInput(domain)) {
    const isExists = await findDomain(domain);
    if (isExists === null) {
      const response = await saveDomainIndl(domain);
      return { "message": "domain name successfully received", data: response };
    } else {
      throw { "message": "Domain already exists in the system" }
    }
  }
}

//if there is information about the domain, returns the latest information
async function getDataDomain(domain) {
  if (await checkInput(domain)) {
    const isThereData = await findDomain(domain);
    if (isThereData === null) {
      await saveDomainIndl(domain)
    }
    if (isThereData === null || isThereData.domain_data < 1) {
      return { "message": "No information received for this domain, check back later" }
    } else {
      const scanDomain = await getDomainInfoFromVirusTotal(domain.domain_name, apiKeyVirustotal)
      const isScanNow = scanDomain.data.attributes.last_analysis_stats;
      if (isScanNow.undetected === 0 && isScanNow.malicious === 0 && isScanNow.suspicious === 0) {
        return { "message": "Scan is in progress for the domain" }
      } else {
        const response = isThereData.domain_data[isThereData.domain_data.length - 1];
        return response;
      }
    }
  }
}

//checks the input domain for validity
async function checkInput(domain) {
  if (domain && domain.domain_name && domain.domain_name.trim() !== "") {
    try {
      await getDomainInfoFromVirusTotal(domain.domain_name, apiKeyVirustotal)
      return true
    } catch (error) {
      throw { "message": "Error: please enter a valid domain name" }
    }
  } else {
    throw { "message": "Error: please enter a domain name" };
  }
}
module.exports = {
  saveDomainInService,
  getDataDomain
};

