function AuthCredentials(
  isAuthenticated = false,
  accessToken = "",
  client = "",
  uid = "",
  tokenType = "",
  expiry = ""
) {
  this.isAuthenticated = isAuthenticated;
  this.accessToken = accessToken;
  this.client = client;
  this.uid = uid;
  this.tokenType = tokenType;
  this.expiry = expiry;
}

export default AuthCredentials;
