---
layout: index
title: Create a Hosted Web App
permalink: /en-US/win10/CreateHWA.htm
lang: en-US
redirect_to: "https://developer.microsoft.com/en-us/windows/bridges/hosted-web-apps"
---

<div class="container">
	<div class="row">
        <div class="col-xs-24">
            <section class="section">
                <ol class="breadcrumb hidden-xs hidden-sm">
                    <li><a href="https://dev.windows.com/windows-apps">Windows Apps</a></li>
                    <li><a href="https://dev.windows.com/bridges">Windows Bridges</a></li>
                    <li><a href="{{site.baseurl}}/">Windows Bridge for Hosted Web Apps</a></li>
                    <li class="active">Create your app</li>
                </ol>
                <header class="page-title-header">
                    <h1 class="page-title">Create your Hosted Web App</h1>
                    <div class="row">
                        <div class="col-xs-24 col-lg-16">
                            <div class="page-subtitle">Learn how to quickly create a Universal Windows Platform app for Windows 10 starting with just a website URL</div>
                        </div>
                    </div>
                </header>
            </section>
        </div>
    </div>
</div>
<div class="jumbotron jumbotron-highlight-band">
    <div class="container">
        <div class="row">
            <div class="col-xs-24 col-md-12">
                <section class="section">
                    <header>
                        <h2 class="spacer-32-bottom">Choose your development platform</h2>
                    </header>
                    <div class="section-body">
                        <p>Whether you're using Mac or Windows, you can create your very own Hosted Web App in a matter of minutes. Choose your development platform, then follow the below instructions.</p>
                        <div class="switch">
                            <input type="radio" class="switch-input" name="platform" value="mac" id="platform-mac" />
                            <label for="platform-mac" class="switch-label switch-label-off">Mac</label>
                            <input type="radio" class="switch-input" name="platform" value="pc" id="platform-pc" checked="checked" />
                            <label for="platform-pc" class="switch-label switch-label-on">Windows</label>
                            <span class="switch-selection"></span>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-xs-24 col-md-12">
                <section id="reqs-mac" class="reqs section">
                    <header class="section-header">
                        <h2 class="section-title">What you need to develop on Mac</h2>
                    </header>
                    <div class="section-body">
                        <ul class="bulleted-list">
                            <li>A web browser.</li>
                            <li>A command prompt.</li>
                        </ul>
                    </div>
                </section>
                <section id="reqs-pc" class="reqs section">
                    <header class="section-header">
                        <h2 class="section-title">What you need to develop on Windows</h2>
                    </header>
                    <div class="section-body">
                        <ul class="bulleted-list">
                            <li><a href="https://www.visualstudio.com/">Visual Studio 2015</a>. The free, full-featured Visual Studio Community 2015 includes the Windows 10 developer tools, universal app templates, a code editor, a powerful debugger, Windows Mobile emulators, rich language support, and much more—all ready to use in production.</li>
                            <li>(Optional) <a href="https://dev.windows.com/en-us/downloads/windows-10-sdk">Windows Standalone SDK for Windows 10</a>. If you are using a development environment other than Visual Studio 2015, you can download a standalone Windows SDK for Windows 10 installer. Note that you do not need to install this SDK if you're using Visual Studio 2015; it is already included.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
