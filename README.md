Is my element visible
=====================

Use the code sample like this:

~~~~
if (elFllVsbl ( lyd )){ ...
~~~~  

and not like this:

~~~~
if (elFllVsbl ( mySound )){ ...
~~~~

The solution is inspired by an original idea by Bror Arnfast.

# Issues:

## No sound in Chrome

The Chrome browser will not play the sound. Probably it's a security feature. Automatic playing of sound files are prohibited in the browser, but if you add a button and ask for a click the user can start the sound.

![Screendump from Stackoverflow](/images/workaround.png)

A suggested solution is [see this thread on Stackoverflow](https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome)


## If the video is larger than the viewport

*Suggested by a student:* If the video is larger than the window you could add a div with an id. When the video is visible add the video via JavaScript somewhere convenient.

E.g. a script along these lines:

~~~~
let srcTag = document.createElement("source");
let video2src = "media/parade-edinburgh-2015.MP4";
srcTag.src = video2src;
document.getElementById('video2').appendChild(srcTag);
~~~~
