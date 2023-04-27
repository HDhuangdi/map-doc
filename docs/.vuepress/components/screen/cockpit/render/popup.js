import close from '../assets/images/close.png';
import popupHeader from '../assets/images/popup-header.png';

export default class Popup {
  info;

  marker;

  id;

  container;

  root;

  list;

  type;

  constructor(marker, info, type, list) {
    this.marker = marker;
    this.info = info;
    this.id = info.name;
    this.list = list;
    this.type = type;
    this.root = this.marker.header.div.children[0];
    this.container = document.createElement('div');
    this.container.className = 'popup-container';
    this.root.appendChild(this.container);
    this.addHTML();
  }

  addHTML() {
    const found = this.list.find((item) => item.objName === this.id);
    this.container.innerHTML = `
        <div class="popup-header">
          <div class="popup-title">
            <span>${this.info.name}</span>
            <img src="${popupHeader}">
          </div>
          <img src="${close}" class="close" onclick="closeMapPopup('${this.id}')">
        </div>
        <div class="popup-body">
          <div class="popup-subtitle">
            <div></div>
            <span>模块1</span>
          </div>
          <div class="popup-body-row">
            <div class="popup-body-row-item">
              <span>字段</span>
              <span>100</span>
              <span>万吨</span>
            </div>
            <div class="popup-body-row-item">
              <span>字段</span>
              <span>100</span>
              <span>万吨</span>
            </div>
          </div>
          <div class="popup-body-row">
            <div class="popup-body-row-item">
              <span>字段</span>
              <span>100</span>
              <span>万吨</span>
            </div>
          </div>
          <div class="popup-subtitle">
            <div></div>
            <span>模块2</span>
          </div>
          <div class="popup-body-row">
            <div class="popup-body-row-item">
              <span>字段</span>
              <span>100</span>
              <span>万吨</span>
            </div>
            <div class="popup-body-row-item">
              <span>字段</span>
              <span>100</span>
              <span>万吨</span>
            </div>
          </div>
          <div class="popup-body-row">
            <div class="popup-body-row-item">
              <span>字段</span>
              <span>100</span>
              <span>万吨</span>
            </div>
          </div>
        </div>
      `;
  }

  close() {
    this.root.removeChild(this.container);
    this.container.remove();
  }
}
