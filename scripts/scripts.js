var scale = window.devicePixelRatio;
var size = 1000;
var c = document.getElementById("hydraCanvas2");
c.width = Math.floor(size * scale);
c.height = Math.floor(size * scale);

// create a new hydra-synth instance
var hydraSam = new Hydra({
  canvas: document.getElementById("hydraCanvas2")
});

//UNFOLDED CRYSTAL SHADER - @sammtza___
gradient(2)
	.diff(gradient(1).r([0, 10].smooth()))
	.diff(gradient(-1).g([0, 10].smooth().fast(1 / 2)))
	.diff(gradient(1).b([0, 10].smooth().fast(1 / 4)))
	.diff(gradient(-1).a([0, 10].smooth().fast(1 / 8)))
	.diff(
		gradient(1).luma(
			[0, 1 / 2]
				.reverse()
				.smooth()
				.fast(1 / 3)
		)
	)
	.diff(
		gradient(1).thresh(
			[0, 1 / 2]
				.reverse()
				.smooth()
				.fast(1 / 5)
		)
	)
	.diff(
		gradient(1).hue(
			() => Math.sin(time),
			() => Math.cos(time),
			() => Math.tan(time)
		)
	)
	.scale(1 / 10)
	.blend(src(o0).rotate(-0.1, -0.1).brightness(-1), [1 / 2, 9 / 10].smooth())
	.add(
		src(o0).rotate(0.1, 0.1).scale(-0.996).brightness(-1),
		[1 / 2, 9 / 10].reverse().smooth()
	)
	.invert()
	.out()

//MATRIZ IRIDISCENCIA
src(o1)
	.scale(1.005)
	.scrollX(
		[0.002, 0.002, 0.002, 0.002, -0.002, -0.002, -0.002, -0.002].ease("linear")
	)
	.saturate(1.2)
.hue(()=>Math.sin(time))
	.luma([0, 0, 0.1, 0.1].ease("linear"))
	.layer(src(o0).contrast(1.4).luma(0.2, 0.1))
	.out(o1)

render(o1)
//speed=0.7


const vidLoading = document.getElementById("bgvid");
const rigCamera = document.getElementById("rigCamera");

const rigP1Poly = document.getElementById("rigP1Poly");
const rigP2Poly = document.getElementById("rigP2Poly");
const rigPiramide = document.getElementById("rigPiramide");

const skydome = document.getElementById("skydome");
const ambientLight = document.getElementById("ambientLight");



const riverClick = document.getElementById("riverClick");

vidLoading.addEventListener("progress", (e)=>{

  console.log("Esto lleva cargando", e.type)



});

vidLoading.addEventListener("canplay", ()=>{ });

const vidHover = document.getElementById("bgvidHover");
const containerLoading = document.getElementById("containerLoading");
const loader = document.getElementById("loader");
const start = document.getElementById("loading");


  



//sceneBackground.addEventListener('loaded', ()=>{ vidLoading.remove(); containerLoading.remove()})


/*
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
*/

const numberMap = (in_min, in_max, out_min, out_max )=>{

  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

}

const assetSystem = document.getElementById('aAssets');
let arrayAssets = [];
let arrayLoader = [];
const barra = new ldBar(document.getElementById("barra"));


  
assetSystem.addEventListener('progress', (evt) =>{

  //console.log('Asset', evt.target);  
  arrayAssets.push(evt.target);
 // console.log('Este es el lenght del array', arrayAssets.length);

  let num = arrayAssets.length;

  barra.set(num);

 


});

assetSystem.addEventListener('loaded', () =>{

  vidHover.setAttribute("style","display: block");
  loader.remove();
  start.setAttribute("style","display: none");

    


});


assetSystem.addEventListener('error', (err) =>{

  console.log("Hay un error en ", err);
    


});




const manoModel = document.getElementById("manoModel");
const columnaModel = document.getElementById ("columnaModel");
const puntaModel = document.getElementById ("puntaModel");
const monolitoModel = document.getElementById ("monolitoModel");
const neandertalModel = document.getElementById ("neandertalModel");


const manoIsolate = document.getElementById("manoIsolate");
const columnaIsolate = document.getElementById("columnaIsolate");
const puntaIsolate = document.getElementById("puntaIsolate");
const monolitoIsolate = document.getElementById("monolitoIsolate");
const neandertalIsolate = document.getElementById("neandertalIsolate");
const corriente = document.getElementById("corrienteModel");
const corriente2 = document.getElementById("corrienteModel2");
const oceanplane = document.getElementById('oceanplane');
const pAzules= document.getElementById('pAzules');
const pRojas= document.getElementById('pRojas');
const pBlancas= document.getElementById('pBlancas');
const pAmarillas= document.getElementById('pAmarillas');

const poem1 = document.getElementById("#poema1");
const poem2 = document.getElementById("#poema2");
const poem3 = document.getElementById("#poema3");
const poem4 = document.getElementById("#poema4");
const poem5 = document.getElementById("#poema5");
const poem6 = document.getElementById("#poema6");
const poem7 = document.getElementById("#poema7");
const poem8 = document.getElementById("#poema8");
const poem9 = document.getElementById("#poema9");
const poem10 = document.getElementById("#poema10");
const poem11 = document.getElementById("#poema11");
const poem12 = document.getElementById("#poema12");
const poem13 = document.getElementById("#poema13");
const poem14 = document.getElementById("#poema14");
const poem15 = document.getElementById("#poema15");

const camera = document.getElementById("camera");

const circuloCursor = document.getElementById("circuloCursor");
const trianguloCursor = document.getElementById("trianguloCursor");
const trianguloCursor2 = document.getElementById("trianguloCursor2");

const ps1 = document.getElementById("pS1");
const ps2 = document.getElementById("pS2");
const ps3 = document.getElementById("pS3");
const ps4 = document.getElementById("pS4");
const ps5 = document.getElementById("pS5");

const currentsScene = document.getElementById('currentAudio');
const currentsSceneBateria = document.getElementById('currentAudioBateria');
const currentsSceneFXGroup = document.getElementById('currentAudioFXGroup');
const currentsSceneVocalGroup = document.getElementById('currentAudioVocalGroup');


const influenceScene = document.getElementById('influenceAudio');
const influenceSceneBateria = document.getElementById('influenceAudioBateria');
const influenceSceneFXGroup = document.getElementById('influenceAudioFXGroup');
const influenceSceneVocalGroup = document.getElementById('influenceAudioVocalGroup');


const collisionScene = document.getElementById('collisionAudio');
const collisionSceneBateria = document.getElementById('collisionAudioBateria');
const collisionSceneFXGroup = document.getElementById('collisionAudioFXGroup');
const collisionSceneVocalGroup = document.getElementById('collisionAudioVocalGroup');


const atomScene = document.getElementById('atomAudio');
const atomSceneBateria = document.getElementById('atomAudioBateria');
const atomSceneFXGroup = document.getElementById('atomAudioFXGroup');
const atomSceneVocalGroup = document.getElementById('atomAudioVocalGroup');


const zoomScene = document.getElementById('zoomAudio');
const zoomSceneBateria = document.getElementById('zoomAudioBateria');
const zoomSceneFXGroup = document.getElementById('zoomAudioFXGroup');
const zoomSceneVocalGroup = document.getElementById('zoomAudioVocalGroup');

const hydraCube1 = document.getElementById('hydraCube1');
const hydraCube2 = document.getElementById('hydraCube2');
const hydraCube3 = document.getElementById('hydraCube3');

let cameraTeleport; 
let cameraPosition; 
let cameraRotation;
let look = new THREE.Vector3(0,0,0);


let delta = 0;


AFRAME.registerComponent('draw-canvas', {
  schema: {default: ''},

  init: function () {
    this.canvas = document.getElementById(this.data);
    this.ctx = this.canvas.getContext('webgl');

    // Draw on canvas...

    // Emmanuel Martínez

  document.querySelector('a-scene').addEventListener('loaded', function () {
  
    
    hydra = new Hydra({
      canvas: hydraCanvas,
      enableStreamCapture: false,
      detectAudio: false,
      width: 512,
      height: 512,
    });
    
    //Based on
    //corrupted screensaver
    //by Ritchse
    //instagram.com/ritchse
      
    voronoi(350,0.15)
    .modulateScale(osc(8).rotate(-1,.3))
    .thresh(.8)
    .modulateRotate(osc(7),.4)
    .thresh(.7)
    .diff(src(o0).scale(1.8))
    .modulateScale(osc(2).modulateRotate(o0,.74))
    .diff(src(o0).rotate([-.012,.01,-.002,0]))
    .brightness([-.02,-.17].smooth().fast(.5))
    .out()

  
  });
  }
});


AFRAME.registerComponent('draw-canvas-2', {

	init: function()
	{
		this.canvas = document.querySelector("#corrienteModelHydra");

		this.context = this.canvas.getContext('webgl');
		
		this.x = 200;
		this.y = 100;
		this.dx = 5;
		this.dy = 3;
	},
	
	tick: function(t)
	{
		this.x += this.dx;
		this.y += this.dy;
		
		if (this.x > 512-50 || this.x < 0)
			this.dx *= -1;
		if (this.y > 512-50 || this.y < 0)
			this.dy *= -1;
	
		// clear canvas
		this.context.fillStyle = "#8888FF";
		this.context.fillRect(0,0, 512,512);
		
		// draw rectangle
		this.context.fillStyle = "#FF0000";
		this.context.fillRect( this.x, this.y, 50, 50 );

		// thanks to https://github.com/aframevr/aframe/issues/3936 for the update fix
		let material = this.el.getObject3D('mesh').material;
	    if (!material.map)
	     	return;
        else
        	material.map.needsUpdate = true;
	}
	
});




// https://github.com/aframevr/aframe/issues/3936
AFRAME.registerComponent("canvas-updater-primitives", {
  
  tick: function() {
    var el = this.el;
    var material;

  material = el.getObject3D("mesh").material;
    if (!material.map) {
      return;
    }
    material.map.needsUpdate = true;

  
  }
});

AFRAME.registerComponent("canvas-updater-model3d", {
  
  tick: function() {
    var el = this.el;
    var material;

    this.el.addEventListener('model-loaded', () => {

    material = el.getObject3D("mesh").material;
    if (!material.map) {
      return;
    }
    material.map.needsUpdate = true;
  
  });
  
  }
});



AFRAME.registerComponent("hydra-texture", {
  
  init: function() {

    var el = this.el;


    var hydraCanvas = document.getElementById("hydraCanvas").getContext('webgl');

    const textureHydra = new THREE.CanvasTexture(hydraCanvas);

    textureHydra.minFilter = THREE.LinearFilter;
    textureHydra.magFilter = THREE.LinearFilter;
    textureHydra.format = THREE.RGBFormat;


    textureHydra.wrapS = THREE.ClampToEdgeWrapping;
    textureHydra.wrapT = THREE.ClampToEdgeWrapping;

    this.el.addEventListener('model-loaded', () => {  



        var mesh = el.getObject3D('mesh'); 

        var meshMaterial = mesh;

        console.log("Mesh es ", mesh);


      let mat = new THREE.MeshBasicMaterial({
                    map: textureHydra,
                    
                    
                  });
        
                  mat.side = THREE.DoubleSide;
                  
                  
                  mesh.material = mat;     
            
      //var modeloMaterial = this.el.getObject3D('mesh').children[0].material;
      //console.log("Este es el material para Hydra ", modeloMaterial);

                });

/* var modelo = this.el.getObject3D('mesh');
  console.log("Este es el Modelo para Hydra ", modelo);
  
  document.querySelector("a-box").setAttribute("material", "src:#hydraCanvas");
*/

  },
  tick: function(time, deltaTime) {
    delta += deltaTime;
  }
});



