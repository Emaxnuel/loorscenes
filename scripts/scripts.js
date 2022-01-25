
const bgvidLoader = document.getElementById('bgvid');
const lineasLoading = document.getElementById('lineasLoading');




/* Hydra Zoom out*/

const hydraSphere = () => {
const scaleSphere = window.devicePixelRatio;
const sizeSphere= 1000;
const cSphere = document.getElementById("hydraCanvas2");
cSphere.width = Math.floor(sizeSphere * scaleSphere);
cSphere.height = Math.floor(sizeSphere * scaleSphere);

// create a new hydra-synth instance
const hydrasphere = new Hydra({
  canvas: document.getElementById("hydraCanvas2")
});
//UNFOLDED CRYSTAL SHADER (DARK) - @sammtza___
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
	.blend(src(o0).rotate(-0.1, -0.1)
           , [1 / 2, 9 / 10].smooth())
	.add(
		src(o0).rotate(0.1, 0.1).scale(-0.996)
  ,
		[1 / 2, 9 / 10].reverse().smooth()
	,-1)
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

render(o0)


}

hydraSphere();
  

const vidLoading = document.getElementById("bgvid");
const rigCamera = document.getElementById("rigCamera");

const rigP1Poly = document.getElementById("rigP1Poly");
const rigP1Poly2 = document.getElementById("rigP1Poly2");
const rigP1Poly3 = document.getElementById("rigP1Poly3");


const rigP2Poly = document.getElementById("rigP2Poly");
const rigP2Poly2 = document.getElementById("rigP2Poly2");


const rigPiramide = document.getElementById("rigPiramide");

const skyDome = document.getElementById('skydome');
const ambientLight = document.getElementById("ambientLight");

const animacionPiramide = document.getElementById("animacionPiramide");



const corrienteModelZoom = document.getElementById("corrienteModelZoom");
const corrienteModelZoom2 = document.getElementById("corrienteModelZoom2");
const corrienteModelZoom3 = document.getElementById("corrienteModelZoom3");
const corrienteModelZoom4 = document.getElementById("corrienteModelZoom4");

const constRocksModelA = document.getElementById("constRocksModelA");
const constRocksModelB = document.getElementById("constRocksModelB");
const constRocksModelC = document.getElementById("constRocksModelC");
const constRocksModelD = document.getElementById("constRocksModelD");

const hydraSphereModel = document.getElementById("hydraSphereModel"); 






const numberMap = (in_min, in_max, out_min, out_max )=>{

  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

}





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

/*

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

*/

const camera = document.getElementById("camera");
let cameraTeleport; 
let cameraPosition; 
let cameraRotation;
let look = new THREE.Vector3(0,0,0);

////const circuloCursor = document.getElementById("//circuloCursor");
const trianguloCursor = document.getElementById("trianguloCursor");
const trianguloCursor2 = document.getElementById("trianguloCursor2");

