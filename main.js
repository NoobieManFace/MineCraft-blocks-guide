var canvas = new fabric.Canvas("myCanvas");
x = 10;
y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: y,
            left: x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image = Img;
        block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_height);
        block_image.set({
            top: y,
            left: x
        });
        canvas.add(block_image);
    });
}
window.addEventListener("keydown", key_down);
function key_down(d) {
    v1 = d.keyCode;

    if (d.shiftKey == true && v1 == '80') {
        console.log("p and shift pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (d.shiftKey == true && v1 == '77') {
        console.log("p and shift pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (v1 == '65') {
        new_image('andesite.png');
        console.log("letter a is pressed");
    }
    if (v1 == '66') {
        new_image('bell.jpg');
        console.log("letter b is pressed");
    }
    if (v1 == '67') {
        new_image('commandblock.jpg');
        console.log("letter c is pressed");
    }
    if (v1 == '68') {
        new_image('diamonds.png');
        console.log("letter d is pressed");
    }
    if (v1 == '69') {
        new_image('emeralds.png');
        console.log("letter e is pressed");
    }
    if (v1 == '68') {
        new_image('notavail.jpg');
        console.log("letter f is pressed");
    }
    if (v1 == '71') {
        new_image('grass.png');
        console.log("letter g is pressed");
    }
    if (v1 == '72') {
        new_image('honeyblock.png');
        console.log("letter h is pressed");
    }
    if (v1 == '73') {
        new_image('ironblock.jpg');
        console.log("letter i is pressed");
    }
    if (v1 == '74') {
        new_image('notavail.jpg');
        console.log("letter j is pressed");
    }
    if (v1 == '75') {
        new_image('notavail.jpg');
        console.log("letter k is pressed");
    }
    if (v1 == '76') {
        new_image('lightningrod.png');
        console.log("letter l is pressed");
    }
    if (v1 == '77') {
        new_image('notavail.jpg');
        console.log("letter m is pressed");
    }
    if (v1 == '78') {
        new_image('notavail.jpg');
        console.log("letter n is pressed");
    }
    if (v1 == '79') {
        new_image('notavail.jpg');
        console.log("letter o is pressed");
    }
    if (v1 == '80') {
        new_image('pufferfish.jpg');
        console.log("letter p is pressed");
    }
    if (v1 == '81') {
        new_image('quillnbook.png');
        console.log("letter q is pressed");
    }
    if (v1 == '82') {
        new_image('redstoneblock.jpg');
        console.log("letter r is pressed");
    }
    if (v1 == '83') {
        new_image('smooth_stone.jpg');
        console.log("letter s is pressed");
    }
    if (v1 == '84') {
        new_image('trident.png');
        console.log("letter t is pressed");
    }
    if (v1 == '85') {
        new_image('notavail.jpg');
        console.log("letter u is pressed");
    }
    if (v1 == '86') {
        new_image('notavail.jpg');
        console.log("letter v is pressed");
    }
    if (v1 == '87') {
        new_image('notavail.jpg');
        console.log("letter w is pressed");
    }
    if (v1 == '88') {
        new_image('notavail.jpg');
        console.log("letter x is pressed");
    }
    if (v1 == '89') {
        new_image('yellowdye.png');
        console.log("letter y is pressed");
    }
    if (v1 == '90') {
        new_image('notavail.jpg');
        console.log("letter z is pressed");
    }
}