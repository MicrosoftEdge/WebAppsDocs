---
layout: index
title: Web apps on the Pi
permalink: /en-US/win10/WebOnPi.htm
lang: en-US
---

<div class="jumbotron jumbotron-centered webapp-accent">
    <div class="container relative">
        <div class="row">
            <div class="col-md-4 col-lg-4"></div>
            <div class="centered-content">
                <div class="image-container inline-block">
                    <img class="img-responsive" src="{{site.baseurl}}/images/WebOnPi/rpi2.png" />
                </div>
                <div class="jumbotron-content inline-block win-color-fg-primary color-alt">
                    <h1 class="jumbotron-header header-large">Your web app on a Pi</h1>
                    <p class="jumbotron-subheader">Deploy your awesome website on the Raspberry Pi by making a Hosted Web App for Windows</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
    	<div class="col-md-4 col-lg-4"></div>
        <div class="col-md-16 col-lg-16">
            <section class="section">
                <header class="section-header">
                    <h2 class="section-title">Web applications on the Raspberry Pi 2</h2>
                </header>
                <div class="section-body">
                    <p>We've had the pleasure to play with the Raspberry Pi for sometime now to test the Edge Web Platform. The one consitent thing we found is that anyone who walked through our open space was interested in the Pi and was amazed by how easy you could deploy a web app to it. Knowing that this device is unique and loved in the maker community, we thought it would be great to share how easy it is to build a Windows UWP app in HTML and JavaScript and deploy it to the Pi. Enjoy!</p>
                </div>
            </section>
        </div>
    </div>
    <div class="row">
    	<div class="col-md-4 col-lg-4"></div>
        <div class="col-md-16 col-lg-16">
            <section class="section">
                <header class="section-header">
                    <h2 class="section-title">Our Kit</h2>
                </header>
                <div class="section-body">
                    <div class="table-wrapper">
						<table class="table table-bordered table-striped"> 
							<thead> 
								<tr> 
									<th class="table-head-item">Item</th> 
									<th class="table-head-item">Cost</th>
								</tr>
							</thead> 
							<tbody> 
								<tr> 
									<th scope="row">
									 	CanaKit Raspberry Pi 2 Starter  
									</th> 
									<td>$69.99 </td> 
								</tr> 
								<tr> 
									<th scope="row"> 
										Zebra Case - Raspberry Pi B+ and 2B (Wood)
									</th> 
									<td>$14.50</td> 
								</tr> 
								<tr> 
									<th scope="row"> 
										TP-LINK TL-WN725N Wireless N Nano USB Adapter 150Mbps
									</th> 
									<td>$8.86 </td> 
								</tr> 
							</tbody>
						</table> 
					</div>
                </div>
            </section>
        </div>
    </div>
    <div class="row">
     	<div class="col-md-4 col-lg-4"></div>
        <div class="col-md-16 col-lg-16">
            <section class="section">
                <header class="section-header">
                    <h2 class="section-title">Deployment: Windows with Visual Studio 2015</h2>
                </header>
                <div class="section-body">
                    <p>If you do not have Visual Studio installed, you can get a free copy of Visual Studio community <a href="https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx" rel="nofollow">here</a>.</p>
                    <p>You can easily get your web app ready to run as a hosted web app. <a href="http://microsoftedge.github.io/WebAppsDocs/en-US//win10/CreateHWA.htm" rel="nofollow">This tutorial</a> already does a great job explaining the process so I won't go over it again. In a nutshell, all you need to do is add your site URL to a Windows app manifest, set your image resources to use for app tiles and store discovery and package it up. </p>
					<p>Once your web app can run as a hosted web app, we are ready to deploy to the Pi. (We will strip down the tutorial on this IoT page: http://ms-iot.github.io/content/en-US/win10/AppDeployment.htm and make it specific for JavaScript)</p>
					<p>Also need to download js template: https://visualstudiogallery.msdn.microsoft.com/49cdc7d0-95e7-48dd-8a6a-141cb66e726e</p>
                </div>
            </section>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12 col-md-push-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 1: Pick a website URL</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <p>Choose an existing website that will work great as a single-page app. We highly recommend that you are the owner or developer of the site; this way you will be able to make all the necessary changes. If you do not have a URL in mind, we will be walking you through using this <a href="http://codepen.io/seksenov/pen/wBbVyb/?editors=101">Codepen example</a> as the website. Copy your URL, or the Codepen URL, to use throughout the tutorial.</p>
                </div>
            </section>
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
                <a href="{{site.baseurl}}/images/CreateHWA/remote-machine-debugging.png">
                    <img alt="Codepen example" src="{{site.baseurl}}/images/WebOnPi/remote-machine-debugging.png" />
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
                    <p>Choose an existing website that will work great as a single-page app. We highly recommend that you are the owner or developer of the site; this way you will be able to make all the necessary changes. If you do not have a URL in mind, we will be walking you through using this <a href="http://codepen.io/seksenov/pen/wBbVyb/?editors=101">Codepen example</a> as the website. Copy your URL, or the Codepen URL, to use throughout the tutorial.</p>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12 col-md-pull-12">
        	<div class="image-container">
                <a href="{{site.baseurl}}/images/CreateHWA/remote-connections.png">
                    <img alt="Choose the blank JavaScript template" src="{{site.baseurl}}/images/WebOnPi/remote-connections.png" />
                </a>
            </div>
        </div>
    </div>
 </div>




