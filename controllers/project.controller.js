const projectService = require("../services/project.service");

exports.getAllProjects = async (req, res) => {
    try {
        const Projects = await projectService.getAllProjects();
        res.json({ data: Projects, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// exports.createProject = async (req, res) => {
//     try {
//         const project = await projectService.createProject(req.body);
//         res.json({ data: project, status: "success" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.getProjectById = async (req, res) => {
//     try {
//         const project = await projectService.getProjectById(req.params.id);
//         res.json({ data: project, status: "success" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.updateProject = async (req, res) => {
//     try {
//         const project = await projectService.updateProject(req.params.id, req.body);
//         res.json({ data: project, status: "success" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.deleteProject = async (req, res) => {
//     try {
//         const project = await projectService.deleteProject(req.params.id);
//         res.json({ data: project, status: "success" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };