class Router {
  constructor() {
    this.routes = {};
    window.addEventListener('popstate', this.handleRoute.bind(this));
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e) => {
        if (e.target.matches('a')) {
          e.preventDefault();
          const href = e.target.getAttribute('href');
          if (href.endsWith('.html')) {
            // HTML 파일 링크는 그대로 이동
            window.location.href = href;
          } else {
            // 라우터로 처리
            this.navigate(href);
          }
        }
      });
    });
  }

  addRoute(path, callback) {
    this.routes[path] = callback;
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    const callback = this.routes[path] || this.routes['/'];
    if (callback) callback();
  }
}
