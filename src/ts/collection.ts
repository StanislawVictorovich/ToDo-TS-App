export class HtmlCollection {
  protected navigationBlock: HTMLElement;
  protected backwardButton: HTMLElement;
  protected forwardButton: HTMLElement;
  protected addNewPageButton: HTMLElement;
  protected body: HTMLBodyElement;
  protected ulElements: NodeListOf<Element>;  
  protected ulElement: HTMLElement;   
  protected closeElements: HTMLCollection;
  protected listElements: NodeListOf<Element>;
  constructor () {
    this.navigationBlock = document.getElementById('NavigationBlock');
    this.body = document.getElementsByTagName('body')[0];
    this.ulElements = document.getElementsByTagName('UL');    
    this.closeElements = document.getElementsByClassName("Close");
    this.listElements = document.getElementsByTagName("LI");
  }
}
