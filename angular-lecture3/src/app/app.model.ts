export class ServerElement {
  /* public type: string;
  public name: string;
  public content: string;
 */
  constructor(public type: string, public name: string, public content: string) { }
}

export class ServerData {
  constructor(public serverName: string, public serverContent: string) { }
}