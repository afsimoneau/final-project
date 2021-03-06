// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../rbd/pnpm-volume/a97c73be-be8a-4582-8574-3e06e9c3326f/node_modules/.registry.npmjs.org/parcel-bundler/1.12.4/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../rbd/pnpm-volume/a97c73be-be8a-4582-8574-3e06e9c3326f/node_modules/.registry.npmjs.org/parcel-bundler/1.12.4/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../rbd/pnpm-volume/a97c73be-be8a-4582-8574-3e06e9c3326f/node_modules/.registry.npmjs.org/parcel-bundler/1.12.4/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../rbd/pnpm-volume/a97c73be-be8a-4582-8574-3e06e9c3326f/node_modules/.registry.npmjs.org/parcel-bundler/1.12.4/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/litegraph.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../rbd/pnpm-volume/a97c73be-be8a-4582-8574-3e06e9c3326f/node_modules/.registry.npmjs.org/parcel-bundler/1.12.4/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/litegraph-editor.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/app/src/imgs/load-progress-empty.png":[["load-progress-empty.6cfc5d1c.png","imgs/load-progress-empty.png"],"imgs/load-progress-empty.png"],"/app/src/imgs/load-progress-full.png":[["load-progress-full.e79bec45.png","imgs/load-progress-full.png"],"imgs/load-progress-full.png"],"_css_loader":"../../rbd/pnpm-volume/a97c73be-be8a-4582-8574-3e06e9c3326f/node_modules/.registry.npmjs.org/parcel-bundler/1.12.4/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.compute_slots = compute_slots;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_crossorigin = is_crossorigin;
exports.is_empty = is_empty;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.update_slot = update_slot;
exports.validate_component = validate_component;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.has_prop = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);

  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);

  for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];

  return rest;
}

function compute_slots(slots) {
  const result = {};

  for (const key in slots) {
    result[key] = true;
  }

  return result;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  const value = new Set();

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value.delete(__value);
  }

  return Array.from(value);
}

function to_number(value) {
  return value === '' ? null : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      let j = 0;
      const remove = [];

      while (j < node.attributes.length) {
        const attribute = node.attributes[j++];

        if (!attributes[attribute.name]) {
          remove.push(attribute.name);
        }
      }

      for (let k = 0; k < remove.length; k++) {
        node.removeAttribute(remove[k]);
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.wholeText !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
} // unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead


let crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  const computed_style = getComputedStyle(node);
  const z_index = (parseInt(computed_style.zIndex) || 0) - 1;

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  const iframe = element('iframe');
  iframe.setAttribute('style', `display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ` + `overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${z_index};`);
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  const crossorigin = is_crossorigin();
  let unsubscribe;

  if (crossorigin) {
    iframe.src = `data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>`;
    unsubscribe = listen(window, 'message', event => {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = () => {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return () => {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}

class HtmlTag {
  constructor(anchor = null) {
    this.a = anchor;
    this.e = this.n = null;
  }

  m(html, target, anchor = null) {
    if (!this.e) {
      this.e = element(target.nodeName);
      this.t = target;
      this.h(html);
    }

    this.i(anchor);
  }

  h(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(this.t, this.n[i], anchor);
    }
  }

  p(html) {
    this.d();
    this.h(html);
    this.i(this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
const active_docs = new Set();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = node.ownerDocument;
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    active_docs.forEach(doc => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);

      if (!info.hasCatch) {
        throw error;
      }
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

const globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  const keys = new Set();

  for (let i = 0; i < list.length; i++) {
    const key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error(`Cannot have duplicate keys in a keyed each`);
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);

  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += ' ' + classes_to_add;
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
    }
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        title: '',
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  const index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.29.0'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

  $capture_state() {}

  $inject_state() {}

}

exports.SvelteComponentDev = SvelteComponentDev;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error(`Infinite loop detected`);
    }
  };
}
},{}],"../node_modules/svelte/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SvelteComponent", {
  enumerable: true,
  get: function () {
    return _internal.SvelteComponentDev;
  }
});
Object.defineProperty(exports, "afterUpdate", {
  enumerable: true,
  get: function () {
    return _internal.afterUpdate;
  }
});
Object.defineProperty(exports, "beforeUpdate", {
  enumerable: true,
  get: function () {
    return _internal.beforeUpdate;
  }
});
Object.defineProperty(exports, "createEventDispatcher", {
  enumerable: true,
  get: function () {
    return _internal.createEventDispatcher;
  }
});
Object.defineProperty(exports, "getContext", {
  enumerable: true,
  get: function () {
    return _internal.getContext;
  }
});
Object.defineProperty(exports, "onDestroy", {
  enumerable: true,
  get: function () {
    return _internal.onDestroy;
  }
});
Object.defineProperty(exports, "onMount", {
  enumerable: true,
  get: function () {
    return _internal.onMount;
  }
});
Object.defineProperty(exports, "setContext", {
  enumerable: true,
  get: function () {
    return _internal.setContext;
  }
});
Object.defineProperty(exports, "tick", {
  enumerable: true,
  get: function () {
    return _internal.tick;
  }
});

