(this["webpackJsonpsimulation-vr"]=this["webpackJsonpsimulation-vr"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var o=n(9),a=n(0),i=n.n(a),s=n(12),r=n.n(s),c=(n(22),n(1)),l=n(5),h=n(7),u=n(8),d=n(6),p=n(3),m=n(4),b=n(2),v=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"createButton",value:function(e,t){t&&console.error('THREE.VRButton: The "options" parameter has been removed. Please set the reference space type via renderer.xr.setReferenceSpaceType() instead.');var n=document.createElement("button");function o(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null,n.textContent="VR NOT SUPPORTED"}function a(e){e.style.position="absolute",e.style.bottom="20px",e.style.padding="12px 6px",e.style.border="1px solid #fff",e.style.borderRadius="4px",e.style.background="rgba(0,0,0,0.1)",e.style.color="#fff",e.style.font="normal 13px sans-serif",e.style.textAlign="center",e.style.opacity="0.5",e.style.outline="none",e.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",a(n),navigator.xr.isSessionSupported("immersive-vr").then((function(t){t?function(){var t=null;function o(o){o.addEventListener("end",a),e.xr.setSession(o),n.textContent="EXIT VR",t=o}function a(){t.removeEventListener("end",a),n.textContent="ENTER VR",t=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){null===t?navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]}).then(o):t.end()}}():o()})),n;var i=document.createElement("a");return!1===window.isSecureContext?(i.href=document.location.href.replace(/^http:/,"https:"),i.innerHTML="WEBXR NEEDS HTTPS"):(i.href="https://immersiveweb.dev/",i.innerHTML="WEBXR NOT AVAILABLE"),i.style.left="calc(50% - 90px)",i.style.width="180px",i.style.textDecoration="none",a(i),i}}]),e}(),g=function(e,t){void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new b.A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:b.i.ROTATE,MIDDLE:b.i.DOLLY,RIGHT:b.i.PAN},this.touches={ONE:b.w.ROTATE,TWO:b.w.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.listenToKeyEvents=function(e){e.addEventListener("keydown",X),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),r=s.NONE},this.update=function(){var t=new b.A,a=(new b.o).setFromUnitVectors(e.up,new b.A(0,1,0)),i=a.clone().invert(),m=new b.A,v=new b.o,g=2*Math.PI;return function(){var e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(a),l.setFromVector3(t),n.autoRotate&&r===s.NONE&&x(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);var b=n.minAzimuthAngle,y=n.maxAzimuthAngle;return isFinite(b)&&isFinite(y)&&(b<-Math.PI?b+=g:b>Math.PI&&(b-=g),y<-Math.PI?y+=g:y>Math.PI&&(y-=g),l.theta=b<=y?Math.max(b,Math.min(y,l.theta)):l.theta>(b+y)/2?Math.max(b,l.theta):Math.min(y,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=u,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),!0===n.enableDamping?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),t.setFromSpherical(l),t.applyQuaternion(i),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),u=1,!!(p||m.distanceToSquared(n.object.position)>c||8*(1-v.dot(n.object.quaternion))>c)&&(n.dispatchEvent(o),m.copy(n.object.position),v.copy(n.object.quaternion),p=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",H),n.domElement.removeEventListener("wheel",U),n.domElement.removeEventListener("touchstart",Z),n.domElement.removeEventListener("touchend",V),n.domElement.removeEventListener("touchmove",B),n.domElement.ownerDocument.removeEventListener("pointermove",K),n.domElement.ownerDocument.removeEventListener("pointerup",F),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",X)};var n=this,o={type:"change"},a={type:"start"},i={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,c=1e-6,l=new b.s,h=new b.s,u=1,d=new b.A,p=!1,m=new b.z,v=new b.z,g=new b.z,y=new b.z,f=new b.z,j=new b.z,O=new b.z,w=new b.z,_=new b.z;function E(){return Math.pow(.95,n.zoomSpeed)}function x(e){h.theta-=e}function P(e){h.phi-=e}var T=function(){var e=new b.A;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),k=function(){var e=new b.A;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),A=function(){var e=new b.A;return function(t,o){var a=n.domElement;if(n.object.isPerspectiveCamera){var i=n.object.position;e.copy(i).sub(n.target);var s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),T(2*t*s/a.clientHeight,n.object.matrix),k(2*o*s/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(T(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),k(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function M(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(e){m.set(e.clientX,e.clientY)}function R(e){y.set(e.clientX,e.clientY)}function C(e){if(1==e.touches.length)m.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);m.set(t,n)}}function D(e){if(1==e.touches.length)y.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);y.set(t,n)}}function S(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);O.set(0,o)}function z(e){if(1==e.touches.length)v.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),o=.5*(e.touches[0].pageY+e.touches[1].pageY);v.set(t,o)}g.subVectors(v,m).multiplyScalar(n.rotateSpeed);var a=n.domElement;x(2*Math.PI*g.x/a.clientHeight),P(2*Math.PI*g.y/a.clientHeight),m.copy(v)}function I(e){if(1==e.touches.length)f.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),o=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(t,o)}j.subVectors(f,y).multiplyScalar(n.panSpeed),A(j.x,j.y),y.copy(f)}function Y(e){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+o*o);w.set(0,a),_.set(0,Math.pow(w.y/O.y,n.zoomSpeed)),L(_.y),O.copy(w)}function H(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){var t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case b.i.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY)}(e),r=s.DOLLY;break;case b.i.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;R(e),r=s.PAN}else{if(!1===n.enableRotate)return;N(e),r=s.ROTATE}break;case b.i.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;N(e),r=s.ROTATE}else{if(!1===n.enablePan)return;R(e),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",K),n.domElement.ownerDocument.addEventListener("pointerup",F),n.dispatchEvent(a))}(e)}}function K(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===n.enabled)return;switch(e.preventDefault(),r){case s.ROTATE:if(!1===n.enableRotate)return;!function(e){v.set(e.clientX,e.clientY),g.subVectors(v,m).multiplyScalar(n.rotateSpeed);var t=n.domElement;x(2*Math.PI*g.x/t.clientHeight),P(2*Math.PI*g.y/t.clientHeight),m.copy(v),n.update()}(e);break;case s.DOLLY:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY),_.subVectors(w,O),_.y>0?L(E()):_.y<0&&M(E()),O.copy(w),n.update()}(e);break;case s.PAN:if(!1===n.enablePan)return;!function(e){f.set(e.clientX,e.clientY),j.subVectors(f,y).multiplyScalar(n.panSpeed),A(j.x,j.y),y.copy(f),n.update()}(e)}}(e)}}function F(e){switch(e.pointerType){case"mouse":case"pen":!function(e){if(n.domElement.ownerDocument.removeEventListener("pointermove",K),n.domElement.ownerDocument.removeEventListener("pointerup",F),!1===n.enabled)return;n.dispatchEvent(i),r=s.NONE}()}}function U(e){!1===n.enabled||!1===n.enableZoom||r!==s.NONE&&r!==s.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(a),function(e){e.deltaY<0?M(E()):e.deltaY>0&&L(E()),n.update()}(e),n.dispatchEvent(i))}function X(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){var t=!1;switch(e.keyCode){case n.keys.UP:A(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:A(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:A(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:A(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function Z(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case b.w.ROTATE:if(!1===n.enableRotate)return;C(e),r=s.TOUCH_ROTATE;break;case b.w.PAN:if(!1===n.enablePan)return;D(e),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case b.w.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&S(e),n.enablePan&&D(e)}(e),r=s.TOUCH_DOLLY_PAN;break;case b.w.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&S(e),n.enableRotate&&C(e)}(e),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(a)}}function B(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),r){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;z(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;I(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&Y(e),n.enablePan&&I(e)}(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&Y(e),n.enableRotate&&z(e)}(e),n.update();break;default:r=s.NONE}}function V(e){!1!==n.enabled&&(n.dispatchEvent(i),r=s.NONE)}function W(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",H),n.domElement.addEventListener("wheel",U),n.domElement.addEventListener("touchstart",Z),n.domElement.addEventListener("touchend",V),n.domElement.addEventListener("touchmove",B),this.update()};(g.prototype=Object.create(b.g.prototype)).constructor=g;var y=function(e,t){g.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=b.i.PAN,this.mouseButtons.RIGHT=b.i.ROTATE,this.touches.ONE=b.w.PAN,this.touches.TWO=b.w.DOLLY_ROTATE};(y.prototype=Object.create(b.g.prototype)).constructor=y;var f=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var o;Object(c.a)(this,n),(o=t.call(this,e))._scene=void 0,o._camera=void 0,o._renderer=void 0,o._container=null,o._objects=[],o._cnt=0,o._orbitControls=null,o._isKeyDown={},o._lookAt=new b.A(0,0,0),o._bgColor=new b.e("#b4bad2"),o._raycaster=new b.p,o._mousePos={x:0,y:0},o._intersectedObj=null,o._lastIntersectedObj=null,o._clock=new b.d,o._scene=new b.q;var a=o.props.width,i=o.props.height;return o._camera=new b.m(45,a/i,.1,1e3),o._camera.position.x=o.props.cameraPos.x,o._camera.position.y=o.props.cameraPos.y,o._camera.position.z=o.props.cameraPos.z,o._lookAt=void 0===e.lookAt?new b.A(0,0,0):new b.A(e.lookAt.x,e.lookAt.y,e.lookAt.z),o._camera.lookAt(new b.A(o._lookAt.x,o._lookAt.y,o._lookAt.z)),o._renderer=new b.B({antialias:!0}),o._renderer.setSize(a,i),void 0!==e.bgColor&&(o._bgColor=e.bgColor),o._renderer.setClearColor(o._bgColor),o._renderer.shadowMap.enabled=!0,o._renderer.xr.enabled=!0,o._raycaster=new b.p,o._intersectedObj=null,o._lastIntersectedObj=null,o._clock=new b.d,o._clock.getElapsedTime(),o.createObjects=o.createObjects.bind(Object(h.a)(o)),o.update=o.update.bind(Object(h.a)(o)),o.handleKeyDown=o.handleKeyDown.bind(Object(h.a)(o)),o.handleKeyUp=o.handleKeyUp.bind(Object(h.a)(o)),o.handleMouseMove=o.handleMouseMove.bind(Object(h.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this._objects.map((function(t){return e._scene.add(t.obj)})),this._container&&(this._container.appendChild(this._renderer.domElement),this._orbitControls=new g(this._camera,this._container),this._orbitControls.target.set(0,0,0),this._orbitControls.update()),this.start(),r.a.render(Object(o.jsx)("div",{id:"vr_button"}),document.body.appendChild(v.createButton(this._renderer))),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("mousemove",this.handleMouseMove)}},{key:"handleKeyDown",value:function(e){this._isKeyDown["key_".concat(e.key)]=!0}},{key:"handleKeyUp",value:function(e){this._isKeyDown["key_".concat(e.key)]=!1}},{key:"isKeyPressed",value:function(e){return this._isKeyDown["key_".concat(e)]}},{key:"handleMouseMove",value:function(e){this._mousePos.x=e.clientX/window.innerWidth*2-1,this._mousePos.y=-e.clientY/window.innerHeight*2+1}},{key:"componentWillUnmount",value:function(){this.stop(),this._container&&this._container.removeChild(this._renderer.domElement)}},{key:"start",value:function(){var e=this;this._renderer.setAnimationLoop((function(){e._cnt+=1,e.update(e._clock.getDelta()),e._renderer.render(e._scene,e._camera)}))}},{key:"stop",value:function(){}},{key:"update",value:function(e){this._raycaster.setFromCamera(new b.z(this._mousePos.x,this._mousePos.y),this._camera);var t=this._raycaster.intersectObject(this._scene,!0);if(t.length>0){var n=t[0].object;this._intersectedObj=n}else null!=this._intersectedObj&&(this._lastIntersectedObj=this._intersectedObj,this._intersectedObj=null)}},{key:"createObjects",value:function(){return[]}},{key:"onObjectsUpdated",value:function(){var e=this;this._scene.remove.apply(this._scene,this._scene.children),this._objects.map((function(t){return e._scene.add(t.obj)}));var t=new b.a(16777215,.5);this._scene.add(t);var n=new b.t(16777215,2,100,Math.PI/4,1);n.position.set(2,7,2),n.castShadow=!0,this._scene.add(n)}},{key:"addObject",value:function(e){this._objects.push(e),this.onObjectsUpdated()}},{key:"getCamPos",value:function(){return this._camera.position}},{key:"setCamPos",value:function(e,t,n){this._camera.position.set(e,t,n)}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{style:{width:this.props.width,height:this.props.height},ref:function(t){e._container=t}}),Object(o.jsx)("div",{id:"vr_button"})]})}}]),n}(i.a.Component),j=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"createSphere",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2284834,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:b.h,r=arguments.length>7?arguments[7]:void 0,c=o,l=new b.r(c,20,20),h={color:i,opacity:a,transparent:!0,side:s,depthWrite:!1};void 0!==r&&(h.map=(new b.x).load(r));var u=new b.k(h),d=new b.j(l,u);return d.position.x=e,d.position.y=t,d.position.z=n,d.castShadow=!0,d}},{key:"createBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:16711680,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:b.h,l=arguments.length>9?arguments[9]:void 0,h={color:r,opacity:s,transparent:!0,side:c,depthWrite:!1};void 0!==l&&(h.map=(new b.x).load(l));var u=new b.j(new b.c(o,a,i),new b.l(h));return u.receiveShadow=!0,u.position.set(e,t,n),u}},{key:"createPlane",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-.5*Math.PI,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:16777215,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:3,l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:3,h=arguments.length>10&&void 0!==arguments[10]?arguments[10]:b.f,u=arguments.length>11?arguments[11]:void 0,d=new b.n(l,c,1,1),p={color:r,opacity:s,transparent:!0,side:h};void 0!==u&&(p.map=(new b.x).load(u));var m=new b.l(p),v=new b.j(d,m);return v.receiveShadow=!0,v.castShadow=!0,v.rotation.set(o,a,i),v.position.set(e,t,n),v}},{key:"createArrow",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:-Math.PI,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,h=arguments.length>10&&void 0!==arguments[10]?arguments[10]:.8,u=arguments.length>11&&void 0!==arguments[11]?arguments[11]:65280,d=arguments.length>12&&void 0!==arguments[12]?arguments[12]:.3,p=arguments.length>13&&void 0!==arguments[13]?arguments[13]:.3,m=new b.A(a,i,s),v=new b.A(t,n,o),g=new b.b(m,v,h,u,d,p);return g.name=e,g.rotation.x=r,g.rotation.y=c,g.rotation.z=l,g}},{key:"createSprite",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:238,i=new b.v({color:a}),s=new b.u(i);return s.position.x=e,s.position.y=t,s.position.z=n,s.scale.x=o,s.scale.y=o,s.scale.z=o,s}},{key:"createTorusKnot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.4,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:64,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:8,r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:2,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:3,l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,h=arguments.length>10&&void 0!==arguments[10]?arguments[10]:6724095,u=arguments.length>11&&void 0!==arguments[11]?arguments[11]:.5,d=arguments.length>12&&void 0!==arguments[12]?arguments[12]:b.h,p=arguments.length>13?arguments[13]:void 0,m=new b.y(o,a,i,s,r,c),v={color:h,opacity:l,transparent:!0,side:d,roughness:u};void 0!==p&&(v.map=(new b.x).load(p));var g=new b.l(v),y=new b.j(m,g);return y.receiveShadow=!0,y.castShadow=!0,y.position.set(e,t,n),y}}]),e}(),O=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e))._objects=o.createObjects(),o.update=o.update.bind(Object(h.a)(o)),o.createObjects=o.createObjects.bind(Object(h.a)(o)),o.forceUpdate(),o}return Object(l.a)(n,[{key:"update",value:function(e){Object(u.a)(Object(d.a)(n.prototype),"update",this).call(this,e)}},{key:"createObjects",value:function(){var e=Object(u.a)(Object(d.a)(n.prototype),"createObjects",this).call(this);return e.push({tag:"x_axis",obj:j.createArrow("x_axis",0,0,0,1,0,0,.5*Math.PI,0,0,6,16711680,.5,.5),objType:"arrow"}),e.push({tag:"y_axis",obj:j.createArrow("y_axis",0,0,0,0,1,0,0,.5*Math.PI,0,6,65280,.6,.6),objType:"arrow"}),e.push({tag:"z_axis",obj:j.createArrow("z_axis",0,0,0,0,0,1,0,0,.5*Math.PI,6,255,.6,.6),objType:"arrow"}),e}}]),n}(f),w=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).update=o.update.bind(Object(h.a)(o)),o.createObjects=o.createObjects.bind(Object(h.a)(o)),o._objects=o.createObjects(),o.onObjectsUpdated(),o.forceUpdate(),o}return Object(l.a)(n,[{key:"update",value:function(e){Object(u.a)(Object(d.a)(n.prototype),"update",this).call(this,e);var t=this._objects.findIndex((function(e){return"box1"===e.tag}));(this._objects[t].obj.rotation.x+=.01,this._objects[t].obj.rotation.y+=.01,this.isKeyPressed("ArrowUp")&&(this._objects[t].obj.position.y+=.1),this.isKeyPressed("ArrowDown")&&(this._objects[t].obj.position.y-=.1),this.isKeyPressed("ArrowRight")&&(this._objects[t].obj.position.x+=.1),this.isKeyPressed("ArrowLeft")&&(this._objects[t].obj.position.x-=.1),null!==this._intersectedObj&&"Mesh"===this._intersectedObj.type)?(this._intersectedObj.material.color.set(16777215*Math.random()),this._intersectedObj.scale.set(1.5,1.5,1.5)):null!==this._lastIntersectedObj&&"Mesh"===this._lastIntersectedObj.type&&this._lastIntersectedObj.scale.set(1,1,1);t=this._objects.findIndex((function(e){return"plane1"===e.tag})),this._objects[t].obj.position.y=Math.sin(1*this._clock.getElapsedTime())}},{key:"createObjects",value:function(){var e=Object(u.a)(Object(d.a)(n.prototype),"createObjects",this).call(this);return e.push({tag:"box1",obj:j.createTorusKnot(0,.2,0),objType:"box"}),e.push({tag:"plane1",obj:j.createPlane(0,0,0,-.5*Math.PI,0,0,.6,16777215,10,10,b.f,"https://threejsfundamentals.org/threejs/resources/images/wall.jpg"),objType:"plane"}),e}}]),n}(O),_=(n(23),n(42)),E=i.a.createRef(),x=i.a.createRef(),P=i.a.createRef(),T=function(){var e=E.current.getCamPos();E.current.setCamPos(e.x+.1,e.y+.1,e.z+.1),x.current.textContent=e.x.toFixed(3),P.current.textContent=e.x.toFixed(3)};var k=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(w,{width:.9*window.innerWidth,height:.9*window.innerHeight,cameraPos:{x:5,y:5,z:5},ref:E}),Object(o.jsx)(_.a,{variant:"contained",color:"primary",onClick:T,ref:P,children:null===E.current?"-":E.current.getCamPos().x}),Object(o.jsx)("text",{ref:x})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),i(e),s(e)}))};r.a.render(Object(o.jsx)(k,{}),document.getElementById("root")),A()}},[[28,1,2]]]);
//# sourceMappingURL=main.b462e905.chunk.js.map