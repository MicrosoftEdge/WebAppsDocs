---
layout: default
title: Create a Hosted Web App
permalink: /en-US/win10/CreateHWA.htm
lang: en-US
---

#Hosted Web Apps - Create your app now

Learn how to quickly create a Universal Windows Platform (UWP) app using Project Westminster for Windows 10 starting with your website URL. All you'll need to do is add your site URL to a Windows app manifest, set your image resources to use for app tiles and store discovery and package it up. Continue by adding native platform integration from JavaScript hosted on your servers in a matter of minutes. 

##What you need
  - [**Visual Studio 2015**](https://dev.windows.com/en-us/downloads) - The  free, full-featured Visual Studio Community 2015 includes the Windows 10 developer tools, universal app templates, a code editor, a powerful debugger, Windows Mobile emulators, rich language support, and more, all ready to use in production. 
  - [Windows Standalone SDK for Windows 10](https://dev.windows.com/en-us/downloads/windows-10-sdk) - If you are using a different development environment than Visual Studio 2015, you can download a standalone Windows SDK for Windows 10 installer. Note that you don’t need to install this SDK if you’re using Visual Studio 2015 – it's already included.

##Follow these steps to convert a Website into an Web App on Windows

1. **Pick a Website URL**
	* Choose an existing website that will work great as a single page app -- preferably you are the owner/developer of the site so you are able to make changes
	* If you don't have a URL in mind, the tutorial will walk you through using this [Codepen Example](http://codepen.io/seksenov/pen/wBbVyb/?editors=101) (http://codepen.io/seksenov/pen/wBbVyb/?editors=101) as the URL
	* Copy your URL or the Codepen URL above to use throughout the tutorial

	<br>

2. **Create a Blank JS App**
	* Launch Visual Studio 2015
	* Click "File -> New Project" and choose "JavaScript -> Windows -> Windows Universal -> Blank App (Windows Universal)" 

	<br>
	**Choose the blank JavaScript Template**
	<img src="{{site.baseurl}}/images/CreateHWA/BlankJSTemplate.PNG">

	<br>

3. **Delete Packaged HTML/CSS/JS**
	* Since this is a hosted web app where the content is served from a remote server you won't need most of the local app files that come standard from the JavaScript temple.
	* Go ahead and delete the local HTML, JS and CSS resources. All you'll need to keep is the appx manifest (Where you configure the app) and the image resources to be displayed in the store, start menu and on the taskbar.

	<br>
	**Delete highlighted folders/files**
	<img src="{{site.baseurl}}/images/CreateHWA/DeletePackagedContent.PNG">

	<br>

4. **Set the Start page URL in the App Manifest**
	* Open the package.appxmanifest file
	* Under the Application tab find the StartPage: default.html" field
	* Replace "default.html" with http://codepen.io/seksenov/pen/wBbVyb/?editors=101 

	<br>
	**Copy and paste the Start page URL**
	<img src="{{site.baseurl}}/images/CreateHWA/StartPageScreen.PNG">

	<br>

5. **Define the Boundaries of your Web App**
	* In the Content URIs tab define the URLs that make up your web app
	* Here you are able to control which URLs gain access to native platform functionality
	* Go ahead and add 1. http://codepen.io/seksenov/pen/wBbVyb/?editors=101 and 2. http://*.codepen.io/
	* Set WinRT Access to All for both URLs
	
	<br>
	**Copy and paste the Content URIs**
	<img src="{{site.baseurl}}/images/CreateHWA/ContentURIScreen.PNG">

	<br>
	
6. **Hit Run!** 
	* At this point you have a fully functioning native Web App on Windows that is able to access platform APIs
	* The hosted Codepen is running in the App Host on Windows 10 and has access to Universal Windows APIs
	* In the Codepen Click or touch the Toast Notification button to call a Windows API from hosted script

	<br>
	**Codepen running as a Hosted Web App showing a Windows Toast Notification**
	<img src="{{site.baseurl}}/images/CreateHWA/CodepenToast.PNG">
	<br>

7. **Add Camera Capture** 
	* Just copy and paste the JavaScript code for Camera Capture directly into the JS editor of the Codepen
		* Note: It's best to view the raw code when copying
	* A button to invoke the cameraCapture() function was already present in HTML, so go ahead, click it and take a pic

	<br>
	**Camera Capture**
	<br>
	**Codepen Calling Native Camera Capture**
	<img src="{{site.baseurl}}/images/CreateHWA/CameraCapture.PNG">
	<br>

##All Set!

After 7 simple steps you've been able to not only turn a website into an app but also access Universal Windows APIs from your hosted JavaScript. Thanks for completing the tutorial, we can't wait to see what scenarios you envision next!

<br>

<a href="{{site.baseurl}}/{{page.lang}}/win10/HWAfeatures.htm"><button class="next">Next: Accessing Features</button></a>
