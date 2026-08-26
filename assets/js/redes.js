document.addEventListener("DOMContentLoaded", function () {

    const redes = document.createElement("div");

    redes.id = "redes-flotantes";

    redes.innerHTML = `
        <a href="#" class="red-facebook" aria-label="Facebook">f</a>
        <a href="#" class="red-instagram" aria-label="Instagram">◎</a>
        <a href="#" class="red-linkedin" aria-label="LinkedIn">in</a>
        <a href="#" class="red-tiktok" aria-label="TikTok">♪</a>
        <a href="#" class="red-youtube" aria-label="YouTube">▶</a>
    `;

    document.body.appendChild(redes);

});
