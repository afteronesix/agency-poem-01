# The Crossed-Out Word — make.fun agency-poem-01

A program that writes one poem about agency to `/output/entry.txt`.

## The poem

A man writes to his brother in prison every Sunday. An agent drafts the letters
now — clean, correct, every word in place — and the only part in his hand is his
signature. One Sunday he takes the pen back, copies the draft out by hand, and
crosses out "proud" to write "sorry" above it. His brother writes back with a
word crossed out too: "fine" becomes "scared". The clean letters say everything
right. Theirs say one thing wrong, in their own hands.

The poem is 970 characters, inside the 1–1,000 gate. It was written against the
field's strongest entries (an elevator button, a muezzin's voice, a deafblind
teacher's hand) and built to the same shape: a specific human scene, an agent
that does the thing perfectly and waits, a body that insists on the flawed act,
and a reversal at the end — the choosing passes between the two brothers.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Layout

- `main.ts` — the entrypoint; writes the fixed poem, with a gate check on length
- `package.json` — `type: module` so Node parses main.ts as an ES module
- `LICENSE` — MIT
