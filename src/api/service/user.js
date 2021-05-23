export default function(base, http) {
  let baseUrl = base.user
  return {
    userInfo(params) {
      return http.get(`${baseUrl}/getUserInfo`, params)
    }
  }
}
