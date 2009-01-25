(function(){
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var _, package_com_boscomonkey_gwtraster_client_ = 'com.boscomonkey.gwtraster.client.', package_com_google_gwt_core_client_ = 'com.google.gwt.core.client.', package_com_google_gwt_lang_ = 'com.google.gwt.lang.', package_com_google_gwt_user_client_ = 'com.google.gwt.user.client.', package_com_google_gwt_user_client_impl_ = 'com.google.gwt.user.client.impl.', package_com_google_gwt_user_client_ui_ = 'com.google.gwt.user.client.ui.', package_com_google_gwt_user_client_ui_impl_ = 'com.google.gwt.user.client.ui.impl.', package_java_lang_ = 'java.lang.', package_java_util_ = 'java.util.';
function nullMethod(){
}

function equals_3(other){
  return this === other;
}

function hashCode_4(){
  return identityHashCode(this);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals_3;
_.hashCode$ = hashCode_4;
_.typeId$ = 1;
function $$init(this$static){
  this$static.mousedOvers = $HashSet(new HashSet());
  this$static.btnClear = $Button_0(new Button(), 'Clear');
  this$static.moveListener = $GwtRaster$1(new GwtRaster$1(), this$static);
  this$static.mouseBtnListener = $GwtRaster$2(new GwtRaster$2(), this$static);
}

function $GwtRaster(this$static){
  $$init(this$static);
  return this$static;
}

function $onModuleLoad(this$static){
  var dot, focus, panel, x, y;
  focus = $FocusPanel(new FocusPanel());
  $addMouseListener(focus, this$static.mouseBtnListener);
  panel = $FlowPanel(new FlowPanel());
  $setWidget(focus, panel);
  $setStyleName(panel, 'cbg-GwtRaster');
  for (x = 0; x < 100; x++) {
    for (y = 0; y < 75; y++) {
      dot = $GwtRaster$Dot(new GwtRaster$Dot(), x, y, this$static);
      $addMouseListener_0(dot, this$static.moveListener);
      $add_1(panel, dot);
    }
  }
  $add(get('slot1'), focus);
  $addClickListener(this$static.btnClear, $GwtRaster$3(new GwtRaster$3(), this$static));
  $add(get('slot2'), this$static.btnClear);
}

function GwtRaster(){
}

_ = GwtRaster.prototype = new Object_0();
_.typeId$ = 0;
_.bMouseDown = false;
function onMouseDown_0(sender, x, y){
}

function onMouseEnter_0(sender){
}

function onMouseLeave(sender){
}

function onMouseMove(sender, x, y){
}

function onMouseUp_0(sender, x, y){
}

function MouseListenerAdapter(){
}

_ = MouseListenerAdapter.prototype = new Object_0();
_.onMouseDown = onMouseDown_0;
_.onMouseEnter = onMouseEnter_0;
_.onMouseLeave = onMouseLeave;
_.onMouseMove = onMouseMove;
_.onMouseUp = onMouseUp_0;
_.typeId$ = 3;
function $GwtRaster$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onMouseEnter(sender){
  if (this.this$0.bMouseDown) {
    $addStyleName(sender, 'cbg-GwtRaster-mouseover');
    $add_4(this.this$0.mousedOvers, sender);
  }
}

function GwtRaster$1(){
}

_ = GwtRaster$1.prototype = new MouseListenerAdapter();
_.onMouseEnter = onMouseEnter;
_.typeId$ = 4;
function $GwtRaster$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onMouseDown(sender, x, y){
  if (!this.this$0.bMouseDown) {
    setCapture(sender.element);
    this.this$0.bMouseDown = true;
  }
}

function onMouseUp(sender, x, y){
  if (this.this$0.bMouseDown) {
    releaseCapture(sender.element);
    this.this$0.bMouseDown = false;
  }
}

function GwtRaster$2(){
}

_ = GwtRaster$2.prototype = new MouseListenerAdapter();
_.onMouseDown = onMouseDown;
_.onMouseUp = onMouseUp;
_.typeId$ = 5;
function $GwtRaster$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function onClick(sender){
  var iter, w;
  for (iter = $iterator_4(this.this$0.mousedOvers); $hasNext_0(iter);) {
    w = dynamicCast($next_0(iter), 2);
    $removeStyleName(w, 'cbg-GwtRaster-mouseover');
  }
  $clear_0(this.this$0.mousedOvers);
}

function GwtRaster$3(){
}

_ = GwtRaster$3.prototype = new Object_0();
_.onClick = onClick;
_.typeId$ = 6;
function $addStyleName(this$static, style){
  setStyleName_0(this$static.element, style, true);
}

function $removeStyleName(this$static, style){
  setStyleName_0(this$static.element, style, false);
}

function $replaceNode(this$static, node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement_0(this$static, elem){
  if (this$static.element !== null) {
    $replaceNode(this$static, this$static.element, elem);
  }
  this$static.element = elem;
}

function $setStyleName(this$static, style){
  setStyleName(this$static.element, style);
}

function $sinkEvents_0(this$static, eventBitsToAdd){
  sinkEvents(this$static.element, eventBitsToAdd | getEventsSunk(this$static.element));
}

function getStyleName(elem){
  return getElementProperty(elem, 'className');
}

function setStyleName(elem, styleName){
  setElementProperty(elem, 'className', styleName);
}

function setStyleName_0(elem, style, add){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  if (elem === null) {
    throw $RuntimeException(new RuntimeException(), 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if ($length(style) == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'Style names cannot be empty');
  }
  oldStyle = getStyleName(elem);
  idx = $indexOf_0(oldStyle, style);
  while (idx != (-1)) {
    if (idx == 0 || $charAt(oldStyle, idx - 1) == 32) {
      last = idx + $length(style);
      lastPos = $length(oldStyle);
      if (last == lastPos || last < lastPos && $charAt(oldStyle, last) == 32) {
        break;
      }
    }
    idx = $indexOf_1(oldStyle, style, idx + 1);
  }
  if (add) {
    if (idx == (-1)) {
      if ($length(oldStyle) > 0) {
        oldStyle += ' ';
      }
      setElementProperty(elem, 'className', oldStyle + style);
    }
  }
   else {
    if (idx != (-1)) {
      begin = $trim($substring_0(oldStyle, 0, idx));
      end = $trim($substring(oldStyle, idx + $length(style)));
      if ($length(begin) == 0) {
        newClassName = end;
      }
       else if ($length(end) == 0) {
        newClassName = begin;
      }
       else {
        newClassName = begin + ' ' + end;
      }
      setElementProperty(elem, 'className', newClassName);
    }
  }
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0();
_.typeId$ = 0;
_.element = null;
function $onAttach(this$static){
  if (this$static.attached) {
    throw $IllegalStateException(new IllegalStateException(), "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  setEventListener(this$static.element, this$static);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw $IllegalStateException(new IllegalStateException(), "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    this$static.doDetachChildren();
    setEventListener(this$static.element, null);
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (this$static.parent !== null) {
    this$static.parent.remove_0(this$static);
  }
   else if (this$static.parent !== null) {
    throw $IllegalStateException(new IllegalStateException(), "This widget's parent does not implement HasWidgets");
  }
}

function $setElement_1(this$static, elem){
  if (this$static.attached) {
    setEventListener(this$static.element, null);
  }
  $setElement_0(this$static, elem);
  if (this$static.attached) {
    setEventListener(elem, this$static);
  }
}

function $setParent(this$static, parent){
  var oldParent;
  oldParent = this$static.parent;
  if (parent === null) {
    if (oldParent !== null && oldParent.attached) {
      $onDetach(this$static);
    }
    this$static.parent = null;
  }
   else {
    if (oldParent !== null) {
      throw $IllegalStateException(new IllegalStateException(), 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent = parent;
    if (parent.attached) {
      $onAttach(this$static);
    }
  }
}

function doAttachChildren_0(){
}

function doDetachChildren_0(){
}

function onBrowserEvent_2(event_0){
}

function onLoad_0(){
}

function onUnload_0(){
}

function setElement_0(elem){
  $setElement_1(this, elem);
}

function Widget(){
}

_ = Widget.prototype = new UIObject();
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.onBrowserEvent = onBrowserEvent_2;
_.onLoad = onLoad_0;
_.onUnload = onUnload_0;
_.setElement = setElement_0;
_.typeId$ = 7;
_.attached = false;
_.parent = null;
function $Label(this$static){
  this$static.setElement(createDiv());
  $sinkEvents_0(this$static, 131197);
  $setStyleName(this$static, 'gwt-Label');
  return this$static;
}

function $addMouseListener_0(this$static, listener){
  if (this$static.mouseListeners === null) {
    this$static.mouseListeners = $MouseListenerCollection(new MouseListenerCollection());
  }
  $add_3(this$static.mouseListeners, listener);
}

function onBrowserEvent_1(event_0){
  switch (eventGetType(event_0)) {
    case 1:
      break;
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (this.mouseListeners !== null) {
        $fireMouseEvent(this.mouseListeners, this, event_0);
      }

      break;
    case 131072:
      break;
  }
}

function Label(){
}

_ = Label.prototype = new Widget();
_.onBrowserEvent = onBrowserEvent_1;
_.typeId$ = 8;
_.mouseListeners = null;
function $HTML(this$static){
  $Label(this$static);
  this$static.setElement(createDiv());
  $sinkEvents_0(this$static, 125);
  $setStyleName(this$static, 'gwt-HTML');
  return this$static;
}

function HTML(){
}

_ = HTML.prototype = new Label();
_.typeId$ = 9;
function $GwtRaster$Dot(this$static, coordX, coordY, this$0){
  $HTML(this$static);
  this$static.x = coordX;
  this$static.y = coordY;
  $addStyleName(this$static, 'cbg-GwtRaster-dot');
  setStyleAttribute(this$static.element, 'left', valueOf_0(this$static.x * 4) + 'px');
  setStyleAttribute(this$static.element, 'top', valueOf_0(this$static.y * 4) + 'px');
  return this$static;
}

function GwtRaster$Dot(){
}

_ = GwtRaster$Dot.prototype = new HTML();
_.typeId$ = 10;
_.x = 0;
_.y = 0;
var sUncaughtExceptionHandler = null;
function getHashCode(o){
  return o == null?0:o.$H?o.$H:(o.$H = getNextHashId());
}

function getHashCode_0(o){
  return o == null?0:o.$H?o.$H:(o.$H = getNextHashId());
}

function getNextHashId(){
  return ++sNextHashId;
}

var sNextHashId = 0;
function $equals(this$static, other){
  if (!instanceOf(other, 3)) {
    return false;
  }
  return equalsImpl(this$static, dynamicCast(other, 3));
}

function $hashCode(this$static){
  return getHashCode(this$static);
}

function createArray(){
  return [];
}

function createObject(){
  return {};
}

function equals(other){
  return $equals(this, other);
}

function equalsImpl(o, other){
  return o === other;
}

function hashCode_0(){
  return $hashCode(this);
}

function JavaScriptObject(){
}

_ = JavaScriptObject.prototype = new Object_0();
_.equals$ = equals;
_.hashCode$ = hashCode_0;
_.typeId$ = 15;
function $Array(this$static, length, typeId, queryId, typeName){
  this$static.length_0 = length;
  this$static.queryId = queryId;
  typeName;
  this$static.typeId$ = typeId;
  return this$static;
}

function _set(array, index, value){
  return array[index] = value;
}

function getIntValue(values, index){
  return values[index];
}

function getValueCount(values){
  return values.length;
}

function initDims_0(typeName, typeIdExprs, queryIdExprs, dimExprs, defaultValue){
  return initDims(typeName, typeIdExprs, queryIdExprs, dimExprs, 0, getValueCount(dimExprs), defaultValue);
}

function initDims(typeName, typeIdExprs, queryIdExprs, dimExprs, index, count, defaultValue){
  var i, length, result;
  if ((length = getIntValue(dimExprs, index)) < 0) {
    throw new NegativeArraySizeException();
  }
  result = $Array(new Array_0(), length, getIntValue(typeIdExprs, index), getIntValue(queryIdExprs, index), typeName);
  ++index;
  if (index < count) {
    typeName = $substring(typeName, 1);
    for (i = 0; i < length; ++i) {
      _set(result, i, initDims(typeName, typeIdExprs, queryIdExprs, dimExprs, index, count, defaultValue));
    }
  }
   else {
    for (i = 0; i < length; ++i) {
      _set(result, i, defaultValue);
    }
  }
  return result;
}

function setCheck(array, index, value){
  if (value !== null && array.queryId != 0 && !instanceOf(value, array.queryId)) {
    throw new ArrayStoreException();
  }
  return _set(array, index, value);
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0();
_.typeId$ = 0;
function canCast(srcId, dstId){
  return !(!(srcId && typeIdArray[srcId][dstId]));
}

function dynamicCast(src, dstId){
  if (src != null)
    canCast(src.typeId$, dstId) || throwClassCastException();
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src.typeId$, dstId);
}

function throwClassCastException(){
  throw new ClassCastException();
}

function throwClassCastExceptionUnlessNull(o){
  if (o !== null) {
    throw new ClassCastException();
  }
  return o;
}

function wrapJSO(jso, seed){
  _ = seed.prototype;
  if (jso && !(jso.typeId$ >= _.typeId$)) {
    var oldToString = jso.toString;
    for (var i in _) {
      jso[i] = _[i];
    }
    jso.toString = oldToString;
  }
  return jso;
}

var typeIdArray;
function $clinit_11(){
  $clinit_11 = nullMethod;
  sEventPreviewStack = $ArrayList(new ArrayList());
  {
    impl = new DOMImplOpera();
    $init(impl);
  }
}

function appendChild(parent, child){
  $clinit_11();
  $appendChild(impl, parent, child);
}

function compare(elem1, elem2){
  $clinit_11();
  return $compare(impl, elem1, elem2);
}

function createButton(){
  $clinit_11();
  return $createElement(impl, 'button');
}

function createDiv(){
  $clinit_11();
  return $createElement(impl, 'div');
}

function dispatchEvent(evt, elem, listener){
  $clinit_11();
  var handler;
  handler = sUncaughtExceptionHandler;
  {
    dispatchEventImpl(evt, elem, listener);
  }
}

function dispatchEventImpl(evt, elem, listener){
  $clinit_11();
  var prevCurrentEvent;
  if (elem === sCaptureElem) {
    if (eventGetType(evt) == 8192) {
      sCaptureElem = null;
    }
  }
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  try {
    listener.onBrowserEvent(evt);
  }
   finally {
    currentEvent = prevCurrentEvent;
  }
}

function eventCancelBubble(evt, cancel){
  $clinit_11();
  $eventCancelBubble(impl, evt, cancel);
}

function eventGetClientX(evt){
  $clinit_11();
  return $eventGetClientX(impl, evt);
}

function eventGetClientY(evt){
  $clinit_11();
  return $eventGetClientY(impl, evt);
}

function eventGetFromElement(evt){
  $clinit_11();
  return $eventGetFromElement(impl, evt);
}

function eventGetToElement(evt){
  $clinit_11();
  return $eventGetToElement(impl, evt);
}

function eventGetType(evt){
  $clinit_11();
  return $eventGetTypeInt(impl, evt);
}

function eventPreventDefault(evt){
  $clinit_11();
  $eventPreventDefault(impl, evt);
}

function getAbsoluteLeft(elem){
  $clinit_11();
  return $getAbsoluteLeft(impl, elem);
}

function getAbsoluteTop(elem){
  $clinit_11();
  return $getAbsoluteTop(impl, elem);
}

function getElementById(id){
  $clinit_11();
  return $getElementById(impl, id);
}

function getElementProperty(elem, prop){
  $clinit_11();
  return $getElementProperty(impl, elem, prop);
}

function getElementPropertyInt(elem, prop){
  $clinit_11();
  return $getElementPropertyInt(impl, elem, prop);
}

function getEventsSunk(elem){
  $clinit_11();
  return $getEventsSunk(impl, elem);
}

function getParent(elem){
  $clinit_11();
  return $getParent(impl, elem);
}

function isOrHasChild(parent, child){
  $clinit_11();
  return $isOrHasChild(impl, parent, child);
}

function previewEvent(evt){
  $clinit_11();
  var preview, ret;
  ret = true;
  if (sEventPreviewStack.size > 0) {
    preview = throwClassCastExceptionUnlessNull($get(sEventPreviewStack, sEventPreviewStack.size - 1));
    if (!(ret = null.nullMethod())) {
      eventCancelBubble(evt, true);
      eventPreventDefault(evt);
    }
  }
  return ret;
}

function releaseCapture(elem){
  $clinit_11();
  if (sCaptureElem !== null && compare(elem, sCaptureElem)) {
    sCaptureElem = null;
  }
  $releaseCapture(impl, elem);
}

function removeChild(parent, child){
  $clinit_11();
  $removeChild(impl, parent, child);
}

function setCapture(elem){
  $clinit_11();
  sCaptureElem = elem;
  $setCapture(impl, elem);
}

function setElementProperty(elem, prop, value){
  $clinit_11();
  $setElementProperty(impl, elem, prop, value);
}

function setEventListener(elem, listener){
  $clinit_11();
  $setEventListener(impl, elem, listener);
}

function setInnerHTML(elem, html){
  $clinit_11();
  $setInnerHTML(impl, elem, html);
}

function setStyleAttribute(elem, attr, value){
  $clinit_11();
  $setStyleAttribute(impl, elem, attr, value);
}

function sinkEvents(elem, eventBits){
  $clinit_11();
  $sinkEvents(impl, elem, eventBits);
}

var currentEvent = null, impl = null, sCaptureElem = null, sEventPreviewStack;
function equals_0(other){
  if (instanceOf(other, 5)) {
    return compare(this, dynamicCast(other, 5));
  }
  return $equals(wrapJSO(this, Element), other);
}

function hashCode_1(){
  return $hashCode(wrapJSO(this, Element));
}

function Element(){
}

_ = Element.prototype = new JavaScriptObject();
_.equals$ = equals_0;
_.hashCode$ = hashCode_1;
_.typeId$ = 16;
function equals_1(other){
  return $equals(wrapJSO(this, Event), other);
}

function hashCode_2(){
  return $hashCode(wrapJSO(this, Event));
}

function Event(){
}

_ = Event.prototype = new JavaScriptObject();
_.equals$ = equals_1;
_.hashCode$ = hashCode_2;
_.typeId$ = 17;
function $clinit_16(){
  $clinit_16 = nullMethod;
  timers = $ArrayList(new ArrayList());
  {
    hookWindowClosing();
  }
}

function hookWindowClosing(){
  $clinit_16();
  addWindowCloseListener(new Timer$1());
}

var timers;
function onWindowClosed(){
  while (($clinit_16() , timers).size > 0) {
    throwClassCastExceptionUnlessNull($get(($clinit_16() , timers), 0)).nullMethod();
  }
}

function onWindowClosing(){
  return null;
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0();
_.onWindowClosed = onWindowClosed;
_.onWindowClosing = onWindowClosing;
_.typeId$ = 18;
function $clinit_18(){
  $clinit_18 = nullMethod;
  closingListeners = $ArrayList(new ArrayList());
  resizeListeners = $ArrayList(new ArrayList());
  {
    init();
  }
}

function addWindowCloseListener(listener){
  $clinit_18();
  $add_3(closingListeners, listener);
}

function fireClosedImpl(){
  $clinit_18();
  var it, listener;
  for (it = $iterator_0(closingListeners); $hasNext(it);) {
    listener = dynamicCast($next(it), 6);
    listener.onWindowClosed();
  }
}

function fireClosingImpl(){
  $clinit_18();
  var it, listener, msg, ret;
  ret = null;
  for (it = $iterator_0(closingListeners); $hasNext(it);) {
    listener = dynamicCast($next(it), 6);
    msg = listener.onWindowClosing();
    {
      ret = msg;
    }
  }
  return ret;
}

function fireResizedImpl(){
  $clinit_18();
  var it, listener;
  for (it = $iterator_0(resizeListeners); $hasNext(it);) {
    listener = throwClassCastExceptionUnlessNull($next(it));
    null.nullMethod();
  }
}

function getScrollLeft(){
  $clinit_18();
  return $doc.documentElement.scrollLeft || $doc.body.scrollLeft;
}

function getScrollTop(){
  $clinit_18();
  return $doc.documentElement.scrollTop || $doc.body.scrollTop;
}

function init(){
  $clinit_18();
  __gwt_initHandlers(function(){
    onResize();
  }
  , function(){
    return onClosing();
  }
  , function(){
    onClosed();
    $wnd.onresize = null;
    $wnd.onbeforeclose = null;
    $wnd.onclose = null;
  }
  );
}

function onClosed(){
  $clinit_18();
  var handler;
  handler = sUncaughtExceptionHandler;
  {
    fireClosedImpl();
  }
}

function onClosing(){
  $clinit_18();
  var handler;
  handler = sUncaughtExceptionHandler;
  {
    return fireClosingImpl();
  }
}

function onResize(){
  $clinit_18();
  var handler;
  handler = sUncaughtExceptionHandler;
  {
    fireResizedImpl();
  }
}

var closingListeners, resizeListeners;
function $appendChild(this$static, parent, child){
  parent.appendChild(child);
}

function $createElement(this$static, tag){
  return $doc.createElement(tag);
}

function $eventCancelBubble(this$static, evt, cancel){
  evt.cancelBubble = cancel;
}

function $eventGetClientX(this$static, evt){
  return evt.clientX || -1;
}

function $eventGetClientY(this$static, evt){
  return evt.clientY || -1;
}

function $eventGetTypeInt(this$static, evt){
  switch (evt.type) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
  }
}

function $getElementById(this$static, id){
  var elem = $doc.getElementById(id);
  return elem || null;
}

function $getElementProperty(this$static, elem, prop){
  var ret = elem[prop];
  return ret == null?null:String(ret);
}

function $getElementPropertyInt(this$static, elem, prop){
  var i = parseInt(elem[prop]);
  if (!i) {
    return 0;
  }
  return i;
}

function $getEventsSunk(this$static, elem){
  return elem.__eventBits || 0;
}

function $removeChild(this$static, parent, child){
  parent.removeChild(child);
}

function $setElementProperty(this$static, elem, prop, value){
  elem[prop] = value;
}

function $setEventListener(this$static, elem, listener){
  elem.__listener = listener;
}

function $setInnerHTML(this$static, elem, html){
  if (!html) {
    html = '';
  }
  elem.innerHTML = html;
}

function $setStyleAttribute(this$static, elem, attr, value){
  elem.style[attr] = value;
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0();
_.typeId$ = 0;
function $compare(this$static, elem1, elem2){
  return elem1 == elem2;
}

function $eventGetFromElement(this$static, evt){
  return evt.relatedTarget?evt.relatedTarget:null;
}

function $eventGetToElement(this$static, evt){
  return evt.relatedTarget || null;
}

function $eventPreventDefault(this$static, evt){
  evt.preventDefault();
}

function $getParent(this$static, elem){
  var parent = elem.parentNode;
  if (parent == null) {
    return null;
  }
  if (parent.nodeType != 1)
    parent = null;
  return parent || null;
}

function $init(this$static){
  $wnd.__dispatchCapturedMouseEvent = function(evt){
    if ($wnd.__dispatchCapturedEvent(evt)) {
      var cap = $wnd.__captureElem;
      if (cap && cap.__listener) {
        dispatchEvent(evt, cap, cap.__listener);
        evt.stopPropagation();
      }
    }
  }
  ;
  $wnd.__dispatchCapturedEvent = function(evt){
    if (!previewEvent(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  ;
  $wnd.addEventListener('click', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('dblclick', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousedown', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseup', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousemove', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousewheel', $wnd.__dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('keydown', $wnd.__dispatchCapturedEvent, true);
  $wnd.addEventListener('keyup', $wnd.__dispatchCapturedEvent, true);
  $wnd.addEventListener('keypress', $wnd.__dispatchCapturedEvent, true);
  $wnd.__dispatchEvent = function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener))
      curElem = curElem.parentNode;
    if (curElem && curElem.nodeType != 1)
      curElem = null;
    if (listener)
      dispatchEvent(evt, curElem, listener);
  }
  ;
  $wnd.__captureElem = null;
}

function $isOrHasChild(this$static, parent, child){
  while (child) {
    if (parent == child) {
      return true;
    }
    child = child.parentNode;
    if (child && child.nodeType != 1) {
      child = null;
    }
  }
  return false;
}

function $releaseCapture(this$static, elem){
  if (elem == $wnd.__captureElem)
    $wnd.__captureElem = null;
}

function $setCapture(this$static, elem){
  $wnd.__captureElem = elem;
}

function $sinkEvents(this$static, elem, bits){
  elem.__eventBits = bits;
  elem.onclick = bits & 1?$wnd.__dispatchEvent:null;
  elem.ondblclick = bits & 2?$wnd.__dispatchEvent:null;
  elem.onmousedown = bits & 4?$wnd.__dispatchEvent:null;
  elem.onmouseup = bits & 8?$wnd.__dispatchEvent:null;
  elem.onmouseover = bits & 16?$wnd.__dispatchEvent:null;
  elem.onmouseout = bits & 32?$wnd.__dispatchEvent:null;
  elem.onmousemove = bits & 64?$wnd.__dispatchEvent:null;
  elem.onkeydown = bits & 128?$wnd.__dispatchEvent:null;
  elem.onkeypress = bits & 256?$wnd.__dispatchEvent:null;
  elem.onkeyup = bits & 512?$wnd.__dispatchEvent:null;
  elem.onchange = bits & 1024?$wnd.__dispatchEvent:null;
  elem.onfocus = bits & 2048?$wnd.__dispatchEvent:null;
  elem.onblur = bits & 4096?$wnd.__dispatchEvent:null;
  elem.onlosecapture = bits & 8192?$wnd.__dispatchEvent:null;
  elem.onscroll = bits & 16384?$wnd.__dispatchEvent:null;
  elem.onload = bits & 32768?$wnd.__dispatchEvent:null;
  elem.onerror = bits & 65536?$wnd.__dispatchEvent:null;
  elem.onmousewheel = bits & 131072?$wnd.__dispatchEvent:null;
}

function DOMImplStandard(){
}

_ = DOMImplStandard.prototype = new DOMImpl();
_.typeId$ = 0;
function $getAbsoluteLeft(this$static, elem){
  var left = 0;
  var curr = elem.parentNode;
  while (curr != $doc.body) {
    if (curr.tagName != 'TR' && curr.tagName != 'TBODY') {
      left -= curr.scrollLeft;
    }
    curr = curr.parentNode;
  }
  while (elem) {
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return left;
}

function $getAbsoluteTop(this$static, elem){
  var top = 0;
  var curr = elem.parentNode;
  while (curr != $doc.body) {
    if (curr.tagName != 'TR' && curr.tagName != 'TBODY') {
      top -= curr.scrollTop;
    }
    curr = curr.parentNode;
  }
  while (elem) {
    top += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return top;
}

function DOMImplOpera(){
}

_ = DOMImplOpera.prototype = new DOMImplStandard();
_.typeId$ = 0;
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $orphan(this$static, child){
  $setParent(child, null);
}

function doAttachChildren(){
  var child, it;
  for (it = this.iterator(); it.hasNext();) {
    child = dynamicCast(it.next(), 2);
    $onAttach(child);
  }
}

function doDetachChildren(){
  var child, it;
  for (it = this.iterator(); it.hasNext();) {
    child = dynamicCast(it.next(), 2);
    $onDetach(child);
  }
}

function onLoad(){
}

function onUnload(){
}

function Panel(){
}

_ = Panel.prototype = new Widget();
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.onLoad = onLoad;
_.onUnload = onUnload;
_.typeId$ = 19;
function $$init_0(this$static){
  this$static.children = $WidgetCollection(new WidgetCollection(), this$static);
}

function $ComplexPanel(this$static){
  $$init_0(this$static);
  return this$static;
}

function $add_0(this$static, child, container){
  $removeFromParent(child);
  $add_2(this$static.children, child);
  appendChild(container, child.element);
  $adopt(this$static, child);
}

function $remove(this$static, w){
  var elem;
  if (w.parent !== this$static) {
    return false;
  }
  $orphan(this$static, w);
  elem = w.element;
  removeChild(getParent(elem), elem);
  $remove_2(this$static.children, w);
  return true;
}

function iterator(){
  return $iterator(this.children);
}

function remove_1(w){
  return $remove(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel();
_.iterator = iterator;
_.remove_0 = remove_1;
_.typeId$ = 20;
function $AbsolutePanel(this$static){
  $ComplexPanel(this$static);
  this$static.setElement(createDiv());
  setStyleAttribute(this$static.element, 'position', 'relative');
  setStyleAttribute(this$static.element, 'overflow', 'hidden');
  return this$static;
}

function $add(this$static, w){
  $add_0(this$static, w, this$static.element);
}

function changeToStaticPositioning(elem){
  setStyleAttribute(elem, 'left', '');
  setStyleAttribute(elem, 'top', '');
  setStyleAttribute(elem, 'position', '');
}

function remove_0(w){
  var removed;
  removed = $remove(this, w);
  if (removed) {
    changeToStaticPositioning(w.element);
  }
  return removed;
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel();
_.remove_0 = remove_0;
_.typeId$ = 21;
function $clinit_30(){
  $clinit_30 = nullMethod;
  $clinit_58() , implWidget;
}

function $FocusWidget(this$static, elem){
  $clinit_58() , implWidget;
  $setElement(this$static, elem);
  return this$static;
}

function $addClickListener(this$static, listener){
  if (this$static.clickListeners === null) {
    this$static.clickListeners = $ClickListenerCollection(new ClickListenerCollection());
  }
  $add_3(this$static.clickListeners, listener);
}

function $setElement(this$static, elem){
  $setElement_1(this$static, elem);
  $sinkEvents_0(this$static, 7041);
}

function onBrowserEvent_0(event_0){
  switch (eventGetType(event_0)) {
    case 1:
      if (this.clickListeners !== null) {
        $fireClick(this.clickListeners, this);
      }

      break;
    case 4096:
    case 2048:
      break;
    case 128:
    case 512:
    case 256:
      break;
  }
}

function setElement(elem){
  $setElement(this, elem);
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget();
_.onBrowserEvent = onBrowserEvent_0;
_.setElement = setElement;
_.typeId$ = 22;
_.clickListeners = null;
function $clinit_23(){
  $clinit_23 = nullMethod;
  $clinit_58() , implWidget;
}

function $ButtonBase(this$static, elem){
  $clinit_58() , implWidget;
  $FocusWidget(this$static, elem);
  return this$static;
}

function $setHTML(this$static, html){
  setInnerHTML(this$static.element, html);
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget();
_.typeId$ = 23;
function $clinit_24(){
  $clinit_24 = nullMethod;
  $clinit_58() , implWidget;
}

function $Button(this$static){
  $clinit_58() , implWidget;
  $ButtonBase(this$static, createButton());
  adjustType(this$static.element);
  $setStyleName(this$static, 'gwt-Button');
  return this$static;
}

function $Button_0(this$static, html){
  $clinit_58() , implWidget;
  $Button(this$static);
  $setHTML(this$static, html);
  return this$static;
}

function adjustType(button){
  $clinit_24();
  if (button.type == 'submit') {
    try {
      button.setAttribute('type', 'button');
    }
     catch (e) {
    }
  }
}

function Button(){
}

_ = Button.prototype = new ButtonBase();
_.typeId$ = 24;
function $advanceToFind(this$static, iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next();
    if (o === null?t === null:o.equals$(t)) {
      return iter;
    }
  }
  return null;
}

function add_0(o){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'add');
}

function contains(o){
  var iter;
  iter = $advanceToFind(this, this.iterator(), o);
  return iter !== null;
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0();
_.add_0 = add_0;
_.contains = contains;
_.typeId$ = 0;
function $indexOutOfBounds(this$static, i){
  throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Index: ' + i + ', Size: ' + this$static.size);
}

function $iterator_0(this$static){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static);
}

function add_1(index, element){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'add');
}

function add_2(obj){
  this.add(this.size_0(), obj);
  return true;
}

function equals_5(o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 14)) {
    return false;
  }
  other = dynamicCast(o, 14);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = $iterator_0(this);
  iterOther = other.iterator();
  while ($hasNext(iter)) {
    elem = $next(iter);
    elemOther = $next(iterOther);
    if (!(elem === null?elemOther === null:elem.equals$(elemOther))) {
      return false;
    }
  }
  return true;
}

function hashCode_6(){
  var coeff, iter, k, obj;
  k = 1;
  coeff = 31;
  iter = $iterator_0(this);
  while ($hasNext(iter)) {
    obj = $next(iter);
    k = 31 * k + (obj === null?0:obj.hashCode$());
  }
  return k;
}

function iterator_1(){
  return $iterator_0(this);
}

function remove_3(index){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'remove');
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection();
_.add = add_1;
_.add_0 = add_2;
_.equals$ = equals_5;
_.hashCode$ = hashCode_6;
_.iterator = iterator_1;
_.remove = remove_3;
_.typeId$ = 25;
function $$init_3(this$static){
  {
    $clearImpl(this$static);
  }
}

function $ArrayList(this$static){
  $$init_3(this$static);
  return this$static;
}

function $add_3(this$static, o){
  setImpl(this$static.array, this$static.size++, o);
  return true;
}

function $clearImpl(this$static){
  this$static.array = createArray();
  this$static.size = 0;
}

function $get(this$static, index){
  if (index < 0 || index >= this$static.size) {
    $indexOutOfBounds(this$static, index);
  }
  return getImpl(this$static.array, index);
}

function $indexOf_2(this$static, o){
  return $indexOf_3(this$static, o, 0);
}

function $indexOf_3(this$static, o, index){
  if (index < 0) {
    $indexOutOfBounds(this$static, index);
  }
  for (; index < this$static.size; ++index) {
    if (equals_8(o, getImpl(this$static.array, index))) {
      return index;
    }
  }
  return (-1);
}

function $remove_4(this$static, index){
  var previous;
  previous = $get(this$static, index);
  removeRangeImpl(this$static.array, index, 1);
  --this$static.size;
  return previous;
}

function add_3(index, o){
  if (index < 0 || index > this.size) {
    $indexOutOfBounds(this, index);
  }
  addImpl(this.array, index, o);
  ++this.size;
}

function add_4(o){
  return $add_3(this, o);
}

function addImpl(array, index, o){
  array.splice(index, 0, o);
}

function contains_2(o){
  return $indexOf_2(this, o) != (-1);
}

function equals_8(a, b){
  return a === b || a !== null && a.equals$(b);
}

function get_1(index){
  return $get(this, index);
}

function getImpl(array, index){
  return array[index];
}

function remove_4(index){
  return $remove_4(this, index);
}

function removeRangeImpl(array, index, count){
  array.splice(index, count);
}

function setImpl(array, index, o){
  array[index] = o;
}

function size_2(){
  return this.size;
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList();
_.add = add_3;
_.add_0 = add_4;
_.contains = contains_2;
_.get = get_1;
_.remove = remove_4;
_.size_0 = size_2;
_.typeId$ = 26;
_.array = null;
_.size = 0;
function $ClickListenerCollection(this$static){
  $ArrayList(this$static);
  return this$static;
}

function $fireClick(this$static, sender){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext(it);) {
    listener = dynamicCast($next(it), 7);
    listener.onClick(sender);
  }
}

function ClickListenerCollection(){
}

_ = ClickListenerCollection.prototype = new ArrayList();
_.typeId$ = 27;
function $FlowPanel(this$static){
  $ComplexPanel(this$static);
  this$static.setElement(createDiv());
  return this$static;
}

function $add_1(this$static, w){
  $add_0(this$static, w, this$static.element);
}

function FlowPanel(){
}

_ = FlowPanel.prototype = new ComplexPanel();
_.typeId$ = 28;
function $SimplePanel(this$static, elem){
  this$static.setElement(elem);
  return this$static;
}

function $remove_0(this$static, w){
  if (this$static.widget !== w) {
    return false;
  }
  $orphan(this$static, w);
  removeChild(this$static.element, w.element);
  this$static.widget = null;
  return true;
}

function $setWidget(this$static, w){
  if (w === this$static.widget) {
    return;
  }
  if (w !== null) {
    $removeFromParent(w);
  }
  if (this$static.widget !== null) {
    $remove_0(this$static, this$static.widget);
  }
  this$static.widget = w;
  if (w !== null) {
    appendChild(this$static.element, this$static.widget.element);
    $adopt(this$static, w);
  }
}

function iterator_0(){
  return $SimplePanel$1(new SimplePanel$1(), this);
}

function remove_2(w){
  return $remove_0(this, w);
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel();
_.iterator = iterator_0;
_.remove_0 = remove_2;
_.typeId$ = 29;
_.widget = null;
function $clinit_29(){
  $clinit_29 = nullMethod;
  impl_0 = ($clinit_58() , implPanel);
}

function $FocusPanel(this$static){
  $clinit_29();
  $SimplePanel(this$static, $createFocusable(impl_0));
  $sinkEvents_0(this$static, 138237);
  return this$static;
}

function $addMouseListener(this$static, listener){
  if (this$static.mouseListeners === null) {
    this$static.mouseListeners = $MouseListenerCollection(new MouseListenerCollection());
  }
  $add_3(this$static.mouseListeners, listener);
}

function onBrowserEvent(event_0){
  switch (eventGetType(event_0)) {
    case 1:
      break;
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (this.mouseListeners !== null) {
        $fireMouseEvent(this.mouseListeners, this, event_0);
      }

      break;
    case 131072:
      break;
    case 4096:
    case 2048:
      break;
    case 128:
    case 512:
    case 256:
      break;
  }
}

function FocusPanel(){
}

_ = FocusPanel.prototype = new SimplePanel();
_.onBrowserEvent = onBrowserEvent;
_.typeId$ = 30;
_.mouseListeners = null;
var impl_0;
function $MouseListenerCollection(this$static){
  $ArrayList(this$static);
  return this$static;
}

function $fireMouseDown(this$static, sender, x, y){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext(it);) {
    listener = dynamicCast($next(it), 8);
    listener.onMouseDown(sender, x, y);
  }
}

function $fireMouseEnter(this$static, sender){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext(it);) {
    listener = dynamicCast($next(it), 8);
    listener.onMouseEnter(sender);
  }
}

function $fireMouseEvent(this$static, sender, event_0){
  var from, senderElem, to, x, y;
  senderElem = sender.element;
  x = eventGetClientX(event_0) - getAbsoluteLeft(senderElem) + getElementPropertyInt(senderElem, 'scrollLeft') + getScrollLeft();
  y = eventGetClientY(event_0) - getAbsoluteTop(senderElem) + getElementPropertyInt(senderElem, 'scrollTop') + getScrollTop();
  switch (eventGetType(event_0)) {
    case 4:
      $fireMouseDown(this$static, sender, x, y);
      break;
    case 8:
      $fireMouseUp(this$static, sender, x, y);
      break;
    case 64:
      $fireMouseMove(this$static, sender, x, y);
      break;
    case 16:
      from = eventGetFromElement(event_0);
      if (!isOrHasChild(senderElem, from)) {
        $fireMouseEnter(this$static, sender);
      }

      break;
    case 32:
      to = eventGetToElement(event_0);
      if (!isOrHasChild(senderElem, to)) {
        $fireMouseLeave(this$static, sender);
      }

      break;
  }
}

function $fireMouseLeave(this$static, sender){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext(it);) {
    listener = dynamicCast($next(it), 8);
    listener.onMouseLeave(sender);
  }
}

function $fireMouseMove(this$static, sender, x, y){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext(it);) {
    listener = dynamicCast($next(it), 8);
    listener.onMouseMove(sender, x, y);
  }
}

function $fireMouseUp(this$static, sender, x, y){
  var it, listener;
  for (it = $iterator_0(this$static); $hasNext(it);) {
    listener = dynamicCast($next(it), 8);
    listener.onMouseUp(sender, x, y);
  }
}

function MouseListenerCollection(){
}

_ = MouseListenerCollection.prototype = new ArrayList();
_.typeId$ = 31;
function $clinit_45(){
  $clinit_45 = nullMethod;
  rootPanels = $HashMap(new HashMap());
}

function $RootPanel(this$static, elem){
  $clinit_45();
  $AbsolutePanel(this$static);
  if (elem === null) {
    elem = getBodyElement();
  }
  this$static.setElement(elem);
  $onAttach(this$static);
  return this$static;
}

function get(id){
  $clinit_45();
  var elem, gwt;
  gwt = dynamicCast($get_0(rootPanels, id), 9);
  if (gwt !== null) {
    return gwt;
  }
  elem = null;
  if (id !== null) {
    if (null === (elem = getElementById(id))) {
      return null;
    }
  }
  if (rootPanels.size == 0) {
    hookWindowClosing_0();
  }
  $put(rootPanels, id, gwt = $RootPanel(new RootPanel(), elem));
  return gwt;
}

function getBodyElement(){
  $clinit_45();
  return $doc.body;
}

function hookWindowClosing_0(){
  $clinit_45();
  addWindowCloseListener(new RootPanel$1());
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel();
_.typeId$ = 32;
var rootPanels;
function onWindowClosed_0(){
  var gwt, it;
  for (it = $iterator_2($values(($clinit_45() , rootPanels))); $hasNext_1(it);) {
    gwt = dynamicCast($next_1(it), 9);
    if (gwt.attached) {
      $onDetach(gwt);
    }
  }
}

function onWindowClosing_0(){
  return null;
}

function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0();
_.onWindowClosed = onWindowClosed_0;
_.onWindowClosing = onWindowClosing_0;
_.typeId$ = 33;
function $$init_1(this$static){
  this$static.hasElement = this$static.this$0.widget !== null;
}

function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  $$init_1(this$static);
  return this$static;
}

function hasNext(){
  return this.hasElement;
}

function next_0(){
  if (!this.hasElement || this.this$0.widget === null) {
    throw new NoSuchElementException();
  }
  this.hasElement = false;
  return this.this$0.widget;
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0();
_.hasNext = hasNext;
_.next = next_0;
_.typeId$ = 0;
function $WidgetCollection(this$static, parent){
  this$static.array = initDims_0('[Lcom.google.gwt.user.client.ui.Widget;', [0], [2], [4], null);
  return this$static;
}

function $add_2(this$static, w){
  $insert(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] === w) {
      return i;
    }
  }
  return (-1);
}

function $insert(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw new IndexOutOfBoundsException();
  }
  if (this$static.size == this$static.array.length_0) {
    newArray = initDims_0('[Lcom.google.gwt.user.client.ui.Widget;', [0], [2], [this$static.array.length_0 * 2], null);
    for (i = 0; i < this$static.array.length_0; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $iterator(this$static){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator(), this$static);
}

function $remove_1(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw new IndexOutOfBoundsException();
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_2(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == (-1)) {
    throw new NoSuchElementException();
  }
  $remove_1(this$static, index);
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0();
_.typeId$ = 0;
_.array = null;
_.size = 0;
function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function hasNext_0(){
  return this.index < this.this$0.size - 1;
}

function next_1(){
  if (this.index >= this.this$0.size) {
    throw new NoSuchElementException();
  }
  return this.this$0.array[++this.index];
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0();
_.hasNext = hasNext_0;
_.next = next_1;
_.typeId$ = 0;
_.index = (-1);
function $clinit_58(){
  $clinit_58 = nullMethod;
  implPanel = $FocusImplOld(new FocusImplOld());
  implWidget = implPanel !== null?$FocusImpl(new FocusImpl()):implPanel;
}

function $FocusImpl(this$static){
  $clinit_58();
  return this$static;
}

function FocusImpl(){
}

_ = FocusImpl.prototype = new Object_0();
_.typeId$ = 0;
var implPanel, implWidget;
function $clinit_57(){
  $clinit_57 = nullMethod;
  $clinit_58();
}

function $$init_2(this$static){
  this$static.blurHandler = $createBlurHandler(this$static);
  this$static.focusHandler = $createFocusHandler(this$static);
  this$static.mouseHandler = $createMouseHandler(this$static);
}

function $FocusImplOld(this$static){
  $clinit_57();
  $FocusImpl(this$static);
  $$init_2(this$static);
  return this$static;
}

function $createBlurHandler(this$static){
  return function(evt){
    if (this.parentNode.onblur) {
      this.parentNode.onblur(evt);
    }
  }
  ;
}

function $createFocusHandler(this$static){
  return function(evt){
    if (this.parentNode.onfocus) {
      this.parentNode.onfocus(evt);
    }
  }
  ;
}

function $createFocusable(this$static){
  var div = $doc.createElement('div');
  var input = this$static.createHiddenInput();
  input.addEventListener('blur', this$static.blurHandler, false);
  input.addEventListener('focus', this$static.focusHandler, false);
  div.addEventListener('mousedown', this$static.mouseHandler, false);
  div.appendChild(input);
  return div;
}

function $createMouseHandler(this$static){
  return function(){
    this.firstChild.focus();
  }
  ;
}

function createHiddenInput(){
  var input = $doc.createElement('input');
  input.type = 'text';
  input.style.width = input.style.height = 0;
  input.style.zIndex = -1;
  input.style.position = 'absolute';
  return input;
}

function FocusImplOld(){
}

_ = FocusImplOld.prototype = new FocusImpl();
_.createHiddenInput = createHiddenInput;
_.typeId$ = 0;
function $Throwable(this$static, message){
  message;
  return this$static;
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0();
_.typeId$ = 11;
function $Exception(this$static, message){
  $Throwable(this$static, message);
  return this$static;
}

function Exception(){
}

_ = Exception.prototype = new Throwable();
_.typeId$ = 12;
function $RuntimeException(this$static, message){
  $Exception(this$static, message);
  return this$static;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception();
_.typeId$ = 13;
function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException();
_.typeId$ = 34;
function $clinit_60(){
  $clinit_60 = nullMethod;
  FALSE = $Boolean(new Boolean_0(), false);
  TRUE = $Boolean(new Boolean_0(), true);
}

function $Boolean(this$static, value){
  $clinit_60();
  this$static.value = value;
  return this$static;
}

function equals_2(o){
  return instanceOf(o, 13) && dynamicCast(o, 13).value == this.value;
}

function hashCode_3(){
  var hashCodeForFalse, hashCodeForTrue;
  hashCodeForTrue = 1231;
  hashCodeForFalse = 1237;
  return this.value?1231:1237;
}

function valueOf(b){
  $clinit_60();
  return b?TRUE:FALSE;
}

function Boolean_0(){
}

_ = Boolean_0.prototype = new Object_0();
_.equals$ = equals_2;
_.hashCode$ = hashCode_3;
_.typeId$ = 35;
_.value = false;
var FALSE, TRUE;
function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException();
_.typeId$ = 36;
function $IllegalArgumentException(this$static, message){
  $RuntimeException(this$static, message);
  return this$static;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException();
_.typeId$ = 37;
function $IllegalStateException(this$static, s){
  $RuntimeException(this$static, s);
  return this$static;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException();
_.typeId$ = 38;
function $IndexOutOfBoundsException(this$static, message){
  $RuntimeException(this$static, message);
  return this$static;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException();
_.typeId$ = 39;
function NegativeArraySizeException(){
}

_ = NegativeArraySizeException.prototype = new RuntimeException();
_.typeId$ = 40;
function $charAt(this$static, index){
  return this$static.charCodeAt(index);
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_1(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $length(this$static){
  return this$static.length;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __equals(me, other){
  return String(me) == other;
}

function equals_4(other){
  if (!instanceOf(other, 1))
    return false;
  return __equals(this, other);
}

function hashCode_5(){
  var hashCache = hashCache_0;
  if (!hashCache) {
    hashCache = hashCache_0 = {};
  }
  var key = ':' + this;
  var hashCode = hashCache[key];
  if (hashCode == null) {
    hashCode = 0;
    var n = this.length;
    var inc = n < 64?1:n / 32 | 0;
    for (var i = 0; i < n; i += inc) {
      hashCode <<= 1;
      hashCode += this.charCodeAt(i);
    }
    hashCode |= 0;
    hashCache[key] = hashCode;
  }
  return hashCode;
}

function valueOf_0(x){
  return '' + x;
}

_ = String.prototype;
_.equals$ = equals_4;
_.hashCode$ = hashCode_5;
_.typeId$ = 2;
var hashCache_0 = null;
function identityHashCode(o){
  return getHashCode_0(o);
}

function $UnsupportedOperationException(this$static, message){
  $RuntimeException(this$static, message);
  return this$static;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException();
_.typeId$ = 41;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext(this$static){
  return this$static.i < this$static.this$0.size_0();
}

function $next(this$static){
  if (!$hasNext(this$static)) {
    throw new NoSuchElementException();
  }
  return this$static.this$0.get(this$static.last = this$static.i++);
}

function $remove_3(this$static){
  if (this$static.last < 0) {
    throw new IllegalStateException();
  }
  this$static.this$0.remove(this$static.last);
  this$static.i = this$static.last;
  this$static.last = (-1);
}

function hasNext_1(){
  return $hasNext(this);
}

function next_2(){
  return $next(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0();
_.hasNext = hasNext_1;
_.next = next_2;
_.typeId$ = 0;
_.i = 0;
_.last = (-1);
function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = $iterator_3(this$static.entrySet()); $hasNext_2(iter);) {
    entry = $next_2(iter);
    k = entry.getKey();
    if (key === null?k === null:key.equals$(k)) {
      if (remove) {
        $remove_5(iter);
      }
      return entry;
    }
  }
  return null;
}

function $keySet(this$static){
  var entrySet;
  entrySet = this$static.entrySet();
  return $AbstractMap$1(new AbstractMap$1(), this$static, entrySet);
}

function $values(this$static){
  var entrySet;
  entrySet = $entrySet(this$static);
  return $AbstractMap$3(new AbstractMap$3(), this$static, entrySet);
}

function containsKey(key){
  return $implFindEntry(this, key, false) !== null;
}

function equals_6(obj){
  var iter, key, keys, otherKeys, otherMap, otherValue, value;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 15)) {
    return false;
  }
  otherMap = dynamicCast(obj, 15);
  keys = $keySet(this);
  otherKeys = otherMap.keySet();
  if (!$equals_0(keys, otherKeys)) {
    return false;
  }
  for (iter = $iterator_1(keys); $hasNext_0(iter);) {
    key = $next_0(iter);
    value = this.get_0(key);
    otherValue = otherMap.get_0(key);
    if (value === null?otherValue !== null:!value.equals$(otherValue)) {
      return false;
    }
  }
  return true;
}

function get_0(key){
  var entry;
  entry = $implFindEntry(this, key, false);
  return entry === null?null:entry.getValue();
}

function hashCode_7(){
  var entry, hashCode, iter;
  hashCode = 0;
  for (iter = $iterator_3(this.entrySet()); $hasNext_2(iter);) {
    entry = $next_2(iter);
    hashCode += entry.hashCode$();
  }
  return hashCode;
}

function keySet(){
  return $keySet(this);
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0();
_.containsKey = containsKey;
_.equals$ = equals_6;
_.get_0 = get_0;
_.hashCode$ = hashCode_7;
_.keySet = keySet;
_.typeId$ = 42;
function $equals_0(this$static, o){
  var iter, other, otherItem;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 16)) {
    return false;
  }
  other = dynamicCast(o, 16);
  if (other.size_0() != this$static.size_0()) {
    return false;
  }
  for (iter = other.iterator(); iter.hasNext();) {
    otherItem = iter.next();
    if (!this$static.contains(otherItem)) {
      return false;
    }
  }
  return true;
}

function equals_7(o){
  return $equals_0(this, o);
}

function hashCode_8(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator(); iter.hasNext();) {
    next = iter.next();
    if (next !== null) {
      hashCode += next.hashCode$();
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection();
_.equals$ = equals_7;
_.hashCode$ = hashCode_8;
_.typeId$ = 43;
function $AbstractMap$1(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function $iterator_1(this$static){
  var outerIter;
  outerIter = $iterator_3(this$static.val$entrySet);
  return $AbstractMap$2(new AbstractMap$2(), this$static, outerIter);
}

function contains_0(key){
  return this.this$0.containsKey(key);
}

function iterator_2(){
  return $iterator_1(this);
}

function size_0(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet();
_.contains = contains_0;
_.iterator = iterator_2;
_.size_0 = size_0;
_.typeId$ = 44;
function $AbstractMap$2(this$static, this$1, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function $hasNext_0(this$static){
  return this$static.val$outerIter.hasNext();
}

function $next_0(this$static){
  var entry;
  entry = this$static.val$outerIter.next();
  return entry.getKey();
}

function hasNext_2(){
  return $hasNext_0(this);
}

function next_3(){
  return $next_0(this);
}

function AbstractMap$2(){
}

_ = AbstractMap$2.prototype = new Object_0();
_.hasNext = hasNext_2;
_.next = next_3;
_.typeId$ = 0;
function $AbstractMap$3(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function $iterator_2(this$static){
  var outerIter;
  outerIter = $iterator_3(this$static.val$entrySet);
  return $AbstractMap$4(new AbstractMap$4(), this$static, outerIter);
}

function contains_1(value){
  return $containsValue(this.this$0, value);
}

function iterator_3(){
  return $iterator_2(this);
}

function size_1(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$3(){
}

_ = AbstractMap$3.prototype = new AbstractCollection();
_.contains = contains_1;
_.iterator = iterator_3;
_.size_0 = size_1;
_.typeId$ = 0;
function $AbstractMap$4(this$static, this$1, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function $hasNext_1(this$static){
  return this$static.val$outerIter.hasNext();
}

function $next_1(this$static){
  var value;
  value = this$static.val$outerIter.next().getValue();
  return value;
}

function hasNext_3(){
  return $hasNext_1(this);
}

function next_4(){
  return $next_1(this);
}

function AbstractMap$4(){
}

_ = AbstractMap$4.prototype = new Object_0();
_.hasNext = hasNext_3;
_.next = next_4;
_.typeId$ = 0;
function $clinit_91(){
  $clinit_91 = nullMethod;
  UNDEFINED = createUndefinedValue();
}

function $$init_4(this$static){
  {
    $clearImpl_0(this$static);
  }
}

function $HashMap(this$static){
  $clinit_91();
  $$init_4(this$static);
  return this$static;
}

function $clear(this$static){
  $clearImpl_0(this$static);
}

function $clearImpl_0(this$static){
  this$static.hashCodeMap = createArray();
  this$static.stringMap = createObject();
  this$static.nullSlot = wrapJSO(UNDEFINED, JavaScriptObject);
  this$static.size = 0;
}

function $containsKey(this$static, key){
  if (instanceOf(key, 1)) {
    return getStringValue(this$static.stringMap, dynamicCast(key, 1)) !== UNDEFINED;
  }
   else if (key === null) {
    return this$static.nullSlot !== UNDEFINED;
  }
   else {
    return getHashValue(this$static.hashCodeMap, key, key.hashCode$()) !== UNDEFINED;
  }
}

function $containsValue(this$static, value){
  if (this$static.nullSlot !== UNDEFINED && equalsWithNullCheck(this$static.nullSlot, value)) {
    return true;
  }
   else if (containsStringValue(this$static.stringMap, value)) {
    return true;
  }
   else if (containsHashValue(this$static.hashCodeMap, value)) {
    return true;
  }
  return false;
}

function $entrySet(this$static){
  return $HashMap$EntrySet(new HashMap$EntrySet(), this$static);
}

function $get_0(this$static, key){
  var result;
  if (instanceOf(key, 1)) {
    result = getStringValue(this$static.stringMap, dynamicCast(key, 1));
  }
   else if (key === null) {
    result = this$static.nullSlot;
  }
   else {
    result = getHashValue(this$static.hashCodeMap, key, key.hashCode$());
  }
  return result === UNDEFINED?null:result;
}

function $put(this$static, key, value){
  var previous;
  if (instanceOf(key, 1)) {
    previous = putStringValue(this$static.stringMap, dynamicCast(key, 1), value);
  }
   else if (key === null) {
    previous = this$static.nullSlot;
    this$static.nullSlot = value;
  }
   else {
    previous = putHashValue(this$static.hashCodeMap, key, value, key.hashCode$());
  }
  if (previous === UNDEFINED) {
    ++this$static.size;
    return null;
  }
   else {
    return previous;
  }
}

function $remove_6(this$static, key){
  var previous;
  if (instanceOf(key, 1)) {
    previous = removeStringValue(this$static.stringMap, dynamicCast(key, 1));
  }
   else if (key === null) {
    previous = this$static.nullSlot;
    this$static.nullSlot = wrapJSO(UNDEFINED, JavaScriptObject);
  }
   else {
    previous = removeHashValue(this$static.hashCodeMap, key, key.hashCode$());
  }
  if (previous === UNDEFINED) {
    return null;
  }
   else {
    --this$static.size;
    return previous;
  }
}

function addAllHashEntries(hashCodeMap, dest){
  $clinit_91();
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add_0(array[i]);
      }
    }
  }
}

function addAllStringEntries(stringMap, dest){
  $clinit_91();
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var value = stringMap[key];
      var entry = create(key.substring(1), value);
      dest.add_0(entry);
    }
  }
}

function containsHashValue(hashCodeMap, value){
  $clinit_91();
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (equalsWithNullCheck(value, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function containsKey_0(key){
  return $containsKey(this, key);
}

function containsStringValue(stringMap, value){
  $clinit_91();
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = stringMap[key];
      if (equalsWithNullCheck(value, entryValue)) {
        return true;
      }
    }
  }
  return false;
}

function createUndefinedValue(){
  $clinit_91();
}

function entrySet_0(){
  return $entrySet(this);
}

function equalsWithNullCheck(a, b){
  $clinit_91();
  if (a === b) {
    return true;
  }
   else if (a === null) {
    return false;
  }
   else {
    return a.equals$(b);
  }
}

function get_2(key){
  return $get_0(this, key);
}

function getHashValue(hashCodeMap, key, hashCode){
  $clinit_91();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (equalsWithNullCheck(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
}

function getStringValue(stringMap, key){
  $clinit_91();
  return stringMap[':' + key];
}

function putHashValue(hashCodeMap, key, value, hashCode){
  $clinit_91();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (equalsWithNullCheck(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = hashCodeMap[hashCode] = [];
  }
  var entry = create(key, value);
  array.push(entry);
}

function putStringValue(stringMap, key, value){
  $clinit_91();
  key = ':' + key;
  var result = stringMap[key];
  stringMap[key] = value;
  return result;
}

function removeHashValue(hashCodeMap, key, hashCode){
  $clinit_91();
  var array = hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (equalsWithNullCheck(key, entryKey)) {
        if (array.length == 1) {
          delete hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        return entry.getValue();
      }
    }
  }
}

function removeStringValue(stringMap, key){
  $clinit_91();
  key = ':' + key;
  var result = stringMap[key];
  delete stringMap[key];
  return result;
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractMap();
_.containsKey = containsKey_0;
_.entrySet = entrySet_0;
_.get_0 = get_2;
_.typeId$ = 45;
_.hashCodeMap = null;
_.nullSlot = null;
_.size = 0;
_.stringMap = null;
var UNDEFINED;
function $HashMap$EntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value = value;
  return this$static;
}

function create(key, value){
  return $HashMap$EntryImpl(new HashMap$EntryImpl(), key, value);
}

function equals_9(other){
  var entry;
  if (instanceOf(other, 17)) {
    entry = dynamicCast(other, 17);
    if (equalsWithNullCheck(this.key, entry.getKey()) && equalsWithNullCheck(this.value, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getKey(){
  return this.key;
}

function getValue(){
  return this.value;
}

function hashCode_9(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (this.key !== null) {
    keyHash = this.key.hashCode$();
  }
  if (this.value !== null) {
    valueHash = this.value.hashCode$();
  }
  return keyHash ^ valueHash;
}

function setValue(object){
  var old;
  old = this.value;
  this.value = object;
  return old;
}

function HashMap$EntryImpl(){
}

_ = HashMap$EntryImpl.prototype = new Object_0();
_.equals$ = equals_9;
_.getKey = getKey;
_.getValue = getValue;
_.hashCode$ = hashCode_9;
_.setValue = setValue;
_.typeId$ = 46;
_.key = null;
_.value = null;
function $HashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $iterator_3(this$static){
  return $HashMap$EntrySetIterator(new HashMap$EntrySetIterator(), this$static.this$0);
}

function contains_3(o){
  var entry, key, value;
  if (instanceOf(o, 17)) {
    entry = dynamicCast(o, 17);
    key = entry.getKey();
    if ($containsKey(this.this$0, key)) {
      value = $get_0(this.this$0, key);
      return equalsWithNullCheck(entry.getValue(), value);
    }
  }
  return false;
}

function iterator_4(){
  return $iterator_3(this);
}

function size_3(){
  return this.this$0.size;
}

function HashMap$EntrySet(){
}

_ = HashMap$EntrySet.prototype = new AbstractSet();
_.contains = contains_3;
_.iterator = iterator_4;
_.size_0 = size_3;
_.typeId$ = 47;
function $HashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList());
  if (this$static.this$0.nullSlot !== ($clinit_91() , UNDEFINED)) {
    $add_3(list, $HashMap$EntryImpl(new HashMap$EntryImpl(), null, this$static.this$0.nullSlot));
  }
  addAllStringEntries(this$static.this$0.stringMap, list);
  addAllHashEntries(this$static.this$0.hashCodeMap, list);
  this$static.iter = $iterator_0(list);
  return this$static;
}

function $hasNext_2(this$static){
  return $hasNext(this$static.iter);
}

function $next_2(this$static){
  return this$static.last = dynamicCast($next(this$static.iter), 17);
}

function $remove_5(this$static){
  if (this$static.last === null) {
    throw $IllegalStateException(new IllegalStateException(), 'Must call next() before remove().');
  }
   else {
    $remove_3(this$static.iter);
    $remove_6(this$static.this$0, this$static.last.getKey());
    this$static.last = null;
  }
}

function hasNext_4(){
  return $hasNext_2(this);
}

function next_5(){
  return $next_2(this);
}

function HashMap$EntrySetIterator(){
}

_ = HashMap$EntrySetIterator.prototype = new Object_0();
_.hasNext = hasNext_4;
_.next = next_5;
_.typeId$ = 0;
_.iter = null;
_.last = null;
function $HashSet(this$static){
  this$static.map = $HashMap(new HashMap());
  return this$static;
}

function $add_4(this$static, o){
  var old;
  old = $put(this$static.map, o, valueOf(true));
  return old === null;
}

function $clear_0(this$static){
  $clear(this$static.map);
}

function $iterator_4(this$static){
  return $iterator_1($keySet(this$static.map));
}

function add_5(o){
  return $add_4(this, o);
}

function contains_4(o){
  return $containsKey(this.map, o);
}

function iterator_5(){
  return $iterator_4(this);
}

function size_4(){
  return this.map.size;
}

function HashSet(){
}

_ = HashSet.prototype = new AbstractSet();
_.add_0 = add_5;
_.contains = contains_4;
_.iterator = iterator_5;
_.size_0 = size_4;
_.typeId$ = 48;
_.map = null;
function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException();
_.typeId$ = 49;
function init_0(){
  $onModuleLoad($GwtRaster(new GwtRaster()));
}

function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      init_0();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    init_0();
  }
}

var typeIdArray = [{}, {}, {1:1}, {8:1}, {8:1}, {8:1}, {7:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {4:1}, {4:1}, {4:1}, {4:1}, {3:1}, {3:1, 5:1}, {3:1}, {6:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {14:1}, {14:1}, {14:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {2:1, 10:1, 11:1, 12:1}, {14:1}, {2:1, 9:1, 10:1, 11:1, 12:1}, {6:1}, {4:1}, {13:1}, {4:1}, {4:1}, {4:1}, {4:1}, {4:1}, {4:1}, {15:1}, {16:1}, {16:1}, {15:1}, {17:1}, {16:1}, {16:1}, {4:1}];

if (com_boscomonkey_gwtraster_GwtRaster) {
  var __gwt_initHandlers = com_boscomonkey_gwtraster_GwtRaster.__gwt_initHandlers;  com_boscomonkey_gwtraster_GwtRaster.onScriptLoad(gwtOnLoad);
}
})();
