// const Express = require("express");
// const router = Express.Router();
// Same as line 3
const router = require("express").Router()
const { PieModel } = require("../models");

router.get("/", async (req, res) => {
    try {
        const allPies = await PieModel.findAll()
        console.log(allPies)
        res.status(200).json(allPies)
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
});

router.post("/", async (req, res) => {
    try {
        const createPie = await PieModel.create({
            nameOfPie: req.body.nameOfPie,
            baseOfPie: req.body.baseOfPie,
            crust: req.body.crust,
            timeToBake: req.body.timeToBake,
            servings: req.body.servings,
            rating: req.body.rating
        })

        console.log(createPie)

        res.status(201).json({
            message: "Pie Created",
            createPie
        })
    } catch(err) {
        res.status(500).json({
            message: `Failed to create pie ${ err}`
        })
    }
})

router.put("/:id", async (req, res) => {
    const { 
        nameOfPie,
        baseOfPie,
        crust,
        timeToBake,
        servings,
        rating
    } = req.body

    try {
        await PieModel.update(
            { nameOfPie, baseOfPie, crust, timeToBake, servings, rating },
            { where: { id: req.params.id }, returning: true }
        )
        .then((result) => {
            res.status(200).json({
                message: "Pie updated",
                updatedPie: result
            })
        })
    } catch(err) {
        res.status(500).json({
            message: `Failed to update pie ${err}`
        })
    }
})

router.delete("/:id", async (req, res) => {

    try { 
        await PieModel.destroy({
            where: { id: req.params.id}
        })
        .then((result) => {
            res.status(200).json({
                message: "Pie Deleted",
                deletedPie: result
            })
        })
    } catch(err) {
        res.status(500).json({
            message: `Failed to delete Pie ${err}`
        })
    }
})

module.exports = router