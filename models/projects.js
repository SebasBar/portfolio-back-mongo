const mongoose = require('mongoose');

const projectsScheema = new mongoose.Schema({
    name: String,
    description: String,
    description2: String,
    description3: String,
    github_link: String,
    deployed_link: String,
    pictures: String,
    tech_lang: [{
        name: String,
        description: String,
    }],
    clients: [{
        name: String,
        description: String,
    }],
    teammates: [{
        name: String,
        github_link: String,
    }]
});

module.exports = mongoose.model("Project", projectsScheema);

