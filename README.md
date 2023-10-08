# markdown-it-vimwikitags
vimwiki tags plugin for markdown-it markdown parser

This is pretty closely aligned to my specific needs on my vimwiki being
rendered via markdown-it. I'm parsing the vimwiki tags in the format `:tag:`
into links that are pointing at my search URL. I also add a class of
`vimwikitag` to the anchor link for styling.

It shouldn't be hard to modify this to allow a more generalized output
structure, perhaps allowing for customization in the options, but I'll leave
that to contributors or forks.
