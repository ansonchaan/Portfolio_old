<?php
	$isMobile = (bool)preg_match('#\b(ip(hone|od|ad)|android|opera m(ob|in)i|windows (phone|ce)|blackberry|tablet'.'|s(ymbian|eries60|amsung)|p(laybook|alm|rofile/midp|laystation portable)|nokia|fennec|htc[\-_]'.'|mobile|up\.browser|[1-4][0-9]{2}x[1-4][0-9]{2})\b#i', $_SERVER['HTTP_USER_AGENT'] ); 
	
	require_once 'Mobile_Detect.php';
	$detect = new Mobile_Detect;
	
	require_once 'Browser_Detect.php';
	$ua=getBrowser();
	$yourbrowser= "Your browser: " . $ua['name'] . " " . $ua['version'] . " on " .$ua['platform'] . " reports: <br >" . $ua['userAgent'];
?>
<!DOCTYPE html>
<html class="<?php echo $ua['name'];?><?php if($ua['name']=='IE')echo ' '.$ua['name'].$ua['version'];?><?php if($isMobile):if(strpos($ua['userAgent'],'CriOS')):?> mobileChrome<?php else:?> mobileSafari<?php endif;endif;?>">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0, user-scalable=no">
<title>Anson's Portfolio</title>
<?php $url = 'http://'.$_SERVER['SERVER_NAME'].'/'.basename(dirname($_SERVER['PHP_SELF'])).'/'; ?>
<base href="<?php echo $url; ?>" />
<meta name="description" content="This is Anson Chan">
<meta property="og:type" content="activity" />
<meta property="og:description" content="This is Anson Chan" />
<meta property="og:url" content="<?php echo 'http://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']; ?>">
<meta property="og:image" content="<?php echo $url; ?>images/fb.jpg">
<meta property="og:title" content="Anson's Portfolio">
<meta property="og:site_name" content="Anson's Portfolio">

<link rel="shortcut icon" type="image/x-icon" href="images/icon.ico">
<link href='http://fonts.googleapis.com/css?family=Roboto:500,900,700' rel='stylesheet' type='text/css'>
<link href="css/fonts.css" rel="stylesheet" type="text/css" />
<link href="css/reset.css" rel="stylesheet" type="text/css" />
<link href="css/ease.css" rel="stylesheet" type="text/css" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script src="js/plugin/jquery.min.js" type="text/javascript" defer="defer"></script>
<script src="js/plugin/TweenMax.min.js" type="text/javascript" defer="defer"></script>
<script src="js/plugin/DrawSVGPlugin.min.js" type="text/javascript" defer="defer"></script>
<script src="js/plugin/ajax-page-loader.js" type="text/javascript" defer="defer"></script>
<script src="js/plugin/three.min.js" type="text/javascript" defer="defer"></script>
<script src="js/plugin/roboto_black.typeface.js" type="text/javascript" defer="defer"></script>
<script src="js/plugin/cube.js" type="text/javascript" defer="defer"></script>
<script src="js/plugin/app.js" type="text/javascript" defer="defer"></script>
<script src="js/common.js" type="text/javascript" defer="defer"></script>
<!--[if lt IE 9]>
<script src="js/plugin/html5.js"></script>
<script src="js/plugin/respond.js"></script>
<![endif]-->
<script type="text/javascript">
	var AAPLsiteurl = '<?php echo $url; ?>';
	var AAPLhome = '<?php echo $url; ?>';
	var currentPage,toPage;
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-26160038-3', 'auto');
  ga('send', 'pageview');
</script>
</head>


