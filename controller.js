
const CrowdData = require('./Model/CrowdData');

exports.handleGetData = async (req, res) => {

      try{
        let data = await CrowdData.find({});
         res.json(data);
      }
      catch(err){
        console.log(err)
      }
      
  };

exports.handlePostData = async (req, res) => {

    const setCrowdData = new CrowdData({
      personin: req.body.personin,
      personout: req.body.personout,
      inside: req.body.inside,
      total: req.body.total,
      timestamp: req.body.timestamp,
      });
  
      // await FutadData.save();
      await setCrowdData.save().then(file => res.json(file));
    
};