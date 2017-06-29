module.exports = {
  baseUrl: 'http://localhost:3000',
  versionNumber: '0.0.1',
  music: {
    // 获取最热或最新音乐地址 limit new/hot
    HOTORNEW: '/top/playlist',
    // 获取热门歌手 limit: 取出数量,默认为50  offset: 偏移数量,用于分页,如:(页数-1)*50, 其中 50 为 limit 的值,默认为0
    HOTSINGER: '/top/artists'
  }
}
