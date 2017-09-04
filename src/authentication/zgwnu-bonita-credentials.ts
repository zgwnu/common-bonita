export class ZgwnuBonitaCredentials {
    
  constructor(
    private username: string,
    private password: string,
    private navigateTo?: string,
    private secret?: string
  ) {  }

  get credsUrlEncoded(): string {
        return 'username=' + this.username + '&password=' + this.password + '&redirect=false'
  }
 
}