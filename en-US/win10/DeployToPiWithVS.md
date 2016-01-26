---
layout: index
title: Deploy to Raspberry Pi using Visual Studio
permalink: /en-US/win10/DeployToPiWithVS.htm
lang: en-US
---
<div class="container">
	<br>
	<div class="row spacer-32-top row-spacer">
        <div class="col-md-12 col-lg-12">
            <section class="section">
                <header class="section-header">
                    <h1>Deploying to Raspberry Pi 2 with Visual Studio 2015</h1>
                </header>
                <div class="section-body">
                	<p>The following tutorial will teach you how to quickly create a hosted web app and deploy it to a Raspberry Pi 2 using Visual Studio (VS). This is now possible thanks to the Windows Internet of Things (IoT) core and project Westminister. By the end of this tutorial, you will have succesfully converted your website into a Universal Windows Platform (UWP) application that can run on the Raspberry Pi and even communicate with sensors!</p>

                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPi/rpi-side.png">
                    <img class="horizontal-margin-auto" alt="Codepen example" src="{{site.baseurl}}/images/WebOnPi/rpi2.png" />
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12 col-md-push-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 1: Pick a website URL</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <p>Choose an existing website that will work great as a single-page app. We highly recommend that you are the owner or developer of the site; this way you will be able to make all the necessary changes.</p>
                    <p class="spacer-16-top">If you do not have a URL in mind, we will be walking you through using this <a href="http://codepen.io/apavia/pen/pgaEWL">Codepen example</a> as the website. The codepen allows you to control the Pi's on-board LED.</p>
                    <p class="spacer-16-top">Copy your URL, or the Codepen URL, to use throughout the tutorial.</p>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12 col-md-pull-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPi/codepen.png">
                    <img class="grey-border"  alt="Codepen example" src="{{site.baseurl}}/images/WebOnPi/codepen.png"/>
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 2: Create a blank JavaScript app</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <p>Launch Visual Studio 2015.</p>
                    <ol class="spacer-16-top">
                        <li>Click <strong>File</strong>.</li>
                        <li>Click <strong>New Project</strong>.</li>
                        <li>Under <strong>JavaScript</strong> then <strong>Windows Universal</strong>, click <strong>Blank App (Windows Universal).</strong></li>
                    </ol>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/CreateHWA/step2.png">
                    <img class="grey-border" alt="Choose the blank JavaScript template" src="{{site.baseurl}}/images/CreateHWA/step2.png" />
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12 col-md-push-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 3: Delete any packaged code</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <p>Since this is a hosted web app, where the content is served from a remote server, you will not need most of the local app files that come with the JavaScript template by default.</p>
                    <p class="spacer-16-top">Delete any local HTML, JavaScript, or CSS resources. All that should remain is the <code>package.appxmanifest</code> file, where you configure the app, and the image resources.</p>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12 col-md-pull-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPi/DeletePackagedContent.png">
                    <img class="grey-border" alt="Delete highlighted folders and files" src="{{site.baseurl}}/images/WebOnPi/DeletePackagedContent.png" />
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 4: Set the start page URL</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <ol>
                        <li>Open the <code>package.appxmanifest</code> file.</li>
                        <li>Under the <strong>Application</strong> tab, find the <strong>Start page</strong> text field.</li>
                        <li>Replace <code>default.html</code> with your website URL.</li>
                    </ol>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPi/startPage.png">
                    <img class="grey-border" alt="Copy and paste your start page URL" src="{{site.baseurl}}/images/WebOnPi/startPage.png" />
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12 col-md-push-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 5: Define the boundaries of your web app</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <p>Application Content URI Rules (ACURs) specify which remote URLs are allowed access to your app and to the Universal Windows APIs. At the very minimum, you will need to add an ACUR for your start page and any web resources utilized by that page. For more information on ACURs, <a href="{{site.baseurl}}/{{page.lang}}/win10/HWAfeatures.htm#keep-your-app-secure----setting-application-content-uri-rules-acurs">click here</a>.</p>
                    <ol class="spacer-16-top">
                        <li>Open the <code>package.appxmanifest</code> file.</li>
                        <li>Click the <strong>Content URIs</strong> tab.</li>
                        <li>
                            <p>Add any necessary URIs for your start page.</p>
                            <p class="spacer-16-top">For example:</p>
                            <p class="spacer-16-top">1. <code>http://codepen.io/</code></p>
                            <p>2. <code>http://*.codepen.io/</code></p>
                        </li>
                        <li>Set the <strong>WinRT Access</strong> to <strong>All</strong> for each URI you added.</li>
                    </ol>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12 col-md-pull-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPi/uris.png">
                    <img class="grey-border" alt="Create new Content URIs" src="{{site.baseurl}}/images/WebOnPi/uris.png"/>
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 6: Run your app</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <p>At this point, you have a fully functioning Windows 10 app capable of accessing the Universal Windows APIs!</p>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPi/codepen.png">
                    <img class="grey-border" alt="Codepen example" src="{{site.baseurl}}/images/WebOnPi/codepen.png"/>
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12 col-md-push-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 7: Hook up your board</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <ol class="spacer-16-top">
                        <li>Make sure the Micro SD card is inserted into your Raspberry Pi 2</li>
                        <li>Connect a network cable from your local network to the Ethernet port on the board or use the WiFi dongle to connect to WiFi. Make sure your development PC is on the same network.</li>
                        <li>Connect an HDMI monitor to the HDMI port on the board.</li>
                        <li>Connect the power supply to the micro USB port on the board.</li>
                    </ol>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12 col-md-pull-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPi/rpi2-inst.png">
                    <img alt="Remote machine debugging" src="{{site.baseurl}}/images/WebOnPi/rpi2-inst.png" />
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 8: Boot Windows 10 IoT Core</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <p>Windows 10 IoT Core will boot automatically after connecting the power supply. This process will take a few minutes. After seeing the Windows logo, your screen may go black for about a minute - don't worry, this is normal for boot up.</p>
                    <p class="spacer-16-top">Once the device has booted, the DefaultApp will launch. Click on device information on the top left. This will display the IP address of your RPi2. Take note of the IP address you will need it later.</p>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPi/DefaultAppRpi2.png">
                    <img alt="set remote connections" src="{{site.baseurl}}/images/WebOnPi/DefaultAppRpi2.png"/>
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12 col-md-push-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 9: Set up remote connection settings</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <p>At this point, Visual Studio will present the <strong>Remote Connections</strong> dialog. If you previously used Powershell to set a unique name for your device, you can enter it here (in this example, we're using <strong>my-device</strong>). Otherwise, use the IP address of your Windows IoT Core device. After entering the device name/IP select <strong>Universal (Unencrypted Protocol) Authentication Mode</strong>, then click Select.</p>
                    <p  class="spacer-16-top">You can verify or modify these values by navigating to the project properties (select Properties in the Solution Explorer) and choosing the Debug tab on the left.</p>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12 col-md-pull-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/WebOnPI/remote-connections.png">
                    <img alt="set remote connections" src="{{site.baseurl}}/images/WebOnPi/remote-connections.png"/>
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-16">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 10: Deploy</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <ul>
                        <li> Now we’re ready to deploy. Simply <strong>press F5</strong> (or select Debug | Start Debugging) to start debugging your app. You should see the app come up in Windows IoT Core device screen. </li>
                        <li>Once deployed, you can set breakpoints, see variable values, etc. To stop the app, press on the ‘Stop Debugging’ button (or select Debug | Stop Debugging).</li>
                    </ul>
                </div>
            </section>
        </div>
    </div>

</div>
