var access_token = 'EAACEdEose0cBAMu1GmEYY6eBTJUupQjBg7UIhtMpAmwSTMN9W8f8OxsdZCZAK4sye8nA8Hvf7XXH9AQEZCZBvEsPjKV2ed06EeBQOaVgjCHvkO1IBGZB5uDnQzSFwZBbegbYueh1g1EunEoYKKhCmdZAMSqz0gSs8kpZBS4W13QPZCQZDZD'
var urla = 'https://graph.facebook.com/v2.4/1192501397479794/photos?fields=images%2Ccreated_time%2Cname&limit=10&access_token='+access_token
new Vue({
  el: '#app',
  data: {
    result: 'test',
    url:urla,
    check:0,
    temp:urla
  },
  methods: {
    getApi: function () {
      var vm = this
      this.$http.get(this.url).then(function (res) {
        vm.result = JSON.parse(res.data).data
        vm.url = JSON.parse(res.data).paging.next
        if (typeof(vm.url) == "undefined")
        vm.url=vm.temp
        console.log(vm.url)
      })
    },
    page: function () {
      location.href='https://www.facebook.com/NetworkKMUTNB/?fref=ts'
    }
  },
  ready: function () {
    this.getApi()
    var v = this
    setInterval(function () {
      v.getApi()
    }, 10000)
  }
})
