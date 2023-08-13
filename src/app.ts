/// <reference path="models/darg-drop.ts" />
/// <reference path="models/Project.ts" />
/// <reference path="State/ProjectStateMNG.ts" />
/// <reference path="Util/Validation.ts" />
/// <reference path="Components/base-component.ts" />
/// <reference path="Components/Project-input.ts" />
/// <reference path="Components/Project-item.ts" />
/// <reference path="Components/Project-list.ts" />

namespace App {
  //instance of ProjectInput, which create form itself
  new ProjectInput();

  //instance of ProjectList, which create list itself
  new ProjectList("active");
  new ProjectList("finished");
}
