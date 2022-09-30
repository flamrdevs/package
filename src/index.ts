import { customAlphabet } from "nanoid";

const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
].join("");

const nanoid = customAlphabet(alphabetArray, 8);

//	====================================================================================
//	UTILITIES
//	====================================================================================

function index() {
  return "index";
}

function alphabet(size?: number) {
  return nanoid(size);
}

//	====================================================================================
//	EXPORTS
//	====================================================================================

export { index, alphabet };
