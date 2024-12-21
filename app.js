const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



// gallery btns
function openSection(section) {
    const imageSection = document.getElementById('imageSection');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    // Assign images based on the section
    switch (section) {
        case 'library':
            image1.src = '1.jpg';
            image2.src = '2.jpg';
            break;
        case 'lab':
            image1.src = 'lab1.jpg';
            image2.src = 'phylab.jpg';
            break;
        case 'classrooms':
            image1.src = 'class1.jpg';
            image2.src = 'class2.jpg';
            break;
        case 'principal':
            image1.src = 'principalrm.jpg';
            image2.src = 'principalrm2.jpeg';
            break;

        case 'Ground':
            image1.src = 'ground.jpg';
            image2.src = 'ground2.jpeg';
            break;
        
        case 'college':
            image1.src = 'clg1.jpg';
            image2.src = 'clg2.jpg';
            break;
        default:
            return;
            
    }

    // Show the image section
    imageSection.style.display = 'block';
}

function closeImages() {
    const imageSection = document.getElementById('imageSection');
    imageSection.style.display = 'none';
}

