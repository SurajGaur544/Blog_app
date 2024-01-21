const express = require("express");

const router = require("router");

const {
    fetchAllBlogs,
    addBlog,
    deleteBlog,
    updateBlog,
    addComment,
    getComment,
    addVote,
} = require("../controllers/blog");
const { fetchUser } = require("../middlewares/fetchUser");

router.use(fetchUser);

router.get("/",  fetchAllBlogs);

router.post("/addblog", addBlog);

router.delete("/delete/:id", deleteBlog);

router.put("/update/:id", updateBlog);

router.post("/addcomment/:id", addComment);

router.get("/getcomment/:id", getComment);

router.post("/vote/:id", addVote);

module.exports = router;