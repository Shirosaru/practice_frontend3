module.exports = {

"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RequestCookies: null,
    ResponseCookies: null,
    stringifyCookie: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function() {
        return _cookies.stringifyCookie;
    }
});
const _cookies = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)"); //# sourceMappingURL=cookies.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MutableRequestCookiesAdapter: null,
    ReadonlyRequestCookiesError: null,
    RequestCookiesAdapter: null,
    appendMutableCookies: null,
    areCookiesMutableInCurrentPhase: null,
    getModifiedCookieValues: null,
    responseCookiesToRequestCookies: null,
    wrapWithMutableAccessCheck: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
        return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function() {
        return areCookiesMutableInCurrentPhase;
    },
    getModifiedCookieValues: function() {
        return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function() {
        return responseCookiesToRequestCookies;
    },
    wrapWithMutableAccessCheck: function() {
        return wrapWithMutableAccessCheck;
    }
});
const _cookies = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const _reflect = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
            if (workStore) {
                workStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function wrapWithMutableAccessCheck(responseCookies) {
    const wrappedCookies = new Proxy(responseCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable('cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable('cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(callingExpression) {
    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new _cookies.RequestCookies(new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
} //# sourceMappingURL=request-cookies.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * This function constructs a promise that will never resolve. This is primarily
 * useful for dynamicIO where we use promise resolution timing to determine which
 * parts of a render can be included in a prerender.
 *
 * @internal
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "makeHangingPromise", {
    enumerable: true,
    get: function() {
        return makeHangingPromise;
    }
});
function makeHangingPromise(signal, expression) {
    const hangingPromise = new Promise((_, reject)=>{
        signal.addEventListener('abort', ()=>{
            reject(new Error(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`));
        }, {
            once: true
        });
    });
    // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
    // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
    // your own promise out of it you'll need to ensure you handle the error when it rejects.
    hangingPromise.catch(ignoreReject);
    return hangingPromise;
}
function ignoreReject() {} //# sourceMappingURL=dynamic-rendering-utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/metadata/metadata-constants.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__'; //# sourceMappingURL=metadata-constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createPostponedAbortSignal: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackFallbackParamAccessed: null,
    trackSynchronousPlatformIOAccessInDev: null,
    trackSynchronousRequestDataAccessInDev: null,
    useDynamicRouteParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackFallbackParamAccessed: function() {
        return trackFallbackParamAccessed;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
const _hooksservercontext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _metadataconstants = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/metadata/metadata-constants.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicExpression: undefined,
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspendedDynamic: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasSyncDynamicErrors: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    }
    if (workUnitStore) {
        if (workUnitStore.type === 'prerender-ppr') {
            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
        }
        if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
// Despite it's name we don't actually abort unless we have a controller to call abort on
// There are times when we let a prerender run long to discover caches where we want the semantics
// of tracking dynamic access without terminating the prerender early
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
    return abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            if (prerenderStore.validating === true) {
                // We always log Request Access in dev at the point of calling the function
                // So we mark the dynamic validation as not requiring it to be printed
                dynamicTracking.syncDynamicLogged = true;
            }
        }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js');
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = new Error(message);
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        _react.default.unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    if ("TURBOPACK compile-time truthy", 1) {
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
            // There are fallback route params, we should track these as dynamic
            // accesses.
            const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
            if (workUnitStore) {
                // We're prerendering with dynamicIO or PPR or both
                if (workUnitStore.type === 'prerender') {
                    // We are in a prerender with dynamicIO semantics
                    // We are going to hang here and never resolve. This will cause the currently
                    // rendering component to effectively be a dynamic hole
                    _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
                } else if (workUnitStore.type === 'prerender-ppr') {
                    // We're prerendering with PPR
                    postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                } else if (workUnitStore.type === 'prerender-legacy') {
                    throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
                }
            }
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasSuspendedDynamic = true;
        return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.hasSyncDynamicErrors = true;
        return;
    } else {
        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function createErrorWithComponentStack(message, componentStack) {
    const error = new Error(message);
    error.stack = 'Error: ' + message + componentStack;
    return error;
}
function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
        syncError = serverDynamic.syncDynamicErrorWithStack;
        syncExpression = serverDynamic.syncDynamicExpression;
        syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        syncError = clientDynamic.syncDynamicErrorWithStack;
        syncExpression = clientDynamic.syncDynamicExpression;
        syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
        syncError = null;
        syncExpression = undefined;
        syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
        if (!syncLogged) {
            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
            // the offending sync error is logged before we exit the build
            console.error(syncError);
        }
        // The actual error should have been logged when the sync access ocurred
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
        for(let i = 0; i < dynamicErrors.length; i++){
            console.error(dynamicErrors[i]);
        }
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
        if (dynamicValidation.hasDynamicMetadata) {
            if (syncError) {
                console.error(syncError);
                throw new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        } else if (dynamicValidation.hasDynamicViewport) {
            if (syncError) {
                console.error(syncError);
                throw new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        }
    }
} //# sourceMappingURL=dynamic-rendering.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Dynamic IO is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else {
            "TURBOPACK unreachable";
        }
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    isRequestAPICallableInsideAfter: null,
    throwWithStaticGenerationBailoutError: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwWithStaticGenerationBailoutError: function() {
        return throwWithStaticGenerationBailoutError;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const _staticgenerationbailout = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)");
// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
function throwWithStaticGenerationBailoutError(route, expression) {
    throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
}
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    // fallthrough
    'then',
    'catch',
    'finally',
    // React Promise extension
    // fallthrough
    'status',
    // React introspection
    'displayName',
    // Common tested properties
    // fallthrough
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/cookies.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cookies", {
    enumerable: true,
    get: function() {
        return cookies;
    }
});
const _requestcookies = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-rsc] (ecmascript)");
const _cookies = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)");
function cookies() {
    const callingExpression = 'cookies';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw new Error(`Route ${workStore.route} used "cookies" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "cookies" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`);
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // cookies object without tracking
            const underlyingCookies = createEmptyCookies();
            return makeUntrackedExoticCookies(underlyingCookies);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw new Error(`Route ${workStore.route} used "cookies" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(`Route ${workStore.route} used "cookies" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            }
        }
        if (workStore.dynamicShouldError) {
            throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We don't track dynamic access here because access will be tracked when you access
                // one of the properties of the cookies object.
                return makeDynamicallyTrackedExoticCookies(workStore.route, workUnitStore);
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We are prerendering with PPR. We need track dynamic access here eagerly
                // to keep continuity with how cookies has worked in PPR without dynamicIO.
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We track dynamic access here so we don't need to wrap the cookies in
                // individual property access tracking.
                (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
            }
        }
        // We fall through to the dynamic context below but we still track dynamic access
        // because in dev we can still error for things like using cookies inside a cache context
        (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
    }
    // cookies is being called in a dynamic context
    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
    let underlyingCookies;
    if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(requestStore)) {
        // We can't conditionally return different types here based on the context.
        // To avoid confusion, we always return the readonly type here.
        underlyingCookies = requestStore.userspaceMutableCookies;
    } else {
        underlyingCookies = requestStore.cookies;
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        return makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, workStore == null ? void 0 : workStore.route);
    } else {
        return makeUntrackedExoticCookies(underlyingCookies);
    }
}
function createEmptyCookies() {
    return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
}
const CachedCookies = new WeakMap();
function makeDynamicallyTrackedExoticCookies(route, prerenderStore) {
    const cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
        return cachedPromise;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`cookies()`');
    CachedCookies.set(prerenderStore, promise);
    Object.defineProperties(promise, {
        [Symbol.iterator]: {
            value: function() {
                const expression = '`cookies()[Symbol.iterator]()`';
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        size: {
            get () {
                const expression = '`cookies().size`';
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        get: {
            value: function get() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().get()`';
                } else {
                    expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        getAll: {
            value: function getAll() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().getAll()`';
                } else {
                    expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        has: {
            value: function has() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().has()`';
                } else {
                    expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        set: {
            value: function set() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().set()`';
                } else {
                    const arg = arguments[0];
                    if (arg) {
                        expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
                    } else {
                        expression = '`cookies().set(...)`';
                    }
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        delete: {
            value: function() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().delete()`';
                } else if (arguments.length === 1) {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
                } else {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
                }
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        clear: {
            value: function clear() {
                const expression = '`cookies().clear()`';
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        toString: {
            value: function toString() {
                const expression = '`cookies().toString()`';
                const error = createCookiesAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        }
    });
    return promise;
}
function makeUntrackedExoticCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    Object.defineProperties(promise, {
        [Symbol.iterator]: {
            value: underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].bind(underlyingCookies) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
            // has extra properties not available on RequestCookie instances.
            polyfilledResponseCookiesIterator.bind(underlyingCookies)
        },
        size: {
            get () {
                return underlyingCookies.size;
            }
        },
        get: {
            value: underlyingCookies.get.bind(underlyingCookies)
        },
        getAll: {
            value: underlyingCookies.getAll.bind(underlyingCookies)
        },
        has: {
            value: underlyingCookies.has.bind(underlyingCookies)
        },
        set: {
            value: underlyingCookies.set.bind(underlyingCookies)
        },
        delete: {
            value: underlyingCookies.delete.bind(underlyingCookies)
        },
        clear: {
            value: typeof underlyingCookies.clear === 'function' ? underlyingCookies.clear.bind(underlyingCookies) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
            // has extra properties not available on RequestCookie instances.
            polyfilledResponseCookiesClear.bind(underlyingCookies, promise)
        },
        toString: {
            value: underlyingCookies.toString.bind(underlyingCookies)
        }
    });
    return promise;
}
function makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, route) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = new Promise((resolve)=>(0, _scheduler.scheduleImmediate)(()=>resolve(underlyingCookies)));
    CachedCookies.set(underlyingCookies, promise);
    Object.defineProperties(promise, {
        [Symbol.iterator]: {
            value: function() {
                const expression = '`...cookies()` or similar iteration';
                syncIODev(route, expression);
                return underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].apply(underlyingCookies, arguments) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                // has extra properties not available on RequestCookie instances.
                polyfilledResponseCookiesIterator.call(underlyingCookies);
            },
            writable: false
        },
        size: {
            get () {
                const expression = '`cookies().size`';
                syncIODev(route, expression);
                return underlyingCookies.size;
            }
        },
        get: {
            value: function get() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().get()`';
                } else {
                    expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.get.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        getAll: {
            value: function getAll() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().getAll()`';
                } else {
                    expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.getAll.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        has: {
            value: function get() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().has()`';
                } else {
                    expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.has.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        set: {
            value: function set() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().set()`';
                } else {
                    const arg = arguments[0];
                    if (arg) {
                        expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
                    } else {
                        expression = '`cookies().set(...)`';
                    }
                }
                syncIODev(route, expression);
                return underlyingCookies.set.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        delete: {
            value: function() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().delete()`';
                } else if (arguments.length === 1) {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
                } else {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.delete.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        clear: {
            value: function clear() {
                const expression = '`cookies().clear()`';
                syncIODev(route, expression);
                // @ts-ignore clear is defined in RequestCookies implementation but not in the type
                return typeof underlyingCookies.clear === 'function' ? underlyingCookies.clear.apply(underlyingCookies, arguments) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                // has extra properties not available on RequestCookie instances.
                polyfilledResponseCookiesClear.call(underlyingCookies, promise);
            },
            writable: false
        },
        toString: {
            value: function toString() {
                const expression = '`cookies().toString()` or implicit casting';
                syncIODev(route, expression);
                return underlyingCookies.toString.apply(underlyingCookies, arguments);
            },
            writable: false
        }
    });
    return promise;
}
function describeNameArg(arg) {
    return typeof arg === 'object' && arg !== null && typeof arg.name === 'string' ? `'${arg.name}'` : typeof arg === 'string' ? `'${arg}'` : '...';
}
function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const noop = ()=>{};
const warnForSyncAccess = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
function createCookiesAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return new Error(`${prefix}used ${expression}. ` + `\`cookies()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function polyfilledResponseCookiesIterator() {
    return this.getAll().map((c)=>[
            c.name,
            c
        ]).values();
}
function polyfilledResponseCookiesClear(returnable) {
    for (const cookie of this.getAll()){
        this.delete(cookie.name);
    }
    return returnable;
} //# sourceMappingURL=cookies.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HeadersAdapter: null,
    ReadonlyHeadersError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HeadersAdapter: function() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
    }
});
const _reflect = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/headers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "headers", {
    enumerable: true,
    get: function() {
        return headers;
    }
});
const _headers = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)");
function headers() {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw new Error(`Route ${workStore.route} used "headers" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`);
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
            return makeUntrackedExoticHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw new Error(`Route ${workStore.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(`Route ${workStore.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            }
        }
        if (workStore.dynamicShouldError) {
            throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                // We don't track dynamic access here because access will be tracked when you access
                // one of the properties of the headers object.
                return makeDynamicallyTrackedExoticHeaders(workStore.route, workUnitStore);
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                // We are prerendering with PPR. We need track dynamic access here eagerly
                // to keep continuity with how headers has worked in PPR without dynamicIO.
                // TODO consider switching the semantic to throw on property access instead
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, 'headers', workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // Legacy Prerender
                // We are in a legacy static generation mode while prerendering
                // We track dynamic access here so we don't need to wrap the headers in
                // individual property access tracking.
                (0, _dynamicrendering.throwToInterruptStaticGeneration)('headers', workStore, workUnitStore);
            }
        }
        // We fall through to the dynamic context below but we still track dynamic access
        // because in dev we can still error for things like using headers inside a cache context
        (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
    }
    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)('headers');
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        return makeUntrackedExoticHeadersWithDevWarnings(requestStore.headers, workStore == null ? void 0 : workStore.route);
    } else {
        return makeUntrackedExoticHeaders(requestStore.headers);
    }
}
const CachedHeaders = new WeakMap();
function makeDynamicallyTrackedExoticHeaders(route, prerenderStore) {
    const cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`headers()`');
    CachedHeaders.set(prerenderStore, promise);
    Object.defineProperties(promise, {
        append: {
            value: function append() {
                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        delete: {
            value: function _delete() {
                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        get: {
            value: function get() {
                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        has: {
            value: function has() {
                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        set: {
            value: function set() {
                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        getSetCookie: {
            value: function getSetCookie() {
                const expression = '`headers().getSetCookie()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        forEach: {
            value: function forEach() {
                const expression = '`headers().forEach(...)`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        keys: {
            value: function keys() {
                const expression = '`headers().keys()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        values: {
            value: function values() {
                const expression = '`headers().values()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        entries: {
            value: function entries() {
                const expression = '`headers().entries()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        },
        [Symbol.iterator]: {
            value: function() {
                const expression = '`headers()[Symbol.iterator]()`';
                const error = createHeadersAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
        }
    });
    return promise;
}
function makeUntrackedExoticHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    Object.defineProperties(promise, {
        append: {
            value: underlyingHeaders.append.bind(underlyingHeaders)
        },
        delete: {
            value: underlyingHeaders.delete.bind(underlyingHeaders)
        },
        get: {
            value: underlyingHeaders.get.bind(underlyingHeaders)
        },
        has: {
            value: underlyingHeaders.has.bind(underlyingHeaders)
        },
        set: {
            value: underlyingHeaders.set.bind(underlyingHeaders)
        },
        getSetCookie: {
            value: underlyingHeaders.getSetCookie.bind(underlyingHeaders)
        },
        forEach: {
            value: underlyingHeaders.forEach.bind(underlyingHeaders)
        },
        keys: {
            value: underlyingHeaders.keys.bind(underlyingHeaders)
        },
        values: {
            value: underlyingHeaders.values.bind(underlyingHeaders)
        },
        entries: {
            value: underlyingHeaders.entries.bind(underlyingHeaders)
        },
        [Symbol.iterator]: {
            value: underlyingHeaders[Symbol.iterator].bind(underlyingHeaders)
        }
    });
    return promise;
}
function makeUntrackedExoticHeadersWithDevWarnings(underlyingHeaders, route) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = new Promise((resolve)=>(0, _scheduler.scheduleImmediate)(()=>resolve(underlyingHeaders)));
    CachedHeaders.set(underlyingHeaders, promise);
    Object.defineProperties(promise, {
        append: {
            value: function append() {
                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
                syncIODev(route, expression);
                return underlyingHeaders.append.apply(underlyingHeaders, arguments);
            }
        },
        delete: {
            value: function _delete() {
                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.delete.apply(underlyingHeaders, arguments);
            }
        },
        get: {
            value: function get() {
                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.get.apply(underlyingHeaders, arguments);
            }
        },
        has: {
            value: function has() {
                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.has.apply(underlyingHeaders, arguments);
            }
        },
        set: {
            value: function set() {
                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
                syncIODev(route, expression);
                return underlyingHeaders.set.apply(underlyingHeaders, arguments);
            }
        },
        getSetCookie: {
            value: function getSetCookie() {
                const expression = '`headers().getSetCookie()`';
                syncIODev(route, expression);
                return underlyingHeaders.getSetCookie.apply(underlyingHeaders, arguments);
            }
        },
        forEach: {
            value: function forEach() {
                const expression = '`headers().forEach(...)`';
                syncIODev(route, expression);
                return underlyingHeaders.forEach.apply(underlyingHeaders, arguments);
            }
        },
        keys: {
            value: function keys() {
                const expression = '`headers().keys()`';
                syncIODev(route, expression);
                return underlyingHeaders.keys.apply(underlyingHeaders, arguments);
            }
        },
        values: {
            value: function values() {
                const expression = '`headers().values()`';
                syncIODev(route, expression);
                return underlyingHeaders.values.apply(underlyingHeaders, arguments);
            }
        },
        entries: {
            value: function entries() {
                const expression = '`headers().entries()`';
                syncIODev(route, expression);
                return underlyingHeaders.entries.apply(underlyingHeaders, arguments);
            }
        },
        [Symbol.iterator]: {
            value: function() {
                const expression = '`...headers()` or similar iteration';
                syncIODev(route, expression);
                return underlyingHeaders[Symbol.iterator].apply(underlyingHeaders, arguments);
            }
        }
    });
    return promise;
}
function describeNameArg(arg) {
    return typeof arg === 'string' ? `'${arg}'` : '...';
}
function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const noop = ()=>{};
const warnForSyncAccess = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
function createHeadersAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return new Error(`${prefix}used ${expression}. ` + `\`headers()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
} //# sourceMappingURL=headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/draft-mode.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "draftMode", {
    enumerable: true,
    get: function() {
        return draftMode;
    }
});
const _workunitasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_require__("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _hooksservercontext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
function draftMode() {
    const callingExpression = 'draftMode';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache' || workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr' || workUnitStore.type === 'prerender-legacy') {
            // Return empty draft mode
            if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
                const route = workStore == null ? void 0 : workStore.route;
                return createExoticDraftModeWithDevWarnings(null, route);
            } else {
                return createExoticDraftMode(null);
            }
        }
    }
    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
    const cachedDraftMode = CachedDraftModes.get(requestStore.draftMode);
    if (cachedDraftMode) {
        return cachedDraftMode;
    }
    let promise;
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        promise = createExoticDraftModeWithDevWarnings(requestStore.draftMode, route);
    } else {
        promise = createExoticDraftMode(requestStore.draftMode);
    }
    CachedDraftModes.set(requestStore.draftMode, promise);
    return promise;
}
const CachedDraftModes = new WeakMap();
function createExoticDraftMode(underlyingProvider) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    Object.defineProperty(promise, 'isEnabled', {
        get () {
            return instance.isEnabled;
        },
        set (newValue) {
            Object.defineProperty(promise, 'isEnabled', {
                value: newValue,
                writable: true,
                enumerable: true
            });
        },
        enumerable: true,
        configurable: true
    });
    promise.enable = instance.enable.bind(instance);
    promise.disable = instance.disable.bind(instance);
    return promise;
}
function createExoticDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    Object.defineProperty(promise, 'isEnabled', {
        get () {
            const expression = '`draftMode().isEnabled`';
            syncIODev(route, expression);
            return instance.isEnabled;
        },
        set (newValue) {
            Object.defineProperty(promise, 'isEnabled', {
                value: newValue,
                writable: true,
                enumerable: true
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(promise, 'enable', {
        value: function get() {
            const expression = '`draftMode().enable()`';
            syncIODev(route, expression);
            return instance.enable.apply(instance, arguments);
        }
    });
    Object.defineProperty(promise, 'disable', {
        value: function get() {
            const expression = '`draftMode().disable()`';
            syncIODev(route, expression);
            return instance.disable.apply(instance, arguments);
        }
    });
    return promise;
}
class DraftMode {
    constructor(provider){
        this._provider = provider;
    }
    get isEnabled() {
        if (this._provider !== null) {
            return this._provider.isEnabled;
        }
        return false;
    }
    enable() {
        // We we have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        trackDynamicDraftMode('draftMode().enable()');
        if (this._provider !== null) {
            this._provider.enable();
        }
    }
    disable() {
        trackDynamicDraftMode('draftMode().disable()');
        if (this._provider !== null) {
            this._provider.disable();
        }
    }
}
function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const noop = ()=>{};
const warnForSyncAccess = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
function createDraftModeAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function trackDynamicDraftMode(expression) {
    const store = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (store) {
        // We we have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        if (workUnitStore) {
            if (workUnitStore.type === 'cache') {
                throw new Error(`Route ${store.route} used "${expression}" inside "use cache". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            } else if (workUnitStore.type === 'unstable-cache') {
                throw new Error(`Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            } else if (workUnitStore.phase === 'after') {
                throw new Error(`Route ${store.route} used "${expression}" inside \`after\`. The enabled status of draftMode can be read inside \`after\` but you cannot enable or disable draftMode. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`);
            }
        }
        if (store.dynamicShouldError) {
            throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        }
        if (workUnitStore) {
            if (workUnitStore.type === 'prerender') {
                // dynamicIO Prerender
                const error = new Error(`Route ${store.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(store.route, expression, error, workUnitStore);
            } else if (workUnitStore.type === 'prerender-ppr') {
                // PPR Prerender
                (0, _dynamicrendering.postponeWithTracking)(store.route, expression, workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                // legacy Prerender
                workUnitStore.revalidate = 0;
                const err = new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
                workUnitStore.usedDynamic = true;
            }
        }
    }
} //# sourceMappingURL=draft-mode.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/headers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports.cookies = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/cookies.js [app-rsc] (ecmascript)").cookies;
module.exports.headers = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/headers.js [app-rsc] (ecmascript)").headers;
module.exports.draftMode = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/request/draft-mode.js [app-rsc] (ecmascript)").draftMode;
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deserialize": (()=>deserialize)
});
function deserialize(value, reviver) {
    return JSON.parse(value, (key, value_)=>{
        let value = value_;
        if (value?.__type === 'bigint') value = BigInt(value.value);
        if (value?.__type === 'Map') value = new Map(value.value);
        return reviver?.(key, value) ?? value;
    });
} //# sourceMappingURL=deserialize.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Get the reference key for the circular value
 *
 * @param keys the keys to build the reference key from
 * @param cutoff the maximum number of keys to include
 * @returns the reference key
 */ __turbopack_esm__({
    "serialize": (()=>serialize)
});
function getReferenceKey(keys, cutoff) {
    return keys.slice(0, cutoff).join('.') || '.';
}
/**
 * Faster `Array.prototype.indexOf` implementation build for slicing / splicing
 *
 * @param array the array to match the value in
 * @param value the value to match
 * @returns the matching index, or -1
 */ function getCutoff(array, value) {
    const { length } = array;
    for(let index = 0; index < length; ++index){
        if (array[index] === value) {
            return index + 1;
        }
    }
    return 0;
}
/**
 * Create a replacer method that handles circular values
 *
 * @param [replacer] a custom replacer to use for non-circular values
 * @param [circularReplacer] a custom replacer to use for circular methods
 * @returns the value to stringify
 */ function createReplacer(replacer, circularReplacer) {
    const hasReplacer = typeof replacer === 'function';
    const hasCircularReplacer = typeof circularReplacer === 'function';
    const cache = [];
    const keys = [];
    return function replace(key, value) {
        if (typeof value === 'object') {
            if (cache.length) {
                const thisCutoff = getCutoff(cache, this);
                if (thisCutoff === 0) {
                    cache[cache.length] = this;
                } else {
                    cache.splice(thisCutoff);
                    keys.splice(thisCutoff);
                }
                keys[keys.length] = key;
                const valueCutoff = getCutoff(cache, value);
                if (valueCutoff !== 0) {
                    return hasCircularReplacer ? circularReplacer.call(this, key, value, getReferenceKey(keys, valueCutoff)) : `[ref=${getReferenceKey(keys, valueCutoff)}]`;
                }
            } else {
                cache[0] = value;
                keys[0] = key;
            }
        }
        return hasReplacer ? replacer.call(this, key, value) : value;
    };
}
function serialize(value, replacer, indent, circularReplacer) {
    return JSON.stringify(value, createReplacer((key, value_)=>{
        let value = value_;
        if (typeof value === 'bigint') value = {
            __type: 'bigint',
            value: value_.toString()
        };
        if (value instanceof Map) value = {
            __type: 'Map',
            value: Array.from(value_.entries())
        };
        return replacer?.(key, value) ?? value;
    }, circularReplacer), indent ?? undefined);
} //# sourceMappingURL=serialize.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/createStorage.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createStorage": (()=>createStorage),
    "getDefaultStorage": (()=>getDefaultStorage),
    "noopStorage": (()=>noopStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-rsc] (ecmascript)");
;
;
function createStorage(parameters) {
    const { deserialize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deserialize"], key: prefix = 'wagmi', serialize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serialize"], storage = noopStorage } = parameters;
    function unwrap(value) {
        if (value instanceof Promise) return value.then((x)=>x).catch(()=>null);
        return value;
    }
    return {
        ...storage,
        key: prefix,
        async getItem (key, defaultValue) {
            const value = storage.getItem(`${prefix}.${key}`);
            const unwrapped = await unwrap(value);
            if (unwrapped) return deserialize(unwrapped) ?? null;
            return defaultValue ?? null;
        },
        async setItem (key, value) {
            const storageKey = `${prefix}.${key}`;
            if (value === null) await unwrap(storage.removeItem(storageKey));
            else await unwrap(storage.setItem(storageKey, serialize(value)));
        },
        async removeItem (key) {
            await unwrap(storage.removeItem(`${prefix}.${key}`));
        }
    };
}
const noopStorage = {
    getItem: ()=>null,
    setItem: ()=>{},
    removeItem: ()=>{}
};
function getDefaultStorage() {
    const storage = (()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return noopStorage;
    })();
    return {
        getItem (key) {
            return storage.getItem(key);
        },
        removeItem (key) {
            storage.removeItem(key);
        },
        setItem (key, value) {
            try {
                storage.setItem(key, value);
            // silence errors by default (QuotaExceededError, SecurityError, etc.)
            } catch  {}
        }
    };
} //# sourceMappingURL=createStorage.js.map
}}),
"[project]/node_modules/.pnpm/zustand@5.0.0_@types+react@19.0.1_react@19.0.0_use-sync-external-store@1.4.0_react@19.0.0_/node_modules/zustand/esm/vanilla.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createStore": (()=>createStore)
});
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}}),
"[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events){
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++){
        ee[i] = handlers[i].fn;
    }
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++){
            args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++){
                        args[j - 1] = arguments[j];
                    }
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
        }
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++){
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
            }
        }
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = EventEmitter;
}
}}),
"[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-rsc] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
}}),
"[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-rsc] (ecmascript) <export default as EventEmitter>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EventEmitter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/createEmitter.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Emitter": (()=>Emitter),
    "createEmitter": (()=>createEmitter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-rsc] (ecmascript) <export default as EventEmitter>");
;
class Emitter {
    constructor(uid){
        Object.defineProperty(this, "uid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: uid
        });
        Object.defineProperty(this, "_emitter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]()
        });
    }
    on(eventName, fn) {
        this._emitter.on(eventName, fn);
    }
    once(eventName, fn) {
        this._emitter.once(eventName, fn);
    }
    off(eventName, fn) {
        this._emitter.off(eventName, fn);
    }
    emit(eventName, ...params) {
        const data = params[0];
        this._emitter.emit(eventName, {
            uid: this.uid,
            ...data
        });
    }
    listenerCount(eventName) {
        return this._emitter.listenerCount(eventName);
    }
}
function createEmitter(uid) {
    return new Emitter(uid);
} //# sourceMappingURL=createEmitter.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/uid.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "uid": (()=>uid)
});
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for(let i = 0; i < size; i++){
            buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
} //# sourceMappingURL=uid.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createConnector": (()=>createConnector)
});
function createConnector(createConnectorFn) {
    return createConnectorFn;
} //# sourceMappingURL=createConnector.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/version.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "version": (()=>version)
});
const version = '2.16.4'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getVersion": (()=>getVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/version.js [app-rsc] (ecmascript)");
;
const getVersion = ()=>`@wagmi/core@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/base.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseError": (()=>BaseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-rsc] (ecmascript)");
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseError_instances, _BaseError_walk;
;
class BaseError extends Error {
    get docsBaseUrl() {
        return 'https://wagmi.sh/core';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getVersion"])();
    }
    constructor(shortMessage, options = {}){
        super();
        _BaseError_instances.add(this);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiCoreError'
        });
        const details = options.cause instanceof BaseError ? options.cause.details : options.cause?.message ? options.cause.message : options.details;
        const docsPath = options.cause instanceof BaseError ? options.cause.docsPath || options.docsPath : options.docsPath;
        this.message = [
            shortMessage || 'An error occurred.',
            '',
            ...options.metaMessages ? [
                ...options.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: ${this.docsBaseUrl}${docsPath}.html${options.docsSlug ? `#${options.docsSlug}` : ''}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: ${this.version}`
        ].join('\n');
        if (options.cause) this.cause = options.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = options.metaMessages;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, this, fn);
    }
}
_BaseError_instances = new WeakSet(), _BaseError_walk = function _BaseError_walk(err, fn) {
    if (fn?.(err)) return err;
    if (err.cause) return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, err.cause, fn);
    return err;
}; //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ProviderNotFoundError": (()=>ProviderNotFoundError),
    "SwitchChainNotSupportedError": (()=>SwitchChainNotSupportedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/base.js [app-rsc] (ecmascript)");
;
class ProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Provider not found.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderNotFoundError'
        });
    }
}
class SwitchChainNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connector }){
        super(`"${connector.name}" does not support programmatic chain switching.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SwitchChainNotSupportedError'
        });
    }
} //# sourceMappingURL=connector.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/lru.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Map with a LRU (Least recently used) policy.
 *
 * @link https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */ __turbopack_esm__({
    "LruMap": (()=>LruMap)
});
class LruMap extends Map {
    constructor(size){
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey) this.delete(firstKey);
        }
        return this;
    }
} //# sourceMappingURL=lru.js.map
}}),
"[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Internal assertion helpers.
 * @module
 */ /** Asserts something is positive integer. */ __turbopack_esm__({
    "abytes": (()=>abytes),
    "aexists": (()=>aexists),
    "ahash": (()=>ahash),
    "anumber": (()=>anumber),
    "aoutput": (()=>aoutput)
});
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */ function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
/** Asserts something is Uint8Array. */ function abytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */ function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */ function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */ function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
;
 //# sourceMappingURL=_assert.js.map
}}),
"[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/cryptoNode.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Internal webcrypto alias.
 * We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
 * Falls back to Node.js built-in crypto for Node.js <=v14.
 * See utils.ts for details.
 * @module
 */ // @ts-ignore
__turbopack_esm__({
    "crypto": (()=>crypto)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const crypto = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ === 'object' && 'webcrypto' in __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__.webcrypto : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ === 'object' && 'randomBytes' in __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ : undefined; //# sourceMappingURL=cryptoNode.js.map
}}),
"[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
__turbopack_esm__({
    "Hash": (()=>Hash),
    "asyncLoop": (()=>asyncLoop),
    "byteSwap": (()=>byteSwap),
    "byteSwap32": (()=>byteSwap32),
    "byteSwapIfBE": (()=>byteSwapIfBE),
    "bytesToHex": (()=>bytesToHex),
    "checkOpts": (()=>checkOpts),
    "concatBytes": (()=>concatBytes),
    "createView": (()=>createView),
    "hexToBytes": (()=>hexToBytes),
    "isBytes": (()=>isBytes),
    "isLE": (()=>isLE),
    "nextTick": (()=>nextTick),
    "randomBytes": (()=>randomBytes),
    "rotl": (()=>rotl),
    "rotr": (()=>rotr),
    "toBytes": (()=>toBytes),
    "u32": (()=>u32),
    "u8": (()=>u8),
    "utf8ToBytes": (()=>utf8ToBytes),
    "wrapConstructor": (()=>wrapConstructor),
    "wrapConstructorWithOpts": (()=>wrapConstructorWithOpts),
    "wrapXOFConstructorWithOpts": (()=>wrapXOFConstructorWithOpts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/cryptoNode.js [app-rsc] (ecmascript)");
;
;
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const byteSwapIfBE = isLE ? (n)=>n : (n)=>byteSwap(n);
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('utf8ToBytes expected string, got ' + typeof str);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(data);
    return data;
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function randomBytes(bytesLength = 32) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"].getRandomValues === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"].getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"].randomBytes === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"].randomBytes(bytesLength);
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/_u64.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */ __turbopack_esm__({
    "add": (()=>add),
    "add3H": (()=>add3H),
    "add3L": (()=>add3L),
    "add4H": (()=>add4H),
    "add4L": (()=>add4L),
    "add5H": (()=>add5H),
    "add5L": (()=>add5L),
    "default": (()=>__TURBOPACK__default__export__),
    "fromBig": (()=>fromBig),
    "rotlBH": (()=>rotlBH),
    "rotlBL": (()=>rotlBL),
    "rotlSH": (()=>rotlSH),
    "rotlSL": (()=>rotlSL),
    "rotr32H": (()=>rotr32H),
    "rotr32L": (()=>rotr32L),
    "rotrBH": (()=>rotrBH),
    "rotrBL": (()=>rotrBL),
    "rotrSH": (()=>rotrSH),
    "rotrSL": (()=>rotrSL),
    "shrSH": (()=>shrSH),
    "shrSL": (()=>shrSL),
    "split": (()=>split),
    "toBig": (()=>toBig)
});
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}}),
"[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/sha3.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ __turbopack_esm__({
    "Keccak": (()=>Keccak),
    "keccakP": (()=>keccakP),
    "keccak_224": (()=>keccak_224),
    "keccak_256": (()=>keccak_256),
    "keccak_384": (()=>keccak_384),
    "keccak_512": (()=>keccak_512),
    "sha3_224": (()=>sha3_224),
    "sha3_256": (()=>sha3_256),
    "sha3_384": (()=>sha3_384),
    "sha3_512": (()=>sha3_512),
    "shake128": (()=>shake128),
    "shake256": (()=>shake256)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/_u64.js [app-rsc] (ecmascript)");
;
;
;
// Various per round constants calculations
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
class Keccak extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hash"] {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (0 >= this.blockLen || this.blockLen >= 200) throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    keccak() {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLE"]) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["byteSwap32"])(this.state32);
        keccakP(this.state32, this.rounds);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLE"]) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["byteSwap32"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        const { blockLen, state } = this;
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBytes"])(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const gen = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new Keccak(blockLen, suffix, outputLen));
const sha3_224 = /* @__PURE__ */ gen(0x06, 144, 224 / 8);
const sha3_256 = /* @__PURE__ */ gen(0x06, 136, 256 / 8);
const sha3_384 = /* @__PURE__ */ gen(0x06, 104, 384 / 8);
const sha3_512 = /* @__PURE__ */ gen(0x06, 72, 512 / 8);
const keccak_224 = /* @__PURE__ */ gen(0x01, 144, 224 / 8);
const keccak_256 = /* @__PURE__ */ gen(0x01, 136, 256 / 8);
const keccak_384 = /* @__PURE__ */ gen(0x01, 104, 384 / 8);
const keccak_512 = /* @__PURE__ */ gen(0x01, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapXOFConstructorWithOpts"])((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 128 / 8);
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 256 / 8); //# sourceMappingURL=sha3.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/isHex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isHex": (()=>isHex)
});
function isHex(value, { strict = true } = {}) {
    if (!value) return false;
    if (typeof value !== 'string') return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
} //# sourceMappingURL=isHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/size.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "size": (()=>size)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/isHex.js [app-rsc] (ecmascript)");
;
function size(value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHex"])(value, {
        strict: false
    })) return Math.ceil((value.length - 2) / 2);
    return value.length;
} //# sourceMappingURL=size.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/version.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "version": (()=>version)
});
const version = '2.23.4'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseError": (()=>BaseError),
    "setErrorConfig": (()=>setErrorConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/version.js [app-rsc] (ecmascript)");
;
let errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = '', docsSlug })=>docsPath ? `${docsBaseUrl ?? 'https://viem.sh'}${docsPath}${docsSlug ? `#${docsSlug}` : ''}` : undefined,
    version: `viem@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"]}`
};
function setErrorConfig(config) {
    errorConfig = config;
}
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = (()=>{
            if (args.cause instanceof BaseError) return args.cause.details;
            if (args.cause?.message) return args.cause.message;
            return args.details;
        })();
        const docsPath = (()=>{
            if (args.cause instanceof BaseError) return args.cause.docsPath || args.docsPath;
            return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({
            ...args,
            docsPath
        });
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsUrl ? [
                `Docs: ${docsUrl}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            ...errorConfig.version ? [
                `Version: ${errorConfig.version}`
            ] : []
        ].join('\n');
        super(message, args.cause ? {
            cause: args.cause
        } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"];
    }
    walk(fn) {
        return walk(this, fn);
    }
}
function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause !== undefined) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/encoding.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IntegerOutOfRangeError": (()=>IntegerOutOfRangeError),
    "InvalidBytesBooleanError": (()=>InvalidBytesBooleanError),
    "InvalidHexBooleanError": (()=>InvalidHexBooleanError),
    "InvalidHexValueError": (()=>InvalidHexValueError),
    "SizeOverflowError": (()=>SizeOverflowError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
class IntegerOutOfRangeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ max, min, signed, size, value }){
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, {
            name: 'IntegerOutOfRangeError'
        });
    }
}
class InvalidBytesBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(bytes){
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: 'InvalidBytesBooleanError'
        });
    }
}
class InvalidHexBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(hex){
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, {
            name: 'InvalidHexBooleanError'
        });
    }
}
class InvalidHexValueError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`, {
            name: 'InvalidHexValueError'
        });
    }
}
class SizeOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, {
            name: 'SizeOverflowError'
        });
    }
} //# sourceMappingURL=encoding.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/trim.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "trim": (()=>trim)
});
function trim(hexOrBytes, { dir = 'left' } = {}) {
    let data = typeof hexOrBytes === 'string' ? hexOrBytes.replace('0x', '') : hexOrBytes;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === 'string') {
        if (data.length === 1 && dir === 'right') data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
} //# sourceMappingURL=trim.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "assertSize": (()=>assertSize),
    "fromHex": (()=>fromHex),
    "hexToBigInt": (()=>hexToBigInt),
    "hexToBool": (()=>hexToBool),
    "hexToNumber": (()=>hexToNumber),
    "hexToString": (()=>hexToString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/size.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toBytes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/trim.js [app-rsc] (ecmascript)");
;
;
;
;
function assertSize(hexOrBytes, { size }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(hexOrBytes) > size) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SizeOverflowError"]({
        givenSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(hexOrBytes),
        maxSize: size
    });
}
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return hexToNumber(hex, opts);
    if (to === 'bigint') return hexToBigInt(hex, opts);
    if (to === 'string') return hexToString(hex, opts);
    if (to === 'boolean') return hexToBool(hex, opts);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(hex, opts);
}
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size) assertSize(hex, {
        size: opts.size
    });
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << BigInt(size) * 8n - 1n) - 1n;
    if (value <= max) return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, {
            size: opts.size
        });
        hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(hex);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(hex) === '0x00') return false;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(hex) === '0x01') return true;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidHexBooleanError"](hex);
}
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
function hexToString(hex, opts = {}) {
    let bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(hex);
    if (opts.size) {
        assertSize(bytes, {
            size: opts.size
        });
        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
} //# sourceMappingURL=fromHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/data.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidBytesLengthError": (()=>InvalidBytesLengthError),
    "SizeExceedsPaddingSizeError": (()=>SizeExceedsPaddingSizeError),
    "SliceOffsetOutOfBoundsError": (()=>SliceOffsetOutOfBoundsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
class SliceOffsetOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`, {
            name: 'SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, {
            name: 'SizeExceedsPaddingSizeError'
        });
    }
}
class InvalidBytesLengthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size} ${type} long.`, {
            name: 'InvalidBytesLengthError'
        });
    }
} //# sourceMappingURL=data.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/pad.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "pad": (()=>pad),
    "padBytes": (()=>padBytes),
    "padHex": (()=>padHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/data.js [app-rsc] (ecmascript)");
;
function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string') return padHex(hexOrBytes, {
        dir,
        size
    });
    return padBytes(hexOrBytes, {
        dir,
        size
    });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null) return bytes;
    if (bytes.length > size) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: bytes.length,
        targetSize: size,
        type: 'bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
} //# sourceMappingURL=pad.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "boolToHex": (()=>boolToHex),
    "bytesToHex": (()=>bytesToHex),
    "numberToHex": (()=>numberToHex),
    "stringToHex": (()=>stringToHex),
    "toHex": (()=>toHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/pad.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/encoding.js [app-rsc] (ecmascript)");
;
;
;
const hexes = /*#__PURE__*/ Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean') return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(hex, {
            size: opts.size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pad"])(hex, {
            size: opts.size
        });
    }
    return hex;
}
function bytesToHex(value, opts = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++){
        string += hexes[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(hex, {
            size: opts.size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pad"])(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    return hex;
}
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value > maxValue || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntegerOutOfRangeError"]({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`
        });
    }
    const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
    if (size) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pad"])(hex, {
        size
    });
    return hex;
}
const encoder = /*#__PURE__*/ new TextEncoder();
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
} //# sourceMappingURL=toHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toBytes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "boolToBytes": (()=>boolToBytes),
    "hexToBytes": (()=>hexToBytes),
    "numberToBytes": (()=>numberToBytes),
    "stringToBytes": (()=>stringToBytes),
    "toBytes": (()=>toBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/isHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/pad.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
;
;
;
;
;
const encoder = /*#__PURE__*/ new TextEncoder();
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToBytes(value, opts);
    if (typeof value === 'boolean') return boolToBytes(value, opts);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHex"])(value)) return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(bytes, {
            size: opts.size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pad"])(bytes, {
            size: opts.size
        });
    }
    return bytes;
}
// We use very optimized technique to convert hex string to byte array
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
    return undefined;
}
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(hex, {
            size: opts.size
        });
        hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pad"])(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"](`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function numberToBytes(value, opts) {
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(value, opts);
    return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(bytes, {
            size: opts.size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pad"])(bytes, {
            dir: 'right',
            size: opts.size
        });
    }
    return bytes;
} //# sourceMappingURL=toBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/keccak256.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "keccak256": (()=>keccak256)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/sha3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/isHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toBytes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
;
;
;
;
function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keccak_256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHex"])(value, {
        strict: false
    }) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBytes"])(value) : value);
    if (to === 'bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(bytes);
} //# sourceMappingURL=keccak256.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/isAddress.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isAddress": (()=>isAddress),
    "isAddressCache": (()=>isAddressCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/lru.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/getAddress.js [app-rsc] (ecmascript)");
;
;
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
const isAddressCache = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LruMap"](8192);
function isAddress(address, options) {
    const { strict = true } = options ?? {};
    const cacheKey = `${address}.${strict}`;
    if (isAddressCache.has(cacheKey)) return isAddressCache.get(cacheKey);
    const result = (()=>{
        if (!addressRegex.test(address)) return false;
        if (address.toLowerCase() === address) return true;
        if (strict) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checksumAddress"])(address) === address;
        return true;
    })();
    isAddressCache.set(cacheKey, result);
    return result;
} //# sourceMappingURL=isAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/address.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidAddressError": (()=>InvalidAddressError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
class InvalidAddressError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address }){
        super(`Address "${address}" is invalid.`, {
            metaMessages: [
                '- Address must be a hex value of 20 bytes (40 hex characters).',
                '- Address must match its checksum counterpart.'
            ],
            name: 'InvalidAddressError'
        });
    }
} //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/getAddress.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checksumAddress": (()=>checksumAddress),
    "getAddress": (()=>getAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/lru.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/keccak256.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toBytes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/isAddress.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/address.js [app-rsc] (ecmascript)");
;
;
;
;
;
const checksumAddressCache = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LruMap"](8192);
function checksumAddress(address_, /**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */ chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`)) return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringToBytes"])(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    const result = `0x${address.join('')}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}
function getAddress(address, /**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */ chainId) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAddress"])(address, {
        strict: false
    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address
    });
    return checksumAddress(address, chainId);
} //# sourceMappingURL=getAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getContractAddress": (()=>getContractAddress),
    "getUrl": (()=>getUrl)
});
const getContractAddress = (address)=>address;
const getUrl = (url)=>url; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/stringify.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stringify": (()=>stringify)
});
const stringify = (value, replacer, space)=>JSON.stringify(value, (key, value_)=>{
        const value = typeof value_ === 'bigint' ? value_.toString() : value_;
        return typeof replacer === 'function' ? replacer(key, value) : value;
    }, space); //# sourceMappingURL=stringify.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/request.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HttpRequestError": (()=>HttpRequestError),
    "RpcRequestError": (()=>RpcRequestError),
    "SocketClosedError": (()=>SocketClosedError),
    "TimeoutError": (()=>TimeoutError),
    "WebSocketRequestError": (()=>WebSocketRequestError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
;
;
class HttpRequestError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ body, cause, details, headers, status, url }){
        super('HTTP request failed.', {
            cause,
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUrl"])(url)}`,
                body && `Request body: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(body)}`
            ].filter(Boolean),
            name: 'HttpRequestError'
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
class WebSocketRequestError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ body, cause, details, url }){
        super('WebSocket request failed.', {
            cause,
            details,
            metaMessages: [
                `URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUrl"])(url)}`,
                body && `Request body: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(body)}`
            ].filter(Boolean),
            name: 'WebSocketRequestError'
        });
    }
}
class RpcRequestError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ body, error, url }){
        super('RPC Request failed.', {
            cause: error,
            details: error.message,
            metaMessages: [
                `URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUrl"])(url)}`,
                `Request body: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(body)}`
            ],
            name: 'RpcRequestError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
        this.data = error.data;
    }
}
class SocketClosedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ url } = {}){
        super('The socket has been closed.', {
            metaMessages: [
                url && `URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUrl"])(url)}`
            ].filter(Boolean),
            name: 'SocketClosedError'
        });
    }
}
class TimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ body, url }){
        super('The request took too long to respond.', {
            details: 'The request timed out.',
            metaMessages: [
                `URL: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUrl"])(url)}`,
                `Request body: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(body)}`
            ],
            name: 'TimeoutError'
        });
    }
} //# sourceMappingURL=request.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/rpc.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChainDisconnectedError": (()=>ChainDisconnectedError),
    "InternalRpcError": (()=>InternalRpcError),
    "InvalidInputRpcError": (()=>InvalidInputRpcError),
    "InvalidParamsRpcError": (()=>InvalidParamsRpcError),
    "InvalidRequestRpcError": (()=>InvalidRequestRpcError),
    "JsonRpcVersionUnsupportedError": (()=>JsonRpcVersionUnsupportedError),
    "LimitExceededRpcError": (()=>LimitExceededRpcError),
    "MethodNotFoundRpcError": (()=>MethodNotFoundRpcError),
    "MethodNotSupportedRpcError": (()=>MethodNotSupportedRpcError),
    "ParseRpcError": (()=>ParseRpcError),
    "ProviderDisconnectedError": (()=>ProviderDisconnectedError),
    "ProviderRpcError": (()=>ProviderRpcError),
    "ResourceNotFoundRpcError": (()=>ResourceNotFoundRpcError),
    "ResourceUnavailableRpcError": (()=>ResourceUnavailableRpcError),
    "RpcError": (()=>RpcError),
    "SwitchChainError": (()=>SwitchChainError),
    "TransactionRejectedRpcError": (()=>TransactionRejectedRpcError),
    "UnauthorizedProviderError": (()=>UnauthorizedProviderError),
    "UnknownRpcError": (()=>UnknownRpcError),
    "UnsupportedProviderMethodError": (()=>UnsupportedProviderMethodError),
    "UserRejectedRequestError": (()=>UserRejectedRequestError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
;
const unknownErrorCode = -1;
class RpcError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { code, docsPath, metaMessages, name, shortMessage }){
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages,
            name: name || 'RpcError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name || cause.name;
        this.code = cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RpcRequestError"] ? cause.code : code ?? unknownErrorCode;
    }
}
class ProviderRpcError extends RpcError {
    constructor(cause, options){
        super(cause, options);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = options.data;
    }
}
class ParseRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ParseRpcError.code,
            name: 'ParseRpcError',
            shortMessage: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
        });
    }
}
Object.defineProperty(ParseRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32700
});
class InvalidRequestRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidRequestRpcError.code,
            name: 'InvalidRequestRpcError',
            shortMessage: 'JSON is not a valid request object.'
        });
    }
}
Object.defineProperty(InvalidRequestRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32600
});
class MethodNotFoundRpcError extends RpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: MethodNotFoundRpcError.code,
            name: 'MethodNotFoundRpcError',
            shortMessage: `The method${method ? ` "${method}"` : ''} does not exist / is not available.`
        });
    }
}
Object.defineProperty(MethodNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32601
});
class InvalidParamsRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidParamsRpcError.code,
            name: 'InvalidParamsRpcError',
            shortMessage: [
                'Invalid parameters were provided to the RPC method.',
                'Double check you have provided the correct parameters.'
            ].join('\n')
        });
    }
}
Object.defineProperty(InvalidParamsRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InternalRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InternalRpcError.code,
            name: 'InternalRpcError',
            shortMessage: 'An internal error was received.'
        });
    }
}
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});
class InvalidInputRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidInputRpcError.code,
            name: 'InvalidInputRpcError',
            shortMessage: [
                'Missing or invalid parameters.',
                'Double check you have provided the correct parameters.'
            ].join('\n')
        });
    }
}
Object.defineProperty(InvalidInputRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32000
});
class ResourceNotFoundRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceNotFoundRpcError.code,
            name: 'ResourceNotFoundRpcError',
            shortMessage: 'Requested resource not found.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceNotFoundRpcError'
        });
    }
}
Object.defineProperty(ResourceNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32001
});
class ResourceUnavailableRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceUnavailableRpcError.code,
            name: 'ResourceUnavailableRpcError',
            shortMessage: 'Requested resource not available.'
        });
    }
}
Object.defineProperty(ResourceUnavailableRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32002
});
class TransactionRejectedRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: TransactionRejectedRpcError.code,
            name: 'TransactionRejectedRpcError',
            shortMessage: 'Transaction creation failed.'
        });
    }
}
Object.defineProperty(TransactionRejectedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32003
});
class MethodNotSupportedRpcError extends RpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: MethodNotSupportedRpcError.code,
            name: 'MethodNotSupportedRpcError',
            shortMessage: `Method${method ? ` "${method}"` : ''} is not supported.`
        });
    }
}
Object.defineProperty(MethodNotSupportedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32004
});
class LimitExceededRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: LimitExceededRpcError.code,
            name: 'LimitExceededRpcError',
            shortMessage: 'Request exceeds defined limit.'
        });
    }
}
Object.defineProperty(LimitExceededRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32005
});
class JsonRpcVersionUnsupportedError extends RpcError {
    constructor(cause){
        super(cause, {
            code: JsonRpcVersionUnsupportedError.code,
            name: 'JsonRpcVersionUnsupportedError',
            shortMessage: 'Version of JSON-RPC protocol is not supported.'
        });
    }
}
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32006
});
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UserRejectedRequestError.code,
            name: 'UserRejectedRequestError',
            shortMessage: 'User rejected the request.'
        });
    }
}
Object.defineProperty(UserRejectedRequestError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4001
});
class UnauthorizedProviderError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnauthorizedProviderError.code,
            name: 'UnauthorizedProviderError',
            shortMessage: 'The requested method and/or account has not been authorized by the user.'
        });
    }
}
Object.defineProperty(UnauthorizedProviderError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4100
});
class UnsupportedProviderMethodError extends ProviderRpcError {
    constructor(cause, { method } = {}){
        super(cause, {
            code: UnsupportedProviderMethodError.code,
            name: 'UnsupportedProviderMethodError',
            shortMessage: `The Provider does not support the requested method${method ? ` " ${method}"` : ''}.`
        });
    }
}
Object.defineProperty(UnsupportedProviderMethodError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4200
});
class ProviderDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ProviderDisconnectedError.code,
            name: 'ProviderDisconnectedError',
            shortMessage: 'The Provider is disconnected from all chains.'
        });
    }
}
Object.defineProperty(ProviderDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4900
});
class ChainDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ChainDisconnectedError.code,
            name: 'ChainDisconnectedError',
            shortMessage: 'The Provider is not connected to the requested chain.'
        });
    }
}
Object.defineProperty(ChainDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4901
});
class SwitchChainError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: SwitchChainError.code,
            name: 'SwitchChainError',
            shortMessage: 'An error occurred when attempting to switch chain.'
        });
    }
}
Object.defineProperty(SwitchChainError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4902
});
class UnknownRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            name: 'UnknownRpcError',
            shortMessage: 'An unknown RPC error occurred.'
        });
    }
} //# sourceMappingURL=rpc.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withTimeout.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "withTimeout": (()=>withTimeout)
});
function withTimeout(fn, { errorInstance = new Error('timed out'), timeout, signal }) {
    return new Promise((resolve, reject)=>{
        ;
        (async ()=>{
            let timeoutId;
            try {
                const controller = new AbortController();
                if (timeout > 0) {
                    timeoutId = setTimeout(()=>{
                        if (signal) {
                            controller.abort();
                        } else {
                            reject(errorInstance);
                        }
                    }, timeout); // need to cast because bun globals.d.ts overrides @types/node
                }
                resolve(await fn({
                    signal: controller?.signal || null
                }));
            } catch (err) {
                if (err?.name === 'AbortError') reject(errorInstance);
                reject(err);
            } finally{
                clearTimeout(timeoutId);
            }
        })();
    });
} //# sourceMappingURL=withTimeout.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/wait.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "wait": (()=>wait)
});
async function wait(time) {
    return new Promise((res)=>setTimeout(res, time));
} //# sourceMappingURL=wait.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withRetry.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "withRetry": (()=>withRetry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/wait.js [app-rsc] (ecmascript)");
;
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = ()=>true } = {}) {
    return new Promise((resolve, reject)=>{
        const attemptRetry = async ({ count = 0 } = {})=>{
            const retry = async ({ error })=>{
                const delay = typeof delay_ === 'function' ? delay_({
                    count,
                    error
                }) : delay_;
                if (delay) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wait"])(delay);
                attemptRetry({
                    count: count + 1
                });
            };
            try {
                const data = await fn();
                resolve(data);
            } catch (err) {
                if (count < retryCount && await shouldRetry({
                    count,
                    error: err
                })) return retry({
                    error: err
                });
                reject(err);
            }
        };
        attemptRetry();
    });
} //# sourceMappingURL=withRetry.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/config.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChainNotConfiguredError": (()=>ChainNotConfiguredError),
    "ConnectorAccountNotFoundError": (()=>ConnectorAccountNotFoundError),
    "ConnectorAlreadyConnectedError": (()=>ConnectorAlreadyConnectedError),
    "ConnectorChainMismatchError": (()=>ConnectorChainMismatchError),
    "ConnectorNotConnectedError": (()=>ConnectorNotConnectedError),
    "ConnectorNotFoundError": (()=>ConnectorNotFoundError),
    "ConnectorUnavailableReconnectingError": (()=>ConnectorUnavailableReconnectingError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/base.js [app-rsc] (ecmascript)");
;
class ChainNotConfiguredError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Chain not configured.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainNotConfiguredError'
        });
    }
}
class ConnectorAlreadyConnectedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector already connected.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorAlreadyConnectedError'
        });
    }
}
class ConnectorNotConnectedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector not connected.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorNotConnectedError'
        });
    }
}
class ConnectorNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector not found.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorNotFoundError'
        });
    }
}
class ConnectorAccountNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address, connector }){
        super(`Account "${address}" not found for connector "${connector.name}".`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorAccountNotFoundError'
        });
    }
}
class ConnectorChainMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connectionChainId, connectorChainId }){
        super(`The current chain of the connector (id: ${connectorChainId}) does not match the connection's chain (id: ${connectionChainId}).`, {
            metaMessages: [
                `Current Chain ID:  ${connectorChainId}`,
                `Expected Chain ID: ${connectionChainId}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorChainMismatchError'
        });
    }
}
class ConnectorUnavailableReconnectingError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connector }){
        super(`Connector "${connector.name}" unavailable while reconnecting.`, {
            details: [
                'During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.',
                'All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.',
                'This error commonly occurs for connectors that asynchronously inject after reconnection has already started.'
            ].join(' ')
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorUnavailableReconnectingError'
        });
    }
} //# sourceMappingURL=config.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "injected": (()=>injected)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/getAddress.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/rpc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withTimeout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withRetry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
;
;
;
;
injected.type = 'injected';
function injected(parameters = {}) {
    const { shimDisconnect = true, unstable_shimAsyncInject } = parameters;
    function getTarget() {
        const target = parameters.target;
        if (typeof target === 'function') {
            const result = target();
            if (result) return result;
        }
        if (typeof target === 'object') return target;
        if (typeof target === 'string') return {
            ...targetMap[target] ?? {
                id: target,
                name: `${target[0].toUpperCase()}${target.slice(1)}`,
                provider: `is${target[0].toUpperCase()}${target.slice(1)}`
            }
        };
        return {
            id: 'injected',
            name: 'Injected',
            provider (window) {
                return window?.ethereum;
            }
        };
    }
    let accountsChanged;
    let chainChanged;
    let connect;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            get icon () {
                return getTarget().icon;
            },
            get id () {
                return getTarget().id;
            },
            get name () {
                return getTarget().name;
            },
            /** @deprecated */ get supportsSimulation () {
                return true;
            },
            type: injected.type,
            async setup () {
                const provider = await this.getProvider();
                // Only start listening for events if `target` is set, otherwise `injected()` will also receive events
                if (provider?.on && parameters.target) {
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                    // We shouldn't need to listen for `'accountsChanged'` here since the `'connect'` event should suffice (and wallet shouldn't be connected yet).
                    // Some wallets, like MetaMask, do not implement the `'connect'` event and overload `'accountsChanged'` instead.
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                }
            },
            async connect ({ chainId, isReconnecting } = {}) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                let accounts = [];
                if (isReconnecting) accounts = await this.getAccounts().catch(()=>[]);
                else if (shimDisconnect) {
                    // Attempt to show another prompt for selecting account if `shimDisconnect` flag is enabled
                    try {
                        const permissions = await provider.request({
                            method: 'wallet_requestPermissions',
                            params: [
                                {
                                    eth_accounts: {}
                                }
                            ]
                        });
                        accounts = permissions[0]?.caveats?.[0]?.value?.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAddress"])(x));
                        // `'wallet_requestPermissions'` can return a different order of accounts than `'eth_accounts'`
                        // switch to `'eth_accounts'` ordering if more than one account is connected
                        // https://github.com/wevm/wagmi/issues/4140
                        if (accounts.length > 0) {
                            const sortedAccounts = await this.getAccounts();
                            accounts = sortedAccounts;
                        }
                    } catch (err) {
                        const error = err;
                        // Not all injected providers support `wallet_requestPermissions` (e.g. MetaMask iOS).
                        // Only bubble up error if user rejects request
                        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        // Or prompt is already open
                        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw error;
                    }
                }
                try {
                    if (!accounts?.length && !isReconnecting) {
                        const requestedAccounts = await provider.request({
                            method: 'eth_requestAccounts'
                        });
                        accounts = requestedAccounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAddress"])(x));
                    }
                    // Manage EIP-1193 event listeners
                    // https://eips.ethereum.org/EIPS/eip-1193#events
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                    // Switch to chain if provided
                    let currentChainId = await this.getChainId();
                    if (chainId && currentChainId !== chainId) {
                        const chain = await this.switchChain({
                            chainId
                        }).catch((error)=>{
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw error;
                            return {
                                id: currentChainId
                            };
                        });
                        currentChainId = chain?.id ?? currentChainId;
                    }
                    // Remove disconnected shim if it exists
                    if (shimDisconnect) await config.storage?.removeItem(`${this.id}.disconnected`);
                    // Add connected shim if no target exists
                    if (!parameters.target) await config.storage?.setItem('injected.connected', true);
                    return {
                        accounts,
                        chainId: currentChainId
                    };
                } catch (err) {
                    const error = err;
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error);
                    throw error;
                }
            },
            async disconnect () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                // Manage EIP-1193 event listeners
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
                // Experimental support for MetaMask disconnect
                // https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md
                try {
                    // Adding timeout as not all wallets support this method and can hang
                    // https://github.com/wevm/wagmi/issues/4064
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withTimeout"])(()=>// TODO: Remove explicit type for viem@3
                        provider.request({
                            // `'wallet_revokePermissions'` added in `viem@2.10.3`
                            method: 'wallet_revokePermissions',
                            params: [
                                {
                                    eth_accounts: {}
                                }
                            ]
                        }), {
                        timeout: 100
                    });
                } catch  {}
                // Add shim signalling connector is disconnected
                if (shimDisconnect) {
                    await config.storage?.setItem(`${this.id}.disconnected`, true);
                }
                if (!parameters.target) await config.storage?.removeItem('injected.connected');
            },
            async getAccounts () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const accounts = await provider.request({
                    method: 'eth_accounts'
                });
                return accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getChainId () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const hexChainId = await provider.request({
                    method: 'eth_chainId'
                });
                return Number(hexChainId);
            },
            async getProvider () {
                if ("TURBOPACK compile-time truthy", 1) return undefined;
                "TURBOPACK unreachable";
                let provider;
                const target = undefined;
            },
            async isAuthorized () {
                try {
                    const isDisconnected = shimDisconnect && await config.storage?.getItem(`${this.id}.disconnected`);
                    if (isDisconnected) return false;
                    // Don't allow injected connector to connect if no target is set and it hasn't already connected
                    // (e.g. flag in storage is not set). This prevents a targetless injected connector from connecting
                    // automatically whenever there is a targeted connector configured.
                    if (!parameters.target) {
                        const connected = await config.storage?.getItem('injected.connected');
                        if (!connected) return false;
                    }
                    const provider = await this.getProvider();
                    if (!provider) {
                        if (unstable_shimAsyncInject !== undefined && unstable_shimAsyncInject !== false) {
                            // If no provider is found, check for async injection
                            // https://github.com/wevm/references/issues/167
                            // https://github.com/MetaMask/detect-provider
                            const handleEthereum = async ()=>{
                                if ("TURBOPACK compile-time falsy", 0) {
                                    "TURBOPACK unreachable";
                                }
                                const provider = await this.getProvider();
                                return !!provider;
                            };
                            const timeout = typeof unstable_shimAsyncInject === 'number' ? unstable_shimAsyncInject : 1_000;
                            const res = await Promise.race([
                                ...("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : [],
                                new Promise((resolve)=>setTimeout(()=>resolve(handleEthereum()), timeout))
                            ]);
                            if (res) return true;
                        }
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                    }
                    // Use retry strategy as some injected wallets (e.g. MetaMask) fail to
                    // immediately resolve JSON-RPC requests on page load.
                    const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withRetry"])(()=>this.getAccounts());
                    return !!accounts.length;
                } catch  {
                    return false;
                }
            },
            async switchChain ({ addEthereumChainParameter, chainId }) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const chain = config.chains.find((x)=>x.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                const promise = new Promise((resolve)=>{
                    const listener = (data)=>{
                        if ('chainId' in data && data.chainId === chainId) {
                            config.emitter.off('change', listener);
                            resolve();
                        }
                    };
                    config.emitter.on('change', listener);
                });
                try {
                    await Promise.all([
                        provider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                                }
                            ]
                        })// During `'wallet_switchEthereumChain'`, MetaMask makes a `'net_version'` RPC call to the target chain.
                        // If this request fails, MetaMask does not emit the `'chainChanged'` event, but will still switch the chain.
                        // To counter this behavior, we request and emit the current chain ID to confirm the chain switch either via
                        // this callback or an externally emitted `'chainChanged'` event.
                        // https://github.com/MetaMask/metamask-extension/issues/24247
                        .then(async ()=>{
                            const currentChainId = await this.getChainId();
                            if (currentChainId === chainId) config.emitter.emit('change', {
                                chainId
                            });
                        }),
                        promise
                    ]);
                    return chain;
                } catch (err) {
                    const error = err;
                    // Indicates chain is not added to provider
                    if (error.code === 4902 || // Unwrapping for MetaMask Mobile
                    // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
                    error?.data?.originalError?.code === 4902) {
                        try {
                            const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
                            let blockExplorerUrls;
                            if (addEthereumChainParameter?.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
                            else if (blockExplorer) blockExplorerUrls = [
                                blockExplorer.url,
                                ...Object.values(blockExplorers).map((x)=>x.url)
                            ];
                            let rpcUrls;
                            if (addEthereumChainParameter?.rpcUrls?.length) rpcUrls = addEthereumChainParameter.rpcUrls;
                            else rpcUrls = [
                                chain.rpcUrls.default?.http[0] ?? ''
                            ];
                            const addEthereumChain = {
                                blockExplorerUrls,
                                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                                chainName: addEthereumChainParameter?.chainName ?? chain.name,
                                iconUrls: addEthereumChainParameter?.iconUrls,
                                nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                                rpcUrls
                            };
                            await Promise.all([
                                provider.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [
                                        addEthereumChain
                                    ]
                                }).then(async ()=>{
                                    const currentChainId = await this.getChainId();
                                    if (currentChainId === chainId) config.emitter.emit('change', {
                                        chainId
                                    });
                                    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('User rejected switch after adding network.'));
                                }),
                                promise
                            ]);
                            return chain;
                        } catch (error) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        }
                    }
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                }
            },
            async onAccountsChanged (accounts) {
                // Disconnect if there are no accounts
                if (accounts.length === 0) this.onDisconnect();
                else if (config.emitter.listenerCount('connect')) {
                    const chainId = (await this.getChainId()).toString();
                    this.onConnect({
                        chainId
                    });
                    // Remove disconnected shim if it exists
                    if (shimDisconnect) await config.storage?.removeItem(`${this.id}.disconnected`);
                } else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onConnect (connectInfo) {
                const accounts = await this.getAccounts();
                if (accounts.length === 0) return;
                const chainId = Number(connectInfo.chainId);
                config.emitter.emit('connect', {
                    accounts,
                    chainId
                });
                // Manage EIP-1193 event listeners
                const provider = await this.getProvider();
                if (provider) {
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                }
            },
            async onDisconnect (error) {
                const provider = await this.getProvider();
                // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
                // https://github.com/MetaMask/providers/pull/120
                if (error && error.code === 1013) {
                    if (provider && !!(await this.getAccounts()).length) return;
                }
                // No need to remove `${this.id}.disconnected` from storage because `onDisconnect` is typically
                // only called when the wallet is disconnected through the wallet's interface, meaning the wallet
                // actually disconnected and we don't need to simulate it.
                config.emitter.emit('disconnect');
                // Manage EIP-1193 event listeners
                if (provider) {
                    if (chainChanged) {
                        provider.removeListener('chainChanged', chainChanged);
                        chainChanged = undefined;
                    }
                    if (disconnect) {
                        provider.removeListener('disconnect', disconnect);
                        disconnect = undefined;
                    }
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                }
            }
        }));
}
const targetMap = {
    coinbaseWallet: {
        id: 'coinbaseWallet',
        name: 'Coinbase Wallet',
        provider (window) {
            if (window?.coinbaseWalletExtension) return window.coinbaseWalletExtension;
            return findProvider(window, 'isCoinbaseWallet');
        }
    },
    metaMask: {
        id: 'metaMask',
        name: 'MetaMask',
        provider (window) {
            return findProvider(window, (provider)=>{
                if (!provider.isMetaMask) return false;
                // Brave tries to make itself look like MetaMask
                // Could also try RPC `web3_clientVersion` if following is unreliable
                if (provider.isBraveWallet && !provider._events && !provider._state) return false;
                // Other wallets that try to look like MetaMask
                const flags = [
                    'isApexWallet',
                    'isAvalanche',
                    'isBitKeep',
                    'isBlockWallet',
                    'isKuCoinWallet',
                    'isMathWallet',
                    'isOkxWallet',
                    'isOKExWallet',
                    'isOneInchIOSWallet',
                    'isOneInchAndroidWallet',
                    'isOpera',
                    'isPhantom',
                    'isPortal',
                    'isRabby',
                    'isTokenPocket',
                    'isTokenary',
                    'isUniswapWallet',
                    'isZerion'
                ];
                for (const flag of flags)if (provider[flag]) return false;
                return true;
            });
        }
    },
    phantom: {
        id: 'phantom',
        name: 'Phantom',
        provider (window) {
            if (window?.phantom?.ethereum) return window.phantom?.ethereum;
            return findProvider(window, 'isPhantom');
        }
    }
};
function findProvider(window, select) {
    function isProvider(provider) {
        if (typeof select === 'function') return select(provider);
        if (typeof select === 'string') return provider[select];
        return true;
    }
    const ethereum = window.ethereum;
    if (ethereum?.providers) return ethereum.providers.find((provider)=>isProvider(provider));
    if (ethereum && isProvider(ethereum)) return ethereum;
    return undefined;
} //# sourceMappingURL=injected.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parseAccount": (()=>parseAccount)
});
function parseAccount(account) {
    if (typeof account === 'string') return {
        address: account,
        type: 'json-rpc'
    };
    return account;
} //# sourceMappingURL=parseAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/uid.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "uid": (()=>uid)
});
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for(let i = 0; i < size; i++){
            buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
} //# sourceMappingURL=uid.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/createClient.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createClient": (()=>createClient),
    "rpcSchema": (()=>rpcSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/uid.js [app-rsc] (ecmascript)");
;
;
function createClient(parameters) {
    const { batch, cacheTime = parameters.pollingInterval ?? 4_000, ccipRead, key = 'base', name = 'Base Client', pollingInterval = 4_000, type = 'base' } = parameters;
    const chain = parameters.chain;
    const account = parameters.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.account) : undefined;
    const { config, request, value } = parameters.transport({
        chain,
        pollingInterval
    });
    const transport = {
        ...config,
        ...value
    };
    const client = {
        account,
        batch,
        cacheTime,
        ccipRead,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uid"])()
    };
    function extend(base) {
        return (extendFn)=>{
            const extended = extendFn(base);
            for(const key in client)delete extended[key];
            const combined = {
                ...base,
                ...extended
            };
            return Object.assign(combined, {
                extend: extend(combined)
            });
        };
    }
    return Object.assign(client, {
        extend: extend(client)
    });
}
function rpcSchema() {
    return null;
} //# sourceMappingURL=createClient.js.map
}}),
"[project]/node_modules/.pnpm/zustand@5.0.0_@types+react@19.0.1_react@19.0.0_use-sync-external-store@1.4.0_react@19.0.0_/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "combine": (()=>combine),
    "createJSONStorage": (()=>createJSONStorage),
    "devtools": (()=>devtools),
    "persist": (()=>persist),
    "redux": (()=>redux),
    "subscribeWithSelector": (()=>subscribeWithSelector)
});
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/.pnpm/zustand@5.0.0_@types+react@19.0.1_react@19.0.0_use-sync-external-store@1.4.0_react@19.0.0_/node_modules/zustand/esm/middleware.mjs")}`;
    }
};
const reduxImpl = (reducer, initial)=>(set, _get, api)=>{
        api.dispatch = (action)=>{
            set((state)=>reducer(state, action), false, action);
            return action;
        };
        api.dispatchFromDevtools = true;
        return {
            dispatch: (...a)=>api.dispatch(...a),
            ...initial
        };
    };
const redux = reduxImpl;
const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name)=>{
    const api = trackedConnections.get(name);
    if (!api) return {};
    return Object.fromEntries(Object.entries(api.stores).map(([key, api2])=>[
            key,
            api2.getState()
        ]));
};
const extractConnectionInformation = (store, extensionConnector, options)=>{
    if (store === void 0) {
        return {
            type: "untracked",
            connection: extensionConnector.connect(options)
        };
    }
    const existingConnection = trackedConnections.get(options.name);
    if (existingConnection) {
        return {
            type: "tracked",
            store,
            ...existingConnection
        };
    }
    const newConnection = {
        connection: extensionConnector.connect(options),
        stores: {}
    };
    trackedConnections.set(options.name, newConnection);
    return {
        type: "tracked",
        store,
        ...newConnection
    };
};
const devtoolsImpl = (fn, devtoolsOptions = {})=>(set, get, api)=>{
        const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
        let extensionConnector;
        try {
            extensionConnector = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (e) {}
        if (!extensionConnector) {
            return fn(set, get, api);
        }
        const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
        let isRecording = true;
        api.setState = (state, replace, nameOrAction)=>{
            const r = set(state, replace);
            if (!isRecording) return r;
            const action = nameOrAction === void 0 ? {
                type: anonymousActionType || "anonymous"
            } : typeof nameOrAction === "string" ? {
                type: nameOrAction
            } : nameOrAction;
            if (store === void 0) {
                connection == null ? void 0 : connection.send(action, get());
                return r;
            }
            connection == null ? void 0 : connection.send({
                ...action,
                type: `${store}/${action.type}`
            }, {
                ...getTrackedConnectionState(options.name),
                [store]: api.getState()
            });
            return r;
        };
        const setStateFromDevtools = (...a)=>{
            const originalIsRecording = isRecording;
            isRecording = false;
            set(...a);
            isRecording = originalIsRecording;
        };
        const initialState = fn(api.setState, get, api);
        if (connectionInformation.type === "untracked") {
            connection == null ? void 0 : connection.init(initialState);
        } else {
            connectionInformation.stores[connectionInformation.store] = api;
            connection == null ? void 0 : connection.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2])=>[
                    key,
                    key === connectionInformation.store ? initialState : store2.getState()
                ])));
        }
        if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
            let didWarnAboutReservedActionType = false;
            const originalDispatch = api.dispatch;
            api.dispatch = (...a)=>{
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && a[0].type === "__setState" && !didWarnAboutReservedActionType) {
                    console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.');
                    didWarnAboutReservedActionType = true;
                }
                originalDispatch(...a);
            };
        }
        connection.subscribe((message)=>{
            var _a;
            switch(message.type){
                case "ACTION":
                    if (typeof message.payload !== "string") {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return;
                    }
                    return parseJsonThen(message.payload, (action)=>{
                        if (action.type === "__setState") {
                            if (store === void 0) {
                                setStateFromDevtools(action.state);
                                return;
                            }
                            if (Object.keys(action.state).length !== 1) {
                                console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                            }
                            const stateFromDevtools = action.state[store];
                            if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                                return;
                            }
                            if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                                setStateFromDevtools(stateFromDevtools);
                            }
                            return;
                        }
                        if (!api.dispatchFromDevtools) return;
                        if (typeof api.dispatch !== "function") return;
                        api.dispatch(action);
                    });
                case "DISPATCH":
                    switch(message.payload.type){
                        case "RESET":
                            setStateFromDevtools(initialState);
                            if (store === void 0) {
                                return connection == null ? void 0 : connection.init(api.getState());
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "COMMIT":
                            if (store === void 0) {
                                connection == null ? void 0 : connection.init(api.getState());
                                return;
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "ROLLBACK":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    connection == null ? void 0 : connection.init(api.getState());
                                    return;
                                }
                                setStateFromDevtools(state[store]);
                                connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    return;
                                }
                                if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                                    setStateFromDevtools(state[store]);
                                }
                            });
                        case "IMPORT_STATE":
                            {
                                const { nextLiftedState } = message.payload;
                                const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
                                if (!lastComputedState) return;
                                if (store === void 0) {
                                    setStateFromDevtools(lastComputedState);
                                } else {
                                    setStateFromDevtools(lastComputedState[store]);
                                }
                                connection == null ? void 0 : connection.send(null, // FIXME no-any
                                nextLiftedState);
                                return;
                            }
                        case "PAUSE_RECORDING":
                            return isRecording = !isRecording;
                    }
                    return;
            }
        });
        return initialState;
    };
