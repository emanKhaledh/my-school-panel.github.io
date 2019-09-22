const {radioInsert} = require('./../database/queries/insert.js');
const {radioSelect} = require('./../database/queries/select.js');

exports.get = (req,res) =>{

  radioSelect((error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    } else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم الاذاعة' });
    }else {
      console.log("result select ",result);
      
      res.send({ok:'responce', result});
    }
  });
}

exports.post = (req, res) => {
  console.log("ee",req.body);

  const {titel, description,url} = req.body;
  radioInsert(titel, description,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }

