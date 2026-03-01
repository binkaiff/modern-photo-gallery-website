// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Gallery Data
const galleryItems = [
    {
        id: 1,
        category: 'nature',
        image: 'images/nature1.jpg',
        title: 'Tree-Lined Road',
        description: 'Peaceful forest pathway'
    },
    {
        id: 2,
        category: 'city',
        image: 'images/city1.jpg',
        title: 'City at Night',
        description: 'Glowing urban landscape'
    },
    {
        id: 3,
        category: 'nature',
        image: 'images/nature2.jpg',
        title: 'Northern Lights Over Snowy Mountains',
        description: 'Aurora borealis landscape'
    },
    {
        id: 4,
        category: 'people',
        image: 'images/people1.jpg',
        title: 'Friends Enjoying Together',
        description: 'Moments of joy and friendship'
    },
    {
        id: 5,
        category: 'animals',
        image: 'images/animal1.jpg',
        title: 'Bengal Tiger',
        description: 'Majestic wild predator'
    },
    {
        id: 6,
        category: 'city',
        image: 'images/city2.jpg',
        title: 'Modern City Skyline',
        description: 'Vibrant metropolitan city'
    },
    {
        id: 7,
        category: 'nature',
        image: 'images/nature3.jpg',
        title: 'Starry Mountain Night',
        description: 'Mountain under a star-filled sky'
    },
    {
        id: 8,
        category: 'people',
        image: 'images/people2.jpg',
        title: 'Team Collaboration',
        description: 'Productive team meeting'
    },
    {
        id: 8,
        category: 'animals',
        image: 'images/animal2.jpg',
        title: 'Elephant in the Forest',
        description: 'Gentle giant of the wild'
    },
];

// Load Gallery
function loadGallery(filter = 'all') {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';

    const filteredItems = filter === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === filter);

    filteredItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Filter Gallery
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadGallery(btn.dataset.filter);
    });
});

// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert(`Thank you for subscribing with: ${email}`);
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// Scroll Animation
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.category-card, .blog-card, .gallery-item');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        
        if (cardTop < window.innerHeight - 100 && cardBottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
});