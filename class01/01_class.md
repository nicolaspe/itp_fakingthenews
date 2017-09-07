# Faking the news - Sept 5
"The whole age of (the) computer has made it where nobody knows exactly what's going on." - Donald J. Trump

**Why???**
- Social media: opinion-based rhetoric co-exist with factual information.
- Filter bubble: personalization isolates users in bubbles.
- Confirmation bias
- Epistemological truth: Googling is research (NOT!)

3 months before the election, fake news **major engagement** on social media. It wasn't really a concept until before elections.


### First Amendment?
"Where the press is free and every man able to read, all is safe." - Thomas Jefferson

"The man who never looks into a newspaper is better informed than he who reads them" - Thomas Jefferson, 9 years earlier...

- The idea is that an informed society makes democracy work.
- But now there's less trust than ever in news media outlets!
- News used to be about your neighborhood, about what was happening nearby. But technology, telegraph, changed that. Now we have figments of other realities ("news of the day"), which don't really have an effect on our everyday lives.
- PT Barnum effect, speaking about something to **pre-sale** it. This is what we see now, and what we could say Trump did before the campaign.
- Alt-right say that news are not honest, that they want to hide things from people to indoctrinate them. And they provide an "alternative" to that corrupted media.


### Game
Think of 3 pieces of info about yourself: 2 real and 1 fake
1. I've lived in 3 countries
- I played with Arcade Fire in a festival
- One of my best friends is a House Speaker


### Misinformation vs Disinformation
Misinformation is not intended to deceive. How does it fit with propaganda?

Edward Bernays, nephew of Sigmund Freud. For WW I created news to inspire americans to enlist. **Renewed public relations and marketing** (used to be straightforward). He tied women smoking to suffragettes and women's emancipation, then recruited famous actresses and introduced the myth that it made you fit... Before of him, women smoking was taboo.

Susan Sontag, every photograph is a manipulative act. Technologies that seem to be representative of reality, are kind of shady. *This is the same as with statistics. Data IS a part of reality, but how you show it can skew the perception.*

Now with Machine Learning and AI, forgeries will get even better. Everyone can spot a photoshopped image, there are certain giveaways. But tools are getting better, like **Real-time Facial Reenactment**!!! Pasting a source actor into the face of a target persona.


### Fact checking
Are these efforts being rendered futile? Now the political problem is that even if you prove something is true, they can try to disprove it by saying it's "fake news".

There is a very obvious political obfuscation of the truth.

Another strategy: Trump says something vague, leaving the listener to fill in the blanks. He creates the idea that there's something deeper, something happening that the media is not telling you. And this is where alt-media fills in the blanks. He is speaking to a new consciousness, to one that is inherent to the distrust of this age of computers.


### Basic Law of Rumor
For any topic, you can create and spread -really quickly- any rumor to discredit or destabilize a position.


### Faking as critical engagement
Videos: Orson Welles apologizing to the public for the Mars Invasion play, Reagan's VCR spoof inciting drug use, "Spokesman" from accepting Dow's responsibility from Bhopal tragedy and offering compensation for victims (who the f*** is Jude Finnestra? by [The Yes Men](http://theyesmen.org/)). > **Falsification as criticism**.


### Procession of the Simulacra
If you try to represent something, first you reflect on what it is in reality. As you proceed on your thought, they start deviating from the reality.

We're going to learn technical skills following the procession of the simulacra.
Our final project is to **create and introduce a fake news item**. Reflect on "why" (justification, i.e. satire, trolling) we're doing it.


## Workshop - videogrep
`videogrep` (by Sam Lavigne), command-line tool to create supercuts.

- `brew` : package manager
- `pip`: Python package manager
- [`youtube-dl`](https://rg3.github.io/youtube-dl/): BEST command-line tool to download any video from the Internet.
- [`videogrep`](https://github.com/antiboredom/videogrep): command-line supercutter

With this, we can download a video, get a transcript, and edit in any kind of ways!

### Ex 1
1. With `youtube-dl <URL>` download the target video. Add `-f` if you want a specific format option.
	- (Optional) Get the word-for-word transcript for the video file
2. Rename transcript or video file.
3. On the terminal, go to the desired folder and run `videogrep --input <FILENAME> --search 'KEYWORD' --use-transcript --search-type word`
  - In this case, it was: `videogrep --input debate2.mp4 --search 'bad' --use-transcript --search-type word`
4. Output file is **supercut.mp4**


### Assignment
1. Use `franken` option! Let's you put words on someone's mouth!
- Writing assignment
- Readings
