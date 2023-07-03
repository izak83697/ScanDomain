require("dotenv").config();
const { getAllDomains_dl, updateDomainDl } = require("../dl/dlDomain")
const { getDomainInfoFromVirusTotal, getDomainInfoFromWhois } = require("./scanDomain")

const apiKeyVirustotal = process.env.API_KEY_VIRUSTOTAL;
const apiKeyWhois = process.env.API_KEY_WHOIS;

//runs on all the domains that are stored in the database using functions that call api from virustotal and whois
async function runScanDomain() {
  const listDomains = await getAllDomains_dl()

  listDomains.forEach(async (item) => {

    const infoDomainfromVirustotal = await getDomainInfoFromVirusTotal(item.domain_name, apiKeyVirustotal);
    const infoDomainfromWhois = await getDomainInfoFromWhois(item.domain_name, apiKeyWhois);
    const dateAndTime = new Date().toLocaleString();

    const configDataWhois = infoDomainfromWhois.WhoisRecord.registrant
      ? infoDomainfromWhois.WhoisRecord.registrant
      : infoDomainfromWhois.WhoisRecord.registryData.registrant;

    const dataFromAllApis = {
      description: infoDomainfromVirustotal.data.attributes.categories['Forcepoint ThreatSeeker'] || null,
      domainName: infoDomainfromWhois.WhoisRecord.domainName || null,
      name: configDataWhois.name || null,
      city: configDataWhois.city || null,
      country: configDataWhois.country || null,
      averageStatus: infoDomainfromVirustotal.data.attributes.last_analysis_stats || null,
    }

    updateDomainDl({ domain_name: item.domain_name }, { domain_data: { dateAndTime: dateAndTime, data: dataFromAllApis } })
  })
}
module.exports = runScanDomain
