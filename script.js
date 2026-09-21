function mostrarSorpresa() {

    const sorpresa =
        document.getElementById("sorpresa");

    sorpresa.style.display = "block";

    window.scrollTo({

        top: sorpresa.offsetTop,

        behavior: "smooth"

    });

}