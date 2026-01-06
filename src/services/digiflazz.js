const axios = require('axios');
const crypto = require('crypto');
const path = require('path');
const config = require('../../config/config');
const fs = require('fs');
require('dotenv').config();

const pathPricelist = path.join(__dirname, '../../database/pricelist.json');

const fetchPriceList = async () => {
    const requestBody = {
        cmd: 'prepaid',
        username: process.env.DIGIFLAZZ_USERNAME,
        sign: crypto.createHash('md5').update(process.env.DIGIFLAZZ_USERNAME + process.env.DIGIFLAZZ_API_KEY + 'pricelist').digest('hex'),
    };

    try {
        const response = await axios.post('https://api.digiflazz.com/v1/price-list', requestBody);

        return response.data.data;
    } catch (error) {
        throw error;
    }
};


async function updatePricelist() {
    try {
        const pricelist = await fetchPriceList();
        fs.writeFileSync(pathPricelist, JSON.stringify(pricelist));
    } catch (error) {
        console.error('Error updating pricelist:', error);
    }
    setTimeout(updatePricelist, config.digiflazz.pricelist_delay_ms);
}

updatePricelist();