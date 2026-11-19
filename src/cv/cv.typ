// CV template. All copy arrives as JSON in `sys.inputs.data`, built by src/cv/data.ts
// from src/data/profile.ts — edit the copy there, not here.
#let d = json(bytes(sys.inputs.data))

#let accent = rgb("#6D28D9") // violet, darker than the site's #8B5CF6 so it holds up in print
#let muted = rgb("#55525E")
#let mono(body) = text(font: "DejaVu Sans Mono", size: 7.5pt, body)
#let bare(url) = url.replace(regex("^https?://(www\.)?"), "").trim("/", at: end)

#set document(title: d.name + " — " + d.role, author: d.name)
#set page(paper: "a4", margin: (x: 1.7cm, top: 1.5cm, bottom: 1.4cm))
#set text(font: "Libertinus Serif", size: 10pt, lang: d.lang)
#set par(justify: false, leading: 0.55em)
#set list(indent: 0.3em, body-indent: 0.5em, spacing: 0.45em, marker: text(fill: accent)[▸])
#show link: set text(fill: accent)

// Plain text where a `matched pair` of backticks marks inline code — same rule as the site's RichText.
#let rich(s) = {
  show regex("`[^`]+`"): it => raw(it.text.slice(1, -1))
  s
}

#let section(title) = {
  v(0.9em)
  block(below: 0.55em, {
    // No letter tracking: it splits words in PDF text extraction (recruiters' ATS).
    text(size: 9pt, weight: "bold", fill: accent, upper(title))
    v(-0.65em)
    line(length: 100%, stroke: 0.5pt + accent.lighten(55%))
  })
}

// Header: identity on the left, contact points stacked on the right (no mid-URL wraps).
#{
  let c = d.contact
  grid(
    columns: (1fr, auto),
    align: (left + bottom, right + bottom),
    {
      text(size: 24pt, weight: "bold", d.name)
      v(-0.45em)
      text(size: 12pt, weight: "semibold", d.role)
      linebreak()
      text(fill: muted, d.tagline)
    },
    mono({
      set par(leading: 0.5em)
      (
        text(fill: muted, d.location),
        link("mailto:" + c.email, c.email),
        link("https://" + c.website, c.website),
        link(c.linkedin, bare(c.linkedin)),
        link(c.github, bare(c.github)),
        link(c.cka, "CKA — Credly ✓"),
      ).join(linebreak())
    }),
  )
}

#section(d.labels.experience)
#for role in d.experience {
  block(breakable: false, below: 0.85em, {
    grid(
      columns: (1fr, auto),
      [*#role.company*#if "companyDescription" in role [ #text(fill: muted)[(#role.companyDescription)]] — #role.title],
      mono(text(fill: muted, role.period + if "location" in role { " · " + role.location })),
    )
    v(-0.3em)
    list(..role.highlights.map(rich))
  })
}

#section(d.labels.earlier)
#for role in d.earlier {
  grid(columns: (1fr, auto), [*#role.company* — #role.title], mono(text(fill: muted, role.period)))
}

#section(d.labels.skills)
#grid(
  columns: (auto, 1fr),
  column-gutter: 1em,
  row-gutter: 0.55em,
  ..d.skills.map(g => (mono(text(fill: muted, g.label)), g.items.join(" · "))).flatten(),
)

#section(d.labels.education)
#for e in d.education [
  #e.degree — #e.school \
]
