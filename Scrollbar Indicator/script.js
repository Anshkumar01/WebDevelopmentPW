const scrollIndicator = document.getElementById('scrollIndicator');
const totalHeigth = document.body.scrollHeight - window.innerHeight;

function updateScrollindicator(){
    const scrollPercentage = (window.scrollY / totalHeigth) * 100;
    scrollIndicator.style.width = `${scrollPercentage}%`;
}

window.addEventListener('scroll', updateScrollindicator);
updateScrollindicator(); // Initial call to set the indicator on page load