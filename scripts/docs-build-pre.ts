/*
 * @Description: Enhance shell script code syntax highlight for docs `shiki`
 * provide pre script `pnpm docs:build`
 * @Author: Qbenben
 * @LastEditors: Qbenben
 * @LastEditTime: 2022-08-29 18:27:13
 */

import fs from 'fs'
import ora from 'ora'
import { resolve } from 'pathe'

const resolveShikiEnhanceShell = async () => {
  const dataPath = resolve(__dirname, '../node_modules/shiki/languages/shellscript.tmLanguage.json')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const data = require(dataPath)
  data.repository.support.patterns[1].match = '(?<=^|;|&|\\s)(?:npm|npx|yarn|pnpm|brew|git|alias|bg|bind|break|builtin|caller|cd|command|compgen|complete|dirs|disown|echo|enable|eval|exec|exit|false|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|read|readonly|set|shift|shopt|source|suspend|test|times|trap|true|type|ulimit|umask|unalias|unset|wait)(?=\\s|;|&|$)'
  fs.writeFileSync(resolve(dataPath), JSON.stringify(data), 'utf-8')
}

// Main
const spinner = ora('\u001B[38;5;043mUpdate Project using cz-git Table...\u001B[0m 📦').start()
try {
  const start = Date.now()

  resolveShikiEnhanceShell()

  spinner.succeed(
    `\u001B[38;5;043mSuccessfully enhanced docs! ${((Date.now() - start) / 1000).toFixed(
      2,
    )}s\u001B[0m ✨`,
  )
}
catch (e) {
  spinner.fail(`post-build enchance pages failed: ${e}`)
}
