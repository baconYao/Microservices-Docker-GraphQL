import got from "got";

const LISTINGS_SERVICE_URI = "http://listings-service:7100";

export default class ListingsService {
  static async fetchAllListings() {
    // 打 listings service 的 listings endpoint，取得資料
    const body = await got.get(`${LISTINGS_SERVICE_URI}/listings`).json();
    return body;
  }
}