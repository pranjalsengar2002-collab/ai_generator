const generateBtn = document.getElementById("generateBtn");
const promptInput = document.getElementById("prompt");
const styleSelect = document.getElementById("style");
const imageContainer = document.getElementById("imageContainer");

generateBtn.addEventListener("click", function () {

    const prompt = promptInput.value.trim();
    const style = styleSelect.value;

    if (prompt === "") {
        alert("Please describe your scene first!");
        return;
    }

    imageContainer.innerHTML = `
        <div>
            <p>Generating your ${style} scene...</p>
        </div>
    `;

    setTimeout(() => {

        imageContainer.innerHTML = `
            <div style="padding: 40px; text-align: center;">
                <h3>Scene Ready ??</h3>
                <p style="margin-top: 10px;">
                    Prompt: ${prompt}
                </p>
                <p style="margin-top: 10px;">
                    Style: ${style}
                </p>
            </div>
        `;

    }, 1500);

});
