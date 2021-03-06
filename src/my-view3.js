import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import './shared-styles.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        input , select{
          width: 500px;
          padding: 12px;
          margin-bottom: 12px;
          border-radius: 4px;
          border: 1px solid grey;
        }
        select{
          display: block;
          height: 40px;
          width: 500px;
        }
        button {
          width: 150px;
          height: 40px;
          font-size: 16px;
          border-radius: 4px;
        }
        label {
          font-size: 14px;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="card">
        <label for="gameId">Game ID:</label><br>
        <input name="gameId" id="gameId" value="{{gameId::input}}">
        <br>
        <label for="color">Color:</label><br>
        <select id="color" value="{{color::input}}">
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="tan">Tan</option>
        </select>
        <br>
        <button on-click="_save">Save</button>
      </div>
    `;
  }

  _save(){
    localStorage.setItem('gameId', this.gameId);
    localStorage.setItem('color', this.color);
    this.set('route.path', '/view1');
  }

  ready() {
    super.ready();
    this.gameId = localStorage.getItem('gameId');
    this.color = localStorage.getItem('color');
   }

} window.customElements.define('my-view3', MyView3);
