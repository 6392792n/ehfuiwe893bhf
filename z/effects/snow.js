document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];

    function createSnowflakes() {
        const snowflakeCount = 100;
        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1,
                speed: Math.random() * 2 + 2, // Base speed
                direction: Math.random() * 2 * Math.PI,
                timeOnGround: 0,
                hasLanded: false,
            });
        }
    }

    function updateSnowflakes() {
        snowflakes.forEach(flake => {
            if (!flake.hasLanded) {
                flake.y += flake.speed;
                flake.x += Math.sin(flake.direction) * flake.speed;

                if (flake.y > canvas.height) {
                    flake.y = canvas.height;
                    flake.hasLanded = true;
                }

                if (flake.x > canvas.width) {
                    flake.x = 0;
                } else if (flake.x < 0) {
                    flake.x = canvas.width;
                }
            } else {
                flake.timeOnGround += 1;
                if (flake.timeOnGround > Math.random() * 50 + 50) {
                    flake.y = -flake.radius;
                    flake.x = Math.random() * canvas.width;
                    flake.timeOnGround = 0;
                    flake.hasLanded = false;
                }
            }
        });
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        snowflakes.forEach(flake => {
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        });
        ctx.fill();
    }

    function animate() {
        updateSnowflakes();
        drawSnowflakes();
        requestAnimationFrame(animate);
    }

    createSnowflakes();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const centerX = canvas.width / 2;
        const distanceFromCenter = Math.abs(mouseX - centerX);
        const maxDistance = canvas.width / 2;

        // Calculate the vertical speed and direction offset
        const maxSpeed = 10; // Maximum speed
        const minHorizontalSpeed = 0.5; // Minimum horizontal speed
        const verticalSpeed = 2 + (distanceFromCenter / maxDistance) * (maxSpeed - 2);
        const horizontalMovement = Math.sin(Math.PI / 2 * distanceFromCenter / maxDistance);

        // Calculate direction offset
        const directionOffset = ((mouseX - centerX) / maxDistance) * Math.PI;

        snowflakes.forEach(flake => {
            flake.speed = verticalSpeed; // Set the speed for all snowflakes
            flake.direction = directionOffset; // Set the direction based on mouse position
        });
    });
});
