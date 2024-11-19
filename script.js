document.querySelectorAll('[href="#"]').forEach(anchor => {
    anchor.addEvenlistener('click', function(e) {
        e.prevenDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth' 
        });
    });
});