const devtools = devtoolsImpl;
const parseJsonThen = (stringified, f)=>{
    let parsed;
    try {
        parsed = JSON.parse(stringified);
    } catch (e) {
        console.error("[zustand devtools middleware] Could not parse the received json", e);
    }
    if (parsed !== void 0) f(parsed);
};
const subscribeWithSelectorImpl = (fn)=>(set, get, api)=>{
        const origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options)=>{
            let listener = selector;
            if (optListener) {
                const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
                let currentSlice = selector(api.getState());
                listener = (state)=>{
                    const nextSlice = selector(state);
                    if (!equalityFn(currentSlice, nextSlice)) {
                        const previousSlice = currentSlice;
                        optListener(currentSlice = nextSlice, previousSlice);
                    }
                };
                if (options == null ? void 0 : options.fireImmediately) {
                    optListener(currentSlice, currentSlice);
                }
            }
            return origSubscribe(listener);
        };
        const initialState = fn(set, get, api);
        return initialState;
    };
const subscribeWithSelector = subscribeWithSelectorImpl;
const combine = (initialState, create)=>(...a)=>Object.assign({}, initialState, create(...a));
function createJSONStorage(getStorage, options) {
    let storage;
    try {
        storage = getStorage();
    } catch (e) {
        return;
    }
    const persistStorage = {
        getItem: (name)=>{
            var _a;
            const parse = (str2)=>{
                if (str2 === null) {
                    return null;
                }
                return JSON.parse(str2, options == null ? void 0 : options.reviver);
            };
            const str = (_a = storage.getItem(name)) != null ? _a : null;
            if (str instanceof Promise) {
                return str.then(parse);
            }
            return parse(str);
        },
        setItem: (name, newValue)=>storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
        removeItem: (name)=>storage.removeItem(name)
    };
    return persistStorage;
}
const toThenable = (fn)=>(input)=>{
        try {
            const result = fn(input);
            if (result instanceof Promise) {
                return result;
            }
            return {
                then (onFulfilled) {
                    return toThenable(onFulfilled)(result);
                },
                catch (_onRejected) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then (_onFulfilled) {
                    return this;
                },
                catch (onRejected) {
                    return toThenable(onRejected)(e);
                }
            };
        }
    };
