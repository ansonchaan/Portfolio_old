/* 	
//
//
//			        _______
//			       /      ||
//			      /       ||
//			     /    __  ||
//			    /    //    
//			   /    //__   
//			  /           ||
//			 /    ____    ||
//			/____//   ____||
//		   
//
//         AnsonChan   @Sans
//		   
//
//   
*/
var ismobile = /(iPhone|iPod|iPad|Android|BlackBerry)/g.test( navigator.userAgent ) && $(window).width() <= 1024;
var ismobile_CH = navigator.userAgent.match('CriOS');
var isIPad = navigator.userAgent.match(/iPad/i) != null;
var isIOS = navigator.userAgent.match( /iPad/i ) || navigator.userAgent.match( /iPhone/i ) || navigator.userAgent.match( /iPod/i );
var isAndroid = navigator.userAgent.match( /Android/i );







//
//
//		Async loading
//
//
function loadScript(src, callback)
{
	var s,
		r,
		t;
		r = false;
	s = document.createElement('script');
	s.type = 'text/javascript';
	s.src = src;
	s.onload = s.onreadystatechange = function() {
		//console.log( this.readyState ); //uncomment this line to see which ready states are called.
		if ( !r && (!this.readyState || this.readyState == 'complete') )
		{
			r = true;
			callback();
		}
	};
	t = document.getElementsByTagName('script')[0];
	t.parentNode.insertBefore(s, t);
}




//
//
//		Random
//
//
var random = function( min , max , isRound ){
	var ran = (Math.random() * (max - min)) + min;
	if(isRound)
		return Math.round(ran);
	else
		return ran;
}





//
//
//		Add, Remove and Has Class
//
//
var hasClass = function(el, className) {
	if (el.classList)
		return el.classList.contains(className)
	else
		return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

var  addClass = function(el, className) {
	if (el.classList)
		el.classList.add(className)
	else if (!hasClass(el, className)) el.className += " " + className
}

var removeClass = function(el, className) {
	if (el.classList)
		el.classList.remove(className)
	else if (hasClass(el, className)) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
		el.className=el.className.replace(reg, ' ')
	}
}





//
//
//		Check Browser
//
//
var isBrowser = function( b ) {
	
	var rs;
	switch( b ) {
		case 'ie':
			rs = document.all && !window.atob;
			break;
		case 'ie8':
			rs = document.all && !document.addEventListener;
			break;
		case 'ie9':
			rs = document.all && document.addEventListener && !window.atob;
			break;
		case 'ie10':
			rs = eval("/*@cc_on!@*/false") && document.documentMode === 10;
			break;
		case 'ie11':
			rs = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
			break;
		case 'firefox':
			rs = 'MozAppearance' in document.documentElement.style;
			break;
		case 'safari':
			rs = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
			break;
	}
	
	return rs;
}










//
//
//		Resize Image or Video
//
//
var resize = function(e){
	
	ismobile = /(iPhone|iPod|iPad|Android|BlackBerry)/g.test( navigator.userAgent ) && $(window).width() <= 1024;
		
	// var bg_img = document.querySelectorAll( '.bg_img' );
	// if(bg_img.length){
	// 	var bg_length = bg_img.length;
		
	// 	for( var i=0 ; i<bg_length ; i++ ){
			
	// 		var parent = bg_img[i].parentNode;
			
	// 		if( bg_img[i].offsetWidth <= parent.offsetWidth ){
	// 			bg_img[i].style.width = '100%';
	// 			bg_img[i].style.height = 'auto';
	// 		}
			
	// 		if( bg_img[i].offsetHeight <= parent.offsetHeight ){
	// 			bg_img[i].style.width = 'auto';
	// 			bg_img[i].style.height = '100%';
	// 		}
			
	// 		if( bg_img[i].started == null || typeof(bg_img[i].started) == 'undefined' ){
	// 			bg_img[i].started = true;
	// 			bg_img[i].style.opacity = 1;
	// 		}
	// 	}
	// }
	
	// var videojs = document.querySelectorAll( 'iframe' );
	// if(videojs.length){
	// 	var w = Math.round( window.innerHeight * 16 / 9 );
	// 	var wh = Math.round( w * 9 / 16 );
	// 	var h = Math.round( window.innerWidth * 9 / 16 );
	// 	var hw = Math.round( h * 16 / 9 );
		
	// 	if( videojs ){
			
	// 		var video_lth = videojs.length;
			
	// 		if( w <= window.innerWidth ){
	// 			var width = hw;
	// 			var height = h;
	// 		}
			
	// 		if( h <= window.innerHeight ){
	// 			var width = w;
	// 			var height = wh;
	// 		}
			
	// 		for( var i=0 ; i<video_lth ; i++ ){
	// 			videojs[i].style.width = width;
	// 			videojs[i].style.height = height;
	// 		}
	// 	}
	// }
}




