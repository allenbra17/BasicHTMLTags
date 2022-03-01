const Express = require('express');
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");
const { LogModel } = require("../models");

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey!! This is a practice route!')
});

/* -----Post a Log---- */

router.post("/create", validateJWT, async (req, res) => {
    const { day, activity, weight } = req.body.log;
    const { id } = req.user;
    const logEntry = {
        day,
        activity,
        weight,
        owner: id
    }
    try {
        const newLog = await LogModel.create(logEntry);
        res.status(200).json(newLog);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

/* -----View Log by Owner----- */

router.get("/mine", validateJWT,async (req, res) => {
    let { id } = req.user;
    try {
        const userLogs = await LogModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userLogs);
    } catch(err) {
        res.status(500).json({ error: err });
    }
});

/* -----View logs by user----- */

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const results = await LogModel.findAll({
            where: { id: id }
        });
        res.status(200).json(results);
    } catch(err) {
        res.status(500).json({ error: err });
    }
});

/* -----Update a log----- */

router.put("/update/:activityId", validateJWT, async (req, res) => {
    const { day, activity, weight } = req.body.log;
    const logId = req.params.activityId;
    const userId = req.user.id;

    const query = {
        where: {
            id: logId,
            owner: userId
        }
    };
    const updatedLog = {
        day: day,
        activity: activity,
        weight: weight
    };
    try {
        const update = await LogModel.update(updatedLog, query);
        res.status(200).json(updatedLog);
    } catch(err) {
        res.status(500).json({ error: err });
    }
});

/* -----Delete a Log----- */

router.delete("/delete/:id", validateJWT, async (req, res) => {
    const userId = req.user.id;
    const logId = req.params.id;
    try {
        const query = {
            where: {
                id: logId,
                owner: userId
            }
        };
        await LogModel.destroy(query);
        res.status(200).json({ message: "Log Entry Removed"});
    } catch(err) {
        res.status(500).json({ error: err });
    }
});

router.get('/about', (req, res) => {
    res.send("There's stuff about me in here!")
});

module.exports = router;