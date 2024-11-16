// Simple cart functionality (in future, you can expand this with local storage or a backend) 
let cartCount = 0; 
 
document.querySelectorAll('.add-to-cart').forEach(button => { 
    button.addEventListener('click', function() { 
        cartCount++; 
        document.querySelector('.cart a').textContent = `🛒 Cart (${cartCount})`; 
    }); 
}); 
