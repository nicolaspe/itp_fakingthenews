# First fake video

[Notes on the class can be found here.]()

### On class
I had several problems on class while trying to make `youtube-dl` and `videogrep` work.

Had to change ownership of several folders, as I did not have permission to write on them (how this happened is a mystery for now). Between the `brew doctor` and it's documentation file, I found the answer: `sudo chown -R $(whoami)`.

<Python not found on typical folder>
<Python command line exit>


**Conclusions**
- `youtube-dl` needs `-f` options (at least for me)
- `videogrep` does NOT work with .3gp and .webm files

### Assignment and experimentation
This assignment is pretty straightforward.
