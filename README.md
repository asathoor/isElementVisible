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

*Suggested by a student:* If the video is larger than the window you could add a div - and simply add the video via JavaScript somewhere convenient. 
