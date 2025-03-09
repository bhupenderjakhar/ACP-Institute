function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

let arr = ['Data Science', 'Data Analysis', 'Web Development', 'Tally', 'Graphics', 'Typing', 'Steno'];
let i = 0;
setInterval(() => {

    i++;
    if (i == arr.length) {
        i = 0;
    }
    document.getElementById('course').innerHTML = arr[i];
}, 1000);

document.body.onload=()=>{
    let num = Math.floor(Math.random()*10);
    document.getElementById('hero-image').src=`images/home/${num}.gif`;
    document.getElementById('hero-image').alt=`acpinstitute`;
}
let cards = [
    {
        company_name: " Microsoft (Intern)",
        img: " images/sanjay panchal.jpeg",
        name: " Sanjay Panchal",
        branch: " CSE",
        degree: " MCA",
        designation: " Data science",
        salary: " 15 LPA",
        company_logo: "images/micri.png",
        alt_text: " Microsoft Logo"
    },
    {
        company_name: " HCL Tech",
        img: " images/sakshi.jpg",
        name: " Sakshi",
        branch: " CSE",
        degree: "BTech",
        designation: " Cyber security engineer",
        salary: " 7 LPA",
        company_logo: " images/HCL.png",
        alt_text: " MOD"
    },
    {
        company_name: " Wipro's IT consulting",
        img: "images/palak khurana.jpeg",
        name: " Palak Khurana",
        branch: " CSE",
        degree: " BTech",
        designation: " Software Developer",
        salary: " 7 LPA",
        company_logo: " images/wipro.jpg",
        alt_text: " wipro"
    },
    {
        company_name: " Genpact India Private Limited",
        img: "images/ankit.jpeg",
        name: " Ankit",
        branch: " CSE",
        degree: " BTech",
        designation: " (AML) analyst",
        salary: "7 LPA",
        company_logo: "images/Genpact_logo.svg.png",
        alt_text: " Genpact"
    },
    {
        company_name: " Ministry of Defence",
        img: " images/sumit.jpeg",
        name: " Sumit",
        branch: " CSE",
        degree: " BCA",
        designation: " DEO",
        salary: " 7 LPA",
        company_logo: "images/mof.png",
        alt_text: " Ministry of Defence"
    },

];



let card = "";
cards.map((item) => {
    card += `
            
        <div class="card">
        <div class="company-name">${item.company_name}</div>
        <img src="${item.img}" alt="Student Image" class="profile">
        <div class="info">
            <p><strong>Name:</strong>${item.name}</p>
            <p><strong>Branch:</strong>${item.branch}</p>
            <p><strong>Degree:</strong>${item.degree}</p>
            <p><strong>designation:</strong>${item.designation}</p>
        </div>
        <p class="salary">${item.salary}</p>
        <img src="${item.company_logo}" alt="${item.alt_text}" class="company-logo">
    </div>
            
            `;
})

document.getElementById('cardProfile').innerHTML = card;
