require("dotenv").config();
const express = require("express");
const path = require("path");
const digiFlazz = require("./src/services/digiflazz");

const app = express();

const configg = require("./config.json");


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
app.get("/", async (req, res) => {
    const page_title = "Dashboard";
    const config = configg;
    const product = await digiFlazz.getProducts();
    res.render("pages/dashboard", { config, product, page_title });
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
