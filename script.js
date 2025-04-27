// Handle button click to change background color
const button = document.getElementById("clickMe");
const body = document.getElementsByTagName("body")[0];

button.onclick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = randomColor;
    button.textContent = "Click Me Again!";
};

// Handle key press event
document.addEventListener('keydown', (event) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent += event.key;
});

// Handle double click on button
const doubleClickButton = document.getElementById("doubleClick");

function handleDoubleClick() {
    doubleClickButton.style.color = "red";
    alert("I love you!");
    doubleClickButton.removeEventListener('dblclick', handleDoubleClick);
}

doubleClickButton.addEventListener('dblclick', handleDoubleClick);

// Drag and Drop image gallery
const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const gallery = document.getElementById("gallery");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
});

// Handle click to open file picker
dropArea.addEventListener('click', () => {
    fileInput.click();
});

// Handle file selection
fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
});

function handleFiles(files) {
    if (gallery.innerHTML !== "") {
        gallery.innerHTML = ""; // Clear old images if not empty
    }
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = "150px";
                img.style.margin = "10px";
                img.style.borderRadius = "8px";
                gallery.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Custom form validation
function customValidation() {
    const name = document.getElementById("name");
    const password = document.getElementById("password");
    const form = document.getElementById("myForm");

    if (name.value.length < 5) {
        name.setCustomValidity("Name must be at least 5 characters long.");
    } else {
        name.setCustomValidity("");
    }

    if (password.value.length < 8) {
        password.setCustomValidity("Password must be at least 8 characters long.");
    } else {
        password.setCustomValidity("");
    }

    if (form.checkValidity()) {
        return true;
    } else {
        form.reportValidity();
        return false;
    }
}