var perlin = new ImprovedNoise();

var RINGCOUNT = 160;
var SEGMENTS = 512;


AFRAME.registerComponent('eventos', {

 

  init: function () {

    const originP = new THREE.Vector3(-2.3,1,-3);
    const originR = new THREE.Vector3(0,0,0);
    
    const jumpP1 = new THREE.Vector3(27.40919256330151,23.568556576929797,20.31871407639155);
    const jumpP2 = new THREE.Vector3(22.456679369313,15.577884009660837,8.847246364359284);
    const jumpP3 = new THREE.Vector3(-3.83813303484466, 13.685611085202602,-31.083502370407555);

    const jumpR1 = new THREE.Vector3(-10.65701498943331,27.387382607253386,0);
    const jumpR2 = new THREE.Vector3(47.55549699585835,-14.78231111437524,0);
    const jumpR3 = new THREE.Vector3(36.32552421129419,281.78064364533884,0);
    const jumpR4 = new THREE.Vector3(45.378257374361205, 5.614986392282063,0);

  



    document.querySelector('a-scene').addEventListener('loaded', function () {
      


      vidHover.addEventListener('click', () =>{ 


      vidLoading.remove(); containerLoading.remove(); vidHover.remove();


  

    
      collisionScene.volume = 0.8;

      atomScene.play();

      circuloCursor.setAttribute('visible', "false");

     // console.log("Camera", camera.sceneEl.camera);

      cameraTeleport = camera.sceneEl.camera;
      cameraPosition = cameraTeleport.position;
      cameraRotation = cameraTeleport.rotation;


      console.log("Teleport origin")
      console.log("cameraTeleport", cameraTeleport)
      console.log("cameraPosition", cameraPosition)
      console.log("cameraRotation", cameraRotation)

      cameraPosition.x = -2.3;
      cameraPosition.y = 1;
      cameraPosition.z = -3;

      cameraRotation.x = 0;
      cameraRotation.y = 0;
      cameraRotation.z = 0;


      camera.setAttribute('look-controls','enabled:false')

      setTimeout(()=>{
        console.log("Boom Teleport Jump 1")
        //el.setAttribute('look-controls','enabled:true')
        look = jumpR1;
        cameraTeleport.lookAt(look);

        cameraPosition = jumpP1;

        console.log("cameraTeleport", cameraTeleport)
        console.log("cameraPosition", cameraPosition)
        console.log("cameraRotation", cameraRotation)

 /*

        console.log("Cam position", cameraPositionRead);
        console.log("Jump 1", jumpP1)
        console.log("Cam rotation", cameraRotationRead);
        console.log("Rotation 1", jumpR1)

        */

        /*
        cameraPosition.x = -2.3;
        cameraPosition.y = 1;
        cameraPosition.z = -3;
        */
  
        
  
      }, 5000)

  
  
      setTimeout(()=>{
        console.log("Boom Teleport Jump 2")
        //el.setAttribute('look-controls','enabled:true')
        look = jumpR2;
        cameraTeleport.lookAt(look);
        cameraPosition = jumpP2;

        console.log("cameraTeleport", cameraTeleport)
        console.log("cameraPosition", cameraPosition)
        console.log("cameraRotation", cameraRotation)
  
        
  
      }, 10000)
  
      
      setTimeout(()=>{
        console.log("Boom Teleport Jump 3")
        //el.setAttribute('look-controls','enabled:true')
        look = jumpR3;
        cameraTeleport.lookAt(look);
        cameraPosition = jumpP3;

        console.log("cameraTeleport", cameraTeleport)
        console.log("cameraPosition", cameraPosition)
        console.log("cameraRotation", cameraRotation)
  
        
  
      }, 15000)

    
      
      setTimeout(()=>{
        console.log("Boom Teleport Jump 4")
        //el.setAttribute('look-controls','enabled:true')
        look = jumpR4;
        cameraTeleport.lookAt(look);
        cameraPosition = originP;

        console.log("cameraTeleport", cameraTeleport)
        console.log("cameraPosition", cameraPosition)
        console.log("cameraRotation", cameraRotation)
  
        
  
      }, 20000)


      setTimeout(()=>{
        console.log("Reset ");

        cameraPosition.x = -2.3;
        cameraPosition.y = 15;
        cameraPosition.z = -3;

        cameraRotation.x = 0;
        cameraRotation.y = 0;
        cameraRotation.z = 0;

        camera.setAttribute('look-controls','enabled:true')

        
  
        

        console.log("cameraTeleport", cameraTeleport)
        console.log("cameraPosition", cameraPosition)
        console.log("cameraRotation", cameraRotation)
  
        
  
      }, 25000)





     

/*

      camera.setAttribute('look-controls','enabled:false')

      setTimeout(()=>{
        console.log("Boom Teleport")
        //el.setAttribute('look-controls','enabled:true')
        cameraTeleport.lookAt(look);
        cameraPosition.x = -2.3;
        cameraPosition.y = 1;
        cameraPosition.z = -3;
  
        
  
      }, 3000)

  
  
      setTimeout(()=>{
        console.log("Boom Teleport")
        //el.setAttribute('look-controls','enabled:true')
        cameraTeleport.lookAt(look);
        cameraPosition.x = -20;
        cameraPosition.y = 10;
        cameraPosition.z = -3;
  
        
  
      }, 4000)
  
      
      setTimeout(()=>{
        console.log("Boom Teleport")
        //el.setAttribute('look-controls','enabled:true')
        cameraTeleport.lookAt(look);
        cameraPosition.x = 20;
        cameraPosition.y = 5;
        cameraPosition.z = 3;
  
        
  
      }, 6000)


      setTimeout(()=>{
        console.log("Reset ")
        camera.setAttribute('look-controls','enabled:true')

        cameraPosition.x = -2.3;
        cameraPosition.y = 1;
        cameraPosition.z = -3;

        cameraRotation.x = 0;
        cameraRotation.y = 0;
        cameraRotation.z = 0;
  
        
  
      }, 8000)


*/
    })


    });
    

   

    // Setup
    //const sceneBackground = document.querySelector('a-scene');

  /*



 

    */



    

    


    const piedraMeshAsset = document.getElementById('piedraMesh');
    const piedraMesh = document.getElementById('piedraMeshVertex');
    const piedraMesh2 = document.getElementById('piedraMeshVertex2');


    
    const pAzules= document.getElementById('pAzules');
    const pRojas= document.getElementById('pRojas');
    const pBlancas= document.getElementById('pBlancas');
    const pAmarillas= document.getElementById('pAmarillas');

    const ascene = document.getElementById('ascene');






    var backLight = document.getElementById("backLight");

    var constRocks = document.getElementById('constRocksModel');
    var constRocks2 = document.getElementById('constRocksModel2');

    var atom = document.getElementById('atomoModelo');

    var pAvatar = document.getElementById('piedraAvatar');
    var pAvatar2 = document.getElementById('piedraAvatar2');

    var circuloCursor = document.getElementById("circuloCursor");

    var pChoque1 = document.getElementById('piedraChoque1');
    var pChoque2 = document.getElementById('piedraChoque2');
    var pChoque3 = document.getElementById('piedraChoque3');
    var pChoque4 = document.getElementById('piedraChoque4');
    var pChoque5 = document.getElementById('piedraChoque5');

    var pChoque6 = document.getElementById('piedraChoque6');
    var pChoque7 = document.getElementById('piedraChoque7');
    var pChoque8 = document.getElementById('piedraChoque8');
    var pChoque9 = document.getElementById('piedraChoque9');
    var pChoque10 = document.getElementById('piedraChoque10');

    var pChoque11 = document.getElementById('piedraChoque11');
    var pChoque12 = document.getElementById('piedraChoque12');
    var pChoque13 = document.getElementById('piedraChoque13');
    var pChoque14 = document.getElementById('piedraChoque14');
    var pChoque15 = document.getElementById('piedraChoque15');

    var pChoque16 = document.getElementById('piedraChoque16');
    var pChoque17 = document.getElementById('piedraChoque17');
    var pChoque18 = document.getElementById('piedraChoque18');
    var pChoque19 = document.getElementById('piedraChoque19');
    var pChoque20 = document.getElementById('piedraChoque20');

    var pChoque21 = document.getElementById('piedraChoque21');
    var pChoque22 = document.getElementById('piedraChoque22');
    var pChoque23 = document.getElementById('piedraChoque23');
    var pChoque24 = document.getElementById('piedraChoque24');
    var pChoque25 = document.getElementById('piedraChoque25');

    var pChoque26 = document.getElementById('piedraChoque26');
    var pChoque27 = document.getElementById('piedraChoque27');
    var pChoque28 = document.getElementById('piedraChoque28');
    var pChoque29 = document.getElementById('piedraChoque29');
    var pChoque30 = document.getElementById('piedraChoque30');

    var pChoque31 = document.getElementById('piedraChoque31');
    var pChoque32 = document.getElementById('piedraChoque32');
    var pChoque33 = document.getElementById('piedraChoque33');
    var pChoque34 = document.getElementById('piedraChoque34');
    var pChoque35 = document.getElementById('piedraChoque35');

    var pChoque36 = document.getElementById('piedraChoque36');
    var pChoque37 = document.getElementById('piedraChoque37');

    var skyConstellation = document.getElementById('skyConstellation');

  /*
    
    ascene.setAttribute("fog","color: #0d1014")
    ascene.setAttribute("background","color: #0d1014")
    ascene.setAttribute("godrays","tint: #0d1014")

    skydome.setAttribute("color","#0f1216");
*/
    ambientLight.setAttribute("light","color: #0d100f; intensity: 6");

    ascene.setAttribute('godrays', "intensity: 0.05");

    ascene.setAttribute('bloom', 'strength: 0.8');
    ascene.setAttribute('bloom', 'radius: 0.5');


    
    pAzules.setAttribute('particle-system', "size: 0.9");
    pRojas.setAttribute('particle-system', "size: 0.7");
    pAmarillas.setAttribute('particle-system', "size: 0.8");
    pBlancas.setAttribute('particle-system', "size: 0.7");


    pAzules.setAttribute('particle-system', "particleCount: 5000");
    pRojas.setAttribute('particle-system', "particleCount: 5000");
    pAmarillas.setAttribute('particle-system', "particleCount: 5000");
    pBlancas.setAttribute('particle-system', "particleCount: 6000")
    

    atom.setAttribute('visible', "true");
    circuloCursor.setAttribute('visible', 'true');


    constRocks.parentNode.removeChild(constRocks);
    constRocks2.parentNode.removeChild(constRocks2);

    pAvatar.parentNode.removeChild(pAvatar);

    pChoque1.parentNode.removeChild(pChoque1);
    pChoque2.parentNode.removeChild(pChoque2);
    pChoque3.parentNode.removeChild(pChoque3);
    pChoque4.parentNode.removeChild(pChoque4);
    pChoque5.parentNode.removeChild(pChoque5);

    pChoque6.parentNode.removeChild(pChoque6);
    pChoque7.parentNode.removeChild(pChoque7);
    pChoque8.parentNode.removeChild(pChoque8);
    pChoque9.parentNode.removeChild(pChoque9);
    pChoque10.parentNode.removeChild(pChoque10);

    pChoque11.parentNode.removeChild(pChoque11);
    pChoque12.parentNode.removeChild(pChoque12);
    pChoque13.parentNode.removeChild(pChoque13);
    pChoque14.parentNode.removeChild(pChoque14);
    pChoque15.parentNode.removeChild(pChoque15);

    pChoque16.parentNode.removeChild(pChoque16);
    pChoque17.parentNode.removeChild(pChoque17);
    pChoque18.parentNode.removeChild(pChoque18);
    pChoque19.parentNode.removeChild(pChoque19);
    pChoque20.parentNode.removeChild(pChoque20);
    
    pChoque21.parentNode.removeChild(pChoque21);
    pChoque22.parentNode.removeChild(pChoque22);
    pChoque23.parentNode.removeChild(pChoque23);
    pChoque24.parentNode.removeChild(pChoque24);
    pChoque25.parentNode.removeChild(pChoque25);

    pChoque26.parentNode.removeChild(pChoque26);
    pChoque27.parentNode.removeChild(pChoque27);
    pChoque28.parentNode.removeChild(pChoque28);
    pChoque29.parentNode.removeChild(pChoque29);
    pChoque30.parentNode.removeChild(pChoque30);

    pChoque31.parentNode.removeChild(pChoque31);
    pChoque32.parentNode.removeChild(pChoque32);
    pChoque33.parentNode.removeChild(pChoque33);
    pChoque34.parentNode.removeChild(pChoque34);
    pChoque35.parentNode.removeChild(pChoque35);

    pChoque36.parentNode.removeChild(pChoque36);
    pChoque37.parentNode.removeChild(pChoque37);

    hydraCube1.parentNode.removeChild(hydraCube1);
    hydraCube2.parentNode.removeChild(hydraCube2);
    hydraCube3.parentNode.removeChild(hydraCube3);

    skyConstellation.parentNode.removeChild(skyConstellation);






      atomScene.onended = function() {

        zoomScene.play();


        console.log("Zoom scene started");







     
    //6 Acto
    zoomScene.onended = function() {



      console.log("Erosions finished");

       

                   
}

            

      }
     



 
    
    },

 


   
});




