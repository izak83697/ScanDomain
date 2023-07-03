const mongoose = require("mongoose");
let domainSchema = new mongoose.Schema({
  domain_name: {
    type: String,
    required: true
  },
  domain_data: [
    {
      dateAndTime: String,
      data: Object,
    }
  ]
  
});
const Domain = mongoose.model("repodomains", domainSchema);
module.exports = Domain;