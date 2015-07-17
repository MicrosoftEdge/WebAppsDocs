---
layout: default
title: UWP Bridge for web apps - Accessing Windows features
permalink: /en-US/win10/features.htm
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

## Hybrid apps -- Packaged web apps vs. Hosted web apps

You have options for creating your UWP app. The app might be designed to be downloaded from the Windows Store and fully hosted on the local client; often referred to as a **Packaged Web App**. This lets you run your app offline on any compatible platform. Or the app might be a fully hosted web app that runs on a remote web server; typically known as a **Hosted Web App**. But there is also a third option: the app can be hosted partially on the local client and partially on a remote web server. We call this third option a **Hybrid app** and it typically uses the **WebView** component to make remote content look like local content. Hybrid apps can include your HTML5, CSS, and Javascript code running as a package inside the local app client and retain the ability to interact with remote content.

## manifoldjs and the app manifest

An easy way to turn your website into a UWP app is to use an **app manifest** and **manifoldjs**. The app manifest is an xml file that contains metadata about the app. It specifies such things as the app's name, links to resources, display mode, URLs, and other data that describes how the app should be deployed and run. **manifoldjs** makes this process very easy, even on systems that do not support web apps. Please go to [manifoldjs.com](http://go.microsoft.com/fwlink/p/?LinkId=615590) for more information on how it works. You can also view a manifoldjs demonstration as part of this [Windows 10 Web Apps presentation](http://channel9.msdn.com/Events/WebPlatformSummit/2015/Hosted-web-apps-and-web-platform-innovations?wt.mc_id=relatedsession).

## Call Windows Runtime APIs
You can directly call Windows Runtime APIs through JavaScript that you host on your server as long as that hosted content is running as an app on Windows.

To enable this, you need to specify the `(WindowsRuntimeAccess="<<level>>")` attribute in the ACURs with the one of these values:

  - "none" blocks all access to Windows Runtime APIs. This is the default.
  - "AllowForWebOnly" allows remote script to call local Windows Runtime Components that are included in the app package.
  - "all" gives developers access to the full Windows Runtime namespaces and any local components.

Here is an example rule type:

```javascript
	<uap:ApplicationContentUriRules>
      		<uap:Rule Type="include" WindowsRuntimeAccess="all" Match="http://example.com/" />
	</uap:ApplicationContentUriRules>
```

This gives script running on http://example.com/ access to Windows Runtime namespaces and custom packaged components in the package. See the [**Windows.UI.Notifications.js**](https://gist.github.com/Gr8Gatsby/3d471150e5b317eb1813#file-windows-ui-notifications-js) example on GitHub for toast notifications.

## Integrate Cortana voice commands

You can take advantage of Cortana integration by specifying a Voice Command Definition (VCD) file in your html page. The VCD file is an xml file that maps commands to specific phrases. For example, a user could tap the Start button and say "Contoso Widgets, show best sellers" to both launch the Contoso Widgets app and to navigate to a "best sellers" page.

When you add a `<meta>` element tag that lists the location of your VCD file, Windows automatically downloads and registers the Voice Command Definition file.

Here is an example of the use of the <meta> tag in an html page in a hosted web app:

```html
<meta name="msapplication-cortanavcd" content="http:// example.com/vcd.xml"/>
```

For more info on Cortana integration and VCDs, see [**Cortana interactions**](https://msdn.microsoft.com/en-us/library/windows/apps/dn974231.aspx) and [**Voice Command Defintion (VCD) elements and attributes v1.2**](https://msdn.microsoft.com/en-us/library/windows/apps/dn954977.aspx).

## Use the web authentication broker

You can use the web authentication broker to handle the login flow for your users if you have an online identity provider that uses internet authentication and authorization protocols like OpenID or OAuth. You specify the start and end URIs in a `<meta>` tag on an html page in your app. Windows detects these URIs and passes them to the web authentication broker to complete the login flow. The start URI consists of the address where you send the authentication request to your online provider appended with other required information, such as an app ID, a redirect URI where the user is sent after completing authentication, and the expected response type. You can find out from your provider what parameters are required.
Here is an example use of the `<meta>` tag:

```html
	<meta name="ms-webauth-uris" 
	 	content="https://<providerstartpoint>?client_id=<clientid>&response_type=token, 
               		https://<appendpoint>"/>
```

For more guidance, see [**Web authentication broker considerations for online providers**](https://msdn.microsoft.com/en-us/library/windows/apps/dn448956.aspx).

## Available platform capabilities

Hosted web apps can access the vast majority of Windows Runtime APIs, but there are special capabilities that are not inherently available. For more info, see [**App capability declarations**](https://msdn.microsoft.com/en-us/library/windows/apps/hh464936.aspx).

## Use Visual Studio

Creating the hosted web app in Visual Studio is straightforward. All you need is an existing website to host. Using Visual Studio also gives you access to the full Universal Windows Platform and all supported APIs.

1. Start a new Windows 10 Insider Preview JavaScript project using the Blank template.
2. Set the start page URL and application content URI rules in the package.appxmanifest.

  - In the Microsoft Visual Studio solution explorer, right-click your app's package.appxmanifest file and select View Designer.
  - Specify the URIs you want to include or exclude.
  - Visual Studio then updates the manifest file.
3. Press Run.

## Related topics

[**RJS: examples of platform integration points**](http://rjs.azurewebsites.net/)
[**Codepen: sandbox to use for calling Windows Runtime APIs**](http://codepen.io/seksenov/pen/wBbVyb/)
[**Cortana interactions**](https://msdn.microsoft.com/en-us/library/windows/apps/dn974231.aspx)
[**Voice Command Defintion (VCD) elements and attributes v1.2**](https://msdn.microsoft.com/en-us/library/windows/apps/dn954977.aspx)
[**Web authentication broker considerations for online providers**](https://msdn.microsoft.com/en-us/library/windows/apps/dn448956.aspx)
[**App capability declarations**](https://msdn.microsoft.com/en-us/library/windows/apps/hh464936.aspx)
