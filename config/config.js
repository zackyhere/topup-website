module.exports = {
    app_name: "Toprion",
    app_logo: "/img/logo/logo.webp",
    app_domain: "https://toprion.my.id",

    media: {
        instagram: "p.ky___",
        whatsapp: "6281554269688",
        pesan_wa: "halo kak, saya ingin top up game",
        facebook: "zackyy425"
    },

    slide: [
        "https://akmweb.youngjoygame.com/web/gms/image/694619ac9a3170bdeb9bc672ee1f8fc2.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljkiZIxYNBfQ6mlvHKZEuepQjCmJNyLnJTQ&s"
    ],

    digiflazz: {
        pricelist_delay_ms: 1800000,
        brand_img: [
            {
                brand: "MOBILE LEGENDS",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljkiZIxYNBfQ6mlvHKZEuepQjCmJNyLnJTQ&s"
            },
            {
                brand: "FREE FIRE",
                img: "https://upload.wikimedia.org/wikipedia/en/c/c5/Logo_of_Garena_Free_Fire.png"
            }
        ]
    },

    required_form: [
        {
            game: "mobile_legends",
            need: ["username", "id"]
        },
        {
            game: "freefire",
            need: ["username"]
        }
    ]
};
