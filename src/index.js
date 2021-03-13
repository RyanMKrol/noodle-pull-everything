#!/usr/bin/env node

import ask from './modules/input';
import fetch from './modules/fetch';
import pull from './modules/pull';

/**
 * method to run the tool
 */
async function main() {
  const data = await ask();
  const repos = await fetch(data.username);

  const urls = repos.map((repo) => repo.html_url);

  pull(urls);
}

main();