//
//
//		Add Event Function
//
//
var addEvent = function( obj , type , callback ) {
	
    if (obj == null || typeof(obj) == 'undefined') return;

    if (obj.addEventListener)
        obj.addEventListener(type, callback, false);
    else if (obj.attachEvent)
        obj.attachEvent("on" + type, callback);
    else 
        obj["on"+type] = callback;
    
}
//
//
//		Remove Event Function
//
//
var removeEvent = function( obj , type , func ){
    if(obj.removeEventListener)
		obj.removeEventListener( type , func , false );
}





var load_img = function( html , completeFunc ) {
	
	var parser = new DOMParser();
	var output_html = parser.parseFromString(html, "text/html");
	var imgs = output_html.querySelectorAll('img');
	var lth = imgs.length;
	var done = 0;
	
	if(imgs.length){
		for( var i=0; i<lth; i++ ) {
			var _this = imgs[i];
			var src = _this.getAttribute('src');
			var img = new Image();
			img.src = src;
			
			if ( img.complete && img.width+img.height > 0 ) {
				//console.log('already loaded');
				done++;
				if(isAllDone(done,lth)){
					if(completeFunc) completeFunc();
				}
			}
			else{
				img.onload = function() {
					done++;
					if(isAllDone(done,lth)){
						if(completeFunc) completeFunc();
					}
					//console.log('loaded image');
				}
			}
		}
	}
	else{
		if(completeFunc) completeFunc();
	}
}
var isAllDone = function( idx , lth ) {
	
	if( idx >= lth )
		return true;
	else
		return false;
	
}






var resizeDIV = function( handle ){
	
	var elem = handle;
	var clicked = false;
	var parent = elem.parentNode;
	var container = document.getElementById('moodboard_canvas');
	var minWidth = 50;
	var minHeight = 50;
	
	var onClick = function( e ){
		//console.log(e);
		clicked = true;
	}
	
	var onDrag = function( e ){
		if( clicked ){
			e.preventDefault();
			var p = getPosition( e.pageX + 8 , e.pageY + 8 );

			TweenMax.set( parent , {
				'width': ( p.x > minWidth ) ? p.x : minWidth,
				'height':( p.y > minHeight ) ? p.y : minHeight
			});
			
			// resize the image
			resizeIMG();
		}
	}
	
	var onDragEnd = function(e){
		if( clicked ){
			//console.log(e);
			clicked = false;
		}
	}
	
	var getPosition = function( x , y ){
		
		var offset = parent.getBoundingClientRect();
		var px = x - offset.left;
		var py = y - offset.top;
		
		return {
			x : px,
			y : py
		}
	}
	
	var initEvent = function(){
		addEvent( elem , 'mousedown' , onClick );
		addEvent( document , 'mousemove' , onDrag );
		addEvent( document , 'mouseup' , onDragEnd );
	}
	
	var removeEvent = function(){
		elem.removeEventListener( 'mousedown' , onClick );
		document.removeEventListener( 'mousemove' , onDrag );
		document.removeEventListener( 'mouseup' , onDragEnd );
	}
	
	return {
		on : function(){
			initEvent();
		},
		
		off : function(){
			removeEvent();
		}
	}
}






