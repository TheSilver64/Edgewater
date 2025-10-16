# Edgewater
A Text-Based Game for Revival Jam 2025.

Tweego will automatically create an index.html

Add Tweego folder path to Environment Variables.
This is for VSCode terminal to see Tweego, test with tweego -v in terminal.
If this doesn't work, change the tweego command to the directory of tweego.exe on system.

To build manually in terminal:
        tweego -o index.html passages/

        or

        "C:\(directory to tweego)\tweego.exe" -o index.html passages/

Passages are pages: storytelling text and choices.  They link to each other.
HTML file holds the whole chapter(STORY in Twine), created automatically in Tweego.
JS file for initial data.
CSS for style and visual editing.
One html, js, and css file for each chapter(STORY in Twine).