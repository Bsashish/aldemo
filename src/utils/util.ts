export default class util {
  public static encodeQueryURL = queryObject => {
    return new URLSearchParams(queryObject).toString();
  };
}
