import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

export const requestUserTrueAnswer = async (question: string) => {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  const answer = await rl.question(`${question} (y/n)\n`);

  if (answer !== "y") {
    throw new Error("operation cancelled");
  }
};