AFRAME.registerComponent('wobble-normal', {
	schema: {},
	tick: function (t) {
		if (!this.el.components.material.material.normalMap) return;
		this.el.components.material.material.normalMap.offset.x += 0.007 * Math.sin(t/10000);
		this.el.components.material.material.normalMap.offset.y += 0.007 * Math.cos(t/8000);
		this.el.components.material.material.normalScale.x = 0.5 + 0.5 * Math.cos(t/1000);
		this.el.components.material.material.normalScale.x = 0.5 + 0.5 * Math.sin(t/1200);
	}
})


AFRAME.registerPrimitive('a-ocean-emax', {
  defaultComponents: {
    ocean: {},
    rotation: {x: -90, y: 0, z: 0}
  },
  mappings: {
    width: 'oceanemax.width',
    depth: 'oceanemax.depth',
    density: 'oceanemax.density',
    amplitude: 'oceanemax.amplitude',
    amplitudeVariance: 'oceanemax.amplitudeVariance',
    speed: 'oceanemax.speed',
    speedVariance: 'oceanemax.speedVariance',
    color: 'oceanemax.color',
    opacity: 'oceanemax.opacity'
  }
});

AFRAME.registerComponent('oceanemax', {
  schema: {
    // Dimensions of the ocean area.
    width: {default: 10, min: 0},
    depth: {default: 10, min: 0},

    // Density of waves.
    density: {default: 4},

    // Wave amplitude and variance.
    amplitude: {default: 20},
    amplitudeVariance: {default: 20},

    // Wave speed and variance.
    speed: {default: 1},
    speedVariance: {default: 2},

    // Material.
    color: {default: 'dd2a2a', type: 'color'},
    opacity: {default: 0.2}
  },

  /**
   * Use play() instead of init(), because component mappings – unavailable as dependencies – are
   * not guaranteed to have parsed when this component is initialized.
   */
  play: function () {
    const el = this.el,
        data = this.data;
    let material = el.components.material;

    const geometry = new THREE.PlaneGeometry(data.width, data.depth, data.density, data.density);
    geometry.mergeVertices();
    this.waves = [];
    for (let v, i = 0, l = geometry.vertices.length; i < l; i++) {
      v = geometry.vertices[i];
      this.waves.push({
        z: v.z,
        ang: Math.random() * Math.PI * 2,
        amp: data.amplitude + Math.random() * data.amplitudeVariance,
        speed: (data.speed + Math.random() * data.speedVariance) / 1000 // radians / frame
      });
    }

    if (!material) {
      material = {};
      material.material = new THREE.MeshPhongMaterial({
        color: '#dd2a2a',
        transparent: data.opacity < 1,
        opacity: data.opacity,
        shading: THREE.FlatShading,
      });
    }

    this.mesh = new THREE.Mesh(geometry, material.material);
    el.setObject3D('mesh', this.mesh);
  },

  remove: function () {
    this.el.removeObject3D('mesh');
  },

  tick: function (t, dt) {
    if (!dt) return;

    const verts = this.mesh.geometry.vertices;
    for (let v, vprops, i = 0; (v = verts[i]); i++){
      vprops = this.waves[i];
      v.z = vprops.z + Math.sin(vprops.ang) * vprops.amp;
      vprops.ang += vprops.speed * dt;
    }
    this.mesh.geometry.verticesNeedUpdate = true;
  }
});

AFRAME.registerComponent("overlay", {
  dependencies: ['material'],
  init: function () {
    this.el.sceneEl.renderer.sortObjects = true;
    this.el.object3D.renderOrder = 100;
    this.el.components.material.material.depthTest = false;
  }
});

var perlin = new ImprovedNoise();

var RINGCOUNT = 160;
var SEGMENTS = 512;

/**
 * Generate rings (THREE.Line) and transform them using audioanalyser waveform data.
 * Adapted from https://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/

AFRAME.registerComponent('audioanalyser-waveform', {
  dependencies: ['audioanalyser'],

  schema: {
    maxHeight: {default: 0.2},
    multiplier: {default: .01},
    radius: {default: 1},
  },

  init: function () {
    this.colors = [];
    this.geometry;
    this.levels = [];
    this.noisePos = 0;
    this.rings = [];
  },

  update: function () {
    var data = this.data;
    var el = this.el;
    var i;
    var lineMesh;
    var loopShape;
    var material;
    var scale;

    // Create ring geometries.
    loopShape = new THREE.Shape();
    loopShape.absarc(0, 0, data.radius, 0, Math.PI * 2, false);
    this.geometry = loopShape.createPointsGeometry(SEGMENTS / 2);
    this.geometry.dynamic = true;

    // Create container object.
    el.setObject3D('waveformContainer', new THREE.Object3D());

    // Create rings.
    scale = 1;
    for (i = 0; i < RINGCOUNT; i++) {
      material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 1 ,
        opacity : 0.7,
        blending : THREE.AdditiveBlending,
        depthTest : true,
        transparent : true
      });
      lineMesh = new THREE.Line(this.geometry, material);

      scale *= 1.05;
      lineMesh.scale.x = scale;
      lineMesh.scale.y = scale;
      el.getObject3D('waveformContainer').add(lineMesh);

      this.rings.push(lineMesh);
      this.levels.push(0);
      this.colors.push(0);
    }
  },

  tick: function () {
    var VOL_SENS;
    var analyserComponent;
    var colors = this.colors;
    var data = this.data;
    var el = this.el;
    var levels = this.levels;
    var rings = this.rings;

    analyserComponent = el.components.audioanalyser;
    if (!analyserComponent.analyser) { return; }

    VOL_SENS = 2;
    levels.push(analyserComponent.volume / 256 * VOL_SENS);  // 256 is max level.
    levels.shift(1);

    // Add a new color onto the list.
    this.noisePos += 0.005;
    colors.push(Math.abs(perlin.noise(this.noisePos, 0, 0)));
    colors.shift(1);

    // Write current waveform into all rings.
    this.geometry.vertices.forEach(function (vertex, index) {
      vertex.z = Math.min(analyserComponent.waveform[index] * data.multiplier,
                          data.maxHeight);
    });

    // Link up last segment.
    this.geometry.vertices[this.geometry.vertices.length - 1].z = this.geometry.vertices[0].z;
    this.geometry.verticesNeedUpdate = true;

    rings.forEach(function transformRing (ring, index) {
      var normLevel;
      normLevel = levels[RINGCOUNT - index - 1] + 0.01;  // Avoid scaling by 0.
      ring.material.color.setHSL(colors[index], 1, normLevel);
      ring.material.linewidth = normLevel * 3;
      ring.material.opacity = normLevel;
      ring.scale.z = normLevel;
    });
  },

  remove: function () {
    this.el.removeObject3D('waveformContainer');
  }
});

/**
 * http://mrl.nyu.edu/~perlin/noise/
 */
function ImprovedNoise () {
  var p = [
    151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,
    23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,
    174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,
    133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,
    89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,
    202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,
    248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,
    178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,
    14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,
    93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
  ];
  for (var i = 0; i < 256 ; i++) {
    p[256 + i] = p[i];
  }
  function fade (t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  function lerp (t, a, b) {
    return a + t * (b - a);
  }
  function grad (hash, x, y, z) {
    var h = hash & 15;
    var u = h < 8 ? x : y, v = h < 4 ? y : h == 12 || h == 14 ? x : z;
    return ((h&1) == 0 ? u : -u) + ((h&2) == 0 ? v : -v);
  }
  return {
    noise: function (x, y, z) {
      var floorX = ~~x, floorY = ~~y, floorZ = ~~z;
      var X = floorX & 255, Y = floorY & 255, Z = floorZ & 255;
      x -= floorX;
      y -= floorY;
      z -= floorZ;
      var xMinus1 = x -1, yMinus1 = y - 1, zMinus1 = z - 1;
      var u = fade(x), v = fade(y), w = fade(z);
      var A = p[X]+Y, AA = p[A]+Z, AB = p[A+1]+Z, B = p[X+1]+Y, BA = p[B]+Z, BB = p[B+1]+Z;
      return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z),
              grad(p[BA], xMinus1, y, z)),
            lerp(u, grad(p[AB], x, yMinus1, z),
              grad(p[BB], xMinus1, yMinus1, z))),
          lerp(v, lerp(u, grad(p[AA+1], x, y, zMinus1),
              grad(p[BA+1], xMinus1, y, z-1)),
            lerp(u, grad(p[AB+1], x, yMinus1, zMinus1),
              grad(p[BB+1], xMinus1, yMinus1, zMinus1))));
    }
  }
}


/**
 * Create expanding ring on audioanalyser beat.
 */
 AFRAME.registerComponent('ring-on-beat', {
  schema: {
    analyserEl: {type: 'selector'}
  },

  init: function () {
    var analyserEl = this.data.analyserEl || this.el;
    var el = this.el;
    var rings = this.rings = [];

    analyserEl.addEventListener('audioanalyser-beat', function () {
      var ringEl = document.createElement('a-ring');
      ringEl.setAttribute('material', 'opacity', '0.6');
      ringEl.setAttribute('position', '0 0.1 0');
      ringEl.setAttribute('rotation', '-90 0 0');
      el.appendChild(ringEl);

      ringEl.addEventListener('loaded', function () {
        rings.push(ringEl);
        setTimeout(function () {
          el.removeChild(ringEl);
          rings.splice(rings.indexOf(ringEl), 1);
        }, 2000);
      });
    });
  },

  /**
   * Expand ring radii.
   */
  tick: function () {
    this.rings.forEach(function (ringEl) {
      var scale = ringEl.getAttribute('scale');
      ringEl.setAttribute('scale', {
        x: scale.x * 0.06 + .05,
        y: scale.y * 0.06 + .05,
        z: scale.z
      });
    });
  }
});

