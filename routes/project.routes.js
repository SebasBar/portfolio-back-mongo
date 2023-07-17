const express = require('express');
const { getAllProjects, createProject, getProjectById, updateProject, deleteProject } = require('../controllers/project.controller');

const projectsRouter = express.Router();

// projectsRouter.route('/').get(getAllProjects).post(createProject);
// projectsRouter.route('/:id').get(getProjectById).put(updateProject).delete(deleteProject);

projectsRouter.route('/').get(getAllProjects);

module.exports = projectsRouter;