import { Container, Sprite, Text, Texture } from "pixi.js";
import { Button } from "../ui/button";

export class uidemo extends Container{
    private fruta1:Button;
    private texto:Text;
    constructor(){
        super();

        // Crear un contenedor para la mini ventana
        const miniWindow = Sprite.from("window");
        miniWindow.scale.set(2);
        miniWindow.position.set(0, 0);

        // Agregar las frutas a la mini ventana
        this.fruta1 = new Button(Texture.from("Fruta1"),
        Texture.from("shadow1"),
        Texture.from("Fruta1"),
        this.onButtonclick.bind(this) );
        this.fruta1.scale.set(0.3);
        this.fruta1.position.set(5,30);

        miniWindow.addChild(this.fruta1);

        const fruta2 = Sprite.from("Fruta2");
        fruta2.scale.set(0.3);
        fruta2.position.set(55,30); // Posición relativa al contenedor de la mini ventana
        miniWindow.addChild(fruta2);

        const fruta3 = Sprite.from("Fruta3");
        fruta3.scale.set(0.3);
        fruta3.position.set(105,30);
        miniWindow.addChild(fruta3);

        // Agregar texto debajo de la mini ventana
        this.texto = new Text("¡Tres frutas!", { fontSize: 24, fill: 0x00ff00 });
        this.texto.position.set(100,200);
        miniWindow.addChild(this.texto); // Posición relativa al contenedor principal

        document.addEventListener("keydown", this.onkeydown.bind(this));

        // Agregar la mini ventana y el texto al contenedor principal
        this.addChild(miniWindow);
        this.addChild(this.texto);
    }
    private onkeydown(e:KeyboardEvent):void { 
        console.log("keypressed",e.code);
        this.texto.text += e.code;
    }

    private onButtonclick():void{
        console.log("nashee", this);
    }
   
}