var _internal = require("./internal");
},{"./internal":"../node_modules/svelte/internal/index.mjs"}],"js/canvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

function init(user) {
  var webgl_canvas = null;
  LiteGraph.node_images_path = "../nodes_data/";
  var editor = new LiteGraph.Editor("main", {
    miniwindow: false
  });
  window.graphcanvas = editor.graphcanvas;
  window.graph = editor.graph;
  window.addEventListener("resize", function () {
    editor.graphcanvas.resize();
  }); // call resize on load

  editor.graphcanvas.resize();

  window.onbeforeunload = function () {
    var data = JSON.stringify(graph.serialize());
    localStorage.setItem("litegraphg demo backup", data); //localStorage.setItem("Demo1", prev_data);
  }; //enable scripting


  LiteGraph.allow_scripts = true;
  let footer = document.createElement("span");
  footer.className = "selector";
  footer.innerHTML = "Hello, " + user.username + "! <form action='/auth/logout'><button type='submit' class='btn btn-danger'>Log Out <i class='fab fa-github'/></button></form>";
  document.querySelector(".footer").querySelector(".tools-right").appendChild(footer); //create scene selector

  var elem = document.createElement("span");
  elem.className = "selector";
  elem.innerHTML = "Demo <select><option>Empty</option></select> <button class='btn' id='save'>Save</button><button class='btn' id='load'>Load</button><button class='btn' id='download'>Download</button>";
  document.querySelector(".tools-left").appendChild(elem);
  var select = elem.querySelector("select");
  select.addEventListener("change", function (e) {
    var option = this.options[this.selectedIndex];
    var url = option.dataset["url"];
    if (url) graph.load(url);else if (option.callback) option.callback();else graph.clear();
  });
  elem.querySelector("#save").addEventListener("click", function () {
    console.log("saved"); // const user = document.getElementById("username").innerHTML;

    const now = new Date();
    const secondsSinceEpoch = Math.round(now.getTime() / 1000);
    const insertString = JSON.stringify({
      user: user.username,
      time: secondsSinceEpoch,
      graph: graph.serialize()
    });
    fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: insertString
    }).then(function (response) {
      console.log(response.json().then(data => {}));
    });
  });
  elem.querySelector("#load").addEventListener("click", function () {
    // const user = document.getElementById("username").innerHTML;
    fetch("/load", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: user.username
      })
    }).then(function (response) {
      console.log(response.json().then(data => {
        if (data.length != 0) {
          graph.configure(data[0].graph);
        }
      }));
    });
  });
  elem.querySelector("#download").addEventListener("click", function () {
    var data = JSON.stringify(graph.serialize());
    var file = new Blob([data]);
    var url = URL.createObjectURL(file);
    var element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("download", "graph.JSON");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000 * 60); //wait one minute to revoke url
  });

  function addDemo(name, url) {
    var option = document.createElement("option");
    if (url.constructor === String) option.dataset["url"] = url;else option.callback = url;
    option.innerHTML = name;
    select.appendChild(option);
  }

  addDemo("Demo1", "../examples/demo1.json");
  addDemo("Demo2", "../examples/demo2.json");
  addDemo("Demo3", "../examples/demo3.json");
  addDemo("Demo4", "../examples/demo4.json");
  addDemo("Demo5", "../examples/demo5.json");
  addDemo("Demo6", "../examples/demo6.json");
  addDemo("Network (Beta)", "../examples/network.json");
  addDemo("Showcase", "../examples/showcase.json"); //some examples
  // addDemo("Features", "examples/features.json");
  // addDemo("Benchmark", "examples/benchmark.json");
  // addDemo("Subgraph", "examples/subgraph.json");
  // addDemo("Audio", "examples/audio.json");
  // addDemo("Audio Delay", "examples/audio_delay.json");
  // addDemo("Audio Reverb", "examples/audio_reverb.json");
  // addDemo("MIDI Generation", "examples/midi_generation.json");

  addDemo("autobackup", function () {
    var data = localStorage.getItem("litegraphg demo backup");
    if (!data) return;
    var graph_data = JSON.parse(data);
    graph.configure(graph_data);
  });
}
},{}],"nodes/instruments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

function init() {
  let defaults = {
    trigger: [0.5, 0.75, 1.0],
    note: [220, 330, 440]
  };
  let list = [{
    name: "Clap",
    function: () => Clap(),
    key: "trigger",
    props: {
      gain: 1,
      spacing: 100,
      decay: 0.2,
      loudness: 1
    }
  }, {
    name: "Conga",
    function: () => Conga(),
    key: "trigger",
    props: {
      gain: 1,
      spacing: 100,
      decay: 0.2,
      loudness: 1
    }
  }, {
    name: "Cowbell",
    function: () => Cowbell(),
    key: "trigger",
    props: {
      gain: 1,
      decay: 0.5,
      loudness: 1
    }
  }, {
    name: "FM",
    function: () => FM(),
    key: "note",
    props: {
      gain: 0.5,
      attack: 44,
      decay: 22050
    }
  }, {
    name: "Hat",
    function: () => Hat(),
    key: "trigger",
    props: {
      gain: 0.5,
      tune: 0.6,
      decay: 0.1,
      loudness: 1
    }
  }, {
    name: "Karplus",
    function: () => Karplus(),
    key: "note",
    props: {
      gain: 0.5,
      decay: 0.97,
      loudness: 1,
      damping: 0.2,
      glide: 1
    }
  }, {
    name: "Kick",
    function: () => Kick(),
    key: "trigger",
    props: {
      gain: 1,
      frequency: 85,
      tone: 0.25,
      decay: 0.9,
      loudness: 1
    }
  }, {
    name: "Snare",
    function: () => Snare(),
    key: "trigger",
    props: {
      gain: 0.5,
      tune: 0,
      snappy: 1,
      decay: 0.1,
      loudness: 1
    }
  }, {
    name: "Synth",
    function: () => Synth(),
    key: "note",
    props: {
      gain: 0.5,
      attack: 44,
      decay: 22050
    }
  }, {
    name: "Tom",
    function: () => Tom(),
    key: "trigger",
    props: {
      gain: 1,
      frequency: 120,
      decay: 0.7,
      loudness: 1
    }
  }]; //list.sort((a, b) => (a.name > b.name ? 1 : -1));

  list.forEach(instrument => {
    function Node() {
      this.addOutput("instrument", "instrument");
      Object.keys(instrument.props).forEach(key => {
        this.addInput(key, "number");
      });
    } //name to show


    Node.title = instrument.name;

    Node.prototype.onStart = function () {
      this.setOutputData(0, {
        sound: this.gibberishInstrument,
        key: this.gibberishKey
      });
    };

    Node.prototype.onAdded = function () {
      this.gibberishInstrument = instrument.function();
      this.gibberishKey = instrument.key;
      this.setOutputData(0, {
        sound: this.gibberishInstrument,
        key: this.gibberishKey
      });
    };

    Node.prototype.onExecute = function () {
      Object.keys(instrument.props).forEach((key, i) => {
        let value = isNaN(this.getInputData(i)) ? instrument.props[key] : this.getInputData(i);
        this.gibberishInstrument[key] = value;
      });
    };

    Node.prototype.onConnectionsChange = function (connection, slot, connected, link_info) {
      //only process the outputs events
      if (connection != LiteGraph.OUTPUT) {
        return;
      }

      if (connected) {
        if (link_info.origin_slot === 0) {
          this.setOutputData(0, {
            sound: this.gibberishInstrument,
            key: this.gibberishKey
          });
        }
      }
    }; //register in the system


    LiteGraph.registerNodeType("instrument/" + instrument.name, Node);
  }); // --- SEQUENCER --- \\

  function SequencerNode() {
    this.addInput("instrument", "instrument");
    this.addInput("values", "array");
    this.addInput("timings", "array");
  }

  function mapSequencerInput(node, instrument) {
    node.gibberishInstrument = instrument.sound;
    node.gibberishSequencer.target = node.gibberishInstrument;
    node.gibberishSequencer.values = defaults[instrument.key];
    node.gibberishSequencer.key = instrument.key;

    if (graph.status === LGraph.STATUS_RUNNING) {
      node.gibberishInstrument.connect();
      node.gibberishSequencer.start();
    }
  }

  SequencerNode.title = "Sequencer";

  SequencerNode.prototype.onAdded = function () {
    if (this.getInputData(0)) {
      mapSequencerInput(this, this.getInputData(0));
    } else {
      this.gibberishInstrument;
      this.gibberishSequencer = Sequencer.make(defaults["trigger"], [15000], this.gibberishInstrument, "trigger");
    }
  };

  SequencerNode.prototype.onRemoved = function () {
    if (this.gibberishInstrument) {
      this.gibberishSequencer.stop();
      this.gibberishInstrument.disconnect();
    }
  };

  SequencerNode.prototype.onStop = function () {
    if (this.gibberishInstrument) {
      this.gibberishSequencer.stop();
      this.gibberishInstrument.disconnect();
    }
  };

  SequencerNode.prototype.onStart = function () {
    if (this.gibberishInstrument) {
      this.gibberishInstrument.connect();
      this.gibberishSequencer.start();
    } else if (this.getInputData(0)) {
      mapSequencerInput(this, this.getInputData(0));
    }
  };

  SequencerNode.prototype.onExecute = function () {
    let values = this.getInputData(1);
    let timings = this.getInputData(2);

    if (values) {
      values = values.some(isNaN) ? defaults[this.gibberishSequencer.key] : values;
      this.gibberishSequencer.values = values;
    }

    if (timings) {
      timings = timings.some(isNaN) ? [10000] : timings;
      this.gibberishSequencer.timings = timings;
    }
  };

  SequencerNode.prototype.onConnectionsChange = function (connection, slot, connected, link_info) {
    //only process the inputs events
    if (connection != LiteGraph.INPUT) {
      return;
    }

    if (connected && link_info && link_info.data) {
      if (link_info.target_slot === 0) {
        mapSequencerInput(this, link_info.data);
      }
    } else if (!connected && link_info) {
      if (link_info.target_slot === 0) {
        if (this.gibberishInstrument) {
          this.gibberishSequencer.stop();
          this.gibberishInstrument.disconnect();
          this.gibberishInstrument = false;
        }
      }
    }
  };

  LiteGraph.registerNodeType("instrument/Sequencer", SequencerNode);
}
},{}],"nodes/oscillators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

