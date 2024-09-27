# Todo

Create a program in a language of your choice, (preferebly python, js, or ruby) that reads a `markdown` file (eg. README.markdown or README.md) and parses the markdown to create an `html` document saved as (README.html) according the rules of `markdown` summarized below.

##Rules of Markdown

These are the rules to follow when parsing `markdown` to `html`.
> This document assumes some knowledge of `HTML`.

### Headings

In `markdown`, lines starting with empesant (#) followed by a space are headings. #, ##, ###, etc are h1 h2, h3 etc
> Headings are preceeded by a newline, start with a hash (#) followed by a space character (# ). The number of #s denotes the heading level.

### Paragraphs

Lines of text like this one are paragraphs in markdown. Pretty simple right?
> Paragraphs in markdown don't have special starting characters

### Blockquotes

> Paragraphs starting with a closing angle bracket like this paragraph are blockquotes 

### Lists

`Markdown` supports both ordered and unordered list, unordered lists are lines starting with any of +, -, or * and ordered lists are numbers followed by a fullstop i.e. (1., 2., i. etc). 

#### List Examples

1. Unordered List
   - This 
   - is 
   - an
   - unordered list

2. Ordered List
   1. This 
   2. is 
   3. An
   4. Ordered list


### Text Emphasis
- *Italizd text* is text between single asterixs or _underscores_.
- **Bold text** is text between double asterixs or __underscores__.
- ***Bold italized*** text is between triple asterics or __*underscores*__. 
- `Monospace` text usually used for `code snippets` is text between `backticks`
- ``Who `code` paragraphs can also be placed between double backticks.``

### Links
1. A quick link is a url between angle brackets <http://markdownguide.com>
2. A link is made by adding putting the link text between square brackets and the url between brakets like this [Learn more at markdown guide](http://www.markdownguide.com)
3. An image is just a link which starts with an exclamation mark like this ![Image Alt text](/image.png)
