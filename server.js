const express = require("express");
const server = express();

const Actions = require("./data/helpers/actionModel.js");
const Projects = require("./data/helpers/projectModel.js");

server.use(express.json());

// server.use('/api/actions', actionRouter);
// server.use('/api/projects', projectRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Don't forget to include the homies today</h2>`);
});

//  CRUD for Actions

server.get("/actions/", (req, res) => {
  Actions.get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json({ error: "could not retrieve actions" });
    });
});

server.post("/actions/", validateID, (req, res) => {
  const { project_id, description, notes } = req.body;
  console.log(req.body);
  Actions.insert({ project_id, description, notes })
    .then(response => {
      res.status(201).json({ project_id, description, notes });
    })
    .catch(error => {
      res.status(500).json({
        error: "error adding action"
      });
    });
});

//  CRUD for Projects

server.get("/projects/", (req, res) => {
  Projects.get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ error: "could not retrieve project" });
    });
});

server.post("/projects/", (req, res) => {
  const { name, description } = req.body;
  Projects.insert({ name, description })
    .then(response => {
      res.status(201).json({ name, description });
    })
    .catch(error => {
      res.status(500).json({ error: "error adding project" });
    });
});

//// Middleware to verify Project ID
function validateID(req, res, next) {
  Projects.get(req.params.id).then(project => {
    if (project === null) {
      res.status(400).json({ error: "Incorrect project ID" });
    } else next();
  });
}

module.exports = server;
