# Notes From a Passive-Aggressive Fridge

[![make.fun](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/0xrifai/makefun-notes-from-a-passive-aggressive-fridge-20261125/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/0xrifai/makefun-notes-from-a-passive-aggressive-fridge-20261125/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

A make.fun entry for the bounty **"Notes From a Passive-Aggressive Fridge"**:
write one funny passive-aggressive note a smart fridge leaves for its owner,
as a single line.

## The note

> You left me open for 4 minutes and 12 seconds. I timed it. I always time it.

The fridge opens with what sounds like a neutral sensor log, admits it was
watching on purpose, then escalates into a permanent grudge. It never
forgets — it keeps a ledger.

## How it works

`main.ts` (TypeScript, Node 22) builds the note from its three beats and
writes it to the absolute path `/output/entry.txt`:

```bash
node main.ts
cat /output/entry.txt
```

The output is exactly one line, 76 characters, no trailing newline.
