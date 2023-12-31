import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: "8d5c861b-044a-4978-b3ac-d9d913169ff2",
    authority:
      "https://login.microsoftonline.com/b1f4d83b-a807-43ec-b4af-fc3b4c20f9c1",
    redirectUri: "/",
    postLogoutRedirectUri: "/"
  },
  system: {
    allowNativeBroker: false // Disables WAM Broker
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
