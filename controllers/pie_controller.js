var express = require("express");
var router = express.Router();
var pie = require("../models/pie.js");

router.get("/", function(req, res) {
    pie.all(function(data) {
        var hbsObject = {
            pies: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/pies", function(req, res) {
    pie.create(["pie_name", "description"], [req.body.pie_name, req.body.description], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/pies/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    pie.update(
        {
            description: req.body.description
        },
        condition,
        function(results) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;