function init() {
  let list = [{
    name: "Noise",
    function: () => Noise()
  }, {
    name: "PWM",
    function: () => PWM()
  }, {
    name: "ReverseSaw",
    function: () => ReverseSaw()
  }, {
    name: "Saw",
    function: () => Saw()
  }, {
    name: "Sine",
    function: () => Sine()
  }, {
    name: "Square",
    function: () => Square()
  }, {
    name: "Triangle",
    function: () => Triangle()
  }];
  list.forEach(oscillator => {
    function Node() {
      this.addOutput("oscillator", "oscillator");
      this.addInput("frequency", "number");
      this.addInput("gain", "number");
    } //name to show


    Node.title = oscillator.name;

    Node.prototype.onStart = function () {
      this.setOutputData(0, this.gibberishOscillator);
    };

    Node.prototype.onAdded = function () {
      this.gibberishOscillator = oscillator.function();
      this.setOutputData(0, this.gibberishOscillator);
    };

    Node.prototype.onExecute = function () {
      let freq = isNaN(this.getInputData(0)) ? 200 : this.getInputData(0);
      let gain = isNaN(this.getInputData(1)) ? 1.0 : this.getInputData(1);
      this.gibberishOscillator.frequency = freq;
      this.gibberishOscillator.gain = gain;
    };

    Node.prototype.onConnectionsChange = function (connection, slot, connected, link_info) {
      //only process the outputs events
      if (connection != LiteGraph.OUTPUT) {
        return;
      }

      if (connected) {
        if (link_info.origin_slot === 0) {
          this.setOutputData(0, this.gibberishOscillator);
        }
      }
    }; //register in the system


    LiteGraph.registerNodeType("oscillator/" + oscillator.name, Node);
  });

  function OutputNode() {
    this.addInput("oscillator", "oscillator");
  }

  function mapOutputInput(node, input) {
    node.gibberishOscillator = input;

    if (graph.status === LGraph.STATUS_RUNNING) {
      node.gibberishOscillator.connect();
    }
  }

  OutputNode.title = "Output";

  OutputNode.prototype.onStart = function () {
    if (this.gibberishOscillator) {
      this.gibberishOscillator.connect();
    } else if (this.getInputData(0)) {
      mapOutputInput(this, this.getInputData(0));
    }
  };

  OutputNode.prototype.onAdded = function () {
    if (this.getInputData(0)) {
      mapOutputInput(this, this.getInputData(0));
    }
  };

  OutputNode.prototype.onStop = function () {
    if (this.gibberishOscillator) {
      this.gibberishOscillator.disconnect();
    }
  };

  OutputNode.prototype.onRemoved = function () {
    if (this.gibberishOscillator) {
      this.gibberishOscillator.disconnect();
    }
  };

  OutputNode.prototype.onConnectionsChange = function (connection, slot, connected, link_info) {
    //only process the outputs events
    if (connection != LiteGraph.INPUT) {
      return;
    }

    if (connected && link_info && link_info.data) {
      if (link_info.target_slot === 0) {
        mapOutputInput(this, link_info.data);
      }
    } else if (link_info) {
      if (link_info.target_slot === 0 && this.gibberishOscillator) {
        this.gibberishOscillator.disconnect();
        this.gibberishOscillator = false;
      }
    }
  };

  LiteGraph.registerNodeType("oscillator/Output", OutputNode);
}
},{}],"nodes/effects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

