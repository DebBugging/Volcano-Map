import React, { Component } from "react";

class Helper {
  static baseURL() {
    return "https://api.foursquare.com/v2/";
  }

  static authentication() {
    const keys = {
      client_id: "YXHLWLDBYKSGUSIOWO5FWJVTFRQW1OAOMAFWV4SNYLDX5UOW",
      client_secret: "CT5CNTHXA54TBPTHHR4GGTNATFYZZDIJD3LTSYP3CJO5GV0X",
      version: "20181011"
    };

    return Object.keys(keys)
      .map(key => "${keys}=${keys[key]}")
      .join("&");
  }

  static urlBuilder(urlParams) {
    !urlParams ? return ""; : return Object.keys(urlParams).map(key => '${key}=${urlParams[key]}').join("&");
  }

  static headers() {
      return {
          Accept: "application/json"
      };
  }

  static simpleFetch(endpoint, method urlParams) {

  }
}
