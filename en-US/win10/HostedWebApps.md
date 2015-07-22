---
layout: default
title: UWP Bridge for web apps
permalink: /en-US/win10/HWA.htm
lang: en-US
---


<div class="row section-heading">
    <div class="col-md-6">
        <h1>UWP Bridge for web apps</h1>
        <h3>Build great Windows apps with your existing website code.</h3>
        <p class="description">For existing web applications, Windows 10 makes it easy for you to create a Universal Windows Platform (UWP) app that packages your website for publishing to the Store.</p>
        <ul>
            <li>Look great across all Windows-based devices, including PCs, tablets, phones, HoloLens, Surface Hub, Xbox and Raspberry Pi.</li>
            <li>Update and call native Windows APIs from JavaScript running on your website, creating a more engaging user experience.</li>
            <li>Integrate with Cortana voice commands.</li>
            <li>Debug your app with Microsoft Edge F12 Developer Tools.</li>
            <li>Track status, ratings, and reviews, see analytics, and get paid for all of your Windows app in the Windows Store.</li>
        </ul>
    </div>
    <div class="col-md-6">
        <div class="video-player">
            <div class="video-view embed-responsive embed-responsive-16by9 remove-top-margin">
                <video preload="none" poster="https://assets.windowsphone.com/e9e95cdd-bf84-410b-922c-886c19cc2be1/westminsterPosterImg_InvariantCulture_Default.png" controls="">
                    <source src="https://sec.ch9.ms/ch9/d87f/3527ba83-7ab8-413a-9aae-d62b4847d87f/Westminster_high.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</div> <!-- Close description and video section -->
