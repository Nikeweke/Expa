(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"android-snippets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-snippets","aria-hidden":"true"}},[t._v("#")]),t._v(" Android snippets")]),t._v(" "),a("h6",{attrs:{id:"содержание"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#содержание","aria-hidden":"true"}},[t._v("#")]),t._v(" Содержание")]),t._v(" "),a("ul",[a("li",[t._v("Url address to make models - http://www.jsonschema2pojo.org/")]),t._v(" "),a("li",[t._v("ApiClient.java")]),t._v(" "),a("li",[t._v("ApiInterface.java")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"apiclient-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apiclient-java","aria-hidden":"true"}},[t._v("#")]),t._v(" ApiClient.java")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ApiClient")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// api adresses")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String KUNA_URL "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://kuna.io/api/v2/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String TEST_URL "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://foodcontrol.club:3000/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// retrofit instance")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Retrofit retrofit "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     *  Возвращает экземпляр Retrofit на котором потом можно вызвать методы из интерефейсов (API)\n     *  @param api_name название API\n     *  @return retrofit\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Retrofit "),a("span",{attrs:{class:"token function"}},[t._v("getApiClient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String api_name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//        if(retrofit == null){")]),t._v("\n\n        String BASE_URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api_name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"kuna"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("  BASE_URL "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" KUNA_URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"test"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("  BASE_URL "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TEST_URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" BASE_URL "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TEST_URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        retrofit "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Retrofit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("baseUrl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BASE_URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addConverterFactory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GsonConverterFactory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//        }")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" retrofit"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     *  Получить экземплям класса готовый для работы с Kuna\n     *\n     * @return Retrofit\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Retrofit "),a("span",{attrs:{class:"token function"}},[t._v("getKunaClient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getApiClient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"kuna"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     *  Получить экземплям класса готовый для работы с Test\n     *\n     * @return Retrofit\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Retrofit "),a("span",{attrs:{class:"token function"}},[t._v("getTestClient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getApiClient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"apiinterface-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apiinterface-java","aria-hidden":"true"}},[t._v("#")]),t._v(" ApiInterface.java")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Последние данные по рынку")]),t._v("\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GET")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"tickers/{market}"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                        "),a("span",{attrs:{class:"token comment"}},[t._v("// Это лишь кусок адреса. Базовый адрес находиться в KunaClient")]),t._v("\n    Call "),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Currency"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getCurrency")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Path")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"market"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" String market"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("// Тут мы пишем метод который будет соовтествоовать запросу.")]),t._v("\n   "),a("span",{attrs:{class:"token comment"}},[t._v("// <Currency> это то что мы ждем в ответ, это распарсит данные в соотвествии с моделью.")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// История торгов")]),t._v("\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GET")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"trades"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Call "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("List"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Trades"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getTradesHistory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"market"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" String market"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// @Query добавить к запросу: "?market={market}"')]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// Биржевой стакан")]),t._v("\n   "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GET")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"order_book"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Call "),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OrderBook"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getOrderBook")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"market"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" String market"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v('// @Query добавить к запросу: "?market={market}"')]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="android-snippets.md";s.default=o.exports}}]);