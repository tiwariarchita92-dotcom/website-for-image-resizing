let upload = document.getElementById("upload");
let preview = document.getElementById("preview-img");
let widthInput = document.getElementById("width");
let heightInput = document.getElementById("height");
let resizeBtn = document.getElementById("resizeBtn");
let downloadLink = document.getElementById("downloadLink");
let originalImage;

upload.onchange = () => {
    let file = upload.files[0];
    let reader = new FileReader();

    reader.onload = () => {
        preview.src = reader.result;
        originalImage = new Image();
        originalImage.src = reader.result;

        originalImage.onload = () => {
            widthInput.value = originalImage.width;
            heightInput.value = originalImage.height;
        }
    };

    reader.readAsDataURL(file);
};

resizeBtn.onclick = () => {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);

    let resizedImageURL = canvas.toDataURL("image/png");

    downloadLink.href = resizedImageURL;
    downloadLink.style.display = "block";
};