function init() {
  let list = [{
    name: "BitCrusher",
    function: params => BitCrusher(params),
    props: {
      bitDepth: 0.5,
      sampleRate: 0.5
    }
  }, {
    name: "Buffer Shuffler",
    function: params => Shuffler(params),
    props: {
      rate: 22050,
      chance: 0.25,
      reverseChance: 0.5,
      repitchChance: 0.5,
      repitchMin: 0.5,
      repitchMax: 2,
      pan: 0.5,
      mix: 0.5
    }
  }, {
    name: "Chorus",
    function: params => Chorus(params),
    props: {
      slowFrequency: 0.18,
      slowGain: 3,
      fastFrequency: 6,
      fastGain: 1,
      inputGain: 1
    }
  }, {
    name: "Delay",
    function: params => Delay(params),
    props: {
      feedback: 0.5,
      time: 11025,
      wetdry: 0.5
    }
  }, {
    name: "Distortion",
    function: params => Distortion(params),
    props: {
      shape1: 0.1,
      shape2: 0.1,
      pregain: 5,
      postgain: 0.5
    }
  }, {
    name: "Flanger",
    function: params => Flanger(params),
    props: {
      feedback: 0.81,
      offset: 0.125,
      frequency: 1
    }
  }, {
    name: "Ring Mod",
    function: params => RingMod(params),
    props: {
      frequency: 220,
      gain: 1,
      mix: 1
    }
  }, {
    name: "Freeverb",
    function: params => Freeverb(params),
    props: {
      wet1: 1,
      wet2: 0,
      dry: 0.5,
      roomSize: 0.925,
      damping: 0.5
    }
  }, {
    name: "Vibrato",
    function: params => Vibrato(params),
    props: {
      feedback: 0.01,
      amount: 0.5,
      frequency: 4
    }
  }];
  list.forEach(object => {
    function Node() {
      this.addInput("instrument", "instrument");
      this.addOutput("instrument", "instrument");
      Object.keys(object.props).forEach(key => {
        this.addInput(key, "number");
      });
      this.effect = object.function;
    }

    function mapNodeInput(node, input, effect) {
      node.gibberishInput = input;
      node.gibberishEffect = node.effect({
        input: node.gibberishInput.sound
      });

      if (graph.status === LGraph.STATUS_RUNNING) {
        node.gibberishEffect.connect();
      }
    } //name to show


    Node.title = object.name;

    Node.prototype.onStart = function () {
      // need to check if gibberishInput exists
      if (this.getInputData(0)) {
        mapNodeInput(this, this.getInputData(0));
      }
    };

    Node.prototype.onAdded = function () {
      if (this.getInputData(0)) {
        mapNodeInput(this, this.getInputData(0));
      } ///
      // this is a Gibberish Effect
      //this.effect = object.function();
      // this is a Gibberish Instrument
      //this.input = this.getInputData(0);

    };

    Node.prototype.onRemoved = function () {
      if (this.gibberishEffect) {
        this.gibberishEffect.disconnect();
      }
    };

    Node.prototype.onStopped = function () {
      if (this.gibberishEffect) {
        this.gibberishEffect.disconnect();
      }
    };

    Node.prototype.onExecute = function () {
      //connect this.gibberishEffect and set input on that object to gibberishInput object
      if (this.gibberishEffect) {
        Object.keys(object.props).forEach((key, i) => {
          let value = isNaN(this.getInputData(i + 1)) ? object.props[key] : this.getInputData(i + 1);
          this.gibberishEffect[key] = value;
        });
      }
    };

    Node.prototype.onConnectionsChange = function (connection, slot, connected, link_info) {
      if (connection === LiteGraph.INPUT) {
        if (connected && link_info && link_info.data) {
          if (link_info.target_slot === 0) {
            mapNodeInput(this, link_info.data);
          }
        } else if (link_info) {
          // disconnnected?
          if (link_info.target_slot === 0) {
            if (this.gibberishEffect) {
              this.gibberishEffect.disconnect();
            }
          }
        }
      } else {
        this.setOutputData(0, this.gibberishInput);
      } // connected
      //alex needs to fix what this does lol

    }; //register in the system


    LiteGraph.registerNodeType("effect/" + object.name, Node);
  });
}
},{}],"nodes/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

