const StudentModel = require("../models/studentModel");

exports.homePage = async (req, res) => {
  res.json({ data: "This is home page!!" });
};

exports.createStudents = async (req, res) => {
 try{
  let data;
   data = [
    {
      Name: "Gaurav Garg",
      gender: "male",
      course: "B.tech",
      totalMarks: 300,
      section: "C",
      branch: "CSE",
      rollNumber: 101,
    },
    {
      Name: "Milan Pawan",
      gender: "male",
      course: "B.tech",
      totalMarks: 400,
      section: "A",
      branch: "Civil",
      rollNumber: 102,
    },
    {
      Name: "Shrey Jain",
      gender: "female",
      course: "B.tech",
      totalMarks: 444,
      section: "B",
      branch: "Mechanical",
      rollNumber: 103,
    },
    {
      Name: "Jayant Masram",
      gender: "male",
      course: "B.tech",
      totalMarks: 380,
      section: "B",
      branch: "Electrical",
      rollNumber: 104,
    },
    {
      Name: "Vivek Lodhi",
      gender: "male",
      course: "Bsc",
      totalMarks: 380,
      section: "B",
      branch: "Science",
      rollNumber: 105,
    },
  ];

 let response =  await StudentModel.insertMany(data);
 res.status(201).json({message:"Successfully created students",response});
 }
 catch(err){
  res.status(500).json(err);
 }
};

exports.viewStudents = async(req,res) =>{
 try{
  const size = req.query.size || 0;
  const page = req.query.page || 1;

  let allStudents = await StudentModel.find()
    .skip((page - 1) * size)
    .limit(size);

  res.status(201).json({message:"Successfully fetched documents",students:allStudents})
 }
 catch(err){
  res.status(500).json(err);
 }
}

exports.filterStudents = async(req,res)=>{
  
  const {rollNumberData,marksData} = req.query;
  console.log(marksData);
  let students = [];
  if(rollNumberData.compare&&rollNumberData.rollNumber){
 
    students = await StudentModel.find({rollNumber:{[rollNumberData.compare]:rollNumberData.rollNumber}});

  }
  else if(marksData.compare&&marksData.totalMarks){
    students = await StudentModel.find({totalMarks:{[marksData.compare]:marksData.totalMarks}});
  
  }
 
  res.status(201).json({message:"Successfully fetched documents",students:students})
}