// JavaScript goes here

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add transitions to product and blog grid items
  const gridItems = document.querySelectorAll('.product-grid article, .blog-grid article');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hover');
    });
  
    item.addEventListener('mouseleave', () => {
      item.classList.remove('hover');
    });
  });