function init() {
  // --- ARRAY --- \\
  function ArrayNode() {
    this.addOutput("Array", "array");
    this.widget = this.addWidget("text", "string", "", "value");
    this.widgets_up = true;
  }

  ArrayNode.title = "Array";

  ArrayNode.prototype.onStart = function () {
    let data = this.widget.value;

    if (data) {
      this.setOutputData(0, JSON.parse("[" + data + "]"));
      console.log(data.split(","));
      console.log("array start out");
    }
  };

  ArrayNode.prototype.onStop = function () {
    this.setOutputData(0, false);
    console.log("array stop out");
  }; //LiteGraph.registerNodeType("helper/array", ArrayNode);

}
},{}],"js/gibb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var Instruments = _interopRequireWildcard(require("../nodes/instruments.js"));

var Oscillators = _interopRequireWildcard(require("../nodes/oscillators.js"));

var Effects = _interopRequireWildcard(require("../nodes/effects.js"));

var Helpers = _interopRequireWildcard(require("../nodes/helpers.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function init() {
  Gibberish.workletPath = "https://raw.githack.com/gibber-cc/gibberish/v3/dist/gibberish_worklet.js";
  Gibberish.init().then(() => {
    console.log("Gibb is good");
    Gibberish.export(window);
    Instruments.init();
    Oscillators.init();
    Effects.init();
    Helpers.init();
  });
}
},{"../nodes/instruments.js":"nodes/instruments.js","../nodes/oscillators.js":"nodes/oscillators.js","../nodes/effects.js":"nodes/effects.js","../nodes/helpers.js":"nodes/helpers.js"}],"components/LiteGraph.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var Editor = _interopRequireWildcard(require("../js/canvas.js"));

