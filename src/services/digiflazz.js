async function getProducts() {
    return [
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 1", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 2", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 3", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 4", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 5", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 6", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 7", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 8", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 9", },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s", produk: "product 10", }
    ]
}

async function getProductList(product, required_form) {
    const dummyResponse = {
        information: {
            banner_img: "https://akmweb.youngjoygame.com/web/gms/image/694619ac9a3170bdeb9bc672ee1f8fc2.jpg",
            app_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEueMr4xMoaHW5jmpsdqFzSh5Yalm5MpeoQ&s",
            brand: "mobile legends",
            additions: {
                logo: "https://akmweb.youngjoygame.com/web/gms/image/694619ac9a3170bdeb9bc672ee1f8fc2.jpg",
                teks: "Mobile Legends"
            }
        },

        required_form: [
            "ID Game"
        ],

        payment_admin: {
            rekomendasi: {
                qris: {
                    admin: "1500",
                    svg: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e0/QRIS_Logo.svg'></img>"
                }
            },

            ewallet: {
                dana: {
                    admin: "1000",
                    svg: "<img src='https://upload.wikimedia.org/wikipedia/commons/0/02/Bank_BRI_2000.svg'></img>"
                },
                shopeepay: {
                    admin: "1200",
                    svg: "<img src='https://akmweb.youngjoygame.com/web/gms/image/694619ac9a3170bdeb9bc672ee1f8fc2.jpg'></img>"
                },
                gopay: {
                    admin: "1300",
                    svg: "<img src='https://upload.wikimedia.org/wikipedia/commons/0/02/Bank_BRI_2000.svg'></img>"
                }
            },

            virtual_account: {
                mandiri: {
                    admin: "4000",
                    svg: "<img src='https://upload.wikimedia.org/wikipedia/commons/0/02/Bank_BRI_2000.svg'></img>"
                },
                bri: {
                    admin: "3500",
                    svg: "<img src='https://upload.wikimedia.org/wikipedia/commons/0/02/Bank_BRI_2000.svg'></img>"
                },
                bni: {
                    admin: "3800",
                    svg: "<img src='https://upload.wikimedia.org/wikipedia/commons/0/02/Bank_BRI_2000.svg'></img>"
                }
            }
        },

        product: [
            {
                name: "Produk A",
                price: 10000
            },
            {
                name: "Produk B",
                price: 25000
            },
            {
                name: "Produk C",
                price: 10000
            }
        ]
    };

    return dummyResponse;
}

module.exports = { getProducts, getProductList };
