/* =====================================================
   REDES SOCIALES FLOTANTES MASTER AGRO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const redes = document.createElement("div");

    redes.className = "floating-socials";

    redes.innerHTML = `

        <a
            href="#"
            class="floating-social floating-facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">
            f
        </a>

        <a
            href="#"
            class="floating-social floating-instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            ◎
        </a>

        <a
            href="#"
            class="floating-social floating-tiktok"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok">
            ♪
        </a>

        <a
            href="#"
            class="floating-social floating-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            in
        </a>

        <a
            href="https://wa.me/51970859150"
            class="floating-social floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp">
            ☏
        </a>

    `;

    document.body.appendChild(redes);

});
