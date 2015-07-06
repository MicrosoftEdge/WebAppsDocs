---
layout: default
title: Create a Hosted Web App
permalink: /en-US/win10/CreateHWA.htm
lang: en-US
---

#UWP Bridge for web apps - Accessing Windows features

You web app can have full access to the **Universal Windows Platform (UWP)**, including calling Windows Runtime APIs directly from script hosted on a server, leveraging Cortana integration, and using an online authentication provider. Hybrid apps are also supported as you can include local code to be called from the hosted script and manage app navigation between remote and local pages.

**Project Westminster** enables you to get started.  

##Get started
1. Sign up for the [**Windows 10 Insider Preview**](https://insider.windows.com) to install the Windows 10 SDK (Software Development Kit).
2. Install [**Visual Studio RC 2015**](https://www.visualstudio.com/en-us/downloads/visual-studio-2015-downloads-vs.aspx) to build the appx package that you submit to the store.
3. Follow the steps to [convert your website into an web app on Windows](../CreateHWA.md).

Once your web app has been packaged for the Universal Windows Platform following the steps above, learn more about accessing platform features below.

## Setting Application Content URI Rules (ACURs) 
You can define which URLs your hosted web app can and cannot include. You do this by setting Application Content URI Rules (ACURs) in the app package manifest. Your rules should include your app's start page and any other pages you want included as app pages. Optionally, you can exclude specific URLs, too.

There are several ways to specify a URL match in your rules:

  - An exact hostname
  - A hostname for which a URI with any subdomain of that hostname is included or excluded
  - An exact URI
  - An exact URI that can contain a query property
  - A partial path and a wildcard to indicate a particular file extension for an include rule
  - Relative paths for exclude rules

If your user navigates to a URL that is not included in your rules, then Windows opens the target URL in a browser.

Here are a few examples of ACURs.

```javascript
	<uap:ApplicationContentUriRules>
      <uap:Rule Type="include" Match="https://example.com/" />
      <uap:Rule Type="include" Match="https://*.example.com/" />
      <uap:Rule Type="exclude" Match="https://example.com/excludethispage.aspx" />
	</uap:ApplicationContentUriRules>
```

## Call Windows Runtime APIs
You can directly call Windows Runtime APIs through JavaScript that you host on your server as long as that hosted content is running as an app on Windows.

To enable this, you need to specify the `(WindowsRuntimeAccess="<<level>>")` attribute in the ACURs with the one of these values:

  - "none" blocks all access to Windows Runtime APIs. This is the default.
  - "AllowForWebOnly" allows remote script to call local Windows Runtime Components that are included in the app package.
  - "all" gives developers access to the full Windows Runtime namespaces and any local components.

Here is an example rule type:


----------
**Create a Blank JS App**
	* At minimum you will need Visual Studio 2015 RC released for //BUILD with the SDK installed
	* Launch Visual Studio
	* Click "File -> New Project" and choose "JavaScript -> Windows -> Windows Universal -> Blank App (Windows Universal)" 

	<br>
	**Choose the blank JavaScript Template**
	<img src="{{site.baseurl}}/images/CreateHWA/BlankJSTemplate.PNG">

	<br>

	**Delete highlighted folders/files**
	<img src="{{site.baseurl}}/images/CreateHWA/DeletePackagedContent.PNG">

	<br>

	<br>
	**Appx Manifest Additions**
	<img src="{{site.baseurl}}/images/CreateHWA/ManifestAddition.PNG">

	<br>
	
