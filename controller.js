
const CrowdData = require('./Model/CrowdData');
const Backup = require('./Model/backup');
const moment= require("moment");

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
  const startDate = new Date('2024-04-28T11:45:52.000Z');
const endDate = new Date('2024-05-05T11:51:10.000Z');
  try{
    let data = await CrowdData.aggregate([{$match: {time: { $exists: true, $type: "date",  $gte: startDate, $lt: endDate}}},
        {$group: {_id: { $dateToString: { format: "%Y-%m-%d", date: "$time" } }, 
                      // moment: {$last: moment("$time", "YYYY-MM-DD hh:mm:ss", true).format("YYYY-MM-DD")}, 
                      total_count_IN: {$sum: "$personin"}, 
                      total_count_OUT: {$sum: "$personout"},
                      total_CROWD: {$sum: "$inside"}
                    }}]);
     res.json(data);
  }
  catch(err){
    console.log(err)
  }
}

exports.handleBackup = async (req, res) => {
  //Taking Backup and all

  // await CrowdData.deleteMany({});
  // let data = await Backup.find({});
  // await CrowdData.insertMany(data).then(file => res.json(file));
}