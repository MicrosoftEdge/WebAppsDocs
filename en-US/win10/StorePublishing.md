# Publishing Your Web App to the Windows Store

## **Option 1:** Visual Studio

**Best for:** If you have an existing website, Windows 10, and Visual Studio 2015 Community or higher.

[Tutorial](#)

[Integrate with the platform](#)

## **Option 2:** ManifoldJS

**Best for:** If you would like to publish a cross platform app to multiple app Stores.

[ManifoldJS Dev Minute Video](https://channel9.msdn.com/Blogs/One-Dev-Minute/Publishing-a-UWP-Web-App-on-a-Mac-using-ManifoldJS)

[ManifoldJS site and docs](http://manifoldjs.com/)


## **Option 3:** Chrome App Conversion Tool

**Best for:** If you have an existing Hosted App on the Chrome Web Store.

To get started, make sure you have `Node JS` and `npm` installed. Then run the following command to install:
```
npm i -g hwa-cli
```

Then, to convert your app, run:
```
hwa convert path/to/chromeapp.crx
```

If you have a `.zip` file, simply change the extension to `.web` and run the `hwa convert` command above.

**What you need to know:**
- Flash is not supported
- When creating the Windows version of the manifest, if you are using an Auth provider other than Facebook (list others here), you will need to enter your auth provider into the `<uap:ApplicationContentURIRules>` section of the manifest.
- There is some basic image manipulation done to your icons. We will downscale large images, and pad small images. If you want to have the best images possible, you will need to supply new icons. The supported icon sizes can be found [here](#).

[hwa-cli GitHub](https://github.com/MicrosoftEdge/hwa-cli)


## **Option 4:** App Studio

**Best for:** You want to quickly try out and publish your website as an app.

[App Studio](http://appstudio.windows.com/)

[Documentation](http://appstudio.windows.com/en-us/home/howto)

## **Option 5:** Direct Store Submission *(Coming Soon...)*

**Best for:** You have an existing W3C Manifest or Hosted App on the Chrome Web Store.
