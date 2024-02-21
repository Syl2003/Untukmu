const m = document.getElementById("main");
const t = document.getElementById("txt");
const h = document.querySelector(".hero");
const c = document.querySelector(".content");

const lagu = new Audio("song.mp3");

let lirik = [
    {
        text: "...",
        duration: "500"
    },

    {
        text: "Kutuliskan kenangan tentang.",
        duration: "21000"
    },

    {
        text: "Caraku menemukan dirimu.",
        duration: "25000"
    },

    {
        text: "Tentang apa yang membuatku mudah.",
        duration: "30700"
    },

    {
        text: "Berikan hatiku padamu.",
        duration: "34700"
    },

    {
        text: "Takkan habis sejuta lagu.",
        duration: "40700"
    },

    {
        text: "Untuk menceritakan cantikmu.",
        duration: "44700"
    },

    {
        text: "Kan teramat panjang puisi.",
        duration: "50500"
    },

    {
        text: "Tuk menyuratkan cinta ini.",
        duration: "54500"
    },

    {
        text: "Telah habis sudah cinta ini.",
        duration: "58500"
    },

    {
        text: "Tak lagi tersisa.",
        duration: "63200"
    },

    {
        text: "Untuk dunia.",
        duration: "66300"
    },

    {
        text: "Karena tlah ku habiskan.",
        duration: "68200"
    },

    {
        text: "Sisa cintaku hanya untukmu.",
        duration: "71000"
    }
];

function btn() {
    m.style.background = "#000";
    h.remove();
    c.style.display = "flex";
    lagu.play();

    lirik.map(r => {
        setTimeout(() => {
            t.innerHTML = r.text;
        }, r.duration);
    });
}
