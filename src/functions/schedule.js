const schedule = require('node-schedule');
const { scheduleTime } = require('../config/config');
const runScanDomain = require("./runScanDomain")
const scanDomainsAtGivenInterval = schedule.scheduleJob(scheduleTime,runScanDomain)

scanDomainsAtGivenInterval.schedule()



