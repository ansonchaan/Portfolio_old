
var cube = function(){
	var mx = my = 0;
	var elem = document.getElementById('home');
	var width = window.innerWidth;
	var height = window.innerHeight;
	var cubeNum = 300;
	var cube = [];
	var areaX = 15000;
	var areaY = 5000;
	var areaZ = 5000;
	var thetextOne = 'Hello There !';
	var thetextTwo = "I'M ANSON CHAN";
	
	// render
	var render = new THREE.WebGLRenderer({antialias: true});
		render.setSize( width, height );
		elem.appendChild(render.domElement);
	
	// camera
	var camera = new THREE.PerspectiveCamera(45, width/height, 1, 20000);
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = 3000;
	
	// scene
	var scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2( 0x212121, .0004);
	
	// material
	var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00880000 });
	
	// Add cube
	for(var i=0; i<cubeNum; i++)
	{
		cube[i] = new cubes();
		cube[i].init();
		cube[i].mesh = new THREE.Mesh( new THREE.CubeGeometry(cube[i].size,cube[i].size,cube[i].size), cubeMaterial);
		cube[i].mesh.position.x = cube[i].x;
		cube[i].mesh.position.y = cube[i].y;
		cube[i].mesh.position.z = cube[i].z;
		//add cube
		scene.add(cube[i].mesh);
	}
	
	var textOne = new THREE.TextGeometry( thetextOne, {
		size: 150,
		height: 20,
		curveSegments: 4,
		
		font: "roboto",
		weight: 'bold',
		style: 'normal',
		
		//bevelThickness: 0,
		//bevelSize: 0,
		//bevelEnabled: false,
	});
	var textTwo = new THREE.TextGeometry( thetextTwo, {
		size: 150,
		height: 20,
		curveSegments: 4,
		
		font: "roboto",
		weight: 'bold',
		style: 'normal',
		
		//bevelThickness: 0,
		//bevelSize: 0,
		//bevelEnabled: false,
	});
	var textMaterialOne = new THREE.MeshLambertMaterial ({ color: 0xffffff , transparent:true , opacity:0 });
	var textMaterialTwo = new THREE.MeshLambertMaterial ({ color: 0xffffff , transparent:true , opacity:0 });
	var textO = new THREE.Mesh(textOne, textMaterialOne); 
	var textT = new THREE.Mesh(textTwo, textMaterialTwo);
	
	textO.position.x = -600;
	textO.position.y = 300;
	textO.position.z = 500;
	
	textT.position.x = -820;
	textT.position.y = -300;
	textT.position.z = 1000;
	
	
	scene.add(textO);
	scene.add(textT);
	
	
	
	
	/*var wireMaterial = new THREE.MeshLambertMaterial({
	color: 0xffffff,
		wireframe: true
	});
	
	var bigCube = new THREE.Mesh( new THREE.CubeGeometry( areaX , areaY , areaZ ), wireMaterial);
	//console.log(width)
	scene.add(bigCube);*/
	
	
	
	// add subtle blue ambient lighting
	var ambientLight = new THREE.AmbientLight(0x00252525);
	scene.add(ambientLight);
	  
	// directional lighting
	var directionalLight = new THREE.DirectionalLight(0x00ffffff);
	directionalLight.position.set(0, -areaY*2, areaZ).normalize();
	scene.add(directionalLight);
	
	var directionalLightTwo = new THREE.DirectionalLight(0x00ffffff);
	directionalLightTwo.position.set(0, areaY*2, areaZ).normalize();
	scene.add(directionalLightTwo);
	
	var directionalLightThree = new THREE.DirectionalLight(0x00ffffff);
	directionalLightThree.position.set(areaX, 0, areaZ).normalize();
	scene.add(directionalLightThree);
	
	var directionalLightFour = new THREE.DirectionalLight(0x00ffffff);
	directionalLightFour.position.set(-areaX, 0, areaZ).normalize();
	scene.add(directionalLightFour);
	
	
	function cubes ()
	{
		this.mesh = null;
		
		this.init = function()
		{
			this.size = Math.random() * 100 + 50;
			this.x = (Math.random() * areaX) - (areaX/2);
			this.y = (Math.random() * areaY) + (areaY/2);
			this.z = (Math.random() * areaZ) - (areaZ/2);
			this.fallSpeed = (Math.random() * 6) + 3;
			this.rotateXspeed = Math.random() * .01 + .005;
			this.rotateYspeed = Math.random() * .01 + .005;
		}
	}
	
	var wait =0;
	function animate ()
	{			
		var time = new Date().getTime();
		
		for(var i=0; i<cubeNum ; i++){
			
			if(cube[i].mesh.position.y < -areaY){
				cube[i].init();
				cube[i].mesh.position.x = cube[i].x;
				cube[i].mesh.position.y = cube[i].y;
				cube[i].mesh.position.z = cube[i].z;
			}
			cube[i].mesh.position.y -= cube[i].fallSpeed;
			cube[i].mesh.rotation.x -= cube[i].rotateXspeed;
			cube[i].mesh.rotation.y -= cube[i].rotateYspeed;
		}
		
		camera.position.x += ( mx - camera.position.x ) * .1;
		camera.position.y += ( -my - camera.position.y ) * .1;

		
		if(wait > 10){
			textO.position.y += ( 100 - textO.position.y) * .07;			
			textO.material.opacity += ( 1 - textO.material.opacity) * .07;

			textT.position.y += ( -200 - textT.position.y) * .07;
			textT.material.opacity += ( 1 - textT.material.opacity) * .07;
		}
		else wait++;

		camera.lookAt(scene.position);
		render.render(scene, camera);
		
		requestAnimationFrame(function(){animate()});
	}
	
	function onMouseMove (event)
	{
		event.preventDefault();
		
		mx = event.clientX - (width/2);
		my = event.clientY - (height/2);
	}
	
	function onResize (){
		width = window.innerWidth;
		height = window.innerHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		render.setSize( width, height );
	}
	
	window.addEventListener('resize', onResize , false);
	document.addEventListener('mousemove', onMouseMove , false);

	animate();
}