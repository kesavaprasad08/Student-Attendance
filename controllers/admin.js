const StudentReport = require("../models/attendance");

exports.getAttendance = (req, res, next) => {
  const date = req.params.date;
  StudentReport.findAll({
    where: { Date: date },
  })
    .then((result) => {
      // console.log("res");
      if (result[0] == null) {
        res.json("no data");
      } else {
        res.json(result);
      }
    })
    .catch((err) => console.log(err));
};

exports.PostAttendance = (req, res, next) => {
  console.log('here');
  const date = req.params.date;
  const Siva = req.body.Siva;
  const Rajesh = req.body.Rajesh;
  const Ashok = req.body.Ashok;
  const Sai = req.body.Sai;
  const Haritha = req.body.Haritha;
  const Ram = req.body.Ram;
  const Krishna = req.body.Krishna;
  const Anu = req.body.Anu;
  const Ammu = req.body.Ammu;
  const Adi = req.body.Adi;
  const Venkat = req.body.Venkat;
  StudentReport.create({
    Date: date,
    Siva: Siva,
    Rajesh: Rajesh,
    Ashok: Ashok,
    Sai: Sai,
    Haritha: Haritha,
    Ram: Ram,
    Krishna: Krishna,
    Anu: Anu,
    Ammu: Ammu,
    Adi: Adi,
    Venkat: Venkat,
  })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.getReport = (req, res, next) => {
  StudentReport.findAll()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};
