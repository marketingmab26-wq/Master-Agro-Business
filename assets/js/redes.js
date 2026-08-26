document.addEventListener("DOMContentLoaded", function () {

    const redes = document.createElement("div");

    redes.className = "floating-socials";

    redes.innerHTML = `

        <!-- FACEBOOK -->
        <a
            href="#"
            class="floating-social facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">

            f

        </a>


        <!-- INSTAGRAM -->
        <a
            href="#"
            class="floating-social instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">

            ◎

        </a>


        <!-- LINKEDIN -->
        <a
            href="#"
            class="floating-social linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">

            in

        </a>


        <!-- TIKTOK -->
        <a
            href="#"
            class="floating-social tiktok"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok">

            ♪

        </a>


        <!-- YOUTUBE -->
        <a
            href="#"
            class="floating-social youtube"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube">

            ▶

        </a>

    `;

    document.body.appendChild(redes);

});
