!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.jso = t())
    : (e.jso = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
      }),
      (n.r = function(e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 90))
    );
  })([
    function(e, t, n) {
      var r = n(40)("wks"),
        o = n(25),
        i = n(1).Symbol,
        u = "function" == typeof i;
      (e.exports = function(e) {
        return r[e] || (r[e] = (u && i[e]) || (u ? i : o)("Symbol." + e));
      }).store = r;
    },
    function(e, t) {
      var n = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = n);
    },
    function(e, t) {
      var n = (e.exports = { version: "2.5.3" });
      "number" == typeof __e && (__e = n);
    },
    function(e, t, n) {
      var r = n(10);
      e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e;
      };
    },
    function(e, t, n) {
      var r = n(16),
        o = n(44);
      e.exports = n(9)
        ? function(e, t, n) {
            return r.f(e, t, o(1, n));
          }
        : function(e, t, n) {
            return (e[t] = n), e;
          };
    },
    function(e, t, n) {
      var r = n(1),
        o = n(2),
        i = n(4),
        u = n(8),
        a = n(15),
        c = function(e, t, n) {
          var s,
            f,
            l,
            p,
            h = e & c.F,
            d = e & c.G,
            v = e & c.S,
            y = e & c.P,
            g = e & c.B,
            b = d ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
            w = d ? o : o[t] || (o[t] = {}),
            _ = w.prototype || (w.prototype = {});
          for (s in (d && (n = t), n))
            (l = ((f = !h && b && void 0 !== b[s]) ? b : n)[s]),
              (p =
                g && f
                  ? a(l, r)
                  : y && "function" == typeof l
                  ? a(Function.call, l)
                  : l),
              b && u(b, s, l, e & c.U),
              w[s] != l && i(w, s, p),
              y && _[s] != l && (_[s] = l);
        };
      (r.core = o),
        (c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (e.exports = c);
    },
    function(e, t) {
      e.exports = {};
    },
    function(e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function(e, t) {
        return n.call(e, t);
      };
    },
    function(e, t, n) {
      var r = n(1),
        o = n(4),
        i = n(7),
        u = n(25)("src"),
        a = Function.toString,
        c = ("" + a).split("toString");
      (n(2).inspectSource = function(e) {
        return a.call(e);
      }),
        (e.exports = function(e, t, n, a) {
          var s = "function" == typeof n;
          s && (i(n, "name") || o(n, "name", t)),
            e[t] !== n &&
              (s && (i(n, u) || o(n, u, e[t] ? "" + e[t] : c.join(String(t)))),
              e === r
                ? (e[t] = n)
                : a
                ? e[t]
                  ? (e[t] = n)
                  : o(e, t, n)
                : (delete e[t], o(e, t, n)));
        })(Function.prototype, "toString", function() {
          return ("function" == typeof this && this[u]) || a.call(this);
        });
    },
    function(e, t, n) {
      e.exports = !n(27)(function() {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
    },
    function(e, t) {
      e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var o = (function() {
        function e(t) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            console.log("Initializing a loader with url " + t),
            (this.url = t);
        }
        return r(e, [{ key: "execute", value: function() {} }]), e;
      })();
      t.default = o;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        epoch: function() {
          return Math.round(new Date().getTime() / 1e3);
        },
        debug: !1,
        uuid: function() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function(e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            }
          );
        },
        getResponseFromURL: function(e) {
          return -1 !== e.indexOf("#")
            ? r.parseQueryString(e.substring(e.indexOf("#") + 1))
            : -1 !== e.indexOf("?")
            ? r.parseQueryString(e.substring(e.indexOf("?") + 1))
            : {};
        },
        parseQueryString: function(e) {
          for (
            var t,
              n = /\+/g,
              r = /([^&;=]+)=?([^&;]*)/g,
              o = function(e) {
                return decodeURIComponent(e.replace(n, " "));
              },
              i = e,
              u = {};
            (t = r.exec(i));

          )
            u[o(t[1])] = o(t[2]);
          return u;
        },
        scopeList: function(e) {
          return r.uniqueList(e).join(" ");
        },
        uniqueList: function(e) {
          for (var t = {}, n = [], r = 0; r < e.length; r++) t[e[r]] = 1;
          for (var o in t) t.hasOwnProperty(o) && n.push(o);
          return n;
        },
        log: function(e) {
          if (console && console.log && r.debug) {
            var t = Array.prototype.slice.call(arguments);
            t.unshift("[JSO]"), console.log.apply(console, t);
          }
        },
        encodeQS: function(e) {
          var t,
            n = "",
            r = 0;
          for (t in e)
            n +=
              (0 == r++ ? "" : "&") +
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(e[t]);
          return n;
        },
        encodeURL: function(e, t) {
          var n,
            r = e,
            o = 0,
            i = -1 === e.indexOf("?") ? "?" : "&";
          for (n in t)
            r +=
              (0 == o++ ? i : "&") +
              encodeURIComponent(n) +
              "=" +
              encodeURIComponent(t[n]);
          return r;
        }
      };
      t.default = r;
    },
    function(e, t) {
      var n = {}.toString;
      e.exports = function(e) {
        return n.call(e).slice(8, -1);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
      };
    },
    function(e, t, n) {
      var r = n(14);
      e.exports = function(e, t, n) {
        if ((r(e), void 0 === t)) return e;
        switch (n) {
          case 1:
            return function(n) {
              return e.call(t, n);
            };
          case 2:
            return function(n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function(n, r, o) {
              return e.call(t, n, r, o);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    },
    function(e, t, n) {
      var r = n(3),
        o = n(87),
        i = n(86),
        u = Object.defineProperty;
      t.f = n(9)
        ? Object.defineProperty
        : function(e, t, n) {
            if ((r(e), (t = i(t, !0)), r(n), o))
              try {
                return u(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
          };
    },
    function(e, t, n) {
      "use strict";
      var r = n(14);
      e.exports.f = function(e) {
        return new (function(e) {
          var t, n;
          (this.promise = new e(function(e, r) {
            if (void 0 !== t || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (t = e), (n = r);
          })),
            (this.resolve = r(t)),
            (this.reject = r(n));
        })(e);
      };
    },
    function(e, t, n) {
      var r = n(16).f,
        o = n(7),
        i = n(0)("toStringTag");
      e.exports = function(e, t, n) {
        e &&
          !o((e = n ? e : e.prototype), i) &&
          r(e, i, { configurable: !0, value: t });
      };
    },
    function(e, t, n) {
      var r = n(13),
        o = n(0)("toStringTag"),
        i =
          "Arguments" ==
          r(
            (function() {
              return arguments;
            })()
          );
      e.exports = function(e) {
        var t, n, u;
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (n = (function(e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Object(e)), o))
          ? n
          : i
          ? r(t)
          : "Object" == (u = r(t)) && "function" == typeof t.callee
          ? "Arguments"
          : u;
      };
    },
    function(e, t, n) {
      var r = n(40)("keys"),
        o = n(25);
      e.exports = function(e) {
        return r[e] || (r[e] = o(e));
      };
    },
    function(e, t) {
      var n = Math.ceil,
        r = Math.floor;
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e;
      };
    },
    function(e, t, n) {
      var r = n(43),
        o = n(22);
      e.exports = function(e) {
        return r(o(e));
      };
    },
    function(e, t, n) {
      var r = n(84),
        o = n(39);
      e.exports =
        Object.keys ||
        function(e) {
          return r(e, o);
        };
    },
    function(e, t) {
      var n = 0,
        r = Math.random();
      e.exports = function(e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++n + r).toString(36)
        );
      };
    },
    function(e, t, n) {
      var r = n(10),
        o = n(1).document,
        i = r(o) && r(o.createElement);
      e.exports = function(e) {
        return i ? o.createElement(e) : {};
      };
    },
    function(e, t) {
      e.exports = function(e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var o = (function() {
        function e(t) {
          for (var n in ((function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          t))
            this[n] = t[n];
        }
        return (
          r(e, [
            {
              key: "set",
              value: function(e, t) {
                return (this[e] = t), this;
              }
            }
          ]),
          e
        );
      })();
      t.default = o;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n(28),
        i = (r = o) && r.__esModule ? r : { default: r };
      var u = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, i.default),
          t
        );
      })();
      t.default = u;
    },
    function(e, t, n) {
      var r = n(3),
        o = n(10),
        i = n(17);
      e.exports = function(e, t) {
        if ((r(e), o(t) && t.constructor === e)) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        try {
          return { e: !1, v: e() };
        } catch (e) {
          return { e: !0, v: e };
        }
      };
    },
    function(e, t, n) {
      var r,
        o,
        i,
        u = n(15),
        a = n(61),
        c = n(34),
        s = n(26),
        f = n(1),
        l = f.process,
        p = f.setImmediate,
        h = f.clearImmediate,
        d = f.MessageChannel,
        v = f.Dispatch,
        y = 0,
        g = {},
        b = function() {
          var e = +this;
          if (g.hasOwnProperty(e)) {
            var t = g[e];
            delete g[e], t();
          }
        },
        w = function(e) {
          b.call(e.data);
        };
      (p && h) ||
        ((p = function(e) {
          for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
          return (
            (g[++y] = function() {
              a("function" == typeof e ? e : Function(e), t);
            }),
            r(y),
            y
          );
        }),
        (h = function(e) {
          delete g[e];
        }),
        "process" == n(13)(l)
          ? (r = function(e) {
              l.nextTick(u(b, e, 1));
            })
          : v && v.now
          ? (r = function(e) {
              v.now(u(b, e, 1));
            })
          : d
          ? ((i = (o = new d()).port2),
            (o.port1.onmessage = w),
            (r = u(i.postMessage, i, 1)))
          : f.addEventListener &&
            "function" == typeof postMessage &&
            !f.importScripts
          ? ((r = function(e) {
              f.postMessage(e + "", "*");
            }),
            f.addEventListener("message", w, !1))
          : (r =
              "onreadystatechange" in s("script")
                ? function(e) {
                    c.appendChild(s("script")).onreadystatechange = function() {
                      c.removeChild(this), b.call(e);
                    };
                  }
                : function(e) {
                    setTimeout(u(b, e, 1), 0);
                  })),
        (e.exports = { set: p, clear: h });
    },
    function(e, t, n) {
      var r = n(3),
        o = n(14),
        i = n(0)("species");
      e.exports = function(e, t) {
        var n,
          u = r(e).constructor;
        return void 0 === u || void 0 == (n = r(u)[i]) ? t : o(n);
      };
    },
    function(e, t, n) {
      var r = n(1).document;
      e.exports = r && r.documentElement;
    },
    function(e, t) {
      e.exports = !1;
    },
    function(e, t, n) {
      "use strict";
      var r = n(35),
        o = n(5),
        i = n(8),
        u = n(4),
        a = n(7),
        c = n(6),
        s = n(74),
        f = n(18),
        l = n(71),
        p = n(0)("iterator"),
        h = !([].keys && "next" in [].keys()),
        d = function() {
          return this;
        };
      e.exports = function(e, t, n, v, y, g, b) {
        s(n, t, v);
        var w,
          _,
          m,
          k = function(e) {
            if (!h && e in P) return P[e];
            switch (e) {
              case "keys":
              case "values":
                return function() {
                  return new n(this, e);
                };
            }
            return function() {
              return new n(this, e);
            };
          },
          O = t + " Iterator",
          x = "values" == y,
          j = !1,
          P = e.prototype,
          S = P[p] || P["@@iterator"] || (y && P[y]),
          T = (!h && S) || k(y),
          E = y ? (x ? k("entries") : T) : void 0,
          C = ("Array" == t && P.entries) || S;
        if (
          (C &&
            (m = l(C.call(new e()))) !== Object.prototype &&
            m.next &&
            (f(m, O, !0), r || a(m, p) || u(m, p, d)),
          x &&
            S &&
            "values" !== S.name &&
            ((j = !0),
            (T = function() {
              return S.call(this);
            })),
          (r && !b) || (!h && !j && P[p]) || u(P, p, T),
          (c[t] = T),
          (c[O] = d),
          y)
        )
          if (
            ((w = {
              values: x ? T : k("values"),
              keys: g ? T : k("keys"),
              entries: E
            }),
            b)
          )
            for (_ in w) _ in P || i(P, _, w[_]);
          else o(o.P + o.F * (h || j), t, w);
        return w;
      };
    },
    function(e, t, n) {
      var r = n(0)("unscopables"),
        o = Array.prototype;
      void 0 == o[r] && n(4)(o, r, {}),
        (e.exports = function(e) {
          o[r][e] = !0;
        });
    },
    function(e, t, n) {
      var r = n(22);
      e.exports = function(e) {
        return Object(r(e));
      };
    },
    function(e, t) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
    },
    function(e, t, n) {
      var r = n(1),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
      e.exports = function(e) {
        return o[e] || (o[e] = {});
      };
    },
    function(e, t, n) {
      var r = n(21),
        o = Math.min;
      e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0;
      };
    },
    function(e, t, n) {
      var r = n(23),
        o = n(41),
        i = n(83);
      e.exports = function(e) {
        return function(t, n, u) {
          var a,
            c = r(t),
            s = o(c.length),
            f = i(u, s);
          if (e && n != n) {
            for (; s > f; ) if ((a = c[f++]) != a) return !0;
          } else
            for (; s > f; f++)
              if ((e || f in c) && c[f] === n) return e || f || 0;
          return !e && -1;
        };
      };
    },
    function(e, t, n) {
      var r = n(13);
      e.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
          };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        };
      };
    },
    function(e) {
      e.exports = {
        name: "jso",
        version: "4.1.1",
        description: "OAuth 2.0 implementation in Javascript",
        main: "dist/jso.js",
        module: "src/JSO.js",
        scripts: {
          test: "true",
          preversion: "npm test",
          version: "npm run build && git add -A dist",
          postversion: "git push && git push --tags && npm publish",
          build: "webpack --mode production --config webpack.config.js"
        },
        babel: { presets: ["env"] },
        repository: {
          type: "git",
          url: "https://github.com/andreassolberg/jso.git"
        },
        keywords: [
          "oauth",
          "authentication",
          "authorization",
          "rest",
          "api",
          "ajax",
          "jquery"
        ],
        files: ["src"],
        eslintConfig: { env: { es6: !0, browser: !0, node: !1 } },
        devDependencies: {
          "babel-core": "^6.26.0",
          "babel-loader": "^7.1.4",
          "babel-preset-env": "^1.6.1",
          "babel-preset-react": "^6.24.1",
          qunit: "^2.5.1",
          webpack: "^4.1.1",
          "webpack-cli": "^2.0.12"
        },
        author: "Andreas Åkre Solberg",
        license: "LGPL-2.1",
        bugs: { url: "https://github.com/andreassolberg/jso/issues" },
        homepage: "https://github.com/andreassolberg/jso",
        dependencies: {}
      };
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var o = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        return (
          r(e, [
            {
              key: "on",
              value: function(e, t) {
                this._callbacks || (this._callbacks = {}),
                  this._callbacks[e] || (this._callbacks[e] = []),
                  this._callbacks[e].push(t);
              }
            },
            {
              key: "emit",
              value: function(e) {
                this._callbacks || (this._callbacks = {}),
                  this._callbacks[e] || (this._callbacks[e] = []);
                for (
                  var t = Array.prototype.slice.call(arguments, 1), n = 0;
                  n < this._callbacks[e].length;
                  n++
                )
                  this._callbacks[e][n].apply(this, t);
              }
            }
          ]),
          e
        );
      })();
      t.default = o;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var o = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.config = {});
          for (var t = 0; t < arguments.length; t++)
            Object.assign(this.config, arguments[t]);
        }
        return (
          r(e, [
            {
              key: "has",
              value: function(e) {
                var t = this.config,
                  n = e.split("."),
                  r = 0;
                for (r = 0; r < n.length; r++) {
                  if (!t.hasOwnProperty(n[r])) return !1;
                  t = t[n[r]];
                }
                return !0;
              }
            },
            {
              key: "getValue",
              value: function(e, t, n) {
                n = n || !1;
                var r = this.config,
                  o = e.split("."),
                  i = 0;
                for (i = 0; i < o.length; i++) {
                  if (!r.hasOwnProperty(o[i])) {
                    r = void 0;
                    break;
                  }
                  r = r[o[i]];
                }
                if (void 0 === r) {
                  if (n)
                    throw new Error(
                      "Configuration option [" +
                        o[i] +
                        "] required but not provided."
                    );
                  return t;
                }
                return r;
              }
            }
          ]),
          e
        );
      })();
      t.default = o;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = n(28),
        u = (r = i) && r.__esModule ? r : { default: r };
      var a = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, u.default),
          o(t, [
            {
              key: "toString",
              value: function() {
                return (
                  "OAuthResponseError: [" +
                  (this.error || "unknown") +
                  "]: " +
                  (this.error_description || "unknown")
                );
              }
            }
          ]),
          t
        );
      })();
      t.default = a;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = n(29),
        u = (r = i) && r.__esModule ? r : { default: r };
      var a = (function() {
        function e(t, n) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.jso = t),
            (this.jquery = n);
        }
        return (
          o(e, [
            {
              key: "_fetch",
              value: function(e, t) {
                var n = this;
                return new Promise(function(r, o) {
                  return (
                    (t.done = r),
                    (t.fail = function(e, t, r) {
                      return 401 === parseInt(t, 10)
                        ? (n.jso.wipeTokens(), o(new u.default()))
                        : o(r);
                    }),
                    n.jquery.ajax(e, t)
                  );
                });
              }
            },
            {
              key: "fetch",
              value: function(e, t, n) {
                var r = this;
                if ((n = n || 0) > 2)
                  throw new Error(
                    "Reccursion error. Expired tokens deleted and tried again multiple times."
                  );
                var o = {},
                  i = { mode: "cors" };
                return (
                  t && ((i = t), Object.assign(i, t)),
                  t && t.jso && Object.assign(o, t.jso),
                  this.jso
                    .getToken(o)
                    .catch(function(e) {
                      console.error("Error fetching token to use ", e);
                    })
                    .then(function(o) {
                      return (
                        i.headers || (i.headers = {}),
                        (i.headers.Authorization = "Bearer " + o.access_token),
                        r._fetch(e, i).catch(function(o) {
                          if (o instanceof u.default)
                            return (
                              console.error(
                                "Token was expired. Deleting all tokens for this provider and get a new one",
                                o
                              ),
                              r.jso.wipeTokens(),
                              r.fetch(e, t, n + 1)
                            );
                        })
                      );
                    })
                );
              }
            }
          ]),
          e
        );
      })();
      t.default = a;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = n(29),
        u = (r = i) && r.__esModule ? r : { default: r };
      var a = (function() {
        function e(t) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.jso = t);
        }
        return (
          o(e, [
            {
              key: "_fetch",
              value: function(e, t) {
                return fetch(e, t).then(function(e) {
                  if (401 === e.status) throw new u.default();
                  return e;
                });
              }
            },
            {
              key: "fetch",
              value: function(e, t, n) {
                var r = this;
                if ((n = n || 0) > 2)
                  throw new Error(
                    "Reccursion error. Expired tokens deleted and tried again multiple times."
                  );
                var o = {},
                  i = { mode: "cors" };
                return (
                  t && ((i = t), Object.assign(i, t)),
                  t && t.jso && Object.assign(o, t.jso),
                  this.jso
                    .getToken(o)
                    .catch(function(e) {
                      console.error("Error fetching token to use ", e);
                    })
                    .then(function(o) {
                      return (
                        i.headers || (i.headers = {}),
                        (i.headers.Authorization = "Bearer " + o.access_token),
                        r._fetch(e, i).catch(function(o) {
                          if (o instanceof u.default)
                            return (
                              console.error(
                                "Token was expired. Deleting all tokens for this provider and get a new one",
                                o
                              ),
                              r.jso.wipeTokens(),
                              r.fetch(e, t, n + 1)
                            );
                        })
                      );
                    })
                );
              }
            }
          ]),
          e
        );
      })();
      t.default = a;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = n(11),
        u = (r = i) && r.__esModule ? r : { default: r };
      var a = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, u.default),
          o(t, [
            {
              key: "execute",
              value: function() {
                var e = this;
                return new Promise(function(t, n) {
                  window.popupCompleted = function() {
                    var e = r.location.href;
                    t(e);
                  };
                  var r = window.open(
                    e.url,
                    "jso-popup-auth",
                    "height=600,width=800"
                  );
                  if (null === r) throw new Error("Error loading popup window");
                  window.focus && r.focus();
                });
              }
            }
          ]),
          t
        );
      })();
      t.default = a;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = u(n(11)),
        i = u(n(12));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          (n.timeout = 5e3),
            (n.callback = null),
            (n.isCompleted = !1),
            (n.id = "jso_passive_iframe_" + i.default.uuid());
          var r = window.addEventListener ? "addEventListener" : "attachEvent";
          window[r];
          return (
            (n.iframe = document.createElement("iframe")),
            n.iframe.setAttribute("id", n.id),
            n.iframe.setAttribute("src", e),
            n.iframe.addEventListener("load", function(e) {
              var t = null;
              try {
                if (n.iframe.contentWindow.location.hash) {
                  var r = n.iframe.contentWindow.location.hash.substring(1);
                  t = i.default.parseQueryString(r);
                } else if (n.iframe.contentWindow.location.search) {
                  var o = n.iframe.contentWindow.location.search.substring(1);
                  t = i.default.parseQueryString(o);
                }
                null !== t
                  ? n._completed(t)
                  : n._failed(
                      new Error("Failed to obtain response value from iframe")
                    );
              } catch (e) {}
            }),
            n
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, o.default),
          r(t, [
            {
              key: "execute",
              value: function() {
                var e = this;
                return new Promise(function(t, n) {
                  (e.callback = t),
                    (e.errorCallback = n),
                    document
                      .getElementsByTagName("body")[0]
                      .appendChild(e.iframe),
                    setTimeout(function() {
                      e._failed(new Error("Loading iframe timed out"));
                    }, e.timeout);
                });
              }
            },
            {
              key: "_cleanup",
              value: function() {
                var e = document.getElementById(this.id);
                e.parentNode.removeChild(e);
              }
            },
            {
              key: "_failed",
              value: function(e) {
                this.isCompleted ||
                  (this.errorCallback &&
                    "function" == typeof this.errorCallback &&
                    this.errorCallback(e),
                  (this.isCompleted = !0),
                  this._cleanup());
              }
            },
            {
              key: "_completed",
              value: function(e) {
                this.isCompleted ||
                  (this.callback &&
                    "function" == typeof this.callback &&
                    this.callback(e),
                  (this.isCompleted = !0),
                  this._cleanup());
              }
            }
          ]),
          t
        );
      })();
      t.default = a;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = i(n(11));
      i(n(12));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, o.default),
          r(t, [
            {
              key: "execute",
              value: function() {
                var e = this;
                return new Promise(function(t, n) {
                  window.location = e.url;
                });
              }
            }
          ]),
          t
        );
      })();
      t.default = u;
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = n(12),
        u = (r = i) && r.__esModule ? r : { default: r };
      var a = new ((function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        return (
          o(e, [
            {
              key: "saveState",
              value: function(e, t) {
                localStorage.setItem("state-" + e, JSON.stringify(t));
              }
            },
            {
              key: "getState",
              value: function(e) {
                var t = JSON.parse(localStorage.getItem("state-" + e));
                return localStorage.removeItem("state-" + e), t;
              }
            },
            {
              key: "hasScope",
              value: function(e, t) {
                var n;
                if (!e.scopes) return !1;
                for (n = 0; n < e.scopes.length; n++)
                  if (e.scopes[n] === t) return !0;
                return !1;
              }
            },
            {
              key: "filterTokens",
              value: function(e, t) {
                var n,
                  r,
                  o,
                  i = [],
                  a = u.default.epoch();
                for (t || (t = []), n = 0; n < e.length; n++) {
                  for (
                    o = !0,
                      e[n].expires && e[n].expires < a + 1 && (o = !1),
                      r = 0;
                    r < t.length;
                    r++
                  )
                    this.hasScope(e[n], t[r]) || (o = !1);
                  o && i.push(e[n]);
                }
                return i;
              }
            },
            {
              key: "saveTokens",
              value: function(e, t) {
                localStorage.setItem("tokens-" + e, JSON.stringify(t));
              }
            },
            {
              key: "getTokens",
              value: function(e) {
                var t = JSON.parse(localStorage.getItem("tokens-" + e));
                return (
                  t || (t = []),
                  u.default.log(
                    "Token found when loooking up provider " +
                      e +
                      " in store " +
                      window.location.href,
                    t
                  ),
                  t
                );
              }
            },
            {
              key: "wipeTokens",
              value: function(e) {
                localStorage.removeItem("tokens-" + e);
              }
            },
            {
              key: "saveToken",
              value: function(e, t) {
                var n = this.getTokens(e);
                (n = this.filterTokens(n)).push(t), this.saveTokens(e, n);
              }
            },
            {
              key: "getToken",
              value: function(e, t) {
                var n = this.getTokens(e);
                return (n = this.filterTokens(n, t)).length < 1 ? null : n[0];
              }
            }
          ]),
          e
        );
      })())();
      t.default = a;
    },
    function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(17),
        i = n(31);
      r(r.S, "Promise", {
        try: function(e) {
          var t = o.f(this),
            n = i(e);
          return (n.e ? t.reject : t.resolve)(n.v), t.promise;
        }
      });
    },
    function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(2),
        i = n(1),
        u = n(33),
        a = n(30);
      r(r.P + r.R, "Promise", {
        finally: function(e) {
          var t = u(this, o.Promise || i.Promise),
            n = "function" == typeof e;
          return this.then(
            n
              ? function(n) {
                  return a(t, e()).then(function() {
                    return n;
                  });
                }
              : e,
            n
              ? function(n) {
                  return a(t, e()).then(function() {
                    throw n;
                  });
                }
              : e
          );
        }
      });
    },
    function(e, t, n) {
      var r = n(0)("iterator"),
        o = !1;
      try {
        var i = [7][r]();
        (i.return = function() {
          o = !0;
        }),
          Array.from(i, function() {
            throw 2;
          });
      } catch (e) {}
      e.exports = function(e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
          var i = [7],
            u = i[r]();
          (u.next = function() {
            return { done: (n = !0) };
          }),
            (i[r] = function() {
              return u;
            }),
            e(i);
        } catch (e) {}
        return n;
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(1),
        o = n(16),
        i = n(9),
        u = n(0)("species");
      e.exports = function(e) {
        var t = r[e];
        i &&
          t &&
          !t[u] &&
          o.f(t, u, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
      };
    },
    function(e, t, n) {
      var r = n(8);
      e.exports = function(e, t, n) {
        for (var o in t) r(e, o, t[o], n);
        return e;
      };
    },
    function(e, t, n) {
      var r = n(1),
        o = n(32).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        u = r.process,
        a = r.Promise,
        c = "process" == n(13)(u);
      e.exports = function() {
        var e,
          t,
          n,
          s = function() {
            var r, o;
            for (c && (r = u.domain) && r.exit(); e; ) {
              (o = e.fn), (e = e.next);
              try {
                o();
              } catch (r) {
                throw (e ? n() : (t = void 0), r);
              }
            }
            (t = void 0), r && r.enter();
          };
        if (c)
          n = function() {
            u.nextTick(s);
          };
        else if (!i || (r.navigator && r.navigator.standalone))
          if (a && a.resolve) {
            var f = a.resolve();
            n = function() {
              f.then(s);
            };
          } else
            n = function() {
              o.call(r, s);
            };
        else {
          var l = !0,
            p = document.createTextNode("");
          new i(s).observe(p, { characterData: !0 }),
            (n = function() {
              p.data = l = !l;
            });
        }
        return function(r) {
          var o = { fn: r, next: void 0 };
          t && (t.next = o), e || ((e = o), n()), (t = o);
        };
      };
    },
    function(e, t) {
      e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
          case 0:
            return r ? e() : e.call(n);
          case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
          case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
          case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
          case 4:
            return r
              ? e(t[0], t[1], t[2], t[3])
              : e.call(n, t[0], t[1], t[2], t[3]);
        }
        return e.apply(n, t);
      };
    },
    function(e, t, n) {
      var r = n(19),
        o = n(0)("iterator"),
        i = n(6);
      e.exports = n(2).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)];
      };
    },
    function(e, t, n) {
      var r = n(6),
        o = n(0)("iterator"),
        i = Array.prototype;
      e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e);
      };
    },
    function(e, t, n) {
      var r = n(3);
      e.exports = function(e, t, n, o) {
        try {
          return o ? t(r(n)[0], n[1]) : t(n);
        } catch (t) {
          var i = e.return;
          throw (void 0 !== i && r(i.call(e)), t);
        }
      };
    },
    function(e, t, n) {
      var r = n(15),
        o = n(64),
        i = n(63),
        u = n(3),
        a = n(41),
        c = n(62),
        s = {},
        f = {};
      ((t = e.exports = function(e, t, n, l, p) {
        var h,
          d,
          v,
          y,
          g = p
            ? function() {
                return e;
              }
            : c(e),
          b = r(n, l, t ? 2 : 1),
          w = 0;
        if ("function" != typeof g) throw TypeError(e + " is not iterable!");
        if (i(g)) {
          for (h = a(e.length); h > w; w++)
            if ((y = t ? b(u((d = e[w]))[0], d[1]) : b(e[w])) === s || y === f)
              return y;
        } else
          for (v = g.call(e); !(d = v.next()).done; )
            if ((y = o(v, b, d.value, t)) === s || y === f) return y;
      }).BREAK = s),
        (t.RETURN = f);
    },
    function(e, t) {
      e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || (void 0 !== r && r in e))
          throw TypeError(n + ": incorrect invocation!");
        return e;
      };
    },
    function(e, t, n) {
      "use strict";
      var r,
        o,
        i,
        u,
        a = n(35),
        c = n(1),
        s = n(15),
        f = n(19),
        l = n(5),
        p = n(10),
        h = n(14),
        d = n(66),
        v = n(65),
        y = n(33),
        g = n(32).set,
        b = n(60)(),
        w = n(17),
        _ = n(31),
        m = n(30),
        k = c.TypeError,
        O = c.process,
        x = c.Promise,
        j = "process" == f(O),
        P = function() {},
        S = (o = w.f),
        T = !!(function() {
          try {
            var e = x.resolve(1),
              t = ((e.constructor = {})[n(0)("species")] = function(e) {
                e(P, P);
              });
            return (
              (j || "function" == typeof PromiseRejectionEvent) &&
              e.then(P) instanceof t
            );
          } catch (e) {}
        })(),
        E = function(e) {
          var t;
          return !(!p(e) || "function" != typeof (t = e.then)) && t;
        },
        C = function(e, t) {
          if (!e._n) {
            e._n = !0;
            var n = e._c;
            b(function() {
              for (
                var r = e._v,
                  o = 1 == e._s,
                  i = 0,
                  u = function(t) {
                    var n,
                      i,
                      u = o ? t.ok : t.fail,
                      a = t.resolve,
                      c = t.reject,
                      s = t.domain;
                    try {
                      u
                        ? (o || (2 == e._h && M(e), (e._h = 1)),
                          !0 === u
                            ? (n = r)
                            : (s && s.enter(), (n = u(r)), s && s.exit()),
                          n === t.promise
                            ? c(k("Promise-chain cycle"))
                            : (i = E(n))
                            ? i.call(n, a, c)
                            : a(n))
                        : c(r);
                    } catch (e) {
                      c(e);
                    }
                  };
                n.length > i;

              )
                u(n[i++]);
              (e._c = []), (e._n = !1), t && !e._h && R(e);
            });
          }
        },
        R = function(e) {
          g.call(c, function() {
            var t,
              n,
              r,
              o = e._v,
              i = L(e);
            if (
              (i &&
                ((t = _(function() {
                  j
                    ? O.emit("unhandledRejection", o, e)
                    : (n = c.onunhandledrejection)
                    ? n({ promise: e, reason: o })
                    : (r = c.console) &&
                      r.error &&
                      r.error("Unhandled promise rejection", o);
                })),
                (e._h = j || L(e) ? 2 : 1)),
              (e._a = void 0),
              i && t.e)
            )
              throw t.v;
          });
        },
        L = function(e) {
          return 1 !== e._h && 0 === (e._a || e._c).length;
        },
        M = function(e) {
          g.call(c, function() {
            var t;
            j
              ? O.emit("rejectionHandled", e)
              : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
          });
        },
        I = function(e) {
          var t = this;
          t._d ||
            ((t._d = !0),
            ((t = t._w || t)._v = e),
            (t._s = 2),
            t._a || (t._a = t._c.slice()),
            C(t, !0));
        },
        A = function(e) {
          var t,
            n = this;
          if (!n._d) {
            (n._d = !0), (n = n._w || n);
            try {
              if (n === e) throw k("Promise can't be resolved itself");
              (t = E(e))
                ? b(function() {
                    var r = { _w: n, _d: !1 };
                    try {
                      t.call(e, s(A, r, 1), s(I, r, 1));
                    } catch (e) {
                      I.call(r, e);
                    }
                  })
                : ((n._v = e), (n._s = 1), C(n, !1));
            } catch (e) {
              I.call({ _w: n, _d: !1 }, e);
            }
          }
        };
      T ||
        ((x = function(e) {
          d(this, x, "Promise", "_h"), h(e), r.call(this);
          try {
            e(s(A, this, 1), s(I, this, 1));
          } catch (e) {
            I.call(this, e);
          }
        }),
        ((r = function(e) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = n(59)(x.prototype, {
          then: function(e, t) {
            var n = S(y(this, x));
            return (
              (n.ok = "function" != typeof e || e),
              (n.fail = "function" == typeof t && t),
              (n.domain = j ? O.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && C(this, !1),
              n.promise
            );
          },
          catch: function(e) {
            return this.then(void 0, e);
          }
        })),
        (i = function() {
          var e = new r();
          (this.promise = e),
            (this.resolve = s(A, e, 1)),
            (this.reject = s(I, e, 1));
        }),
        (w.f = S = function(e) {
          return e === x || e === u ? new i(e) : o(e);
        })),
        l(l.G + l.W + l.F * !T, { Promise: x }),
        n(18)(x, "Promise"),
        n(58)("Promise"),
        (u = n(2).Promise),
        l(l.S + l.F * !T, "Promise", {
          reject: function(e) {
            var t = S(this);
            return (0, t.reject)(e), t.promise;
          }
        }),
        l(l.S + l.F * (a || !T), "Promise", {
          resolve: function(e) {
            return m(a && this === u ? x : this, e);
          }
        }),
        l(
          l.S +
            l.F *
              !(
                T &&
                n(57)(function(e) {
                  x.all(e).catch(P);
                })
              ),
          "Promise",
          {
            all: function(e) {
              var t = this,
                n = S(t),
                r = n.resolve,
                o = n.reject,
                i = _(function() {
                  var n = [],
                    i = 0,
                    u = 1;
                  v(e, !1, function(e) {
                    var a = i++,
                      c = !1;
                    n.push(void 0),
                      u++,
                      t.resolve(e).then(function(e) {
                        c || ((c = !0), (n[a] = e), --u || r(n));
                      }, o);
                  }),
                    --u || r(n);
                });
              return i.e && o(i.v), n.promise;
            },
            race: function(e) {
              var t = this,
                n = S(t),
                r = n.reject,
                o = _(function() {
                  v(e, !1, function(e) {
                    t.resolve(e).then(n.resolve, r);
                  });
                });
              return o.e && r(o.v), n.promise;
            }
          }
        );
    },
    function(e, t) {
      e.exports = function(e, t) {
        return { value: t, done: !!e };
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(37),
        o = n(68),
        i = n(6),
        u = n(23);
      (e.exports = n(36)(
        Array,
        "Array",
        function(e, t) {
          (this._t = u(e)), (this._i = 0), (this._k = t);
        },
        function() {
          var e = this._t,
            t = this._k,
            n = this._i++;
          return !e || n >= e.length
            ? ((this._t = void 0), o(1))
            : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
        },
        "values"
      )),
        (i.Arguments = i.Array),
        r("keys"),
        r("values"),
        r("entries");
    },
    function(e, t, n) {
      for (
        var r = n(69),
          o = n(24),
          i = n(8),
          u = n(1),
          a = n(4),
          c = n(6),
          s = n(0),
          f = s("iterator"),
          l = s("toStringTag"),
          p = c.Array,
          h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          },
          d = o(h),
          v = 0;
        v < d.length;
        v++
      ) {
        var y,
          g = d[v],
          b = h[g],
          w = u[g],
          _ = w && w.prototype;
        if (_ && (_[f] || a(_, f, p), _[l] || a(_, l, g), (c[g] = p), b))
          for (y in r) _[y] || i(_, y, r[y], !0);
      }
    },
    function(e, t, n) {
      var r = n(7),
        o = n(38),
        i = n(20)("IE_PROTO"),
        u = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function(e) {
          return (
            (e = o(e)),
            r(e, i)
              ? e[i]
              : "function" == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? u
              : null
          );
        };
    },
    function(e, t, n) {
      var r = n(16),
        o = n(3),
        i = n(24);
      e.exports = n(9)
        ? Object.defineProperties
        : function(e, t) {
            o(e);
            for (var n, u = i(t), a = u.length, c = 0; a > c; )
              r.f(e, (n = u[c++]), t[n]);
            return e;
          };
    },
    function(e, t, n) {
      var r = n(3),
        o = n(72),
        i = n(39),
        u = n(20)("IE_PROTO"),
        a = function() {},
        c = function() {
          var e,
            t = n(26)("iframe"),
            r = i.length;
          for (
            t.style.display = "none",
              n(34).appendChild(t),
              t.src = "javascript:",
              (e = t.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              c = e.F;
            r--;

          )
            delete c.prototype[i[r]];
          return c();
        };
      e.exports =
        Object.create ||
        function(e, t) {
          var n;
          return (
            null !== e
              ? ((a.prototype = r(e)),
                (n = new a()),
                (a.prototype = null),
                (n[u] = e))
              : (n = c()),
            void 0 === t ? n : o(n, t)
          );
        };
    },
    function(e, t, n) {
      "use strict";
      var r = n(73),
        o = n(44),
        i = n(18),
        u = {};
      n(4)(u, n(0)("iterator"), function() {
        return this;
      }),
        (e.exports = function(e, t, n) {
          (e.prototype = r(u, { next: o(1, n) })), i(e, t + " Iterator");
        });
    },
    function(e, t, n) {
      var r = n(21),
        o = n(22);
      e.exports = function(e) {
        return function(t, n) {
          var i,
            u,
            a = String(o(t)),
            c = r(n),
            s = a.length;
          return c < 0 || c >= s
            ? e
              ? ""
              : void 0
            : (i = a.charCodeAt(c)) < 55296 ||
              i > 56319 ||
              c + 1 === s ||
              (u = a.charCodeAt(c + 1)) < 56320 ||
              u > 57343
            ? e
              ? a.charAt(c)
              : i
            : e
            ? a.slice(c, c + 2)
            : u - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(75)(!0);
      n(36)(
        String,
        "String",
        function(e) {
          (this._t = String(e)), (this._i = 0);
        },
        function() {
          var e,
            t = this._t,
            n = this._i;
          return n >= t.length
            ? { value: void 0, done: !0 }
            : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
        }
      );
    },
    function(e, t, n) {
      "use strict";
      var r = n(19),
        o = {};
      (o[n(0)("toStringTag")] = "z"),
        o + "" != "[object z]" &&
          n(8)(
            Object.prototype,
            "toString",
            function() {
              return "[object " + r(this) + "]";
            },
            !0
          );
    },
    function(e, t, n) {
      n(77), n(76), n(70), n(67), n(56), n(55), (e.exports = n(2).Promise);
    },
    function(e, t, n) {
      "use strict";
      var r = n(5),
        o = n(42)(!0);
      r(r.P, "Array", {
        includes: function(e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
        n(37)("includes");
    },
    function(e, t, n) {
      n(79), (e.exports = n(2).Array.includes);
    },
    function(e, t) {
      t.f = {}.propertyIsEnumerable;
    },
    function(e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    function(e, t, n) {
      var r = n(21),
        o = Math.max,
        i = Math.min;
      e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
      };
    },
    function(e, t, n) {
      var r = n(7),
        o = n(23),
        i = n(42)(!1),
        u = n(20)("IE_PROTO");
      e.exports = function(e, t) {
        var n,
          a = o(e),
          c = 0,
          s = [];
        for (n in a) n != u && r(a, n) && s.push(n);
        for (; t.length > c; ) r(a, (n = t[c++])) && (~i(s, n) || s.push(n));
        return s;
      };
    },
    function(e, t, n) {
      "use strict";
      var r = n(24),
        o = n(82),
        i = n(81),
        u = n(38),
        a = n(43),
        c = Object.assign;
      e.exports =
        !c ||
        n(27)(function() {
          var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
          return (
            (e[n] = 7),
            r.split("").forEach(function(e) {
              t[e] = e;
            }),
            7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
          );
        })
          ? function(e, t) {
              for (
                var n = u(e), c = arguments.length, s = 1, f = o.f, l = i.f;
                c > s;

              )
                for (
                  var p,
                    h = a(arguments[s++]),
                    d = f ? r(h).concat(f(h)) : r(h),
                    v = d.length,
                    y = 0;
                  v > y;

                )
                  l.call(h, (p = d[y++])) && (n[p] = h[p]);
              return n;
            }
          : c;
    },
    function(e, t, n) {
      var r = n(10);
      e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e))))
          return o;
        if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e))))
          return o;
        if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(e, t, n) {
      e.exports =
        !n(9) &&
        !n(27)(function() {
          return (
            7 !=
            Object.defineProperty(n(26)("div"), "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    function(e, t, n) {
      var r = n(5);
      r(r.S + r.F, "Object", { assign: n(85) });
    },
    function(e, t, n) {
      n(88), (e.exports = n(2).Object.assign);
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FetcherJQuery = t.Fetcher = t.IFramePassive = t.Popup = t.HTTPRedirect = t.BasicLoader = t.JSO = void 0);
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = g(n(89));
      n(80), n(78);
      var u = g(n(54)),
        a = g(n(12)),
        c = g(n(11)),
        s = g(n(53)),
        f = g(n(52)),
        l = g(n(51)),
        p = g(n(50)),
        h = g(n(49)),
        d = g(n(48)),
        v = g(n(47)),
        y = g(n(46));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(45);
      var b = { lifetime: 3600 },
        w = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              n.configure(e),
              (n.providerID = n.getProviderID()),
              (n.Loader = s.default),
              (n.store = u.default),
              (n.callbacks = {}),
              n.config.getValue("debug", !1) && (a.default.debug = !0),
              n
            );
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, y.default),
            o(t, [
              {
                key: "configure",
                value: function(e) {
                  this.config = new v.default(b, e);
                }
              },
              {
                key: "setStore",
                value: function(e) {
                  this.store = e;
                }
              },
              {
                key: "setLoader",
                value: function(e) {
                  if ("function" != typeof e)
                    throw new Error(
                      "loader MUST be an instance of the JSO BasicLoader"
                    );
                  this.Loader = e;
                }
              },
              {
                key: "getProviderID",
                value: function() {
                  var e = this.config.getValue("providerID", null);
                  if (null !== e) return e;
                  var t = this.config.getValue("client_id", null, !0);
                  return (
                    this.config.getValue("authorization", null, !0) + "|" + t
                  );
                }
              },
              {
                key: "processTokenResponse",
                value: function(e) {
                  var t = void 0;
                  if (!e.state)
                    throw new Error("Could not get state from storage.");
                  if (!(t = this.store.getState(e.state)))
                    throw new Error("Could not retrieve state");
                  if (!t.providerID)
                    throw new Error("Could not get providerid from state");
                  return (
                    a.default.log("processTokenResponse ", e, ""),
                    this.processReceivedToken(e, t)
                  );
                }
              },
              {
                key: "processReceivedToken",
                value: function(e, t) {
                  var n = a.default.epoch();
                  return (
                    (e.received = n),
                    e.expires_in
                      ? ((e.expires = n + parseInt(e.expires_in, 10)),
                        (e.expires_in = parseInt(e.expires_in, 10)))
                      : !1 === this.config.getValue("default_lifetime", null)
                      ? (e.expires = null)
                      : this.config.has("permanent_scope")
                      ? this.store.hasScope(
                          e,
                          this.config.getValue("permanent_scope")
                        ) || (e.expires = null)
                      : this.config.has("default_lifetime")
                      ? (e.expires =
                          n + this.config.getValue("default_lifetime"))
                      : (e.expires = n + 3600),
                    e.scope
                      ? ((e.scopes = e.scope.split(" ")), delete e.scope)
                      : t.scopes
                      ? (e.scopes = t.scopes)
                      : (e.scopes = []),
                    a.default.log("processTokenResponse completed ", e, ""),
                    this.store.saveToken(t.providerID, e),
                    t.restoreHash
                      ? (window.location.hash = t.restoreHash)
                      : (window.location.hash = ""),
                    e
                  );
                }
              },
              {
                key: "processAuthorizationCodeResponse",
                value: function(e) {
                  var t = this;
                  console.log(this), this.emit("authorizationCode", e);
                  var n = void 0;
                  if (!e.state)
                    throw new Error(
                      "Could not find state paramter from callback."
                    );
                  if (null === (n = this.store.getState(e.state)))
                    throw new Error("Could not find retrieve state object.");
                  if ((console.log("state", n), this.config.has("token"))) {
                    if (!this.config.has("client_secret"))
                      throw new Error("Configuration missing [client_secret]");
                    var r = new Headers();
                    r.append(
                      "Authorization",
                      "Basic " +
                        btoa(
                          this.config.getValue("client_id") +
                            ":" +
                            this.config.getValue("client_secret")
                        )
                    ),
                      r.append(
                        "Content-Type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      );
                    var o = { grant_type: "authorization_code", code: e.code };
                    n.hasOwnProperty("redirect_uri") &&
                      (o.redirect_uri = n.redirect_uri);
                    var i = {
                      mode: "cors",
                      headers: r,
                      method: "POST",
                      body: a.default.encodeQS(o)
                    };
                    return fetch(this.config.getValue("token"), i)
                      .then(function(e) {
                        return e.json();
                      })
                      .then(function(e) {
                        return (
                          a.default.log(
                            "Received response on token endpoint ",
                            e,
                            ""
                          ),
                          t.processReceivedToken(e, n)
                        );
                      });
                  }
                  a.default.log(
                    "Received an authorization code. Will not process it as the config option [token] endpoint is not set. If you would like to process the code yourself, please subscribe to the [authorizationCode] event"
                  );
                }
              },
              {
                key: "processErrorResponse",
                value: function(e) {
                  var t;
                  if (!e.state)
                    throw new Error(
                      "Could not get [state] and no default providerid is provided."
                    );
                  if (!(t = this.store.getState(e.state)))
                    throw new Error("Could not retrieve state");
                  if (!t.providerID)
                    throw new Error("Could not get providerid from state");
                  return (
                    t.restoreHash
                      ? (window.location.hash = t.restoreHash)
                      : (window.location.hash = ""),
                    new d.default(e)
                  );
                }
              },
              {
                key: "callback",
                value: function(e) {
                  var t = null;
                  if ("object" === (void 0 === e ? "undefined" : r(e))) t = e;
                  else if ("string" == typeof e)
                    t = a.default.getResponseFromURL(e);
                  else {
                    if (void 0 !== e) return;
                    t = a.default.getResponseFromURL(window.location.href);
                  }
                  if (
                    (a.default.log("Receving response in callback", t),
                    t.hasOwnProperty("access_token"))
                  )
                    return this.processTokenResponse(t);
                  if (t.hasOwnProperty("code"))
                    return this.processAuthorizationCodeResponse(t);
                  if (t.hasOwnProperty("error"))
                    throw this.processErrorResponse(t);
                }
              },
              {
                key: "dump",
                value: function() {
                  var e = this.store.getTokens(this.providerID);
                  return {
                    providerID: this.providerID,
                    tokens: e,
                    config: this.config
                  };
                }
              },
              {
                key: "_getRequestScopes",
                value: function(e) {
                  var t,
                    n = [];
                  if (this.config.has("scopes.request")) {
                    var r = this.config.getValue("scopes.request");
                    for (t = 0; t < r.length; t++) n.push(r[t]);
                  }
                  if (e && e.scopes && e.scopes.request)
                    for (t = 0; t < e.scopes.request.length; t++)
                      n.push(e.scopes.request[t]);
                  return a.default.uniqueList(n);
                }
              },
              {
                key: "_getRequiredScopes",
                value: function(e) {
                  var t,
                    n = [];
                  if (this.config.has("scopes.require")) {
                    var r = this.config.getValue("scopes.require");
                    for (t = 0; t < r.length; t++) n.push(r[t]);
                  }
                  if (e && e.scopes && e.scopes.require)
                    for (t = 0; t < e.scopes.require.length; t++)
                      n.push(e.scopes.require[t]);
                  return a.default.uniqueList(n);
                }
              },
              {
                key: "getToken",
                value: function(e) {
                  var t = this;
                  return (
                    (e = e || {}),
                    new Promise(function(n, r) {
                      var o = t._getRequiredScopes(e),
                        i = t.store.getToken(t.providerID, o);
                      if (i) return n(i);
                      if (e.hasOwnProperty("allowredir") && !e.allowredir)
                        throw new Error(
                          "Cannot obtain a token, when not allowed to redirect..."
                        );
                      n(t._authorize(e));
                    })
                  );
                }
              },
              {
                key: "checkToken",
                value: function(e) {
                  var t = this._getRequiredScopes(e);
                  return this.store.getToken(this.providerID, t);
                }
              },
              {
                key: "_authorize",
                value: function(e) {
                  var t,
                    n,
                    r,
                    o = this;
                  return Promise.resolve().then(function() {
                    var u,
                      c = o.config.getValue("authorization", null, !0),
                      s = o.config.getValue("client_id", null, !0);
                    if (e.hasOwnProperty("allowia") || o.config.has("allowia"))
                      throw new Error(
                        'The allowia option was removed in JSO 4.1.0. Instead use {request: {prompt: "none"}}'
                      );
                    if (
                      (a.default.log(
                        "About to send an authorization request to this endpoint",
                        c
                      ),
                      a.default.log("Options", e),
                      (t = {}),
                      o.config.has("request"))
                    ) {
                      var f = o.config.getValue("request");
                      t = (0, i.default)(t, f);
                    }
                    if (
                      (e.hasOwnProperty("request") &&
                        (t = (0, i.default)(t, e.request)),
                      (t.response_type =
                        e.response_type ||
                        o.config.getValue("response_type", "id_token token")),
                      (t.state = a.default.uuid()),
                      o.config.has("redirect_uri") &&
                        (t.redirect_uri = o.config.getValue(
                          "redirect_uri",
                          ""
                        )),
                      e.redirect_uri && (t.redirect_uri = e.redirect_uri),
                      (t.client_id = s),
                      (u = (r = o._getRequestScopes(e)).includes("openid")),
                      r.length > 0 && (t.scope = a.default.scopeList(r)),
                      a.default.log(
                        "Running in mode: " +
                          (u ? "OpenID Connect mode" : "OAuth mode")
                      ),
                      u && !t.hasOwnProperty("redirect_uri"))
                    )
                      throw new Error(
                        "An OpenID Request requires a redirect_uri to be set. Please add to configuration. A redirect_uri is not required for plain OAuth"
                      );
                    u && (t.nonce = a.default.uuid()),
                      a.default.log(
                        "Debug Authentication request object",
                        JSON.stringify(t, void 0, 2)
                      ),
                      (n = a.default.encodeURL(c, t)),
                      window.location.hash &&
                        (t.restoreHash = window.location.hash),
                      (t.providerID = o.providerID),
                      r && (t.scopes = r),
                      a.default.log("Saving state [" + t.state + "]"),
                      a.default.log(JSON.parse(JSON.stringify(t)));
                    var l = o.Loader;
                    return (
                      e.hasOwnProperty("loader") && (l = e.loader),
                      a.default.log("Looking for loader", e, l),
                      o.store.saveState(t.state, t),
                      o.gotoAuthorizeURL(n, l).then(function(e) {
                        if (!0 !== e) return o.callback(e);
                      })
                    );
                  });
                }
              },
              {
                key: "gotoAuthorizeURL",
                value: function(e, t) {
                  return new Promise(function(n, r) {
                    if (null !== t && "function" == typeof t) {
                      var o = new t(e);
                      if (!(o instanceof c.default))
                        throw new Error(
                          "JSO selected Loader is not an instance of BasicLoader."
                        );
                      n(o.execute());
                    } else r(new Error("Cannot redirect to authorization endpoint because of missing redirect handler"));
                  });
                }
              },
              {
                key: "wipeTokens",
                value: function() {
                  this.store.wipeTokens(this.providerID);
                }
              }
            ]),
            t
          );
        })();
      (t.JSO = w),
        (t.BasicLoader = c.default),
        (t.HTTPRedirect = s.default),
        (t.Popup = l.default),
        (t.IFramePassive = f.default),
        (t.Fetcher = p.default),
        (t.FetcherJQuery = h.default);
    }
  ]);
});
//# sourceMappingURL=jso.js.map
