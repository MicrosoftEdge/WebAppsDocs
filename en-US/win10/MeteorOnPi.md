---
layout: index
title: Learn Meteor JS and deploy an app to the Raspberry Pi 2
permalink: /en-US/win10/MeteorOnPi.htm
lang: en-US
---

<div class="container">
    <div class="spacer-32-top row">
    	<div class="col-md-4 col-lg-4"></div>
        <div class="col-md-16 col-lg-16">
            <section class="section">
                <header class="spacer-32-top section-header">
                    <h1>Create a MeteorJS app and deploy it to the Raspberry Pi 2</h1>
                </header>
                <div class="section-body">
                    <p>In this tutorial, we are going to create and deploy the sample applciation, MeteorJS Todos, as a Universal Windows App that can run on the Raspberry Pi 2 as well as any other Windows Device.</p>
                </div>
            </section>
        </div>
    </div>
    <div class="row row-spacer">
    	<div class="col-md-4 col-lg-4"></div>
        <div class="col-md-16 col-lg-16">
            <section class="section">
                <header class="spacer-32-top section-header">
                    <h2>What you need to for this tutorial</h2>
                </header>
                <div class="section-body">
                    <ul class="bulleted-list">
                        <li>Windows machine</li>
                        <li>Raspberry Pi 2</li>
                        <li>Basic Git knowledge</li>
                        <li><a href="https://www.visualstudio.com/">Visual Studio 2015</a>. The free, full-featured Visual Studio Community 2015 includes the Windows 10 developer tools, universal app templates, a code editor, a powerful debugger, Windows Mobile emulators, rich language support, and much more—all ready to use in production.</li>
                        <li>(Optional) <a href="https://dev.windows.com/en-us/downloads/windows-10-sdk">Windows Standalone SDK for Windows 10</a>. If you are using a development environment other than Visual Studio 2015, you can download a standalone Windows SDK for Windows 10 installer. Note that you do not need to install this SDK if you're using Visual Studio 2015; it is already included.</li>
                    </ul>
                </div>
            </section>
        </div>
    </div>

    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12 col-md-push-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 1: Get and Run MeteorJS Todos</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <ol class="spacer-16-top">
                        <li><a href="https://www.meteor.com/install">Download MeteorJS</a> for Windows</li>
                        <li>
                        	<p>To download the app, open your terminal and type:</p>
                        	<p class="spacer-16-top"><code class="simple-code"> meteor create --example todos</code></p>
                   			<p class="spacer-16-top">This will create a new folder called <strong>todos</strong> with all of the files that a Meteor app needs.</p>
                        </li>
                        <li>
                        	<p>To run the newly create app, open your terminal and type:</p>
                        	<p class="spacer-16-top">
                        		<code class="simple-code">
                        			cd todos
                        		</code>
                        	</p>
                        	<p>
                        		<code class="simple-code">
                        			meteor
                        		</code>
                        	</p>
                   			<p class="spacer-16-top">Open Edge and go to <strong>http://localhost:3000</strong> to see the app running. It should look like the picture to the left.</p>
                        </li>
                        
                    </ol>
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12 col-md-pull-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/MeteorOnPi/todosMeteor.png">
                    <img class="grey-border"  alt="Codepen example" src="{{site.baseurl}}/images/MeteorOnPi/todosMeteor.png"/>
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-xs-24 col-md-12">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 2: Deploy your app</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                	<p>Now that we have tested the app locally, let's deploy it to the web so we can use that URL to make a hosted web app.</p>
                	<p class="spacer-16-top">Go to your directoy and type:</p>
                    <p class="spacer-16-top">
                		<code class="simple-code">
                			meteor deploy my_app_name.meteor.com
                		</code>
                	</p>
                    <p class="spacer-16-top">Once it's done, you can navigate to <strong>http://my_app_name.meteor.com</strong> to play with your app.</p>           
                </div>
            </section>
        </div>
        <div class="col-xs-24 col-md-12">
            <div class="image-container">
                <a href="{{site.baseurl}}/images/MeteorOnPi/deployedTodosMeteor.png">
                    <img class="grey-border"  alt="Codepen example" src="{{site.baseurl}}/images/MeteorOnPi/deployedTodosMeteor.png"/>
                </a>
            </div>
        </div>
    </div>
    <div class="row row-spacer">
        <div class="col-md-4 col-lg-4"></div>
        <div class="col-md-16 col-lg-16">
            <section class="item-section">
                <header class="section-header">
                    <h2 class="spacer-32-bottom">Step 3: Your web on Pi</h2>
                </header>
                <div class="section-body spacer-32-bottom">
                    <div class="section-body">
                    <p>Follow <a href="{{site.baseurl}}/en-US/win10/DeployToPiWithVS.htm">this tutorial</a> to deploy your newly MeteorJS app as a Windows Universal Platform app.</p>
                </div>
                </div>
            </section>
        </div>
    </div>
</div>