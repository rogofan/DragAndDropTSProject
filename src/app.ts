import { ProjectInput } from "./Components/Project-input";
import { ProjectList } from "./Components/Project-list";

//instance of ProjectInput, which create form itself
new ProjectInput();

//instance of ProjectList, which create list itself
new ProjectList("active");
new ProjectList("finished");

console.log("hello world");
