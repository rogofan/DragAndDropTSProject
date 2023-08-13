namespace App {
  //Base class
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;
    //Optional(?) parameters should be always at the end
    constructor(
      templateID: string,
      hostElementID: string,
      insertAtStart: boolean,
      newElementID?: string
    ) {
      this.templateElement = document.getElementById(
        templateID
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById(hostElementID)! as T;
      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = importedNode.firstElementChild as U;
      if (newElementID) {
        this.element.id = newElementID;
      }
      this.attach(insertAtStart);
    }

    private attach(insertAtBeginning: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtBeginning ? "afterbegin" : "beforeend",
        this.element
      );
    }
    abstract configure(): void;
    abstract renderContent(): void;
  }
}
