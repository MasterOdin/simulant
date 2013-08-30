// TODO remove the ones that aren't supported in any browser
var eventTypesByGroup = {
	UIEvent:                     'abort error resize scroll select unload',
	Event:                       'afterprint beforeprint cached canplay canplaythrough change chargingchange chargingtimechange checking close dischargingtimechange DOMContentLoaded downloading durationchange emptied ended fullscreenchange fullscreenerror input invalid levelchange loadeddata loadedmetadata noupdate obsolete offline online open orientationchange pause pointerlockchange pointerlockerror play playing ratechange readystatechange reset seeked seeking stalled submit success suspend timeupdate updateready visibilitychange volumechange waiting',
	AnimationEvent:              'animationend animationiteration animationstart',
	AudioProcessingEvent:        'audioprocess',
	BeforeUnloadEvent:           'beforeunload',
	TimeEvent:                   'beginEvent endEvent repeatEvent',
	FocusEvent:                  'blur focus focusin focusout',
	MouseEvent:                  'click contextmenu dblclick mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup show',
	SensorEvent:                 'compassneedscalibration userproximity',
	OfflineAudioCompletionEvent: 'complete',
	CompositionEvent:            'compositionend compositionstart compositionupdate',
	ClipboardEvent:              'copy cut paste',
	DeviceLightEvent:            'devicelight',
	DeviceMotionEvent:           'devicemotion',
	DeviceOrientationEvent:      'deviceorientation',
	DeviceProximityEvent:        'deviceproximity',
	DragEvent:                   'drag dragend dragenter dragleave dragover dragstart drop',
	GamepadEvent:                'gamepadconnected gamepaddisconnected',
	HashChangeEvent:             'hashchange',
	KeyboardEvent:               'keydown keypress keyup',
	ProgressEvent:               'loadend loadstart progress timeout',
	MessageEvent:                'message',
	PageTransitionEvent:         'pagehide pageshow',
	PopStateEvent:               'popstate',
	StorageEvent:                'storage',
	SVGEvent:                    'SVGAbort SVGError SVGLoad SVGResize SVGScroll SVGUnload',
	SVGZoomEvent:                'SVGZoom',
	TouchEvent:                  'touchcancel touchend touchenter touchleave touchmove touchstart',
	TransitionEvent:             'transitionend',
	WheelEvent:                  'wheel'
};

