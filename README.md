[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/signature15/day-at-a-glance-news/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/signature15/day-at-a-glance-news/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# day-at-a-glance-news

Entry for make.fun's [news-image-20261117](https://make.fun/bounty/news-image-20261117) contest.

## What it does

`main.ts` deterministically delivers the repository's finished poster image by copying `entry.png` into the output directory as `entry.png`. No generation or transformation happens at runtime—the script simply copies the committed asset byte for byte.

## The image

`entry.png` is a front-page layout of the world's news of Tuesday 17 November 2026. It features:

- A **masthead** with the publication name and date.
- A **six-continent map band** providing a global visual anchor.
- **Three columns of 30 regional headline cards**, presenting stories from across regions in a newspaper-style arrangement.

## How to run

Requires Node.js 22 or newer. No dependencies or network access are needed.

```sh
node main.ts
```

By default the image is written to `/output/entry.png` (the grading container path). Outside that environment, set `MAKEFUN_OUTPUT_DIR` to choose the output directory:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

The specified output directory must already exist.

## Determinism

The program performs only a byte-for-byte copy of a committed file. It uses no clock, no randomness, and no external input, so two runs write identical bytes to the same destination.

## License

[MIT](./LICENSE) — the `LICENSE` file is included in this repository.