/**
 * Scale children based on audio frequency levels.
 */
 AFRAME.registerComponent('audioanalyser-levels-scale', {
  schema: {
    analyserEl: {type: 'selector'},
    max: {default: 20},
    multiplier: {default: 100}
  },

  tick: function (time) {
    var analyserEl;
    var children;
    var data = this.data;
    var levels;

    analyserEl = data.analyserEl || this.el;
    levels = analyserEl.components.audioanalyser.levels;
    if (!levels) { return; }

    children = this.el.children;
    for (var i = 0; i < children.length; i++) {
      children[i].setAttribute('scale', {
        x: 1,
        y: Math.min(data.max, Math.max(levels[i] * data.multiplier, 0.05)),
        z: 1
      });
    }
  }
});

/**
 *
 */
 AFRAME.registerComponent('audioanalyser-volume-bind', {
  schema: {
    analyserEl: {type: 'selector'},
    component: {type: 'string'},
    property: {type: 'string'},
    max: {type: 'number'},
    multiplier: {type: 'number'},
  },

  tick: function () {
    var analyserComponent;
    var data = this.data;
    var el = this.el;
    var value;

    analyserComponent = data.analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) { return; }

    value = Math.min(data.max, analyserComponent.volume * data.multiplier);
    el.setAttribute(data.component, data.property, value);
  }
});


AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    console.log("Rotación");
    console.log(this.el.object3D.rotation);

    // `position` is a three.js Vector3.
    console.log("Posición");
    console.log(this.el.object3D.position);
  }
});

AFRAME.registerComponent('visibilidad-piedra', {



  init: function () {


    var counterA = true;
    var counterB = true;

      var el =this.el;

      var circuloCursor = document.getElementById("circuloCursor");
     

      var trianguloCursorVisible = document.getElementById("trianguloCursor");

      var trianguloCursor = trianguloCursorVisible.getObject3D('mesh');
      var materialTriangulo = trianguloCursor.material; 
      var colorTriangulo = materialTriangulo.color;
      var scaleTriangulo = trianguloCursor.scale;

     
      document.querySelector('a-scene').addEventListener('loaded', function () {


      setTimeout(function(){  

      
     

      document.getElementById("raycasterMouse").setAttribute("fuse", "true");

     

      var materialPiedra = document.getElementById("piedraModelo").getObject3D('mesh').children[0].material;

     // console.log(materialPiedra);

      el.addEventListener('mouseenter', () => {

      

      var frontLight = document.getElementById("frontLight");

 
      
      
      frontLight.setAttribute("light", "color: #b20f22");
      //frontLight.setAttribute("light", "intensity: 8");
    

      var leftLight = document.getElementById("leftLight");
      leftLight.setAttribute("light", "color: #d5d6ba");

      var backLight = document.getElementById("backLight");
      backLight.setAttribute("light", "color: #0583c9");


     trianguloCursorVisible.setAttribute('visible', "true");
     circuloCursor.setAttribute('visible', "false");

     var min = 0;
     var max = 255;

      //materialPiedra.color.set(255,255,255);
      

      /*

      for (let i = 0; i <=255; i++){
      
        colorCambio(i);
      }

      
      function colorCambio(i){

      
      //var x = Math.random()*(max - min)+min;
     // materialTriangulo.color.set(x, i, x);

    } */

    blink(materialPiedra.color);

    /*
    if (counterA == true && counterB == true){

      //Luces
     //frontLight.setAttribute("light", "color: #b20f22");
     frontLight.setAttribute("light", "intensity: 15");

     //leftLight.setAttribute("light", "color: #d5d6ba");
      
      returnCounter(counterB);

      materialPiedra.color.setRGB(255,255,255);
      
      //console.log("Color1");  
      //console.log(materialPiedra.color);
      

      }

      if (counterA == true && counterB == false){
        
        returnCounter(counterB);
       // materialPiedra.color.setRGB(215,0,0);
        frontLight.setAttribute("light", "intensity: 1");
        //console.log("Color2");
       // console.log(materialPiedra.color);
       

       // frontLight.setAttribute("light", "color: #b20f22");
       // frontLight.setAttribute("light", "intensity: 1");
   
       // leftLight.setAttribute("light", "color: #d5d6ba");
        

      } */

      function blink(color){

        color.setRGB(255,255,255);

        setTimeout(function(){ color.setRGB(215,0,0); }, 200);

        setTimeout(function(){ color.setRGB(255,255,255); }, 300);

        setTimeout(function(){ color.setRGB(215,0,0); }, 400);

        setTimeout(function(){ color.setRGB(255,255,255); }, 600); 

        setTimeout(function(){ color.setRGB(215,0,0); }, 800);

        setTimeout(function(){ color.setRGB(255,255,255); }, 1000);

        setTimeout(function(){ color.setRGB(215,0,0); }, 1100);

        setTimeout(function(){ color.setRGB(255,255,255); }, 1200);

        setTimeout(function(){ color.setRGB(215,0,0); }, 1300);

        setTimeout(function(){ color.setRGB(255,255,255); }, 1400);

        setTimeout(function(){ color.setRGB(215,0,0); }, 1500);

        setTimeout(function(){ color.setRGB(255,255,255); }, 1550);

        setTimeout(function(){ color.setRGB(215,0,0); }, 1600);

        setTimeout(function(){ color.setRGB(255,255,255); }, 1650);

        setTimeout(function(){ color.setRGB(215,0,0); }, 1700);

        setTimeout(function(){ color.setRGB(255,255,255); }, 1750);

        setTimeout(function(){ color.setRGB(215,0,0); }, 1800);

        setTimeout(function(){ color.setRGB(255,255,255); }, 1850);

        setTimeout(function(){ color.setRGB(215,0,0); }, 1900);

        setTimeout(function(){ color.setRGB(255,255,255); }, 1950);

        setTimeout(function(){ color.setRGB(215,0,0); }, 2000);

        setTimeout(function(){ color.setRGB(255,255,255); }, 2050);

        setTimeout(function(){ color.setRGB(215,0,0); }, 2100);

        setTimeout(function(){ color.setRGB(255,255,255); }, 2150);

        setTimeout(function(){ color.setRGB(215,0,0); }, 2200);

        setTimeout(function(){ color.setRGB(255,255,255); }, 2250);

        setTimeout(function(){ color.setRGB(215,0,0); }, 2300);

        setTimeout(function(){ color.setRGB(255,255,255); }, 2350);

        setTimeout(function(){ color.setRGB(215,0,0); }, 2400);

        setTimeout(function(){ color.setRGB(255,255,255); }, 2450);
        
        
        setTimeout(function(){ color.setRGB(1,1,1); }, 2500);



       
      }

      /*
      function returnCounter (counter){

        if (counter == true){ counter = false;}

        if (counter == false){ counter = true;}
        return counter;

      } */

    });

    el.addEventListener('mouseleave', () => {

      var frontLight = document.getElementById("frontLight");
     

      frontLight.setAttribute("light", "color: #b0bab9");
      //frontLight.setAttribute("light", "intensity: 4");

      var leftLight = document.getElementById("leftLight");
      leftLight.setAttribute("light", "color: #6abcea");

      var backLight = document.getElementById("backLight");
      backLight.setAttribute("light", "color: #aee0ff");

      trianguloCursorVisible.setAttribute('visible', "false");
      circuloCursor.setAttribute('visible', "true");

     
 

      materialPiedra.color.setRGB(1,1,1);
    
   


    })

    

    el.addEventListener('click', (evt) => {
    
    var clickBlanco = document.getElementById("clickPiedra1");
    clickBlanco.style.visibility = 'visible';

    

    setTimeout(function(){ clickBlanco.remove();
    
    var clickNegro = document.getElementById("clickPiedra2");
    clickNegro.style.visibility = 'visible';

    setTimeout(function(){ clickNegro.remove(); }, 1000);
    
    }, 1000);
    


    var piedrasSeparadas = document.getElementById("piedras");
    var piedraModelo = document.getElementById("piedraModelo");


    
    // Visibilidad

      el.object3D.visible = false;
      //piedrasSeparadas.object3D.visible = true;
      ps1.setAttribute('visible', "true");
      ps2.setAttribute('visible', "true");
      ps3.setAttribute('visible', "true");
      ps4.setAttribute('visible', "true");
      ps5.setAttribute('visible', "true");

    // piedrasSeparadas.classList.add("clickeable"); 
     piedraModelo.classList.remove("clickeable");
     ps1.classList.add("clickeable");
     ps2.classList.add("clickeable");
     ps3.classList.add("clickeable");
     ps4.classList.add("clickeable");
     ps5.classList.add("clickeable");
     
    
    });

    //Aqui cierra

    
    //Blink que destapa las piedras

    setTimeout(function(){ 
      
      var clickBlanco = document.getElementById("clickPiedra1");
      clickBlanco.style.visibility = 'visible';
  
      
  
      setTimeout(function(){ clickBlanco.remove();
      
      var clickNegro = document.getElementById("clickPiedra2");
      clickNegro.style.visibility = 'visible';
  
      setTimeout(function(){ clickNegro.remove(); }, 1000);
      
      }, 1000);
      
  
  
      var piedrasSeparadas = document.getElementById("piedras");
      var piedraModelo = document.getElementById("piedraModelo");

  
  
      
      // Visibilidad
  
        el.object3D.visible = false;
        //piedrasSeparadas.object3D.visible = true;
        ps1.setAttribute('visible', "true");
        ps2.setAttribute('visible', "true");
        ps3.setAttribute('visible', "true");
        ps4.setAttribute('visible', "true");
        ps5.setAttribute('visible', "true");
  
      // piedrasSeparadas.classList.add("clickeable"); 
       piedraModelo.classList.remove("clickeable");
       ps1.classList.add("clickeable");
       ps2.classList.add("clickeable");
       ps3.classList.add("clickeable");
       ps4.classList.add("clickeable");
       ps5.classList.add("clickeable");


      
      }, 10000);
    


  }, 30000);  
  });

  }
});



AFRAME.registerComponent('visibilidad-separados', {
  init: function () {

  

    this.el.addEventListener('mouseup', () => {
    
    const piedraModelo = document.getElementById("piedraModelo");
    const piedrasSeparadas = document.getElementById("piedras");
   
    
    // Visibilidad

      this.el.object3D.visible = false;
      piedraModelo.object3D.visible = true;
      

      ps1.classList.remove("clickeable");
      ps2.classList.remove("clickeable");
      ps3.classList.remove("clickeable");
      ps4.classList.remove("clickeable");
      ps5.classList.remove("clickeable");
      piedraModelo.classList.add("clickeable");
     // piedrasSeparadas.classList.remove("clickeable");
     
 
  

      

    
    });

   
  }
});

