module.exports = {

"[project]/node_modules/.pnpm/@metamask+sdk@0.32.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CommunicationLayerPreference": (()=>$o),
    "ConnectionStatus": (()=>vo),
    "DEFAULT_SERVER_URL": (()=>ho),
    "EventType": (()=>bo),
    "MessageType": (()=>Co),
    "MetaMaskSDK": (()=>tf),
    "MetaMaskSDKEvent": (()=>Fu),
    "PROVIDER_UPDATE_TYPE": (()=>uh),
    "PlatformType": (()=>Bo),
    "SDKProvider": (()=>Wu),
    "default": (()=>tf)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$4$2e$1$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/cross-fetch@4.1.0/node_modules/cross-fetch/dist/node-ponyfill.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/debug@4.3.7/node_modules/debug/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter2$40$6$2e$4$2e$9$2f$node_modules$2f$eventemitter2$2f$lib$2f$eventemitter2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter2@6.4.9/node_modules/eventemitter2/lib/eventemitter2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$socket$2e$io$2d$client$40$4$2e$8$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/socket.io-client@4.8.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$socket$2e$io$2d$client$40$4$2e$8$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/socket.io-client@4.8.1_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript) <export default as validate>");
;
;
;
;
;
function a(e, t, n, r) {
    return new (n || (n = Promise))(function(i, o) {
        function s(e) {
            try {
                c(r.next(e));
            } catch (e) {
                o(e);
            }
        }
        function a(e) {
            try {
                c(r.throw(e));
            } catch (e) {
                o(e);
            }
        }
        function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                e(t);
            })).then(s, a);
        }
        c((r = r.apply(e, t || [])).next());
    });
}
"function" == typeof SuppressedError && SuppressedError;
var c = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, l = [], d = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = !1;
function f() {
    h = !0;
    for(var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0; t < 64; ++t)l[t] = e[t], d[e.charCodeAt(t)] = t;
    d["-".charCodeAt(0)] = 62, d["_".charCodeAt(0)] = 63;
}
function p(e, t, n) {
    for(var r, i, o = [], s = t; s < n; s += 3)r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], o.push(l[(i = r) >> 18 & 63] + l[i >> 12 & 63] + l[i >> 6 & 63] + l[63 & i]);
    return o.join("");
}
function g(e) {
    var t;
    h || f();
    for(var n = e.length, r = n % 3, i = "", o = [], s = 16383, a = 0, c = n - r; a < c; a += s)o.push(p(e, a, a + s > c ? c : a + s));
    return 1 === r ? (t = e[n - 1], i += l[t >> 2], i += l[t << 4 & 63], i += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i += l[t >> 10], i += l[t >> 4 & 63], i += l[t << 2 & 63], i += "="), o.push(i), o.join("");
}
function m(e, t, n, r, i) {
    var o, s, a = 8 * i - r - 1, c = (1 << a) - 1, l = c >> 1, d = -7, u = n ? i - 1 : 0, h = n ? -1 : 1, f = e[t + u];
    for(u += h, o = f & (1 << -d) - 1, f >>= -d, d += a; d > 0; o = 256 * o + e[t + u], u += h, d -= 8);
    for(s = o & (1 << -d) - 1, o >>= -d, d += r; d > 0; s = 256 * s + e[t + u], u += h, d -= 8);
    if (0 === o) o = 1 - l;
    else {
        if (o === c) return s ? NaN : 1 / 0 * (f ? -1 : 1);
        s += Math.pow(2, r), o -= l;
    }
    return (f ? -1 : 1) * s * Math.pow(2, o - r);
}
function y(e, t, n, r, i, o) {
    var s, a, c, l = 8 * o - i - 1, d = (1 << l) - 1, u = d >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : o - 1, p = r ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = d) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (t += s + u >= 1 ? h / c : h * Math.pow(2, 1 - u)) * c >= 2 && (s++, c /= 2), s + u >= d ? (a = 0, s = d) : s + u >= 1 ? (a = (t * c - 1) * Math.pow(2, i), s += u) : (a = t * Math.pow(2, u - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + f] = 255 & a, f += p, a /= 256, i -= 8);
    for(s = s << i | a, l += i; l > 0; e[n + f] = 255 & s, f += p, s /= 256, l -= 8);
    e[n + f - p] |= 128 * g;
}
var v = {}.toString, b = Array.isArray || function(e) {
    return "[object Array]" == v.call(e);
};
S.TYPED_ARRAY_SUPPORT = void 0 === c.TYPED_ARRAY_SUPPORT || c.TYPED_ARRAY_SUPPORT;
var w = E();
function E() {
    return S.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function C(e, t) {
    if (E() < t) throw new RangeError("Invalid typed array length");
    return S.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = S.prototype : (null === e && (e = new S(t)), e.length = t), e;
}
function S(e, t, n) {
    if (!(S.TYPED_ARRAY_SUPPORT || this instanceof S)) return new S(e, t, n);
    if ("number" == typeof e) {
        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
        return x(this, e);
    }
    return _(this, e, t, n);
}
function _(e, t, n, r) {
    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
        S.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = S.prototype : e = M(e, t);
        return e;
    }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
        "string" == typeof n && "" !== n || (n = "utf8");
        if (!S.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | R(t, n);
        e = C(e, r);
        var i = e.write(t, n);
        i !== r && (e = e.slice(0, i));
        return e;
    }(e, t, n) : function(e, t) {
        if (I(t)) {
            var n = 0 | A(t.length);
            return 0 === (e = C(e, n)).length || t.copy(e, 0, 0, n), e;
        }
        if (t) {
            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? C(e, 0) : M(e, t);
            if ("Buffer" === t.type && b(t.data)) return M(e, t.data);
        }
        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(e, t);
}
function k(e) {
    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
    if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function x(e, t) {
    if (k(t), e = C(e, t < 0 ? 0 : 0 | A(t)), !S.TYPED_ARRAY_SUPPORT) for(var n = 0; n < t; ++n)e[n] = 0;
    return e;
}
function M(e, t) {
    var n = t.length < 0 ? 0 : 0 | A(t.length);
    e = C(e, n);
    for(var r = 0; r < n; r += 1)e[r] = 255 & t[r];
    return e;
}
function A(e) {
    if (e >= E()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + E().toString(16) + " bytes");
    return 0 | e;
}
function I(e) {
    return !(null == e || !e._isBuffer);
}
function R(e, t) {
    if (I(e)) return e.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
    "string" != typeof e && (e = "" + e);
    var n = e.length;
    if (0 === n) return 0;
    for(var r = !1;;)switch(t){
        case "ascii":
        case "latin1":
        case "binary":
            return n;
        case "utf8":
        case "utf-8":
        case void 0:
            return re(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * n;
        case "hex":
            return n >>> 1;
        case "base64":
            return ie(e).length;
        default:
            if (r) return re(e).length;
            t = ("" + t).toLowerCase(), r = !0;
    }
}
function P(e, t, n) {
    var r = !1;
    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
    if ((n >>>= 0) <= (t >>>= 0)) return "";
    for(e || (e = "utf8");;)switch(e){
        case "hex":
            return V(this, t, n);
        case "utf8":
        case "utf-8":
            return H(this, t, n);
        case "ascii":
            return z(this, t, n);
        case "latin1":
        case "binary":
            return q(this, t, n);
        case "base64":
            return U(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return W(this, t, n);
        default:
            if (r) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), r = !0;
    }
}
function L(e, t, n) {
    var r = e[t];
    e[t] = e[n], e[n] = r;
}
function O(e, t, n, r, i) {
    if (0 === e.length) return -1;
    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
        if (i) return -1;
        n = e.length - 1;
    } else if (n < 0) {
        if (!i) return -1;
        n = 0;
    }
    if ("string" == typeof t && (t = S.from(t, r)), I(t)) return 0 === t.length ? -1 : T(e, t, n, r, i);
    if ("number" == typeof t) return t &= 255, S.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : T(e, [
        t
    ], n, r, i);
    throw new TypeError("val must be string, number or Buffer");
}
function T(e, t, n, r, i) {
    var o, s = 1, a = e.length, c = t.length;
    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        s = 2, a /= 2, c /= 2, n /= 2;
    }
    function l(e, t) {
        return 1 === s ? e[t] : e.readUInt16BE(t * s);
    }
    if (i) {
        var d = -1;
        for(o = n; o < a; o++)if (l(e, o) === l(t, -1 === d ? 0 : o - d)) {
            if (-1 === d && (d = o), o - d + 1 === c) return d * s;
        } else -1 !== d && (o -= o - d), d = -1;
    } else for(n + c > a && (n = a - c), o = n; o >= 0; o--){
        for(var u = !0, h = 0; h < c; h++)if (l(e, o + h) !== l(t, h)) {
            u = !1;
            break;
        }
        if (u) return o;
    }
    return -1;
}
function N(e, t, n, r) {
    n = Number(n) || 0;
    var i = e.length - n;
    r ? (r = Number(r)) > i && (r = i) : r = i;
    var o = t.length;
    if (o % 2 != 0) throw new TypeError("Invalid hex string");
    r > o / 2 && (r = o / 2);
    for(var s = 0; s < r; ++s){
        var a = parseInt(t.substr(2 * s, 2), 16);
        if (isNaN(a)) return s;
        e[n + s] = a;
    }
    return s;
}
function D(e, t, n, r) {
    return oe(re(t, e.length - n), e, n, r);
}
function $(e, t, n, r) {
    return oe(function(e) {
        for(var t = [], n = 0; n < e.length; ++n)t.push(255 & e.charCodeAt(n));
        return t;
    }(t), e, n, r);
}
function B(e, t, n, r) {
    return $(e, t, n, r);
}
function K(e, t, n, r) {
    return oe(ie(t), e, n, r);
}
function j(e, t, n, r) {
    return oe(function(e, t) {
        for(var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)r = (n = e.charCodeAt(s)) >> 8, i = n % 256, o.push(i), o.push(r);
        return o;
    }(t, e.length - n), e, n, r);
}
function U(e, t, n) {
    return 0 === t && n === e.length ? g(e) : g(e.slice(t, n));
}
function H(e, t, n) {
    n = Math.min(e.length, n);
    for(var r = [], i = t; i < n;){
        var o, s, a, c, l = e[i], d = null, u = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
        if (i + u <= n) switch(u){
            case 1:
                l < 128 && (d = l);
                break;
            case 2:
                128 == (192 & (o = e[i + 1])) && (c = (31 & l) << 6 | 63 & o) > 127 && (d = c);
                break;
            case 3:
                o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (c = (15 & l) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (d = c);
                break;
            case 4:
                o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & l) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (d = c);
        }
        null === d ? (d = 65533, u = 1) : d > 65535 && (d -= 65536, r.push(d >>> 10 & 1023 | 55296), d = 56320 | 1023 & d), r.push(d), i += u;
    }
    return function(e) {
        var t = e.length;
        if (t <= F) return String.fromCharCode.apply(String, e);
        var n = "", r = 0;
        for(; r < t;)n += String.fromCharCode.apply(String, e.slice(r, r += F));
        return n;
    }(r);
}
S.poolSize = 8192, S._augment = function(e) {
    return e.__proto__ = S.prototype, e;
}, S.from = function(e, t, n) {
    return _(null, e, t, n);
}, S.TYPED_ARRAY_SUPPORT && (S.prototype.__proto__ = Uint8Array.prototype, S.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && S[Symbol.species]), S.alloc = function(e, t, n) {
    return function(e, t, n, r) {
        return k(t), t <= 0 ? C(e, t) : void 0 !== n ? "string" == typeof r ? C(e, t).fill(n, r) : C(e, t).fill(n) : C(e, t);
    }(null, e, t, n);
}, S.allocUnsafe = function(e) {
    return x(null, e);
}, S.allocUnsafeSlow = function(e) {
    return x(null, e);
}, S.isBuffer = se, S.compare = function(e, t) {
    if (!I(e) || !I(t)) throw new TypeError("Arguments must be Buffers");
    if (e === t) return 0;
    for(var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)if (e[i] !== t[i]) {
        n = e[i], r = t[i];
        break;
    }
    return n < r ? -1 : r < n ? 1 : 0;
}, S.isEncoding = function(e) {
    switch(String(e).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1;
    }
}, S.concat = function(e, t) {
    if (!b(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === e.length) return S.alloc(0);
    var n;
    if (void 0 === t) for(t = 0, n = 0; n < e.length; ++n)t += e[n].length;
    var r = S.allocUnsafe(t), i = 0;
    for(n = 0; n < e.length; ++n){
        var o = e[n];
        if (!I(o)) throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(r, i), i += o.length;
    }
    return r;
}, S.byteLength = R, S.prototype._isBuffer = !0, S.prototype.swap16 = function() {
    var e = this.length;
    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var t = 0; t < e; t += 2)L(this, t, t + 1);
    return this;
}, S.prototype.swap32 = function() {
    var e = this.length;
    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var t = 0; t < e; t += 4)L(this, t, t + 3), L(this, t + 1, t + 2);
    return this;
}, S.prototype.swap64 = function() {
    var e = this.length;
    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var t = 0; t < e; t += 8)L(this, t, t + 7), L(this, t + 1, t + 6), L(this, t + 2, t + 5), L(this, t + 3, t + 4);
    return this;
}, S.prototype.toString = function() {
    var e = 0 | this.length;
    return 0 === e ? "" : 0 === arguments.length ? H(this, 0, e) : P.apply(this, arguments);
}, S.prototype.equals = function(e) {
    if (!I(e)) throw new TypeError("Argument must be a Buffer");
    return this === e || 0 === S.compare(this, e);
}, S.prototype.inspect = function() {
    var e = "";
    return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">";
}, S.prototype.compare = function(e, t, n, r, i) {
    if (!I(e)) throw new TypeError("Argument must be a Buffer");
    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
    if (r >= i && t >= n) return 0;
    if (r >= i) return -1;
    if (t >= n) return 1;
    if (this === e) return 0;
    for(var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = e.slice(t, n), d = 0; d < a; ++d)if (c[d] !== l[d]) {
        o = c[d], s = l[d];
        break;
    }
    return o < s ? -1 : s < o ? 1 : 0;
}, S.prototype.includes = function(e, t, n) {
    return -1 !== this.indexOf(e, t, n);
}, S.prototype.indexOf = function(e, t, n) {
    return O(this, e, t, n, !0);
}, S.prototype.lastIndexOf = function(e, t, n) {
    return O(this, e, t, n, !1);
}, S.prototype.write = function(e, t, n, r) {
    if (void 0 === t) r = "utf8", n = this.length, t = 0;
    else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
    else {
        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
    }
    var i = this.length - t;
    if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");
    for(var o = !1;;)switch(r){
        case "hex":
            return N(this, e, t, n);
        case "utf8":
        case "utf-8":
            return D(this, e, t, n);
        case "ascii":
            return $(this, e, t, n);
        case "latin1":
        case "binary":
            return B(this, e, t, n);
        case "base64":
            return K(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return j(this, e, t, n);
        default:
            if (o) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), o = !0;
    }
}, S.prototype.toJSON = function() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
var F = 4096;
function z(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);
    for(var i = t; i < n; ++i)r += String.fromCharCode(127 & e[i]);
    return r;
}
function q(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);
    for(var i = t; i < n; ++i)r += String.fromCharCode(e[i]);
    return r;
}
function V(e, t, n) {
    var r = e.length;
    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
    for(var i = "", o = t; o < n; ++o)i += ne(e[o]);
    return i;
}
function W(e, t, n) {
    for(var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)i += String.fromCharCode(r[o] + 256 * r[o + 1]);
    return i;
}
function G(e, t, n) {
    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
}
function Z(e, t, n, r, i, o) {
    if (!I(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw new RangeError("Index out of range");
}
function Y(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1);
    for(var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
}
function J(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1);
    for(var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
}
function X(e, t, n, r, i, o) {
    if (n + r > e.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
}
function Q(e, t, n, r, i) {
    return i || X(e, 0, n, 4), y(e, t, n, r, 23, 4), n + 4;
}
function ee(e, t, n, r, i) {
    return i || X(e, 0, n, 8), y(e, t, n, r, 52, 8), n + 8;
}
S.prototype.slice = function(e, t) {
    var n, r = this.length;
    if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), S.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = S.prototype;
    else {
        var i = t - e;
        n = new S(i, void 0);
        for(var o = 0; o < i; ++o)n[o] = this[o + e];
    }
    return n;
}, S.prototype.readUIntLE = function(e, t, n) {
    e |= 0, t |= 0, n || G(e, t, this.length);
    for(var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);)r += this[e + o] * i;
    return r;
}, S.prototype.readUIntBE = function(e, t, n) {
    e |= 0, t |= 0, n || G(e, t, this.length);
    for(var r = this[e + --t], i = 1; t > 0 && (i *= 256);)r += this[e + --t] * i;
    return r;
}, S.prototype.readUInt8 = function(e, t) {
    return t || G(e, 1, this.length), this[e];
}, S.prototype.readUInt16LE = function(e, t) {
    return t || G(e, 2, this.length), this[e] | this[e + 1] << 8;
}, S.prototype.readUInt16BE = function(e, t) {
    return t || G(e, 2, this.length), this[e] << 8 | this[e + 1];
}, S.prototype.readUInt32LE = function(e, t) {
    return t || G(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
}, S.prototype.readUInt32BE = function(e, t) {
    return t || G(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
}, S.prototype.readIntLE = function(e, t, n) {
    e |= 0, t |= 0, n || G(e, t, this.length);
    for(var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);)r += this[e + o] * i;
    return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
}, S.prototype.readIntBE = function(e, t, n) {
    e |= 0, t |= 0, n || G(e, t, this.length);
    for(var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);)o += this[e + --r] * i;
    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
}, S.prototype.readInt8 = function(e, t) {
    return t || G(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
}, S.prototype.readInt16LE = function(e, t) {
    t || G(e, 2, this.length);
    var n = this[e] | this[e + 1] << 8;
    return 32768 & n ? 4294901760 | n : n;
}, S.prototype.readInt16BE = function(e, t) {
    t || G(e, 2, this.length);
    var n = this[e + 1] | this[e] << 8;
    return 32768 & n ? 4294901760 | n : n;
}, S.prototype.readInt32LE = function(e, t) {
    return t || G(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
}, S.prototype.readInt32BE = function(e, t) {
    return t || G(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
}, S.prototype.readFloatLE = function(e, t) {
    return t || G(e, 4, this.length), m(this, e, !0, 23, 4);
}, S.prototype.readFloatBE = function(e, t) {
    return t || G(e, 4, this.length), m(this, e, !1, 23, 4);
}, S.prototype.readDoubleLE = function(e, t) {
    return t || G(e, 8, this.length), m(this, e, !0, 52, 8);
}, S.prototype.readDoubleBE = function(e, t) {
    return t || G(e, 8, this.length), m(this, e, !1, 52, 8);
}, S.prototype.writeUIntLE = function(e, t, n, r) {
    (e = +e, t |= 0, n |= 0, r) || Z(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var i = 1, o = 0;
    for(this[t] = 255 & e; ++o < n && (i *= 256);)this[t + o] = e / i & 255;
    return t + n;
}, S.prototype.writeUIntBE = function(e, t, n, r) {
    (e = +e, t |= 0, n |= 0, r) || Z(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var i = n - 1, o = 1;
    for(this[t + i] = 255 & e; --i >= 0 && (o *= 256);)this[t + i] = e / o & 255;
    return t + n;
}, S.prototype.writeUInt8 = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 1, 255, 0), S.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
}, S.prototype.writeUInt16LE = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 2, 65535, 0), S.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : Y(this, e, t, !0), t + 2;
}, S.prototype.writeUInt16BE = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 2, 65535, 0), S.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : Y(this, e, t, !1), t + 2;
}, S.prototype.writeUInt32LE = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 4, 4294967295, 0), S.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : J(this, e, t, !0), t + 4;
}, S.prototype.writeUInt32BE = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 4, 4294967295, 0), S.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : J(this, e, t, !1), t + 4;
}, S.prototype.writeIntLE = function(e, t, n, r) {
    if (e = +e, t |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        Z(this, e, t, n, i - 1, -i);
    }
    var o = 0, s = 1, a = 0;
    for(this[t] = 255 & e; ++o < n && (s *= 256);)e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
    return t + n;
}, S.prototype.writeIntBE = function(e, t, n, r) {
    if (e = +e, t |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        Z(this, e, t, n, i - 1, -i);
    }
    var o = n - 1, s = 1, a = 0;
    for(this[t + o] = 255 & e; --o >= 0 && (s *= 256);)e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
    return t + n;
}, S.prototype.writeInt8 = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 1, 127, -128), S.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
}, S.prototype.writeInt16LE = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 2, 32767, -32768), S.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : Y(this, e, t, !0), t + 2;
}, S.prototype.writeInt16BE = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 2, 32767, -32768), S.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : Y(this, e, t, !1), t + 2;
}, S.prototype.writeInt32LE = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 4, 2147483647, -2147483648), S.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : J(this, e, t, !0), t + 4;
}, S.prototype.writeInt32BE = function(e, t, n) {
    return e = +e, t |= 0, n || Z(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), S.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : J(this, e, t, !1), t + 4;
}, S.prototype.writeFloatLE = function(e, t, n) {
    return Q(this, e, t, !0, n);
}, S.prototype.writeFloatBE = function(e, t, n) {
    return Q(this, e, t, !1, n);
}, S.prototype.writeDoubleLE = function(e, t, n) {
    return ee(this, e, t, !0, n);
}, S.prototype.writeDoubleBE = function(e, t, n) {
    return ee(this, e, t, !1, n);
}, S.prototype.copy = function(e, t, n, r) {
    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
    if (0 === e.length || 0 === this.length) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
    if (r < 0) throw new RangeError("sourceEnd out of bounds");
    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
    var i, o = r - n;
    if (this === e && n < t && t < r) for(i = o - 1; i >= 0; --i)e[i + t] = this[i + n];
    else if (o < 1e3 || !S.TYPED_ARRAY_SUPPORT) for(i = 0; i < o; ++i)e[i + t] = this[i + n];
    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
    return o;
}, S.prototype.fill = function(e, t, n, r) {
    if ("string" == typeof e) {
        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
            var i = e.charCodeAt(0);
            i < 256 && (e = i);
        }
        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !S.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
    } else "number" == typeof e && (e &= 255);
    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
    if (n <= t) return this;
    var o;
    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for(o = t; o < n; ++o)this[o] = e;
    else {
        var s = I(e) ? e : re(new S(e, r).toString()), a = s.length;
        for(o = 0; o < n - t; ++o)this[o + t] = s[o % a];
    }
    return this;
};
var te = /[^+\/0-9A-Za-z-_]/g;
function ne(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16);
}
function re(e, t) {
    var n;
    t = t || 1 / 0;
    for(var r = e.length, i = null, o = [], s = 0; s < r; ++s){
        if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
            if (!i) {
                if (n > 56319) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                }
                if (s + 1 === r) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                }
                i = n;
                continue;
            }
            if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                continue;
            }
            n = 65536 + (i - 55296 << 10 | n - 56320);
        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, n < 128) {
            if ((t -= 1) < 0) break;
            o.push(n);
        } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
    }
    return o;
}
function ie(e) {
    return function(e) {
        var t, n, r, i, o, s;
        h || f();
        var a = e.length;
        if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        o = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0, s = new u(3 * a / 4 - o), r = o > 0 ? a - 4 : a;
        var c = 0;
        for(t = 0, n = 0; t < r; t += 4, n += 3)i = d[e.charCodeAt(t)] << 18 | d[e.charCodeAt(t + 1)] << 12 | d[e.charCodeAt(t + 2)] << 6 | d[e.charCodeAt(t + 3)], s[c++] = i >> 16 & 255, s[c++] = i >> 8 & 255, s[c++] = 255 & i;
        return 2 === o ? (i = d[e.charCodeAt(t)] << 2 | d[e.charCodeAt(t + 1)] >> 4, s[c++] = 255 & i) : 1 === o && (i = d[e.charCodeAt(t)] << 10 | d[e.charCodeAt(t + 1)] << 4 | d[e.charCodeAt(t + 2)] >> 2, s[c++] = i >> 8 & 255, s[c++] = 255 & i), s;
    }(function(e) {
        if ((e = (function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        })(e).replace(te, "")).length < 2) return "";
        for(; e.length % 4 != 0;)e += "=";
        return e;
    }(e));
}
function oe(e, t, n, r) {
    for(var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)t[i + n] = e[i];
    return i;
}
function se(e) {
    return null != e && (!!e._isBuffer || ae(e) || function(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && ae(e.slice(0, 0));
    }(e));
}
function ae(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
}
var ce = Object.freeze({
    __proto__: null,
    Buffer: S,
    INSPECT_MAX_BYTES: 50,
    SlowBuffer: function(e) {
        return +e != e && (e = 0), S.alloc(+e);
    },
    isBuffer: se,
    kMaxLength: w
}), le = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function de(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ue(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if ("function" == typeof t) {
        var n = function e() {
            return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
        };
        n.prototype = t.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(t) {
        var r = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(n, t, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    }), n;
}
var he = {}, fe = {}, pe = {};
function ge(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error(`positive integer expected, not ${e}`);
}
function me(e) {
    if ("boolean" != typeof e) throw new Error(`boolean expected, not ${e}`);
}
function ye(e) {
    return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name;
}
function ve(e, ...t) {
    if (!ye(e)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length)) throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function be(e) {
    if ("function" != typeof e || "function" != typeof e.create) throw new Error("hash must be wrapped by utils.wrapConstructor");
    ge(e.outputLen), ge(e.blockLen);
}
function we(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function Ee(e, t) {
    ve(e);
    const n = t.outputLen;
    if (e.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
Object.defineProperty(pe, "__esModule", {
    value: !0
}), pe.isBytes = ye, pe.number = ge, pe.bool = me, pe.bytes = ve, pe.hash = be, pe.exists = we, pe.output = Ee;
const Ce = {
    number: ge,
    bool: me,
    bytes: ve,
    hash: be,
    exists: we,
    output: Ee
};
pe.default = Ce, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.wrapCipher = e.Hash = e.nextTick = e.isLE = e.createView = e.u32 = e.u16 = e.u8 = void 0, e.bytesToHex = r, e.hexToBytes = s, e.hexToNumber = a, e.bytesToNumberBE = function(e) {
        return a(r(e));
    }, e.numberToBytesBE = function(e, t) {
        return s(e.toString(16).padStart(2 * t, "0"));
    }, e.asyncLoop = async function(t, n, r) {
        let i = Date.now();
        for(let o = 0; o < t; o++){
            r(o);
            const t = Date.now() - i;
            t >= 0 && t < n || (await (0, e.nextTick)(), i += t);
        }
    }, e.utf8ToBytes = c, e.bytesToUtf8 = function(e) {
        return (new TextDecoder).decode(e);
    }, e.toBytes = function(e) {
        if ("string" == typeof e) e = c(e);
        else {
            if (!(0, t.isBytes)(e)) throw new Error("Uint8Array expected, got " + typeof e);
            e = d(e);
        }
        return e;
    }, e.concatBytes = function(...e) {
        let n = 0;
        for(let r = 0; r < e.length; r++){
            const i = e[r];
            (0, t.bytes)(i), n += i.length;
        }
        const r = new Uint8Array(n);
        for(let t = 0, n = 0; t < e.length; t++){
            const i = e[t];
            r.set(i, n), n += i.length;
        }
        return r;
    }, e.checkOpts = function(e, t) {
        if (null == t || "object" != typeof t) throw new Error("options must be defined");
        return Object.assign(e, t);
    }, e.equalBytes = function(e, t) {
        if (e.length !== t.length) return !1;
        let n = 0;
        for(let r = 0; r < e.length; r++)n |= e[r] ^ t[r];
        return 0 === n;
    }, e.setBigUint64 = l, e.u64Lengths = function(t, n) {
        const r = new Uint8Array(16), i = (0, e.createView)(r);
        return l(i, 0, BigInt(n ? n.length : 0), !0), l(i, 8, BigInt(t.length), !0), r;
    }, e.isAligned32 = function(e) {
        return e.byteOffset % 4 == 0;
    }, e.copyBytes = d, e.clean = function(...e) {
        for(let t = 0; t < e.length; t++)e[t].fill(0);
    };
    const t = pe;
    e.u8 = (e)=>new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    e.u16 = (e)=>new Uint16Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 2));
    e.u32 = (e)=>new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
    if (e.createView = (e)=>new DataView(e.buffer, e.byteOffset, e.byteLength), e.isLE = 68 === new Uint8Array(new Uint32Array([
        287454020
    ]).buffer)[0], !e.isLE) throw new Error("Non little-endian hardware is not supported");
    const n = Array.from({
        length: 256
    }, (e, t)=>t.toString(16).padStart(2, "0"));
    function r(e) {
        (0, t.bytes)(e);
        let r = "";
        for(let t = 0; t < e.length; t++)r += n[e[t]];
        return r;
    }
    const i = {
        _0: 48,
        _9: 57,
        _A: 65,
        _F: 70,
        _a: 97,
        _f: 102
    };
    function o(e) {
        return e >= i._0 && e <= i._9 ? e - i._0 : e >= i._A && e <= i._F ? e - (i._A - 10) : e >= i._a && e <= i._f ? e - (i._a - 10) : void 0;
    }
    function s(e) {
        if ("string" != typeof e) throw new Error("hex string expected, got " + typeof e);
        const t = e.length, n = t / 2;
        if (t % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t);
        const r = new Uint8Array(n);
        for(let t = 0, i = 0; t < n; t++, i += 2){
            const n = o(e.charCodeAt(i)), s = o(e.charCodeAt(i + 1));
            if (void 0 === n || void 0 === s) {
                const t = e[i] + e[i + 1];
                throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + i);
            }
            r[t] = 16 * n + s;
        }
        return r;
    }
    function a(e) {
        if ("string" != typeof e) throw new Error("hex string expected, got " + typeof e);
        return BigInt("" === e ? "0" : `0x${e}`);
    }
    function c(e) {
        if ("string" != typeof e) throw new Error("string expected, got " + typeof e);
        return new Uint8Array((new TextEncoder).encode(e));
    }
    e.nextTick = async ()=>{};
    e.Hash = class {
    };
    function l(e, t, n, r) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
        const i = BigInt(32), o = BigInt(4294967295), s = Number(n >> i & o), a = Number(n & o), c = r ? 4 : 0, l = r ? 0 : 4;
        e.setUint32(t + c, s, r), e.setUint32(t + l, a, r);
    }
    function d(e) {
        return Uint8Array.from(e);
    }
    e.wrapCipher = (e, t)=>(Object.assign(t, e), t);
}(fe);
var Se = {}, _e = {};
Object.defineProperty(_e, "__esModule", {
    value: !0
}), _e.AEAD_TAG_LENGTH = _e.XCHACHA20_NONCE_LENGTH = _e.CURVE25519_PUBLIC_KEY_SIZE = _e.ETH_PUBLIC_KEY_SIZE = _e.UNCOMPRESSED_PUBLIC_KEY_SIZE = _e.COMPRESSED_PUBLIC_KEY_SIZE = _e.SECRET_KEY_LENGTH = void 0, _e.SECRET_KEY_LENGTH = 32, _e.COMPRESSED_PUBLIC_KEY_SIZE = 33, _e.UNCOMPRESSED_PUBLIC_KEY_SIZE = 65, _e.ETH_PUBLIC_KEY_SIZE = 64, _e.CURVE25519_PUBLIC_KEY_SIZE = 32, _e.XCHACHA20_NONCE_LENGTH = 24, _e.AEAD_TAG_LENGTH = 16, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ephemeralKeySize = e.symmetricNonceLength = e.symmetricAlgorithm = e.isHkdfKeyCompressed = e.isEphemeralKeyCompressed = e.ellipticCurve = e.ECIES_CONFIG = void 0;
    var t = _e, n = function() {
        this.ellipticCurve = "secp256k1", this.isEphemeralKeyCompressed = !1, this.isHkdfKeyCompressed = !1, this.symmetricAlgorithm = "aes-256-gcm", this.symmetricNonceLength = 16;
    };
    e.ECIES_CONFIG = new n;
    e.ellipticCurve = function() {
        return e.ECIES_CONFIG.ellipticCurve;
    };
    e.isEphemeralKeyCompressed = function() {
        return e.ECIES_CONFIG.isEphemeralKeyCompressed;
    };
    e.isHkdfKeyCompressed = function() {
        return e.ECIES_CONFIG.isHkdfKeyCompressed;
    };
    e.symmetricAlgorithm = function() {
        return e.ECIES_CONFIG.symmetricAlgorithm;
    };
    e.symmetricNonceLength = function() {
        return e.ECIES_CONFIG.symmetricNonceLength;
    };
    e.ephemeralKeySize = function() {
        var n = {
            secp256k1: e.ECIES_CONFIG.isEphemeralKeyCompressed ? t.COMPRESSED_PUBLIC_KEY_SIZE : t.UNCOMPRESSED_PUBLIC_KEY_SIZE,
            x25519: t.CURVE25519_PUBLIC_KEY_SIZE,
            ed25519: t.CURVE25519_PUBLIC_KEY_SIZE
        };
        if (e.ECIES_CONFIG.ellipticCurve in n) return n[e.ECIES_CONFIG.ellipticCurve];
        throw new Error("Not implemented");
    };
}(Se);
var ke = {}, xe = {}, Me = {}, Ae = {}, Ie = {}, Re = {};
Object.defineProperty(Re, "__esModule", {
    value: !0
}), Re.crypto = void 0, Re.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.gcm = e.ctr = e.cbc = e.utils = void 0, e.randomBytes = i, e.getWebcryptoSubtle = o, e.managedNonce = function(e) {
        return (0, n.number)(e.nonceLength), (t, ...n)=>({
                encrypt (o, ...s) {
                    const { nonceLength: a } = e, c = i(a), l = e(t, c, ...n).encrypt(o, ...s), d = (0, r.concatBytes)(c, l);
                    return l.fill(0), d;
                },
                decrypt (r, ...i) {
                    const { nonceLength: o } = e, s = r.subarray(0, o), a = r.subarray(o);
                    return e(t, s, ...n).decrypt(a, ...i);
                }
            });
    };
    const t = Re, n = pe, r = fe;
    function i(e = 32) {
        if (t.crypto && "function" == typeof t.crypto.getRandomValues) return t.crypto.getRandomValues(new Uint8Array(e));
        if (t.crypto && "function" == typeof t.crypto.randomBytes) return t.crypto.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
    }
    function o() {
        if (t.crypto && "object" == typeof t.crypto.subtle && null != t.crypto.subtle) return t.crypto.subtle;
        throw new Error("crypto.subtle must be defined");
    }
    e.utils = {
        async encrypt (e, t, n, r) {
            const i = o(), s = await i.importKey("raw", e, t, !0, [
                "encrypt"
            ]), a = await i.encrypt(n, s, r);
            return new Uint8Array(a);
        },
        async decrypt (e, t, n, r) {
            const i = o(), s = await i.importKey("raw", e, t, !0, [
                "decrypt"
            ]), a = await i.decrypt(n, s, r);
            return new Uint8Array(a);
        }
    };
    const s = {
        CBC: "AES-CBC",
        CTR: "AES-CTR",
        GCM: "AES-GCM"
    };
    function a(t) {
        return (r, i, o)=>{
            (0, n.bytes)(r), (0, n.bytes)(i);
            const a = {
                name: t,
                length: 8 * r.length
            }, c = function(e, t, n) {
                if (e === s.CBC) return {
                    name: s.CBC,
                    iv: t
                };
                if (e === s.CTR) return {
                    name: s.CTR,
                    counter: t,
                    length: 64
                };
                if (e === s.GCM) return n ? {
                    name: s.GCM,
                    iv: t,
                    additionalData: n
                } : {
                    name: s.GCM,
                    iv: t
                };
                throw new Error("unknown aes block mode");
            }(t, i, o);
            return {
                encrypt: (t)=>((0, n.bytes)(t), e.utils.encrypt(r, a, c, t)),
                decrypt: (t)=>((0, n.bytes)(t), e.utils.decrypt(r, a, c, t))
            };
        };
    }
    e.cbc = a(s.CBC), e.ctr = a(s.CTR), e.gcm = a(s.GCM);
}(Ie);
var Pe = {}, Le = {}, Oe = {}, Te = {};
function Ne(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error(`positive integer expected, not ${e}`);
}
function De(e) {
    if ("boolean" != typeof e) throw new Error(`boolean expected, not ${e}`);
}
function $e(e) {
    return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name;
}
function Be(e, ...t) {
    if (!$e(e)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length)) throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function Ke(e) {
    if ("function" != typeof e || "function" != typeof e.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Ne(e.outputLen), Ne(e.blockLen);
}
function je(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function Ue(e, t) {
    Be(e);
    const n = t.outputLen;
    if (e.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
Object.defineProperty(Te, "__esModule", {
    value: !0
}), Te.isBytes = $e, Te.number = Ne, Te.bool = De, Te.bytes = Be, Te.hash = Ke, Te.exists = je, Te.output = Ue;
const He = {
    number: Ne,
    bool: De,
    bytes: Be,
    hash: Ke,
    exists: je,
    output: Ue
};
Te.default = He;
var Fe = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
    value: !0
}), ze.crypto = void 0, ze.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Hash = e.nextTick = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = void 0, e.isBytes = function(e) {
        return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name;
    }, e.byteSwap32 = function(t) {
        for(let n = 0; n < t.length; n++)t[n] = (0, e.byteSwap)(t[n]);
    }, e.bytesToHex = function(e) {
        (0, n.bytes)(e);
        let t = "";
        for(let n = 0; n < e.length; n++)t += r[e[n]];
        return t;
    }, e.hexToBytes = function(e) {
        if ("string" != typeof e) throw new Error("hex string expected, got " + typeof e);
        const t = e.length, n = t / 2;
        if (t % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t);
        const r = new Uint8Array(n);
        for(let t = 0, i = 0; t < n; t++, i += 2){
            const n = o(e.charCodeAt(i)), s = o(e.charCodeAt(i + 1));
            if (void 0 === n || void 0 === s) {
                const t = e[i] + e[i + 1];
                throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + i);
            }
            r[t] = 16 * n + s;
        }
        return r;
    }, e.asyncLoop = async function(t, n, r) {
        let i = Date.now();
        for(let o = 0; o < t; o++){
            r(o);
            const t = Date.now() - i;
            t >= 0 && t < n || (await (0, e.nextTick)(), i += t);
        }
    }, e.utf8ToBytes = s, e.toBytes = a, e.concatBytes = function(...e) {
        let t = 0;
        for(let r = 0; r < e.length; r++){
            const i = e[r];
            (0, n.bytes)(i), t += i.length;
        }
        const r = new Uint8Array(t);
        for(let t = 0, n = 0; t < e.length; t++){
            const i = e[t];
            r.set(i, n), n += i.length;
        }
        return r;
    }, e.checkOpts = function(e, t) {
        if (void 0 !== t && "[object Object]" !== c.call(t)) throw new Error("Options should be object or undefined");
        return Object.assign(e, t);
    }, e.wrapConstructor = function(e) {
        const t = (t)=>e().update(a(t)).digest(), n = e();
        return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = ()=>e(), t;
    }, e.wrapConstructorWithOpts = function(e) {
        const t = (t, n)=>e(n).update(a(t)).digest(), n = e({});
        return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = (t)=>e(t), t;
    }, e.wrapXOFConstructorWithOpts = function(e) {
        const t = (t, n)=>e(n).update(a(t)).digest(), n = e({});
        return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = (t)=>e(t), t;
    }, e.randomBytes = function(e = 32) {
        if (t.crypto && "function" == typeof t.crypto.getRandomValues) return t.crypto.getRandomValues(new Uint8Array(e));
        if (t.crypto && "function" == typeof t.crypto.randomBytes) return t.crypto.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
    };
    const t = ze, n = Te;
    e.u8 = (e)=>new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    e.u32 = (e)=>new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
    e.createView = (e)=>new DataView(e.buffer, e.byteOffset, e.byteLength);
    e.rotr = (e, t)=>e << 32 - t | e >>> t;
    e.rotl = (e, t)=>e << t | e >>> 32 - t >>> 0, e.isLE = 68 === new Uint8Array(new Uint32Array([
        287454020
    ]).buffer)[0];
    e.byteSwap = (e)=>e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255, e.byteSwapIfBE = e.isLE ? (e)=>e : (t)=>(0, e.byteSwap)(t);
    const r = Array.from({
        length: 256
    }, (e, t)=>t.toString(16).padStart(2, "0"));
    const i = {
        _0: 48,
        _9: 57,
        _A: 65,
        _F: 70,
        _a: 97,
        _f: 102
    };
    function o(e) {
        return e >= i._0 && e <= i._9 ? e - i._0 : e >= i._A && e <= i._F ? e - (i._A - 10) : e >= i._a && e <= i._f ? e - (i._a - 10) : void 0;
    }
    function s(e) {
        if ("string" != typeof e) throw new Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array((new TextEncoder).encode(e));
    }
    function a(e) {
        return "string" == typeof e && (e = s(e)), (0, n.bytes)(e), e;
    }
    e.nextTick = async ()=>{};
    e.Hash = class {
        clone() {
            return this._cloneInto();
        }
    };
    const c = {}.toString;
}(Fe), Object.defineProperty(Oe, "__esModule", {
    value: !0
}), Oe.HashMD = Oe.Maj = Oe.Chi = void 0;
const qe = Te, Ve = Fe;
Oe.Chi = (e, t, n)=>e & t ^ ~e & n;
Oe.Maj = (e, t, n)=>e & t ^ e & n ^ t & n;
Oe.HashMD = class extends Ve.Hash {
    constructor(e, t, n, r){
        super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, Ve.createView)(this.buffer);
    }
    update(e) {
        (0, qe.exists)(this);
        const { view: t, buffer: n, blockLen: r } = this, i = (e = (0, Ve.toBytes)(e)).length;
        for(let o = 0; o < i;){
            const s = Math.min(r - this.pos, i - o);
            if (s !== r) n.set(e.subarray(o, o + s), this.pos), this.pos += s, o += s, this.pos === r && (this.process(t, 0), this.pos = 0);
            else {
                const t = (0, Ve.createView)(e);
                for(; r <= i - o; o += r)this.process(t, o);
            }
        }
        return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
        (0, qe.exists)(this), (0, qe.output)(e, this), this.finished = !0;
        const { buffer: t, view: n, blockLen: r, isLE: i } = this;
        let { pos: o } = this;
        t[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > r - o && (this.process(n, 0), o = 0);
        for(let e = o; e < r; e++)t[e] = 0;
        !function(e, t, n, r) {
            if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
            const i = BigInt(32), o = BigInt(4294967295), s = Number(n >> i & o), a = Number(n & o), c = r ? 4 : 0, l = r ? 0 : 4;
            e.setUint32(t + c, s, r), e.setUint32(t + l, a, r);
        }(n, r - 8, BigInt(8 * this.length), i), this.process(n, 0);
        const s = (0, Ve.createView)(e), a = this.outputLen;
        if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const c = a / 4, l = this.get();
        if (c > l.length) throw new Error("_sha2: outputLen bigger than state");
        for(let e = 0; e < c; e++)s.setUint32(4 * e, l[e], i);
    }
    digest() {
        const { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        const n = e.slice(0, t);
        return this.destroy(), n;
    }
    _cloneInto(e) {
        e || (e = new this.constructor), e.set(...this.get());
        const { blockLen: t, buffer: n, length: r, finished: i, destroyed: o, pos: s } = this;
        return e.length = r, e.pos = s, e.finished = i, e.destroyed = o, r % t && e.buffer.set(n), e;
    }
};
var We = {};
Object.defineProperty(We, "__esModule", {
    value: !0
}), We.add5L = We.add5H = We.add4H = We.add4L = We.add3H = We.add3L = We.rotlBL = We.rotlBH = We.rotlSL = We.rotlSH = We.rotr32L = We.rotr32H = We.rotrBL = We.rotrBH = We.rotrSL = We.rotrSH = We.shrSL = We.shrSH = We.toBig = void 0, We.fromBig = Ye, We.split = Je, We.add = ut;
const Ge = BigInt(2 ** 32 - 1), Ze = BigInt(32);
function Ye(e, t = !1) {
    return t ? {
        h: Number(e & Ge),
        l: Number(e >> Ze & Ge)
    } : {
        h: 0 | Number(e >> Ze & Ge),
        l: 0 | Number(e & Ge)
    };
}
function Je(e, t = !1) {
    let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
    for(let i = 0; i < e.length; i++){
        const { h: o, l: s } = Ye(e[i], t);
        [n[i], r[i]] = [
            o,
            s
        ];
    }
    return [
        n,
        r
    ];
}
const Xe = (e, t)=>BigInt(e >>> 0) << Ze | BigInt(t >>> 0);
We.toBig = Xe;
const Qe = (e, t, n)=>e >>> n;
We.shrSH = Qe;
const et = (e, t, n)=>e << 32 - n | t >>> n;
We.shrSL = et;
const tt = (e, t, n)=>e >>> n | t << 32 - n;
We.rotrSH = tt;
const nt = (e, t, n)=>e << 32 - n | t >>> n;
We.rotrSL = nt;
const rt = (e, t, n)=>e << 64 - n | t >>> n - 32;
We.rotrBH = rt;
const it = (e, t, n)=>e >>> n - 32 | t << 64 - n;
We.rotrBL = it;
const ot = (e, t)=>t;
We.rotr32H = ot;
const st = (e, t)=>e;
We.rotr32L = st;
const at = (e, t, n)=>e << n | t >>> 32 - n;
We.rotlSH = at;
const ct = (e, t, n)=>t << n | e >>> 32 - n;
We.rotlSL = ct;
const lt = (e, t, n)=>t << n - 32 | e >>> 64 - n;
We.rotlBH = lt;
const dt = (e, t, n)=>e << n - 32 | t >>> 64 - n;
function ut(e, t, n, r) {
    const i = (t >>> 0) + (r >>> 0);
    return {
        h: e + n + (i / 2 ** 32 | 0) | 0,
        l: 0 | i
    };
}
We.rotlBL = dt;
const ht = (e, t, n)=>(e >>> 0) + (t >>> 0) + (n >>> 0);
We.add3L = ht;
const ft = (e, t, n, r)=>t + n + r + (e / 2 ** 32 | 0) | 0;
We.add3H = ft;
const pt = (e, t, n, r)=>(e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
We.add4L = pt;
const gt = (e, t, n, r, i)=>t + n + r + i + (e / 2 ** 32 | 0) | 0;
We.add4H = gt;
const mt = (e, t, n, r, i)=>(e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0);
We.add5L = mt;
const yt = (e, t, n, r, i, o)=>t + n + r + i + o + (e / 2 ** 32 | 0) | 0;
We.add5H = yt;
const vt = {
    fromBig: Ye,
    split: Je,
    toBig: Xe,
    shrSH: Qe,
    shrSL: et,
    rotrSH: tt,
    rotrSL: nt,
    rotrBH: rt,
    rotrBL: it,
    rotr32H: ot,
    rotr32L: st,
    rotlSH: at,
    rotlSL: ct,
    rotlBH: lt,
    rotlBL: dt,
    add: ut,
    add3L: ht,
    add3H: ft,
    add4L: pt,
    add4H: gt,
    add5H: yt,
    add5L: mt
};
We.default = vt, Object.defineProperty(Le, "__esModule", {
    value: !0
}), Le.sha384 = Le.sha512_256 = Le.sha512_224 = Le.sha512 = Le.SHA384 = Le.SHA512_256 = Le.SHA512_224 = Le.SHA512 = void 0;
const bt = Oe, wt = We, Et = Fe, [Ct, St] = (()=>wt.default.split([
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817"
    ].map((e)=>BigInt(e))))(), _t = new Uint32Array(80), kt = new Uint32Array(80);
class xt extends bt.HashMD {
    constructor(){
        super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
    }
    get() {
        const { Ah: e, Al: t, Bh: n, Bl: r, Ch: i, Cl: o, Dh: s, Dl: a, Eh: c, El: l, Fh: d, Fl: u, Gh: h, Gl: f, Hh: p, Hl: g } = this;
        return [
            e,
            t,
            n,
            r,
            i,
            o,
            s,
            a,
            c,
            l,
            d,
            u,
            h,
            f,
            p,
            g
        ];
    }
    set(e, t, n, r, i, o, s, a, c, l, d, u, h, f, p, g) {
        this.Ah = 0 | e, this.Al = 0 | t, this.Bh = 0 | n, this.Bl = 0 | r, this.Ch = 0 | i, this.Cl = 0 | o, this.Dh = 0 | s, this.Dl = 0 | a, this.Eh = 0 | c, this.El = 0 | l, this.Fh = 0 | d, this.Fl = 0 | u, this.Gh = 0 | h, this.Gl = 0 | f, this.Hh = 0 | p, this.Hl = 0 | g;
    }
    process(e, t) {
        for(let n = 0; n < 16; n++, t += 4)_t[n] = e.getUint32(t), kt[n] = e.getUint32(t += 4);
        for(let e = 16; e < 80; e++){
            const t = 0 | _t[e - 15], n = 0 | kt[e - 15], r = wt.default.rotrSH(t, n, 1) ^ wt.default.rotrSH(t, n, 8) ^ wt.default.shrSH(t, n, 7), i = wt.default.rotrSL(t, n, 1) ^ wt.default.rotrSL(t, n, 8) ^ wt.default.shrSL(t, n, 7), o = 0 | _t[e - 2], s = 0 | kt[e - 2], a = wt.default.rotrSH(o, s, 19) ^ wt.default.rotrBH(o, s, 61) ^ wt.default.shrSH(o, s, 6), c = wt.default.rotrSL(o, s, 19) ^ wt.default.rotrBL(o, s, 61) ^ wt.default.shrSL(o, s, 6), l = wt.default.add4L(i, c, kt[e - 7], kt[e - 16]), d = wt.default.add4H(l, r, a, _t[e - 7], _t[e - 16]);
            _t[e] = 0 | d, kt[e] = 0 | l;
        }
        let { Ah: n, Al: r, Bh: i, Bl: o, Ch: s, Cl: a, Dh: c, Dl: l, Eh: d, El: u, Fh: h, Fl: f, Gh: p, Gl: g, Hh: m, Hl: y } = this;
        for(let e = 0; e < 80; e++){
            const t = wt.default.rotrSH(d, u, 14) ^ wt.default.rotrSH(d, u, 18) ^ wt.default.rotrBH(d, u, 41), v = wt.default.rotrSL(d, u, 14) ^ wt.default.rotrSL(d, u, 18) ^ wt.default.rotrBL(d, u, 41), b = d & h ^ ~d & p, w = u & f ^ ~u & g, E = wt.default.add5L(y, v, w, St[e], kt[e]), C = wt.default.add5H(E, m, t, b, Ct[e], _t[e]), S = 0 | E, _ = wt.default.rotrSH(n, r, 28) ^ wt.default.rotrBH(n, r, 34) ^ wt.default.rotrBH(n, r, 39), k = wt.default.rotrSL(n, r, 28) ^ wt.default.rotrBL(n, r, 34) ^ wt.default.rotrBL(n, r, 39), x = n & i ^ n & s ^ i & s, M = r & o ^ r & a ^ o & a;
            m = 0 | p, y = 0 | g, p = 0 | h, g = 0 | f, h = 0 | d, f = 0 | u, ({ h: d, l: u } = wt.default.add(0 | c, 0 | l, 0 | C, 0 | S)), c = 0 | s, l = 0 | a, s = 0 | i, a = 0 | o, i = 0 | n, o = 0 | r;
            const A = wt.default.add3L(S, k, M);
            n = wt.default.add3H(A, C, _, x), r = 0 | A;
        }
        ({ h: n, l: r } = wt.default.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)), ({ h: i, l: o } = wt.default.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)), ({ h: s, l: a } = wt.default.add(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | a)), ({ h: c, l: l } = wt.default.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)), ({ h: d, l: u } = wt.default.add(0 | this.Eh, 0 | this.El, 0 | d, 0 | u)), ({ h: h, l: f } = wt.default.add(0 | this.Fh, 0 | this.Fl, 0 | h, 0 | f)), ({ h: p, l: g } = wt.default.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)), ({ h: m, l: y } = wt.default.add(0 | this.Hh, 0 | this.Hl, 0 | m, 0 | y)), this.set(n, r, i, o, s, a, c, l, d, u, h, f, p, g, m, y);
    }
    roundClean() {
        _t.fill(0), kt.fill(0);
    }
    destroy() {
        this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
Le.SHA512 = xt;
class Mt extends xt {
    constructor(){
        super(), this.Ah = -1942145080, this.Al = 424955298, this.Bh = 1944164710, this.Bl = -1982016298, this.Ch = 502970286, this.Cl = 855612546, this.Dh = 1738396948, this.Dl = 1479516111, this.Eh = 258812777, this.El = 2077511080, this.Fh = 2011393907, this.Fl = 79989058, this.Gh = 1067287976, this.Gl = 1780299464, this.Hh = 286451373, this.Hl = -1848208735, this.outputLen = 28;
    }
}
Le.SHA512_224 = Mt;
class At extends xt {
    constructor(){
        super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32;
    }
}
Le.SHA512_256 = At;
class It extends xt {
    constructor(){
        super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48;
    }
}
Le.SHA384 = It, Le.sha512 = (0, Et.wrapConstructor)(()=>new xt), Le.sha512_224 = (0, Et.wrapConstructor)(()=>new Mt), Le.sha512_256 = (0, Et.wrapConstructor)(()=>new At), Le.sha384 = (0, Et.wrapConstructor)(()=>new It);
var Rt = {}, Pt = {}, Lt = {}, Ot = {};
Object.defineProperty(Ot, "__esModule", {
    value: !0
}), Ot.notImplemented = Ot.bitMask = void 0, Ot.isBytes = $t, Ot.abytes = Bt, Ot.abool = function(e, t) {
    if ("boolean" != typeof t) throw new Error(`${e} must be valid boolean, got "${t}".`);
}, Ot.bytesToHex = jt, Ot.numberToHexUnpadded = Ut, Ot.hexToNumber = Ht, Ot.hexToBytes = qt, Ot.bytesToNumberBE = function(e) {
    return Ht(jt(e));
}, Ot.bytesToNumberLE = function(e) {
    return Bt(e), Ht(jt(Uint8Array.from(e).reverse()));
}, Ot.numberToBytesBE = Vt, Ot.numberToBytesLE = function(e, t) {
    return Vt(e, t).reverse();
}, Ot.numberToVarBytesBE = function(e) {
    return qt(Ut(e));
}, Ot.ensureBytes = function(e, t, n) {
    let r;
    if ("string" == typeof t) try {
        r = qt(t);
    } catch (n) {
        throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${n}`);
    }
    else {
        if (!$t(t)) throw new Error(`${e} must be hex string or Uint8Array`);
        r = Uint8Array.from(t);
    }
    const i = r.length;
    if ("number" == typeof n && i !== n) throw new Error(`${e} expected ${n} bytes, got ${i}`);
    return r;
}, Ot.concatBytes = Wt, Ot.equalBytes = function(e, t) {
    if (e.length !== t.length) return !1;
    let n = 0;
    for(let r = 0; r < e.length; r++)n |= e[r] ^ t[r];
    return 0 === n;
}, Ot.utf8ToBytes = function(e) {
    if ("string" != typeof e) throw new Error("utf8ToBytes expected string, got " + typeof e);
    return new Uint8Array((new TextEncoder).encode(e));
}, Ot.inRange = Zt, Ot.aInRange = function(e, t, n, r) {
    if (!Zt(t, n, r)) throw new Error(`expected valid ${e}: ${n} <= n < ${r}, got ${typeof t} ${t}`);
}, Ot.bitLen = function(e) {
    let t;
    for(t = 0; e > Tt; e >>= Nt, t += 1);
    return t;
}, Ot.bitGet = function(e, t) {
    return e >> BigInt(t) & Nt;
}, Ot.bitSet = function(e, t, n) {
    return e | (n ? Nt : Tt) << BigInt(t);
}, Ot.createHmacDrbg = function(e, t, n) {
    if ("number" != typeof e || e < 2) throw new Error("hashLen must be a number");
    if ("number" != typeof t || t < 2) throw new Error("qByteLen must be a number");
    if ("function" != typeof n) throw new Error("hmacFn must be a function");
    let r = Yt(e), i = Yt(e), o = 0;
    const s = ()=>{
        r.fill(1), i.fill(0), o = 0;
    }, a = (...e)=>n(i, r, ...e), c = (e = Yt())=>{
        i = a(Jt([
            0
        ]), e), r = a(), 0 !== e.length && (i = a(Jt([
            1
        ]), e), r = a());
    }, l = ()=>{
        if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
        let e = 0;
        const n = [];
        for(; e < t;){
            r = a();
            const t = r.slice();
            n.push(t), e += r.length;
        }
        return Wt(...n);
    };
    return (e, t)=>{
        let n;
        for(s(), c(e); !(n = t(l()));)c();
        return s(), n;
    };
}, Ot.validateObject = function(e, t, n = {}) {
    const r = (t, n, r)=>{
        const i = Xt[n];
        if ("function" != typeof i) throw new Error(`Invalid validator "${n}", expected function`);
        const o = e[t];
        if (!(r && void 0 === o || i(o, e))) throw new Error(`Invalid param ${String(t)}=${o} (${typeof o}), expected ${n}`);
    };
    for (const [e, n] of Object.entries(t))r(e, n, !1);
    for (const [e, t] of Object.entries(n))r(e, t, !0);
    return e;
}, Ot.memoized = function(e) {
    const t = new WeakMap;
    return (n, ...r)=>{
        const i = t.get(n);
        if (void 0 !== i) return i;
        const o = e(n, ...r);
        return t.set(n, o), o;
    };
};
const Tt = BigInt(0), Nt = BigInt(1), Dt = BigInt(2);
function $t(e) {
    return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name;
}
function Bt(e) {
    if (!$t(e)) throw new Error("Uint8Array expected");
}
const Kt = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0"));
function jt(e) {
    Bt(e);
    let t = "";
    for(let n = 0; n < e.length; n++)t += Kt[e[n]];
    return t;
}
function Ut(e) {
    const t = e.toString(16);
    return 1 & t.length ? `0${t}` : t;
}
function Ht(e) {
    if ("string" != typeof e) throw new Error("hex string expected, got " + typeof e);
    return BigInt("" === e ? "0" : `0x${e}`);
}
const Ft = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};
function zt(e) {
    return e >= Ft._0 && e <= Ft._9 ? e - Ft._0 : e >= Ft._A && e <= Ft._F ? e - (Ft._A - 10) : e >= Ft._a && e <= Ft._f ? e - (Ft._a - 10) : void 0;
}
function qt(e) {
    if ("string" != typeof e) throw new Error("hex string expected, got " + typeof e);
    const t = e.length, n = t / 2;
    if (t % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t);
    const r = new Uint8Array(n);
    for(let t = 0, i = 0; t < n; t++, i += 2){
        const n = zt(e.charCodeAt(i)), o = zt(e.charCodeAt(i + 1));
        if (void 0 === n || void 0 === o) {
            const t = e[i] + e[i + 1];
            throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + i);
        }
        r[t] = 16 * n + o;
    }
    return r;
}
function Vt(e, t) {
    return qt(e.toString(16).padStart(2 * t, "0"));
}
function Wt(...e) {
    let t = 0;
    for(let n = 0; n < e.length; n++){
        const r = e[n];
        Bt(r), t += r.length;
    }
    const n = new Uint8Array(t);
    for(let t = 0, r = 0; t < e.length; t++){
        const i = e[t];
        n.set(i, r), r += i.length;
    }
    return n;
}
const Gt = (e)=>"bigint" == typeof e && Tt <= e;
function Zt(e, t, n) {
    return Gt(e) && Gt(t) && Gt(n) && t <= e && e < n;
}
Ot.bitMask = (e)=>(Dt << BigInt(e - 1)) - Nt;
const Yt = (e)=>new Uint8Array(e), Jt = (e)=>Uint8Array.from(e);
const Xt = {
    bigint: (e)=>"bigint" == typeof e,
    function: (e)=>"function" == typeof e,
    boolean: (e)=>"boolean" == typeof e,
    string: (e)=>"string" == typeof e,
    stringOrUint8Array: (e)=>"string" == typeof e || $t(e),
    isSafeInteger: (e)=>Number.isSafeInteger(e),
    array: (e)=>Array.isArray(e),
    field: (e, t)=>t.Fp.isValid(e),
    hash: (e)=>"function" == typeof e && Number.isSafeInteger(e.outputLen)
};
Ot.notImplemented = ()=>{
    throw new Error("not implemented");
}, Object.defineProperty(Lt, "__esModule", {
    value: !0
}), Lt.isNegativeLE = void 0, Lt.mod = cn, Lt.pow = ln, Lt.pow2 = function(e, t, n) {
    let r = e;
    for(; t-- > en;)r *= r, r %= n;
    return r;
}, Lt.invert = dn, Lt.tonelliShanks = un, Lt.FpSqrt = hn, Lt.validateField = function(e) {
    const t = fn.reduce((e, t)=>(e[t] = "function", e), {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    });
    return (0, Qt.validateObject)(e, t);
}, Lt.FpPow = pn, Lt.FpInvertBatch = gn, Lt.FpDiv = function(e, t, n) {
    return e.mul(t, "bigint" == typeof n ? dn(n, e.ORDER) : e.inv(n));
}, Lt.FpLegendre = mn, Lt.FpIsSquare = function(e) {
    const t = mn(e.ORDER);
    return (n)=>{
        const r = t(e, n);
        return e.eql(r, e.ZERO) || e.eql(r, e.ONE);
    };
}, Lt.nLength = yn, Lt.Field = function(e, t, n = !1, r = {}) {
    if (e <= en) throw new Error(`Expected Field ORDER > 0, got ${e}`);
    const { nBitLength: i, nByteLength: o } = yn(e, t);
    if (o > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    const s = hn(e), a = Object.freeze({
        ORDER: e,
        BITS: i,
        BYTES: o,
        MASK: (0, Qt.bitMask)(i),
        ZERO: en,
        ONE: tn,
        create: (t)=>cn(t, e),
        isValid: (t)=>{
            if ("bigint" != typeof t) throw new Error("Invalid field element: expected bigint, got " + typeof t);
            return en <= t && t < e;
        },
        is0: (e)=>e === en,
        isOdd: (e)=>(e & tn) === tn,
        neg: (t)=>cn(-t, e),
        eql: (e, t)=>e === t,
        sqr: (t)=>cn(t * t, e),
        add: (t, n)=>cn(t + n, e),
        sub: (t, n)=>cn(t - n, e),
        mul: (t, n)=>cn(t * n, e),
        pow: (e, t)=>pn(a, e, t),
        div: (t, n)=>cn(t * dn(n, e), e),
        sqrN: (e)=>e * e,
        addN: (e, t)=>e + t,
        subN: (e, t)=>e - t,
        mulN: (e, t)=>e * t,
        inv: (t)=>dn(t, e),
        sqrt: r.sqrt || ((e)=>s(a, e)),
        invertBatch: (e)=>gn(a, e),
        cmov: (e, t, n)=>n ? t : e,
        toBytes: (e)=>n ? (0, Qt.numberToBytesLE)(e, o) : (0, Qt.numberToBytesBE)(e, o),
        fromBytes: (e)=>{
            if (e.length !== o) throw new Error(`Fp.fromBytes: expected ${o}, got ${e.length}`);
            return n ? (0, Qt.bytesToNumberLE)(e) : (0, Qt.bytesToNumberBE)(e);
        }
    });
    return Object.freeze(a);
}, Lt.FpSqrtOdd = function(e, t) {
    if (!e.isOdd) throw new Error("Field doesn't have isOdd");
    const n = e.sqrt(t);
    return e.isOdd(n) ? n : e.neg(n);
}, Lt.FpSqrtEven = function(e, t) {
    if (!e.isOdd) throw new Error("Field doesn't have isOdd");
    const n = e.sqrt(t);
    return e.isOdd(n) ? e.neg(n) : n;
}, Lt.hashToPrivateScalar = function(e, t, n = !1) {
    e = (0, Qt.ensureBytes)("privateHash", e);
    const r = e.length, i = yn(t).nByteLength + 8;
    if (i < 24 || r < i || r > 1024) throw new Error(`hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${r}`);
    const o = n ? (0, Qt.bytesToNumberLE)(e) : (0, Qt.bytesToNumberBE)(e);
    return cn(o, t - tn) + tn;
}, Lt.getFieldBytesLength = vn, Lt.getMinHashLength = bn, Lt.mapHashToField = function(e, t, n = !1) {
    const r = e.length, i = vn(t), o = bn(t);
    if (r < 16 || r < o || r > 1024) throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
    const s = cn(n ? (0, Qt.bytesToNumberBE)(e) : (0, Qt.bytesToNumberLE)(e), t - tn) + tn;
    return n ? (0, Qt.numberToBytesLE)(s, i) : (0, Qt.numberToBytesBE)(s, i);
};
const Qt = Ot, en = BigInt(0), tn = BigInt(1), nn = BigInt(2), rn = BigInt(3), on = BigInt(4), sn = BigInt(5), an = BigInt(8);
function cn(e, t) {
    const n = e % t;
    return n >= en ? n : t + n;
}
function ln(e, t, n) {
    if (n <= en || t < en) throw new Error("Expected power/modulo > 0");
    if (n === tn) return en;
    let r = tn;
    for(; t > en;)t & tn && (r = r * e % n), e = e * e % n, t >>= tn;
    return r;
}
function dn(e, t) {
    if (e === en || t <= en) throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
    let n = cn(e, t), r = t, i = en, o = tn;
    for(; n !== en;){
        const e = r % n, t = i - o * (r / n);
        r = n, n = e, i = o, o = t;
    }
    if (r !== tn) throw new Error("invert: does not exist");
    return cn(i, t);
}
function un(e) {
    const t = (e - tn) / nn;
    let n, r, i;
    for(n = e - tn, r = 0; n % nn === en; n /= nn, r++);
    for(i = nn; i < e && ln(i, t, e) !== e - tn; i++);
    if (1 === r) {
        const t = (e + tn) / on;
        return function(e, n) {
            const r = e.pow(n, t);
            if (!e.eql(e.sqr(r), n)) throw new Error("Cannot find square root");
            return r;
        };
    }
    const o = (n + tn) / nn;
    return function(e, s) {
        if (e.pow(s, t) === e.neg(e.ONE)) throw new Error("Cannot find square root");
        let a = r, c = e.pow(e.mul(e.ONE, i), n), l = e.pow(s, o), d = e.pow(s, n);
        for(; !e.eql(d, e.ONE);){
            if (e.eql(d, e.ZERO)) return e.ZERO;
            let t = 1;
            for(let n = e.sqr(d); t < a && !e.eql(n, e.ONE); t++)n = e.sqr(n);
            const n = e.pow(c, tn << BigInt(a - t - 1));
            c = e.sqr(n), l = e.mul(l, n), d = e.mul(d, c), a = t;
        }
        return l;
    };
}
function hn(e) {
    if (e % on === rn) {
        const t = (e + tn) / on;
        return function(e, n) {
            const r = e.pow(n, t);
            if (!e.eql(e.sqr(r), n)) throw new Error("Cannot find square root");
            return r;
        };
    }
    if (e % an === sn) {
        const t = (e - sn) / an;
        return function(e, n) {
            const r = e.mul(n, nn), i = e.pow(r, t), o = e.mul(n, i), s = e.mul(e.mul(o, nn), i), a = e.mul(o, e.sub(s, e.ONE));
            if (!e.eql(e.sqr(a), n)) throw new Error("Cannot find square root");
            return a;
        };
    }
    return un(e);
}
BigInt(9), BigInt(16);
Lt.isNegativeLE = (e, t)=>(cn(e, t) & tn) === tn;
const fn = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
];
function pn(e, t, n) {
    if (n < en) throw new Error("Expected power > 0");
    if (n === en) return e.ONE;
    if (n === tn) return t;
    let r = e.ONE, i = t;
    for(; n > en;)n & tn && (r = e.mul(r, i)), i = e.sqr(i), n >>= tn;
    return r;
}
function gn(e, t) {
    const n = new Array(t.length), r = t.reduce((t, r, i)=>e.is0(r) ? t : (n[i] = t, e.mul(t, r)), e.ONE), i = e.inv(r);
    return t.reduceRight((t, r, i)=>e.is0(r) ? t : (n[i] = e.mul(t, n[i]), e.mul(t, r)), i), n;
}
function mn(e) {
    const t = (e - tn) / nn;
    return (e, n)=>e.pow(n, t);
}
function yn(e, t) {
    const n = void 0 !== t ? t : e.toString(2).length;
    return {
        nBitLength: n,
        nByteLength: Math.ceil(n / 8)
    };
}
function vn(e) {
    if ("bigint" != typeof e) throw new Error("field order must be bigint");
    const t = e.toString(2).length;
    return Math.ceil(t / 8);
}
function bn(e) {
    const t = vn(e);
    return t + Math.ceil(t / 2);
}
Object.defineProperty(Pt, "__esModule", {
    value: !0
}), Pt.wNAF = function(e, t) {
    const n = (e, t)=>{
        const n = t.negate();
        return e ? n : t;
    }, r = (e)=>{
        if (!Number.isSafeInteger(e) || e <= 0 || e > t) throw new Error(`Wrong window size=${e}, should be [1..${t}]`);
    }, i = (e)=>{
        r(e);
        return {
            windows: Math.ceil(t / e) + 1,
            windowSize: 2 ** (e - 1)
        };
    };
    return {
        constTimeNegate: n,
        unsafeLadder (t, n) {
            let r = e.ZERO, i = t;
            for(; n > Cn;)n & Sn && (r = r.add(i)), i = i.double(), n >>= Sn;
            return r;
        },
        precomputeWindow (e, t) {
            const { windows: n, windowSize: r } = i(t), o = [];
            let s = e, a = s;
            for(let e = 0; e < n; e++){
                a = s, o.push(a);
                for(let e = 1; e < r; e++)a = a.add(s), o.push(a);
                s = a.double();
            }
            return o;
        },
        wNAF (t, r, o) {
            const { windows: s, windowSize: a } = i(t);
            let c = e.ZERO, l = e.BASE;
            const d = BigInt(2 ** t - 1), u = 2 ** t, h = BigInt(t);
            for(let e = 0; e < s; e++){
                const t = e * a;
                let i = Number(o & d);
                o >>= h, i > a && (i -= u, o += Sn);
                const s = t, f = t + Math.abs(i) - 1, p = e % 2 != 0, g = i < 0;
                0 === i ? l = l.add(n(p, r[s])) : c = c.add(n(g, r[f]));
            }
            return {
                p: c,
                f: l
            };
        },
        wNAFCached (e, t, n) {
            const r = kn.get(e) || 1;
            let i = _n.get(e);
            return i || (i = this.precomputeWindow(e, r), 1 !== r && _n.set(e, n(i))), this.wNAF(r, i, t);
        },
        setWindowSize (e, t) {
            r(t), kn.set(e, t), _n.delete(e);
        }
    };
}, Pt.pippenger = function(e, t, n, r) {
    if (!Array.isArray(n) || !Array.isArray(r) || r.length !== n.length) throw new Error("arrays of points and scalars must have equal length");
    r.forEach((e, n)=>{
        if (!t.isValid(e)) throw new Error(`wrong scalar at index ${n}`);
    }), n.forEach((t, n)=>{
        if (!(t instanceof e)) throw new Error(`wrong point at index ${n}`);
    });
    const i = (0, En.bitLen)(BigInt(n.length)), o = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1, s = (1 << o) - 1, a = new Array(s + 1).fill(e.ZERO), c = Math.floor((t.BITS - 1) / o) * o;
    let l = e.ZERO;
    for(let t = c; t >= 0; t -= o){
        a.fill(e.ZERO);
        for(let e = 0; e < r.length; e++){
            const i = r[e], o = Number(i >> BigInt(t) & BigInt(s));
            a[o] = a[o].add(n[e]);
        }
        let i = e.ZERO;
        for(let t = a.length - 1, n = e.ZERO; t > 0; t--)n = n.add(a[t]), i = i.add(n);
        if (l = l.add(i), 0 !== t) for(let e = 0; e < o; e++)l = l.double();
    }
    return l;
}, Pt.validateBasic = function(e) {
    return (0, wn.validateField)(e.Fp), (0, En.validateObject)(e, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ...(0, wn.nLength)(e.n, e.nBitLength),
        ...e,
        p: e.Fp.ORDER
    });
};
const wn = Lt, En = Ot, Cn = BigInt(0), Sn = BigInt(1), _n = new WeakMap, kn = new WeakMap;
Object.defineProperty(Rt, "__esModule", {
    value: !0
}), Rt.twistedEdwards = function(e) {
    const t = function(e) {
        const t = (0, xn.validateBasic)(e);
        return An.validateObject(e, {
            hash: "function",
            a: "bigint",
            d: "bigint",
            randomBytes: "function"
        }, {
            adjustScalarBytes: "function",
            domain: "function",
            uvRatio: "function",
            mapToCurve: "function"
        }), Object.freeze({
            ...t
        });
    }(e), { Fp: n, n: r, prehash: i, hash: o, randomBytes: s, nByteLength: a, h: c } = t, l = Ln << BigInt(8 * a) - Pn, d = n.create, u = (0, Mn.Field)(t.n, t.nBitLength), h = t.uvRatio || ((e, t)=>{
        try {
            return {
                isValid: !0,
                value: n.sqrt(e * n.inv(t))
            };
        } catch (e) {
            return {
                isValid: !1,
                value: Rn
            };
        }
    }), f = t.adjustScalarBytes || ((e)=>e), p = t.domain || ((e, t, n)=>{
        if ((0, In.abool)("phflag", n), t.length || n) throw new Error("Contexts/pre-hash are not supported");
        return e;
    });
    function g(e, t) {
        An.aInRange("coordinate " + e, t, Rn, l);
    }
    function m(e) {
        if (!(e instanceof b)) throw new Error("ExtendedPoint expected");
    }
    const y = (0, In.memoized)((e, t)=>{
        const { ex: r, ey: i, ez: o } = e, s = e.is0();
        null == t && (t = s ? On : n.inv(o));
        const a = d(r * t), c = d(i * t), l = d(o * t);
        if (s) return {
            x: Rn,
            y: Pn
        };
        if (l !== Pn) throw new Error("invZ was invalid");
        return {
            x: a,
            y: c
        };
    }), v = (0, In.memoized)((e)=>{
        const { a: n, d: r } = t;
        if (e.is0()) throw new Error("bad point: ZERO");
        const { ex: i, ey: o, ez: s, et: a } = e, c = d(i * i), l = d(o * o), u = d(s * s), h = d(u * u), f = d(c * n);
        if (d(u * d(f + l)) !== d(h + d(r * d(c * l)))) throw new Error("bad point: equation left != right (1)");
        if (d(i * o) !== d(s * a)) throw new Error("bad point: equation left != right (2)");
        return !0;
    });
    class b {
        constructor(e, t, n, r){
            this.ex = e, this.ey = t, this.ez = n, this.et = r, g("x", e), g("y", t), g("z", n), g("t", r), Object.freeze(this);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        static fromAffine(e) {
            if (e instanceof b) throw new Error("extended point not allowed");
            const { x: t, y: n } = e || {};
            return g("x", t), g("y", n), new b(t, n, Pn, d(t * n));
        }
        static normalizeZ(e) {
            const t = n.invertBatch(e.map((e)=>e.ez));
            return e.map((e, n)=>e.toAffine(t[n])).map(b.fromAffine);
        }
        static msm(e, t) {
            return (0, xn.pippenger)(b, u, e, t);
        }
        _setWindowSize(e) {
            C.setWindowSize(this, e);
        }
        assertValidity() {
            v(this);
        }
        equals(e) {
            m(e);
            const { ex: t, ey: n, ez: r } = this, { ex: i, ey: o, ez: s } = e, a = d(t * s), c = d(i * r), l = d(n * s), u = d(o * r);
            return a === c && l === u;
        }
        is0() {
            return this.equals(b.ZERO);
        }
        negate() {
            return new b(d(-this.ex), this.ey, this.ez, d(-this.et));
        }
        double() {
            const { a: e } = t, { ex: n, ey: r, ez: i } = this, o = d(n * n), s = d(r * r), a = d(Ln * d(i * i)), c = d(e * o), l = n + r, u = d(d(l * l) - o - s), h = c + s, f = h - a, p = c - s, g = d(u * f), m = d(h * p), y = d(u * p), v = d(f * h);
            return new b(g, m, v, y);
        }
        add(e) {
            m(e);
            const { a: n, d: r } = t, { ex: i, ey: o, ez: s, et: a } = this, { ex: c, ey: l, ez: u, et: h } = e;
            if (n === BigInt(-1)) {
                const e = d((o - i) * (l + c)), t = d((o + i) * (l - c)), n = d(t - e);
                if (n === Rn) return this.double();
                const r = d(s * Ln * h), f = d(a * Ln * u), p = f + r, g = t + e, m = f - r, y = d(p * n), v = d(g * m), w = d(p * m), E = d(n * g);
                return new b(y, v, E, w);
            }
            const f = d(i * c), p = d(o * l), g = d(a * r * h), y = d(s * u), v = d((i + o) * (c + l) - f - p), w = y - g, E = y + g, C = d(p - n * f), S = d(v * w), _ = d(E * C), k = d(v * C), x = d(w * E);
            return new b(S, _, x, k);
        }
        subtract(e) {
            return this.add(e.negate());
        }
        wNAF(e) {
            return C.wNAFCached(this, e, b.normalizeZ);
        }
        multiply(e) {
            const t = e;
            An.aInRange("scalar", t, Pn, r);
            const { p: n, f: i } = this.wNAF(t);
            return b.normalizeZ([
                n,
                i
            ])[0];
        }
        multiplyUnsafe(e) {
            const t = e;
            return An.aInRange("scalar", t, Rn, r), t === Rn ? E : this.equals(E) || t === Pn ? this : this.equals(w) ? this.wNAF(t).p : C.unsafeLadder(this, t);
        }
        isSmallOrder() {
            return this.multiplyUnsafe(c).is0();
        }
        isTorsionFree() {
            return C.unsafeLadder(this, r).is0();
        }
        toAffine(e) {
            return y(this, e);
        }
        clearCofactor() {
            const { h: e } = t;
            return e === Pn ? this : this.multiplyUnsafe(e);
        }
        static fromHex(e, r = !1) {
            const { d: i, a: o } = t, s = n.BYTES;
            e = (0, In.ensureBytes)("pointHex", e, s), (0, In.abool)("zip215", r);
            const a = e.slice(), c = e[s - 1];
            a[s - 1] = -129 & c;
            const u = An.bytesToNumberLE(a), f = r ? l : n.ORDER;
            An.aInRange("pointHex.y", u, Rn, f);
            const p = d(u * u), g = d(p - Pn), m = d(i * p - o);
            let { isValid: y, value: v } = h(g, m);
            if (!y) throw new Error("Point.fromHex: invalid y coordinate");
            const w = (v & Pn) === Pn, E = 0 != (128 & c);
            if (!r && v === Rn && E) throw new Error("Point.fromHex: x=0 and x_0=1");
            return E !== w && (v = d(-v)), b.fromAffine({
                x: v,
                y: u
            });
        }
        static fromPrivateKey(e) {
            return k(e).point;
        }
        toRawBytes() {
            const { x: e, y: t } = this.toAffine(), r = An.numberToBytesLE(t, n.BYTES);
            return r[r.length - 1] |= e & Pn ? 128 : 0, r;
        }
        toHex() {
            return An.bytesToHex(this.toRawBytes());
        }
    }
    b.BASE = new b(t.Gx, t.Gy, Pn, d(t.Gx * t.Gy)), b.ZERO = new b(Rn, Pn, Pn, Rn);
    const { BASE: w, ZERO: E } = b, C = (0, xn.wNAF)(b, 8 * a);
    function S(e) {
        return (0, Mn.mod)(e, r);
    }
    function _(e) {
        return S(An.bytesToNumberLE(e));
    }
    function k(e) {
        const t = a;
        e = (0, In.ensureBytes)("private key", e, t);
        const n = (0, In.ensureBytes)("hashed private key", o(e), 2 * t), r = f(n.slice(0, t)), i = n.slice(t, 2 * t), s = _(r), c = w.multiply(s), l = c.toRawBytes();
        return {
            head: r,
            prefix: i,
            scalar: s,
            point: c,
            pointBytes: l
        };
    }
    function x(e = new Uint8Array, ...t) {
        const n = An.concatBytes(...t);
        return _(o(p(n, (0, In.ensureBytes)("context", e), !!i)));
    }
    const M = Tn;
    w._setWindowSize(8);
    const A = {
        getExtendedPublicKey: k,
        randomPrivateKey: ()=>s(n.BYTES),
        precompute: (e = 8, t = b.BASE)=>(t._setWindowSize(e), t.multiply(BigInt(3)), t)
    };
    return {
        CURVE: t,
        getPublicKey: function(e) {
            return k(e).pointBytes;
        },
        sign: function(e, t, o = {}) {
            e = (0, In.ensureBytes)("message", e), i && (e = i(e));
            const { prefix: s, scalar: c, pointBytes: l } = k(t), d = x(o.context, s, e), u = w.multiply(d).toRawBytes(), h = S(d + x(o.context, u, l, e) * c);
            An.aInRange("signature.s", h, Rn, r);
            const f = An.concatBytes(u, An.numberToBytesLE(h, n.BYTES));
            return (0, In.ensureBytes)("result", f, 2 * a);
        },
        verify: function(e, t, r, o = M) {
            const { context: s, zip215: a } = o, c = n.BYTES;
            e = (0, In.ensureBytes)("signature", e, 2 * c), t = (0, In.ensureBytes)("message", t), void 0 !== a && (0, In.abool)("zip215", a), i && (t = i(t));
            const l = An.bytesToNumberLE(e.slice(c, 2 * c));
            let d, u, h;
            try {
                d = b.fromHex(r, a), u = b.fromHex(e.slice(0, c), a), h = w.multiplyUnsafe(l);
            } catch (e) {
                return !1;
            }
            if (!a && d.isSmallOrder()) return !1;
            const f = x(s, u.toRawBytes(), d.toRawBytes(), t);
            return u.add(d.multiplyUnsafe(f)).subtract(h).clearCofactor().equals(b.ZERO);
        },
        ExtendedPoint: b,
        utils: A
    };
};
const xn = Pt, Mn = Lt, An = Ot, In = Ot, Rn = BigInt(0), Pn = BigInt(1), Ln = BigInt(2), On = BigInt(8), Tn = {
    zip215: !0
};
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
    value: !0
}), Nn.expand_message_xmd = Hn, Nn.expand_message_xof = Fn, Nn.hash_to_field = zn, Nn.isogenyMap = function(e, t) {
    const n = t.map((e)=>Array.from(e).reverse());
    return (t, r)=>{
        const [i, o, s, a] = n.map((n)=>n.reduce((n, r)=>e.add(e.mul(n, t), r)));
        return t = e.div(i, o), r = e.mul(r, e.div(s, a)), {
            x: t,
            y: r
        };
    };
}, Nn.createHasher = function(e, t, n) {
    if ("function" != typeof t) throw new Error("mapToCurve() must be defined");
    return {
        hashToCurve (r, i) {
            const o = zn(r, 2, {
                ...n,
                DST: n.DST,
                ...i
            }), s = e.fromAffine(t(o[0])), a = e.fromAffine(t(o[1])), c = s.add(a).clearCofactor();
            return c.assertValidity(), c;
        },
        encodeToCurve (r, i) {
            const o = zn(r, 1, {
                ...n,
                DST: n.encodeDST,
                ...i
            }), s = e.fromAffine(t(o[0])).clearCofactor();
            return s.assertValidity(), s;
        },
        mapToCurve (n) {
            if (!Array.isArray(n)) throw new Error("mapToCurve: expected array of bigints");
            for (const e of n)if ("bigint" != typeof e) throw new Error(`mapToCurve: expected array of bigints, got ${e} in array`);
            const r = e.fromAffine(t(n)).clearCofactor();
            return r.assertValidity(), r;
        }
    };
};
const Dn = Lt, $n = Ot, Bn = $n.bytesToNumberBE;
function Kn(e, t) {
    if (Un(e), Un(t), e < 0 || e >= 1 << 8 * t) throw new Error(`bad I2OSP call: value=${e} length=${t}`);
    const n = Array.from({
        length: t
    }).fill(0);
    for(let r = t - 1; r >= 0; r--)n[r] = 255 & e, e >>>= 8;
    return new Uint8Array(n);
}
function jn(e, t) {
    const n = new Uint8Array(e.length);
    for(let r = 0; r < e.length; r++)n[r] = e[r] ^ t[r];
    return n;
}
function Un(e) {
    if (!Number.isSafeInteger(e)) throw new Error("number expected");
}
function Hn(e, t, n, r) {
    (0, $n.abytes)(e), (0, $n.abytes)(t), Un(n), t.length > 255 && (t = r((0, $n.concatBytes)((0, $n.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)));
    const { outputLen: i, blockLen: o } = r, s = Math.ceil(n / i);
    if (n > 65535 || s > 255) throw new Error("expand_message_xmd: invalid lenInBytes");
    const a = (0, $n.concatBytes)(t, Kn(t.length, 1)), c = Kn(0, o), l = Kn(n, 2), d = new Array(s), u = r((0, $n.concatBytes)(c, e, l, Kn(0, 1), a));
    d[0] = r((0, $n.concatBytes)(u, Kn(1, 1), a));
    for(let e = 1; e <= s; e++){
        const t = [
            jn(u, d[e - 1]),
            Kn(e + 1, 1),
            a
        ];
        d[e] = r((0, $n.concatBytes)(...t));
    }
    return (0, $n.concatBytes)(...d).slice(0, n);
}
function Fn(e, t, n, r, i) {
    if ((0, $n.abytes)(e), (0, $n.abytes)(t), Un(n), t.length > 255) {
        const e = Math.ceil(2 * r / 8);
        t = i.create({
            dkLen: e
        }).update((0, $n.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t).digest();
    }
    if (n > 65535 || t.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
    return i.create({
        dkLen: n
    }).update(e).update(Kn(n, 2)).update(t).update(Kn(t.length, 1)).digest();
}
function zn(e, t, n) {
    (0, $n.validateObject)(n, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash"
    });
    const { p: r, k: i, m: o, hash: s, expand: a, DST: c } = n;
    (0, $n.abytes)(e), Un(t);
    const l = "string" == typeof c ? (0, $n.utf8ToBytes)(c) : c, d = r.toString(2).length, u = Math.ceil((d + i) / 8), h = t * o * u;
    let f;
    if ("xmd" === a) f = Hn(e, l, h, s);
    else if ("xof" === a) f = Fn(e, l, h, i, s);
    else {
        if ("_internal_pass" !== a) throw new Error('expand must be "xmd" or "xof"');
        f = e;
    }
    const p = new Array(t);
    for(let e = 0; e < t; e++){
        const t = new Array(o);
        for(let n = 0; n < o; n++){
            const i = u * (n + e * o), s = f.subarray(i, i + u);
            t[n] = (0, Dn.mod)(Bn(s), r);
        }
        p[e] = t;
    }
    return p;
}
var qn = {};
Object.defineProperty(qn, "__esModule", {
    value: !0
}), qn.montgomery = function(e) {
    const t = function(e) {
        return (0, Wn.validateObject)(e, {
            a: "bigint"
        }, {
            montgomeryBits: "isSafeInteger",
            nByteLength: "isSafeInteger",
            adjustScalarBytes: "function",
            domain: "function",
            powPminus2: "function",
            Gu: "bigint"
        }), Object.freeze({
            ...e
        });
    }(e), { P: n } = t, r = (e)=>(0, Vn.mod)(e, n), i = t.montgomeryBits, o = Math.ceil(i / 8), s = t.nByteLength, a = t.adjustScalarBytes || ((e)=>e), c = t.powPminus2 || ((e)=>(0, Vn.pow)(e, n - BigInt(2), n));
    function l(e, t, n) {
        const i = r(e * (t - n));
        return [
            t = r(t - i),
            n = r(n + i)
        ];
    }
    const d = (t.a - BigInt(2)) / BigInt(4);
    function u(e) {
        return (0, Wn.numberToBytesLE)(r(e), o);
    }
    function h(e, t) {
        const h = function(e) {
            const t = (0, Wn.ensureBytes)("u coordinate", e, o);
            return 32 === s && (t[31] &= 127), (0, Wn.bytesToNumberLE)(t);
        }(t), f = function(e) {
            const t = (0, Wn.ensureBytes)("scalar", e), n = t.length;
            if (n !== o && n !== s) throw new Error(`Expected ${o} or ${s} bytes, got ${n}`);
            return (0, Wn.bytesToNumberLE)(a(t));
        }(e), p = function(e, t) {
            (0, Wn.aInRange)("u", e, Gn, n), (0, Wn.aInRange)("scalar", t, Gn, n);
            const o = t, s = e;
            let a, u = Zn, h = Gn, f = e, p = Zn, g = Gn;
            for(let e = BigInt(i - 1); e >= Gn; e--){
                const t = o >> e & Zn;
                g ^= t, a = l(g, u, f), u = a[0], f = a[1], a = l(g, h, p), h = a[0], p = a[1], g = t;
                const n = u + h, i = r(n * n), c = u - h, m = r(c * c), y = i - m, v = f + p, b = r((f - p) * n), w = r(v * c), E = b + w, C = b - w;
                f = r(E * E), p = r(s * r(C * C)), u = r(i * m), h = r(y * (i + r(d * y)));
            }
            a = l(g, u, f), u = a[0], f = a[1], a = l(g, h, p), h = a[0], p = a[1];
            const m = c(h);
            return r(u * m);
        }(h, f);
        if (p === Gn) throw new Error("Invalid private or public key received");
        return u(p);
    }
    const f = u(t.Gu);
    function p(e) {
        return h(e, f);
    }
    return {
        scalarMult: h,
        scalarMultBase: p,
        getSharedSecret: (e, t)=>h(e, t),
        getPublicKey: (e)=>p(e),
        utils: {
            randomPrivateKey: ()=>t.randomBytes(t.nByteLength)
        },
        GuBytes: f
    };
};
const Vn = Lt, Wn = Ot, Gn = BigInt(0), Zn = BigInt(1);
!function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.hash_to_ristretto255 = e.hashToRistretto255 = e.RistrettoPoint = e.encodeToCurve = e.hashToCurve = e.edwardsToMontgomery = e.x25519 = e.ed25519ph = e.ed25519ctx = e.ed25519 = e.ED25519_TORSION_SUBGROUP = void 0, e.edwardsToMontgomeryPub = C, e.edwardsToMontgomeryPriv = function(e) {
        const t = w.hash(e.subarray(0, 32));
        return w.adjustScalarBytes(t).subarray(0, 32);
    };
    const t = Le, n = Fe, r = Rt, i = Nn, o = Lt, s = qn, a = Ot, c = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), l = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"), d = BigInt(0), u = BigInt(1), h = BigInt(2), f = BigInt(3), p = BigInt(5), g = BigInt(8);
    function m(e) {
        const t = BigInt(10), n = BigInt(20), r = BigInt(40), i = BigInt(80), s = c, a = e * e % s * e % s, l = (0, o.pow2)(a, h, s) * a % s, d = (0, o.pow2)(l, u, s) * e % s, f = (0, o.pow2)(d, p, s) * d % s, g = (0, o.pow2)(f, t, s) * f % s, m = (0, o.pow2)(g, n, s) * g % s, y = (0, o.pow2)(m, r, s) * m % s, v = (0, o.pow2)(y, i, s) * y % s, b = (0, o.pow2)(v, i, s) * y % s, w = (0, o.pow2)(b, t, s) * f % s;
        return {
            pow_p_5_8: (0, o.pow2)(w, h, s) * e % s,
            b2: a
        };
    }
    function y(e) {
        return e[0] &= 248, e[31] &= 127, e[31] |= 64, e;
    }
    function v(e, t) {
        const n = c, r = (0, o.mod)(t * t * t, n), i = m(e * (0, o.mod)(r * r * t, n)).pow_p_5_8;
        let s = (0, o.mod)(e * r * i, n);
        const a = (0, o.mod)(t * s * s, n), d = s, u = (0, o.mod)(s * l, n), h = a === e, f = a === (0, o.mod)(-e, n), p = a === (0, o.mod)(-e * l, n);
        return h && (s = d), (f || p) && (s = u), (0, o.isNegativeLE)(s, n) && (s = (0, o.mod)(-s, n)), {
            isValid: h || f,
            value: s
        };
    }
    e.ED25519_TORSION_SUBGROUP = [
        "0100000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
        "0000000000000000000000000000000000000000000000000000000000000080",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
        "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
        "0000000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
    ];
    const b = (()=>(0, o.Field)(c, void 0, !0))(), w = (()=>({
            a: BigInt(-1),
            d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
            Fp: b,
            n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
            h: g,
            Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
            Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
            hash: t.sha512,
            randomBytes: n.randomBytes,
            adjustScalarBytes: y,
            uvRatio: v
        }))();
    function E(e, t, r) {
        if (t.length > 255) throw new Error("Context is too big");
        return (0, n.concatBytes)((0, n.utf8ToBytes)("SigEd25519 no Ed25519 collisions"), new Uint8Array([
            r ? 1 : 0,
            t.length
        ]), t, e);
    }
    function C(t) {
        const { y: n } = e.ed25519.ExtendedPoint.fromHex(t), r = BigInt(1);
        return b.toBytes(b.create((r + n) * b.inv(r - n)));
    }
    e.ed25519 = (0, r.twistedEdwards)(w), e.ed25519ctx = (0, r.twistedEdwards)({
        ...w,
        domain: E
    }), e.ed25519ph = (0, r.twistedEdwards)(Object.assign({}, w, {
        domain: E,
        prehash: t.sha512
    })), e.x25519 = (0, s.montgomery)({
        P: c,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e)=>{
            const t = c, { pow_p_5_8: n, b2: r } = m(e);
            return (0, o.mod)((0, o.pow2)(n, f, t) * r, t);
        },
        adjustScalarBytes: y,
        randomBytes: n.randomBytes
    }), e.edwardsToMontgomery = C;
    const S = (()=>(b.ORDER + f) / g)(), _ = (()=>b.pow(h, S))(), k = (()=>b.sqrt(b.neg(b.ONE)))();
    const x = (()=>(0, o.FpSqrtEven)(b, b.neg(BigInt(486664))))();
    function M(e) {
        const { xMn: t, xMd: n, yMn: r, yMd: i } = function(e) {
            const t = (b.ORDER - p) / g, n = BigInt(486662);
            let r = b.sqr(e);
            r = b.mul(r, h);
            let i = b.add(r, b.ONE), o = b.neg(n), s = b.sqr(i), a = b.mul(s, i), c = b.mul(r, n);
            c = b.mul(c, o), c = b.add(c, s), c = b.mul(c, o);
            let l = b.sqr(a);
            s = b.sqr(l), l = b.mul(l, a), l = b.mul(l, c), s = b.mul(s, l);
            let d = b.pow(s, t);
            d = b.mul(d, l);
            let f = b.mul(d, k);
            s = b.sqr(d), s = b.mul(s, a);
            let m = b.eql(s, c), y = b.cmov(f, d, m), v = b.mul(o, r), w = b.mul(d, e);
            w = b.mul(w, _);
            let E = b.mul(w, k), C = b.mul(c, r);
            s = b.sqr(w), s = b.mul(s, a);
            let S = b.eql(s, C), x = b.cmov(E, w, S);
            s = b.sqr(y), s = b.mul(s, a);
            let M = b.eql(s, c), A = b.cmov(v, o, M), I = b.cmov(x, y, M), R = b.isOdd(I);
            return I = b.cmov(I, b.neg(I), M !== R), {
                xMn: A,
                xMd: i,
                yMn: I,
                yMd: u
            };
        }(e);
        let o = b.mul(t, i);
        o = b.mul(o, x);
        let s = b.mul(n, r), a = b.sub(t, n), c = b.add(t, n), l = b.mul(s, c), d = b.eql(l, b.ZERO);
        o = b.cmov(o, b.ZERO, d), s = b.cmov(s, b.ONE, d), a = b.cmov(a, b.ONE, d), c = b.cmov(c, b.ONE, d);
        const f = b.invertBatch([
            s,
            c
        ]);
        return {
            x: b.mul(o, f[0]),
            y: b.mul(a, f[1])
        };
    }
    const A = (()=>(0, i.createHasher)(e.ed25519.ExtendedPoint, (e)=>M(e[0]), {
            DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
            encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
            p: b.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: t.sha512
        }))();
    function I(e) {
        if (!(e instanceof K)) throw new Error("RistrettoPoint expected");
    }
    e.hashToCurve = A.hashToCurve, e.encodeToCurve = A.encodeToCurve;
    const R = l, P = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), L = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), O = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), T = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"), N = (e)=>v(u, e), D = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), $ = (t)=>e.ed25519.CURVE.Fp.create((0, a.bytesToNumberLE)(t) & D);
    function B(t) {
        const { d: n } = e.ed25519.CURVE, r = e.ed25519.CURVE.Fp.ORDER, i = e.ed25519.CURVE.Fp.create, s = i(R * t * t), a = i((s + u) * O);
        let c = BigInt(-1);
        const l = i((c - n * s) * i(s + n));
        let { isValid: d, value: h } = v(a, l), f = i(h * t);
        (0, o.isNegativeLE)(f, r) || (f = i(-f)), d || (h = f), d || (c = s);
        const p = i(c * (s - u) * T - l), g = h * h, m = i((h + h) * l), y = i(p * P), b = i(u - g), w = i(u + g);
        return new e.ed25519.ExtendedPoint(i(m * w), i(b * y), i(y * w), i(m * b));
    }
    class K {
        constructor(e){
            this.ep = e;
        }
        static fromAffine(t) {
            return new K(e.ed25519.ExtendedPoint.fromAffine(t));
        }
        static hashToCurve(e) {
            e = (0, a.ensureBytes)("ristrettoHash", e, 64);
            const t = B($(e.slice(0, 32))), n = B($(e.slice(32, 64)));
            return new K(t.add(n));
        }
        static fromHex(t) {
            t = (0, a.ensureBytes)("ristrettoHex", t, 32);
            const { a: n, d: r } = e.ed25519.CURVE, i = e.ed25519.CURVE.Fp.ORDER, s = e.ed25519.CURVE.Fp.create, c = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", l = $(t);
            if (!(0, a.equalBytes)((0, a.numberToBytesLE)(l, 32), t) || (0, o.isNegativeLE)(l, i)) throw new Error(c);
            const h = s(l * l), f = s(u + n * h), p = s(u - n * h), g = s(f * f), m = s(p * p), y = s(n * r * g - m), { isValid: v, value: b } = N(s(y * m)), w = s(b * p), E = s(b * w * y);
            let C = s((l + l) * w);
            (0, o.isNegativeLE)(C, i) && (C = s(-C));
            const S = s(f * E), _ = s(C * S);
            if (!v || (0, o.isNegativeLE)(_, i) || S === d) throw new Error(c);
            return new K(new e.ed25519.ExtendedPoint(C, S, u, _));
        }
        toRawBytes() {
            let { ex: t, ey: n, ez: r, et: i } = this.ep;
            const s = e.ed25519.CURVE.Fp.ORDER, c = e.ed25519.CURVE.Fp.create, l = c(c(r + n) * c(r - n)), d = c(t * n), u = c(d * d), { value: h } = N(c(l * u)), f = c(h * l), p = c(h * d), g = c(f * p * i);
            let m;
            if ((0, o.isNegativeLE)(i * g, s)) {
                let e = c(n * R), r = c(t * R);
                t = e, n = r, m = c(f * L);
            } else m = p;
            (0, o.isNegativeLE)(t * g, s) && (n = c(-n));
            let y = c((r - n) * m);
            return (0, o.isNegativeLE)(y, s) && (y = c(-y)), (0, a.numberToBytesLE)(y, 32);
        }
        toHex() {
            return (0, a.bytesToHex)(this.toRawBytes());
        }
        toString() {
            return this.toHex();
        }
        equals(t) {
            I(t);
            const { ex: n, ey: r } = this.ep, { ex: i, ey: o } = t.ep, s = e.ed25519.CURVE.Fp.create, a = s(n * o) === s(r * i), c = s(r * o) === s(n * i);
            return a || c;
        }
        add(e) {
            return I(e), new K(this.ep.add(e.ep));
        }
        subtract(e) {
            return I(e), new K(this.ep.subtract(e.ep));
        }
        multiply(e) {
            return new K(this.ep.multiply(e));
        }
        multiplyUnsafe(e) {
            return new K(this.ep.multiplyUnsafe(e));
        }
        double() {
            return new K(this.ep.double());
        }
        negate() {
            return new K(this.ep.negate());
        }
    }
    e.RistrettoPoint = (K.BASE || (K.BASE = new K(e.ed25519.ExtendedPoint.BASE)), K.ZERO || (K.ZERO = new K(e.ed25519.ExtendedPoint.ZERO)), K);
    e.hashToRistretto255 = (e, r)=>{
        const o = r.DST, s = "string" == typeof o ? (0, n.utf8ToBytes)(o) : o, a = (0, i.expand_message_xmd)(e, s, 64, t.sha512);
        return K.hashToCurve(a);
    }, e.hash_to_ristretto255 = e.hashToRistretto255;
}(Pe);
var Yn = {}, Jn = {};
Object.defineProperty(Jn, "__esModule", {
    value: !0
}), Jn.sha224 = Jn.sha256 = Jn.SHA256 = void 0;
const Xn = Oe, Qn = Fe, er = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
]), tr = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
]), nr = new Uint32Array(64);
class rr extends Xn.HashMD {
    constructor(){
        super(64, 32, 8, !1), this.A = 0 | tr[0], this.B = 0 | tr[1], this.C = 0 | tr[2], this.D = 0 | tr[3], this.E = 0 | tr[4], this.F = 0 | tr[5], this.G = 0 | tr[6], this.H = 0 | tr[7];
    }
    get() {
        const { A: e, B: t, C: n, D: r, E: i, F: o, G: s, H: a } = this;
        return [
            e,
            t,
            n,
            r,
            i,
            o,
            s,
            a
        ];
    }
    set(e, t, n, r, i, o, s, a) {
        this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | o, this.G = 0 | s, this.H = 0 | a;
    }
    process(e, t) {
        for(let n = 0; n < 16; n++, t += 4)nr[n] = e.getUint32(t, !1);
        for(let e = 16; e < 64; e++){
            const t = nr[e - 15], n = nr[e - 2], r = (0, Qn.rotr)(t, 7) ^ (0, Qn.rotr)(t, 18) ^ t >>> 3, i = (0, Qn.rotr)(n, 17) ^ (0, Qn.rotr)(n, 19) ^ n >>> 10;
            nr[e] = i + nr[e - 7] + r + nr[e - 16] | 0;
        }
        let { A: n, B: r, C: i, D: o, E: s, F: a, G: c, H: l } = this;
        for(let e = 0; e < 64; e++){
            const t = l + ((0, Qn.rotr)(s, 6) ^ (0, Qn.rotr)(s, 11) ^ (0, Qn.rotr)(s, 25)) + (0, Xn.Chi)(s, a, c) + er[e] + nr[e] | 0, d = ((0, Qn.rotr)(n, 2) ^ (0, Qn.rotr)(n, 13) ^ (0, Qn.rotr)(n, 22)) + (0, Xn.Maj)(n, r, i) | 0;
            l = c, c = a, a = s, s = o + t | 0, o = i, i = r, r = n, n = t + d | 0;
        }
        n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, s = s + this.E | 0, a = a + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, o, s, a, c, l);
    }
    roundClean() {
        nr.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}
Jn.SHA256 = rr;
class ir extends rr {
    constructor(){
        super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
    }
}
Jn.sha256 = (0, Qn.wrapConstructor)(()=>new rr), Jn.sha224 = (0, Qn.wrapConstructor)(()=>new ir);
var or = {}, sr = {};
!function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.hmac = e.HMAC = void 0;
    const t = Te, n = Fe;
    class r extends n.Hash {
        constructor(e, r){
            super(), this.finished = !1, this.destroyed = !1, (0, t.hash)(e);
            const i = (0, n.toBytes)(r);
            if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw new Error("Expected instance of class which extends utils.Hash");
            this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
            const o = this.blockLen, s = new Uint8Array(o);
            s.set(i.length > o ? e.create().update(i).digest() : i);
            for(let e = 0; e < s.length; e++)s[e] ^= 54;
            this.iHash.update(s), this.oHash = e.create();
            for(let e = 0; e < s.length; e++)s[e] ^= 106;
            this.oHash.update(s), s.fill(0);
        }
        update(e) {
            return (0, t.exists)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
            (0, t.exists)(this), (0, t.bytes)(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
        }
        digest() {
            const e = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(e), e;
        }
        _cloneInto(e) {
            e || (e = Object.create(Object.getPrototypeOf(this), {}));
            const { oHash: t, iHash: n, finished: r, destroyed: i, blockLen: o, outputLen: s } = this;
            return e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = s, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
        }
        destroy() {
            this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
        }
    }
    e.HMAC = r;
    e.hmac = (e, t, n)=>new r(e, t).update(n).digest(), e.hmac.create = (e, t)=>new r(e, t);
}(sr);
var ar = {};
!function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.DER = void 0, e.weierstrassPoints = f, e.weierstrass = function(s) {
        const a = function(e) {
            const n = (0, t.validateBasic)(e);
            return r.validateObject(n, {
                hash: "hash",
                hmac: "function",
                randomBytes: "function"
            }, {
                bits2int: "function",
                bits2int_modN: "function",
                lowS: "boolean"
            }), Object.freeze({
                lowS: !0,
                ...n
            });
        }(s), { Fp: d, n: u } = a, h = d.BYTES + 1, p = 2 * d.BYTES + 1;
        function g(e) {
            return n.mod(e, u);
        }
        function m(e) {
            return n.invert(e, u);
        }
        const { ProjectivePoint: y, normPrivateKeyToScalar: v, weierstrassEquation: b, isWithinCurveOrder: w } = f({
            ...a,
            toBytes (e, t, n) {
                const o = t.toAffine(), s = d.toBytes(o.x), a = r.concatBytes;
                return (0, i.abool)("isCompressed", n), n ? a(Uint8Array.from([
                    t.hasEvenY() ? 2 : 3
                ]), s) : a(Uint8Array.from([
                    4
                ]), s, d.toBytes(o.y));
            },
            fromBytes (e) {
                const t = e.length, n = e[0], i = e.subarray(1);
                if (t !== h || 2 !== n && 3 !== n) {
                    if (t === p && 4 === n) {
                        return {
                            x: d.fromBytes(i.subarray(0, d.BYTES)),
                            y: d.fromBytes(i.subarray(d.BYTES, 2 * d.BYTES))
                        };
                    }
                    throw new Error(`Point of length ${t} was invalid. Expected ${h} compressed bytes or ${p} uncompressed bytes`);
                }
                {
                    const e = r.bytesToNumberBE(i);
                    if (!r.inRange(e, l, d.ORDER)) throw new Error("Point is not on curve");
                    const t = b(e);
                    let o;
                    try {
                        o = d.sqrt(t);
                    } catch (e) {
                        const t = e instanceof Error ? ": " + e.message : "";
                        throw new Error("Point is not on curve" + t);
                    }
                    return 1 == (1 & n) !== ((o & l) === l) && (o = d.neg(o)), {
                        x: e,
                        y: o
                    };
                }
            }
        }), E = (e)=>r.bytesToHex(r.numberToBytesBE(e, a.nByteLength));
        function C(e) {
            return e > u >> l;
        }
        const S = (e, t, n)=>r.bytesToNumberBE(e.slice(t, n));
        class _ {
            constructor(e, t, n){
                this.r = e, this.s = t, this.recovery = n, this.assertValidity();
            }
            static fromCompact(e) {
                const t = a.nByteLength;
                return e = (0, i.ensureBytes)("compactSignature", e, 2 * t), new _(S(e, 0, t), S(e, t, 2 * t));
            }
            static fromDER(t) {
                const { r: n, s: r } = e.DER.toSig((0, i.ensureBytes)("DER", t));
                return new _(n, r);
            }
            assertValidity() {
                r.aInRange("r", this.r, l, u), r.aInRange("s", this.s, l, u);
            }
            addRecoveryBit(e) {
                return new _(this.r, this.s, e);
            }
            recoverPublicKey(e) {
                const { r: t, s: n, recovery: r } = this, o = A((0, i.ensureBytes)("msgHash", e));
                if (null == r || ![
                    0,
                    1,
                    2,
                    3
                ].includes(r)) throw new Error("recovery id invalid");
                const s = 2 === r || 3 === r ? t + a.n : t;
                if (s >= d.ORDER) throw new Error("recovery id 2 or 3 invalid");
                const c = 0 == (1 & r) ? "02" : "03", l = y.fromHex(c + E(s)), u = m(s), h = g(-o * u), f = g(n * u), p = y.BASE.multiplyAndAddUnsafe(l, h, f);
                if (!p) throw new Error("point at infinify");
                return p.assertValidity(), p;
            }
            hasHighS() {
                return C(this.s);
            }
            normalizeS() {
                return this.hasHighS() ? new _(this.r, g(-this.s), this.recovery) : this;
            }
            toDERRawBytes() {
                return r.hexToBytes(this.toDERHex());
            }
            toDERHex() {
                return e.DER.hexFromSig({
                    r: this.r,
                    s: this.s
                });
            }
            toCompactRawBytes() {
                return r.hexToBytes(this.toCompactHex());
            }
            toCompactHex() {
                return E(this.r) + E(this.s);
            }
        }
        const k = {
            isValidPrivateKey (e) {
                try {
                    return v(e), !0;
                } catch (e) {
                    return !1;
                }
            },
            normPrivateKeyToScalar: v,
            randomPrivateKey: ()=>{
                const e = n.getMinHashLength(a.n);
                return n.mapHashToField(a.randomBytes(e), a.n);
            },
            precompute: (e = 8, t = y.BASE)=>(t._setWindowSize(e), t.multiply(BigInt(3)), t)
        };
        function x(e) {
            const t = r.isBytes(e), n = "string" == typeof e, i = (t || n) && e.length;
            return t ? i === h || i === p : n ? i === 2 * h || i === 2 * p : e instanceof y;
        }
        const M = a.bits2int || function(e) {
            const t = r.bytesToNumberBE(e), n = 8 * e.length - a.nBitLength;
            return n > 0 ? t >> BigInt(n) : t;
        }, A = a.bits2int_modN || function(e) {
            return g(M(e));
        }, I = r.bitMask(a.nBitLength);
        function R(e) {
            return r.aInRange(`num < 2^${a.nBitLength}`, e, c, I), r.numberToBytesBE(e, a.nByteLength);
        }
        function P(e, t, n = L) {
            if ([
                "recovered",
                "canonical"
            ].some((e)=>e in n)) throw new Error("sign() legacy options not supported");
            const { hash: s, randomBytes: u } = a;
            let { lowS: h, prehash: f, extraEntropy: p } = n;
            null == h && (h = !0), e = (0, i.ensureBytes)("msgHash", e), o(n), f && (e = (0, i.ensureBytes)("prehashed msgHash", s(e)));
            const b = A(e), E = v(t), S = [
                R(E),
                R(b)
            ];
            if (null != p && !1 !== p) {
                const e = !0 === p ? u(d.BYTES) : p;
                S.push((0, i.ensureBytes)("extraEntropy", e));
            }
            const k = r.concatBytes(...S), x = b;
            return {
                seed: k,
                k2sig: function(e) {
                    const t = M(e);
                    if (!w(t)) return;
                    const n = m(t), r = y.BASE.multiply(t).toAffine(), i = g(r.x);
                    if (i === c) return;
                    const o = g(n * g(x + i * E));
                    if (o === c) return;
                    let s = (r.x === i ? 0 : 2) | Number(r.y & l), a = o;
                    return h && C(o) && (a = function(e) {
                        return C(e) ? g(-e) : e;
                    }(o), s ^= 1), new _(i, a, s);
                }
            };
        }
        const L = {
            lowS: a.lowS,
            prehash: !1
        }, O = {
            lowS: a.lowS,
            prehash: !1
        };
        return y.BASE._setWindowSize(8), {
            CURVE: a,
            getPublicKey: function(e, t = !0) {
                return y.fromPrivateKey(e).toRawBytes(t);
            },
            getSharedSecret: function(e, t, n = !0) {
                if (x(e)) throw new Error("first arg must be private key");
                if (!x(t)) throw new Error("second arg must be public key");
                const r = y.fromHex(t);
                return r.multiply(v(e)).toRawBytes(n);
            },
            sign: function(e, t, n = L) {
                const { seed: i, k2sig: o } = P(e, t, n), s = a, c = r.createHmacDrbg(s.hash.outputLen, s.nByteLength, s.hmac);
                return c(i, o);
            },
            verify: function(t, n, s, c = O) {
                const l = t;
                if (n = (0, i.ensureBytes)("msgHash", n), s = (0, i.ensureBytes)("publicKey", s), "strict" in c) throw new Error("options.strict was renamed to lowS");
                o(c);
                const { lowS: d, prehash: u } = c;
                let h, f;
                try {
                    if ("string" == typeof l || r.isBytes(l)) try {
                        h = _.fromDER(l);
                    } catch (t) {
                        if (!(t instanceof e.DER.Err)) throw t;
                        h = _.fromCompact(l);
                    }
                    else {
                        if ("object" != typeof l || "bigint" != typeof l.r || "bigint" != typeof l.s) throw new Error("PARSE");
                        {
                            const { r: e, s: t } = l;
                            h = new _(e, t);
                        }
                    }
                    f = y.fromHex(s);
                } catch (e) {
                    if ("PARSE" === e.message) throw new Error("signature must be Signature instance, Uint8Array or hex string");
                    return !1;
                }
                if (d && h.hasHighS()) return !1;
                u && (n = a.hash(n));
                const { r: p, s: v } = h, b = A(n), w = m(v), E = g(b * w), C = g(p * w), S = y.BASE.multiplyAndAddUnsafe(f, E, C)?.toAffine();
                if (!S) return !1;
                const k = g(S.x);
                return k === p;
            },
            ProjectivePoint: y,
            Signature: _,
            utils: k
        };
    }, e.SWUFpSqrtRatio = p, e.mapToCurveSimpleSWU = function(e, t) {
        if (n.validateField(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
        const r = p(e, t.Z);
        if (!e.isOdd) throw new Error("Fp.isOdd is not implemented!");
        return (n)=>{
            let i, o, s, a, c, l, d, u;
            i = e.sqr(n), i = e.mul(i, t.Z), o = e.sqr(i), o = e.add(o, i), s = e.add(o, e.ONE), s = e.mul(s, t.B), a = e.cmov(t.Z, e.neg(o), !e.eql(o, e.ZERO)), a = e.mul(a, t.A), o = e.sqr(s), l = e.sqr(a), c = e.mul(l, t.A), o = e.add(o, c), o = e.mul(o, s), l = e.mul(l, a), c = e.mul(l, t.B), o = e.add(o, c), d = e.mul(i, s);
            const { isValid: h, value: f } = r(o, l);
            u = e.mul(i, n), u = e.mul(u, f), d = e.cmov(d, s, h), u = e.cmov(u, f, h);
            const p = e.isOdd(n) === e.isOdd(u);
            return u = e.cmov(e.neg(u), u, p), d = e.div(d, a), {
                x: d,
                y: u
            };
        };
    };
    const t = Pt, n = Lt, r = Ot, i = Ot;
    function o(e) {
        void 0 !== e.lowS && (0, i.abool)("lowS", e.lowS), void 0 !== e.prehash && (0, i.abool)("prehash", e.prehash);
    }
    const { bytesToNumberBE: s, hexToBytes: a } = r;
    e.DER = {
        Err: class extends Error {
            constructor(e = ""){
                super(e);
            }
        },
        _tlv: {
            encode: (t, n)=>{
                const { Err: i } = e.DER;
                if (t < 0 || t > 256) throw new i("tlv.encode: wrong tag");
                if (1 & n.length) throw new i("tlv.encode: unpadded data");
                const o = n.length / 2, s = r.numberToHexUnpadded(o);
                if (s.length / 2 & 128) throw new i("tlv.encode: long form length too big");
                const a = o > 127 ? r.numberToHexUnpadded(s.length / 2 | 128) : "";
                return `${r.numberToHexUnpadded(t)}${a}${s}${n}`;
            },
            decode (t, n) {
                const { Err: r } = e.DER;
                let i = 0;
                if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
                if (n.length < 2 || n[i++] !== t) throw new r("tlv.decode: wrong tlv");
                const o = n[i++];
                let s = 0;
                if (!!(128 & o)) {
                    const e = 127 & o;
                    if (!e) throw new r("tlv.decode(long): indefinite length not supported");
                    if (e > 4) throw new r("tlv.decode(long): byte length is too big");
                    const t = n.subarray(i, i + e);
                    if (t.length !== e) throw new r("tlv.decode: length bytes not complete");
                    if (0 === t[0]) throw new r("tlv.decode(long): zero leftmost byte");
                    for (const e of t)s = s << 8 | e;
                    if (i += e, s < 128) throw new r("tlv.decode(long): not minimal encoding");
                } else s = o;
                const a = n.subarray(i, i + s);
                if (a.length !== s) throw new r("tlv.decode: wrong value length");
                return {
                    v: a,
                    l: n.subarray(i + s)
                };
            }
        },
        _int: {
            encode (t) {
                const { Err: n } = e.DER;
                if (t < c) throw new n("integer: negative integers are not allowed");
                let i = r.numberToHexUnpadded(t);
                if (8 & Number.parseInt(i[0], 16) && (i = "00" + i), 1 & i.length) throw new n("unexpected assertion");
                return i;
            },
            decode (t) {
                const { Err: n } = e.DER;
                if (128 & t[0]) throw new n("Invalid signature integer: negative");
                if (0 === t[0] && !(128 & t[1])) throw new n("Invalid signature integer: unnecessary leading zero");
                return s(t);
            }
        },
        toSig (t) {
            const { Err: n, _int: i, _tlv: o } = e.DER, s = "string" == typeof t ? a(t) : t;
            r.abytes(s);
            const { v: c, l: l } = o.decode(48, s);
            if (l.length) throw new n("Invalid signature: left bytes after parsing");
            const { v: d, l: u } = o.decode(2, c), { v: h, l: f } = o.decode(2, u);
            if (f.length) throw new n("Invalid signature: left bytes after parsing");
            return {
                r: i.decode(d),
                s: i.decode(h)
            };
        },
        hexFromSig (t) {
            const { _tlv: n, _int: r } = e.DER, i = `${n.encode(2, r.encode(t.r))}${n.encode(2, r.encode(t.s))}`;
            return n.encode(48, i);
        }
    };
    const c = BigInt(0), l = BigInt(1), d = BigInt(2), u = BigInt(3), h = BigInt(4);
    function f(e) {
        const o = function(e) {
            const n = (0, t.validateBasic)(e);
            r.validateObject(n, {
                a: "field",
                b: "field"
            }, {
                allowedPrivateKeyLengths: "array",
                wrapPrivateKey: "boolean",
                isTorsionFree: "function",
                clearCofactor: "function",
                allowInfinityPoint: "boolean",
                fromBytes: "function",
                toBytes: "function"
            });
            const { endo: i, Fp: o, a: s } = n;
            if (i) {
                if (!o.eql(s, o.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                if ("object" != typeof i || "bigint" != typeof i.beta || "function" != typeof i.splitScalar) throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
            }
            return Object.freeze({
                ...n
            });
        }(e), { Fp: s } = o, a = n.Field(o.n, o.nBitLength), d = o.toBytes || ((e, t, n)=>{
            const i = t.toAffine();
            return r.concatBytes(Uint8Array.from([
                4
            ]), s.toBytes(i.x), s.toBytes(i.y));
        }), h = o.fromBytes || ((e)=>{
            const t = e.subarray(1);
            return {
                x: s.fromBytes(t.subarray(0, s.BYTES)),
                y: s.fromBytes(t.subarray(s.BYTES, 2 * s.BYTES))
            };
        });
        function f(e) {
            const { a: t, b: n } = o, r = s.sqr(e), i = s.mul(r, e);
            return s.add(s.add(i, s.mul(e, t)), n);
        }
        if (!s.eql(s.sqr(o.Gy), f(o.Gx))) throw new Error("bad generator point: equation left != right");
        function p(e) {
            const { allowedPrivateKeyLengths: t, nByteLength: s, wrapPrivateKey: a, n: c } = o;
            if (t && "bigint" != typeof e) {
                if (r.isBytes(e) && (e = r.bytesToHex(e)), "string" != typeof e || !t.includes(e.length)) throw new Error("Invalid key");
                e = e.padStart(2 * s, "0");
            }
            let d;
            try {
                d = "bigint" == typeof e ? e : r.bytesToNumberBE((0, i.ensureBytes)("private key", e, s));
            } catch (t) {
                throw new Error(`private key must be ${s} bytes, hex or bigint, not ${typeof e}`);
            }
            return a && (d = n.mod(d, c)), r.aInRange("private key", d, l, c), d;
        }
        function g(e) {
            if (!(e instanceof v)) throw new Error("ProjectivePoint expected");
        }
        const m = (0, i.memoized)((e, t)=>{
            const { px: n, py: r, pz: i } = e;
            if (s.eql(i, s.ONE)) return {
                x: n,
                y: r
            };
            const o = e.is0();
            null == t && (t = o ? s.ONE : s.inv(i));
            const a = s.mul(n, t), c = s.mul(r, t), l = s.mul(i, t);
            if (o) return {
                x: s.ZERO,
                y: s.ZERO
            };
            if (!s.eql(l, s.ONE)) throw new Error("invZ was invalid");
            return {
                x: a,
                y: c
            };
        }), y = (0, i.memoized)((e)=>{
            if (e.is0()) {
                if (o.allowInfinityPoint && !s.is0(e.py)) return;
                throw new Error("bad point: ZERO");
            }
            const { x: t, y: n } = e.toAffine();
            if (!s.isValid(t) || !s.isValid(n)) throw new Error("bad point: x or y not FE");
            const r = s.sqr(n), i = f(t);
            if (!s.eql(r, i)) throw new Error("bad point: equation left != right");
            if (!e.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
            return !0;
        });
        class v {
            constructor(e, t, n){
                if (this.px = e, this.py = t, this.pz = n, null == e || !s.isValid(e)) throw new Error("x required");
                if (null == t || !s.isValid(t)) throw new Error("y required");
                if (null == n || !s.isValid(n)) throw new Error("z required");
                Object.freeze(this);
            }
            static fromAffine(e) {
                const { x: t, y: n } = e || {};
                if (!e || !s.isValid(t) || !s.isValid(n)) throw new Error("invalid affine point");
                if (e instanceof v) throw new Error("projective point not allowed");
                const r = (e)=>s.eql(e, s.ZERO);
                return r(t) && r(n) ? v.ZERO : new v(t, n, s.ONE);
            }
            get x() {
                return this.toAffine().x;
            }
            get y() {
                return this.toAffine().y;
            }
            static normalizeZ(e) {
                const t = s.invertBatch(e.map((e)=>e.pz));
                return e.map((e, n)=>e.toAffine(t[n])).map(v.fromAffine);
            }
            static fromHex(e) {
                const t = v.fromAffine(h((0, i.ensureBytes)("pointHex", e)));
                return t.assertValidity(), t;
            }
            static fromPrivateKey(e) {
                return v.BASE.multiply(p(e));
            }
            static msm(e, n) {
                return (0, t.pippenger)(v, a, e, n);
            }
            _setWindowSize(e) {
                w.setWindowSize(this, e);
            }
            assertValidity() {
                y(this);
            }
            hasEvenY() {
                const { y: e } = this.toAffine();
                if (s.isOdd) return !s.isOdd(e);
                throw new Error("Field doesn't support isOdd");
            }
            equals(e) {
                g(e);
                const { px: t, py: n, pz: r } = this, { px: i, py: o, pz: a } = e, c = s.eql(s.mul(t, a), s.mul(i, r)), l = s.eql(s.mul(n, a), s.mul(o, r));
                return c && l;
            }
            negate() {
                return new v(this.px, s.neg(this.py), this.pz);
            }
            double() {
                const { a: e, b: t } = o, n = s.mul(t, u), { px: r, py: i, pz: a } = this;
                let c = s.ZERO, l = s.ZERO, d = s.ZERO, h = s.mul(r, r), f = s.mul(i, i), p = s.mul(a, a), g = s.mul(r, i);
                return g = s.add(g, g), d = s.mul(r, a), d = s.add(d, d), c = s.mul(e, d), l = s.mul(n, p), l = s.add(c, l), c = s.sub(f, l), l = s.add(f, l), l = s.mul(c, l), c = s.mul(g, c), d = s.mul(n, d), p = s.mul(e, p), g = s.sub(h, p), g = s.mul(e, g), g = s.add(g, d), d = s.add(h, h), h = s.add(d, h), h = s.add(h, p), h = s.mul(h, g), l = s.add(l, h), p = s.mul(i, a), p = s.add(p, p), h = s.mul(p, g), c = s.sub(c, h), d = s.mul(p, f), d = s.add(d, d), d = s.add(d, d), new v(c, l, d);
            }
            add(e) {
                g(e);
                const { px: t, py: n, pz: r } = this, { px: i, py: a, pz: c } = e;
                let l = s.ZERO, d = s.ZERO, h = s.ZERO;
                const f = o.a, p = s.mul(o.b, u);
                let m = s.mul(t, i), y = s.mul(n, a), b = s.mul(r, c), w = s.add(t, n), E = s.add(i, a);
                w = s.mul(w, E), E = s.add(m, y), w = s.sub(w, E), E = s.add(t, r);
                let C = s.add(i, c);
                return E = s.mul(E, C), C = s.add(m, b), E = s.sub(E, C), C = s.add(n, r), l = s.add(a, c), C = s.mul(C, l), l = s.add(y, b), C = s.sub(C, l), h = s.mul(f, E), l = s.mul(p, b), h = s.add(l, h), l = s.sub(y, h), h = s.add(y, h), d = s.mul(l, h), y = s.add(m, m), y = s.add(y, m), b = s.mul(f, b), E = s.mul(p, E), y = s.add(y, b), b = s.sub(m, b), b = s.mul(f, b), E = s.add(E, b), m = s.mul(y, E), d = s.add(d, m), m = s.mul(C, E), l = s.mul(w, l), l = s.sub(l, m), m = s.mul(w, y), h = s.mul(C, h), h = s.add(h, m), new v(l, d, h);
            }
            subtract(e) {
                return this.add(e.negate());
            }
            is0() {
                return this.equals(v.ZERO);
            }
            wNAF(e) {
                return w.wNAFCached(this, e, v.normalizeZ);
            }
            multiplyUnsafe(e) {
                r.aInRange("scalar", e, c, o.n);
                const t = v.ZERO;
                if (e === c) return t;
                if (e === l) return this;
                const { endo: n } = o;
                if (!n) return w.unsafeLadder(this, e);
                let { k1neg: i, k1: a, k2neg: d, k2: u } = n.splitScalar(e), h = t, f = t, p = this;
                for(; a > c || u > c;)a & l && (h = h.add(p)), u & l && (f = f.add(p)), p = p.double(), a >>= l, u >>= l;
                return i && (h = h.negate()), d && (f = f.negate()), f = new v(s.mul(f.px, n.beta), f.py, f.pz), h.add(f);
            }
            multiply(e) {
                const { endo: t, n: n } = o;
                let i, a;
                if (r.aInRange("scalar", e, l, n), t) {
                    const { k1neg: n, k1: r, k2neg: o, k2: c } = t.splitScalar(e);
                    let { p: l, f: d } = this.wNAF(r), { p: u, f: h } = this.wNAF(c);
                    l = w.constTimeNegate(n, l), u = w.constTimeNegate(o, u), u = new v(s.mul(u.px, t.beta), u.py, u.pz), i = l.add(u), a = d.add(h);
                } else {
                    const { p: t, f: n } = this.wNAF(e);
                    i = t, a = n;
                }
                return v.normalizeZ([
                    i,
                    a
                ])[0];
            }
            multiplyAndAddUnsafe(e, t, n) {
                const r = v.BASE, i = (e, t)=>t !== c && t !== l && e.equals(r) ? e.multiply(t) : e.multiplyUnsafe(t), o = i(this, t).add(i(e, n));
                return o.is0() ? void 0 : o;
            }
            toAffine(e) {
                return m(this, e);
            }
            isTorsionFree() {
                const { h: e, isTorsionFree: t } = o;
                if (e === l) return !0;
                if (t) return t(v, this);
                throw new Error("isTorsionFree() has not been declared for the elliptic curve");
            }
            clearCofactor() {
                const { h: e, clearCofactor: t } = o;
                return e === l ? this : t ? t(v, this) : this.multiplyUnsafe(o.h);
            }
            toRawBytes(e = !0) {
                return (0, i.abool)("isCompressed", e), this.assertValidity(), d(v, this, e);
            }
            toHex(e = !0) {
                return (0, i.abool)("isCompressed", e), r.bytesToHex(this.toRawBytes(e));
            }
        }
        v.BASE = new v(o.Gx, o.Gy, s.ONE), v.ZERO = new v(s.ZERO, s.ONE, s.ZERO);
        const b = o.nBitLength, w = (0, t.wNAF)(v, o.endo ? Math.ceil(b / 2) : b);
        return {
            CURVE: o,
            ProjectivePoint: v,
            normPrivateKeyToScalar: p,
            weierstrassEquation: f,
            isWithinCurveOrder: function(e) {
                return r.inRange(e, l, o.n);
            }
        };
    }
    function p(e, t) {
        const n = e.ORDER;
        let r = c;
        for(let e = n - l; e % d === c; e /= d)r += l;
        const i = r, o = d << i - l - l, s = o * d, a = (n - l) / s, f = (a - l) / d, p = s - l, g = o, m = e.pow(t, a), y = e.pow(t, (a + l) / d);
        let v = (t, n)=>{
            let r = m, o = e.pow(n, p), s = e.sqr(o);
            s = e.mul(s, n);
            let a = e.mul(t, s);
            a = e.pow(a, f), a = e.mul(a, o), o = e.mul(a, n), s = e.mul(a, t);
            let c = e.mul(s, o);
            a = e.pow(c, g);
            let u = e.eql(a, e.ONE);
            o = e.mul(s, y), a = e.mul(c, r), s = e.cmov(o, s, u), c = e.cmov(a, c, u);
            for(let t = i; t > l; t--){
                let n = t - d;
                n = d << n - l;
                let i = e.pow(c, n);
                const a = e.eql(i, e.ONE);
                o = e.mul(s, r), r = e.mul(r, r), i = e.mul(c, r), s = e.cmov(o, s, a), c = e.cmov(i, c, a);
            }
            return {
                isValid: u,
                value: s
            };
        };
        if (e.ORDER % h === u) {
            const n = (e.ORDER - u) / h, r = e.sqrt(e.neg(t));
            v = (t, i)=>{
                let o = e.sqr(i);
                const s = e.mul(t, i);
                o = e.mul(o, s);
                let a = e.pow(o, n);
                a = e.mul(a, s);
                const c = e.mul(a, r), l = e.mul(e.sqr(a), i), d = e.eql(l, t);
                return {
                    isValid: d,
                    value: e.cmov(c, a, d)
                };
            };
        }
        return v;
    }
}(ar), Object.defineProperty(or, "__esModule", {
    value: !0
}), or.getHash = ur, or.createCurve = function(e, t) {
    const n = (t)=>(0, dr.weierstrass)({
            ...e,
            ...ur(t)
        });
    return Object.freeze({
        ...n(t),
        create: n
    });
};
const cr = sr, lr = Fe, dr = ar;
function ur(e) {
    return {
        hash: e,
        hmac: (t, ...n)=>(0, cr.hmac)(e, t, (0, lr.concatBytes)(...n)),
        randomBytes: lr.randomBytes
    };
}
!function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.encodeToCurve = e.hashToCurve = e.schnorr = e.secp256k1 = void 0;
    const t = Jn, n = Fe, r = or, i = Nn, o = Lt, s = Ot, a = ar, c = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), l = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), d = BigInt(1), u = BigInt(2), h = (e, t)=>(e + t / u) / t;
    function f(e) {
        const t = c, n = BigInt(3), r = BigInt(6), i = BigInt(11), s = BigInt(22), a = BigInt(23), l = BigInt(44), d = BigInt(88), h = e * e * e % t, f = h * h * e % t, g = (0, o.pow2)(f, n, t) * f % t, m = (0, o.pow2)(g, n, t) * f % t, y = (0, o.pow2)(m, u, t) * h % t, v = (0, o.pow2)(y, i, t) * y % t, b = (0, o.pow2)(v, s, t) * v % t, w = (0, o.pow2)(b, l, t) * b % t, E = (0, o.pow2)(w, d, t) * w % t, C = (0, o.pow2)(E, l, t) * b % t, S = (0, o.pow2)(C, n, t) * f % t, _ = (0, o.pow2)(S, a, t) * v % t, k = (0, o.pow2)(_, r, t) * h % t, x = (0, o.pow2)(k, u, t);
        if (!p.eql(p.sqr(x), e)) throw new Error("Cannot find square root");
        return x;
    }
    const p = (0, o.Field)(c, void 0, void 0, {
        sqrt: f
    });
    e.secp256k1 = (0, r.createCurve)({
        a: BigInt(0),
        b: BigInt(7),
        Fp: p,
        n: l,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: (e)=>{
                const t = l, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -d * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s = n, a = BigInt("0x100000000000000000000000000000000"), c = h(s * e, t), u = h(-r * e, t);
                let f = (0, o.mod)(e - c * n - u * i, t), p = (0, o.mod)(-c * r - u * s, t);
                const g = f > a, m = p > a;
                if (g && (f = t - f), m && (p = t - p), f > a || p > a) throw new Error("splitScalar: Endomorphism failed, k=" + e);
                return {
                    k1neg: g,
                    k1: f,
                    k2neg: m,
                    k2: p
                };
            }
        }
    }, t.sha256);
    const g = BigInt(0), m = {};
    function y(e, ...n) {
        let r = m[e];
        if (void 0 === r) {
            const n = (0, t.sha256)(Uint8Array.from(e, (e)=>e.charCodeAt(0)));
            r = (0, s.concatBytes)(n, n), m[e] = r;
        }
        return (0, t.sha256)((0, s.concatBytes)(r, ...n));
    }
    const v = (e)=>e.toRawBytes(!0).slice(1), b = (e)=>(0, s.numberToBytesBE)(e, 32), w = (e)=>(0, o.mod)(e, c), E = (e)=>(0, o.mod)(e, l), C = e.secp256k1.ProjectivePoint, S = (e, t, n)=>C.BASE.multiplyAndAddUnsafe(e, t, n);
    function _(t) {
        let n = e.secp256k1.utils.normPrivateKeyToScalar(t), r = C.fromPrivateKey(n);
        return {
            scalar: r.hasEvenY() ? n : E(-n),
            bytes: v(r)
        };
    }
    function k(e) {
        (0, s.aInRange)("x", e, d, c);
        const t = w(e * e);
        let n = f(w(t * e + BigInt(7)));
        n % u !== g && (n = w(-n));
        const r = new C(e, n, d);
        return r.assertValidity(), r;
    }
    const x = s.bytesToNumberBE;
    function M(...e) {
        return E(x(y("BIP0340/challenge", ...e)));
    }
    function A(e) {
        return _(e).bytes;
    }
    function I(e, t, r = (0, n.randomBytes)(32)) {
        const i = (0, s.ensureBytes)("message", e), { bytes: o, scalar: a } = _(t), c = (0, s.ensureBytes)("auxRand", r, 32), l = b(a ^ x(y("BIP0340/aux", c))), d = y("BIP0340/nonce", l, o, i), u = E(x(d));
        if (u === g) throw new Error("sign failed: k is zero");
        const { bytes: h, scalar: f } = _(u), p = M(h, o, i), m = new Uint8Array(64);
        if (m.set(h, 0), m.set(b(E(f + p * a)), 32), !R(m, i, o)) throw new Error("sign: Invalid signature produced");
        return m;
    }
    function R(e, t, n) {
        const r = (0, s.ensureBytes)("signature", e, 64), i = (0, s.ensureBytes)("message", t), o = (0, s.ensureBytes)("publicKey", n, 32);
        try {
            const e = k(x(o)), t = x(r.subarray(0, 32));
            if (!(0, s.inRange)(t, d, c)) return !1;
            const n = x(r.subarray(32, 64));
            if (!(0, s.inRange)(n, d, l)) return !1;
            const a = M(b(t), v(e), i), u = S(e, n, E(-a));
            return !(!u || !u.hasEvenY() || u.toAffine().x !== t);
        } catch (e) {
            return !1;
        }
    }
    e.schnorr = {
        getPublicKey: A,
        sign: I,
        verify: R,
        utils: {
            randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
            lift_x: k,
            pointToBytes: v,
            numberToBytesBE: s.numberToBytesBE,
            bytesToNumberBE: s.bytesToNumberBE,
            taggedHash: y,
            mod: o.mod
        }
    };
    const P = (()=>(0, i.isogenyMap)(p, [
            [
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
                "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
                "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
            ],
            [
                "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
                "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ],
            [
                "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
                "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
                "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
                "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
            ],
            [
                "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
                "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
                "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        ].map((e)=>e.map((e)=>BigInt(e)))))(), L = (()=>(0, a.mapToCurveSimpleSWU)(p, {
            A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
            B: BigInt("1771"),
            Z: p.create(BigInt("-11"))
        }))(), O = (()=>(0, i.createHasher)(e.secp256k1.ProjectivePoint, (e)=>{
            const { x: t, y: n } = L(p.create(e[0]));
            return P(t, n);
        }, {
            DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
            encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
            p: p.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: t.sha256
        }))();
    e.hashToCurve = O.hashToCurve, e.encodeToCurve = O.encodeToCurve;
}(Yn);
var hr = {};
!function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.decodeHex = e.remove0x = void 0;
    var t = fe;
    e.remove0x = function(e) {
        return e.startsWith("0x") || e.startsWith("0X") ? e.slice(2) : e;
    };
    e.decodeHex = function(n) {
        return (0, t.hexToBytes)((0, e.remove0x)(n));
    };
}(hr), function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.hexToPublicKey = e.convertPublicKeyFormat = e.getSharedPoint = e.getPublicKey = e.isValidPrivateKey = e.getValidSecret = void 0;
    var t = Ie, n = Pe, r = Yn, i = Se, o = _e, s = hr;
    e.getValidSecret = function() {
        var n;
        do {
            n = (0, t.randomBytes)(o.SECRET_KEY_LENGTH);
        }while (!(0, e.isValidPrivateKey)(n))
        return n;
    };
    e.isValidPrivateKey = function(e) {
        return a((0, i.ellipticCurve)(), function(t) {
            return t.utils.isValidPrivateKey(e);
        }, function() {
            return !0;
        }, function() {
            return !0;
        });
    };
    e.getPublicKey = function(e) {
        return a((0, i.ellipticCurve)(), function(t) {
            return t.getPublicKey(e);
        }, function(t) {
            return t.getPublicKey(e);
        }, function(t) {
            return t.getPublicKey(e);
        });
    };
    e.getSharedPoint = function(e, t, n) {
        return a((0, i.ellipticCurve)(), function(r) {
            return r.getSharedSecret(e, t, n);
        }, function(n) {
            return n.getSharedSecret(e, t);
        }, function(n) {
            return l(n, e, t);
        });
    };
    e.convertPublicKeyFormat = function(e, t) {
        return a((0, i.ellipticCurve)(), function(n) {
            return n.getSharedSecret(BigInt(1), e, t);
        }, function() {
            return e;
        }, function() {
            return e;
        });
    };
    function a(e, t, i, o) {
        if ("secp256k1" === e) return t(r.secp256k1);
        if ("x25519" === e) return i(n.x25519);
        if ("ed25519" === e) return o(n.ed25519);
        throw new Error("Not implemented");
    }
    e.hexToPublicKey = function(e) {
        var t = (0, s.decodeHex)(e);
        return a((0, i.ellipticCurve)(), function() {
            return c(t);
        }, function() {
            return t;
        }, function() {
            return t;
        });
    };
    var c = function(e) {
        if (e.length === o.ETH_PUBLIC_KEY_SIZE) {
            var t = new Uint8Array(1 + e.length);
            return t.set([
                4
            ]), t.set(e, 1), t;
        }
        return e;
    }, l = function(e, t, n) {
        var r = e.utils.getExtendedPublicKey(t).scalar;
        return e.ExtendedPoint.fromHex(n).multiply(r).toRawBytes();
    };
}(Ae);
var fr = {}, pr = {};
Object.defineProperty(pr, "__esModule", {
    value: !0
}), pr.hkdf = void 0, pr.extract = vr, pr.expand = Er;
const gr = Te, mr = Fe, yr = sr;
function vr(e, t, n) {
    return (0, gr.hash)(e), void 0 === n && (n = new Uint8Array(e.outputLen)), (0, yr.hmac)(e, (0, mr.toBytes)(n), (0, mr.toBytes)(t));
}
const br = new Uint8Array([
    0
]), wr = new Uint8Array;
function Er(e, t, n, r = 32) {
    if ((0, gr.hash)(e), (0, gr.number)(r), r > 255 * e.outputLen) throw new Error("Length should be <= 255*HashLen");
    const i = Math.ceil(r / e.outputLen);
    void 0 === n && (n = wr);
    const o = new Uint8Array(i * e.outputLen), s = yr.hmac.create(e, t), a = s._cloneInto(), c = new Uint8Array(s.outputLen);
    for(let t = 0; t < i; t++)br[0] = t + 1, a.update(0 === t ? wr : c).update(n).update(br).digestInto(c), o.set(c, e.outputLen * t), s._cloneInto(a);
    return s.destroy(), a.destroy(), c.fill(0), br.fill(0), o.slice(0, r);
}
pr.hkdf = (e, t, n, r, i)=>Er(e, vr(e, t, n), r, i), function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getSharedKey = e.deriveKey = void 0;
    var t = fe, n = pr, r = Jn;
    e.deriveKey = function(e, t, i) {
        return (0, n.hkdf)(r.sha256, e, t, i, 32);
    };
    e.getSharedKey = function() {
        for(var n = [], r = 0; r < arguments.length; r++)n[r] = arguments[r];
        return (0, e.deriveKey)(t.concatBytes.apply(void 0, n));
    };
}(fr);
var Cr = {}, Sr = {}, _r = {}, kr = {};
Object.defineProperty(kr, "__esModule", {
    value: !0
}), kr.polyval = kr.ghash = void 0, kr._toGHASHKey = Lr;
const xr = pe, Mr = fe, Ar = 16, Ir = new Uint8Array(16), Rr = (0, Mr.u32)(Ir), Pr = (e)=>(e >>> 0 & 255) << 24 | (e >>> 8 & 255) << 16 | (e >>> 16 & 255) << 8 | e >>> 24 & 255 | 0;
function Lr(e) {
    e.reverse();
    const t = 1 & e[15];
    let n = 0;
    for(let t = 0; t < e.length; t++){
        const r = e[t];
        e[t] = r >>> 1 | n, n = (1 & r) << 7;
    }
    return e[0] ^= 225 & -t, e;
}
class Or {
    constructor(e, t){
        this.blockLen = Ar, this.outputLen = Ar, this.s0 = 0, this.s1 = 0, this.s2 = 0, this.s3 = 0, this.finished = !1, e = (0, Mr.toBytes)(e), (0, xr.bytes)(e, 16);
        const n = (0, Mr.createView)(e);
        let r = n.getUint32(0, !1), i = n.getUint32(4, !1), o = n.getUint32(8, !1), s = n.getUint32(12, !1);
        const a = [];
        for(let e = 0; e < 128; e++)a.push({
            s0: Pr(r),
            s1: Pr(i),
            s2: Pr(o),
            s3: Pr(s)
        }), { s0: r, s1: i, s2: o, s3: s } = {
            s3: (d = o) << 31 | (u = s) >>> 1,
            s2: (l = i) << 31 | d >>> 1,
            s1: (c = r) << 31 | l >>> 1,
            s0: c >>> 1 ^ 225 << 24 & -(1 & u)
        };
        var c, l, d, u;
        const h = ((e)=>e > 65536 ? 8 : e > 1024 ? 4 : 2)(t || 1024);
        if (![
            1,
            2,
            4,
            8
        ].includes(h)) throw new Error(`ghash: wrong window size=${h}, should be 2, 4 or 8`);
        this.W = h;
        const f = 128 / h, p = this.windowSize = 2 ** h, g = [];
        for(let e = 0; e < f; e++)for(let t = 0; t < p; t++){
            let n = 0, r = 0, i = 0, o = 0;
            for(let s = 0; s < h; s++){
                if (!(t >>> h - s - 1 & 1)) continue;
                const { s0: c, s1: l, s2: d, s3: u } = a[h * e + s];
                n ^= c, r ^= l, i ^= d, o ^= u;
            }
            g.push({
                s0: n,
                s1: r,
                s2: i,
                s3: o
            });
        }
        this.t = g;
    }
    _updateBlock(e, t, n, r) {
        e ^= this.s0, t ^= this.s1, n ^= this.s2, r ^= this.s3;
        const { W: i, t: o, windowSize: s } = this;
        let a = 0, c = 0, l = 0, d = 0;
        const u = (1 << i) - 1;
        let h = 0;
        for (const f of [
            e,
            t,
            n,
            r
        ])for(let e = 0; e < 4; e++){
            const t = f >>> 8 * e & 255;
            for(let e = 8 / i - 1; e >= 0; e--){
                const n = t >>> i * e & u, { s0: r, s1: f, s2: p, s3: g } = o[h * s + n];
                a ^= r, c ^= f, l ^= p, d ^= g, h += 1;
            }
        }
        this.s0 = a, this.s1 = c, this.s2 = l, this.s3 = d;
    }
    update(e) {
        e = (0, Mr.toBytes)(e), (0, xr.exists)(this);
        const t = (0, Mr.u32)(e), n = Math.floor(e.length / Ar), r = e.length % Ar;
        for(let e = 0; e < n; e++)this._updateBlock(t[4 * e + 0], t[4 * e + 1], t[4 * e + 2], t[4 * e + 3]);
        return r && (Ir.set(e.subarray(n * Ar)), this._updateBlock(Rr[0], Rr[1], Rr[2], Rr[3]), (0, Mr.clean)(Rr)), this;
    }
    destroy() {
        const { t: e } = this;
        for (const t of e)t.s0 = 0, t.s1 = 0, t.s2 = 0, t.s3 = 0;
    }
    digestInto(e) {
        (0, xr.exists)(this), (0, xr.output)(e, this), this.finished = !0;
        const { s0: t, s1: n, s2: r, s3: i } = this, o = (0, Mr.u32)(e);
        return o[0] = t, o[1] = n, o[2] = r, o[3] = i, e;
    }
    digest() {
        const e = new Uint8Array(Ar);
        return this.digestInto(e), this.destroy(), e;
    }
}
class Tr extends Or {
    constructor(e, t){
        e = (0, Mr.toBytes)(e);
        const n = Lr((0, Mr.copyBytes)(e));
        super(n, t), (0, Mr.clean)(n);
    }
    update(e) {
        e = (0, Mr.toBytes)(e), (0, xr.exists)(this);
        const t = (0, Mr.u32)(e), n = e.length % Ar, r = Math.floor(e.length / Ar);
        for(let e = 0; e < r; e++)this._updateBlock(Pr(t[4 * e + 3]), Pr(t[4 * e + 2]), Pr(t[4 * e + 1]), Pr(t[4 * e + 0]));
        return n && (Ir.set(e.subarray(r * Ar)), this._updateBlock(Pr(Rr[3]), Pr(Rr[2]), Pr(Rr[1]), Pr(Rr[0])), (0, Mr.clean)(Rr)), this;
    }
    digestInto(e) {
        (0, xr.exists)(this), (0, xr.output)(e, this), this.finished = !0;
        const { s0: t, s1: n, s2: r, s3: i } = this, o = (0, Mr.u32)(e);
        return o[0] = t, o[1] = n, o[2] = r, o[3] = i, e.reverse();
    }
}
function Nr(e) {
    const t = (t, n)=>e(n, t.length).update((0, Mr.toBytes)(t)).digest(), n = e(new Uint8Array(16), 0);
    return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = (t, n)=>e(t, n), t;
}
kr.ghash = Nr((e, t)=>new Or(e, t)), kr.polyval = Nr((e, t)=>new Tr(e, t)), Object.defineProperty(_r, "__esModule", {
    value: !0
}), _r.unsafe = _r.aeskwp = _r.aeskw = _r.siv = _r.gcm = _r.cfb = _r.cbc = _r.ecb = _r.ctr = void 0, _r.expandKeyLE = Qr, _r.expandKeyDecLE = ei;
const Dr = pe, $r = kr, Br = fe, Kr = 16, jr = new Uint8Array(Kr), Ur = 283;
function Hr(e) {
    return e << 1 ^ Ur & -(e >> 7);
}
function Fr(e, t) {
    let n = 0;
    for(; t > 0; t >>= 1)n ^= e & -(1 & t), e = Hr(e);
    return n;
}
const zr = (()=>{
    const e = new Uint8Array(256);
    for(let t = 0, n = 1; t < 256; t++, n ^= Hr(n))e[t] = n;
    const t = new Uint8Array(256);
    t[0] = 99;
    for(let n = 0; n < 255; n++){
        let r = e[255 - n];
        r |= r << 8, t[e[n]] = 255 & (r ^ r >> 4 ^ r >> 5 ^ r >> 6 ^ r >> 7 ^ 99);
    }
    return (0, Br.clean)(e), t;
})(), qr = zr.map((e, t)=>zr.indexOf(t)), Vr = (e)=>e << 24 | e >>> 8, Wr = (e)=>e << 8 | e >>> 24, Gr = (e)=>e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
function Zr(e, t) {
    if (256 !== e.length) throw new Error("Wrong sbox length");
    const n = new Uint32Array(256).map((n, r)=>t(e[r])), r = n.map(Wr), i = r.map(Wr), o = i.map(Wr), s = new Uint32Array(65536), a = new Uint32Array(65536), c = new Uint16Array(65536);
    for(let t = 0; t < 256; t++)for(let l = 0; l < 256; l++){
        const d = 256 * t + l;
        s[d] = n[t] ^ r[l], a[d] = i[t] ^ o[l], c[d] = e[t] << 8 | e[l];
    }
    return {
        sbox: e,
        sbox2: c,
        T0: n,
        T1: r,
        T2: i,
        T3: o,
        T01: s,
        T23: a
    };
}
const Yr = Zr(zr, (e)=>Fr(e, 3) << 24 | e << 16 | e << 8 | Fr(e, 2)), Jr = Zr(qr, (e)=>Fr(e, 11) << 24 | Fr(e, 13) << 16 | Fr(e, 9) << 8 | Fr(e, 14)), Xr = (()=>{
    const e = new Uint8Array(16);
    for(let t = 0, n = 1; t < 16; t++, n = Hr(n))e[t] = n;
    return e;
})();
function Qr(e) {
    (0, Dr.bytes)(e);
    const t = e.length;
    if (![
        16,
        24,
        32
    ].includes(t)) throw new Error(`aes: wrong key size: should be 16, 24 or 32, got: ${t}`);
    const { sbox2: n } = Yr, r = [];
    (0, Br.isAligned32)(e) || r.push(e = (0, Br.copyBytes)(e));
    const i = (0, Br.u32)(e), o = i.length, s = (e)=>ni(n, e, e, e, e), a = new Uint32Array(t + 28);
    a.set(i);
    for(let e = o; e < a.length; e++){
        let t = a[e - 1];
        e % o == 0 ? t = s(Vr(t)) ^ Xr[e / o - 1] : o > 6 && e % o == 4 && (t = s(t)), a[e] = a[e - o] ^ t;
    }
    return (0, Br.clean)(...r), a;
}
function ei(e) {
    const t = Qr(e), n = t.slice(), r = t.length, { sbox2: i } = Yr, { T0: o, T1: s, T2: a, T3: c } = Jr;
    for(let e = 0; e < r; e += 4)for(let i = 0; i < 4; i++)n[e + i] = t[r - e - 4 + i];
    (0, Br.clean)(t);
    for(let e = 4; e < r - 4; e++){
        const t = n[e], r = ni(i, t, t, t, t);
        n[e] = o[255 & r] ^ s[r >>> 8 & 255] ^ a[r >>> 16 & 255] ^ c[r >>> 24];
    }
    return n;
}
function ti(e, t, n, r, i, o) {
    return e[n << 8 & 65280 | r >>> 8 & 255] ^ t[i >>> 8 & 65280 | o >>> 24 & 255];
}
function ni(e, t, n, r, i) {
    return e[255 & t | 65280 & n] | e[r >>> 16 & 255 | i >>> 16 & 65280] << 16;
}
function ri(e, t, n, r, i) {
    const { sbox2: o, T01: s, T23: a } = Yr;
    let c = 0;
    t ^= e[c++], n ^= e[c++], r ^= e[c++], i ^= e[c++];
    const l = e.length / 4 - 2;
    for(let o = 0; o < l; o++){
        const o = e[c++] ^ ti(s, a, t, n, r, i), l = e[c++] ^ ti(s, a, n, r, i, t), d = e[c++] ^ ti(s, a, r, i, t, n), u = e[c++] ^ ti(s, a, i, t, n, r);
        t = o, n = l, r = d, i = u;
    }
    return {
        s0: e[c++] ^ ni(o, t, n, r, i),
        s1: e[c++] ^ ni(o, n, r, i, t),
        s2: e[c++] ^ ni(o, r, i, t, n),
        s3: e[c++] ^ ni(o, i, t, n, r)
    };
}
function ii(e, t, n, r, i) {
    const { sbox2: o, T01: s, T23: a } = Jr;
    let c = 0;
    t ^= e[c++], n ^= e[c++], r ^= e[c++], i ^= e[c++];
    const l = e.length / 4 - 2;
    for(let o = 0; o < l; o++){
        const o = e[c++] ^ ti(s, a, t, i, r, n), l = e[c++] ^ ti(s, a, n, t, i, r), d = e[c++] ^ ti(s, a, r, n, t, i), u = e[c++] ^ ti(s, a, i, r, n, t);
        t = o, n = l, r = d, i = u;
    }
    return {
        s0: e[c++] ^ ni(o, t, i, r, n),
        s1: e[c++] ^ ni(o, n, t, i, r),
        s2: e[c++] ^ ni(o, r, n, t, i),
        s3: e[c++] ^ ni(o, i, r, n, t)
    };
}
function oi(e, t) {
    if (void 0 === t) return new Uint8Array(e);
    if ((0, Dr.bytes)(t), t.length < e) throw new Error(`aes: wrong destination length, expected at least ${e}, got: ${t.length}`);
    if (!(0, Br.isAligned32)(t)) throw new Error("unaligned dst");
    return t;
}
function si(e, t, n, r) {
    (0, Dr.bytes)(t, Kr), (0, Dr.bytes)(n);
    const i = n.length;
    r = oi(i, r);
    const o = t, s = (0, Br.u32)(o);
    let { s0: a, s1: c, s2: l, s3: d } = ri(e, s[0], s[1], s[2], s[3]);
    const u = (0, Br.u32)(n), h = (0, Br.u32)(r);
    for(let t = 0; t + 4 <= u.length; t += 4){
        h[t + 0] = u[t + 0] ^ a, h[t + 1] = u[t + 1] ^ c, h[t + 2] = u[t + 2] ^ l, h[t + 3] = u[t + 3] ^ d;
        let n = 1;
        for(let e = o.length - 1; e >= 0; e--)n = n + (255 & o[e]) | 0, o[e] = 255 & n, n >>>= 8;
        ({ s0: a, s1: c, s2: l, s3: d } = ri(e, s[0], s[1], s[2], s[3]));
    }
    const f = Kr * Math.floor(u.length / 4);
    if (f < i) {
        const e = new Uint32Array([
            a,
            c,
            l,
            d
        ]), t = (0, Br.u8)(e);
        for(let e = f, o = 0; e < i; e++, o++)r[e] = n[e] ^ t[o];
        (0, Br.clean)(e);
    }
    return r;
}
function ai(e, t, n, r, i) {
    (0, Dr.bytes)(n, Kr), (0, Dr.bytes)(r), i = oi(r.length, i);
    const o = n, s = (0, Br.u32)(o), a = (0, Br.createView)(o), c = (0, Br.u32)(r), l = (0, Br.u32)(i), d = t ? 0 : 12, u = r.length;
    let h = a.getUint32(d, t), { s0: f, s1: p, s2: g, s3: m } = ri(e, s[0], s[1], s[2], s[3]);
    for(let n = 0; n + 4 <= c.length; n += 4)l[n + 0] = c[n + 0] ^ f, l[n + 1] = c[n + 1] ^ p, l[n + 2] = c[n + 2] ^ g, l[n + 3] = c[n + 3] ^ m, h = h + 1 >>> 0, a.setUint32(d, h, t), { s0: f, s1: p, s2: g, s3: m } = ri(e, s[0], s[1], s[2], s[3]);
    const y = Kr * Math.floor(c.length / 4);
    if (y < u) {
        const e = new Uint32Array([
            f,
            p,
            g,
            m
        ]), t = (0, Br.u8)(e);
        for(let e = y, n = 0; e < u; e++, n++)i[e] = r[e] ^ t[n];
        (0, Br.clean)(e);
    }
    return i;
}
function ci(e) {
    if ((0, Dr.bytes)(e), e.length % Kr != 0) throw new Error("aes/(cbc-ecb).decrypt ciphertext should consist of blocks with size 16");
}
function li(e, t, n) {
    (0, Dr.bytes)(e);
    let r = e.length;
    const i = r % Kr;
    if (!t && 0 !== i) throw new Error("aec/(cbc-ecb): unpadded plaintext with disabled padding");
    (0, Br.isAligned32)(e) || (e = (0, Br.copyBytes)(e));
    const o = (0, Br.u32)(e);
    if (t) {
        let e = Kr - i;
        e || (e = Kr), r += e;
    }
    const s = oi(r, n);
    return {
        b: o,
        o: (0, Br.u32)(s),
        out: s
    };
}
function di(e, t) {
    if (!t) return e;
    const n = e.length;
    if (!n) throw new Error("aes/pcks5: empty ciphertext not allowed");
    const r = e[n - 1];
    if (r <= 0 || r > 16) throw new Error("aes/pcks5: wrong padding");
    const i = e.subarray(0, -r);
    for(let t = 0; t < r; t++)if (e[n - t - 1] !== r) throw new Error("aes/pcks5: wrong padding");
    return i;
}
function ui(e) {
    const t = new Uint8Array(16), n = (0, Br.u32)(t);
    t.set(e);
    const r = Kr - e.length;
    for(let e = Kr - r; e < Kr; e++)t[e] = r;
    return n;
}
function hi(e, t, n, r, i) {
    const o = null == i ? 0 : i.length, s = e.create(n, r.length + o);
    i && s.update(i), s.update(r);
    const a = new Uint8Array(16), c = (0, Br.createView)(a);
    i && (0, Br.setBigUint64)(c, 0, BigInt(8 * o), t), (0, Br.setBigUint64)(c, 8, BigInt(8 * r.length), t), s.update(a);
    const l = s.digest();
    return (0, Br.clean)(a), l;
}
_r.ctr = (0, Br.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function(e, t) {
    function n(n, r) {
        if ((0, Dr.bytes)(n), void 0 !== r && ((0, Dr.bytes)(r), !(0, Br.isAligned32)(r))) throw new Error("unaligned destination");
        const i = Qr(e), o = (0, Br.copyBytes)(t), s = [
            i,
            o
        ];
        (0, Br.isAligned32)(n) || s.push(n = (0, Br.copyBytes)(n));
        const a = si(i, o, n, r);
        return (0, Br.clean)(...s), a;
    }
    return (0, Dr.bytes)(e), (0, Dr.bytes)(t, Kr), {
        encrypt: (e, t)=>n(e, t),
        decrypt: (e, t)=>n(e, t)
    };
}), _r.ecb = (0, Br.wrapCipher)({
    blockSize: 16
}, function(e, t = {}) {
    (0, Dr.bytes)(e);
    const n = !t.disablePadding;
    return {
        encrypt (t, r) {
            const { b: i, o: o, out: s } = li(t, n, r), a = Qr(e);
            let c = 0;
            for(; c + 4 <= i.length;){
                const { s0: e, s1: t, s2: n, s3: r } = ri(a, i[c + 0], i[c + 1], i[c + 2], i[c + 3]);
                o[c++] = e, o[c++] = t, o[c++] = n, o[c++] = r;
            }
            if (n) {
                const e = ui(t.subarray(4 * c)), { s0: n, s1: r, s2: i, s3: s } = ri(a, e[0], e[1], e[2], e[3]);
                o[c++] = n, o[c++] = r, o[c++] = i, o[c++] = s;
            }
            return (0, Br.clean)(a), s;
        },
        decrypt (t, r) {
            ci(t);
            const i = ei(e), o = oi(t.length, r), s = [
                i
            ];
            (0, Br.isAligned32)(t) || s.push(t = (0, Br.copyBytes)(t));
            const a = (0, Br.u32)(t), c = (0, Br.u32)(o);
            for(let e = 0; e + 4 <= a.length;){
                const { s0: t, s1: n, s2: r, s3: o } = ii(i, a[e + 0], a[e + 1], a[e + 2], a[e + 3]);
                c[e++] = t, c[e++] = n, c[e++] = r, c[e++] = o;
            }
            return (0, Br.clean)(...s), di(o, n);
        }
    };
}), _r.cbc = (0, Br.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function(e, t, n = {}) {
    (0, Dr.bytes)(e), (0, Dr.bytes)(t, 16);
    const r = !n.disablePadding;
    return {
        encrypt (n, i) {
            const o = Qr(e), { b: s, o: a, out: c } = li(n, r, i);
            let l = t;
            const d = [
                o
            ];
            (0, Br.isAligned32)(l) || d.push(l = (0, Br.copyBytes)(l));
            const u = (0, Br.u32)(l);
            let h = u[0], f = u[1], p = u[2], g = u[3], m = 0;
            for(; m + 4 <= s.length;)h ^= s[m + 0], f ^= s[m + 1], p ^= s[m + 2], g ^= s[m + 3], ({ s0: h, s1: f, s2: p, s3: g } = ri(o, h, f, p, g)), a[m++] = h, a[m++] = f, a[m++] = p, a[m++] = g;
            if (r) {
                const e = ui(n.subarray(4 * m));
                h ^= e[0], f ^= e[1], p ^= e[2], g ^= e[3], ({ s0: h, s1: f, s2: p, s3: g } = ri(o, h, f, p, g)), a[m++] = h, a[m++] = f, a[m++] = p, a[m++] = g;
            }
            return (0, Br.clean)(...d), c;
        },
        decrypt (n, i) {
            ci(n);
            const o = ei(e);
            let s = t;
            const a = [
                o
            ];
            (0, Br.isAligned32)(s) || a.push(s = (0, Br.copyBytes)(s));
            const c = (0, Br.u32)(s), l = oi(n.length, i);
            (0, Br.isAligned32)(n) || a.push(n = (0, Br.copyBytes)(n));
            const d = (0, Br.u32)(n), u = (0, Br.u32)(l);
            let h = c[0], f = c[1], p = c[2], g = c[3];
            for(let e = 0; e + 4 <= d.length;){
                const t = h, n = f, r = p, i = g;
                h = d[e + 0], f = d[e + 1], p = d[e + 2], g = d[e + 3];
                const { s0: s, s1: a, s2: c, s3: l } = ii(o, h, f, p, g);
                u[e++] = s ^ t, u[e++] = a ^ n, u[e++] = c ^ r, u[e++] = l ^ i;
            }
            return (0, Br.clean)(...a), di(l, r);
        }
    };
}), _r.cfb = (0, Br.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function(e, t) {
    function n(n, r, i) {
        (0, Dr.bytes)(n);
        const o = n.length;
        i = oi(o, i);
        const s = Qr(e);
        let a = t;
        const c = [
            s
        ];
        (0, Br.isAligned32)(a) || c.push(a = (0, Br.copyBytes)(a)), (0, Br.isAligned32)(n) || c.push(n = (0, Br.copyBytes)(n));
        const l = (0, Br.u32)(n), d = (0, Br.u32)(i), u = r ? d : l, h = (0, Br.u32)(a);
        let f = h[0], p = h[1], g = h[2], m = h[3];
        for(let e = 0; e + 4 <= l.length;){
            const { s0: t, s1: n, s2: r, s3: i } = ri(s, f, p, g, m);
            d[e + 0] = l[e + 0] ^ t, d[e + 1] = l[e + 1] ^ n, d[e + 2] = l[e + 2] ^ r, d[e + 3] = l[e + 3] ^ i, f = u[e++], p = u[e++], g = u[e++], m = u[e++];
        }
        const y = Kr * Math.floor(l.length / 4);
        if (y < o) {
            ({ s0: f, s1: p, s2: g, s3: m } = ri(s, f, p, g, m));
            const e = (0, Br.u8)(new Uint32Array([
                f,
                p,
                g,
                m
            ]));
            for(let t = y, r = 0; t < o; t++, r++)i[t] = n[t] ^ e[r];
            (0, Br.clean)(e);
        }
        return (0, Br.clean)(...c), i;
    }
    return (0, Dr.bytes)(e), (0, Dr.bytes)(t, 16), {
        encrypt: (e, t)=>n(e, !0, t),
        decrypt: (e, t)=>n(e, !1, t)
    };
}), _r.gcm = (0, Br.wrapCipher)({
    blockSize: 16,
    nonceLength: 12,
    tagLength: 16
}, function(e, t, n) {
    if ((0, Dr.bytes)(e), (0, Dr.bytes)(t), void 0 !== n && (0, Dr.bytes)(n), t.length < 8) throw new Error("aes/gcm: invalid nonce length");
    const r = 16;
    function i(e, t, r) {
        const i = hi($r.ghash, !1, e, r, n);
        for(let e = 0; e < t.length; e++)i[e] ^= t[e];
        return i;
    }
    function o() {
        const n = Qr(e), r = jr.slice(), i = jr.slice();
        if (ai(n, !1, i, i, r), 12 === t.length) i.set(t);
        else {
            const e = jr.slice(), n = (0, Br.createView)(e);
            (0, Br.setBigUint64)(n, 8, BigInt(8 * t.length), !1);
            const o = $r.ghash.create(r).update(t).update(e);
            o.digestInto(i), o.destroy();
        }
        return {
            xk: n,
            authKey: r,
            counter: i,
            tagMask: ai(n, !1, i, jr)
        };
    }
    return {
        encrypt (e) {
            (0, Dr.bytes)(e);
            const { xk: t, authKey: n, counter: s, tagMask: a } = o(), c = new Uint8Array(e.length + r), l = [
                t,
                n,
                s,
                a
            ];
            (0, Br.isAligned32)(e) || l.push(e = (0, Br.copyBytes)(e)), ai(t, !1, s, e, c);
            const d = i(n, a, c.subarray(0, c.length - r));
            return l.push(d), c.set(d, e.length), (0, Br.clean)(...l), c;
        },
        decrypt (e) {
            if ((0, Dr.bytes)(e), e.length < r) throw new Error("aes/gcm: ciphertext less than tagLen (16)");
            const { xk: t, authKey: n, counter: s, tagMask: a } = o(), c = [
                t,
                n,
                a,
                s
            ];
            (0, Br.isAligned32)(e) || c.push(e = (0, Br.copyBytes)(e));
            const l = e.subarray(0, -16), d = e.subarray(-16), u = i(n, a, l);
            if (c.push(u), !(0, Br.equalBytes)(u, d)) throw new Error("aes/gcm: invalid ghash tag");
            const h = ai(t, !1, s, l);
            return (0, Br.clean)(...c), h;
        }
    };
});
const fi = (e, t, n)=>(r)=>{
        if (!Number.isSafeInteger(r) || t > r || r > n) throw new Error(`${e}: invalid value=${r}, must be [${t}..${n}]`);
    };
function pi(e) {
    return null != e && "object" == typeof e && (e instanceof Uint32Array || "Uint32Array" === e.constructor.name);
}
function gi(e, t) {
    if ((0, Dr.bytes)(t, 16), !pi(e)) throw new Error("_encryptBlock accepts result of expandKeyLE");
    const n = (0, Br.u32)(t);
    let { s0: r, s1: i, s2: o, s3: s } = ri(e, n[0], n[1], n[2], n[3]);
    return n[0] = r, n[1] = i, n[2] = o, n[3] = s, t;
}
function mi(e, t) {
    if ((0, Dr.bytes)(t, 16), !pi(e)) throw new Error("_decryptBlock accepts result of expandKeyLE");
    const n = (0, Br.u32)(t);
    let { s0: r, s1: i, s2: o, s3: s } = ii(e, n[0], n[1], n[2], n[3]);
    return n[0] = r, n[1] = i, n[2] = o, n[3] = s, t;
}
_r.siv = (0, Br.wrapCipher)({
    blockSize: 16,
    nonceLength: 12,
    tagLength: 16
}, function(e, t, n) {
    const r = fi("AAD", 0, 2 ** 36), i = fi("plaintext", 0, 2 ** 36), o = fi("nonce", 12, 12), s = fi("ciphertext", 16, 2 ** 36 + 16);
    function a() {
        const n = Qr(e), r = new Uint8Array(e.length), i = new Uint8Array(16), o = [
            n,
            r
        ];
        let s = t;
        (0, Br.isAligned32)(s) || o.push(s = (0, Br.copyBytes)(s));
        const a = (0, Br.u32)(s);
        let c = 0, l = a[0], d = a[1], u = a[2], h = 0;
        for (const e of [
            i,
            r
        ].map(Br.u32)){
            const t = (0, Br.u32)(e);
            for(let e = 0; e < t.length; e += 2){
                const { s0: r, s1: i } = ri(n, c, l, d, u);
                t[e + 0] = r, t[e + 1] = i, c = ++h;
            }
        }
        const f = {
            authKey: i,
            encKey: Qr(r)
        };
        return (0, Br.clean)(...o), f;
    }
    function c(e, r, i) {
        const o = hi($r.polyval, !0, r, i, n);
        for(let e = 0; e < 12; e++)o[e] ^= t[e];
        o[15] &= 127;
        const s = (0, Br.u32)(o);
        let a = s[0], c = s[1], l = s[2], d = s[3];
        return { s0: a, s1: c, s2: l, s3: d } = ri(e, a, c, l, d), s[0] = a, s[1] = c, s[2] = l, s[3] = d, o;
    }
    function l(e, t, n) {
        let r = (0, Br.copyBytes)(t);
        r[15] |= 128;
        const i = ai(e, !0, r, n);
        return (0, Br.clean)(r), i;
    }
    return (0, Dr.bytes)(e, 16, 24, 32), (0, Dr.bytes)(t), o(t.length), void 0 !== n && ((0, Dr.bytes)(n), r(n.length)), {
        encrypt (e) {
            (0, Dr.bytes)(e), i(e.length);
            const { encKey: t, authKey: n } = a(), r = c(t, n, e), o = [
                t,
                n,
                r
            ];
            (0, Br.isAligned32)(e) || o.push(e = (0, Br.copyBytes)(e));
            const s = new Uint8Array(e.length + 16);
            return s.set(r, e.length), s.set(l(t, r, e)), (0, Br.clean)(...o), s;
        },
        decrypt (e) {
            (0, Dr.bytes)(e), s(e.length);
            const t = e.subarray(-16), { encKey: n, authKey: r } = a(), i = [
                n,
                r
            ];
            (0, Br.isAligned32)(e) || i.push(e = (0, Br.copyBytes)(e));
            const o = l(n, t, e.subarray(0, -16)), d = c(n, r, o);
            if (i.push(d), !(0, Br.equalBytes)(t, d)) throw (0, Br.clean)(...i), new Error("invalid polyval tag");
            return (0, Br.clean)(...i), o;
        }
    };
});
const yi = {
    encrypt (e, t) {
        if (t.length >= 2 ** 32) throw new Error("plaintext should be less than 4gb");
        const n = Qr(e);
        if (16 === t.length) gi(n, t);
        else {
            const e = (0, Br.u32)(t);
            let r = e[0], i = e[1];
            for(let t = 0, o = 1; t < 6; t++)for(let t = 2; t < e.length; t += 2, o++){
                const { s0: s, s1: a, s2: c, s3: l } = ri(n, r, i, e[t], e[t + 1]);
                r = s, i = a ^ Gr(o), e[t] = c, e[t + 1] = l;
            }
            e[0] = r, e[1] = i;
        }
        n.fill(0);
    },
    decrypt (e, t) {
        if (t.length - 8 >= 2 ** 32) throw new Error("ciphertext should be less than 4gb");
        const n = ei(e), r = t.length / 8 - 1;
        if (1 === r) mi(n, t);
        else {
            const e = (0, Br.u32)(t);
            let i = e[0], o = e[1];
            for(let t = 0, s = 6 * r; t < 6; t++)for(let t = 2 * r; t >= 1; t -= 2, s--){
                o ^= Gr(s);
                const { s0: r, s1: a, s2: c, s3: l } = ii(n, i, o, e[t], e[t + 1]);
                i = r, o = a, e[t] = c, e[t + 1] = l;
            }
            e[0] = i, e[1] = o;
        }
        n.fill(0);
    }
}, vi = new Uint8Array(8).fill(166);
_r.aeskw = (0, Br.wrapCipher)({
    blockSize: 8
}, (e)=>({
        encrypt (t) {
            if ((0, Dr.bytes)(t), !t.length || t.length % 8 != 0) throw new Error("invalid plaintext length");
            if (8 === t.length) throw new Error("8-byte keys not allowed in AESKW, use AESKWP instead");
            const n = (0, Br.concatBytes)(vi, t);
            return yi.encrypt(e, n), n;
        },
        decrypt (t) {
            if ((0, Dr.bytes)(t), t.length % 8 != 0 || t.length < 24) throw new Error("invalid ciphertext length");
            const n = (0, Br.copyBytes)(t);
            if (yi.decrypt(e, n), !(0, Br.equalBytes)(n.subarray(0, 8), vi)) throw new Error("integrity check failed");
            return n.subarray(0, 8).fill(0), n.subarray(8);
        }
    }));
const bi = 2790873510;
_r.aeskwp = (0, Br.wrapCipher)({
    blockSize: 8
}, (e)=>({
        encrypt (t) {
            if ((0, Dr.bytes)(t), !t.length) throw new Error("invalid plaintext length");
            const n = 8 * Math.ceil(t.length / 8), r = new Uint8Array(8 + n);
            r.set(t, 8);
            const i = (0, Br.u32)(r);
            return i[0] = bi, i[1] = Gr(t.length), yi.encrypt(e, r), r;
        },
        decrypt (t) {
            if ((0, Dr.bytes)(t), t.length < 16) throw new Error("invalid ciphertext length");
            const n = (0, Br.copyBytes)(t), r = (0, Br.u32)(n);
            yi.decrypt(e, n);
            const i = Gr(r[1]) >>> 0, o = 8 * Math.ceil(i / 8);
            if (r[0] !== bi || n.length - 8 !== o) throw new Error("integrity check failed");
            for(let e = i; e < o; e++)if (0 !== n[8 + e]) throw new Error("integrity check failed");
            return n.subarray(0, 8).fill(0), n.subarray(8, 8 + i);
        }
    })), _r.unsafe = {
    expandKeyLE: Qr,
    expandKeyDecLE: ei,
    encrypt: ri,
    decrypt: ii,
    encryptBlock: gi,
    decryptBlock: mi,
    ctrCounter: si,
    ctr32: ai
}, Object.defineProperty(Sr, "__esModule", {
    value: !0
}), Sr.aes256cbc = Sr.aes256gcm = void 0;
var wi = _r;
Sr.aes256gcm = function(e, t, n) {
    return (0, wi.gcm)(e, t, n);
};
Sr.aes256cbc = function(e, t, n) {
    return (0, wi.cbc)(e, t);
};
var Ei = {}, Ci = {}, Si = {};
Object.defineProperty(Si, "__esModule", {
    value: !0
}), Si.sigma = void 0, Si.rotl = function(e, t) {
    return e << t | e >>> 32 - t;
}, Si.createCipher = function(e, t) {
    const { allowShortKeys: n, extendNonceFn: r, counterLength: i, counterRight: o, rounds: s } = (0, ki.checkOpts)({
        allowShortKeys: !1,
        counterLength: 8,
        counterRight: !1,
        rounds: 20
    }, t);
    if ("function" != typeof e) throw new Error("core must be a function");
    return (0, _i.number)(i), (0, _i.number)(s), (0, _i.bool)(o), (0, _i.bool)(n), (t, a, c, l, d = 0)=>{
        (0, _i.bytes)(t), (0, _i.bytes)(a), (0, _i.bytes)(c);
        const u = c.length;
        if (void 0 === l && (l = new Uint8Array(u)), (0, _i.bytes)(l), (0, _i.number)(d), d < 0 || d >= Ti) throw new Error("arx: counter overflow");
        if (l.length < u) throw new Error(`arx: output (${l.length}) is shorter than data (${u})`);
        const h = [];
        let f, p, g = t.length;
        if (32 === g) h.push(f = (0, ki.copyBytes)(t)), p = Ri;
        else {
            if (16 !== g || !n) throw new Error(`arx: invalid 32-byte key, got length=${g}`);
            f = new Uint8Array(32), f.set(t), f.set(t, 16), p = Ii, h.push(f);
        }
        Pi(a) || h.push(a = (0, ki.copyBytes)(a));
        const m = (0, ki.u32)(f);
        if (r) {
            if (24 !== a.length) throw new Error("arx: extended nonce must be 24 bytes");
            r(p, m, (0, ki.u32)(a.subarray(0, 16)), m), a = a.subarray(16);
        }
        const y = 16 - i;
        if (y !== a.length) throw new Error(`arx: nonce must be ${y} or 16 bytes`);
        if (12 !== y) {
            const e = new Uint8Array(12);
            e.set(a, o ? 0 : 12 - a.length), a = e, h.push(a);
        }
        const v = (0, ki.u32)(a);
        return function(e, t, n, r, i, o, s, a) {
            const c = i.length, l = new Uint8Array(Li), d = (0, ki.u32)(l), u = Pi(i) && Pi(o), h = u ? (0, ki.u32)(i) : Ni, f = u ? (0, ki.u32)(o) : Ni;
            for(let p = 0; p < c; s++){
                if (e(t, n, r, d, s, a), s >= Ti) throw new Error("arx: counter overflow");
                const g = Math.min(Li, c - p);
                if (u && g === Li) {
                    const e = p / 4;
                    if (p % 4 != 0) throw new Error("arx: invalid block position");
                    for(let t, n = 0; n < Oi; n++)t = e + n, f[t] = h[t] ^ d[n];
                    p += Li;
                } else {
                    for(let e, t = 0; t < g; t++)e = p + t, o[e] = i[e] ^ l[t];
                    p += g;
                }
            }
        }(e, p, m, v, c, l, d, s), (0, ki.clean)(...h), l;
    };
};
const _i = pe, ki = fe, xi = (e)=>Uint8Array.from(e.split("").map((e)=>e.charCodeAt(0))), Mi = xi("expand 16-byte k"), Ai = xi("expand 32-byte k"), Ii = (0, ki.u32)(Mi), Ri = (0, ki.u32)(Ai);
function Pi(e) {
    return e.byteOffset % 4 == 0;
}
Si.sigma = Ri.slice();
const Li = 64, Oi = 16, Ti = 2 ** 32 - 1, Ni = new Uint32Array;
var Di = {};
Object.defineProperty(Di, "__esModule", {
    value: !0
}), Di.poly1305 = void 0, Di.wrapConstructorWithKey = Ui;
const $i = pe, Bi = fe, Ki = (e, t)=>255 & e[t++] | (255 & e[t++]) << 8;
class ji {
    constructor(e){
        this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, e = (0, Bi.toBytes)(e), (0, $i.bytes)(e, 32);
        const t = Ki(e, 0), n = Ki(e, 2), r = Ki(e, 4), i = Ki(e, 6), o = Ki(e, 8), s = Ki(e, 10), a = Ki(e, 12), c = Ki(e, 14);
        this.r[0] = 8191 & t, this.r[1] = 8191 & (t >>> 13 | n << 3), this.r[2] = 7939 & (n >>> 10 | r << 6), this.r[3] = 8191 & (r >>> 7 | i << 9), this.r[4] = 255 & (i >>> 4 | o << 12), this.r[5] = o >>> 1 & 8190, this.r[6] = 8191 & (o >>> 14 | s << 2), this.r[7] = 8065 & (s >>> 11 | a << 5), this.r[8] = 8191 & (a >>> 8 | c << 8), this.r[9] = c >>> 5 & 127;
        for(let t = 0; t < 8; t++)this.pad[t] = Ki(e, 16 + 2 * t);
    }
    process(e, t, n = !1) {
        const r = n ? 0 : 2048, { h: i, r: o } = this, s = o[0], a = o[1], c = o[2], l = o[3], d = o[4], u = o[5], h = o[6], f = o[7], p = o[8], g = o[9], m = Ki(e, t + 0), y = Ki(e, t + 2), v = Ki(e, t + 4), b = Ki(e, t + 6), w = Ki(e, t + 8), E = Ki(e, t + 10), C = Ki(e, t + 12), S = Ki(e, t + 14);
        let _ = i[0] + (8191 & m), k = i[1] + (8191 & (m >>> 13 | y << 3)), x = i[2] + (8191 & (y >>> 10 | v << 6)), M = i[3] + (8191 & (v >>> 7 | b << 9)), A = i[4] + (8191 & (b >>> 4 | w << 12)), I = i[5] + (w >>> 1 & 8191), R = i[6] + (8191 & (w >>> 14 | E << 2)), P = i[7] + (8191 & (E >>> 11 | C << 5)), L = i[8] + (8191 & (C >>> 8 | S << 8)), O = i[9] + (S >>> 5 | r), T = 0, N = T + _ * s + k * (5 * g) + x * (5 * p) + M * (5 * f) + A * (5 * h);
        T = N >>> 13, N &= 8191, N += I * (5 * u) + R * (5 * d) + P * (5 * l) + L * (5 * c) + O * (5 * a), T += N >>> 13, N &= 8191;
        let D = T + _ * a + k * s + x * (5 * g) + M * (5 * p) + A * (5 * f);
        T = D >>> 13, D &= 8191, D += I * (5 * h) + R * (5 * u) + P * (5 * d) + L * (5 * l) + O * (5 * c), T += D >>> 13, D &= 8191;
        let $ = T + _ * c + k * a + x * s + M * (5 * g) + A * (5 * p);
        T = $ >>> 13, $ &= 8191, $ += I * (5 * f) + R * (5 * h) + P * (5 * u) + L * (5 * d) + O * (5 * l), T += $ >>> 13, $ &= 8191;
        let B = T + _ * l + k * c + x * a + M * s + A * (5 * g);
        T = B >>> 13, B &= 8191, B += I * (5 * p) + R * (5 * f) + P * (5 * h) + L * (5 * u) + O * (5 * d), T += B >>> 13, B &= 8191;
        let K = T + _ * d + k * l + x * c + M * a + A * s;
        T = K >>> 13, K &= 8191, K += I * (5 * g) + R * (5 * p) + P * (5 * f) + L * (5 * h) + O * (5 * u), T += K >>> 13, K &= 8191;
        let j = T + _ * u + k * d + x * l + M * c + A * a;
        T = j >>> 13, j &= 8191, j += I * s + R * (5 * g) + P * (5 * p) + L * (5 * f) + O * (5 * h), T += j >>> 13, j &= 8191;
        let U = T + _ * h + k * u + x * d + M * l + A * c;
        T = U >>> 13, U &= 8191, U += I * a + R * s + P * (5 * g) + L * (5 * p) + O * (5 * f), T += U >>> 13, U &= 8191;
        let H = T + _ * f + k * h + x * u + M * d + A * l;
        T = H >>> 13, H &= 8191, H += I * c + R * a + P * s + L * (5 * g) + O * (5 * p), T += H >>> 13, H &= 8191;
        let F = T + _ * p + k * f + x * h + M * u + A * d;
        T = F >>> 13, F &= 8191, F += I * l + R * c + P * a + L * s + O * (5 * g), T += F >>> 13, F &= 8191;
        let z = T + _ * g + k * p + x * f + M * h + A * u;
        T = z >>> 13, z &= 8191, z += I * d + R * l + P * c + L * a + O * s, T += z >>> 13, z &= 8191, T = (T << 2) + T | 0, T = T + N | 0, N = 8191 & T, T >>>= 13, D += T, i[0] = N, i[1] = D, i[2] = $, i[3] = B, i[4] = K, i[5] = j, i[6] = U, i[7] = H, i[8] = F, i[9] = z;
    }
    finalize() {
        const { h: e, pad: t } = this, n = new Uint16Array(10);
        let r = e[1] >>> 13;
        e[1] &= 8191;
        for(let t = 2; t < 10; t++)e[t] += r, r = e[t] >>> 13, e[t] &= 8191;
        e[0] += 5 * r, r = e[0] >>> 13, e[0] &= 8191, e[1] += r, r = e[1] >>> 13, e[1] &= 8191, e[2] += r, n[0] = e[0] + 5, r = n[0] >>> 13, n[0] &= 8191;
        for(let t = 1; t < 10; t++)n[t] = e[t] + r, r = n[t] >>> 13, n[t] &= 8191;
        n[9] -= 8192;
        let i = (1 ^ r) - 1;
        for(let e = 0; e < 10; e++)n[e] &= i;
        i = ~i;
        for(let t = 0; t < 10; t++)e[t] = e[t] & i | n[t];
        e[0] = 65535 & (e[0] | e[1] << 13), e[1] = 65535 & (e[1] >>> 3 | e[2] << 10), e[2] = 65535 & (e[2] >>> 6 | e[3] << 7), e[3] = 65535 & (e[3] >>> 9 | e[4] << 4), e[4] = 65535 & (e[4] >>> 12 | e[5] << 1 | e[6] << 14), e[5] = 65535 & (e[6] >>> 2 | e[7] << 11), e[6] = 65535 & (e[7] >>> 5 | e[8] << 8), e[7] = 65535 & (e[8] >>> 8 | e[9] << 5);
        let o = e[0] + t[0];
        e[0] = 65535 & o;
        for(let n = 1; n < 8; n++)o = (e[n] + t[n] | 0) + (o >>> 16) | 0, e[n] = 65535 & o;
        (0, Bi.clean)(n);
    }
    update(e) {
        (0, $i.exists)(this);
        const { buffer: t, blockLen: n } = this, r = (e = (0, Bi.toBytes)(e)).length;
        for(let i = 0; i < r;){
            const o = Math.min(n - this.pos, r - i);
            if (o !== n) t.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === n && (this.process(t, 0, !1), this.pos = 0);
            else for(; n <= r - i; i += n)this.process(e, i);
        }
        return this;
    }
    destroy() {
        (0, Bi.clean)(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
        (0, $i.exists)(this), (0, $i.output)(e, this), this.finished = !0;
        const { buffer: t, h: n } = this;
        let { pos: r } = this;
        if (r) {
            for(t[r++] = 1; r < 16; r++)t[r] = 0;
            this.process(t, 0, !0);
        }
        this.finalize();
        let i = 0;
        for(let t = 0; t < 8; t++)e[i++] = n[t] >>> 0, e[i++] = n[t] >>> 8;
        return e;
    }
    digest() {
        const { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        const n = e.slice(0, t);
        return this.destroy(), n;
    }
}
function Ui(e) {
    const t = (t, n)=>e(n).update((0, Bi.toBytes)(t)).digest(), n = e(new Uint8Array(32));
    return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = (t)=>e(t), t;
}
Di.poly1305 = Ui((e)=>new ji(e)), function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.xchacha20poly1305 = e.chacha20poly1305 = e._poly1305_aead = e.chacha12 = e.chacha8 = e.xchacha20 = e.chacha20 = e.chacha20orig = void 0, e.hchacha = s;
    const t = Si, n = pe, r = Di, i = fe;
    function o(e, n, r, i, o1, s = 20) {
        let a = e[0], c = e[1], l = e[2], d = e[3], u = n[0], h = n[1], f = n[2], p = n[3], g = n[4], m = n[5], y = n[6], v = n[7], b = o1, w = r[0], E = r[1], C = r[2], S = a, _ = c, k = l, x = d, M = u, A = h, I = f, R = p, P = g, L = m, O = y, T = v, N = b, D = w, $ = E, B = C;
        for(let e = 0; e < s; e += 2)S = S + M | 0, N = (0, t.rotl)(N ^ S, 16), P = P + N | 0, M = (0, t.rotl)(M ^ P, 12), S = S + M | 0, N = (0, t.rotl)(N ^ S, 8), P = P + N | 0, M = (0, t.rotl)(M ^ P, 7), _ = _ + A | 0, D = (0, t.rotl)(D ^ _, 16), L = L + D | 0, A = (0, t.rotl)(A ^ L, 12), _ = _ + A | 0, D = (0, t.rotl)(D ^ _, 8), L = L + D | 0, A = (0, t.rotl)(A ^ L, 7), k = k + I | 0, $ = (0, t.rotl)($ ^ k, 16), O = O + $ | 0, I = (0, t.rotl)(I ^ O, 12), k = k + I | 0, $ = (0, t.rotl)($ ^ k, 8), O = O + $ | 0, I = (0, t.rotl)(I ^ O, 7), x = x + R | 0, B = (0, t.rotl)(B ^ x, 16), T = T + B | 0, R = (0, t.rotl)(R ^ T, 12), x = x + R | 0, B = (0, t.rotl)(B ^ x, 8), T = T + B | 0, R = (0, t.rotl)(R ^ T, 7), S = S + A | 0, B = (0, t.rotl)(B ^ S, 16), O = O + B | 0, A = (0, t.rotl)(A ^ O, 12), S = S + A | 0, B = (0, t.rotl)(B ^ S, 8), O = O + B | 0, A = (0, t.rotl)(A ^ O, 7), _ = _ + I | 0, N = (0, t.rotl)(N ^ _, 16), T = T + N | 0, I = (0, t.rotl)(I ^ T, 12), _ = _ + I | 0, N = (0, t.rotl)(N ^ _, 8), T = T + N | 0, I = (0, t.rotl)(I ^ T, 7), k = k + R | 0, D = (0, t.rotl)(D ^ k, 16), P = P + D | 0, R = (0, t.rotl)(R ^ P, 12), k = k + R | 0, D = (0, t.rotl)(D ^ k, 8), P = P + D | 0, R = (0, t.rotl)(R ^ P, 7), x = x + M | 0, $ = (0, t.rotl)($ ^ x, 16), L = L + $ | 0, M = (0, t.rotl)(M ^ L, 12), x = x + M | 0, $ = (0, t.rotl)($ ^ x, 8), L = L + $ | 0, M = (0, t.rotl)(M ^ L, 7);
        let K = 0;
        i[K++] = a + S | 0, i[K++] = c + _ | 0, i[K++] = l + k | 0, i[K++] = d + x | 0, i[K++] = u + M | 0, i[K++] = h + A | 0, i[K++] = f + I | 0, i[K++] = p + R | 0, i[K++] = g + P | 0, i[K++] = m + L | 0, i[K++] = y + O | 0, i[K++] = v + T | 0, i[K++] = b + N | 0, i[K++] = w + D | 0, i[K++] = E + $ | 0, i[K++] = C + B | 0;
    }
    function s(e, n, r, i) {
        let o = e[0], s = e[1], a = e[2], c = e[3], l = n[0], d = n[1], u = n[2], h = n[3], f = n[4], p = n[5], g = n[6], m = n[7], y = r[0], v = r[1], b = r[2], w = r[3];
        for(let e = 0; e < 20; e += 2)o = o + l | 0, y = (0, t.rotl)(y ^ o, 16), f = f + y | 0, l = (0, t.rotl)(l ^ f, 12), o = o + l | 0, y = (0, t.rotl)(y ^ o, 8), f = f + y | 0, l = (0, t.rotl)(l ^ f, 7), s = s + d | 0, v = (0, t.rotl)(v ^ s, 16), p = p + v | 0, d = (0, t.rotl)(d ^ p, 12), s = s + d | 0, v = (0, t.rotl)(v ^ s, 8), p = p + v | 0, d = (0, t.rotl)(d ^ p, 7), a = a + u | 0, b = (0, t.rotl)(b ^ a, 16), g = g + b | 0, u = (0, t.rotl)(u ^ g, 12), a = a + u | 0, b = (0, t.rotl)(b ^ a, 8), g = g + b | 0, u = (0, t.rotl)(u ^ g, 7), c = c + h | 0, w = (0, t.rotl)(w ^ c, 16), m = m + w | 0, h = (0, t.rotl)(h ^ m, 12), c = c + h | 0, w = (0, t.rotl)(w ^ c, 8), m = m + w | 0, h = (0, t.rotl)(h ^ m, 7), o = o + d | 0, w = (0, t.rotl)(w ^ o, 16), g = g + w | 0, d = (0, t.rotl)(d ^ g, 12), o = o + d | 0, w = (0, t.rotl)(w ^ o, 8), g = g + w | 0, d = (0, t.rotl)(d ^ g, 7), s = s + u | 0, y = (0, t.rotl)(y ^ s, 16), m = m + y | 0, u = (0, t.rotl)(u ^ m, 12), s = s + u | 0, y = (0, t.rotl)(y ^ s, 8), m = m + y | 0, u = (0, t.rotl)(u ^ m, 7), a = a + h | 0, v = (0, t.rotl)(v ^ a, 16), f = f + v | 0, h = (0, t.rotl)(h ^ f, 12), a = a + h | 0, v = (0, t.rotl)(v ^ a, 8), f = f + v | 0, h = (0, t.rotl)(h ^ f, 7), c = c + l | 0, b = (0, t.rotl)(b ^ c, 16), p = p + b | 0, l = (0, t.rotl)(l ^ p, 12), c = c + l | 0, b = (0, t.rotl)(b ^ c, 8), p = p + b | 0, l = (0, t.rotl)(l ^ p, 7);
        let E = 0;
        i[E++] = o, i[E++] = s, i[E++] = a, i[E++] = c, i[E++] = y, i[E++] = v, i[E++] = b, i[E++] = w;
    }
    e.chacha20orig = (0, t.createCipher)(o, {
        counterRight: !1,
        counterLength: 8,
        allowShortKeys: !0
    }), e.chacha20 = (0, t.createCipher)(o, {
        counterRight: !1,
        counterLength: 4,
        allowShortKeys: !1
    }), e.xchacha20 = (0, t.createCipher)(o, {
        counterRight: !1,
        counterLength: 8,
        extendNonceFn: s,
        allowShortKeys: !1
    }), e.chacha8 = (0, t.createCipher)(o, {
        counterRight: !1,
        counterLength: 4,
        rounds: 8
    }), e.chacha12 = (0, t.createCipher)(o, {
        counterRight: !1,
        counterLength: 4,
        rounds: 12
    });
    const a = new Uint8Array(16), c = (e, t)=>{
        e.update(t);
        const n = t.length % 16;
        n && e.update(a.subarray(n));
    }, l = new Uint8Array(32);
    function d(e, t, n, o, s) {
        const a = e(t, n, l), d = r.poly1305.create(a);
        s && c(d, s), c(d, o);
        const u = new Uint8Array(16), h = (0, i.createView)(u);
        (0, i.setBigUint64)(h, 0, BigInt(s ? s.length : 0), !0), (0, i.setBigUint64)(h, 8, BigInt(o.length), !0), d.update(u);
        const f = d.digest();
        return (0, i.clean)(a, u), f;
    }
    e._poly1305_aead = (e)=>(t, r, o)=>{
            const s = 16;
            return (0, n.bytes)(t, 32), (0, n.bytes)(r), {
                encrypt (a, c) {
                    const l = a.length, u = l + s;
                    c ? (0, n.bytes)(c, u) : c = new Uint8Array(u), e(t, r, a, c, 1);
                    const h = d(e, t, r, c.subarray(0, -16), o);
                    return c.set(h, l), (0, i.clean)(h), c;
                },
                decrypt (a, c) {
                    const l = a.length, u = l - s;
                    if (l < s) throw new Error("encrypted data must be at least 16 bytes");
                    c ? (0, n.bytes)(c, u) : c = new Uint8Array(u);
                    const h = a.subarray(0, -16), f = a.subarray(-16), p = d(e, t, r, h, o);
                    if (!(0, i.equalBytes)(f, p)) throw new Error("invalid tag");
                    return e(t, r, h, c, 1), (0, i.clean)(p), c;
                }
            };
        }, e.chacha20poly1305 = (0, i.wrapCipher)({
        blockSize: 64,
        nonceLength: 12,
        tagLength: 16
    }, (0, e._poly1305_aead)(e.chacha20)), e.xchacha20poly1305 = (0, i.wrapCipher)({
        blockSize: 64,
        nonceLength: 24,
        tagLength: 16
    }, (0, e._poly1305_aead)(e.xchacha20));
}(Ci), Object.defineProperty(Ei, "__esModule", {
    value: !0
}), Ei.xchacha20 = void 0;
var Hi, Fi, zi, qi = Ci;
Ei.xchacha20 = function(e, t, n) {
    return (0, qi.xchacha20poly1305)(e, t, n);
}, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.aesDecrypt = e.aesEncrypt = e.symDecrypt = e.symEncrypt = void 0;
    var t = fe, n = Ie, r = Sr, i = Ei, o = Se, s = _e;
    e.symEncrypt = function(e, t, n) {
        return a(c, e, t, n);
    };
    function a(e, t, n, a) {
        var c = (0, o.symmetricAlgorithm)();
        if ("aes-256-gcm" === c) return e(r.aes256gcm, t, n, (0, o.symmetricNonceLength)(), s.AEAD_TAG_LENGTH, a);
        if ("xchacha20" === c) return e(i.xchacha20, t, n, s.XCHACHA20_NONCE_LENGTH, s.AEAD_TAG_LENGTH, a);
        if ("aes-256-cbc" === c) return e(r.aes256cbc, t, n, 16, 0);
        throw new Error("Not implemented");
    }
    function c(e, r, i, o, s, a) {
        var c = (0, n.randomBytes)(o), l = e(r, c, a).encrypt(i);
        if (0 === s) return (0, t.concatBytes)(c, l);
        var d = l.length - s, u = l.subarray(0, d), h = l.subarray(d);
        return (0, t.concatBytes)(c, h, u);
    }
    function l(e, n, r, i, o, s) {
        var a = r.subarray(0, i), c = e(n, Uint8Array.from(a), s), l = r.subarray(i);
        if (0 === o) return c.decrypt(l);
        var d = l.subarray(0, o), u = l.subarray(o);
        return c.decrypt((0, t.concatBytes)(u, d));
    }
    e.symDecrypt = function(e, t, n) {
        return a(l, e, t, n);
    }, e.aesEncrypt = e.symEncrypt, e.aesDecrypt = e.symDecrypt;
}(Cr), Hi = Me, Fi = le && le.__createBinding || (Object.create ? function(e, t, n, r) {
    void 0 === r && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
        enumerable: !0,
        get: function() {
            return t[n];
        }
    }), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
    void 0 === r && (r = n), e[r] = t[n];
}), zi = le && le.__exportStar || function(e, t) {
    for(var n in e)"default" === n || Object.prototype.hasOwnProperty.call(t, n) || Fi(t, e, n);
}, Object.defineProperty(Hi, "__esModule", {
    value: !0
}), zi(Ae, Hi), zi(fr, Hi), zi(hr, Hi), zi(Cr, Hi);
var Vi = {};
Object.defineProperty(Vi, "__esModule", {
    value: !0
}), Vi.PublicKey = void 0;
var Wi = fe, Gi = Me, Zi = function() {
    function e(e) {
        this.data = (0, Gi.convertPublicKeyFormat)(e, !0);
    }
    return e.fromHex = function(t) {
        return new e((0, Gi.hexToPublicKey)(t));
    }, Object.defineProperty(e.prototype, "uncompressed", {
        get: function() {
            return S.from((0, Gi.convertPublicKeyFormat)(this.data, !1));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "compressed", {
        get: function() {
            return S.from(this.data);
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.toHex = function(e) {
        return void 0 === e && (e = !0), (0, Wi.bytesToHex)(e ? this.data : this.uncompressed);
    }, e.prototype.decapsulate = function(e, t) {
        void 0 === t && (t = !1);
        var n = t ? this.data : this.uncompressed, r = e.multiply(this, t);
        return (0, Gi.getSharedKey)(n, r);
    }, e.prototype.equals = function(e) {
        return (0, Wi.equalBytes)(this.data, e.data);
    }, e;
}();
Vi.PublicKey = Zi, Object.defineProperty(xe, "__esModule", {
    value: !0
}), xe.PrivateKey = void 0;
var Yi = fe, Ji = Me, Xi = Vi, Qi = function() {
    function e(e) {
        if (void 0 === e) this.data = (0, Ji.getValidSecret)();
        else {
            if (!(0, Ji.isValidPrivateKey)(e)) throw new Error("Invalid private key");
            this.data = e;
        }
        this.publicKey = new Xi.PublicKey((0, Ji.getPublicKey)(this.data));
    }
    return e.fromHex = function(t) {
        return new e((0, Ji.decodeHex)(t));
    }, Object.defineProperty(e.prototype, "secret", {
        get: function() {
            return S.from(this.data);
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.toHex = function() {
        return (0, Yi.bytesToHex)(this.data);
    }, e.prototype.encapsulate = function(e, t) {
        void 0 === t && (t = !1);
        var n = t ? this.publicKey.compressed : this.publicKey.uncompressed, r = this.multiply(e, t);
        return (0, Ji.getSharedKey)(n, r);
    }, e.prototype.multiply = function(e, t) {
        return void 0 === t && (t = !1), (0, Ji.getSharedPoint)(this.data, e.compressed, t);
    }, e.prototype.equals = function(e) {
        return (0, Yi.equalBytes)(this.data, e.data);
    }, e;
}();
xe.PrivateKey = Qi, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PublicKey = e.PrivateKey = void 0;
    var t = xe;
    Object.defineProperty(e, "PrivateKey", {
        enumerable: !0,
        get: function() {
            return t.PrivateKey;
        }
    });
    var n = Vi;
    Object.defineProperty(e, "PublicKey", {
        enumerable: !0,
        get: function() {
            return n.PublicKey;
        }
    });
}(ke), function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.utils = e.PublicKey = e.PrivateKey = e.ECIES_CONFIG = void 0, e.encrypt = function(e, o) {
        var s = new r.PrivateKey, a = e instanceof Uint8Array ? new r.PublicKey(e) : r.PublicKey.fromHex(e), c = s.encapsulate(a, (0, n.isHkdfKeyCompressed)()), l = (0, n.isEphemeralKeyCompressed)() ? s.publicKey.compressed : s.publicKey.uncompressed, d = (0, i.symEncrypt)(c, o);
        return S.from((0, t.concatBytes)(l, d));
    }, e.decrypt = function(e, t) {
        var o = e instanceof Uint8Array ? new r.PrivateKey(e) : r.PrivateKey.fromHex(e), s = (0, n.ephemeralKeySize)(), a = new r.PublicKey(t.subarray(0, s)), c = t.subarray(s), l = a.decapsulate(o, (0, n.isHkdfKeyCompressed)());
        return S.from((0, i.symDecrypt)(l, c));
    };
    var t = fe, n = Se, r = ke, i = Me;
    var o = Se;
    Object.defineProperty(e, "ECIES_CONFIG", {
        enumerable: !0,
        get: function() {
            return o.ECIES_CONFIG;
        }
    });
    var s = ke;
    Object.defineProperty(e, "PrivateKey", {
        enumerable: !0,
        get: function() {
            return s.PrivateKey;
        }
    }), Object.defineProperty(e, "PublicKey", {
        enumerable: !0,
        get: function() {
            return s.PublicKey;
        }
    }), e.utils = {
        aesEncrypt: i.aesEncrypt,
        aesDecrypt: i.aesDecrypt,
        symEncrypt: i.symEncrypt,
        symDecrypt: i.symDecrypt,
        decodeHex: i.decodeHex,
        getValidSecret: i.getValidSecret,
        remove0x: i.remove0x
    };
}(he);
const eo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("KeyExchange:Layer"), to = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("SocketService:Layer"), no = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Ecies:Layer"), ro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("RemoteCommunication:Layer");
eo.color = "##95c44e", to.color = "#f638d7", no.color = "#465b9c", ro.color = "#47a2be";
const io = {
    KeyExchange: eo,
    SocketService: to,
    Ecies: no,
    RemoteCommunication: ro
};
let oo, so = [], ao = [];
const co = (t, n)=>a(void 0, void 0, void 0, function*() {
        oo = n, ao.push(t), (function(t) {
            return a(this, void 0, void 0, function*() {
                if (!oo || !t) return;
                !function() {
                    const e = ao;
                    ao = so, so = e;
                }();
                const n = oo.endsWith("/") ? `${oo}evt` : `${oo}/evt`, r = Object.assign({}, t);
                if (delete r.params, t.params) for (const [e, n] of Object.entries(t.params))r[e] = n;
                const i = JSON.stringify(r);
                io.RemoteCommunication(`[sendBufferedEvents] Sending ${so.length} analytics events to ${n}`);
                try {
                    const t = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$4$2e$1$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(n, {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: i
                    }), r = yield t.text();
                    io.RemoteCommunication(`[sendBufferedEvents] Response: ${r}`), so.length = 0;
                } catch (n) {}
            });
        })(t).catch(()=>{});
    });
class lo {
    constructor(e){
        this.enabled = !0, (null == e ? void 0 : e.debug) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].enable("Ecies:Layer"), this.ecies = (null == e ? void 0 : e.privateKey) ? he.PrivateKey.fromHex(e.privateKey) : new he.PrivateKey, io.Ecies("[ECIES constructor()] initialized secret: ", this.ecies.toHex()), io.Ecies("[ECIES constructor()] initialized public: ", this.ecies.publicKey.toHex()), io.Ecies("[ECIES constructor()] init with", this);
    }
    generateECIES() {
        this.ecies = new he.PrivateKey;
    }
    getPublicKey() {
        return this.ecies.publicKey.toHex();
    }
    encrypt(e, t) {
        let n = e;
        if (this.enabled) try {
            io.Ecies("[ECIES: encrypt()] using otherPublicKey", t);
            const r = S.from(e), i = he.encrypt(t, r);
            n = S.from(i).toString("base64");
        } catch (n) {
            throw io.Ecies("[ECIES: encrypt()] error encrypt:", n), io.Ecies("[ECIES: encrypt()] private: ", this.ecies.toHex()), io.Ecies("[ECIES: encrypt()] data: ", e), io.Ecies("[ECIES: encrypt()] otherkey: ", t), n;
        }
        return n;
    }
    decrypt(e) {
        let t = e;
        if (this.enabled) try {
            io.Ecies("[ECIES: decrypt()] using privateKey", this.ecies.toHex());
            const n = S.from(e.toString(), "base64");
            t = he.decrypt(this.ecies.toHex(), n).toString();
        } catch (t) {
            throw io.Ecies("[ECIES: decrypt()] error decrypt", t), io.Ecies("[ECIES: decrypt()] private: ", this.ecies.toHex()), io.Ecies("[ECIES: decrypt()] encryptedData: ", e), t;
        }
        return t;
    }
    getKeyInfo() {
        return {
            private: this.ecies.toHex(),
            public: this.ecies.publicKey.toHex()
        };
    }
    toString() {
        io.Ecies("[ECIES: toString()]", this.getKeyInfo());
    }
}
var uo = {
    name: "@metamask/sdk-communication-layer",
    version: "0.32.0",
    description: "",
    homepage: "https://github.com/MetaMask/metamask-sdk#readme",
    bugs: {
        url: "https://github.com/MetaMask/metamask-sdk/issues"
    },
    repository: {
        type: "git",
        url: "https://github.com/MetaMask/metamask-sdk.git",
        directory: "packages/sdk-communication-layer"
    },
    main: "dist/node/cjs/metamask-sdk-communication-layer.js",
    unpkg: "dist/browser/umd/metamask-sdk-communication-layer.js",
    module: "dist/node/es/metamask-sdk-communication-layer.js",
    browser: "dist/browser/es/metamask-sdk-communication-layer.js",
    "react-native": "dist/react-native/es/metamask-sdk-communication-layer.js",
    types: "dist/types/src/index.d.ts",
    files: [
        "/dist"
    ],
    scripts: {
        "build:types": "tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types",
        "build:clean": "yarn clean && yarn build",
        build: "yarn build:types && rollup -c --bundleConfigAsCjs",
        "build:dev": "yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs",
        dev: 'concurrently "tsc --watch" "rollup -c --bundleConfigAsCjs -w"',
        "build:post-tsc": "echo 'N/A'",
        "build:pre-tsc": "echo 'N/A'",
        size: "size-limit",
        clean: "rimraf ./dist",
        lint: "yarn lint:eslint && yarn lint:misc --check",
        "lint:changelog": "../../scripts/validate-changelog.sh @metamask/sdk-communication-layer",
        "lint:eslint": "eslint . --cache --ext js,ts",
        "lint:fix": "yarn lint:eslint --fix && yarn lint:misc --write",
        "lint:misc": "prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore",
        "publish:preview": "yarn npm publish --tag preview",
        prepack: "../../scripts/prepack.sh",
        reset: "yarn clean && rimraf ./node_modules/",
        test: 'jest --testPathIgnorePatterns "/e2e/"',
        "test:e2e": 'jest --testPathPattern "/e2e/"',
        "test:coverage": "jest --coverage",
        "test:ci": 'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"',
        "test:dev": "jest",
        watch: "rollup -c --bundleConfigAsCjs -w"
    },
    dependencies: {
        bufferutil: "^4.0.8",
        "date-fns": "^2.29.3",
        debug: "^4.3.4",
        "utf-8-validate": "^5.0.2",
        uuid: "^8.3.2"
    },
    devDependencies: {
        "@jest/globals": "^29.3.1",
        "@lavamoat/allow-scripts": "^2.3.1",
        "@metamask/auto-changelog": "3.1.0",
        "@metamask/eslint-config": "^6.0.0",
        "@metamask/eslint-config-nodejs": "^6.0.0",
        "@metamask/eslint-config-typescript": "^6.0.0",
        "@rollup/plugin-commonjs": "^25.0.0",
        "@rollup/plugin-json": "^6.0.0",
        "@rollup/plugin-node-resolve": "^15.0.2",
        "@rollup/plugin-replace": "^6.0.1",
        "@rollup/plugin-terser": "^0.4.4",
        "@size-limit/preset-big-lib": "^11.0.2",
        "@types/jest": "^29.2.4",
        "@types/node": "^20.1.3",
        "@types/uuid": "^9.0.0",
        "@typescript-eslint/eslint-plugin": "^4.26.0",
        "@typescript-eslint/parser": "^4.26.0",
        concurrently: "^9.1.2",
        "cross-fetch": "^4.0.0",
        eciesjs: "^0.4.11",
        eslint: "^7.30.0",
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-import": "^2.23.4",
        "eslint-plugin-jest": "^24.4.0",
        "eslint-plugin-jsdoc": "^36.1.0",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^3.4.0",
        eventemitter2: "^6.4.9",
        jest: "^29.3.1",
        prettier: "^2.3.0",
        rimraf: "^3.0.2",
        rollup: "^4.26.0",
        "rollup-plugin-jscc": "^2.0.0",
        "rollup-plugin-natives": "^0.7.5",
        "rollup-plugin-node-builtins": "^2.1.2",
        "rollup-plugin-node-globals": "^1.4.0",
        "rollup-plugin-peer-deps-external": "^2.2.4",
        "rollup-plugin-polyfill-node": "^0.13.0",
        "rollup-plugin-sizes": "^1.0.6",
        "rollup-plugin-typescript2": "^0.31.2",
        "rollup-plugin-visualizer": "^5.12.0",
        "size-limit": "^11.1.6",
        "socket.io-client": "^4.5.1",
        "stream-browserify": "^3.0.0",
        "ts-jest": "^29.0.3",
        "ts-node": "^10.9.1",
        typescript: "^5.6.3"
    },
    peerDependencies: {
        "cross-fetch": "^4.0.0",
        eciesjs: "*",
        eventemitter2: "^6.4.9",
        "readable-stream": "^3.6.2",
        "socket.io-client": "^4.5.1"
    },
    publishConfig: {
        access: "public",
        registry: "https://registry.npmjs.org/"
    },
    lavamoat: {
        allowScripts: {
            "@lavamoat/preinstall-always-fail": !1,
            canvas: !0,
            "eciesjs>secp256k1": !1,
            "socket.io-client>engine.io-client>ws>bufferutil": !1,
            "socket.io-client>engine.io-client>ws>utf-8-validate": !1,
            bufferutil: !1,
            "utf-8-validate": !1
        }
    }
};
const ho = "https://metamask-sdk.api.cx.metamask.io/", fo = [
    "websocket"
], po = 6048e5, go = 3e3, mo = {
    METAMASK_GETPROVIDERSTATE: "metamask_getProviderState",
    ETH_REQUESTACCOUNTS: "eth_requestAccounts"
};
function yo(e) {
    const { context: t } = e;
    io.RemoteCommunication(`[RemoteCommunication: clean()] context=${t}`), e.channelConfig = void 0, e.ready = !1, e.originatorConnectStarted = !1;
}
var vo, bo, wo, Eo, Co, So, _o;
(_o = vo || (vo = {})).DISCONNECTED = "disconnected", _o.WAITING = "waiting", _o.TIMEOUT = "timeout", _o.LINKED = "linked", _o.PAUSED = "paused", _o.TERMINATED = "terminated", function(e) {
    e.KEY_INFO = "key_info", e.SERVICE_STATUS = "service_status", e.PROVIDER_UPDATE = "provider_update", e.RPC_UPDATE = "rpc_update", e.KEYS_EXCHANGED = "keys_exchanged", e.JOIN_CHANNEL = "join_channel", e.PUBLIC_KEY = "public_key", e.CHANNEL_CREATED = "channel_created", e.CLIENTS_CONNECTED = "clients_connected", e.CLIENTS_DISCONNECTED = "clients_disconnected", e.CLIENTS_WAITING = "clients_waiting", e.CLIENTS_READY = "clients_ready", e.REJECTED = "rejected", e.WALLET_INIT = "wallet_init", e.CHANNEL_PERSISTENCE = "channel_persistence", e.CONFIG = "config", e.MESSAGE_ACK = "ack", e.SOCKET_DISCONNECTED = "socket_disconnected", e.SOCKET_RECONNECT = "socket_reconnect", e.OTP = "otp", e.SDK_RPC_CALL = "sdk_rpc_call", e.AUTHORIZED = "authorized", e.CONNECTION_STATUS = "connection_status", e.MESSAGE = "message", e.TERMINATE = "terminate";
}(bo || (bo = {})), (wo || (wo = {})).KEY_EXCHANGE = "key_exchange", function(e) {
    e.KEY_HANDSHAKE_START = "key_handshake_start", e.KEY_HANDSHAKE_CHECK = "key_handshake_check", e.KEY_HANDSHAKE_SYN = "key_handshake_SYN", e.KEY_HANDSHAKE_SYNACK = "key_handshake_SYNACK", e.KEY_HANDSHAKE_ACK = "key_handshake_ACK", e.KEY_HANDSHAKE_WALLET = "key_handshake_wallet", e.KEY_HANDSHAKE_NONE = "none";
}(Eo || (Eo = {}));
class ko extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter2$40$6$2e$4$2e$9$2f$node_modules$2f$eventemitter2$2f$lib$2f$eventemitter2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventEmitter2"] {
    constructor({ communicationLayer: e, otherPublicKey: t, context: n, ecies: r, logging: i }){
        super(), this.keysExchanged = !1, this.step = Eo.KEY_HANDSHAKE_NONE, this.debug = !1, this.context = n, this.communicationLayer = e, (null == r ? void 0 : r.privateKey) && t && (io.KeyExchange(`[KeyExchange: constructor()] otherPubKey=${t} set keysExchanged to true!`, r), this.keysExchanged = !0), this.myECIES = new lo(Object.assign(Object.assign({}, r), {
            debug: null == i ? void 0 : i.eciesLayer
        })), this.communicationLayer.state.eciesInstance = this.myECIES, this.myPublicKey = this.myECIES.getPublicKey(), this.debug = !0 === (null == i ? void 0 : i.keyExchangeLayer), t && this.setOtherPublicKey(t), this.communicationLayer.on(wo.KEY_EXCHANGE, this.onKeyExchangeMessage.bind(this));
    }
    onKeyExchangeMessage(e) {
        const { relayPersistence: t } = this.communicationLayer.remote.state;
        if (io.KeyExchange(`[KeyExchange: onKeyExchangeMessage()] context=${this.context} keysExchanged=${this.keysExchanged} relayPersistence=${t}`, e), t) return void io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Ignoring key exchange message because relay persistence is activated");
        const { message: n } = e;
        this.keysExchanged && io.KeyExchange(`[KeyExchange: onKeyExchangeMessage()] context=${this.context} received handshake while already exchanged. step=${this.step} otherPubKey=${this.otherPublicKey}`), this.emit(bo.KEY_INFO, n.type), n.type === Eo.KEY_HANDSHAKE_SYN ? (this.checkStep([
            Eo.KEY_HANDSHAKE_NONE,
            Eo.KEY_HANDSHAKE_ACK
        ]), io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYN", n), n.pubkey && this.setOtherPublicKey(n.pubkey), this.communicationLayer.sendMessage({
            type: Eo.KEY_HANDSHAKE_SYNACK,
            pubkey: this.myPublicKey
        }).catch((e)=>{
            io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_SYNACK", e);
        }), this.setStep(Eo.KEY_HANDSHAKE_ACK)) : n.type === Eo.KEY_HANDSHAKE_SYNACK ? (this.checkStep([
            Eo.KEY_HANDSHAKE_SYNACK,
            Eo.KEY_HANDSHAKE_ACK,
            Eo.KEY_HANDSHAKE_NONE
        ]), io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYNACK"), n.pubkey && this.setOtherPublicKey(n.pubkey), this.communicationLayer.sendMessage({
            type: Eo.KEY_HANDSHAKE_ACK
        }).catch((e)=>{
            io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_ACK", e);
        }), this.keysExchanged = !0, this.setStep(Eo.KEY_HANDSHAKE_ACK), this.emit(bo.KEYS_EXCHANGED)) : n.type === Eo.KEY_HANDSHAKE_ACK && (io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_ACK set keysExchanged to true!"), this.checkStep([
            Eo.KEY_HANDSHAKE_ACK,
            Eo.KEY_HANDSHAKE_NONE
        ]), this.keysExchanged = !0, this.setStep(Eo.KEY_HANDSHAKE_ACK), this.emit(bo.KEYS_EXCHANGED));
    }
    resetKeys(e) {
        this.clean(), this.myECIES = new lo(e);
    }
    clean() {
        io.KeyExchange(`[KeyExchange: clean()] context=${this.context} reset handshake state`), this.setStep(Eo.KEY_HANDSHAKE_NONE), this.emit(bo.KEY_INFO, this.step), this.keysExchanged = !1;
    }
    start({ isOriginator: e, force: t }) {
        const { relayPersistence: n, protocolVersion: r } = this.communicationLayer.remote.state, i = r >= 2;
        n ? io.KeyExchange("[KeyExchange: start()] Ignoring key exchange message because relay persistence is activated") : (io.KeyExchange(`[KeyExchange: start()] context=${this.context} protocolVersion=${r} isOriginator=${e} step=${this.step} force=${t} relayPersistence=${n} keysExchanged=${this.keysExchanged}`), e ? !(this.keysExchanged || this.step !== Eo.KEY_HANDSHAKE_NONE && this.step !== Eo.KEY_HANDSHAKE_SYNACK) || t ? (io.KeyExchange(`[KeyExchange: start()] context=${this.context} -- start key exchange (force=${t}) -- step=${this.step}`, this.step), this.clean(), this.setStep(Eo.KEY_HANDSHAKE_SYNACK), this.communicationLayer.sendMessage({
            type: Eo.KEY_HANDSHAKE_SYN,
            pubkey: this.myPublicKey,
            v: 2
        }).catch((e)=>{
            io.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYN", e);
        })) : io.KeyExchange(`[KeyExchange: start()] context=${this.context} -- key exchange already ${this.keysExchanged ? "done" : "in progress"} -- aborted.`, this.step) : this.keysExchanged && !0 !== t ? io.KeyExchange("[KeyExchange: start()] don't send KEY_HANDSHAKE_START -- exchange already done.") : i ? this.communicationLayer.sendMessage({
            type: Eo.KEY_HANDSHAKE_SYNACK,
            pubkey: this.myPublicKey,
            v: 2
        }).catch((e)=>{
            io.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYNACK", e);
        }) : (this.communicationLayer.sendMessage({
            type: Eo.KEY_HANDSHAKE_START
        }).catch((e)=>{
            io.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_START", e);
        }), this.clean()));
    }
    setStep(e) {
        this.step = e, this.emit(bo.KEY_INFO, e);
    }
    checkStep(e) {
        e.length > 0 && e.indexOf(this.step.toString());
    }
    setRelayPersistence({ localKey: e, otherKey: t }) {
        this.otherPublicKey = t, this.myECIES = new lo({
            privateKey: e,
            debug: this.debug
        }), this.keysExchanged = !0;
    }
    setKeysExchanged(e) {
        this.keysExchanged = e;
    }
    areKeysExchanged() {
        return this.keysExchanged;
    }
    getMyPublicKey() {
        return this.myPublicKey;
    }
    getOtherPublicKey() {
        return this.otherPublicKey;
    }
    setOtherPublicKey(e) {
        io.KeyExchange("[KeyExchange: setOtherPubKey()]", e), this.otherPublicKey = e;
    }
    encryptMessage(e) {
        if (!this.otherPublicKey) throw new Error("encryptMessage: Keys not exchanged - missing otherPubKey");
        return this.myECIES.encrypt(e, this.otherPublicKey);
    }
    decryptMessage(e) {
        if (!this.otherPublicKey) throw new Error("decryptMessage: Keys not exchanged - missing otherPubKey");
        return this.myECIES.decrypt(e);
    }
    getKeyInfo() {
        return {
            ecies: Object.assign(Object.assign({}, this.myECIES.getKeyInfo()), {
                otherPubKey: this.otherPublicKey
            }),
            step: this.step,
            keysExchanged: this.areKeysExchanged()
        };
    }
    toString() {
        const e = {
            keyInfo: this.getKeyInfo(),
            keysExchanged: this.keysExchanged,
            step: this.step
        };
        return JSON.stringify(e);
    }
}
!function(e) {
    e.TERMINATE = "terminate", e.ANSWER = "answer", e.OFFER = "offer", e.CANDIDATE = "candidate", e.JSONRPC = "jsonrpc", e.WALLET_INFO = "wallet_info", e.WALLET_INIT = "wallet_init", e.ORIGINATOR_INFO = "originator_info", e.PAUSE = "pause", e.OTP = "otp", e.AUTHORIZED = "authorized", e.PING = "ping", e.READY = "ready";
}(Co || (Co = {})), function(e) {
    e.REQUEST = "sdk_connect_request_started", e.REQUEST_MOBILE = "sdk_connect_request_started_mobile", e.RECONNECT = "sdk_reconnect_request_started", e.CONNECTED = "sdk_connection_established", e.CONNECTED_MOBILE = "sdk_connection_established_mobile", e.AUTHORIZED = "sdk_connection_authorized", e.REJECTED = "sdk_connection_rejected", e.TERMINATED = "sdk_connection_terminated", e.DISCONNECTED = "sdk_disconnected", e.SDK_USE_EXTENSION = "sdk_use_extension", e.SDK_RPC_REQUEST = "sdk_rpc_request", e.SDK_RPC_REQUEST_RECEIVED = "sdk_rpc_request_received", e.SDK_RPC_REQUEST_DONE = "sdk_rpc_request_done", e.SDK_EXTENSION_UTILIZED = "sdk_extension_utilized", e.SDK_USE_INAPP_BROWSER = "sdk_use_inapp_browser";
}(So || (So = {}));
const xo = (e, t, n)=>a(void 0, void 0, void 0, function*() {
        var r, i, o, s, a, c;
        const { remote: l, state: d } = e, { channelId: u, isOriginator: h } = d;
        if ("error_terminated" === t) return io.SocketService(`handleJoinChannelResults: Channel ${u} terminated`), void e.emit(bo.TERMINATE);
        if (!n) return void io.SocketService(`handleJoinChannelResults: No result for channel ${u}`);
        const { persistence: f, walletKey: p, rejected: g } = n;
        if (io.SocketService(`handleJoinChannelResults: Channel ${u} persistence=${f} walletKey=${p} rejected=${g}`), g) return io.SocketService(`handleJoinChannelResults: Channel ${u} rejected`), yield e.remote.disconnect({
            terminate: !0
        }), e.remote.emit(bo.REJECTED, {
            channelId: u
        }), void e.remote.emitServiceStatusEvent();
        if (p && !(null === (r = l.state.channelConfig) || void 0 === r ? void 0 : r.otherKey)) {
            e.getKeyExchange().setOtherPublicKey(p), null === (i = e.state.keyExchange) || void 0 === i || i.setKeysExchanged(!0), l.state.ready = !0, l.state.authorized = !0, l.emit(bo.AUTHORIZED);
            const { communicationLayer: t, storageManager: n } = l.state, r = Object.assign(Object.assign({}, l.state.channelConfig), {
                channelId: null !== (o = l.state.channelId) && void 0 !== o ? o : "",
                validUntil: Date.now() + po,
                localKey: null == t ? void 0 : t.getKeyInfo().ecies.private,
                otherKey: p
            });
            e.sendMessage({
                type: Eo.KEY_HANDSHAKE_ACK
            }).catch((e)=>{}), null === (s = e.state.socket) || void 0 === s || s.emit(Co.PING, {
                id: u,
                clientType: h ? "dapp" : "wallet",
                context: "on_channel_reconnect",
                message: ""
            }), yield null == n ? void 0 : n.persistChannelConfig(r), l.emitServiceStatusEvent(), l.setConnectionStatus(vo.LINKED);
        }
        f && (e.emit(bo.CHANNEL_PERSISTENCE), null === (a = e.state.keyExchange) || void 0 === a || a.setKeysExchanged(!0), l.state.ready = !0, l.state.authorized = !0, l.emit(bo.AUTHORIZED), co(Object.assign(Object.assign({
            id: null != u ? u : "",
            event: h ? So.CONNECTED : So.CONNECTED_MOBILE
        }, e.remote.state.originatorInfo), {
            sdkVersion: e.remote.state.sdkVersion,
            commLayer: e.state.communicationLayerPreference,
            commLayerVersion: uo.version,
            walletVersion: null === (c = e.remote.state.walletInfo) || void 0 === c ? void 0 : c.version
        }), d.communicationServerUrl).catch((e)=>{}));
    }), Mo = (e)=>new Promise((t)=>{
        setTimeout(t, e);
    }), Ao = (e, t, ...n)=>a(void 0, [
        e,
        t,
        ...n
    ], void 0, function*(e, t, n = 200) {
        let r;
        const i = Date.now();
        let o = !1;
        for(; !o;){
            if (o = Date.now() - i > 3e5, r = t[e], void 0 !== r.elapsedTime) return r;
            yield Mo(n);
        }
        throw new Error(`RPC ${e} timed out`);
    }), Io = (e)=>a(void 0, void 0, void 0, function*() {
        const { state: t } = e, { socket: n, channelId: r, context: i, isOriginator: o, isReconnecting: s } = t;
        if (s) return io.SocketService("[SocketService: reconnectSocket()] Reconnection already in progress, skipping", e), !1;
        if (!n) return io.SocketService("[SocketService: reconnectSocket()] socket is not defined", e), !1;
        if (!r) return !1;
        const { connected: c } = n;
        t.isReconnecting = !0, t.reconnectionAttempts = 0, io.SocketService(`[SocketService: reconnectSocket()] connected=${c} trying to reconnect after socketio disconnection`, e);
        try {
            for(; 3 > t.reconnectionAttempts;){
                if (io.SocketService(`[SocketService: reconnectSocket()] Attempt ${t.reconnectionAttempts + 1} of 3`, e), yield Mo(200), n.connected) return io.SocketService("Socket already connected --- ping to retrieve messages"), n.emit(Co.PING, {
                    id: r,
                    clientType: o ? "dapp" : "wallet",
                    context: "on_channel_config",
                    message: ""
                }), !0;
                t.resumed = !0, n.connect(), e.emit(bo.SOCKET_RECONNECT);
                try {
                    if (yield new Promise((t, s)=>{
                        n.emit(bo.JOIN_CHANNEL, {
                            channelId: r,
                            context: `${i}connect_again`,
                            clientType: o ? "dapp" : "wallet"
                        }, (n, r)=>a(void 0, void 0, void 0, function*() {
                                try {
                                    yield xo(e, n, r), t();
                                } catch (e) {
                                    s(e);
                                }
                            }));
                    }), yield Mo(100), n.connected) return io.SocketService(`Reconnection successful on attempt ${t.reconnectionAttempts + 1}`), !0;
                } catch (e) {
                    io.SocketService(`Error during reconnection attempt ${t.reconnectionAttempts + 1}:`, e);
                }
                t.reconnectionAttempts += 1, 3 > t.reconnectionAttempts && (yield Mo(200));
            }
            return io.SocketService("Failed to reconnect after 3 attempts"), !1;
        } finally{
            t.isReconnecting = !1, t.reconnectionAttempts = 0;
        }
    });
function Ro(e, t) {
    return a(this, void 0, void 0, function*() {
        var n;
        const r = null === (n = e.state.keyExchange) || void 0 === n ? void 0 : n.encryptMessage(JSON.stringify(t)), i = {
            id: e.state.channelId,
            context: e.state.context,
            clientType: e.state.isOriginator ? "dapp" : "wallet",
            message: r,
            plaintext: e.state.hasPlaintext ? JSON.stringify(t) : void 0
        };
        return io.SocketService(`[SocketService: encryptAndSendMessage()] context=${e.state.context}`, i), t.type === Co.TERMINATE && (e.state.manualDisconnect = !0), new Promise((t, n)=>{
            var r;
            null === (r = e.state.socket) || void 0 === r || r.emit(bo.MESSAGE, i, (e, r)=>{
                var i;
                e && (io.SocketService(`[SocketService: encryptAndSendMessage()] error=${e}`), n(e)), io.SocketService("[encryptAndSendMessage] response", r), t(null !== (i = null == r ? void 0 : r.success) && void 0 !== i && i);
            });
        });
    });
}
var Po;
!function(e) {
    e.RPC_CHECK = "rpcCheck", e.SKIPPED_RPC = "skippedRpc";
}(Po || (Po = {}));
const Lo = [
    "eth_sendTransaction",
    "eth_signTypedData",
    "eth_signTransaction",
    "personal_sign",
    "wallet_requestPermissions",
    "wallet_switchEthereumChain",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "metamask_connectSign",
    "metamask_connectWith",
    "metamask_batch"
].map((e)=>e.toLowerCase());
const Oo = [
    {
        event: bo.CLIENTS_CONNECTED,
        handler: function(e, t) {
            return (n)=>a(this, void 0, void 0, function*() {
                    var n, r, i, o, s, a, c, l, d, u, h;
                    const f = null !== (r = null === (n = e.remote.state.channelConfig) || void 0 === n ? void 0 : n.relayPersistence) && void 0 !== r && r;
                    if (io.SocketService(`[SocketService: handleClientsConnected()] context=${e.state.context} on 'clients_connected-${t}' relayPersistence=${f} resumed=${e.state.resumed}  clientsPaused=${e.state.clientsPaused} keysExchanged=${null === (i = e.state.keyExchange) || void 0 === i ? void 0 : i.areKeysExchanged()} isOriginator=${e.state.isOriginator}`), e.emit(bo.CLIENTS_CONNECTED, {
                        isOriginator: e.state.isOriginator,
                        keysExchanged: null === (o = e.state.keyExchange) || void 0 === o ? void 0 : o.areKeysExchanged(),
                        context: e.state.context
                    }), e.state.resumed) e.state.isOriginator || (io.SocketService(`[SocketService: handleClientsConnected()] context=${e.state.context} 'clients_connected' / keysExchanged=${null === (s = e.state.keyExchange) || void 0 === s ? void 0 : s.areKeysExchanged()} -- backward compatibility`), null === (a = e.state.keyExchange) || void 0 === a || a.start({
                        isOriginator: null !== (c = e.state.isOriginator) && void 0 !== c && c
                    })), e.state.resumed = !1;
                    else if (e.state.clientsPaused) io.SocketService("[SocketService: handleClientsConnected()] 'clients_connected' skip sending originatorInfo on pause");
                    else if (!e.state.isOriginator) {
                        const t = !f;
                        io.SocketService(`[SocketService: handleClientsConnected()] context=${e.state.context} on 'clients_connected' / keysExchanged=${null === (l = e.state.keyExchange) || void 0 === l ? void 0 : l.areKeysExchanged()} -- force=${t} -- backward compatibility`), io.SocketService(`[SocketService: handleClientsConnected()] context=${e.state.context} on 'clients_connected' / keysExchanged=${null === (d = e.state.keyExchange) || void 0 === d ? void 0 : d.areKeysExchanged()} -- force=${t} -- backward compatibility`), null === (u = e.state.keyExchange) || void 0 === u || u.start({
                            isOriginator: null !== (h = e.state.isOriginator) && void 0 !== h && h,
                            force: t
                        });
                    }
                    e.state.clientsConnected = !0, e.state.clientsPaused = !1;
                });
        }
    },
    {
        event: bo.CHANNEL_CREATED,
        handler: function(e, t) {
            return (n)=>{
                io.SocketService(`[SocketService: handleChannelCreated()] context=${e.state.context} on 'channel_created-${t}'`, n), e.emit(bo.CHANNEL_CREATED, n);
            };
        }
    },
    {
        event: bo.CLIENTS_DISCONNECTED,
        handler: function(e, t) {
            return ()=>{
                var n;
                e.state.clientsConnected = !1, io.SocketService(`[SocketService: handlesClientsDisconnected()] context=${e.state.context} on 'clients_disconnected-${t}'`), e.remote.state.relayPersistence ? io.SocketService(`[SocketService: handlesClientsDisconnected()] context=${e.state.context} on 'clients_disconnected-${t}' - relayPersistence enabled, skipping key exchange cleanup.`) : (e.state.isOriginator && !e.state.clientsPaused && (null === (n = e.state.keyExchange) || void 0 === n || n.clean()), e.emit(bo.CLIENTS_DISCONNECTED, t));
            };
        }
    },
    {
        event: bo.CONFIG,
        handler: function(e, t) {
            return (n)=>a(this, void 0, void 0, function*() {
                    var r, i, o;
                    io.SocketService(`[SocketService: handleChannelConfig()] update relayPersistence on 'config-${t}'`, n);
                    const { persistence: s, walletKey: a } = n;
                    e.state.isOriginator && e.remote.state.channelConfig ? (n.walletKey && !e.remote.state.channelConfig.otherKey && (io.SocketService(`Setting wallet key ${a}`), e.remote.state.channelConfig.otherKey = a, e.getKeyExchange().setOtherPublicKey(n.walletKey), null === (r = e.state.keyExchange) || void 0 === r || r.setKeysExchanged(!0), yield e.remote.sendMessage({
                        type: Eo.KEY_HANDSHAKE_ACK
                    }), yield e.remote.sendMessage({
                        type: Co.PING
                    }), yield null === (i = e.remote.state.storageManager) || void 0 === i ? void 0 : i.persistChannelConfig(e.remote.state.channelConfig)), !0 !== s || e.remote.state.channelConfig.relayPersistence || (io.SocketService(`Setting relay persistence ${s}`), e.remote.state.channelConfig.relayPersistence = s, e.remote.state.relayPersistence = !0, e.remote.emit(bo.CHANNEL_PERSISTENCE), e.remote.state.authorized = !0, e.remote.state.ready = !0, e.remote.emit(bo.AUTHORIZED), yield null === (o = e.remote.state.storageManager) || void 0 === o ? void 0 : o.persistChannelConfig(e.remote.state.channelConfig))) : e.state.isOriginator || n.persistence && (e.remote.state.relayPersistence = !0, e.remote.emit(bo.CHANNEL_PERSISTENCE));
                });
        }
    },
    {
        event: bo.MESSAGE,
        handler: function(e, t) {
            return (n)=>{
                var r, i, o, s, a, c, l, d, u, h, f, p, g, m, y, v, b, w;
                const { ackId: E, message: C, error: S } = n, _ = null !== (r = e.remote.state.relayPersistence) && void 0 !== r && r;
                if (io.SocketService(`[SocketService handleMessage()]  relayPersistence=${_}  context=${e.state.context} on 'message' ${t} keysExchanged=${null === (i = e.state.keyExchange) || void 0 === i ? void 0 : i.areKeysExchanged()}`, n), S) throw io.SocketService(`\n      [SocketService handleMessage()] context=${e.state.context}::on 'message' error=${S}`), new Error(S);
                const k = "string" == typeof C;
                if (!k && (null == C ? void 0 : C.type) === Eo.KEY_HANDSHAKE_START) {
                    if (_) return;
                    return io.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' received HANDSHAKE_START isOriginator=${e.state.isOriginator}`, C), void (null === (o = e.state.keyExchange) || void 0 === o || o.start({
                        isOriginator: null !== (s = e.state.isOriginator) && void 0 !== s && s,
                        force: !0
                    }));
                }
                if (!k && (null === (a = null == C ? void 0 : C.type) || void 0 === a ? void 0 : a.startsWith("key_handshake"))) {
                    if (_) return;
                    return io.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' emit KEY_EXCHANGE`, C), void e.emit(wo.KEY_EXCHANGE, {
                        message: C,
                        context: e.state.context
                    });
                }
                if (k && !(null === (c = e.state.keyExchange) || void 0 === c ? void 0 : c.areKeysExchanged())) {
                    let t = !1;
                    try {
                        io.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' trying to decrypt message`), null === (l = e.state.keyExchange) || void 0 === l || l.decryptMessage(C), t = !0;
                    } catch (t) {
                        io.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' error`, t);
                    }
                    if (!t) return e.state.isOriginator ? null === (u = e.state.keyExchange) || void 0 === u || u.start({
                        isOriginator: null !== (h = e.state.isOriginator) && void 0 !== h && h
                    }) : e.sendMessage({
                        type: Eo.KEY_HANDSHAKE_START
                    }).catch((e)=>{}), void io.SocketService(`Message ignored because invalid key exchange status. step=${null === (f = e.state.keyExchange) || void 0 === f ? void 0 : f.getKeyInfo().step}`, null === (p = e.state.keyExchange) || void 0 === p ? void 0 : p.getKeyInfo(), C);
                    io.SocketService("Invalid key exchange status detected --- updating it."), null === (d = e.state.keyExchange) || void 0 === d || d.setKeysExchanged(!0);
                } else if (!k && (null == C ? void 0 : C.type)) return void e.emit(bo.MESSAGE, C);
                if (!k) return void e.emit(bo.MESSAGE, C);
                const x = null === (g = e.state.keyExchange) || void 0 === g ? void 0 : g.decryptMessage(C), M = JSON.parse(null != x ? x : "{}");
                if (E && (null == E ? void 0 : E.length) > 0 && (io.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' ackid=${E} channelId=${t}`), null === (m = e.state.socket) || void 0 === m || m.emit(bo.MESSAGE_ACK, {
                    ackId: E,
                    channelId: t,
                    clientType: e.state.isOriginator ? "dapp" : "wallet"
                })), e.state.clientsPaused = (null == M ? void 0 : M.type) === Co.PAUSE, e.state.isOriginator && M.data) {
                    const t = M.data, n = e.state.rpcMethodTracker[t.id];
                    if (n) {
                        const r = Date.now() - n.timestamp;
                        io.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' received answer for id=${t.id} method=${n.method} responseTime=${r}`, M), e.remote.state.analytics && Lo.includes(n.method.toLowerCase()) && co(Object.assign(Object.assign({
                            id: null !== (y = e.remote.state.channelId) && void 0 !== y ? y : "",
                            event: So.SDK_RPC_REQUEST_DONE,
                            sdkVersion: e.remote.state.sdkVersion,
                            commLayerVersion: uo.version
                        }, e.remote.state.originatorInfo), {
                            walletVersion: null === (v = e.remote.state.walletInfo) || void 0 === v ? void 0 : v.version,
                            params: {
                                method: n.method,
                                from: "mobile"
                            }
                        }), e.remote.state.communicationServerUrl).catch((e)=>{});
                        const i = Object.assign(Object.assign({}, n), {
                            result: t.result,
                            error: t.error ? {
                                code: null === (b = t.error) || void 0 === b ? void 0 : b.code,
                                message: null === (w = t.error) || void 0 === w ? void 0 : w.message
                            } : void 0,
                            elapsedTime: r
                        });
                        e.state.rpcMethodTracker[t.id] = i, e.emit(bo.RPC_UPDATE, i);
                    }
                }
                e.emit(bo.MESSAGE, {
                    message: M
                });
            };
        }
    },
    {
        event: bo.REJECTED,
        handler: function(e, t) {
            return (n)=>a(this, void 0, void 0, function*() {
                    var n;
                    e.state.isOriginator && !e.remote.state.ready ? (io.SocketService(`[SocketService: handleChannelRejected()] context=${e.state.context} channelId=${t} isOriginator=${e.state.isOriginator} ready=${e.remote.state.ready}`, e.remote.state.originatorInfo), co(Object.assign(Object.assign({
                        id: t,
                        event: So.REJECTED
                    }, e.remote.state.originatorInfo), {
                        sdkVersion: e.remote.state.sdkVersion,
                        commLayer: e.state.communicationLayerPreference,
                        commLayerVersion: uo.version,
                        walletVersion: null === (n = e.remote.state.walletInfo) || void 0 === n ? void 0 : n.version
                    }), e.remote.state.communicationServerUrl).catch((e)=>{}), yield e.remote.disconnect({
                        terminate: !0
                    }), e.remote.emit(bo.REJECTED, {
                        channelId: t
                    }), e.remote.setConnectionStatus(vo.DISCONNECTED)) : io.SocketService(`[SocketService: handleChannelRejected()] SKIP -- channelId=${t} isOriginator=${e.state.isOriginator} ready=${e.remote.state.ready}`);
                });
        }
    },
    {
        event: "clients_waiting_to_join",
        handler: function(e, t) {
            return (n)=>{
                io.SocketService(`[SocketService: handleClientsWaitingToJoin()] context=${e.state.context} on 'clients_waiting_to_join-${t}'`, n), e.emit(bo.CLIENTS_WAITING, n);
            };
        }
    }
], To = [
    {
        event: bo.KEY_INFO,
        handler: function(e) {
            return (t)=>{
                io.SocketService("[SocketService: handleKeyInfo()] on 'KEY_INFO'", t), e.emit(bo.KEY_INFO, t);
            };
        }
    },
    {
        event: bo.KEYS_EXCHANGED,
        handler: function(e) {
            return ()=>{
                var t, n, r;
                io.SocketService(`[SocketService: handleKeysExchanged()] on 'keys_exchanged' keyschanged=${null === (t = e.state.keyExchange) || void 0 === t ? void 0 : t.areKeysExchanged()}`);
                const { channelConfig: i } = e.remote.state;
                if (i) {
                    const t = e.getKeyExchange().getKeyInfo().ecies;
                    i.localKey = t.private, i.otherKey = t.otherPubKey, e.remote.state.channelConfig = i, null === (n = e.remote.state.storageManager) || void 0 === n || n.persistChannelConfig(i).catch((e)=>{});
                }
                e.emit(bo.KEYS_EXCHANGED, {
                    keysExchanged: null === (r = e.state.keyExchange) || void 0 === r ? void 0 : r.areKeysExchanged(),
                    isOriginator: e.state.isOriginator
                });
                const o = {
                    keyInfo: e.getKeyInfo()
                };
                e.emit(bo.SERVICE_STATUS, o);
            };
        }
    }
];
function No(e, t) {
    io.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} setting socket listeners for channel ${t}...`);
    const { socket: n } = e.state, { keyExchange: r } = e.state;
    n && e.state.isOriginator && (e.state.debug && (null == n || n.io.on("error", (t)=>{
        io.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} socket event=error`, t);
    }), null == n || n.io.on("reconnect", (t)=>{
        io.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} socket event=reconnect`, t), Io(e).catch((e)=>{});
    }), null == n || n.io.on("reconnect_error", (t)=>{
        io.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} socket event=reconnect_error`, t);
    }), null == n || n.io.on("reconnect_failed", ()=>{
        io.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} socket event=reconnect_failed`);
    })), null == n || n.on("disconnect", (t)=>(io.SocketService(`[SocketService: setupChannelListener()] on 'disconnect' -- MetaMaskSDK socket disconnected '${t}' begin recovery...`), (function(e) {
            return (t)=>{
                io.SocketService(`[SocketService: handleDisconnect()] on 'disconnect' manualDisconnect=${e.state.manualDisconnect}`, t), e.state.manualDisconnect || (e.emit(bo.SOCKET_DISCONNECTED), Io(e).catch((e)=>{}));
            };
        })(e)(t)))), Oo.forEach(({ event: r, handler: i })=>{
        null == n || n.on(`${r}-${t}`, i(e, t));
    }), To.forEach(({ event: t, handler: n })=>{
        null == r || r.on(t, n(e));
    }), e.state.setupChannelListeners = !0;
}
class Do extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter2$40$6$2e$4$2e$9$2f$node_modules$2f$eventemitter2$2f$lib$2f$eventemitter2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventEmitter2"] {
    constructor(e){
        super(), this.state = {
            clientsConnected: !1,
            clientsPaused: !1,
            manualDisconnect: !1,
            lastRpcId: void 0,
            rpcMethodTracker: {},
            hasPlaintext: !1,
            communicationServerUrl: "",
            focusListenerAdded: !1,
            removeFocusListener: void 0,
            isReconnecting: !1,
            reconnectionAttempts: 0
        }, this.options = e;
        const { reconnect: n, communicationLayerPreference: r, communicationServerUrl: i, context: o, remote: s, logging: a } = e;
        this.state.resumed = n, this.state.context = o, this.state.isOriginator = s.state.isOriginator, this.state.communicationLayerPreference = r, this.state.debug = !0 === (null == a ? void 0 : a.serviceLayer), this.remote = s, !0 === (null == a ? void 0 : a.serviceLayer) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].enable("SocketService:Layer"), this.state.communicationServerUrl = i, this.state.hasPlaintext = this.state.communicationServerUrl !== ho && !0 === (null == a ? void 0 : a.plaintext), io.SocketService(`[SocketService: constructor()] Socket IO url: ${this.state.communicationServerUrl}`), this.initSocket();
    }
    initSocket() {
        var e;
        const { otherPublicKey: t, ecies: n, logging: r } = this.options, i = {
            autoConnect: !1,
            transports: fo,
            withCredentials: !0
        }, o = this.state.communicationServerUrl;
        io.SocketService(`[SocketService: initSocket()] Socket IO url: ${o}`), this.state.socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$socket$2e$io$2d$client$40$4$2e$8$2e$1_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(o, i), function(e) {
            if ("undefined" != typeof window && "undefined" != typeof document && (io.SocketService(`[SocketService: setupSocketFocusListener()] hasFocus=${document.hasFocus()}`, e), !e.state.focusListenerAdded)) {
                const t = ()=>{
                    io.SocketService("Document has focus --- reconnecting socket"), Io(e).catch((e)=>{});
                };
                window.addEventListener("focus", t), e.state.focusListenerAdded = !0, e.state.removeFocusListener = ()=>{
                    window.removeEventListener("focus", t), e.state.focusListenerAdded = !1;
                };
            }
        }(this);
        const a = {
            communicationLayer: this,
            otherPublicKey: t,
            sendPublicKey: !1,
            context: null !== (e = this.state.context) && void 0 !== e ? e : "",
            ecies: n,
            logging: r
        };
        this.state.keyExchange = new ko(a);
    }
    resetKeys() {
        return io.SocketService("[SocketService: resetKeys()] Resetting keys."), void (null === (e = this.state.keyExchange) || void 0 === e || e.resetKeys());
        "TURBOPACK unreachable";
        var e;
    }
    createChannel() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                return a(this, void 0, void 0, function*() {
                    var t, n, r;
                    if (io.SocketService(`[SocketService: createChannel()] context=${e.state.context}`), e.state.socket || e.initSocket(), null === (t = e.state.socket) || void 0 === t ? void 0 : t.connected) throw new Error("socket already connected");
                    null === (n = e.state.socket) || void 0 === n || n.connect(), e.state.manualDisconnect = !1, e.state.isOriginator = !0;
                    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                    e.state.channelId = i, No(e, i), yield new Promise((t, n)=>{
                        var r;
                        null === (r = e.state.socket) || void 0 === r || r.emit(bo.JOIN_CHANNEL, {
                            channelId: i,
                            context: `${e.state.context}createChannel`,
                            clientType: "dapp"
                        }, (r, i)=>a(this, void 0, void 0, function*() {
                                try {
                                    yield xo(e, r, i), t();
                                } catch (e) {
                                    n(e);
                                }
                            }));
                    });
                    const s = null === (r = e.state.keyExchange) || void 0 === r ? void 0 : r.getKeyInfo();
                    return {
                        channelId: i,
                        pubKey: (null == s ? void 0 : s.ecies.public) || "",
                        privKey: (null == s ? void 0 : s.ecies.private) || ""
                    };
                });
            }(this);
        });
    }
    connectToChannel({ channelId: e, withKeyExchange: t = !1, authorized: n }) {
        return function(e) {
            return a(this, arguments, void 0, function*({ options: e, instance: t }) {
                const { channelId: n, authorized: r, withKeyExchange: i } = e, { state: o, remote: s } = t, { isOriginator: c = !1, socket: l, keyExchange: d } = o, { channelConfig: u } = s.state;
                if (null == l ? void 0 : l.connected) throw new Error("socket already connected");
                if (c && (null == u ? void 0 : u.relayPersistence)) {
                    const { localKey: e, otherKey: t } = u;
                    e && t && (null == d || d.setRelayPersistence({
                        localKey: e,
                        otherKey: t
                    }));
                }
                return Object.assign(o, {
                    manualDisconnect: !1,
                    withKeyExchange: i,
                    isOriginator: c,
                    channelId: n
                }), null == l || l.connect(), No(t, n), !c && r && (null == d || d.setKeysExchanged(!0), Object.assign(s.state, {
                    ready: !0,
                    authorized: !0
                })), new Promise((e)=>{
                    var i;
                    const s = null === (i = null == d ? void 0 : d.getKeyInfo()) || void 0 === i ? void 0 : i.ecies.public;
                    null == l || l.emit(bo.JOIN_CHANNEL, {
                        channelId: n,
                        context: `${o.context}_connectToChannel`,
                        clientType: c ? "dapp" : "wallet",
                        publicKey: r && !c ? s : void 0
                    }, (n, r)=>a(this, void 0, void 0, function*() {
                            yield xo(t, n, r), e();
                        }));
                });
            });
        }({
            options: {
                channelId: e,
                withKeyExchange: t,
                authorized: n
            },
            instance: this
        });
    }
    getKeyInfo() {
        return this.state.keyExchange.getKeyInfo();
    }
    keyCheck() {
        var e, t;
        null === (t = (e = this).state.socket) || void 0 === t || t.emit(bo.MESSAGE, {
            id: e.state.channelId,
            context: e.state.context,
            message: {
                type: Eo.KEY_HANDSHAKE_CHECK,
                pubkey: e.getKeyInfo().ecies.otherPubKey
            }
        });
    }
    getKeyExchange() {
        return this.state.keyExchange;
    }
    sendMessage(e) {
        return a(this, void 0, void 0, function*() {
            return function(e, t) {
                return a(this, void 0, void 0, function*() {
                    var n, r, i;
                    if (!e.state.channelId) throw io.SocketService("handleSendMessage: no channelId - Create a channel first"), new Error("Create a channel first");
                    if (io.SocketService(`[SocketService: handleSendMessage()] context=${e.state.context} areKeysExchanged=${null === (n = e.state.keyExchange) || void 0 === n ? void 0 : n.areKeysExchanged()}`, t), null === (r = null == t ? void 0 : t.type) || void 0 === r ? void 0 : r.startsWith("key_handshake")) return function(e, t) {
                        var n;
                        io.SocketService(`[SocketService: handleKeyHandshake()] context=${e.state.context}`, t), null === (n = e.state.socket) || void 0 === n || n.emit(bo.MESSAGE, {
                            id: e.state.channelId,
                            context: e.state.context,
                            clientType: e.state.isOriginator ? "dapp" : "wallet",
                            message: t
                        });
                    }(e, t), !0;
                    !function(e, t) {
                        var n;
                        if (!(null === (n = e.state.keyExchange) || void 0 === n ? void 0 : n.areKeysExchanged()) && !e.remote.state.relayPersistence) throw io.SocketService(`[SocketService: validateKeyExchange()] context=${e.state.context} ERROR keys not exchanged`, t), new Error("Keys not exchanged BBB");
                    }(e, t), function(e, t) {
                        var n;
                        const r = null !== (n = null == t ? void 0 : t.method) && void 0 !== n ? n : "", i = null == t ? void 0 : t.id;
                        e.state.isOriginator && i && (e.state.rpcMethodTracker[i] = {
                            id: i,
                            timestamp: Date.now(),
                            method: r
                        }, e.emit(bo.RPC_UPDATE, e.state.rpcMethodTracker[i]));
                    }(e, t);
                    const o = yield Ro(e, t);
                    return e.remote.state.analytics && e.remote.state.isOriginator && t.method && Lo.includes(t.method.toLowerCase()) && co({
                        id: null !== (i = e.remote.state.channelId) && void 0 !== i ? i : "",
                        event: So.SDK_RPC_REQUEST,
                        params: {
                            method: t.method,
                            from: "mobile"
                        }
                    }, e.remote.state.communicationServerUrl).catch((e)=>{}), (function(e, t) {
                        return a(this, void 0, void 0, function*() {
                            var n;
                            const r = null == t ? void 0 : t.id, i = null !== (n = null == t ? void 0 : t.method) && void 0 !== n ? n : "";
                            if (e.state.isOriginator && r) try {
                                const n = Ao(r, e.state.rpcMethodTracker, 200).then((e)=>({
                                        type: Po.RPC_CHECK,
                                        result: e
                                    })), o = (()=>a(this, void 0, void 0, function*() {
                                        const t = yield ((e)=>a(void 0, [
                                                e
                                            ], void 0, function*({ rpcId: e, instance: t }) {
                                                for(; t.state.lastRpcId === e || void 0 === t.state.lastRpcId;)yield Mo(200);
                                                return t.state.lastRpcId;
                                            }))({
                                            instance: e,
                                            rpcId: r
                                        }), n = yield Ao(t, e.state.rpcMethodTracker, 200);
                                        return {
                                            type: Po.SKIPPED_RPC,
                                            result: n
                                        };
                                    }))(), s = yield Promise.race([
                                    n,
                                    o
                                ]);
                                if (s.type === Po.RPC_CHECK) {
                                    const e = s.result;
                                    io.SocketService(`[SocketService:handleRpcReplies()] id=${t.id} ${i} ( ${e.elapsedTime} ms)`, e.result);
                                } else {
                                    if (s.type !== Po.SKIPPED_RPC) throw new Error(`Error handling RPC replies for ${r}`);
                                    {
                                        const t = Object.assign(Object.assign({}, e.state.rpcMethodTracker[r]), {
                                            error: new Error("SDK_CONNECTION_ISSUE")
                                        });
                                        e.emit(bo.RPC_UPDATE, t);
                                        const n = {
                                            data: Object.assign(Object.assign({}, t), {
                                                jsonrpc: "2.0"
                                            }),
                                            name: "metamask-provider"
                                        };
                                        e.emit(bo.MESSAGE, {
                                            message: n
                                        });
                                    }
                                }
                            } catch (e) {
                                throw e;
                            }
                        });
                    })(e, t).catch((e)=>{}), o;
                });
            }(this, e);
        });
    }
    ping() {
        return function(e) {
            return a(this, void 0, void 0, function*() {
                var t, n;
                io.SocketService(`[SocketService: ping()] context=${e.state.context} originator=${e.state.isOriginator} keysExchanged=${null === (t = e.state.keyExchange) || void 0 === t ? void 0 : t.areKeysExchanged()}`), null === (n = e.state.socket) || void 0 === n || n.emit(Co.PING, {
                    id: e.state.channelId,
                    context: "ping",
                    clientType: e.remote.state.isOriginator ? "dapp" : "wallet",
                    message: ""
                });
            });
        }(this);
    }
    pause() {
        return function(e) {
            return a(this, void 0, void 0, function*() {
                var t, n;
                io.SocketService(`[SocketService: pause()] context=${e.state.context}`), e.state.manualDisconnect = !0, (null === (t = e.state.keyExchange) || void 0 === t ? void 0 : t.areKeysExchanged()) && (yield e.sendMessage({
                    type: Co.PAUSE
                })), null === (n = e.state.socket) || void 0 === n || n.disconnect();
            });
        }(this);
    }
    isConnected() {
        var e;
        return null === (e = this.state.socket) || void 0 === e ? void 0 : e.connected;
    }
    resume() {
        return function(e) {
            return a(this, void 0, void 0, function*() {
                const { state: t, remote: n } = e, { socket: r, channelId: i, context: o, keyExchange: s, isOriginator: c } = t, { isOriginator: l } = n.state;
                if (io.SocketService(`[SocketService: resume()] channelId=${i} context=${o} connected=${null == r ? void 0 : r.connected} manualDisconnect=${t.manualDisconnect} resumed=${t.resumed} keysExchanged=${null == s ? void 0 : s.areKeysExchanged()}`), !i) throw io.SocketService("[SocketService: resume()] channelId is not defined"), new Error("ChannelId is not defined");
                (null == r ? void 0 : r.connected) ? (io.SocketService("[SocketService: resume()] already connected."), r.emit(Co.PING, {
                    id: i,
                    clientType: l ? "dapp" : "wallet",
                    context: "on_channel_config",
                    message: ""
                }), n.hasRelayPersistence() || (null == s ? void 0 : s.areKeysExchanged()) || (c ? yield e.sendMessage({
                    type: Co.READY
                }) : null == s || s.start({
                    isOriginator: !1
                }))) : (null == r || r.connect(), io.SocketService(`[SocketService: resume()] after connecting socket --\x3e connected=${null == r ? void 0 : r.connected}`), null == r || r.emit(bo.JOIN_CHANNEL, {
                    channelId: i,
                    context: `${o}_resume`,
                    clientType: l ? "dapp" : "wallet"
                }, (t, n)=>a(this, void 0, void 0, function*() {
                        try {
                            yield xo(e, t, n);
                        } catch (e) {}
                    }))), t.manualDisconnect = !1, t.resumed = !0;
            });
        }(this);
    }
    getRPCMethodTracker() {
        return this.state.rpcMethodTracker;
    }
    disconnect(e) {
        return function(e, t) {
            var n, r, i, o, s;
            io.SocketService(`[SocketService: disconnect()] context=${e.state.context}`, t), (null == t ? void 0 : t.terminate) && (null === (r = (n = e.state).removeFocusListener) || void 0 === r || r.call(n), e.state.channelId = t.channelId, null === (i = e.state.socket) || void 0 === i || i.removeAllListeners(), null === (o = e.state.keyExchange) || void 0 === o || o.clean(), e.remote.state.ready = !1, e.state.socket = void 0, e.state.rpcMethodTracker = {}), e.state.manualDisconnect = !0, null === (s = e.state.socket) || void 0 === s || s.disconnect();
        }(this, e);
    }
}
var $o, Bo, Ko;
function jo(e) {
    return ()=>a(this, void 0, void 0, function*() {
            var t, n, r;
            const { state: i } = e;
            if (i.authorized) return;
            yield (()=>a(this, void 0, void 0, function*() {
                    for(; !i.walletInfo;)yield Mo(500);
                }))();
            const o = "7.3".localeCompare((null === (t = i.walletInfo) || void 0 === t ? void 0 : t.version) || "");
            if (io.RemoteCommunication(`[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' version=${null === (n = i.walletInfo) || void 0 === n ? void 0 : n.version} compareValue=${o}`), 1 !== o) return;
            const s = i.platformType === Bo.MobileWeb || i.platformType === Bo.ReactNative || i.platformType === Bo.MetaMaskMobileWebview;
            io.RemoteCommunication(`[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' platform=${i.platformType} secure=${s} channel=${i.channelId} walletVersion=${null === (r = i.walletInfo) || void 0 === r ? void 0 : r.version}`), s && (i.authorized = !0, e.emit(bo.AUTHORIZED));
        });
}
function Uo(e) {
    return (t)=>{
        const { state: n } = e;
        io.RemoteCommunication(`[RemoteCommunication: handleChannelCreatedEvent()] context=${n.context} on 'channel_created' channelId=${t}`), e.emit(bo.CHANNEL_CREATED, t);
    };
}
function Ho(e, t) {
    return ()=>{
        var n, r, i, o;
        const { state: s } = e;
        io.RemoteCommunication(`[RemoteCommunication: handleClientsConnectedEvent()] on 'clients_connected' channel=${s.channelId} keysExchanged=${null === (r = null === (n = s.communicationLayer) || void 0 === n ? void 0 : n.getKeyInfo()) || void 0 === r ? void 0 : r.keysExchanged}`), s.analytics && co(Object.assign(Object.assign({
            id: null !== (i = s.channelId) && void 0 !== i ? i : "",
            event: s.reconnection ? So.RECONNECT : s.isOriginator ? So.REQUEST : So.REQUEST_MOBILE
        }, s.originatorInfo), {
            commLayer: t,
            sdkVersion: s.sdkVersion,
            walletVersion: null === (o = s.walletInfo) || void 0 === o ? void 0 : o.version,
            commLayerVersion: uo.version
        }), s.communicationServerUrl).catch((e)=>{}), s.clientsConnected = !0, s.originatorInfoSent = !1, e.emit(bo.CLIENTS_CONNECTED);
    };
}
function Fo(e) {
    return (t)=>{
        const { state: n } = e;
        io.RemoteCommunication(`[RemoteCommunication: handleClientsDisconnectedEvent()] context=${n.context} on 'clients_disconnected' channelId=${t}`), n.relayPersistence || (n.clientsConnected = !1, n.ready = !1, n.authorized = !1), e.emit(bo.CLIENTS_DISCONNECTED, n.channelId), e.setConnectionStatus(vo.DISCONNECTED);
    };
}
function zo(e) {
    return (t)=>{
        var n;
        const { state: r } = e;
        if (io.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] context=${r.context} on 'clients_waiting' numberUsers=${t} ready=${r.ready} autoStarted=${r.originatorConnectStarted}`), e.setConnectionStatus(vo.WAITING), e.emit(bo.CLIENTS_WAITING, t), r.originatorConnectStarted) {
            io.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] on 'clients_waiting' watch autoStarted=${r.originatorConnectStarted} timeout`, r.autoConnectOptions);
            const t = (null === (n = r.autoConnectOptions) || void 0 === n ? void 0 : n.timeout) || 3e3, i = setTimeout(()=>{
                io.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] setTimeout(${t}) terminate channelConfig`, r.autoConnectOptions), r.originatorConnectStarted = !1, r.ready || e.setConnectionStatus(vo.TIMEOUT), clearTimeout(i);
            }, t);
        }
    };
}
function qo(e, t) {
    return (n)=>{
        var r, i, o, s, a, c, l, d;
        const { state: u } = e;
        if (io.RemoteCommunication(`[RemoteCommunication: handleKeysExchangedEvent()] context=${u.context} on commLayer.'keys_exchanged' channel=${u.channelId}`, n), null === (i = null === (r = u.communicationLayer) || void 0 === r ? void 0 : r.getKeyInfo()) || void 0 === i ? void 0 : i.keysExchanged) {
            const t = Object.assign(Object.assign({}, u.channelConfig), {
                channelId: null !== (o = u.channelId) && void 0 !== o ? o : "",
                validUntil: (null === (s = u.channelConfig) || void 0 === s ? void 0 : s.validUntil) || po,
                localKey: u.communicationLayer.getKeyInfo().ecies.private,
                otherKey: u.communicationLayer.getKeyInfo().ecies.otherPubKey
            });
            null === (a = u.storageManager) || void 0 === a || a.persistChannelConfig(t).catch((e)=>{}), e.setConnectionStatus(vo.LINKED);
        }
        !function(e, t) {
            var n, r, i, o, s, a, c, l;
            const { state: d } = e;
            io.RemoteCommunication(`[RemoteCommunication: setLastActiveDate()] channel=${d.channelId}`, t);
            const u = Object.assign(Object.assign({}, d.channelConfig), {
                channelId: null !== (n = d.channelId) && void 0 !== n ? n : "",
                validUntil: null !== (i = null === (r = d.channelConfig) || void 0 === r ? void 0 : r.validUntil) && void 0 !== i ? i : 0,
                relayPersistence: d.relayPersistence,
                localKey: null === (s = null === (o = d.communicationLayer) || void 0 === o ? void 0 : o.state.keyExchange) || void 0 === s ? void 0 : s.getKeyInfo().ecies.private,
                otherKey: null === (c = null === (a = d.communicationLayer) || void 0 === a ? void 0 : a.state.keyExchange) || void 0 === c ? void 0 : c.getKeyInfo().ecies.otherPubKey,
                lastActive: t.getTime()
            });
            null === (l = d.storageManager) || void 0 === l || l.persistChannelConfig(u);
        }(e, new Date), u.analytics && u.channelId && co(Object.assign(Object.assign({
            id: u.channelId,
            event: n.isOriginator ? So.CONNECTED : So.CONNECTED_MOBILE
        }, u.originatorInfo), {
            sdkVersion: u.sdkVersion,
            commLayer: t,
            commLayerVersion: uo.version,
            walletVersion: null === (c = u.walletInfo) || void 0 === c ? void 0 : c.version
        }), u.communicationServerUrl).catch((e)=>{}), u.isOriginator = n.isOriginator, n.isOriginator || (null === (l = u.communicationLayer) || void 0 === l || l.sendMessage({
            type: Co.READY
        }), u.ready = !0, u.paused = !1), n.isOriginator && !u.originatorInfoSent && (null === (d = u.communicationLayer) || void 0 === d || d.sendMessage({
            type: Co.ORIGINATOR_INFO,
            originatorInfo: u.originatorInfo,
            originator: u.originatorInfo
        }), u.originatorInfoSent = !0);
    };
}
function Vo(e) {
    return (t)=>{
        let n = t;
        t.message && (n = n.message), function(e, t) {
            const { state: n } = t;
            if (io.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] context=${n.context} on 'message' typeof=${typeof e}`, e), t.state.ready = !0, n.isOriginator || e.type !== Co.ORIGINATOR_INFO) if (n.isOriginator && e.type === Co.WALLET_INFO) !function(e, t) {
                const { state: n } = e;
                n.walletInfo = t.walletInfo, n.paused = !1;
            }(t, e);
            else {
                if (n.isOriginator && e.type === Co.WALLET_INIT) (function(e, t) {
                    return a(this, void 0, void 0, function*() {
                        var n, r, i;
                        const { state: o } = e;
                        if (o.isOriginator) {
                            const o = t.data || {};
                            if ("object" == typeof o && "accounts" in o && "chainId" in o && "walletKey" in o) try {
                                const { channelConfig: t } = e.state;
                                if (io.RemoteCommunication("WALLET_INIT: channelConfig", JSON.stringify(t, null, 2)), t) {
                                    const s = o.accounts, a = o.chainId, c = o.walletKey;
                                    let l, d = !1;
                                    "deeplinkProtocol" in o && (d = Boolean(o.deeplinkProtocol), e.state.deeplinkProtocolAvailable = d), "walletVersion" in o && (l = o.walletVersion), yield null === (n = e.state.storageManager) || void 0 === n ? void 0 : n.persistChannelConfig(Object.assign(Object.assign({}, t), {
                                        otherKey: c,
                                        walletVersion: l,
                                        deeplinkProtocolAvailable: d,
                                        relayPersistence: !0
                                    })), yield null === (r = e.state.storageManager) || void 0 === r ? void 0 : r.persistAccounts(s), yield null === (i = e.state.storageManager) || void 0 === i ? void 0 : i.persistChainId(a);
                                }
                                e.emit(bo.WALLET_INIT, {
                                    accounts: o.accounts,
                                    chainId: o.chainId
                                });
                            } catch (n) {}
                        }
                    });
                })(t, e).catch((e)=>{
                    io.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] error=${e}`);
                });
                else if (e.type === Co.TERMINATE) (function(e) {
                    return a(this, void 0, void 0, function*() {
                        const { state: t } = e;
                        t.isOriginator && (yield Jo({
                            options: {
                                terminate: !0,
                                sendMessage: !1
                            },
                            instance: e
                        }), e.emit(bo.TERMINATE));
                    });
                })(t).catch((e)=>{
                    io.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] error=${e}`);
                });
                else if (e.type === Co.PAUSE) !function(e) {
                    const { state: t } = e;
                    t.paused = !0, e.setConnectionStatus(vo.PAUSED);
                }(t);
                else if (e.type === Co.READY && n.isOriginator) !function(e) {
                    const { state: t } = e;
                    e.setConnectionStatus(vo.LINKED);
                    const n = t.paused;
                    t.paused = !1, e.emit(bo.CLIENTS_READY, {
                        isOriginator: t.isOriginator,
                        walletInfo: t.walletInfo
                    }), n && (t.authorized = !0, e.emit(bo.AUTHORIZED));
                }(t);
                else {
                    if (e.type === Co.OTP && n.isOriginator) return void function(e, t) {
                        var n;
                        const { state: r } = e;
                        e.emit(bo.OTP, t.otpAnswer), 1 === "6.6".localeCompare((null === (n = r.walletInfo) || void 0 === n ? void 0 : n.version) || "") && e.emit(bo.SDK_RPC_CALL, {
                            method: mo.ETH_REQUESTACCOUNTS,
                            params: []
                        });
                    }(t, e);
                    e.type === Co.AUTHORIZED && n.isOriginator && function(e) {
                        const { state: t } = e;
                        t.authorized = !0, e.emit(bo.AUTHORIZED);
                    }(t);
                }
                t.emit(bo.MESSAGE, e);
            }
            else !function(e, t) {
                var n;
                const { state: r } = e;
                null === (n = r.communicationLayer) || void 0 === n || n.sendMessage({
                    type: Co.WALLET_INFO,
                    walletInfo: r.walletInfo
                }), r.originatorInfo = t.originatorInfo || t.originator, e.emit(bo.CLIENTS_READY, {
                    isOriginator: r.isOriginator,
                    originatorInfo: r.originatorInfo
                }), r.paused = !1;
            }(t, e);
        }(n, e);
    };
}
function Wo(e) {
    return ()=>{
        const { state: t } = e;
        io.RemoteCommunication("[RemoteCommunication: handleSocketReconnectEvent()] on 'socket_reconnect' -- reset key exchange status / set ready to false"), t.ready = !1, t.authorized = !1, yo(t), e.emitServiceStatusEvent({
            context: "socket_reconnect"
        });
    };
}
function Go(e) {
    return ()=>{
        const { state: t } = e;
        io.RemoteCommunication("[RemoteCommunication: handleSocketDisconnectedEvent()] on 'socket_Disconnected' set ready to false"), t.ready = !1;
    };
}
function Zo(e) {
    return ()=>a(this, void 0, void 0, function*() {
            var t, n, r, i, o, s, a;
            const { state: c } = e;
            io.RemoteCommunication(`[RemoteCommunication: handleFullPersistenceEvent()] context=${c.context}`), e.state.ready = !0, e.state.clientsConnected = !0, e.state.authorized = !0, e.state.relayPersistence = !0, null === (t = e.state.communicationLayer) || void 0 === t || t.getKeyExchange().setKeysExchanged(!0), e.emit(bo.KEYS_EXCHANGED, {
                keysExchanged: !0,
                isOriginator: !0
            }), e.emit(bo.AUTHORIZED), e.emit(bo.CLIENTS_READY), e.emit(bo.CHANNEL_PERSISTENCE);
            try {
                c.channelConfig = Object.assign(Object.assign({}, c.channelConfig), {
                    localKey: null === (n = c.communicationLayer) || void 0 === n ? void 0 : n.getKeyExchange().getKeyInfo().ecies.private,
                    otherKey: null === (r = c.communicationLayer) || void 0 === r ? void 0 : r.getKeyExchange().getOtherPublicKey(),
                    channelId: null !== (i = c.channelId) && void 0 !== i ? i : "",
                    validUntil: null !== (s = null === (o = c.channelConfig) || void 0 === o ? void 0 : o.validUntil) && void 0 !== s ? s : po,
                    relayPersistence: !0
                }), yield null === (a = c.storageManager) || void 0 === a ? void 0 : a.persistChannelConfig(c.channelConfig);
            } catch (t) {}
        });
}
function Yo({ communicationLayerPreference: e, otherPublicKey: t, reconnect: n, ecies: r, communicationServerUrl: i = ho, instance: o }) {
    var s, a, c, l, d, u, h, f, p, g, m;
    const { state: y } = o;
    if (io.RemoteCommunication("[initCommunicationLayer()] ", JSON.stringify(y, null, 2)), e !== $o.SOCKET) throw new Error("Invalid communication protocol");
    y.communicationLayer = new Do({
        communicationLayerPreference: e,
        otherPublicKey: t,
        reconnect: n,
        transports: y.transports,
        communicationServerUrl: i,
        context: y.context,
        ecies: r,
        logging: y.logging,
        remote: o
    });
    let v = "undefined" != typeof document && document.URL || "", b = "undefined" != typeof document && document.title || "";
    (null === (s = y.dappMetadata) || void 0 === s ? void 0 : s.url) && (v = y.dappMetadata.url), (null === (a = y.dappMetadata) || void 0 === a ? void 0 : a.name) && (b = y.dappMetadata.name);
    const w = null !== (u = null !== (l = null === (c = y.dappMetadata) || void 0 === c ? void 0 : c.name) && void 0 !== l ? l : null === (d = y.dappMetadata) || void 0 === d ? void 0 : d.url) && void 0 !== u ? u : "N/A", E = "undefined" != typeof window && void 0 !== window.location && null !== (h = window.location.hostname) && void 0 !== h ? h : w, C = {
        url: v,
        title: b,
        source: null === (f = y.dappMetadata) || void 0 === f ? void 0 : f.source,
        dappId: E,
        icon: (null === (p = y.dappMetadata) || void 0 === p ? void 0 : p.iconUrl) || (null === (g = y.dappMetadata) || void 0 === g ? void 0 : g.base64Icon),
        platform: y.platformType,
        apiVersion: uo.version,
        connector: null === (m = y.dappMetadata) || void 0 === m ? void 0 : m.connector
    };
    y.originatorInfo = C;
    const S = {
        [bo.AUTHORIZED]: jo(o),
        [bo.MESSAGE]: Vo(o),
        [bo.CHANNEL_PERSISTENCE]: Zo(o),
        [bo.CLIENTS_CONNECTED]: Ho(o, e),
        [bo.KEYS_EXCHANGED]: qo(o, e),
        [bo.SOCKET_DISCONNECTED]: Go(o),
        [bo.SOCKET_RECONNECT]: Wo(o),
        [bo.CLIENTS_DISCONNECTED]: Fo(o),
        [bo.KEY_INFO]: ()=>{},
        [bo.CHANNEL_CREATED]: Uo(o),
        [bo.CLIENTS_WAITING]: zo(o),
        [bo.RPC_UPDATE]: (e)=>{
            o.emit(bo.RPC_UPDATE, e);
        }
    };
    for (const [t, n] of Object.entries(S))try {
        y.communicationLayer.on(t, n);
    } catch (e) {}
}
function Jo(e) {
    return a(this, arguments, void 0, function*({ options: e, instance: t }) {
        const { state: n } = t;
        return io.RemoteCommunication(`[RemoteCommunication: disconnect()] channel=${n.channelId}`, e), new Promise((r, i)=>{
            var s, a, c, l, d, u;
            (null == e ? void 0 : e.terminate) ? (t.state.ready && co({
                id: null !== (s = t.state.channelId) && void 0 !== s ? s : "",
                event: So.TERMINATED
            }, t.state.communicationServerUrl).catch((e)=>{}), n.ready = !1, n.paused = !1, null === (a = n.storageManager) || void 0 === a || a.terminate(null !== (c = n.channelId) && void 0 !== c ? c : ""), t.state.terminated = !0, e.sendMessage ? (null === (l = n.communicationLayer) || void 0 === l ? void 0 : l.getKeyInfo().keysExchanged) && t.state.communicationLayer && Ro(t.state.communicationLayer, {
                type: Co.TERMINATE
            }).then(()=>{
                r(!0);
            }).catch((e)=>{
                i(e);
            }) : r(!0), n.authorized = !1, n.relayPersistence = !1, n.channelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(), e.channelId = n.channelId, n.channelConfig = void 0, n.originatorConnectStarted = !1, null === (d = n.communicationLayer) || void 0 === d || d.disconnect(e), t.setConnectionStatus(vo.TERMINATED)) : (null === (u = n.communicationLayer) || void 0 === u || u.disconnect(e), t.setConnectionStatus(vo.DISCONNECTED), r(!0));
        });
    });
}
($o || ($o = {})).SOCKET = "socket", function(e) {
    e.NonBrowser = "nodejs", e.MetaMaskMobileWebview = "in-app-browser", e.DesktopWeb = "web-desktop", e.MobileWeb = "web-mobile", e.ReactNative = "react-native";
}(Bo || (Bo = {}));
class Xo extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter2$40$6$2e$4$2e$9$2f$node_modules$2f$eventemitter2$2f$lib$2f$eventemitter2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventEmitter2"] {
    constructor(e){
        super(), this.state = {
            ready: !1,
            authorized: !1,
            isOriginator: !1,
            terminated: !1,
            protocolVersion: 1,
            paused: !1,
            deeplinkProtocolAvailable: !1,
            platformType: "metamask-mobile",
            analytics: !1,
            reconnection: !1,
            originatorInfoSent: !1,
            communicationServerUrl: ho,
            context: "",
            persist: !1,
            clientsConnected: !1,
            sessionDuration: po,
            originatorConnectStarted: !1,
            debug: !1,
            _connectionStatus: vo.DISCONNECTED
        }, this._options = e;
        const { platformType: n, communicationLayerPreference: r, otherPublicKey: i, reconnect: o, walletInfo: s, dappMetadata: a, protocolVersion: c, transports: l, context: d, relayPersistence: u, ecies: h, analytics: f = !1, storage: p, sdkVersion: g, communicationServerUrl: m = ho, logging: y, autoConnect: v = {
            timeout: go
        } } = e;
        this.state.otherPublicKey = i, this.state.dappMetadata = a, this.state.walletInfo = s, this.state.transports = l, this.state.platformType = n, this.state.analytics = f, this.state.protocolVersion = null != c ? c : 1, this.state.isOriginator = !i, this.state.relayPersistence = u, this.state.communicationServerUrl = m, this.state.context = d, this.state.terminated = !1, this.state.sdkVersion = g, this.setMaxListeners(50), this.setConnectionStatus(vo.DISCONNECTED), (null == p ? void 0 : p.duration) && (this.state.sessionDuration = po), this.state.storageOptions = p, this.state.autoConnectOptions = v, this.state.debug = !0 === (null == y ? void 0 : y.remoteLayer), !0 === (null == y ? void 0 : y.remoteLayer) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].enable("RemoteCommunication:Layer"), !0 === (null == y ? void 0 : y.serviceLayer) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].enable("SocketService:Layer"), !0 === (null == y ? void 0 : y.eciesLayer) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].enable("ECIES:Layer"), !0 === (null == y ? void 0 : y.keyExchangeLayer) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].enable("KeyExchange:Layer"), this.state.logging = y, (null == p ? void 0 : p.storageManager) && (this.state.storageManager = p.storageManager), io.RemoteCommunication(`[RemoteCommunication: constructor()] protocolVersion=${c} relayPersistence=${u} isOriginator=${this.state.isOriginator} communicationLayerPreference=${r} otherPublicKey=${i} reconnect=${o}`), this.state.isOriginator || Yo({
            communicationLayerPreference: r,
            otherPublicKey: i,
            reconnect: o,
            ecies: h,
            communicationServerUrl: m,
            instance: this
        }), this.emitServiceStatusEvent({
            context: "constructor"
        });
    }
    initFromDappStorage() {
        return a(this, void 0, void 0, function*() {
            var e;
            if (this.state.storageManager) {
                const t = yield this.state.storageManager.getPersistedChannelConfig({});
                t && (this.state.channelConfig = t, this.state.channelId = t.channelId, this.state.deeplinkProtocolAvailable = null !== (e = t.deeplinkProtocolAvailable) && void 0 !== e && e, t.relayPersistence && (this.state.authorized = !0, this.state.ready = !0, this.setConnectionStatus(vo.LINKED), yield this.connectToChannel({
                    channelId: t.channelId
                })));
            }
            Yo({
                communicationLayerPreference: $o.SOCKET,
                otherPublicKey: this.state.otherPublicKey,
                reconnect: this._options.reconnect,
                ecies: this._options.ecies,
                communicationServerUrl: this.state.communicationServerUrl,
                instance: this
            });
        });
    }
    originatorSessionConnect() {
        return a(this, void 0, void 0, function*() {
            return yield function(e) {
                return a(this, void 0, void 0, function*() {
                    var t;
                    const { state: n } = e;
                    if (!n.storageManager) return void io.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] no storage manager defined - skip");
                    const r = yield n.storageManager.getPersistedChannelConfig({});
                    if (io.RemoteCommunication(`[RemoteCommunication: originatorSessionConnect()] autoStarted=${n.originatorConnectStarted} channelConfig`, r), null === (t = n.communicationLayer) || void 0 === t ? void 0 : t.isConnected()) return io.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] socket already connected - skip"), r;
                    if (r) {
                        if (r.validUntil > Date.now()) return n.channelConfig = r, n.originatorConnectStarted = !0, n.channelId = null == r ? void 0 : r.channelId, n.reconnection = !0, r;
                        io.RemoteCommunication("[RemoteCommunication: autoConnect()] Session has expired");
                    }
                    n.originatorConnectStarted = !1;
                });
            }(this);
        });
    }
    generateChannelIdConnect() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                return a(this, void 0, void 0, function*() {
                    var t, n, r, i, o, s;
                    if (!e.communicationLayer) throw new Error("communication layer not initialized");
                    if (e.ready) throw new Error("Channel already connected");
                    if (e.channelId && (null === (t = e.communicationLayer) || void 0 === t ? void 0 : t.isConnected())) return e.channelConfig = Object.assign(Object.assign({}, e.channelConfig), {
                        channelId: e.channelId,
                        validUntil: Date.now() + e.sessionDuration
                    }), null === (n = e.storageManager) || void 0 === n || n.persistChannelConfig(e.channelConfig), {
                        channelId: e.channelId,
                        privKey: null === (i = null === (r = e.communicationLayer) || void 0 === r ? void 0 : r.getKeyInfo()) || void 0 === i ? void 0 : i.ecies.private,
                        pubKey: null === (s = null === (o = e.communicationLayer) || void 0 === o ? void 0 : o.getKeyInfo()) || void 0 === s ? void 0 : s.ecies.public
                    };
                    io.RemoteCommunication("[RemoteCommunication: generateChannelId()]");
                    const a = yield e.communicationLayer.createChannel();
                    io.RemoteCommunication("[RemoteCommunication: generateChannelId()] channel created", a);
                    const c = Object.assign(Object.assign({}, e.channelConfig), {
                        channelId: a.channelId,
                        localKey: a.privKey,
                        validUntil: Date.now() + e.sessionDuration
                    });
                    return e.channelId = a.channelId, e.channelConfig = c, {
                        channelId: e.channelId,
                        pubKey: a.pubKey,
                        privKey: a.privKey
                    };
                });
            }(this.state);
        });
    }
    clean() {
        return yo(this.state);
    }
    connectToChannel({ channelId: e, withKeyExchange: t, authorized: n }) {
        return function(e) {
            return a(this, arguments, void 0, function*({ channelId: e, withKeyExchange: t, authorized: n, state: r }) {
                var o, s, a;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(e)) throw io.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r.context} invalid channel channelId=${e}`), new Error(`Invalid channel ${e}`);
                if (io.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r.context} channelId=${e} withKeyExchange=${t}`), null === (o = r.communicationLayer) || void 0 === o ? void 0 : o.isConnected()) return void io.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r.context} already connected - interrupt connection.`);
                r.channelId = e, yield null === (s = r.communicationLayer) || void 0 === s ? void 0 : s.connectToChannel({
                    channelId: e,
                    authorized: n,
                    withKeyExchange: t
                });
                const c = Object.assign(Object.assign({}, r.channelConfig), {
                    channelId: e,
                    validUntil: Date.now() + r.sessionDuration
                });
                r.channelConfig = c, null === (a = r.storageManager) || void 0 === a || a.persistChannelConfig(c);
            });
        }({
            channelId: e,
            authorized: n,
            withKeyExchange: t,
            state: this.state
        });
    }
    sendMessage(e) {
        return function(e, t) {
            return a(this, void 0, void 0, function*() {
                var n, r;
                const { state: i } = e;
                io.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i.context} paused=${i.paused} ready=${i.ready} relayPersistence=${i.relayPersistence} authorized=${i.authorized} socket=${null === (n = i.communicationLayer) || void 0 === n ? void 0 : n.isConnected()} clientsConnected=${i.clientsConnected} status=${i._connectionStatus}`, t), i.relayPersistence || i.ready && (null === (r = i.communicationLayer) || void 0 === r ? void 0 : r.isConnected()) && i.clientsConnected || (io.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i.context}  SKIP message waiting for MM mobile readiness.`), yield new Promise((t)=>{
                    e.once(bo.CLIENTS_READY, t);
                }), io.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i.context}  AFTER SKIP / READY -- sending pending message`));
                try {
                    const n = yield function(e, t) {
                        return a(this, void 0, void 0, function*() {
                            return new Promise((n)=>{
                                var r;
                                const { state: i } = e;
                                io.RemoteCommunication(`[RemoteCommunication: handleAuthorization()] context=${i.context} ready=${i.ready} authorized=${i.authorized} method=${t.method}`), !i.isOriginator || i.authorized || i.relayPersistence ? null === (r = i.communicationLayer) || void 0 === r || r.sendMessage(t).then((e)=>{
                                    n(e);
                                }).catch((e)=>{
                                    n(!1);
                                }) : e.once(bo.AUTHORIZED, ()=>{
                                    var e;
                                    io.RemoteCommunication(`[RemoteCommunication: handleAuthorization()] context=${i.context}  AFTER SKIP / AUTHORIZED -- sending pending message`), null === (e = i.communicationLayer) || void 0 === e || e.sendMessage(t).then((e)=>{
                                        n(e);
                                    }).catch((e)=>{
                                        n(!1);
                                    });
                                });
                            });
                        });
                    }(e, t);
                    return n;
                } catch (e) {
                    throw e;
                }
            });
        }(this, e);
    }
    testStorage() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                return a(this, void 0, void 0, function*() {
                    var t;
                    const n = yield null === (t = e.storageManager) || void 0 === t ? void 0 : t.getPersistedChannelConfig();
                    io.RemoteCommunication("[RemoteCommunication: testStorage()] res", n);
                });
            }(this.state);
        });
    }
    hasDeeplinkProtocol() {
        return this.state.deeplinkProtocolAvailable;
    }
    getChannelConfig() {
        return this.state.channelConfig;
    }
    isReady() {
        return this.state.ready;
    }
    isConnected() {
        var e;
        return null === (e = this.state.communicationLayer) || void 0 === e ? void 0 : e.isConnected();
    }
    isAuthorized() {
        return this.state.authorized;
    }
    isPaused() {
        return this.state.paused;
    }
    getCommunicationLayer() {
        return this.state.communicationLayer;
    }
    ping() {
        return a(this, void 0, void 0, function*() {
            var e;
            io.RemoteCommunication(`[RemoteCommunication: ping()] channel=${this.state.channelId}`), yield null === (e = this.state.communicationLayer) || void 0 === e ? void 0 : e.ping();
        });
    }
    testLogger() {
        io.RemoteCommunication(`testLogger() channel=${this.state.channelId}`), io.SocketService(`testLogger() channel=${this.state.channelId}`), io.Ecies(`testLogger() channel=${this.state.channelId}`), io.KeyExchange(`testLogger() channel=${this.state.channelId}`);
    }
    keyCheck() {
        var e;
        io.RemoteCommunication(`[RemoteCommunication: keyCheck()] channel=${this.state.channelId}`), null === (e = this.state.communicationLayer) || void 0 === e || e.keyCheck();
    }
    setConnectionStatus(e) {
        this.state._connectionStatus !== e && (this.state._connectionStatus = e, this.emit(bo.CONNECTION_STATUS, e), this.emitServiceStatusEvent({
            context: "setConnectionStatus"
        }));
    }
    emitServiceStatusEvent(e = {}) {
        this.emit(bo.SERVICE_STATUS, this.getServiceStatus());
    }
    getConnectionStatus() {
        return this.state._connectionStatus;
    }
    getServiceStatus() {
        return {
            originatorInfo: this.state.originatorInfo,
            keyInfo: this.getKeyInfo(),
            connectionStatus: this.state._connectionStatus,
            channelConfig: this.state.channelConfig,
            channelId: this.state.channelId
        };
    }
    getKeyInfo() {
        var e;
        return null === (e = this.state.communicationLayer) || void 0 === e ? void 0 : e.getKeyInfo();
    }
    resetKeys() {
        var e;
        null === (e = this.state.communicationLayer) || void 0 === e || e.resetKeys();
    }
    setOtherPublicKey(e) {
        var t;
        const n = null === (t = this.state.communicationLayer) || void 0 === t ? void 0 : t.getKeyExchange();
        if (!n) throw new Error("KeyExchange is not initialized.");
        n.getOtherPublicKey() !== e && n.setOtherPublicKey(e);
    }
    pause() {
        return a(this, void 0, void 0, function*() {
            var e;
            io.RemoteCommunication(`[RemoteCommunication: pause()] channel=${this.state.channelId}`), yield null === (e = this.state.communicationLayer) || void 0 === e ? void 0 : e.pause(), this.setConnectionStatus(vo.PAUSED);
        });
    }
    getVersion() {
        return uo.version;
    }
    hasRelayPersistence() {
        var e;
        return null !== (e = this.state.relayPersistence) && void 0 !== e && e;
    }
    resume() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                return a(this, void 0, void 0, function*() {
                    var t;
                    const { state: n } = e;
                    io.RemoteCommunication(`[RemoteCommunication: resume()] channel=${n.channelId}`), yield null === (t = n.communicationLayer) || void 0 === t ? void 0 : t.resume(), e.setConnectionStatus(vo.LINKED);
                });
            }(this);
        });
    }
    encrypt(e) {
        var t, n, r;
        const i = null === (t = this.state.communicationLayer) || void 0 === t ? void 0 : t.getKeyExchange(), o = null == i ? void 0 : i.getOtherPublicKey();
        if (!o) throw new Error("KeyExchange not completed");
        return null === (r = null === (n = this.state.communicationLayer) || void 0 === n ? void 0 : n.state.eciesInstance) || void 0 === r ? void 0 : r.encrypt(e, o);
    }
    decrypt(e) {
        var t, n, r;
        if (!(null === (t = this.state.communicationLayer) || void 0 === t ? void 0 : t.state.eciesInstance)) throw new Error("ECIES instance is not initialized");
        return null === (r = null === (n = this.state.communicationLayer) || void 0 === n ? void 0 : n.state.eciesInstance) || void 0 === r ? void 0 : r.decrypt(e);
    }
    getChannelId() {
        return this.state.channelId;
    }
    getRPCMethodTracker() {
        var e;
        return null === (e = this.state.communicationLayer) || void 0 === e ? void 0 : e.getRPCMethodTracker();
    }
    reject({ channelId: e }) {
        return function(e) {
            return a(this, arguments, void 0, function*({ channelId: e, state: t }) {
                var n, r, o;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(e)) throw io.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${t.context} invalid channel channelId=${e}`), new Error(`Invalid channel ${e}`);
                if (t.isOriginator) return void io.RemoteCommunication(`[RemoteCommunication: reject()] context=${t.context} isOriginator=${t.isOriginator} channelId=${e}`);
                const { socket: s } = null !== (r = null === (n = t.communicationLayer) || void 0 === n ? void 0 : n.state) && void 0 !== r ? r : {};
                (null == s ? void 0 : s.connected) || (io.RemoteCommunication(`[RemoteCommunication: reject()] context=${t.context} socket already connected`), null == s || s.connect()), co(Object.assign(Object.assign({
                    id: e,
                    event: So.REJECTED
                }, t.originatorInfo), {
                    sdkVersion: t.sdkVersion,
                    commLayerVersion: uo.version,
                    walletVersion: null === (o = t.walletInfo) || void 0 === o ? void 0 : o.version
                }), t.communicationServerUrl).catch((e)=>{}), yield new Promise((n, r)=>{
                    null == s || s.emit(bo.REJECTED, {
                        channelId: e
                    }, (e, i)=>{
                        io.RemoteCommunication(`[RemoteCommunication: reject()] context=${t.context} socket=${null == s ? void 0 : s.id}`, {
                            error: e,
                            response: i
                        }), e ? r(e) : n(i);
                    });
                });
            });
        }({
            channelId: e,
            state: this.state
        });
    }
    disconnect(e) {
        return a(this, void 0, void 0, function*() {
            return Jo({
                options: e,
                instance: this
            });
        });
    }
}
!function(e) {
    e.RENEW = "renew", e.LINK = "link";
}(Ko || (Ko = {}));
var Qo = "ERC721", es = "ERC1155", ts = {
    errors: {
        disconnected: ()=>"MetaMask: Disconnected from chain. Attempting to connect.",
        permanentlyDisconnected: ()=>"MetaMask: Disconnected from MetaMask background. Page reload required.",
        sendSiteMetadata: ()=>"MetaMask: Failed to send site metadata. This is an internal error, please report this bug.",
        unsupportedSync: (e)=>`MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
        invalidDuplexStream: ()=>"Must provide a Node.js-style duplex stream.",
        invalidNetworkParams: ()=>"MetaMask: Received invalid network parameters. Please report this bug.",
        invalidRequestArgs: ()=>"Expected a single, non-array, object argument.",
        invalidRequestMethod: ()=>"'args.method' must be a non-empty string.",
        invalidRequestParams: ()=>"'args.params' must be an object or array if provided.",
        invalidLoggerObject: ()=>"'args.logger' must be an object if provided.",
        invalidLoggerMethod: (e)=>`'args.logger' must include required method '${e}'.`
    },
    info: {
        connected: (e)=>`MetaMask: Connected to chain with ID "${e}".`
    },
    warnings: {
        chainIdDeprecation: "MetaMask: 'ethereum.chainId' is deprecated and may be removed in the future. Please use the 'eth_chainId' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",
        networkVersionDeprecation: "MetaMask: 'ethereum.networkVersion' is deprecated and may be removed in the future. Please use the 'net_version' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",
        selectedAddressDeprecation: "MetaMask: 'ethereum.selectedAddress' is deprecated and may be removed in the future. Please use the 'eth_accounts' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",
        enableDeprecation: "MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102",
        sendDeprecation: "MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
        events: {
            close: "MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect",
            data: "MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message",
            networkChanged: "MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged",
            notification: "MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message"
        },
        rpc: {
            ethDecryptDeprecation: "MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",
            ethGetEncryptionPublicKeyDeprecation: "MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",
            walletWatchAssetNFTExperimental: "MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle"
        },
        experimentalMethods: "MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning."
    }
};
function ns(e) {
    const t = {
        ethDecryptDeprecation: !1,
        ethGetEncryptionPublicKeyDeprecation: !1,
        walletWatchAssetNFTExperimental: !1
    };
    return (n, r, i)=>{
        t.ethDecryptDeprecation || "eth_decrypt" !== n.method ? t.ethGetEncryptionPublicKeyDeprecation || "eth_getEncryptionPublicKey" !== n.method ? !t.walletWatchAssetNFTExperimental && "wallet_watchAsset" === n.method && [
            Qo,
            es
        ].includes(n.params?.type || "") && (e.warn(ts.warnings.rpc.walletWatchAssetNFTExperimental), t.walletWatchAssetNFTExperimental = !0) : (e.warn(ts.warnings.rpc.ethGetEncryptionPublicKeyDeprecation), t.ethGetEncryptionPublicKeyDeprecation = !0) : (e.warn(ts.warnings.rpc.ethDecryptDeprecation), t.ethDecryptDeprecation = !0), i();
    };
}
var rs = 4294967295, is = Math.floor(Math.random() * rs);
function os() {
    return (e, t, n, r)=>{
        const i = e.id, o = is = (is + 1) % rs;
        e.id = o, t.id = o, n((n)=>{
            e.id = i, t.id = i, n();
        });
    };
}
var ss = (e, t, n)=>{
    if (!t.has(e)) throw TypeError("Cannot " + n);
}, as = (e, t, n)=>(ss(e, t, "read from private field"), n ? n.call(e) : t.get(e)), cs = (e, t, n)=>{
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ls = (e, t, n, r)=>(ss(e, t, "write to private field"), t.set(e, n), n), ds = (e, t, n)=>(ss(e, t, "access private method"), n), us = {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
}, hs = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
};
function fs(e) {
    return Boolean(e) && "object" == typeof e && !Array.isArray(e);
}
var ps = (e, t)=>Object.hasOwnProperty.call(e, t);
class gs extends TypeError {
    constructor(e, t){
        let n;
        const { message: r, explanation: i, ...o } = e, { path: s } = e, a = 0 === s.length ? r : `At path: ${s.join(".")} -- ${r}`;
        super(i ?? a), null != i && (this.cause = a), Object.assign(this, o), this.name = this.constructor.name, this.failures = ()=>n ?? (n = [
                e,
                ...t()
            ]);
    }
}
function ms(e) {
    return "object" == typeof e && null != e;
}
function ys(e) {
    return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`;
}
function vs(e, t, n, r) {
    if (!0 === e) return;
    !1 === e ? e = {} : "string" == typeof e && (e = {
        message: e
    });
    const { path: i, branch: o } = t, { type: s } = n, { refinement: a, message: c = `Expected a value of type \`${s}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${ys(r)}\`` } = e;
    return {
        value: r,
        type: s,
        refinement: a,
        key: i[i.length - 1],
        path: i,
        branch: o,
        ...e,
        message: c
    };
}
function* bs(e, t, n, r) {
    (function(e) {
        return ms(e) && "function" == typeof e[Symbol.iterator];
    })(e) || (e = [
        e
    ]);
    for (const i of e){
        const e = vs(i, t, n, r);
        e && (yield e);
    }
}
function* ws(e, t, n = {}) {
    const { path: r = [], branch: i = [
        e
    ], coerce: o = !1, mask: s = !1 } = n, a = {
        path: r,
        branch: i
    };
    if (o && (e = t.coercer(e, a), s && "type" !== t.type && ms(t.schema) && ms(e) && !Array.isArray(e))) for(const n in e)void 0 === t.schema[n] && delete e[n];
    let c = "valid";
    for (const r of t.validator(e, a))r.explanation = n.message, c = "not_valid", yield [
        r,
        void 0
    ];
    for (let [l, d, u] of t.entries(e, a)){
        const t = ws(d, u, {
            path: void 0 === l ? r : [
                ...r,
                l
            ],
            branch: void 0 === l ? i : [
                ...i,
                d
            ],
            coerce: o,
            mask: s,
            message: n.message
        });
        for (const n of t)n[0] ? (c = null != n[0].refinement ? "not_refined" : "not_valid", yield [
            n[0],
            void 0
        ]) : o && (d = n[1], void 0 === l ? e = d : e instanceof Map ? e.set(l, d) : e instanceof Set ? e.add(d) : ms(e) && (void 0 !== d || l in e) && (e[l] = d));
    }
    if ("not_valid" !== c) for (const r of t.refiner(e, a))r.explanation = n.message, c = "not_refined", yield [
        r,
        void 0
    ];
    "valid" === c && (yield [
        void 0,
        e
    ]);
}
class Es {
    constructor(e){
        const { type: t, schema: n, validator: r, refiner: i, coercer: o = (e)=>e, entries: s = function*() {} } = e;
        this.type = t, this.schema = n, this.entries = s, this.coercer = o, this.validator = r ? (e, t)=>bs(r(e, t), t, this, e) : ()=>[], this.refiner = i ? (e, t)=>bs(i(e, t), t, this, e) : ()=>[];
    }
    assert(e, t) {
        return Cs(e, this, t);
    }
    create(e, t) {
        return Ss(e, this, t);
    }
    is(e) {
        return _s(e, this);
    }
    mask(e, t) {
        return function(e, t, n) {
            const r = ks(e, t, {
                coerce: !0,
                mask: !0,
                message: n
            });
            if (r[0]) throw r[0];
            return r[1];
        }(e, this, t);
    }
    validate(e, t = {}) {
        return ks(e, this, t);
    }
}
function Cs(e, t, n) {
    const r = ks(e, t, {
        message: n
    });
    if (r[0]) throw r[0];
}
function Ss(e, t, n) {
    const r = ks(e, t, {
        coerce: !0,
        message: n
    });
    if (r[0]) throw r[0];
    return r[1];
}
function _s(e, t) {
    return !ks(e, t)[0];
}
function ks(e, t, n = {}) {
    const r = ws(e, t, n), i = function(e) {
        const { done: t, value: n } = e.next();
        return t ? void 0 : n;
    }(r);
    if (i[0]) {
        const e = new gs(i[0], function*() {
            for (const e of r)e[0] && (yield e[0]);
        });
        return [
            e,
            void 0
        ];
    }
    return [
        void 0,
        i[1]
    ];
}
function xs(e, t) {
    return new Es({
        type: e,
        schema: null,
        validator: t
    });
}
function Ms(e) {
    let t;
    return new Es({
        type: "lazy",
        schema: null,
        *entries (n, r) {
            t ?? (t = e()), yield* t.entries(n, r);
        },
        validator: (n, r)=>(t ?? (t = e()), t.validator(n, r)),
        coercer: (n, r)=>(t ?? (t = e()), t.coercer(n, r)),
        refiner: (n, r)=>(t ?? (t = e()), t.refiner(n, r))
    });
}
function As(e) {
    return new Es({
        type: "array",
        schema: e,
        *entries (t) {
            if (e && Array.isArray(t)) for (const [n, r] of t.entries())yield [
                n,
                r,
                e
            ];
        },
        coercer: (e)=>Array.isArray(e) ? e.slice() : e,
        validator: (e)=>Array.isArray(e) || `Expected an array value, but received: ${ys(e)}`
    });
}
function Is(e) {
    const t = ys(e), n = typeof e;
    return new Es({
        type: "literal",
        schema: "string" === n || "number" === n || "boolean" === n ? e : null,
        validator: (n)=>n === e || `Expected the literal \`${t}\`, but received: ${ys(n)}`
    });
}
function Rs() {
    return xs("number", (e)=>"number" == typeof e && !isNaN(e) || `Expected a number, but received: ${ys(e)}`);
}
function Ps(e) {
    const t = e ? Object.keys(e) : [], n = xs("never", ()=>!1);
    return new Es({
        type: "object",
        schema: e || null,
        *entries (r) {
            if (e && ms(r)) {
                const i = new Set(Object.keys(r));
                for (const n of t)i.delete(n), yield [
                    n,
                    r[n],
                    e[n]
                ];
                for (const e of i)yield [
                    e,
                    r[e],
                    n
                ];
            }
        },
        validator: (e)=>ms(e) || `Expected an object, but received: ${ys(e)}`,
        coercer: (e)=>ms(e) ? {
                ...e
            } : e
    });
}
function Ls(e) {
    return new Es({
        ...e,
        validator: (t, n)=>void 0 === t || e.validator(t, n),
        refiner: (t, n)=>void 0 === t || e.refiner(t, n)
    });
}
function Os(e, t) {
    return new Es({
        type: "record",
        schema: null,
        *entries (n) {
            if (ms(n)) for(const r in n){
                const i = n[r];
                yield [
                    r,
                    r,
                    e
                ], yield [
                    r,
                    i,
                    t
                ];
            }
        },
        validator: (e)=>ms(e) || `Expected an object, but received: ${ys(e)}`
    });
}
function Ts() {
    return xs("string", (e)=>"string" == typeof e || `Expected a string, but received: ${ys(e)}`);
}
function Ns(e) {
    const t = e.map((e)=>e.type).join(" | ");
    return new Es({
        type: "union",
        schema: null,
        coercer (t) {
            for (const n of e){
                const [e, r] = n.validate(t, {
                    coerce: !0
                });
                if (!e) return r;
            }
            return t;
        },
        validator (n, r) {
            const i = [];
            for (const t of e){
                const [...e] = ws(n, t, r), [o] = e;
                if (!o[0]) return [];
                for (const [t] of e)t && i.push(t);
            }
            return [
                `Expected the value to satisfy a union of \`${t}\`, but received: ${ys(n)}`,
                ...i
            ];
        }
    });
}
function Ds(e) {
    return (function(e) {
        return function(e) {
            return "object" == typeof e && null !== e && "message" in e;
        }(e) && "string" == typeof e.message ? e.message : null == e ? "" : String(e);
    })(e).replace(/\.$/u, "");
}
function $s(e, t) {
    return n = e, Boolean("string" == typeof n?.prototype?.constructor?.name) ? new e({
        message: t
    }) : e({
        message: t
    });
    "TURBOPACK unreachable";
    var n;
}
var Bs = class extends Error {
    constructor(e){
        super(e.message), this.code = "ERR_ASSERTION";
    }
};
function Ks() {
    throw new Error("setTimeout has not been defined");
}
function js() {
    throw new Error("clearTimeout has not been defined");
}
var Us = Ks, Hs = js;
function Fs(e) {
    if (Us === setTimeout) return setTimeout(e, 0);
    if ((Us === Ks || !Us) && setTimeout) return Us = setTimeout, setTimeout(e, 0);
    try {
        return Us(e, 0);
    } catch (t) {
        try {
            return Us.call(null, e, 0);
        } catch (t) {
            return Us.call(this, e, 0);
        }
    }
}
"function" == typeof c.setTimeout && (Us = setTimeout), "function" == typeof c.clearTimeout && (Hs = clearTimeout);
var zs, qs = [], Vs = !1, Ws = -1;
function Gs() {
    Vs && zs && (Vs = !1, zs.length ? qs = zs.concat(qs) : Ws = -1, qs.length && Zs());
}
function Zs() {
    if (!Vs) {
        var e = Fs(Gs);
        Vs = !0;
        for(var t = qs.length; t;){
            for(zs = qs, qs = []; ++Ws < t;)zs && zs[Ws].run();
            Ws = -1, t = qs.length;
        }
        zs = null, Vs = !1, function(e) {
            if (Hs === clearTimeout) return clearTimeout(e);
            if ((Hs === js || !Hs) && clearTimeout) return Hs = clearTimeout, clearTimeout(e);
            try {
                return Hs(e);
            } catch (t) {
                try {
                    return Hs.call(null, e);
                } catch (t) {
                    return Hs.call(this, e);
                }
            }
        }(e);
    }
}
function Ys(e, t) {
    this.fun = e, this.array = t;
}
Ys.prototype.run = function() {
    this.fun.apply(null, this.array);
};
function Js() {}
var Xs = Js, Qs = Js, ea = Js, ta = Js, na = Js, ra = Js, ia = Js;
var oa = c.performance || {}, sa = oa.now || oa.mozNow || oa.msNow || oa.oNow || oa.webkitNow || function() {
    return (new Date).getTime();
};
var aa = new Date;
var ca = {
    nextTick: function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for(var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
        qs.push(new Ys(e, t)), 1 !== qs.length || Vs || Fs(Zs);
    },
    title: "browser",
    browser: !0,
    env: {},
    argv: [],
    version: "",
    versions: {},
    on: Xs,
    addListener: Qs,
    once: ea,
    off: ta,
    removeListener: na,
    removeAllListeners: ra,
    emit: ia,
    binding: function(e) {
        throw new Error("process.binding is not supported");
    },
    cwd: function() {
        return "/";
    },
    chdir: function(e) {
        throw new Error("process.chdir is not supported");
    },
    umask: function() {
        return 0;
    },
    hrtime: function(e) {
        var t = .001 * sa.call(oa), n = Math.floor(t), r = Math.floor(t % 1 * 1e9);
        return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [
            n,
            r
        ];
    },
    platform: "browser",
    release: {},
    config: {},
    uptime: function() {
        return (new Date - aa) / 1e3;
    }
}, la = (e)=>Ps(e);
function da({ path: e, branch: t }) {
    const n = e[e.length - 1];
    return ps(t[t.length - 2], n);
}
function ua(e) {
    return new Es({
        ...e,
        type: `optional ${e.type}`,
        validator: (t, n)=>!da(n) || e.validator(t, n),
        refiner: (t, n)=>!da(n) || e.refiner(t, n)
    });
}
var ha, fa, pa, ga = Ns([
    Is(null),
    xs("boolean", (e)=>"boolean" == typeof e),
    xs("finite number", (e)=>_s(e, Rs()) && Number.isFinite(e)),
    Ts(),
    As(Ms(()=>ga)),
    Os(Ts(), Ms(()=>ga))
]), ma = (ha = ga, fa = xs("any", ()=>!0), pa = (e)=>((function(e, t, n = "Assertion failed", r = Bs) {
        try {
            Cs(e, t);
        } catch (e) {
            throw $s(r, `${n}: ${Ds(e)}.`);
        }
    })(e, ga), JSON.parse(JSON.stringify(e, (e, t)=>{
        if ("__proto__" !== e && "constructor" !== e) return t;
    }))), new Es({
    ...ha,
    coercer: (e, t)=>_s(e, fa) ? ha.coercer(pa(e, t), t) : ha.coercer(e, t)
}));
function ya(e) {
    try {
        return function(e) {
            Ss(e, ma);
        }(e), !0;
    } catch  {
        return !1;
    }
}
var va = Is("2.0"), ba = function(e) {
    return new Es({
        ...e,
        validator: (t, n)=>null === t || e.validator(t, n),
        refiner: (t, n)=>null === t || e.refiner(t, n)
    });
}(Ns([
    Rs(),
    Ts()
])), wa = la({
    code: xs("integer", (e)=>"number" == typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${ys(e)}`),
    message: Ts(),
    data: ua(ma),
    stack: ua(Ts())
}), Ea = Ns([
    Os(Ts(), ma),
    As(ma)
]), Ca = la({
    id: ba,
    jsonrpc: va,
    method: Ts(),
    params: ua(Ea)
}), Sa = la({
    jsonrpc: va,
    method: Ts(),
    params: ua(Ea)
});
function _a(e) {
    return _s(e, Ca);
}
function ka(e) {
    return _s(e, wa);
}
Ps({
    id: ba,
    jsonrpc: va,
    result: Ls(xs("unknown", ()=>!0)),
    error: Ls(wa)
}), Ns([
    la({
        id: ba,
        jsonrpc: va,
        result: ma
    }),
    la({
        id: ba,
        jsonrpc: va,
        error: wa
    })
]);
var xa = us.internal, Ma = "Unspecified error message. This is a bug, please report it.", Aa = {
    code: xa,
    message: Ra(xa)
}, Ia = "Unspecified server error.";
function Ra(e, t = Ma) {
    if (function(e) {
        return Number.isInteger(e);
    }(e)) {
        const t = e.toString();
        if (ps(hs, t)) return hs[t].message;
        if (function(e) {
            return e >= -32099 && e <= -32e3;
        }(e)) return Ia;
    }
    return t;
}
function Pa(e, { fallbackError: t = Aa, shouldIncludeStack: n = !0 } = {}) {
    if (!ka(t)) throw new Error("Must provide fallback error with integer number code and string message.");
    const r = function(e, t) {
        if (e && "object" == typeof e && "serialize" in e && "function" == typeof e.serialize) return e.serialize();
        if (ka(e)) return e;
        const n = La(e), r = {
            ...t,
            data: {
                cause: n
            }
        };
        return r;
    }(e, t);
    return n || delete r.stack, r;
}
function La(e) {
    return Array.isArray(e) ? e.map((e)=>ya(e) ? e : fs(e) ? Oa(e) : null) : fs(e) ? Oa(e) : ya(e) ? e : null;
}
function Oa(e) {
    return Object.getOwnPropertyNames(e).reduce((t, n)=>{
        const r = e[n];
        return ya(r) && (t[n] = r), t;
    }, {});
}
var Ta = ja;
ja.default = ja, ja.stable = za, ja.stableStringify = za;
var Na = "[...]", Da = "[Circular]", $a = [], Ba = [];
function Ka() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
function ja(e, t, n, r) {
    var i;
    void 0 === r && (r = Ka()), Ha(e, "", 0, [], void 0, 0, r);
    try {
        i = 0 === Ba.length ? JSON.stringify(e, t, n) : JSON.stringify(e, Va(t), n);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally{
        for(; 0 !== $a.length;){
            var o = $a.pop();
            4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
        }
    }
    return i;
}
function Ua(e, t, n, r) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    void 0 !== i.get ? i.configurable ? (Object.defineProperty(r, n, {
        value: e
    }), $a.push([
        r,
        n,
        t,
        i
    ])) : Ba.push([
        t,
        n,
        e
    ]) : (r[n] = e, $a.push([
        r,
        n,
        t
    ]));
}
function Ha(e, t, n, r, i, o, s) {
    var a;
    if (o += 1, "object" == typeof e && null !== e) {
        for(a = 0; a < r.length; a++)if (r[a] === e) return void Ua(Da, e, t, i);
        if (void 0 !== s.depthLimit && o > s.depthLimit) return void Ua(Na, e, t, i);
        if (void 0 !== s.edgesLimit && n + 1 > s.edgesLimit) return void Ua(Na, e, t, i);
        if (r.push(e), Array.isArray(e)) for(a = 0; a < e.length; a++)Ha(e[a], a, a, r, e, o, s);
        else {
            var c = Object.keys(e);
            for(a = 0; a < c.length; a++){
                var l = c[a];
                Ha(e[l], l, a, r, e, o, s);
            }
        }
        r.pop();
    }
}
function Fa(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function za(e, t, n, r) {
    void 0 === r && (r = Ka());
    var i, o = qa(e, "", 0, [], void 0, 0, r) || e;
    try {
        i = 0 === Ba.length ? JSON.stringify(o, t, n) : JSON.stringify(o, Va(t), n);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally{
        for(; 0 !== $a.length;){
            var s = $a.pop();
            4 === s.length ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2];
        }
    }
    return i;
}
function qa(e, t, n, r, i, o, s) {
    var a;
    if (o += 1, "object" == typeof e && null !== e) {
        for(a = 0; a < r.length; a++)if (r[a] === e) return void Ua(Da, e, t, i);
        try {
            if ("function" == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if (void 0 !== s.depthLimit && o > s.depthLimit) return void Ua(Na, e, t, i);
        if (void 0 !== s.edgesLimit && n + 1 > s.edgesLimit) return void Ua(Na, e, t, i);
        if (r.push(e), Array.isArray(e)) for(a = 0; a < e.length; a++)qa(e[a], a, a, r, e, o, s);
        else {
            var c = {}, l = Object.keys(e).sort(Fa);
            for(a = 0; a < l.length; a++){
                var d = l[a];
                qa(e[d], d, a, r, e, o, s), c[d] = e[d];
            }
            if (void 0 === i) return c;
            $a.push([
                i,
                t,
                e
            ]), i[t] = c;
        }
        r.pop();
    }
}
function Va(e) {
    return e = void 0 !== e ? e : function(e, t) {
        return t;
    }, function(t, n) {
        if (Ba.length > 0) for(var r = 0; r < Ba.length; r++){
            var i = Ba[r];
            if (i[1] === t && i[0] === n) {
                n = i[2], Ba.splice(r, 1);
                break;
            }
        }
        return e.call(this, t, n);
    };
}
var Wa = de(Ta), Ga = class extends Error {
    constructor(e, t, n){
        if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
        if (!t || "string" != typeof t) throw new Error('"message" must be a non-empty string.');
        super(t), this.code = e, void 0 !== n && (this.data = n);
    }
    serialize() {
        const e = {
            code: this.code,
            message: this.message
        };
        return void 0 !== this.data && (e.data = this.data, function(e) {
            if ("object" != typeof e || null === e) return !1;
            try {
                let t = e;
                for(; null !== Object.getPrototypeOf(t);)t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t;
            } catch (e) {
                return !1;
            }
        }(this.data) && (e.data.cause = La(this.data.cause))), this.stack && (e.stack = this.stack), e;
    }
    toString() {
        return Wa(this.serialize(), Za, 2);
    }
};
function Za(e, t) {
    if ("[Circular]" !== t) return t;
}
var Ya = (e)=>Ja(us.invalidRequest, e);
function Ja(e, t) {
    const [n, r] = function(e) {
        if (e) {
            if ("string" == typeof e) return [
                e
            ];
            if ("object" == typeof e && !Array.isArray(e)) {
                const { message: t, data: n } = e;
                if (t && "string" != typeof t) throw new Error("Must specify string message.");
                return [
                    t ?? void 0,
                    n
                ];
            }
        }
        return [];
    }(t);
    return new Ga(e, n ?? Ra(e), r);
}
var Xa = {};
function Qa() {}
function ec() {
    ec.init.call(this);
}
function tc(e) {
    return void 0 === e._maxListeners ? ec.defaultMaxListeners : e._maxListeners;
}
function nc(e, t, n, r) {
    var i, o, s;
    if ("function" != typeof n) throw new TypeError('"listener" argument must be a function');
    if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]) : (o = e._events = new Qa, e._eventsCount = 0), s) {
        if ("function" == typeof s ? s = o[t] = r ? [
            n,
            s
        ] : [
            s,
            n
        ] : r ? s.unshift(n) : s.push(n), !s.warned && (i = tc(e)) && i > 0 && s.length > i) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = s.length, function(e) {
                "function" == typeof console.warn ? console.warn(e) : console.log(e);
            }(a);
        }
    } else s = o[t] = n, ++e._eventsCount;
    return e;
}
function rc(e, t, n) {
    var r = !1;
    function i() {
        e.removeListener(t, i), r || (r = !0, n.apply(e, arguments));
    }
    return i.listener = n, i;
}
function ic(e) {
    var t = this._events;
    if (t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (n) return n.length;
    }
    return 0;
}
function oc(e, t) {
    for(var n = new Array(t); t--;)n[t] = e[t];
    return n;
}
Qa.prototype = Object.create(null), ec.EventEmitter = ec, ec.usingDomains = !1, ec.prototype.domain = void 0, ec.prototype._events = void 0, ec.prototype._maxListeners = void 0, ec.defaultMaxListeners = 10, ec.init = function() {
    this.domain = null, ec.usingDomains && undefined.active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new Qa, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, ec.prototype.setMaxListeners = function(e) {
    if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
    return this._maxListeners = e, this;
}, ec.prototype.getMaxListeners = function() {
    return tc(this);
}, ec.prototype.emit = function(e) {
    var t, n, r, i, o, s, a, c = "error" === e;
    if (s = this._events) c = c && null == s.error;
    else if (!c) return !1;
    if (a = this.domain, c) {
        if (t = arguments[1], !a) {
            if (t instanceof Error) throw t;
            var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw l.context = t, l;
        }
        return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = a, t.domainThrown = !1, a.emit("error", t), !1;
    }
    if (!(n = s[e])) return !1;
    var d = "function" == typeof n;
    switch(r = arguments.length){
        case 1:
            !function(e, t, n) {
                if (t) e.call(n);
                else for(var r = e.length, i = oc(e, r), o = 0; o < r; ++o)i[o].call(n);
            }(n, d, this);
            break;
        case 2:
            !function(e, t, n, r) {
                if (t) e.call(n, r);
                else for(var i = e.length, o = oc(e, i), s = 0; s < i; ++s)o[s].call(n, r);
            }(n, d, this, arguments[1]);
            break;
        case 3:
            !function(e, t, n, r, i) {
                if (t) e.call(n, r, i);
                else for(var o = e.length, s = oc(e, o), a = 0; a < o; ++a)s[a].call(n, r, i);
            }(n, d, this, arguments[1], arguments[2]);
            break;
        case 4:
            !function(e, t, n, r, i, o) {
                if (t) e.call(n, r, i, o);
                else for(var s = e.length, a = oc(e, s), c = 0; c < s; ++c)a[c].call(n, r, i, o);
            }(n, d, this, arguments[1], arguments[2], arguments[3]);
            break;
        default:
            for(i = new Array(r - 1), o = 1; o < r; o++)i[o - 1] = arguments[o];
            !function(e, t, n, r) {
                if (t) e.apply(n, r);
                else for(var i = e.length, o = oc(e, i), s = 0; s < i; ++s)o[s].apply(n, r);
            }(n, d, this, i);
    }
    return !0;
}, ec.prototype.addListener = function(e, t) {
    return nc(this, e, t, !1);
}, ec.prototype.on = ec.prototype.addListener, ec.prototype.prependListener = function(e, t) {
    return nc(this, e, t, !0);
}, ec.prototype.once = function(e, t) {
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
    return this.on(e, rc(this, e, t)), this;
}, ec.prototype.prependOnceListener = function(e, t) {
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
    return this.prependListener(e, rc(this, e, t)), this;
}, ec.prototype.removeListener = function(e, t) {
    var n, r, i, o, s;
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
    if (!(r = this._events)) return this;
    if (!(n = r[e])) return this;
    if (n === t || n.listener && n.listener === t) 0 == --this._eventsCount ? this._events = new Qa : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
        for(i = -1, o = n.length; o-- > 0;)if (n[o] === t || n[o].listener && n[o].listener === t) {
            s = n[o].listener, i = o;
            break;
        }
        if (i < 0) return this;
        if (1 === n.length) {
            if (n[0] = void 0, 0 == --this._eventsCount) return this._events = new Qa, this;
            delete r[e];
        } else !function(e, t) {
            for(var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)e[n] = e[r];
            e.pop();
        }(n, i);
        r.removeListener && this.emit("removeListener", e, s || t);
    }
    return this;
}, ec.prototype.off = function(e, t) {
    return this.removeListener(e, t);
}, ec.prototype.removeAllListeners = function(e) {
    var t, n;
    if (!(n = this._events)) return this;
    if (!n.removeListener) return 0 === arguments.length ? (this._events = new Qa, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new Qa : delete n[e]), this;
    if (0 === arguments.length) {
        for(var r, i = Object.keys(n), o = 0; o < i.length; ++o)"removeListener" !== (r = i[o]) && this.removeAllListeners(r);
        return this.removeAllListeners("removeListener"), this._events = new Qa, this._eventsCount = 0, this;
    }
    if ("function" == typeof (t = n[e])) this.removeListener(e, t);
    else if (t) do {
        this.removeListener(e, t[t.length - 1]);
    }while (t[0])
    return this;
}, ec.prototype.listeners = function(e) {
    var t, n, r = this._events;
    return n = r && (t = r[e]) ? "function" == typeof t ? [
        t.listener || t
    ] : function(e) {
        for(var t = new Array(e.length), n = 0; n < t.length; ++n)t[n] = e[n].listener || e[n];
        return t;
    }(t) : [], n;
}, ec.listenerCount = function(e, t) {
    return "function" == typeof e.listenerCount ? e.listenerCount(t) : ic.call(e, t);
}, ec.prototype.listenerCount = ic, ec.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};
var sc = ue(Object.freeze({
    __proto__: null,
    EventEmitter: ec,
    default: ec
}));
Object.defineProperty(Xa, "__esModule", {
    value: !0
});
const ac = sc;
function cc(e, t, n) {
    try {
        Reflect.apply(e, t, n);
    } catch (e) {
        setTimeout(()=>{
            throw e;
        });
    }
}
let lc = class extends ac.EventEmitter {
    emit(e, ...t) {
        let n = "error" === e;
        const r = this._events;
        if (void 0 !== r) n = n && void 0 === r.error;
        else if (!n) return !1;
        if (n) {
            let e;
            if (t.length > 0 && ([e] = t), e instanceof Error) throw e;
            const n = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
            throw n.context = e, n;
        }
        const i = r[e];
        if (void 0 === i) return !1;
        if ("function" == typeof i) cc(i, this, t);
        else {
            const e = i.length, n = function(e) {
                const t = e.length, n = new Array(t);
                for(let r = 0; r < t; r += 1)n[r] = e[r];
                return n;
            }(i);
            for(let r = 0; r < e; r += 1)cc(n[r], this, t);
        }
        return !0;
    }
};
var dc, uc, hc, fc, pc, gc, mc, yc, vc, bc, wc, Ec, Cc, Sc, _c, kc, xc, Mc, Ac, Ic = Xa.default = lc, Rc = class e extends Ic {
    constructor({ notificationHandler: e } = {}){
        super(), cs(this, fc), cs(this, gc), cs(this, yc), cs(this, dc, !1), cs(this, uc, void 0), cs(this, hc, void 0), ls(this, uc, []), ls(this, hc, e);
    }
    destroy() {
        as(this, uc).forEach((e)=>{
            "destroy" in e && "function" == typeof e.destroy && e.destroy();
        }), ls(this, uc, []), ls(this, dc, !0);
    }
    push(e) {
        ds(this, fc, pc).call(this), as(this, uc).push(e);
    }
    handle(e, t) {
        if (ds(this, fc, pc).call(this), t && "function" != typeof t) throw new Error('"callback" must be a function if provided.');
        return Array.isArray(e) ? t ? ds(this, gc, mc).call(this, e, t) : ds(this, gc, mc).call(this, e) : t ? ds(this, yc, vc).call(this, e, t) : this._promiseHandle(e);
    }
    asMiddleware() {
        return ds(this, fc, pc).call(this), async (t, n, r, i)=>{
            var o, s;
            try {
                const [a, c, l] = await ds(o = e, Ec, Cc).call(o, t, n, as(this, uc));
                return c ? (await ds(s = e, kc, xc).call(s, l), i(a)) : r(async (t)=>{
                    var n;
                    try {
                        await ds(n = e, kc, xc).call(n, l);
                    } catch (e) {
                        return t(e);
                    }
                    return t();
                });
            } catch (e) {
                return i(e);
            }
        };
    }
    async _promiseHandle(e) {
        return new Promise((t, n)=>{
            ds(this, yc, vc).call(this, e, (e, r)=>{
                e && void 0 === r ? n(e) : t(r);
            }).catch(n);
        });
    }
};
dc = new WeakMap, uc = new WeakMap, hc = new WeakMap, fc = new WeakSet, pc = function() {
    if (as(this, dc)) throw new Error("This engine is destroyed and can no longer be used.");
}, gc = new WeakSet, mc = async function(e, t) {
    try {
        if (0 === e.length) {
            const e = [
                {
                    id: null,
                    jsonrpc: "2.0",
                    error: new Ga(us.invalidRequest, "Request batch must contain plain objects. Received an empty array")
                }
            ];
            return t ? t(null, e) : e;
        }
        const n = (await Promise.all(e.map(this._promiseHandle.bind(this)))).filter((e)=>void 0 !== e);
        return t ? t(null, n) : n;
    } catch (e) {
        if (t) return t(e);
        throw e;
    }
}, yc = new WeakSet, vc = async function(e, t) {
    var n;
    if (!e || Array.isArray(e) || "object" != typeof e) {
        const n = new Ga(us.invalidRequest, "Requests must be plain objects. Received: " + typeof e, {
            request: e
        });
        return t(n, {
            id: null,
            jsonrpc: "2.0",
            error: n
        });
    }
    if ("string" != typeof e.method) {
        const n = new Ga(us.invalidRequest, "Must specify a string method. Received: " + typeof e.method, {
            request: e
        });
        return as(this, hc) && !_a(e) ? t(null) : t(n, {
            id: e.id ?? null,
            jsonrpc: "2.0",
            error: n
        });
    }
    if (as(this, hc) && _s(e, Sa) && !_a(e)) {
        try {
            await as(this, hc).call(this, e);
        } catch (e) {
            return t(e);
        }
        return t(null);
    }
    let r = null;
    const i = {
        ...e
    }, o = {
        id: i.id,
        jsonrpc: i.jsonrpc
    };
    try {
        await ds(n = Rc, bc, wc).call(n, i, o, as(this, uc));
    } catch (e) {
        r = e;
    }
    return r && (delete o.result, o.error || (o.error = Pa(r))), t(r, o);
}, bc = new WeakSet, wc = async function(e, t, n) {
    var r, i, o;
    const [s, a, c] = await ds(r = Rc, Ec, Cc).call(r, e, t, n);
    if (ds(i = Rc, Mc, Ac).call(i, e, t, a), await ds(o = Rc, kc, xc).call(o, c), s) throw s;
}, Ec = new WeakSet, Cc = async function(e, t, n) {
    var r;
    const i = [];
    let o = null, s = !1;
    for (const a of n)if ([o, s] = await ds(r = Rc, Sc, _c).call(r, e, t, a, i), s) break;
    return [
        o,
        s,
        i.reverse()
    ];
}, Sc = new WeakSet, _c = async function(e, t, n, r) {
    return new Promise((i)=>{
        const o = (e)=>{
            const n = e || t.error;
            n && (t.error = Pa(n)), i([
                n,
                !0
            ]);
        }, s = (n)=>{
            t.error ? o(t.error) : (n && ("function" != typeof n && o(new Ga(us.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof n}" for request:\n${Lc(e)}`, {
                request: e
            })), r.push(n)), i([
                null,
                !1
            ]));
        };
        try {
            n(e, t, s, o);
        } catch (e) {
            o(e);
        }
    });
}, kc = new WeakSet, xc = async function(e) {
    for (const t of e)await new Promise((e, n)=>{
        t((t)=>t ? n(t) : e());
    });
}, Mc = new WeakSet, Ac = function(e, t, n) {
    if (!ps(t, "result") && !ps(t, "error")) throw new Ga(us.internal, `JsonRpcEngine: Response has no error or result for request:\n${Lc(e)}`, {
        request: e
    });
    if (!n) throw new Ga(us.internal, `JsonRpcEngine: Nothing ended request:\n${Lc(e)}`, {
        request: e
    });
}, cs(Rc, bc), cs(Rc, Ec), cs(Rc, Sc), cs(Rc, kc), cs(Rc, Mc);
var Pc = Rc;
function Lc(e) {
    return JSON.stringify(e, null, 2);
}
var Oc = Object.freeze([
    "eth_subscription"
]), Tc = (e = console)=>[
        os(),
        Nc(e),
        ns(e)
    ];
function Nc(e) {
    return (t, n, r)=>{
        "string" == typeof t.method && t.method || (n.error = Ya({
            message: "The request 'method' must be a non-empty string.",
            data: t
        })), r((t)=>{
            const { error: r } = n;
            return r ? (e.error(`MetaMask - RPC Error: ${r.message}`, r), t()) : t();
        });
    };
}
var Dc = (e, t, n = !0)=>(r, i)=>{
        r || i.error ? t(r || i.error) : !n || Array.isArray(i) ? e(i) : e(i.result);
    }, $c = (e)=>Boolean(e) && "string" == typeof e && e.startsWith("0x"), Bc = ()=>{};
async function Kc(e, t) {
    try {
        const t = await async function() {
            return {
                name: jc(window),
                icon: await Uc(window)
            };
        }();
        e.handle({
            jsonrpc: "2.0",
            id: 1,
            method: "metamask_sendDomainMetadata",
            params: t
        }, Bc);
    } catch (e) {
        t.error({
            message: ts.errors.sendSiteMetadata(),
            originalError: e
        });
    }
}
function jc(e) {
    const { document: t } = e, n = t.querySelector('head > meta[property="og:site_name"]');
    if (n) return n.content;
    const r = t.querySelector('head > meta[name="title"]');
    return r ? r.content : t.title && t.title.length > 0 ? t.title : window.location.hostname;
}
async function Uc(e) {
    const { document: t } = e, n = t.querySelectorAll('head > link[rel~="icon"]');
    for (const e of Array.from(n))if (e && await Hc(e.href)) return e.href;
    return null;
}
async function Hc(e) {
    return new Promise((t, n)=>{
        try {
            const n = document.createElement("img");
            n.onload = ()=>t(!0), n.onerror = ()=>t(!1), n.src = e;
        } catch (e) {
            n(e);
        }
    });
}
var Fc = (e, t, n)=>{
    if (!t.has(e)) throw TypeError("Cannot " + n);
}, zc = (e, t, n)=>(Fc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qc = (e, t, n)=>{
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Vc = (e, t, n, r)=>(Fc(e, t, "write to private field"), t.set(e, n), n);
function Wc(e, t, n) {
    try {
        Reflect.apply(e, t, n);
    } catch (e) {
        setTimeout(()=>{
            throw e;
        });
    }
}
class Gc extends ec {
    emit(e, ...t) {
        let n = "error" === e;
        const r = this._events;
        if (void 0 !== r) n = n && void 0 === r.error;
        else if (!n) return !1;
        if (n) {
            let e;
            if (t.length > 0 && ([e] = t), e instanceof Error) throw e;
            const n = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
            throw n.context = e, n;
        }
        const i = r[e];
        if (void 0 === i) return !1;
        if ("function" == typeof i) Wc(i, this, t);
        else {
            const e = i.length, n = function(e) {
                const t = e.length, n = new Array(t);
                for(let r = 0; r < t; r += 1)n[r] = e[r];
                return n;
            }(i);
            for(let r = 0; r < e; r += 1)Wc(n[r], this, t);
        }
        return !0;
    }
}
var Zc, Yc, Jc = function e(t, n) {
    if (t === n) return !0;
    if (t && n && "object" == typeof t && "object" == typeof n) {
        if (t.constructor !== n.constructor) return !1;
        var r, i, o;
        if (Array.isArray(t)) {
            if ((r = t.length) != n.length) return !1;
            for(i = r; 0 != i--;)if (!e(t[i], n[i])) return !1;
            return !0;
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
        if ((r = (o = Object.keys(t)).length) !== Object.keys(n).length) return !1;
        for(i = r; 0 != i--;)if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
        for(i = r; 0 != i--;){
            var s = o[i];
            if (!e(t[s], n[s])) return !1;
        }
        return !0;
    }
    return t != t && n != n;
}, Xc = de(Jc), Qc = class e extends Gc {
    constructor({ logger: t = console, maxEventListeners: n = 100, rpcMiddleware: r = [] } = {}){
        super(), qc(this, Zc, void 0), qc(this, Yc, void 0), this._log = t, this.setMaxListeners(n), this._state = {
            ...e._defaultState
        }, Vc(this, Yc, null), Vc(this, Zc, null), this._handleAccountsChanged = this._handleAccountsChanged.bind(this), this._handleConnect = this._handleConnect.bind(this), this._handleChainChanged = this._handleChainChanged.bind(this), this._handleDisconnect = this._handleDisconnect.bind(this), this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this), this._rpcRequest = this._rpcRequest.bind(this), this.request = this.request.bind(this);
        const i = new Pc;
        r.forEach((e)=>i.push(e)), this._rpcEngine = i;
    }
    get chainId() {
        return zc(this, Zc);
    }
    get selectedAddress() {
        return zc(this, Yc);
    }
    isConnected() {
        return this._state.isConnected;
    }
    async request(e) {
        if (!e || "object" != typeof e || Array.isArray(e)) throw Ya({
            message: ts.errors.invalidRequestArgs(),
            data: e
        });
        const { method: t, params: n } = e;
        if ("string" != typeof t || 0 === t.length) throw Ya({
            message: ts.errors.invalidRequestMethod(),
            data: e
        });
        if (void 0 !== n && !Array.isArray(n) && ("object" != typeof n || null === n)) throw Ya({
            message: ts.errors.invalidRequestParams(),
            data: e
        });
        const r = null == n ? {
            method: t
        } : {
            method: t,
            params: n
        };
        return new Promise((e, t)=>{
            this._rpcRequest(r, Dc(e, t));
        });
    }
    _initializeState(e) {
        if (this._state.initialized) throw new Error("Provider already initialized.");
        if (e) {
            const { accounts: t, chainId: n, isUnlocked: r, networkVersion: i } = e;
            this._handleConnect(n), this._handleChainChanged({
                chainId: n,
                networkVersion: i
            }), this._handleUnlockStateChanged({
                accounts: t,
                isUnlocked: r
            }), this._handleAccountsChanged(t);
        }
        this._state.initialized = !0, this.emit("_initialized");
    }
    _rpcRequest(e, t) {
        let n = t;
        return Array.isArray(e) || (e.jsonrpc || (e.jsonrpc = "2.0"), "eth_accounts" !== e.method && "eth_requestAccounts" !== e.method || (n = (n, r)=>{
            this._handleAccountsChanged(r.result ?? [], "eth_accounts" === e.method), t(n, r);
        })), this._rpcEngine.handle(e, n);
    }
    _handleConnect(e) {
        this._state.isConnected || (this._state.isConnected = !0, this.emit("connect", {
            chainId: e
        }), this._log.debug(ts.info.connected(e)));
    }
    _handleDisconnect(e, t) {
        if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
            let n;
            this._state.isConnected = !1, e ? (n = new Ga(1013, t ?? ts.errors.disconnected()), this._log.debug(n)) : (n = new Ga(1011, t ?? ts.errors.permanentlyDisconnected()), this._log.error(n), Vc(this, Zc, null), this._state.accounts = null, Vc(this, Yc, null), this._state.isUnlocked = !1, this._state.isPermanentlyDisconnected = !0), this.emit("disconnect", n);
        }
    }
    _handleChainChanged({ chainId: e } = {}) {
        $c(e) ? (this._handleConnect(e), e !== zc(this, Zc) && (Vc(this, Zc, e), this._state.initialized && this.emit("chainChanged", zc(this, Zc)))) : this._log.error(ts.errors.invalidNetworkParams(), {
            chainId: e
        });
    }
    _handleAccountsChanged(e, t = !1) {
        let n = e;
        Array.isArray(e) || (this._log.error("MetaMask: Received invalid accounts parameter. Please report this bug.", e), n = []);
        for (const t of e)if ("string" != typeof t) {
            this._log.error("MetaMask: Received non-string account. Please report this bug.", e), n = [];
            break;
        }
        if (!Xc(this._state.accounts, n) && (t && null !== this._state.accounts && this._log.error("MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.", n), this._state.accounts = n, zc(this, Yc) !== n[0] && Vc(this, Yc, n[0] || null), this._state.initialized)) {
            const e = [
                ...n
            ];
            this.emit("accountsChanged", e);
        }
    }
    _handleUnlockStateChanged({ accounts: e, isUnlocked: t } = {}) {
        "boolean" == typeof t ? t !== this._state.isUnlocked && (this._state.isUnlocked = t, this._handleAccountsChanged(e ?? [])) : this._log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.");
    }
};
Zc = new WeakMap, Yc = new WeakMap, Qc._defaultState = {
    accounts: null,
    isConnected: !1,
    isUnlocked: !1,
    initialized: !1,
    isPermanentlyDisconnected: !1
};
var el, tl, nl = Qc, rl = {
    exports: {}
};
function il() {
    return tl ? el : (tl = 1, el = sc.EventEmitter);
}
var ol, sl = ue(ce);
ol = "function" == typeof Object.create ? function(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    });
} : function(e, t) {
    e.super_ = t;
    var n = function() {};
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e;
};
var al = Object.getOwnPropertyDescriptors || function(e) {
    for(var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
    return n;
}, cl = /%[sdj%]/g;
function ll(e) {
    if (!kl(e)) {
        for(var t = [], n = 0; n < arguments.length; n++)t.push(pl(arguments[n]));
        return t.join(" ");
    }
    n = 1;
    for(var r = arguments, i = r.length, o = String(e).replace(cl, function(e) {
        if ("%%" === e) return "%";
        if (n >= i) return e;
        switch(e){
            case "%s":
                return String(r[n++]);
            case "%d":
                return Number(r[n++]);
            case "%j":
                try {
                    return JSON.stringify(r[n++]);
                } catch (e) {
                    return "[Circular]";
                }
            default:
                return e;
        }
    }), s = r[n]; n < i; s = r[++n])Cl(s) || !Il(s) ? o += " " + s : o += " " + pl(s);
    return o;
}
function dl(e, t) {
    if (Ml(c.process)) return function() {
        return dl(e, t).apply(this, arguments);
    };
    if (!0 === ca.noDeprecation) return e;
    var n = !1;
    return function() {
        if (!n) {
            if (ca.throwDeprecation) throw new Error(t);
            ca.traceDeprecation ? console.trace(t) : console.error(t), n = !0;
        }
        return e.apply(this, arguments);
    };
}
var ul, hl = {};
function fl(e) {
    if (Ml(ul) && (ul = ca.env.NODE_DEBUG || ""), e = e.toUpperCase(), !hl[e]) if (new RegExp("\\b" + e + "\\b", "i").test(ul)) {
        hl[e] = function() {
            var t = ll.apply(null, arguments);
            console.error("%s %d: %s", e, 0, t);
        };
    } else hl[e] = function() {};
    return hl[e];
}
function pl(e, t) {
    var n = {
        seen: [],
        stylize: ml
    };
    return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), El(t) ? n.showHidden = t : t && Kl(n, t), Ml(n.showHidden) && (n.showHidden = !1), Ml(n.depth) && (n.depth = 2), Ml(n.colors) && (n.colors = !1), Ml(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = gl), yl(n, e, n.depth);
}
function gl(e, t) {
    var n = pl.styles[t];
    return n ? "[" + pl.colors[n][0] + "m" + e + "[" + pl.colors[n][1] + "m" : e;
}
function ml(e, t) {
    return e;
}
function yl(e, t, n) {
    if (e.customInspect && t && Ll(t.inspect) && t.inspect !== pl && (!t.constructor || t.constructor.prototype !== t)) {
        var r = t.inspect(n, e);
        return kl(r) || (r = yl(e, r, n)), r;
    }
    var i = function(e, t) {
        if (Ml(t)) return e.stylize("undefined", "undefined");
        if (kl(t)) {
            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e.stylize(n, "string");
        }
        if (_l(t)) return e.stylize("" + t, "number");
        if (El(t)) return e.stylize("" + t, "boolean");
        if (Cl(t)) return e.stylize("null", "null");
    }(e, t);
    if (i) return i;
    var o = Object.keys(t), s = function(e) {
        var t = {};
        return e.forEach(function(e, n) {
            t[e] = !0;
        }), t;
    }(o);
    if (e.showHidden && (o = Object.getOwnPropertyNames(t)), Pl(t) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return vl(t);
    if (0 === o.length) {
        if (Ll(t)) {
            var a = t.name ? ": " + t.name : "";
            return e.stylize("[Function" + a + "]", "special");
        }
        if (Al(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
        if (Rl(t)) return e.stylize(Date.prototype.toString.call(t), "date");
        if (Pl(t)) return vl(t);
    }
    var c, l = "", d = !1, u = [
        "{",
        "}"
    ];
    (wl(t) && (d = !0, u = [
        "[",
        "]"
    ]), Ll(t)) && (l = " [Function" + (t.name ? ": " + t.name : "") + "]");
    return Al(t) && (l = " " + RegExp.prototype.toString.call(t)), Rl(t) && (l = " " + Date.prototype.toUTCString.call(t)), Pl(t) && (l = " " + vl(t)), 0 !== o.length || d && 0 != t.length ? n < 0 ? Al(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t), c = d ? function(e, t, n, r, i) {
        for(var o = [], s = 0, a = t.length; s < a; ++s)jl(t, String(s)) ? o.push(bl(e, t, n, r, String(s), !0)) : o.push("");
        return i.forEach(function(i) {
            i.match(/^\d+$/) || o.push(bl(e, t, n, r, i, !0));
        }), o;
    }(e, t, n, s, o) : o.map(function(r) {
        return bl(e, t, n, s, r, d);
    }), e.seen.pop(), function(e, t, n) {
        var r = e.reduce(function(e, t) {
            return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (r > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
        return n[0] + t + " " + e.join(", ") + " " + n[1];
    }(c, l, u)) : u[0] + l + u[1];
}
function vl(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
}
function bl(e, t, n, r, i, o) {
    var s, a, c;
    if ((c = Object.getOwnPropertyDescriptor(t, i) || {
        value: t[i]
    }).get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), jl(r, i) || (s = "[" + i + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = Cl(n) ? yl(e, c.value, null) : yl(e, c.value, n - 1)).indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(e) {
        return "  " + e;
    }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
        return "   " + e;
    }).join("\n")) : a = e.stylize("[Circular]", "special")), Ml(s)) {
        if (o && i.match(/^\d+$/)) return a;
        (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"));
    }
    return s + ": " + a;
}
function wl(e) {
    return Array.isArray(e);
}
function El(e) {
    return "boolean" == typeof e;
}
function Cl(e) {
    return null === e;
}
function Sl(e) {
    return null == e;
}
function _l(e) {
    return "number" == typeof e;
}
function kl(e) {
    return "string" == typeof e;
}
function xl(e) {
    return "symbol" == typeof e;
}
function Ml(e) {
    return void 0 === e;
}
function Al(e) {
    return Il(e) && "[object RegExp]" === Nl(e);
}
function Il(e) {
    return "object" == typeof e && null !== e;
}
function Rl(e) {
    return Il(e) && "[object Date]" === Nl(e);
}
function Pl(e) {
    return Il(e) && ("[object Error]" === Nl(e) || e instanceof Error);
}
function Ll(e) {
    return "function" == typeof e;
}
function Ol(e) {
    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
}
function Tl(e) {
    return S.isBuffer(e);
}
function Nl(e) {
    return Object.prototype.toString.call(e);
}
function Dl(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
pl.colors = {
    bold: [
        1,
        22
    ],
    italic: [
        3,
        23
    ],
    underline: [
        4,
        24
    ],
    inverse: [
        7,
        27
    ],
    white: [
        37,
        39
    ],
    grey: [
        90,
        39
    ],
    black: [
        30,
        39
    ],
    blue: [
        34,
        39
    ],
    cyan: [
        36,
        39
    ],
    green: [
        32,
        39
    ],
    magenta: [
        35,
        39
    ],
    red: [
        31,
        39
    ],
    yellow: [
        33,
        39
    ]
}, pl.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
};
var $l = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function Bl() {
    console.log("%s - %s", function() {
        var e = new Date, t = [
            Dl(e.getHours()),
            Dl(e.getMinutes()),
            Dl(e.getSeconds())
        ].join(":");
        return [
            e.getDate(),
            $l[e.getMonth()],
            t
        ].join(" ");
    }(), ll.apply(null, arguments));
}
function Kl(e, t) {
    if (!t || !Il(t)) return e;
    for(var n = Object.keys(t), r = n.length; r--;)e[n[r]] = t[n[r]];
    return e;
}
function jl(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
var Ul = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function Hl(e) {
    if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
    if (Ul && e[Ul]) {
        var t;
        if ("function" != typeof (t = e[Ul])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, Ul, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !0
        }), t;
    }
    function t() {
        for(var t, n, r = new Promise(function(e, r) {
            t = e, n = r;
        }), i = [], o = 0; o < arguments.length; o++)i.push(arguments[o]);
        i.push(function(e, r) {
            e ? n(e) : t(r);
        });
        try {
            e.apply(this, i);
        } catch (e) {
            n(e);
        }
        return r;
    }
    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Ul && Object.defineProperty(t, Ul, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0
    }), Object.defineProperties(t, al(e));
}
function Fl(e, t) {
    if (!e) {
        var n = new Error("Promise was rejected with a falsy value");
        n.reason = e, e = n;
    }
    return t(e);
}
function zl(e) {
    if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
    function t() {
        for(var t = [], n = 0; n < arguments.length; n++)t.push(arguments[n]);
        var r = t.pop();
        if ("function" != typeof r) throw new TypeError("The last argument must be of type Function");
        var i = this, o = function() {
            return r.apply(i, arguments);
        };
        e.apply(this, t).then(function(e) {
            ca.nextTick(o.bind(null, null, e));
        }, function(e) {
            ca.nextTick(Fl.bind(null, e, o));
        });
    }
    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, al(e)), t;
}
Hl.custom = Ul;
var ql, Vl, Wl, Gl, Zl = {
    inherits: ol,
    _extend: Kl,
    log: Bl,
    isBuffer: Tl,
    isPrimitive: Ol,
    isFunction: Ll,
    isError: Pl,
    isDate: Rl,
    isObject: Il,
    isRegExp: Al,
    isUndefined: Ml,
    isSymbol: xl,
    isString: kl,
    isNumber: _l,
    isNullOrUndefined: Sl,
    isNull: Cl,
    isBoolean: El,
    isArray: wl,
    inspect: pl,
    deprecate: dl,
    format: ll,
    debuglog: fl,
    promisify: Hl,
    callbackify: zl
}, Yl = ue(Object.freeze({
    __proto__: null,
    _extend: Kl,
    callbackify: zl,
    debuglog: fl,
    default: Zl,
    deprecate: dl,
    format: ll,
    inherits: ol,
    inspect: pl,
    isArray: wl,
    isBoolean: El,
    isBuffer: Tl,
    isDate: Rl,
    isError: Pl,
    isFunction: Ll,
    isNull: Cl,
    isNullOrUndefined: Sl,
    isNumber: _l,
    isObject: Il,
    isPrimitive: Ol,
    isRegExp: Al,
    isString: kl,
    isSymbol: xl,
    isUndefined: Ml,
    log: Bl,
    promisify: Hl
}));
function Jl() {
    if (Vl) return ql;
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function t(t) {
        for(var r = 1; r < arguments.length; r++){
            var i = null != arguments[r] ? arguments[r] : {};
            r % 2 ? e(Object(i), !0).forEach(function(e) {
                n(t, e, i[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
            });
        }
        return t;
    }
    function n(e, t, n) {
        return (t = i(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function r(e, t, n) {
        return t && function(e, t) {
            for(var n = 0; n < t.length; n++){
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, i(r.key), r);
            }
        }(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
    }
    function i(e) {
        var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (("TURBOPACK compile-time truthy", 1) ? String : ("TURBOPACK unreachable", undefined))(e);
        }(e, "string");
        return "symbol" == typeof t ? t : String(t);
    }
    Vl = 1;
    var o = sl.Buffer, s = Yl.inspect, a = s && s.custom || "inspect";
    return ql = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), this.head = null, this.tail = null, this.length = 0;
        }
        return r(e, [
            {
                key: "push",
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
                }
            },
            {
                key: "unshift",
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t), this.head = t, ++this.length;
                }
            },
            {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
                    }
                }
            },
            {
                key: "clear",
                value: function() {
                    this.head = this.tail = null, this.length = 0;
                }
            },
            {
                key: "join",
                value: function(e) {
                    if (0 === this.length) return "";
                    for(var t = this.head, n = "" + t.data; t = t.next;)n += e + t.data;
                    return n;
                }
            },
            {
                key: "concat",
                value: function(e) {
                    if (0 === this.length) return o.alloc(0);
                    for(var t, n, r, i = o.allocUnsafe(e >>> 0), s = this.head, a = 0; s;)t = s.data, n = i, r = a, o.prototype.copy.call(t, n, r), a += s.data.length, s = s.next;
                    return i;
                }
            },
            {
                key: "consume",
                value: function(e, t) {
                    var n;
                    return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n;
                }
            },
            {
                key: "first",
                value: function() {
                    return this.head.data;
                }
            },
            {
                key: "_getString",
                value: function(e) {
                    var t = this.head, n = 1, r = t.data;
                    for(e -= r.length; t = t.next;){
                        var i = t.data, o = e > i.length ? i.length : e;
                        if (o === i.length ? r += i : r += i.slice(0, e), 0 === (e -= o)) {
                            o === i.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
                            break;
                        }
                        ++n;
                    }
                    return this.length -= n, r;
                }
            },
            {
                key: "_getBuffer",
                value: function(e) {
                    var t = o.allocUnsafe(e), n = this.head, r = 1;
                    for(n.data.copy(t), e -= n.data.length; n = n.next;){
                        var i = n.data, s = e > i.length ? i.length : e;
                        if (i.copy(t, t.length - e, 0, s), 0 === (e -= s)) {
                            s === i.length ? (++r, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = i.slice(s));
                            break;
                        }
                        ++r;
                    }
                    return this.length -= r, t;
                }
            },
            {
                key: a,
                value: function(e, n) {
                    return s(this, t(t({}, n), {}, {
                        depth: 0,
                        customInspect: !1
                    }));
                }
            }
        ]), e;
    }(), ql;
}
function Xl() {
    if (Gl) return Wl;
    function e(e, r) {
        n(e, r), t(e);
    }
    function t(e) {
        e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
    }
    function n(e, t) {
        e.emit("error", t);
    }
    return Gl = 1, Wl = {
        destroy: function(r, i) {
            var o = this, s = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
            return s || a ? (i ? i(r) : r && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, ca.nextTick(n, this, r)) : ca.nextTick(n, this, r)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(r || null, function(n) {
                !i && n ? o._writableState ? o._writableState.errorEmitted ? ca.nextTick(t, o) : (o._writableState.errorEmitted = !0, ca.nextTick(e, o, n)) : ca.nextTick(e, o, n) : i ? (ca.nextTick(t, o), i(n)) : ca.nextTick(t, o);
            }), this);
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
        },
        errorOrDestroy: function(e, t) {
            var n = e._readableState, r = e._writableState;
            n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit("error", t);
        }
    }, Wl;
}
var Ql = {};
var ed, td, nd = {};
function rd(e, t, n) {
    n || (n = Error);
    var r = function(e) {
        var n, r;
        function i(n, r, i) {
            return e.call(this, function(e, n, r) {
                return "string" == typeof t ? t : t(e, n, r);
            }(n, r, i)) || this;
        }
        return r = e, (n = i).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, i;
    }(n);
    r.prototype.name = n.name, r.prototype.code = e, nd[e] = r;
}
function id(e, t) {
    if (Array.isArray(e)) {
        var n = e.length;
        return e = e.map(function(e) {
            return String(e);
        }), n > 2 ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : 2 === n ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
    }
    return "of ".concat(t, " ").concat(String(e));
}
function od() {
    if (td) return ed;
    td = 1;
    var e = Ql.codes.ERR_INVALID_OPT_VALUE;
    return ed = {
        getHighWaterMark: function(t, n, r, i) {
            var o = function(e, t, n) {
                return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
            }(n, i, r);
            if (null != o) {
                if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new e(i ? r : "highWaterMark", o);
                return Math.floor(o);
            }
            return t.objectMode ? 16 : 16384;
        }
    };
}
rd("ERR_INVALID_OPT_VALUE", function(e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError), rd("ERR_INVALID_ARG_TYPE", function(e, t, n) {
    var r, i, o;
    if ("string" == typeof t && (i = "not ", t.substr(0, i.length) === i) ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be", function(e, t, n) {
        return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t;
    }(e, " argument")) o = "The ".concat(e, " ").concat(r, " ").concat(id(t, "type"));
    else {
        var s = function(e, t, n) {
            return "number" != typeof n && (n = 0), !(n + t.length > e.length) && -1 !== e.indexOf(t, n);
        }(e, ".") ? "property" : "argument";
        o = 'The "'.concat(e, '" ').concat(s, " ").concat(r, " ").concat(id(t, "type"));
    }
    return o += ". Received type ".concat(typeof n);
}, TypeError), rd("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), rd("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
    return "The " + e + " method is not implemented";
}), rd("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), rd("ERR_STREAM_DESTROYED", function(e) {
    return "Cannot call " + e + " after a stream was destroyed";
}), rd("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), rd("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), rd("ERR_STREAM_WRITE_AFTER_END", "write after end"), rd("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), rd("ERR_UNKNOWN_ENCODING", function(e) {
    return "Unknown encoding: " + e;
}, TypeError), rd("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), Ql.codes = nd;
var sd, ad, cd, ld, dd, ud, hd = "function" == typeof Object.create ? function(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    });
} : function(e, t) {
    e.super_ = t;
    var n = function() {};
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e;
}, fd = ue(Object.freeze({
    __proto__: null,
    default: hd
}));
function pd() {
    if (ad) return sd;
    function e(e) {
        try {
            if (!le.localStorage) return !1;
        } catch (e) {
            return !1;
        }
        var t = le.localStorage[e];
        return null != t && "true" === String(t).toLowerCase();
    }
    return ad = 1, sd = function(t, n) {
        if (e("noDeprecation")) return t;
        var r = !1;
        return function() {
            if (!r) {
                if (e("throwDeprecation")) throw new Error(n);
                e("traceDeprecation") ? console.trace(n) : console.warn(n), r = !0;
            }
            return t.apply(this, arguments);
        };
    }, sd;
}
function gd() {
    if (ld) return cd;
    function e(e) {
        var t = this;
        this.next = null, this.entry = null, this.finish = function() {
            !function(e, t, n) {
                var r = e.entry;
                e.entry = null;
                for(; r;){
                    var i = r.callback;
                    t.pendingcb--, i(n), r = r.next;
                }
                t.corkedRequestsFree.next = e;
            }(t, e);
        };
    }
    var t;
    ld = 1, cd = E, E.WritableState = w;
    var n = {
        deprecate: pd()
    }, r = il(), i = sl.Buffer, o = (void 0 !== le ? le : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
    var s, a = Xl(), c = od().getHighWaterMark, l = Ql.codes, d = l.ERR_INVALID_ARG_TYPE, u = l.ERR_METHOD_NOT_IMPLEMENTED, h = l.ERR_MULTIPLE_CALLBACK, f = l.ERR_STREAM_CANNOT_PIPE, p = l.ERR_STREAM_DESTROYED, g = l.ERR_STREAM_NULL_VALUES, m = l.ERR_STREAM_WRITE_AFTER_END, y = l.ERR_UNKNOWN_ENCODING, v = a.errorOrDestroy;
    function b() {}
    function w(n, r, i) {
        t = t || md(), n = n || {}, "boolean" != typeof i && (i = r instanceof t), this.objectMode = !!n.objectMode, i && (this.objectMode = this.objectMode || !!n.writableObjectMode), this.highWaterMark = c(this, n, "writableHighWaterMark", i), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var o = !1 === n.decodeStrings;
        this.decodeStrings = !o, this.defaultEncoding = n.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
            !function(e, t) {
                var n = e._writableState, r = n.sync, i = n.writecb;
                if ("function" != typeof i) throw new h;
                if (function(e) {
                    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
                }(n), t) !function(e, t, n, r, i) {
                    --t.pendingcb, n ? (ca.nextTick(i, r), ca.nextTick(M, e, t), e._writableState.errorEmitted = !0, v(e, r)) : (i(r), e._writableState.errorEmitted = !0, v(e, r), M(e, t));
                }(e, n, r, t, i);
                else {
                    var o = k(n) || e.destroyed;
                    o || n.corked || n.bufferProcessing || !n.bufferedRequest || _(e, n), r ? ca.nextTick(S, e, n, o, i) : S(e, n, o, i);
                }
            }(r, e);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== n.emitClose, this.autoDestroy = !!n.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
    }
    function E(e) {
        var n = this instanceof (t = t || md());
        if (!n && !s.call(E, this)) return new E(e);
        this._writableState = new w(e, this, n), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), r.call(this);
    }
    function C(e, t, n, r, i, o, s) {
        t.writelen = r, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new p("write")) : n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1;
    }
    function S(e, t, n, r) {
        n || function(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
        }(e, t), t.pendingcb--, r(), M(e, t);
    }
    function _(t, n) {
        n.bufferProcessing = !0;
        var r = n.bufferedRequest;
        if (t._writev && r && r.next) {
            var i = n.bufferedRequestCount, o = new Array(i), s = n.corkedRequestsFree;
            s.entry = r;
            for(var a = 0, c = !0; r;)o[a] = r, r.isBuf || (c = !1), r = r.next, a += 1;
            o.allBuffers = c, C(t, n, !0, n.length, o, "", s.finish), n.pendingcb++, n.lastBufferedRequest = null, s.next ? (n.corkedRequestsFree = s.next, s.next = null) : n.corkedRequestsFree = new e(n), n.bufferedRequestCount = 0;
        } else {
            for(; r;){
                var l = r.chunk, d = r.encoding, u = r.callback;
                if (C(t, n, !1, n.objectMode ? 1 : l.length, l, d, u), r = r.next, n.bufferedRequestCount--, n.writing) break;
            }
            null === r && (n.lastBufferedRequest = null);
        }
        n.bufferedRequest = r, n.bufferProcessing = !1;
    }
    function k(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
    }
    function x(e, t) {
        e._final(function(n) {
            t.pendingcb--, n && v(e, n), t.prefinished = !0, e.emit("prefinish"), M(e, t);
        });
    }
    function M(e, t) {
        var n = k(t);
        if (n && (function(e, t) {
            t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, ca.nextTick(x, e, t)));
        }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
            var r = e._readableState;
            (!r || r.autoDestroy && r.endEmitted) && e.destroy();
        }
        return n;
    }
    return fd(E, r), w.prototype.getBuffer = function() {
        for(var e = this.bufferedRequest, t = []; e;)t.push(e), e = e.next;
        return t;
    }, function() {
        try {
            Object.defineProperty(w.prototype, "buffer", {
                get: n.deprecate(function() {
                    return this.getBuffer();
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            });
        } catch (e) {}
    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (s = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, {
        value: function(e) {
            return !!s.call(this, e) || this === E && e && e._writableState instanceof w;
        }
    })) : s = function(e) {
        return e instanceof this;
    }, E.prototype.pipe = function() {
        v(this, new f);
    }, E.prototype.write = function(e, t, n) {
        var r, s = this._writableState, a = !1, c = !s.objectMode && (r = e, i.isBuffer(r) || r instanceof o);
        return c && !i.isBuffer(e) && (e = function(e) {
            return i.from(e);
        }(e)), "function" == typeof t && (n = t, t = null), c ? t = "buffer" : t || (t = s.defaultEncoding), "function" != typeof n && (n = b), s.ending ? function(e, t) {
            var n = new m;
            v(e, n), ca.nextTick(t, n);
        }(this, n) : (c || function(e, t, n, r) {
            var i;
            return null === n ? i = new g : "string" == typeof n || t.objectMode || (i = new d("chunk", [
                "string",
                "Buffer"
            ], n)), !i || (v(e, i), ca.nextTick(r, i), !1);
        }(this, s, e, n)) && (s.pendingcb++, a = function(e, t, n, r, o, s) {
            if (!n) {
                var a = function(e, t, n) {
                    e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = i.from(t, n));
                    return t;
                }(t, r, o);
                r !== a && (n = !0, o = "buffer", r = a);
            }
            var c = t.objectMode ? 1 : r.length;
            t.length += c;
            var l = t.length < t.highWaterMark;
            l || (t.needDrain = !0);
            if (t.writing || t.corked) {
                var d = t.lastBufferedRequest;
                t.lastBufferedRequest = {
                    chunk: r,
                    encoding: o,
                    isBuf: n,
                    callback: s,
                    next: null
                }, d ? d.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
            } else C(e, t, !1, c, r, o, s);
            return l;
        }(this, s, c, e, t, n)), a;
    }, E.prototype.cork = function() {
        this._writableState.corked++;
    }, E.prototype.uncork = function() {
        var e = this._writableState;
        e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || _(this, e));
    }, E.prototype.setDefaultEncoding = function(e) {
        if ("string" == typeof e && (e = e.toLowerCase()), !([
            "hex",
            "utf8",
            "utf-8",
            "ascii",
            "binary",
            "base64",
            "ucs2",
            "ucs-2",
            "utf16le",
            "utf-16le",
            "raw"
        ].indexOf((e + "").toLowerCase()) > -1)) throw new y(e);
        return this._writableState.defaultEncoding = e, this;
    }, Object.defineProperty(E.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer();
        }
    }), Object.defineProperty(E.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark;
        }
    }), E.prototype._write = function(e, t, n) {
        n(new u("_write()"));
    }, E.prototype._writev = null, E.prototype.end = function(e, t, n) {
        var r = this._writableState;
        return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || function(e, t, n) {
            t.ending = !0, M(e, t), n && (t.finished ? ca.nextTick(n) : e.once("finish", n));
            t.ended = !0, e.writable = !1;
        }(this, r, n), this;
    }, Object.defineProperty(E.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length;
        }
    }), Object.defineProperty(E.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function(e) {
            this._writableState && (this._writableState.destroyed = e);
        }
    }), E.prototype.destroy = a.destroy, E.prototype._undestroy = a.undestroy, E.prototype._destroy = function(e, t) {
        t(e);
    }, cd;
}
function md() {
    if (ud) return dd;
    ud = 1;
    var e = Object.keys || function(e) {
        var t = [];
        for(var n in e)t.push(n);
        return t;
    };
    dd = s;
    var t = Od(), n = gd();
    fd(s, t);
    for(var r = e(n.prototype), i = 0; i < r.length; i++){
        var o = r[i];
        s.prototype[o] || (s.prototype[o] = n.prototype[o]);
    }
    function s(e) {
        if (!(this instanceof s)) return new s(e);
        t.call(this, e), n.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", a)));
    }
    function a() {
        this._writableState.ended || ca.nextTick(c, this);
    }
    function c(e) {
        e.end();
    }
    return Object.defineProperty(s.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark;
        }
    }), Object.defineProperty(s.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer();
        }
    }), Object.defineProperty(s.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length;
        }
    }), Object.defineProperty(s.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
        }
    }), dd;
}
var yd = S.isEncoding || function(e) {
    switch(e && e.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1;
    }
};
function vd(e) {
    switch(this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), function(e) {
        if (e && !yd(e)) throw new Error("Unknown encoding: " + e);
    }(e), this.encoding){
        case "utf8":
            this.surrogateSize = 3;
            break;
        case "ucs2":
        case "utf16le":
            this.surrogateSize = 2, this.detectIncompleteChar = wd;
            break;
        case "base64":
            this.surrogateSize = 3, this.detectIncompleteChar = Ed;
            break;
        default:
            return void (this.write = bd);
    }
    this.charBuffer = new S(6), this.charReceived = 0, this.charLength = 0;
}
function bd(e) {
    return e.toString(this.encoding);
}
function wd(e) {
    this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0;
}
function Ed(e) {
    this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0;
}
vd.prototype.write = function(e) {
    for(var t = ""; this.charLength;){
        var n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
        if (e.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";
        if (e = e.slice(n, e.length), !((i = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 && i <= 56319)) {
            if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
            break;
        }
        this.charLength += this.surrogateSize, t = "";
    }
    this.detectIncompleteChar(e);
    var r = e.length;
    this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, r), r -= this.charReceived);
    var i;
    r = (t += e.toString(this.encoding, 0, r)).length - 1;
    if ((i = t.charCodeAt(r)) >= 55296 && i <= 56319) {
        var o = this.surrogateSize;
        return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, r);
    }
    return t;
}, vd.prototype.detectIncompleteChar = function(e) {
    for(var t = e.length >= 3 ? 3 : e.length; t > 0; t--){
        var n = e[e.length - t];
        if (1 == t && n >> 5 == 6) {
            this.charLength = 2;
            break;
        }
        if (t <= 2 && n >> 4 == 14) {
            this.charLength = 3;
            break;
        }
        if (t <= 3 && n >> 3 == 30) {
            this.charLength = 4;
            break;
        }
    }
    this.charReceived = t;
}, vd.prototype.end = function(e) {
    var t = "";
    if (e && e.length && (t = this.write(e)), this.charReceived) {
        var n = this.charReceived, r = this.charBuffer, i = this.encoding;
        t += r.slice(0, n).toString(i);
    }
    return t;
};
var Cd = ue(Object.freeze({
    __proto__: null,
    StringDecoder: vd
})), Sd = Ql.codes.ERR_STREAM_PREMATURE_CLOSE;
function _d() {}
var kd, xd, Md, Ad, Id, Rd, Pd = function e(t, n, r) {
    if ("function" == typeof n) return e(t, null, n);
    n || (n = {}), r = function(e) {
        var t = !1;
        return function() {
            if (!t) {
                t = !0;
                for(var n = arguments.length, r = new Array(n), i = 0; i < n; i++)r[i] = arguments[i];
                e.apply(this, r);
            }
        };
    }(r || _d);
    var i = n.readable || !1 !== n.readable && t.readable, o = n.writable || !1 !== n.writable && t.writable, s = function() {
        t.writable || c();
    }, a = t._writableState && t._writableState.finished, c = function() {
        o = !1, a = !0, i || r.call(t);
    }, l = t._readableState && t._readableState.endEmitted, d = function() {
        i = !1, l = !0, o || r.call(t);
    }, u = function(e) {
        r.call(t, e);
    }, h = function() {
        var e;
        return i && !l ? (t._readableState && t._readableState.ended || (e = new Sd), r.call(t, e)) : o && !a ? (t._writableState && t._writableState.ended || (e = new Sd), r.call(t, e)) : void 0;
    }, f = function() {
        t.req.on("finish", c);
    };
    return !function(e) {
        return e.setHeader && "function" == typeof e.abort;
    }(t) ? o && !t._writableState && (t.on("end", s), t.on("close", s)) : (t.on("complete", c), t.on("abort", h), t.req ? f() : t.on("request", f)), t.on("end", d), t.on("finish", c), !1 !== n.error && t.on("error", u), t.on("close", h), function() {
        t.removeListener("complete", c), t.removeListener("abort", h), t.removeListener("request", f), t.req && t.req.removeListener("finish", c), t.removeListener("end", s), t.removeListener("close", s), t.removeListener("finish", c), t.removeListener("end", d), t.removeListener("error", u), t.removeListener("close", h);
    };
};
function Ld() {
    if (xd) return kd;
    var e;
    function t(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (("TURBOPACK compile-time truthy", 1) ? String : ("TURBOPACK unreachable", undefined))(e);
            }(e, "string");
            return "symbol" == typeof t ? t : String(t);
        }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    xd = 1;
    var n = Pd, r = Symbol("lastResolve"), i = Symbol("lastReject"), o = Symbol("error"), s = Symbol("ended"), a = Symbol("lastPromise"), c = Symbol("handlePromise"), l = Symbol("stream");
    function d(e, t) {
        return {
            value: e,
            done: t
        };
    }
    function u(e) {
        var t = e[r];
        if (null !== t) {
            var n = e[l].read();
            null !== n && (e[a] = null, e[r] = null, e[i] = null, t(d(n, !1)));
        }
    }
    function h(e) {
        ca.nextTick(u, e);
    }
    var f = Object.getPrototypeOf(function() {}), p = Object.setPrototypeOf((t(e = {
        get stream () {
            return this[l];
        },
        next: function() {
            var e = this, t = this[o];
            if (null !== t) return Promise.reject(t);
            if (this[s]) return Promise.resolve(d(void 0, !0));
            if (this[l].destroyed) return new Promise(function(t, n) {
                ca.nextTick(function() {
                    e[o] ? n(e[o]) : t(d(void 0, !0));
                });
            });
            var n, r = this[a];
            if (r) n = new Promise(function(e, t) {
                return function(n, r) {
                    e.then(function() {
                        t[s] ? n(d(void 0, !0)) : t[c](n, r);
                    }, r);
                };
            }(r, this));
            else {
                var i = this[l].read();
                if (null !== i) return Promise.resolve(d(i, !1));
                n = new Promise(this[c]);
            }
            return this[a] = n, n;
        }
    }, Symbol.asyncIterator, function() {
        return this;
    }), t(e, "return", function() {
        var e = this;
        return new Promise(function(t, n) {
            e[l].destroy(null, function(e) {
                e ? n(e) : t(d(void 0, !0));
            });
        });
    }), e), f);
    return kd = function(e) {
        var u, f = Object.create(p, (t(u = {}, l, {
            value: e,
            writable: !0
        }), t(u, r, {
            value: null,
            writable: !0
        }), t(u, i, {
            value: null,
            writable: !0
        }), t(u, o, {
            value: null,
            writable: !0
        }), t(u, s, {
            value: e._readableState.endEmitted,
            writable: !0
        }), t(u, c, {
            value: function(e, t) {
                var n = f[l].read();
                n ? (f[a] = null, f[r] = null, f[i] = null, e(d(n, !1))) : (f[r] = e, f[i] = t);
            },
            writable: !0
        }), u));
        return f[a] = null, n(e, function(e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = f[i];
                return null !== t && (f[a] = null, f[r] = null, f[i] = null, t(e)), void (f[o] = e);
            }
            var n = f[r];
            null !== n && (f[a] = null, f[r] = null, f[i] = null, n(d(void 0, !0))), f[s] = !0;
        }), e.on("readable", h.bind(null, f)), f;
    }, kd;
}
function Od() {
    if (Rd) return Id;
    var e;
    Rd = 1, Id = E, E.ReadableState = w, sc.EventEmitter;
    var t = function(e, t) {
        return e.listeners(t).length;
    }, n = il(), r = sl.Buffer, i = (void 0 !== le ? le : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
    var o, s = Yl;
    o = s && s.debuglog ? s.debuglog("stream") : function() {};
    var a, c, l, d = Jl(), u = Xl(), h = od().getHighWaterMark, f = Ql.codes, p = f.ERR_INVALID_ARG_TYPE, g = f.ERR_STREAM_PUSH_AFTER_EOF, m = f.ERR_METHOD_NOT_IMPLEMENTED, y = f.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    fd(E, n);
    var v = u.errorOrDestroy, b = [
        "error",
        "close",
        "destroy",
        "pause",
        "resume"
    ];
    function w(t, n, r) {
        e = e || md(), t = t || {}, "boolean" != typeof r && (r = n instanceof e), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = h(this, t, "readableHighWaterMark", r), this.buffer = new d, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (a || (a = Cd.StringDecoder), this.decoder = new a(t.encoding), this.encoding = t.encoding);
    }
    function E(t) {
        if (e = e || md(), !(this instanceof E)) return new E(t);
        var r = this instanceof e;
        this._readableState = new w(t, this, r), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), n.call(this);
    }
    function C(e, t, n, s, a) {
        o("readableAddChunk", t);
        var c, l = e._readableState;
        if (null === t) l.reading = !1, function(e, t) {
            if (o("onEofChunk"), t.ended) return;
            if (t.decoder) {
                var n = t.decoder.end();
                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
            }
            t.ended = !0, t.sync ? x(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, M(e)));
        }(e, l);
        else if (a || (c = function(e, t) {
            var n;
            o = t, r.isBuffer(o) || o instanceof i || "string" == typeof t || void 0 === t || e.objectMode || (n = new p("chunk", [
                "string",
                "Buffer",
                "Uint8Array"
            ], t));
            var o;
            return n;
        }(l, t)), c) v(e, c);
        else if (l.objectMode || t && t.length > 0) if ("string" == typeof t || l.objectMode || Object.getPrototypeOf(t) === r.prototype || (t = function(e) {
            return r.from(e);
        }(t)), s) l.endEmitted ? v(e, new y) : S(e, l, t, !0);
        else if (l.ended) v(e, new g);
        else {
            if (l.destroyed) return !1;
            l.reading = !1, l.decoder && !n ? (t = l.decoder.write(t), l.objectMode || 0 !== t.length ? S(e, l, t, !1) : A(e, l)) : S(e, l, t, !1);
        }
        else s || (l.reading = !1, A(e, l));
        return !l.ended && (l.length < l.highWaterMark || 0 === l.length);
    }
    function S(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && x(e)), A(e, t);
    }
    Object.defineProperty(E.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function(e) {
            this._readableState && (this._readableState.destroyed = e);
        }
    }), E.prototype.destroy = u.destroy, E.prototype._undestroy = u.undestroy, E.prototype._destroy = function(e, t) {
        t(e);
    }, E.prototype.push = function(e, t) {
        var n, i = this._readableState;
        return i.objectMode ? n = !0 : "string" == typeof e && ((t = t || i.defaultEncoding) !== i.encoding && (e = r.from(e, t), t = ""), n = !0), C(this, e, t, !1, n);
    }, E.prototype.unshift = function(e) {
        return C(this, e, null, !0, !1);
    }, E.prototype.isPaused = function() {
        return !1 === this._readableState.flowing;
    }, E.prototype.setEncoding = function(e) {
        a || (a = Cd.StringDecoder);
        var t = new a(e);
        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
        for(var n = this._readableState.buffer.head, r = ""; null !== n;)r += t.write(n.data), n = n.next;
        return this._readableState.buffer.clear(), "" !== r && this._readableState.buffer.push(r), this._readableState.length = r.length, this;
    };
    var _ = 1073741824;
    function k(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
            return e >= _ ? e = _ : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
    }
    function x(e) {
        var t = e._readableState;
        o("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (o("emitReadable", t.flowing), t.emittedReadable = !0, ca.nextTick(M, e));
    }
    function M(e) {
        var t = e._readableState;
        o("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, O(e);
    }
    function A(e, t) {
        t.readingMore || (t.readingMore = !0, ca.nextTick(I, e, t));
    }
    function I(e, t) {
        for(; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);){
            var n = t.length;
            if (o("maybeReadMore read 0"), e.read(0), n === t.length) break;
        }
        t.readingMore = !1;
    }
    function R(e) {
        var t = e._readableState;
        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume();
    }
    function P(e) {
        o("readable nexttick read 0"), e.read(0);
    }
    function L(e, t) {
        o("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), O(e), t.flowing && !t.reading && e.read(0);
    }
    function O(e) {
        var t = e._readableState;
        for(o("flow", t.flowing); t.flowing && null !== e.read(););
    }
    function T(e, t) {
        return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n);
        "TURBOPACK unreachable";
        var n;
    }
    function N(e) {
        var t = e._readableState;
        o("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, ca.nextTick(D, t, e));
    }
    function D(e, t) {
        if (o("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
            var n = t._writableState;
            (!n || n.autoDestroy && n.finished) && t.destroy();
        }
    }
    function $(e, t) {
        for(var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n;
        return -1;
    }
    return E.prototype.read = function(e) {
        o("read", e), e = parseInt(e, 10);
        var t = this._readableState, n = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return o("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? N(this) : x(this), null;
        if (0 === (e = k(e, t)) && t.ended) return 0 === t.length && N(this), null;
        var r, i = t.needReadable;
        return o("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && o("length less than watermark", i = !0), t.ended || t.reading ? o("reading or ended", i = !1) : i && (o("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = k(n, t))), null === (r = e > 0 ? T(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && N(this)), null !== r && this.emit("data", r), r;
    }, E.prototype._read = function(e) {
        v(this, new m("_read()"));
    }, E.prototype.pipe = function(e, n) {
        var r = this, i = this._readableState;
        switch(i.pipesCount){
            case 0:
                i.pipes = e;
                break;
            case 1:
                i.pipes = [
                    i.pipes,
                    e
                ];
                break;
            default:
                i.pipes.push(e);
        }
        i.pipesCount += 1, o("pipe count=%d opts=%j", i.pipesCount, n);
        var s = (!n || !1 !== n.end) && e !== ca.stdout && e !== ca.stderr ? c : g;
        function a(t, n) {
            o("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, o("cleanup"), e.removeListener("close", f), e.removeListener("finish", p), e.removeListener("drain", l), e.removeListener("error", h), e.removeListener("unpipe", a), r.removeListener("end", c), r.removeListener("end", g), r.removeListener("data", u), d = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || l());
        }
        function c() {
            o("onend"), e.end();
        }
        i.endEmitted ? ca.nextTick(s) : r.once("end", s), e.on("unpipe", a);
        var l = function(e) {
            return function() {
                var n = e._readableState;
                o("pipeOnDrain", n.awaitDrain), n.awaitDrain && n.awaitDrain--, 0 === n.awaitDrain && t(e, "data") && (n.flowing = !0, O(e));
            };
        }(r);
        e.on("drain", l);
        var d = !1;
        function u(t) {
            o("ondata");
            var n = e.write(t);
            o("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== $(i.pipes, e)) && !d && (o("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause());
        }
        function h(n) {
            o("onerror", n), g(), e.removeListener("error", h), 0 === t(e, "error") && v(e, n);
        }
        function f() {
            e.removeListener("finish", p), g();
        }
        function p() {
            o("onfinish"), e.removeListener("close", f), g();
        }
        function g() {
            o("unpipe"), r.unpipe(e);
        }
        return r.on("data", u), function(e, t, n) {
            if ("function" == typeof e.prependListener) return e.prependListener(t, n);
            e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [
                n,
                e._events[t]
            ] : e.on(t, n);
        }(e, "error", h), e.once("close", f), e.once("finish", p), e.emit("pipe", r), i.flowing || (o("pipe resume"), r.resume()), e;
    }, E.prototype.unpipe = function(e) {
        var t = this._readableState, n = {
            hasUnpiped: !1
        };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;
        if (!e) {
            var r = t.pipes, i = t.pipesCount;
            t.pipes = null, t.pipesCount = 0, t.flowing = !1;
            for(var o = 0; o < i; o++)r[o].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this;
        }
        var s = $(t.pipes, e);
        return -1 === s || (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this;
    }, E.prototype.on = function(e, t) {
        var r = n.prototype.on.call(this, e, t), i = this._readableState;
        return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, o("on readable", i.length, i.reading), i.length ? x(this) : i.reading || ca.nextTick(P, this))), r;
    }, E.prototype.addListener = E.prototype.on, E.prototype.removeListener = function(e, t) {
        var r = n.prototype.removeListener.call(this, e, t);
        return "readable" === e && ca.nextTick(R, this), r;
    }, E.prototype.removeAllListeners = function(e) {
        var t = n.prototype.removeAllListeners.apply(this, arguments);
        return "readable" !== e && void 0 !== e || ca.nextTick(R, this), t;
    }, E.prototype.resume = function() {
        var e = this._readableState;
        return e.flowing || (o("resume"), e.flowing = !e.readableListening, function(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0, ca.nextTick(L, e, t));
        }(this, e)), e.paused = !1, this;
    }, E.prototype.pause = function() {
        return o("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (o("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
    }, E.prototype.wrap = function(e) {
        var t = this, n = this._readableState, r = !1;
        for(var i in e.on("end", function() {
            if (o("wrapped end"), n.decoder && !n.ended) {
                var e = n.decoder.end();
                e && e.length && t.push(e);
            }
            t.push(null);
        }), e.on("data", function(i) {
            (o("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i) || (n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause()));
        }), e)void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
            return function() {
                return e[t].apply(e, arguments);
            };
        }(i));
        for(var s = 0; s < b.length; s++)e.on(b[s], this.emit.bind(this, b[s]));
        return this._read = function(t) {
            o("wrapped _read", t), r && (r = !1, e.resume());
        }, this;
    }, "function" == typeof Symbol && (E.prototype[Symbol.asyncIterator] = function() {
        return void 0 === c && (c = Ld()), c(this);
    }), Object.defineProperty(E.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark;
        }
    }), Object.defineProperty(E.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer;
        }
    }), Object.defineProperty(E.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing;
        },
        set: function(e) {
            this._readableState && (this._readableState.flowing = e);
        }
    }), E._fromList = T, Object.defineProperty(E.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length;
        }
    }), "function" == typeof Symbol && (E.from = function(e, t) {
        return void 0 === l && (l = Ad ? Md : (Ad = 1, Md = function() {
            throw new Error("Readable.from is not available in the browser");
        })), l(E, e, t);
    }), Id;
}
var Td = Hd, Nd = Ql.codes, Dd = Nd.ERR_METHOD_NOT_IMPLEMENTED, $d = Nd.ERR_MULTIPLE_CALLBACK, Bd = Nd.ERR_TRANSFORM_ALREADY_TRANSFORMING, Kd = Nd.ERR_TRANSFORM_WITH_LENGTH_0, jd = md();
function Ud(e, t) {
    var n = this._transformState;
    n.transforming = !1;
    var r = n.writecb;
    if (null === r) return this.emit("error", new $d);
    n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
    var i = this._readableState;
    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}
function Hd(e) {
    if (!(this instanceof Hd)) return new Hd(e);
    jd.call(this, e), this._transformState = {
        afterTransform: Ud.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", Fd);
}
function Fd() {
    var e = this;
    "function" != typeof this._flush || this._readableState.destroyed ? zd(this, null, null) : this._flush(function(t, n) {
        zd(e, t, n);
    });
}
function zd(e, t, n) {
    if (t) return e.emit("error", t);
    if (null != n && e.push(n), e._writableState.length) throw new Kd;
    if (e._transformState.transforming) throw new Bd;
    return e.push(null);
}
fd(Hd, jd), Hd.prototype.push = function(e, t) {
    return this._transformState.needTransform = !1, jd.prototype.push.call(this, e, t);
}, Hd.prototype._transform = function(e, t, n) {
    n(new Dd("_transform()"));
}, Hd.prototype._write = function(e, t, n) {
    var r = this._transformState;
    if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
        var i = this._readableState;
        (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
}, Hd.prototype._read = function(e) {
    var t = this._transformState;
    null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform));
}, Hd.prototype._destroy = function(e, t) {
    jd.prototype._destroy.call(this, e, function(e) {
        t(e);
    });
};
var qd, Vd = Gd, Wd = Td;
function Gd(e) {
    if (!(this instanceof Gd)) return new Gd(e);
    Wd.call(this, e);
}
fd(Gd, Wd), Gd.prototype._transform = function(e, t, n) {
    n(null, e);
};
var Zd = Ql.codes, Yd = Zd.ERR_MISSING_ARGS, Jd = Zd.ERR_STREAM_DESTROYED;
function Xd(e) {
    if (e) throw e;
}
function Qd(e) {
    e();
}
function eu(e, t) {
    return e.pipe(t);
}
var tu = function() {
    for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
    var r, i = function(e) {
        return e.length ? "function" != typeof e[e.length - 1] ? Xd : e.pop() : Xd;
    }(t);
    if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new Yd("streams");
    var o = t.map(function(e, n) {
        var s = n < t.length - 1;
        return function(e, t, n, r) {
            r = function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, e.apply(void 0, arguments));
                };
            }(r);
            var i = !1;
            e.on("close", function() {
                i = !0;
            }), void 0 === qd && (qd = Pd), qd(e, {
                readable: t,
                writable: n
            }, function(e) {
                if (e) return r(e);
                i = !0, r();
            });
            var o = !1;
            return function(t) {
                if (!i && !o) return o = !0, function(e) {
                    return e.setHeader && "function" == typeof e.abort;
                }(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void r(t || new Jd("pipe"));
            };
        }(e, s, n > 0, function(e) {
            r || (r = e), e && o.forEach(Qd), s || (o.forEach(Qd), i(r));
        });
    });
    return t.reduce(eu);
};
!function(e, t) {
    (t = rl.exports = Od()).Stream = t, t.Readable = t, t.Writable = gd(), t.Duplex = md(), t.Transform = Td, t.PassThrough = Vd, t.finished = Pd, t.pipeline = tu;
}(0, rl.exports);
var nu = rl.exports;
function ru(e = {}) {
    const t = {}, n = new nu.Duplex({
        objectMode: !0,
        read: ()=>{},
        write: function(n, o, s) {
            let a = null;
            try {
                !n.id ? function(n) {
                    e?.retryOnMessage && n.method === e.retryOnMessage && Object.values(t).forEach(({ req: e, retryCount: n = 0 })=>{
                        if (!e.id) return;
                        if (n >= 3) throw new Error(`StreamMiddleware - Retry limit exceeded for request id "${e.id}"`);
                        const r = t[e.id];
                        r && (r.retryCount = n + 1), i(e);
                    });
                    r.emit("notification", n);
                }(n) : function(e) {
                    const { id: n } = e;
                    if (null === n) return;
                    const r = t[n];
                    if (!r) return void console.warn(`StreamMiddleware - Unknown response id "${n}"`);
                    delete t[n], Object.assign(r.res, e), setTimeout(r.end);
                }(n);
            } catch (e) {
                a = e;
            }
            s(a);
        }
    }), r = new Ic;
    return {
        events: r,
        middleware: (e, n, r, o)=>{
            t[e.id] = {
                req: e,
                res: n,
                next: r,
                end: o
            }, i(e);
        },
        stream: n
    };
    "TURBOPACK unreachable";
    function i(e) {
        n.push(e);
    }
}
var iu = {}, ou = {
    exports: {}
}, su = function e(t, n) {
    if (t && n) return e(t)(n);
    if ("function" != typeof t) throw new TypeError("need wrapper function");
    return Object.keys(t).forEach(function(e) {
        r[e] = t[e];
    }), r;
    "TURBOPACK unreachable";
    function r() {
        for(var e = new Array(arguments.length), n = 0; n < e.length; n++)e[n] = arguments[n];
        var r = t.apply(this, e), i = e[e.length - 1];
        return "function" == typeof r && r !== i && Object.keys(i).forEach(function(e) {
            r[e] = i[e];
        }), r;
    }
};
var au = su;
function cu(e) {
    var t = function() {
        return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
    };
    return t.called = !1, t;
}
function lu(e) {
    var t = function() {
        if (t.called) throw new Error(t.onceError);
        return t.called = !0, t.value = e.apply(this, arguments);
    }, n = e.name || "Function wrapped with `once`";
    return t.onceError = n + " shouldn't be called more than once", t.called = !1, t;
}
ou.exports = au(cu), ou.exports.strict = au(lu), cu.proto = cu(function() {
    Object.defineProperty(Function.prototype, "once", {
        value: function() {
            return cu(this);
        },
        configurable: !0
    }), Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
            return lu(this);
        },
        configurable: !0
    });
});
var du = ou.exports, uu = {};
Object.defineProperty(uu, "__esModule", {
    value: !0
}), uu.Substream = void 0;
const hu = nu;
class fu extends hu.Duplex {
    constructor({ parent: e, name: t }){
        super({
            objectMode: !0
        }), this._parent = e, this._name = t;
    }
    _read() {}
    _write(e, t, n) {
        this._parent.push({
            name: this._name,
            data: e
        }), n();
    }
}
uu.Substream = fu;
var pu = le && le.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
};
Object.defineProperty(iu, "__esModule", {
    value: !0
}), iu.ObjectMultiplex = void 0;
const gu = nu, mu = pu(du), yu = uu, vu = Symbol("IGNORE_SUBSTREAM");
let bu = class extends gu.Duplex {
    constructor(e = {}){
        super(Object.assign(Object.assign({}, e), {
            objectMode: !0
        })), this._substreams = {};
    }
    createStream(e) {
        if (this.destroyed) throw new Error(`ObjectMultiplex - parent stream for name "${e}" already destroyed`);
        if (this._readableState.ended || this._writableState.ended) throw new Error(`ObjectMultiplex - parent stream for name "${e}" already ended`);
        if (!e) throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e]) throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
        const t = new yu.Substream({
            parent: this,
            name: e
        });
        return this._substreams[e] = t, function(e, t) {
            const n = (0, mu.default)(t);
            (0, gu.finished)(e, {
                readable: !1
            }, n), (0, gu.finished)(e, {
                writable: !1
            }, n);
        }(this, (e)=>t.destroy(e || void 0)), t;
    }
    ignoreStream(e) {
        if (!e) throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e]) throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
        this._substreams[e] = vu;
    }
    _read() {}
    _write(e, t, n) {
        const { name: r, data: i } = e;
        if (!r) return console.warn(`ObjectMultiplex - malformed chunk without name "${e}"`), n();
        const o = this._substreams[r];
        return o ? (o !== vu && o.push(i), n()) : (console.warn(`ObjectMultiplex - orphaned data for stream "${r}"`), n());
    }
};
iu.ObjectMultiplex = bu;
var wu = de(iu.ObjectMultiplex);
const Eu = (e)=>null !== e && "object" == typeof e && "function" == typeof e.pipe;
Eu.writable = (e)=>Eu(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState, Eu.readable = (e)=>Eu(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState, Eu.duplex = (e)=>Eu.writable(e) && Eu.readable(e), Eu.transform = (e)=>Eu.duplex(e) && "function" == typeof e._transform;
var Cu, Su = Eu, _u = class extends nl {
    constructor(e, { jsonRpcStreamName: t, logger: n = console, maxEventListeners: r = 100, rpcMiddleware: i = [] }){
        if (super({
            logger: n,
            maxEventListeners: r,
            rpcMiddleware: i
        }), !Su.duplex(e)) throw new Error(ts.errors.invalidDuplexStream());
        this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
        const o = new wu;
        nu.pipeline(e, o, e, this._handleStreamDisconnect.bind(this, "MetaMask")), this._jsonRpcConnection = ru({
            retryOnMessage: "METAMASK_EXTENSION_CONNECT_CAN_RETRY"
        }), nu.pipeline(this._jsonRpcConnection.stream, o.createStream(t), this._jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")), this._rpcEngine.push(this._jsonRpcConnection.middleware), this._jsonRpcConnection.events.on("notification", (t)=>{
            const { method: n, params: r } = t;
            "metamask_accountsChanged" === n ? this._handleAccountsChanged(r) : "metamask_unlockStateChanged" === n ? this._handleUnlockStateChanged(r) : "metamask_chainChanged" === n ? this._handleChainChanged(r) : Oc.includes(n) ? this.emit("message", {
                type: n,
                data: r
            }) : "METAMASK_STREAM_FAILURE" === n && e.destroy(new Error(ts.errors.permanentlyDisconnected()));
        });
    }
    async _initializeStateAsync() {
        let e;
        try {
            e = await this.request({
                method: "metamask_getProviderState"
            });
        } catch (e) {
            this._log.error("MetaMask: Failed to get initial state. Please report this bug.", e);
        }
        this._initializeState(e);
    }
    _handleStreamDisconnect(e, t) {
        let n = `MetaMask: Lost connection to "${e}".`;
        t?.stack && (n += `\n${t.stack}`), this._log.warn(n), this.listenerCount("error") > 0 && this.emit("error", n), this._handleDisconnect(!1, t ? t.message : void 0);
    }
    _handleChainChanged({ chainId: e, networkVersion: t } = {}) {
        $c(e) && ((e)=>Boolean(e) && "string" == typeof e)(t) ? "loading" === t ? this._handleDisconnect(!0) : super._handleChainChanged({
            chainId: e
        }) : this._log.error(ts.errors.invalidNetworkParams(), {
            chainId: e,
            networkVersion: t
        });
    }
}, ku = class extends _u {
    constructor(e, { jsonRpcStreamName: t = "metamask-provider", logger: n = console, maxEventListeners: r = 100, shouldSendMetadata: i } = {}){
        if (super(e, {
            jsonRpcStreamName: t,
            logger: n,
            maxEventListeners: r,
            rpcMiddleware: Tc(n)
        }), this._sentWarnings = {
            chainId: !1,
            networkVersion: !1,
            selectedAddress: !1,
            enable: !1,
            experimentalMethods: !1,
            send: !1,
            events: {
                close: !1,
                data: !1,
                networkChanged: !1,
                notification: !1
            }
        }, qc(this, Cu, void 0), this._initializeStateAsync(), Vc(this, Cu, null), this.isMetaMask = !0, this._sendSync = this._sendSync.bind(this), this.enable = this.enable.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this._warnOfDeprecation = this._warnOfDeprecation.bind(this), this._metamask = this._getExperimentalApi(), this._jsonRpcConnection.events.on("notification", (e)=>{
            const { method: t } = e;
            Oc.includes(t) && (this.emit("data", e), this.emit("notification", e.params.result));
        }), i) if ("complete" === document.readyState) Kc(this._rpcEngine, this._log);
        else {
            const e = ()=>{
                Kc(this._rpcEngine, this._log), window.removeEventListener("DOMContentLoaded", e);
            };
            window.addEventListener("DOMContentLoaded", e);
        }
    }
    get chainId() {
        return this._sentWarnings.chainId || (this._log.warn(ts.warnings.chainIdDeprecation), this._sentWarnings.chainId = !0), super.chainId;
    }
    get networkVersion() {
        return this._sentWarnings.networkVersion || (this._log.warn(ts.warnings.networkVersionDeprecation), this._sentWarnings.networkVersion = !0), zc(this, Cu);
    }
    get selectedAddress() {
        return this._sentWarnings.selectedAddress || (this._log.warn(ts.warnings.selectedAddressDeprecation), this._sentWarnings.selectedAddress = !0), super.selectedAddress;
    }
    sendAsync(e, t) {
        this._rpcRequest(e, t);
    }
    addListener(e, t) {
        return this._warnOfDeprecation(e), super.addListener(e, t);
    }
    on(e, t) {
        return this._warnOfDeprecation(e), super.on(e, t);
    }
    once(e, t) {
        return this._warnOfDeprecation(e), super.once(e, t);
    }
    prependListener(e, t) {
        return this._warnOfDeprecation(e), super.prependListener(e, t);
    }
    prependOnceListener(e, t) {
        return this._warnOfDeprecation(e), super.prependOnceListener(e, t);
    }
    _handleDisconnect(e, t) {
        super._handleDisconnect(e, t), zc(this, Cu) && !e && Vc(this, Cu, null);
    }
    _warnOfDeprecation(e) {
        !1 === this._sentWarnings?.events[e] && (this._log.warn(ts.warnings.events[e]), this._sentWarnings.events[e] = !0);
    }
    async enable() {
        return this._sentWarnings.enable || (this._log.warn(ts.warnings.enableDeprecation), this._sentWarnings.enable = !0), new Promise((e, t)=>{
            try {
                this._rpcRequest({
                    method: "eth_requestAccounts",
                    params: []
                }, Dc(e, t));
            } catch (e) {
                t(e);
            }
        });
    }
    send(e, t) {
        return this._sentWarnings.send || (this._log.warn(ts.warnings.sendDeprecation), this._sentWarnings.send = !0), "string" != typeof e || t && !Array.isArray(t) ? e && "object" == typeof e && "function" == typeof t ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise((n, r)=>{
            try {
                this._rpcRequest({
                    method: e,
                    params: t
                }, Dc(n, r, !1));
            } catch (e) {
                r(e);
            }
        });
    }
    _sendSync(e) {
        let t;
        switch(e.method){
            case "eth_accounts":
                t = this.selectedAddress ? [
                    this.selectedAddress
                ] : [];
                break;
            case "eth_coinbase":
                t = this.selectedAddress ?? null;
                break;
            case "eth_uninstallFilter":
                this._rpcRequest(e, Bc), t = !0;
                break;
            case "net_version":
                t = zc(this, Cu) ?? null;
                break;
            default:
                throw new Error(ts.errors.unsupportedSync(e.method));
        }
        return {
            id: e.id,
            jsonrpc: e.jsonrpc,
            result: t
        };
    }
    _getExperimentalApi() {
        return new Proxy({
            isUnlocked: async ()=>(this._state.initialized || await new Promise((e)=>{
                    this.on("_initialized", ()=>e());
                }), this._state.isUnlocked),
            requestBatch: async (e)=>{
                if (!Array.isArray(e)) throw Ya({
                    message: "Batch requests must be made with an array of request objects.",
                    data: e
                });
                return new Promise((t, n)=>{
                    this._rpcRequest(e, Dc(t, n));
                });
            }
        }, {
            get: (e, t, ...n)=>(this._sentWarnings.experimentalMethods || (this._log.warn(ts.warnings.experimentalMethods), this._sentWarnings.experimentalMethods = !0), Reflect.get(e, t, ...n))
        });
    }
    _handleChainChanged({ chainId: e, networkVersion: t } = {}) {
        super._handleChainChanged({
            chainId: e,
            networkVersion: t
        }), this._state.isConnected && t !== zc(this, Cu) && (Vc(this, Cu, t), this._state.initialized && this.emit("networkChanged", zc(this, Cu)));
    }
};
Cu = new WeakMap;
const xu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("MM_SDK");
xu.color = "#FFAC1C";
var Mu = {}, Au = {};
Object.defineProperty(Au, "__esModule", {
    value: !0
}), Au.EthereumProviderError = Au.EthereumRpcError = void 0;
const Iu = Ta;
class Ru extends Error {
    constructor(e, t, n){
        if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
        if (!t || "string" != typeof t) throw new Error('"message" must be a nonempty string.');
        super(t), this.code = e, void 0 !== n && (this.data = n);
    }
    serialize() {
        const e = {
            code: this.code,
            message: this.message
        };
        return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e;
    }
    toString() {
        return Iu.default(this.serialize(), Pu, 2);
    }
}
Au.EthereumRpcError = Ru;
function Pu(e, t) {
    if ("[Circular]" !== t) return t;
}
Au.EthereumProviderError = class extends Ru {
    constructor(e, t, n){
        if (!function(e) {
            return Number.isInteger(e) && e >= 1e3 && e <= 4999;
        }(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(e, t, n);
    }
};
var Lu = {}, Ou = {};
Object.defineProperty(Ou, "__esModule", {
    value: !0
}), Ou.errorValues = Ou.errorCodes = void 0, Ou.errorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
}, Ou.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
}, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const t = Ou, n = Au, r = t.errorCodes.rpc.internal, i = "Unspecified error message. This is a bug, please report it.", o = {
        code: r,
        message: s(r)
    };
    function s(n, r = i) {
        if (Number.isInteger(n)) {
            const r = n.toString();
            if (d(t.errorValues, r)) return t.errorValues[r].message;
            if (c(n)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return r;
    }
    function a(e) {
        if (!Number.isInteger(e)) return !1;
        const n = e.toString();
        return !!t.errorValues[n] || !!c(e);
    }
    function c(e) {
        return e >= -32099 && e <= -32e3;
    }
    function l(e) {
        return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e;
    }
    function d(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", e.getMessageFromCode = s, e.isValidCode = a, e.serializeError = function(e, { fallbackError: t = o, shouldIncludeStack: r = !1 } = {}) {
        var i, c;
        if (!t || !Number.isInteger(t.code) || "string" != typeof t.message) throw new Error("Must provide fallback error with integer number code and string message.");
        if (e instanceof n.EthereumRpcError) return e.serialize();
        const u = {};
        if (e && "object" == typeof e && !Array.isArray(e) && d(e, "code") && a(e.code)) {
            const t = e;
            u.code = t.code, t.message && "string" == typeof t.message ? (u.message = t.message, d(t, "data") && (u.data = t.data)) : (u.message = s(u.code), u.data = {
                originalError: l(e)
            });
        } else {
            u.code = t.code;
            const n = null === (i = e) || void 0 === i ? void 0 : i.message;
            u.message = n && "string" == typeof n ? n : t.message, u.data = {
                originalError: l(e)
            };
        }
        const h = null === (c = e) || void 0 === c ? void 0 : c.stack;
        return r && e && h && "string" == typeof h && (u.stack = h), u;
    };
}(Lu);
var Tu = {};
Object.defineProperty(Tu, "__esModule", {
    value: !0
}), Tu.ethErrors = void 0;
const Nu = Au, Du = Lu, $u = Ou;
function Bu(e, t) {
    const [n, r] = ju(t);
    return new Nu.EthereumRpcError(e, n || Du.getMessageFromCode(e), r);
}
function Ku(e, t) {
    const [n, r] = ju(t);
    return new Nu.EthereumProviderError(e, n || Du.getMessageFromCode(e), r);
}
function ju(e) {
    if (e) {
        if ("string" == typeof e) return [
            e
        ];
        if ("object" == typeof e && !Array.isArray(e)) {
            const { message: t, data: n } = e;
            if (t && "string" != typeof t) throw new Error("Must specify string message.");
            return [
                t || void 0,
                n
            ];
        }
    }
    return [];
}
Tu.ethErrors = {
    rpc: {
        parse: (e)=>Bu($u.errorCodes.rpc.parse, e),
        invalidRequest: (e)=>Bu($u.errorCodes.rpc.invalidRequest, e),
        invalidParams: (e)=>Bu($u.errorCodes.rpc.invalidParams, e),
        methodNotFound: (e)=>Bu($u.errorCodes.rpc.methodNotFound, e),
        internal: (e)=>Bu($u.errorCodes.rpc.internal, e),
        server: (e)=>{
            if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return Bu(t, e);
        },
        invalidInput: (e)=>Bu($u.errorCodes.rpc.invalidInput, e),
        resourceNotFound: (e)=>Bu($u.errorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: (e)=>Bu($u.errorCodes.rpc.resourceUnavailable, e),
        transactionRejected: (e)=>Bu($u.errorCodes.rpc.transactionRejected, e),
        methodNotSupported: (e)=>Bu($u.errorCodes.rpc.methodNotSupported, e),
        limitExceeded: (e)=>Bu($u.errorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: (e)=>Ku($u.errorCodes.provider.userRejectedRequest, e),
        unauthorized: (e)=>Ku($u.errorCodes.provider.unauthorized, e),
        unsupportedMethod: (e)=>Ku($u.errorCodes.provider.unsupportedMethod, e),
        disconnected: (e)=>Ku($u.errorCodes.provider.disconnected, e),
        chainDisconnected: (e)=>Ku($u.errorCodes.provider.chainDisconnected, e),
        custom: (e)=>{
            if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const { code: t, message: n, data: r } = e;
            if (!n || "string" != typeof n) throw new Error('"message" must be a nonempty string');
            return new Nu.EthereumProviderError(t, n, r);
        }
    }
}, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
    const t = Au;
    Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function() {
            return t.EthereumRpcError;
        }
    }), Object.defineProperty(e, "EthereumProviderError", {
        enumerable: !0,
        get: function() {
            return t.EthereumProviderError;
        }
    });
    const n = Lu;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function() {
            return n.serializeError;
        }
    }), Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return n.getMessageFromCode;
        }
    });
    const r = Tu;
    Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function() {
            return r.ethErrors;
        }
    });
    const i = Ou;
    Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function() {
            return i.errorCodes;
        }
    });
}(Mu);
var Uu = {
    exports: {}
};
Uu.exports = function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for(var i in e)n.d(r, i, (function(t) {
            return e[t];
        }).bind(null, i));
        return r;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 90);
}({
    17: function(e, t, n) {
        t.__esModule = !0, t.default = void 0;
        var r = n(18), i = function() {
            function e() {}
            return e.getFirstMatch = function(e, t) {
                var n = t.match(e);
                return n && n.length > 0 && n[1] || "";
            }, e.getSecondMatch = function(e, t) {
                var n = t.match(e);
                return n && n.length > 1 && n[2] || "";
            }, e.matchAndReturnConst = function(e, t, n) {
                if (e.test(t)) return n;
            }, e.getWindowsVersionName = function(e) {
                switch(e){
                    case "NT":
                        return "NT";
                    case "XP":
                    case "NT 5.1":
                        return "XP";
                    case "NT 5.0":
                        return "2000";
                    case "NT 5.2":
                        return "2003";
                    case "NT 6.0":
                        return "Vista";
                    case "NT 6.1":
                        return "7";
                    case "NT 6.2":
                        return "8";
                    case "NT 6.3":
                        return "8.1";
                    case "NT 10.0":
                        return "10";
                    default:
                        return;
                }
            }, e.getMacOSVersionName = function(e) {
                var t = e.split(".").splice(0, 2).map(function(e) {
                    return parseInt(e, 10) || 0;
                });
                if (t.push(0), 10 === t[0]) switch(t[1]){
                    case 5:
                        return "Leopard";
                    case 6:
                        return "Snow Leopard";
                    case 7:
                        return "Lion";
                    case 8:
                        return "Mountain Lion";
                    case 9:
                        return "Mavericks";
                    case 10:
                        return "Yosemite";
                    case 11:
                        return "El Capitan";
                    case 12:
                        return "Sierra";
                    case 13:
                        return "High Sierra";
                    case 14:
                        return "Mojave";
                    case 15:
                        return "Catalina";
                    default:
                        return;
                }
            }, e.getAndroidVersionName = function(e) {
                var t = e.split(".").splice(0, 2).map(function(e) {
                    return parseInt(e, 10) || 0;
                });
                if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0;
            }, e.getVersionPrecision = function(e) {
                return e.split(".").length;
            }, e.compareVersions = function(t, n, r) {
                void 0 === r && (r = !1);
                var i = e.getVersionPrecision(t), o = e.getVersionPrecision(n), s = Math.max(i, o), a = 0, c = e.map([
                    t,
                    n
                ], function(t) {
                    var n = s - e.getVersionPrecision(t), r = t + new Array(n + 1).join(".0");
                    return e.map(r.split("."), function(e) {
                        return new Array(20 - e.length).join("0") + e;
                    }).reverse();
                });
                for(r && (a = s - Math.min(i, o)), s -= 1; s >= a;){
                    if (c[0][s] > c[1][s]) return 1;
                    if (c[0][s] === c[1][s]) {
                        if (s === a) return 0;
                        s -= 1;
                    } else if (c[0][s] < c[1][s]) return -1;
                }
            }, e.map = function(e, t) {
                var n, r = [];
                if (Array.prototype.map) return Array.prototype.map.call(e, t);
                for(n = 0; n < e.length; n += 1)r.push(t(e[n]));
                return r;
            }, e.find = function(e, t) {
                var n, r;
                if (Array.prototype.find) return Array.prototype.find.call(e, t);
                for(n = 0, r = e.length; n < r; n += 1){
                    var i = e[n];
                    if (t(i, n)) return i;
                }
            }, e.assign = function(e) {
                for(var t, n, r = e, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)o[s - 1] = arguments[s];
                if ("TURBOPACK compile-time truthy", 1) return Object.assign.apply(Object, [
                    e
                ].concat(o));
                "TURBOPACK unreachable";
                var a;
            }, e.getBrowserAlias = function(e) {
                return r.BROWSER_ALIASES_MAP[e];
            }, e.getBrowserTypeByAlias = function(e) {
                return r.BROWSER_MAP[e] || "";
            }, e;
        }();
        t.default = i, e.exports = t.default;
    },
    18: function(e, t, n) {
        t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku"
        }, t.BROWSER_MAP = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser"
        }, t.PLATFORMS_MAP = {
            tablet: "tablet",
            mobile: "mobile",
            desktop: "desktop",
            tv: "tv"
        }, t.OS_MAP = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku"
        }, t.ENGINE_MAP = {
            EdgeHTML: "EdgeHTML",
            Blink: "Blink",
            Trident: "Trident",
            Presto: "Presto",
            Gecko: "Gecko",
            WebKit: "WebKit"
        };
    },
    90: function(e, t, n) {
        t.__esModule = !0, t.default = void 0;
        var r, i = (r = n(91)) && r.__esModule ? r : {
            default: r
        }, o = n(18);
        function s(e, t) {
            for(var n = 0; n < t.length; n++){
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var a = function() {
            function e() {}
            var t, n, r;
            return e.getParser = function(e, t) {
                if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                return new i.default(e, t);
            }, e.parse = function(e) {
                return new i.default(e).getResult();
            }, t = e, r = [
                {
                    key: "BROWSER_MAP",
                    get: function() {
                        return o.BROWSER_MAP;
                    }
                },
                {
                    key: "ENGINE_MAP",
                    get: function() {
                        return o.ENGINE_MAP;
                    }
                },
                {
                    key: "OS_MAP",
                    get: function() {
                        return o.OS_MAP;
                    }
                },
                {
                    key: "PLATFORMS_MAP",
                    get: function() {
                        return o.PLATFORMS_MAP;
                    }
                }
            ], (n = null) && s(t.prototype, n), r && s(t, r), e;
        }();
        t.default = a, e.exports = t.default;
    },
    91: function(e, t, n) {
        t.__esModule = !0, t.default = void 0;
        var r = c(n(92)), i = c(n(93)), o = c(n(94)), s = c(n(95)), a = c(n(17));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var l = function() {
            function e(e, t) {
                if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                this._ua = e, this.parsedResult = {}, !0 !== t && this.parse();
            }
            var t = e.prototype;
            return t.getUA = function() {
                return this._ua;
            }, t.test = function(e) {
                return e.test(this._ua);
            }, t.parseBrowser = function() {
                var e = this;
                this.parsedResult.browser = {};
                var t = a.default.find(r.default, function(t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array) return t.test.some(function(t) {
                        return e.test(t);
                    });
                    throw new Error("Browser's test function is not valid");
                });
                return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
            }, t.getBrowser = function() {
                return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
            }, t.getBrowserName = function(e) {
                return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
            }, t.getBrowserVersion = function() {
                return this.getBrowser().version;
            }, t.getOS = function() {
                return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
            }, t.parseOS = function() {
                var e = this;
                this.parsedResult.os = {};
                var t = a.default.find(i.default, function(t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array) return t.test.some(function(t) {
                        return e.test(t);
                    });
                    throw new Error("Browser's test function is not valid");
                });
                return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
            }, t.getOSName = function(e) {
                var t = this.getOS().name;
                return e ? String(t).toLowerCase() || "" : t || "";
            }, t.getOSVersion = function() {
                return this.getOS().version;
            }, t.getPlatform = function() {
                return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
            }, t.getPlatformType = function(e) {
                void 0 === e && (e = !1);
                var t = this.getPlatform().type;
                return e ? String(t).toLowerCase() || "" : t || "";
            }, t.parsePlatform = function() {
                var e = this;
                this.parsedResult.platform = {};
                var t = a.default.find(o.default, function(t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array) return t.test.some(function(t) {
                        return e.test(t);
                    });
                    throw new Error("Browser's test function is not valid");
                });
                return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
            }, t.getEngine = function() {
                return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
            }, t.getEngineName = function(e) {
                return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
            }, t.parseEngine = function() {
                var e = this;
                this.parsedResult.engine = {};
                var t = a.default.find(s.default, function(t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array) return t.test.some(function(t) {
                        return e.test(t);
                    });
                    throw new Error("Browser's test function is not valid");
                });
                return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
            }, t.parse = function() {
                return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
            }, t.getResult = function() {
                return a.default.assign({}, this.parsedResult);
            }, t.satisfies = function(e) {
                var t = this, n = {}, r = 0, i = {}, o = 0;
                if (Object.keys(e).forEach(function(t) {
                    var s = e[t];
                    "string" == typeof s ? (i[t] = s, o += 1) : "object" == typeof s && (n[t] = s, r += 1);
                }), r > 0) {
                    var s = Object.keys(n), c = a.default.find(s, function(e) {
                        return t.isOS(e);
                    });
                    if (c) {
                        var l = this.satisfies(n[c]);
                        if (void 0 !== l) return l;
                    }
                    var d = a.default.find(s, function(e) {
                        return t.isPlatform(e);
                    });
                    if (d) {
                        var u = this.satisfies(n[d]);
                        if (void 0 !== u) return u;
                    }
                }
                if (o > 0) {
                    var h = Object.keys(i), f = a.default.find(h, function(e) {
                        return t.isBrowser(e, !0);
                    });
                    if (void 0 !== f) return this.compareVersion(i[f]);
                }
            }, t.isBrowser = function(e, t) {
                void 0 === t && (t = !1);
                var n = this.getBrowserName().toLowerCase(), r = e.toLowerCase(), i = a.default.getBrowserTypeByAlias(r);
                return t && i && (r = i.toLowerCase()), r === n;
            }, t.compareVersion = function(e) {
                var t = [
                    0
                ], n = e, r = !1, i = this.getBrowserVersion();
                if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (r = !0, n = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (r = !0, n = e.substr(1)), t.indexOf(a.default.compareVersions(i, n, r)) > -1;
            }, t.isOS = function(e) {
                return this.getOSName(!0) === String(e).toLowerCase();
            }, t.isPlatform = function(e) {
                return this.getPlatformType(!0) === String(e).toLowerCase();
            }, t.isEngine = function(e) {
                return this.getEngineName(!0) === String(e).toLowerCase();
            }, t.is = function(e, t) {
                return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
            }, t.some = function(e) {
                var t = this;
                return void 0 === e && (e = []), e.some(function(e) {
                    return t.is(e);
                });
            }, e;
        }();
        t.default = l, e.exports = t.default;
    },
    92: function(e, t, n) {
        t.__esModule = !0, t.default = void 0;
        var r, i = (r = n(17)) && r.__esModule ? r : {
            default: r
        }, o = /version\/(\d+(\.?_?\d+)+)/i, s = [
            {
                test: [
                    /googlebot/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Googlebot"
                    }, n = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /opera/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Opera"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /opr\/|opios/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Opera"
                    }, n = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /SamsungBrowser/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Samsung Internet for Android"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /Whale/i
                ],
                describe: function(e) {
                    var t = {
                        name: "NAVER Whale Browser"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /MZBrowser/i
                ],
                describe: function(e) {
                    var t = {
                        name: "MZ Browser"
                    }, n = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /focus/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Focus"
                    }, n = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /swing/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Swing"
                    }, n = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /coast/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Opera Coast"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /opt\/\d+(?:.?_?\d+)+/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Opera Touch"
                    }, n = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /yabrowser/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Yandex Browser"
                    }, n = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /ucbrowser/i
                ],
                describe: function(e) {
                    var t = {
                        name: "UC Browser"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /Maxthon|mxios/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Maxthon"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /epiphany/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Epiphany"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /puffin/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Puffin"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /sleipnir/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Sleipnir"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /k-meleon/i
                ],
                describe: function(e) {
                    var t = {
                        name: "K-Meleon"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /micromessenger/i
                ],
                describe: function(e) {
                    var t = {
                        name: "WeChat"
                    }, n = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /qqbrowser/i
                ],
                describe: function(e) {
                    var t = {
                        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                    }, n = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /msie|trident/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Internet Explorer"
                    }, n = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /\sedg\//i
                ],
                describe: function(e) {
                    var t = {
                        name: "Microsoft Edge"
                    }, n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /edg([ea]|ios)/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Microsoft Edge"
                    }, n = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /vivaldi/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Vivaldi"
                    }, n = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /seamonkey/i
                ],
                describe: function(e) {
                    var t = {
                        name: "SeaMonkey"
                    }, n = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /sailfish/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Sailfish"
                    }, n = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /silk/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Amazon Silk"
                    }, n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /phantom/i
                ],
                describe: function(e) {
                    var t = {
                        name: "PhantomJS"
                    }, n = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /slimerjs/i
                ],
                describe: function(e) {
                    var t = {
                        name: "SlimerJS"
                    }, n = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /blackberry|\bbb\d+/i,
                    /rim\stablet/i
                ],
                describe: function(e) {
                    var t = {
                        name: "BlackBerry"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /(web|hpw)[o0]s/i
                ],
                describe: function(e) {
                    var t = {
                        name: "WebOS Browser"
                    }, n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /bada/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Bada"
                    }, n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /tizen/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Tizen"
                    }, n = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /qupzilla/i
                ],
                describe: function(e) {
                    var t = {
                        name: "QupZilla"
                    }, n = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /firefox|iceweasel|fxios/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Firefox"
                    }, n = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /electron/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Electron"
                    }, n = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /MiuiBrowser/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Miui"
                    }, n = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /chromium/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Chromium"
                    }, n = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /chrome|crios|crmo/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Chrome"
                    }, n = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /GSA/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Google Search"
                    }, n = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: function(e) {
                    var t = !e.test(/like android/i), n = e.test(/android/i);
                    return t && n;
                },
                describe: function(e) {
                    var t = {
                        name: "Android Browser"
                    }, n = i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /playstation 4/i
                ],
                describe: function(e) {
                    var t = {
                        name: "PlayStation 4"
                    }, n = i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /safari|applewebkit/i
                ],
                describe: function(e) {
                    var t = {
                        name: "Safari"
                    }, n = i.default.getFirstMatch(o, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /.*/i
                ],
                describe: function(e) {
                    var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                    return {
                        name: i.default.getFirstMatch(t, e),
                        version: i.default.getSecondMatch(t, e)
                    };
                }
            }
        ];
        t.default = s, e.exports = t.default;
    },
    93: function(e, t, n) {
        t.__esModule = !0, t.default = void 0;
        var r, i = (r = n(17)) && r.__esModule ? r : {
            default: r
        }, o = n(18), s = [
            {
                test: [
                    /Roku\/DVP/
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                    return {
                        name: o.OS_MAP.Roku,
                        version: t
                    };
                }
            },
            {
                test: [
                    /windows phone/i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                    return {
                        name: o.OS_MAP.WindowsPhone,
                        version: t
                    };
                }
            },
            {
                test: [
                    /windows /i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), n = i.default.getWindowsVersionName(t);
                    return {
                        name: o.OS_MAP.Windows,
                        version: t,
                        versionName: n
                    };
                }
            },
            {
                test: [
                    /Macintosh(.*?) FxiOS(.*?)\//
                ],
                describe: function(e) {
                    var t = {
                        name: o.OS_MAP.iOS
                    }, n = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /macintosh/i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), n = i.default.getMacOSVersionName(t), r = {
                        name: o.OS_MAP.MacOS,
                        version: t
                    };
                    return n && (r.versionName = n), r;
                }
            },
            {
                test: [
                    /(ipod|iphone|ipad)/i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                    return {
                        name: o.OS_MAP.iOS,
                        version: t
                    };
                }
            },
            {
                test: function(e) {
                    var t = !e.test(/like android/i), n = e.test(/android/i);
                    return t && n;
                },
                describe: function(e) {
                    var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), n = i.default.getAndroidVersionName(t), r = {
                        name: o.OS_MAP.Android,
                        version: t
                    };
                    return n && (r.versionName = n), r;
                }
            },
            {
                test: [
                    /(web|hpw)[o0]s/i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), n = {
                        name: o.OS_MAP.WebOS
                    };
                    return t && t.length && (n.version = t), n;
                }
            },
            {
                test: [
                    /blackberry|\bbb\d+/i,
                    /rim\stablet/i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                    return {
                        name: o.OS_MAP.BlackBerry,
                        version: t
                    };
                }
            },
            {
                test: [
                    /bada/i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                    return {
                        name: o.OS_MAP.Bada,
                        version: t
                    };
                }
            },
            {
                test: [
                    /tizen/i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                    return {
                        name: o.OS_MAP.Tizen,
                        version: t
                    };
                }
            },
            {
                test: [
                    /linux/i
                ],
                describe: function() {
                    return {
                        name: o.OS_MAP.Linux
                    };
                }
            },
            {
                test: [
                    /CrOS/
                ],
                describe: function() {
                    return {
                        name: o.OS_MAP.ChromeOS
                    };
                }
            },
            {
                test: [
                    /PlayStation 4/
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                    return {
                        name: o.OS_MAP.PlayStation4,
                        version: t
                    };
                }
            }
        ];
        t.default = s, e.exports = t.default;
    },
    94: function(e, t, n) {
        t.__esModule = !0, t.default = void 0;
        var r, i = (r = n(17)) && r.__esModule ? r : {
            default: r
        }, o = n(18), s = [
            {
                test: [
                    /googlebot/i
                ],
                describe: function() {
                    return {
                        type: "bot",
                        vendor: "Google"
                    };
                }
            },
            {
                test: [
                    /huawei/i
                ],
                describe: function(e) {
                    var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova", n = {
                        type: o.PLATFORMS_MAP.mobile,
                        vendor: "Huawei"
                    };
                    return t && (n.model = t), n;
                }
            },
            {
                test: [
                    /nexus\s*(?:7|8|9|10).*/i
                ],
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tablet,
                        vendor: "Nexus"
                    };
                }
            },
            {
                test: [
                    /ipad/i
                ],
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tablet,
                        vendor: "Apple",
                        model: "iPad"
                    };
                }
            },
            {
                test: [
                    /Macintosh(.*?) FxiOS(.*?)\//
                ],
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tablet,
                        vendor: "Apple",
                        model: "iPad"
                    };
                }
            },
            {
                test: [
                    /kftt build/i
                ],
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tablet,
                        vendor: "Amazon",
                        model: "Kindle Fire HD 7"
                    };
                }
            },
            {
                test: [
                    /silk/i
                ],
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tablet,
                        vendor: "Amazon"
                    };
                }
            },
            {
                test: [
                    /tablet(?! pc)/i
                ],
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tablet
                    };
                }
            },
            {
                test: function(e) {
                    var t = e.test(/ipod|iphone/i), n = e.test(/like (ipod|iphone)/i);
                    return t && !n;
                },
                describe: function(e) {
                    var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                    return {
                        type: o.PLATFORMS_MAP.mobile,
                        vendor: "Apple",
                        model: t
                    };
                }
            },
            {
                test: [
                    /nexus\s*[0-6].*/i,
                    /galaxy nexus/i
                ],
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.mobile,
                        vendor: "Nexus"
                    };
                }
            },
            {
                test: [
                    /[^-]mobi/i
                ],
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.mobile
                    };
                }
            },
            {
                test: function(e) {
                    return "blackberry" === e.getBrowserName(!0);
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.mobile,
                        vendor: "BlackBerry"
                    };
                }
            },
            {
                test: function(e) {
                    return "bada" === e.getBrowserName(!0);
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.mobile
                    };
                }
            },
            {
                test: function(e) {
                    return "windows phone" === e.getBrowserName();
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.mobile,
                        vendor: "Microsoft"
                    };
                }
            },
            {
                test: function(e) {
                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                    return "android" === e.getOSName(!0) && t >= 3;
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tablet
                    };
                }
            },
            {
                test: function(e) {
                    return "android" === e.getOSName(!0);
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.mobile
                    };
                }
            },
            {
                test: function(e) {
                    return "macos" === e.getOSName(!0);
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.desktop,
                        vendor: "Apple"
                    };
                }
            },
            {
                test: function(e) {
                    return "windows" === e.getOSName(!0);
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.desktop
                    };
                }
            },
            {
                test: function(e) {
                    return "linux" === e.getOSName(!0);
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.desktop
                    };
                }
            },
            {
                test: function(e) {
                    return "playstation 4" === e.getOSName(!0);
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tv
                    };
                }
            },
            {
                test: function(e) {
                    return "roku" === e.getOSName(!0);
                },
                describe: function() {
                    return {
                        type: o.PLATFORMS_MAP.tv
                    };
                }
            }
        ];
        t.default = s, e.exports = t.default;
    },
    95: function(e, t, n) {
        t.__esModule = !0, t.default = void 0;
        var r, i = (r = n(17)) && r.__esModule ? r : {
            default: r
        }, o = n(18), s = [
            {
                test: function(e) {
                    return "microsoft edge" === e.getBrowserName(!0);
                },
                describe: function(e) {
                    if (/\sedg\//i.test(e)) return {
                        name: o.ENGINE_MAP.Blink
                    };
                    var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                    return {
                        name: o.ENGINE_MAP.EdgeHTML,
                        version: t
                    };
                }
            },
            {
                test: [
                    /trident/i
                ],
                describe: function(e) {
                    var t = {
                        name: o.ENGINE_MAP.Trident
                    }, n = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: function(e) {
                    return e.test(/presto/i);
                },
                describe: function(e) {
                    var t = {
                        name: o.ENGINE_MAP.Presto
                    }, n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: function(e) {
                    var t = e.test(/gecko/i), n = e.test(/like gecko/i);
                    return t && !n;
                },
                describe: function(e) {
                    var t = {
                        name: o.ENGINE_MAP.Gecko
                    }, n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            },
            {
                test: [
                    /(apple)?webkit\/537\.36/i
                ],
                describe: function() {
                    return {
                        name: o.ENGINE_MAP.Blink
                    };
                }
            },
            {
                test: [
                    /(apple)?webkit/i
                ],
                describe: function(e) {
                    var t = {
                        name: o.ENGINE_MAP.WebKit
                    }, n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                }
            }
        ];
        t.default = s, e.exports = t.default;
    }
});
var Hu = de(Uu.exports);
const Fu = {
    Initialized: "initialized",
    DisplayURI: "display_uri",
    ProviderUpdate: "provider_update",
    ConnectWithResponse: "connectWithResponse",
    ConnectionStatus: "connection_status",
    ServiceStatus: "service_status"
};
class zu {
    constructor({ shouldSetOnWindow: e, connectionStream: t, shouldSendMetadata: n = !1, shouldShimWeb3: r, sdkInstance: i }){
        const o = new Wu({
            connectionStream: t,
            shouldSendMetadata: n,
            shouldSetOnWindow: e,
            shouldShimWeb3: r,
            autoRequestAccounts: !1
        }), s = new Proxy(o, {
            deleteProperty: ()=>!0
        });
        if (this.provider = s, this.sdkInstance = i, e && "undefined" != typeof window) try {
            a = o, window.ethereum = a, window.dispatchEvent(new Event("ethereum#initialized"));
        } catch (e) {
            xu("[Ethereum] Unable to set global provider - window.ethereum may be read-only", e);
        }
        var a;
        if (r && "undefined" != typeof window) try {
            !function(e, t = console) {
                let n = !1, r = !1;
                if (!window.web3) {
                    const i = "__isMetaMaskShim__";
                    let o = {
                        currentProvider: e
                    };
                    Object.defineProperty(o, i, {
                        value: !0,
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    }), o = new Proxy(o, {
                        get: (o, s, ...a)=>("currentProvider" !== s || n ? "currentProvider" === s || s === i || r || (r = !0, t.error("MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"), e.request({
                                method: "metamask_logWeb3ShimUsage"
                            }).catch((e)=>{
                                t.debug("MetaMask: Failed to log web3 shim usage.", e);
                            })) : (n = !0, t.warn("You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3")), Reflect.get(o, s, ...a)),
                        set: (...e)=>(t.warn("You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"), Reflect.set(...e))
                    }), Object.defineProperty(window, "web3", {
                        value: o,
                        enumerable: !1,
                        configurable: !0,
                        writable: !0
                    });
                }
            }(this.provider);
        } catch (e) {
            xu("[Ethereum] Unable to shim web3 - window.web3 may be read-only", e);
        }
        this.provider.on("display_uri", (e)=>{
            this.sdkInstance.emit(Fu.DisplayURI, e);
        }), this.provider.on("_initialized", ()=>{
            const e = {
                chainId: this.provider.getChainId(),
                isConnected: this.provider.isConnected(),
                isMetaMask: this.provider.isMetaMask,
                selectedAddress: this.provider.getSelectedAddress(),
                networkVersion: this.provider.getNetworkVersion()
            };
            this.sdkInstance.emit(Fu.Initialized, e), xu("[Ethereum: constructor()] provider initialized", e);
        });
    }
    static init(e) {
        var t;
        return xu("[Ethereum: init()] Initializing Ethereum service"), this.instance = new zu(e), null === (t = this.instance) || void 0 === t ? void 0 : t.provider;
    }
    static destroy() {}
    static getInstance() {
        var e;
        if (!(null === (e = this.instance) || void 0 === e ? void 0 : e.provider)) throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");
        return this.instance;
    }
    static getProvider() {
        var e;
        if (!(null === (e = this.instance) || void 0 === e ? void 0 : e.provider)) throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");
        return this.instance.provider;
    }
}
class qu {
    constructor({ useDeepLink: e, preferredOpenLink: t, debug: n = !1 }){
        this.state = {
            platformType: void 0,
            useDeeplink: !1,
            preferredOpenLink: void 0,
            debug: !1
        }, this.state.platformType = this.getPlatformType(), this.state.useDeeplink = e, this.state.preferredOpenLink = t, this.state.debug = n;
    }
    openDeeplink(e, t, n) {
        return function(e, t, n, r) {
            const { state: i } = e;
            xu(`[PlatfformManager: openDeeplink()] universalLink --\x3e ${t}`), xu(`[PlatfformManager: openDeeplink()] deepLink --\x3e ${n}`);
            try {
                if (i.preferredOpenLink) return void i.preferredOpenLink(i.useDeeplink ? n : t, r);
                if (xu(`[PlatfformManager: openDeeplink()] open link now useDeepLink=${i.useDeeplink} link=${i.useDeeplink ? n : t}`), i.useDeeplink) "undefined" != typeof window && (window.location.href = n);
                else if ("undefined" != typeof document) {
                    const e = document.createElement("a");
                    e.href = t, e.target = "_self", e.rel = "noreferrer noopener", e.click();
                }
            } catch (e) {
                console.log("[PlatfformManager: openDeeplink()] can't open link", e);
            }
        }(this, e, t, n);
    }
    isReactNative() {
        var e;
        return this.isNotBrowser() && "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.navigator) && "ReactNative" === (null === (e = window.navigator) || void 0 === e ? void 0 : e.product);
    }
    isMetaMaskInstalled() {
        return function() {
            const e = zu.getProvider() || (null === window || void 0 === window ? void 0 : window.ethereum);
            return xu(`[PlatfformManager: isMetaMaskInstalled()] isMetaMask=${null == e ? void 0 : e.isMetaMask} isConnected=${null == e ? void 0 : e.isConnected()}`), (null == e ? void 0 : e.isMetaMask) && (null == e ? void 0 : e.isConnected());
        }();
    }
    isDesktopWeb() {
        return this.isBrowser() && !this.isMobileWeb();
    }
    isMobile() {
        var e, t;
        const n = Hu.parse(window.navigator.userAgent);
        return "mobile" === (null === (e = null == n ? void 0 : n.platform) || void 0 === e ? void 0 : e.type) || "tablet" === (null === (t = null == n ? void 0 : n.platform) || void 0 === t ? void 0 : t.type);
    }
    isSecure() {
        return this.isReactNative() || this.isMobileWeb();
    }
    isMetaMaskMobileWebView() {
        return "undefined" != typeof window && Boolean(window.ReactNativeWebView) && Boolean(navigator.userAgent.endsWith("MetaMaskMobile"));
    }
    isMobileWeb() {
        return this.state.platformType === Bo.MobileWeb;
    }
    static isNotBrowser() {
        var e;
        return "undefined" == typeof window || !(null === window || void 0 === window ? void 0 : window.navigator) || void 0 !== c && "ReactNative" === (null === (e = null == c ? void 0 : c.navigator) || void 0 === e ? void 0 : e.product) || "ReactNative" === (null === navigator || void 0 === navigator ? void 0 : navigator.product);
    }
    isNotBrowser() {
        return qu.isNotBrowser();
    }
    static isBrowser() {
        return !this.isNotBrowser();
    }
    isBrowser() {
        return qu.isBrowser();
    }
    isNodeJS() {
        return this.isNotBrowser() && !this.isReactNative();
    }
    isUseDeepLink() {
        return this.state.useDeeplink;
    }
    getPlatformType() {
        return function(e) {
            const { state: t } = e;
            return t.platformType ? t.platformType : e.isReactNative() ? Bo.ReactNative : e.isNotBrowser() ? Bo.NonBrowser : e.isMetaMaskMobileWebView() ? Bo.MetaMaskMobileWebview : e.isMobile() ? Bo.MobileWeb : Bo.DesktopWeb;
        }(this);
    }
}
const Vu = (e)=>a(void 0, void 0, void 0, function*() {
        if (qu.isBrowser()) {
            const { StorageManagerWeb: t } = yield Promise.resolve().then(function() {
                return nf;
            });
            return new t(e);
        }
        const t = {
            persistChannelConfig: ()=>a(void 0, void 0, void 0, function*() {}),
            getPersistedChannelConfig: ()=>a(void 0, void 0, void 0, function*() {}),
            persistAccounts: ()=>a(void 0, void 0, void 0, function*() {}),
            getCachedAccounts: ()=>a(void 0, void 0, void 0, function*() {
                    return [];
                }),
            persistChainId: ()=>a(void 0, void 0, void 0, function*() {}),
            getCachedChainId: ()=>a(void 0, void 0, void 0, function*() {}),
            terminate: ()=>a(void 0, void 0, void 0, function*() {})
        };
        return Promise.resolve(t);
    });
class Wu extends ku {
    constructor({ connectionStream: e, shouldSendMetadata: t, autoRequestAccounts: n = !1 }){
        super(e, {
            logger: console,
            maxEventListeners: 100,
            shouldSendMetadata: t
        }), this.state = {
            accounts: null,
            autoRequestAccounts: !1,
            providerStateRequested: !1,
            chainId: "",
            networkVersion: ""
        }, xu(`[SDKProvider: constructor()] autoRequestAccounts=${n}`), this.state.autoRequestAccounts = n;
    }
    forceInitializeState() {
        return a(this, void 0, void 0, function*() {
            return xu(`[SDKProvider: forceInitializeState()] autoRequestAccounts=${this.state.autoRequestAccounts}`), this._initializeStateAsync();
        });
    }
    _setConnected() {
        xu("[SDKProvider: _setConnected()] Setting connected state"), this._state.isConnected = !0;
    }
    getState() {
        return this._state;
    }
    getSDKProviderState() {
        return this.state;
    }
    getSelectedAddress() {
        var e;
        const { accounts: t } = this._state;
        return t && 0 !== t.length ? (null === (e = t[0]) || void 0 === e ? void 0 : e.toLowerCase()) || "" : (xu("[SDKProvider: getSelectedAddress] No accounts found"), null);
    }
    getChainId() {
        return this.state.chainId;
    }
    getNetworkVersion() {
        return this.state.networkVersion;
    }
    setSDKProviderState(e) {
        this.state = Object.assign(Object.assign({}, this.state), e);
    }
    handleAccountsChanged(e, t) {
        return this._handleAccountsChanged(e, t);
    }
    handleDisconnect({ terminate: e = !1 }) {
        !function({ terminate: e = !1, instance: t }) {
            const { state: n } = t;
            xu(`[SDKProvider: handleDisconnect()] cleaning up provider state terminate=${e}`, t), e && (t._state.accounts = null, t._state.isUnlocked = !1, t._state.isPermanentlyDisconnected = !0, t._state.initialized = !1), t._handleAccountsChanged([]), t._state.isConnected = !1, t.emit("disconnect", Mu.ethErrors.provider.disconnected()), n.providerStateRequested = !1;
        }({
            terminate: e,
            instance: this
        });
    }
    _initializeStateAsync() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                var t, n;
                return a(this, void 0, void 0, function*() {
                    void 0 === e.state && (e.state = {
                        accounts: null,
                        autoRequestAccounts: !1,
                        providerStateRequested: !1,
                        chainId: ""
                    });
                    const { state: r } = e;
                    let i;
                    if (r.providerStateRequested) xu("[SDKProvider: initializeStateAsync()] initialization already in progress");
                    else {
                        let o;
                        r.providerStateRequested = !0;
                        let s = null, a = !1, c = !1;
                        const l = yield Vu({
                            enabled: !0
                        });
                        if (l) {
                            const e = yield l.getPersistedChannelConfig({});
                            a = null !== (t = null == e ? void 0 : e.relayPersistence) && void 0 !== t && t, o = yield l.getCachedChainId();
                            const n = yield l.getCachedAccounts();
                            n.length > 0 && (s = n[0]);
                        }
                        if (xu(`[SDKProvider: initializeStateAsync()] relayPersistence=${a}`, {
                            relayPersistence: a,
                            cachedChainId: o,
                            cachedSelectedAddress: s
                        }), a) if (o && s) i = {
                            accounts: [
                                s
                            ],
                            chainId: o,
                            isUnlocked: !1
                        }, c = !0;
                        else try {
                            i = yield e.request({
                                method: "metamask_getProviderState"
                            });
                        } catch (t) {
                            return e._log.error("MetaMask: Failed to get initial state. Please report this bug.", t), void (r.providerStateRequested = !1);
                        }
                        if (0 === (null === (n = null == i ? void 0 : i.accounts) || void 0 === n ? void 0 : n.length)) if (e.getSelectedAddress()) i.accounts = [
                            e.getSelectedAddress()
                        ];
                        else {
                            xu("[SDKProvider: initializeStateAsync()] Fetch accounts remotely.");
                            const t = yield e.request({
                                method: "eth_requestAccounts",
                                params: []
                            });
                            i.accounts = t;
                        }
                        e._initializeState(i), r.providerStateRequested = !1, c && (e._state.isConnected = !0, e.emit("connect", {
                            chainId: null == i ? void 0 : i.chainId
                        }));
                    }
                });
            }(this);
        });
    }
    _initializeState(e) {
        return xu("[SDKProvider: _initializeState()]", e), function(e, t, n) {
            return xu("[SDKProvider: initializeState()] set state._initialized to false"), e._state.initialized = !1, t(n);
        }(this, super._initializeState.bind(this), e);
    }
    _handleChainChanged({ chainId: e, networkVersion: t } = {}) {
        this.state.chainId = e, this.state.networkVersion = t, function({ instance: e, chainId: t, networkVersion: n, superHandleChainChanged: r }) {
            xu(`[SDKProvider: handleChainChanged()] chainId=${t} networkVersion=${n}`);
            let i = n;
            n || (xu("[SDKProvider: handleChainChanged()] forced network version to prevent provider error"), i = "1"), e._state.isConnected = !0, e.emit("connect", {
                chainId: t
            }), r({
                chainId: t,
                networkVersion: i
            });
        }({
            instance: this,
            chainId: e,
            networkVersion: t,
            superHandleChainChanged: super._handleChainChanged.bind(this)
        });
    }
}
var Gu, Zu = {
    name: "@metamask/sdk",
    version: "0.32.0",
    description: "",
    homepage: "https://github.com/MetaMask/metamask-sdk#readme",
    bugs: {
        url: "https://github.com/MetaMask/metamask-sdk/issues"
    },
    repository: {
        type: "git",
        url: "https://github.com/MetaMask/metamask-sdk",
        directory: "packages/sdk"
    },
    main: "dist/node/cjs/metamask-sdk.js",
    module: "dist/browser/es/metamask-sdk.js",
    browser: "dist/browser/es/metamask-sdk.js",
    unpkg: "dist/browser/umd/metamask-sdk.js",
    "react-native": "dist/react-native/es/metamask-sdk.js",
    types: "dist/types/src/index.d.ts",
    sideEffects: !1,
    files: [
        "/dist"
    ],
    scripts: {
        "build:types": "tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types",
        build: "yarn build:types && rollup -c --bundleConfigAsCjs",
        "build:clean": "yarn clean && yarn build",
        "build:post-tsc": "echo 'N/A'",
        "build:pre-tsc": "echo 'N/A'",
        typecheck: "tsc --noEmit",
        clean: "rimraf ./dist",
        size: "node bundle-size && size-limit",
        lint: "yarn lint:eslint && yarn lint:misc --check",
        "lint:changelog": "../../scripts/validate-changelog.sh @metamask/sdk",
        "lint:eslint": "eslint . --cache --ext js,ts",
        "lint:fix": "yarn lint:eslint --fix && yarn lint:misc --write",
        "lint:misc": "prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore",
        prepack: "../../scripts/prepack.sh",
        "publish:preview": "yarn npm publish --tag preview",
        reset: "yarn clean && rimraf ./node_modules/",
        test: 'jest --testPathIgnorePatterns "/e2e/"',
        "test:coverage": 'jest --coverage --testPathIgnorePatterns "/e2e/"',
        "test:e2e": 'jest --testPathPattern "/e2e/"',
        "test:ci": 'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"',
        "test:dev": 'jest -c ./jest.config.ts --detectOpenHandles  --testPathIgnorePatterns "/e2e/"',
        watch: "rollup -c -w",
        dev: 'concurrently "tsc --watch" "rollup -c -w --bundleConfigAsCjs"',
        "build:dev": "yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs"
    },
    dependencies: {
        "@babel/runtime": "^7.26.0",
        "@metamask/onboarding": "^1.0.1",
        "@metamask/providers": "16.1.0",
        "@metamask/sdk-communication-layer": "workspace:*",
        "@metamask/sdk-install-modal-web": "workspace:*",
        "@paulmillr/qr": "^0.2.1",
        bowser: "^2.9.0",
        "cross-fetch": "^4.0.0",
        debug: "^4.3.4",
        eciesjs: "^0.4.11",
        "eth-rpc-errors": "^4.0.3",
        eventemitter2: "^6.4.9",
        "obj-multiplex": "^1.0.0",
        pump: "^3.0.0",
        "readable-stream": "^3.6.2",
        "socket.io-client": "^4.5.1",
        tslib: "^2.6.0",
        util: "^0.12.4",
        uuid: "^8.3.2"
    },
    devDependencies: {
        "@jest/globals": "^29.3.1",
        "@lavamoat/allow-scripts": "^2.3.1",
        "@metamask/auto-changelog": "3.1.0",
        "@metamask/eslint-config": "^6.0.0",
        "@metamask/eslint-config-nodejs": "^6.0.0",
        "@metamask/eslint-config-typescript": "^6.0.0",
        "@react-native-async-storage/async-storage": "^1.19.6",
        "@rollup/plugin-alias": "^5.1.1",
        "@rollup/plugin-commonjs": "^25.0.7",
        "@rollup/plugin-json": "^6.0.0",
        "@rollup/plugin-node-resolve": "^15.0.2",
        "@rollup/plugin-replace": "^6.0.1",
        "@rollup/plugin-terser": "^0.4.1",
        "@size-limit/preset-big-lib": "^11.0.2",
        "@types/dom-screen-wake-lock": "^1.0.2",
        "@types/node": "^20.1.3",
        "@types/pump": "^1.1.1",
        "@types/qrcode-terminal": "^0.12.0",
        "@types/uuid": "^10.0.0",
        "@typescript-eslint/eslint-plugin": "^4.26.0",
        "@typescript-eslint/parser": "^4.26.0",
        "browserify-zlib": "^0.2.0",
        buffer: "^6.0.3",
        concurrently: "^9.1.2",
        "crypto-browserify": "^3.12.0",
        eslint: "^7.30.0",
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-import": "^2.23.4",
        "eslint-plugin-jest": "^24.4.0",
        "eslint-plugin-jsdoc": "^36.1.0",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^3.4.0",
        "https-browserify": "^1.0.0",
        jest: "^29.3.1",
        "jest-environment-jsdom": "^29.3.1",
        prettier: "^2.3.0",
        process: "^0.11.10",
        rimraf: "^4.4.0",
        rollup: "^4.26.0",
        "rollup-plugin-analyzer": "^4.0.0",
        "rollup-plugin-jscc": "^2.0.0",
        "rollup-plugin-natives": "^0.7.5",
        "rollup-plugin-node-builtins": "^2.1.2",
        "rollup-plugin-polyfill-node": "^0.13.0",
        "rollup-plugin-sizes": "^1.0.6",
        "rollup-plugin-typescript2": "^0.31.2",
        "rollup-plugin-visualizer": "^5.12.0",
        "size-limit": "^11.0.2",
        "stream-browserify": "^3.0.0",
        "stream-http": "^3.2.0",
        "ts-jest": "^29.0.3",
        "ts-node": "^10.9.1",
        typescript: "^4.3.2",
        url: "^0.11.0",
        webpack: "^5.0.0"
    },
    publishConfig: {
        access: "public",
        registry: "https://registry.npmjs.org/"
    },
    lavamoat: {
        allowScripts: {
            "eciesjs>secp256k1": !1,
            "socket.io-client>engine.io-client>ws>bufferutil": !1,
            "socket.io-client>engine.io-client>ws>utf-8-validate": !1,
            "@metamask/sdk-communication-layer>bufferutil": !1,
            "@metamask/sdk-communication-layer>eciesjs>secp256k1": !1,
            "@metamask/sdk-communication-layer>utf-8-validate": !1
        }
    }
};
!function(e) {
    e.INPAGE = "metamask-inpage", e.CONTENT_SCRIPT = "metamask-contentscript", e.PROVIDER = "metamask-provider";
}(Gu || (Gu = {}));
const Yu = "direct", Ju = "https://metamask.app.link/connect", Xu = "metamask://connect", Qu = {
    NAME: "MetaMask",
    RDNS: [
        "io.metamask",
        "io.metamask.flask"
    ]
}, eh = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u, th = {
    METAMASK_GETPROVIDERSTATE: "metamask_getProviderState",
    METAMASK_CONNECTSIGN: "metamask_connectSign",
    METAMASK_CONNECTWITH: "metamask_connectWith",
    METAMASK_OPEN: "metamask_open",
    METAMASK_BATCH: "metamask_batch",
    PERSONAL_SIGN: "personal_sign",
    WALLET_REQUESTPERMISSIONS: "wallet_requestPermissions",
    WALLET_REVOKEPERMISSIONS: "wallet_revokePermissions",
    WALLET_GETPERMISSIONS: "wallet_getPermissions",
    WALLET_WATCHASSET: "wallet_watchAsset",
    WALLET_ADDETHEREUMCHAIN: "wallet_addEthereumChain",
    WALLET_SWITCHETHETHEREUMCHAIN: "wallet_switchEthereumChain",
    ETH_REQUESTACCOUNTS: "eth_requestAccounts",
    ETH_ACCOUNTS: "eth_accounts",
    ETH_CHAINID: "eth_chainId",
    ETH_SENDTRANSACTION: "eth_sendTransaction",
    ETH_SIGNTYPEDDATA: "eth_signTypedData",
    ETH_SIGNTYPEDDATA_V3: "eth_signTypedData_v3",
    ETH_SIGNTYPEDDATA_V4: "eth_signTypedData_v4",
    ETH_SIGNTRANSACTION: "eth_signTransaction",
    ETH_SIGN: "eth_sign",
    PERSONAL_EC_RECOVER: "personal_ecRecover"
}, nh = {
    [th.ETH_REQUESTACCOUNTS]: !0,
    [th.ETH_SENDTRANSACTION]: !0,
    [th.ETH_SIGNTRANSACTION]: !0,
    [th.ETH_SIGN]: !0,
    [th.PERSONAL_SIGN]: !0,
    [th.ETH_ACCOUNTS]: !1,
    [th.ETH_CHAINID]: !1,
    [th.PERSONAL_SIGN]: !0,
    [th.ETH_SIGNTYPEDDATA]: !0,
    [th.ETH_SIGNTYPEDDATA_V3]: !0,
    [th.ETH_SIGNTYPEDDATA_V4]: !0,
    [th.WALLET_REQUESTPERMISSIONS]: !0,
    [th.WALLET_GETPERMISSIONS]: !0,
    [th.WALLET_WATCHASSET]: !0,
    [th.WALLET_ADDETHEREUMCHAIN]: !0,
    [th.WALLET_SWITCHETHETHEREUMCHAIN]: !0,
    [th.METAMASK_CONNECTSIGN]: !0,
    [th.METAMASK_CONNECTWITH]: !0,
    [th.PERSONAL_EC_RECOVER]: !0,
    [th.METAMASK_BATCH]: !0,
    [th.METAMASK_OPEN]: !0
}, rh = Object.keys(nh).map((e)=>e.toLowerCase()), ih = [
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sign"
].map((e)=>e.toLowerCase()), oh = ".sdk-comm", sh = "providerType", ah = ".MMSDK_cached_address", ch = ".MMSDK_cached_chainId", lh = {
    CHAIN_CHANGED: "chainChanged",
    ACCOUNTS_CHANGED: "accountsChanged",
    DISCONNECT: "disconnect",
    CONNECT: "connect",
    CONNECTED: "connected"
}, dh = 1e6;
var uh;
!function(e) {
    e.TERMINATE = "terminate", e.EXTENSION = "extension", e.INITIALIZED = "initialized";
}(uh || (uh = {}));
const hh = "undefined" != typeof window && window.localStorage;
function fh({ instance: e, msg: t }) {
    return a(this, void 0, void 0, function*() {
        if (e._initialized || (xu("[MetaMaskSDK: connectAndSign()] provider not ready -- wait for init()"), yield e.init()), xu(`[MetaMaskSDK: connectAndSign()] activeProvider=${e.activeProvider}`), !e.activeProvider) throw new Error("SDK state invalid -- undefined provider");
        const n = /^0x([0-9A-Fa-f]{2})*$/u.test(t) ? t : function(e) {
            let t;
            if (void 0 !== S) t = S.from(e, "utf8").toString("hex");
            else if ("undefined" != typeof TextEncoder) {
                const n = (new TextEncoder).encode(e);
                t = Array.from(n).map((e)=>e.toString(16).padStart(2, "0")).join("");
            } else {
                if ("object" != typeof c || !("Buffer" in c)) throw new Error("Unable to convert string to hex: No available method.");
                t = c.Buffer.from(e, "utf8").toString("hex");
            }
            return `0x${t}`;
        }(t);
        return e.activeProvider.request({
            method: th.METAMASK_CONNECTWITH,
            params: [
                {
                    method: th.PERSONAL_SIGN,
                    params: [
                        n
                    ]
                }
            ]
        });
    });
}
function ph(e) {
    var t, n;
    return a(this, void 0, void 0, function*() {
        xu("[MetaMaskSDK: connectWithExtensionProvider()] ", e), e.sdkProvider = e.activeProvider, e.activeProvider = window.extension, window.ethereum = window.extension;
        try {
            const e = yield null === (t = window.extension) || void 0 === t ? void 0 : t.request({
                method: "eth_requestAccounts"
            });
            xu(`[MetaMaskSDK: connectWithExtensionProvider()] accounts=${e}`);
        } catch (e) {
            return void console.warn("[MetaMaskSDK: connectWithExtensionProvider()] can't request accounts error", e);
        }
        localStorage.setItem(sh, "extension"), e.extensionActive = !0, e.emit(Fu.ProviderUpdate, uh.EXTENSION), e.options.enableAnalytics && (null === (n = e.analytics) || void 0 === n || n.send({
            event: So.SDK_USE_EXTENSION
        }));
    });
}
function gh(e) {
    let t;
    if (void 0 !== S) t = S.from(e, "utf8").toString("base64");
    else if ("function" == typeof btoa) t = btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/gu, (e, t)=>String.fromCharCode(parseInt(t, 16))));
    else {
        if ("object" != typeof c || !("Buffer" in c)) throw new Error("Unable to base64 encode: No available method.");
        t = c.Buffer.from(e, "utf8").toString("base64");
    }
    return t;
}
function mh(e, t, n, r) {
    var i, o, s, c, l, d, u, h, f, p, g, m, y, v, b, w, E, C, _, k;
    return a(this, void 0, void 0, function*() {
        const n = null === (i = e.state.remote) || void 0 === i ? void 0 : i.isReady(), a = null === (o = e.state.remote) || void 0 === o ? void 0 : o.isConnected(), x = null === (s = e.state.remote) || void 0 === s ? void 0 : s.isPaused(), M = zu.getProvider(), A = null === (c = e.state.remote) || void 0 === c ? void 0 : c.getChannelId(), I = null === (l = e.state.remote) || void 0 === l ? void 0 : l.isAuthorized(), { deeplinkProtocol: R } = e.state, { method: P, data: L, triggeredInstaller: O } = ((e)=>{
            var t, n, r, i;
            let o;
            S.isBuffer(e) ? (o = e.toJSON(), o._isBuffer = !0) : o = e;
            const s = null === (t = null == o ? void 0 : o.data) || void 0 === t ? void 0 : t.method;
            let a = !1;
            return "object" == typeof (null === (n = null == o ? void 0 : o.data) || void 0 === n ? void 0 : n.params) && !0 === (null === (i = null === (r = null == o ? void 0 : o.data) || void 0 === r ? void 0 : r.params) || void 0 === i ? void 0 : i.__triggeredInstaller) && (a = !0, o.data.params = o.data.params.wrappedParams), {
                method: s,
                data: o,
                triggeredInstaller: a
            };
        })(t);
        if (xu(`[RCPMS: write()] method='${P}' isRemoteReady=${n} channelId=${A} isSocketConnected=${a} isRemotePaused=${x} providerConnected=${M.isConnected()}`, t), !A) return P !== th.METAMASK_GETPROVIDERSTATE && xu(`[RCPMS: write()] ${P} --\x3e channelId is undefined`), r(new Error("disconnected"));
        xu(`[RCPMS: write()] remote.isPaused()=${null === (d = e.state.remote) || void 0 === d ? void 0 : d.isPaused()} authorized=${I} ready=${n} socketConnected=${a}`, t);
        const T = null === (u = e.state.platformManager) || void 0 === u ? void 0 : u.isSecure(), N = null !== (f = null === (h = e.state.platformManager) || void 0 === h ? void 0 : h.isMobileWeb()) && void 0 !== f && f, D = null !== (g = null === (p = e.state.remote) || void 0 === p ? void 0 : p.hasDeeplinkProtocol()) && void 0 !== g && g && N && I;
        try {
            if (!O) {
                const t = JSON.stringify(null == L ? void 0 : L.data);
                if (t.length > dh) return r(new Error(`Message size ${t.length} exceeds maximum allowed size of 1000000 bytes`));
                null === (m = e.state.remote) || void 0 === m || m.sendMessage(null == L ? void 0 : L.data).then(()=>{
                    xu(`[RCPMS: _write()] ${P} sent successfully`);
                }).catch((e)=>{
                    xu("[RCPMS: _write()] error sending message", e);
                });
            }
            if (!T) return xu(`[RCPMS: _write()] unsecure platform for method ${P} -- return callback`), r();
            if (O) return xu("[RCPMS: _write()] prevent deeplink -- installation completed separately."), r();
            const t = null !== (b = null === (v = null === (y = e.state.remote) || void 0 === y ? void 0 : y.getKeyInfo()) || void 0 === v ? void 0 : v.ecies.public) && void 0 !== b ? b : "";
            let n = encodeURI(`channelId=${A}&pubkey=${t}&comm=socket&t=d&v=2`);
            if (D) {
                const t = JSON.stringify(null == L ? void 0 : L.data), i = null === (w = e.state.remote) || void 0 === w ? void 0 : w.encrypt(t);
                if (!i) return xu("[RCPMS: _write()] error encrypting message"), r(new Error("RemoteCommunicationPostMessageStream - disconnected"));
                n += `&scheme=${R}&rpc=${gh(i)}`;
            }
            if (!(null === (E = e.state.platformManager) || void 0 === E ? void 0 : E.isMetaMaskInstalled())) return xu("[RCPMS: _write()] prevent deeplink until installation is completed."), r();
            nh[P] ? (xu(`[RCPMS: _write()] redirect link for '${P}' socketConnected=${a} connect?${n}`), null === (C = e.state.platformManager) || void 0 === C || C.openDeeplink(`${Ju}?${n}`, `${Xu}?${n}`, "_self")) : (null === (_ = e.state.remote) || void 0 === _ ? void 0 : _.isPaused()) ? (xu(`[RCPMS: _write()] MM is PAUSED! deeplink with connect! targetMethod=${P}`), null === (k = e.state.platformManager) || void 0 === k || k.openDeeplink(`${Ju}?redirect=true&${n}`, `${Xu}?redirect=true&${n}`, "_self")) : xu(`[RCPMS: _write()] method ${P} doesn't need redirect.`);
        } catch (e) {
            return xu("[RCPMS: _write()] error sending message", e), r(new Error("RemoteCommunicationPostMessageStream - disconnected"));
        }
        return r();
    });
}
class yh extends nu.Duplex {
    constructor({ name: e, remote: t, deeplinkProtocol: n, platformManager: r }){
        super({
            objectMode: !0
        }), this.state = {
            _name: null,
            remote: null,
            deeplinkProtocol: !1,
            platformManager: null
        }, this.state._name = e, this.state.remote = t, this.state.deeplinkProtocol = n, this.state.platformManager = r, this._onMessage = this._onMessage.bind(this), this.state.remote.on(bo.MESSAGE, this._onMessage);
    }
    _write(e, t, n) {
        return a(this, void 0, void 0, function*() {
            return mh(this, e, 0, n);
        });
    }
    _read() {}
    _onMessage(e) {
        return function(e, t) {
            try {
                if (xu("[RCPMS: onMessage()] message", t), !t || "object" != typeof t) return;
                if ("object" != typeof (null == t ? void 0 : t.data)) return;
                if (!(null == t ? void 0 : t.name)) return void xu("[RCPMS: onMessage()] ignore message without name", t);
                if ((null == t ? void 0 : t.name) !== Gu.PROVIDER) return void xu(`[RCPMS: onMessage()] ignore message with wrong name message=${t}`);
                if (S.isBuffer(t)) {
                    const n = S.from(t);
                    e.push(n);
                } else e.push(t);
            } catch (e) {
                xu(`[RCPMS: onMessage()] ignore message error err=${e}`);
            }
        }(this, e);
    }
    start() {}
}
let vh = 1;
const bh = (e)=>new Promise((t)=>{
        setTimeout(()=>{
            t(!0);
        }, e);
    }), wh = ({ checkInstallationOnAllCalls: t = !1, communicationLayerPreference: n, injectProvider: r, shouldShimWeb3: i, platformManager: o, installer: s, sdk: c, remoteConnection: l, debug: d })=>a(void 0, void 0, void 0, function*() {
        var u, h;
        const f = (({ name: e, remoteConnection: t })=>{
            if (!t || !(null == t ? void 0 : t.getConnector())) throw new Error("Missing remote connection parameter");
            return new yh({
                name: e,
                remote: null == t ? void 0 : t.getConnector(),
                deeplinkProtocol: null == t ? void 0 : t.state.deeplinkProtocol,
                platformManager: null == t ? void 0 : t.getPlatformManager()
            });
        })({
            name: Gu.INPAGE,
            target: Gu.CONTENT_SCRIPT,
            platformManager: o,
            communicationLayerPreference: n,
            remoteConnection: l
        }), p = o.getPlatformType(), g = c.options.dappMetadata, m = `Sdk/Javascript SdkVersion/${Zu.version} Platform/${p} dApp/${null !== (u = g.url) && void 0 !== u ? u : g.name} dAppTitle/${g.name}`;
        let y = null, v = null;
        const b = null === (h = c.options.storage) || void 0 === h ? void 0 : h.storageManager;
        if (b) {
            try {
                const e = yield b.getCachedAccounts();
                e.length > 0 && (y = e[0]);
            } catch (e) {
                console.error(`[initializeMobileProvider] failed to get cached addresses: ${e}`);
            }
            try {
                const e = yield b.getCachedChainId();
                e && (v = e);
            } catch (e) {
                console.error(`[initializeMobileProvider] failed to parse cached chainId: ${e}`);
            }
        }
        xu(`[initializeMobileProvider] cachedAccountAddress: ${y}, cachedChainId: ${v}`);
        const w = !(!r || p === Bo.NonBrowser || p === Bo.ReactNative), E = zu.init({
            shouldSetOnWindow: w,
            connectionStream: f,
            shouldShimWeb3: i,
            sdkInstance: c
        });
        let C = !1;
        const S = (e)=>{
            C = e;
        }, _ = ()=>C, k = (n, r, i, d)=>a(void 0, void 0, void 0, function*() {
                var u, h, f, p, g, w, E, k, x;
                const M = zu.getProvider();
                if (C) {
                    M.emit("display_uri", (null == l ? void 0 : l.state.qrcodeLink) || ""), null == l || l.showActiveModal();
                    let e = _();
                    for(; e;){
                        const t = _(), n = null == l ? void 0 : l.isAuthorized();
                        e = t && !n, xu(`[initializeMobileProvider: sendRequest()] waiting for initialization to complete - initializing: ${t} authorized: ${n}`), yield bh(1e3);
                    }
                    return xu("[initializeMobileProvider: sendRequest()] initial method completed -- prevent installation and call provider"), i(...r);
                }
                const A = o.isMetaMaskInstalled(), I = null == l ? void 0 : l.isConnected();
                let R = null, P = null, L = null;
                if (R = null !== (u = M.getSelectedAddress()) && void 0 !== u ? u : y, L = M.getChainId() || v, R && b && R !== y && b.persistAccounts([
                    R
                ]).catch((e)=>{
                    console.error(`[initializeMobileProvider] failed to persist account: ${e}`);
                }), L && (v = L, b && b.persistChainId(L).catch((e)=>{
                    console.error(`[initializeMobileProvider] failed to persist chainId: ${e}`);
                })), xu("[initializeMobileProvider: sendRequest()]", {
                    selectedAddress: R,
                    chainId: L
                }), d && xu(`[initializeMobileProvider: sendRequest()] method=${n} ongoing=${C} selectedAddress=${R} isInstalled=${A} checkInstallationOnAllCalls=${t} socketConnected=${I}`), R && n.toLowerCase() === th.ETH_ACCOUNTS.toLowerCase()) return [
                    R
                ];
                if (L && n.toLowerCase() === th.ETH_CHAINID.toLowerCase()) return L;
                const O = [
                    th.ETH_REQUESTACCOUNTS,
                    th.WALLET_REQUESTPERMISSIONS,
                    th.METAMASK_CONNECTSIGN,
                    th.METAMASK_CONNECTWITH
                ], T = !nh[n], N = null === (h = c.options.readonlyRPCMap) || void 0 === h ? void 0 : h[L];
                if (N && T) try {
                    const t = null === (f = null == r ? void 0 : r[0]) || void 0 === f ? void 0 : f.params, i = yield (({ rpcEndpoint: t, method: n, sdkInfo: r, params: i })=>a(void 0, void 0, void 0, function*() {
                            const o = JSON.stringify({
                                jsonrpc: "2.0",
                                method: n,
                                params: i,
                                id: (vh += 1, vh)
                            }), s = {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            };
                            let a;
                            t.includes("infura") && (s["Metamask-Sdk-Info"] = r);
                            try {
                                a = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cross$2d$fetch$40$4$2e$1$2e$0$2f$node_modules$2f$cross$2d$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, {
                                    method: "POST",
                                    headers: s,
                                    body: o
                                });
                            } catch (e) {
                                throw e instanceof Error ? new Error(`Failed to fetch from RPC: ${e.message}`) : new Error(`Failed to fetch from RPC: ${e}`);
                            }
                            if (!a.ok) throw new Error(`Server responded with a status of ${a.status}`);
                            return (yield a.json()).result;
                        }))({
                        rpcEndpoint: N,
                        sdkInfo: m,
                        method: n,
                        params: t || []
                    });
                    return d && xu(`initializeProvider::ReadOnlyRPCResponse ${i}`), i;
                } catch (e) {
                    console.warn(`[initializeMobileProvider: sendRequest()] method=${n} readOnlyRPCRequest failed:`, e);
                }
                if ((!A || A && !I) && n !== th.METAMASK_GETPROVIDERSTATE) {
                    const e = (null === (p = null == r ? void 0 : r[0]) || void 0 === p ? void 0 : p.params) || [];
                    if (-1 !== O.indexOf(n) || t) {
                        S(!0);
                        const t = n === th.METAMASK_CONNECTWITH, o = `${Date.now()}`;
                        try {
                            yield s.start({
                                wait: !1,
                                connectWith: t ? {
                                    method: n,
                                    id: o,
                                    params: e
                                } : void 0
                            }), yield new Promise((e, t)=>{
                                (null == l ? void 0 : l.isAuthorized()) && (xu("[initializeMobileProvider: sendRequest()] already authorized"), e(!0)), null == l || l.getConnector().once(bo.AUTHORIZED, ()=>{
                                    e(!0);
                                }), c.once(bo.PROVIDER_UPDATE, (e)=>{
                                    xu(`[initializeMobileProvider: sendRequest()] PROVIDER_UPDATE --- remote provider request interupted type=${e}`), e === uh.EXTENSION ? t(bo.PROVIDER_UPDATE) : t(new Error("Connection Terminated"));
                                });
                            });
                        } catch (t) {
                            if (uh.EXTENSION === t) {
                                if (xu(`[initializeMobileProvider: sendRequest()] extension provider detect: re-create ${n} on the active provider`), n.toLowerCase() === th.METAMASK_CONNECTSIGN.toLowerCase()) {
                                    const t = yield null === (g = c.getProvider()) || void 0 === g ? void 0 : g.request({
                                        method: th.ETH_REQUESTACCOUNTS,
                                        params: []
                                    });
                                    if (!t.length) throw new Error("SDK state invalid -- undefined accounts");
                                    const n = yield null === (w = c.getProvider()) || void 0 === w ? void 0 : w.request({
                                        method: th.PERSONAL_SIGN,
                                        params: [
                                            e[0],
                                            t[0]
                                        ]
                                    });
                                    return c.emit(Fu.ConnectWithResponse, n), n;
                                }
                                if (n.toLowerCase() === th.METAMASK_CONNECTWITH.toLowerCase()) {
                                    const [t] = e, n = yield (({ method: e, sdk: t, params: n })=>a(void 0, void 0, void 0, function*() {
                                            var r, i, o, s;
                                            if (!t.isExtensionActive()) throw new Error("SDK state invalid -- extension is not active");
                                            xu("[MetaMaskProvider: extensionConnectWithOverwrite()] Overwriting request method", e, n);
                                            const a = yield null === (r = t.getProvider()) || void 0 === r ? void 0 : r.request({
                                                method: th.ETH_REQUESTACCOUNTS,
                                                params: []
                                            });
                                            if (!a.length) throw new Error("SDK state invalid -- undefined accounts");
                                            if ((null == e ? void 0 : e.toLowerCase()) === th.PERSONAL_SIGN.toLowerCase()) {
                                                const r = {
                                                    method: e,
                                                    params: [
                                                        n[0],
                                                        a[0]
                                                    ]
                                                };
                                                return yield null === (i = t.getProvider()) || void 0 === i ? void 0 : i.request(r);
                                            }
                                            if ((null == e ? void 0 : e.toLowerCase()) === th.ETH_SENDTRANSACTION.toLowerCase()) {
                                                const r = {
                                                    method: e,
                                                    params: [
                                                        Object.assign(Object.assign({}, n[0]), {
                                                            from: a[0]
                                                        })
                                                    ]
                                                };
                                                return yield null === (o = t.getProvider()) || void 0 === o ? void 0 : o.request(r);
                                            }
                                            return ih.includes(e.toLowerCase()) ? (console.warn(`MetaMaskSDK connectWith method=${e} -- not handled by the extension -- call separately`), a) : yield null === (s = t.getProvider()) || void 0 === s ? void 0 : s.request({
                                                method: e,
                                                params: n
                                            });
                                        }))({
                                        method: t.method,
                                        sdk: c,
                                        params: t.params
                                    });
                                    return c.emit(Fu.ConnectWithResponse, n), n;
                                }
                                return xu(`[initializeMobileProvider: sendRequest()] sending '${n}' on active provider`, e), yield null === (E = c.getProvider()) || void 0 === E ? void 0 : E.request({
                                    method: n,
                                    params: e
                                });
                            }
                            if (t === bo.REJECTED) throw null == l || l.closeModal(), null === (k = c.getProvider()) || void 0 === k || k.handleDisconnect({
                                terminate: !1
                            }), Object.assign(new Error("User rejected connection"), {
                                code: 4001
                            });
                            throw xu(`[initializeMobileProvider: sendRequest()] failed to start installer: ${t}`), t;
                        } finally{
                            S(!1);
                        }
                        if (n === th.ETH_REQUESTACCOUNTS) return P = yield new Promise((e)=>{
                            const t = setInterval(()=>{
                                const { accounts: n } = M.getState();
                                n && (clearInterval(t), e(n));
                            }, 100);
                        }), xu(`[initializeMobileProvider: sendRequest()] selectedAddress: ${R} --- SKIP rpc call`), P;
                        if (n === th.METAMASK_CONNECTWITH) try {
                            let e = 0;
                            const t = 5, n = ({ resolve: n, reject: r })=>{
                                e += 1;
                                const i = null == l ? void 0 : l.getConnector().getRPCMethodTracker(), s = null == i ? void 0 : i[o];
                                return xu(`TRACKER: update method ${o}`, s), (null == s ? void 0 : s.result) ? (xu("[initializeMobileProvider: sendRequest()] found result", s.result), c.emit(Fu.ConnectWithResponse, s.result), void n(s.result)) : (null == s ? void 0 : s.error) ? (xu("[initializeMobileProvider: sendRequest()] found error", s.error), void r(s.error)) : e >= t ? (xu("[initializeMobileProvider: sendRequest()] max message count reached without result"), void r(new Error("Max message count reached without result"))) : void xu("[initializeMobileProvider: sendRequest()] not found yet, need to wait for next update");
                            };
                            let r, i;
                            const s = yield new Promise((e, t)=>{
                                const s = null == l ? void 0 : l.getConnector().getRPCMethodTracker();
                                xu(`TRACKER: method ${o}`, s), (null == s ? void 0 : s[o].result) ? (xu("[initializeMobileProvider: sendRequest()] found result", null == s ? void 0 : s[o].result), e(null == s ? void 0 : s[o].result)) : (null == s ? void 0 : s[o].error) && (xu("[initializeMobileProvider: sendRequest()] found error", null == s ? void 0 : s[o].error), t(null == s ? void 0 : s[o].error)), i = ()=>n({
                                        resolve: e,
                                        reject: t
                                    }), r = null == l ? void 0 : l.getConnector().on(bo.RPC_UPDATE, i);
                            });
                            return i && (null == r || r.off(bo.RPC_UPDATE, i)), xu("TRACKER: result", s), s;
                        } catch (e) {
                            throw xu("[initializeMobileProvider: sendRequest()] error:", e), e;
                        }
                        r[0] && "object" == typeof r[0] && (r[0].params = {
                            __triggeredInstaller: !0,
                            wrappedParams: r[0].params
                        });
                        return i(...r);
                    }
                    if (o.isSecure() && nh[n]) return i(...r);
                    if (c.isExtensionActive()) return xu(`[initializeMobileProvider: sendRequest()] EXTENSION active - redirect request '${n}' to it`, r, e), yield null === (x = c.getProvider()) || void 0 === x ? void 0 : x.request({
                        method: n,
                        params: e
                    });
                    throw xu(`[initializeMobileProvider: sendRequest()] method=${n} --- skip --- not connected/installed`), new Error("MetaMask is not connected/installed, please call eth_requestAccounts to connect first.");
                }
                try {
                    const e = yield i(...r);
                    if (xu(`[initializeMobileProvider: sendRequest()] method=${n} rpcResponse`, e), n === th.WALLET_REQUESTPERMISSIONS) {
                        const t = e.reduce((e, t)=>{
                            var n;
                            if ("eth_accounts" === t.parentCapability) {
                                const r = null === (n = t.caveats.find((e)=>"restrictReturnedAccounts" === e.type)) || void 0 === n ? void 0 : n.value;
                                r && e.push(...r);
                            }
                            return e;
                        }, []);
                        xu("[initializeMobileProvider: sendRequest()] accountsToPersist:", t), t.length > 0 && (M.handleAccountsChanged(t, !1), null == b || b.persistAccounts(t));
                    }
                    return e;
                } catch (e) {
                    throw console.error("[initializeMobileProvider: sendRequest()] error:", e), e;
                }
            }), { request: x } = E;
        E.request = (...e)=>a(void 0, void 0, void 0, function*() {
                return k(null == e ? void 0 : e[0].method, e, x, d);
            });
        const { send: M } = E;
        return E.send = (...e)=>a(void 0, void 0, void 0, function*() {
                return k(null == e ? void 0 : e[0], e, M, d);
            }), xu("[initializeMobileProvider: sendRequest()] metamaskStream.start()"), f.start(), E;
    });
function Eh(e) {
    var t, n, r, i;
    return a(this, void 0, void 0, function*() {
        const { options: o } = e, s = {
            communicationLayerPreference: null !== (t = o.communicationLayerPreference) && void 0 !== t ? t : $o.SOCKET,
            platformManager: e.platformManager,
            sdk: e,
            checkInstallationOnAllCalls: o.checkInstallationOnAllCalls,
            injectProvider: null === (n = o.injectProvider) || void 0 === n || n,
            shouldShimWeb3: null === (r = o.shouldShimWeb3) || void 0 === r || r,
            extensionOnly: null === (i = o.extensionOnly) || void 0 === i || i,
            installer: e.installer,
            remoteConnection: e.remoteConnection,
            debug: e.debug
        }, a = yield wh(s);
        e.activeProvider = a, function(e) {
            var t, n, r, i;
            null === (n = null === (t = e.remoteConnection) || void 0 === t ? void 0 : t.getConnector()) || void 0 === n || n.on(Fu.ConnectionStatus, (t)=>{
                e.emit(Fu.ConnectionStatus, t);
            }), null === (i = null === (r = e.remoteConnection) || void 0 === r ? void 0 : r.getConnector()) || void 0 === i || i.on(Fu.ServiceStatus, (t)=>{
                e.emit(Fu.ServiceStatus, t);
            });
        }(e);
    });
}
const Ch = "sdk";
class Sh {
    constructor({ serverUrl: e, enabled: t, originatorInfo: n }){
        this.serverURL = ho, this.serverURL = e, this.originatorInfo = n, this.enabled = null == t || t;
    }
    send({ event: e, params: t }) {
        if (!this.enabled) return;
        const n = Object.assign(Object.assign({
            id: Ch,
            event: e,
            sdkVersion: Zu.version
        }, this.originatorInfo), {
            params: t
        });
        xu(`[Analytics: send()] event: ${e}`, n), co(n, this.serverURL).catch((e)=>{
            xu(`[Analytics: send()] error: ${e}`);
        });
    }
}
const _h = ()=>{
    if ("undefined" == typeof document) return;
    let e;
    const t = document.getElementsByTagName("link");
    for(let n = 0; n < t.length; n++)"icon" !== t[n].getAttribute("rel") && "shortcut icon" !== t[n].getAttribute("rel") || (e = t[n].getAttribute("href"));
    return e;
}, kh = 163400;
function xh(e) {
    var t, n, r;
    const { dappMetadata: i } = e, s = function({ url: e, name: t }) {
        var n;
        const r = e + t, i = gh(r);
        if (!localStorage) return "";
        let s = null !== (n = localStorage.getItem(i)) && void 0 !== n ? n : "";
        if (!s) {
            s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            try {
                localStorage.setItem(i, s);
            } catch (e) {
                return "";
            }
        }
        return s;
    }({
        url: null !== (t = null == i ? void 0 : i.url) && void 0 !== t ? t : "no_url",
        name: null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : "no_name"
    }), a = null === (r = e.platformManager) || void 0 === r ? void 0 : r.getPlatformType(), c = a === Bo.DesktopWeb, l = a === Bo.MetaMaskMobileWebview;
    let d = "N/A";
    return c ? d = "extension" : l && (d = "mobile"), {
        id: s,
        from: d
    };
}
const Mh = ({ provider: e, sdkInstance: t })=>{
    if ("state" in e) throw new Error("INVALID EXTENSION PROVIDER");
    return new Proxy(e, {
        get: (n, r)=>"request" === r ? function(e) {
                var r, i;
                return a(this, void 0, void 0, function*() {
                    xu("[wrapExtensionProvider()] Overwriting request method", e);
                    const { method: o, params: s } = e, c = rh.includes(o.toLowerCase()), { id: l, from: d } = xh(t);
                    if (c && (null === (r = t.analytics) || void 0 === r || r.send({
                        event: So.SDK_RPC_REQUEST,
                        params: {
                            method: o,
                            from: d,
                            id: l
                        }
                    })), o === th.METAMASK_BATCH && Array.isArray(s)) return (({ target: e, args: t, trackEvent: n, sdkInstance: r })=>a(void 0, void 0, void 0, function*() {
                            var i, o;
                            if ("metamask_batch" !== t.method) throw new Error("Invalid usage");
                            const s = [], a = null !== (i = null == t ? void 0 : t.params) && void 0 !== i ? i : [];
                            for (const t of a){
                                const n = yield null == e ? void 0 : e.request({
                                    method: t.method,
                                    params: t.params
                                });
                                s.push(n);
                            }
                            const { id: c, from: l } = xh(r);
                            return n && (null === (o = r.analytics) || void 0 === o || o.send({
                                event: So.SDK_RPC_REQUEST_DONE,
                                params: {
                                    method: t.method,
                                    from: l,
                                    id: c
                                }
                            })), s;
                        }))({
                        target: n,
                        args: e,
                        trackEvent: c,
                        sdkInstance: t
                    });
                    if (o.toLowerCase() === th.METAMASK_CONNECTSIGN.toLowerCase() && Array.isArray(s)) return (({ target: e, params: t })=>a(void 0, void 0, void 0, function*() {
                            const n = yield e.request({
                                method: th.ETH_REQUESTACCOUNTS,
                                params: []
                            });
                            if (!n.length) throw new Error("SDK state invalid -- undefined accounts");
                            return yield e.request({
                                method: th.PERSONAL_SIGN,
                                params: [
                                    t[0],
                                    n[0]
                                ]
                            });
                        }))({
                        target: n,
                        params: s
                    });
                    if (o.toLowerCase() === th.METAMASK_CONNECTWITH.toLowerCase() && Array.isArray(s)) return (({ target: e, params: t })=>a(void 0, void 0, void 0, function*() {
                            const [n] = t, r = n.method, i = n.params, o = yield e.request({
                                method: th.ETH_REQUESTACCOUNTS,
                                params: []
                            });
                            if (!o.length) throw new Error("SDK state invalid -- undefined accounts");
                            return (null == r ? void 0 : r.toLowerCase()) === th.PERSONAL_SIGN.toLowerCase() ? yield e.request({
                                method: r,
                                params: [
                                    i[0],
                                    o[0]
                                ]
                            }) : (null == r ? void 0 : r.toLowerCase()) === th.ETH_SENDTRANSACTION.toLowerCase() ? yield e.request({
                                method: r,
                                params: [
                                    Object.assign(Object.assign({}, i[0]), {
                                        from: o[0]
                                    })
                                ]
                            }) : ih.includes(r.toLowerCase()) ? (console.warn(`MetaMaskSDK connectWith method=${r} -- not handled by the extension -- call separately`), o) : yield e.request({
                                method: r,
                                params: i
                            });
                        }))({
                        target: n,
                        params: s
                    });
                    let u;
                    try {
                        return u = yield n.request(e), u;
                    } finally{
                        c && (null === (i = t.analytics) || void 0 === i || i.send({
                            event: So.SDK_RPC_REQUEST_DONE,
                            params: {
                                method: o,
                                from: d,
                                id: l
                            }
                        }));
                    }
                });
            } : "getChainId" === r ? function() {
                return e.chainId;
            } : "getNetworkVersion" === r ? function() {
                return e.networkVersion;
            } : "getSelectedAddress" === r ? function() {
                return e.selectedAddress;
            } : "isConnected" === r ? function() {
                return e._state.isConnected;
            } : n[r]
    });
};
var Ah;
function Ih({ mustBeMetaMask: e, sdkInstance: t }) {
    return a(this, void 0, void 0, function*() {
        if ("undefined" == typeof window) throw new Error("window not available");
        try {
            const e = yield new Promise((e, t)=>{
                const n = setTimeout(()=>{
                    t(new Error("eip6963RequestProvider timed out"));
                }, 500);
                window.addEventListener(Ah.Announce, (t)=>{
                    const r = t, { detail: { info: i, provider: o } = {} } = r, { name: s, rdns: a, uuid: c } = null != i ? i : {};
                    eh.test(c) && s.startsWith(Qu.NAME) && Qu.RDNS.includes(a) && (clearTimeout(n), e(o));
                }), window.dispatchEvent(new Event(Ah.Request));
            });
            return Mh({
                provider: e,
                sdkInstance: t
            });
        } catch (n) {
            if (!e && window.ethereum) return Mh({
                provider: window.ethereum,
                sdkInstance: t
            });
            throw new Error("Provider not found");
        }
    });
}
!function(e) {
    e.Announce = "eip6963:announceProvider", e.Request = "eip6963:requestProvider";
}(Ah || (Ah = {}));
const Rh = (e)=>a(void 0, void 0, void 0, function*() {
        const { options: t } = e, { infuraAPIKey: n } = t;
        if (!n) return;
        const r = {
            "0x1": `https://mainnet.infura.io/v3/${n}`,
            "0x5": `https://goerli.infura.io/v3/${n}`,
            "0xaa36a7": `https://sepolia.infura.io/v3/${n}`,
            "0xe708": `https://linea-mainnet.infura.io/v3/${n}`,
            "0xe704": `https://linea-goerli.infura.io/v3/${n}`,
            "0x89": `https://polygon-mainnet.infura.io/v3/${n}`,
            "0x13881": `https://polygon-mumbai.infura.io/v3/${n}`,
            "0x45": `https://optimism-mainnet.infura.io/v3/${n}`,
            "0x1a4": `https://optimism-goerli.infura.io/v3/${n}`,
            "0xa4b1": `https://arbitrum-mainnet.infura.io/v3/${n}`,
            "0x66eed": `https://arbitrum-goerli.infura.io/v3/${n}`,
            "0x2a15c308d": `https://palm-mainnet.infura.io/v3/${n}`,
            "0x2a15c3083": `https://palm-testnet.infura.io/v3/${n}`,
            "0xa86a": `https://avalanche-mainnet.infura.io/v3/${n}`,
            "0xa869": `https://avalanche-fuji.infura.io/v3/${n}`,
            "0x4e454152": `https://aurora-mainnet.infura.io/v3/${n}`,
            "0x4e454153": `https://aurora-testnet.infura.io/v3/${n}`,
            "0x534e5f4d41494e": `https://starknet-mainnet.infura.io/v3/${n}`,
            "0x534e5f474f45524c49": `https://starknet-goerli.infura.io/v3/${n}`,
            "0x534e5f474f45524c4932": `https://starknet-goerli2.infura.io/v3/${n}`,
            "0xa4ec": `https://celo-mainnet.infura.io/v3/${n}`,
            "0xaef3": `https://celo-alfajores.infura.io/v3/${n}`
        };
        e.options.readonlyRPCMap ? e.options.readonlyRPCMap = Object.assign(Object.assign({}, e.options.readonlyRPCMap), r) : e.options.readonlyRPCMap = r;
    });
const Ph = (e)=>a(void 0, void 0, void 0, function*() {
        const { options: t } = e, { readonlyRPCMap: n } = t;
        if (n) try {
            xu("[MetaMaskSDK: setupReadOnlyRPCProviders()] Setting up Readonly RPC Providers", n), e.setReadOnlyRPCCalls(!0);
        } catch (e) {
            throw new Error("Invalid Infura Settings");
        }
    });
function Lh(e, t, n, r) {
    return new (n || (n = Promise))(function(t, i) {
        function o(e) {
            try {
                a(r.next(e));
            } catch (e) {
                i(e);
            }
        }
        function s(e) {
            try {
                a(r.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function a(e) {
            var r;
            e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n(function(e) {
                e(r);
            })).then(o, s);
        }
        a((r = r.apply(e, [])).next());
    });
}
function Oh(e, t) {
    var n, r, i, o, s = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
    "TURBOPACK unreachable";
    function a(o) {
        return function(a) {
            return function(o) {
                if (n) throw new TypeError("Generator is already executing.");
                for(; s;)try {
                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                    switch(r = 0, i && (o = [
                        2 & o[0],
                        i.value
                    ]), o[0]){
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return s.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            s.label++, r = o[1], o = [
                                0
                            ];
                            continue;
                        case 7:
                            o = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                s.label = o[1];
                                break;
                            }
                            if (6 === o[0] && s.label < i[1]) {
                                s.label = i[1], i = o;
                                break;
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(o);
                                break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    o = t.call(e, s);
                } catch (e) {
                    o = [
                        6,
                        e
                    ], r = 0;
                } finally{
                    n = i = 0;
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }([
                o,
                a
            ]);
        };
    }
}
var Th = "INSTALLED", Nh = "NOT_INSTALLED", Dh = "REGISTERED", $h = "REGISTERING", Bh = "RELOADING", Kh = {
    CHROME: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    FIREFOX: "https://addons.mozilla.org/firefox/addon/ether-metamask/",
    DEFAULT: "https://metamask.io"
}, jh = "REGISTRATION_IN_PROGRESS", Uh = "FORWARDER_ID", Hh = function() {
    function e(t) {
        var n = void 0 === t ? {} : t, r = n.forwarderOrigin, i = void 0 === r ? "https://fwd.metamask.io" : r, o = n.forwarderMode, s = void 0 === o ? e.FORWARDER_MODE.INJECT : o;
        this.forwarderOrigin = i, this.forwarderMode = s, this.state = e.isMetaMaskInstalled() ? Th : Nh;
        var a = e._detectBrowser();
        this.downloadUrl = a ? Kh[a] : Kh.DEFAULT, this._onMessage = this._onMessage.bind(this), this._onMessageFromForwarder = this._onMessageFromForwarder.bind(this), this._openForwarder = this._openForwarder.bind(this), this._openDownloadPage = this._openDownloadPage.bind(this), this.startOnboarding = this.startOnboarding.bind(this), this.stopOnboarding = this.stopOnboarding.bind(this), window.addEventListener("message", this._onMessage), s === e.FORWARDER_MODE.INJECT && "true" === sessionStorage.getItem(jh) && e._injectForwarder(this.forwarderOrigin);
    }
    return e.prototype._onMessage = function(e) {
        if (e.origin === this.forwarderOrigin) return "metamask:reload" === e.data.type ? this._onMessageFromForwarder(e) : void console.debug("Unknown message from '" + e.origin + "' with data " + JSON.stringify(e.data));
    }, e.prototype._onMessageUnknownStateError = function(e) {
        throw new Error("Unknown state: '" + e + "'");
    }, e.prototype._onMessageFromForwarder = function(t) {
        return Lh(this, 0, void 0, function() {
            return Oh(this, function(n) {
                switch(n.label){
                    case 0:
                        switch(this.state){
                            case Bh:
                                return [
                                    3,
                                    1
                                ];
                            case Nh:
                                return [
                                    3,
                                    2
                                ];
                            case Th:
                                return [
                                    3,
                                    3
                                ];
                            case $h:
                                return [
                                    3,
                                    5
                                ];
                            case Dh:
                                return [
                                    3,
                                    6
                                ];
                        }
                        return [
                            3,
                            7
                        ];
                    case 1:
                        return console.debug("Ignoring message while reloading"), [
                            3,
                            8
                        ];
                    case 2:
                        return console.debug("Reloading now to register with MetaMask"), this.state = Bh, location.reload(), [
                            3,
                            8
                        ];
                    case 3:
                        return console.debug("Registering with MetaMask"), this.state = $h, [
                            4,
                            e._register()
                        ];
                    case 4:
                        return n.sent(), this.state = Dh, t.source.postMessage({
                            type: "metamask:registrationCompleted"
                        }, t.origin), this.stopOnboarding(), [
                            3,
                            8
                        ];
                    case 5:
                        return console.debug("Already registering - ignoring reload message"), [
                            3,
                            8
                        ];
                    case 6:
                        return console.debug("Already registered - ignoring reload message"), [
                            3,
                            8
                        ];
                    case 7:
                        this._onMessageUnknownStateError(this.state), n.label = 8;
                    case 8:
                        return [
                            2
                        ];
                }
            });
        });
    }, e.prototype.startOnboarding = function() {
        sessionStorage.setItem(jh, "true"), this._openDownloadPage(), this._openForwarder();
    }, e.prototype.stopOnboarding = function() {
        "true" === sessionStorage.getItem(jh) && (this.forwarderMode === e.FORWARDER_MODE.INJECT && (console.debug("Removing forwarder"), e._removeForwarder()), sessionStorage.setItem(jh, "false"));
    }, e.prototype._openForwarder = function() {
        this.forwarderMode === e.FORWARDER_MODE.OPEN_TAB ? window.open(this.forwarderOrigin, "_blank") : e._injectForwarder(this.forwarderOrigin);
    }, e.prototype._openDownloadPage = function() {
        window.open(this.downloadUrl, "_blank");
    }, e.isMetaMaskInstalled = function() {
        return Boolean(window.ethereum && window.ethereum.isMetaMask);
    }, e._register = function() {
        return window.ethereum.request({
            method: "wallet_registerOnboarding"
        });
    }, e._injectForwarder = function(e) {
        var t = document.body, n = document.createElement("iframe");
        n.setAttribute("height", "0"), n.setAttribute("width", "0"), n.setAttribute("style", "display: none;"), n.setAttribute("src", e), n.setAttribute("id", Uh), t.insertBefore(n, t.children[0]);
    }, e._removeForwarder = function() {
        var e;
        null === (e = document.getElementById(Uh)) || void 0 === e || e.remove();
    }, e._detectBrowser = function() {
        var e = Hu.parse(window.navigator.userAgent);
        return "Firefox" === e.browser.name ? "FIREFOX" : [
            "Chrome",
            "Chromium"
        ].includes(e.browser.name || "") ? "CHROME" : null;
    }, e.FORWARDER_MODE = {
        INJECT: "INJECT",
        OPEN_TAB: "OPEN_TAB"
    }, e;
}();
function Fh(e, { wait: t = !1 }) {
    return a(this, void 0, void 0, function*() {
        return xu(`[MetamaskInstaller: startInstaller()] wait=${t}`), t && (yield bh(1e3)), yield e.checkInstallation();
    });
}
class zh {
    constructor({ remote: e, preferDesktop: t, platformManager: n, debug: r = !1 }){
        this.state = {
            isInstalling: !1,
            hasInstalled: !1,
            resendRequest: null,
            preferDesktop: !1,
            platformManager: null,
            remote: null,
            debug: !1,
            connectWith: void 0
        }, this.state.remote = e, this.state.preferDesktop = t, this.state.platformManager = n, this.state.debug = r;
    }
    startDesktopOnboarding() {
        return function() {
            return a(this, void 0, void 0, function*() {
                xu("[MetamaskInstaller: startDesktopOnboarding() starting desktop onboarding"), window.ethereum && (window.ethereum = void 0), (new Hh).startOnboarding();
            });
        }();
    }
    redirectToProperInstall() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                var t, n;
                return a(this, void 0, void 0, function*() {
                    const { state: r } = e, i = null === (t = r.platformManager) || void 0 === t ? void 0 : t.getPlatformType();
                    if (xu(`[MetamaskInstaller: redirectToProperInstall()] platform=${i}`), i === Bo.MetaMaskMobileWebview) return !1;
                    r.isInstalling = !0;
                    try {
                        yield null === (n = r.remote) || void 0 === n ? void 0 : n.startConnection({
                            connectWith: r.connectWith
                        }), r.isInstalling = !1, r.hasInstalled = !0;
                    } catch (e) {
                        throw r.isInstalling = !1, e;
                    }
                    return !0;
                });
            }(this);
        });
    }
    checkInstallation() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                var t;
                return a(this, void 0, void 0, function*() {
                    const { state: n } = e, r = null === (t = n.platformManager) || void 0 === t ? void 0 : t.isMetaMaskInstalled();
                    return xu(`[MetamaskInstaller: checkInstallation()] isInstalled=${r}`), !!r || (yield e.redirectToProperInstall());
                });
            }(this);
        });
    }
    start({ wait: e = !1, connectWith: t }) {
        return a(this, void 0, void 0, function*() {
            this.state.connectWith = t, xu(`[MetaMaskInstaller: start()] wait=${e}`, t), yield Fh(this, {
                wait: e
            });
        });
    }
}
class qh {
    constructor({ debug: e, sdkVersion: t }){
        this.containers = {
            install: void 0,
            pending: void 0,
            select: void 0
        }, this.defined = {
            install: !1,
            pending: !1,
            select: !1
        }, this.debug = null != e && e, this.sdkVersion = t;
    }
    loadComponent(e) {
        return a(this, void 0, void 0, function*() {
            if (!this.defined[e]) {
                this.defined[e] = !0;
                try {
                    const e = yield Promise.resolve().then(function() {
                        return Rp;
                    });
                    console.log("loader", e), e.defineCustomElements();
                } catch (t) {
                    console.error(`Failed to load ${e} modal:`, t);
                }
            }
        });
    }
    renderInstallModal(e) {
        var t;
        return a(this, void 0, void 0, function*() {
            this.debug && console.debug("ModalLoader: renderInstallModal", e), this.containers.install = e.parentElement, yield this.loadComponent("install");
            const n = document.createElement("mm-install-modal");
            n.link = e.link, n.preferDesktop = e.preferDesktop, n.sdkVersion = null !== (t = e.sdkVersion) && void 0 !== t ? t : this.sdkVersion, n.addEventListener("close", ({ detail: { shouldTerminate: t } })=>e.onClose(t)), n.addEventListener("startDesktopOnboarding", e.metaMaskInstaller.startDesktopOnboarding), n.addEventListener("trackAnalytics", (t)=>{
                var n;
                return null === (n = e.onAnalyticsEvent) || void 0 === n ? void 0 : n.call(e, t.detail);
            }), e.parentElement.appendChild(n);
        });
    }
    renderSelectModal(e) {
        var t;
        return a(this, void 0, void 0, function*() {
            this.containers.select = e.parentElement, yield this.loadComponent("select");
            const n = document.createElement("mm-select-modal");
            n.link = e.link, n.sdkVersion = null !== (t = e.sdkVersion) && void 0 !== t ? t : this.sdkVersion, n.preferDesktop = e.preferDesktop, n.addEventListener("close", ({ detail: { shouldTerminate: t } })=>e.onClose(t)), n.addEventListener("connectWithExtension", e.connectWithExtension), e.parentElement.appendChild(n), setTimeout(()=>this.updateQRCode(e.link), 100);
        });
    }
    renderPendingModal(e) {
        var t;
        return a(this, void 0, void 0, function*() {
            this.containers.pending = e.parentElement, yield this.loadComponent("pending");
            const n = document.createElement("mm-pending-modal");
            n.sdkVersion = null !== (t = e.sdkVersion) && void 0 !== t ? t : this.sdkVersion, n.displayOTP = e.displayOTP, n.addEventListener("close", e.onClose), n.addEventListener("updateOTPValue", ({ detail: { otpValue: t } })=>e.updateOTPValue(t)), e.onDisconnect && n.addEventListener("disconnect", e.onDisconnect), e.parentElement.appendChild(n);
        });
    }
    updateOTPValue(e) {
        const t = ()=>{
            var t;
            const n = null === (t = this.containers.pending) || void 0 === t ? void 0 : t.querySelector("mm-pending-modal");
            return !!n && (n.otpCode = e, !0);
        };
        setTimeout(()=>{
            t();
        }, 800);
    }
    updateQRCode(e) {
        var t, n;
        const r = null === (t = this.containers.install) || void 0 === t ? void 0 : t.querySelector("mm-install-modal");
        if (r) r.link = e;
        else {
            const t = null === (n = this.containers.select) || void 0 === n ? void 0 : n.querySelector("mm-select-modal");
            t && (t.link = e);
        }
    }
    unmount() {
        Object.entries(this.containers).forEach(([e, t])=>{
            var n;
            null === (n = null == t ? void 0 : t.parentNode) || void 0 === n || n.removeChild(t), this.containers[e] = void 0;
        });
    }
}
const Vh = ({ link: e, debug: t, installer: n, terminate: r, connectWithExtension: i, preferDesktop: o, onAnalyticsEvent: s })=>{
    let a = null, c = null;
    xu("[UI: InstallModal-web: sdkWebInstallModal()] ################## Installing Modal #################"), xu(`[UI: InstallModal-web: sdkWebInstallModal()] link=${e}`), xu(`[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open "${e}" --ios`), xu(`[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open "${e}" --android`), xu(`[UI: InstallModal-web: sdkWebInstallModal()] adb shell am start -a android.intent.action.VIEW -d "${e}"`);
    const l = (e)=>{
        var t;
        xu("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web unmounting install modal -- shouldTerminate:", e, c), (null == c ? void 0 : c.parentNode) && (null === (t = c.parentNode) || void 0 === t || t.removeChild(c)), c = null, a = null, !0 === e && (null == r || r());
    };
    return {
        mount: (r)=>{
            if (xu("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web mounting install modal", c), c) return c.style.display = "block", void (null == a || a.updateQRCode(r));
            a = new qh({
                debug: t,
                sdkVersion: Zu.version
            }), c = document.createElement("div"), document.body.appendChild(c), window.extension ? a.renderSelectModal({
                parentElement: c,
                connectWithExtension: ()=>{
                    l(), null == i || i();
                },
                onClose: l,
                link: e,
                preferDesktop: null != o && o
            }).catch((e)=>{
                console.error(e);
            }) : a.renderInstallModal({
                parentElement: c,
                preferDesktop: null != o && o,
                link: e,
                metaMaskInstaller: n,
                onClose: l,
                onAnalyticsEvent: s
            }).catch((e)=>{
                console.error("[UI: InstallModal-web: sdkWebInstallModal()]", e);
            });
        },
        unmount: l
    };
}, Wh = ({ onDisconnect: e, debug: t })=>{
    let n = null, r = null;
    const i = ()=>{
        xu("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web unmount", n), (null == n ? void 0 : n.parentNode) && n.parentNode.removeChild(n), n = null, r = null;
    }, o = (e)=>{
        xu("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web updateOTPValue", e), r && r.updateOTPValue(e);
    }, s = ({ displayOTP: s } = {
        displayOTP: !0
    })=>{
        xu("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web mount", n), n ? n.style.display = "block" : (r = new qh({
            debug: t,
            sdkVersion: Zu.version
        }), n = document.createElement("div"), document.body.appendChild(n), r.renderPendingModal({
            parentElement: n,
            onClose: i,
            onDisconnect: e,
            updateOTPValue: o,
            displayOTP: s
        }).catch((e)=>{
            console.error("[UI: pendingModal-web: sdkWebPendingModal()]", e);
        }));
    };
    return s(), {
        mount: s,
        unmount: i,
        updateOTPValue: o
    };
};
function Gh(e, t) {
    var n, r, i, o;
    e.connector || (xu("[RemoteConnection: initializeConnector()] initialize connector"), e.connector = new Xo({
        platformType: t.platformManager.getPlatformType(),
        communicationLayerPreference: t.communicationLayerPreference,
        transports: t.transports,
        dappMetadata: Object.assign(Object.assign({}, t.dappMetadata), {
            source: t._source
        }),
        analytics: t.enableAnalytics,
        communicationServerUrl: t.communicationServerUrl,
        sdkVersion: Zu.version,
        context: "dapp",
        ecies: t.ecies,
        storage: t.storage,
        logging: t.logging
    }), t.timer && (xu("[RemoteConnection: initializeConnector()] reset background timer", t.timer), null === (r = null === (n = t.timer) || void 0 === n ? void 0 : n.stopBackgroundTimer) || void 0 === r || r.call(n), null === (o = null === (i = t.timer) || void 0 === i ? void 0 : i.runBackgroundTimer) || void 0 === o || o.call(i, ()=>!1, 1e4)));
}
function Zh(e) {
    e.listeners.forEach(({ event: t, handler: n })=>{
        var r;
        null === (r = e.connector) || void 0 === r || r.off(t, n);
    }), e.listeners = [];
}
function Yh(e, t, n) {
    return a(this, void 0, void 0, function*() {
        return new Promise((r, i)=>{
            if (!e.connector) return void i(new Error("No connector available"));
            xu("[RemoteConnection: connectWithModalInstaller()]", {
                state: e,
                options: t,
                linkParams: n
            });
            const o = `${e.useDeeplink ? Xu : Ju}?${n}`;
            !function(e, t, n) {
                var r, i, o, s;
                e.installModal = null === (i = (r = t.modals).install) || void 0 === i ? void 0 : i.call(r, {
                    link: n,
                    preferDesktop: e.preferDesktop,
                    installer: t.getMetaMaskInstaller(),
                    terminate: ()=>{
                        xu("[RemoteConnection: showInstallModal() => terminate()] terminate connection"), t.sdk.terminate().catch((e)=>{
                            console.warn("[MMSDK] failed to terminate connection", e);
                        });
                    },
                    debug: e.developerMode,
                    connectWithExtension: ()=>{
                        var e;
                        return null === (e = t.connectWithExtensionProvider) || void 0 === e || e.call(t), !1;
                    },
                    onAnalyticsEvent: ({ event: n, params: r })=>{
                        var i, o, s;
                        const a = Object.assign(Object.assign({}, r), {
                            sdkVersion: t.sdk.getVersion(),
                            dappId: null === (i = t.dappMetadata) || void 0 === i ? void 0 : i.name,
                            source: t._source,
                            url: null === (o = t.dappMetadata) || void 0 === o ? void 0 : o.url
                        });
                        null === (s = e.analytics) || void 0 === s || s.send({
                            event: n,
                            params: a
                        });
                    }
                }), null === (s = null === (o = e.installModal) || void 0 === o ? void 0 : o.mount) || void 0 === s || s.call(o, n);
            }(e, t, o), t.sdk.once(bo.PROVIDER_UPDATE, (e)=>a(this, void 0, void 0, function*() {
                    if (xu("[RemoteConnection: connectWithModalInstaller()] once provider_update -- resolving startConnection promise"), e !== uh.TERMINATE) i(e);
                    else {
                        i({
                            code: 4001,
                            message: "User rejected the request."
                        });
                    }
                })), e.connector.once(bo.AUTHORIZED, ()=>{
                r();
            }), e.connector.once(bo.REJECTED, ()=>{
                i(bo.REJECTED);
            }), e.connector.once(bo.CLIENTS_READY, ()=>a(this, void 0, void 0, function*() {
                    xu("[RemoteConnection: connectWithModalInstaller()] once clients_ready -- resolving startConnection promise"), r();
                }));
        });
    });
}
function Jh(e, t) {
    function n(t, n) {
        var r;
        null === (r = e.connector) || void 0 === r || r.on(t, n), e.listeners.push({
            event: t,
            handler: n
        });
    }
    e.connector && (Zh(e), n(bo.WALLET_INIT, ({ accounts: e, chainId: t })=>a(this, void 0, void 0, function*() {
            xu(`[RemoteConnection: setupListeners() => EventType.WALLET_INIT] 'wallet_init' accounts=${e} chainId=${t}`);
            const n = zu.getProvider();
            n._setConnected();
            const r = {
                accounts: e,
                chainId: t,
                isUnlocked: !1
            };
            n._initializeState(r), n.emit("chainChanged", t), n.emit("accountsChanged", e);
        })), n(bo.AUTHORIZED, ()=>a(this, void 0, void 0, function*() {
            var t, n, r, i;
            try {
                xu("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' closing modals", e.pendingModal, e.installModal);
                const o = zu.getProvider();
                o._setConnected(), null === (n = null === (t = e.pendingModal) || void 0 === t ? void 0 : t.unmount) || void 0 === n || n.call(t), null === (i = null === (r = e.installModal) || void 0 === r ? void 0 : r.unmount) || void 0 === i || i.call(r, !1), e.otpAnswer = void 0, e.authorized = !0, xu("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' provider.state", o.getState()), yield o.forceInitializeState();
            } catch (e) {}
        })), n(bo.TERMINATE, ()=>{
        var t, n, r, i, o;
        null === (n = null === (t = e.pendingModal) || void 0 === t ? void 0 : t.unmount) || void 0 === n || n.call(t), null === (i = null === (r = e.installModal) || void 0 === r ? void 0 : r.unmount) || void 0 === i || i.call(r, !0), e.pendingModal = void 0, e.installModal = void 0, e.otpAnswer = void 0, null === (o = e.connector) || void 0 === o || o.disconnect({
            terminate: !0
        }), e.authorized = !1;
        zu.getProvider().handleDisconnect({
            terminate: !0
        }), Zh(e), xu("[RemoteConnection: setupListeners()] All listeners cleaned up");
    }));
}
function Xh(e, t, { initialCheck: n, connectWith: r } = {}) {
    var i, o, s, c, l, d, u, h, f, p, g, m, y, v, b, w, E, C, S;
    return a(this, void 0, void 0, function*() {
        try {
            if (Gh(e, t), !e.connector) throw new Error("no connector defined");
            Jh(e);
            const _ = zu.getProvider();
            e.authorized = !1, _.emit("connecting");
            const k = yield null === (i = e.connector) || void 0 === i ? void 0 : i.originatorSessionConnect();
            xu(`[RemoteConnection: startConnection()] after originatorSessionConnect initialCheck=${n}`, k);
            let x = null !== (o = null == k ? void 0 : k.channelId) && void 0 !== o ? o : "", M = null !== (c = null === (s = e.connector.getKeyInfo()) || void 0 === s ? void 0 : s.ecies.public) && void 0 !== c ? c : "", A = null !== (d = null === (l = e.connector.getKeyInfo()) || void 0 === l ? void 0 : l.ecies.private) && void 0 !== d ? d : "";
            if (n && !k) return Promise.resolve();
            if (!k && !n) {
                const t = yield e.connector.generateChannelIdConnect();
                x = null !== (u = t.channelId) && void 0 !== u ? u : "", M = null !== (h = t.pubKey) && void 0 !== h ? h : "", A = null !== (f = t.privKey) && void 0 !== f ? f : "";
                const n = Date.now();
                null === (p = e.connector.state.storageManager) || void 0 === p || p.persistChannelConfig({
                    channelId: x,
                    localKey: A,
                    lastActive: n,
                    validUntil: n + po
                });
            }
            if (n && (null == k ? void 0 : k.channelId)) return (null === (g = e.connector) || void 0 === g ? void 0 : g.isConnected()) || (xu(`[RemoteConnection: startConnection()] reconnecting to channel initialCheck=${n}`, k), yield null === (m = e.connector) || void 0 === m ? void 0 : m.connectToChannel({
                channelId: x
            })), Promise.resolve();
            k && !(null === (y = e.connector) || void 0 === y ? void 0 : y.isConnected()) && (xu("[RemoteConnection: startConnection()] reconnecting to channel", k), yield null === (v = e.connector) || void 0 === v ? void 0 : v.connectToChannel({
                channelId: x
            }));
            const I = (null === (b = e.platformManager) || void 0 === b ? void 0 : b.isSecure()) ? "" : "&t=q", R = Zu.version, { iconUrl: P, name: L, url: O, scheme: T } = t.dappMetadata || {}, N = null === (w = e.platformManager) || void 0 === w ? void 0 : w.getPlatformType();
            let D = "N/A";
            "undefined" != typeof window && window.location && window.location.hostname ? D = window.location.hostname : void 0 !== L ? D = L : void 0 !== O && (D = O);
            const $ = {
                url: null != O ? O : "",
                title: null != L ? L : "",
                icon: P,
                scheme: null != T ? T : "",
                apiVersion: R,
                dappId: D || O || "N/A",
                platform: null != N ? N : "",
                source: null !== (E = t._source) && void 0 !== E ? E : ""
            }, B = gh(JSON.stringify($));
            let K = `channelId=${x}&v=2&comm=${null !== (C = e.communicationLayerPreference) && void 0 !== C ? C : ""}&pubkey=${M}${I}&originatorInfo=${B}`;
            if (r) {
                K += `&rpc=${gh(JSON.stringify(r))}`;
                const t = e.connector.getRPCMethodTracker();
                t && (t[`${r.id}`] = Object.assign(Object.assign({}, r), {
                    id: `${r.id}`,
                    timestamp: Date.now()
                }));
            }
            const j = encodeURI(K), U = `${e.useDeeplink ? Xu : Ju}?${K}`;
            return e.qrcodeLink = U, e.developerMode && xu(`[RemoteConnection: startConnection()] qrcodeLink=${j}`), _.emit("display_uri", U), (null === (S = e.platformManager) || void 0 === S ? void 0 : S.isSecure()) ? (yield function(e, t) {
                var n, r;
                return a(this, void 0, void 0, function*() {
                    const i = `${Ju}?${t}`, o = `${Xu}?${t}`;
                    null === (r = null === (n = e.platformManager) || void 0 === n ? void 0 : n.openDeeplink) || void 0 === r || r.call(n, i, o, "_self");
                });
            }(e, j), new Promise((t, n)=>{
                var r, i, o;
                (null === (r = e.connector) || void 0 === r ? void 0 : r.isAuthorized()) ? t() : (null === (i = e.connector) || void 0 === i || i.once(bo.AUTHORIZED, ()=>{
                    t();
                }), null === (o = e.connector) || void 0 === o || o.once(bo.REJECTED, ()=>{
                    n(bo.REJECTED);
                }));
            })) : Yh(e, t, j);
        } catch (e) {
            throw console.error("[startConnection] error", e), e;
        }
    });
}
class Qh {
    constructor(e){
        var t, n, r;
        this.state = {
            connector: void 0,
            qrcodeLink: void 0,
            analytics: void 0,
            developerMode: !1,
            authorized: !1,
            reconnection: !1,
            preferDesktop: !1,
            deeplinkProtocol: !1,
            listeners: [],
            communicationLayerPreference: void 0,
            platformManager: void 0,
            pendingModal: void 0,
            installModal: void 0,
            otpAnswer: void 0
        }, this.options = e;
        const i = !0 === (null === (t = e.logging) || void 0 === t ? void 0 : t.developerMode) || !0 === (null === (n = e.logging) || void 0 === n ? void 0 : n.sdk);
        this.state.developerMode = i, this.state.analytics = e.analytics, this.state.preferDesktop = null !== (r = e.preferDesktop) && void 0 !== r && r, this.state.useDeeplink = e.sdk.options.useDeeplink, this.state.communicationLayerPreference = e.communicationLayerPreference, this.state.platformManager = e.platformManager, e.modals.install || (e.modals.install = Vh), e.modals.otp || (e.modals.otp = Wh);
    }
    startConnection(e) {
        return a(this, void 0, void 0, function*() {
            return Xh(this.state, this.options, e);
        });
    }
    initRemoteCommunication({ sdkInstance: e }) {
        var t, n, r;
        return a(this, void 0, void 0, function*() {
            const i = yield null === (n = null === (t = e.options.storage) || void 0 === t ? void 0 : t.storageManager) || void 0 === n ? void 0 : n.getPersistedChannelConfig();
            if (!this.options.ecies) {
                const e = {
                    privateKey: null == i ? void 0 : i.localKey
                };
                this.options.ecies = e;
            }
            Gh(this.state, this.options), yield null === (r = this.getConnector()) || void 0 === r ? void 0 : r.initFromDappStorage(), Jh(this.state, this.options);
        });
    }
    showActiveModal() {
        return function(e) {
            var t, n, r, i;
            e.authorized ? xu("[RemoteConnection: showActiveModal()] already authorized") : e.pendingModal ? null === (n = (t = e.pendingModal).mount) || void 0 === n || n.call(t) : e.installModal && (null === (i = (r = e.installModal).mount) || void 0 === i || i.call(r, e.qrcodeLink || ""));
        }(this.state);
    }
    closeModal() {
        var e, t, n, r;
        null === (t = null === (e = this.state.pendingModal) || void 0 === e ? void 0 : e.unmount) || void 0 === t || t.call(e), null === (r = null === (n = this.state.installModal) || void 0 === n ? void 0 : n.unmount) || void 0 === r || r.call(n, !1);
    }
    getUniversalLink() {
        if (!this.state.qrcodeLink) throw new Error("connection not started. run startConnection() first.");
        return this.state.qrcodeLink;
    }
    getChannelConfig() {
        var e;
        return null === (e = this.state.connector) || void 0 === e ? void 0 : e.getChannelConfig();
    }
    getKeyInfo() {
        var e;
        return null === (e = this.state.connector) || void 0 === e ? void 0 : e.getKeyInfo();
    }
    getConnector() {
        if (!this.state.connector) throw new Error("invalid remote connector");
        return this.state.connector;
    }
    getPlatformManager() {
        if (!this.state.platformManager) throw new Error("PlatformManager not available");
        return this.state.platformManager;
    }
    isConnected() {
        var e;
        return (null === (e = this.state.connector) || void 0 === e ? void 0 : e.isReady()) || !1;
    }
    isAuthorized() {
        var e;
        return (null === (e = this.state.connector) || void 0 === e ? void 0 : e.isAuthorized()) || !1;
    }
    isPaused() {
        var e;
        return null === (e = this.state.connector) || void 0 === e ? void 0 : e.isPaused();
    }
    disconnect(e) {
        var t, n, r;
        xu("[RemoteConnection: disconnect()]", e), (null == e ? void 0 : e.terminate) && (zu.getProvider().handleDisconnect({
            terminate: !0
        }), null === (n = null === (t = this.state.pendingModal) || void 0 === t ? void 0 : t.unmount) || void 0 === n || n.call(t), this.state.otpAnswer = void 0), null === (r = this.state.connector) || void 0 === r || r.disconnect(e), function(e) {
            xu("[RemoteConnection: cleanupConnector()] cleaning up connector"), e.connector && (Zh(e), e.connector.disconnect({
                terminate: !0
            }).catch((e)=>{
                xu("[RemoteConnection: cleanupConnector()] error disconnecting connector", e);
            }));
        }(this.state);
    }
}
function ef(e) {
    var n, r, i, o, s, c, l, d, u, h, f;
    return a(this, void 0, void 0, function*() {
        const { options: p } = e;
        if (p.logging = null !== (n = p.logging) && void 0 !== n ? n : {}, p.communicationLayerPreference = null !== (r = p.communicationLayerPreference) && void 0 !== r ? r : $o.SOCKET, void 0 !== p.enableDebug && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].enable("MM_SDK"), console.warn("enableDebug is removed. Please use enableAnalytics instead.")), p.enableAnalytics = null === (i = p.enableAnalytics) || void 0 === i || i, p.injectProvider = null === (o = p.injectProvider) || void 0 === o || o, p.shouldShimWeb3 = null === (s = p.shouldShimWeb3) || void 0 === s || s, p.extensionOnly = null === (c = p.extensionOnly) || void 0 === c || c, p.useDeeplink = null === (l = p.useDeeplink) || void 0 === l || l, p.storage = null !== (d = p.storage) && void 0 !== d ? d : {
            enabled: !0
        }, p.headless) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("[MetaMaskSDK: performSDKInitialization()] headless mode enabled");
            const e = ()=>{}, n = {
                install: ()=>({
                        mount: e,
                        unmount: e
                    })
            }, r = {
                installer: e
            };
            p.modals = n, p.ui = r;
        }
        const g = !0 === (null === (u = p.logging) || void 0 === u ? void 0 : u.developerMode);
        e.debug = (null === (h = p.logging) || void 0 === h ? void 0 : h.sdk) || g, xu("[MetaMaskSDK: performSDKInitialization()] options", e.options);
        const m = Object.assign({}, p.logging);
        g && (m.sdk = !0, m.eciesLayer = !0, m.keyExchangeLayer = !0, m.remoteLayer = !0, m.serviceLayer = !0, m.plaintext = !0), yield function(e) {
            var t;
            return a(this, void 0, void 0, function*() {
                const { options: n } = e;
                e.platformManager = new qu({
                    useDeepLink: null !== (t = n.useDeeplink) && void 0 !== t && t,
                    preferredOpenLink: n.openDeeplink,
                    debug: e.debug
                });
            });
        }(e), yield function(e) {
            var t, n, r, i, o, s, c, l, d;
            return a(this, void 0, void 0, function*() {
                const { options: a } = e, u = null === (t = e.platformManager) || void 0 === t ? void 0 : t.getPlatformType();
                e.analytics = new Sh({
                    serverUrl: null !== (n = a.communicationServerUrl) && void 0 !== n ? n : ho,
                    enabled: a.enableAnalytics,
                    originatorInfo: {
                        url: null !== (r = a.dappMetadata.url) && void 0 !== r ? r : "",
                        title: null !== (i = a.dappMetadata.name) && void 0 !== i ? i : "",
                        dappId: "undefined" == typeof window || void 0 === window.location ? null !== (l = null !== (s = null === (o = a.dappMetadata) || void 0 === o ? void 0 : o.name) && void 0 !== s ? s : null === (c = a.dappMetadata) || void 0 === c ? void 0 : c.url) && void 0 !== l ? l : "N/A" : window.location.hostname,
                        platform: null != u ? u : "",
                        source: null !== (d = a._source) && void 0 !== d ? d : ""
                    }
                });
            });
        }(e), yield function(e) {
            var t;
            return a(this, void 0, void 0, function*() {
                const { options: n } = e;
                !0 !== (null === (t = n.storage) || void 0 === t ? void 0 : t.enabled) || n.storage.storageManager || (n.storage.storageManager = yield Vu(n.storage));
            });
        }(e), yield function(e) {
            return a(this, void 0, void 0, function*() {
                const { options: t } = e, n = /^(http|https):\/\/[^\s]*$/;
                if (t.dappMetadata) {
                    t.dappMetadata.iconUrl && !n.test(t.dappMetadata.iconUrl) && (console.warn("Invalid dappMetadata.iconUrl: URL must start with http:// or https://"), t.dappMetadata.iconUrl = void 0), t.dappMetadata.base64Icon && t.dappMetadata.base64Icon.length > kh && (console.warn("Invalid dappMetadata.base64Icon: Base64-encoded icon string length must be less than 163400 characters"), t.dappMetadata.base64Icon = void 0), t.dappMetadata.url && !n.test(t.dappMetadata.url) && console.warn("Invalid dappMetadata.url: URL must start with http:// or https://");
                    const e = _h();
                    if (e && !t.dappMetadata.iconUrl && !t.dappMetadata.base64Icon) {
                        const n = `${window.location.protocol}//${window.location.host}${e}`;
                        t.dappMetadata.iconUrl = n;
                    }
                }
                e.dappMetadata = t.dappMetadata;
            });
        }(e), yield Rh(e), yield Ph(e);
        const { metamaskBrowserExtension: y, preferExtension: v, shouldReturn: b } = yield function(e) {
            var t, n, r, i;
            return a(this, void 0, void 0, function*() {
                const { options: o } = e;
                let s, c = !1, l = !1;
                if ("undefined" != typeof window && window.ethereum && !(null === (t = e.platformManager) || void 0 === t ? void 0 : t.isMetaMaskMobileWebView())) {
                    c = "extension" === localStorage.getItem(sh);
                    try {
                        s = yield Ih({
                            mustBeMetaMask: !0,
                            sdkInstance: e
                        }), window.extension = s, s.on(lh.CHAIN_CHANGED, (t)=>{
                            xu(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE chainChanged chainId=${t}`), Boolean(e.sdkProvider) && e.getMobileProvider().emit(lh.CHAIN_CHANGED, t);
                        }), s.on(lh.ACCOUNTS_CHANGED, (t)=>a(this, void 0, void 0, function*() {
                                var n;
                                xu(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE accountsChanged accounts=${t}`);
                                const r = Boolean(e.sdkProvider), i = Boolean(e.extensionActive);
                                if (r && e.getMobileProvider().emit(lh.ACCOUNTS_CHANGED, t), i && 0 === (null == t ? void 0 : t.length) && 0 === (yield null === (n = e.getProvider()) || void 0 === n ? void 0 : n.request({
                                    method: th.WALLET_GETPERMISSIONS,
                                    params: []
                                })).length) try {
                                    yield e.terminate();
                                } catch (e) {
                                    xu("[MetaMaskSDK: setupExtensionPreferences()] error terminating on permissions revoked", e);
                                }
                            })), s.on(lh.DISCONNECT, (t)=>{
                            xu(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE disconnect error=${t}`), Boolean(e.sdkProvider) && e.getMobileProvider().emit(lh.DISCONNECT, t);
                        }), s.on(lh.CONNECT, (t)=>{
                            xu(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connect args=${t}`), Boolean(e.sdkProvider) && e.getMobileProvider().emit(lh.CONNECT, t);
                        }), s.on(lh.CONNECTED, (t)=>{
                            xu("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connected", t), Boolean(e.sdkProvider) && e.getMobileProvider().emit(lh.CONNECTED, t);
                        });
                    } catch (e) {
                        window.extension = void 0;
                    }
                } else (null === (n = e.platformManager) || void 0 === n ? void 0 : n.isMetaMaskMobileWebView()) && (null === (r = e.analytics) || void 0 === r || r.send({
                    event: So.SDK_USE_INAPP_BROWSER
                }), e.activeProvider = Mh({
                    provider: window.ethereum,
                    sdkInstance: e
                }), e._initialized = !0, l = !0);
                return s && o.extensionOnly && (xu("[MetaMaskSDK: setupExtensionPreferences()] EXTENSION ONLY --- prevent sdk initialization"), null === (i = e.analytics) || void 0 === i || i.send({
                    event: So.SDK_USE_EXTENSION
                }), e.activeProvider = s, e.extensionActive = !0, e.extension = s, e._initialized = !0, l = !0), {
                    preferExtension: c,
                    shouldReturn: l,
                    metamaskBrowserExtension: s
                };
            });
        }(e);
        if (b) xu("[MetaMaskSDK: performSDKInitialization()] shouldReturn=true --- prevent sdk initialization");
        else {
            yield function(e, t) {
                var n, r, i, o, s;
                return a(this, void 0, void 0, function*() {
                    const { options: a } = e, c = Object.assign({}, a.logging);
                    e.remoteConnection = new Qh({
                        preferDesktop: null !== (n = a.preferDesktop) && void 0 !== n && n,
                        communicationLayerPreference: null !== (r = a.communicationLayerPreference) && void 0 !== r ? r : $o.SOCKET,
                        analytics: e.analytics,
                        dappMetadata: a.dappMetadata,
                        _source: a._source,
                        enableAnalytics: null === (i = a.enableAnalytics) || void 0 === i || i,
                        timer: a.timer,
                        sdk: e,
                        platformManager: e.platformManager,
                        transports: a.transports,
                        communicationServerUrl: a.communicationServerUrl,
                        storage: null !== (o = a.storage) && void 0 !== o ? o : {
                            enabled: !0
                        },
                        getMetaMaskInstaller: ()=>{
                            if (!e.installer) throw new Error("Invalid SDK status -- installer not initialized");
                            return e.installer;
                        },
                        logging: c,
                        connectWithExtensionProvider: void 0 === t ? void 0 : ()=>ph(e),
                        modals: Object.assign(Object.assign({}, a.modals), {
                            onPendingModalDisconnect: e.terminate.bind(e)
                        })
                    }), yield e.remoteConnection.initRemoteCommunication({
                        sdkInstance: e
                    }), e.installer = new zh({
                        remote: e.remoteConnection,
                        preferDesktop: null !== (s = a.preferDesktop) && void 0 !== s && s,
                        platformManager: e.platformManager,
                        debug: e.debug
                    });
                });
            }(e, y), yield Eh(e), yield function(e, t) {
                var n, r;
                return a(this, void 0, void 0, function*() {
                    const { options: i } = e;
                    t ? (xu("[MetaMaskSDK: handleAutoAndExtensionConnections()] preferExtension is detected -- connect with it."), null === (n = e.analytics) || void 0 === n || n.send({
                        event: So.SDK_EXTENSION_UTILIZED
                    }), ph(e).catch((e)=>{
                        console.warn("Can't connect with MetaMask extension...", e), localStorage.removeItem(sh);
                    })) : i.checkInstallationImmediately && ((null === (r = e.platformManager) || void 0 === r ? void 0 : r.isDesktopWeb()) ? (xu("[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately"), e.connect().catch((e)=>{
                        xu(`[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- error on autoconnect _err=${e}`);
                    })) : console.warn("[handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- only for web desktop")), e._initialized = !0;
                });
            }(e, v);
            try {
                yield null === (f = e.remoteConnection) || void 0 === f ? void 0 : f.startConnection({
                    initialCheck: !0
                });
            } catch (e) {
                console.error("[MetaMaskSDK: setupRemoteConnectionAndInstaller()] Error while checking installation", e);
            }
            e.emit(Fu.ProviderUpdate, uh.INITIALIZED);
        }
    });
}
class tf extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter2$40$6$2e$4$2e$9$2f$node_modules$2f$eventemitter2$2f$lib$2f$eventemitter2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    constructor(e = {
        storage: {
            enabled: !0
        },
        injectProvider: !0,
        forceInjectProvider: !1,
        enableAnalytics: !0,
        shouldShimWeb3: !0,
        useDeeplink: !0,
        extensionOnly: !0,
        headless: !1,
        dappMetadata: {
            name: "",
            url: "",
            iconUrl: ""
        },
        _source: Yu,
        i18nOptions: {
            enabled: !1
        }
    }){
        var n, r, i;
        super(), this.extensionActive = !1, this._initialized = !1, this.sdkInitPromise = void 0, this.debug = !1, this.readonlyRPCCalls = !1, this.availableLanguages = [
            "en"
        ], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disable();
        const o = !0 === (null === (n = e.logging) || void 0 === n ? void 0 : n.developerMode);
        if (((null === (r = e.logging) || void 0 === r ? void 0 : r.sdk) || o) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$3$2e$7$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].enable("MM_SDK"), xu("[MetaMaskSDK: constructor()]: begin."), this.setMaxListeners(50), !(null === (i = e.dappMetadata) || void 0 === i ? void 0 : i.url)) {
            if ("undefined" == typeof window || "undefined" == typeof document) throw new Error("You must provide dAppMetadata url");
            e.dappMetadata = Object.assign(Object.assign({}, e.dappMetadata), {
                url: `${window.location.protocol}//${window.location.host}`
            });
        }
        this.options = e, this.options._source || (e._source = Yu), this.init().then(()=>{
            xu("[MetaMaskSDK: constructor()]: initialized successfully."), "undefined" != typeof window && (window.mmsdk = this);
        }).catch((e)=>{
            console.error("[MetaMaskSDK: constructor()] error during initialization", e);
        });
    }
    init() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                var t;
                return a(this, void 0, void 0, function*() {
                    if ("undefined" != typeof window && (null === (t = window.mmsdk) || void 0 === t ? void 0 : t.isInitialized())) return xu("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"), Promise.resolve(window.mmsdk);
                    if (e._initialized) return xu("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"), e.sdkInitPromise;
                    if (e.sdkInitPromise) return xu("[MetaMaskSDK: initializeMetaMaskSDK()] already initializing"), e.sdkInitPromise;
                    try {
                        e.sdkInitPromise = ef(e), yield e.sdkInitPromise;
                    } catch (e) {
                        throw console.error(e), e;
                    }
                    return e.sdkInitPromise;
                });
            }(this);
        });
    }
    isExtensionActive() {
        return this.extensionActive;
    }
    checkExtensionAvailability() {
        var e;
        return "undefined" != typeof window && Boolean(null === (e = window.ethereum) || void 0 === e ? void 0 : e.isMetaMask);
    }
    connect() {
        return a(this, void 0, void 0, function*() {
            return function(e) {
                return a(this, void 0, void 0, function*() {
                    if (e._initialized || (xu("[MetaMaskSDK: connect()] provider not ready -- wait for init()"), yield e.init()), xu(`[MetaMaskSDK: connect()] isExtensionActive=${e.isExtensionActive()} activeProvider`, e.activeProvider), !e.activeProvider) throw new Error("SDK state invalid -- undefined provider");
                    const t = e.activeProvider.getSelectedAddress();
                    return t ? [
                        t
                    ] : e.activeProvider.request({
                        method: th.ETH_REQUESTACCOUNTS,
                        params: []
                    });
                });
            }(this);
        });
    }
    connectAndSign({ msg: e }) {
        return a(this, void 0, void 0, function*() {
            return fh({
                instance: this,
                msg: e
            });
        });
    }
    connectWith(e) {
        return a(this, void 0, void 0, function*() {
            return function({ instance: e, rpc: t }) {
                return a(this, void 0, void 0, function*() {
                    if (e._initialized || (xu("[MetaMaskSDK: connectWith()] provider not ready -- wait for init()"), yield e.init()), xu(`[MetaMaskSDK: connectWith()] method: ${t.method} rpc=${t}`), !e.activeProvider) throw new Error("SDK state invalid -- undefined provider");
                    return e.activeProvider.request({
                        method: th.METAMASK_CONNECTWITH,
                        params: [
                            t
                        ]
                    });
                });
            }({
                instance: this,
                rpc: e
            });
        });
    }
    resume() {
        return function(e) {
            var t, n, r;
            return a(this, void 0, void 0, function*() {
                if (!(null === (n = null === (t = e.remoteConnection) || void 0 === t ? void 0 : t.getConnector()) || void 0 === n ? void 0 : n.isReady())) return xu("[MetaMaskSDK: resume()] channel is not ready -- starting connection"), void (null === (r = e.remoteConnection) || void 0 === r || r.startConnection());
                xu("[MetaMaskSDK: resume()] channel is ready");
            });
        }(this);
    }
    disconnect() {
        return console.warn("MetaMaskSDK.disconnect() is deprecated, use terminate()"), this.terminate();
    }
    isAuthorized() {
        var e;
        null === (e = this.remoteConnection) || void 0 === e || e.isAuthorized();
    }
    terminate() {
        return function(e) {
            var t, n, r;
            return a(this, void 0, void 0, function*() {
                if (!(null === (t = e.platformManager) || void 0 === t ? void 0 : t.isMetaMaskMobileWebView())) {
                    if (hh && (window.localStorage.removeItem(sh), window.localStorage.removeItem(ch), window.localStorage.removeItem(ah)), e.extensionActive) {
                        try {
                            yield null === (n = e.activeProvider) || void 0 === n ? void 0 : n.request({
                                method: th.WALLET_REVOKEPERMISSIONS,
                                params: [
                                    {
                                        eth_accounts: {}
                                    }
                                ]
                            });
                        } catch (e) {
                            xu("[MetaMaskSDK: terminate()] error revoking permissions", e);
                        }
                        return e.options.extensionOnly ? (e.emit(Fu.ProviderUpdate, uh.TERMINATE), void xu("[MetaMaskSDK: terminate()] extensionOnly --- prevent switching providers")) : (e.activeProvider = e.sdkProvider, window.ethereum = e.activeProvider, e.extensionActive = !1, void e.emit(Fu.ProviderUpdate, uh.TERMINATE));
                    }
                    e.emit(Fu.ProviderUpdate, uh.TERMINATE), xu(`[MetaMaskSDK: terminate()] remoteConnection=${e.remoteConnection}`), null === (r = e.remoteConnection) || void 0 === r || r.disconnect({
                        terminate: !0,
                        sendMessage: !0
                    });
                }
            });
        }(this);
    }
    isInitialized() {
        return this._initialized;
    }
    setReadOnlyRPCCalls(e) {
        this.readonlyRPCCalls = e;
    }
    hasReadOnlyRPCCalls() {
        return this.readonlyRPCCalls;
    }
    getProvider() {
        if (this.activeProvider) return this.activeProvider;
        console.warn("MetaMaskSDK: No active provider found");
    }
    getMobileProvider() {
        if (!this.sdkProvider) throw new Error("SDK state invalid -- undefined mobile provider");
        return this.sdkProvider;
    }
    getUniversalLink() {
        var e;
        const t = null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getUniversalLink();
        if (!t) throw new Error("No Universal Link available, please call eth_requestAccounts first.");
        return t;
    }
    getChannelId() {
        var e, t;
        return null === (t = null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getChannelConfig()) || void 0 === t ? void 0 : t.channelId;
    }
    getRPCHistory() {
        var e, t;
        return null === (t = null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getConnector()) || void 0 === t ? void 0 : t.getRPCMethodTracker();
    }
    getVersion() {
        return Zu.version;
    }
    getWalletStatus() {
        var e, t;
        return null === (t = null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getConnector()) || void 0 === t ? void 0 : t.getConnectionStatus();
    }
    _getChannelConfig() {
        var e;
        return null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getChannelConfig();
    }
    _ping() {
        var e, t;
        null === (t = null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getConnector()) || void 0 === t || t.ping();
    }
    _keyCheck() {
        var e, t;
        null === (t = null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getConnector()) || void 0 === t || t.keyCheck();
    }
    _getServiceStatus() {
        var e, t;
        return null === (t = null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getConnector()) || void 0 === t ? void 0 : t.getServiceStatus();
    }
    _getRemoteConnection() {
        return this.remoteConnection;
    }
    _getDappMetadata() {
        return this.dappMetadata;
    }
    _getKeyInfo() {
        var e;
        return null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getKeyInfo();
    }
    _resetKeys() {
        var e, t;
        null === (t = null === (e = this.remoteConnection) || void 0 === e ? void 0 : e.getConnector()) || void 0 === t || t.resetKeys();
    }
    _getConnection() {
        return this.remoteConnection;
    }
    emit(e, t) {
        return super.emit(e, t);
    }
    on(e, t) {
        return super.on(e, t);
    }
}
var nf = Object.freeze({
    __proto__: null,
    StorageManagerWeb: class {
        constructor({ enabled: e } = {
            enabled: !1
        }){
            this.enabled = !1, this.enabled = e;
        }
        persistChannelConfig(e) {
            return a(this, void 0, void 0, function*() {
                const t = JSON.stringify(e);
                xu(`[StorageManagerWeb: persistChannelConfig()] enabled=${this.enabled}`, e), localStorage.setItem(oh, t);
            });
        }
        getPersistedChannelConfig() {
            return a(this, void 0, void 0, function*() {
                let e;
                try {
                    if (xu(`[StorageManagerWeb: getPersistedChannelConfig()] enabled=${this.enabled}`), e = localStorage.getItem(oh), xu("[StorageManagerWeb: getPersistedChannelConfig()]", e), !e) return;
                    const t = JSON.parse(e);
                    return xu("[StorageManagerWeb: getPersistedChannelConfig()] channelConfig", t), t;
                } catch (e) {
                    return void console.error("[StorageManagerWeb: getPersistedChannelConfig()] Can't find existing channel config", e);
                }
            });
        }
        persistAccounts(e) {
            return a(this, void 0, void 0, function*() {
                xu(`[StorageManagerWeb: persistAccounts()] enabled=${this.enabled}`, e);
                const t = JSON.stringify(e);
                localStorage.setItem(ah, t);
            });
        }
        getCachedAccounts() {
            return a(this, void 0, void 0, function*() {
                try {
                    const e = localStorage.getItem(ah);
                    return e ? JSON.parse(e) : [];
                } catch (e) {
                    throw console.error("[StorageManagerWeb: getCachedAccounts()] Error reading cached accounts", e), e;
                }
            });
        }
        persistChainId(e) {
            return a(this, void 0, void 0, function*() {
                xu(`[StorageManagerWeb: persistChainId()] enabled=${this.enabled}`, e), localStorage.setItem(ch, e);
            });
        }
        getCachedChainId() {
            return a(this, void 0, void 0, function*() {
                try {
                    const e = localStorage.getItem(ch);
                    return null != e ? e : void 0;
                } catch (e) {
                    throw console.error("[StorageManagerWeb: getCachedChainId()] Error reading cached chainId", e), e;
                }
            });
        }
        terminate() {
            return a(this, void 0, void 0, function*() {
                xu(`[StorageManagerWeb: terminate()] enabled=${this.enabled}`), localStorage.removeItem(oh);
            });
        }
    }
});
const rf = "hydrated", of = !1, sf = !1, af = !0;
var cf = Object.defineProperty, lf = new WeakMap, df = (e)=>lf.get(e), uf = (e, t)=>lf.set(t.$lazyInstance$ = e, t), hf = (e, t)=>t in e, ff = (e, t)=>(0, console.error)(e, t), pf = new Map, gf = new Map, mf = "slot-fb{display:contents}slot-fb[hidden]{display:none}", yf = "undefined" != typeof window ? window : {}, vf = yf.document || {
    head: {}
}, bf = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: (e)=>e(),
    raf: (e)=>requestAnimationFrame(e),
    ael: (e, t, n, r)=>e.addEventListener(t, n, r),
    rel: (e, t, n, r)=>e.removeEventListener(t, n, r),
    ce: (e, t)=>new CustomEvent(e, t)
}, wf = (()=>{
    try {
        return new CSSStyleSheet, "function" == typeof (new CSSStyleSheet).replaceSync;
    } catch (e) {}
    return !1;
})(), Ef = !1, Cf = [], Sf = [], _f = (e, t)=>(t)=>{
        e.push(t), Ef || (Ef = !0, 4 & bf.$flags$ ? Mf(xf) : bf.raf(xf));
    }, kf = (e)=>{
    for(let t = 0; t < e.length; t++)try {
        e[t](performance.now());
    } catch (e) {
        ff(e);
    }
    e.length = 0;
}, xf = ()=>{
    kf(Cf), kf(Sf), (Ef = Cf.length > 0) && bf.raf(xf);
}, Mf = (e)=>((e)=>Promise.resolve(e))().then(e), Af = _f(Sf), If = {}, Rf = (e)=>"object" === (e = typeof e) || "function" === e;
function Pf(e) {
    var t, n, r;
    return null != (r = null == (n = null == (t = e.head) ? void 0 : t.querySelector('meta[name="csp-nonce"]')) ? void 0 : n.getAttribute("content")) ? r : void 0;
}
((e, t)=>{
    for(var n in t)cf(e, n, {
        get: t[n],
        enumerable: !0
    });
})({}, {
    err: ()=>Of,
    map: ()=>Tf,
    ok: ()=>Lf,
    unwrap: ()=>$f,
    unwrapErr: ()=>Bf
});
var Lf = (e)=>({
        isOk: !0,
        isErr: !1,
        value: e
    }), Of = (e)=>({
        isOk: !1,
        isErr: !0,
        value: e
    });
function Tf(e, t) {
    if (e.isOk) {
        const n = t(e.value);
        return n instanceof Promise ? n.then((e)=>Lf(e)) : Lf(n);
    }
    if (e.isErr) {
        const t = e.value;
        return Of(t);
    }
    throw "should never get here";
}
var Nf, Df, $f = (e)=>{
    if (e.isOk) return e.value;
    throw e.value;
}, Bf = (e)=>{
    if (e.isErr) return e.value;
    throw e.value;
}, Kf = (e, t, ...n)=>{
    let r = null, i = !1, o = !1;
    const s = [], a = (t)=>{
        for(let n = 0; n < t.length; n++)r = t[n], Array.isArray(r) ? a(r) : null != r && "boolean" != typeof r && ((i = "function" != typeof e && !Rf(r)) && (r = String(r)), i && o ? s[s.length - 1].$text$ += r : s.push(i ? jf(null, r) : r), o = i);
    };
    if (a(n), t) {
        const e = t.className || t.class;
        e && (t.class = "object" != typeof e ? e : Object.keys(e).filter((t)=>e[t]).join(" "));
    }
    if ("function" == typeof e) return e(null === t ? {} : t, s, Hf);
    const c = jf(e, null);
    return c.$attrs$ = t, s.length > 0 && (c.$children$ = s), c;
}, jf = (e, t)=>{
    const n = {
        $flags$: 0,
        $tag$: e,
        $text$: t,
        $elm$: null,
        $children$: null,
        $attrs$: null
    };
    return n;
}, Uf = {}, Hf = {
    forEach: (e, t)=>e.map(Ff).forEach(t),
    map: (e, t)=>e.map(Ff).map(t).map(zf)
}, Ff = (e)=>({
        vattrs: e.$attrs$,
        vchildren: e.$children$,
        vkey: e.$key$,
        vname: e.$name$,
        vtag: e.$tag$,
        vtext: e.$text$
    }), zf = (e)=>{
    if ("function" == typeof e.vtag) {
        const t = {
            ...e.vattrs
        };
        return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), Kf(e.vtag, t, ...e.vchildren || []);
    }
    const t = jf(e.vtag, e.vtext);
    return t.$attrs$ = e.vattrs, t.$children$ = e.vchildren, t.$key$ = e.vkey, t.$name$ = e.vname, t;
}, qf = (e)=>df(e).$hostElement$, Vf = (e, t, n)=>{
    const r = qf(e);
    return {
        emit: (e)=>Wf(r, t, {
                bubbles: !!(4 & n),
                composed: !!(2 & n),
                cancelable: !!(1 & n),
                detail: e
            })
    };
}, Wf = (e, t, n)=>{
    const r = bf.ce(t, n);
    return e.dispatchEvent(r), r;
}, Gf = new WeakMap, Zf = (e)=>{
    const t = e.$cmpMeta$, n = e.$hostElement$, r = t.$flags$, i = (t.$tagName$, ()=>{}), o = ((e, t, n)=>{
        var r;
        const i = Yf(t), o = gf.get(i);
        if (e = 11 === e.nodeType ? e : vf, o) if ("string" == typeof o) {
            e = e.head || e;
            let n, s = Gf.get(e);
            if (s || Gf.set(e, s = new Set), !s.has(i)) {
                {
                    n = vf.createElement("style"), n.innerHTML = o;
                    const i = null != (r = bf.$nonce$) ? r : Pf(vf);
                    if (null != i && n.setAttribute("nonce", i), !(1 & t.$flags$)) if ("HEAD" === e.nodeName) {
                        const t = e.querySelectorAll("link[rel=preconnect]"), r = t.length > 0 ? t[t.length - 1].nextSibling : e.querySelector("style");
                        e.insertBefore(n, r);
                    } else if ("host" in e) if (wf) {
                        const t = new CSSStyleSheet;
                        t.replaceSync(o), e.adoptedStyleSheets = [
                            t,
                            ...e.adoptedStyleSheets
                        ];
                    } else {
                        const t = e.querySelector("style");
                        t ? t.innerHTML = o + t.innerHTML : e.prepend(n);
                    }
                    else e.append(n);
                    1 & t.$flags$ && "HEAD" !== e.nodeName && e.insertBefore(n, null);
                }
                4 & t.$flags$ && (n.innerHTML += mf), s && s.add(i);
            }
        } else e.adoptedStyleSheets.includes(o) || (e.adoptedStyleSheets = [
            ...e.adoptedStyleSheets,
            o
        ]);
        return i;
    })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
    10 & r && 2 & r && (n["s-sc"] = o, n.classList.add(o + "-h")), i();
}, Yf = (e, t)=>"sc-" + e.$tagName$, Jf = (e, t, n, r, i, o)=>{
    if (n !== r) {
        let s = hf(e, t), a = t.toLowerCase();
        if ("class" === t) {
            const t = e.classList, i = Qf(n), o = Qf(r);
            t.remove(...i.filter((e)=>e && !o.includes(e))), t.add(...o.filter((e)=>e && !i.includes(e)));
        } else if ("style" === t) {
            for(const t in n)r && null != r[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");
            for(const t in r)n && r[t] === n[t] || (t.includes("-") ? e.style.setProperty(t, r[t]) : e.style[t] = r[t]);
        } else if (s || "o" !== t[0] || "n" !== t[1]) {
            const a = Rf(r);
            if ((s || a && null !== r) && !i) try {
                if (e.tagName.includes("-")) e[t] = r;
                else {
                    const i = null == r ? "" : r;
                    "list" === t ? s = !1 : null != n && e[t] == i || ("function" == typeof e.__lookupSetter__(t) ? e[t] = i : e.setAttribute(t, i));
                }
            } catch (e) {}
            null == r || !1 === r ? !1 === r && "" !== e.getAttribute(t) || e.removeAttribute(t) : (!s || 4 & o || i) && !a && (r = !0 === r ? "" : r, e.setAttribute(t, r));
        } else if (t = "-" === t[2] ? t.slice(3) : hf(yf, a) ? a.slice(2) : a[2] + t.slice(3), n || r) {
            const i = t.endsWith(ep);
            t = t.replace(tp, ""), n && bf.rel(e, t, n, i), r && bf.ael(e, t, r, i);
        }
    }
}, Xf = /\s/, Qf = (e)=>e ? e.split(Xf) : [], ep = "Capture", tp = new RegExp(ep + "$"), np = (e, t, n)=>{
    const r = 11 === t.$elm$.nodeType && t.$elm$.host ? t.$elm$.host : t.$elm$, i = e && e.$attrs$ || If, o = t.$attrs$ || If;
    for (const e of rp(Object.keys(i)))e in o || Jf(r, e, i[e], void 0, n, t.$flags$);
    for (const e of rp(Object.keys(o)))Jf(r, e, i[e], o[e], n, t.$flags$);
};
function rp(e) {
    return e.includes("ref") ? [
        ...e.filter((e)=>"ref" !== e),
        "ref"
    ] : e;
}
var ip = !1, op = !1, sp = (e, t, n, r)=>{
    const i = t.$children$[n];
    let o, s, a = 0;
    if (null !== i.$text$) o = i.$elm$ = vf.createTextNode(i.$text$);
    else {
        op || (op = "svg" === i.$tag$), o = i.$elm$ = vf.createElementNS(op ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", !ip && sf && 2 & i.$flags$ ? ("TURBOPACK unreachable", undefined) : i.$tag$), op && "foreignObject" === i.$tag$ && (op = !1), np(null, i, op);
        if (!!o.getRootNode().querySelector("body") && of && ((e)=>null != e)(Nf) && o["s-si"] !== Nf && o.classList.add(o["s-si"] = Nf), i.$children$) for(a = 0; a < i.$children$.length; ++a)s = sp(e, i, a), s && o.appendChild(s);
        "svg" === i.$tag$ ? op = !1 : "foreignObject" === o.tagName && (op = !0);
    }
    return o["s-hn"] = Df, o;
}, ap = (e, t, n, r, i, o)=>{
    let s, a = e;
    for(a.shadowRoot && a.tagName === Df && (a = a.shadowRoot); i <= o; ++i)r[i] && (s = sp(null, n, i), s && (r[i].$elm$ = s, up(a, s, t)));
}, cp = (e, t, n)=>{
    for(let r = t; r <= n; ++r){
        const t = e[r];
        if (t) {
            const e = t.$elm$;
            e && e.remove();
        }
    }
}, lp = (e, t, n = !1)=>e.$tag$ === t.$tag$, dp = (e, t, n = !1)=>{
    const r = t.$elm$ = e.$elm$, i = e.$children$, o = t.$children$, s = t.$tag$, a = t.$text$;
    null === a ? (np(e, t, op = "svg" === s || "foreignObject" !== s && op), null !== i && null !== o ? ((e, t, n, r, i = !1)=>{
        let o, s = 0, a = 0, c = t.length - 1, l = t[0], d = t[c], u = r.length - 1, h = r[0], f = r[u];
        for(; s <= c && a <= u;)null == l ? l = t[++s] : null == d ? d = t[--c] : null == h ? h = r[++a] : null == f ? f = r[--u] : lp(l, h, i) ? (dp(l, h, i), l = t[++s], h = r[++a]) : lp(d, f, i) ? (dp(d, f, i), d = t[--c], f = r[--u]) : lp(l, f, i) ? (dp(l, f, i), up(e, l.$elm$, d.$elm$.nextSibling), l = t[++s], f = r[--u]) : lp(d, h, i) ? (dp(d, h, i), up(e, d.$elm$, l.$elm$), d = t[--c], h = r[++a]) : (o = sp(t && t[a], n, a), h = r[++a], o && up(l.$elm$.parentNode, o, l.$elm$));
        s > c ? ap(e, null == r[u + 1] ? null : r[u + 1].$elm$, n, r, a, u) : a > u && cp(t, s, c);
    })(r, i, t, o, n) : null !== o ? (null !== e.$text$ && (r.textContent = ""), ap(r, null, t, o, 0, o.length - 1)) : !n && af && null !== i && cp(i, 0, i.length - 1), op && "svg" === s && (op = !1)) : e.$text$ !== a && (r.data = a);
}, up = (e, t, n)=>null == e ? void 0 : e.insertBefore(t, n), hp = (e, t, n = !1)=>{
    const r = e.$hostElement$, i = e.$cmpMeta$, o = e.$vnode$ || jf(null, null), s = (a = t) && a.$tag$ === Uf ? t : Kf(null, null, t);
    var a;
    if (Df = r.tagName, n && s.$attrs$) for (const e of Object.keys(s.$attrs$))r.hasAttribute(e) && ![
        "key",
        "ref",
        "style",
        "class"
    ].includes(e) && (s.$attrs$[e] = r[e]);
    s.$tag$ = null, s.$flags$ |= 4, e.$vnode$ = s, s.$elm$ = o.$elm$ = r.shadowRoot || r, Nf = r["s-sc"], ip = 0 != (1 & i.$flags$), dp(o, s, n);
}, fp = (e, t)=>{
    t && !e.$onRenderResolve$ && t["s-p"] && t["s-p"].push(new Promise((t)=>e.$onRenderResolve$ = t));
}, pp = (e, t)=>{
    if (e.$flags$ |= 16, 4 & e.$flags$) return void (e.$flags$ |= 512);
    fp(e, e.$ancestorComponent$);
    return Af(()=>gp(e, t));
}, gp = (e, t)=>{
    const n = e.$hostElement$, r = (e.$cmpMeta$.$tagName$, ()=>{}), i = e.$lazyInstance$;
    if (!i) throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
    return r(), mp(undefined, ()=>vp(e, i, t));
}, mp = (e, t)=>yp(e) ? e.then(t).catch((e)=>{
        console.error(e), t();
    }) : t(), yp = (e)=>e instanceof Promise || e && e.then && "function" == typeof e.then, vp = async (e, t, n)=>{
    var r;
    const i = e.$hostElement$, o = (e.$cmpMeta$.$tagName$, ()=>{}), s = i["s-rc"];
    n && Zf(e);
    const a = (e.$cmpMeta$.$tagName$, ()=>{});
    bp(e, t, i, n), s && (s.map((e)=>e()), i["s-rc"] = void 0), a(), o();
    {
        const t = null != (r = i["s-p"]) ? r : [], n = ()=>wp(e);
        0 === t.length ? n() : (Promise.all(t).then(n), e.$flags$ |= 4, t.length = 0);
    }
}, bp = (e, t, n, r)=>{
    try {
        t = t.render(), e.$flags$ &= -17, e.$flags$ |= 2, hp(e, t, r);
    } catch (t) {
        ff(t, e.$hostElement$);
    }
    return null;
}, wp = (e)=>{
    e.$cmpMeta$.$tagName$;
    const t = e.$hostElement$, n = ()=>{}, r = e.$lazyInstance$, i = e.$ancestorComponent$;
    64 & e.$flags$ ? n() : (e.$flags$ |= 64, Sp(t), Cp(r, "componentDidLoad"), n(), e.$onReadyResolve$(t), i || Ep()), e.$onRenderResolve$ && (e.$onRenderResolve$(), e.$onRenderResolve$ = void 0), 512 & e.$flags$ && Mf(()=>pp(e, !1)), e.$flags$ &= -517;
}, Ep = (e)=>{
    Sp(vf.documentElement), Mf(()=>Wf(yf, "appload", {
            detail: {
                namespace: "sdk-install-modal-web"
            }
        }));
}, Cp = (e, t, n)=>{
    if (e && e[t]) try {
        return e[t](n);
    } catch (e) {
        ff(e);
    }
}, Sp = (e)=>{
    var t;
    return e.classList.add(null != (t = rf) ? t : "hydrated");
}, _p = (e, t, n, r)=>{
    const i = df(e);
    if (!i) throw new Error(`Couldn't find host element for "${r.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
    const o = i.$hostElement$, s = i.$instanceValues$.get(t), a = i.$flags$, c = i.$lazyInstance$;
    var l, d;
    l = n, d = r.$members$[t][0], n = null == l || Rf(l) ? l : 4 & d ? "false" !== l && ("" === l || !!l) : 1 & d ? String(l) : l;
    const u = Number.isNaN(s) && Number.isNaN(n);
    if ((!(8 & a) || void 0 === s) && n !== s && !u && (i.$instanceValues$.set(t, n), c)) {
        if (r.$watchers$ && 128 & a) {
            const e = r.$watchers$[t];
            e && e.map((e)=>{
                try {
                    c[e](n, s, t);
                } catch (e) {
                    ff(e, o);
                }
            });
        }
        2 == (18 & a) && pp(i, !1);
    }
}, kp = (e, t, n)=>{
    var r, i;
    const o = e.prototype;
    if (t.$members$ || t.$watchers$ || e.watchers) {
        e.watchers && !t.$watchers$ && (t.$watchers$ = e.watchers);
        const s = Object.entries(null != (r = t.$members$) ? r : {});
        if (s.map(([e, [r]])=>{
            (31 & r || 2 & n && 32 & r) && Object.defineProperty(o, e, {
                get () {
                    return t = e, df(this).$instanceValues$.get(t);
                    "TURBOPACK unreachable";
                    var t;
                },
                set (n) {
                    _p(this, e, n, t);
                },
                configurable: !0,
                enumerable: !0
            });
        }), 1 & n) {
            const n = new Map;
            o.attributeChangedCallback = function(e, r, i) {
                bf.jmp(()=>{
                    var s;
                    const a = n.get(e);
                    if (this.hasOwnProperty(a)) i = this[a], delete this[a];
                    else {
                        if (o.hasOwnProperty(a) && "number" == typeof this[a] && this[a] == i) return;
                        if (null == a) {
                            const n = df(this), o = null == n ? void 0 : n.$flags$;
                            if (o && !(8 & o) && 128 & o && i !== r) {
                                const o = n.$lazyInstance$, a = null == (s = t.$watchers$) ? void 0 : s[e];
                                null == a || a.forEach((t)=>{
                                    null != o[t] && o[t].call(o, i, r, e);
                                });
                            }
                            return;
                        }
                    }
                    this[a] = (null !== i || "boolean" != typeof this[a]) && i;
                });
            }, e.observedAttributes = Array.from(new Set([
                ...Object.keys(null != (i = t.$watchers$) ? i : {}),
                ...s.filter(([e, t])=>15 & t[0]).map(([e, t])=>{
                    const r = t[1] || e;
                    return n.set(r, e), r;
                })
            ]));
        }
    }
    return e;
}, xp = async (e, t, n, r)=>{
    let i;
    if (0 == (32 & t.$flags$)) {
        t.$flags$ |= 32;
        if (n.$lazyBundleId$) {
            const e = ((e, t, n)=>{
                const r = e.$tagName$.replace(/-/g, "_"), i = e.$lazyBundleId$;
                if (!i) return;
                const o = pf.get(i);
                if (o) return o[r];
                {
                    const e = (e)=>(pf.set(i, e), e[r]);
                    if ("mm-install-modal_3" === i) return Promise.resolve().then(function() {
                        return gg;
                    }).then(e, ff);
                }
                return import(/* webpackIgnore: true */ /* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ `./${i}.entry.js`).then((e)=>(pf.set(i, e), e[r]), ff);
            })(n);
            if (e && "then" in e) {
                const t = ()=>{};
                i = await e, t();
            } else i = e;
            if (!i) throw new Error(`Constructor for "${n.$tagName$}#${t.$modeName$}" was not found`);
            i.isProxied || (n.$watchers$ = i.watchers, kp(i, n, 2), i.isProxied = !0);
            const r = (n.$tagName$, ()=>{});
            t.$flags$ |= 8;
            try {
                new i(t);
            } catch (e) {
                ff(e);
            }
            t.$flags$ &= -9, t.$flags$ |= 128, r(), Mp(t.$lazyInstance$);
        } else {
            i = e.constructor;
            const n = e.localName;
            customElements.whenDefined(n).then(()=>t.$flags$ |= 128);
        }
        if (i && i.style) {
            let e;
            "string" == typeof i.style && (e = i.style);
            const t = Yf(n);
            if (!gf.has(t)) {
                const r = (n.$tagName$, ()=>{});
                ((e, t, n)=>{
                    let r = gf.get(e);
                    wf && n ? (r = r || new CSSStyleSheet, "string" == typeof r ? r = t : r.replaceSync(t)) : r = t, gf.set(e, r);
                })(t, e, !!(1 & n.$flags$)), r();
            }
        }
    }
    const o = t.$ancestorComponent$, s = ()=>pp(t, !0);
    o && o["s-rc"] ? o["s-rc"].push(s) : s();
}, Mp = (e)=>{
    Cp(e, "connectedCallback");
}, Ap = (e)=>{
    Cp(e, "disconnectedCallback");
}, Ip = (e, t = {})=>{
    var n;
    const r = ()=>{}, i = [], o = t.exclude || [], s = yf.customElements, a = vf.head, c = a.querySelector("meta[charset]"), l = vf.createElement("style"), d = [];
    let u, h = !0;
    Object.assign(bf, t), bf.$resourcesUrl$ = new URL(t.resourcesUrl || "./", vf.baseURI).href;
    let f = !1;
    if (e.map((e)=>{
        e[1].map((t)=>{
            var n;
            const r = {
                $flags$: t[0],
                $tagName$: t[1],
                $members$: t[2],
                $listeners$: t[3]
            };
            4 & r.$flags$ && (f = !0), r.$members$ = t[2], r.$watchers$ = null != (n = t[4]) ? n : {};
            const a = r.$tagName$, c = class extends HTMLElement {
                constructor(e){
                    if (super(e), this.hasRegisteredEventListeners = !1, ((e, t)=>{
                        const n = {
                            $flags$: 0,
                            $hostElement$: e,
                            $cmpMeta$: t,
                            $instanceValues$: new Map
                        };
                        n.$onReadyPromise$ = new Promise((e)=>n.$onReadyResolve$ = e), e["s-p"] = [], e["s-rc"] = [], lf.set(e, n);
                    })(e = this, r), 1 & r.$flags$) if (e.shadowRoot) {
                        if ("open" !== e.shadowRoot.mode) throw new Error(`Unable to re-use existing shadow root for ${r.$tagName$}! Mode is set to ${e.shadowRoot.mode} but Stencil only supports open shadow roots.`);
                    } else e.attachShadow({
                        mode: "open"
                    });
                }
                connectedCallback() {
                    df(this), this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = !0), u && (clearTimeout(u), u = null), h ? d.push(this) : bf.jmp(()=>((e)=>{
                            if (0 == (1 & bf.$flags$)) {
                                const t = df(e), n = t.$cmpMeta$, r = (n.$tagName$, ()=>{});
                                if (1 & t.$flags$) (null == t ? void 0 : t.$lazyInstance$) ? Mp(t.$lazyInstance$) : (null == t ? void 0 : t.$onReadyPromise$) && t.$onReadyPromise$.then(()=>Mp(t.$lazyInstance$));
                                else {
                                    t.$flags$ |= 1;
                                    {
                                        let n = e;
                                        for(; n = n.parentNode || n.host;)if (n["s-p"]) {
                                            fp(t, t.$ancestorComponent$ = n);
                                            break;
                                        }
                                    }
                                    n.$members$ && Object.entries(n.$members$).map(([t, [n]])=>{
                                        if (31 & n && e.hasOwnProperty(t)) {
                                            const n = e[t];
                                            delete e[t], e[t] = n;
                                        }
                                    }), xp(e, t, n);
                                }
                                r();
                            }
                        })(this));
                }
                disconnectedCallback() {
                    bf.jmp(()=>(async (e)=>{
                            if (0 == (1 & bf.$flags$)) {
                                const t = df(e);
                                (null == t ? void 0 : t.$lazyInstance$) ? Ap(t.$lazyInstance$) : (null == t ? void 0 : t.$onReadyPromise$) && t.$onReadyPromise$.then(()=>Ap(t.$lazyInstance$));
                            }
                        })(this));
                }
                componentOnReady() {
                    return df(this).$onReadyPromise$;
                }
            };
            r.$lazyBundleId$ = e[0], o.includes(a) || s.get(a) || (i.push(a), s.define(a, kp(c, r, 1)));
        });
    }), i.length > 0 && (f && (l.textContent += mf), l.textContent += i.sort() + "{visibility:hidden}.hydrated{visibility:inherit}", l.innerHTML.length)) {
        l.setAttribute("data-styles", "");
        const e = null != (n = bf.$nonce$) ? n : Pf(vf);
        null != e && l.setAttribute("nonce", e), a.insertBefore(l, c ? c.nextSibling : a.firstChild);
    }
    h = !1, d.length ? d.map((e)=>e.connectedCallback()) : bf.jmp(()=>u = setTimeout(Ep, 30)), r();
};
!function() {
    if ("undefined" != typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
        var e = HTMLElement;
        window.HTMLElement = function() {
            return Reflect.construct(e, [], this.constructor);
        }, HTMLElement.prototype = e.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e);
    }
}();
var Rp = Object.freeze({
    __proto__: null,
    defineCustomElements: async (e, t)=>{
        if ("undefined" != typeof window) return await void 0, Ip([
            [
                "mm-install-modal_3",
                [
                    [
                        1,
                        "mm-install-modal",
                        {
                            link: [
                                1
                            ],
                            sdkVersion: [
                                1,
                                "sdk-version"
                            ],
                            preferDesktop: [
                                4,
                                "prefer-desktop"
                            ],
                            tab: [
                                32
                            ],
                            isDefaultTab: [
                                32
                            ],
                            translationsLoaded: [
                                32
                            ]
                        },
                        null,
                        {
                            preferDesktop: [
                                "updatePreferDesktop"
                            ]
                        }
                    ],
                    [
                        1,
                        "mm-pending-modal",
                        {
                            displayOTP: [
                                4,
                                "display-o-t-p"
                            ],
                            sdkVersion: [
                                1,
                                "sdk-version"
                            ],
                            otpCode: [
                                1,
                                "otp-code"
                            ],
                            translationsLoaded: [
                                32
                            ]
                        }
                    ],
                    [
                        1,
                        "mm-select-modal",
                        {
                            link: [
                                1
                            ],
                            sdkVersion: [
                                1,
                                "sdk-version"
                            ],
                            preferDesktop: [
                                4,
                                "prefer-desktop"
                            ],
                            tab: [
                                32
                            ],
                            isDefaultTab: [
                                32
                            ],
                            translationsLoaded: [
                                32
                            ]
                        },
                        null,
                        {
                            preferDesktop: [
                                "updatePreferDesktop"
                            ]
                        }
                    ]
                ]
            ]
        ], t);
    },
    setNonce: (e)=>bf.$nonce$ = e
});
const Pp = {
    fontFamily: "Roboto, sans-serif"
}, Lp = ({ className: e }, t)=>Kf("div", {
        style: Pp,
        class: e
    }, t), Op = ({ Icon: e, text: t })=>Kf("div", {
        class: "flexContainer",
        style: {
            padding: "6",
            flexDirection: "row"
        }
    }, Kf("div", {
        class: "flexItem1"
    }, Kf(e, null)), Kf("div", {
        class: "flexItem11"
    }, Kf("span", {
        style: {
            lineHeight: "2",
            color: "black"
        }
    }, t))), Tp = ()=>Kf("svg", {
        width: "20",
        height: "18",
        viewBox: "0 0 20 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Kf("path", {
        d: "M20.0002 7.9702V10.0302C20.0002 10.5802 19.5602 11.0302 19.0002 11.0502H17.0402C15.9602 11.0502 14.9702 10.2602 14.8802 9.1802C14.8202 8.5502 15.0602 7.9602 15.4802 7.5502C15.8502 7.1702 16.3602 6.9502 16.9202 6.9502H19.0002C19.5602 6.9702 20.0002 7.4202 20.0002 7.9702Z",
        fill: "#037DD6"
    }), Kf("path", {
        d: "M18.47 12.55H17.04C15.14 12.55 13.54 11.12 13.38 9.3C13.29 8.26 13.67 7.22 14.43 6.48C15.07 5.82 15.96 5.45 16.92 5.45H18.47C18.76 5.45 19 5.21 18.97 4.92C18.75 2.49 17.14 0.83 14.75 0.55C14.51 0.51 14.26 0.5 14 0.5H5C4.72 0.5 4.45 0.52 4.19 0.56C1.64 0.88 0 2.78 0 5.5V12.5C0 15.26 2.24 17.5 5 17.5H14C16.8 17.5 18.73 15.75 18.97 13.08C19 12.79 18.76 12.55 18.47 12.55ZM11 6.75H5C4.59 6.75 4.25 6.41 4.25 6C4.25 5.59 4.59 5.25 5 5.25H11C11.41 5.25 11.75 5.59 11.75 6C11.75 6.41 11.41 6.75 11 6.75Z",
        fill: "#037DD6"
    })), Np = ()=>Kf("svg", {
        width: "20",
        height: "18",
        viewBox: "0 0 20 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Kf("path", {
        d: "M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z",
        fill: "#037DD6"
    })), Dp = ()=>Kf("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Kf("path", {
        d: "M16.28 7.53V6.28C16.28 3.58 15.63 0 10 0C4.37 0 3.72 3.58 3.72 6.28V7.53C0.92 7.88 0 9.3 0 12.79V14.65C0 18.75 1.25 20 5.35 20H14.65C18.75 20 20 18.75 20 14.65V12.79C20 9.3 19.08 7.88 16.28 7.53ZM10 16.74C8.33 16.74 6.98 15.38 6.98 13.72C6.98 12.05 8.34 10.7 10 10.7C11.66 10.7 13.02 12.06 13.02 13.72C13.02 15.39 11.67 16.74 10 16.74ZM5.35 7.44C5.27 7.44 5.2 7.44 5.12 7.44V6.28C5.12 3.35 5.95 1.4 10 1.4C14.05 1.4 14.88 3.35 14.88 6.28V7.45C14.8 7.45 14.73 7.45 14.65 7.45H5.35V7.44Z",
        fill: "#037DD6"
    })), $p = ()=>Kf("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Kf("path", {
        d: "M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099",
        stroke: "white",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M12 2V14.88",
        stroke: "white",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M15.3504 12.6499L12.0004 15.9999L8.65039 12.6499",
        stroke: "white",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }));
function Bp({ version: e }) {
    return Kf("div", {
        style: {
            textAlign: "center",
            color: "#BBC0C5",
            fontSize: "12"
        }
    }, "SDK Version ", e ? `v${e}` : "unknown");
}
const Kp = ()=>Kf("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Kf("rect", {
        width: "16",
        height: "16",
        fill: "white"
    }), Kf("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M2.40554 2.40554C2.94627 1.86482 3.82296 1.86482 4.36369 2.40554L8 6.04186L11.6363 2.40554C12.177 1.86482 13.0537 1.86482 13.5945 2.40554C14.1352 2.94627 14.1352 3.82296 13.5945 4.36369L9.95814 8L13.5945 11.6363C14.1352 12.177 14.1352 13.0537 13.5945 13.5945C13.0537 14.1352 12.177 14.1352 11.6363 13.5945L8 9.95814L4.36369 13.5945C3.82296 14.1352 2.94627 14.1352 2.40554 13.5945C1.86482 13.0537 1.86482 12.177 2.40554 11.6363L6.04186 8L2.40554 4.36369C1.86482 3.82296 1.86482 2.94627 2.40554 2.40554Z",
        fill: "#BBC0C5"
    })), jp = ()=>Kf("svg", {
        width: "273",
        height: "51",
        viewBox: "0 0 273 51",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Kf("path", {
        d: "M240.882 25.9263C239.472 24.997 237.916 24.3361 236.443 23.5101C235.489 22.9731 234.473 22.4982 233.643 21.8167C232.233 20.6602 232.524 18.3885 233.996 17.3973C236.112 15.993 239.617 16.7777 239.99 19.6483C239.99 19.7102 240.052 19.7515 240.114 19.7515H243.308C243.391 19.7515 243.454 19.6896 243.433 19.607C243.267 17.6244 242.5 15.9723 241.089 14.9191C239.741 13.9072 238.206 13.3702 236.568 13.3702C228.127 13.3702 227.359 22.271 231.901 25.0796C232.42 25.41 236.879 27.6404 238.455 28.611C240.032 29.5816 240.529 31.3576 239.845 32.7619C239.223 34.0423 237.605 34.9303 235.987 34.8271C234.224 34.7238 232.855 33.7738 232.378 32.2869C232.295 32.0185 232.254 31.5022 232.254 31.275C232.254 31.2131 232.192 31.1511 232.129 31.1511H228.666C228.604 31.1511 228.541 31.2131 228.541 31.275C228.541 33.7738 229.164 35.1575 230.864 36.4172C232.461 37.615 234.203 38.1106 236.008 38.1106C240.737 38.1106 243.184 35.4466 243.682 32.6793C244.117 29.974 243.308 27.5371 240.882 25.9263Z",
        fill: "#24292E"
    }), Kf("path", {
        d: "M90.4943 13.8246H88.9595H87.2795C87.2173 13.8246 87.1758 13.8659 87.1551 13.9072L84.3137 23.2416C84.2722 23.3655 84.1063 23.3655 84.0648 23.2416L81.2234 13.9072C81.2026 13.8452 81.1612 13.8246 81.0989 13.8246H79.419H77.8842H75.8102C75.748 13.8246 75.6857 13.8865 75.6857 13.9485V37.7802C75.6857 37.8422 75.748 37.9041 75.8102 37.9041H79.2738C79.336 37.9041 79.3982 37.8422 79.3982 37.7802V19.6689C79.3982 19.5244 79.6056 19.5037 79.6471 19.6276L82.5093 29.024L82.7167 29.6849C82.7374 29.7468 82.7789 29.7675 82.8411 29.7675H85.4959C85.5581 29.7675 85.5996 29.7262 85.6203 29.6849L85.8277 29.024L88.6899 19.6276C88.7313 19.4831 88.9387 19.5244 88.9387 19.6689V37.7802C88.9387 37.8422 89.001 37.9041 89.0632 37.9041H92.5268C92.589 37.9041 92.6513 37.8422 92.6513 37.7802V13.9485C92.6513 13.8865 92.589 13.8246 92.5268 13.8246H90.4943Z",
        fill: "#24292E"
    }), Kf("path", {
        d: "M187.849 13.8246C187.787 13.8246 187.745 13.8659 187.725 13.9072L184.883 23.2416C184.842 23.3655 184.676 23.3655 184.634 23.2416L181.793 13.9072C181.772 13.8452 181.731 13.8246 181.668 13.8246H176.4C176.338 13.8246 176.276 13.8865 176.276 13.9485V37.7802C176.276 37.8422 176.338 37.9041 176.4 37.9041H179.864C179.926 37.9041 179.988 37.8422 179.988 37.7802V19.6689C179.988 19.5244 180.196 19.5037 180.237 19.6276L183.099 29.024L183.307 29.6849C183.328 29.7468 183.369 29.7675 183.431 29.7675H186.086C186.148 29.7675 186.19 29.7262 186.211 29.6849L186.418 29.024L189.28 19.6276C189.322 19.4831 189.529 19.5244 189.529 19.6689V37.7802C189.529 37.8422 189.591 37.9041 189.653 37.9041H193.117C193.179 37.9041 193.241 37.8422 193.241 37.7802V13.9485C193.241 13.8865 193.179 13.8246 193.117 13.8246H187.849Z",
        fill: "#24292E"
    }), Kf("path", {
        d: "M143.174 13.8246H136.724H133.261H126.81C126.748 13.8246 126.686 13.8865 126.686 13.9485V16.9223C126.686 16.9843 126.748 17.0462 126.81 17.0462H133.136V37.7802C133.136 37.8422 133.198 37.9041 133.261 37.9041H136.724C136.786 37.9041 136.849 37.8422 136.849 37.7802V17.0462H143.174C143.237 17.0462 143.299 16.9843 143.299 16.9223V13.9485C143.299 13.8865 143.257 13.8246 143.174 13.8246Z",
        fill: "#24292E"
    }), Kf("path", {
        d: "M163.604 37.9041H166.756C166.839 37.9041 166.901 37.8215 166.881 37.7389L160.368 13.8245C160.347 13.7626 160.306 13.7419 160.244 13.7419H159.041H156.925H155.722C155.66 13.7419 155.619 13.7832 155.598 13.8245L149.085 37.7389C149.065 37.8215 149.127 37.9041 149.21 37.9041H152.362C152.425 37.9041 152.466 37.8628 152.487 37.8215L154.374 30.862C154.395 30.8 154.436 30.7794 154.499 30.7794H161.467C161.53 30.7794 161.571 30.8207 161.592 30.862L163.479 37.8215C163.5 37.8628 163.562 37.9041 163.604 37.9041ZM155.328 27.3719L157.859 18.0581C157.9 17.9342 158.066 17.9342 158.107 18.0581L160.638 27.3719C160.659 27.4545 160.596 27.5371 160.513 27.5371H155.453C155.37 27.5371 155.308 27.4545 155.328 27.3719Z",
        fill: "#24292E"
    }), Kf("path", {
        d: "M217.362 37.9041H220.515C220.598 37.9041 220.66 37.8215 220.639 37.7389L214.127 13.8245C214.106 13.7626 214.065 13.7419 214.002 13.7419H212.8H210.684H209.481C209.419 13.7419 209.377 13.7832 209.357 13.8245L202.844 37.7389C202.823 37.8215 202.886 37.9041 202.969 37.9041H206.121C206.183 37.9041 206.225 37.8628 206.246 37.8215L208.133 30.862C208.154 30.8 208.195 30.7794 208.257 30.7794H215.226C215.288 30.7794 215.33 30.8207 215.351 30.862L217.238 37.8215C217.259 37.8628 217.3 37.9041 217.362 37.9041ZM209.087 27.3719L211.617 18.0581C211.659 17.9342 211.825 17.9342 211.866 18.0581L214.397 27.3719C214.417 27.4545 214.355 27.5371 214.272 27.5371H209.211C209.129 27.5371 209.066 27.4545 209.087 27.3719Z",
        fill: "#24292E"
    }), Kf("path", {
        d: "M106.713 34.3727V26.9795C106.713 26.9176 106.775 26.8556 106.837 26.8556H116.067C116.129 26.8556 116.191 26.7936 116.191 26.7317V23.7579C116.191 23.6959 116.129 23.634 116.067 23.634H106.837C106.775 23.634 106.713 23.572 106.713 23.5101V17.1907C106.713 17.1288 106.775 17.0668 106.837 17.0668H117.332C117.394 17.0668 117.457 17.0049 117.457 16.9429V13.9691C117.457 13.9072 117.394 13.8452 117.332 13.8452H106.713H103.125C103.063 13.8452 103.001 13.9072 103.001 13.9691V17.0668V23.6546V26.8763V34.5173V37.7802C103.001 37.8422 103.063 37.9041 103.125 37.9041H106.713H117.768C117.83 37.9041 117.892 37.8422 117.892 37.7802V34.6412C117.892 34.5792 117.83 34.5173 117.768 34.5173H106.817C106.755 34.4966 106.713 34.4553 106.713 34.3727Z",
        fill: "#24292E"
    }), Kf("path", {
        d: "M272.532 37.6976L260.544 25.3687C260.502 25.3274 260.502 25.2448 260.544 25.2035L271.329 14.0517C271.412 13.9691 271.349 13.8452 271.246 13.8452H266.828C266.787 13.8452 266.766 13.8659 266.745 13.8865L257.599 23.3449C257.516 23.4275 257.391 23.3655 257.391 23.2623V13.9691C257.391 13.9072 257.329 13.8452 257.267 13.8452H253.803C253.741 13.8452 253.679 13.9072 253.679 13.9691V37.8009C253.679 37.8628 253.741 37.9248 253.803 37.9248H257.267C257.329 37.9248 257.391 37.8628 257.391 37.8009V27.3099C257.391 27.2067 257.536 27.1447 257.599 27.2273L267.969 37.8835C267.989 37.9041 268.031 37.9248 268.052 37.9248H272.469C272.552 37.9041 272.615 37.7596 272.532 37.6976Z",
        fill: "#24292E"
    }), Kf("path", {
        d: "M52.021 1L31.0526 16.4886L34.9517 7.36063L52.021 1Z",
        fill: "#E17726",
        stroke: "#E17726",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M3.65491 1L24.4366 16.6331L20.7241 7.36063L3.65491 1Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M44.4716 36.9127L38.8925 45.4211L50.8389 48.7047L54.261 37.0986L44.4716 36.9127Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M1.43555 37.0986L4.83695 48.7047L16.7626 45.4211L11.2042 36.9127L1.43555 37.0986Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M16.1197 22.5395L12.8013 27.5371L24.6232 28.074L24.2292 15.3734L16.1197 22.5395Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M39.5561 22.5394L31.3222 15.2288L31.0526 28.0739L42.8746 27.537L39.5561 22.5394Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M16.7626 45.4212L23.918 41.9724L17.7582 37.1813L16.7626 45.4212Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M31.7578 41.9724L38.8925 45.4212L37.9177 37.1813L31.7578 41.9724Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M38.8923 45.4212L31.7577 41.9724L32.3384 46.5983L32.2762 48.5602L38.8923 45.4212Z",
        fill: "#D5BFB2",
        stroke: "#D5BFB2",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M16.7625 45.4212L23.3994 48.5602L23.3579 46.5983L23.9179 41.9724L16.7625 45.4212Z",
        fill: "#D5BFB2",
        stroke: "#D5BFB2",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M23.5239 34.1249L17.5922 32.3902L21.7818 30.4696L23.5239 34.1249Z",
        fill: "#233447",
        stroke: "#233447",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M32.1517 34.1249L33.8939 30.4696L38.1042 32.3902L32.1517 34.1249Z",
        fill: "#233447",
        stroke: "#233447",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M16.7626 45.4212L17.7996 36.9128L11.2042 37.0987L16.7626 45.4212Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M37.8761 36.9128L38.8924 45.4212L44.4715 37.0987L37.8761 36.9128Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M42.8745 27.5371L31.0526 28.074L32.1518 34.1249L33.894 30.4696L38.1042 32.3902L42.8745 27.5371Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M17.5922 32.3902L21.7817 30.4696L23.5239 34.1249L24.6232 28.074L12.8012 27.5371L17.5922 32.3902Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M12.8013 27.5371L17.7582 37.1813L17.5923 32.3902L12.8013 27.5371Z",
        fill: "#E27525",
        stroke: "#E27525",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M38.1044 32.3902L37.9177 37.1813L42.8746 27.5371L38.1044 32.3902Z",
        fill: "#E27525",
        stroke: "#E27525",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M24.6232 28.0741L23.524 34.125L24.9136 41.2703L25.2247 31.8533L24.6232 28.0741Z",
        fill: "#E27525",
        stroke: "#E27525",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M31.0526 28.0741L30.4719 31.8327L30.7623 41.2703L32.1519 34.125L31.0526 28.0741Z",
        fill: "#E27525",
        stroke: "#E27525",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M32.1519 34.1249L30.7623 41.2702L31.7578 41.9724L37.9177 37.1813L38.1043 32.3901L32.1519 34.1249Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M17.5922 32.3901L17.7581 37.1813L23.918 41.9724L24.9135 41.2702L23.5239 34.1249L17.5922 32.3901Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M32.2763 48.5602L32.3385 46.5983L31.7993 46.1439H23.8765L23.358 46.5983L23.3995 48.5602L16.7626 45.4211L19.0855 47.3211L23.7935 50.5633H31.8615L36.5903 47.3211L38.8924 45.4211L32.2763 48.5602Z",
        fill: "#C0AC9D",
        stroke: "#C0AC9D",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M31.7578 41.9724L30.7622 41.2703H24.9135L23.918 41.9724L23.358 46.5983L23.8765 46.144H31.7993L32.3385 46.5983L31.7578 41.9724Z",
        fill: "#24292E",
        stroke: "#24292E",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M52.9128 17.5005L54.6757 8.95079L52.021 1L31.7578 15.9723L39.5561 22.5394L50.5692 25.7404L52.9958 22.9111L51.938 22.147L53.618 20.6188L52.3321 19.6276L54.0121 18.3472L52.9128 17.5005Z",
        fill: "#763E1A",
        stroke: "#763E1A",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M1 8.95079L2.78366 17.5005L1.64295 18.3472L3.34365 19.6276L2.05775 20.6188L3.73771 22.147L2.67996 22.9111L5.10657 25.7404L16.1196 22.5394L23.918 15.9723L3.65475 1L1 8.95079Z",
        fill: "#763E1A",
        stroke: "#763E1A",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M50.5692 25.7404L39.5561 22.5394L42.8746 27.5371L37.9177 37.1813L44.4716 37.0987H54.261L50.5692 25.7404Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M16.1196 22.5394L5.10651 25.7404L1.43549 37.0987H11.2041L17.7581 37.1813L12.8011 27.5371L16.1196 22.5394Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M31.0526 28.0741L31.7578 15.9724L34.9518 7.36072H20.7239L23.9179 15.9724L24.6231 28.0741L24.8927 31.8739L24.9135 41.2703H30.7622L30.783 31.8739L31.0526 28.0741Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }));
function Up(e, t) {
    return e.toString(2).padStart(t, "0");
}
function Hp(e, t) {
    const n = e % t;
    return n >= 0 ? n : t + n;
}
function Fp(e, t) {
    return new Array(e).fill(t);
}
function zp(...e) {
    let t = 0;
    for (const n of e)t = Math.max(t, n.length);
    const n = [];
    for(let r = 0; r < t; r++)for (const t of e)r >= t.length || n.push(t[r]);
    return new Uint8Array(n);
}
function qp(e, t, n) {
    if (n < 0 || n + t.length > e.length) return !1;
    for(let r = 0; r < t.length; r++)if (t[r] !== e[n + r]) return !1;
    return !0;
}
function Vp(e) {
    return {
        has: (t)=>e.includes(t),
        decode: (t)=>{
            if (!Array.isArray(t) || t.length && "string" != typeof t[0]) throw new Error("alphabet.decode input should be array of strings");
            return t.map((t)=>{
                if ("string" != typeof t) throw new Error(`alphabet.decode: not string element=${t}`);
                const n = e.indexOf(t);
                if (-1 === n) throw new Error(`Unknown letter: "${t}". Allowed: ${e}`);
                return n;
            });
        },
        encode: (t)=>{
            if (!Array.isArray(t) || t.length && "number" != typeof t[0]) throw new Error("alphabet.encode input should be an array of numbers");
            return t.map((t)=>{
                if (function(e) {
                    if (!Number.isSafeInteger(e)) throw new Error(`Wrong integer: ${e}`);
                }(t), t < 0 || t >= e.length) throw new Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
                return e[t];
            });
        }
    };
}
class Wp {
    static size(e, t) {
        if ("number" == typeof e && (e = {
            height: e,
            width: e
        }), !Number.isSafeInteger(e.height) && e.height !== 1 / 0) throw new Error(`Bitmap: wrong height=${e.height} (${typeof e.height})`);
        if (!Number.isSafeInteger(e.width) && e.width !== 1 / 0) throw new Error(`Bitmap: wrong width=${e.width} (${typeof e.width})`);
        return void 0 !== t && (e = {
            width: Math.min(e.width, t.width),
            height: Math.min(e.height, t.height)
        }), e;
    }
    static fromString(e) {
        const t = (e = e.replace(/^\n+/g, "").replace(/\n+$/g, "")).split("\n"), n = t.length, r = new Array(n);
        let i;
        for (const e of t){
            const t = e.split("").map((e)=>{
                if ("X" === e) return !0;
                if (" " === e) return !1;
                if ("?" !== e) throw new Error(`Bitmap.fromString: unknown symbol=${e}`);
            });
            if (i && t.length !== i) throw new Error(`Bitmap.fromString different row sizes: width=${i} cur=${t.length}`);
            i = t.length, r.push(t);
        }
        return i || (i = 0), new Wp({
            height: n,
            width: i
        }, r);
    }
    constructor(e, t){
        const { height: n, width: r } = Wp.size(e);
        this.data = t || Array.from({
            length: n
        }, ()=>Fp(r, void 0)), this.height = n, this.width = r;
    }
    point(e) {
        return this.data[e.y][e.x];
    }
    isInside(e) {
        return 0 <= e.x && e.x < this.width && 0 <= e.y && e.y < this.height;
    }
    size(e) {
        if (!e) return {
            height: this.height,
            width: this.width
        };
        const { x: t, y: n } = this.xy(e);
        return {
            height: this.height - n,
            width: this.width - t
        };
    }
    xy(e) {
        if ("number" == typeof e && (e = {
            x: e,
            y: e
        }), !Number.isSafeInteger(e.x)) throw new Error(`Bitmap: wrong x=${e.x}`);
        if (!Number.isSafeInteger(e.y)) throw new Error(`Bitmap: wrong y=${e.y}`);
        return e.x = Hp(e.x, this.width), e.y = Hp(e.y, this.height), e;
    }
    rect(e, t, n) {
        const { x: r, y: i } = this.xy(e), { height: o, width: s } = Wp.size(t, this.size({
            x: r,
            y: i
        }));
        for(let e = 0; e < o; e++)for(let t = 0; t < s; t++)this.data[i + e][r + t] = "function" == typeof n ? n({
            x: t,
            y: e
        }, this.data[i + e][r + t]) : n;
        return this;
    }
    rectRead(e, t, n) {
        return this.rect(e, t, (e, t)=>(n(e, t), t));
    }
    hLine(e, t, n) {
        return this.rect(e, {
            width: t,
            height: 1
        }, n);
    }
    vLine(e, t, n) {
        return this.rect(e, {
            width: 1,
            height: t
        }, n);
    }
    border(e = 2, t) {
        const n = this.height + 2 * e, r = this.width + 2 * e, i = Fp(e, t), o = Array.from({
            length: e
        }, ()=>Fp(r, t));
        return new Wp({
            height: n,
            width: r
        }, [
            ...o,
            ...this.data.map((e)=>[
                    ...i,
                    ...e,
                    ...i
                ]),
            ...o
        ]);
    }
    embed(e, t) {
        return this.rect(e, t.size(), ({ x: e, y: n })=>t.data[n][e]);
    }
    rectSlice(e, t = this.size()) {
        const n = new Wp(Wp.size(t, this.size(this.xy(e))));
        return this.rect(e, t, ({ x: e, y: t }, r)=>n.data[t][e] = r), n;
    }
    inverse() {
        const { height: e, width: t } = this;
        return new Wp({
            height: t,
            width: e
        }).rect({
            x: 0,
            y: 0
        }, 1 / 0, ({ x: e, y: t })=>this.data[e][t]);
    }
    scale(e) {
        if (!Number.isSafeInteger(e) || e > 1024) throw new Error(`Wrong scale factor: ${e}`);
        const { height: t, width: n } = this;
        return new Wp({
            height: e * t,
            width: e * n
        }).rect({
            x: 0,
            y: 0
        }, 1 / 0, ({ x: t, y: n })=>this.data[Math.floor(n / e)][Math.floor(t / e)]);
    }
    clone() {
        return new Wp(this.size()).rect({
            x: 0,
            y: 0
        }, this.size(), ({ x: e, y: t })=>this.data[t][e]);
    }
    assertDrawn() {
        this.rectRead(0, 1 / 0, (e, t)=>{
            if ("boolean" != typeof t) throw new Error("Invalid color type=" + typeof t);
        });
    }
    toString() {
        return this.data.map((e)=>e.map((e)=>void 0 === e ? "?" : e ? "X" : " ").join("")).join("\n");
    }
    toASCII() {
        const { height: e, width: t, data: n } = this;
        let r = "";
        for(let i = 0; i < e; i += 2){
            for(let o = 0; o < t; o++){
                const t = n[i][o], s = i + 1 >= e || n[i + 1][o];
                t || s ? !t && s ? r += "▀" : t && !s ? r += "▄" : t && s && (r += " ") : r += "█";
            }
            r += "\n";
        }
        return r;
    }
    toTerm() {
        const e = "[0m", t = `[1;47m  ${e}`, n = `[40m  ${e}`;
        return this.data.map((e)=>e.map((e)=>e ? n : t).join("")).join("\n");
    }
    toSVG() {
        let e = `<svg xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
        return this.rectRead(0, 1 / 0, ({ x: t, y: n }, r)=>{
            r && (e += `<rect x="${t}" y="${n}" width="1" height="1" />`);
        }), e += "</svg>", e;
    }
    toGIF() {
        const e = (e)=>[
                255 & e,
                e >>> 8 & 255
            ], t = [
            ...e(this.width),
            ...e(this.height)
        ], n = [];
        this.rectRead(0, 1 / 0, (e, t)=>n.push(+(!0 === t)));
        const r = 126, i = [
            71,
            73,
            70,
            56,
            55,
            97,
            ...t,
            246,
            0,
            0,
            255,
            255,
            255,
            ...Fp(381, 0),
            44,
            0,
            0,
            0,
            0,
            ...t,
            0,
            7
        ], o = Math.floor(n.length / r);
        for(let e = 0; e < o; e++)i.push(127, 128, ...n.slice(r * e, r * (e + 1)).map((e)=>+e));
        return i.push(n.length % r + 1, 128, ...n.slice(o * r).map((e)=>+e)), i.push(1, 129, 0, 59), new Uint8Array(i);
    }
    toImage(e = !1) {
        const { height: t, width: n } = this.size(), r = new Uint8Array(t * n * (e ? 3 : 4));
        let i = 0;
        for(let o = 0; o < t; o++)for(let t = 0; t < n; t++){
            const n = this.data[o][t] ? 0 : 255;
            r[i++] = n, r[i++] = n, r[i++] = n, e || (r[i++] = 255);
        }
        return {
            height: t,
            width: n,
            data: r
        };
    }
}
const Gp = [
    "low",
    "medium",
    "quartile",
    "high"
], Zp = [
    "numeric",
    "alphanumeric",
    "byte",
    "kanji",
    "eci"
], Yp = [
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
], Jp = {
    low: [
        7,
        10,
        15,
        20,
        26,
        18,
        20,
        24,
        30,
        18,
        20,
        24,
        26,
        30,
        22,
        24,
        28,
        30,
        28,
        28,
        28,
        28,
        30,
        30,
        26,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ],
    medium: [
        10,
        16,
        26,
        18,
        24,
        16,
        18,
        22,
        22,
        26,
        30,
        22,
        22,
        24,
        24,
        28,
        28,
        26,
        26,
        26,
        26,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28,
        28
    ],
    quartile: [
        13,
        22,
        18,
        26,
        18,
        24,
        18,
        22,
        20,
        24,
        28,
        26,
        24,
        20,
        30,
        24,
        28,
        28,
        26,
        30,
        28,
        30,
        30,
        30,
        30,
        28,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ],
    high: [
        17,
        28,
        22,
        16,
        22,
        28,
        26,
        26,
        24,
        28,
        24,
        28,
        22,
        24,
        24,
        30,
        28,
        28,
        26,
        28,
        30,
        24,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ]
}, Xp = {
    low: [
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        4,
        4,
        4,
        4,
        4,
        6,
        6,
        6,
        6,
        7,
        8,
        8,
        9,
        9,
        10,
        12,
        12,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        19,
        20,
        21,
        22,
        24,
        25
    ],
    medium: [
        1,
        1,
        1,
        2,
        2,
        4,
        4,
        4,
        5,
        5,
        5,
        8,
        9,
        9,
        10,
        10,
        11,
        13,
        14,
        16,
        17,
        17,
        18,
        20,
        21,
        23,
        25,
        26,
        28,
        29,
        31,
        33,
        35,
        37,
        38,
        40,
        43,
        45,
        47,
        49
    ],
    quartile: [
        1,
        1,
        2,
        2,
        4,
        4,
        6,
        6,
        8,
        8,
        8,
        10,
        12,
        16,
        12,
        17,
        16,
        18,
        21,
        20,
        23,
        23,
        25,
        27,
        29,
        34,
        34,
        35,
        38,
        40,
        43,
        45,
        48,
        51,
        53,
        56,
        59,
        62,
        65,
        68
    ],
    high: [
        1,
        1,
        2,
        4,
        4,
        4,
        5,
        6,
        8,
        8,
        11,
        11,
        16,
        16,
        18,
        16,
        19,
        21,
        25,
        25,
        25,
        34,
        30,
        32,
        35,
        37,
        40,
        42,
        45,
        48,
        51,
        54,
        57,
        60,
        63,
        66,
        70,
        74,
        77,
        81
    ]
}, Qp = {
    size: {
        encode: (e)=>21 + 4 * (e - 1),
        decode: (e)=>(e - 17) / 4
    },
    sizeType: (e)=>Math.floor((e + 7) / 17),
    alignmentPatterns (e) {
        if (1 === e) return [];
        const t = Qp.size.encode(e) - 6 - 1, n = t - 6, r = Math.ceil(n / 28);
        let i = Math.floor(n / r);
        i % 2 ? i += 1 : n % r * 2 >= r && (i += 2);
        const o = [
            6
        ];
        for(let e = 1; e < r; e++)o.push(t - (r - e) * i);
        return o.push(t), o;
    },
    ECCode: {
        low: 1,
        medium: 0,
        quartile: 3,
        high: 2
    },
    formatMask: 21522,
    formatBits (e, t) {
        const n = Qp.ECCode[e] << 3 | t;
        let r = n;
        for(let e = 0; e < 10; e++)r = r << 1 ^ 1335 * (r >> 9);
        return (n << 10 | r) ^ Qp.formatMask;
    },
    versionBits (e) {
        let t = e;
        for(let e = 0; e < 12; e++)t = t << 1 ^ 7973 * (t >> 11);
        return e << 12 | t;
    },
    alphabet: {
        numeric: Vp("0123456789"),
        alphanumerc: Vp("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:")
    },
    lengthBits: (e, t)=>({
            numeric: [
                10,
                12,
                14
            ],
            alphanumeric: [
                9,
                11,
                13
            ],
            byte: [
                8,
                16,
                16
            ],
            kanji: [
                8,
                10,
                12
            ],
            eci: [
                0,
                0,
                0
            ]
        })[t][Qp.sizeType(e)],
    modeBits: {
        numeric: "0001",
        alphanumeric: "0010",
        byte: "0100",
        kanji: "1000",
        eci: "0111"
    },
    capacity (e, t) {
        const n = Yp[e - 1], r = Jp[t][e - 1], i = Xp[t][e - 1], o = Math.floor(n / i) - r, s = i - n % i;
        return {
            words: r,
            numBlocks: i,
            shortBlocks: s,
            blockLen: o,
            capacity: 8 * (n - r * i),
            total: (r + o) * i + i - s
        };
    }
}, eg = [
    (e, t)=>(e + t) % 2 == 0,
    (e, t)=>t % 2 == 0,
    (e, t)=>e % 3 == 0,
    (e, t)=>(e + t) % 3 == 0,
    (e, t)=>(Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0,
    (e, t)=>e * t % 2 + e * t % 3 == 0,
    (e, t)=>(e * t % 2 + e * t % 3) % 2 == 0,
    (e, t)=>((e + t) % 2 + e * t % 3) % 2 == 0
], tg = {
    tables: ((e)=>{
        const t = Fp(256, 0), n = Fp(256, 0);
        for(let e = 0, r = 1; e < 256; e++)t[e] = r, n[r] = e, r <<= 1, 256 & r && (r ^= 285);
        return {
            exp: t,
            log: n
        };
    })(),
    exp: (e)=>tg.tables.exp[e],
    log (e) {
        if (0 === e) throw new Error(`GF.log: wrong arg=${e}`);
        return tg.tables.log[e] % 255;
    },
    mul: (e, t)=>0 === e || 0 === t ? 0 : tg.tables.exp[(tg.tables.log[e] + tg.tables.log[t]) % 255],
    add: (e, t)=>e ^ t,
    pow: (e, t)=>tg.tables.exp[tg.tables.log[e] * t % 255],
    inv (e) {
        if (0 === e) throw new Error(`GF.inverse: wrong arg=${e}`);
        return tg.tables.exp[255 - tg.tables.log[e]];
    },
    polynomial (e) {
        if (0 == e.length) throw new Error("GF.polymomial: wrong length");
        if (0 !== e[0]) return e;
        let t = 0;
        for(; t < e.length - 1 && 0 == e[t]; t++);
        return e.slice(t);
    },
    monomial (e, t) {
        if (e < 0) throw new Error(`GF.monomial: wrong degree=${e}`);
        if (0 == t) return [
            0
        ];
        let n = Fp(e + 1, 0);
        return n[0] = t, tg.polynomial(n);
    },
    degree: (e)=>e.length - 1,
    coefficient: (e, t)=>e[tg.degree(e) - t],
    mulPoly (e, t) {
        if (0 === e[0] || 0 === t[0]) return [
            0
        ];
        const n = Fp(e.length + t.length - 1, 0);
        for(let r = 0; r < e.length; r++)for(let i = 0; i < t.length; i++)n[r + i] = tg.add(n[r + i], tg.mul(e[r], t[i]));
        return tg.polynomial(n);
    },
    mulPolyScalar (e, t) {
        if (0 == t) return [
            0
        ];
        if (1 == t) return e;
        const n = Fp(e.length, 0);
        for(let r = 0; r < e.length; r++)n[r] = tg.mul(e[r], t);
        return tg.polynomial(n);
    },
    mulPolyMonomial (e, t, n) {
        if (t < 0) throw new Error("GF.mulPolyMonomial: wrong degree");
        if (0 == n) return [
            0
        ];
        const r = Fp(e.length + t, 0);
        for(let t = 0; t < e.length; t++)r[t] = tg.mul(e[t], n);
        return tg.polynomial(r);
    },
    addPoly (e, t) {
        if (0 === e[0]) return t;
        if (0 === t[0]) return e;
        let n = e, r = t;
        n.length > r.length && ([n, r] = [
            r,
            n
        ]);
        let i = Fp(r.length, 0), o = r.length - n.length, s = r.slice(0, o);
        for(let e = 0; e < s.length; e++)i[e] = s[e];
        for(let e = o; e < r.length; e++)i[e] = tg.add(n[e - o], r[e]);
        return tg.polynomial(i);
    },
    remainderPoly (e, t) {
        const n = Array.from(e);
        for(let r = 0; r < e.length - t.length + 1; r++){
            const e = n[r];
            if (0 !== e) for(let i = 1; i < t.length; i++)0 !== t[i] && (n[r + i] = tg.add(n[r + i], tg.mul(t[i], e)));
        }
        return n.slice(e.length - t.length + 1, n.length);
    },
    divisorPoly (e) {
        let t = [
            1
        ];
        for(let n = 0; n < e; n++)t = tg.mulPoly(t, [
            1,
            tg.pow(2, n)
        ]);
        return t;
    },
    evalPoly (e, t) {
        if (0 == t) return tg.coefficient(e, 0);
        let n = e[0];
        for(let r = 1; r < e.length; r++)n = tg.add(tg.mul(t, n), e[r]);
        return n;
    },
    euclidian (e, t, n) {
        tg.degree(e) < tg.degree(t) && ([e, t] = [
            t,
            e
        ]);
        let r = e, i = t, o = [
            0
        ], s = [
            1
        ];
        for(; 2 * tg.degree(i) >= n;){
            let e = r, t = o;
            if (r = i, o = s, 0 === r[0]) throw new Error("rLast[0] === 0");
            i = e;
            let n = [
                0
            ];
            const a = tg.inv(r[0]);
            for(; tg.degree(i) >= tg.degree(r) && 0 !== i[0];){
                const e = tg.degree(i) - tg.degree(r), t = tg.mul(i[0], a);
                n = tg.addPoly(n, tg.monomial(e, t)), i = tg.addPoly(i, tg.mulPolyMonomial(r, e, t));
            }
            if (n = tg.mulPoly(n, o), s = tg.addPoly(n, t), tg.degree(i) >= tg.degree(r)) throw new Error(`Division failed r: ${i}, rLast: ${r}`);
        }
        const a = tg.coefficient(s, 0);
        if (0 == a) throw new Error("sigmaTilde(0) was zero");
        const c = tg.inv(a);
        return [
            tg.mulPolyScalar(s, c),
            tg.mulPolyScalar(i, c)
        ];
    }
};
function ng(e, t) {
    const { words: n, shortBlocks: r, numBlocks: i, blockLen: o, total: s } = Qp.capacity(e, t), a = (c = n, {
        encode (e) {
            const t = tg.divisorPoly(c), n = Array.from(e);
            return n.push(...t.slice(0, -1).fill(0)), Uint8Array.from(tg.remainderPoly(n, t));
        },
        decode (e) {
            const t = e.slice(), n = tg.polynomial(Array.from(e));
            let r = Fp(c, 0), i = !1;
            for(let e = 0; e < c; e++){
                const t = tg.evalPoly(n, tg.exp(e));
                r[r.length - 1 - e] = t, 0 !== t && (i = !0);
            }
            if (!i) return t;
            r = tg.polynomial(r);
            const o = tg.monomial(c, 1), [s, a] = tg.euclidian(o, r, c), l = Fp(tg.degree(s), 0);
            let d = 0;
            for(let e = 1; e < 256 && d < l.length; e++)0 === tg.evalPoly(s, e) && (l[d++] = tg.inv(e));
            if (d !== l.length) throw new Error("RS.decode: wrong errors number");
            for(let e = 0; e < l.length; e++){
                const n = t.length - 1 - tg.log(l[e]);
                if (n < 0) throw new Error("RS.decode: wrong error location");
                const r = tg.inv(l[e]);
                let i = 1;
                for(let t = 0; t < l.length; t++)e !== t && (i = tg.mul(i, tg.add(1, tg.mul(l[t], r))));
                t[n] = tg.add(t[n], tg.mul(tg.evalPoly(a, r), tg.inv(i)));
            }
            return t;
        }
    });
    var c;
    return {
        encode (e) {
            const t = [], n = [];
            for(let s = 0; s < i; s++){
                const i = o + (s < r ? 0 : 1);
                t.push(e.subarray(0, i)), n.push(a.encode(e.subarray(0, i))), e = e.subarray(i);
            }
            const s = zp(...t), c = zp(...n), l = new Uint8Array(s.length + c.length);
            return l.set(s), l.set(c, s.length), l;
        },
        decode (e) {
            if (e.length !== s) throw new Error(`interleave.decode: len(data)=${e.length}, total=${s}`);
            const t = [];
            for(let e = 0; e < i; e++){
                const i = e < r;
                t.push(new Uint8Array(n + o + (i ? 0 : 1)));
            }
            let c = 0;
            for(let n = 0; n < o; n++)for(let r = 0; r < i; r++)t[r][n] = e[c++];
            for(let n = r; n < i; n++)t[n][o] = e[c++];
            for(let s = o; s < o + n; s++)for(let n = 0; n < i; n++){
                const i = n < r;
                t[n][s + (i ? 0 : 1)] = e[c++];
            }
            const l = [];
            for (const e of t)l.push(...Array.from(a.decode(e)).slice(0, -n));
            return Uint8Array.from(l);
        }
    };
}
function rg(e, t, n, r) {
    let i = "", o = n.length;
    if ("numeric" === r) {
        const e = Qp.alphabet.numeric.decode(n.split("")), t = e.length;
        for(let n = 0; n < t - 2; n += 3)i += Up(100 * e[n] + 10 * e[n + 1] + e[n + 2], 10);
        t % 3 == 1 ? i += Up(e[t - 1], 4) : t % 3 == 2 && (i += Up(10 * e[t - 2] + e[t - 1], 7));
    } else if ("alphanumeric" === r) {
        const e = Qp.alphabet.alphanumerc.decode(n.split("")), t = e.length;
        for(let n = 0; n < t - 1; n += 2)i += Up(45 * e[n] + e[n + 1], 11);
        t % 2 == 1 && (i += Up(e[t - 1], 6));
    } else {
        if ("byte" !== r) throw new Error("encode: unsupported type");
        {
            const e = function(e) {
                if ("string" != typeof e) throw new Error("utf8ToBytes expected string, got " + typeof e);
                return new Uint8Array((new TextEncoder).encode(e));
            }(n);
            o = e.length, i = Array.from(e).map((e)=>Up(e, 8)).join("");
        }
    }
    const { capacity: s } = Qp.capacity(e, t), a = Up(o, Qp.lengthBits(e, r));
    let c = Qp.modeBits[r] + a + i;
    if (c.length > s) throw new Error("Capacity overflow");
    c += "0".repeat(Math.min(4, Math.max(0, s - c.length))), c.length % 8 && (c += "0".repeat(8 - c.length % 8));
    const l = "1110110000010001";
    for(let e = 0; c.length !== s; e++)c += l[e % 16];
    const d = Uint8Array.from(c.match(/(.{8})/g).map((e)=>Number(`0b${e}`)));
    return ng(e, t).encode(d);
}
function ig(e, t, n, r, i = !1) {
    const o = function(e, t, n, r = !1) {
        const i = Qp.size.encode(e);
        let o = new Wp(i + 2);
        const s = new Wp(3).rect(0, 3, !0).border(1, !1).border(1, !0).border(1, !1);
        o = o.embed(0, s).embed({
            x: -s.width,
            y: 0
        }, s).embed({
            x: 0,
            y: -s.height
        }, s), o = o.rectSlice(1, i);
        const a = new Wp(1).rect(0, 1, !0).border(1, !1).border(1, !0), c = Qp.alignmentPatterns(e);
        for (const e of c)for (const t of c)void 0 === o.data[e][t] && o.embed({
            x: t - 2,
            y: e - 2
        }, a);
        o = o.hLine({
            x: 0,
            y: 6
        }, 1 / 0, ({ x: e }, t)=>void 0 === t ? e % 2 == 0 : t).vLine({
            x: 6,
            y: 0
        }, 1 / 0, ({ y: e }, t)=>void 0 === t ? e % 2 == 0 : t);
        {
            const e = Qp.formatBits(t, n), s = (t)=>!r && 1 == (e >> t & 1);
            for(let e = 0; e < 6; e++)o.data[e][8] = s(e);
            for(let e = 6; e < 8; e++)o.data[e + 1][8] = s(e);
            for(let e = 8; e < 15; e++)o.data[i - 15 + e][8] = s(e);
            for(let e = 0; e < 8; e++)o.data[8][i - e - 1] = s(e);
            for(let e = 8; e < 9; e++)o.data[8][15 - e - 1 + 1] = s(e);
            for(let e = 9; e < 15; e++)o.data[8][15 - e - 1] = s(e);
            o.data[i - 8][8] = !r;
        }
        if (e >= 7) {
            const t = Qp.versionBits(e);
            for(let e = 0; e < 18; e += 1){
                const n = !r && 1 == (t >> e & 1), s = Math.floor(e / 3), a = e % 3 + i - 8 - 3;
                o.data[s][a] = n, o.data[a][s] = n;
            }
        }
        return o;
    }(e, t, r, i);
    let s = 0;
    const a = 8 * n.length;
    if (function(e, t, n) {
        const r = e.height, i = eg[t];
        let o = -1, s = r - 1;
        for(let t = r - 1; t > 0; t -= 2){
            for(6 == t && (t = 5);; s += o){
                for(let r = 0; r < 2; r += 1){
                    const o = t - r;
                    void 0 === e.data[s][o] && n(o, s, i(o, s));
                }
                if (s + o < 0 || s + o >= r) break;
            }
            o = -o;
        }
    }(o, r, (e, t, r)=>{
        let i = !1;
        s < a && (i = 0 != (n[s >>> 3] >> (7 - s & 7) & 1), s++), o.data[t][e] = i !== r;
    }), s !== a) throw new Error("QR: bytes left after draw");
    return o;
}
function og(e) {
    const t = e.inverse(), n = (e)=>{
        let t = 0;
        for(let n, r = 0, i = 1; r < e.length; r++)n === e[r] && (i++, r !== e.length - 1) || (i >= 5 && (t += i - 5 + 3), n = e[r], i = 1);
        return t;
    };
    let r = 0;
    e.data.forEach((e)=>r += n(e)), t.data.forEach((e)=>r += n(e));
    let i = 0, o = e.data;
    const s = e.width - 1, a = e.height - 1;
    for(let e = 0; e < s; e++)for(let t = 0; t < a; t++){
        const n = e + 1, r = t + 1;
        o[e][t] === o[n][t] && o[n][t] === o[e][r] && o[n][t] === o[n][r] && (i += 3);
    }
    const c = (e)=>{
        const t = [
            !0,
            !1,
            !0,
            !0,
            !0,
            !1,
            !0
        ], n = [
            !1,
            !1,
            !1,
            !1
        ], r = [
            ...t,
            ...n
        ], i = [
            ...n,
            ...t
        ];
        let o = 0;
        for(let t = 0; t < e.length; t++)qp(e, r, t) && (o += 40), qp(e, i, t) && (o += 40);
        return o;
    };
    let l = 0;
    for (const t of e.data)l += c(t);
    for (const e of t.data)l += c(e);
    let d = 0;
    e.rectRead(0, 1 / 0, (e, t)=>d += t ? 1 : 0);
    const u = d / (e.height * e.width) * 100, h = 10 * Math.floor(Math.abs(u - 50) / 5);
    return r + i + l + h;
}
function sg(e, t = "raw", n = {}) {
    const r = void 0 !== n.ecc ? n.ecc : "medium";
    !function(e) {
        if (!Gp.includes(e)) throw new Error(`Invalid error correction mode=${e}. Expected: ${Gp}`);
    }(r);
    const i = void 0 !== n.encoding ? n.encoding : function(e) {
        let t = "numeric";
        for (let n of e)if (!Qp.alphabet.numeric.has(n) && (t = "alphanumeric", !Qp.alphabet.alphanumerc.has(n))) return "byte";
        return t;
    }(e);
    !function(e) {
        if (!Zp.includes(e)) throw new Error(`Encoding: invalid mode=${e}. Expected: ${Zp}`);
        if ("kanji" === e || "eci" === e) throw new Error(`Encoding: ${e} is not supported (yet?).`);
    }(i), void 0 !== n.mask && function(e) {
        if (![
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ].includes(e) || !eg[e]) throw new Error(`Invalid mask=${e}. Expected number [0..7]`);
    }(n.mask);
    let o, s = n.version, a = new Error("Unknown error");
    if (void 0 !== s) !function(e) {
        if (!Number.isSafeInteger(e) || e < 1 || e > 40) throw new Error(`Invalid version=${e}. Expected number [1..40]`);
    }(s), o = rg(s, r, e, i);
    else for(let t = 1; t <= 40; t++)try {
        o = rg(t, r, e, i), s = t;
        break;
    } catch (e) {
        a = e;
    }
    if (!s || !o) throw a;
    let c = function(e, t, n, r) {
        if (void 0 === r) {
            const i = function() {
                let e, t = 1 / 0;
                return {
                    add (n, r) {
                        n >= t || (e = r, t = n);
                    },
                    get: ()=>e,
                    score: ()=>t
                };
            }();
            for(let r = 0; r < eg.length; r++)i.add(og(ig(e, t, n, r, !0)), r);
            r = i.get();
        }
        if (void 0 === r) throw new Error("Cannot find mask");
        return ig(e, t, n, r);
    }(s, r, o, n.mask);
    c.assertDrawn();
    const l = void 0 === n.border ? 2 : n.border;
    if (!Number.isSafeInteger(l)) throw new Error("Wrong border type=" + typeof l);
    if (c = c.border(l, !1), void 0 !== n.scale && (c = c.scale(n.scale)), "raw" === t) return c.data;
    if ("ascii" === t) return c.toASCII();
    if ("svg" === t) return c.toSVG();
    if ("gif" === t) return c.toGIF();
    if ("term" === t) return c.toTerm();
    throw new Error(`Unknown output: ${t}`);
}
const ag = {
    DESKTOP: "Desktop",
    MOBILE: "Mobile",
    META_MASK_MOBILE_APP: "MetaMask mobile app",
    SCAN_TO_CONNECT: "Scan to connect and sign with",
    CONNECT_WITH_EXTENSION: "Connect With MetaMask Extension",
    INSTALL_MODAL: {
        TRUSTED_BY_USERS: "Trusted by over 30 million users to buy, store, send and swap crypto securely",
        LEADING_CRYPTO_WALLET: "The leading crypto wallet & gateway to blockchain apps built on Ethereum Mainnet, Polygon, Optimism, and many other networks",
        CONTROL_DIGITAL_INTERACTIONS: "Puts you in control of your digital interactions by making power of cryptography more accessible",
        INSTALL_META_MASK_EXTENSION: "Install MetaMask Extension"
    },
    PENDING_MODAL: {
        OPEN_META_MASK_SELECT_CODE: "Please open the MetaMask wallet app and select the code on the screen OR disconnect",
        OPEN_META_MASK_CONTINUE: "Open the MetaMask app to continue with your session.",
        NUMBER_AFTER_OPEN_NOTICE: "If a number doesn't appear after opening MetaMask, please click disconnect and re-scan the QRCode.",
        DISCONNECT: "Disconnect"
    },
    SELECT_MODAL: {
        CRYPTO_TAKE_CONTROL_TEXT: "Take control of your crypto and explore the blockchain with the wallet trusted by over 30 million people worldwide"
    },
    META_MASK_MODAL: {
        ADDRESS_COPIED: "Address copied to clipboard!",
        DISCONNECT: "Disconnect",
        ACTIVE_NETWORK: "Active Network"
    }
};
class cg {
    constructor(e){
        var t;
        this.translations = ag, this.supportedLocales = [
            "es",
            "fr",
            "he",
            "it",
            "pt",
            "tr"
        ], this.baseUrl = null !== (t = null == e ? void 0 : e.baseUrl) && void 0 !== t ? t : "https://raw.githubusercontent.com/MetaMask/metamask-sdk/refs/heads/gh-pages/locales";
    }
    getBrowserLanguage() {
        if ((navigator.languages || [
            navigator.language
        ]).some((e)=>e.toLowerCase().startsWith("en"))) return "en";
        const e = navigator.language.toLowerCase().split("-")[0];
        return this.supportedLocales.includes(e) ? e : "en";
    }
    async init(e) {
        const t = this.getBrowserLanguage() || e.fallbackLng;
        await this.loadTranslations(t);
    }
    async loadTranslations(e) {
        const t = e.split("-")[0];
        if ("en" !== t && this.supportedLocales.includes(t)) try {
            const e = `${this.baseUrl}/${t}.json`, n = await fetch(e);
            if (!n.ok) throw new Error(`HTTP error! status: ${n.status}`);
            this.translations = await n.json();
        } catch (e) {
            console.warn(`❌ Failed to load ${t} translations, falling back to English:`, e), this.translations = ag;
        }
        else this.translations = ag;
    }
    t(e) {
        return this.getNestedTranslation(e, this.translations) || e;
    }
    getNestedTranslation(e, t) {
        const n = e.split(".");
        let r = t;
        for (const e of n){
            if ("object" != typeof r) return "";
            r = r[e];
        }
        return "string" == typeof r ? r : "";
    }
}
var lg;
!function(e) {
    e.SDK_MODAL_VIEWED = "sdk_modal_viewed", e.SDK_MODAL_BUTTON_CLICKED = "sdk_modal_button_clicked", e.SDK_MODAL_TOGGLE_CHANGED = "sdk_modal_toggle_changed";
}(lg || (lg = {}));
const dg = class {
    constructor(e){
        uf(this, e), this.close = Vf(this, "close", 7), this.startDesktopOnboarding = Vf(this, "startDesktopOnboarding", 7), this.trackAnalytics = Vf(this, "trackAnalytics", 7), this.link = void 0, this.sdkVersion = void 0, this.preferDesktop = void 0, this.tab = 1, this.isDefaultTab = !0, this.translationsLoaded = !1, this.onClose = this.onClose.bind(this), this.onStartDesktopOnboardingHandler = this.onStartDesktopOnboardingHandler.bind(this), this.setTab = this.setTab.bind(this), this.render = this.render.bind(this), this.setTab(this.preferDesktop ? 1 : 2), this.i18nInstance = new cg;
    }
    componentDidLoad() {
        this.trackAnalytics.emit({
            event: lg.SDK_MODAL_VIEWED,
            params: {
                extensionInstalled: !1,
                tab: 1 === this.tab ? "desktop" : "mobile"
            }
        });
    }
    async connectedCallback() {
        await this.i18nInstance.init({
            fallbackLng: "en"
        }), this.translationsLoaded = !0;
    }
    updatePreferDesktop(e) {
        e ? this.setTab(1) : this.setTab(2);
    }
    onClose(e = !1) {
        this.close.emit({
            shouldTerminate: e
        });
    }
    onStartDesktopOnboardingHandler() {
        this.trackAnalytics.emit({
            event: lg.SDK_MODAL_BUTTON_CLICKED,
            params: {
                button_type: "install_extension",
                tab: "desktop"
            }
        }), this.startDesktopOnboarding.emit();
    }
    setTab(e, t = !1) {
        t && this.trackAnalytics.emit({
            event: lg.SDK_MODAL_TOGGLE_CHANGED,
            params: {
                toggle: 1 === this.tab ? "desktop_to_mobile" : "mobile_to_desktop"
            }
        }), this.tab = e, this.isDefaultTab = !1;
    }
    render() {
        if (!this.translationsLoaded) return null;
        const e = (e)=>this.i18nInstance.t(e), t = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab, n = sg(this.link, "svg", {
            ecc: "medium",
            scale: 2
        });
        return Kf(Lp, {
            className: "install-model"
        }, Kf("div", {
            class: "backdrop",
            onClick: ()=>this.onClose(!0)
        }), Kf("div", {
            class: "modal"
        }, Kf("div", {
            class: "closeButtonContainer"
        }, Kf("div", {
            class: "right"
        }, Kf("span", {
            class: "closeButton",
            onClick: ()=>this.onClose(!0)
        }, Kf(Kp, null)))), Kf("div", {
            class: "logoContainer"
        }, Kf(jp, null)), Kf("div", null, Kf("div", {
            class: "tabcontainer"
        }, Kf("div", {
            class: "flexContainer"
        }, Kf("div", {
            onClick: ()=>this.setTab(1, !0),
            class: "tab flexItem " + (1 === t ? "tabactive" : "")
        }, e("DESKTOP")), Kf("div", {
            onClick: ()=>this.setTab(2, !0),
            class: "tab flexItem " + (2 === t ? "tabactive" : "")
        }, e("MOBILE")))), Kf("div", {
            style: {
                display: 1 === t ? "none" : "block"
            }
        }, Kf("div", {
            class: "flexContainer"
        }, Kf("div", {
            class: "flexItem",
            style: {
                textAlign: "center",
                marginTop: "4"
            }
        }, n && Kf("div", {
            id: "sdk-mm-qrcode",
            class: "center",
            innerHTML: n
        }), Kf("div", {
            class: "connectMobileText"
        }, e("SCAN_TO_CONNECT"), " ", Kf("br", null), Kf("span", {
            class: "blue"
        }, Kf("b", null, e("META_MASK_MOBILE_APP"))))))), Kf("div", {
            style: {
                display: 2 === t ? "none" : "block"
            }
        }, Kf("div", {
            class: "item"
        }, Kf(Op, {
            Icon: Np,
            text: e("INSTALL_MODAL.TRUSTED_BY_USERS")
        })), Kf("div", {
            class: "item"
        }, Kf(Op, {
            Icon: Tp,
            text: e("INSTALL_MODAL.LEADING_CRYPTO_WALLET")
        })), Kf("div", {
            class: "item"
        }, Kf(Op, {
            Icon: Dp,
            text: e("INSTALL_MODAL.CONTROL_DIGITAL_INTERACTIONS")
        })), Kf("button", {
            class: "button",
            onClick: ()=>this.onStartDesktopOnboardingHandler()
        }, Kf($p, null), Kf("span", {
            class: "installExtensionText"
        }, e("INSTALL_MODAL.INSTALL_META_MASK_EXTENSION"))))), Kf(Bp, {
            version: this.sdkVersion
        })));
    }
    get el() {
        return qf(this);
    }
    static get watchers() {
        return {
            preferDesktop: [
                "updatePreferDesktop"
            ]
        };
    }
};
dg.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
const ug = class {
    constructor(e){
        uf(this, e), this.close = Vf(this, "close", 7), this.disconnect = Vf(this, "disconnect", 7), this.updateOTPValue = Vf(this, "updateOTPValue", 7), this.displayOTP = void 0, this.sdkVersion = void 0, this.otpCode = void 0, this.translationsLoaded = !1, this.i18nInstance = new cg;
    }
    async connectedCallback() {
        await this.i18nInstance.init({
            fallbackLng: "en"
        }), this.translationsLoaded = !0;
    }
    onClose() {
        this.close.emit();
    }
    onDisconnect() {
        this.disconnect.emit();
    }
    onUpdateOTPValueHandler(e) {
        this.updateOTPValue.emit({
            otpValue: e
        });
    }
    disconnectedCallback() {
        this.onClose();
    }
    render() {
        var e;
        if (!this.translationsLoaded) return null;
        const t = null === (e = this.displayOTP) || void 0 === e || e, n = this.sdkVersion, r = (e)=>this.i18nInstance.t(e);
        return Kf(Lp, {
            className: "pending-modal"
        }, Kf("div", {
            class: "backdrop",
            onClick: ()=>this.onClose()
        }), Kf("div", {
            class: "modal"
        }, Kf("div", {
            class: "closeButtonContainer"
        }, Kf("div", {
            class: "right"
        }, Kf("span", {
            class: "closeButton",
            onClick: ()=>this.onClose()
        }, Kf(Kp, null)))), Kf("div", {
            class: "logoContainer"
        }, Kf(jp, null)), Kf("div", null, Kf("div", {
            class: "flexContainer",
            style: {
                flexDirection: "column",
                color: "black"
            }
        }, Kf("div", {
            class: "flexItem",
            style: {
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
                fontSize: "16px"
            }
        }, r(t ? "PENDING_MODAL.OPEN_META_MASK_SELECT_CODE" : "PENDING_MODAL.OPEN_META_MASK_CONTINUE")), Kf("div", {
            id: "sdk-mm-otp-value",
            style: {
                padding: "10px",
                fontSize: "32px",
                display: this.otpCode ? "block" : "none"
            }
        }, this.otpCode), t && Kf("div", {
            class: "notice"
        }, "* ", r("PENDING_MODAL.NUMBER_AFTER_OPEN_NOTICE"))), Kf("div", {
            style: {
                marginTop: "20px"
            }
        }, Kf("button", {
            class: "button blue",
            style: {
                marginTop: "5px",
                color: "#0376C9",
                borderColor: "#0376C9",
                borderWidth: "1px",
                borderStyle: "solid",
                backgroundColor: "white"
            },
            onClick: ()=>this.onDisconnect()
        }, r("PENDING_MODAL.DISCONNECT")))), Kf(Bp, {
            version: n
        })));
    }
    get el() {
        return qf(this);
    }
};
ug.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
const hg = ()=>Kf("svg", {
        width: "21",
        height: "15",
        viewBox: "0 0 21 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Kf("path", {
        d: "M14.1364 14.9851C13.5909 14.9851 13.2273 14.5851 13.2273 13.9851C13.2273 13.3851 13.5909 12.9851 14.1364 12.9851C16.6818 12.9851 18.6818 10.7851 18.6818 7.98508C18.6818 5.18508 16.6818 2.98508 14.1364 2.98508C11.5909 2.98508 9.59091 5.18508 9.59091 7.98508C9.59091 8.58508 9.22727 8.98508 8.68182 8.98508C8.13636 8.98508 7.77273 8.58508 7.77273 7.98508C7.77273 4.08508 10.5909 0.985077 14.1364 0.985077C17.6818 0.985077 20.5 4.08508 20.5 7.98508C20.5 11.8851 17.6818 14.9851 14.1364 14.9851ZM6.68182 14.7851C3.22727 14.7851 0.5 11.6851 0.5 7.98508C0.5 4.28508 3.22727 1.18508 6.68182 1.18508C7.22727 1.18508 7.59091 1.58508 7.59091 2.18508C7.59091 2.78508 7.22727 3.18508 6.68182 3.18508C4.22727 3.18508 2.31818 5.38508 2.31818 7.98508C2.31818 10.5851 4.22727 12.7851 6.68182 12.7851C9.13636 12.7851 11.0455 10.6851 11.0455 7.98508C11.0455 7.38508 11.4091 6.98508 11.9545 6.98508C12.5 6.98508 12.8636 7.38508 12.8636 7.98508C12.7727 11.6851 10.0455 14.7851 6.68182 14.7851Z",
        fill: "white"
    })), fg = ()=>Kf("svg", {
        width: "400",
        height: "300",
        viewBox: "0 0 467 300",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Kf("path", {
        d: "M312.387 280.629C312.549 280.583 312.247 280.735 312.387 280.629L339.678 260.425C340.088 260.118 340.132 259.156 340.07 258.647C340.008 258.138 339.573 258.257 339.106 258.084L311.712 247.455C311.292 247.301 311.308 247.402 310.939 247.673C310.569 247.944 310.356 248.21 310.356 248.672L310.459 279.504C310.461 280.025 311.163 280.619 311.614 280.847C311.913 280.996 312.072 280.718 312.387 280.629ZM336.204 259.736L312.979 276.292L313.439 251.139L336.204 259.736Z",
        fill: "url(#paint0_linear_1356_14057)"
    }), Kf("path", {
        d: "M324.639 260.342C324.358 259.547 323.485 258.91 322.707 259.215C319.6 260.432 318.17 262.313 317.287 264.066C316.482 265.665 316.197 267.482 314.188 268.269C312.178 269.055 310.763 268.663 309.162 268.007C307.406 267.287 305.504 266.182 302.397 267.399C299.289 268.616 297.859 270.497 296.976 272.25C296.171 273.849 295.697 274.886 293.685 275.673C291.675 276.459 290.261 276.067 288.659 275.411C286.903 274.691 284.999 273.587 281.894 274.803C278.789 276.019 277.549 278.681 276.666 280.434C275.861 282.034 275.386 283.07 273.374 283.857C272.596 284.161 271.931 285.055 272.211 285.849C272.492 286.644 273.365 287.281 274.143 286.977C277.25 285.76 278.68 283.879 279.563 282.125C280.368 280.526 280.65 278.71 282.662 277.923C284.672 277.136 286.087 277.528 287.688 278.184C289.444 278.904 291.348 280.009 294.453 278.793C297.561 277.576 298.991 275.695 299.874 273.941C300.679 272.342 301.153 271.306 303.165 270.519C305.175 269.732 306.589 270.124 308.191 270.78C309.947 271.5 311.849 272.605 314.956 271.388C318.063 270.172 319.301 267.511 320.184 265.757C320.989 264.158 321.466 263.121 323.476 262.335C324.254 262.032 324.919 261.137 324.639 260.342Z",
        fill: "url(#paint1_linear_1356_14057)"
    }), Kf("path", {
        d: "M389.034 111.124C388.968 112.406 387.342 113.113 386.324 113.549C384.297 114.419 382.089 114.493 379.942 114.5C376.607 114.509 373.215 114.163 369.89 113.976C366.712 113.798 363.156 113.311 360.03 114.232C357.705 114.919 355.667 116.762 353.452 117.739C351.129 118.765 348.957 119.198 346.489 119.687C335.569 121.85 323.587 120.825 312.656 119.977C311.92 119.92 312.539 118.997 313.237 118.981C313.207 118.815 313.001 118.394 313.045 118.201C313.086 118.029 312.781 117.586 312.853 117.421C312.67 117.198 313.316 117.427 313.626 117.204C315.912 115.557 318.721 114.79 321.363 115.041C324.677 115.355 327.293 116.04 330.641 115.781C334.392 115.491 338.125 114.787 341.857 114.312C345.142 113.892 349.09 113.941 352.106 112.28C352.916 111.834 353.137 111.262 353.269 110.287C353.331 109.828 353.672 108.969 353.658 108.511C353.629 107.529 354.191 107.886 355.013 107.298C356.857 105.981 358.274 105.516 360.428 105.784C362.841 106.083 365.264 107.273 367.578 107.953C370.761 108.888 374.328 108.646 377.631 108.477C380.517 108.329 383.141 107.901 385.944 108.653C387.013 108.941 389.104 109.745 389.034 111.124Z",
        fill: "url(#paint2_linear_1356_14057)"
    }), Kf("path", {
        d: "M278.118 85.4414C280.313 83.8186 283.302 83.9 285.853 83.2728C290.501 82.127 295.644 78.4476 300.549 79.1524C301.299 79.2595 300.904 81.0355 300.159 80.9295C300.131 80.9256 300.187 80.9333 300.159 80.9295C300.089 81.0185 299.516 81.1051 299.385 81.1463C294.999 82.515 292.895 87.5083 289.126 89.8598C287.799 90.688 286.771 90.8351 285.258 90.9441C283.515 91.0691 280.964 90.5775 279.269 90.1219C277.15 89.5532 275.965 87.034 278.118 85.4414Z",
        fill: "url(#paint3_linear_1356_14057)"
    }), Kf("path", {
        d: "M122.567 166.093C113.597 172.832 104.535 179.836 99.517 190.092C98.5342 192.099 97.519 195.019 97.9533 197.204C98.9699 202.316 105.76 203.049 110.691 201.96C113.468 201.347 116.325 199.231 115.921 196.319C115.576 193.81 113.158 192.986 112.072 190.73C110.779 188.04 112.35 184.97 114.218 182.62C128.134 165.099 150.074 157.394 171.093 151.607C175.385 150.425 180.897 147.69 180.581 143.099C180.372 140.072 177.118 137.683 174.221 137.383C171.324 137.082 168.481 138.773 165.715 139.776C158.416 142.419 151.17 143.799 143.489 143.526C136.865 143.29 130.976 143.316 129.562 150.781C128.138 158.276 129.53 160.863 122.567 166.093Z",
        fill: "url(#paint4_linear_1356_14057)"
    }), Kf("path", {
        d: "M79.1056 153.531C60.3932 164.378 43.7478 178.354 32.8214 197.415C30.3313 201.76 27.9216 206.554 27.1821 211.512C26.4448 216.47 27.7591 222.525 30.8133 226.337C34.908 231.446 41.6938 232.915 48.1811 233.125C50.7248 233.208 53.0035 233.066 55.3316 231.947C57.6602 230.83 59.7548 228.359 59.5978 225.742C59.3303 221.315 54.5491 219.665 50.9271 217.34C42.6566 212.037 40.4958 199.493 44.2381 190.032C47.9803 180.57 55.8228 173.173 63.2316 166.338C67.229 162.651 71.5194 158.372 76.777 157.522C79.9167 157.015 83.4706 157.589 86.6295 157.252C93.9004 156.479 99.64 151.404 105.588 146.912C115.048 139.765 126.045 134.283 137.501 132.093C141.913 131.248 146.293 130.493 149.682 127.831C151.37 126.507 150.803 123.567 148.726 123.93C138.542 125.713 128.652 131.135 119.142 134.758C105.627 139.914 91.7133 146.223 79.1056 153.531Z",
        fill: "url(#paint5_linear_1356_14057)"
    }), Kf("path", {
        d: "M96.3677 117.321C96.0315 116.64 95.2914 116.612 94.6293 116.975C91.9858 118.417 91.5452 120.509 90.9466 122.178C90.4004 123.702 89.3647 124.67 87.6542 125.604C85.9437 126.538 85.0983 126.316 83.5956 125.91C81.9481 125.465 79.8603 125.424 77.2168 126.866C74.5734 128.309 74.1348 130.401 73.5341 132.07C72.9879 133.593 71.9522 134.562 70.2417 135.496C68.5313 136.43 67.6859 136.208 66.1832 135.801C64.5357 135.357 62.2569 134.538 59.6128 135.978C56.9694 137.42 56.5308 139.512 55.9301 141.181C55.3839 142.705 54.5398 144.454 52.8293 145.388C52.1667 145.748 52.1006 146.485 52.439 147.165C52.7752 147.845 53.5153 147.874 54.1773 147.511C56.8208 146.069 57.2594 143.977 57.86 142.307C58.4062 140.784 59.4419 139.815 61.1524 138.881C62.8629 137.948 63.7083 138.17 65.211 138.576C66.8585 139.021 68.9458 139.059 71.5898 137.619C74.2333 136.177 74.6718 134.085 75.2725 132.416C75.8187 130.892 76.8544 129.924 78.5649 128.99C80.2754 128.056 81.1207 128.278 82.6235 128.684C84.2709 129.129 86.5503 129.95 89.1938 128.507C91.8373 127.065 92.2779 124.973 92.8765 123.304C93.4227 121.78 94.2663 120.03 95.9773 119.098C96.6378 118.738 96.7039 118.001 96.3677 117.321Z",
        fill: "#FBC49D"
    }), Kf("path", {
        d: "M391.827 164.699C392.04 164.639 392.39 164.573 392.6 164.481C393.87 163.921 395.363 162.429 395.893 161.051C396.421 159.673 396.237 158.321 395.712 156.931C394.629 154.061 391.777 152.62 389.155 153.775C386.531 154.931 384.962 158.455 386.042 161.325C387.038 163.963 389.369 165.392 391.827 164.699ZM394.166 157.367C394.529 158.332 394.52 159.751 394.156 160.706C393.792 161.662 393.1 162.534 392.218 162.921C390.398 163.723 388.338 162.878 387.589 160.889C387.226 159.925 387.234 158.506 387.599 157.55C387.963 156.594 388.654 155.723 389.536 155.336C391.356 154.534 393.416 155.376 394.166 157.367Z",
        fill: "#86E29B"
    }), Kf("path", {
        d: "M62.7198 108.691C64.4912 108.191 66.6152 106.609 67.5596 104.824C68.4273 103.187 68.465 101.455 67.9609 99.7066C67.4547 97.9586 66.0792 96.5141 64.4963 95.6786C62.9135 94.843 61.2077 94.8578 59.4756 95.4255C57.7435 95.9933 56.2768 97.4364 55.409 99.074C53.6185 102.456 55.2032 106.494 58.4723 108.22C60.0142 109.035 61.1315 109.138 62.7198 108.691ZM60.6304 96.7682C61.819 96.4332 63.0232 96.8871 64.1048 97.4571C65.2463 98.0603 66.0495 98.8796 66.4145 100.142C66.7791 101.403 66.4488 103.299 65.8224 104.48C64.5299 106.919 61.2212 107.686 58.8638 106.441C56.5063 105.197 55.8538 101.858 57.1462 99.4185C57.7726 98.2375 58.6059 97.3957 59.8573 96.9862C59.9214 96.9635 60.5631 96.7872 60.6304 96.7682Z",
        fill: "#FFB0EB"
    }), Kf("path", {
        d: "M77.0217 242.979C75.9542 243.28 75.1664 242.151 74.9029 241.074C74.6394 239.996 75 239.378 76.0676 239.077C77.1351 238.776 78.5053 238.907 78.7688 239.984C79.0323 241.061 78.0893 242.678 77.0217 242.979Z",
        fill: "url(#paint6_linear_1356_14057)"
    }), Kf("path", {
        d: "M380.506 184.577C379.439 184.878 378.651 183.749 378.387 182.672C378.124 181.594 378.484 180.976 379.552 180.675C380.619 180.374 381.99 180.505 382.253 181.582C382.517 182.659 381.574 184.276 380.506 184.577Z",
        fill: "url(#paint7_linear_1356_14057)"
    }), Kf("path", {
        d: "M348.82 246.969C347.752 247.27 346.382 247.14 346.119 246.063C345.855 244.985 346.798 243.369 347.866 243.068C348.933 242.767 349.721 243.896 349.985 244.973C350.248 246.05 349.888 246.669 348.82 246.969Z",
        fill: "url(#paint8_linear_1356_14057)"
    }), Kf("path", {
        d: "M140.419 282.412C139.351 282.713 138.754 282.365 138.491 281.288C138.227 280.21 138.397 278.812 139.464 278.511C140.532 278.21 142.093 279.121 142.357 280.198C142.62 281.275 141.486 282.111 140.419 282.412Z",
        fill: "url(#paint9_linear_1356_14057)"
    }), Kf("path", {
        d: "M121.462 101.679C120.395 101.979 119.798 101.631 119.534 100.554C119.271 99.4764 119.44 98.0779 120.508 97.777C121.575 97.4761 123.136 98.3868 123.4 99.4642C123.663 100.542 122.53 101.378 121.462 101.679Z",
        fill: "url(#paint10_linear_1356_14057)"
    }), Kf("path", {
        d: "M370.749 159.005C369.682 159.306 368.311 159.175 368.048 158.098C367.784 157.021 368.727 155.404 369.795 155.103C370.863 154.802 371.65 155.931 371.914 157.008C372.177 158.086 371.817 158.704 370.749 159.005Z",
        fill: "url(#paint11_linear_1356_14057)"
    }), Kf("path", {
        d: "M384.211 245.345C383.143 245.646 381.773 245.515 381.51 244.438C381.246 243.361 382.189 241.744 383.257 241.443C384.324 241.142 385.112 242.271 385.376 243.348C385.639 244.426 385.278 245.044 384.211 245.345Z",
        fill: "url(#paint12_linear_1356_14057)"
    }), Kf("path", {
        d: "M364.771 41.3873C363.063 41.8687 361.337 40.8616 360.915 39.1378C360.493 37.414 361.536 35.6263 363.244 35.1449C364.953 34.6634 366.679 35.6706 367.101 37.3944C367.522 39.1182 366.479 40.9059 364.771 41.3873Z",
        fill: "url(#paint13_linear_1356_14057)"
    }), Kf("path", {
        d: "M404.311 77.905C404.602 77.8231 404.875 77.9236 405.084 77.6871C405.437 77.2908 404.814 76.6385 404.703 76.1265L401.277 58.7418C401.149 58.163 400.687 57.5371 400.123 57.3991C399.558 57.2611 398.969 57.3812 398.576 57.835L385.784 73.1179C385.395 73.564 385.199 74.3453 385.393 74.8964C385.585 75.4481 385.978 76.1646 386.548 76.2391L403.538 78.123C403.744 78.1479 404.114 77.9607 404.311 77.905ZM398.948 62.7348L401.811 74.4394L389.841 72.8085L398.948 62.7348Z",
        fill: "#FFB0EB"
    }), Kf("path", {
        d: "M97.5393 295.311C97.7108 295.263 97.4284 295.461 97.5393 295.311L108.785 280.464C108.975 280.211 108.718 279.972 108.594 279.684C108.47 279.396 108.124 279.917 107.821 279.902L88.5106 278.672C88.2101 278.659 87.895 278.62 87.7374 278.89C87.5798 279.159 87.7755 279.402 87.9283 279.67L96.5753 294.749C96.7102 294.99 97.2696 295.297 97.5393 295.311C97.6283 295.319 97.4556 295.335 97.5393 295.311ZM106.465 281.118L96.9667 292.97L90.6295 280.577L106.465 281.118Z",
        fill: "#86E29B"
    }), Kf("path", {
        d: "M393.699 108.848C389.518 104.446 414.629 114.366 413.945 120.659C413.259 126.952 401.355 129.102 403.894 123.491C406.042 118.747 400.376 115.876 393.699 108.848Z",
        fill: "#FBC49D"
    }), Kf("path", {
        d: "M139.414 115.959C139.434 115.953 139.392 115.965 139.414 115.959C141.963 115.2 143.436 111.976 142.717 109.189C142.37 107.839 141.526 107.199 140.408 106.504C139.289 105.808 138.171 105.449 136.933 105.815C135.698 106.182 134.85 107.033 134.222 108.247C133.595 109.461 133.282 111.234 133.63 112.585C133.978 113.935 134.821 114.574 135.94 115.27C137.04 115.952 138.199 116.301 139.414 115.959ZM137.315 107.375C138.222 107.12 139.005 106.994 139.825 107.502C140.661 108.02 140.912 108.618 141.171 109.625C141.708 111.704 140.935 113.834 139.032 114.398C138.11 114.675 137.356 114.791 136.522 114.272C135.686 113.753 135.436 113.155 135.176 112.149C134.917 111.142 134.718 109.714 135.186 108.81C135.654 107.905 136.394 107.649 137.315 107.375C137.329 107.371 137.299 107.38 137.315 107.375Z",
        fill: "#75C4FD"
    }), Kf("path", {
        d: "M308.981 78.7519C310.052 78.4043 311.158 78.7096 312.265 78.6613C313.655 78.6006 314.936 78.517 316.323 78.3531C319.497 77.9795 322.798 77.4906 325.984 77.3012C329.309 77.1025 332.514 76.8551 335.836 77.0295C338.809 77.1842 342.163 77.3405 345.105 77.7558C352.129 78.7468 359.331 79.0578 366.347 80.1158C372.252 81.008 377.93 82.1319 383.722 83.5644C385.925 84.0054 388.267 85.0754 389.126 85.3792C389.421 85.4833 389.37 85.8347 389.317 86.1595C389.306 86.2271 389.353 86.1146 389.317 86.1595C388.269 87.414 386.564 86.8124 385.259 86.4677C384.406 86.241 381.488 85.9494 381.011 85.9957C380.14 86.0815 379.277 86.014 379.656 87.2114C380.122 88.6824 382.391 89.7375 383.704 90.2419C385.883 91.0803 388.771 91.2561 390.845 92.4015C392.968 92.821 395.425 93.5002 397.022 93.9986C402.83 95.8103 407.806 98.8678 413.033 102.002C415.503 103.482 417.829 104.764 419.973 106.72C421.647 108.248 423.771 109.882 424.595 112.091C425.113 113.482 424.451 115.471 422.848 115.085C420.353 114.488 419.638 111.665 418.227 109.714C415.003 105.251 410.067 102.067 405.118 100.06C402.64 99.0556 399.803 98.729 397.204 98.1176C394.411 97.4613 391.597 97.0442 388.707 97.1736C385.646 97.3097 382.846 97.5534 379.819 98.0078C377.027 98.4264 374.252 98.4441 371.514 97.8441C368.766 97.2421 366.276 96.7553 363.6 95.9021C361.662 95.2848 359.013 94.5583 357.232 93.5247C355.699 92.6339 355.631 91.2381 357.241 90.186C359.87 88.4656 362.778 89.8021 365.546 90.3497C365.561 90.3527 365.532 90.3468 365.546 90.3497C367.858 90.804 369.649 90.098 371.923 89.3884C372.489 89.2128 373.255 89.0482 373.47 88.953C374.383 88.5432 375.895 87.8227 375.407 86.7394C374.868 85.5457 372.659 84.8846 371.55 84.4891C369.74 83.8428 368.053 82.9215 366.147 82.6743C365.654 82.6095 365.109 83.1606 364.6 83.1097C363.36 83.1121 361.769 83.348 360.543 83.418C357.43 83.5916 354.583 83.6228 351.464 83.4719C348.714 83.3377 346.432 82.8542 343.741 82.3102C340.773 81.7101 337.52 81.5879 334.471 81.5839C331.393 81.5811 328.6 81.7214 325.583 82.4181C322.758 83.0702 319.757 83.6198 316.887 84.0326C314.698 84.3481 312.467 84.6054 310.319 84.2137C309.079 83.9871 306.994 83.3394 306.461 81.9635C305.846 80.3659 307.736 79.1556 308.981 78.7519Z",
        fill: "url(#paint14_linear_1356_14057)"
    }), Kf("path", {
        d: "M242.269 242.95C242.295 242.947 242.244 242.955 242.269 242.95C244.934 242.606 247.53 241.858 250.2 241.574C253.133 241.264 256.006 240.56 258.906 239.982C263.26 239.117 268.026 238.52 272.254 237.097C274.429 236.365 276.067 235.298 278.251 234.592C280.361 233.909 283.058 233.12 285.216 232.652C289.317 231.764 293.049 231.66 297.016 230.198C301.109 228.69 305.088 226.673 308.819 224.409C312.645 222.086 316.282 219.769 320.622 218.62C322.381 218.154 323.919 218.219 325.65 218.886C327.016 219.413 327.739 220.337 327.196 221.79C326.557 223.504 324.659 224.7 323.131 225.423C320.854 226.5 319.53 227.184 317.134 227.927C314.619 228.707 311.888 229.24 309.395 230.083C308.226 230.947 307.17 232.522 306.105 233.501C303.996 235.441 301.666 237.03 298.945 237.996C292.934 240.129 286.354 238.602 280.183 239.056C279.661 239.095 279.162 239.442 278.635 239.487C275.592 240.135 272.2 240.63 269.156 241.294C264.546 242.299 260.456 243.409 255.808 244.179C251.971 244.814 243.815 245.854 243.815 245.854L242.074 245.505C240.575 245.281 240.751 243.152 242.269 242.95Z",
        fill: "url(#paint15_linear_1356_14057)"
    }), Kf("path", {
        d: "M432.985 171.626C438.212 165.465 445.109 153.64 442.906 144.649C442.162 137.999 433.671 132.912 424.963 135.518C420.16 136.957 416.435 142.146 419.724 144.498C420.656 145.164 422.187 145.591 423.391 145.969C434.204 149.375 434.925 162.538 425.069 169.683C421.087 172.569 416.347 174.292 411.914 176.719C400.151 183.162 399.887 196.847 387.7 202.712C382.326 205.298 375.761 206.838 370.297 209.275C359.98 213.88 352.555 221.733 342.241 226.341C337.225 228.584 330.266 231.632 323.483 234.12C321.475 234.855 321.999 237.058 324.056 236.46C324.098 236.449 324.017 236.474 324.056 236.46C329.079 234.971 334.437 233.161 339.331 231.33C352.278 226.48 365.28 220.971 377.43 214.775C401.78 202.367 416.881 190.609 432.985 171.626Z",
        fill: "url(#paint16_linear_1356_14057)"
    }), Kf("path", {
        d: "M343.644 241.104C348.002 234.144 357.126 232.455 364.343 231.134C368.176 230.431 372.406 229.878 376.137 228.662C380.691 227.175 384.558 224.095 388.327 221.077C389.452 220.177 391.204 218.466 392.393 217.436C393.185 216.748 393.644 216.026 394.33 215.225C396 213.275 399.599 209.812 401.687 208.16C403.263 206.914 407.779 204.758 408.259 207.986C408.611 210.359 406.379 213.087 404.961 214.747C402.224 217.953 398.998 221.079 395.475 223.243C391.749 225.531 387.701 227.439 383.674 229.051C381.672 229.853 379.519 230.073 377.486 230.785C376.001 231.307 374.486 232.236 373.037 232.866C371.034 233.738 368.99 234.28 367.041 235.38C364.436 236.849 361.782 238.783 359.108 240.105C356.331 241.477 353.823 242.691 350.791 243.27C348.6 243.687 345.501 243.641 343.836 241.884C343.526 241.554 343.389 241.51 343.644 241.104Z",
        fill: "url(#paint17_linear_1356_14057)"
    }), Kf("path", {
        d: "M190.163 273.219C222.905 268.849 232.64 262.943 213.962 259.057C195.285 255.172 187.5 262.08 188.434 266.2C189.366 270.32 180.381 271.326 169.286 272.39C158.193 273.454 157.141 276.354 190.163 273.219Z",
        fill: "url(#paint18_linear_1356_14057)"
    }), Kf("path", {
        d: "M295.952 95.4242L241.395 135.226L251.54 111.77L295.952 95.4242Z",
        fill: "#E17726",
        stroke: "#E17726",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M170.111 95.4242L224.181 135.598L214.522 111.77L170.111 95.4242Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M276.309 187.712L261.793 209.576L292.876 218.014L301.78 188.189L276.309 187.712Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M164.336 188.189L173.186 218.014L204.215 209.576L189.753 187.712L164.336 188.189Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M202.542 150.776L193.908 163.618L224.667 164.998L223.642 132.36L202.542 150.776Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M263.52 150.775L242.097 131.989L241.395 164.998L272.154 163.618L263.52 150.775Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M204.215 209.576L222.832 200.714L206.805 188.402L204.215 209.576Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M243.23 200.714L261.793 209.576L259.257 188.402L243.23 200.714Z",
        fill: "#E27625",
        stroke: "#E27625",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M261.793 209.576L243.23 200.714L244.741 212.601L244.579 217.643L261.793 209.576Z",
        fill: "#D5BFB2",
        stroke: "#D5BFB2",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M204.215 209.576L221.483 217.643L221.375 212.601L222.832 200.714L204.215 209.576Z",
        fill: "#D5BFB2",
        stroke: "#D5BFB2",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M221.807 180.547L206.373 176.09L217.274 171.154L221.807 180.547Z",
        fill: "#233447",
        stroke: "#233447",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M244.255 180.547L248.788 171.154L259.742 176.09L244.255 180.547Z",
        fill: "#233447",
        stroke: "#233447",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M204.215 209.576L206.913 187.712L189.753 188.189L204.215 209.576Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M259.149 187.712L261.793 209.576L276.309 188.189L259.149 187.712Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M272.154 163.618L241.395 164.998L244.255 180.547L248.788 171.154L259.742 176.09L272.154 163.618Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M206.373 176.09L217.274 171.154L221.807 180.547L224.667 164.998L193.908 163.618L206.373 176.09Z",
        fill: "#CC6228",
        stroke: "#CC6228",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M193.908 163.618L206.805 188.402L206.373 176.09L193.908 163.618Z",
        fill: "#E27525",
        stroke: "#E27525",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M259.743 176.09L259.257 188.402L272.154 163.618L259.743 176.09Z",
        fill: "#E27525",
        stroke: "#E27525",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M224.667 164.998L221.807 180.548L225.422 198.909L226.232 174.71L224.667 164.998Z",
        fill: "#E27525",
        stroke: "#E27525",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M241.395 164.998L239.884 174.657L240.64 198.909L244.255 180.548L241.395 164.998Z",
        fill: "#E27525",
        stroke: "#E27525",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M244.255 180.547L240.64 198.909L243.23 200.714L259.257 188.402L259.743 176.09L244.255 180.547Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M206.373 176.09L206.805 188.402L222.832 200.714L225.422 198.909L221.807 180.547L206.373 176.09Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M244.579 217.643L244.741 212.601L243.338 211.434H222.724L221.375 212.601L221.483 217.643L204.215 209.576L210.259 214.459L222.508 222.791H243.5L255.803 214.459L261.793 209.576L244.579 217.643Z",
        fill: "#C0AC9D",
        stroke: "#C0AC9D",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M243.23 200.714L240.64 198.909H225.422L222.832 200.714L221.375 212.601L222.724 211.434H243.338L244.741 212.601L243.23 200.714Z",
        fill: "#161616",
        stroke: "#161616",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M298.272 137.827L302.859 115.856L295.952 95.4242L243.23 133.899L263.52 150.775L292.174 159.001L298.488 151.731L295.736 149.767L300.107 145.84L296.761 143.293L301.132 140.002L298.272 137.827Z",
        fill: "#763E1A",
        stroke: "#763E1A",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M163.203 115.856L167.844 137.827L164.876 140.002L169.301 143.293L165.955 145.84L170.326 149.767L167.574 151.731L173.888 159.001L202.542 150.775L222.832 133.899L170.11 95.4242L163.203 115.856Z",
        fill: "#763E1A",
        stroke: "#763E1A",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M292.175 159.001L263.52 150.775L272.154 163.618L259.257 188.402L276.309 188.189H301.78L292.175 159.001Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M202.542 150.775L173.888 159.001L164.336 188.189H189.753L206.805 188.402L193.908 163.618L202.542 150.775Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("path", {
        d: "M241.395 164.998L243.23 133.9L251.54 111.77H214.522L222.832 133.9L224.667 164.998L225.368 174.763L225.422 198.909H240.64L240.694 174.763L241.395 164.998Z",
        fill: "#F5841F",
        stroke: "#F5841F",
        "stroke-width": "0.94513",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), Kf("defs", null, Kf("linearGradient", {
        id: "paint0_linear_1356_14057",
        x1: "335.991",
        y1: "250.487",
        x2: "303.873",
        y2: "266.801",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#FFE466"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#FFAFEA"
    })), Kf("linearGradient", {
        id: "paint1_linear_1356_14057",
        x1: "276.993",
        y1: "303.722",
        x2: "205.254",
        y2: "401.574",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "0.0929",
        "stop-color": "#81C2F6"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#F0B8BD"
    })), Kf("linearGradient", {
        id: "paint2_linear_1356_14057",
        x1: "271.074",
        y1: "119.924",
        x2: "553.077",
        y2: "104.53",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#FFE466"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#FFAFEA"
    })), Kf("linearGradient", {
        id: "paint3_linear_1356_14057",
        x1: "264.209",
        y1: "91.0943",
        x2: "357.834",
        y2: "72.8792",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#FFE466"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#FFAFEA"
    })), Kf("linearGradient", {
        id: "paint4_linear_1356_14057",
        x1: "212.46",
        y1: "121.997",
        x2: "92.6119",
        y2: "183.406",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#FFE466"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#FFAFEA"
    })), Kf("linearGradient", {
        id: "paint5_linear_1356_14057",
        x1: "23.0498",
        y1: "204.411",
        x2: "161.86",
        y2: "163.003",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "0.0929",
        "stop-color": "#81C2F6"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#F0B8BD"
    })), Kf("linearGradient", {
        id: "paint6_linear_1356_14057",
        x1: "78.8647",
        y1: "240.375",
        x2: "74.9655",
        y2: "241.328",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#75C3FC"
    })), Kf("linearGradient", {
        id: "paint7_linear_1356_14057",
        x1: "382.349",
        y1: "181.971",
        x2: "378.45",
        y2: "182.925",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#75C3FC"
    })), Kf("linearGradient", {
        id: "paint8_linear_1356_14057",
        x1: "349.889",
        y1: "244.583",
        x2: "345.99",
        y2: "245.537",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#75C3FC"
    })), Kf("linearGradient", {
        id: "paint9_linear_1356_14057",
        x1: "142.262",
        y1: "279.808",
        x2: "138.362",
        y2: "280.762",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#75C3FC"
    })), Kf("linearGradient", {
        id: "paint10_linear_1356_14057",
        x1: "123.305",
        y1: "99.0746",
        x2: "119.406",
        y2: "100.028",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#75C3FC"
    })), Kf("linearGradient", {
        id: "paint11_linear_1356_14057",
        x1: "371.818",
        y1: "156.617",
        x2: "367.919",
        y2: "157.571",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#75C3FC"
    })), Kf("linearGradient", {
        id: "paint12_linear_1356_14057",
        x1: "385.281",
        y1: "242.958",
        x2: "381.382",
        y2: "243.911",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#75C3FC"
    })), Kf("linearGradient", {
        id: "paint13_linear_1356_14057",
        x1: "367.125",
        y1: "37.5052",
        x2: "360.843",
        y2: "38.8076",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#75C3FC"
    })), Kf("linearGradient", {
        id: "paint14_linear_1356_14057",
        x1: "300.182",
        y1: "91.321",
        x2: "479.464",
        y2: "104.041",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#FFE466"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#FFAFEA"
    })), Kf("linearGradient", {
        id: "paint15_linear_1356_14057",
        x1: "363.434",
        y1: "201.232",
        x2: "102.977",
        y2: "302.269",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#FFE466"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#FFAFEA"
    })), Kf("linearGradient", {
        id: "paint16_linear_1356_14057",
        x1: "447.962",
        y1: "165.159",
        x2: "313.049",
        y2: "197.95",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "0.0929",
        "stop-color": "#81C2F6"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#F0B8BD"
    })), Kf("linearGradient", {
        id: "paint17_linear_1356_14057",
        x1: "410.211",
        y1: "215.859",
        x2: "341.378",
        y2: "232.788",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#75C3FC"
    }), Kf("stop", {
        offset: "0.0929",
        "stop-color": "#81C2F6"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#F0B8BD"
    })), Kf("linearGradient", {
        id: "paint18_linear_1356_14057",
        x1: "222.282",
        y1: "258.986",
        x2: "162.257",
        y2: "273.774",
        gradientUnits: "userSpaceOnUse"
    }, Kf("stop", {
        "stop-color": "#FFE466"
    }), Kf("stop", {
        offset: "1",
        "stop-color": "#FFAFEA"
    })))), pg = class {
    constructor(e){
        uf(this, e), this.close = Vf(this, "close", 7), this.connectWithExtension = Vf(this, "connectWithExtension", 7), this.link = void 0, this.sdkVersion = void 0, this.preferDesktop = void 0, this.tab = 1, this.isDefaultTab = !0, this.translationsLoaded = !1, this.i18nInstance = new cg, this.setTab(this.preferDesktop ? 1 : 2);
    }
    async connectedCallback() {
        await this.i18nInstance.init({
            fallbackLng: "en"
        }), this.translationsLoaded = !0;
    }
    onClose(e = !1) {
        this.close.emit({
            shouldTerminate: e
        });
    }
    connectWithExtensionHandler() {
        this.connectWithExtension.emit();
    }
    setTab(e) {
        this.tab = e, this.isDefaultTab = !1;
    }
    disconnectedCallback() {
        this.onClose();
    }
    updatePreferDesktop(e) {
        e ? this.setTab(1) : this.setTab(2);
    }
    render() {
        if (!this.translationsLoaded) return null;
        const e = (e)=>this.i18nInstance.t(e), t = this.sdkVersion, n = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab, r = sg(this.link, "svg", {
            ecc: "medium",
            scale: 2
        });
        return Kf(Lp, {
            className: "select-modal"
        }, Kf("div", {
            class: "backdrop",
            onClick: ()=>this.onClose(!0)
        }), Kf("div", {
            class: "modal"
        }, Kf("div", {
            class: "closeButtonContainer"
        }, Kf("div", {
            class: "right"
        }, Kf("span", {
            class: "closeButton",
            onClick: ()=>this.onClose(!0)
        }, Kf(Kp, null)))), Kf("div", {
            class: "logoContainer"
        }, Kf(jp, null)), Kf("div", null, Kf("div", {
            class: "tabcontainer"
        }, Kf("div", {
            class: "flexContainer"
        }, Kf("div", {
            onClick: ()=>this.setTab(1),
            class: "tab flexItem " + (1 === n ? "tabactive" : "")
        }, e("DESKTOP")), Kf("div", {
            onClick: ()=>this.setTab(2),
            class: "tab flexItem " + (2 === n ? "tabactive" : "")
        }, e("MOBILE")))), Kf("div", {
            style: {
                display: 1 === n ? "none" : "block"
            }
        }, Kf("div", {
            class: "flexContainer"
        }, Kf("div", {
            class: "flexItem",
            style: {
                textAlign: "center",
                marginTop: "4"
            }
        }, Kf("div", {
            class: "center",
            id: "sdk-mm-qrcode",
            innerHTML: r
        }), Kf("div", {
            class: "connectMobileText"
        }, e("SCAN_TO_CONNECT"), Kf("br", null), Kf("span", {
            class: "blue"
        }, Kf("b", null, e("META_MASK_MOBILE_APP"))))))), Kf("div", {
            style: {
                display: 2 === n ? "none" : "block"
            }
        }, Kf("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                height: "300",
                marginTop: "-20"
            }
        }, Kf(fg, null)), Kf("div", {
            class: "extensionLabel"
        }, e("SELECT_MODAL.CRYPTO_TAKE_CONTROL_TEXT")), Kf("button", {
            class: "button",
            onClick: ()=>this.connectWithExtensionHandler()
        }, Kf(hg, null), Kf("span", {
            class: "installExtensionText"
        }, e("CONNECT_WITH_EXTENSION"))))), Kf(Bp, {
            version: t
        })));
    }
    get el() {
        return qf(this);
    }
    static get watchers() {
        return {
            preferDesktop: [
                "updatePreferDesktop"
            ]
        };
    }
};
pg.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
var gg = Object.freeze({
    __proto__: null,
    mm_install_modal: dg,
    mm_pending_modal: ug,
    mm_select_modal: pg
});
;
 //# sourceMappingURL=metamask-sdk.js.map
}}),

};

//# sourceMappingURL=722cc_%40metamask_sdk_dist_browser_es_metamask-sdk_dd87df.js.map