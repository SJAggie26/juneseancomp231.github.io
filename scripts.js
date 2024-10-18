function toggleDescription(descId) {
    var desc = document.getElementById(descId);
    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}
