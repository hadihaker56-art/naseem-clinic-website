// Toggle FAQ Items
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Initialize Map
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Damascus coordinates
    const damascusCoords = [33.5138, 36.2765];
    
    // Create map
    const map = L.map('map').setView(damascusCoords, 13);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add marker
    L.marker(damascusCoords).addTo(map)
        .bindPopup('<b>عيادات النسيم</b><br>السنية التجميلية<br>دمشق، سوريا')
        .openPopup();
}

// Handle Booking Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('booking-name').value;
            const phone = document.getElementById('booking-phone').value;
            const service = document.getElementById('booking-service').value;
            const date = document.getElementById('booking-date').value;
            const message = document.getElementById('booking-message').value;
            
            // Create WhatsApp message
            const whatsappMessage = `مرحباً، أود حجز موعد\n\nالاسم: ${name}\nالهاتف: ${phone}\nالخدمة: ${service}\nالتاريخ: ${date}\nملاحظات: ${message}`;
            
            // Send via WhatsApp
            const whatsappURL = `https://wa.me/963998000227?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
            
            // Reset form
            bookingForm.reset();
            alert('تم إرسال طلب الحجز! سيتم التواصل معك قريباً.');
        });
    }
    
    // Handle Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Create WhatsApp message
            const whatsappMessage = `رسالة من الموقع\n\nالاسم: ${name}\nالهاتف: ${phone}\nالخدمة: ${service}\nالرسالة: ${message}`;
            
            // Send via WhatsApp
            const whatsappURL = `https://wa.me/963998000227?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
            
            // Reset form
            contactForm.reset();
            alert('تم إرسال رسالتك! شكراً لتواصلك معنا.');
        });
    }
    
    // Initialize map
    initMap();
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});

// Mobile Menu Toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Prevent form submission if validation fails
function validateBookingForm() {
    const name = document.getElementById('booking-name').value;
    const phone = document.getElementById('booking-phone').value;
    const service = document.getElementById('booking-service').value;
    const date = document.getElementById('booking-date').value;
    
    if (!name || !phone || !service || !date) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return false;
    }
    
    return true;
}

// Add animation to service cards on hover
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add animation to testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add animation to blog cards
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Add print functionality
function printPage() {
    window.print();
}

// Add share functionality
function shareOnSocial(platform) {
    const url = window.location.href;
    const title = 'عيادات النسيم السنية التجميلية';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank');
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Add search functionality if needed
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        // Close any open modals
    }
});

// Add performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page Load Time: ' + pageLoadTime + 'ms');
    });
}

// Console message
console.log('%c🌟 عيادات النسيم السنية التجميلية 🌟', 'color: #8B5A8E; font-size: 16px; font-weight: bold;');
console.log('%cشكراً لزيارتك موقعنا!', 'color: #D4AF37; font-size: 14px;');
