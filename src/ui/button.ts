import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{
    
    private def:Texture;

    private down:Texture;

    private over:Texture;

    private callback:Function;

    private spr: Sprite;
    
    constructor(def:Texture, down:Texture, over:Texture, callback:Function)
    {
        super();
        this.def = def;
        this.over = over;
        this.down = down;
        this.callback = callback;

        this.spr = Sprite.from(def);
        this.addChild(this.spr);

        this.spr.interactive= true;
        this.spr.on("mousedown", this.onMouseDown, this);
        this.spr.on("mouseup", this.onMouseup, this);
        this.spr.on("mouseover", this.onMouseover, this);
        this.spr.on("mouseout", this.onMouseout, this);

    }
    private onMouseDown():void {
        this.spr.texture = this.down;
    }
    private onMouseup():void {
        this.callback();
        this.spr.texture = this.over;
    }
    private onMouseout():void {
        this.spr.texture = this.def;
    }
    private onMouseover():void {
        this.spr.texture = this.over;
    }
}