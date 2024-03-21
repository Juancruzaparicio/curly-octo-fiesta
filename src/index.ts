import { Application, Container } from 'pixi.js';
import { Assets } from 'pixi.js';
import { uidemo } from './scenes/uidemo';
import { Keyboard } from './utils/keyboard';



// Crear una instancia de la aplicación
const app = new Application<HTMLCanvasElement>({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: 1280,
    height: 720
});

Keyboard.initialize();

window.addEventListener("resize", ()=>{
	const scalex = window.innerWidth / app.screen.width;
	const scaley =  window.innerHeight / app.screen.height;
	const scale = Math.min(scalex, scaley)

	const gamewidth = Math.round(app.screen.width * scale);
	const gameheight = Math.round(app.screen.height * scale);

	const marginhorizontal = Math.floor((window.innerWidth - gamewidth) / 2);
	const marginvertical = Math.floor((window.innerHeight - gameheight) / 2);

	app.view.style.width= gamewidth + "px";
	app.view.style.height= gameheight + "px";

	app.view.style.marginLeft = marginhorizontal + "px";
	app.view.style.marginRight = marginhorizontal + "px";
	app.view.style.marginTop = marginvertical + "px";
	app.view.style.marginBottom = marginvertical + "px";
})
window.dispatchEvent( new Event("resize"));
const manifest = {
    bundles: [
        {
            name: "bundleName",
            assets: {
                "myMessi": "./messi.jpg",
                "myClampy": "./clampy.png",
                "Camina1": "./personaje/camina.jpg",
                "Camina2": "./personaje/camina2.jpg",
                "Fruta1" : "./frutas/PNG/shadow/2.png",
                "Fruta2" : "./frutas/PNG/shadow/7.png",
                "Fruta3" : "./frutas/PNG/shadow/5.png",
                "window" : "./window.png",
                "Mouse"  : "./frutas/PNG/shadow/9.png",
                "shadow1" :"./frutas/PNG/without_shadow/2.png"
            }
        },
    ]
};
// Función para inicializar y cargar los activos
async function init() {
    // Inicializar Assets con el manifest
    await Assets.init({ manifest: manifest });
    
    // Cargar el bundle que contiene los activos
    await Assets.loadBundle("bundleName");

    const myScene = new uidemo(); 
    app.stage.addChild(myScene);

}

// Llamar a la función init para comenzar la carga de activos
init();

export { Container };
