import "./chunk-WDMUDEB6.js";

// node_modules/.pnpm/@ngx-translate+http-loader@16.0.0_@angular+common@18.2.12_@angular+core@18.2.12_rxjs@7.8.1_zo_wbl2wur4k3ph2khagpapesxhuy/node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
};
export {
  TranslateHttpLoader
};
//# sourceMappingURL=@ngx-translate_http-loader.js.map
