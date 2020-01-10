window.onload = function() {
    var oCanvas = document.getElementById('canvasParticle');
    var cxt = null;
    var particles = {};
    var particleIndex = 0;

    if (oCanvas.getContext) {
        cxt = oCanvas.getContext('2d');
    }

    oCanvas.width = window.innerWidth;
    oCanvas.height = window.innerHeight;

    function Particle() {
        particleIndex++;
        particles[particleIndex] = this;

        this.x = oCanvas.width / 2;
        this.y = oCanvas.height / 2;
        this.vx = Math.random() * 6 - 3;
        this.vy = Math.random() * 4 - 2;
        this.growth = (Math.abs(this.vx) + Math.abs(this.vy)) * 0.01; // 根据x/y轴的位置决定大小
        this.id = particleIndex;
        this.size = 0;
        this.color = getRandomColor();
    };

    Particle.prototype.draw = function() {
        this.x += this.vx;
        this.y += this.vy;
        this.size += this.growth;

        if (this.x < 0 || this.x > oCanvas.width || this.y < 0 || this.y > oCanvas.height) {
            delete particles[this.id];
        }

        cxt.fillStyle = this.color;
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        cxt.fill();
    };

    function animate() {
        requestAnimationFrame(animate);

        cxt.fillStyle = '#1e2a31'; // #222222 #2b3942
        cxt.fillRect(0, 0, oCanvas.width, oCanvas.height);

        new Particle();

        for (var i in particles) {
            particles[i].draw();
        }
    };
    requestAnimationFrame(animate);
};


function getRandomColor() {
    return '#' + (Math.random() * 0xffffff << 0).toString(16);
};
