const {
    handleGetData,
    handlePostData,
    handleChartData,
    handleBackup,
  } = require("../controller");
  const router = require("express").Router();
  
  //VideoPath
  router.post("/getdata", handleGetData);
  router.post("/postdata", handlePostData);
  router.post("/chartdata", handleChartData);
  router.post("/backup", handleBackup);
  
  module.exports = router;
  