const ps1 = document.getElementById("pS1");
const ps2 = document.getElementById("pS2");
const ps3 = document.getElementById("pS3");
const ps4 = document.getElementById("pS4");
const ps5 = document.getElementById("pS5");

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
    const erosionsMaster = document.getElementById("erosionsMaster");

    const currentsScene = document.getElementById('currentAudio');
    const currentsSceneBateria = document.getElementById('currentAudioBateria');
    const currentsSceneFXGroup = document.getElementById('currentAudioFXGroup');
    const currentsSceneVocalGroup = document.getElementById('currentAudioVocalGroup');
    console.log(currentsScene.id + " its ready");
    console.log(currentsSceneBateria);
    
    const influenceScene = document.getElementById('influenceAudio');
    const influenceSceneBateria = document.getElementById('influenceAudioBateria');
    const influenceSceneFXGroup = document.getElementById('influenceAudioFXGroup');
    const influenceSceneVocalGroup = document.getElementById('influenceAudioVocalGroup');
    console.log(influenceScene.id + " its ready");

    const collisionScene = document.getElementById('collisionAudio');
    const collisionSceneBateria = document.getElementById('collisionAudioBateria');
    const collisionSceneFXGroup = document.getElementById('collisionAudioFXGroup');
    const collisionSceneVocalGroup = document.getElementById('collisionAudioVocalGroup');
    console.log(collisionScene.id + " its ready");

    const atomScene = document.getElementById('atomAudio');
    const atomSceneBateria = document.getElementById('atomAudioBateria');
    const atomSceneFXGroup = document.getElementById('atomAudioFXGroup');
    const atomSceneVocalGroup = document.getElementById('atomAudioVocalGroup');
    console.log(atomScene.id + " its ready");

    const zoomScene = document.getElementById('zoomAudio');
    const zoomSceneBateria = document.getElementById('zoomAudioBateria');
    const zoomSceneFXGroup = document.getElementById('zoomAudioFXGroup');
    const zoomSceneVocalGroup = document.getElementById('zoomAudioVocalGroup');
    console.log(zoomScene.id + " its ready");


    document.querySelector('a-scene').addEventListener('loaded', function () {
  
      currentsScene.volume = 0.001;
      currentsScene.play();
      erosionsMaster.play();





        /*

        
      setTimeout(function(){poem1.style.visibility='visible'; setTimeout(function(){ poem1.remove(); }, 4000);}, 1000);

      setTimeout(function(){ poem2.style.visibility='visible'; setTimeout(function(){ poem2.remove(); }, 4000);}, 8000);
    
      setTimeout(function(){ poem3.style.visibility='visible'; poem4.style.visibility='visible'; setTimeout(function(){ poem3.remove(); poem4.remove(); }, 3000);}, 12000);
    
      setTimeout(function(){ poem5.style.visibility='visible'; setTimeout(function(){ poem5.remove(); }, 5990);}, 18000);
    
      setTimeout(function(){ poem6.style.visibility='visible'; setTimeout(function(){ poem6.remove(); }, 4000);}, 20000);
    
      setTimeout(function(){ poem7.style.visibility='visible'; setTimeout(function(){ poem7.remove(); }, 6000);}, 22000);
    
      setTimeout(function(){ poem8.style.visibility='visible'; setTimeout(function(){ poem8.remove(); }, 4000);}, 28000);
    
      setTimeout(function(){ poem9.style.visibility='visible'; setTimeout(function(){ poem9.remove(); }, 5000);}, 45000);
    
      setTimeout(function(){ poem12.style.visibility='visible'; setTimeout(function(){ poem12.remove(); }, 5000);}, 60000);
    
      setTimeout(function(){ poem13.style.visibility='visible'; setTimeout(function(){ poem13.remove(); }, 4000);}, 65000);
    
      setTimeout(function(){ poem14.style.visibility='visible'; setTimeout(function(){ poem14.remove(); }, 4000);}, 69000);
    
      setTimeout(function(){ poem15.style.visibility='visible'; setTimeout(function(){ poem15.remove(); }, 5000);}, 90000);
      

*/







    });
  
    
    
    const modelPiedra = document.getElementById("piedraModelo");
    modelPiedra.addEventListener('model-loaded', () => {
    
    console.log("Intro/Currents scene started");

    // Scenes
    
   

    // Setup
    const sceneBackground = document.querySelector('a-scene');
    
    const ps1 = document.getElementById("pS1");
    const ps2 = document.getElementById("pS2");
    const ps3 = document.getElementById("pS3");
    const ps4 = document.getElementById("pS4");
    const ps5 = document.getElementById("pS5");

    const piedraMeshAsset = document.getElementById('piedraMesh');
    const piedraMesh = document.getElementById('piedraMeshVertex');
    const piedraMesh2 = document.getElementById('piedraMeshVertex2');

    /*
    console.log("Piedra Mesh", piedraMeshAsset);
    console.log("Piedra Mesh", piedraMesh);
    console.log("Piedra Mesh2", piedraMesh2); 
    */
    
    var pAzules= document.getElementById('pAzules');
    var pRojas= document.getElementById('pRojas');
    var pBlancas= document.getElementById('pBlancas');
    var pAmarillas= document.getElementById('pAmarillas');

    var ascene = document.getElementById('ascene');

  

    var oceanplane = document.getElementById('oceanplane');



    var backLight = document.getElementById("backLight");




    var constRocks = document.getElementById('constRocksModel');
    var constRocks2 = document.getElementById('constRocksModel2');

    var atom = document.getElementById('atomoModelo');

    var pAvatar = document.getElementById('piedraAvatar');

    //var circuloCursor = document.getElementById("//circuloCursor");

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

    const hydraCube1 = document.getElementById('hydraCube1');
    const hydraCube2 = document.getElementById('hydraCube2');
    const hydraCube3 = document.getElementById('hydraCube3');


    


    //Intro Fade In
    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 4");
      
    }, 1500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 8");
      
    }, 2000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 12");
      
    }, 3000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 16");
      
    }, 3500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 20");
      
    }, 4000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 24");
      
    }, 4500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 28");
      
    }, 5000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 32");
      
    }, 5500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 36");
    sceneBackground.setAttribute('fog', "near: 1")                           
    
      
    }, 6000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 40");
      
    }, 6500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 44");
      
    }, 7000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 48"); 
      
    }, 7500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 52");
    
  }, 8000);

  setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 66"); oceanplane.setAttribute('material', 'fog: true');
  
  }, 8500);

 // setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 60"); //pChoque1.setAttribute('body', 'type: static');
    
 // }, 9000);


  setTimeout(function(){ 


      pChoque1.setAttribute('body', 'type: static');
      pChoque2.setAttribute('body', 'type: static');
      pChoque3.setAttribute('body', 'type: static');
      pChoque4.setAttribute('body', 'type: static');
      pChoque5.setAttribute('body', 'type: static');
      pChoque6.setAttribute('body', 'type: static');
      pChoque7.setAttribute('body', 'type: static');
      pChoque8.setAttribute('body', 'type: static');
      pChoque9.setAttribute('body', 'type: static');
      pChoque10.setAttribute('body', 'type: static');
      pChoque11.setAttribute('body', 'type: static');
      pChoque12.setAttribute('body', 'type: static');
      pChoque13.setAttribute('body', 'type: static');
      pChoque14.setAttribute('body', 'type: static');
      pChoque15.setAttribute('body', 'type: static');
      pChoque16.setAttribute('body', 'type: static');
      pChoque17.setAttribute('body', 'type: static');
      pChoque18.setAttribute('body', 'type: static');
      pChoque18.setAttribute('body', 'type: static');
      pChoque19.setAttribute('body', 'type: static');
      pChoque20.setAttribute('body', 'type: static');
      pChoque21.setAttribute('body', 'type: static');
      pChoque22.setAttribute('body', 'type: static');
      pChoque23.setAttribute('body', 'type: static');
      pChoque24.setAttribute('body', 'type: static');
      pChoque25.setAttribute('body', 'type: static');
      pChoque26.setAttribute('body', 'type: static');
      pChoque27.setAttribute('body', 'type: static');
      pChoque28.setAttribute('body', 'type: static');
      pChoque29.setAttribute('body', 'type: static');
      pChoque30.setAttribute('body', 'type: static');
      pChoque31.setAttribute('body', 'type: static');
      pChoque32.setAttribute('body', 'type: static');
      pChoque33.setAttribute('body', 'type: static');
      pChoque34.setAttribute('body', 'type: static');
      pChoque35.setAttribute('body', 'type: static');
      pChoque36.setAttribute('body', 'type: static');
      pChoque37.setAttribute('body', 'type: static');
         
      }, 5000);



  //Poesia
  


  document.querySelector('a-scene').addEventListener('loaded', function () {


  /*Partículas iniciales
  Azules: 1500
  Rojas: 10000
  Amarillas: 21000
  */

  setTimeout(function(){

    pAzules.setAttribute('particle-system', "particleCount: 500");
    pRojas.setAttribute('particle-system', "particleCount: 2000");
    pAmarillas.setAttribute('particle-system', "particleCount: 4000");


  }, 5000);

  setTimeout(function(){

    pAzules.setAttribute('particle-system', "particleCount: 1000");
    pRojas.setAttribute('particle-system', "particleCount: 5000");
    pAmarillas.setAttribute('particle-system', "particleCount: 12000");


  }, 20000);

  setTimeout(function(){

    pAzules.setAttribute('particle-system', "particleCount: 1500");
    pRojas.setAttribute('particle-system', "particleCount: 10000");
    pAmarillas.setAttribute('particle-system', "particleCount: 12000");


  }, 30000);

 
 


});
      
 
    //var modeloMaterial = modelo.children[0].material;

    

    //modeloMaterial.color.setRGB(0, 7, 13);
    //modeloMaterial.wireframe = true;

    //var ps1Mesh = ps1.getObject3D('mesh');
    //var ps2Mesh = ps2.getObject3D('mesh');
    //var ps3Mesh = ps3.getObject3D('mesh');
    //var ps4Mesh = ps4.getObject3D('mesh');
    //var ps5Mesh = ps5.getObject3D('mesh');