var smoothScroll = function( elem, scrollFunc ) {
	
	// Grab both red boxes
    var elem = document.querySelector(elem);

    // Check how much we can scroll. This value is the 
    // height of the scrollable element minus the height of the widow
    var elemHeight = elem.getBoundingClientRect().height - window.innerHeight;

    // Add easing to the scroll. Play with this value to find a setting that you like.
    var ease = 0.1;
    
    var mult = .7;
	
    // Store current scroll position
    var targetX = 0, targetY = 0;
    var currentX = 0, currentY = 0;
    
    
    var onScroll = function(e) {
	    
        // Accumulate delta value on each scroll event
        targetY += e.deltaY * mult;
        targetX += e.deltaX * mult;
        
        // Clamp the value so it doesn't go too far up or down
        // The value needs to be between 0 and -elemHeight
        targetY = Math.max(-elemHeight, targetY);
        targetY = Math.min(0, targetY);
    }
    
    var onAnim = function() {
        // Make sure this works across different browsers (use the shim or something)

        // Get closer to the target value at each frame, using ease. 
        // Other easing methods are also ok.
        currentY += (targetY - currentY) * ease;

        // Uncomment this line to scroll horizontally
        // currentX += (targetX - currentX) * ease;

        // Create the CSS transform string
        //
        // alternativly: use WebKitCSSMatrix, 
        // though it doesn't seem to be any faster 
        // http://jsperf.com/webkitcssmatrix-vs-translate3d
        
        // Apply CSS style
        setTranslate( elem , currentX.toFixed(4) +'px' , currentY.toFixed(4) +'px' , 0+'px' );
        
        if( scrollFunc )
        	scrollFunc( currentY / elemHeight , currentY , elemHeight );
		
    }
    
    var reset = function(){
	    currentY = 0;
	    targetY = 0;
    }
    
    var refresh = function() {
		if(elem.parentNode != null) 
			elemHeight = elem.getBoundingClientRect().height - elem.parentNode.offsetHeight;
		
		console.log(elem.parentNode.offsetHeight);
	}
	
	var isOn = false;
	var on = function(){
		if(!ismobile){
			isOn = true;
			refresh();
			VirtualScroll.on(onScroll);
			FrameImpulse.on(onAnim);
		}
	}
	
	var off = function(){
		isOn = false;
		VirtualScroll.off(onScroll);
		FrameImpulse.off(onAnim);
		window.removeEventListener("resize", refresh);
	}
	
	var onResize = function(){
		
		if( ismobile || hasClass( document.documentElement , 'IE' ) ){
			if(isOn){
				off();
				setTranslate( elem , 0+'px' , 0+'px' , 0+'px' );
			}
		}
		else{
			if(!isOn){
				reset();
				on();
			}
		}
	}
	addEvent( window , 'resize' , onResize);
	
	
	return {
		
		reset : reset,
		
		refresh : refresh,
		
		on : on,
		
		off : off

	}
}



//
//
//		Set Translate3d
//
//
var setTranslate = function( elem , x , y , z ) {
	elem.style.webkitTransform = 'translate3d('+ x +','+ y  +','+ z +')';
    elem.style.msTransform = 'translate3d('+ x +','+ y +','+ z +')';
    elem.style.transform = 'translate3d('+ x +','+ y +','+ z +')';
}



var htmlSource = function() {
	this.beforeChangeDone = true;
}
htmlSource.prototype = {
	
	save : function( html ) {
		this.data = html;
	},
	
	insert : function( target , html ) {
		
		var main = document.getElementById(target);

		//var parser = new DOMParser();
		//var doc = parser.parseFromString(html, "text/xml");
		
		main.innerHTML = html;
		
		if(this.data) this.data = '';
		
		// fadein when content is ready
		var ajax = document.getElementById('ajax');
		addClass( ajax , 'fade' );
		// setTimeout(function(){
		// 	removeClass( ajax , 'fade' );
		// },0);
		TweenMax.to( '#ajax' , .6 , {'autoAlpha':1,'ease':'Power2.easeInOut',
			'onComplete':function(){
				removeClass( ajax , 'fade' );
			}
		});
		
		if( toPage == 'about' ) {
			about.init();
		}
		if( toPage == 'works' ) {
			works.init();
		}
		else if( toPage == 'home' ) {
			home.init();
		}
		
		
		currentPage = toPage;
		AAPL_content = 'main';
	},
	
	// fadeout
	pageTransition : function(){
		var _this = this;
		
		var tl = new TimelineMax();
		tl.to( '#ajax' , .6 , {'autoAlpha':0,'ease':'Power2.easeInOut',
			'onComplete':function(){
				if( _this.data ){
					_this.insert( AAPL_content , _this.data );
					console.log('Animation has been done, Inserted data to html');
				}
				_this.beforeChangeDone = true;
			}
		});
	}
}
var html = new htmlSource();







