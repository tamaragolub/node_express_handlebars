var express = require("express");

var router = express.Router();

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


router.get("/", function(req, res) {
    burgers: data
    res.render("index");
})

router.post("/api/burgers", function(req, res) {
    
    connection.query(
        "INSERT INTO burgers SET ?",
        req.body,

        function(err) {
            if(err) return res.json({success: false, error:err})
          console.log("The burger has been added successfully!");
          res.json({success: true});
        }
      );


    
})



module.exports = router;