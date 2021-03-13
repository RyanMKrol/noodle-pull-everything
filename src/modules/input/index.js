import inquirer from 'inquirer';

const QUESTIONS = [
  {
    name: 'username',
    type: 'input',
    message: 'Which user would you like to fetch repos for?',
    /**
     * Validates whether the answer has data
     *
     * @param {string} input Answer from the user
     * @returns {boolean} whether the answer is valid
     */
    validate: (input) => {
      if (input.length === 0) {
        return 'Must provide a project name!';
      }

      return true;
    },
  },
];

/**
 * method to ask the user who to fetch data for
 *
 * @returns {Promise<JSON>} A dictionary of answers
 */
async function ask() {
  return inquirer.prompt(QUESTIONS);
}

export default ask;
