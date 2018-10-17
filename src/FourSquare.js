/* This method of adding the foursqaure API is from Forrest Walker's Connecting
Foursquare video */

//Use static methods on the class.

class Foursquare {
  static baseURL() {
    return "https://api.foursquare.com/v2";
  }
  static authentic() {
    const fsKeys = {
      client_id: "YXHLWLDBYKSGUSIOWO5FWJVTFRQW1OAOMAFWV4SNYLDX5UOW",
      client_secret: "CT5CNTHXA54TBPTHHR4GGTNATFYZZDIJD3LTSYP3CJO5GV0X",
      v: "20181013"
    };

    return Object.keys(fsKeys)
      .map(key => `${key}=${fsKeys[key]}`)
      .join("&");
  }
  static urlBuilder(params) {
    if (!params) {
      return "";
    }
    return Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join("&");
  }

  static headers() {
    return {
      Accept: "application/json"
    };
  }

  static getFetch(endPoint, method, params) {
    let getData = {
      method,
      headers: Foursquare.headers()
    };

    return fetch(
      `${Foursquare.baseURL()}${endPoint}?${Foursquare.authentic()}&${Foursquare.urlBuilder(
        params
      )}`,
      getData
    ).then(get => get.json());
  }
}
export default class FoursquareAPI {
  static search(params) {
    return Foursquare.getFetch(`/venues/search`, "GET", params);
  }

  static venueInfo(VENUE_ID) {
    return Foursquare.getFetch(`/venues/${VENUE_ID}`, "GET");
  }

  static venuePhotos(VENUE_ID) {
    return Foursquare.getFetch(`/venues/${VENUE_ID}/photos`, "GET");
  }
}
