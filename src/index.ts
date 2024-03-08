import { Application, Container, Sprite } from 'pixi.js';
import { Assets } from 'pixi.js';

// Crear una instancia de la aplicación
const app = new Application<HTMLCanvasElement>({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: 1280,
    height: 720
});

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

// Crear un manifest con los activos que deseas cargar
const manifest = {
    bundles: [
        {
            name: "bundleName",
            assets: {
                "myMessi": "./messi.jpg",
                "myClampy": "./clampy.png",
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

    const messiclampy : Container = new Container();

	messiclampy.addChild(messi);
    messiclampy.addChild(clampy);

    messiclampy.scale.set(1);
    messiclampy.x = 200;
    messiclampy.y = 300;
        
    app.stage.addChild(messiclampy);
}

// Llamar a la función init para comenzar la carga de activos
init();