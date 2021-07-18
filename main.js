var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// ,,,..........................


function createRecommendationsSlider(){
    let usersRecommendations = [
        {
            text: "Thanks you so much this tutorial was so helpful, i was able to create totally different layout using 100% width with same concept and it worked...",
            image: 'image/download1.jpg',
            profession: ' Developer',
            author: 'noe'
        },
        {
            text: "Thanks you so much this tutorial was so helpful, i was able to create totally different layout using 100% width with same concept and it worked...",
            image: 'image/download.jpg',
            profession: ' Developer',
            author: 'ema'
        },
        {
            text: "Thanks you so much this tutorial was so helpful, i was able to create totally different layout using 100% width with same concept and it worked .",
            image: 'image/dowbload.jpg',
            profession: ' Developer',
            author: 'mira'
        }
    ]
    
    let currentUsersRecommendations = 0;
    
    function recommendationsSlider(){
        let recommendationsSlider = document.getElementById('recommendationsSlider');
    
        createBullets();
        function createBullets(){
            let div = document.createElement('div');
            div.className = 'bullet-box';
            recommendationsSlider.appendChild(div);
    
            for (let i = 0; i < usersRecommendations.length; i++) {
                let bullet = document.createElement('button');
                bullet.className = 'bullet';
                div.appendChild(bullet);
            }
            setActiveBullet();
        }
    
        function setActiveBullet(){
            let bullets = document.querySelectorAll('.bullet');
        
            for(let i = 0; i < bullets.length; i++){
                bullets[i].classList.remove('active');
                bullets[i].addEventListener('click', function(){
                    setActiveSlide(i);
                })
            }
        
            bullets[currentUsersRecommendations].classList.add('active');
        }
    
        setActiveSlide(currentUsersRecommendations);
    
        function setActiveSlide(newIndex){
            currentUsersRecommendations = newIndex;
    
            let recommendationsText = document.getElementById('recommendationsText');
            recommendationsText.innerText = usersRecommendations[newIndex].text;
    
            let recommendationsProfession = document.getElementById('recommendationsProfession');
            recommendationsProfession.innerText = usersRecommendations[newIndex].profession;
    
            let recommendationsName = document.getElementById('recommendationsName');
            recommendationsName.innerText = usersRecommendations[newIndex].author;
    
            let recommendationsImage = document.getElementById('recommendationsImage');
            recommendationsImage.src = usersRecommendations[newIndex].image;
    
            setActiveBullet();
        }
    }
    recommendationsSlider();
}
createRecommendationsSlider();

// ............................................................................................

latestProjects();
function latestProjects(){
    document.querySelector('.project1').addEventListener('mouseover', function(e){
        document.querySelector('.project1').classList.add('black-color');
        
        
    })
    document.querySelector('.project1').addEventListener('mouseout', function(e){
        document.querySelector('.project1').classList.remove('black-color');
    })
    document.querySelector('.project2').addEventListener('mouseover', function(e){
        document.querySelector('.project2').classList.add('black-color');
        
        
    })
    document.querySelector('.project2').addEventListener('mouseout', function(e){
        document.querySelector('.project2').classList.remove('black-color');

    })
    document.querySelector('.project3').addEventListener('mouseover', function(e){
        document.querySelector('.project3').classList.add('black-color');
    })
    document.querySelector('.project3').addEventListener('mouseover', function(e){
        document.querySelector('.project3').classList.add('black-color');
        
    })
    document.querySelector('.project4').addEventListener('mouseover', function(e){
        document.querySelector('.project4').classList.add('black-color');
        
        
    })
    document.querySelector('.project4').addEventListener('mouseout', function(e){
        document.querySelector('.project4').classList.remove('black-color');
    })
    document.querySelector('.project5').addEventListener('mouseover', function(e){
        document.querySelector('.project5').classList.add('black-color');
        
    })
    document.querySelector('.project5').addEventListener('mouseout', function(e){
        document.querySelector('.project5').classList.remove('black-color');
    })
    document.querySelector('.project6').addEventListener('mouseover', function(e){
        document.querySelector('.project6').classList.add('black-color');
        
        
    })
    document.querySelector('.project6').addEventListener('mouseout', function(e){
        document.querySelector('.project6').classList.remove('black-color');
    })
}

document.querySelector('.all').addEventListener('mouseover', function(){
    document.querySelector('.project1').classList.add('black-color');
    document.querySelector('.project2').classList.add('black-color');
    document.querySelector('.project3').classList.add('black-color');
    document.querySelector('.project4').classList.add('black-color');
    document.querySelector('.project5').classList.add('black-color');
    document.querySelector('.project6').classList.add('black-color');
    })

    document.querySelector('.calculator').addEventListener('mouseover', function(){
        document.querySelector('.project1').classList.add('black-color');
       
    })
    document.querySelector('.calculator').addEventListener('mouseout', function(e){
        document.querySelector('.project1').classList.remove('black-color');
    })
    document.querySelector('.last-slider').addEventListener('mouseover', function(){
        document.querySelector('.project2').classList.add('black-color');
    })
    document.querySelector('.last-slider').addEventListener('mouseout', function(e){
        document.querySelector('.project2').classList.remove('black-color');
    })
    document.querySelector('.Design').addEventListener('mouseover', function(){
        document.querySelector('.project3').classList.add('black-color');
    })
    document.querySelector('.Design').addEventListener('mouseout', function(e){
        document.querySelector('.project3').classList.remove('black-color');
    })
    
    document.querySelector('.Logo').addEventListener('mouseover', function(){
        document.querySelector('.project4').classList.add('black-color');
    })
    document.querySelector('.Logo').addEventListener('mouseout', function(e){
        document.querySelector('.project4').classList.remove('black-color');
    })
    document.querySelector('.Presentation').addEventListener('mouseover', function(){
        document.querySelector('.project5').classList.add('black-color');
    })
    document.querySelector('.Presentation').addEventListener('mouseout', function(e){
        document.querySelector('.project5').classList.remove('black-color');
    })
    document.querySelector('.Icons').addEventListener('mouseover', function(){
        document.querySelector('.project6').classList.add('black-color');
    })
    document.querySelector('.Icons').addEventListener('mouseout', function(e){
        document.querySelector('.project6').classList.remove('black-color');
    })



    // ............................................................................
document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let website = document.getElementById('website').value;
    let message = document.getElementById('message').value;
  
    sendMessage(name, email, website, message).then(function(messages) {
        console.log(messages);
        
    });
    document.getElementById('fname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('website').value = '';
    document.getElementById('message').value = '';
    e.preventDefault();
});
  
function sendMessage(name, email, website, message) {
    return fetch('https://ucha.ge/contact-form/submit.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
      body: 'action=send_message&name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&website=' + encodeURIComponent(website) + '&message=' + encodeURIComponent(message)
    }).then(function(r) {
      return r.json();
    });
}
