# two-versions

Two versions of the same tiny application in the same repo. One being easy test target, the other being harder with regards to finding problems.

## Getting started

Install playwright npm init playwright@latest

Install agents npx playwright init-agents --loop=vscode

Install playwright CLI npm install -g @playwright/cli@latest

Install skills playwright-cli install --skills

## Running the tests

The first time, install the dependencies and the Chromium browser:

```bash
npm install
npx playwright install chromium
```

Then, from the repo root:

```bash
npx playwright test                       # all versions (version1, version2)
npx playwright test --project=version2    # one version only
npx playwright test --ui                  # interactive UI mode
npx playwright show-report                # open the HTML report from the last run
```

You don't need to start a server yourself. Playwright runs `python3 -m http.server 8090` from the repo root, so `python3` has to be on your PATH. If something is already listening on port 8090, Playwright will use it instead of starting its own.

The default reporter is HTML. For plain pass/fail lines in the terminal, add `--reporter=list`.
