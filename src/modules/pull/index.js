import * as shell from 'shelljs';

/**
 * method to pull all given repos
 *
 * @param {Array<string>} repoUrls An array of repositories to pull
 */
async function pull(repoUrls) {
  if (!shell.which('git')) {
    throw new Error('No git found. Cannot run installation!');
  }

  for (let i = 0; i < repoUrls.length; i += 1) {
    const pullCommand = `git clone ${repoUrls[i]}`;

    process.stdout.write(`Running: ${pullCommand}`);
    const gitResult = shell.exec(pullCommand);

    if (gitResult.code !== 0) {
      throw new Error(`Failed to pull the following repo: ${repoUrls[i]}`);
    }
  }
}

export default pull;
