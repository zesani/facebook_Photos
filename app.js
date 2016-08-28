new Vue({
  el: '.app',
  data: {
    msg: 'hello',
    result: 'test'
  },
  methods: {
    getApi: function () {
      var url = 'https://graph.facebook.com/v2.4/342762452490458?fields=photos%7Bimages%2Cname%2Ccreated_time%2Cfrom%7D&access_token=EAACEdEose0cBAHctqs7tLDAhHyilLarQkaQexjSXBg7c0DQgV1hjWJcYurEAnI76F32RRLPY6gfDekHB2LzzBcZB35BNnAHOdkMCIB1gJG1Um0oqK1YrwfO0gqbG7YZBT6xEZCTdDH9mV6vBPuUp9iQJVB7mRTLZBi48yubS5QZDZD'
      this.$http.get(url).then(function (res) {
        this.result = JSON.parse(res.data).photos.data
      })
    }
  },
  ready: function () {
    this.getApi()
    console.log('test')
  }

})