var home_page = function(){}
home_page.prototype = {
	
	'init' : function(){
		var _this = this;

		cube();
	},

	'pageLoaded' : function(){
		addEvent( window , 'load' , function() {
			cube();
		});
	},
	
	'beforeChangePage' : function(){
		html.pageTransition();
	}
	
}
var home = new home_page();


var about_page = function(){}
about_page.prototype = {
	
	'init' : function(){
		var _this = this;
		this.started = false;

		var skills = document.getElementById('skills');
		var skills_child = skills.querySelectorAll('li');

		for(var i=0; skills_child[i]; i++){
			var s = skills_child[i];
			var o = s.querySelector('.o');
			var ps = 100 - o.getAttribute('data-ps');

			var tl = new TimelineMax({'delay':.6 + (i*.1) });
				tl.to(o,1,{'drawSVG':'100% '+ps+'%','ease':'Power2.easeOut'});
		}

		var unknown = document.querySelector('.unknown span');
		var tl = new TimelineMax({'delay':.6,'repeat':-1,'repeatDelay':2});
			tl.to(unknown,.2,{'force3D':true,'rotation':30,'ease':'Power2.easeIn'});
			tl.to(unknown,.25,{'force3D':true,'rotation':-25,'ease':'Power3.easeOut'});
			tl.to(unknown,.3,{'force3D':true,'rotation':20,'ease':'Power3.easeOut'});
			tl.to(unknown,.3,{'force3D':true,'rotation':-7,'ease':'Power4.easeOut'});
			tl.to(unknown,.2,{'force3D':true,'rotation':0,'ease':'Power4.easeOut'});

		this.initScroll();
	},
	
	'resize' : function(){ 
		if(this.started){ 
			this.scroll.refresh();
		}
	},
	
	'initScroll' : function(){
		var _this = this;
		this.scroll = smoothScroll('#about',function( s , y , h ) {});
		this.on();
		this.started = true;
		addEvent( window , 'resize' , function(){ _this.resize() } );
	},

	'beforeChangePage' : function(){
		
		html.pageTransition();
		
	},

	'on' : function(){
		
		this.scroll.on();
		
	},
	
	'off' : function(){
		
		var _this = this;
		
		if(this.scroll != null){
			this.scroll.off();
			this.scroll.reset();
		}
		window.removeEventListener( "resize", function(){ _this.resize(_this) } );
		
	}
}
var about = new about_page();





