import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query

    try {
        if(!mongoose.isValidObjectId(videoId)){
            throw new ApiError(400, "Invalid video id")
        }

        const comments = await Comment.getVideoComments(videoId, page, limit)

        return res.
        ApiResponse(200, comments, "Comments fetched successfully")
    } catch (error) {
        throw ApiError(500, error?.message || "Something went wrong while fetching comments")
    }

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
})

export {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
    }