<div id="steps-mac" class="steps">
    <div class="container">
        <div class="row">
            <div class="col-md-24 col-lg-12">
                <section class="item-section">
                    <header class="section-header">
                        <h2 class="spacer-32-bottom">Option 1: ManifoldJS</h2>
                    </header>
                    <div class="section-body spacer-32-bottom">
                        <p><a href="http://manifoldjs.com/">ManifoldJS</a> is a Node.js app that easily installs from NPM. It takes the meta-data about your web site and generates native hosted apps across Android, iOS, and Windows. If your site does not have a <a href="https://www.w3.org/TR/appmanifest/">web app manifest</a>, one will be automatically generated for you.</p>
                        <ol class="spacer-16-top">
                            <li>Install <a href="https://nodejs.org/">NodeJS</a> and <a href="https://www.npmjs.com/">NPM</a>.</li>
                            <li>
                                <p>Open a command prompt and NPM install ManifoldJS.</p>
                                <p><code>npm install -g manifoldjs</code></p>
                            </li>
                            <li>
                                <p>Run the <code>manifoldjs</code> command on your web site URL.</p>
                                <p><code>manifoldjs http://codepen.io/seksenov/pen/wBbVyb/?editors=101</code></p>
                            </li>
                            <li>Follow the steps in the video below to complete the packaging and publish your Hosted Web App to the Windows Store.</li>
                        </ol>
                        <video class="doc-video spacer-16-top" preload="none" poster="https://sec.ch9.ms/ch9/0a67/9b06e5c7-d7aa-478d-b30d-f99e145a0a67/ManifoldJS_960.jpg" controls="">
                            <source src="https://sec.ch9.ms/ch9/0a67/9b06e5c7-d7aa-478d-b30d-f99e145a0a67/ManifoldJS_high.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </div>
            <div class="col-md-24 col-lg-12">
                <section class="item-section">
                    <header class="section-header">
                        <h2 class="spacer-32-bottom">Option 2: App Studio</h2>
                    </header>
                    <div class="section-body spacer-32-bottom">
                        <p><a href="http://appstudio.windows.com/">App Studio</a> is a free, online app creation tool that allows you to quickly build Windows 10 apps.</p>
                        <ol class="spacer-16-top">
                            <li>Open <a href="http://appstudio.windows.com/">App Studio</a> in your web browser.</li>
                            <li>Click <strong>Start now!</strong>.</li>
                            <li>Under <strong>Web app templates</strong>, click <strong>Hosted Web App</strong>.</li>
                            <li>Follow the on-screen instructions to generate a package ready for publishing to the Windows Store.</li>
                        </ol>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
<div id="steps-pc" class="steps">
    <div class="container">
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
                    <a href="{{site.baseurl}}/images/CreateHWA/step1.png">
                        <img alt="Codepen example" src="{{site.baseurl}}/images/CreateHWA/step1.png" />
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
                        <img alt="Choose the blank JavaScript template" src="{{site.baseurl}}/images/CreateHWA/step2.png" />
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
                        <p>Since this is a hosted web app, where the content is served from a remote server, you will not need most of the local app files that come with the JavaScript template by default. Delete any local HTML, JavaScript, or CSS resources. All that should remain is the <code>package.appxmanifest</code> file, where you configure the app, and the image resources.</p>
                    </div>
                </section>
            </div>
            <div class="col-xs-24 col-md-12 col-md-pull-12">
                <div class="image-container">
                    <a href="{{site.baseurl}}/images/CreateHWA/step3.png">
                        <img alt="Delete highlighted folders and files" src="{{site.baseurl}}/images/CreateHWA/step3.png" />
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
                    <a href="{{site.baseurl}}/images/CreateHWA/step4.png">
                        <img alt="Copy and paste your start page URL" src="{{site.baseurl}}/images/CreateHWA/step4.png" />
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
                                <p class="spacer-16-top">1. <code>http://codepen.io/seksenov/pen/wBbVyb/?editors=101</code></p>
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
                        <img alt="Create new Content URIs" src="{{site.baseurl}}/images/WebOnPi/uris.png" />
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
                        <p class="spacer-16-top">If you are following along with our Codepen example, click the <strong>Toast Notification</strong> button to call a Windows API from hosted script.</p>
                    </div>
                </section>
            </div>
            <div class="col-xs-24 col-md-12">
                <div class="image-container">
                    <a href="{{site.baseurl}}/images/CreateHWA/step6.png">
                        <img alt="Codepen running as a Hosted Web App showing a Windows toast notification" src="{{site.baseurl}}/images/CreateHWA/step6.png" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="jumbotron jumbotron-highlight-band">
        <div class="container">
            <div class="row">
                <div class="col-xs-24 col-md-12 col-md-push-12">
                    <section class="item-section">
                        <header class="section-header">
                            <h2 class="spacer-32-bottom">Bonus: Add camera capture</h2>
                        </header>
                        <div class="section-body spacer-32-bottom">
                            <p class="spacer-32-bottom">Copy and paste the JavaScript code below to enable camera capture. If you are following along with your own website, create a button to invoke the <code>cameraCapture()</code> method. If you are following along with our Codepen example, a button is already present in HTML. Click the button and a take a picture.</p>
                            {% gist 9f9c2e6881d09116cdb3 %}
                        </div>
                    </section>
                </div>
                <div class="col-xs-24 col-md-12 col-md-pull-12">
                    <div class="image-container">
                        <a href="{{site.baseurl}}/images/CreateHWA/bonus.png">
                            <img alt="Codepen calling native camera capture" src="{{site.baseurl}}/images/CreateHWA/bonus.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

