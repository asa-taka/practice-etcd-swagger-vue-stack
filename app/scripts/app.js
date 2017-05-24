Vue.component('app-root', {
  template: `
    <div>
      an app-root works!
    </div>
  `
})

const app = new Vue({
  el: '#app-root',
  template: `
    <div>
      <app-root></app-root>
    </div>
  `
})
