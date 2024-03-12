import { AnimatedSprite, Container, Graphics, Texture } from "pixi.js";
import { MessiClampy } from "./messi";

export class Scene extends Container{

    constructor(){
        super();
        const messiclampy : MessiClampy = new MessiClampy();

        messiclampy.scale.set(1);
        messiclampy.x = 200;
        messiclampy.y = 300;
            
        this.addChild(messiclampy);

        const Animacion: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("Camina1"),
                Texture.from("Camina2"),
                Texture.from("Camina1"),
                Texture.from("Camina2"),
                Texture.from("Camina1"),
                Texture.from("Camina2"),
                Texture.from("Camina1")
            ], true
        )
        Animacion.play();
        Animacion.animationSpeed = 0.2;    
        this.addChild(Animacion);

        const myGraph: Graphics = new Graphics(); 
        myGraph.lineStyle({color: 0xff00ff, width:10, alpha:1});
        myGraph.moveTo(0,0);
        myGraph.lineTo(300,500);
        myGraph.lineTo(300,100);
        myGraph.lineTo(0,0);
        myGraph.clear();

        myGraph.lineStyle({color: 0xff00ff, width:10, alpha:1});
        myGraph.beginFill(0x00ff00,1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill();
        myGraph.drawCircle(50,50,100);
        
        myGraph.position.set(1280/2,720/2);
        this.addChild(myGraph);
    }

    }