var Gibb = _interopRequireWildcard(require("../js/gibb.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* components/LiteGraph.svelte generated by Svelte v3.29.0 */
const file = "components/LiteGraph.svelte";

function create_fragment(ctx) {
  let div;
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      (0, _internal.attr_dev)(div, "id", "main");
      (0, _internal.add_location)(div, file, 25, 0, 441);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("LiteGraph", slots, []);
  let {
    user
  } = $$props; // $(document).ready(function(){
  //     $("#dropdown").on("click", function()
  //       $(this).append("<option>1</option><option>2</option>");
  //     });
  //   });

  (0, _svelte.onMount)(async () => {
    Gibb.init();
    Editor.init(user);
  });
  const writable_props = ["user"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<LiteGraph> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = $$props => {
    if ("user" in $$props) $$invalidate(0, user = $$props.user);
  };

  $$self.$capture_state = () => ({
    onMount: _svelte.onMount,
    Editor,
    Gibb,
    user
  });

  $$self.$inject_state = $$props => {
    if ("user" in $$props) $$invalidate(0, user = $$props.user);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [user];
}

class LiteGraph extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      user: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "LiteGraph",
      options,
      id: create_fragment.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*user*/
    ctx[0] === undefined && !("user" in props)) {
      console.warn("<LiteGraph> was created without expected prop 'user'");
    }
  }

  get user() {
    throw new Error("<LiteGraph>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set user(value) {
    throw new Error("<LiteGraph>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = LiteGraph;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","../js/canvas.js":"js/canvas.js","../js/gibb.js":"js/gibb.js"}],"components/App.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _LiteGraph = _interopRequireDefault(require("./LiteGraph.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/App.svelte generated by Svelte v3.29.0 */
const file = "components/App.svelte"; // (31:2) {#if !user.loggedIn}

function create_if_block_1(ctx) {
  let nav;
  let div0;
  let t0;
  let br0;
  let t1;
  let div1;
  let img;
  let img_src_value;
  let t2;
  let div5;
  let div4;
  let div2;
  let h5;
  let t4;
  let p;
  let t5;
  let i0;
  let t6;
  let br1;
  let t7;
  let a0;
  let t8;
  let i1;
  let t9;
  let div3;
  let a1;
  let t11;
  let a2;
  let t13;
  let a3;
  let t15;
  let a4;
  const block = {
    c: function create() {
      nav = (0, _internal.element)("nav");
      div0 = (0, _internal.element)("div");
      t0 = (0, _internal.text)("By using our website, you agree to our 🍪 policy\n             ");
      br0 = (0, _internal.element)("br");
      t1 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      img = (0, _internal.element)("img");
      t2 = (0, _internal.space)();
      div5 = (0, _internal.element)("div");
      div4 = (0, _internal.element)("div");
      div2 = (0, _internal.element)("div");
      h5 = (0, _internal.element)("h5");
      h5.textContent = "Gibber Graph";
      t4 = (0, _internal.space)();
      p = (0, _internal.element)("p");
      t5 = (0, _internal.text)("Gibberish ");
      i0 = (0, _internal.element)("i");
      t6 = (0, _internal.text)(" LiteGraph");
      br1 = (0, _internal.element)("br");
      t7 = (0, _internal.space)();
      a0 = (0, _internal.element)("a");
      t8 = (0, _internal.text)("Login with Github ");
      i1 = (0, _internal.element)("i");
      t9 = (0, _internal.space)();
      div3 = (0, _internal.element)("div");
      a1 = (0, _internal.element)("a");
      a1.textContent = "Robear Mankaryous";
      t11 = (0, _internal.text)(", \n    ");
      a2 = (0, _internal.element)("a");
      a2.textContent = "Alexander Simoneau";
      t13 = (0, _internal.text)(",\n    ");
      a3 = (0, _internal.element)("a");
      a3.textContent = "Kyle Mikolajczyk";
      t15 = (0, _internal.text)(",\n    ");
      a4 = (0, _internal.element)("a");
      a4.textContent = "Alexa Freglette";
      (0, _internal.add_location)(br0, file, 36, 13, 680);
      (0, _internal.attr_dev)(div0, "class", "cookie");
      (0, _internal.set_style)(div0, "text-align", "center");
      (0, _internal.add_location)(div0, file, 34, 4, 567);
      (0, _internal.add_location)(nav, file, 32, 2, 552);
      (0, _internal.attr_dev)(img, "width", "200px");
      if (img.src !== (img_src_value = "https://www.wpi.edu/sites/default/files/faculty-image/cdroberts.jpg?1602870867914")) (0, _internal.attr_dev)(img, "src", img_src_value);
      (0, _internal.add_location)(img, file, 40, 0, 733);
      (0, _internal.attr_dev)(div1, "class", "prof-center");
      (0, _internal.add_location)(div1, file, 39, 2, 707);
      (0, _internal.attr_dev)(h5, "class", "card-title display-4");
      (0, _internal.add_location)(h5, file, 48, 4, 971);
      (0, _internal.attr_dev)(i0, "class", "fas fa-heart");
      (0, _internal.set_style)(i0, "color", "red");
      (0, _internal.add_location)(i0, file, 49, 35, 1057);
      (0, _internal.add_location)(br1, file, 49, 93, 1115);
      (0, _internal.attr_dev)(p, "class", "card-text");
      (0, _internal.add_location)(p, file, 49, 4, 1026);
      (0, _internal.attr_dev)(i1, "class", "fab fa-github");
      (0, _internal.add_location)(i1, file, 50, 69, 1193);
      (0, _internal.attr_dev)(a0, "href", "/auth/github");
      (0, _internal.attr_dev)(a0, "class", "btn btn-primary");
      (0, _internal.add_location)(a0, file, 50, 4, 1128);
      (0, _internal.attr_dev)(div2, "class", "card-body");
      (0, _internal.add_location)(div2, file, 47, 2, 943);
      (0, _internal.attr_dev)(a1, "target", "_blank");
      (0, _internal.attr_dev)(a1, "href", "https://github.com/rmanky");
      (0, _internal.add_location)(a1, file, 55, 4, 1282);
      (0, _internal.attr_dev)(a2, "target", "_blank");
      (0, _internal.attr_dev)(a2, "href", "https://github.com/afsimoneau");
      (0, _internal.add_location)(a2, file, 56, 4, 1362);
      (0, _internal.attr_dev)(a3, "target", "_blank");
      (0, _internal.attr_dev)(a3, "href", "https://github.com/kylemikableh");
      (0, _internal.add_location)(a3, file, 57, 4, 1446);
      (0, _internal.attr_dev)(a4, "target", "_blank");
      (0, _internal.attr_dev)(a4, "href", "https://github.com/afreglett");
      (0, _internal.add_location)(a4, file, 58, 4, 1530);
      (0, _internal.attr_dev)(div3, "class", "card-footer text-muted");
      (0, _internal.add_location)(div3, file, 53, 2, 1240);
      (0, _internal.attr_dev)(div4, "class", "card text-center");
      (0, _internal.add_location)(div4, file, 45, 2, 904);
      (0, _internal.attr_dev)(div5, "class", "wrapper fadeInDown");
      (0, _internal.add_location)(div5, file, 44, 4, 869);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, nav, anchor);
      (0, _internal.append_dev)(nav, div0);
      (0, _internal.append_dev)(div0, t0);
      (0, _internal.append_dev)(div0, br0);
      (0, _internal.insert_dev)(target, t1, anchor);
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, img);
      (0, _internal.insert_dev)(target, t2, anchor);
      (0, _internal.insert_dev)(target, div5, anchor);
      (0, _internal.append_dev)(div5, div4);
      (0, _internal.append_dev)(div4, div2);
      (0, _internal.append_dev)(div2, h5);
      (0, _internal.append_dev)(div2, t4);
      (0, _internal.append_dev)(div2, p);
      (0, _internal.append_dev)(p, t5);
      (0, _internal.append_dev)(p, i0);
      (0, _internal.append_dev)(p, t6);
      (0, _internal.append_dev)(p, br1);
      (0, _internal.append_dev)(div2, t7);
      (0, _internal.append_dev)(div2, a0);
      (0, _internal.append_dev)(a0, t8);
      (0, _internal.append_dev)(a0, i1);
      (0, _internal.append_dev)(div4, t9);
      (0, _internal.append_dev)(div4, div3);
      (0, _internal.append_dev)(div3, a1);
      (0, _internal.append_dev)(div3, t11);
      (0, _internal.append_dev)(div3, a2);
      (0, _internal.append_dev)(div3, t13);
      (0, _internal.append_dev)(div3, a3);
      (0, _internal.append_dev)(div3, t15);
      (0, _internal.append_dev)(div3, a4);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(nav);
      if (detaching) (0, _internal.detach_dev)(t1);
      if (detaching) (0, _internal.detach_dev)(div1);
      if (detaching) (0, _internal.detach_dev)(t2);
      if (detaching) (0, _internal.detach_dev)(div5);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(31:2) {#if !user.loggedIn}",
    ctx
  });
  return block;
} // (67:2) {#if user.loggedIn}


function create_if_block(ctx) {
  let litegraph;
  let current;
  litegraph = new _LiteGraph.default({
    props: {
      user:
      /*user*/
      ctx[0]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      (0, _internal.create_component)(litegraph.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(litegraph, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const litegraph_changes = {};
      if (dirty &
      /*user*/
      1) litegraph_changes.user =
      /*user*/
      ctx[0];
      litegraph.$set(litegraph_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(litegraph.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(litegraph.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(litegraph, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(67:2) {#if user.loggedIn}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let main;
  let t;
  let current;
  let if_block0 = !
  /*user*/
  ctx[0].loggedIn && create_if_block_1(ctx);
  let if_block1 =
  /*user*/
  ctx[0].loggedIn && create_if_block(ctx);
  const block = {
    c: function create() {
      main = (0, _internal.element)("main");
      if (if_block0) if_block0.c();
      t = (0, _internal.space)();
      if (if_block1) if_block1.c();
      (0, _internal.add_location)(main, file, 29, 0, 515);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, main, anchor);
      if (if_block0) if_block0.m(main, null);
      (0, _internal.append_dev)(main, t);
      if (if_block1) if_block1.m(main, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      let [dirty] = _ref;

      if (!
      /*user*/
      ctx[0].loggedIn) {
        if (if_block0) {} else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(main, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*user*/
      ctx[0].loggedIn) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*user*/
          1) {
            (0, _internal.transition_in)(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          (0, _internal.transition_in)(if_block1, 1);
          if_block1.m(main, null);
        }
      } else if (if_block1) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block1);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(main);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)("App", slots, []);
  let user = {
    loggedIn: false,
    username: "not logged in"
  };
  (0, _svelte.onMount)(async () => {
    const res = await fetch("/auth/user", {
      credentials: "include"
    });
    const results = await res.json();

    if (!results.failed) {
      $$invalidate(0, user.loggedIn = true, user);
      $$invalidate(0, user.username = results.username, user);
    } else {
      $$invalidate(0, user.loggedIn = false, user);
      $$invalidate(0, user.username = "", user);
    }
  });
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<App> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = () => ({
    onMount: _svelte.onMount,
    LiteGraph: _LiteGraph.default,
    user
  });

  $$self.$inject_state = $$props => {
    if ("user" in $$props) $$invalidate(0, user = $$props.user);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [user];
}

class App extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment.name
    });
  }

}

var _default = App;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","./LiteGraph.svelte":"components/LiteGraph.svelte"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./css/style.css");

require("./css/litegraph.css");

require("./css/litegraph-editor.css");

var _App = _interopRequireDefault(require("./components/App.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _App.default({
  target: document.body
});
var _default = app;
exports.default = _default;
},{"./css/style.css":"css/style.css","./css/litegraph.css":"css/litegraph.css","./css/litegraph-editor.css":"css/litegraph-editor.css","./components/App.svelte":"components/App.svelte"}],"../../rbd/pnpm-volume/a97c73be-be8a-4582-8574-3e06e9c3326f/node_modules/.registry.npmjs.org/parcel-bundler/1.12.4/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41718" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../rbd/pnpm-volume/a97c73be-be8a-4582-8574-3e06e9c3326f/node_modules/.registry.npmjs.org/parcel-bundler/1.12.4/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map