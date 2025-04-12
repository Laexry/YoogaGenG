document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk tombol "Sign Up"
    const signUpButton = document.querySelector(".group-child");
    const signUpText = document.querySelector(".sign-up");

    signUpButton.addEventListener("click", function() {
        alert("Sign Up button clicked!");
    });

    // Fungsi untuk tombol "Book Session"
    const bookClassButton = document.querySelector(".component-child");

    bookClassButton.addEventListener("click", function() {
        alert("Book Session button clicked!");
    });
    
    // Fungsi untuk smooth scrolling pada bagian "Classes"
    const classesNav = document.querySelector(".classes");
    classesNav.addEventListener("click", function() {
        const classesSection = document.querySelector(".component-2");
        classesSection.scrollIntoView({ behavior: 'smooth' }); 
    });

    // Fungsi untuk smooth scrolling pada bagian "Contributor"
    const classesContriNav = document.querySelector(".classes-contri");
    classesContriNav.addEventListener("click", function(){
        const contriSection = document.querySelector(".contributor");
        contriSection.scrollIntoView({ behavior: 'smooth' }); 
        });
    });

    // Fungsi untuk tombol "Learn More"
    const learnMoreButtons = document.querySelectorAll(".component-2-item");
    learnMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("More information about the yoga class will be shown here.");
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Fungsi fetch data
    function fetchData(){
        fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
        .then(res => res.json())
        .then(data => {
            const lst = data;

            const popupContent = document.getElementById("popup-content");
            popupContent.innerHTML = ''; // Kosongkan isi sebelumnya

            for (let i = 0; i < lst.length; i++) {
                const element = document.createElement('li');
                element.textContent = `category : ${lst[i].category_name}`;
                popupContent.appendChild(element);
            }

            // Tampilkan pop-up dan overlay
            document.getElementById("popup-box").style.display = "block";
        })
        .catch(err => {
            console.error("Error Found at : ", err);   
        });
    }

    // Event listener untuk tombol API
    const buttonBuatAPI = document.getElementById("fetch-button");
    if (buttonBuatAPI) {
        buttonBuatAPI.addEventListener("click", fetchData);
    } else {
        console.error("Error: Element fetch-button not found.");
    }

    // Event listener untuk tombol close pada pop-up
    const closePopupButton = document.getElementById("close-popup");
    if (closePopupButton) {
        closePopupButton.addEventListener("click", function() {
            document.getElementById("popup-box").style.display = "none";
        });
    } else {
        console.error("Error: Element close-popup not found.");
    }
});