<body class="">
	<div class="body_wrap">

		<div id="header">
			<div id="logo">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
				x="0px" y="0px" width="30px" height="30px" viewBox="0 0 115 115.1" style="overflow:scroll;enable-background:new 0 0 115 115.1;" xml:space="preserve">
					<path id="logo_path" style="stroke-dashoffset: 292.149; stroke-dasharray: 0px, 999999px;" fill="none" stroke="#fff" stroke-width="25" stroke-miterlimit="10" d="M102.5,115.1V57.5c0-24.9-20.1-45-45-45s-45,20.1-45,45s20.1,45,45,45h21.4"/>
				</svg>
			</div>
			<div id="menu_wrap" class="venter alignC">
				<div id="menu_icon">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul id="menu" class="cap alignC bold venter_item">
					<li><a class="page" href=""><h4>home</h4></a></li>
					<li><a class="page" href="about.php"><h4>about</h4></a></li>
					<li><a class="page" href="works.php"><h4>works</h4></a></li>
				</ul>
			</div>
			<div id="sns" class="clearfix">
				<!--<a class="floatL" href="" target="_blank">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
					x="0px" y="0px" width="16px" height="16px" viewBox="0 0 60.7 60.7" style="overflow:scroll;enable-background:new 0 0 60.7 60.7;" xml:space="preserve">
						<path fill="#fff" d="M57.4,0h-54C1.5,0,0,1.5,0,3.4v54c0,1.9,1.5,3.4,3.4,3.4h29.1V37.2h-7.9V28h7.9v-6.8c0-7.8,4.8-12.1,11.8-12.1
						c3.4,0,6.2,0.3,7.1,0.4v8.2l-4.9,0c-3.8,0-4.5,1.8-4.5,4.5V28H51l-1.2,9.2h-7.9v23.5h15.5c1.9,0,3.4-1.5,3.4-3.4v-54
						C60.7,1.5,59.2,0,57.4,0z"/>
					</svg>
				</a>-->
				<a class="floatL" href="mailto:ansonchan9523@gmail.com" target="_blank">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
					x="0px" y="0px" width="21px" height="16px" viewBox="0 0 511.6 402" style="overflow:scroll;enable-background:new 0 0 511.6 402;" xml:space="preserve">
						<path fill="#fff" d="M49.1,123.9c6.5,4.6,26,18.1,58.5,40.7c32.5,22.6,57.5,39.9,74.8,52.1c1.9,1.3,5.9,4.2,12.1,8.7
						c6.2,4.5,11.3,8.1,15.4,10.9c4.1,2.8,9,5.9,14.8,9.3c5.8,3.4,11.3,6,16.4,7.7c5.1,1.7,9.9,2.6,14.3,2.6h0.3h0.3
						c4.4,0,9.1-0.9,14.3-2.6c5.1-1.7,10.6-4.3,16.4-7.7c5.8-3.4,10.8-6.5,14.8-9.3c4.1-2.8,9.2-6.4,15.4-10.9
						c6.2-4.5,10.2-7.4,12.1-8.7c17.5-12.2,62.1-43.1,133.6-92.8c13.9-9.7,25.5-21.4,34.8-35.1c9.3-13.7,14-28.1,14-43.1
						c0-12.6-4.5-23.3-13.6-32.3C489,4.5,478.3,0,465.9,0H45.7C31,0,19.7,4.9,11.8,14.8C3.9,24.7,0,37.1,0,52c0,12,5.2,25,15.7,39
						C26.2,104.9,37.3,115.9,49.1,123.9z"/>
						<path fill="#fff" d="M483.1,154.5c-62.4,42.3-109.8,75.1-142.2,98.5c-10.8,8-19.6,14.2-26.4,18.7c-6.8,4.5-15.7,9-27,13.7
						c-11.2,4.7-21.7,7-31.4,7h-0.3h-0.3c-9.7,0-20.2-2.3-31.4-7c-11.2-4.7-20.2-9.2-27-13.7c-6.8-4.5-15.6-10.7-26.4-18.7
						c-25.7-18.8-73-51.7-141.9-98.5C18,147.2,8.4,138.9,0,129.6v226.7c0,12.6,4.5,23.3,13.4,32.3c8.9,8.9,19.7,13.4,32.3,13.4h420.3
						c12.6,0,23.3-4.5,32.3-13.4c8.9-8.9,13.4-19.7,13.4-32.3V129.6C503.4,138.7,493.9,147,483.1,154.5z"/>
					</svg>
				</a>
			</div>
		</div>