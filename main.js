
var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
       
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
   top:block_y,
   left:block_x
   });
   canvas.add(block_image_object);

   });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82')
   {
       new_image('https://cdn.shopify.com/s/files/1/0168/5658/0150/products/14598921_hi_2048x2048.jpg?v=1621392020'); 
       console.log("r");
   }
   if(keyPressed == '71')
   {
       block_x = 200;
       new_image('https://www.slashfilm.com/img/gallery/a-a-milnes-winnie-the-pooh-is-back-in-the-public-domain-and-disney-may-lose-their-exclusivity-to-the-character/intro-1641253766.jpg'); 
       console.log("g");
   }
   
   if(keyPressed == '89')
   {
       block_x =350;
       new_image('https://cdn.shopify.com/s/files/1/0168/5658/0150/products/15051520_hi_2048x2048.jpg?v=1623101771'); 
       console.log("y");
   }
   if(keyPressed == '80')
   {
       block_x = 600;
       new_image('https://w7.pngwing.com/pngs/179/93/png-transparent-winnie-the-pooh-eeyore-piglet-tigger-the-house-at-pooh-corner-winnie-pooh-black-carnivoran-tigger-cartoon.png'); 
       console.log("p");
   }
   if(keyPressed == '66')
   {
       block_x = 700;
       new_image('https://w7.pngwing.com/pngs/619/485/png-transparent-winnie-the-pooh-piglet-tigger-eeyore-minnie-mouse-winnie-the-pooh.png'); 
       console.log("b");
   }
   
}

