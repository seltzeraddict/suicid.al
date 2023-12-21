document.addEventListener('DOMContentLoaded', () => {
    const chickadee1 = document.getElementById('chickadee1');
    const chickadee2 = document.getElementById('chickadee2');

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let targetX1 = (screenWidth * 0.20) + (Math.random() * (screenWidth * 0.6));
    let targetY1 = (screenHeight * 0.25) + (Math.random() * (screenHeight * 0.5));

    const updateTarget = () => {
        targetX1 = (screenWidth * 0.20) + (Math.random() * (screenWidth * 0.7));
        targetY1 = (screenHeight * 0.25) + (Math.random() * (screenHeight * 0.7));
    };

    const distance = (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    // Calculate the speed based on screen width
    const getSpeed = (baseSpeed) => {
        return screenWidth < 900 ? baseSpeed * 0.80 : baseSpeed; // 20% slower if under 900px
    };

    const randomRotation = () => {
        // Returns a random value between first int and second int degrees
        return -40 + Math.random() * 35; 
    }
    
    const moveChickadee = (chickadee, targetX, targetY, speed) => {
        const currentX = chickadee.offsetLeft;
        const currentY = chickadee.offsetTop;
        const dirX = targetX - currentX;
        const dirY = targetY - currentY;
        const len = distance(0, 0, dirX, dirY);
        const moveX = (dirX / len) * speed + (Math.random() - 0.6) * 3;
        const moveY = (dirY / len) * speed + (Math.random() - 0.4) * 6;
        
        chickadee.style.left = `${currentX + moveX}px`;
        chickadee.style.top = `${currentY + moveY}px`;
    
        let rotation = randomRotation(); // Random rotation from above
        
        if (moveX > 0) {
            chickadee.classList.add('flipped');
            chickadee.style.transform = `scaleX(-1) rotate(${rotation}deg)`;
        } else {
            chickadee.classList.remove('flipped');
            chickadee.style.transform = `rotate(${rotation}deg)`;
        }
    };
    
    

    const animate = () => {
        moveChickadee(chickadee1, targetX1, targetY1, getSpeed(2));
        const d = distance(chickadee1.offsetLeft, chickadee1.offsetTop, chickadee2.offsetLeft, chickadee2.offsetTop);
        if (d > 150) {
            moveChickadee(chickadee2, chickadee1.offsetLeft, chickadee1.offsetTop, getSpeed(2.5));
        } else if (d < 25) {
            moveChickadee(chickadee2, chickadee1.offsetLeft, chickadee1.offsetTop, getSpeed(1.5));
        } else {
            moveChickadee(chickadee2, chickadee1.offsetLeft, chickadee1.offsetTop, getSpeed(2));
        }

        if (distance(chickadee1.offsetLeft, chickadee1.offsetTop, targetX1, targetY1) < 10) {
            updateTarget();
        }

        requestAnimationFrame(animate);
    };

    animate();
});

