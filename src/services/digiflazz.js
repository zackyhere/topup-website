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
                    svg: "<svg></svg>"
                },
                gopay: {
                    admin: "1500",
                    svg: "<svg></svg>"
                }
            },

            ewallet: {
                dana: {
                    admin: "1000",
                    svg: `<svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Background -->
  <circle cx="32" cy="32" r="32" fill="#00AED6"/>

  <!-- Wallet shape -->
  <path
    d="M18 24
       H40
       C44 24 46 26 46 30
       V36
       C46 40 44 42 40 42
       H18
       C15 42 14 40 14 38
       V28
       C14 26 15 24 18 24
       Z"
    fill="white"
  />

  <!-- Wallet pocket -->
  <rect
    x="34"
    y="30"
    width="10"
    height="8"
    rx="2"
    fill="#00AED6"
  />

  <!-- Button -->
  <circle
    cx="38"
    cy="34"
    r="1.5"
    fill="white"
  />
</svg>
`
                },
                shopeepay: {
                    admin: "1200",
                    svg: "<svg></svg>"
                },
                gopay: {
                    admin: "1300",
                    svg: "<svg></svg>"
                }
            },

            virtual_account: {
                mandiri: {
                    admin: "4000",
                    svg: "<svg></svg>"
                },
                bri: {
                    admin: "3500",
                    svg: "<svg></svg>"
                },
                bni: {
                    admin: "3800",
                    svg: "<svg></svg>"
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
            },
            {
                name: "Produk D",
                price: 25000
            },
            {
                name: "Produk E",
                price: 10000
            },
            {
                name: "Produk F",
                price: 25000
            },
            {
                name: "Produk G",
                price: 10000
            },
            {
                name: "Produk H",
                price: 25000
            },
            {
                name: "Produk I",
                price: 10000
            },
            {
                name: "Produk J",
                price: 25000
            },
            {
                name: "Produk K",
                price: 10000
            },
            {
                name: "Produk L",
                price: 25000
            },
            {
                name: "Produk M",
                price: 10000
            },
            {
                name: "Produk N",
                price: 25000
            },
            {
                name: "Produk O",
                price: 10000
            },
            {
                name: "Produk P",
                price: 25000
            }
        ]
    };

    return dummyResponse;
}

module.exports = { getProducts, getProductList };
