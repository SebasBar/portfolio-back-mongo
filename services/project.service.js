const projectsScheema = require('../models/projects')

exports.getAllProjects = async () => {
    return await projectsScheema.find();
};

exports.createProject = async (project) => {
    return await projectsScheema.create(project);
};
exports.getProjectgById = async (id) => {
    return await projectsScheema.findById(id);
};

exports.updateProject = async (id, project) => {
    return await projectsScheema.findByIdAndUpdate(id, project);
};

exports.deleteProject = async (id) => {
    return await projectsScheema.findByIdAndDelete(id);
};