//
    //console.log("ps1Mesh", ps1Mesh)

    //var ps1Material = ps1Mesh.children[0].material;
    //var ps2Material = ps2Mesh.children[0].material;
    //var ps3Material = ps3Mesh.children[0].material;
    //var ps4Material = ps4Mesh.children[0].material;
    //var ps5Material = ps5Mesh.children[0].material; 

    //console.log("ps1Material", ps1Material)
//
    //ps1Material.wireframe = true;
    //ps2Material.wireframe = true;
    //ps3Material.wireframe = true;
    //ps4Material.wireframe = true;
    //ps5Material.wireframe = true;
    
    
   //console.log("Partículas Azules:", pAzules.components['particle-system'].data.size);
   //console.log("Partículas Rojas:", pRojas.components);
   //console.log("Partículas Amarillas:", pAmarillas.components);

   var pAzulesData = pAzules.components['particle-system'].data;
   var pRojasData = pRojas.components['particle-system'].data;
   var pAmarillasData = pAmarillas.components['particle-system'].data;

   console.log("Azules Data: ", pAzulesData);
   console.log("Rojas Data: ", pRojasData);
   console.log("Amarillas Data: ", pAmarillasData);

   /*

   setTimeout(function(){
    var number = 100;
   
    pAzules.setAttribute('particle-system', 'size:' + number.toString());
    console.log(pAzulesData.size);


  }, 15000);

  */
    
 

    

    //Programa
    
    //2 Acto
    currentsScene.onended = function() {

      oceanplane.parentNode.removeChild(oceanplane);

      setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 60");
      
    }, 1500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 56");
      
    }, 2000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 52");
      
    }, 3000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 48");
      
    }, 3500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 44");
      
    }, 4000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 40");
      
    }, 4500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 36");
      
    }, 5000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 32");
      
    }, 5500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 28");
    sceneBackground.setAttribute('fog', "near: 1")                           
    
      
    }, 6000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 24");
      
    }, 6500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 20");
      
    }, 7000);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 18");
      
    }, 7500);

    setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 14");
    
  }, 8000);

  setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 12");
  
  }, 8500);

  setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 8");
    
  }, 9000);

  setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 4");
    
  }, 9500);

  
  

      ascene.setAttribute('bloom', 'strength: 0');
      ascene.setAttribute('bloom', 'radius: 0');

      skyDome.setAttribute('color', '#001427');

      backLight.setAttribute('light', 'intensity: 0');



      piedraMesh.setAttribute('visible', "true");
      piedraMesh2.setAttribute('visible', "true");

      pAzules.setAttribute('particle-system', "enabled: false");
      pRojas.setAttribute('particle-system', "enabled: false");
      //pBlancas.setAttribute('particle-system', "enabled: false");
      pAmarillas.setAttribute('particle-system', "enabled: false");
      
     

      ps1.setAttribute('material', "fog:false");
      ps2.setAttribute('material', "fog:false");
      ps3.setAttribute('material', "fog:false");
      ps4.setAttribute('material', "fog:false");
      ps5.setAttribute('material', "fog:false");


  
      influenceScene.volume = 0.001;
      influenceScene.play();

      /*
      influenceSceneBateria.volume = 0.7;
      influenceSceneBateria.play();
      
      influenceSceneFXGroup.play();
      influenceSceneVocalGroup.play();
      */
      console.log("Influence scene started");

      //visibilidad Piedras

      setTimeout(function(){ pChoque1.setAttribute('body', 'type: dynamic'); pChoque1.setAttribute('visible', 'true'); }, 64000);
      setTimeout(function(){ pChoque2.setAttribute('body', 'type: dynamic'); pChoque2.setAttribute('visible', 'true'); }, 64200);
      setTimeout(function(){ pChoque3.setAttribute('body', 'type: dynamic'); pChoque3.setAttribute('visible', 'true'); }, 64400);
      setTimeout(function(){ pChoque4.setAttribute('body', 'type: dynamic'); pChoque4.setAttribute('visible', 'true'); }, 64600);
      setTimeout(function(){ pChoque5.setAttribute('body', 'type: dynamic'); pChoque5.setAttribute('visible', 'true'); }, 64800);

      setTimeout(function(){ pChoque6.setAttribute('body', 'type: dynamic'); pChoque6.setAttribute('visible', 'true'); }, 65000);
      setTimeout(function(){ pChoque7.setAttribute('body', 'type: dynamic'); pChoque7.setAttribute('visible', 'true'); }, 65200);
      setTimeout(function(){ pChoque8.setAttribute('body', 'type: dynamic'); pChoque8.setAttribute('visible', 'true'); }, 65400);
      setTimeout(function(){ pChoque9.setAttribute('body', 'type: dynamic'); pChoque9.setAttribute('visible', 'true'); }, 65600);
      setTimeout(function(){ pChoque10.setAttribute('body', 'type: dynamic'); pChoque10.setAttribute('visible', 'true'); }, 65800);

      setTimeout(function(){ pChoque11.setAttribute('body', 'type: dynamic'); pChoque11.setAttribute('visible', 'true'); }, 66000);
      setTimeout(function(){ pChoque12.setAttribute('body', 'type: dynamic'); pChoque12.setAttribute('visible', 'true'); }, 66200);
      setTimeout(function(){ pChoque13.setAttribute('body', 'type: dynamic'); pChoque13.setAttribute('visible', 'true'); }, 66400);
      setTimeout(function(){ pChoque14.setAttribute('body', 'type: dynamic'); pChoque14.setAttribute('visible', 'true'); }, 66600);
      setTimeout(function(){ pChoque15.setAttribute('body', 'type: dynamic'); pChoque15.setAttribute('visible', 'true'); }, 66800);

      setTimeout(function(){ pChoque16.setAttribute('body', 'type: dynamic'); pChoque16.setAttribute('visible', 'true'); }, 67000);
      setTimeout(function(){ pChoque17.setAttribute('body', 'type: dynamic'); pChoque17.setAttribute('visible', 'true'); }, 67200);
      setTimeout(function(){ pChoque18.setAttribute('body', 'type: dynamic'); pChoque18.setAttribute('visible', 'true'); }, 67400);
      setTimeout(function(){ pChoque19.setAttribute('body', 'type: dynamic'); pChoque19.setAttribute('visible', 'true'); }, 67600);
      setTimeout(function(){ pChoque20.setAttribute('body', 'type: dynamic'); pChoque20.setAttribute('visible', 'true'); }, 67800);

      setTimeout(function(){ pChoque20.setAttribute('body', 'type: dynamic'); pChoque20.setAttribute('visible', 'true'); }, 68000);
      setTimeout(function(){ pChoque21.setAttribute('body', 'type: dynamic'); pChoque21.setAttribute('visible', 'true'); }, 68200);
      setTimeout(function(){ pChoque22.setAttribute('body', 'type: dynamic'); pChoque22.setAttribute('visible', 'true'); }, 68400);
      setTimeout(function(){ pChoque23.setAttribute('body', 'type: dynamic'); pChoque23.setAttribute('visible', 'true'); }, 68600);
      setTimeout(function(){ pChoque24.setAttribute('body', 'type: dynamic'); pChoque24.setAttribute('visible', 'true'); }, 68800);

      setTimeout(function(){ pChoque25.setAttribute('body', 'type: dynamic'); pChoque25.setAttribute('visible', 'true'); }, 69000);
      setTimeout(function(){ pChoque26.setAttribute('body', 'type: dynamic'); pChoque26.setAttribute('visible', 'true'); }, 69200);
      setTimeout(function(){ pChoque27.setAttribute('body', 'type: dynamic'); pChoque27.setAttribute('visible', 'true'); }, 69400);
      setTimeout(function(){ pChoque28.setAttribute('body', 'type: dynamic'); pChoque28.setAttribute('visible', 'true'); }, 69600);
      setTimeout(function(){ pChoque29.setAttribute('body', 'type: dynamic'); pChoque29.setAttribute('visible', 'true'); }, 69800);

      setTimeout(function(){ pChoque30.setAttribute('body', 'type: dynamic'); pChoque30.setAttribute('visible', 'true'); }, 70000);
      setTimeout(function(){ pChoque31.setAttribute('body', 'type: dynamic'); pChoque31.setAttribute('visible', 'true'); }, 70200);
      setTimeout(function(){ pChoque32.setAttribute('body', 'type: dynamic'); pChoque32.setAttribute('visible', 'true'); }, 70400);
      setTimeout(function(){ pChoque33.setAttribute('body', 'type: dynamic'); pChoque33.setAttribute('visible', 'true'); }, 70600);
      setTimeout(function(){ pChoque34.setAttribute('body', 'type: dynamic'); pChoque34.setAttribute('visible', 'true'); }, 70800);

      setTimeout(function(){ pChoque35.setAttribute('body', 'type: dynamic'); pChoque35.setAttribute('visible', 'true'); }, 71000);
      setTimeout(function(){ pChoque36.setAttribute('body', 'type: dynamic'); pChoque36.setAttribute('visible', 'true'); }, 71200);
      setTimeout(function(){ pChoque37.setAttribute('body', 'type: dynamic'); pChoque37.setAttribute('visible', 'true'); }, 71400);
     

     
    //3 Acto 129000 ms

      influenceScene.onended = function() {

        console.log("Collision scene started");

        ambientLight.setAttribute("light","color: #0d100f; intensity: 6");
        ascene.setAttribute('godrays', "intensity: 0.45");

        ascene.setAttribute('bloom', 'strength: 0.5');
        ascene.setAttribute('bloom', 'radius: 0.5');


        backLight.setAttribute('light', 'intensity: 1.5');

        pAzules.setAttribute('particle-system', "enabled: true");
        pRojas.setAttribute('particle-system', "enabled: true");
        pAmarillas.setAttribute('particle-system', "enabled: true");



        pAzules.setAttribute('particle-system', "color: #c2f1f2");
        pRojas.setAttribute('particle-system', "color: #c2f1f2");
        pAmarillas.setAttribute('particle-system', "color: #c2f1f2");

      

        pAzules.setAttribute('particle-system', "size: 0.9");
        pRojas.setAttribute('particle-system', "size: 0.9");
        pAmarillas.setAttribute('particle-system', "size: 0.9");




        manoModel.parentNode.removeChild(manoModel);
        columnaModel.parentNode.removeChild(columnaModel);
        puntaModel.parentNode.removeChild(puntaModel);
        monolitoModel.parentNode.removeChild(monolitoModel);
        neandertalModel.parentNode.removeChild(neandertalModel);

        skyConstellation.setAttribute('visible', 'true');
        hydraCube1.setAttribute('visible', 'true');
        hydraCube2.setAttribute('visible', 'true');
        hydraCube3.setAttribute('visible', 'true');

       
        
        constRocks.parentNode.removeChild(constRocks);
        constRocks2.setAttribute('visible', 'true');

        //circuloCursor.setAttribute('visible', "false");

        

        setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 4");
      
      }, 1500);
  
      setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 8");
        
      }, 2000);
  
      setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 12");
        
      }, 3000);
  
      setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 16");
        
      }, 3500);
  
      setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 20");
        
      }, 4000);
  
      setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 24");
        
      }, 4500);
  
      setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 28");
        
      }, 5000);
  
      setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 200");
        
      }, 5500);


      setTimeout(function(){ 

        var corriente2 = document.getElementById("corrienteModel2");
            corriente2.parentNode.removeChild(corriente2);

            var corriente = document.getElementById("corrienteModel");
            corriente.parentNode.removeChild(corriente);

            
            piedraMesh.parentNode.removeChild(piedraMesh);
            piedraMesh2.parentNode.removeChild(piedraMesh2);
            piedraMeshAsset.remove();

        
    }, 3000);

    
    
            


            constRocks.setAttribute('visible', "true");
            pAvatar.setAttribute('visible', "true");

           
           collisionScene.volume = 0.001;
           collisionScene.play();

           
           
           
           


           setTimeout(function(){ 
           pChoque1.setAttribute('body', 'type: static'); pChoque1.parentNode.removeChild(pChoque1);
           pChoque35.setAttribute('body', 'type: static'); pChoque35.parentNode.removeChild(pChoque35)
           pChoque36.setAttribute('body', 'type: static'); pChoque36.parentNode.removeChild(pChoque36);
           pChoque37.setAttribute('body', 'type: static'); pChoque37.parentNode.removeChild(pChoque37);        
          }, 67000);

           setTimeout(function(){ 
           pChoque2.setAttribute('body', 'type: static'); pChoque2.parentNode.removeChild(pChoque2);
           pChoque3.setAttribute('body', 'type: static'); pChoque3.parentNode.removeChild(pChoque3);
           pChoque4.setAttribute('body', 'type: static'); pChoque4.parentNode.removeChild(pChoque4);
           pChoque5.setAttribute('body', 'type: static'); pChoque5.parentNode.removeChild(pChoque5); }, 67200);
           
     
           setTimeout(function(){ 
           pChoque6.setAttribute('body', 'type: static');  pChoque6.parentNode.removeChild(pChoque6);
           pChoque30.setAttribute('body', 'type: static'); pChoque30.parentNode.removeChild(pChoque30);;
           pChoque31.setAttribute('body', 'type: static'); pChoque31.parentNode.removeChild(pChoque31);;
           pChoque32.setAttribute('body', 'type: static'); pChoque32.parentNode.removeChild(pChoque32);;
           pChoque33.setAttribute('body', 'type: static'); pChoque33.parentNode.removeChild(pChoque33);;
           pChoque34.setAttribute('body', 'type: static'); pChoque34.parentNode.removeChild(pChoque34);;
          
          }, 67500);


           setTimeout(function(){
           pChoque7.setAttribute('body', 'type: static');  pChoque7.parentNode.removeChild(pChoque7);
           pChoque8.setAttribute('body', 'type: static');  pChoque8.parentNode.removeChild(pChoque8);
           pChoque9.setAttribute('body', 'type: static');  pChoque9.parentNode.removeChild(pChoque9);
           pChoque10.setAttribute('body', 'type: static'); pChoque10.parentNode.removeChild(pChoque10);}, 67700);

                               

     
           setTimeout(function(){
           pChoque11.setAttribute('body', 'type: static'); pChoque11.parentNode.removeChild(pChoque11);
           pChoque25.setAttribute('body', 'type: static'); pChoque25.parentNode.removeChild(pChoque25);
           pChoque26.setAttribute('body', 'type: static'); pChoque26.parentNode.removeChild(pChoque26);
           pChoque27.setAttribute('body', 'type: static'); pChoque27.parentNode.removeChild(pChoque27);
           pChoque28.setAttribute('body', 'type: static'); pChoque28.parentNode.removeChild(pChoque28);
           pChoque29.setAttribute('body', 'type: static'); pChoque29.parentNode.removeChild(pChoque29);
          
          }, 68000);

           setTimeout(function(){ 
           pChoque12.setAttribute('body', 'type: static'); pChoque12.parentNode.removeChild(pChoque12);;
           pChoque13.setAttribute('body', 'type: static'); pChoque13.parentNode.removeChild(pChoque13);;
           pChoque14.setAttribute('body', 'type: static'); pChoque14.parentNode.removeChild(pChoque14);;
           pChoque15.setAttribute('body', 'type: static'); pChoque15.parentNode.removeChild(pChoque15);; }, 68200);

     


                     /*

           setTimeout(function(){  }, 119400);
           setTimeout(function(){  }, 119600);
           setTimeout(function(){  }, 119800);
           
           setTimeout(function(){  }, 121400);
           setTimeout(function(){  }, 121600);
           setTimeout(function(){  }, 121800);
     
           setTimeout(function(){  }, 123000);
           setTimeout(function(){  }, 123200);
           setTimeout(function(){  }, 123400);
           setTimeout(function(){  }, 123600);
           setTimeout(function(){  }, 123800);
     
           setTimeout(function(){  }, 124000);
           setTimeout(function(){  }, 124200);
           setTimeout(function(){  }, 124400);
           setTimeout(function(){  }, 124600);
           setTimeout(function(){  }, 124800);

           setTimeout(function(){ }, 120400);
           setTimeout(function(){ }, 120600);
           setTimeout(function(){ ; }, 120800);

           setTimeout(function(){  }, 122200);
           setTimeout(function(){  }, 122400);
           setTimeout(function(){  }, 122600);
     
           setTimeout(function(){  }, 125000);
           setTimeout(function(){  }, 125200);
           setTimeout(function(){  }, 125400);
           setTimeout(function(){  } , 125600);
           setTimeout(function(){   }, 125800);
     
           setTimeout(function(){  }, 126000);
           setTimeout(function(){  }, 126200);
           setTimeout(function(){  }, 126400);

           setTimeout(function(){  }, 127000);

           */







           /*

           setTimeout(function(){  }, 89000);
           setTimeout(function(){  }, 90000);
           setTimeout(function(){  }, 91000);
           setTimeout(function(){  }, 92000);
           setTimeout(function(){  }, 93000);
     
           setTimeout(function(){ }, 94000);
           setTimeout(function(){ }, 95000);
           setTimeout(function(){  96000);
           setTimeout(function(){  97000);
           setTimeout(function(){ }, 98000);


                                                                           setTimeout(function(){ }, 99000);
           setTimeout(function(){ }, 100000);
           setTimeout(function(){ }, 101000);
           setTimeout(function(){ }, 102000);
           setTimeout(function(){ }, 103000);
     
           setTimeout(function(){ }, 104000);
           setTimeout(function(){ }, 105000);
           setTimeout(function(){ }, 106000);
           setTimeout(function(){ }, 107000);
           setTimeout(function(){ }, 108000);
                                 
           setTimeout(function(){}, 109000);
           setTimeout(function(){}, 110000);
           setTimeout(function(){}, 111000);
           setTimeout(function(){}, 112000);
           setTimeout(function(){}, 113000);
                                 ; 
           setTimeout(function(){;}, 114000);
           setTimeout(function(){;
                                 ;
                                 ;
                                
                                }, 115000);

           setTimeout(function(){
                               }, 116000);

           setTimeout(function(){
                                 rigP1Poly3.setAttribute('visible', 'true');}, 117000);

           setTimeout(function(){}, 118000);
                                 
           setTimeout(function(){
                                 
                                 
                                 

                                  }, 119000);
           setTimeout(function(){

                                 ascene.setAttribute("godrays","tint: #bfd9f3") }, 120000);

           setTimeout(function(){
            
                                  ascene.setAttribute("fog","color: #000000")
                                  ascene.setAttribute("background","color: #000000");}, 121000);
           setTimeout(function(){
                                
                                 sceneBackground.setAttribute('fog', "far: 52");
                                                                             }, 122000);

           setTimeout(function(){;
                                 skydome.setAttribute("color","#000000");
                                 ambientLight.setAttribute("light","color: #0d100f; intensity: 6");
                                                                            }, 123000);
                                            setTimeout(function(){ }, 124000);
           setTimeout(function(){
                                 rigP2Poly.setAttribute('visible', 'true');
          }, 125000);

           setTimeout(()=>{
            sceneBackground.setAttribute('fog', "far: 40");

            rigP1Poly.setAttribute('visible', 'true'); 
          
            rigPiramide.setAttribute('visible', 'true');
            },126000)

            setTimeout(()=>{
                          
            pAzules.setAttribute('particle-system', "size: 0.9");
            pRojas.setAttribute('particle-system', "size: 0.7");
            pAmarillas.setAttribute('particle-system', "size: 0.8");
            pBlancas.setAttribute('particle-system', "size: 0.7");
                    
                    
            pAzules.setAttribute('particle-system', "particleCount: 5000");
            pRojas.setAttribute('particle-system', "particleCount: 5000");
            pAmarillas.setAttribute('particle-system', "particleCount: 5000");
            pBlancas.setAttribute('particle-system', "particleCount: 6000")
 
              },126500)

              */
          
            
    //4 Acto 129000 ms
            collisionScene.onended = function() {
            
            console.log("Atom scene started");

            pAvatar.removeAttribute("animation-mixer")


            ascene.setAttribute("fog","color: #000000");
            ascene.setAttribute("background","color: #000000");
            skydome.setAttribute("color","#000000");
            ambientLight.setAttribute("light","color: #0d100f; intensity: 6");
            ascene.setAttribute('godrays', "intensity: 0.05");


            hydraCube1.setAttribute('visible', 'false');
            hydraCube2.setAttribute('visible', 'false');
            hydraCube3.setAttribute('visible', 'false');

            ascene.setAttribute('bloom', 'strength: 0.8');
            ascene.setAttribute('bloom', 'radius: 0.5');


            setTimeout(function(){
            pChoque16.setAttribute('body', 'type: static'); pChoque16.parentNode.removeChild(pChoque16);
            pChoque17.setAttribute('body', 'type: static'); pChoque17.parentNode.removeChild(pChoque17);
            pChoque18.setAttribute('body', 'type: static'); pChoque18.parentNode.removeChild(pChoque18);
            pChoque19.setAttribute('body', 'type: static'); pChoque19.parentNode.removeChild(pChoque19);
            }, 200);
 
 
 
            setTimeout(function(){ 
                                   pChoque20.setAttribute('body', 'type: static'); pChoque20.parentNode.removeChild(pChoque20);
                                   pChoque21.setAttribute('body', 'type: static'); pChoque21.parentNode.removeChild(pChoque21);
                                   pChoque22.setAttribute('body', 'type: static'); pChoque22.parentNode.removeChild(pChoque22);
                                   pChoque23.setAttribute('body', 'type: static'); pChoque23.parentNode.removeChild(pChoque23);
                                   pChoque24.setAttribute('body', 'type: static'); pChoque24.parentNode.removeChild(pChoque24);
           
           
           }, 600);


            cameraTeleport = camera.sceneEl.camera;
            cameraPosition = cameraTeleport.position;
            cameraRotation = cameraTeleport.rotation;


            console.log("Teleport origin")
            console.log("cameraTeleport", cameraTeleport)
            console.log("cameraPosition", cameraPosition)
            console.log("cameraRotation", cameraRotation)

            const originP = new THREE.Vector3(-2.3,1,-3);
            const originR = new THREE.Vector3(0,0,0);
            
            const jumpP1 = new THREE.Vector3(27.40919256330151,23.568556576929797,20.31871407639155);
            const jumpP2 = new THREE.Vector3(22.456679369313,15.577884009660837,8.847246364359284);
            const jumpP3 = new THREE.Vector3(-3.83813303484466, 13.685611085202602,-31.083502370407555);
        
            const jumpR1 = new THREE.Vector3(-10.65701498943331,27.387382607253386,0);
            const jumpR2 = new THREE.Vector3(47.55549699585835,-14.78231111437524,0);
            const jumpR3 = new THREE.Vector3(36.32552421129419,281.78064364533884,0);
            const jumpR4 = new THREE.Vector3(45.378257374361205, 5.614986392282063,0);

            atomScene.volume = 0.001;
            atomScene.play();

            setTimeout(()=>{
              

            sceneBackground.setAttribute('fog', "far: 36");
            }, 500)

            setTimeout(()=>{

            sceneBackground.setAttribute('fog', "far: 40");
            
            }, 1000)

            setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 44");

            }, 1500);


            setTimeout(function(){ sceneBackground.setAttribute('fog', "far: 48");
            pAzules.setAttribute('particle-system', "size: 0.9");
            pRojas.setAttribute('particle-system', "size: 0.7");
            pAmarillas.setAttribute('particle-system', "size: 0.8");
            pBlancas.setAttribute('particle-system', "size: 0.7");
                    
                    
            pAzules.setAttribute('particle-system', "particleCount: 5000");
            pRojas.setAttribute('particle-system', "particleCount: 5000");
            pAmarillas.setAttribute('particle-system', "particleCount: 5000");
            pBlancas.setAttribute('particle-system', "particleCount: 6000")
            

            }, 2000);


            //circuloCursor.setAttribute('visible', 'true');


            camera.setAttribute('look-controls','enabled:false');

            atom.setAttribute('visible', "true");
            atom.setAttribute('animation', "property: rotation; from: 0 0 0; to: 0 360 0; dur: 300000; easing: linear; loop: true;");
           
            pAvatar.setAttribute("animation","property: rotation; easing: easeInOutSine; to: 180 360 30; dur: 3500");
    
            camera.setAttribute("animation","property: position; dir: alternate; easing: easeInOutSine; from: 0 0 0; to: 0 0 -100; dur:4000");

            pAvatar.setAttribute('animation__2', "property: scale; dir: alternate; easing: easeInOutSine; from: 11 11 11; to: 60 60 60; dur:4000");

            /*
    
            const scaleRock = (i)=>{
    
              setTimeout(()=>{
            
                pAvatar.setAttribute('scale', `${(11 + (i * 0.04))} ${(11 + (i * 0.04))} ${(11 + (i * 0.04))}`);
                  
                }, 4 * (i + 1))
            
            };
      
    
      
            
            for(let i = 0; i <= 1700; i++){
      
              scaleRock(i);
            
            
            }
      
            */

    
            camera.addEventListener("animationcomplete", (animation)=>{
              
              cameraPosition.x = -2.3;
              cameraPosition.y = 1;
              cameraPosition.z = -3;
  
              cameraRotation.x = 0;
              cameraRotation.y = 0;
              cameraRotation.z = 0;


              pAvatar.parentNode.removeChild(pAvatar);
              constRocks2.parentNode.removeChild(constRocks2);



    
              skyConstellation.parentNode.removeChild(skyConstellation);

              rigP1Poly.setAttribute('visible', 'true')
              rigP1Poly2.setAttribute('visible', 'true');
              rigP1Poly3.setAttribute('visible', 'true');
  
              
              rigP2Poly.setAttribute('visible', 'true')
              rigP2Poly2.setAttribute('visible', 'true')
  
              rigPiramide.setAttribute('visible', 'true');

              


                console.log("Boom Teleport Jump 1")
                look = jumpR1;
                cameraTeleport.lookAt(look);
        
                cameraPosition = jumpP1;
        
                console.log("cameraTeleport", cameraTeleport)
                console.log("cameraPosition", cameraPosition)
                console.log("cameraRotation", cameraRotation)
                

        
          
          
              setTimeout(()=>{
                console.log("Boom Teleport Jump 2")
                look = jumpR2;
                cameraTeleport.lookAt(look);
                cameraPosition = jumpP2;
        
                console.log("cameraTeleport", cameraTeleport)
                console.log("cameraPosition", cameraPosition)
                console.log("cameraRotation", cameraRotation)
          
                
          
              }, 1000)
          
              
              setTimeout(()=>{
                console.log("Boom Teleport Jump 3")
                look = jumpR3;
                cameraTeleport.lookAt(look);
                cameraPosition = jumpP3;
        
                console.log("cameraTeleport", cameraTeleport)
                console.log("cameraPosition", cameraPosition)
                console.log("cameraRotation", cameraRotation)
          
                
          
              }, 2000)
        
            
              
              setTimeout(()=>{
                console.log("Boom Teleport Jump 4")
                look = jumpR4;
                cameraTeleport.lookAt(look);
                cameraPosition = originP;
        
                console.log("cameraTeleport", cameraTeleport)
                console.log("cameraPosition", cameraPosition)
                console.log("cameraRotation", cameraRotation)
          
                
          
              }, 3000)
        
        
              setTimeout(()=>{
                console.log("Reset");
        
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
          
                
          
              }, 4000)
    
    
            })  
 
         
                /*
                atomSceneBateria.volume = 0.7;
                atomSceneBateria.play();

                atomSceneFXGroup.play();
                atomSceneVocalGroup.play();
                */
                
                
                //sceneBackground.setAttribute('background', "color: #537167");
                //em1.setAttribute('particle-system', "color: #000000");
                //em2.setAttribute('particle-system', "color: #000000");
                //em3.setAttribute('particle-system', "color: #000000");

    //5 Acto
                atomScene.onended = function() {

                  //camera.setAttribute('look-controls','enabled:false');

                  cameraPosition.x = 0;
                  cameraPosition.y = 0;
                  cameraPosition.z = -100;
            
                  cameraRotation.x = 0;
                  cameraRotation.y = 0;
                  cameraRotation.z = 0;

                  zoomScene.volume = 0.001;
                  zoomScene.play();

                  rigP1Poly.parentNode.removeChild(rigP1Poly);
                  rigP1Poly2.parentNode.removeChild(rigP1Poly2);
                  rigP1Poly3.parentNode.removeChild(rigP1Poly3);
            
            
                  rigP2Poly.parentNode.removeChild(rigP2Poly);
                  rigP2Poly2.parentNode.removeChild(rigP2Poly2);
            
                  rigPiramide.parentNode.removeChild(rigPiramide);
            
                  atom.parentNode.removeChild(atom);
            
                  ascene.setAttribute("fog","color: #006bad")
                  ascene.setAttribute("background","color: #0c1214")
                  ascene.setAttribute("godrays","tint: #bfd9f3")

                  ascene.setAttribute('fog', "far: 300;");
            
                  skydome.setAttribute("color","#00417d");
                  ambientLight.setAttribute("light","color: #1b8ed5; intensity: 2");
                  
                  ascene.setAttribute('godrays', "intensity: 0.4");

                  ascene.setAttribute('bloom', 'strength: 0.8');
                  ascene.setAttribute('bloom', 'radius: 0.5');

                  camera.setAttribute("animation","property: position; easing: easeInOutSine; from: 0 0 -120; to: 0 0 280; dur:5000");

                  camera.addEventListener("animationcomplete", ()=>{
      
                    console.log("Animación 2")
              
                      camera.setAttribute("animation__2","property: position; easing: easeInOutSine; from: 0 0 0; to: 0 0 280; dur:10000;");
                      hydraSphereModel.setAttribute('visible', "false"); 

                      camera.addEventListener("animationcomplete", ()=>{

                  
                        corrienteModelZoom.setAttribute('visible', "false");
                        corrienteModelZoom2.setAttribute('visible', "false");
                        corrienteModelZoom3.setAttribute('visible', "false");
                        corrienteModelZoom4.setAttribute('visible', "false");
              
                        constRocksModelA.setAttribute('visible', "false");
                        constRocksModelB.setAttribute('visible', "false"); 
                        constRocksModelC.setAttribute('visible', "false"); 
                        constRocksModelD.setAttribute('visible', "false"); 
              

              
                        piedraZoom.setAttribute('visible', 'true');
                        piedraZoom.setAttribute("animation","property: scale;from: 1000 1000 1000; to: 11 11 11; dur: 4000; easing: linear");
                        piedraZoom.setAttribute("animation__2","property: position; from: -0.1 13 283; to: -0.1 -0.1 270 ; dur: 4000; easing: linear");
                        piedraZoom.setAttribute("animation__3","property: rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 4000; easing: linear");
              
              
              
                      });
              
                    });


                  corrienteModelZoom.setAttribute('visible', "true");
                  corrienteModelZoom2.setAttribute('visible', "true");
                  corrienteModelZoom3.setAttribute('visible', "true");
                  corrienteModelZoom4.setAttribute('visible', "true");

                  constRocksModelA.setAttribute('visible', "true");
                  constRocksModelB.setAttribute('visible', "true"); 
                  constRocksModelC.setAttribute('visible', "true"); 
                  constRocksModelD.setAttribute('visible', "true"); 

                  hydraSphereModel.setAttribute('visible', "true"); 


                  
            
                  

                  
                  
                  /*

                  zoomSceneBateria.volume = 0.7;
                  zoomSceneBateria.play();

                  zoomSceneFXGroup.play();
                  zoomSceneVocalGroup.play();
                  */
                  console.log("Zoom scene started");
                  
                  //sceneBackground.setAttribute('background', "color: #758e85");
                  //em1.setAttribute('particle-system', "color: #000000");
                  //em2.setAttribute('particle-system', "color: #000000");
                  //em3.setAttribute('particle-system', "color: #000000");
                  
    //6 Acto
                  zoomScene.onended = function() {
      
                    console.log("Erosions has ended");
                    
              
              
            }}}}

            

      }
     

    })

 
    
    },

    tock: function(){
      //document.querySelector('a-scene').addEventListener('loaded', function () {});
  
      
      var currentsScene = document.getElementById('currentAudio');
      var influenceScene = document.getElementById('influenceAudio');
      
      var collisionScene = document.getElementById('collisionAudio');
   
      var atomScene = document.getElementById('atomAudio');
    
      var zoomScene = document.getElementById('zoomAudio');
   

     /* 
     
      if (currentsScene.paused == false || influenceScene.paused == false || collisionScene.paused == false || atomScene.paused == false || zoomScene.paused == false){
      var delta = performance.now();
  
      var timer = document.getElementById("timer");
      var minuto = 0;

    
  
      timer.innerHTML = "0" + minuto + ":" + Math.round(delta / 1000);
  
      if(delta >= 59500){
  
        minuto = minuto + 1;
        timer.innerHTML = "0" + minuto + ":" + Math.round((delta - 59500) / 1000);}
  
        if (delta >= 119500){
          minuto = minuto + 1;
          timer.innerHTML = "0" + minuto + ":" + Math.round((delta - 119500) / 1000);
  
        }
  
        if (delta >= 179500){
          minuto = minuto + 1;
          timer.innerHTML = "0" + minuto + ":" + Math.round((delta - 179500) / 1000);
  
        }
  
        if (delta >= 239500){
          minuto = minuto + 1;
          timer.innerHTML = "0" + minuto + ":" + Math.round((delta - 239500) / 1000);
  
        }
  
        if (delta >= 299500){
          minuto = minuto + 1;
          timer.innerHTML = "0" + minuto + ":" + Math.round((delta - 299500) / 1000);
  
        }
  
        if (delta >= 359500){
          minuto = minuto + 1;
          timer.innerHTML = "0" + minuto + ":" + Math.round((delta - 359500) / 1000);
  
        }
  
      }

      //Aquí cierra

      */

    
    }
 


   
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

      //var circuloCursor = document.getElementById("//circuloCursor");
     

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
     //circuloCursor.setAttribute('visible', "false");

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
      //circuloCursor.setAttribute('visible', "true");

     
 

      materialPiedra.color.setRGB(1,1,1);
    
   


    })

    

    el.addEventListener('click', (evt) => {
    /*
    var clickBlanco = document.getElementById("clickPiedra1");
    clickBlanco.style.visibility = 'visible';

    

    setTimeout(function(){ clickBlanco.remove();
    
    var clickNegro = document.getElementById("clickPiedra2");
    clickNegro.style.visibility = 'visible';

    setTimeout(function(){ clickNegro.remove(); }, 1000);
    
    }, 1000);
    */
    


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
      

      /*
      var clickBlanco = document.getElementById("clickPiedra1");
      clickBlanco.style.visibility = 'visible';
  
      
  
      setTimeout(function(){ clickBlanco.remove();
      
      var clickNegro = document.getElementById("clickPiedra2");
      clickNegro.style.visibility = 'visible';
  
      setTimeout(function(){ clickNegro.remove(); }, 1000);
      
      }, 1000);
      
  
  */
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
     ////circuloCursor.setAttribute('visible', "false");


   

    });

    el.addEventListener('mouseleave', () => {


      trianguloCursor.setAttribute('visible', "false");
      ////circuloCursor.setAttribute('visible', "true");

     
 

    
    
   


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
        //circuloCursor.setAttribute('visible', "false");
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
        //circuloCursor.setAttribute('visible', "false");
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
      //circuloCursor.setAttribute('visible', "false");
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
        //circuloCursor.setAttribute('visible', "false");
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
        //circuloCursor.setAttribute('visible', "false");
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
    //circuloCursor.setAttribute('visible', "false");

  })

  el.addEventListener('mouseleave', () => {

    trianguloCursor2.setAttribute('visible', "false");
    //circuloCursor.setAttribute('visible', "true");


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

    //circuloCursor.setAttribute('visible', "true");
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
            colorM.material = mat2;
            //console.log("Si es verde", el.id, colorM.material.color);
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
    const look = this.data.look;
    const lookAt = look.getAttribute('position');
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
        /*
        const cameraPosition = this.el.sceneEl.camera.el.getAttribute('position');
        const cameraRotation = this.el.sceneEl.camera.el.getAttribute('rotation');

        const rigPosition = rigCamera.getAttribute('position');
        const rigRotation = rigCamera.getAttribute('rotation');

        console.log("Cam position", cameraPosition);
        console.log("Cam rotation", cameraRotation);

        */

      



  }
  
});

