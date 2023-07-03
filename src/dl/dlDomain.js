const Domain = require("../models/schemaDomains");

async function getAllDomains_dl() {
  try {
    const response = await Domain.find({});
    return response;
  } catch (error) {
    throw error;
  }
}


async function updateDomainDl(name, data) {
  try {
    let updateDomain = await Domain.updateOne(name, { $push: data });
    return updateDomain;
  } catch (error) {
    throw error;
  }
}

async function saveDomainIndl(domain) {
  try {
    const newDomain = new Domain(domain);
    const saved = await newDomain.save();
    return saved;
  } catch (error) {
    throw error;
  }
}

async function findDomain(domain) {
  try {
    const isExists = await Domain.findOne(domain);
    return isExists;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  saveDomainIndl,
  findDomain,
  getAllDomains_dl,
  updateDomainDl
};