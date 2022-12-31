# Vipercord Blog

Official Blog Site for Vipercord made by Infinity Development and coded with NextJS and TailwindCSS!

---

## Post

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
```

Here's an example of a post's frontmatter:

```
---
title: 'Something Useful'
date: '2022-03-20'
lastmod: '2022-03-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Some useful description'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'system']
layout: PostLayout
---
```

---

### Compose a Blog Post

Run `yarn compose` or `npm run compose` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

---

### VPS Hosting

If you are hosting the blog on a VPS please use `yarn serve` or `npm run serve` as this attaches a port to next.

Port can be changed in the package.json scripts
