let angle = 0;
let leaves = [];
function setup() {
    createCanvas(500, 500);
}
function draw() {
    background('#222222');
    translate(width / 2, height);
    stem(100);
    translate(0, -150);
    if (frameCount % 70 === 0) {
        let x = random(-width/3,width/3);
        let y = random(-height/4,0);
        let leaf = createVector(x, y);
        leaves.push(leaf);
    }
    for (let i = leaves.length - 1; i >= 0; i--) {
        let leaf = leaves[i];
        fill(255, 183, 197);
        noStroke();
        ellipse(leaf.x, leaf.y, 10);
        leaf.y += 1.25;
        if (leaf.y > height) {
            leaves.splice(i, 1);
        }
        angle = sin(frameCount * 0.01) * 0.01;
}
}
function stem(length) {
    push();
    if (length > 8) {
        stroke(77,38,0);
        strokeWeight(5);
        line(0, 0, 0, -length);
        translate(0, -length);
        push();
            rotate(angle + PI / 6);
            stem(length * 0.74);
        pop();
        push();
            rotate(angle -PI / 4);
            stem(length * 0.72);
        pop();
    } else {
        fill(255, 183, 197);
        noStroke();
        ellipse(0, 0, 10);
        
    }
    pop();
}