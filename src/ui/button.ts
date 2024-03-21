import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{
    
    private def:Texture;

    private down:Texture;

    private over:Texture;

    private spr: Sprite;
    
    constructor(def:Texture, down:Texture, over:Texture)
    {
        super();
        this.def = def;
        this.over = over;
        this.down = down;
        

        this.spr = Sprite.from(def);
        this.addChild(this.spr);

        this.spr.interactive= true;
        this.spr.on("pointerdown", this.onMouseDown, this);
        this.spr.on("pointerup", this.onMouseup, this);
        this.spr.on("pointerover", this.onMouseover, this);
        this.spr.on("pointerout", this.onMouseout, this);

    }
    private onMouseDown():void {
        this.spr.texture = this.down;
    }
    private onMouseup():void {
        this.emit("buttonClick");
        this.spr.texture = this.over;
    }
    private onMouseout():void {
        this.spr.texture = this.def;
    }
    private onMouseover():void {
        this.spr.texture = this.over;
    }
}