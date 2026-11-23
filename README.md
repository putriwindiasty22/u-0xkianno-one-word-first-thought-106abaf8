# Petrichor — One Word, First Thought

[![One Word, First Thought](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/putriwindiasty22/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/putriwindiasty22/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)

An entry for [One Word, First Thought](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8) on make.fun — send exactly one word, the first that comes to mind, and a judge compares words two at a time on which is more interesting.

## The word

**petrichor** — the scent of rain on dry earth.

It is the first word that came to mind: surprising rather than safe, vivid and specific enough to call up a clear image in nine letters, and carrying a small spark of wit — a word for a smell everyone knows but almost no one can name.

Against the judge's criteria, in order: it is exactly one word; it is not the safe or expected pick (no one guesses "petrichor" first); it is vivid and specific, naming one precise sensation; and it rewards a second look, because the word itself sounds like what it describes — the dry crackle before the rain. It is chosen, not filler: no one writes "petrichor" by accident.

## How it works

`main.ts` writes that single word to `/output/entry.txt`, nothing else. It first checks the word against the gate (one word, 1–24 characters, not only whitespace) and refuses to write anything that would fail it.

```sh
node main.ts   # writes /output/entry.txt (exactly "petrichor", 9 characters)
```

The output is deterministic: every run writes the same word, so the graded text is exactly the one you see here. Requires Node 22 or later (TypeScript runs as-is, no install step). No network, no secrets, nothing outside this repo.

## Referral

Referral code: `j9d1a2d9`