const persistImpl = (config, baseOptions)=>(set, get, api)=>{
        let options = {
            storage: createJSONStorage(()=>localStorage),
            partialize: (state)=>state,
            version: 0,
            merge: (persistedState, currentState)=>({
                    ...currentState,
                    ...persistedState
                }),
            ...baseOptions
        };
        let hasHydrated = false;
        const hydrationListeners = /* @__PURE__ */ new Set();
        const finishHydrationListeners = /* @__PURE__ */ new Set();
        let storage = options.storage;
        if (!storage) {
            return config((...args)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
                set(...args);
            }, get, api);
        }
        const setItem = ()=>{
            const state = options.partialize({
                ...get()
            });
            return storage.setItem(options.name, {
                state,
                version: options.version
            });
        };
        const savedSetState = api.setState;
        api.setState = (state, replace)=>{
            savedSetState(state, replace);
            void setItem();
        };
        const configResult = config((...args)=>{
            set(...args);
            void setItem();
        }, get, api);
        api.getInitialState = ()=>configResult;
        let stateFromStorage;
        const hydrate = ()=>{
            var _a, _b;
            if (!storage) return;
            hasHydrated = false;
            hydrationListeners.forEach((cb)=>{
                var _a2;
                return cb((_a2 = get()) != null ? _a2 : configResult);
            });
            const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
            return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue)=>{
                if (deserializedStorageValue) {
                    if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                        if (options.migrate) {
                            return [
                                true,
                                options.migrate(deserializedStorageValue.state, deserializedStorageValue.version)
                            ];
                        }
                        console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
                    } else {
                        return [
                            false,
                            deserializedStorageValue.state
                        ];
                    }
                }
                return [
                    false,
                    void 0
                ];
            }).then((migrationResult)=>{
                var _a2;
                const [migrated, migratedState] = migrationResult;
                stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
                set(stateFromStorage, true);
                if (migrated) {
                    return setItem();
                }
            }).then(()=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
                stateFromStorage = get();
                hasHydrated = true;
                finishHydrationListeners.forEach((cb)=>cb(stateFromStorage));
            }).catch((e)=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
            });
        };
        api.persist = {
            setOptions: (newOptions)=>{
                options = {
                    ...options,
                    ...newOptions
                };
                if (newOptions.storage) {
                    storage = newOptions.storage;
                }
            },
            clearStorage: ()=>{
                storage == null ? void 0 : storage.removeItem(options.name);
            },
            getOptions: ()=>options,
            rehydrate: ()=>hydrate(),
            hasHydrated: ()=>hasHydrated,
            onHydrate: (cb)=>{
                hydrationListeners.add(cb);
                return ()=>{
                    hydrationListeners.delete(cb);
                };
            },
            onFinishHydration: (cb)=>{
                finishHydrationListeners.add(cb);
                return ()=>{
                    finishHydrationListeners.delete(cb);
                };
            }
        };
        if (!options.skipHydration) {
            hydrate();
        }
        return stateFromStorage || configResult;
    };
