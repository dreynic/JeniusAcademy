function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' 
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimony_track');
    const testimonials = Array.from(track.children);
    const nextButton = document.querySelector('.nav.next');
    const prevButton = document.querySelector('.nav.prev');
    
    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = testimonials[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    });
});
