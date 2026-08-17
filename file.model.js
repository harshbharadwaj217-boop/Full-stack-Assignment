const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
{
    originalName: {
        type: String,
        required: true,
    },

    fileName: {
        type: String,
        required: true,
    },

    filePath: {
        type: String,
        required: true,
    },

    fileType: {
        type: String,
        required: true,
    },

    fileSize: {
        type: Number,
        required: true,
    },

    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    folder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder",
        default: null
    },
    isStarred: {
    type: Boolean,
    default: false
}

},
{
    timestamps: true,
}
);

module.exports = mongoose.model("File", fileSchema);
