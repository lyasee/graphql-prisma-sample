import * as path from "path";
import * as fs from "fs";
import schema from "./schema";

let typeDefs = "";
typeDefs += schema;

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") === -1;
  })
  .forEach((file) => {
    typeDefs += fs.readFileSync(path.join(__dirname, file, file + ".graphql"));
  });

export default typeDefs;