<div class="row section-heading">
    <div role="tabpanel">
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
                <a href="#first" aria-controls="first" role="tab" data-toggle="tab">
                    <h3>Create your app</h3>
                </a>
            </li>
            <li role="presentation">
                <a href="#second" aria-controls="second" role="tab" data-toggle="tab">
                    <h3>Access Windows features</h3>
                </a>
            </li>
             <li role="presentation">
                <a href="#third" aria-controls="third" role="tab" data-toggle="tab">
                    <h3>Demos</h3>
                </a>
            </li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="first">
               <div class="row section-heading">
                    <div class="col-md-12">
                        <br>
                        <h4>Create your app with Visual Studio on a PC</h4>
                        <p>Step-by-step instructions to connect your web app to the Universal Windows Platform using Visual Studio 2015RC and a Windows-based Operating System.</p>
                        <a href="{{site.baseurl}}/{{page.lang}}/win10/CreateHWA.htm">Create your app now</a>
                    </div>
                    <div class="col-md-12">
                        <h4>Create your app with the CLI on a Mac</h4>
                        <p>Step-by-step instructions to connect your web app to the Universal Windows Platform using Command Line Interfase (CLI) and a Mac-based Operating System.</p>
                        <a href="{{site.baseurl}}/{{page.lang}}/win10/CreateHWA.htm">Create your app now</a>
                    </div>
                </div>
                <div class="row section-heading">
                    <div class="col-md-12">
                        
                    </div>
                </div>
            </div>

            <div role="tabpanel" class="tab-pane" id="second">
                <div class="row section-heading">
                    <div class="col-md-3">
                        <h4>Keep your app secure</h4>
                        <p>Set application content URI Rules (ACURs) and learn how to utilize the Content Security Policy (CSP) model, defining which URLs can and cannot gain access in your app package manifest.</p>
                        <a href="#secure">Learn More</a>
                    </div>
                    <div class="col-md-3">
                        <h4>Call Windows Runtime APIs</h4>
                        <p>Access Windows features, such as Active Notifications for unlocking an achievement, via your web app's JavaScript file.</p>
                        <a href="#ID">Learn More</a>
                    </div>
                    <div class="col-md-3">
                        <h4>Integrate Cortana Voice Commands</h4>
                        <p>Run your app with the power of voice -- whether you want to play a song, turn on the lights, or send a tweet.</p>
                        <a href="#ID">Learn More</a>
                    </div>
                    <div class="col-md-3">
                        <h4>Create Hybrid Apps</h4>
                        <p>You no longer need to decide between a Packaged Web App, downloaded to run offline, and a Hosted Web App, run from a server online... now you can have a bit of both.</p>
                        <a href="#ID">Learn More</a>
                    </div>

                </div>

                <div class="row section-heading">
					<div class="col-md-3">
                        <h4>Web Authentication Broker</h4>
                        <p>Set your app up with a simple and smooth login flow for your users to verify their identify using any provider with OpenID or OAuth protocols.</p>
                        <a href="#ID">Learn More</a>
                    </div>
                    <div class="col-md-3">
                        <h4>App capability declarations</h4>
                        <p>If your app needs programmatic access to user resources like Pictures, or to devices like a camera, you must declare the appropriate capability.</p>
                        <a href="#ID">Learn More</a>
                    </div>
                    <div class="col-md-3">
                        <!-- Placeholder for alignment -->
                    </div>
                    <div class="col-md-3">
                        <!-- Placeholder for alignment -->
                    </div>
                    <div class="col-md-3">
                        <!-- Placeholder for alignment -->
                    </div>
                </div>

                <div class="row section-heading">
                    <div class="col-md-12">
                        <h2 id="secure">Keep your app secure</h2>
                        <br>
                        <h4>Setting Application Content URI Rules (ACURs)</h4>
                        <p>You can define which URLs your hosted web app can and cannot include. You do this by setting Application Content URI Rules (ACURs) in the app package manifest. Your rules should include your app’s start page and any other pages you want included as app pages. Optionally, you can exclude specific URLs, too.</p>
                         <p>There are several ways to specify a URL match in your rules:</p>
                         <ul>
                             <li>An exact hostname</li>
                             <li>A hostname for which a URI with any subdomain of that hostname is included or excluded</li>
                             <li>An exact URI</li>
                             <li>An exact URI that can contain a query property</li>
                             <li>A partial path and a wildcard to indicate a particular file extension for an include rule</li>
                             <li>Relative paths for exclude rules</li>
                         </ul>
                         
                    </div>
                    <div class="col-md-3">
                        <h4>H4 Title</h4>
                        <p>Description</p>
                         <a href="{{site.baseurl}}/{{page.lang}}/win10/hwa.htm">Learn More</a>
                    </div>
                    <div class="col-md-3">
                        <h4 id="test">H4 Title</h4>
                        <p>Description</p>
                         <a href="{{site.baseurl}}/{{page.lang}}/win10/hwa.htm">Learn More</a>
                    </div>
                </div>

            </div>

            <div role="tabpanel" class="tab-pane" id="third">
                <div class="row section-heading">
                    <div class="col-md-6">
                        <h4>Contoso Travel App</h4>
                        <p>The Contoso travel app demonstrates a few simple ways to call Windows Runtime APIs.</p>
                        <ul>
                            <li>
                                <a href="http://contosotravel.azurewebsites.net/">Visit the App</a>
                            </li>
                            <li>
                                <a href="https://github.com/seksenov/ContosoTravel">Checkout the Code</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h4>Simple demo page for Windows APIs</h4>
                        <p>Experiment with Windows APIs using this simple demo page.</p>
                        <ul>
                            <li>
                                <a href="http://rjs.azurewebsites.net/">Visit the Demo App</a>
                            </li>
                            <li>
                                <a href="https://github.com/Gr8Gatsby/rjs">Checkout the code</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row section-heading">
                    <div class="col-md-6">
                        <h4>Find more Demos</h4>
                        <p>Take a look at the collection of standards based showcase sites and web platform feature demonstrations on the Modern.IE website.</p>
                        <a href="http://dev.modern.ie/testdrive/">Microsoft Edge | Dev Demos</a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>