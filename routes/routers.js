const {
    handleGetData,
    handlePostData,
    handleChartData,
  } = require("../controller");
  const router = require("express").Router();
  
  //VideoPath
  router.post("/getdata", handleGetData);
  router.post("/postdata", handlePostData);
  router.post("/chartdata", handleChartData);
  
  module.exports = router;
  