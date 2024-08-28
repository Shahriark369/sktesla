// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Form validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Your message has been sent!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
}

// Toggle high contrast mode for better accessibility
const contrastToggle = document.createElement('button');
contrastToggle.innerText = 'Toggle High Contrast';
contrastToggle.classList.add('contrast-toggle');
document.body.appendChild(contrastToggle);

contrastToggle.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Adjust the CSS for high contrast mode
const style = document.createElement('style');
style.innerHTML = `
    .high-contrast {
        background-color: #000;
        color: #fff;
    }
    .high-contrast a {
        color: #ff0;
    }
    .high-contrast button {
        background-color: #ff0;
        color: #000;
    }
`;
document.head.appendChild(style);

// Adding a back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Style for the contrast toggle and back-to-top buttons
const buttonStyles = `
    .contrast-toggle, .back-to-top {
        position: fixed;
        right: 20px;
        padding: 10px 20px;
        font-size: 14px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        z-index: 100;
        transition: all 0.3s ease;
    }

    .contrast-toggle {
        top: 20px;
    }

    .back-to-top {
        bottom: 20px;
        display: none;
        background-color: #f39c12;
        color: #fff;
    }

    .back-to-top.show {
        display: block;
    }

    .back-to-top:hover {
        background-color: #e67e22;
    }
`;

const buttonStyleTag = document.createElement('style');
buttonStyleTag.innerHTML = buttonStyles;
document.head.appendChild(buttonStyleTag);
          