const persist = persistImpl;
;
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/createConfig.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createConfig": (()=>createConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/createStorage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@5.0.0_@types+react@19.0.1_react@19.0.0_use-sync-external-store@1.4.0_react@19.0.0_/node_modules/zustand/esm/vanilla.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createEmitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/createEmitter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$uid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/uid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/createClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/version.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@5.0.0_@types+react@19.0.1_react@19.0.0_use-sync-external-store@1.4.0_react@19.0.0_/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function createConfig(parameters) {
    const { multiInjectedProviderDiscovery = true, storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStorage"])({
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultStorage"])()
    }), syncConnectedChain = true, ssr = false, ...rest } = parameters;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Set up connectors, clients, etc.
    /////////////////////////////////////////////////////////////////////////////////////////////////
    const mipd = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : undefined;
    const chains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"])(()=>rest.chains);
    const connectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"])(()=>{
        const collection = [];
        const rdnsSet = new Set();
        for (const connectorFns of rest.connectors ?? []){
            const connector = setup(connectorFns);
            collection.push(connector);
            if (!ssr && connector.rdns) {
                const rdnsValues = typeof connector.rdns === 'string' ? [
                    connector.rdns
                ] : connector.rdns;
                for (const rdns of rdnsValues){
                    rdnsSet.add(rdns);
                }
            }
        }
        if (!ssr && mipd) {
            const providers = mipd.getProviders();
            for (const provider of providers){
                if (rdnsSet.has(provider.info.rdns)) continue;
                collection.push(setup(providerDetailToConnector(provider)));
            }
        }
        return collection;
    });
    function setup(connectorFn) {
        // Set up emitter with uid and add to connector so they are "linked" together.
        const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createEmitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEmitter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$uid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uid"])());
        const connector = {
            ...connectorFn({
                emitter,
                chains: chains.getState(),
                storage,
                transports: rest.transports
            }),
            emitter,
            uid: emitter.uid
        };
        // Start listening for `connect` events on connector setup
        // This allows connectors to "connect" themselves without user interaction (e.g. MetaMask's "Manually connect to current site")
        emitter.on('connect', connect);
        connector.setup?.();
        return connector;
    }
    function providerDetailToConnector(providerDetail) {
        const { info } = providerDetail;
        const provider = providerDetail.provider;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["injected"])({
            target: {
                ...info,
                id: info.rdns,
                provider
            }
        });
    }
    const clients = new Map();
    function getClient(config = {}) {
        const chainId = config.chainId ?? store.getState().chainId;
        const chain = chains.getState().find((x)=>x.id === chainId);
        // chainId specified and not configured
        if (config.chainId && !chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
        {
            const client = clients.get(store.getState().chainId);
            if (client && !chain) return client;
            if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
        }
        // If a memoized client exists for a chain id, use that.
        {
            const client = clients.get(chainId);
            if (client) return client;
        }
        let client;
        if (rest.client) client = rest.client({
            chain
        });
        else {
            const chainId = chain.id;
            const chainIds = chains.getState().map((x)=>x.id);
            // Grab all properties off `rest` and resolve for use in `createClient`
            const properties = {};
            const entries = Object.entries(rest);
            for (const [key, value] of entries){
                if (key === 'chains' || key === 'client' || key === 'connectors' || key === 'transports') continue;
                if (typeof value === 'object') {
                    // check if value is chainId-specific since some values can be objects
                    // e.g. { batch: { multicall: { batchSize: 1024 } } }
                    if (chainId in value) properties[key] = value[chainId];
                    else {
                        // check if value is chainId-specific, but does not have value for current chainId
                        const hasChainSpecificValue = chainIds.some((x)=>x in value);
                        if (hasChainSpecificValue) continue;
                        properties[key] = value;
                    }
                } else properties[key] = value;
            }
            client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])({
                ...properties,
                chain,
                batch: properties.batch ?? {
                    multicall: true
                },
                transport: (parameters)=>rest.transports[chainId]({
                        ...parameters,
                        connectors
                    })
            });
        }
        clients.set(chainId, client);
        return client;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Create store
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function getInitialState() {
        return {
            chainId: chains.getState()[0].id,
            connections: new Map(),
            current: null,
            status: 'disconnected'
        };
    }
    let currentVersion;
    const prefix = '0.0.0-canary-';
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"].startsWith(prefix)) currentVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"].replace(prefix, ''));
    else currentVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"].split('.')[0] ?? '0');
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subscribeWithSelector"])(// only use persist middleware if storage exists
    storage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["persist"])(getInitialState, {
        migrate (persistedState, version) {
            if (version === currentVersion) return persistedState;
            const initialState = getInitialState();
            const chainId = validatePersistedChainId(persistedState, initialState.chainId);
            return {
                ...initialState,
                chainId
            };
        },
        name: 'store',
        partialize (state) {
            // Only persist "critical" store properties to preserve storage size.
            return {
                connections: {
                    __type: 'Map',
                    value: Array.from(state.connections.entries()).map(([key, connection])=>{
                        const { id, name, type, uid } = connection.connector;
                        const connector = {
                            id,
                            name,
                            type,
                            uid
                        };
                        return [
                            key,
                            {
                                ...connection,
                                connector
                            }
                        ];
                    })
                },
                chainId: state.chainId,
                current: state.current
            };
        },
        merge (persistedState, currentState) {
            // `status` should not be persisted as it messes with reconnection
            if (typeof persistedState === 'object' && persistedState && 'status' in persistedState) delete persistedState.status;
            // Make sure persisted `chainId` is valid
            const chainId = validatePersistedChainId(persistedState, currentState.chainId);
            return {
                ...currentState,
                ...persistedState,
                chainId
            };
        },
        skipHydration: ssr,
        storage: storage,
        version: currentVersion
    }) : getInitialState));
    store.setState(getInitialState());
    function validatePersistedChainId(persistedState, defaultChainId) {
        return persistedState && typeof persistedState === 'object' && 'chainId' in persistedState && typeof persistedState.chainId === 'number' && chains.getState().some((x)=>x.id === persistedState.chainId) ? persistedState.chainId : defaultChainId;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Subscribe to changes
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Update default chain when connector chain changes
    if (syncConnectedChain) store.subscribe(({ connections, current })=>current ? connections.get(current)?.chainId : undefined, (chainId)=>{
        // If chain is not configured, then don't switch over to it.
        const isChainConfigured = chains.getState().some((x)=>x.id === chainId);
        if (!isChainConfigured) return;
        return store.setState((x)=>({
                ...x,
                chainId: chainId ?? x.chainId
            }));
    });
    // EIP-6963 subscribe for new wallet providers
    mipd?.subscribe((providerDetails)=>{
        const connectorIdSet = new Set();
        const connectorRdnsSet = new Set();
        for (const connector of connectors.getState()){
            connectorIdSet.add(connector.id);
            if (connector.rdns) {
                const rdnsValues = typeof connector.rdns === 'string' ? [
                    connector.rdns
                ] : connector.rdns;
                for (const rdns of rdnsValues){
                    connectorRdnsSet.add(rdns);
                }
            }
        }
        const newConnectors = [];
        for (const providerDetail of providerDetails){
            if (connectorRdnsSet.has(providerDetail.info.rdns)) continue;
            const connector = setup(providerDetailToConnector(providerDetail));
            if (connectorIdSet.has(connector.id)) continue;
            newConnectors.push(connector);
        }
        if (storage && !store.persist.hasHydrated()) return;
        connectors.setState((x)=>[
                ...x,
                ...newConnectors
            ], true);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Emitter listeners
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function change(data) {
        store.setState((x)=>{
            const connection = x.connections.get(data.uid);
            if (!connection) return x;
            return {
                ...x,
                connections: new Map(x.connections).set(data.uid, {
                    accounts: data.accounts ?? connection.accounts,
                    chainId: data.chainId ?? connection.chainId,
                    connector: connection.connector
                })
            };
        });
    }
    function connect(data) {
        // Disable handling if reconnecting/connecting
        if (store.getState().status === 'connecting' || store.getState().status === 'reconnecting') return;
        store.setState((x)=>{
            const connector = connectors.getState().find((x)=>x.uid === data.uid);
            if (!connector) return x;
            if (connector.emitter.listenerCount('connect')) connector.emitter.off('connect', change);
            if (!connector.emitter.listenerCount('change')) connector.emitter.on('change', change);
            if (!connector.emitter.listenerCount('disconnect')) connector.emitter.on('disconnect', disconnect);
            return {
                ...x,
                connections: new Map(x.connections).set(data.uid, {
                    accounts: data.accounts,
                    chainId: data.chainId,
                    connector: connector
                }),
                current: data.uid,
                status: 'connected'
            };
        });
    }
    function disconnect(data) {
        store.setState((x)=>{
            const connection = x.connections.get(data.uid);
            if (connection) {
                const connector = connection.connector;
                if (connector.emitter.listenerCount('change')) connection.connector.emitter.off('change', change);
                if (connector.emitter.listenerCount('disconnect')) connection.connector.emitter.off('disconnect', disconnect);
                if (!connector.emitter.listenerCount('connect')) connection.connector.emitter.on('connect', connect);
            }
            x.connections.delete(data.uid);
            if (x.connections.size === 0) return {
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            };
            const nextConnection = x.connections.values().next().value;
            return {
                ...x,
                connections: new Map(x.connections),
                current: nextConnection.connector.uid
            };
        });
    }
    return {
        get chains () {
            return chains.getState();
        },
        get connectors () {
            return connectors.getState();
        },
        storage,
        getClient,
        get state () {
            return store.getState();
        },
        setState (value) {
            let newState;
            if (typeof value === 'function') newState = value(store.getState());
            else newState = value;
            // Reset state if it got set to something not matching the base state
            const initialState = getInitialState();
            if (typeof newState !== 'object') newState = initialState;
            const isCorrupt = Object.keys(initialState).some((x)=>!(x in newState));
            if (isCorrupt) newState = initialState;
            store.setState(newState, true);
        },
        subscribe (selector, listener, options) {
            return store.subscribe(selector, listener, options ? {
                ...options,
                fireImmediately: options.emitImmediately
            } : undefined);
        },
        _internal: {
            mipd,
            store,
            ssr: Boolean(ssr),
            syncConnectedChain,
            transports: rest.transports,
            chains: {
                setState (value) {
                    const nextChains = typeof value === 'function' ? value(chains.getState()) : value;
                    if (nextChains.length === 0) return;
                    return chains.setState(nextChains, true);
                },
                subscribe (listener) {
                    return chains.subscribe(listener);
                }
            },
            connectors: {
                providerDetailToConnector,
                setup: setup,
                setState (value) {
                    return connectors.setState(typeof value === 'function' ? value(connectors.getState()) : value, true);
                },
                subscribe (listener) {
                    return connectors.subscribe(listener);
                }
            },
            events: {
                change,
                connect,
                disconnect
            }
        }
    };
} //# sourceMappingURL=createConfig.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/chain/defineChain.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defineChain": (()=>defineChain)
});
function defineChain(chain) {
    return {
        formatters: undefined,
        fees: undefined,
        serializers: undefined,
        ...chain
    };
} //# sourceMappingURL=defineChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/account.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AccountNotFoundError": (()=>AccountNotFoundError),
    "AccountTypeNotSupportedError": (()=>AccountTypeNotSupportedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
class AccountNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath } = {}){
        super([
            'Could not find an Account to execute with this Action.',
            'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.'
        ].join('\n'), {
            docsPath,
            docsSlug: 'account',
            name: 'AccountNotFoundError'
        });
    }
}
class AccountTypeNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath, metaMessages, type }){
        super(`Account type "${type}" is not supported.`, {
            docsPath,
            metaMessages,
            name: 'AccountTypeNotSupportedError'
        });
    }
} //# sourceMappingURL=account.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatUnits.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 *  Divides a number by a given exponent of base 10 (10exponent), and formats it into a string representation of the number..
 *
 * - Docs: https://viem.sh/docs/utilities/formatUnits
 *
 * @example
 * import { formatUnits } from 'viem'
 *
 * formatUnits(420000000000n, 9)
 * // '420'
 */ __turbopack_esm__({
    "formatUnits": (()=>formatUnits)
});
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith('-');
    if (negative) display = display.slice(1);
    display = display.padStart(decimals, '0');
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals)
    ];
    fraction = fraction.replace(/(0+)$/, '');
    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;
} //# sourceMappingURL=formatUnits.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/unit.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "etherUnits": (()=>etherUnits),
    "gweiUnits": (()=>gweiUnits),
    "weiUnits": (()=>weiUnits)
});
const etherUnits = {
    gwei: 9,
    wei: 18
};
const gweiUnits = {
    ether: -9,
    wei: 9
};
const weiUnits = {
    ether: -18,
    gwei: -9
}; //# sourceMappingURL=unit.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatEther.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatEther": (()=>formatEther)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatUnits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/unit.js [app-rsc] (ecmascript)");
;
;
function formatEther(wei, unit = 'wei') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatUnits"])(wei, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["etherUnits"][unit]);
} //# sourceMappingURL=formatEther.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatGwei.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatGwei": (()=>formatGwei)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatUnits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/unit.js [app-rsc] (ecmascript)");
;
;
function formatGwei(wei, unit = 'wei') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatUnits"])(wei, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gweiUnits"][unit]);
} //# sourceMappingURL=formatGwei.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/transaction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FeeConflictError": (()=>FeeConflictError),
    "InvalidLegacyVError": (()=>InvalidLegacyVError),
    "InvalidSerializableTransactionError": (()=>InvalidSerializableTransactionError),
    "InvalidSerializedTransactionError": (()=>InvalidSerializedTransactionError),
    "InvalidSerializedTransactionTypeError": (()=>InvalidSerializedTransactionTypeError),
    "InvalidStorageKeySizeError": (()=>InvalidStorageKeySizeError),
    "TransactionExecutionError": (()=>TransactionExecutionError),
    "TransactionNotFoundError": (()=>TransactionNotFoundError),
    "TransactionReceiptNotFoundError": (()=>TransactionReceiptNotFoundError),
    "WaitForTransactionReceiptTimeoutError": (()=>WaitForTransactionReceiptTimeoutError),
    "prettyPrint": (()=>prettyPrint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatEther.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatGwei.js [app-rsc] (ecmascript)");
;
;
;
function prettyPrint(args) {
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join('\n');
}
class FeeConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.'
        ].join('\n'), {
            name: 'FeeConflictError'
        });
    }
}
class InvalidLegacyVError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ v }){
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
            name: 'InvalidLegacyVError'
        });
    }
}
class InvalidSerializableTransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ transaction }){
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
                '- an EIP-7702 Transaction with `authorizationList`, or',
                '- a Legacy Transaction with `gasPrice`'
            ],
            name: 'InvalidSerializableTransactionError'
        });
    }
}
class InvalidSerializedTransactionTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ serializedType }){
        super(`Serialized transaction type "${serializedType}" is invalid.`, {
            name: 'InvalidSerializedTransactionType'
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
class InvalidSerializedTransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ attributes, serializedTransaction, type }){
        const missing = Object.entries(attributes).map(([key, value])=>typeof value === 'undefined' ? key : undefined).filter(Boolean);
        super(`Invalid serialized transaction of type "${type}" was provided.`, {
            metaMessages: [
                `Serialized Transaction: "${serializedTransaction}"`,
                missing.length > 0 ? `Missing Attributes: ${missing.join(', ')}` : ''
            ].filter(Boolean),
            name: 'InvalidSerializedTransactionError'
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
class InvalidStorageKeySizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ storageKey }){
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, {
            name: 'InvalidStorageKeySizeError'
        });
    }
}
class TransactionExecutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const prettyArgs = prettyPrint({
            chain: chain && `${chain?.name} (id: ${chain?.id})`,
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatEther"])(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Request Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'TransactionExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class TransactionNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ blockHash, blockNumber, blockTag, hash, index }){
        let identifier = 'Transaction';
        if (blockTag && index !== undefined) identifier = `Transaction at block time "${blockTag}" at index "${index}"`;
        if (blockHash && index !== undefined) identifier = `Transaction at block hash "${blockHash}" at index "${index}"`;
        if (blockNumber && index !== undefined) identifier = `Transaction at block number "${blockNumber}" at index "${index}"`;
        if (hash) identifier = `Transaction with hash "${hash}"`;
        super(`${identifier} could not be found.`, {
            name: 'TransactionNotFoundError'
        });
    }
}
class TransactionReceiptNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash }){
        super(`Transaction receipt with hash "${hash}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: 'TransactionReceiptNotFoundError'
        });
    }
}
class WaitForTransactionReceiptTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash }){
        super(`Timed out while waiting for transaction with hash "${hash}" to be confirmed.`, {
            name: 'WaitForTransactionReceiptTimeoutError'
        });
    }
} //# sourceMappingURL=transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/number.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "maxInt104": (()=>maxInt104),
    "maxInt112": (()=>maxInt112),
    "maxInt120": (()=>maxInt120),
    "maxInt128": (()=>maxInt128),
    "maxInt136": (()=>maxInt136),
    "maxInt144": (()=>maxInt144),
    "maxInt152": (()=>maxInt152),
    "maxInt16": (()=>maxInt16),
    "maxInt160": (()=>maxInt160),
    "maxInt168": (()=>maxInt168),
    "maxInt176": (()=>maxInt176),
    "maxInt184": (()=>maxInt184),
    "maxInt192": (()=>maxInt192),
    "maxInt200": (()=>maxInt200),
    "maxInt208": (()=>maxInt208),
    "maxInt216": (()=>maxInt216),
    "maxInt224": (()=>maxInt224),
    "maxInt232": (()=>maxInt232),
    "maxInt24": (()=>maxInt24),
    "maxInt240": (()=>maxInt240),
    "maxInt248": (()=>maxInt248),
    "maxInt256": (()=>maxInt256),
    "maxInt32": (()=>maxInt32),
    "maxInt40": (()=>maxInt40),
    "maxInt48": (()=>maxInt48),
    "maxInt56": (()=>maxInt56),
    "maxInt64": (()=>maxInt64),
    "maxInt72": (()=>maxInt72),
    "maxInt8": (()=>maxInt8),
    "maxInt80": (()=>maxInt80),
    "maxInt88": (()=>maxInt88),
    "maxInt96": (()=>maxInt96),
    "maxUint104": (()=>maxUint104),
    "maxUint112": (()=>maxUint112),
    "maxUint120": (()=>maxUint120),
    "maxUint128": (()=>maxUint128),
    "maxUint136": (()=>maxUint136),
    "maxUint144": (()=>maxUint144),
    "maxUint152": (()=>maxUint152),
    "maxUint16": (()=>maxUint16),
    "maxUint160": (()=>maxUint160),
    "maxUint168": (()=>maxUint168),
    "maxUint176": (()=>maxUint176),
    "maxUint184": (()=>maxUint184),
    "maxUint192": (()=>maxUint192),
    "maxUint200": (()=>maxUint200),
    "maxUint208": (()=>maxUint208),
    "maxUint216": (()=>maxUint216),
    "maxUint224": (()=>maxUint224),
    "maxUint232": (()=>maxUint232),
    "maxUint24": (()=>maxUint24),
    "maxUint240": (()=>maxUint240),
    "maxUint248": (()=>maxUint248),
    "maxUint256": (()=>maxUint256),
    "maxUint32": (()=>maxUint32),
    "maxUint40": (()=>maxUint40),
    "maxUint48": (()=>maxUint48),
    "maxUint56": (()=>maxUint56),
    "maxUint64": (()=>maxUint64),
    "maxUint72": (()=>maxUint72),
    "maxUint8": (()=>maxUint8),
    "maxUint80": (()=>maxUint80),
    "maxUint88": (()=>maxUint88),
    "maxUint96": (()=>maxUint96),
    "minInt104": (()=>minInt104),
    "minInt112": (()=>minInt112),
    "minInt120": (()=>minInt120),
    "minInt128": (()=>minInt128),
    "minInt136": (()=>minInt136),
    "minInt144": (()=>minInt144),
    "minInt152": (()=>minInt152),
    "minInt16": (()=>minInt16),
    "minInt160": (()=>minInt160),
    "minInt168": (()=>minInt168),
    "minInt176": (()=>minInt176),
    "minInt184": (()=>minInt184),
    "minInt192": (()=>minInt192),
    "minInt200": (()=>minInt200),
    "minInt208": (()=>minInt208),
    "minInt216": (()=>minInt216),
    "minInt224": (()=>minInt224),
    "minInt232": (()=>minInt232),
    "minInt24": (()=>minInt24),
    "minInt240": (()=>minInt240),
    "minInt248": (()=>minInt248),
    "minInt256": (()=>minInt256),
    "minInt32": (()=>minInt32),
    "minInt40": (()=>minInt40),
    "minInt48": (()=>minInt48),
    "minInt56": (()=>minInt56),
    "minInt64": (()=>minInt64),
    "minInt72": (()=>minInt72),
    "minInt8": (()=>minInt8),
    "minInt80": (()=>minInt80),
    "minInt88": (()=>minInt88),
    "minInt96": (()=>minInt96)
});
const maxInt8 = 2n ** (8n - 1n) - 1n;
const maxInt16 = 2n ** (16n - 1n) - 1n;
const maxInt24 = 2n ** (24n - 1n) - 1n;
const maxInt32 = 2n ** (32n - 1n) - 1n;
const maxInt40 = 2n ** (40n - 1n) - 1n;
const maxInt48 = 2n ** (48n - 1n) - 1n;
const maxInt56 = 2n ** (56n - 1n) - 1n;
const maxInt64 = 2n ** (64n - 1n) - 1n;
const maxInt72 = 2n ** (72n - 1n) - 1n;
const maxInt80 = 2n ** (80n - 1n) - 1n;
const maxInt88 = 2n ** (88n - 1n) - 1n;
const maxInt96 = 2n ** (96n - 1n) - 1n;
const maxInt104 = 2n ** (104n - 1n) - 1n;
const maxInt112 = 2n ** (112n - 1n) - 1n;
const maxInt120 = 2n ** (120n - 1n) - 1n;
const maxInt128 = 2n ** (128n - 1n) - 1n;
const maxInt136 = 2n ** (136n - 1n) - 1n;
const maxInt144 = 2n ** (144n - 1n) - 1n;
const maxInt152 = 2n ** (152n - 1n) - 1n;
const maxInt160 = 2n ** (160n - 1n) - 1n;
const maxInt168 = 2n ** (168n - 1n) - 1n;
const maxInt176 = 2n ** (176n - 1n) - 1n;
const maxInt184 = 2n ** (184n - 1n) - 1n;
const maxInt192 = 2n ** (192n - 1n) - 1n;
const maxInt200 = 2n ** (200n - 1n) - 1n;
const maxInt208 = 2n ** (208n - 1n) - 1n;
const maxInt216 = 2n ** (216n - 1n) - 1n;
const maxInt224 = 2n ** (224n - 1n) - 1n;
const maxInt232 = 2n ** (232n - 1n) - 1n;
const maxInt240 = 2n ** (240n - 1n) - 1n;
const maxInt248 = 2n ** (248n - 1n) - 1n;
const maxInt256 = 2n ** (256n - 1n) - 1n;
const minInt8 = -(2n ** (8n - 1n));
const minInt16 = -(2n ** (16n - 1n));
const minInt24 = -(2n ** (24n - 1n));
const minInt32 = -(2n ** (32n - 1n));
const minInt40 = -(2n ** (40n - 1n));
const minInt48 = -(2n ** (48n - 1n));
const minInt56 = -(2n ** (56n - 1n));
const minInt64 = -(2n ** (64n - 1n));
const minInt72 = -(2n ** (72n - 1n));
const minInt80 = -(2n ** (80n - 1n));
const minInt88 = -(2n ** (88n - 1n));
const minInt96 = -(2n ** (96n - 1n));
const minInt104 = -(2n ** (104n - 1n));
const minInt112 = -(2n ** (112n - 1n));
const minInt120 = -(2n ** (120n - 1n));
const minInt128 = -(2n ** (128n - 1n));
const minInt136 = -(2n ** (136n - 1n));
const minInt144 = -(2n ** (144n - 1n));
const minInt152 = -(2n ** (152n - 1n));
const minInt160 = -(2n ** (160n - 1n));
const minInt168 = -(2n ** (168n - 1n));
const minInt176 = -(2n ** (176n - 1n));
const minInt184 = -(2n ** (184n - 1n));
const minInt192 = -(2n ** (192n - 1n));
const minInt200 = -(2n ** (200n - 1n));
const minInt208 = -(2n ** (208n - 1n));
const minInt216 = -(2n ** (216n - 1n));
const minInt224 = -(2n ** (224n - 1n));
const minInt232 = -(2n ** (232n - 1n));
const minInt240 = -(2n ** (240n - 1n));
const minInt248 = -(2n ** (248n - 1n));
const minInt256 = -(2n ** (256n - 1n));
const maxUint8 = 2n ** 8n - 1n;
const maxUint16 = 2n ** 16n - 1n;
const maxUint24 = 2n ** 24n - 1n;
const maxUint32 = 2n ** 32n - 1n;
const maxUint40 = 2n ** 40n - 1n;
const maxUint48 = 2n ** 48n - 1n;
const maxUint56 = 2n ** 56n - 1n;
const maxUint64 = 2n ** 64n - 1n;
const maxUint72 = 2n ** 72n - 1n;
const maxUint80 = 2n ** 80n - 1n;
const maxUint88 = 2n ** 88n - 1n;
const maxUint96 = 2n ** 96n - 1n;
const maxUint104 = 2n ** 104n - 1n;
const maxUint112 = 2n ** 112n - 1n;
const maxUint120 = 2n ** 120n - 1n;
const maxUint128 = 2n ** 128n - 1n;
const maxUint136 = 2n ** 136n - 1n;
const maxUint144 = 2n ** 144n - 1n;
const maxUint152 = 2n ** 152n - 1n;
const maxUint160 = 2n ** 160n - 1n;
const maxUint168 = 2n ** 168n - 1n;
const maxUint176 = 2n ** 176n - 1n;
const maxUint184 = 2n ** 184n - 1n;
const maxUint192 = 2n ** 192n - 1n;
const maxUint200 = 2n ** 200n - 1n;
const maxUint208 = 2n ** 208n - 1n;
const maxUint216 = 2n ** 216n - 1n;
const maxUint224 = 2n ** 224n - 1n;
const maxUint232 = 2n ** 232n - 1n;
const maxUint240 = 2n ** 240n - 1n;
const maxUint248 = 2n ** 248n - 1n;
const maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=number.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/node.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ExecutionRevertedError": (()=>ExecutionRevertedError),
    "FeeCapTooHighError": (()=>FeeCapTooHighError),
    "FeeCapTooLowError": (()=>FeeCapTooLowError),
    "InsufficientFundsError": (()=>InsufficientFundsError),
    "IntrinsicGasTooHighError": (()=>IntrinsicGasTooHighError),
    "IntrinsicGasTooLowError": (()=>IntrinsicGasTooLowError),
    "NonceMaxValueError": (()=>NonceMaxValueError),
    "NonceTooHighError": (()=>NonceTooHighError),
    "NonceTooLowError": (()=>NonceTooLowError),
    "TipAboveFeeCapError": (()=>TipAboveFeeCapError),
    "TransactionTypeNotSupportedError": (()=>TransactionTypeNotSupportedError),
    "UnknownNodeError": (()=>UnknownNodeError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatGwei.js [app-rsc] (ecmascript)");
;
;
class ExecutionRevertedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, message } = {}){
        const reason = message?.replace('execution reverted: ', '')?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
            name: 'ExecutionRevertedError'
        });
    }
}
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FeeCapTooHighError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause,
            name: 'FeeCapTooHighError'
        });
    }
}
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class FeeCapTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas)}` : ''} gwei) cannot be lower than the block base fee.`, {
            cause,
            name: 'FeeCapTooLowError'
        });
    }
}
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class NonceTooHighError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is higher than the next one expected.`, {
            cause,
            name: 'NonceTooHighError'
        });
    }
}
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});
class NonceTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, nonce } = {}){
        super([
            `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is lower than the current nonce of the account.`,
            'Try increasing the nonce or find the latest nonce with `getTransactionCount`.'
        ].join('\n'), {
            cause,
            name: 'NonceTooLowError'
        });
    }
}
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});
class NonceMaxValueError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}exceeds the maximum allowed nonce.`, {
            cause,
            name: 'NonceMaxValueError'
        });
    }
}
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});
class InsufficientFundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause } = {}){
        super([
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.'
        ].join('\n'), {
            cause,
            metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.'
            ],
            name: 'InsufficientFundsError'
        });
    }
}
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds|exceeds transaction sender account balance/
});
class IntrinsicGasTooHighError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`, {
            cause,
            name: 'IntrinsicGasTooHighError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});
class IntrinsicGasTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction is too low.`, {
            cause,
            name: 'IntrinsicGasTooLowError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});
class TransactionTypeNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('The transaction type is not supported for this chain.', {
            cause,
            name: 'TransactionTypeNotSupportedError'
        });
    }
}
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});
class TipAboveFeeCapError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}){
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas)} gwei` : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas)} gwei` : ''}).`
        ].join('\n'), {
            cause,
            name: 'TipAboveFeeCapError'
        });
    }
}
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class UnknownNodeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
            cause,
            name: 'UnknownNodeError'
        });
    }
} //# sourceMappingURL=node.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "assertRequest": (()=>assertRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/isAddress.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/address.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/transaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/number.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/node.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    if (account && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAddress"])(account.address)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: account.address
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (typeof gasPrice !== 'undefined' && (typeof maxFeePerGas !== 'undefined' || typeof maxPriorityFeePerGas !== 'undefined')) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeConflictError"]();
    if (maxFeePerGas && maxFeePerGas > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
} //# sourceMappingURL=assertRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/formatters/formatter.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defineFormatter": (()=>defineFormatter)
});
function defineFormatter(type, format) {
    return ({ exclude, format: overrides })=>{
        return {
            exclude,
            format: (args)=>{
                const formatted = format(args);
                if (exclude) {
                    for (const key of exclude){
                        delete formatted[key];
                    }
                }
                return {
                    ...formatted,
                    ...overrides(args)
                };
            },
            type
        };
    };
} //# sourceMappingURL=formatter.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defineTransactionRequest": (()=>defineTransactionRequest),
    "formatTransactionRequest": (()=>formatTransactionRequest),
    "rpcTransactionType": (()=>rpcTransactionType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$formatter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/formatters/formatter.js [app-rsc] (ecmascript)");
;
;
const rpcTransactionType = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2',
    eip4844: '0x3',
    eip7702: '0x4'
};
function formatTransactionRequest(request) {
    const rpcRequest = {};
    if (typeof request.authorizationList !== 'undefined') rpcRequest.authorizationList = formatAuthorizationList(request.authorizationList);
    if (typeof request.accessList !== 'undefined') rpcRequest.accessList = request.accessList;
    if (typeof request.blobVersionedHashes !== 'undefined') rpcRequest.blobVersionedHashes = request.blobVersionedHashes;
    if (typeof request.blobs !== 'undefined') {
        if (typeof request.blobs[0] !== 'string') rpcRequest.blobs = request.blobs.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(x));
        else rpcRequest.blobs = request.blobs;
    }
    if (typeof request.data !== 'undefined') rpcRequest.data = request.data;
    if (typeof request.from !== 'undefined') rpcRequest.from = request.from;
    if (typeof request.gas !== 'undefined') rpcRequest.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(request.gas);
    if (typeof request.gasPrice !== 'undefined') rpcRequest.gasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(request.gasPrice);
    if (typeof request.maxFeePerBlobGas !== 'undefined') rpcRequest.maxFeePerBlobGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(request.maxFeePerBlobGas);
    if (typeof request.maxFeePerGas !== 'undefined') rpcRequest.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined') rpcRequest.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined') rpcRequest.nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(request.nonce);
    if (typeof request.to !== 'undefined') rpcRequest.to = request.to;
    if (typeof request.type !== 'undefined') rpcRequest.type = rpcTransactionType[request.type];
    if (typeof request.value !== 'undefined') rpcRequest.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(request.value);
    return rpcRequest;
}
const defineTransactionRequest = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$formatter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineFormatter"])('transactionRequest', formatTransactionRequest);
//////////////////////////////////////////////////////////////////////////////
function formatAuthorizationList(authorizationList) {
    return authorizationList.map((authorization)=>({
            address: authorization.contractAddress,
            r: authorization.r,
            s: authorization.s,
            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(authorization.chainId),
            nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(authorization.nonce),
            ...typeof authorization.yParity !== 'undefined' ? {
                yParity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(authorization.yParity)
            } : {},
            ...typeof authorization.v !== 'undefined' && typeof authorization.yParity === 'undefined' ? {
                v: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(authorization.v)
            } : {}
        }));
} //# sourceMappingURL=transactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/formatters/extract.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @description Picks out the keys from `value` that exist in the formatter..
 */ __turbopack_esm__({
    "extract": (()=>extract)
});
function extract(value_, { format }) {
    if (!format) return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys){
            if (key in value_) value[key] = value_[key];
            if (formatted[key] && typeof formatted[key] === 'object' && !Array.isArray(formatted[key])) extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
} //# sourceMappingURL=extract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/errors/getNodeError.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "containsNodeError": (()=>containsNodeError),
    "getNodeError": (()=>getNodeError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/rpc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
;
;
;
function containsNodeError(err) {
    return err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionRejectedRpcError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputRpcError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RpcRequestError"] && err.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExecutionRevertedError"].code;
}
function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] ? err.walk((e)=>e?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExecutionRevertedError"].code) : err;
    if (executionRevertedError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"]) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExecutionRevertedError"]({
        cause: err,
        message: executionRevertedError.details
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExecutionRevertedError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExecutionRevertedError"]({
        cause: err,
        message: err.details
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeCapTooHighError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeCapTooLowError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeCapTooLowError"]({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NonceTooHighError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NonceTooHighError"]({
        cause: err,
        nonce: args?.nonce
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NonceTooLowError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NonceTooLowError"]({
        cause: err,
        nonce: args?.nonce
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NonceMaxValueError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NonceMaxValueError"]({
        cause: err,
        nonce: args?.nonce
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InsufficientFundsError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InsufficientFundsError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntrinsicGasTooHighError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntrinsicGasTooHighError"]({
        cause: err,
        gas: args?.gas
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntrinsicGasTooLowError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntrinsicGasTooLowError"]({
        cause: err,
        gas: args?.gas
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionTypeNotSupportedError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionTypeNotSupportedError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas,
        maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnknownNodeError"]({
        cause: err
    });
} //# sourceMappingURL=getNodeError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/stateOverride.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AccountStateConflictError": (()=>AccountStateConflictError),
    "StateAssignmentConflictError": (()=>StateAssignmentConflictError),
    "prettyStateMapping": (()=>prettyStateMapping),
    "prettyStateOverride": (()=>prettyStateOverride)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
class AccountStateConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address }){
        super(`State for account "${address}" is set multiple times.`, {
            name: 'AccountStateConflictError'
        });
    }
}
class StateAssignmentConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('state and stateDiff are set on the same account.', {
            name: 'StateAssignmentConflictError'
        });
    }
}
function prettyStateMapping(stateMapping) {
    return stateMapping.reduce((pretty, { slot, value })=>{
        return `${pretty}        ${slot}: ${value}\n`;
    }, '');
}
function prettyStateOverride(stateOverride) {
    return stateOverride.reduce((pretty, { address, ...state })=>{
        let val = `${pretty}    ${address}:\n`;
        if (state.nonce) val += `      nonce: ${state.nonce}\n`;
        if (state.balance) val += `      balance: ${state.balance}\n`;
        if (state.code) val += `      code: ${state.code}\n`;
        if (state.state) {
            val += '      state:\n';
            val += prettyStateMapping(state.state);
        }
        if (state.stateDiff) {
            val += '      stateDiff:\n';
            val += prettyStateMapping(state.stateDiff);
        }
        return val;
    }, '  State Override:\n').slice(0, -1);
} //# sourceMappingURL=stateOverride.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/hashSignature.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hashSignature": (()=>hashSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/keccak256.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toBytes.js [app-rsc] (ecmascript)");
;
;
const hash = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBytes"])(value));
function hashSignature(sig) {
    return hash(sig);
} //# sourceMappingURL=hashSignature.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.5.4/node_modules/abitype/dist/esm/regex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
__turbopack_esm__({
    "bytesRegex": (()=>bytesRegex),
    "execTyped": (()=>execTyped),
    "integerRegex": (()=>integerRegex),
    "isTupleRegex": (()=>isTupleRegex)
});
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/; //# sourceMappingURL=regex.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.5.4/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatAbiParameter": (()=>formatAbiParameter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.5.4/node_modules/abitype/dist/esm/regex.js [app-rsc] (ecmascript)");
;
// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ', ';
        }
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["execTyped"])(tupleRegex, abiParameter.type);
        type += `)${result?.array ?? ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ('indexed' in abiParameter && abiParameter.indexed) type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name) return `${type} ${abiParameter.name}`;
    return type;
} //# sourceMappingURL=formatAbiParameter.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.5.4/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatAbiParameters": (()=>formatAbiParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.5.4/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-rsc] (ecmascript)");
;
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiParameter"])(abiParameter);
        if (i !== length - 1) params += ', ';
    }
    return params;
} //# sourceMappingURL=formatAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.5.4/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatAbiItem": (()=>formatAbiItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.5.4/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-rsc] (ecmascript)");
;
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function') return `function ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable' ? ` ${abiItem.stateMutability}` : ''}${abiItem.outputs?.length ? ` returns (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.outputs)})` : ''}`;
    if (abiItem.type === 'event') return `event ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'error') return `error ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'constructor') return `constructor(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback') return `fallback() external${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    return 'receive() external payable';
} //# sourceMappingURL=formatAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/normalizeSignature.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "normalizeSignature": (()=>normalizeSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for(let i = 0; i < signature.length; i++){
        const char = signature[i];
        // If the character is a separator, we want to reactivate.
        if ([
            '(',
            ')',
            ','
        ].includes(char)) active = true;
        // If the character is a "level" token, we want to increment/decrement.
        if (char === '(') level++;
        if (char === ')') level--;
        // If we aren't active, we don't want to mutate the result.
        if (!active) continue;
        // If level === 0, we are at the definition level.
        if (level === 0) {
            if (char === ' ' && [
                'event',
                'function',
                ''
            ].includes(result)) result = '';
            else {
                result += char;
                // If we are at the end of the definition, we must be finished.
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        // Ignore spaces
        if (char === ' ') {
            // If the previous character is a separator, and the current section isn't empty, we want to deactivate.
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"]('Unable to normalize signature.');
    return result;
} //# sourceMappingURL=normalizeSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toSignature.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "toSignature": (()=>toSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.5.4/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$normalizeSignature$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/normalizeSignature.js [app-rsc] (ecmascript)");
;
;
const toSignature = (def)=>{
    const def_ = (()=>{
        if (typeof def === 'string') return def;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$5$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItem"])(def);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$normalizeSignature$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeSignature"])(def_);
}; //# sourceMappingURL=toSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toSignatureHash.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "toSignatureHash": (()=>toSignatureHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$hashSignature$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/hashSignature.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignature$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toSignature.js [app-rsc] (ecmascript)");
;
;
function toSignatureHash(fn) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$hashSignature$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSignature"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignature$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSignature"])(fn));
} //# sourceMappingURL=toSignatureHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toEventSelector.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "toEventSelector": (()=>toEventSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignatureHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toSignatureHash.js [app-rsc] (ecmascript)");
;
const toEventSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignatureHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSignatureHash"]; //# sourceMappingURL=toEventSelector.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/slice.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "slice": (()=>slice),
    "sliceBytes": (()=>sliceBytes),
    "sliceHex": (()=>sliceHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/isHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/size.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/data.js [app-rsc] (ecmascript)");
;
;
;
function slice(value, start, end, { strict } = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHex"])(value, {
        strict: false
    })) return sliceHex(value, start, end, {
        strict
    });
    return sliceBytes(value, start, end, {
        strict
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(value) - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
        offset: start,
        position: 'start',
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(value) !== end - start) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SliceOffsetOutOfBoundsError"]({
            offset: end,
            position: 'end',
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(value)
        });
    }
}
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict) assertEndOffset(value, start, end);
    return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_.replace('0x', '').slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict) assertEndOffset(value, start, end);
    return value;
} //# sourceMappingURL=slice.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "toFunctionSelector": (()=>toFunctionSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/slice.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignatureHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toSignatureHash.js [app-rsc] (ecmascript)");
;
;
const toFunctionSelector = (fn)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["slice"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignatureHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSignatureHash"])(fn), 0, 4); //# sourceMappingURL=toFunctionSelector.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatAbiItem": (()=>formatAbiItem),
    "formatAbiParams": (()=>formatAbiParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/abi.js [app-rsc] (ecmascript)");
;
function formatAbiItem(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== 'function' && abiItem.type !== 'event' && abiItem.type !== 'error') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidDefinitionTypeError"](abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, {
        includeName
    })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params) return '';
    return params.map((param)=>formatAbiParam(param, {
            includeName
        })).join(includeName ? ', ' : ',');
}
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith('tuple')) {
        return `(${formatAbiParams(param.components, {
            includeName
        })})${param.type.slice('tuple'.length)}`;
    }
    return param.type + (includeName && param.name ? ` ${param.name}` : '');
} //# sourceMappingURL=formatAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/abi.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AbiConstructorNotFoundError": (()=>AbiConstructorNotFoundError),
    "AbiConstructorParamsNotFoundError": (()=>AbiConstructorParamsNotFoundError),
    "AbiDecodingDataSizeInvalidError": (()=>AbiDecodingDataSizeInvalidError),
    "AbiDecodingDataSizeTooSmallError": (()=>AbiDecodingDataSizeTooSmallError),
    "AbiDecodingZeroDataError": (()=>AbiDecodingZeroDataError),
    "AbiEncodingArrayLengthMismatchError": (()=>AbiEncodingArrayLengthMismatchError),
    "AbiEncodingBytesSizeMismatchError": (()=>AbiEncodingBytesSizeMismatchError),
    "AbiEncodingLengthMismatchError": (()=>AbiEncodingLengthMismatchError),
    "AbiErrorInputsNotFoundError": (()=>AbiErrorInputsNotFoundError),
    "AbiErrorNotFoundError": (()=>AbiErrorNotFoundError),
    "AbiErrorSignatureNotFoundError": (()=>AbiErrorSignatureNotFoundError),
    "AbiEventNotFoundError": (()=>AbiEventNotFoundError),
    "AbiEventSignatureEmptyTopicsError": (()=>AbiEventSignatureEmptyTopicsError),
    "AbiEventSignatureNotFoundError": (()=>AbiEventSignatureNotFoundError),
    "AbiFunctionNotFoundError": (()=>AbiFunctionNotFoundError),
    "AbiFunctionOutputsNotFoundError": (()=>AbiFunctionOutputsNotFoundError),
    "AbiFunctionSignatureNotFoundError": (()=>AbiFunctionSignatureNotFoundError),
    "AbiItemAmbiguityError": (()=>AbiItemAmbiguityError),
    "BytesSizeMismatchError": (()=>BytesSizeMismatchError),
    "DecodeLogDataMismatch": (()=>DecodeLogDataMismatch),
    "DecodeLogTopicsMismatch": (()=>DecodeLogTopicsMismatch),
    "InvalidAbiDecodingTypeError": (()=>InvalidAbiDecodingTypeError),
    "InvalidAbiEncodingTypeError": (()=>InvalidAbiEncodingTypeError),
    "InvalidArrayError": (()=>InvalidArrayError),
    "InvalidDefinitionTypeError": (()=>InvalidDefinitionTypeError),
    "UnsupportedPackedAbiType": (()=>UnsupportedPackedAbiType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/size.js [app-rsc] (ecmascript)");
;
;
;
class AbiConstructorNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath }){
        super([
            'A constructor was not found on the ABI.',
            'Make sure you are using the correct ABI and that the constructor exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorNotFoundError'
        });
    }
}
class AbiConstructorParamsNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath }){
        super([
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
            'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.'
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorParamsNotFoundError'
        });
    }
}
class AbiDecodingDataSizeInvalidError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data, size }){
        super([
            `Data size of ${size} bytes is invalid.`,
            'Size must be in increments of 32 bytes (size % 32 === 0).'
        ].join('\n'), {
            metaMessages: [
                `Data: ${data} (${size} bytes)`
            ],
            name: 'AbiDecodingDataSizeInvalidError'
        });
    }
}
class AbiDecodingDataSizeTooSmallError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data, params, size }){
        super([
            `Data size of ${size} bytes is too small for given parameters.`
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiParams"])(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ],
            name: 'AbiDecodingDataSizeTooSmallError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class AbiDecodingZeroDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: 'AbiDecodingZeroDataError'
        });
    }
}
class AbiEncodingArrayLengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedLength, givenLength, type }){
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`
        ].join('\n'), {
            name: 'AbiEncodingArrayLengthMismatchError'
        });
    }
}
class AbiEncodingBytesSizeMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(value)}) does not match expected size (bytes${expectedSize}).`, {
            name: 'AbiEncodingBytesSizeMismatchError'
        });
    }
}
class AbiEncodingLengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding params/values length mismatch.',
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join('\n'), {
            name: 'AbiEncodingLengthMismatchError'
        });
    }
}
class AbiErrorInputsNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(errorName, { docsPath }){
        super([
            `Arguments (\`args\`) were provided to "${errorName}", but "${errorName}" on the ABI does not contain any parameters (\`inputs\`).`,
            'Cannot encode error result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the inputs exist on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorInputsNotFoundError'
        });
    }
}
class AbiErrorNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(errorName, { docsPath } = {}){
        super([
            `Error ${errorName ? `"${errorName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorNotFoundError'
        });
    }
}
class AbiErrorSignatureNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(signature, { docsPath }){
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorSignatureNotFoundError'
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
class AbiEventSignatureEmptyTopicsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath }){
        super('Cannot extract event signature from empty topics.', {
            docsPath,
            name: 'AbiEventSignatureEmptyTopicsError'
        });
    }
}
class AbiEventSignatureNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(signature, { docsPath }){
        super([
            `Encoded event signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiEventSignatureNotFoundError'
        });
    }
}
class AbiEventNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(eventName, { docsPath } = {}){
        super([
            `Event ${eventName ? `"${eventName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiEventNotFoundError'
        });
    }
}
class AbiFunctionNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(functionName, { docsPath } = {}){
        super([
            `Function ${functionName ? `"${functionName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionNotFoundError'
        });
    }
}
class AbiFunctionOutputsNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(functionName, { docsPath }){
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionOutputsNotFoundError'
        });
    }
}
class AbiFunctionSignatureNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(signature, { docsPath }){
        super([
            `Encoded function signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionSignatureNotFoundError'
        });
    }
}
class AbiItemAmbiguityError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(x, y){
        super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
                `\`${x.type}\` in \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItem"])(x.abiItem)}\`, and`,
                `\`${y.type}\` in \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItem"])(y.abiItem)}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.'
            ],
            name: 'AbiItemAmbiguityError'
        });
    }
}
class BytesSizeMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedSize, givenSize }){
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
            name: 'BytesSizeMismatchError'
        });
    }
}
class DecodeLogDataMismatch extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abiItem, data, params, size }){
        super([
            `Data size of ${size} bytes is too small for non-indexed event parameters.`
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiParams"])(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ],
            name: 'DecodeLogDataMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class DecodeLogTopicsMismatch extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abiItem, param }){
        super([
            `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ''} on event "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem, {
                includeName: true
            })}".`
        ].join('\n'), {
            name: 'DecodeLogTopicsMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
class InvalidAbiEncodingTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid encoding type.`,
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath,
            name: 'InvalidAbiEncodingType'
        });
    }
}
class InvalidAbiDecodingTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid decoding type.`,
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath,
            name: 'InvalidAbiDecodingType'
        });
    }
}
class InvalidArrayError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super([
            `Value "${value}" is not a valid array.`
        ].join('\n'), {
            name: 'InvalidArrayError'
        });
    }
}
class InvalidDefinitionTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type){
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"'
        ].join('\n'), {
            name: 'InvalidDefinitionTypeError'
        });
    }
}
class UnsupportedPackedAbiType extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type){
        super(`Type "${type}" is not supported for packed encoding.`, {
            name: 'UnsupportedPackedAbiType'
        });
    }
} //# sourceMappingURL=abi.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getAbiItem": (()=>getAbiItem),
    "getAmbiguousTypes": (()=>getAmbiguousTypes),
    "isArgOfType": (()=>isArgOfType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/isHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toEventSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toEventSelector.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/abi.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/isAddress.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getAbiItem(parameters) {
    const { abi, args = [], name } = parameters;
    const isSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHex"])(name, {
        strict: false
    });
    const abiItems = abi.filter((abiItem)=>{
        if (isSelector) {
            if (abiItem.type === 'function') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toFunctionSelector"])(abiItem) === name;
            if (abiItem.type === 'event') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toEventSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toEventSelector"])(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0) return undefined;
    if (abiItems.length === 1) return abiItems[0];
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems){
        if (!('inputs' in abiItem)) continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0) return abiItem;
            continue;
        }
        if (!abiItem.inputs) continue;
        if (abiItem.inputs.length === 0) continue;
        if (abiItem.inputs.length !== args.length) continue;
        const matched = args.every((arg, index)=>{
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter) return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem && 'inputs' in matchedAbiItem && matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiItemAmbiguityError"]({
                    abiItem,
                    type: ambiguousTypes[0]
                }, {
                    abiItem: matchedAbiItem,
                    type: ambiguousTypes[1]
                });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem) return matchedAbiItem;
    return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch(abiParameterType){
        case 'address':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAddress"])(arg, {
                strict: false
            });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default:
            {
                if (abiParameterType === 'tuple' && 'components' in abiParameter) return Object.values(abiParameter.components).every((component, index)=>{
                    return isArgOfType(Object.values(arg)[index], component);
                });
                // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
                // https://regexr.com/6v8hp
                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === 'number' || argType === 'bigint';
                // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
                // https://regexr.com/6va55
                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === 'string' || arg instanceof Uint8Array;
                // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
                // https://regexr.com/6va6i
                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                    return Array.isArray(arg) && arg.every((x)=>isArgOfType(x, {
                            ...abiParameter,
                            // Pop off `[]` or `[M]` from end of type
                            type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, '')
                        }));
                }
                return false;
            }
    }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for(const parameterIndex in sourceParameters){
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' && targetParameter.type === 'tuple' && 'components' in sourceParameter && 'components' in targetParameter) return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [
            sourceParameter.type,
            targetParameter.type
        ];
        const ambiguous = (()=>{
            if (types.includes('address') && types.includes('bytes20')) return true;
            if (types.includes('address') && types.includes('string')) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAddress"])(args[parameterIndex], {
                strict: false
            });
            if (types.includes('address') && types.includes('bytes')) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAddress"])(args[parameterIndex], {
                strict: false
            });
            return false;
        })();
        if (ambiguous) return types;
    }
    return;
} //# sourceMappingURL=getAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatAbiItemWithArgs": (()=>formatAbiItemWithArgs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/stringify.js [app-rsc] (ecmascript)");
;
function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false }) {
    if (!('name' in abiItem)) return;
    if (!('inputs' in abiItem)) return;
    if (!abiItem.inputs) return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs.map((input, i)=>`${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(args[i]) : args[i]}`).join(', ')})`;
} //# sourceMappingURL=formatAbiItemWithArgs.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/solidity.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// https://docs.soliditylang.org/en/v0.8.16/control-structures.html#panic-via-assert-and-error-via-require
__turbopack_esm__({
    "panicReasons": (()=>panicReasons),
    "solidityError": (()=>solidityError),
    "solidityPanic": (()=>solidityPanic)
});
const panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmetic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.'
};
const solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string'
        }
    ],
    name: 'Error',
    type: 'error'
};
const solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256'
        }
    ],
    name: 'Panic',
    type: 'error'
}; //# sourceMappingURL=solidity.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/cursor.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NegativeOffsetError": (()=>NegativeOffsetError),
    "PositionOutOfBoundsError": (()=>PositionOutOfBoundsError),
    "RecursiveReadLimitExceededError": (()=>RecursiveReadLimitExceededError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
class NegativeOffsetError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`, {
            name: 'NegativeOffsetError'
        });
    }
}
class PositionOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, {
            name: 'PositionOutOfBoundsError'
        });
    }
}
class RecursiveReadLimitExceededError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ count, limit }){
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, {
            name: 'RecursiveReadLimitExceededError'
        });
    }
} //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/cursor.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createCursor": (()=>createCursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$cursor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/cursor.js [app-rsc] (ecmascript)");
;
const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$cursor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RecursiveReadLimitExceededError"]({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$cursor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PositionOutOfBoundsError"]({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$cursor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NegativeOffsetError"]({
            offset
        });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount (position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition (offset) {
        if (offset < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$cursor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NegativeOffsetError"]({
            offset
        });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes (length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
    },
    inspectUint32 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte (byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes (bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8 (value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16 (value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24 (value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32 (value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes (length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining () {
        return this.bytes.length - this.position;
    },
    setPosition (position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return ()=>this.position = oldPosition;
    },
    _touch () {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0) this.recursiveReadCount++;
    }
};
function createCursor(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
} //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/regex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "arrayRegex": (()=>arrayRegex),
    "bytesRegex": (()=>bytesRegex),
    "integerRegex": (()=>integerRegex)
});
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/; //# sourceMappingURL=regex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/concat.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "concat": (()=>concat),
    "concatBytes": (()=>concatBytes),
    "concatHex": (()=>concatHex)
});
function concat(values) {
    if (typeof values[0] === 'string') return concatHex(values);
    return concatBytes(values);
}
function concatBytes(values) {
    let length = 0;
    for (const arr of values){
        length += arr.length;
    }
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values){
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
function concatHex(values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace('0x', ''), '')}`;
} //# sourceMappingURL=concat.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "encodeAbiParameters": (()=>encodeAbiParameters),
    "getArrayComponents": (()=>getArrayComponents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/abi.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/regex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/size.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/concat.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/isAddress.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/address.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/pad.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/slice.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function encodeAbiParameters(params, values) {
    if (params.length !== values.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiEncodingLengthMismatchError"]({
        expectedLength: params.length,
        givenLength: values.length
    });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParams = prepareParams({
        params: params,
        values: values
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0) return '0x';
    return data;
}
function prepareParams({ params, values }) {
    const preparedParams = [];
    for(let i = 0; i < params.length; i++){
        preparedParams.push(prepareParam({
            param: params[i],
            value: values[i]
        }));
    }
    return preparedParams;
}
function prepareParam({ param, value }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            length,
            param: {
                ...param,
                type
            }
        });
    }
    if (param.type === 'tuple') {
        return encodeTuple(value, {
            param: param
        });
    }
    if (param.type === 'address') {
        return encodeAddress(value);
    }
    if (param.type === 'bool') {
        return encodeBool(value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        const signed = param.type.startsWith('int');
        const [, , size = '256'] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integerRegex"].exec(param.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size)
        });
    }
    if (param.type.startsWith('bytes')) {
        return encodeBytes(value, {
            param
        });
    }
    if (param.type === 'string') {
        return encodeString(value);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidAbiEncodingTypeError"](param.type, {
        docsPath: '/docs/contract/encodeAbiParameters'
    });
}
function encodeParams(preparedParams) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) staticSize += 32;
        else staticSize += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParams.push(encoded);
            dynamicSize += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(encoded);
        } else {
            staticParams.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])([
        ...staticParams,
        ...dynamicParams
    ]);
}
function encodeAddress(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAddress"])(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: value
    });
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["padHex"])(value.toLowerCase())
    };
}
function encodeArray(value, { length, param }) {
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidArrayError"](value);
    if (!dynamic && value.length !== length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiEncodingArrayLengthMismatchError"]({
        expectedLength: length,
        givenLength: value.length,
        type: `${param.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParams = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParam({
            param,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(preparedParams.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])([
                    length,
                    data
                ]) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])(preparedParams.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split('bytes');
    const bytesSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(value);
    if (!paramSize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0) value_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["padHex"])(value_, {
            dir: 'right',
            size: Math.ceil((value.length - 2) / 2 / 32) * 32
        });
        return {
            dynamic: true,
            encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["padHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(bytesSize, {
                    size: 32
                })),
                value_
            ])
        };
    }
    if (bytesSize !== Number.parseInt(paramSize)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiEncodingBytesSizeMismatchError"]({
        expectedSize: Number.parseInt(paramSize),
        value
    });
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["padHex"])(value, {
            dir: 'right'
        })
    };
}
function encodeBool(value) {
    if (typeof value !== 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"](`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["padHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolToHex"])(value))
    };
}
function encodeNumber(value, { signed, size = 256 }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntegerOutOfRangeError"]({
            max: max.toString(),
            min: min.toString(),
            signed,
            size: size / 8,
            value: value.toString()
        });
    }
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringToHex"])(value);
    const partsLength = Math.ceil((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++){
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["padHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["slice"])(hexValue, i * 32, (i + 1) * 32), {
            dir: 'right'
        }));
    }
    return {
        dynamic: true,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["padHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(hexValue), {
                size: 32
            })),
            ...parts
        ])
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for(let i = 0; i < param.components.length; i++){
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index]
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encodeParams(preparedParams) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])(preparedParams.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
} //# sourceMappingURL=encodeAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromBytes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "bytesToBigInt": (()=>bytesToBigInt),
    "bytesToBool": (()=>bytesToBool),
    "bytesToNumber": (()=>bytesToNumber),
    "bytesToString": (()=>bytesToString),
    "fromBytes": (()=>fromBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/trim.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/encoding.js [app-rsc] (ecmascript)");
;
;
;
;
function fromBytes(bytes, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return bytesToNumber(bytes, opts);
    if (to === 'bigint') return bytesToBigInt(bytes, opts);
    if (to === 'boolean') return bytesToBool(bytes, opts);
    if (to === 'string') return bytesToString(bytes, opts);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(bytes, opts);
}
function bytesToBigInt(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined') (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(bytes, {
        size: opts.size
    });
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(bytes, opts);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBigInt"])(hex, opts);
}
function bytesToBool(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(bytes, {
            size: opts.size
        });
        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(bytes);
    }
    if (bytes.length > 1 || bytes[0] > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidBytesBooleanError"](bytes);
    return Boolean(bytes[0]);
}
function bytesToNumber(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined') (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(bytes, {
        size: opts.size
    });
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(bytes, opts);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToNumber"])(hex, opts);
}
function bytesToString(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertSize"])(bytes, {
            size: opts.size
        });
        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
} //# sourceMappingURL=fromBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "decodeAbiParameters": (()=>decodeAbiParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toBytes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/cursor.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/size.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/abi.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/getAddress.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/slice.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromBytes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/trim.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function decodeAbiParameters(params, data) {
    const bytes = typeof data === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(data) : data;
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCursor"])(bytes);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(bytes) === 0 && params.length > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiDecodingZeroDataError"]();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(data) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(data) < 32) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiDecodingDataSizeTooSmallError"]({
        data: typeof data === 'string' ? data : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(data),
        params: params,
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"])(data)
    });
    let consumed = 0;
    const values = [];
    for(let i = 0; i < params.length; ++i){
        const param = params[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: 0
        });
        consumed += consumed_;
        values.push(data);
    }
    return values;
}
function decodeParameter(cursor, param, { staticPosition }) {
    const arrayComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArrayComponents"])(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, {
            ...param,
            type
        }, {
            length,
            staticPosition
        });
    }
    if (param.type === 'tuple') return decodeTuple(cursor, param, {
        staticPosition
    });
    if (param.type === 'address') return decodeAddress(cursor);
    if (param.type === 'bool') return decodeBool(cursor);
    if (param.type.startsWith('bytes')) return decodeBytes(cursor, param, {
        staticPosition
    });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) return decodeNumber(cursor, param);
    if (param.type === 'string') return decodeString(cursor, {
        staticPosition
    });
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidAbiDecodingTypeError"](param.type, {
        docsPath: '/docs/contract/decodeAbiParameters'
    });
}
////////////////////////////////////////////////////////////////////
// Type Decoders
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor) {
    const value = cursor.readBytes(32);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checksumAddress"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sliceBytes"])(value, -20))),
        32
    ];
}
function decodeArray(cursor, param, { length, staticPosition }) {
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                staticPosition: startOfData
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for(let i = 0; i < length; ++i){
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                staticPosition: start
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for(let i = 0; i < length; ++i){
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: staticPosition + consumed
        });
        consumed += consumed_;
        value.push(data);
    }
    return [
        value,
        consumed
    ];
}
function decodeBool(cursor) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToBool"])(cursor.readBytes(32), {
            size: 32
        }),
        32
    ];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return [
                '0x',
                32
            ];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(data),
            32
        ];
    }
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])(cursor.readBytes(Number.parseInt(size), 32));
    return [
        value,
        32
    ];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256');
    const value = cursor.readBytes(32);
    return [
        size > 48 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToBigInt"])(value, {
            signed
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(value, {
            signed
        }),
        32
    ];
}
function decodeTuple(cursor, param, { staticPosition }) {
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                staticPosition: start
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for(let i = 0; i < param.components.length; ++i){
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            staticPosition
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [
        value,
        consumed
    ];
}
function decodeString(cursor, { staticPosition }) {
    // Get offset to start of string data.
    const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToNumber"])(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return [
            '',
            32
        ];
    }
    const data = cursor.readBytes(length, 32);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [
        value,
        32
    ];
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string') return true;
    if (type === 'bytes') return true;
    if (type.endsWith('[]')) return true;
    if (type === 'tuple') return param.components?.some(hasDynamicChild);
    const arrayComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArrayComponents"])(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
} //# sourceMappingURL=decodeAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "decodeErrorResult": (()=>decodeErrorResult)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/slice.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/abi.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/solidity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function decodeErrorResult(parameters) {
    const { abi, data } = parameters;
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["slice"])(data, 0, 4);
    if (signature === '0x') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiDecodingZeroDataError"]();
    const abi_ = [
        ...abi || [],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["solidityError"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["solidityPanic"]
    ];
    const abiItem = abi_.find((x)=>x.type === 'error' && signature === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toFunctionSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItem"])(x)));
    if (!abiItem) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiErrorSignatureNotFoundError"](signature, {
        docsPath: '/docs/contract/decodeErrorResult'
    });
    return {
        abiItem,
        args: 'inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeAbiParameters"])(abiItem.inputs, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["slice"])(data, 4)) : undefined,
        errorName: abiItem.name
    };
} //# sourceMappingURL=decodeErrorResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/contract.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CallExecutionError": (()=>CallExecutionError),
    "ContractFunctionExecutionError": (()=>ContractFunctionExecutionError),
    "ContractFunctionRevertedError": (()=>ContractFunctionRevertedError),
    "ContractFunctionZeroDataError": (()=>ContractFunctionZeroDataError),
    "CounterfactualDeploymentFailedError": (()=>CounterfactualDeploymentFailedError),
    "RawContractError": (()=>RawContractError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/transaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatEther.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatGwei.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$stateOverride$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/stateOverride.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItemWithArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/solidity.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/abi.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
class CallExecutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride }){
        const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
        let prettyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prettyPrint"])({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatEther"])(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        if (stateOverride) {
            prettyArgs += `\n${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$stateOverride$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prettyStateOverride"])(stateOverride)}`;
        }
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Raw Call Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'CallExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class ContractFunctionExecutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender }){
        const abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbiItem"])({
            abi,
            args,
            name: functionName
        });
        const formattedArgs = abiItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItemWithArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItemWithArgs"])({
            abiItem,
            args,
            includeFunctionName: false,
            includeName: false
        }) : undefined;
        const functionWithParams = abiItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem, {
            includeName: true
        }) : undefined;
        const prettyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prettyPrint"])({
            address: contractAddress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContractAddress"])(contractAddress),
            function: functionWithParams,
            args: formattedArgs && formattedArgs !== '()' && `${[
                ...Array(functionName?.length ?? 0).keys()
            ].map(()=>' ').join('')}${formattedArgs}`,
            sender
        });
        super(cause.shortMessage || `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                prettyArgs && 'Contract Call:',
                prettyArgs
            ].filter(Boolean),
            name: 'ContractFunctionExecutionError'
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
class ContractFunctionRevertedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abi, data, functionName, message }){
        let cause;
        let decodedData = undefined;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
                    abi,
                    data
                });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                } else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["panicReasons"][firstArg];
                } else {
                    const errorWithParams = abiItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem, {
                        includeName: true
                    }) : undefined;
                    const formattedArgs = abiItem && errorArgs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItemWithArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAbiItemWithArgs"])({
                        abiItem,
                        args: errorArgs,
                        includeFunctionName: false,
                        includeName: false
                    }) : undefined;
                    metaMessages = [
                        errorWithParams ? `Error: ${errorWithParams}` : '',
                        formattedArgs && formattedArgs !== '()' ? `       ${[
                            ...Array(errorName?.length ?? 0).keys()
                        ].map(()=>' ').join('')}${formattedArgs}` : ''
                    ];
                }
            } catch (err) {
                cause = err;
            }
        } else if (message) reason = message;
        let signature;
        if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbiErrorSignatureNotFoundError"]) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                'Make sure you are using the correct ABI and that the error exists on it.',
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
            ];
        }
        super(reason && reason !== 'execution reverted' || signature ? [
            `The contract function "${functionName}" reverted with the following ${signature ? 'signature' : 'reason'}:`,
            reason || signature
        ].join('\n') : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages,
            name: 'ContractFunctionRevertedError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "raw", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.raw = data;
        this.reason = reason;
        this.signature = signature;
    }
}
class ContractFunctionZeroDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ functionName }){
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                'This could be due to any of the following:',
                `  - The contract does not have the function "${functionName}",`,
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.'
            ],
            name: 'ContractFunctionZeroDataError'
        });
    }
}
class CounterfactualDeploymentFailedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ factory }){
        super(`Deployment for counterfactual contract call failed${factory ? ` for factory "${factory}".` : ''}`, {
            metaMessages: [
                'Please ensure:',
                '- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).',
                '- The `factoryData` is a valid encoded function call for contract deployment function on the factory.'
            ],
            name: 'CounterfactualDeploymentFailedError'
        });
    }
}
class RawContractError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data, message }){
        super(message || '', {
            name: 'RawContractError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
} //# sourceMappingURL=contract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/errors/getCallError.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getCallError": (()=>getCallError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/errors/getNodeError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/contract.js [app-rsc] (ecmascript)");
;
;
;
function getCallError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNodeError"])(err, args);
        if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnknownNodeError"]) return err;
        return cause;
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CallExecutionError"](cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getCallError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/linea/actions/estimateGas.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "estimateGas": (()=>estimateGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/account.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/formatters/extract.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/errors/getCallError.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function estimateGas(client, args) {
    const { account: account_ = client.account } = args;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccountNotFoundError"]();
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    try {
        const { accessList, blockNumber, blockTag, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
        const blockNumberHex = blockNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertRequest"])(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extract"])(rest, {
                format: chainFormat
            }),
            from: account?.address,
            accessList,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        });
        const { baseFeePerGas, gasLimit, priorityFeePerGas } = await client.request({
            method: 'linea_estimateGas',
            params: block ? [
                request,
                block
            ] : [
                request
            ]
        });
        return {
            baseFeePerGas: BigInt(baseFeePerGas),
            gasLimit: BigInt(gasLimit),
            priorityFeePerGas: BigInt(priorityFeePerGas)
        };
    } catch (err) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCallError"])(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/linea/chainConfig.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "chainConfig": (()=>chainConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$linea$2f$actions$2f$estimateGas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/linea/actions/estimateGas.js [app-rsc] (ecmascript)");
;
const chainConfig = {
    fees: {
        estimateFeesPerGas,
        async maxPriorityFeePerGas ({ block, client, request }) {
            const response = await estimateFeesPerGas({
                block,
                client,
                multiply: (x)=>x,
                request,
                type: 'eip1559'
            });
            // Returning `null` will trigger the base `estimateMaxPriorityFeePerGas` to perform
            // fallback mechanisms to estimate priority fee.
            if (!response?.maxPriorityFeePerGas) return null;
            return response.maxPriorityFeePerGas;
        }
    }
};
///////////////////////////////////////////////////////////////////////////
// Internal
///////////////////////////////////////////////////////////////////////////
async function estimateFeesPerGas({ client, multiply, request, type }) {
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$linea$2f$actions$2f$estimateGas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["estimateGas"])(client, {
            ...request,
            account: request?.account
        });
        const { priorityFeePerGas: maxPriorityFeePerGas } = response;
        const baseFeePerGas = multiply(BigInt(response.baseFeePerGas));
        const maxFeePerGas = baseFeePerGas + maxPriorityFeePerGas;
        if (type === 'legacy') return {
            gasPrice: maxFeePerGas
        };
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    } catch  {
        // Returning `null` will trigger the base `estimateFeesPerGas` to perform
        // fallback mechanisms to estimate fees.
        return null;
    }
} //# sourceMappingURL=chainConfig.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/chains/definitions/lineaSepolia.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "lineaSepolia": (()=>lineaSepolia)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/chain/defineChain.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$linea$2f$chainConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/linea/chainConfig.js [app-rsc] (ecmascript)");
;
;
const lineaSepolia = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineChain"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$linea$2f$chainConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chainConfig"],
    id: 59_141,
    name: 'Linea Sepolia Testnet',
    nativeCurrency: {
        name: 'Linea Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.sepolia.linea.build'
            ],
            webSocket: [
                'wss://rpc.sepolia.linea.build'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://sepolia.lineascan.build',
            apiUrl: 'https://api-sepolia.lineascan.build/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 227427
        }
    },
    testnet: true
}); //# sourceMappingURL=lineaSepolia.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/chains/definitions/linea.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "linea": (()=>linea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/chain/defineChain.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$linea$2f$chainConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/linea/chainConfig.js [app-rsc] (ecmascript)");
;
;
const linea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineChain"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$linea$2f$chainConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chainConfig"],
    id: 59_144,
    name: 'Linea Mainnet',
    nativeCurrency: {
        name: 'Linea Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.linea.build'
            ],
            webSocket: [
                'wss://rpc.linea.build'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://lineascan.build',
            apiUrl: 'https://api.lineascan.build/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 42
        }
    },
    testnet: false
}); //# sourceMappingURL=linea.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/chains/definitions/mainnet.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mainnet": (()=>mainnet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/chain/defineChain.js [app-rsc] (ecmascript)");
;
const mainnet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 1,
    name: 'Ethereum',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth.merkle.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io/api'
        }
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        },
        ensUniversalResolver: {
            address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
            blockCreated: 19_258_213
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14_353_601
        }
    }
}); //# sourceMappingURL=mainnet.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/extractRpcUrls.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "extractRpcUrls": (()=>extractRpcUrls)
});
function extractRpcUrls(parameters) {
    const { chain } = parameters;
    const fallbackUrl = chain.rpcUrls.default.http[0];
    if (!parameters.transports) return [
        fallbackUrl
    ];
    const transport = parameters.transports?.[chain.id]?.({
        chain
    });
    const transports = transport?.value?.transports || [
        transport
    ];
    return transports.map(({ value })=>value?.url || fallbackUrl);
} //# sourceMappingURL=extractRpcUrls.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@5.7.7_@types+react@19.0.1_@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@t_etqpfdoa5unl6sz7vcgpev627i/node_modules/@wagmi/connectors/dist/esm/metaMask.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "metaMask": (()=>metaMask)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/getAddress.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/rpc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$extractRpcUrls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/extractRpcUrls.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withRetry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withTimeout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/errors/config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-rsc] (ecmascript)");
;
;
metaMask.type = 'metaMask';
function metaMask(parameters = {}) {
    let sdk;
    let provider;
    let providerPromise;
    let accountsChanged;
    let chainChanged;
    let connect;
    let displayUri;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            id: 'metaMaskSDK',
            name: 'MetaMask',
            rdns: [
                'io.metamask',
                'io.metamask.mobile'
            ],
            type: metaMask.type,
            async setup () {
                const provider = await this.getProvider();
                if (provider?.on) {
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                    // We shouldn't need to listen for `'accountsChanged'` here since the `'connect'` event should suffice (and wallet shouldn't be connected yet).
                    // Some wallets, like MetaMask, do not implement the `'connect'` event and overload `'accountsChanged'` instead.
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                }
            },
            async connect ({ chainId, isReconnecting } = {}) {
                const provider = await this.getProvider();
                if (!displayUri) {
                    displayUri = this.onDisplayUri;
                    provider.on('display_uri', displayUri);
                }
                let accounts = [];
                if (isReconnecting) accounts = await this.getAccounts().catch(()=>[]);
                try {
                    let signResponse;
                    let connectWithResponse;
                    if (!accounts?.length) {
                        if (parameters.connectAndSign || parameters.connectWith) {
                            if (parameters.connectAndSign) signResponse = await sdk.connectAndSign({
                                msg: parameters.connectAndSign
                            });
                            else if (parameters.connectWith) connectWithResponse = await sdk.connectWith({
                                method: parameters.connectWith.method,
                                params: parameters.connectWith.params
                            });
                            accounts = await this.getAccounts();
                        } else {
                            const requestedAccounts = await sdk.connect();
                            accounts = requestedAccounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAddress"])(x));
                        }
                    }
                    // Switch to chain if provided
                    let currentChainId = await this.getChainId();
                    if (chainId && currentChainId !== chainId) {
                        const chain = await this.switchChain({
                            chainId
                        }).catch((error)=>{
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw error;
                            return {
                                id: currentChainId
                            };
                        });
                        currentChainId = chain?.id ?? currentChainId;
                    }
                    if (displayUri) {
                        provider.removeListener('display_uri', displayUri);
                        displayUri = undefined;
                    }
                    if (signResponse) provider.emit('connectAndSign', {
                        accounts,
                        chainId: currentChainId,
                        signResponse
                    });
                    else if (connectWithResponse) provider.emit('connectWith', {
                        accounts,
                        chainId: currentChainId,
                        connectWithResponse
                    });
                    // Manage EIP-1193 event listeners
                    // https://eips.ethereum.org/EIPS/eip-1193#events
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                    return {
                        accounts,
                        chainId: currentChainId
                    };
                } catch (err) {
                    const error = err;
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error);
                    throw error;
                }
            },
            async disconnect () {
                const provider = await this.getProvider();
                // Manage EIP-1193 event listeners
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
                await sdk.terminate();
            },
            async getAccounts () {
                const provider = await this.getProvider();
                const accounts = await provider.request({
                    method: 'eth_accounts'
                });
                return accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getChainId () {
                const provider = await this.getProvider();
                const chainId = provider.getChainId() || await provider?.request({
                    method: 'eth_chainId'
                });
                return Number(chainId);
            },
            async getProvider () {
                async function initProvider() {
                    // Unwrapping import for Vite compatibility.
                    // See: https://github.com/vitejs/vite/issues/9703
                    const MetaMaskSDK = await (async ()=>{
                        const { default: SDK } = await __turbopack_require__("[project]/node_modules/.pnpm/@metamask+sdk@0.32.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js [app-rsc] (ecmascript, async loader)")(__turbopack_import__);
                        if (typeof SDK !== 'function' && typeof SDK.default === 'function') return SDK.default;
                        return SDK;
                    })();
                    const readonlyRPCMap = {};
                    for (const chain of config.chains)readonlyRPCMap[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id)] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$extractRpcUrls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractRpcUrls"])({
                        chain,
                        transports: config.transports
                    })?.[0];
                    sdk = new MetaMaskSDK({
                        _source: 'wagmi',
                        forceDeleteProvider: false,
                        forceInjectProvider: false,
                        injectProvider: false,
                        // Workaround cast since MetaMask SDK does not support `'exactOptionalPropertyTypes'`
                        ...parameters,
                        readonlyRPCMap,
                        dappMetadata: {
                            ...parameters.dappMetadata,
                            // Test if name and url are set AND not empty
                            name: parameters.dappMetadata?.name ? parameters.dappMetadata?.name : 'wagmi',
                            url: parameters.dappMetadata?.url ? parameters.dappMetadata?.url : ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'https://wagmi.sh'
                        },
                        useDeeplink: parameters.useDeeplink ?? true
                    });
                    const result = await sdk.init();
                    // On initial load, sometimes `sdk.getProvider` does not return provider.
                    // https://github.com/wevm/wagmi/issues/4367
                    // Use result of `init` call if available.
                    const provider = (()=>{
                        if (result?.activeProvider) return result.activeProvider;
                        return sdk.getProvider();
                    })();
                    if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                    return provider;
                }
                if (!provider) {
                    if (!providerPromise) providerPromise = initProvider();
                    provider = await providerPromise;
                }
                return provider;
            },
            async isAuthorized () {
                try {
                    // MetaMask mobile provider sometimes fails to immediately resolve
                    // JSON-RPC requests on page load
                    const timeout = 200;
                    const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withRetry"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withTimeout"])(()=>this.getAccounts(), {
                            timeout
                        }), {
                        delay: timeout + 1,
                        retryCount: 3
                    });
                    return !!accounts.length;
                } catch  {
                    return false;
                }
            },
            async switchChain ({ addEthereumChainParameter, chainId }) {
                const provider = await this.getProvider();
                const chain = config.chains.find((x)=>x.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                try {
                    await provider.request({
                        method: 'wallet_switchEthereumChain',
                        params: [
                            {
                                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                            }
                        ]
                    });
                    // During `'wallet_switchEthereumChain'`, MetaMask makes a `'net_version'` RPC call to the target chain.
                    // If this request fails, MetaMask does not emit the `'chainChanged'` event, but will still switch the chain.
                    // To counter this behavior, we request and emit the current chain ID to confirm the chain switch either via
                    // this callback or an externally emitted `'chainChanged'` event.
                    // https://github.com/MetaMask/metamask-extension/issues/24247
                    await waitForChainIdToSync();
                    await sendAndWaitForChangeEvent(chainId);
                    return chain;
                } catch (err) {
                    const error = err;
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    // Indicates chain is not added to provider
                    if (error.code === 4902 || // Unwrapping for MetaMask Mobile
                    // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
                    error?.data?.originalError?.code === 4902) {
                        try {
                            await provider.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    {
                                        blockExplorerUrls: (()=>{
                                            const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
                                            if (addEthereumChainParameter?.blockExplorerUrls) return addEthereumChainParameter.blockExplorerUrls;
                                            if (blockExplorer) return [
                                                blockExplorer.url,
                                                ...Object.values(blockExplorers).map((x)=>x.url)
                                            ];
                                            return;
                                        })(),
                                        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                                        chainName: addEthereumChainParameter?.chainName ?? chain.name,
                                        iconUrls: addEthereumChainParameter?.iconUrls,
                                        nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                                        rpcUrls: (()=>{
                                            if (addEthereumChainParameter?.rpcUrls?.length) return addEthereumChainParameter.rpcUrls;
                                            return [
                                                chain.rpcUrls.default?.http[0] ?? ''
                                            ];
                                        })()
                                    }
                                ]
                            });
                            await waitForChainIdToSync();
                            await sendAndWaitForChangeEvent(chainId);
                            return chain;
                        } catch (err) {
                            const error = err;
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                        }
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                }
                async function waitForChainIdToSync() {
                    // On mobile, there is a race condition between the result of `'wallet_addEthereumChain'` and `'eth_chainId'`.
                    // To avoid this, we wait for `'eth_chainId'` to return the expected chain ID with a retry loop.
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
                        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToNumber"])(await provider.request({
                            method: 'eth_chainId'
                        }));
                        // `value` doesn't match expected `chainId`, throw to trigger retry
                        if (value !== chainId) throw new Error('User rejected switch after adding network.');
                        return value;
                    }, {
                        delay: 50,
                        retryCount: 20
                    });
                }
                async function sendAndWaitForChangeEvent(chainId) {
                    await new Promise((resolve)=>{
                        const listener = (data)=>{
                            if ('chainId' in data && data.chainId === chainId) {
                                config.emitter.off('change', listener);
                                resolve();
                            }
                        };
                        config.emitter.on('change', listener);
                        config.emitter.emit('change', {
                            chainId
                        });
                    });
                }
            },
            async onAccountsChanged (accounts) {
                // Disconnect if there are no accounts
                if (accounts.length === 0) {
                    // ... and using browser extension
                    if (sdk.isExtensionActive()) this.onDisconnect();
                    else return;
                } else if (config.emitter.listenerCount('connect')) {
                    const chainId = (await this.getChainId()).toString();
                    this.onConnect({
                        chainId
                    });
                } else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onConnect (connectInfo) {
                const accounts = await this.getAccounts();
                if (accounts.length === 0) return;
                const chainId = Number(connectInfo.chainId);
                config.emitter.emit('connect', {
                    accounts,
                    chainId
                });
                const provider = await this.getProvider();
                if (connect) {
                    provider.removeListener('connect', connect);
                    connect = undefined;
                }
                if (!accountsChanged) {
                    accountsChanged = this.onAccountsChanged.bind(this);
                    provider.on('accountsChanged', accountsChanged);
                }
                if (!chainChanged) {
                    chainChanged = this.onChainChanged.bind(this);
                    provider.on('chainChanged', chainChanged);
                }
                if (!disconnect) {
                    disconnect = this.onDisconnect.bind(this);
                    provider.on('disconnect', disconnect);
                }
            },
            async onDisconnect (error) {
                const provider = await this.getProvider();
                // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
                // https://github.com/MetaMask/providers/pull/120
                if (error && error.code === 1013) {
                    if (provider && !!(await this.getAccounts()).length) return;
                }
                config.emitter.emit('disconnect');
                // Manage EIP-1193 event listeners
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
            },
            onDisplayUri (uri) {
                config.emitter.emit('message', {
                    type: 'display_uri',
                    data: uri
                });
            }
        }));
} //# sourceMappingURL=metaMask.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/cookie.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cookieStorage": (()=>cookieStorage),
    "cookieToInitialState": (()=>cookieToInitialState),
    "parseCookie": (()=>parseCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.1_react@19.0.0_typescript@5._6225tdx6jdlykhvthp3lc3rf4e/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-rsc] (ecmascript)");
;
const cookieStorage = {
    getItem (key) {
        if ("TURBOPACK compile-time truthy", 1) return null;
        "TURBOPACK unreachable";
        const value = undefined;
    },
    setItem (key, value) {
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
    },
    removeItem (key) {
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
    }
};
function cookieToInitialState(config, cookie) {
    if (!cookie) return undefined;
    const key = `${config.storage?.key}.store`;
    const parsed = parseCookie(cookie, key);
    if (!parsed) return undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_typescript$40$5$2e$_6225tdx6jdlykhvthp3lc3rf4e$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deserialize"])(parsed).state;
}
function parseCookie(cookie, key) {
    const keyValue = cookie.split('; ').find((x)=>x.startsWith(`${key}=`));
    if (!keyValue) return undefined;
    return keyValue.substring(key.length + 1);
} //# sourceMappingURL=cookie.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/transport.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UrlRequiredError": (()=>UrlRequiredError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
class UrlRequiredError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.', {
            docsPath: '/docs/clients/intro',
            name: 'UrlRequiredError'
        });
    }
} //# sourceMappingURL=transport.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/rpc/id.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "idCache": (()=>idCache)
});
function createIdStore() {
    return {
        current: 0,
        take () {
            return this.current++;
        },
        reset () {
            this.current = 0;
        }
    };
}
const idCache = /*#__PURE__*/ createIdStore(); //# sourceMappingURL=id.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/rpc/http.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getHttpRpcClient": (()=>getHttpRpcClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withTimeout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$id$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/rpc/id.js [app-rsc] (ecmascript)");
;
;
;
;
function getHttpRpcClient(url, options = {}) {
    return {
        async request (params) {
            const { body, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 10_000 } = params;
            const fetchOptions = {
                ...options.fetchOptions ?? {},
                ...params.fetchOptions ?? {}
            };
            const { headers, method, signal: signal_ } = fetchOptions;
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withTimeout"])(async ({ signal })=>{
                    const init = {
                        ...fetchOptions,
                        body: Array.isArray(body) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(body.map((body)=>({
                                jsonrpc: '2.0',
                                id: body.id ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$id$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["idCache"].take(),
                                ...body
                            }))) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])({
                            jsonrpc: '2.0',
                            id: body.id ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$id$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["idCache"].take(),
                            ...body
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            ...headers
                        },
                        method: method || 'POST',
                        signal: signal_ || (timeout > 0 ? signal : null)
                    };
                    const request = new Request(url, init);
                    const args = await onRequest?.(request, init) ?? {
                        ...init,
                        url
                    };
                    const response = await fetch(args.url ?? url, args);
                    return response;
                }, {
                    errorInstance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TimeoutError"]({
                        body,
                        url
                    }),
                    timeout,
                    signal: true
                });
                if (onResponse) await onResponse(response);
                let data;
                if (response.headers.get('Content-Type')?.startsWith('application/json')) data = await response.json();
                else {
                    data = await response.text();
                    try {
                        data = JSON.parse(data || '{}');
                    } catch (err) {
                        if (response.ok) throw err;
                        data = {
                            error: data
                        };
                    }
                }
                if (!response.ok) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                        body,
                        details: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(data.error) || response.statusText,
                        headers: response.headers,
                        status: response.status,
                        url
                    });
                }
                return data;
            } catch (err) {
                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpRequestError"]) throw err;
                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TimeoutError"]) throw err;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                    body,
                    cause: err,
                    url
                });
            }
        }
    };
} //# sourceMappingURL=http.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withDedupe.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "promiseCache": (()=>promiseCache),
    "withDedupe": (()=>withDedupe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/lru.js [app-rsc] (ecmascript)");
;
const promiseCache = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LruMap"](8192);
function withDedupe(fn, { enabled = true, id }) {
    if (!enabled || !id) return fn();
    if (promiseCache.get(id)) return promiseCache.get(id);
    const promise = fn().finally(()=>promiseCache.delete(id));
    promiseCache.set(id, promise);
    return promise;
} //# sourceMappingURL=withDedupe.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/buildRequest.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildRequest": (()=>buildRequest),
    "shouldRetry": (()=>shouldRetry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/rpc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withDedupe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withDedupe.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withRetry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/base.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function buildRequest(request, options = {}) {
    return async (args, overrideOptions = {})=>{
        const { dedupe = false, methods, retryDelay = 150, retryCount = 3, uid } = {
            ...options,
            ...overrideOptions
        };
        const { method } = args;
        if (methods?.exclude?.includes(method)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MethodNotSupportedRpcError"](new Error('method not supported'), {
            method
        });
        if (methods?.include && !methods.include.includes(method)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MethodNotSupportedRpcError"](new Error('method not supported'), {
            method
        });
        const requestId = dedupe ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringToHex"])(`${uid}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(args)}`) : undefined;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withDedupe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDedupe"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
                try {
                    return await request(args);
                } catch (err_) {
                    const err = err_;
                    switch(err.code){
                        // -32700
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseRpcError"](err);
                        // -32600
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidRequestRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidRequestRpcError"](err);
                        // -32601
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MethodNotFoundRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MethodNotFoundRpcError"](err, {
                                method: args.method
                            });
                        // -32602
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidParamsRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidParamsRpcError"](err);
                        // -32603
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InternalRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InternalRpcError"](err);
                        // -32000
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputRpcError"](err);
                        // -32001
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceNotFoundRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceNotFoundRpcError"](err);
                        // -32002
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](err);
                        // -32003
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionRejectedRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionRejectedRpcError"](err);
                        // -32004
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MethodNotSupportedRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MethodNotSupportedRpcError"](err, {
                                method: args.method
                            });
                        // -32005
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LimitExceededRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LimitExceededRpcError"](err);
                        // -32006
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonRpcVersionUnsupportedError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonRpcVersionUnsupportedError"](err);
                        // 4001
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](err);
                        // 4100
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnauthorizedProviderError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnauthorizedProviderError"](err);
                        // 4200
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnsupportedProviderMethodError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnsupportedProviderMethodError"](err);
                        // 4900
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderDisconnectedError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderDisconnectedError"](err);
                        // 4901
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChainDisconnectedError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChainDisconnectedError"](err);
                        // 4902
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SwitchChainError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SwitchChainError"](err);
                        // CAIP-25: User Rejected Error
                        // https://docs.walletconnect.com/2.0/specs/clients/sign/error-codes#rejected-caip-25
                        case 5000:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](err);
                        default:
                            if (err_ instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseError"]) throw err_;
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnknownRpcError"](err);
                    }
                }
            }, {
                delay: ({ count, error })=>{
                    // If we find a Retry-After header, let's retry after the given time.
                    if (error && error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpRequestError"]) {
                        const retryAfter = error?.headers?.get('Retry-After');
                        if (retryAfter?.match(/\d/)) return Number.parseInt(retryAfter) * 1000;
                    }
                    // Otherwise, let's retry with an exponential backoff.
                    return ~~(1 << count) * retryDelay;
                },
                retryCount,
                shouldRetry: ({ error })=>shouldRetry(error)
            }), {
            enabled: dedupe,
            id: requestId
        });
    };
}
function shouldRetry(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === -1) return true; // Unknown error
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LimitExceededRpcError"].code) return true;
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InternalRpcError"].code) return true;
        return false;
    }
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpRequestError"] && error.status) {
        // Forbidden
        if (error.status === 403) return true;
        // Request Timeout
        if (error.status === 408) return true;
        // Request Entity Too Large
        if (error.status === 413) return true;
        // Too Many Requests
        if (error.status === 429) return true;
        // Internal Server Error
        if (error.status === 500) return true;
        // Bad Gateway
        if (error.status === 502) return true;
        // Service Unavailable
        if (error.status === 503) return true;
        // Gateway Timeout
        if (error.status === 504) return true;
        return false;
    }
    return true;
} //# sourceMappingURL=buildRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/createTransport.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createTransport": (()=>createTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/uid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$buildRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/buildRequest.js [app-rsc] (ecmascript)");
;
;
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uid"])();
    return {
        config: {
            key,
            methods,
            name,
            request,
            retryCount,
            retryDelay,
            timeout,
            type
        },
        request: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$buildRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequest"])(request, {
            methods,
            retryCount,
            retryDelay,
            uid
        }),
        value
    };
} //# sourceMappingURL=createTransport.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withResolvers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** @internal */ __turbopack_esm__({
    "withResolvers": (()=>withResolvers)
});
function withResolvers() {
    let resolve = ()=>undefined;
    let reject = ()=>undefined;
    const promise = new Promise((resolve_, reject_)=>{
        resolve = resolve_;
        reject = reject_;
    });
    return {
        promise,
        resolve,
        reject
    };
} //# sourceMappingURL=withResolvers.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/createBatchScheduler.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createBatchScheduler": (()=>createBatchScheduler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withResolvers.js [app-rsc] (ecmascript)");
;
const schedulerCache = /*#__PURE__*/ new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, sort }) {
    const exec = async ()=>{
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args })=>args);
        if (args.length === 0) return;
        fn(args).then((data)=>{
            if (sort && Array.isArray(data)) data.sort(sort);
            for(let i = 0; i < scheduler.length; i++){
                const { resolve } = scheduler[i];
                resolve?.([
                    data[i],
                    data
                ]);
            }
        }).catch((err)=>{
            for(let i = 0; i < scheduler.length; i++){
                const { reject } = scheduler[i];
                reject?.(err);
            }
        });
    };
    const flush = ()=>schedulerCache.delete(id);
    const getBatchedArgs = ()=>getScheduler().map(({ args })=>args);
    const getScheduler = ()=>schedulerCache.get(id) || [];
    const setScheduler = (item)=>schedulerCache.set(id, [
            ...getScheduler(),
            item
        ]);
    return {
        flush,
        async schedule (args) {
            const { promise, resolve, reject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withResolvers"])();
            const split = shouldSplitBatch?.([
                ...getBatchedArgs(),
                args
            ]);
            if (split) exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({
                    args,
                    resolve,
                    reject
                });
                return promise;
            }
            setScheduler({
                args,
                resolve,
                reject
            });
            setTimeout(exec, wait);
            return promise;
        }
    };
} //# sourceMappingURL=createBatchScheduler.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/http.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "http": (()=>http)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$http$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/rpc/http.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/createTransport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/createBatchScheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.5.4_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/request.js [app-rsc] (ecmascript)");
;
;
;
;
;
function http(/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */ url, config = {}) {
    const { batch, fetchOptions, key = 'http', methods, name = 'HTTP JSON-RPC', onFetchRequest, onFetchResponse, retryDelay } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const { batchSize = 1000, wait = 0 } = typeof batch === 'object' ? batch : {};
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.http[0];
        if (!url_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UrlRequiredError"]();
        const rpcClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$http$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHttpRpcClient"])(url_, {
            fetchOptions,
            onRequest: onFetchRequest,
            onResponse: onFetchResponse,
            timeout
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const { schedule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBatchScheduler"])({
                    id: url_,
                    wait,
                    shouldSplitBatch (requests) {
                        return requests.length > batchSize;
                    },
                    fn: (body)=>rpcClient.request({
                            body
                        }),
                    sort: (a, b)=>a.id - b.id
                });
                const fn = async (body)=>batch ? schedule(body) : [
                        await rpcClient.request({
                            body
                        })
                    ];
                const [{ error, result }] = await fn(body);
                if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$5$2e$4_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RpcRequestError"]({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'http'
        }, {
            fetchOptions,
            url: url_
        });
    };
} //# sourceMappingURL=http.js.map
}}),

};

//# sourceMappingURL=08b5e__pnpm_3e27b2._.js.map