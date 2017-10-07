const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js');
const dbUrl = "http://localhost:3000/db";

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
      task: req.body.task
    });

    testTodo.save()
      .then(response => {
        console.log("saved in Mongodb!")
        res.send(response);
      })
      .catch(error => {
        res.send(error);
      });
});






module.exports = router;
