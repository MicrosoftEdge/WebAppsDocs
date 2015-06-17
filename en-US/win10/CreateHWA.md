---
layout: default
title: Create a Hosted Web App
permalink: /en-US/win10/CreateHWA.htm
lang: en-US
---

#Create a Hosted Web App

Learn how to quickly create a Hosted Web App for Windows 10 starting with your website URL. All you'll need to do is add your site URL to a Windows app manifest, set your image resources to use for app tiles and store discovery and package it up. Continue by adding native platform integration from JavaScript hosted on your servers in a matter of minutes. 

##What you need
1. **Windows 10 Insider Preview** - make sure to install the Windows 10 SDK
2. **Visual Studio RC 2015** - to build the appx package that you submit to the store

##Follow these steps to convert a Website into an Web App on Windows

1. **Pick a Website URL**
	* If have an existing website that will work great as a single page app and preferably you are the owner/developer of the site so you are able to make changes.
	* If you don't have an URL in mind the tutorial will walk you through using this [Codepen Example](http://codepen.io/seksenov/pen/wBbVyb/?editors=101) (http://codepen.io/seksenov/pen/wBbVyb/?editors=101) as the URL
	* Copy your URL or the Codepen URL above to use throughout the tutorial

	<br>

2. **Create a Blank JS App**
	* At minimum you will need Visual Studio 2015 RC released for //BUILD with the SDK installed
	* Launch Visual Studio
	* Click "File -> New Project" and choose "JavaScript -> Windows -> Windows Universal -> Blank App (Windows Universal)" 

	<br>
	**Choose the blank JavaScript Template**
	<img src="{{site.baseurl}}/images/CreateHWA/BlankJSTemplate.PNG">

	<br>

3. **Delete Packaged HTML/CSS/JS**
	* Since this is a hosted web app where the content is served from a remote server you won't need most of the local app files that come standard from the JavaScript temple.
	* Go ahead and delete the local HTML, JS and CSS resources. All you'll need to keep is the appx manifest (Where you configure the app) and the image resources to be displayed in the store, start menu and on the taskbar.

	<br>
	**Delete hihglighted folders/files**
	<img src="{{site.baseurl}}/images/CreateHWA/DeletePackagedContent.PNG">

	<br>

4. **Set the Start Page URL in the App Manifest**
	* Open the package.appxmanifest file
	* Under the <Application> node find the StartPage="default.html" tag
	* Replace "default.html" with "http://mysite.com/"
		* In this tutorial we'll use: http://codepen.io/seksenov/pen/wBbVyb/?editors=101 

	<br>

5. **Define the Boundaries of your Web App**
	* Add the Application Content URI Rules (ACURs) tag in the manifest in order to define the URLs that are part of your app. If users click on URLs that aren't defined int he ACURs they will open in the default browser.
	* In the ACURs you are also able to define URLs that can access native platform APIs directly. To do this use the WindowsRuntimeAccess tag as outlined below.
	* There are three levels of access "none" for no access (default value), "AllowForWeb" access to local in package runtime components, "all" access to the Windows namespace from remote code.

	<br>
	**XML to Add in the Manifest**
	{% gist 8df352b057d7bdc14a2d %}

	<br>
	**Appx Manifest Additions**
	<img src="{{site.baseurl}}/images/CreateHWA/ManifestAddition.PNG">

	<br>
	
6. **Hit Run!** 
	* At this point you have a fully functioning native Web App on Windows that is able to access platform APIs
	* The hosted Codepen is running in the App Host on Windows 10 and has access to Universal Windows APIs
	* In the Codepen Click or touch the System Prompt button to call a Windows API from hosted script

	<br>
	**Codepen running as a Hosted Web App and Calling the Native System Prompt UI**
	<img src="{{site.baseurl}}/images/CreateHWA/systemPrompt.PNG">
	<br>

7. **Add Toast Notifications** 
	* Just copy and paste the JavaScript code for Toast Notifications directly into the JS editor of the Codepen
		* Note: It's best to view the raw code when copying
	* A button to invoke the showNotification() function was already present, so go ahead, click it and watch the site display and toast notification

	<br>
	**Toast notifications**
	{% gist 2a08ea82483a0578d1aa %}
	<br>
	**Codepen Calling Native Toast Notification**
	<img src="{{site.baseurl}}/images/CreateHWA/CodepenToast.PNG">
	<br>

##All Set!

After 7 simple steps you've been able to not only turn a website into an app but also access Universal Windows APIs from your hosted JavaScript. Thanks for completing the tutorial and we can't wait to see what scenarios you envision next!
