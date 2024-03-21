import { utils } from "pixi.js";

export class Keyboard{

    public static readonly state: Map<string, boolean>= new Map();
    public static readonly down: utils.EventEmitter= new utils.EventEmitter();
    public static readonly up: utils.EventEmitter= new utils.EventEmitter();

    private constructor(){}

    private static initialized: boolean = false;

    public static initialize():void {
        if(Keyboard.initialized){
            return;
        }
        Keyboard.initialized = true;
        document.addEventListener("keydown", Keyboard.onkeydown);
        document.addEventListener("keyup", Keyboard.onkeyup);
    }
    private static onkeydown(e:KeyboardEvent){
        if(Keyboard.state.get(e.code) !== true){
            Keyboard.down.emit(e.code);    
        }
        Keyboard.state.set(e.code, true)
    }
    private static onkeyup(e:KeyboardEvent){
        Keyboard.up.emit(e.code);
        Keyboard.state.set(e.code, false)
    }
}