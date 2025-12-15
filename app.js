require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Ambil request body (opsional)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
// Dashboard
app.get("/", (req, res) => {
    res.render("pages/dashboard");
});

// Invoice (spesifik - harus sebelum /:product)
app.get("/invoice/:id", (req, res) => {
    const { id } = req.params;
    res.render("pages/invoice", { id });
});

// Product (dynamic - catch-all, harus terakhir)
app.get("/:product", (req, res) => {
    const { product } = req.params;
    res.render("pages/product", { product });
});

module.exports = app;
