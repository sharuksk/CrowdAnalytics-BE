const {
    handleGetData,
    handlePostData,
  } = require("../controller");
  const router = require("express").Router();
  
  //VideoPath
  router.post("/getdata", handleGetData);
  router.post("/postdata", handlePostData);
  
  module.exports = router;
  