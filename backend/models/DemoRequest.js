const mongoose = require("mongoose");

const demoRequestSchema = new mongoose.Schema(
{
    hospitalName: {
        type: String,
        required: true,
    },

    contactPerson: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    facilityType: {
        type: String,
    },

    branches: {
        type: String,
    },

    message: {
        type: String,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("DemoRequest", demoRequestSchema);