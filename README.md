# LOGOVIZ

This program is designed to display ASCII art by revealing one character 
at a time, at random. It takes two inputs: the ASCII art, as a string,
and an MP3 file. The time it takes to completely reveal the ASCII art is
directly tied to the duration of the MP3 file.

A demo may be found at https://www.ndhfilms.com/other/logoviz

There are two functions for displaying the ASCII art. By default, it uses
a "curve" function, which will reveal the art slowly at first, and increase 
in speed towards the end. This function uses the formula for compund interest
for calculating the rate at which to run.

The alternative function will reveal the ASCII art linearly. This is slightly 
more straightforward, but doesn't look as good as the curve function. 

# GOALS

My goal with this program was to make a creative way of displaying the logo
for my Nantucket E-Book platform. The Nantucket E-Book mascot is Otto the
whale, who is portrayed with ASCII art. 

I thought it would be fun to start presentations on Nantucket E-Books by 
slowly rendering characters onto a screen, which is gradually revealed to be
the logo (reminiscent of the opening credits for Ridley Scott's Alien).

To that end, I feel I have succeeded. The program does what it's supposed to do.

# FUTURE GOALS

Future versions may include more user-friendly elements, like HTML inputs. 
This may be part of an overall 'settings' bar in the footer, which could 
include the following:

- Responsive design. 
- Support for ASCII art beyond the Nantucket E-Books mascot. 
- Text input for ASCII art.
- A file input for the MP3 file.
- Toggle between white text on a black background, and black text on a seashell
background (seashell being the official color for Nantucket E-Books)
- Improved handling of program state. Currently, it takes a while for 
the program to be ready to run, and this isn't immediately clear to the user.
- A way to reset the program. 

I imagine a very simple interface. The footer could be hidden,
and playing/resetting the program would be controlled from the spacebar or 
Enter key. 