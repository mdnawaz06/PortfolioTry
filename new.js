document.addEventListener("DOMContentLoaded", function () {
    const showScannerButton = document.getElementById("showScannerButton");
    const phonepeScanner = document.getElementById("phonepeScanner");

    showScannerButton.addEventListener("click", function () {
        toggleScannerVisibility();
    });

    document.addEventListener("click", function (event) {
        // Check if the click target is not the scanner and the button
        if (event.target !== phonepeScanner && event.target !== showScannerButton) {
            hideScanner();
        }
    });

    function toggleScannerVisibility() {
        if (phonepeScanner.style.display === "none" || phonepeScanner.style.display === "") {
            phonepeScanner.style.display = "block";
        } else {
            phonepeScanner.style.display = "none";
        }
    }

    function hideScanner() {
        if (phonepeScanner.style.display === "block") {
            phonepeScanner.style.display = "none";
        }
    }
});
