const express = require("express");
const path = require("path");
require('dotenv').config({ path: './config/.env' });
const digiFlazz = require("./src/services/digiflazz");

const app = express();

const getConfig = require("./config/config.js");
const getInvoice = require("./database/invoice.json");

function findInvoice(id) {
    if (typeof id !== "string" && typeof id !== "number") {
        throw new TypeError("Invalid invoice id")
    }

    const safeId = String(id).trim()
    if (!safeId) return null

    if (!Array.isArray(getInvoice)) {
        throw new TypeError("Invoice storage is invalid")
    }

    return getInvoice.find(invoice => {
        return invoice &&
            Object.prototype.hasOwnProperty.call(invoice, "id") &&
            String(invoice.id) === safeId
    }) || null
}


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
    const config = getConfig;
    const product = await digiFlazz.getProducts();
    const productData = [];
    res.render("pages/dashboard", { config, product, page_title, productData });
});

// Invoice (spesifik - harus sebelum /:product)
app.get("/invoice/:id", (req, res) => {
    const { id } = req.params;
    const page_title = "Invoice";
    const config = getConfig;
    const invoice = findInvoice(id);
    res.render("pages/invoice", { id, page_title, config, invoice });
});

// Product (dynamic - catch-all, harus terakhir)
app.get("/product/:product", async (req, res) => {
    const { product } = req.params;
    const page_title = "Product";
    const config = getConfig;
    const productData = await digiFlazz.getProductList(product, config.required_form);
    res.render("pages/product", { productData, page_title, config });
});

module.exports = app;
