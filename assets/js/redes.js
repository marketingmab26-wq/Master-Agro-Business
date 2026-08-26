/* =====================================================
   REDES SOCIALES FLOTANTES - MASTER AGRO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const redesHTML = `

        <div class="floating-socials">

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


            <!-- TIKTOK -->
            <a
                href="#"
                class="floating-social tiktok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok">

                ♪

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

        </div>

    `;


    document.body.insertAdjacentHTML(
        "beforeend",
        redesHTML
    );

});
