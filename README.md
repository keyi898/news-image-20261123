# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/keyi898/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/keyi898/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One image that sums up the world's news of Monday 23 November 2026: a clean editorial front page led by Nvidia bringing back Jensen Huang as CEO, plus Ukraine's sinking of a Russian warship off Libya, the COP31 climate summit ending without a deal, Iran vowing to break the U.S. blockade, and CrowdStrike's $43.9B purchase of Zscaler — with four more stories in an "Also today" strip. The image is drawn programmatically (HTML/SVG, rendered to a 1024×1024 PNG) and shipped as `entry.png`; `main.ts` copies it to the grader's output directory and verifies the copy is byte-exact.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024, deterministic: both runs byte-identical)
```

To re-render the image from the source layout:

```sh
chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
  --window-size=1024,1024 --screenshot=entry.png file://$PWD/news.html
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
