import { Component } from "./base-component";
import { autobind } from "../Decorators/Autobind";
import { Validatable, validate } from "../Util/Validation";
import { projectState } from "../State/ProjectStateMNG";

//Project inputs
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");

    // Title input field selector
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    // Description input field selector
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    // People input field selector
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent(): void {}

  private getUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidateble: Validatable = {
      value: enteredTitle,
      required: true,
      minLength: 1,
    };
    const descriptionValidateble: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidateble: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      //validate({value:enteredTitle, required: true, minLength: 1 })
      !validate(titleValidateble) ||
      !validate(descriptionValidateble) ||
      !validate(peopleValidateble)
    ) {
      alert("Invalid number, try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log(this.titleInputElement.value);
    const userInput = this.getUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      console.log(title, desc, people);
    }
    this.clearInputs();
  }
}
