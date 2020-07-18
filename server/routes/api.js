const express = require('express');
const { Router } = require('express');
const router = express.Router();

const Video = require('../models/video');

//db
const mongoose = require('mongoose');
const video = require('../models/video');
//database access
const db = "mongodb+srv://tushar:8251828@cluster0.r4psp.mongodb.net/video-player?retryWrites=true&w=majority"
    //to avoid warning that mongoose going to throw
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if (err) {
        console.error("Error: " + err);
    }
});
// To get All videos
router.get('/videos', function(req, res) {
    console.log('Get request for all videos');
    Video.find({})
        .exec(function(err, videos) {
            if (err) {
                console.log("Error ritriving videos");
            } else {
                res.json(videos);
            }
        });
});

//To get video by id
router.get('/video/:id', function(req, res) {
    console.log('Get request for single video');
    Video.findById(req.params.id)
        .exec(function(err, video) {
            if (err) {
                console.log("Error ritriving videos");
            } else {
                res.json(video);
            }
        });
});

//to create new video
router.post('/videos', function(req, res) {
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, InsertedVideo) {
        if (err) {
            console.log("Error creating videos");
        } else {
            res.json(InsertedVideo);
        }
    });
});
//update video
router.put('/video/:id', function(req, res) {
    Video.findByIdAndUpdate(req.params.id, {
            $set: { title: req.body.title, url: req.body.url, description: req.body.description }
        }, { new: true },
        function(err, updatedVideo) {
            if (err) {
                res.send("Error updating videos");
            } else {
                res.json(updatedVideo);
            }
        }
    )
});

router.delete('/video/:id', function(req, res) {
    video.findByIdAndRemove(req.params.id, function(err, deletedVideo) {
        if (err) {
            res.send("Error deleting videos");
        } else {
            res.json(deletedVideo);
        }
    })
});

module.exports = router;