const DemoRequest = require("../models/DemoRequest");

const submitDemo = async (req, res) => {

    try {

        const demo = await DemoRequest.create(req.body);

        res.status(201).json({
            success: true,
            message: "Demo request submitted successfully.",
            data: demo,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    submitDemo,
};