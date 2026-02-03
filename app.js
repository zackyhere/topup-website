const express = require("express");
const path = require("path");
require('dotenv').config({ path: './config/.env' });
const digiFlazzTest = require("./src/services/digiflazz-test.js");
const digiFlazz = require("./src/services/digiflazz.js");

const app = express();

const getConfig = require("./config/config.js");
const getInvoice = require("./database/invoice.json");
const getProducts = require("./database/pricelist.json");

function findInvoice(id) {
    if (typeof id !== "string" && typeof id !== "number") {
        throw new TypeError("Invalid invoice id")
    }

    const safeId = String(id).trim()
    if (!safeId) return null

    if (!Array.isArray(getInvoice)) {
        throw new TypeError("Invoice storage is invalid")
    }

    const invoice = getInvoice.find(invoice => {
        return invoice &&
            Object.prototype.hasOwnProperty.call(invoice, "id") &&
            String(invoice.id) === safeId
    })

    if (!invoice) return null

    const result = { ...invoice }

    if (typeof result.wa_number === "string") {
        const len = result.wa_number.length
        if (len > 2) {
            const last2 = result.wa_number.slice(-2)
            result.wa_number = "*".repeat(len - 2) + last2
        }
    }

    return result
}

function getMappingProduct(pricelist, brand_img) {
    const brandImageMap = {};
    brand_img.forEach(item => {
        brandImageMap[item.brand] = item.img;
    });

    // Menggunakan Map untuk menyimpan brand unik
    const uniqueBrands = new Map();

    pricelist.forEach(item => {
        // Hanya tambahkan jika brand belum ada di Map
        if (!uniqueBrands.has(item.brand)) {
            uniqueBrands.set(item.brand, {
                img: brandImageMap[item.brand] || "",
                produk: item.brand
            });
        }
    });

    
    return Array.from(uniqueBrands.values());
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const page_title = "Dashboard";
    const config = getConfig;
    const product = getMappingProduct(getProducts, getConfig.digiflazz.brand_img);
    const productData = [];
    res.render("pages/dashboard", { config, product, page_title, productData });
});

app.get("/invoice/:id", (req, res) => {
    const { id } = req.params;
    const page_title = "Invoice";
    const config = getConfig;
    const invoice = findInvoice(id);
    res.render("pages/invoice", { id, page_title, config, invoice });
});

app.get("/product/:product", async (req, res) => {
    const { product } = req.params;
    const page_title = "Product";
    const config = getConfig;
    const productData = await digiFlazz.getProductList(product, config.required_form);
    res.render("pages/product", { productData, page_title, config });
});

module.exports = app;
