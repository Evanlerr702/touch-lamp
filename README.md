# Touch / Light

An interactive educational website that models a touch-sensitive desk lamp as a finite-state machine.

## Run locally
Open `index.html` in a browser. No installation or build step is required.

## Files
- `index.html`: page structure, explanation and code examples
- `styles.css`: responsive layout and lamp illustration
- `app.js`: touch events, four-state cycle, live variables and reset
- `lamp.png`: AI-generated artwork inspired by the original lamp

## State model
0 = Off, 1 = Low, 2 = Medium, 3 = High.
Each touch applies `level = (level + 1) % modes.length`.
The visual glow is illustrative; the website does not control real hardware.

## Hosting
The files are a static website and can be hosted with GitHub Pages.
