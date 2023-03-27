# LilyBin-Clairnote

LilyBin is a web-based [LilyPond](http://www.lilypond.org) editor. See it live
at [http://lilybin.com](http://lilybin.com).

This is a version of LilyBin that supports
[Clairnote music notation](clairnote.org).

## Details

Use the `clairnote-no-server` branch for the Clairnote version.

Unlike the official LilyBin, we do not support saving files. That lets us treat
the frontend as a static site rather than needing a node server. This works by
deploying the contents of the `htdocs` directory.

The official LilyBin has an old version of pdf.js as a submodule, but here
the relevant files are just committed directly into `htdocs/pdfjs`.
(Eventually this whole app could be redone.)
