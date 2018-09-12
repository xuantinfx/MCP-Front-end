export const apiLogin = {
    url: window.MCP["API_HOST"] + "/api/v1/user/login",
    method: "POST",
    params: {},
    headers: {}
}

export const apiCheckIfLogin = {
    url: window.MCP["API_HOST"] + "/api/v1/user/check-if-login",
    method: "GET",
    params: {},
    headers: {}
}