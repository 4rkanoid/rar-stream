import {Readable} from "stream";
import RarFileBundle from "./rar-file-bundle";

export default class RarStream extends Readable {
  constructor(rarFileBundle, options) {
    super(options);
    if (!(rarFileBundle instanceof RarFileBundle)) {
      throw new Error("Invalid Arguments, rarFileBundle need to be a RarFileBundle, was: ",
        typeof rarFileBundle);
    }
  }
}