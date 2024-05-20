import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type:'server',name:'TestServer',content:'checking contact'},
    {type:'server',name:'TestServer1',content:'contact1'},
    {type:'blueprint',name:'TestServer2',content:'contact2'},
    {type:'blueprint',name:'TestServer3',content:'contact3'},
    {type:'server',name:'TestServer4',content:'contact4'},
    {type:'blueprint',name:'TestServer5',content:'contact5'},
  ];
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }
  onBlueprintAdded(buePrintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:buePrintData.serverName,
      content:buePrintData.serverContent
    });
  }
}
