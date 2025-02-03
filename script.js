const head = document.querySelector('.head');
    const eye = document.querySelectorAll('.eye');
    const tail = document.querySelectorAll('.tail-segment');

    const cat = document.getElementById('cat');
    const bubble = document.getElementById('bubble');
    let clicked = false;
    head.style.transform = " translateX(-15px) translateY(45px)";
    bubble.style.display = "none";
    bubble.style.opacity = "0";
    bubble.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";


    cat.addEventListener('click', () => {
        clicked = !clicked;

        if (clicked) {
          setTimeout(() => {

            // Add the 'active' class to trigger animation
            bubble.classList.add('active');
    
            // Optionally, reset the animation after it completes
            setTimeout(function() {
                bubble.classList.remove('active');
            }, 1500); // This matches the animation duration
            
             bubble.style.opacity = "1";
            bubble.style.display = "block";
          }, 1500);
            
            head.style.animation = 'head-bob 5s 1 ease-in-out';
            eye.forEach(element => {
            element.style.marginTop = "0px";
            element.style.borderRadius = "100%";
            element.style.height = "16px";
            element.style.animation = 'eye-blink 5s infinite';      
            });

            tail.forEach(element => {
                element.style.animation = 'tail-swish 5s infinite cubic-bezier(.8,0,.2,1)';
            });
        } else {
            head.style.animation = ''; 
            eye.forEach(element => {
            element.style.marginTop = "";
            element.style.borderRadius = "";
            element.style.height = "";
            element.style.animation = '';      
            });
            tail.forEach(element => {
                element.style.animation = '';
            });
        }
    });
