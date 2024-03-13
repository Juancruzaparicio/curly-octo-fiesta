import { Container, Sprite, Text } from "pixi.js";

export class uidemo extends Container{
    constructor(){
        super();

        // Crear un contenedor para la mini ventana
        const miniWindow = Sprite.from("window");
        miniWindow.scale.set(2);
        miniWindow.position.set(0, 0);

        // Agregar las frutas a la mini ventana
        const fruta1 = Sprite.from("Fruta1");
        fruta1.scale.set(0.3);
        fruta1.position.set(5,30); // Posición relativa al contenedor de la mini ventana
        miniWindow.addChild(fruta1);

        const fruta2 = Sprite.from("Fruta2");
        fruta2.scale.set(0.3);
        fruta2.position.set(55,30); // Posición relativa al contenedor de la mini ventana
        miniWindow.addChild(fruta2);

        const fruta3 = Sprite.from("Fruta3");
        fruta3.scale.set(0.3);
        fruta3.position.set(105,30); // Posición relativa al contenedor de la mini ventana
        miniWindow.addChild(fruta3);

        // Agregar texto debajo de la mini ventana
        const texto = new Text("¡Tres frutas!", { fontSize: 24, fill: 0x00ff00 });
        texto.position.set(100,200);
        miniWindow.addChild(texto); // Posición relativa al contenedor principal

        // Agregar la mini ventana y el texto al contenedor principal
        this.addChild(miniWindow);
        this.addChild(texto);
    }
    
}