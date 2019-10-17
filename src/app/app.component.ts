import { Component } from '@angular/core';

// リクエストするAPIのエンドポイントを設定
var url = '';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <p>テストしたいリクエストメソッドのボタンを押してください。</p>
      <p>コンソールでレスポンスを確認し、ステータスコードが200であれば正常応答です。</p>
   <ul>
      <li>
          <button (click)="getRequest()">Get</button>
      </li>
      <li>
        <button (click)="postRequest()">Post</button>
      </li>
      <li>
        <button (click)="putRequest()">Put</button>
      </li>
      <li>
        <button (click)="deleteRequest()">Delete</button>
      </li>
    </ul>
      <style>
        li {
          list-style: none;
          padding-left: 0;
          margin-bottom: 0.5rem;
        }
      </style>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-sample-app';

  request(method){
    fetch(url, {
      method: method,
    }).then((response)=>
    {
      console.log(response);
    })
  }

  getRequest(){
    this.request('GET');
  }

  postRequest(){
    this.request('POST');
  }

  putRequest(){
    this.request('PUT');
  }

  deleteRequest(){
    this.request('DELETE');
  }
}
