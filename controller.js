
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

exports.handleChartData = async (req, res) => {
  try{
    let data = await CrowdData.aggregate([{$match: {time: {
    $gte: `2024-04-28 00:00:00`,
      $lt: `2024-04-28 23:59:59`}
        }},{$group: {_id: "", total_count: {$sum: "$personin"}, date: {$last:"$time"}}}]);
     res.json(data);
  }
  catch(err){
    console.log(err)
  }
}