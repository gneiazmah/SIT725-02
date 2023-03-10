let projectModels = require("../models/project")
// let client = require("../dbConnect");
// let projectCollection;

// setTimeout(() =>{
//     projectCollection = client.mongoClient.db().collection("Project")
// },2000)

// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback);
// }

// const getProjects = (callback) => {
//     projectCollection.find({}),toArray(callback);
// }

//create proj
const createProjects = (req, res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;

    projectModels.insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
            }
    })
}

//retrieve project

const retrieveProjects = (req, res) => {
    projectModels.getProjects((err, result) => {
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else{
            res.json({statusCode: 200, message: "Success", data: result})
        }
    })

}

module.exports = {retrieveProjects, createProjects}

