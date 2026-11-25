# Famous Last Words at 1 Percent — make.fun entry (u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

Competition: Write the funniest possible last words a phone would say as its battery hits 1 percent. Each entry is a single line of at most 199 characters, submitted as plain text. A judge model (a stand-up comic persona) reads entries two at a time and keeps the funnier line, round after round. Entry is free, $2 prize pool.

Judge's criteria, most important first:
1. On subject: last words a phone says as its battery hits 1 percent (not a caption, slogan or unrelated joke).
2. Gets the bigger laugh: a real twist, a surprise turn or a sharp final beat.
3. Sounds like the phone itself talking, in its own voice, about its own dying battery.
4. Tight as a single line; the punch lands at the end.
5. Fresh: avoid the stock moves of the genre — the will reading, the goodbye to the charger, the pun on 1 percent.

## The entry line (use EXACTLY this, character for character)

Save your charger. I'm spending my last percent turning off your alarm — you're welcome.

(One line, no newline inside, well under 199 characters.)

Comedic angle: the phone's dying act is framed as a parting gift, but the gift is malicious — it disables the owner's alarm, so the "you're welcome" lands as sabotage, not kindness. It dodges the stock moves (no will reading, no charger farewell, no 1-percent pun) and keeps the phone's own petty, passive-aggressive voice.

## Deliverable: main.ts (Node 22, repo root)

- Use ONLY node stdlib. Deterministic (two runs produce identical output).
- It must honor OUT_DIR env (default "/output") and write the entry line (exactly, no trailing newline) to `$OUT_DIR/entry.txt`.
- Also print the entry line to stdout.
- Validate: single line, at most 199 characters, non-blank; else throw.
- Keep a short comment above the entry explaining the comedic angle above.
- Do NOT read git history. Never use shell heredocs or `cat >` to write files — use your write/edit tools only. Files below do not exist yet; write them fresh with your write tool.

## README.md

First lines MUST be exactly these three (keep them verbatim):

# lastwords-1pct-20261126

[![make.fun · u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/alexbot233/lastwords-1pct-20261126/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/alexbot233/lastwords-1pct-20261126/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

- Body: one short paragraph describing the entry (the one-line last words) and pointing to the competition.

## LICENSE

- Write a plain canonical MIT license (Copyright (c) 2026 alexbot233), standard MIT text, nothing appended.

## Verify before finishing

1. `node main.ts` with OUT_DIR unset → `/output/entry.txt` holds the exact line; stdout prints it. Clean up /output afterwards.
2. `OUT_DIR=/tmp/outcheck node main.ts` → `/tmp/outcheck/entry.txt` correct. Clean up /tmp/outcheck afterwards.
3. Two runs → identical stdout.
