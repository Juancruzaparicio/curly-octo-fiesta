import { Container, Sprite } from "pixi.js";


export class MessiClampy extends Container {


    constructor(){
        super();
        // Crear los sprites una vez que los activos estén cargados
    const messi: Sprite = Sprite.from("myMessi");
    //messi.x = 400;
    //messi.y = 40;
    //messi.scale.x = 1;
	//messi.scale.y = 1;
	//messi.angle= 45;
    //clampy.scale.set(0.5,0.5);
    //clampy.position.set(100,100)
	const clampy: Sprite = Sprite.from("myClampy");
    clampy.position.set(170,50)
    clampy.scale.set(0.2);
    this.addChild(messi);
    this.addChild(clampy);
    }
}