AFRAME.registerComponent('audioreactive-on-mesh-waveform', {
  schema: {
    analyserEl: {type: 'selector'}
  },

  init: function (){
    var analyserEl = this.data.analyserEl || this.el;
    //var componentes = analyserEl.components.audioanalyser;
    //console.log(componentes);

    this.el.addEventListener('model-loaded', () => {
    
    
    var modelo = this.el.getObject3D('mesh');
    var modeloMaterial = modelo.children[0].material;

    //modeloMaterial.addtAttribute('type', 'flat');
    
    
   
    modeloMaterial.color = new THREE.Color("rgb(6, 64, 89)");
    
    modeloMaterial.wireframe = true;
    modeloMaterial.fog = false;

    //modeloMaterial.type = "MeshStandarMaterial"


    //console.log(modeloMaterial);
    var indexArrayGeometry = modelo.children[0].geometry.getAttribute('position').array;

    var componentes = analyserEl.components.audioanalyser;
    var data = analyserEl.components.audioanalyser.data;
    var levels = analyserEl.components.audioanalyser.levels;
    var volume = analyserEl.components.audioanalyser.volume;
    var waveform = analyserEl.components.audioanalyser.waveform;


    //console.log(modelo);
    //console.log('Geometry data vertex from', modelo.children[0].name + ",", "Vertex Count " + modelo.children[0].geometry.getAttribute('position').count, modelo.children[0].geometry.getAttribute('position'));
    //console.log("Vertex arrays", modelo.children[0].name, indexArrayGeometry);
    
    //console.log("Componentes",componentes);
    //console.log("Audio Data",data);
    //console.log("Audio Levels from",  modelo.children[0].name, levels)
    //console.log("Volume", volume);
    //console.log("Waveform", waveform)
    })
  },
   
  
  tick: function () {
    
  var mesh = this.el.getObject3D('mesh');
 
  

  var analyserEl = this.data.analyserEl || this.el;
  var componentes = analyserEl.components.audioanalyser;
  
  var levelsReactive = analyserEl.components.audioanalyser.levels;
  var volumeReactive = analyserEl.components.audioanalyser.volume;
  var waveformReactive = analyserEl.components.audioanalyser.waveform;

  if (mesh == undefined){
    return;

  } else{

    function convertBlock(incomingData) { // inputdata es un UInt8Array
      var i, l = incomingData.length;
      var outputData = new Float32Array(incomingData.length);
      for (i = 0; i < l; i++) {
          outputData[i] = ((incomingData[i] - 128) / 128.0) * 100;
      }
      return outputData;
  }

  function concatTypedArrays(a, b) { // a, b TypedArray del mismo tipo
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

  var arrayWaveform1 = concatTypedArrays(waveformReactive, waveformReactive);
  var arrayWaveform2 = concatTypedArrays(arrayWaveform1, arrayWaveform1);
  var arrayWaveform3 = concatTypedArrays(arrayWaveform2, arrayWaveform1);
  var arrayWaveform4 = concatTypedArrays(arrayWaveform3, waveformReactive);

  var arrayLevels1 = concatTypedArrays(levelsReactive, levelsReactive);
  var arrayLevels2 = concatTypedArrays(arrayLevels1, arrayLevels1);
  var arrayLevels3 = concatTypedArrays(arrayLevels2, arrayLevels1);
  var arrayLevels4 = concatTypedArrays(arrayLevels3, levelsReactive);
   
  var arrayWaveformConvertido = convertBlock(arrayWaveform4);
  var arrayLevelsConvertido = convertBlock(arrayLevels4);
  


    const modelVertexIndex = mesh.children[0].geometry.getAttribute('position');
    //const indexArrayGeometry = mesh.children[0].geometry.getAttribute('position').array;
    
  
    
    mesh.children[0].geometry.addAttribute( 'position', new THREE.BufferAttribute( arrayWaveformConvertido, 3 ));

    const scaleOrigX = 2.8;
    const scaleOrigY = 2.8;
    const scaleOrigZ = 2.8;
//
    //mesh.scale.x = scaleOrigX + (volumeReactive * 0.03);
    //mesh.scale.y = scaleOrigY + (volumeReactive * 0.03);
    //mesh.scale.z = scaleOrigZ + (volumeReactive * 0.03);
    //
    //modelVertexIndex.set(arrayWaveformConvertido, indexArrayGeometry)

   
    modelVertexIndex.needsUpdate = true;
//
    //mesh.children[0].geometry.computeBoundingBox();
    //mesh.children[0].geometry.computeBoundingSphere();

  
    


    
    
     
     //console.log(mesh.children[0].name);
     //console.log("Levels", levelsReactive);
     //console.log("Waveform", waveformReactive);
     //console.log("Data Vertex Position",modelVertexIndex)
     //console.log("Vertex arrays", mesh.children[0].name, indexArrayGeometry);
     
  }

  }
  
});

AFRAME.registerComponent('audioreactive-on-mesh-levels', {
  schema: {
    analyserEl: {type: 'selector'}
  },

  init: function (){
    var analyserEl = this.data.analyserEl || this.el;
    //var componentes = analyserEl.components.audioanalyser;
    //console.log(componentes);

    this.el.addEventListener('model-loaded', () => {
    
    
    var modelo = this.el.getObject3D('mesh');
    var modeloMaterial = modelo.children[0].material;
    
   
    modeloMaterial.color = new THREE.Color("rgb(10, 144, 196)");
    modeloMaterial.wireframe = true;
    modeloMaterial.fog = false;


    //console.log(modeloMaterial);
    var indexArrayGeometry = modelo.children[0].geometry.getAttribute('position').array;

    var componentes = analyserEl.components.audioanalyser;
    var data = analyserEl.components.audioanalyser.data;
    var levels = analyserEl.components.audioanalyser.levels;
    var volume = analyserEl.components.audioanalyser.volume;
    var waveform = analyserEl.components.audioanalyser.waveform;


    //console.log(modelo);
    //console.log('Geometry data vertex from', modelo.children[0].name + ",", "Vertex Count " + modelo.children[0].geometry.getAttribute('position').count, modelo.children[0].geometry.getAttribute('position'));
    //console.log("Vertex arrays", modelo.children[0].name, indexArrayGeometry);
    
    //console.log("Componentes",componentes);
    //console.log("Audio Data",data);
    //console.log("Audio Levels from",  modelo.children[0].name, levels)
    //console.log("Volume", volume);
    //console.log("Waveform", waveform)
    })
  },
   
  
  tick: function () {
    
  const mesh = this.el.getObject3D('mesh');
 
  

  const analyserEl = this.data.analyserEl || this.el;
  const componentes = analyserEl.components.audioanalyser;
  
  var levelsReactive = analyserEl.components.audioanalyser.levels;
  var volumeReactive = analyserEl.components.audioanalyser.volume;
  var waveformReactive = analyserEl.components.audioanalyser.waveform;

  if (mesh == undefined){
    return;

  } else{

    function convertBlock(incomingData) { // inputdata es un UInt8Array
      var i, l = incomingData.length;
      var outputData = new Float32Array(incomingData.length);
      for (i = 0; i < l; i++) {
          outputData[i] = ((incomingData[i] - 128) / 128.0) * 100;
      }
      return outputData;
  }

  function concatTypedArrays(a, b) { // a, b TypedArray del mismo tipo
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

  var arrayWaveform1 = concatTypedArrays(waveformReactive, waveformReactive);
  var arrayWaveform2 = concatTypedArrays(arrayWaveform1, arrayWaveform1);
  var arrayWaveform3 = concatTypedArrays(arrayWaveform2, arrayWaveform1);
  var arrayWaveform4 = concatTypedArrays(arrayWaveform3, waveformReactive);

  var arrayLevels1 = concatTypedArrays(levelsReactive, levelsReactive);
  var arrayLevels2 = concatTypedArrays(arrayLevels1, arrayLevels1);
  var arrayLevels3 = concatTypedArrays(arrayLevels2, arrayLevels1);
  var arrayLevels4 = concatTypedArrays(arrayLevels3, levelsReactive);
   
  var arrayWaveformConvertido = convertBlock(arrayWaveform4);
  var arrayLevelsConvertido = convertBlock(arrayLevels4);
  


    const modelVertexIndex = mesh.children[0].geometry.getAttribute('position');
    //const indexArrayGeometry = mesh.children[0].geometry.getAttribute('position').array;
    
  
    
    mesh.children[0].geometry.addAttribute( 'position', new THREE.BufferAttribute( arrayLevelsConvertido, 3 ));

    const scaleOrigX = 2.8;
    const scaleOrigY = 2.8;
    const scaleOrigZ = 2.8;
//
    //mesh.scale.x = scaleOrigX + (volumeReactive * 0.03);
    //mesh.scale.y = scaleOrigY + (volumeReactive * 0.03);
    //mesh.scale.z = scaleOrigZ + (volumeReactive * 0.03);
    //
    //modelVertexIndex.set(arrayWaveformConvertido, indexArrayGeometry)

   
    modelVertexIndex.needsUpdate = true;

    //mesh.children[0].geometry.computeBoundingBox();
    //mesh.children[0].geometry.computeBoundingSphere();

    


    
    
     
     //console.log(mesh.children[0].name);
     //console.log("Levels", levelsReactive);
     //console.log("Waveform", waveformReactive);
     //console.log("Data Vertex Position",modelVertexIndex)
     //console.log("Vertex arrays", mesh.children[0].name, indexArrayGeometry);
     
  }

  }
  
});

AFRAME.registerComponent('audioreactive-on-beat', {
  schema: {
    analyserEl: {type: 'selector'}
  },

  init: function (){
    const analyserEl = this.data.analyserEl || this.el;
    //const componentes = analyserEl.components.audioanalyser;
    //console.log(componentes);

    this.el.addEventListener('model-loaded', () => {
    
    
    const modelo = this.el.getObject3D('mesh');
    const modeloMaterial = modelo.children[0].material;

    modeloMaterial.color = new THREE.Color("rgb(0, 30, 53)");
    modeloMaterial.wireframe = true;
    
   
    


    //console.log(modeloMaterial.color);
    var indexArrayGeometry = modelo.children[0].geometry.getAttribute('position').array;

    var componentes = analyserEl.components.audioanalyser;
    var data = analyserEl.components.audioanalyser.data;
    var levels = analyserEl.components.audioanalyser.levels;
    var volume = analyserEl.components.audioanalyser.volume;
    var waveform = analyserEl.components.audioanalyser.waveform;


    //console.log(modelo);
    //console.log('Geometry data vertex from', modelo.children[0].name + ",", "Vertex Count " + modelo.children[0].geometry.getAttribute('position').count, modelo.children[0].geometry.getAttribute('position'));
    //console.log("Vertex arrays", modelo.children[0].name, indexArrayGeometry);
    
    //console.log("Componentes",componentes);
    //console.log("Audio Data",data);
    //console.log("Audio Levels from",  modelo.children[0].name, levels)
    //console.log("Volume", volume);
    //console.log("Waveform", waveform)
    })
  },
   
  
  tick: function () {
    
  const mesh = this.el.getObject3D('mesh');
 
  

  const analyserEl = this.data.analyserEl || this.el;
  const componentes = analyserEl.components.audioanalyser;
  
  var levelsReactive = analyserEl.components.audioanalyser.levels;
  var volumeReactive = analyserEl.components.audioanalyser.volume;
  var waveformReactive = analyserEl.components.audioanalyser.waveform;

  if (mesh == undefined){
    return;

  } else{

    function convertBlock(incomingData) { // inputdata es un UInt8Array
      var i, l = incomingData.length;
      var outputData = new Float32Array(incomingData.length);
      for (i = 0; i < l; i++) {
          outputData[i] = ((incomingData[i] - 128) / 128.0) * 100;
      }
      return outputData;
  }

  function concatTypedArrays(a, b) { // a, b TypedArray del mismo tipo
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

  var arrayWaveform1 = concatTypedArrays(waveformReactive, waveformReactive);
  var arrayWaveform2 = concatTypedArrays(arrayWaveform1, arrayWaveform1);
  var arrayWaveform3 = concatTypedArrays(arrayWaveform2, arrayWaveform1);
  var arrayWaveform4 = concatTypedArrays(arrayWaveform3, waveformReactive);

  var arrayLevels1 = concatTypedArrays(levelsReactive, levelsReactive);
  var arrayLevels2 = concatTypedArrays(arrayLevels1, arrayLevels1);
  var arrayLevels3 = concatTypedArrays(arrayLevels2, arrayLevels1);
  var arrayLevels4 = concatTypedArrays(arrayLevels3, levelsReactive);
   
  var arrayWaveformConvertido = convertBlock(arrayWaveform4);
  var arrayLevelsConvertido = convertBlock(arrayLevels4);
  


    const modelVertexIndex = mesh.children[0].geometry.getAttribute('position');
    //const indexArrayGeometry = mesh.children[0].geometry.getAttribute('position').data.array;
    
  
    
    //mesh.children[0].geometry.addAttribute( 'position', new THREE.BufferAttribute( arrayWaveformConvertido, 3 ));

    const scaleOrigX = 2.8;
    const scaleOrigY = 2.8;
    const scaleOrigZ = 2.8;
//
    mesh.scale.x = scaleOrigX + (volumeReactive * 0.01);
    mesh.scale.y = scaleOrigY + (volumeReactive * 0.01);
    mesh.scale.z = scaleOrigZ + (volumeReactive * 0.01);
    //
    //modelVertexIndex.set(arrayWaveformConvertido, indexArrayGeometry)

   
    //modelVertexIndex.needsUpdate = true;

    //mesh.children[0].geometry.computeBoundingBox();
    //mesh.children[0].geometry.computeBoundingSphere();
//
    


    
    
     
     //console.log(mesh.children[0].name);
     //console.log("Levels", levelsReactive);
     //console.log("Waveform", waveformReactive);
     //console.log("Data Vertex Position",modelVertexIndex)
     //console.log("Vertex arrays", mesh.children[0].name, indexArrayGeometry);
     
  }

  }
  
});

AFRAME.registerComponent('audioreactive-on-beat-int', {
  schema: {
    analyserEl: {type: 'selector'}
  },

   
  
  tick: function () {
    
  const mesh = this.el.getObject3D('mesh');
 
  

  const analyserEl = this.data.analyserEl || this.el;
  const componentes = analyserEl.components.audioanalyser;
  
  var levelsReactive = analyserEl.components.audioanalyser.levels;
  var volumeReactive = analyserEl.components.audioanalyser.volume;
  var waveformReactive = analyserEl.components.audioanalyser.waveform;

  if (mesh == undefined){
    return;

  } else{

    function convertBlock(incomingData) { // inputdata es un UInt8Array
      var i, l = incomingData.length;
      var outputData = new Float32Array(incomingData.length);
      for (i = 0; i < l; i++) {
          outputData[i] = ((incomingData[i] - 128) / 128.0) * 100;
      }
      return outputData;
  }

  function concatTypedArrays(a, b) { // a, b TypedArray del mismo tipo
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

  var arrayWaveform1 = concatTypedArrays(waveformReactive, waveformReactive);
  var arrayWaveform2 = concatTypedArrays(arrayWaveform1, arrayWaveform1);
  var arrayWaveform3 = concatTypedArrays(arrayWaveform2, arrayWaveform1);
  var arrayWaveform4 = concatTypedArrays(arrayWaveform3, waveformReactive);

  var arrayLevels1 = concatTypedArrays(levelsReactive, levelsReactive);
  var arrayLevels2 = concatTypedArrays(arrayLevels1, arrayLevels1);
  var arrayLevels3 = concatTypedArrays(arrayLevels2, arrayLevels1);
  var arrayLevels4 = concatTypedArrays(arrayLevels3, levelsReactive);
   
  var arrayWaveformConvertido = convertBlock(arrayWaveform4);
  var arrayLevelsConvertido = convertBlock(arrayLevels4);
  


    const modelVertexIndex = mesh.children[0].geometry.getAttribute('position');
    //const indexArrayGeometry = mesh.children[0].geometry.getAttribute('position').data.array;
    
  
    
    //mesh.children[0].geometry.addAttribute( 'position', new THREE.BufferAttribute( arrayWaveformConvertido, 3 ));

    const scaleOrigX = 0.001;
    const scaleOrigY = 0.001;
    const scaleOrigZ = 0.001;
//

    mesh.scale.set((scaleOrigX+ volumeReactive * 0.025), (scaleOrigY + volumeReactive * 0.025), (scaleOrigZ + volumeReactive * 0.025));
    //console.log(volumeReactive);
    //
    //modelVertexIndex.set(arrayWaveformConvertido, indexArrayGeometry)

   
    //modelVertexIndex.needsUpdate = true;

    //mesh.children[0].geometry.computeBoundingBox();
    //mesh.children[0].geometry.computeBoundingSphere();
//
    


    
    
     
     //console.log(mesh.children[0].name);
     //console.log("Levels", levelsReactive);
     //console.log("Waveform", waveformReactive);
     //console.log("Data Vertex Position",modelVertexIndex)
     //console.log("Vertex arrays", mesh.children[0].name, indexArrayGeometry);
     
  }

  }
  
});

AFRAME.registerComponent('audioreactive-on-primitive', {
  schema: {
    analyserEl: {type: 'selector'}
  },

  init: function (){
    const analyserEl = this.data.analyserEl || this.el;
    //const componentes = analyserEl.components.audioanalyser;
    //console.log(componentes);

    this.el.addEventListener('model-loaded', () => {
    
    
    const modelo = this.el.getObject3D('mesh');
    const modeloMaterial = modelo.material;
    
   
    modeloMaterial.side = THREE.DoubleSide
    modeloMaterial.wireframe = true;
 


    console.log(modeloMaterial);
    var indexArrayGeometry = modelo.geometry.getAttribute('position').array;

    var componentes = analyserEl.components.audioanalyser;
    var data = analyserEl.components.audioanalyser.data;
    var levels = analyserEl.components.audioanalyser.levels;
    var volume = analyserEl.components.audioanalyser.volume;
    var waveform = analyserEl.components.audioanalyser.waveform;


    //console.log(modelo);
    //console.log('Geometry data vertex from', modelo.children[0].name + ",", "Vertex Count " + modelo.children[0].geometry.getAttribute('position').count, modelo.children[0].geometry.getAttribute('position'));
    //console.log("Vertex arrays", modelo.children[0].name, indexArrayGeometry);
    
    //console.log("Componentes",componentes);
    //console.log("Audio Data",data);
    //console.log("Audio Levels from",  modelo.children[0].name, levels)
    //console.log("Volume", volume);
    //console.log("Waveform", waveform)
    })
  },
   
  
  tick: function () {
    
  var mesh = this.el.getObject3D('mesh');
 
  

  var analyserEl = this.data.analyserEl || this.el;
  var componentes = analyserEl.components.audioanalyser;
  
  var levelsReactive = analyserEl.components.audioanalyser.levels;
  var volumeReactive = analyserEl.components.audioanalyser.volume;
  var waveformReactive = analyserEl.components.audioanalyser.waveform;

  if (mesh == undefined){
    return;

  } else{

    function convertBlock(incomingData) { // inputdata es un UInt8Array
      var i, l = incomingData.length;
      var outputData = new Float32Array(incomingData.length);
      for (i = 0; i < l; i++) {
          outputData[i] = ((incomingData[i] - 128) / 128.0);
      }
      return outputData;
  }

  function concatTypedArrays(a, b) { // a, b TypedArray del mismo tipo
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

  var arrayWaveform1 = concatTypedArrays(waveformReactive, waveformReactive);
  var arrayWaveform2 = concatTypedArrays(arrayWaveform1, arrayWaveform1);
  var arrayWaveform3 = concatTypedArrays(arrayWaveform2, arrayWaveform1);
  var arrayWaveform4 = concatTypedArrays(arrayWaveform3, waveformReactive);

  var arrayLevels1 = concatTypedArrays(levelsReactive, levelsReactive);
  var arrayLevels2 = concatTypedArrays(arrayLevels1, arrayLevels1);
  var arrayLevels3 = concatTypedArrays(arrayLevels2, arrayLevels1);
  var arrayLevels4 = concatTypedArrays(arrayLevels3, levelsReactive);
   
  var arrayWaveformConvertido = convertBlock(waveformReactive);
  var arrayLevelsConvertido = convertBlock(arrayLevels4);
  


    //const modelVertexIndex = mesh.geometry.getAttribute('position');
   // const indexArrayGeometry = mesh.geometry.getAttribute('position').array;
    
  
    
    //mesh.children[0].geometry.addAttribute( 'position', new THREE.BufferAttribute( arrayWaveformConvertido, 3 ));


    mesh.scale.x = (volumeReactive * 0.01);
    mesh.scale.y = (volumeReactive * 0.01);
    mesh.scale.z = (volumeReactive * 0.01);
    
    //modelVertexIndex.set(levelsReactive, indexArrayGeometry)

   
    //modelVertexIndex.needsUpdate = true;

    mesh.geometry.computeBoundingBox();
    mesh.geometry.computeBoundingSphere();
//
    


    
    
     
     //console.log(mesh.children[0].name);
     //console.log("Levels", levelsReactive);
     //console.log("Waveform", waveformReactive);
     //console.log("Data Vertex Position",modelVertexIndex)
     //console.log("Vertex arrays", mesh.children[0].name, indexArrayGeometry);
     
  }

  }
  
});

AFRAME.registerComponent('wireframe-emax', {
  schema: {
    analyserEl: {type: 'selector'},
  },

  init: function (){
    const analyserEl = this.data.analyserEl || this.el;
    //var componentes = analyserEl.components.audioanalyser;
    //console.log(componentes);

    this.el.addEventListener('model-loaded', () => {
    
    
      const modelo = this.el.getObject3D('mesh');
      const modeloMaterial = modelo.children[0].material;
  
      modeloMaterial.color = new THREE.Color("rgb(0, 7, 13)");
      modeloMaterial.wireframe = true;
    
 
    })
  }
  
});



AFRAME.registerComponent('sustitucion', {
  schema: {
    idModel: {type: 'selector'},
  },

   
  
  init: function () {

    const el = this.el;
    const data = this.data


    
    
  el.addEventListener('model-loaded', ()=> {
    
    
    setTimeout(function(){ 
    
   

    const idMod = el.object3D.children[0].children[0].el.id;
    const idElement = data.idModel;
    const visible = el.object3D.children[0].visible;
    

    console.log("Visible", visible);

    //console.log("ModelID Bien", idMod);
    console.log("ID Element", idElement);

    el.addEventListener('mouseenter', () => {

      

      


     trianguloCursor.setAttribute('visible', "true");
     circuloCursor.setAttribute('visible', "false");


   

    });

    el.addEventListener('mouseleave', () => {


      trianguloCursor.setAttribute('visible', "false");
      circuloCursor.setAttribute('visible', "true");

     
 

    
    
   


    });

    el.addEventListener('mouseup', () => {
      
     
      if (idMod == "pS1"){

        let box = document.getElementById("puntaModel");
        let ps = document.getElementById("pS1");
       

        box.setAttribute('visible', "true");
        box.classList.add("clickeable");
        ps.setAttribute('visible', "false");
        ps.classList.remove("clickeable");
        ps.parentNode.removeChild(ps);
        
        
        
        
        //console.log("puntaModel")
     
        
        //console.log("Material", idPiedraMaterial);

        
       }

       else if (idMod == "pS2"){

        let box = document.getElementById("columnaModel");
        box.setAttribute('visible', "true");
        box.classList.add("clickeable");
        let ps = document.getElementById("pS2");
        ps.setAttribute('visible', "false");
        ps.classList.remove("clickeable");
        ps.parentNode.removeChild(ps);

        //console.log("columnaModel")
   
       
       }

       else if (idMod == "pS3"){

        let box = document.getElementById("manoModel");
        box.setAttribute('visible', "true");
        box.classList.add("clickeable");
        let ps = document.getElementById("pS3");
        ps.setAttribute('visible', "false");
        ps.classList.remove("clickeable");
        ps.parentNode.removeChild(ps);

        //console.log("manoModel")
     
    
        
       }

       else if (idMod == "pS4"){

        let box = document.getElementById("monolitoModel");
        box.setAttribute('visible', "true");
        box.classList.add("clickeable");

        let ps = document.getElementById("pS4");
        ps.setAttribute('visible', "false");
        ps.classList.remove("clickeable");
        ps.parentNode.removeChild(ps);

        //console.log("monolitoModel")
     
     
     
       }

      else if (idMod == "pS5"){

        let box = document.getElementById("neandertalModel");
        box.setAttribute('visible', "true");
        box.classList.add("clickeable");
        let ps = document.getElementById("pS5");
        ps.setAttribute('visible', "false");
        ps.classList.remove("clickeable");
        ps.parentNode.removeChild(ps);
        
        //console.log("neadertalModel")
     
       }
    
    });



    /*
    this.el.addEventListener('mouseleave', () => {
      
      
      if (idBox.el.id == "boxps1"){

        let box = document.getElementById("boxps1");

        box.setAttribute('visible', "false");

        
       }

       if (idBox.el.id == "boxps2"){

        let box = document.getElementById("boxps2");
        box.setAttribute('visible', "false");
       
       }

       if (idBox.el.id == "boxps3"){

        let box = document.getElementById("boxps3");
        box.setAttribute('visible', "false");
        
       }

       if (idBox.el.id == "boxps4"){

        let box = document.getElementById("boxps4");
        box.setAttribute('visible', "false");
     
       }

       if (idBox.el.id == "boxps5"){

        let box = document.getElementById("boxps5");
        box.setAttribute('visible', "false");
       
       }
    
    });

    */

    
 


  //Aquí

}, 45000);

});

  }

  
  
});


/*

AFRAME.registerComponent('teleport', {
	schema: {},
	tock: function () {
		var el = this.el;

    //Key Event X, 88

    

    this.el.addEventListener('onkeypressed', (evt) => {

      var xPressed = evt.key;

      console.log("xPressed")

      if (evt.key == 88){

        console.log("Es X");

      }




    })


	}
})
*/

AFRAME.registerComponent('audioreactive-particles', {
  schema: {
    analyserEl: {type: 'selector'}
  },

   
  
  tick: function () {
    
  var mesh = this.el.getObject3D('mesh');
 
  

  var analyserEl = this.data.analyserEl || this.el;
  var componentes = analyserEl.components.audioanalyser;
  
  var levelsReactive = analyserEl.components.audioanalyser.levels;
  var volumeReactive = analyserEl.components.audioanalyser.volume;
  var waveformReactive = analyserEl.components.audioanalyser.waveform;

  if (mesh == undefined){
    return;

  } else{

    function convertBlock(incomingData) { // inputdata es un UInt8Array
      var i, l = incomingData.length;
      var outputData = new Float32Array(incomingData.length);
      for (i = 0; i < l; i++) {
          outputData[i] = ((incomingData[i] - 128) / 128.0) * 100;
      }
      return outputData;
  }

  function concatTypedArrays(a, b) { // a, b TypedArray del mismo tipo
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

  var arrayWaveform1 = concatTypedArrays(waveformReactive, waveformReactive);
  var arrayWaveform2 = concatTypedArrays(arrayWaveform1, arrayWaveform1);
  var arrayWaveform3 = concatTypedArrays(arrayWaveform2, arrayWaveform1);
  var arrayWaveform4 = concatTypedArrays(arrayWaveform3, waveformReactive);

  var arrayLevels1 = concatTypedArrays(levelsReactive, levelsReactive);
  var arrayLevels2 = concatTypedArrays(arrayLevels1, arrayLevels1);
  var arrayLevels3 = concatTypedArrays(arrayLevels2, arrayLevels1);
  var arrayLevels4 = concatTypedArrays(arrayLevels3, levelsReactive);
   
  var arrayWaveformConvertido = convertBlock(arrayWaveform4);
  var arrayLevelsConvertido = convertBlock(arrayLevels4);
  


    const modelVertexIndex = mesh.children[0].geometry.getAttribute('position');
    //const indexArrayGeometry = mesh.children[0].geometry.getAttribute('position').data.array;
    
  
    
    //mesh.children[0].geometry.addAttribute( 'position', new THREE.BufferAttribute( arrayWaveformConvertido, 3 ));

    const scaleOrigX = 0.001;
    const scaleOrigY = 0.001;
    const scaleOrigZ = 0.001;
//

    mesh.scale.set((scaleOrigX+ volumeReactive * 0.025), (scaleOrigY + volumeReactive * 0.025), (scaleOrigZ + volumeReactive * 0.025));
    //console.log(volumeReactive);
    //
    //modelVertexIndex.set(arrayWaveformConvertido, indexArrayGeometry)

   
    //modelVertexIndex.needsUpdate = true;

    //mesh.children[0].geometry.computeBoundingBox();
    //mesh.children[0].geometry.computeBoundingSphere();
//
    


    
    
     
     //console.log(mesh.children[0].name);
     //console.log("Levels", levelsReactive);
     //console.log("Waveform", waveformReactive);
     //console.log("Data Vertex Position",modelVertexIndex)
     //console.log("Vertex arrays", mesh.children[0].name, indexArrayGeometry);
     
  }

  }
  
});

AFRAME.registerComponent('isolate-mode', {
  

   
  
  init: function () {


    const el = this.el;

    el.addEventListener('model-loaded', ()=> {

    const idMod = el.object3D.children[0].children[0].el.id;


    const mesh = el.getObject3D('mesh');
    console.log("Modelo por aislar ", idMod);
  
  
  //Modo aislamiento
  el.addEventListener('mouseup', () => {

    switch (idMod){

      case "manoModel":
        manoIsolate.setAttribute('visible', "true");
        circuloCursor.setAttribute('visible', "false");
        corriente.setAttribute('visible', "false");
        corriente2.setAttribute('visible', "false");
        oceanplane.setAttribute('visible', "false");
        pAzules.setAttribute('visible', "false");
        pRojas.setAttribute('visible', "false");
        pBlancas.setAttribute('visible', "false");
        pAmarillas.setAttribute('visible', "false");
        manoModel.setAttribute('visible', "false");
        columnaModel.setAttribute('visible', "false");
        puntaModel.setAttribute('visible', "false");
        monolitoModel.setAttribute('visible', "false");
        neandertalModel.setAttribute('visible', "false");
        camera.setAttribute('look-controls', "enabled:false");
        camera.setAttribute('wasd-controls', "enabled:false");
  
        ps1.setAttribute('visible', "false");
        ps2.setAttribute('visible', "false");
        ps3.setAttribute('visible', "false");
        ps4.setAttribute('visible', "false");
        ps5.setAttribute('visible', "false");
  
  
        ps1.classList.remove("clickeable");
        ps2.classList.remove("clickeable");
        ps3.classList.remove("clickeable");
        ps4.classList.remove("clickeable");
        ps5.classList.remove("clickeable");
  
        if(!ps1){ console.log("ps1 removed")}
  
        if(!ps2){console.log("ps2 removed")}
        
        if(!ps3){console.log("ps3 removed")}
        
        if(!ps4){console.log("ps4 removed")}
        
        if(!ps5){console.log("ps5 removed")}

      break;

      case "columnaModel":

        columnaIsolate.setAttribute('visible', "true");
        circuloCursor.setAttribute('visible', "false");
        corriente.setAttribute('visible', "false");
        corriente2.setAttribute('visible', "false");
        oceanplane.setAttribute('visible', "false");
        pAzules.setAttribute('visible', "false");
        pRojas.setAttribute('visible', "false");
        pBlancas.setAttribute('visible', "false");
        pAmarillas.setAttribute('visible', "false");
        manoModel.setAttribute('visible', "false");
        columnaModel.setAttribute('visible', "false");
        puntaModel.setAttribute('visible', "false");
        monolitoModel.setAttribute('visible', "false");
        neandertalModel.setAttribute('visible', "false");
        camera.setAttribute('look-controls', "enabled:false");
        camera.setAttribute('wasd-controls', "enabled:false");
  
        ps1.setAttribute('visible', "false");
        ps2.setAttribute('visible', "false");
        ps3.setAttribute('visible', "false");
        ps4.setAttribute('visible', "false");
        ps5.setAttribute('visible', "false");
  
  
        ps1.classList.remove("clickeable");
        ps2.classList.remove("clickeable");
        ps3.classList.remove("clickeable");
        ps4.classList.remove("clickeable");
        ps5.classList.remove("clickeable");
  
        if(!ps1){ console.log("ps1 removed")}
  
        if(!ps2){console.log("ps2 removed")}
        
        if(!ps3){console.log("ps3 removed")}
        
        if(!ps4){console.log("ps4 removed")}
        
        if(!ps5){console.log("ps5 removed")}

        break;

        case "puntaModel":

        
      puntaIsolate.setAttribute('visible', "true");
      circuloCursor.setAttribute('visible', "false");
      corriente.setAttribute('visible', "false");
      corriente2.setAttribute('visible', "false");
      oceanplane.setAttribute('visible', "false");
      pAzules.setAttribute('visible', "false");
      pRojas.setAttribute('visible', "false");
      pBlancas.setAttribute('visible', "false");
      pAmarillas.setAttribute('visible', "false");
      manoModel.setAttribute('visible', "false");
      columnaModel.setAttribute('visible', "false");
      puntaModel.setAttribute('visible', "false");
      monolitoModel.setAttribute('visible', "false");
      neandertalModel.setAttribute('visible', "false");
      camera.setAttribute('look-controls', "enabled:false");
      camera.setAttribute('wasd-controls', "enabled:false");

      ps1.setAttribute('visible', "false");
      ps2.setAttribute('visible', "false");
      ps3.setAttribute('visible', "false");
      ps4.setAttribute('visible', "false");
      ps5.setAttribute('visible', "false");


      ps1.classList.remove("clickeable");
      ps2.classList.remove("clickeable");
      ps3.classList.remove("clickeable");
      ps4.classList.remove("clickeable");
      ps5.classList.remove("clickeable");
      if(!ps1){ console.log("ps1 removed")}

      if(!ps2){console.log("ps2 removed")}
      
      if(!ps3){console.log("ps3 removed")}
      
      if(!ps4){console.log("ps4 removed")}
      
      if(!ps5){console.log("ps5 removed")}
        
      break;

      case "monolitoModel":

        monolitoIsolate.setAttribute('visible', "true");
        circuloCursor.setAttribute('visible', "false");
        corriente.setAttribute('visible', "false");
        corriente2.setAttribute('visible', "false");
        oceanplane.setAttribute('visible', "false");
        pAzules.setAttribute('visible', "false");
        pRojas.setAttribute('visible', "false");
        pBlancas.setAttribute('visible', "false");
        pAmarillas.setAttribute('visible', "false");
        manoModel.setAttribute('visible', "false");
        columnaModel.setAttribute('visible', "false");
        puntaModel.setAttribute('visible', "false");
        monolitoModel.setAttribute('visible', "false");
        neandertalModel.setAttribute('visible', "false");
        camera.setAttribute('look-controls', "enabled:false");
        camera.setAttribute('wasd-controls', "enabled:false");
  
        ps1.setAttribute('visible', "false");
        ps2.setAttribute('visible', "false");
        ps3.setAttribute('visible', "false");
        ps4.setAttribute('visible', "false");
        ps5.setAttribute('visible', "false");
  
  
        ps1.classList.remove("clickeable");
        ps2.classList.remove("clickeable");
        ps3.classList.remove("clickeable");
        ps4.classList.remove("clickeable");
        ps5.classList.remove("clickeable");
  
         if(!ps1){ console.log("ps1 removed")}
  
        if(!ps2){console.log("ps2 removed")}
        
        if(!ps3){console.log("ps3 removed")}
        
        if(!ps4){console.log("ps4 removed")}
        
        if(!ps5){console.log("ps5 removed")}
      break;

      case "neandertalModel":

        neandertalIsolate.setAttribute('visible', "true");
        circuloCursor.setAttribute('visible', "false");
        corriente.setAttribute('visible', "false");
        corriente2.setAttribute('visible', "false");
        oceanplane.setAttribute('visible', "false");
        pAzules.setAttribute('visible', "false");
        pRojas.setAttribute('visible', "false");
        pBlancas.setAttribute('visible', "false");
        pAmarillas.setAttribute('visible', "false");
        manoModel.setAttribute('visible', "false");
        columnaModel.setAttribute('visible', "false");
        puntaModel.setAttribute('visible', "false");
        monolitoModel.setAttribute('visible', "false");
        neandertalModel.setAttribute('visible', "false");
        camera.setAttribute('look-controls', "enabled:false");
        camera.setAttribute('wasd-controls', "enabled:false");
  
        
        ps1.setAttribute('visible', "false");
        ps2.setAttribute('visible', "false");
        ps3.setAttribute('visible', "false");
        ps4.setAttribute('visible', "false");
        ps5.setAttribute('visible', "false");
  
  
        ps1.classList.remove("clickeable");
        ps2.classList.remove("clickeable");
        ps3.classList.remove("clickeable");
        ps4.classList.remove("clickeable");
        ps5.classList.remove("clickeable");
        
        if(!ps1){ console.log("ps1 removed")}
  
        if(!ps2){console.log("ps2 removed")}
        
        if(!ps3){console.log("ps3 removed")}
        
        if(!ps4){console.log("ps4 removed")}
        
        if(!ps5){console.log("ps5 removed")}
        break;
}
});

});

  //Intercambio mira  



  el.addEventListener('mouseenter', () => {

    trianguloCursor2.setAttribute('visible', "true");
    circuloCursor.setAttribute('visible', "false");

  })

  el.addEventListener('mouseleave', () => {

    trianguloCursor2.setAttribute('visible', "false");
    circuloCursor.setAttribute('visible', "true");


  })
 

  }
  
});




document.addEventListener('keyup', (e) => {

  
  if(e.key === "Escape") {

    manoIsolate.setAttribute('visible', "false");
    columnaIsolate.setAttribute('visible', "false");
    puntaIsolate.setAttribute('visible', "false");
    monolitoIsolate.setAttribute('visible', "false");
    neandertalIsolate.setAttribute('visible', "false");

    circuloCursor.setAttribute('visible', "true");
    corriente.setAttribute('visible', "true");
    corriente2.setAttribute('visible', "true");
    oceanplane.setAttribute('visible', "true");

    pAzules.setAttribute('visible', "true");
    pRojas.setAttribute('visible', "true");
    pBlancas.setAttribute('visible', "true");
    pAmarillas.setAttribute('visible', "true");

    manoModel.setAttribute('visible', "true");
    columnaModel.setAttribute('visible', "true");
    puntaModel.setAttribute('visible', "true");
    monolitoModel.setAttribute('visible', "true");
    neandertalModel.setAttribute('visible', "true");

    camera.setAttribute('look-controls', "enabled:true");
    camera.setAttribute('wasd-controls', "enabled:true");

    
    
}
});

AFRAME.registerComponent('bothsides', {
  schema: {
    analyserEl: {type: 'selector'},
  },

  init: function (){
    const analyserEl = this.data.analyserEl || this.el;
      
    this.el.addEventListener('model-loaded', async () => {



      const modelo = await this.el.getObject3D('mesh').children[0];
      

      console.log("Textura del modelo", modelo.material.map)
      
      try{

      //console.log(modelo);
      const modeloMaterial = modelo.material;
      const modeloTexture = modelo.material.map;

      modeloMaterial.side = THREE.DoubleSide;

 
      
      let flag= false;

      if(modeloMaterial.side === 2){
        
        
      flag=true
    }
      
      console.log("Bothsides activo", flag);

    } catch(e) {return console.log(e)}


    });
  }
  
});

AFRAME.registerComponent('bothsides-avatar', {
  schema: {
    analyserEl: {type: 'selector'},
  },

  init: function (){
    const analyserEl = this.data.analyserEl || this.el;
      
    this.el.addEventListener('model-loaded', async () => {



      const modelo = await this.el.getObject3D('mesh').children[0].children[0];
      
      try{

      //console.log(modelo);
      const modeloMaterial = modelo.material;
      modeloMaterial.side = THREE.DoubleSide;
      
      let flag= false;

      if(modeloMaterial.side === 2){
        
        
      flag=true
    }
      
      console.log("Bothsides activo", flag);

    } catch(e) {return console.log(e)}


    });
  }
  
});

AFRAME.registerComponent('video-texture', {
  schema: {
    video: {type: 'selector'},
  },

  init: function () {
    let el = this.el;
    let comp = this;
    let data = this.data;
    
    let videoToTexture;

    //console.log("Data", this.data.video)
    console.log("Scene", el);

    videoToTexture = this.data.video;
    videoToTexture.load(); // must call after setting/changing source
    videoToTexture.play();
    videoToTexture.loop = true;

    let videoImagekf = document.createElement('canvas');
    videoImagekf.width = 2048;
    videoImagekf.height = 2048;

    let videoTexture = new THREE.VideoTexture(videoToTexture);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;
    videoTexture.encoding = THREE.sRGBEncoding;
    videoTexture.flipY = false;



    comp.scene = el.sceneEl.object3D;  
    comp.counter = 0;   
    comp.treeModels = [];
    comp.modelLoaded = false;

    // After gltf model has loaded, modify it materials.
    el.addEventListener('model-loaded', function(ev){
      let mesh = el.getObject3D('mesh'); 
      console.log(mesh.children[0])
      if (!mesh){return;}
      //console.log(mesh);
      mesh.traverse(function(node){
         if (node.isMesh){  
           let mat = new THREE.MeshBasicMaterial({
            map: videoTexture,
            
            
          });

          mat.side = THREE.DoubleSide;
          
           let color = new THREE.Color(0xffffff);
           mat.color = color;
           
          node.material = mat;                  
         }
      });
      comp.modelLoaded = true;
    });   
  }
});

AFRAME.registerComponent('color-change', {


  init: function () {
    let el = this.el;
    

    // After gltf model has loaded, modify it materials.
    el.addEventListener('model-loaded', function(ev){
      const mesh = el.getObject3D('mesh'); if (!mesh){return;}

      let meshMaterial = mesh.children[0].material;
      let matColor = mesh.children[0].material.color;

      const color = new THREE.Color(0xd9d2f4);
      const color2 = new THREE.Color(0xffffff);
      const color3 = new THREE.Color(0x273366);
      const color4 = new THREE.Color(0x17161b);


      const mat = new THREE.MeshPhongMaterial({
        color: color,   
      });

      const r = 0.07058823529411765;
      const g = 1;
      const b = 0.3803921568627451;

      const mat2 = new THREE.MeshPhongMaterial({
        color: color2,   
      });

      const r2 = 1;
      const g2 = 0;
      const b2 = 0;

      const mat3 = new THREE.MeshPhongMaterial({
        color: color3,   
      });

      const r3 = 1;
      const g3 = 0.8941176470588236;
      const b3 = 0;

      const mat4 = new THREE.MeshPhongMaterial({
        color: color4,   
      });


      console.log("Color change activated", el.id);
      
      
      const colorLoop = (i)=>{  
        
 
        mesh.traverse((colorM)=>{

            setTimeout(()=>{
             colorM.material = mat3;
            },200 * (i + 1))

            setTimeout(()=>{
              colorM.material= mat;
              //console.log("Si es Rojo", el.id, colorM.material.color);

            },300 * (i + 1))

            setTimeout(()=>{           
            colorM.material = mat2;
            //console.log("Si es verde", el.id, colorM.material.color);
          },400 * (i + 1))

          setTimeout(()=>{           
            colorM.material = mat4;
            //console.log("Si es verde", el.id, colorM.material.color);
          },500 * (i + 1))

                  




                })


    }

    colorLoop();


    const loopColorLoop = (i)=>{

      setTimeout(()=>{
    
        colorLoop(i);
          
        }, 500 * (i + 1))
    
    };



    
    for(let i = 0; i <= 1700; i++){

      loopColorLoop(i);
    
    
    }

    });   
  }
});

AFRAME.registerComponent('color-change-atom', {


  init: function () {
    let el = this.el;
    

    // After gltf model has loaded, modify it materials.
    el.addEventListener('model-loaded', function(ev){
      const mesh = el.getObject3D('mesh').children[0]; if (!mesh){return;}

      let meshMaterial = mesh.children[0].material;
      let matColor = mesh.children[0].material.color;

      const color = new THREE.Color(0xd9d2f4);
      const color2 = new THREE.Color(0xffffff);
      const color3 = new THREE.Color(0x273366);
      const color4 = new THREE.Color(0x17161b);


      const mat = new THREE.MeshPhongMaterial({
        color: color,   
      });

      const r = 0.07058823529411765;
      const g = 1;
      const b = 0.3803921568627451;

      const mat2 = new THREE.MeshPhongMaterial({
        color: color2,   
      });

      const r2 = 1;
      const g2 = 0;
      const b2 = 0;

      const mat3 = new THREE.MeshPhongMaterial({
        color: color3,   
      });

      const r3 = 1;
      const g3 = 0.8941176470588236;
      const b3 = 0;

      const mat4 = new THREE.MeshPhongMaterial({
        color: color4,   
      });



      console.log("Color change activated", el.id);
      
      
      const colorLoop = (i)=>{  
        
 
        mesh.traverse((colorM)=>{

            setTimeout(()=>{
             colorM.material = mat3;
            },200 * (i + 1))

            setTimeout(()=>{
              colorM.material= mat;
              //console.log("Si es Rojo", el.id, colorM.material.color);

            },400 * (i + 1))



                  




                })


    }

    colorLoop();


    const loopColorLoop = (i)=>{

      setTimeout(()=>{
    
        colorLoop(i);
          
        }, 400 * (i + 1))
    
    };



    
    for(let i = 0; i <= 1700; i++){

      loopColorLoop(i);
    
    
    }

    });   
  }
});



AFRAME.registerComponent('look-at-cam', {
  schema: {
    look: {type: 'selector'},
  },

  init: function (){
    const el = this.el;
    //const look = this.data.look;
    //const lookAt = look.getAttribute('position');
    const camera = el.sceneEl.camera;
    const cameraPosition = el.sceneEl.camera.position;
    const cameraRotation = el.sceneEl.camera.rotation;
      
    ascene.addEventListener('loaded', () => {

      /*
       setTimeout(()=>{
        el.setAttribute('look-controls','enabled:false')
        el.sceneEl.camera.lookAt(new THREE.Vector3(lookAt.x,lookAt.y,lookAt.z));
        console.log("Look at", cameraRotation)

      }, 8000)

        setTimeout(()=>{
          console.log("Boom Teleport")
          el.setAttribute('look-controls','enabled:true')
          cameraPosition.x = -2.3;
          cameraPosition.y = 1;
          cameraPosition.z = -3;

          cameraRotation.x = 0;
          cameraRotation.y = 0;
          cameraRotation.z = 0;

        }, 11000)

        */


    });
  },

  tick: function(){
  
        const cameraPosition = this.el.sceneEl.camera.el.getAttribute('position');
        const cameraRotation = this.el.sceneEl.camera.el.getAttribute('rotation');

        console.log("Cam position", cameraPosition);
        console.log("Cam rotation", cameraRotation);


  }
  
});