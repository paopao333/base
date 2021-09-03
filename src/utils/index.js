import dayjs from 'dayjs'
const plugins = { day: dayjs }
const utils = {}
export default {
  install(Vue) {
    // 挂载插件
    Object.keys(plugins).forEach(key => {
      Vue.prototype['$' + key] = plugins[key]
    })
    // 挂载utils
    Object.keys(utils).forEach(key => {
      Vue.prototype.$utils[key] = utils[key]
    })
  }
}