var works_page = function(){}
works_page.prototype = {
	
	'init' : function(){
		var _this = this;
		this.started = false;
		this.scroll_top = 0;

		var works_items = document.getElementById('works_items');
		var works_items_child = works_items.querySelectorAll('li');
		for(var i=0; works_items_child[i]; i++){
			(function(){
				var idx = i;
				var outer_wrap = works_items_child[idx].querySelector('.outer_wrap');
				
				addEvent( works_items_child[i] , 'mousemove' , function(e){
					var x = (e.pageX - this.offsetLeft - (this.offsetWidth/2)) * .1;
					var y = (e.pageY - _this.scroll_top - this.offsetTop  - (this.offsetHeight/2)) * .1;

					TweenMax.set(outer_wrap,{'force3D':true,'rotationX':y,'rotationY':-x});
				});
				addEvent( works_items_child[i] , 'mouseleave' , function(e){
					TweenMax.set(outer_wrap,{'force3D':true,'rotationX':0,'rotationY':0});
				});

			})();
		}


		this.initScroll();
	},
	
	'resize' : function(){ 
		if(this.started){ 
			this.scroll.refresh();
		}
	},
	
	'initScroll' : function(){
		var _this = this;
		_this.scroll_top;
		this.scroll = smoothScroll('#works',function( s , y , h ) {
			_this.scroll_top = y;
		});
		this.on();
		this.started = true;
		addEvent( window , 'resize' , function(){ _this.resize() } );
	},

	'beforeChangePage' : function(){
		
		html.pageTransition();
		
	},

	'on' : function(){
		
		this.scroll.on();
		
	},
	
	'off' : function(){
		
		var _this = this;
		
		if(this.scroll != null){
			this.scroll.off();
			this.scroll.reset();
		}
		window.removeEventListener( "resize", function(){ _this.resize(_this) } );
		
	}
}
var works = new works_page();





//
//
//		event
//
//
var url = window.location.toString();

if( url.indexOf('about.php') >= 0 ) {
	currentPage = 'about';
	about.init();
}
else if( url.indexOf('works.php') >= 0 ) {
	currentPage = 'works';
	works.init();
}
else if( url.indexOf(AAPLhome) >= 0 ) {
	currentPage = 'home';
	home.pageLoaded();
}


if(!isBrowser('ie')){
	console.log('     Current page is ['+currentPage+']');
}
addEvent( window , 'load' , function() {
	resize();
});
addEvent( window , 'resize' , resize );




$(document).ready(function(){
    TweenMax.set('#menu_icon',{'delay':.6,'className':'+=active'});
    TweenMax.set('#sns',{'delay':1,'className':'+=active'});
	TweenMax.to('#logo_path',.8,{'delay':1,'drawSVG':'100%','ease':'Power2.easeOut'});

	// var menu_wrap = document.getElementById('menu_wrap');
	// var menu = document.getElementById('menu');
	// addEvent( menu_wrap , 'mouseenter' , function(){
	// 	TweenMax.staggerTo('#menu_icon span',.6,{'force3D':true,'y':0,'ease':'Power4.easeOut'},.1);
	// });
});




//
	//
	//		Get Posts
	//
	//
	function get_posts(_this, post_type, num, append_to){
		var _this = _this;
		var i = parseInt(_this.attr('data-i'));
		var max_count = _this.attr('data-count');
		var items = [];
		var num = num;
		var loaded = 0;
		

		$.ajax({
			method: "POST",
			dataType: 'json',
			data: {'post_type':post_type,'offset':i,'posts_per_page':num},
			url: "load-more.php",
			success: function(data)
			{
				if(data.length) {
					for(var a=0,lth=data.length;a<lth;a++){
						var item = data[a];
						var _item = $(item);
						
						var img = new Image();
						var src = _item.find('img').attr('src');
						$(img).data('idx',a);
						if(!src) loaded++;
						$(img).load(function() {
							
							var idx = $(this).data('idx');
							
							var item = data[idx];
							var _item = $(item);
							
							items[idx] = _item;
							
							var get_data_lth = data.length;
							_this.attr('data-i',i+get_data_lth);
							
							TweenMax.set($(_item).find('img'),{'opacity':1});
							TweenMax.to(_item , .5 , {'autoAlpha':1,'ease':'Power1.easeInOut'});
							TweenMax.to(_item , .8 , {'force3D':true,'y':0,'ease':'Power3.easeOut'});
							
							if(i+get_data_lth>=max_count){
								_this.fadeOut();
								_this.parent().addClass('done');
							}
							

							if(loaded >= get_data_lth-1){
								for(var aa=0;aa<get_data_lth;aa++){
									$(append_to).append(items[aa]);
									
									TweenMax.set('.ajax_load',{'className':'-=ajax_load'});
									
									$(window).trigger('resize');
								}
								
								
								_this.removeClass('active');
							}
							
							loaded++;
						}).attr('src',src);
					}
				}
			}
		});
	}