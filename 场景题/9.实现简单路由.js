//Hash模式（基于 window.location.hash，URL 带 #）
class HashRouter {
  constructor() {
    //存储路由配置的容器 Key: path, Value: callback
    this.routes = {};
    //当前url
    this.currentUrl = "";
    //绑定this，避免事件监听中this指向window
    this.refresh = this.refresh.bind(this);

    //监听事件:页面加载完毕时执行（处理刷新页面的情况）
    window.addEventListener("load", this.refresh);
    // Hash 变化时执行
    window.addEventListener("hashchange", this.refresh);
  }
  // 注册路由
  route(path, callback) {
    this.routes[path] = callback || function () {};
  }
  //刷新页面
  refresh() {
    // 获取当前 hash，去掉开头的 #。如果没有 hash 默认给 '/'。location.hash的作用是或者url中#以及后面的部分。
    this.currentUrl = location.hash.slice(1) || "/";
    if (this.routes[this.currentUrl]) {
      this.routes[this.currentUrl]();
    }
  }
}

//history模式
class HistoryRouter {
  constructor() {
    this.routes = {};
    // 绑定上下文
    this._bindPopState = this._bindPopState.bind(this);
    // 初始化监听
    this.init();
  }
  init() {
    // 监听浏览器前进/后退按钮
    window.addEventListener('popstate', this._bindPopState);
    // 监听页面首次加载
    window.addEventListener('load', this._bindPopState);
  }
  // 注册路由
  route(path, callback) {
    this.routes[path] = callback || function() {};
  }
  // 核心：跳转页面（替代 a 标签的默认行为）
  push(path) {
    // 1. 修改浏览器地址栏 URL，但不刷新页面
    window.history.pushState({}, null, path);
    // 2. 手动执行视图更新
    this._updateView(path);
  }
  // 处理 popstate 事件（点击浏览器后退按钮时触发）
  _bindPopState() {
    const path = window.location.pathname;
    this._updateView(path);
  }
  // 更新视图逻辑
  _updateView(path) {
    if (this.routes[path]) {
      this.routes[path]();
    } else {
      this.routes['/'] && this.routes['/']();
    }
  }
}
