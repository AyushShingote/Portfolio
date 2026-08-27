
// // Form submission handling
// document.getElementById('contactForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Here you would typically send this data to a server
//     // For demo purposes, we'll just log it and show an alert
//     console.log({ name, email, message });
//     alert('Thank you for your message, ' + name + '! I will get back to you soon.');

//     // Reset the form
//     this.reset();
// });

// // Simple animation for project cards when they come into view
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//         }
//     });
// }, { threshold: 0.1 });

// document.querySelectorAll('.project-card').forEach((card) => {
//     observer.observe(card);
// });
