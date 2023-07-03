const express = require("express");
const router = express.Router();
const { saveDomainInService, getDataDomain } = require("../service/serviceDomain")
router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const data = await saveDomainInService(req.body);
    res.status(200).json({data: data});
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await getDataDomain(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router