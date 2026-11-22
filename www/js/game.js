var Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gu=0,Al=1,_u=2;var Qc=1,Ho=2,Bn=3,ti=0,qe=1,zn=2;var wn=0,as=1,Cr=2,Rl=3,Cl=4,xu=5,Si=100,vu=101,yu=102,Pl=103,Ll=104,Mu=200,Su=201,bu=202,Eu=203,ro=204,ao=205,Tu=206,wu=207,Au=208,Ru=209,Cu=210,Pu=211,Lu=212,Iu=213,Du=214,Uu=0,Nu=1,Ou=2,Pr=3,Fu=4,Bu=5,zu=6,ku=7,th=0,Hu=1,Vu=2,An=0,Vo=1,Go=2,Wo=3,Xo=4,Gu=5,qo=6;var eh=300,cs=301,hs=302,oo=303,lo=304,sa=306,co=1e3,dn=1001,ho=1002,ze=1003,Il=1004;var Ca=1005;var sn=1006,Wu=1007;var zs=1008;var Qn=1009,Xu=1010,qu=1011,Yo=1012,nh=1013,$n=1014,jn=1015,mn=1016,ih=1017,sh=1018,Ei=1020,Yu=1021,pn=1023,Zu=1024,Ju=1025,Ti=1026,us=1027,Ku=1028,rh=1029,$u=1030,ah=1031,oh=1033,Pa=33776,La=33777,Ia=33778,Da=33779,Dl=35840,Ul=35841,Nl=35842,Ol=35843,lh=36196,Fl=37492,Bl=37496,zl=37808,kl=37809,Hl=37810,Vl=37811,Gl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,Jl=37818,Kl=37819,$l=37820,jl=37821,Ua=36492,Ql=36494,tc=36495,ju=36283,ec=36284,nc=36285,ic=36286;var Lr=2300,Ir=2301,Na=2302,sc=2400,rc=2401,ac=2402;var ch=3e3,wi=3001,Qu=3200,tf=3201,hh=0,ef=1,rn="",we="srgb",Hn="srgb-linear",Zo="display-p3",ra="display-p3-linear",Dr="linear",ee="srgb",Ur="rec709",Nr="p3";var zi=7680;var oc=519,nf=512,sf=513,rf=514,uh=515,af=516,of=517,lf=518,cf=519,lc=35044;var cc="300 es",uo=1035,kn=2e3,Or=2001,Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=1234567,Ns=Math.PI/180,ks=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Jo(i,t){return(i%t+t)%t}function hf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function uf(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function ff(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function df(i,t=1){return t-Math.abs(Jo(i,t*2)-t)}function pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _f(i,t){return i+Math.random()*(t-i)}function xf(i){return i*(.5-Math.random())}function vf(i){i!==void 0&&(hc=i);let t=hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yf(i){return i*Ns}function Mf(i){return i*ks}function fo(i){return(i&i-1)===0&&i!==0}function Sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var fh={DEG2RAD:Ns,RAD2DEG:ks,generateUUID:ms,clamp:Ue,euclideanModulo:Jo,mapLinear:hf,inverseLerp:uf,lerp:Os,damp:ff,pingpong:df,smoothstep:pf,smootherstep:mf,randInt:gf,randFloat:_f,randFloatSpread:xf,seededRandom:vf,degToRad:yf,radToDeg:Mf,isPowerOfTwo:fo,ceilPowerOfTwo:Sf,floorPowerOfTwo:Fr,setQuaternionFromProperEuler:bf,normalize:Fe,denormalize:ns},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],v=s[0],m=s[3],d=s[6],E=s[1],M=s[4],P=s[7],D=s[2],C=s[5],A=s[8];return r[0]=o*v+a*E+l*D,r[3]=o*m+a*M+l*C,r[6]=o*d+a*P+l*A,r[1]=c*v+h*E+u*D,r[4]=c*m+h*M+u*C,r[7]=c*d+h*P+u*A,r[2]=f*v+p*E+_*D,r[5]=f*m+p*M+_*C,r[8]=f*d+p*P+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,_=e*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Oa=new qt;function dh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ef(){let i=Br("canvas");return i.style.display="block",i}var uc={};function Fs(i){i in uc||(uc[i]=!0,console.warn(i))}var fc=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dc=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[Hn]:{transfer:Dr,primaries:Ur,toReference:i=>i,fromReference:i=>i},[we]:{transfer:ee,primaries:Ur,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ra]:{transfer:Dr,primaries:Nr,toReference:i=>i.applyMatrix3(dc),fromReference:i=>i.applyMatrix3(fc)},[Zo]:{transfer:ee,primaries:Nr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(dc),fromReference:i=>i.applyMatrix3(fc).convertLinearToSRGB()}},Tf=new Set([Hn,ra]),Qt={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Tf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=rr[t].toReference,s=rr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return rr[i].primaries},getTransfer:function(i){return i===rn?Dr:rr[i].transfer}};function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,zr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Br("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ms(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Af=0,gn=class i extends Rn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=dn,s=dn,r=sn,o=zs,a=pn,l=Qn,c=i.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ms(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wi?we:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case co:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case co:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===we?wi:ch}set encoding(t){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===wi?we:rn}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=eh;gn.DEFAULT_ANISOTROPY=1;var Se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,P=(p+1)/2,D=(d+1)/2,C=(h+f)/4,A=(u+v)/4,Z=(_+m)/4;return M>P&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=A/n):P>D?P<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),n=C/s,r=Z/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=Z/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},po=class extends Rn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wi?we:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new kr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends po{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hr=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mo=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==f||c!==p||h!==_){let m=1-a,d=l*f+c*p+h*_+u*v,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let D=Math.sqrt(M),C=Math.atan2(D,d*E);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}let P=a*E;if(l=l*m+f*P,c=c*m+p*P,h=h*m+_*P,u=u*m+v*P,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*p-c*f,t[e+1]=l*_+h*f+c*u-a*p,t[e+2]=c*_+h*p+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new N,pc=new _n,Vn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(t.matrixWorld),this.union(ar)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),or.subVectors(this.max,Cs),Hi.subVectors(t.a,Cs),Vi.subVectors(t.b,Cs),Gi.subVectors(t.c,Cs),qn.subVectors(Vi,Hi),Yn.subVectors(Gi,Vi),_i.subVectors(Hi,Gi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-_i.z,_i.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,_i.z,0,-_i.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-_i.y,_i.x,0];return!ka(e,Hi,Vi,Gi,or)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Hi,Vi,Gi,or))?!1:(lr.crossVectors(qn,Yn),e=[lr.x,lr.y,lr.z],ka(e,Hi,Vi,Gi,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new N,new N,new N,new N,new N,new N,new N,new N],cn=new N,ar=new Vn,Hi=new N,Vi=new N,Gi=new N,qn=new N,Yn=new N,_i=new N,Cs=new N,or=new N,lr=new N,xi=new N;function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);let a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Rf=new Vn,Ps=new N,Ha=new N,Ai=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Rf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);let e=Ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Ha)),this.expandByPoint(Ps.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new N,Va=new N,cr=new N,Zn=new N,Ga=new N,hr=new N,Wa=new N,Hs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Va.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Va);let r=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=Zn.dot(this.direction),l=-Zn.dot(cr),c=Zn.lengthSq(),h=Math.abs(1-o*o),u,f,p,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Va).addScaledVector(cr,f),p}intersectSphere(t,e){Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){Ga.subVectors(e,t),hr.subVectors(n,t),Wa.crossVectors(Ga,hr);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);let l=a*this.direction.dot(hr.crossVectors(Zn,hr));if(l<0)return null;let c=a*this.direction.dot(Ga.cross(Zn));if(c<0||l+c>o)return null;let h=-a*Zn.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,_,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,_,v,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,_=c*h,v=c*u;e[0]=f+v*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,_=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+_,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Pf)}lookAt(t,e,n){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Jn.crossVectors(n,Ke),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Jn.crossVectors(n,Ke)),Jn.normalize(),ur.crossVectors(Ke,Jn),s[0]=Jn.x,s[4]=ur.x,s[8]=Ke.x,s[1]=Jn.y,s[5]=ur.y,s[9]=Ke.y,s[2]=Jn.z,s[6]=ur.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],v=n[6],m=n[10],d=n[14],E=n[3],M=n[7],P=n[11],D=n[15],C=s[0],A=s[4],Z=s[8],g=s[12],x=s[1],R=s[5],I=s[9],K=s[13],T=s[2],U=s[6],B=s[10],z=s[14],F=s[3],W=s[7],Y=s[11],J=s[15];return r[0]=o*C+a*x+l*T+c*F,r[4]=o*A+a*R+l*U+c*W,r[8]=o*Z+a*I+l*B+c*Y,r[12]=o*g+a*K+l*z+c*J,r[1]=h*C+u*x+f*T+p*F,r[5]=h*A+u*R+f*U+p*W,r[9]=h*Z+u*I+f*B+p*Y,r[13]=h*g+u*K+f*z+p*J,r[2]=_*C+v*x+m*T+d*F,r[6]=_*A+v*R+m*U+d*W,r[10]=_*Z+v*I+m*B+d*Y,r[14]=_*g+v*K+m*z+d*J,r[3]=E*C+M*x+P*T+D*F,r[7]=E*A+M*R+P*U+D*W,r[11]=E*Z+M*I+P*B+D*Y,r[15]=E*g+M*K+P*z+D*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],v=t[7],m=t[11],d=t[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+v*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],v=t[13],m=t[14],d=t[15],E=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,M=_*f*c-h*m*c-_*l*p+o*m*p+h*l*d-o*f*d,P=h*v*c-_*u*c+_*a*p-o*v*p-h*a*d+o*u*d,D=_*u*l-h*v*l-_*a*f+o*v*f+h*a*m-o*u*m,C=e*E+n*M+s*P+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=E*A,t[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*d+n*l*d)*A,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*A,t[4]=M*A,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*d-e*l*d)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*A,t[8]=P*A,t[9]=(_*u*r-h*v*r-_*n*p+e*v*p+h*n*d-e*u*d)*A,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*A,t[12]=D*A,t[13]=(h*v*s-_*u*s+_*n*f-e*v*f-h*n*m+e*u*m)*A,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,_=r*u,v=o*h,m=o*u,d=a*u,E=l*c,M=l*h,P=l*u,D=n.x,C=n.y,A=n.z;return s[0]=(1-(v+d))*D,s[1]=(p+P)*D,s[2]=(_-M)*D,s[3]=0,s[4]=(p-P)*C,s[5]=(1-(f+d))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(_+M)*A,s[9]=(m-E)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);let c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,_;if(a===kn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Or)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h,_,v;if(a===kn)_=(o+r)*u,v=-2*u;else if(a===Or)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new N,hn=new pe,Cf=new N(0,0,0),Pf=new N(1,1,1),Jn=new N,ur=new N,Ke=new N,mc=new pe,gc=new _n,Vr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gc.setFromEuler(this),this.setFromQuaternion(gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vr.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lf=0,_c=new N,Xi=new _n,Nn=new pe,fr=new N,Ls=new N,If=new N,Df=new _n,xc=new N(1,0,0),vc=new N(0,1,0),yc=new N(0,0,1),Uf={type:"added"},Nf={type:"removed"},Re=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Vr,n=new _n,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new qt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(xc,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xc,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ls,fr,this.up):Nn.lookAt(fr,Ls,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Uf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,If),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new N(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new N,On=new N,Xa=new N,Fn=new N,qi=new N,Yi=new N,Mc=new N,qa=new N,Ya=new N,Za=new N,dr=!1,is=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),On.subVectors(n,e),Xa.subVectors(t,e);let o=un.dot(un),a=un.dot(On),l=un.dot(Xa),c=On.dot(On),h=On.dot(Xa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(t,e,n,s,r,o,a,l){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),On.subVectors(t,e),un.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,n),Yi.subVectors(r,n),qa.subVectors(t,n);let l=qi.dot(qa),c=Yi.dot(qa);if(l<=0&&c<=0)return e.copy(n);Ya.subVectors(t,s);let h=qi.dot(Ya),u=Yi.dot(Ya);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(qi,o);Za.subVectors(t,r);let p=qi.dot(Za),_=Yi.dot(Za);if(_>=0&&p<=_)return e.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Yi,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Mc.subVectors(r,s),a=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(Mc,a);let d=1/(m+v+f);return o=v*d,a=f*d,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Jo(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Qt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ue(De.r*255,0,255))*65536+Math.round(Ue(De.g*255,0,255))*256+Math.round(Ue(De.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(De.copy(this),e);let n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=we){Qt.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,s=De.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(pr);let n=Os(Kn.h,pr.h,e),s=Os(Kn.s,pr.s,e),r=Os(Kn.l,pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new gt;gt.NAMES=ph;var Of=0,Ri=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=as,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=ao,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==ao&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},on=class extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new N,mr=new vt,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lc&&(t.usage=this.usage),t}};var Wr=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var an=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Ff=0,nn=new pe,Ka=new Re,Zi=new N,$e=new Vn,Is=new Vn,Me=new N,Gn=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dh(t)?Xr:Wr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new an(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors($e.min,Is.min),$e.expandByPoint(Me),Me.addVectors($e.max,Is.max),$e.expandByPoint(Me)):($e.expandByPoint(Is.min),$e.expandByPoint(Is.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(t,c),Me.add(Zi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let x=0;x<a;x++)c[x]=new N,h[x]=new N;let u=new N,f=new N,p=new N,_=new vt,v=new vt,m=new vt,d=new N,E=new N;function M(x,R,I){u.fromArray(s,x*3),f.fromArray(s,R*3),p.fromArray(s,I*3),_.fromArray(o,x*2),v.fromArray(o,R*2),m.fromArray(o,I*2),f.sub(u),p.sub(u),v.sub(_),m.sub(_);let K=1/(v.x*m.y-m.x*v.y);isFinite(K)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(K),E.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(K),c[x].add(d),c[R].add(d),c[I].add(d),h[x].add(E),h[R].add(E),h[I].add(E))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let x=0,R=P.length;x<R;++x){let I=P[x],K=I.start,T=I.count;for(let U=K,B=K+T;U<B;U+=3)M(n[U+0],n[U+1],n[U+2])}let D=new N,C=new N,A=new N,Z=new N;function g(x){A.fromArray(r,x*3),Z.copy(A);let R=c[x];D.copy(R),D.sub(A.multiplyScalar(A.dot(R))).normalize(),C.crossVectors(Z,R);let K=C.dot(h[x])<0?-1:1;l[x*4]=D.x,l[x*4+1]=D.y,l[x*4+2]=D.z,l[x*4+3]=K}for(let x=0,R=P.length;x<R;++x){let I=P[x],K=I.start,T=I.count;for(let U=K,B=K+T;U<B;U+=3)g(n[U+0]),g(n[U+1]),g(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[_++]=c[p++]}return new je(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new pe,vi=new Hs,gr=new Ai,bc=new N,Ji=new N,Ki=new N,$i=new N,$a=new N,_r=new N,xr=new vt,vr=new vt,yr=new vt,Ec=new N,Tc=new N,wc=new N,Mr=new N,Sr=new N,Ae=class extends Re{constructor(t=new Gn,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&($a.fromBufferAttribute(u,t),o?_r.addScaledVector($a,h):_r.addScaledVector($a.sub(e),h))}e.add(_r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(gr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(gr,bc)===null||vi.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(Sc.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let P=E,D=M;P<D;P+=3){let C=a.getX(P),A=a.getX(P+1),Z=a.getX(P+2);s=br(this,d,t,n,c,h,u,C,A,Z),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let E=a.getX(m),M=a.getX(m+1),P=a.getX(m+2);s=br(this,o,t,n,c,h,u,E,M,P),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let P=E,D=M;P<D;P+=3){let C=P,A=P+1,Z=P+2;s=br(this,d,t,n,c,h,u,C,A,Z),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let E=m,M=m+1,P=m+2;s=br(this,o,t,n,c,h,u,E,M,P),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Bf(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sr);return c<e.near||c>e.far?null:{distance:c,point:Sr.clone(),object:i}}function br(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ji),i.getVertexPosition(l,Ki),i.getVertexPosition(c,$i);let h=Bf(i,t,e,n,Ji,Ki,$i,Mr);if(h){s&&(xr.fromBufferAttribute(s,a),vr.fromBufferAttribute(s,l),yr.fromBufferAttribute(s,c),h.uv=is.getInterpolation(Mr,Ji,Ki,$i,xr,vr,yr,new vt)),r&&(xr.fromBufferAttribute(r,a),vr.fromBufferAttribute(r,l),yr.fromBufferAttribute(r,c),h.uv1=is.getInterpolation(Mr,Ji,Ki,$i,xr,vr,yr,new vt),h.uv2=h.uv1),o&&(Ec.fromBufferAttribute(o,a),Tc.fromBufferAttribute(o,l),wc.fromBufferAttribute(o,c),h.normal=is.getInterpolation(Mr,Ji,Ki,$i,Ec,Tc,wc,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};is.getNormal(Ji,Ki,$i,u.normal),h.face=u}return h}var Ci=class i extends Gn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(u,2));function _(v,m,d,E,M,P,D,C,A,Z,g){let x=P/A,R=D/Z,I=P/2,K=D/2,T=C/2,U=A+1,B=Z+1,z=0,F=0,W=new N;for(let Y=0;Y<B;Y++){let J=Y*R-K;for(let st=0;st<U;st++){let H=st*x-I;W[v]=H*E,W[m]=J*M,W[d]=T,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[d]=C>0?1:-1,h.push(W.x,W.y,W.z),u.push(st/A),u.push(1-Y/Z),z+=1}}for(let Y=0;Y<Z;Y++)for(let J=0;J<A;J++){let st=f+J+U*Y,H=f+J+U*(Y+1),$=f+(J+1)+U*(Y+1),ut=f+(J+1)+U*Y;l.push(st,H,ut),l.push(H,$,ut),F+=6}a.addGroup(p,F,g),p+=F,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=fs(i[e]);for(let s in n)t[s]=n[s]}return t}function zf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mh(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt.workingColorSpace}var ni={clone:fs,merge:Be},kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,be=class extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ke=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,Qi=1,go=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new ke(ji,Qi,t,e);r.layers=this.layers,this.add(r);let o=new ke(ji,Qi,t,e);o.layers=this.layers,this.add(o);let a=new ke(ji,Qi,t,e);a.layers=this.layers,this.add(a);let l=new ke(ji,Qi,t,e);l.layers=this.layers,this.add(l);let c=new ke(ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Yr=class extends gn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_o=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===wi?we:rn),this.texture=new Yr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ci(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:wn});r.uniforms.tEquirect.value=e;let o=new Ae(s,r),a=e.minFilter;return e.minFilter===zs&&(e.minFilter=sn),new go(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ja=new N,Vf=new N,Gf=new qt,fn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ja.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gf.getNormalMatrix(t),s=this.coplanarPoint(ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Ai,Er=new N,Vs=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,o=new fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],_=s[9],v=s[10],m=s[11],d=s[12],E=s[13],M=s[14],P=s[15];if(n[0].setComponents(l-r,f-c,m-p,P-d).normalize(),n[1].setComponents(l+r,f+c,m+p,P+d).normalize(),n[2].setComponents(l+o,f+h,m+_,P+E).normalize(),n[3].setComponents(l-o,f-h,m-_,P-E).normalize(),n[4].setComponents(l-a,f-u,m-v,P-M).normalize(),e===kn)n[5].setComponents(l+a,f+u,m+v,P+M).normalize();else if(e===Or)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,p=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&_.length===0&&i.bufferSubData(u,0,f),_.length!==0){for(let v=0,m=_.length;v<m;v++){let d=_[v];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Gs=class i extends Gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],_=[],v=[],m=[];for(let d=0;d<h;d++){let E=d*f-o;for(let M=0;M<c;M++){let P=M*u-r;_.push(P,-E,0),v.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let M=E+c*d,P=E+c*(d+1),D=E+1+c*(d+1),C=E+1+c*d;p.push(M,P,C),p.push(P,D,C)}this.setIndex(p),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ap=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,um=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:Zf,alphatest_fragment:Jf,alphatest_pars_fragment:Kf,aomap_fragment:$f,aomap_pars_fragment:jf,batching_pars_vertex:Qf,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:sd,bumpmap_pars_fragment:rd,clipping_planes_fragment:ad,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:hd,color_pars_fragment:ud,color_pars_vertex:fd,color_vertex:dd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:_d,displacementmap_vertex:xd,emissivemap_fragment:vd,emissivemap_pars_fragment:yd,colorspace_fragment:Md,colorspace_pars_fragment:Sd,envmap_fragment:bd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:Td,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Bd,envmap_vertex:Ad,fog_vertex:Rd,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Id,lightmap_fragment:Dd,lightmap_pars_fragment:Ud,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Od,lights_pars_begin:Fd,lights_toon_fragment:zd,lights_toon_pars_fragment:kd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Vd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:Yd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:$d,map_fragment:jd,map_pars_fragment:Qd,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:ap,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:fp,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:xp,packing:vp,premultiplied_alpha_fragment:yp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:bp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Ip,skinnormal_vertex:Dp,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:Op,tonemapping_pars_fragment:Fp,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:kp,uv_pars_vertex:Hp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:Zp,cube_frag:Jp,depth_vert:Kp,depth_frag:$p,distanceRGBA_vert:jp,distanceRGBA_frag:Qp,equirect_vert:tm,equirect_frag:em,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:am,meshlambert_frag:om,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:fm,meshphong_frag:dm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:xm,points_frag:vm,shadow_vert:ym,shadow_frag:Mm,sprite_vert:Sm,sprite_frag:bm},ct={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Tn={basic:{uniforms:Be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Be([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Be([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Be([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Be([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Be([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Be([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Be([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Be([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Be([ct.common,ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Be([ct.lights,ct.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Tn.physical={uniforms:Be([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Tr={r:0,b:0,g:0};function Em(i,t,e,n,s,r,o){let a=new gt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function _(m,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?v(a,l):M&&M.isColor&&(v(M,1),E=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===sa)?(h===void 0&&(h=new Ae(new Ci(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:fs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ee,(u!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ae(new Gs(2,2),new be({name:"BackgroundMaterial",uniforms:fs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(Tr,mh(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:_}}function Tm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(T,U,B,z,F){let W=!1;if(o){let Y=v(z,B,U);c!==Y&&(c=Y,p(c.object)),W=d(T,z,B,F),W&&E(T,z,B,F)}else{let Y=U.wireframe===!0;(c.geometry!==z.id||c.program!==B.id||c.wireframe!==Y)&&(c.geometry=z.id,c.program=B.id,c.wireframe=Y,W=!0)}F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,Z(T,U,B,z),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(T){return n.isWebGL2?i.bindVertexArray(T):r.bindVertexArrayOES(T)}function _(T){return n.isWebGL2?i.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function v(T,U,B){let z=B.wireframe===!0,F=a[T.id];F===void 0&&(F={},a[T.id]=F);let W=F[U.id];W===void 0&&(W={},F[U.id]=W);let Y=W[z];return Y===void 0&&(Y=m(f()),W[z]=Y),Y}function m(T){let U=[],B=[],z=[];for(let F=0;F<s;F++)U[F]=0,B[F]=0,z[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:z,object:T,attributes:{},index:null}}function d(T,U,B,z){let F=c.attributes,W=U.attributes,Y=0,J=B.getAttributes();for(let st in J)if(J[st].location>=0){let $=F[st],ut=W[st];if(ut===void 0&&(st==="instanceMatrix"&&T.instanceMatrix&&(ut=T.instanceMatrix),st==="instanceColor"&&T.instanceColor&&(ut=T.instanceColor)),$===void 0||$.attribute!==ut||ut&&$.data!==ut.data)return!0;Y++}return c.attributesNum!==Y||c.index!==z}function E(T,U,B,z){let F={},W=U.attributes,Y=0,J=B.getAttributes();for(let st in J)if(J[st].location>=0){let $=W[st];$===void 0&&(st==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),st==="instanceColor"&&T.instanceColor&&($=T.instanceColor));let ut={};ut.attribute=$,$&&$.data&&(ut.data=$.data),F[st]=ut,Y++}c.attributes=F,c.attributesNum=Y,c.index=z}function M(){let T=c.newAttributes;for(let U=0,B=T.length;U<B;U++)T[U]=0}function P(T){D(T,0)}function D(T,U){let B=c.newAttributes,z=c.enabledAttributes,F=c.attributeDivisors;B[T]=1,z[T]===0&&(i.enableVertexAttribArray(T),z[T]=1),F[T]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,U),F[T]=U)}function C(){let T=c.newAttributes,U=c.enabledAttributes;for(let B=0,z=U.length;B<z;B++)U[B]!==T[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function A(T,U,B,z,F,W,Y){Y===!0?i.vertexAttribIPointer(T,U,B,F,W):i.vertexAttribPointer(T,U,B,z,F,W)}function Z(T,U,B,z){if(n.isWebGL2===!1&&(T.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();let F=z.attributes,W=B.getAttributes(),Y=U.defaultAttributeValues;for(let J in W){let st=W[J];if(st.location>=0){let H=F[J];if(H===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(H=T.instanceColor)),H!==void 0){let $=H.normalized,ut=H.itemSize,St=e.get(H);if(St===void 0)continue;let yt=St.buffer,Ut=St.type,Nt=St.bytesPerElement,Rt=n.isWebGL2===!0&&(Ut===i.INT||Ut===i.UNSIGNED_INT||H.gpuType===nh);if(H.isInterleavedBufferAttribute){let Yt=H.data,k=Yt.stride,xe=H.offset;if(Yt.isInstancedInterleavedBuffer){for(let wt=0;wt<st.locationSize;wt++)D(st.location+wt,Yt.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Yt.meshPerAttribute*Yt.count)}else for(let wt=0;wt<st.locationSize;wt++)P(st.location+wt);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let wt=0;wt<st.locationSize;wt++)A(st.location+wt,ut/st.locationSize,Ut,$,k*Nt,(xe+ut/st.locationSize*wt)*Nt,Rt)}else{if(H.isInstancedBufferAttribute){for(let Yt=0;Yt<st.locationSize;Yt++)D(st.location+Yt,H.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Yt=0;Yt<st.locationSize;Yt++)P(st.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Yt=0;Yt<st.locationSize;Yt++)A(st.location+Yt,ut/st.locationSize,Ut,$,ut*Nt,ut/st.locationSize*Yt*Nt,Rt)}}else if(Y!==void 0){let $=Y[J];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(st.location,$);break;case 3:i.vertexAttrib3fv(st.location,$);break;case 4:i.vertexAttrib4fv(st.location,$);break;default:i.vertexAttrib1fv(st.location,$)}}}}C()}function g(){I();for(let T in a){let U=a[T];for(let B in U){let z=U[B];for(let F in z)_(z[F].object),delete z[F];delete U[B]}delete a[T]}}function x(T){if(a[T.id]===void 0)return;let U=a[T.id];for(let B in U){let z=U[B];for(let F in z)_(z[F].object),delete z[F];delete U[B]}delete a[T.id]}function R(T){for(let U in a){let B=a[U];if(B[T.id]===void 0)continue;let z=B[T.id];for(let F in z)_(z[F].object),delete z[F];delete B[T.id]}}function I(){K(),h=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:I,resetDefaultState:K,dispose:g,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:P,disableUnusedAttributes:C}}function wm(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,_;if(s)p=i,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Am(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,P=o||t.has("OES_texture_float"),D=M&&P,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:P,floatVertexTextures:D,maxSamples:C}}function Rm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new fn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,M=E*4,P=d.clippingState||null;l.value=P,P=h(_,f,M,p);for(let D=0;D!==M;++D)P[D]=e[D];d.clippingState=P,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let d=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,P=p;M!==v;++M,P+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,P),m[P+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Cm(i){let t=new WeakMap;function e(o,a){return a===oo?o.mapping=cs:a===lo&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===oo||a===lo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _o(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ei=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ss=4,Ac=[.125,.215,.35,.446,.526,.582],bi=20,Qa=new ei,Rc=new gt,to=null,eo=0,no=0,Mi=(1+Math.sqrt(5))/2,ts=1/Mi,Cc=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Mi,ts),new N(0,Mi,-ts),new N(ts,0,Mi),new N(-ts,0,Mi),new N(Mi,ts,0),new N(-Mi,ts,0)],Zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to,eo,no),t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:mn,format:pn,colorSpace:Hn,depthBuffer:!1},s=Pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(r)),this._blurMaterial=Lm(r,t,e)}return s}_compileMaterial(t){let e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,s){let a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Rc),h.toneMapping=An,h.autoClear=!1;let p=new on({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new Ae(new Ci,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Rc),v=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;wr(s,E*M,d>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cc[(s-1)%Cc.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ae(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let d=[],E=0;for(let A=0;A<bi;++A){let Z=A/v,g=Math.exp(-Z*Z/2);d.push(g),A===0?E+=g:A<m&&(E+=2*g)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;let P=this._sizeLods[s],D=3*P*(s>M-ss?s-M+ss:0),C=4*(this._cubeSize-P);wr(e,D,C,3*P,2*P),l.setRenderTarget(e),l.render(u,Qa)}};function Pm(i){let t=[],e=[],n=[],s=i,r=i-ss+1+Ac.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ss?l=Ac[o-i+ss-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,d=1,E=new Float32Array(v*_*p),M=new Float32Array(m*_*p),P=new Float32Array(d*_*p);for(let C=0;C<p;C++){let A=C%3*2/3-1,Z=C>2?0:-1,g=[A,Z,0,A+2/3,Z,0,A+2/3,Z+1,0,A,Z,0,A+2/3,Z+1,0,A,Z+1,0];E.set(g,v*_*C),M.set(f,m*_*C);let x=[C,C,C,C,C,C];P.set(x,d*_*C)}let D=new Gn;D.setAttribute("position",new je(E,v)),D.setAttribute("uv",new je(M,m)),D.setAttribute("faceIndex",new je(P,d)),t.push(D),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pc(i,t,e){let n=new He(i,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){let n=new Float32Array(bi),s=new N(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Lc(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ic(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Im(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===oo||l===lo,h=l===cs||l===hs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Zr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Zr(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Um(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let v=f.morphAttributes[_];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let v=p[_];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,_=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let M=0,P=E.length;M<P;M+=3){let D=E[M+0],C=E[M+1],A=E[M+2];f.push(D,C,C,A,A,D)}}else if(_!==void 0){let E=_.array;v=_.version;for(let M=0,P=E.length/3-1;M<P;M+=3){let D=M+0,C=M+1,A=M+2;f.push(D,C,C,A,A,D)}}else return;let m=new(dh(f)?Xr:Wr)(f,1);m.version=v;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Nm(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,_){i.drawElements(r,_,a,p*l),e.update(_,r,1)}function u(p,_,v){if(v===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,_,a,p*l,v),e.update(_,r,v)}function f(p,_,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<v;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(r,_,0,a,p,0,v);let d=0;for(let E=0;E<v;E++)d+=_[E];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Om(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fm(i,t){return i[0]-t[0]}function Bm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function zm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,v=r.get(h);if(v===void 0||v.count!==_){let T=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",T)};v!==void 0&&v.texture.dispose();let E=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],Z=0;E===!0&&(Z=1),M===!0&&(Z=2),P===!0&&(Z=3);let g=h.attributes.position.count*Z,x=1;g>t.maxTextureSize&&(x=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let R=new Float32Array(g*x*4*_),I=new Hr(R,g,x,_);I.type=jn,I.needsUpdate=!0;let K=Z*4;for(let U=0;U<_;U++){let B=D[U],z=C[U],F=A[U],W=g*x*4*U;for(let Y=0;Y<B.count;Y++){let J=Y*K;E===!0&&(o.fromBufferAttribute(B,Y),R[W+J+0]=o.x,R[W+J+1]=o.y,R[W+J+2]=o.z,R[W+J+3]=0),M===!0&&(o.fromBufferAttribute(z,Y),R[W+J+4]=o.x,R[W+J+5]=o.y,R[W+J+6]=o.z,R[W+J+7]=0),P===!0&&(o.fromBufferAttribute(F,Y),R[W+J+8]=o.x,R[W+J+9]=o.y,R[W+J+10]=o.z,R[W+J+11]=F.itemSize===4?o.w:1)}}v={count:_,texture:I,size:new vt(g,x)},r.set(h,v),h.addEventListener("dispose",T)}let m=0;for(let E=0;E<f.length;E++)m+=f[E];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let p=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==p){_=[];for(let M=0;M<p;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<p;M++){let P=_[M];P[0]=M,P[1]=f[M]}_.sort(Bm);for(let M=0;M<8;M++)M<p&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Fm);let v=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let M=0;M<8;M++){let P=a[M],D=P[0],C=P[1];D!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+M)!==v[D]&&h.setAttribute("morphTarget"+M,v[D]),m&&h.getAttribute("morphNormal"+M)!==m[D]&&h.setAttribute("morphNormal"+M,m[D]),s[M]=C,d+=C):(v&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),m&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}let E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function km(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Jr=class extends gn{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ti,h!==Ti&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=$n),n===void 0&&h===us&&(n=Ei),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_h=new gn,xh=new Jr(1,1);xh.compareFunction=uh;var vh=new Hr,yh=new mo,Mh=new Yr,Dc=[],Uc=[],Nc=new Float32Array(16),Oc=new Float32Array(9),Fc=new Float32Array(4);function gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Dc[s];if(r===void 0&&(r=new Float32Array(s),Dc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=Uc[t];e===void 0&&(e=new Int32Array(t),Uc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Xm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),_e(e,n)}}function qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Oc.set(n),i.uniformMatrix3fv(this.addr,!1,Oc),_e(e,n)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Nc.set(n),i.uniformMatrix4fv(this.addr,!1,Nc),_e(e,n)}}function Zm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?xh:_h;e.setTexture2D(t||r,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mh,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vh,s)}function ag(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return jm;case 36294:return Qm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){let e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function cg(i,t){let e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){let e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function ug(i,t){let e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fg(i,t){let e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dg(i,t){let e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pg(i,t){i.uniform1iv(this.addr,t)}function mg(i,t){i.uniform2iv(this.addr,t)}function gg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function xg(i,t){i.uniform1uiv(this.addr,t)}function vg(i,t){i.uniform2uiv(this.addr,t)}function yg(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function Sg(i,t,e){let n=this.cache,s=t.length,r=aa(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||_h,r[o])}function bg(i,t,e){let n=this.cache,s=t.length,r=aa(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yh,r[o])}function Eg(i,t,e){let n=this.cache,s=t.length,r=aa(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mh,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=aa(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vh,r[o])}function wg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return fg;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return vg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}var xo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}},vo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wg(e.type)}},yo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},io=/(\w+)(\])?(\[|\.)?/g;function Bc(i,t){i.seq.push(t),i.map[t.id]=t}function Ag(i,t,e){let n=i.name,s=n.length;for(io.lastIndex=0;;){let r=io.exec(n),o=io.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bc(e,c===void 0?new xo(a,i,t):new vo(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new yo(a),Bc(e,u)),e=u}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ag(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function zc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rg=37297,Cg=0;function Pg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Lg(i){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i),n;switch(t===e?n="":t===Nr&&e===Ur?n="LinearDisplayP3ToLinearSRGB":t===Ur&&e===Nr&&(n="LinearSRGBToLinearDisplayP3"),i){case Hn:case ra:return[n,"LinearTransferOETF"];case we:case Zo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Pg(i.getShaderSource(t),o)}else return s}function Ig(i,t){let e=Lg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dg(i,t){let e;switch(t){case Vo:e="Linear";break;case Go:e="Reinhard";break;case Wo:e="OptimizedCineon";break;case Xo:e="ACESFilmic";break;case qo:e="AgX";break;case Gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ug(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function Ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function Og(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rs(i){return i!==""}function Hc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(i){return i.replace(Bg,kg)}var zg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kg(i,t){let e=Ht[t];if(e===void 0){let n=zg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mo(e)}var Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(Hg,Vg)}function Vg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ho?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===hs&&(t="ENVMAP_MODE_REFRACTION"),t}function qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case th:t="ENVMAP_BLENDING_MULTIPLY";break;case Hu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function Yg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Gg(e),c=Wg(e),h=Xg(e),u=qg(e),f=Yg(e),p=e.isWebGL2?"":Ug(e),_=Ng(e),v=Og(r),m=s.createProgram(),d,E,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rs).join(`
`),d.length>0&&(d+=`
`),E=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rs).join(`
`),E.length>0&&(E+=`
`)):(d=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),E=[p,Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Ht.tonemapping_pars_fragment:"",e.toneMapping!==An?Dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Ig("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=Mo(o),o=Hc(o,e),o=Vc(o,e),a=Mo(a),a=Hc(a,e),a=Vc(a,e),o=Gc(o),a=Gc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let P=M+d+o,D=M+E+a,C=zc(s,s.VERTEX_SHADER,P),A=zc(s,s.FRAGMENT_SHADER,D);s.attachShader(m,C),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Z(I){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(m).trim(),T=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(A).trim(),B=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,C,A);else{let F=kc(s,C,"vertex"),W=kc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+F+`
`+W)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(T===""||U==="")&&(z=!1);z&&(I.diagnostics={runnable:B,programLog:K,vertexShader:{log:T,prefix:d},fragmentShader:{log:U,prefix:E}})}s.deleteShader(C),s.deleteShader(A),g=new ls(s,m),x=Fg(s,m)}let g;this.getUniforms=function(){return g===void 0&&Z(this),g};let x;this.getAttributes=function(){return x===void 0&&Z(this),x};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,Rg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=A,this}var Jg=0,So=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bo(t),e.set(t,n)),n}},bo=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function Kg(i,t,e,n,s,r,o){let a=new Gr,l=new So,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return g===0?"uv":`uv${g}`}function m(g,x,R,I,K){let T=I.fog,U=K.geometry,B=g.isMeshStandardMaterial?I.environment:null,z=(g.isMeshStandardMaterial?e:t).get(g.envMap||B),F=z&&z.mapping===sa?z.image.height:null,W=_[g.type];g.precision!==null&&(p=s.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=Y!==void 0?Y.length:0,st=0;U.morphAttributes.position!==void 0&&(st=1),U.morphAttributes.normal!==void 0&&(st=2),U.morphAttributes.color!==void 0&&(st=3);let H,$,ut,St;if(W){let Ne=Tn[W];H=Ne.vertexShader,$=Ne.fragmentShader}else H=g.vertexShader,$=g.fragmentShader,l.update(g),ut=l.getVertexShaderID(g),St=l.getFragmentShaderID(g);let yt=i.getRenderTarget(),Ut=K.isInstancedMesh===!0,Nt=K.isBatchedMesh===!0,Rt=!!g.map,Yt=!!g.matcap,k=!!z,xe=!!g.aoMap,wt=!!g.lightMap,It=!!g.bumpMap,_t=!!g.normalMap,ae=!!g.displacementMap,Ot=!!g.emissiveMap,b=!!g.metalnessMap,y=!!g.roughnessMap,V=g.anisotropy>0,nt=g.clearcoat>0,tt=g.iridescence>0,et=g.sheen>0,xt=g.transmission>0,ft=V&&!!g.anisotropyMap,mt=nt&&!!g.clearcoatMap,Ct=nt&&!!g.clearcoatNormalMap,zt=nt&&!!g.clearcoatRoughnessMap,Q=tt&&!!g.iridescenceMap,Zt=tt&&!!g.iridescenceThicknessMap,w=et&&!!g.sheenColorMap,j=et&&!!g.sheenRoughnessMap,lt=!!g.specularMap,it=!!g.specularColorMap,Mt=!!g.specularIntensityMap,Wt=xt&&!!g.transmissionMap,Jt=xt&&!!g.thicknessMap,Vt=!!g.gradientMap,ot=!!g.alphaMap,L=g.alphaTest>0,rt=!!g.alphaHash,at=!!g.extensions,At=!!U.attributes.uv1,bt=!!U.attributes.uv2,Kt=!!U.attributes.uv3,$t=An;return g.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&($t=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:g.type,shaderName:g.name,vertexShader:H,fragmentShader:$,defines:g.defines,customVertexShaderID:ut,customFragmentShaderID:St,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:Nt,instancing:Ut,instancingColor:Ut&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Hn,map:Rt,matcap:Yt,envMap:k,envMapMode:k&&z.mapping,envMapCubeUVHeight:F,aoMap:xe,lightMap:wt,bumpMap:It,normalMap:_t,displacementMap:f&&ae,emissiveMap:Ot,normalMapObjectSpace:_t&&g.normalMapType===ef,normalMapTangentSpace:_t&&g.normalMapType===hh,metalnessMap:b,roughnessMap:y,anisotropy:V,anisotropyMap:ft,clearcoat:nt,clearcoatMap:mt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:zt,iridescence:tt,iridescenceMap:Q,iridescenceThicknessMap:Zt,sheen:et,sheenColorMap:w,sheenRoughnessMap:j,specularMap:lt,specularColorMap:it,specularIntensityMap:Mt,transmission:xt,transmissionMap:Wt,thicknessMap:Jt,gradientMap:Vt,opaque:g.transparent===!1&&g.blending===as,alphaMap:ot,alphaTest:L,alphaHash:rt,combine:g.combine,mapUv:Rt&&v(g.map.channel),aoMapUv:xe&&v(g.aoMap.channel),lightMapUv:wt&&v(g.lightMap.channel),bumpMapUv:It&&v(g.bumpMap.channel),normalMapUv:_t&&v(g.normalMap.channel),displacementMapUv:ae&&v(g.displacementMap.channel),emissiveMapUv:Ot&&v(g.emissiveMap.channel),metalnessMapUv:b&&v(g.metalnessMap.channel),roughnessMapUv:y&&v(g.roughnessMap.channel),anisotropyMapUv:ft&&v(g.anisotropyMap.channel),clearcoatMapUv:mt&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:w&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:j&&v(g.sheenRoughnessMap.channel),specularMapUv:lt&&v(g.specularMap.channel),specularColorMapUv:it&&v(g.specularColorMap.channel),specularIntensityMapUv:Mt&&v(g.specularIntensityMap.channel),transmissionMapUv:Wt&&v(g.transmissionMap.channel),thicknessMapUv:Jt&&v(g.thicknessMap.channel),alphaMapUv:ot&&v(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_t||V),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:bt,vertexUv3s:Kt,pointsUvs:K.isPoints===!0&&!!U.attributes.uv&&(Rt||ot),fog:!!T,useFog:g.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:st,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Rt&&g.map.isVideoTexture===!0&&Qt.getTransfer(g.map.colorSpace)===ee,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===zn,flipSided:g.side===qe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:at&&g.extensions.derivatives===!0,extensionFragDepth:at&&g.extensions.fragDepth===!0,extensionDrawBuffers:at&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&g.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){let x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)x.push(R),x.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(E(x,g),M(x,g),x.push(i.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function E(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function M(g,x){a.disableAll(),x.isWebGL2&&a.enable(0),x.supportsVertexTextures&&a.enable(1),x.instancing&&a.enable(2),x.instancingColor&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),g.push(a.mask)}function P(g){let x=_[g.type],R;if(x){let I=Tn[x];R=ni.clone(I.uniforms)}else R=g.uniforms;return R}function D(g,x){let R;for(let I=0,K=c.length;I<K;I++){let T=c[I];if(T.cacheKey===x){R=T,++R.usedTimes;break}}return R===void 0&&(R=new Zg(i,x,g,r),c.push(R)),R}function C(g){if(--g.usedTimes===0){let x=c.indexOf(g);c[x]=c[c.length-1],c.pop(),g.destroy()}}function A(g){l.remove(g)}function Z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:P,acquireProgram:D,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:Z}}function $g(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,_,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function a(u,f,p,_,v,m){let d=o(u,f,p,_,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,_,v,m){let d=o(u,f,p,_,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||jg),n.length>1&&n.sort(f||Xc),s.length>1&&s.sort(f||Xc)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Qg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new qc,i.set(n,[o])):s>=r.length?(o=new qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function t0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new gt};break;case"SpotLight":e={position:new N,direction:new N,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function e0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var n0=0;function i0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function s0(i,t){let e=new t0,n=e0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,o=new pe,a=new pe;function l(h,u){let f=0,p=0,_=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let v=0,m=0,d=0,E=0,M=0,P=0,D=0,C=0,A=0,Z=0,g=0;h.sort(i0);let x=u===!0?Math.PI:1;for(let I=0,K=h.length;I<K;I++){let T=h[I],U=T.color,B=T.intensity,z=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)f+=U.r*B*x,p+=U.g*B*x,_+=U.b*B*x;else if(T.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(T.sh.coefficients[W],B);g++}else if(T.isDirectionalLight){let W=e.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity*x),T.castShadow){let Y=T.shadow,J=n.get(T);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,s.directionalShadow[v]=J,s.directionalShadowMap[v]=F,s.directionalShadowMatrix[v]=T.shadow.matrix,P++}s.directional[v]=W,v++}else if(T.isSpotLight){let W=e.get(T);W.position.setFromMatrixPosition(T.matrixWorld),W.color.copy(U).multiplyScalar(B*x),W.distance=z,W.coneCos=Math.cos(T.angle),W.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W.decay=T.decay,s.spot[d]=W;let Y=T.shadow;if(T.map&&(s.spotLightMap[A]=T.map,A++,Y.updateMatrices(T),T.castShadow&&Z++),s.spotLightMatrix[d]=Y.matrix,T.castShadow){let J=n.get(T);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,s.spotShadow[d]=J,s.spotShadowMap[d]=F,C++}d++}else if(T.isRectAreaLight){let W=e.get(T);W.color.copy(U).multiplyScalar(B),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),s.rectArea[E]=W,E++}else if(T.isPointLight){let W=e.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity*x),W.distance=T.distance,W.decay=T.decay,T.castShadow){let Y=T.shadow,J=n.get(T);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,s.pointShadow[m]=J,s.pointShadowMap[m]=F,s.pointShadowMatrix[m]=T.shadow.matrix,D++}s.point[m]=W,m++}else if(T.isHemisphereLight){let W=e.get(T);W.skyColor.copy(T.color).multiplyScalar(B*x),W.groundColor.copy(T.groundColor).multiplyScalar(B*x),s.hemi[M]=W,M++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=_;let R=s.hash;(R.directionalLength!==v||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==E||R.hemiLength!==M||R.numDirectionalShadows!==P||R.numPointShadows!==D||R.numSpotShadows!==C||R.numSpotMaps!==A||R.numLightProbes!==g)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=E,s.point.length=m,s.hemi.length=M,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=C+A-Z,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=Z,s.numLightProbes=g,R.directionalLength=v,R.pointLength=m,R.spotLength=d,R.rectAreaLength=E,R.hemiLength=M,R.numDirectionalShadows=P,R.numPointShadows=D,R.numSpotShadows=C,R.numSpotMaps=A,R.numLightProbes=g,s.version=n0++)}function c(h,u){let f=0,p=0,_=0,v=0,m=0,d=u.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){let P=h[E];if(P.isDirectionalLight){let D=s.directional[f];D.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),f++}else if(P.isSpotLight){let D=s.spot[_];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(d),D.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),_++}else if(P.isRectAreaLight){let D=s.rectArea[v];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(d),a.identity(),o.copy(P.matrixWorld),o.premultiply(d),a.extractRotation(o),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),v++}else if(P.isPointLight){let D=s.point[p];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(d),p++}else if(P.isHemisphereLight){let D=s.hemi[m];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function Yc(i,t){let e=new s0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function r0(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Yc(i,t),e.set(r,[l])):o>=a.length?(l=new Yc(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Eo=class extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},To=class extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l0(i,t,e){let n=new Vs,s=new vt,r=new vt,o=new Se,a=new Eo({depthPacking:tf}),l=new To,c={},h=e.maxTextureSize,u={[ti]:qe,[qe]:ti,[zn]:zn},f=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:a0,fragmentShader:o0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Gn;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ae(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let d=this.type;this.render=function(C,A,Z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let g=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(wn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let K=d!==Bn&&this.type===Bn,T=d===Bn&&this.type!==Bn;for(let U=0,B=C.length;U<B;U++){let z=C[U],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let W=F.getFrameExtents();if(s.multiply(W),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,F.mapSize.y=r.y)),F.map===null||K===!0||T===!0){let J=this.type!==Bn?{minFilter:ze,magFilter:ze}:{};F.map!==null&&F.map.dispose(),F.map=new He(s.x,s.y,J),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let Y=F.getViewportCount();for(let J=0;J<Y;J++){let st=F.getViewport(J);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),I.viewport(o),F.updateMatrices(z,J),n=F.getFrustum(),P(A,Z,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===Bn&&E(F,Z),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(g,x,R)};function E(C,A){let Z=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new He(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,Z,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,Z,p,v,null)}function M(C,A,Z,g){let x=null,R=Z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=Z.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let I=x.uuid,K=A.uuid,T=c[I];T===void 0&&(T={},c[I]=T);let U=T[K];U===void 0&&(U=x.clone(),T[K]=U,A.addEventListener("dispose",D)),x=U}if(x.visible=A.visible,x.wireframe=A.wireframe,g===Bn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,Z.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let I=i.properties.get(x);I.light=Z}return x}function P(C,A,Z,g,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Bn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld);let K=t.update(C),T=C.material;if(Array.isArray(T)){let U=K.groups;for(let B=0,z=U.length;B<z;B++){let F=U[B],W=T[F.materialIndex];if(W&&W.visible){let Y=M(C,W,g,x);C.onBeforeShadow(i,C,A,Z,K,Y,F),i.renderBufferDirect(Z,null,K,Y,C,F),C.onAfterShadow(i,C,A,Z,K,Y,F)}}}else if(T.visible){let U=M(C,T,g,x);C.onBeforeShadow(i,C,A,Z,K,U,null),i.renderBufferDirect(Z,null,K,U,C,null),C.onAfterShadow(i,C,A,Z,K,U,null)}}let I=C.children;for(let K=0,T=I.length;K<T;K++)P(I[K],A,Z,g,x)}function D(C){C.target.removeEventListener("dispose",D);for(let Z in c){let g=c[Z],x=C.target.uuid;x in g&&(g[x].dispose(),delete g[x])}}}function c0(i,t,e){let n=e.isWebGL2;function s(){let L=!1,rt=new Se,at=null,At=new Se(0,0,0,0);return{setMask:function(bt){at!==bt&&!L&&(i.colorMask(bt,bt,bt,bt),at=bt)},setLocked:function(bt){L=bt},setClear:function(bt,Kt,$t,ve,Ne){Ne===!0&&(bt*=ve,Kt*=ve,$t*=ve),rt.set(bt,Kt,$t,ve),At.equals(rt)===!1&&(i.clearColor(bt,Kt,$t,ve),At.copy(rt))},reset:function(){L=!1,at=null,At.set(-1,0,0,0)}}}function r(){let L=!1,rt=null,at=null,At=null;return{setTest:function(bt){bt?Nt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(bt){rt!==bt&&!L&&(i.depthMask(bt),rt=bt)},setFunc:function(bt){if(at!==bt){switch(bt){case Uu:i.depthFunc(i.NEVER);break;case Nu:i.depthFunc(i.ALWAYS);break;case Ou:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Fu:i.depthFunc(i.EQUAL);break;case Bu:i.depthFunc(i.GEQUAL);break;case zu:i.depthFunc(i.GREATER);break;case ku:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=bt}},setLocked:function(bt){L=bt},setClear:function(bt){At!==bt&&(i.clearDepth(bt),At=bt)},reset:function(){L=!1,rt=null,at=null,At=null}}}function o(){let L=!1,rt=null,at=null,At=null,bt=null,Kt=null,$t=null,ve=null,Ne=null;return{setTest:function(ie){L||(ie?Nt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(ie){rt!==ie&&!L&&(i.stencilMask(ie),rt=ie)},setFunc:function(ie,Oe,En){(at!==ie||At!==Oe||bt!==En)&&(i.stencilFunc(ie,Oe,En),at=ie,At=Oe,bt=En)},setOp:function(ie,Oe,En){(Kt!==ie||$t!==Oe||ve!==En)&&(i.stencilOp(ie,Oe,En),Kt=ie,$t=Oe,ve=En)},setLocked:function(ie){L=ie},setClear:function(ie){Ne!==ie&&(i.clearStencil(ie),Ne=ie)},reset:function(){L=!1,rt=null,at=null,At=null,bt=null,Kt=null,$t=null,ve=null,Ne=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},p={},_=new WeakMap,v=[],m=null,d=!1,E=null,M=null,P=null,D=null,C=null,A=null,Z=null,g=new gt(0,0,0),x=0,R=!1,I=null,K=null,T=null,U=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,W=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=W>=2);let J=null,st={},H=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),ut=new Se().fromArray(H),St=new Se().fromArray($);function yt(L,rt,at,At){let bt=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(L,Kt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<at;$t++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(rt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(rt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Kt}let Ut={};Ut[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Nt(i.DEPTH_TEST),l.setFunc(Pr),Ot(!1),b(Al),Nt(i.CULL_FACE),_t(wn);function Nt(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Rt(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Yt(L,rt){return p[L]!==rt?(i.bindFramebuffer(L,rt),p[L]=rt,n&&(L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=rt),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=rt)),!0):!1}function k(L,rt){let at=v,At=!1;if(L)if(at=_.get(rt),at===void 0&&(at=[],_.set(rt,at)),L.isWebGLMultipleRenderTargets){let bt=L.texture;if(at.length!==bt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,$t=bt.length;Kt<$t;Kt++)at[Kt]=i.COLOR_ATTACHMENT0+Kt;at.length=bt.length,At=!0}}else at[0]!==i.COLOR_ATTACHMENT0&&(at[0]=i.COLOR_ATTACHMENT0,At=!0);else at[0]!==i.BACK&&(at[0]=i.BACK,At=!0);At&&(e.isWebGL2?i.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function xe(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let wt={[Si]:i.FUNC_ADD,[vu]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};if(n)wt[Pl]=i.MIN,wt[Ll]=i.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(wt[Pl]=L.MIN_EXT,wt[Ll]=L.MAX_EXT)}let It={[Mu]:i.ZERO,[Su]:i.ONE,[bu]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[ao]:i.ONE_MINUS_SRC_ALPHA,[Ru]:i.ONE_MINUS_DST_COLOR,[wu]:i.ONE_MINUS_DST_ALPHA,[Pu]:i.CONSTANT_COLOR,[Lu]:i.ONE_MINUS_CONSTANT_COLOR,[Iu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(L,rt,at,At,bt,Kt,$t,ve,Ne,ie){if(L===wn){d===!0&&(Rt(i.BLEND),d=!1);return}if(d===!1&&(Nt(i.BLEND),d=!0),L!==xu){if(L!==E||ie!==R){if((M!==Si||C!==Si)&&(i.blendEquation(i.FUNC_ADD),M=Si,C=Si),ie)switch(L){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}P=null,D=null,A=null,Z=null,g.set(0,0,0),x=0,E=L,R=ie}return}bt=bt||rt,Kt=Kt||at,$t=$t||At,(rt!==M||bt!==C)&&(i.blendEquationSeparate(wt[rt],wt[bt]),M=rt,C=bt),(at!==P||At!==D||Kt!==A||$t!==Z)&&(i.blendFuncSeparate(It[at],It[At],It[Kt],It[$t]),P=at,D=At,A=Kt,Z=$t),(ve.equals(g)===!1||Ne!==x)&&(i.blendColor(ve.r,ve.g,ve.b,Ne),g.copy(ve),x=Ne),E=L,R=!1}function ae(L,rt){L.side===zn?Rt(i.CULL_FACE):Nt(i.CULL_FACE);let at=L.side===qe;rt&&(at=!at),Ot(at),L.blending===as&&L.transparent===!1?_t(wn):_t(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let At=L.stencilWrite;c.setTest(At),At&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),V(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Nt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){I!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),I=L)}function b(L){L!==gu?(Nt(i.CULL_FACE),L!==K&&(L===Al?i.cullFace(i.BACK):L===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),K=L}function y(L){L!==T&&(F&&i.lineWidth(L),T=L)}function V(L,rt,at){L?(Nt(i.POLYGON_OFFSET_FILL),(U!==rt||B!==at)&&(i.polygonOffset(rt,at),U=rt,B=at)):Rt(i.POLYGON_OFFSET_FILL)}function nt(L){L?Nt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function tt(L){L===void 0&&(L=i.TEXTURE0+z-1),J!==L&&(i.activeTexture(L),J=L)}function et(L,rt,at){at===void 0&&(J===null?at=i.TEXTURE0+z-1:at=J);let At=st[at];At===void 0&&(At={type:void 0,texture:void 0},st[at]=At),(At.type!==L||At.texture!==rt)&&(J!==at&&(i.activeTexture(at),J=at),i.bindTexture(L,rt||Ut[L]),At.type=L,At.texture=rt)}function xt(){let L=st[J];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ft(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function w(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(L){ut.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ut.copy(L))}function Wt(L){St.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),St.copy(L))}function Jt(L,rt){let at=u.get(rt);at===void 0&&(at=new WeakMap,u.set(rt,at));let At=at.get(L);At===void 0&&(At=i.getUniformBlockIndex(rt,L.name),at.set(L,At))}function Vt(L,rt){let At=u.get(rt).get(L);h.get(rt)!==At&&(i.uniformBlockBinding(rt,At,L.__bindingPointIndex),h.set(rt,At))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},J=null,st={},p={},_=new WeakMap,v=[],m=null,d=!1,E=null,M=null,P=null,D=null,C=null,A=null,Z=null,g=new gt(0,0,0),x=0,R=!1,I=null,K=null,T=null,U=null,B=null,ut.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Nt,disable:Rt,bindFramebuffer:Yt,drawBuffers:k,useProgram:xe,setBlending:_t,setMaterial:ae,setFlipSided:Ot,setCullFace:b,setLineWidth:y,setPolygonOffset:V,setScissorTest:nt,activeTexture:tt,bindTexture:et,unbindTexture:xt,compressedTexImage2D:ft,compressedTexImage3D:mt,texImage2D:lt,texImage3D:it,updateUBOMapping:Jt,uniformBlockBinding:Vt,texStorage2D:w,texStorage3D:j,texSubImage2D:Ct,texSubImage3D:zt,compressedTexSubImage2D:Q,compressedTexSubImage3D:Zt,scissor:Mt,viewport:Wt,reset:ot}}function h0(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,y){return p?new OffscreenCanvas(b,y):Br("canvas")}function v(b,y,V,nt){let tt=1;if((b.width>nt||b.height>nt)&&(tt=nt/Math.max(b.width,b.height)),tt<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let et=y?Fr:Math.floor,xt=et(tt*b.width),ft=et(tt*b.height);u===void 0&&(u=_(xt,ft));let mt=V?_(xt,ft):u;return mt.width=xt,mt.height=ft,mt.getContext("2d").drawImage(b,0,0,xt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+xt+"x"+ft+")."),mt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return fo(b.width)&&fo(b.height)}function d(b){return a?!1:b.wrapS!==dn||b.wrapT!==dn||b.minFilter!==ze&&b.minFilter!==sn}function E(b,y){return b.generateMipmaps&&y&&b.minFilter!==ze&&b.minFilter!==sn}function M(b){i.generateMipmap(b)}function P(b,y,V,nt,tt=!1){if(a===!1)return y;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let et=y;if(y===i.RED&&(V===i.FLOAT&&(et=i.R32F),V===i.HALF_FLOAT&&(et=i.R16F),V===i.UNSIGNED_BYTE&&(et=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.R8UI),V===i.UNSIGNED_SHORT&&(et=i.R16UI),V===i.UNSIGNED_INT&&(et=i.R32UI),V===i.BYTE&&(et=i.R8I),V===i.SHORT&&(et=i.R16I),V===i.INT&&(et=i.R32I)),y===i.RG&&(V===i.FLOAT&&(et=i.RG32F),V===i.HALF_FLOAT&&(et=i.RG16F),V===i.UNSIGNED_BYTE&&(et=i.RG8)),y===i.RGBA){let xt=tt?Dr:Qt.getTransfer(nt);V===i.FLOAT&&(et=i.RGBA32F),V===i.HALF_FLOAT&&(et=i.RGBA16F),V===i.UNSIGNED_BYTE&&(et=xt===ee?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function D(b,y,V){return E(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==ze&&b.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function C(b){return b===ze||b===Il||b===Ca?i.NEAREST:i.LINEAR}function A(b){let y=b.target;y.removeEventListener("dispose",A),g(y),y.isVideoTexture&&h.delete(y)}function Z(b){let y=b.target;y.removeEventListener("dispose",Z),R(y)}function g(b){let y=n.get(b);if(y.__webglInit===void 0)return;let V=b.source,nt=f.get(V);if(nt){let tt=nt[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&x(b),Object.keys(nt).length===0&&f.delete(V)}n.remove(b)}function x(b){let y=n.get(b);i.deleteTexture(y.__webglTexture);let V=b.source,nt=f.get(V);delete nt[y.__cacheKey],o.memory.textures--}function R(b){let y=b.texture,V=n.get(b),nt=n.get(y);if(nt.__webglTexture!==void 0&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(V.__webglFramebuffer[tt]))for(let et=0;et<V.__webglFramebuffer[tt].length;et++)i.deleteFramebuffer(V.__webglFramebuffer[tt][et]);else i.deleteFramebuffer(V.__webglFramebuffer[tt]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[tt])}else{if(Array.isArray(V.__webglFramebuffer))for(let tt=0;tt<V.__webglFramebuffer.length;tt++)i.deleteFramebuffer(V.__webglFramebuffer[tt]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let tt=0;tt<V.__webglColorRenderbuffer.length;tt++)V.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[tt]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let tt=0,et=y.length;tt<et;tt++){let xt=n.get(y[tt]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(y[tt])}n.remove(y),n.remove(b)}let I=0;function K(){I=0}function T(){let b=I;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),I+=1,b}function U(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function B(b,y){let V=n.get(b);if(b.isVideoTexture&&ae(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){let nt=b.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(V,b,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function z(b,y){let V=n.get(b);if(b.version>0&&V.__version!==b.version){ut(V,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function F(b,y){let V=n.get(b);if(b.version>0&&V.__version!==b.version){ut(V,b,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function W(b,y){let V=n.get(b);if(b.version>0&&V.__version!==b.version){St(V,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let Y={[co]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[ho]:i.MIRRORED_REPEAT},J={[ze]:i.NEAREST,[Il]:i.NEAREST_MIPMAP_NEAREST,[Ca]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Wu]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},st={[nf]:i.NEVER,[cf]:i.ALWAYS,[sf]:i.LESS,[uh]:i.LEQUAL,[rf]:i.EQUAL,[lf]:i.GEQUAL,[af]:i.GREATER,[of]:i.NOTEQUAL};function H(b,y,V){if(V?(i.texParameteri(b,i.TEXTURE_WRAP_S,Y[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Y[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Y[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,J[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,J[y.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==dn||y.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,C(y.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==ze&&y.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,st[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let nt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===ze||y.minFilter!==Ca&&y.minFilter!==zs||y.type===jn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===mn&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(b,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function $(b,y){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));let nt=y.source,tt=f.get(nt);tt===void 0&&(tt={},f.set(nt,tt));let et=U(y);if(et!==b.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),tt[et].usedTimes++;let xt=tt[b.__cacheKey];xt!==void 0&&(tt[b.__cacheKey].usedTimes--,xt.usedTimes===0&&x(y)),b.__cacheKey=et,b.__webglTexture=tt[et].texture}return V}function ut(b,y,V){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);let tt=$(b,y),et=y.source;e.bindTexture(nt,b.__webglTexture,i.TEXTURE0+V);let xt=n.get(et);if(et.version!==xt.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);let ft=Qt.getPrimaries(Qt.workingColorSpace),mt=y.colorSpace===rn?null:Qt.getPrimaries(y.colorSpace),Ct=y.colorSpace===rn||ft===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let zt=d(y)&&m(y.image)===!1,Q=v(y.image,zt,!1,s.maxTextureSize);Q=Ot(y,Q);let Zt=m(Q)||a,w=r.convert(y.format,y.colorSpace),j=r.convert(y.type),lt=P(y.internalFormat,w,j,y.colorSpace,y.isVideoTexture);H(nt,y,Zt);let it,Mt=y.mipmaps,Wt=a&&y.isVideoTexture!==!0&&lt!==lh,Jt=xt.__version===void 0||tt===!0,Vt=D(y,Q,Zt);if(y.isDepthTexture)lt=i.DEPTH_COMPONENT,a?y.type===jn?lt=i.DEPTH_COMPONENT32F:y.type===$n?lt=i.DEPTH_COMPONENT24:y.type===Ei?lt=i.DEPTH24_STENCIL8:lt=i.DEPTH_COMPONENT16:y.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ti&&lt===i.DEPTH_COMPONENT&&y.type!==Yo&&y.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=$n,j=r.convert(y.type)),y.format===us&&lt===i.DEPTH_COMPONENT&&(lt=i.DEPTH_STENCIL,y.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ei,j=r.convert(y.type))),Jt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,lt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,lt,Q.width,Q.height,0,w,j,null));else if(y.isDataTexture)if(Mt.length>0&&Zt){Wt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,lt,Mt[0].width,Mt[0].height);for(let ot=0,L=Mt.length;ot<L;ot++)it=Mt[ot],Wt?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,it.width,it.height,w,j,it.data):e.texImage2D(i.TEXTURE_2D,ot,lt,it.width,it.height,0,w,j,it.data);y.generateMipmaps=!1}else Wt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,lt,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,w,j,Q.data)):e.texImage2D(i.TEXTURE_2D,0,lt,Q.width,Q.height,0,w,j,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,lt,Mt[0].width,Mt[0].height,Q.depth);for(let ot=0,L=Mt.length;ot<L;ot++)it=Mt[ot],y.format!==pn?w!==null?Wt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,it.width,it.height,Q.depth,w,it.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,lt,it.width,it.height,Q.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,it.width,it.height,Q.depth,w,j,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,lt,it.width,it.height,Q.depth,0,w,j,it.data)}else{Wt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,lt,Mt[0].width,Mt[0].height);for(let ot=0,L=Mt.length;ot<L;ot++)it=Mt[ot],y.format!==pn?w!==null?Wt?e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,it.width,it.height,w,it.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,lt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,it.width,it.height,w,j,it.data):e.texImage2D(i.TEXTURE_2D,ot,lt,it.width,it.height,0,w,j,it.data)}else if(y.isDataArrayTexture)Wt?(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,lt,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,w,j,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,Q.width,Q.height,Q.depth,0,w,j,Q.data);else if(y.isData3DTexture)Wt?(Jt&&e.texStorage3D(i.TEXTURE_3D,Vt,lt,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,w,j,Q.data)):e.texImage3D(i.TEXTURE_3D,0,lt,Q.width,Q.height,Q.depth,0,w,j,Q.data);else if(y.isFramebufferTexture){if(Jt)if(Wt)e.texStorage2D(i.TEXTURE_2D,Vt,lt,Q.width,Q.height);else{let ot=Q.width,L=Q.height;for(let rt=0;rt<Vt;rt++)e.texImage2D(i.TEXTURE_2D,rt,lt,ot,L,0,w,j,null),ot>>=1,L>>=1}}else if(Mt.length>0&&Zt){Wt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,lt,Mt[0].width,Mt[0].height);for(let ot=0,L=Mt.length;ot<L;ot++)it=Mt[ot],Wt?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,w,j,it):e.texImage2D(i.TEXTURE_2D,ot,lt,w,j,it);y.generateMipmaps=!1}else Wt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,lt,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,w,j,Q)):e.texImage2D(i.TEXTURE_2D,0,lt,w,j,Q);E(y,Zt)&&M(nt),xt.__version=et.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function St(b,y,V){if(y.image.length!==6)return;let nt=$(b,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+V);let et=n.get(tt);if(tt.version!==et.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);let xt=Qt.getPrimaries(Qt.workingColorSpace),ft=y.colorSpace===rn?null:Qt.getPrimaries(y.colorSpace),mt=y.colorSpace===rn||xt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ct=y.isCompressedTexture||y.image[0].isCompressedTexture,zt=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let ot=0;ot<6;ot++)!Ct&&!zt?Q[ot]=v(y.image[ot],!1,!0,s.maxCubemapSize):Q[ot]=zt?y.image[ot].image:y.image[ot],Q[ot]=Ot(y,Q[ot]);let Zt=Q[0],w=m(Zt)||a,j=r.convert(y.format,y.colorSpace),lt=r.convert(y.type),it=P(y.internalFormat,j,lt,y.colorSpace),Mt=a&&y.isVideoTexture!==!0,Wt=et.__version===void 0||nt===!0,Jt=D(y,Zt,w);H(i.TEXTURE_CUBE_MAP,y,w);let Vt;if(Ct){Mt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,it,Zt.width,Zt.height);for(let ot=0;ot<6;ot++){Vt=Q[ot].mipmaps;for(let L=0;L<Vt.length;L++){let rt=Vt[L];y.format!==pn?j!==null?Mt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L,0,0,rt.width,rt.height,j,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L,it,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Mt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L,0,0,rt.width,rt.height,j,lt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L,it,rt.width,rt.height,0,j,lt,rt.data)}}}else{Vt=y.mipmaps,Mt&&Wt&&(Vt.length>0&&Jt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,it,Q[0].width,Q[0].height));for(let ot=0;ot<6;ot++)if(zt){Mt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Q[ot].width,Q[ot].height,j,lt,Q[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,it,Q[ot].width,Q[ot].height,0,j,lt,Q[ot].data);for(let L=0;L<Vt.length;L++){let at=Vt[L].image[ot].image;Mt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L+1,0,0,at.width,at.height,j,lt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L+1,it,at.width,at.height,0,j,lt,at.data)}}else{Mt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,j,lt,Q[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,it,j,lt,Q[ot]);for(let L=0;L<Vt.length;L++){let rt=Vt[L];Mt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L+1,0,0,j,lt,rt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L+1,it,j,lt,rt.image[ot])}}}E(y,w)&&M(i.TEXTURE_CUBE_MAP),et.__version=tt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function yt(b,y,V,nt,tt,et){let xt=r.convert(V.format,V.colorSpace),ft=r.convert(V.type),mt=P(V.internalFormat,xt,ft,V.colorSpace);if(!n.get(y).__hasExternalTextures){let zt=Math.max(1,y.width>>et),Q=Math.max(1,y.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,mt,zt,Q,y.depth,0,xt,ft,null):e.texImage2D(tt,et,mt,zt,Q,0,xt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),_t(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,tt,n.get(V).__webglTexture,0,It(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,tt,n.get(V).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(b,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let nt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||_t(y)){let tt=y.depthTexture;tt&&tt.isDepthTexture&&(tt.type===jn?nt=i.DEPTH_COMPONENT32F:tt.type===$n&&(nt=i.DEPTH_COMPONENT24));let et=It(y);_t(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,nt,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,nt,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,nt,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){let nt=It(y);V&&_t(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,y.width,y.height):_t(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let nt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let tt=0;tt<nt.length;tt++){let et=nt[tt],xt=r.convert(et.format,et.colorSpace),ft=r.convert(et.type),mt=P(et.internalFormat,xt,ft,et.colorSpace),Ct=It(y);V&&_t(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,y.width,y.height):_t(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let nt=n.get(y.depthTexture).__webglTexture,tt=It(y);if(y.depthTexture.format===Ti)_t(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===us)_t(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Rt(b){let y=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Nt(y.__webglFramebuffer,b)}else if(V){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]=i.createRenderbuffer(),Ut(y.__webglDepthbuffer[nt],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ut(y.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(b,y,V){let nt=n.get(b);y!==void 0&&yt(nt.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Rt(b)}function k(b){let y=b.texture,V=n.get(b),nt=n.get(y);b.addEventListener("dispose",Z),b.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,o.memory.textures++);let tt=b.isWebGLCubeRenderTarget===!0,et=b.isWebGLMultipleRenderTargets===!0,xt=m(b)||a;if(tt){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(a&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let mt=0;mt<y.mipmaps.length;mt++)V.__webglFramebuffer[ft][mt]=i.createFramebuffer()}else V.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)V.__webglFramebuffer[ft]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(et)if(s.drawBuffers){let ft=b.texture;for(let mt=0,Ct=ft.length;mt<Ct;mt++){let zt=n.get(ft[mt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&_t(b)===!1){let ft=et?y:[y];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let mt=0;mt<ft.length;mt++){let Ct=ft[mt];V.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);let zt=r.convert(Ct.format,Ct.colorSpace),Q=r.convert(Ct.type),Zt=P(Ct.internalFormat,zt,Q,Ct.colorSpace,b.isXRRenderTarget===!0),w=It(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,w,Zt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,V.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(V.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),H(i.TEXTURE_CUBE_MAP,y,xt);for(let ft=0;ft<6;ft++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)yt(V.__webglFramebuffer[ft][mt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,mt);else yt(V.__webglFramebuffer[ft],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);E(y,xt)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ft=b.texture;for(let mt=0,Ct=ft.length;mt<Ct;mt++){let zt=ft[mt],Q=n.get(zt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),H(i.TEXTURE_2D,zt,xt),yt(V.__webglFramebuffer,b,zt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),E(zt,xt)&&M(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ft=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,nt.__webglTexture),H(ft,y,xt),a&&y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)yt(V.__webglFramebuffer[mt],b,y,i.COLOR_ATTACHMENT0,ft,mt);else yt(V.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,ft,0);E(y,xt)&&M(ft),e.unbindTexture()}b.depthBuffer&&Rt(b)}function xe(b){let y=m(b)||a,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let nt=0,tt=V.length;nt<tt;nt++){let et=V[nt];if(E(et,y)){let xt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ft=n.get(et).__webglTexture;e.bindTexture(xt,ft),M(xt),e.unbindTexture()}}}function wt(b){if(a&&b.samples>0&&_t(b)===!1){let y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,nt=b.height,tt=i.COLOR_BUFFER_BIT,et=[],xt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(b),mt=b.isWebGLMultipleRenderTargets===!0;if(mt)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){et.push(i.COLOR_ATTACHMENT0+Ct),b.depthBuffer&&et.push(xt);let zt=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(zt===!1&&(b.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[Ct]),zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xt])),mt){let Q=n.get(y[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,V,nt,0,0,V,nt,tt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,ft.__webglColorRenderbuffer[Ct]);let zt=n.get(y[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function It(b){return Math.min(s.maxSamples,b.samples)}function _t(b){let y=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ae(b){let y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Ot(b,y){let V=b.colorSpace,nt=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===uo||V!==Hn&&V!==rn&&(Qt.getTransfer(V)===ee?a===!1?t.has("EXT_sRGB")===!0&&nt===pn?(b.format=uo,b.minFilter=sn,b.generateMipmaps=!1):y=zr.sRGBToLinear(y):(nt!==pn||tt!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}this.allocateTextureUnit=T,this.resetTextureUnits=K,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=_t}function u0(i,t,e){let n=e.isWebGL2;function s(r,o=rn){let a,l=Qt.getTransfer(o);if(r===Qn)return i.UNSIGNED_BYTE;if(r===ih)return i.UNSIGNED_SHORT_4_4_4_4;if(r===sh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Xu)return i.BYTE;if(r===qu)return i.SHORT;if(r===Yo)return i.UNSIGNED_SHORT;if(r===nh)return i.INT;if(r===$n)return i.UNSIGNED_INT;if(r===jn)return i.FLOAT;if(r===mn)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Yu)return i.ALPHA;if(r===pn)return i.RGBA;if(r===Zu)return i.LUMINANCE;if(r===Ju)return i.LUMINANCE_ALPHA;if(r===Ti)return i.DEPTH_COMPONENT;if(r===us)return i.DEPTH_STENCIL;if(r===uo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ku)return i.RED;if(r===rh)return i.RED_INTEGER;if(r===$u)return i.RG;if(r===ah)return i.RG_INTEGER;if(r===oh)return i.RGBA_INTEGER;if(r===Pa||r===La||r===Ia||r===Da)if(l===ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dl||r===Ul||r===Nl||r===Ol)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ul)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ol)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fl||r===Bl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Fl)return l===ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Bl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zl||r===kl||r===Hl||r===Vl||r===Gl||r===Wl||r===Xl||r===ql||r===Yl||r===Zl||r===Jl||r===Kl||r===$l||r===jl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ql)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$l)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jl)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ua||r===Ql||r===tc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ua)return l===ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ql)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ju||r===ec||r===nc||r===ic)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ua)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ec)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ic)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ei?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var wo=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},f0={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ao=class extends Rn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null,v=e.getContextAttributes(),m=null,d=null,E=[],M=[],P=new vt,D=null,C=new ke;C.layers.enable(1),C.viewport=new Se;let A=new ke;A.layers.enable(2),A.viewport=new Se;let Z=[C,A],g=new wo;g.layers.enable(1),g.layers.enable(2);let x=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=E[H];return $===void 0&&($=new Bs,E[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=E[H];return $===void 0&&($=new Bs,E[H]=$),$.getGripSpace()},this.getHand=function(H){let $=E[H];return $===void 0&&($=new Bs,E[H]=$),$.getHandSpace()};function I(H){let $=M.indexOf(H.inputSource);if($===-1)return;let ut=E[$];ut!==void 0&&(ut.update(H.inputSource,H.frame,c||o),ut.dispatchEvent({type:H.type,data:H.inputSource}))}function K(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",T);for(let H=0;H<E.length;H++){let $=M[H];$!==null&&(M[H]=null,E[H].disconnect($))}x=null,R=null,t.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",K),s.addEventListener("inputsourceschange",T),v.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new He(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,ut=null,St=null;v.depth&&(St=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=v.stencil?us:Ti,ut=v.stencil?Ei:$n);let yt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new He(f.textureWidth,f.textureHeight,{format:pn,type:Qn,depthTexture:new Jr(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let Ut=t.properties.get(d);Ut.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function T(H){for(let $=0;$<H.removed.length;$++){let ut=H.removed[$],St=M.indexOf(ut);St>=0&&(M[St]=null,E[St].disconnect(ut))}for(let $=0;$<H.added.length;$++){let ut=H.added[$],St=M.indexOf(ut);if(St===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=M.length){M.push(ut),St=Ut;break}else if(M[Ut]===null){M[Ut]=ut,St=Ut;break}if(St===-1)break}let yt=E[St];yt&&yt.connect(ut)}}let U=new N,B=new N;function z(H,$,ut){U.setFromMatrixPosition($.matrixWorld),B.setFromMatrixPosition(ut.matrixWorld);let St=U.distanceTo(B),yt=$.projectionMatrix.elements,Ut=ut.projectionMatrix.elements,Nt=yt[14]/(yt[10]-1),Rt=yt[14]/(yt[10]+1),Yt=(yt[9]+1)/yt[5],k=(yt[9]-1)/yt[5],xe=(yt[8]-1)/yt[0],wt=(Ut[8]+1)/Ut[0],It=Nt*xe,_t=Nt*wt,ae=St/(-xe+wt),Ot=ae*-xe;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ot),H.translateZ(ae),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let b=Nt+ae,y=Rt+ae,V=It-Ot,nt=_t+(St-Ot),tt=Yt*Rt/y*b,et=k*Rt/y*b;H.projectionMatrix.makePerspective(V,nt,tt,et,b,y),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function F(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;g.near=A.near=C.near=H.near,g.far=A.far=C.far=H.far,(x!==g.near||R!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),x=g.near,R=g.far);let $=H.parent,ut=g.cameras;F(g,$);for(let St=0;St<ut.length;St++)F(ut[St],$);ut.length===2?z(g,C,A):g.projectionMatrix.copy(C.projectionMatrix),W(H,g,$)};function W(H,$,ut){ut===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(ut.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ks*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let Y=null;function J(H,$){if(h=$.getViewerPose(c||o),_=$,h!==null){let ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let St=!1;ut.length!==g.cameras.length&&(g.cameras.length=0,St=!0);for(let yt=0;yt<ut.length;yt++){let Ut=ut[yt],Nt=null;if(p!==null)Nt=p.getViewport(Ut);else{let Yt=u.getViewSubImage(f,Ut);Nt=Yt.viewport,yt===0&&(t.setRenderTargetTextures(d,Yt.colorTexture,f.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(d))}let Rt=Z[yt];Rt===void 0&&(Rt=new ke,Rt.layers.enable(yt),Rt.viewport=new Se,Z[yt]=Rt),Rt.matrix.fromArray(Ut.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ut.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),yt===0&&(g.matrix.copy(Rt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),St===!0&&g.cameras.push(Rt)}}for(let ut=0;ut<E.length;ut++){let St=M[ut],yt=E[ut];St!==null&&yt!==void 0&&yt.update(St,$,c||o)}Y&&Y(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}let st=new gh;st.setAnimationLoop(J),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}};function d0(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,mh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,M,P){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,P)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let M=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p0(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){let P=M.program;n.uniformBlockBinding(E,P)}function c(E,M){let P=s[E.id];P===void 0&&(_(E),P=h(E),s[E.id]=P,E.addEventListener("dispose",m));let D=M.program;n.updateUBOMapping(E,D);let C=t.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function h(E){let M=u();E.__bindingPointIndex=M;let P=i.createBuffer(),D=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,P),P}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=s[E.id],P=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,A=P.length;C<A;C++){let Z=Array.isArray(P[C])?P[C]:[P[C]];for(let g=0,x=Z.length;g<x;g++){let R=Z[g];if(p(R,C,g,D)===!0){let I=R.__offset,K=Array.isArray(R.value)?R.value:[R.value],T=0;for(let U=0;U<K.length;U++){let B=K[U],z=v(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,I+T,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,T),T+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,P,D){let C=E.value,A=M+"_"+P;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{let Z=D[A];if(typeof C=="number"||typeof C=="boolean"){if(Z!==C)return D[A]=C,!0}else if(Z.equals(C)===!1)return Z.copy(C),!0}return!1}function _(E){let M=E.uniforms,P=0,D=16;for(let A=0,Z=M.length;A<Z;A++){let g=Array.isArray(M[A])?M[A]:[M[A]];for(let x=0,R=g.length;x<R;x++){let I=g[x],K=Array.isArray(I.value)?I.value:[I.value];for(let T=0,U=K.length;T<U;T++){let B=K[T],z=v(B),F=P%D;F!==0&&D-F<z.boundary&&(P+=D-F),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=P,P+=z.storage}}}let C=P%D;return C>0&&(P+=D-C),E.__size=P,E.__cache={},this}function v(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let P=o.indexOf(M.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Ws=class{constructor(t={}){let{canvas:e=Ef(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),_=new Int32Array(4),v=null,m=null,d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this._useLegacyLights=!1,this.toneMapping=An,this.toneMappingExposure=1;let M=this,P=!1,D=0,C=0,A=null,Z=-1,g=null,x=new Se,R=new Se,I=null,K=new gt(0),T=0,U=e.width,B=e.height,z=1,F=null,W=null,Y=new Se(0,0,U,B),J=new Se(0,0,U,B),st=!1,H=new Vs,$=!1,ut=!1,St=null,yt=new pe,Ut=new vt,Nt=new N,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Yt(){return A===null?z:1}let k=n;function xe(S,O){for(let X=0;X<S.length;X++){let q=S[X],G=e.getContext(q,O);if(G!==null)return G}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",rt,!1),k===null){let O=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&O.shift(),k=xe(O,S),k===null)throw xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let wt,It,_t,ae,Ot,b,y,V,nt,tt,et,xt,ft,mt,Ct,zt,Q,Zt,w,j,lt,it,Mt,Wt;function Jt(){wt=new Dm(k),It=new Am(k,wt,t),wt.init(It),it=new u0(k,wt,It),_t=new c0(k,wt,It),ae=new Om(k),Ot=new $g,b=new h0(k,wt,_t,Ot,It,it,ae),y=new Cm(M),V=new Im(M),nt=new Wf(k,It),Mt=new Tm(k,wt,nt,It),tt=new Um(k,nt,ae,Mt),et=new km(k,tt,nt,ae),w=new zm(k,It,b),zt=new Rm(Ot),xt=new Kg(M,y,V,wt,It,Mt,zt),ft=new d0(M,Ot),mt=new Qg,Ct=new r0(wt,It),Zt=new Em(M,y,V,_t,et,f,l),Q=new l0(M,et,It),Wt=new p0(k,ae,It,_t),j=new wm(k,wt,ae,It),lt=new Nm(k,wt,ae,It),ae.programs=xt.programs,M.capabilities=It,M.extensions=wt,M.properties=Ot,M.renderLists=mt,M.shadowMap=Q,M.state=_t,M.info=ae}Jt();let Vt=new Ao(M,k);this.xr=Vt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(U,B,!1))},this.getSize=function(S){return S.set(U,B)},this.setSize=function(S,O,X=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,B=O,e.width=Math.floor(S*z),e.height=Math.floor(O*z),X===!0&&(e.style.width=S+"px",e.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(U*z,B*z).floor()},this.setDrawingBufferSize=function(S,O,X){U=S,B=O,z=X,e.width=Math.floor(S*X),e.height=Math.floor(O*X),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,O,X,q){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,O,X,q),_t.viewport(x.copy(Y).multiplyScalar(z).floor())},this.getScissor=function(S){return S.copy(J)},this.setScissor=function(S,O,X,q){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,O,X,q),_t.scissor(R.copy(J).multiplyScalar(z).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){_t.setScissorTest(st=S)},this.setOpaqueSort=function(S){F=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(S=!0,O=!0,X=!0){let q=0;if(S){let G=!1;if(A!==null){let dt=A.texture.format;G=dt===oh||dt===ah||dt===rh}if(G){let dt=A.texture.type,Et=dt===Qn||dt===$n||dt===Yo||dt===Ei||dt===ih||dt===sh,Lt=Zt.getClearColor(),Dt=Zt.getClearAlpha(),Gt=Lt.r,Ft=Lt.g,kt=Lt.b;Et?(p[0]=Gt,p[1]=Ft,p[2]=kt,p[3]=Dt,k.clearBufferuiv(k.COLOR,0,p)):(_[0]=Gt,_[1]=Ft,_[2]=kt,_[3]=Dt,k.clearBufferiv(k.COLOR,0,_))}else q|=k.COLOR_BUFFER_BIT}O&&(q|=k.DEPTH_BUFFER_BIT),X&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),mt.dispose(),Ct.dispose(),Ot.dispose(),y.dispose(),V.dispose(),et.dispose(),Mt.dispose(),Wt.dispose(),xt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ne),Vt.removeEventListener("sessionend",ie),St&&(St.dispose(),St=null),Oe.stop()};function ot(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=ae.autoReset,O=Q.enabled,X=Q.autoUpdate,q=Q.needsUpdate,G=Q.type;Jt(),ae.autoReset=S,Q.enabled=O,Q.autoUpdate=X,Q.needsUpdate=q,Q.type=G}function rt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){let O=S.target;O.removeEventListener("dispose",at),At(O)}function At(S){bt(S),Ot.remove(S)}function bt(S){let O=Ot.get(S).programs;O!==void 0&&(O.forEach(function(X){xt.releaseProgram(X)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,X,q,G,dt){O===null&&(O=Rt);let Et=G.isMesh&&G.matrixWorld.determinant()<0,Lt=fu(S,O,X,q,G);_t.setMaterial(q,Et);let Dt=X.index,Gt=1;if(q.wireframe===!0){if(Dt=tt.getWireframeAttribute(X),Dt===void 0)return;Gt=2}let Ft=X.drawRange,kt=X.attributes.position,de=Ft.start*Gt,Je=(Ft.start+Ft.count)*Gt;dt!==null&&(de=Math.max(de,dt.start*Gt),Je=Math.min(Je,(dt.start+dt.count)*Gt)),Dt!==null?(de=Math.max(de,0),Je=Math.min(Je,Dt.count)):kt!=null&&(de=Math.max(de,0),Je=Math.min(Je,kt.count));let ye=Je-de;if(ye<0||ye===1/0)return;Mt.setup(G,q,Lt,X,Dt);let In,ce=j;if(Dt!==null&&(In=nt.get(Dt),ce=lt,ce.setIndex(In)),G.isMesh)q.wireframe===!0?(_t.setLineWidth(q.wireframeLinewidth*Yt()),ce.setMode(k.LINES)):ce.setMode(k.TRIANGLES);else if(G.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),_t.setLineWidth(Xt*Yt()),G.isLineSegments?ce.setMode(k.LINES):G.isLineLoop?ce.setMode(k.LINE_LOOP):ce.setMode(k.LINE_STRIP)}else G.isPoints?ce.setMode(k.POINTS):G.isSprite&&ce.setMode(k.TRIANGLES);if(G.isBatchedMesh)ce.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ce.renderInstances(de,ye,G.count);else if(X.isInstancedBufferGeometry){let Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ta=Math.min(X.instanceCount,Xt);ce.renderInstances(de,ye,Ta)}else ce.render(de,ye)};function Kt(S,O,X){S.transparent===!0&&S.side===zn&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,sr(S,O,X),S.side=ti,S.needsUpdate=!0,sr(S,O,X),S.side=zn):sr(S,O,X)}this.compile=function(S,O,X=null){X===null&&(X=S),m=Ct.get(X),m.init(),E.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(M._useLegacyLights);let q=new Set;return S.traverse(function(G){let dt=G.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){let Lt=dt[Et];Kt(Lt,X,G),q.add(Lt)}else Kt(dt,X,G),q.add(dt)}),E.pop(),m=null,q},this.compileAsync=function(S,O,X=null){let q=this.compile(S,O,X);return new Promise(G=>{function dt(){if(q.forEach(function(Et){Ot.get(Et).currentProgram.isReady()&&q.delete(Et)}),q.size===0){G(S);return}setTimeout(dt,10)}wt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let $t=null;function ve(S){$t&&$t(S)}function Ne(){Oe.stop()}function ie(){Oe.start()}let Oe=new gh;Oe.setAnimationLoop(ve),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(S){$t=S,Vt.setAnimationLoop(S),S===null?Oe.stop():Oe.start()},Vt.addEventListener("sessionstart",Ne),Vt.addEventListener("sessionend",ie),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(O),O=Vt.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,O,A),m=Ct.get(S,E.length),m.init(),E.push(m),yt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(yt),ut=this.localClippingEnabled,$=zt.init(this.clippingPlanes,ut),v=mt.get(S,d.length),v.init(),d.push(v),En(S,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(F,W),this.info.render.frame++,$===!0&&zt.beginShadows();let X=m.state.shadowsArray;if(Q.render(X,S,O),$===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(v,S),m.setupLights(M._useLegacyLights),O.isArrayCamera){let q=O.cameras;for(let G=0,dt=q.length;G<dt;G++){let Et=q[G];Ml(v,S,Et,Et.viewport)}}else Ml(v,S,O);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(M,S,O),Mt.resetDefaultState(),Z=-1,g=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function En(S,O,X,q){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){q&&Nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(yt);let Et=et.update(S),Lt=S.material;Lt.visible&&v.push(S,Et,Lt,X,Nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){let Et=et.update(S),Lt=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Nt.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Nt.copy(Et.boundingSphere.center)),Nt.applyMatrix4(S.matrixWorld).applyMatrix4(yt)),Array.isArray(Lt)){let Dt=Et.groups;for(let Gt=0,Ft=Dt.length;Gt<Ft;Gt++){let kt=Dt[Gt],de=Lt[kt.materialIndex];de&&de.visible&&v.push(S,Et,de,X,Nt.z,kt)}}else Lt.visible&&v.push(S,Et,Lt,X,Nt.z,null)}}let dt=S.children;for(let Et=0,Lt=dt.length;Et<Lt;Et++)En(dt[Et],O,X,q)}function Ml(S,O,X,q){let G=S.opaque,dt=S.transmissive,Et=S.transparent;m.setupLightsView(X),$===!0&&zt.setGlobalState(M.clippingPlanes,X),dt.length>0&&uu(G,dt,O,X),q&&_t.viewport(x.copy(q)),G.length>0&&ir(G,O,X),dt.length>0&&ir(dt,O,X),Et.length>0&&ir(Et,O,X),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function uu(S,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let dt=It.isWebGL2;St===null&&(St=new He(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?mn:Qn,minFilter:zs,samples:dt?4:0})),M.getDrawingBufferSize(Ut),dt?St.setSize(Ut.x,Ut.y):St.setSize(Fr(Ut.x),Fr(Ut.y));let Et=M.getRenderTarget();M.setRenderTarget(St),M.getClearColor(K),T=M.getClearAlpha(),T<1&&M.setClearColor(16777215,.5),M.clear();let Lt=M.toneMapping;M.toneMapping=An,ir(S,X,q),b.updateMultisampleRenderTarget(St),b.updateRenderTargetMipmap(St);let Dt=!1;for(let Gt=0,Ft=O.length;Gt<Ft;Gt++){let kt=O[Gt],de=kt.object,Je=kt.geometry,ye=kt.material,In=kt.group;if(ye.side===zn&&de.layers.test(q.layers)){let ce=ye.side;ye.side=qe,ye.needsUpdate=!0,Sl(de,X,q,Je,ye,In),ye.side=ce,ye.needsUpdate=!0,Dt=!0}}Dt===!0&&(b.updateMultisampleRenderTarget(St),b.updateRenderTargetMipmap(St)),M.setRenderTarget(Et),M.setClearColor(K,T),M.toneMapping=Lt}function ir(S,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let G=0,dt=S.length;G<dt;G++){let Et=S[G],Lt=Et.object,Dt=Et.geometry,Gt=q===null?Et.material:q,Ft=Et.group;Lt.layers.test(X.layers)&&Sl(Lt,O,X,Dt,Gt,Ft)}}function Sl(S,O,X,q,G,dt){S.onBeforeRender(M,O,X,q,G,dt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(M,O,X,q,S,dt),G.transparent===!0&&G.side===zn&&G.forceSinglePass===!1?(G.side=qe,G.needsUpdate=!0,M.renderBufferDirect(X,O,q,G,S,dt),G.side=ti,G.needsUpdate=!0,M.renderBufferDirect(X,O,q,G,S,dt),G.side=zn):M.renderBufferDirect(X,O,q,G,S,dt),S.onAfterRender(M,O,X,q,G,dt)}function sr(S,O,X){O.isScene!==!0&&(O=Rt);let q=Ot.get(S),G=m.state.lights,dt=m.state.shadowsArray,Et=G.state.version,Lt=xt.getParameters(S,G.state,dt,O,X),Dt=xt.getProgramCacheKey(Lt),Gt=q.programs;q.environment=S.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(S.isMeshStandardMaterial?V:y).get(S.envMap||q.environment),Gt===void 0&&(S.addEventListener("dispose",at),Gt=new Map,q.programs=Gt);let Ft=Gt.get(Dt);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===Et)return El(S,Lt),Ft}else Lt.uniforms=xt.getUniforms(S),S.onBuild(X,Lt,M),S.onBeforeCompile(Lt,M),Ft=xt.acquireProgram(Lt,Dt),Gt.set(Dt,Ft),q.uniforms=Lt.uniforms;let kt=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(kt.clippingPlanes=zt.uniform),El(S,Lt),q.needsLights=pu(S),q.lightsStateVersion=Et,q.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function bl(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=ls.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function El(S,O){let X=Ot.get(S);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function fu(S,O,X,q,G){O.isScene!==!0&&(O=Rt),b.resetTextureUnits();let dt=O.fog,Et=q.isMeshStandardMaterial?O.environment:null,Lt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hn,Dt=(q.isMeshStandardMaterial?V:y).get(q.envMap||Et),Gt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ft=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!X.morphAttributes.position,de=!!X.morphAttributes.normal,Je=!!X.morphAttributes.color,ye=An;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ye=M.toneMapping);let In=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=In!==void 0?In.length:0,Xt=Ot.get(q),Ta=m.state.lights;if($===!0&&(ut===!0||S!==g)){let en=S===g&&q.id===Z;zt.setState(q,S,en)}let ue=!1;q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ta.state.version||Xt.outputColorSpace!==Lt||G.isBatchedMesh&&Xt.batching===!1||!G.isBatchedMesh&&Xt.batching===!0||G.isInstancedMesh&&Xt.instancing===!1||!G.isInstancedMesh&&Xt.instancing===!0||G.isSkinnedMesh&&Xt.skinning===!1||!G.isSkinnedMesh&&Xt.skinning===!0||G.isInstancedMesh&&Xt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xt.instancingColor===!1&&G.instanceColor!==null||Xt.envMap!==Dt||q.fog===!0&&Xt.fog!==dt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==zt.numPlanes||Xt.numIntersection!==zt.numIntersection)||Xt.vertexAlphas!==Gt||Xt.vertexTangents!==Ft||Xt.morphTargets!==kt||Xt.morphNormals!==de||Xt.morphColors!==Je||Xt.toneMapping!==ye||It.isWebGL2===!0&&Xt.morphTargetsCount!==ce)&&(ue=!0):(ue=!0,Xt.__version=q.version);let mi=Xt.currentProgram;ue===!0&&(mi=sr(q,O,G));let Tl=!1,Rs=!1,wa=!1,Le=mi.getUniforms(),gi=Xt.uniforms;if(_t.useProgram(mi.program)&&(Tl=!0,Rs=!0,wa=!0),q.id!==Z&&(Z=q.id,Rs=!0),Tl||g!==S){Le.setValue(k,"projectionMatrix",S.projectionMatrix),Le.setValue(k,"viewMatrix",S.matrixWorldInverse);let en=Le.map.cameraPosition;en!==void 0&&en.setValue(k,Nt.setFromMatrixPosition(S.matrixWorld)),It.logarithmicDepthBuffer&&Le.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Le.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),g!==S&&(g=S,Rs=!0,wa=!0)}if(G.isSkinnedMesh){Le.setOptional(k,G,"bindMatrix"),Le.setOptional(k,G,"bindMatrixInverse");let en=G.skeleton;en&&(It.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Le.setValue(k,"boneTexture",en.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Le.setOptional(k,G,"batchingTexture"),Le.setValue(k,"batchingTexture",G._matricesTexture,b));let Aa=X.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0&&It.isWebGL2===!0)&&w.update(G,X,mi),(Rs||Xt.receiveShadow!==G.receiveShadow)&&(Xt.receiveShadow=G.receiveShadow,Le.setValue(k,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gi.envMap.value=Dt,gi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Rs&&(Le.setValue(k,"toneMappingExposure",M.toneMappingExposure),Xt.needsLights&&du(gi,wa),dt&&q.fog===!0&&ft.refreshFogUniforms(gi,dt),ft.refreshMaterialUniforms(gi,q,z,B,St),ls.upload(k,bl(Xt),gi,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ls.upload(k,bl(Xt),gi,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Le.setValue(k,"center",G.center),Le.setValue(k,"modelViewMatrix",G.modelViewMatrix),Le.setValue(k,"normalMatrix",G.normalMatrix),Le.setValue(k,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let en=q.uniformsGroups;for(let Ra=0,mu=en.length;Ra<mu;Ra++)if(It.isWebGL2){let wl=en[Ra];Wt.update(wl,mi),Wt.bind(wl,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function du(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function pu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,O,X){Ot.get(S.texture).__webglTexture=O,Ot.get(S.depthTexture).__webglTexture=X;let q=Ot.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){let X=Ot.get(S);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,X=0){A=S,D=O,C=X;let q=!0,G=null,dt=!1,Et=!1;if(S){let Dt=Ot.get(S);Dt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(k.FRAMEBUFFER,null),q=!1):Dt.__webglFramebuffer===void 0?b.setupRenderTarget(S):Dt.__hasExternalTextures&&b.rebindTextures(S,Ot.get(S.texture).__webglTexture,Ot.get(S.depthTexture).__webglTexture);let Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);let Ft=Ot.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?G=Ft[O][X]:G=Ft[O],dt=!0):It.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?G=Ot.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?G=Ft[X]:G=Ft,x.copy(S.viewport),R.copy(S.scissor),I=S.scissorTest}else x.copy(Y).multiplyScalar(z).floor(),R.copy(J).multiplyScalar(z).floor(),I=st;if(_t.bindFramebuffer(k.FRAMEBUFFER,G)&&It.drawBuffers&&q&&_t.drawBuffers(S,G),_t.viewport(x),_t.scissor(R),_t.setScissorTest(I),dt){let Dt=Ot.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,X)}else if(Et){let Dt=Ot.get(S.texture),Gt=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,Gt)}Z=-1},this.readRenderTargetPixels=function(S,O,X,q,G,dt,Et){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Ot.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){_t.bindFramebuffer(k.FRAMEBUFFER,Lt);try{let Dt=S.texture,Gt=Dt.format,Ft=Dt.type;if(Gt!==pn&&it.convert(Gt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let kt=Ft===mn&&(wt.has("EXT_color_buffer_half_float")||It.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Ft!==Qn&&it.convert(Ft)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===jn&&(It.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-q&&X>=0&&X<=S.height-G&&k.readPixels(O,X,q,G,it.convert(Gt),it.convert(Ft),dt)}finally{let Dt=A!==null?Ot.get(A).__webglFramebuffer:null;_t.bindFramebuffer(k.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(S,O,X=0){let q=Math.pow(2,-X),G=Math.floor(O.image.width*q),dt=Math.floor(O.image.height*q);b.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,S.x,S.y,G,dt),_t.unbindTexture()},this.copyTextureToTexture=function(S,O,X,q=0){let G=O.image.width,dt=O.image.height,Et=it.convert(X.format),Lt=it.convert(X.type);b.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,q,S.x,S.y,G,dt,Et,Lt,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,q,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Et,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,q,S.x,S.y,Et,Lt,O.image),q===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(S,O,X,q,G=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let dt=S.max.x-S.min.x+1,Et=S.max.y-S.min.y+1,Lt=S.max.z-S.min.z+1,Dt=it.convert(q.format),Gt=it.convert(q.type),Ft;if(q.isData3DTexture)b.setTexture3D(q,0),Ft=k.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)b.setTexture2DArray(q,0),Ft=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);let kt=k.getParameter(k.UNPACK_ROW_LENGTH),de=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Je=k.getParameter(k.UNPACK_SKIP_PIXELS),ye=k.getParameter(k.UNPACK_SKIP_ROWS),In=k.getParameter(k.UNPACK_SKIP_IMAGES),ce=X.isCompressedTexture?X.mipmaps[G]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ce.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,S.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,S.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(Ft,G,O.x,O.y,O.z,dt,Et,Lt,Dt,Gt,ce.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ft,G,O.x,O.y,O.z,dt,Et,Lt,Dt,ce.data)):k.texSubImage3D(Ft,G,O.x,O.y,O.z,dt,Et,Lt,Dt,Gt,ce),k.pixelStorei(k.UNPACK_ROW_LENGTH,kt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,de),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Je),k.pixelStorei(k.UNPACK_SKIP_ROWS,ye),k.pixelStorei(k.UNPACK_SKIP_IMAGES,In),G===0&&q.generateMipmaps&&k.generateMipmap(Ft),_t.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),_t.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,_t.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Zo?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===we?wi:ch}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===wi?we:Hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ro=class extends Ws{};Ro.prototype.isWebGL1Renderer=!0;var Kr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$r=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var jr=class extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},es=new pe,Zc=new pe,Ar=[],Jc=new Vn,m0=new pe,Ds=new Ae,Us=new Ai,Qr=class extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Jc.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(Jc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Us.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,es),Zc.multiplyMatrices(n,es),Ds.matrixWorld=Zc,Ds.raycast(t,Ar);for(let o=0,a=Ar.length;o<a;o++){let l=Ar[o];l.instanceId=r,l.object=this,e.push(l)}Ar.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new jr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ta=class extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ve=class extends Ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Rr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function g0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Co=class extends ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rc:r=t,a=2*e-n;break;case ac:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:o=t,l=2*n-e;break;case ac:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),v=_*_,m=v*_,d=-f*m+2*f*v-f*_,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*_+1,M=(-1-p)*m+(1.5+p)*v+.5*_,P=p*m-p*v;for(let D=0;D!==a;++D)r[D]=d*o[h+D]+E*o[c+D]+M*o[l+D]+P*o[u+D];return r}},Po=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Lo=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rr(e,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rr(t.times,Array),values:Rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Co(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case Ir:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&g0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Na,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let _=0;_!==n;++_){let v=e[u+_];if(v!==e[f+_]||v!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Ir;var Pi=class extends xn{};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Lr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends xn{};Io.prototype.ValueTypeName="color";var Do=class extends xn{};Do.prototype.ValueTypeName="number";var Uo=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xs=class extends xn{InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.DefaultInterpolation=Ir;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends xn{};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Lr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends xn{};No.prototype.ValueTypeName="vector";var Oo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},_0=new Oo,Fo=class{constructor(t){this.manager=t!==void 0?t:_0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ea=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},na=class extends ea{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},so=new pe,Kc=new N,$c=new N,Bo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),$c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($c),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zo=class extends Bo{constructor(){super(new ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ia=class extends ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new zo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ps=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=jc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function jc(){return(typeof performance>"u"?Date:performance).now()}var $o="\\[\\]\\.:\\/",x0=new RegExp("["+$o+"]","g"),jo="[^"+$o+"]",v0="[^"+$o.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",jo),M0=/(WCOD+)?/.source.replace("WCOD",v0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jo),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jo),E0=new RegExp("^"+y0+M0+S0+b0+"$"),T0=["material","materials","bones","map"],ko=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(t){let e=E0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);T0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=ko;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m_=new Float32Array(1);var qs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Sh={type:"change"},Qo={type:"start"},bh={type:"end"},oa=new Hs,Eh=new fn,A0=Math.cos(70*fh.DEG2RAD),la=class extends Rn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",et),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",et),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Sh),n.update(),r=s.NONE},this.update=(function(){let w=new N,j=new _n().setFromUnitVectors(t.up,new N(0,1,0)),lt=j.clone().invert(),it=new N,Mt=new _n,Wt=new N,Jt=2*Math.PI;return function(ot=null){let L=n.object.position;w.copy(L).sub(n.target),w.applyQuaternion(j),a.setFromVector3(w),n.autoRotate&&r===s.NONE&&R(g(ot)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let rt=n.minAzimuthAngle,at=n.maxAzimuthAngle;isFinite(rt)&&isFinite(at)&&(rt<-Math.PI?rt+=Jt:rt>Math.PI&&(rt-=Jt),at<-Math.PI?at+=Jt:at>Math.PI&&(at-=Jt),rt<=at?a.theta=Math.max(rt,Math.min(at,a.theta)):a.theta=a.theta>(rt+at)/2?Math.max(rt,a.theta):Math.min(at,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),w.setFromSpherical(a),w.applyQuaternion(lt),L.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let At=!1;if(n.zoomToCursor&&C){let bt=null;if(n.object.isPerspectiveCamera){let Kt=w.length();bt=W(Kt*c);let $t=Kt-bt;n.object.position.addScaledVector(P,$t),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Kt=new N(D.x,D.y,0);Kt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),At=!0;let $t=new N(D.x,D.y,0);$t.unproject(n.object),n.object.position.sub($t).add(Kt),n.object.updateMatrixWorld(),bt=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(bt).add(n.object.position):(oa.origin.copy(n.object.position),oa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(oa.direction))<A0?t.lookAt(n.target):(Eh.setFromNormalAndCoplanarPoint(n.object.up,n.target),oa.intersectPlane(Eh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),At=!0);return c=1,C=!1,At||it.distanceToSquared(n.object.position)>o||8*(1-Mt.dot(n.object.quaternion))>o||Wt.distanceToSquared(n.target)>0?(n.dispatchEvent(Sh),it.copy(n.object.position),Mt.copy(n.object.quaternion),Wt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",mt),n.domElement.removeEventListener("pointerdown",Ot),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",et),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new qs,l=new qs,c=1,h=new N,u=new vt,f=new vt,p=new vt,_=new vt,v=new vt,m=new vt,d=new vt,E=new vt,M=new vt,P=new N,D=new vt,C=!1,A=[],Z={};function g(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function x(w){let j=Math.abs(w)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*j)}function R(w){l.theta-=w}function I(w){l.phi-=w}let K=(function(){let w=new N;return function(lt,it){w.setFromMatrixColumn(it,0),w.multiplyScalar(-lt),h.add(w)}})(),T=(function(){let w=new N;return function(lt,it){n.screenSpacePanning===!0?w.setFromMatrixColumn(it,1):(w.setFromMatrixColumn(it,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(lt),h.add(w)}})(),U=(function(){let w=new N;return function(lt,it){let Mt=n.domElement;if(n.object.isPerspectiveCamera){let Wt=n.object.position;w.copy(Wt).sub(n.target);let Jt=w.length();Jt*=Math.tan(n.object.fov/2*Math.PI/180),K(2*lt*Jt/Mt.clientHeight,n.object.matrix),T(2*it*Jt/Mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(lt*(n.object.right-n.object.left)/n.object.zoom/Mt.clientWidth,n.object.matrix),T(it*(n.object.top-n.object.bottom)/n.object.zoom/Mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function B(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(w,j){if(!n.zoomToCursor)return;C=!0;let lt=n.domElement.getBoundingClientRect(),it=w-lt.left,Mt=j-lt.top,Wt=lt.width,Jt=lt.height;D.x=it/Wt*2-1,D.y=-(Mt/Jt)*2+1,P.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function Y(w){u.set(w.clientX,w.clientY)}function J(w){F(w.clientX,w.clientX),d.set(w.clientX,w.clientY)}function st(w){_.set(w.clientX,w.clientY)}function H(w){f.set(w.clientX,w.clientY),p.subVectors(f,u).multiplyScalar(n.rotateSpeed);let j=n.domElement;R(2*Math.PI*p.x/j.clientHeight),I(2*Math.PI*p.y/j.clientHeight),u.copy(f),n.update()}function $(w){E.set(w.clientX,w.clientY),M.subVectors(E,d),M.y>0?B(x(M.y)):M.y<0&&z(x(M.y)),d.copy(E),n.update()}function ut(w){v.set(w.clientX,w.clientY),m.subVectors(v,_).multiplyScalar(n.panSpeed),U(m.x,m.y),_.copy(v),n.update()}function St(w){F(w.clientX,w.clientY),w.deltaY<0?z(x(w.deltaY)):w.deltaY>0&&B(x(w.deltaY)),n.update()}function yt(w){let j=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),j=!0;break}j&&(w.preventDefault(),n.update())}function Ut(w){if(A.length===1)u.set(w.pageX,w.pageY);else{let j=Zt(w),lt=.5*(w.pageX+j.x),it=.5*(w.pageY+j.y);u.set(lt,it)}}function Nt(w){if(A.length===1)_.set(w.pageX,w.pageY);else{let j=Zt(w),lt=.5*(w.pageX+j.x),it=.5*(w.pageY+j.y);_.set(lt,it)}}function Rt(w){let j=Zt(w),lt=w.pageX-j.x,it=w.pageY-j.y,Mt=Math.sqrt(lt*lt+it*it);d.set(0,Mt)}function Yt(w){n.enableZoom&&Rt(w),n.enablePan&&Nt(w)}function k(w){n.enableZoom&&Rt(w),n.enableRotate&&Ut(w)}function xe(w){if(A.length==1)f.set(w.pageX,w.pageY);else{let lt=Zt(w),it=.5*(w.pageX+lt.x),Mt=.5*(w.pageY+lt.y);f.set(it,Mt)}p.subVectors(f,u).multiplyScalar(n.rotateSpeed);let j=n.domElement;R(2*Math.PI*p.x/j.clientHeight),I(2*Math.PI*p.y/j.clientHeight),u.copy(f)}function wt(w){if(A.length===1)v.set(w.pageX,w.pageY);else{let j=Zt(w),lt=.5*(w.pageX+j.x),it=.5*(w.pageY+j.y);v.set(lt,it)}m.subVectors(v,_).multiplyScalar(n.panSpeed),U(m.x,m.y),_.copy(v)}function It(w){let j=Zt(w),lt=w.pageX-j.x,it=w.pageY-j.y,Mt=Math.sqrt(lt*lt+it*it);E.set(0,Mt),M.set(0,Math.pow(E.y/d.y,n.zoomSpeed)),B(M.y),d.copy(E);let Wt=(w.pageX+j.x)*.5,Jt=(w.pageY+j.y)*.5;F(Wt,Jt)}function _t(w){n.enableZoom&&It(w),n.enablePan&&wt(w)}function ae(w){n.enableZoom&&It(w),n.enableRotate&&xe(w)}function Ot(w){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",y)),Ct(w),w.pointerType==="touch"?xt(w):V(w))}function b(w){n.enabled!==!1&&(w.pointerType==="touch"?ft(w):nt(w))}function y(w){zt(w),A.length===0&&(n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y)),n.dispatchEvent(bh),r=s.NONE}function V(w){let j;switch(w.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Ii.DOLLY:if(n.enableZoom===!1)return;J(w),r=s.DOLLY;break;case Ii.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;st(w),r=s.PAN}else{if(n.enableRotate===!1)return;Y(w),r=s.ROTATE}break;case Ii.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;Y(w),r=s.ROTATE}else{if(n.enablePan===!1)return;st(w),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qo)}function nt(w){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;H(w);break;case s.DOLLY:if(n.enableZoom===!1)return;$(w);break;case s.PAN:if(n.enablePan===!1)return;ut(w);break}}function tt(w){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(w.preventDefault(),n.dispatchEvent(Qo),St(w),n.dispatchEvent(bh))}function et(w){n.enabled===!1||n.enablePan===!1||yt(w)}function xt(w){switch(Q(w),A.length){case 1:switch(n.touches.ONE){case Di.ROTATE:if(n.enableRotate===!1)return;Ut(w),r=s.TOUCH_ROTATE;break;case Di.PAN:if(n.enablePan===!1)return;Nt(w),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Yt(w),r=s.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;k(w),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qo)}function ft(w){switch(Q(w),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(w),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;wt(w),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(w),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(w),n.update();break;default:r=s.NONE}}function mt(w){n.enabled!==!1&&w.preventDefault()}function Ct(w){A.push(w.pointerId)}function zt(w){delete Z[w.pointerId];for(let j=0;j<A.length;j++)if(A[j]==w.pointerId){A.splice(j,1);return}}function Q(w){let j=Z[w.pointerId];j===void 0&&(j=new vt,Z[w.pointerId]=j),j.set(w.pageX,w.pageY)}function Zt(w){let j=w.pointerId===A[0]?A[1]:A[0];return Z[j]}n.domElement.addEventListener("contextmenu",mt),n.domElement.addEventListener("pointerdown",Ot),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",tt,{passive:!1}),this.update()}};var ca={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Qe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},R0=new ei(-1,1,1,-1,0,1),tl=class extends Gn{constructor(){super(),this.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new an([0,2,0,0,2,0],2))}},C0=new tl,ii=class{constructor(t){this._mesh=new Ae(C0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,R0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ha=class extends Qe{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ni.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ii(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ys=class extends Qe{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ua=class extends Qe{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var fa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new vt);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ha(ca),this.copyPass.material.blending=wn,this.clock=new ps}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ys!==void 0&&(o instanceof Ys?n=!0:o instanceof ua&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var da=class extends Qe{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Th={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var _s=class i extends Qe{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new He(r,o,{type:mn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new He(r,o,{type:mn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Th;this.highPassUniforms=ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new vt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ca;this.copyUniforms=ni.clone(h.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Cr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new gt,this.oldClearAlpha=1,this.basic=new on,this.fsQuad=new ii(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new vt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};_s.BlurDirectionX=new vt(1,0);_s.BlurDirectionY=new vt(0,1);var wh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var pa=class extends Qe{constructor(){super();let t=wh;this.uniforms=ni.clone(t.uniforms),this.material=new ta({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qo&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Bh(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Tt=Bh(1),te=i=>i[Math.floor(Tt()*i.length)],ai=i=>i[Math.floor(Math.random()*i.length)],fe=(i,t=.05)=>new gt(i).offsetHSL(0,(Tt()-.5)*t*.5,(Tt()-.5)*t),tn=(i,t,e)=>Math.max(t,Math.min(e,i)),Ss=i=>Math.atan2(Math.sin(i),Math.cos(i)),Pt=i=>document.getElementById(i),ga=!0,Fi=!0,Ze=(i=12)=>{if(ga)try{navigator.vibrate&&navigator.vibrate(i)}catch{}},ui="ontouchstart"in window||matchMedia("(pointer:coarse)").matches;ui&&(Pt("help").textContent="Joystick para moverte \xB7 arrastra a la derecha para mirar \xB7 FUEGO, SALTO, AUTO y ARMA");var Zs=["#fff4e0","#ffe0b5","#ffb4a2","#ffd166","#8ee3ef","#bde0fe","#ffc8dd","#cdb4db","#caffbf","#fdffb6","#ffffff","#f1c0e8","#a3c4f3","#90dbf4","#f9c74f","#f8961e"],Ni=["#e63946","#ef476f","#3a86ff","#7b2cbf","#2a9d8f","#06d6a0","#f77f00","#118ab2","#ff006e","#8338ec"],ma=["#24496b","#1f3b57","#2c5d7c","#30475e"],Ui=["#ff3cac","#00f5d4","#fee440","#9b5de5","#f15bb5","#00bbf9"],nl=["#ef233c","#ffd60a","#06d6a0","#118ab2","#ffffff","#ff7b00","#8338ec","#ff006e","#3a86ff"],P0=["#6fcf4f","#79d65a","#67c94a","#82db63"],Ah=["#2fa84f","#3cb64a","#5bc236","#1f8f3a","#78c850"],L0=["#e76f51","#2a9d8f","#e9c46a","#f4a261","#8ecae6","#ffb703","#a8dadc","#cdb4db","#90be6d","#f28482"],zh=["#e0ac69","#c68642","#8d5524","#f1c27d","#ffdbac"],il=Pt("screen"),fi=Pt("c"),ws=new Ws({canvas:fi,antialias:!0,powerPreference:"high-performance"}),kh=Math.min(window.devicePixelRatio||1,2);ws.setPixelRatio(kh);ws.shadowMap.enabled=!0;ws.shadowMap.type=Ho;ws.toneMapping=An;var re=new $r,cl=new gt("#8fd6f2"),I0=new gt("#060a16");re.background=cl.clone();var Hh=new Kr(cl.clone(),14,42),Mn=new ei(-20,20,20,-20,.1,500);Mn.position.set(40,36,40);Mn.zoom=1.05;Mn.lookAt(0,0,0);var oi=new ke(62,1,.02,250),We=new la(Mn,fi);We.enableDamping=!0;We.dampingFactor=.08;We.minZoom=.6;We.maxZoom=5;We.minPolarAngle=.3;We.maxPolarAngle=1.25;We.autoRotate=!0;We.autoRotateSpeed=.45;We.screenSpacePanning=!1;var sl=new na("#e3f3ff","#6b5a44",1.1);re.add(sl);var Xe=new ia("#fff0d6",2.4),Ks=new N(28,42,16).normalize();Xe.position.copy(Ks).multiplyScalar(55);Xe.castShadow=!0;Xe.shadow.mapSize.set(2048,2048);Xe.shadow.bias=-4e-4;Xe.shadow.normalBias=.03;re.add(Xe);re.add(Xe.target);function hl(i){Object.assign(Xe.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:1,far:150}),Xe.shadow.camera.updateProjectionMatrix()}hl(33);var As=new fa(ws);As.setPixelRatio(kh);var ul=new da(re,Mn);As.addPass(ul);var ys=new _s(new vt(512,512),0,.35,.82);ys.enabled=!1;As.addPass(ys);As.addPass(new pa);var Vh=new Ci(1,1,1),D0=new Ve({color:16777215,roughness:.85,metalness:0}),U0=new Ve({color:16777215,roughness:.95,metalness:0}),Gh=new Ve({color:16777215,roughness:.25,metalness:.1,emissive:new gt("#ffc964"),emissiveIntensity:0}),N0=new Ve({color:16777215,roughness:.25,metalness:.1}),Wh=new Ve({color:"#fff4cf",emissive:new gt("#ffd27a"),emissiveIntensity:0}),Xh=new on({color:16777215}),fl=new Ve({color:"#fffbe6",emissive:new gt("#fff2b0"),emissiveIntensity:0}),dl=new Ve({color:"#ff3b3b",emissive:new gt("#ff2020"),emissiveIntensity:0}),qh=new Ve({color:"#1d2b3a",roughness:.2,metalness:.3}),Yh=new Ve({color:"#ffffff",roughness:1,transparent:!0,opacity:.93}),Zh=new Ve({color:"#2f9fd6",roughness:.35,metalness:.05}),Jh=new Ve({color:"#c4f1ff",emissive:new gt("#7fdcff"),emissiveIntensity:.2}),Rh=new on({color:new gt("#ffe066").multiplyScalar(2)}),O0=new on({color:new gt("#ff4d6d").multiplyScalar(2)}),F0=new on({color:new gt("#fff3b0").multiplyScalar(3)}),rl=Ui.map(i=>{let t=new on({color:i});return t.userData.base=new gt(i),t}),Ch={},jt=i=>Ch[i]||(Ch[i]=new Ve({color:i,roughness:.5,metalness:.05}));function Bt(i,t,e,n,s=0,r=0,o=0,a=!0){let l=new Ae(Vh,i);return l.scale.set(t,e,n),l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function xs(i,t,e=!0,n=!0){let s=new Qr(Vh,t,Math.max(i.length,1));s.count=i.length;let r=new Re,o=new gt;return i.forEach((a,l)=>{r.position.set(a[0],a[1]+a[4]/2,a[2]),r.scale.set(a[3],a[4],a[5]),r.rotation.set(0,a[7]||0,0),r.updateMatrix(),s.setMatrixAt(l,r.matrix),s.setColorAt(l,o.set(a[6]))}),s.castShadow=e,s.receiveShadow=n,s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s}var ba=new Ae(new Gs(600,600),Zh);ba.rotation.x=-Math.PI/2;ba.position.y=-.72;ba.receiveShadow=!0;re.add(ba);var li=22,Ye=44,$s=new Array(Ye*Ye),al=[];function ln(i,t,e,n,s,r=0){let o={x0:i-e/2,x1:i+e/2,z0:t-n/2,z1:t+n/2,h:s,y0:r};al.push(o);for(let a=Math.floor(o.x0+li);a<=Math.floor(o.x1+li);a++)for(let l=Math.floor(o.z0+li);l<=Math.floor(o.z1+li);l++)a<0||l<0||a>=Ye||l>=Ye||($s[a*Ye+l]||($s[a*Ye+l]=[])).push(o)}var si=19.3;function bs(i,t){let e=!1,n=Math.floor(i.x+li),s=Math.floor(i.z+li);for(let r=n-1;r<=n+1;r++)for(let o=s-1;o<=s+1;o++){if(r<0||o<0||r>=Ye||o>=Ye)continue;let a=$s[r*Ye+o];if(a)for(let l of a){if(l.y0>.25)continue;let c=tn(i.x,l.x0,l.x1),h=tn(i.z,l.z0,l.z1),u=i.x-c,f=i.z-h,p=u*u+f*f;if(p<t*t)if(e=!0,p>1e-9){let _=Math.sqrt(p),v=(t-_)/_;i.x+=u*v,i.z+=f*v}else{let _=[i.x-l.x0,l.x1-i.x,i.z-l.z0,l.z1-i.z],v=Math.min(..._);v===_[0]?i.x=l.x0-t:v===_[1]?i.x=l.x1+t:v===_[2]?i.z=l.z0-t:i.z=l.z1+t}}}return i.x>si&&(i.x=si,e=!0),i.x<-si&&(i.x=-si,e=!0),i.z>si&&(i.z=si,e=!0),i.z<-si&&(i.z=-si,e=!0),e}function pl(i,t,e){let n=Math.floor(i+li),s=Math.floor(e+li);if(n<0||s<0||n>=Ye||s>=Ye)return!1;let r=$s[n*Ye+s];if(!r)return!1;for(let o of r)if(i>o.x0&&i<o.x1&&e>o.z0&&e<o.z1&&t<o.h&&t>o.y0)return!0;return!1}function Kh(i,t,e,n,s=.18){let r=Math.hypot(e-i,n-t),o=Math.ceil(r/.25);for(let a=1;a<o;a++){let l=a/o;if(pl(i+(e-i)*l,s,t+(n-t)*l))return!1}return!0}var ci=36,oe=6,vn=ci/oe,Ce=ci+1,Ee=i=>i-ci/2,Es=i=>i*oe-ci/2,Pe=null,di=[],Bi=null,_a=[],Oi=null,ya=document.createElement("canvas");ya.width=ya.height=160;function $h(i){Pe&&(re.remove(Pe),Pe.traverse(g=>{g.isInstancedMesh&&g.dispose()})),Tt=Bh(i),Pe=new he,re.add(Pe),di=[],Bi=null,_a=[],Oi=null,$s=new Array(Ye*Ye),al=[];let t=[],e=[],n=[],s=[],r=[],o=[],a=new Uint8Array(Ce*Ce),l=(g,x)=>g%oe===0||x%oe===0,c=[[2,2],[2,3],[3,2],[3,3]].sort(()=>Tt()-.5),h=(g,x)=>g+","+x,u={};u[h(...c[0])]="pond",u[h(...c[1])]="ferris";let f=0;for(;f<2;){let g=Math.floor(Tt()*vn),x=Math.floor(Tt()*vn);u[h(g,x)]||(u[h(g,x)]="park",f++)}let p=(g,x)=>u[h(Math.floor(g/oe),Math.floor(x/oe))]||"city";e.push([0,-1.4,0,Ce+2,.9,Ce+2,"#f2d59b"]),e.push([0,-.76,0,Ce+2.6,.05,Ce+2.6,"#e9f8ff"]);for(let g=0;g<Ce;g++)for(let x=0;x<Ce;x++){let R=Ee(g),I=Ee(x);if(l(g,x)){if(e.push([R,-.5,I,1,.47,1,fe("#3b3f4a",.03)]),!(g%oe===0&&x%oe===0)){let z=x%oe===0,F=z?g%oe:x%oe;if(F===1||F===oe-1)for(let W=0;W<4;W++){let Y=(W-1.5)*.2;e.push(z?[R,-.03,I+Y,.3,.02,.1,"#f2f2f2"]:[R+Y,-.03,I,.1,.02,.3,"#f2f2f2"])}else e.push(z?[R,-.03,I,.42,.02,.07,"#f5d547"]:[R,-.03,I,.07,.02,.42,"#f5d547"])}continue}let K=p(g,x),T=g%oe,U=x%oe;if(K==="pond"&&T>=2&&T<=4&&U>=2&&U<=4){e.push([R,-.5,I,1,.32,1,"#35b6ea"]),a[g*Ce+x]=2;continue}if(K==="ferris"){e.push([R,-.5,I,1,.5,1,fe((g+x)%2?"#efe3c8":"#e2d3b2",.02)]);continue}e.push([R,-.5,I,1,.5,1,fe(te(P0),.05)])}for(let g=0;g<=vn;g++)for(let x=0;x<=vn;x++){let R=Es(g)+.42,I=Es(x)+.42;t.push([R,0,I,.06,.9,.06,"#3d405b"]),r.push([R,.9,I,.16,.09,.16,"#fff4cf"]),ln(R,I,.08,.08,.9)}function _(g,x,R,I,K=!1){let T=R*.84,U=fe(te(Zs)),B=fe(te(Ni)),z=fe(te(ma),.06);t.push([g,0,x,T,I,T,U]),ln(g,x,T+.1,T+.1,I);for(let Y=.45;Y<I-.3;Y+=.42)(Tt()<.42?n:s).push([g,Y,x,T+.04,.17,T+.04,z]);let F=T/2;for(let[Y,J]of[[F,F],[F,-F],[-F,F],[-F,-F]])t.push([g+Y,0,x+J,.1,I,.1,U]);if(t.push([g,I,x,T+.1,.1,T+.1,B]),t.push([g+T/2+.03,0,x,.03,.3,.22,"#3b2a20"]),K){let Y=T*.7,J=I+.1;for(let st=0;st<3;st++)t.push([g,J,x,Y,.5,Y,st%2?B:U]),(Tt()<.7?n:s).push([g,J+.18,x,Y+.04,.14,Y+.04,z]),J+=.5,Y*=.68;t.push([g,J,x,.07,1.6,.07,"#e0e0e0"]),o.push([g,J+1.6,x,.14,.14,.14,"#ff2d2d"]);return}let W=Tt();if(W<.33)t.push([g,I+.1,x,T*.55,.45,T*.55,U]),t.push([g,I+.55,x,.05,.9,.05,"#e0e0e0"]),o.push([g,I+1.45,x,.1,.1,.1,"#ff2d2d"]);else if(W<.62){let Y=g+T*.2,J=x-T*.2;t.push([Y,I+.1,J,.34,.12,.34,"#5d4037"]),t.push([Y,I+.22,J,.3,.38,.3,"#a1887f"]),t.push([Y,I+.6,J,.34,.08,.34,B]),t.push([g-T*.2,I+.1,x+T*.2,.3,.2,.3,"#9e9e9e"])}else t.push([g,I+.1,x,T*.7,.3,T*.7,B]),t.push([g,I+.4,x,T*.4,.3,T*.4,B]),R>=2&&o.push([g,I+.7,x,.12,.5,.12,te(Ui)]);Tt()<.3&&o.push([g+T/2+.04,I*.7,x,.04,Math.min(.9,I*.2),T*.45,te(Ui)])}function v(g,x,R){let I=R*.74,K=.55+Tt()*.35*R,T=fe(te(Zs)),U=fe(te(Ni)),B=fe(te(ma),.06);t.push([g,0,x,I,K,I,T]),ln(g,x,I+.04,I+.04,K+.4),(Tt()<.5?n:s).push([g,K*.45,x,I+.03,.14,I*.5,B]),(Tt()<.5?n:s).push([g,K*.45,x,I*.5,.14,I+.03,B]),t.push([g+I/2+.01,0,x+I*.22,.04,.3,.14,"#5b3a29"]);let z=I+.12,F=K;for(let W=0;W<3;W++)t.push([g,F,x,z,.14,z,U]),F+=.14,z-=I*.28;Tt()<.6&&t.push([g+I*.25,K,x-I*.2,.12,.55,.12,"#8d6e63"])}function m(g,x,R){let I=R*.78,K=.62+Tt()*.4,T=fe(te(Zs)),U=fe(te(Ni)),B=fe(te(ma),.06);t.push([g,0,x,I,K,I,T]),ln(g,x,I+.04,I+.04,K+.3),t.push([g,K,x,I+.06,.06,I+.06,"#f8f9fa"]);let[z,F]=te([[1,0],[-1,0],[0,1],[0,-1]]);z?(n.push([g+z*(I/2+.005),.08,x,.02,.34,I*.72,B]),t.push([g+z*(I/2+.12),.46,x,.26,.06,I*.85,U]),o.push([g+z*I*.3,K+.06,x,.06,.22,I*.7,te(Ui)])):(n.push([g,.08,x+F*(I/2+.005),I*.72,.34,.02,B]),t.push([g,.46,x+F*(I/2+.12),I*.85,.06,.26,U]),o.push([g,K+.06,x+F*I*.3,I*.7,.22,.06,te(Ui)]))}function d(g,x,R,I){let K=fe(te(Zs)),T=fe(te(Ni)),U=fe(te(ma),.06);ln(g,x,R*.9,R*.9,I+.3);let B=[[.5,.88],[.3,.66],[.2,.46]],z=0;B.forEach(([F,W],Y)=>{let J=I*F,st=R*W;t.push([g,z,x,st,J,st,Y===2?T:K]);for(let H=z+.2;H<z+J-.2;H+=.4)(Tt()<.5?n:s).push([g,H,x,st+.04,.15,st+.04,U]);z+=J,t.push([g,z,x,st+.08,.08,st+.08,T]),z+=.08})}function E(g,x,R){let I=fe(te(Ah),.06);t.push([g,0,x,.12*R,.32*R,.12*R,"#7a4a2a"]),ln(g,x,.14*R,.14*R,.3*R),ln(g,x,.6*R,.6*R,1.05*R,.3*R),Tt()<.35?(t.push([g,.25*R,x,.56*R,.3*R,.56*R,I]),t.push([g,.55*R,x,.4*R,.28*R,.4*R,I]),t.push([g,.83*R,x,.24*R,.26*R,.24*R,I])):(t.push([g,.28*R,x,.6*R,.48*R,.6*R,I]),t.push([g+.05*R,.76*R,x-.05*R,.38*R,.24*R,.38*R,fe(te(Ah),.06)]))}function M(g,x){let R=(Tt()-.5)*.16;t.push([g,-.5,x,.11,.45,.11,"#9c6b3c"]),t.push([g+R,-.05,x,.1,.45,.1,"#a87543"]),t.push([g+R*2,.4,x,.09,.42,.09,"#9c6b3c"]),ln(g,x,.12,.12,.5);let I=g+R*2,K=Tt()*Math.PI;t.push([I,.82,x,1.1,.06,.22,fe("#2e9e44"),K]),t.push([I,.82,x,.22,.06,1.1,fe("#38a84d"),K]),t.push([I,.72,x,.13,.12,.13,"#6b4423"])}let P=ci/2;for(let g=0;g<vn;g++)for(let x=0;x<vn;x++){let R=u[h(g,x)]||"city",I=g*oe+1,K=x*oe+1;if(R==="city")for(let T=0;T<oe-1;T++)for(let U=0;U<oe-1;U++){let B=I+T,z=K+U;if(a[B*Ce+z])continue;let F=Tt()<.16?3:Tt()<.5?2:1,W=H=>{if(T+H>oe-1||U+H>oe-1)return!1;for(let $=0;$<H;$++)for(let ut=0;ut<H;ut++)if(a[(B+$)*Ce+z+ut])return!1;return!0};for(;F>1&&!W(F);)F--;for(let H=0;H<F;H++)for(let $=0;$<F;$++)a[(B+H)*Ce+z+$]=1;let Y=Ee(B)+(F-1)/2,J=Ee(z)+(F-1)/2,st=Math.pow(Math.max(0,1-Math.hypot(Y,J)/(P*1.05)),1.2);if(F===3)st>.62?_(Y,J,F,6+Tt()*4,!0):Tt()<.5+st?_(Y,J,F,2.6+Tt()*6*st+Tt()):d(Y,J,F,2.2+Tt()*1.5);else if(F===2)Tt()<.25+.55*st?_(Y,J,F,1.6+Tt()*4.5*st+Tt()):Tt()<.5?v(Y,J,F):m(Y,J,F);else{let H=Tt();H<.14?E(Y+(Tt()-.5)*.3,J+(Tt()-.5)*.3,.8+Tt()*.4):st>.55&&H<.4?_(Y,J,1,1.5+Tt()*2):H<.6?v(Y,J,1):m(Y,J,1)}}else if(R==="park"||R==="pond"){for(let T=0;T<oe-1;T++)for(let U=0;U<oe-1;U++){let B=I+T,z=K+U;a[B*Ce+z]!==2&&(Tt()<(R==="park"?.5:.42)?E(Ee(B)+(Tt()-.5)*.4,Ee(z)+(Tt()-.5)*.4,.75+Tt()*.55):Tt()<.25&&(t.push([Ee(B),0,Ee(z),.5,.12,.18,"#8d5a3b"]),ln(Ee(B),Ee(z),.5,.18,.12)))}if(R==="pond"){let T=Ee(I+2),U=Ee(K+2);ln(T,U,3,3,.35),t.push([T,-.18,U,.7,.3,.7,"#ece6da"]),t.push([T,.12,U,.14,.45,.14,"#ece6da"]),t.push([T,.55,U,.4,.06,.4,"#ece6da"]),Oi={x:T,z:U};for(let B=0;B<18;B++){let z=Bt(Jh,.07,.07,.07,T,.5,U,!1);z.userData={a:B/18*Math.PI*2,p:Tt()},Pe.add(z),_a.push(z)}for(let B=0;B<3;B++){let z=Tt()*6.28,F=.75+Tt()*.4,W=new he;W.add(Bt(jt("#ffffff"),.2,.12,.13,0,.06,0)),W.add(Bt(jt("#ffd60a"),.07,.1,.08,.1,.15,0)),W.position.set(T,-.2,U),W.userData={a:z,rr:F,sp:.2+Tt()*.25},Pe.add(W),_a.push(W)}}}else if(R==="ferris"){let T=Ee(I+2),U=Ee(K+2);Bi=V0(T,U),Pe.add(Bi.root),ln(T,U,2.4,1,3);for(let[B,z]of[[-1.9,-1.9],[1.9,1.9]]){let F=T+B,W=U+z,Y=fe(te(Ni));t.push([F,0,W,.6,.5,.6,fe(te(Zs))]),t.push([F,.5,W,.8,.06,.8,Y]),o.push([F,.56,W,.5,.14,.06,te(Ui)]),ln(F,W,.62,.62,.6)}for(let[B,z]of[[-2,1.9],[1.9,-2]])E(T+B,U+z,.9)}}let D=ci/2+1;for(let g=0;g<26;g++){let x=g%4,R=(Tt()*2-1)*(ci/2),I=D+(Tt()-.5)*.4,[K,T]=x===0?[R,I]:x===1?[I,R]:x===2?[R,-I]:[-I,R];x===1&&Math.abs(R-5)<1.2||M(K,T)}for(let g=0;g<8;g++){let x=g%4,R=(Tt()*2-1)*(ci/2-2),I=D+.1,[K,T]=x===0?[R,I]:x===1?[I,R]:x===2?[R,-I]:[-I,R];x===1&&Math.abs(R-5)<1.5||(t.push([K,-.5,T,.05,.7,.05,"#ddd"]),t.push([K,.2,T,.6,.06,.6,te(Ui)]),t.push([K+.35,-.5,T,.25,.04,.45,"#ffffff"]))}for(let g=D-.4;g<D+4.5;g+=.32)t.push([g,-.62,5,.28,.06,.9,fe("#a47148",.06)]);for(let g=D+.6;g<D+4.6;g+=1.4)for(let x of[4.55,5.45])t.push([g,-1.1,x,.1,.65,.1,"#6d4c2f"]);Pe.add(xs(e,U0,!1,!0)),Pe.add(xs(t,D0,!0,!0)),Pe.add(xs(n,Gh,!1,!0)),Pe.add(xs(s,N0,!1,!0)),Pe.add(xs(r,Wh,!1,!1)),Pe.add(xs(o,Xh,!1,!1));for(let g=0;g<30;g++){let x=Tt()<.35,R=x?z0(te(nl)):B0(te(nl)),I={g:R,moto:x,kx:Math.floor(Tt()*(vn+1)),kz:Math.floor(Tt()*(vn+1)),s:Tt()*oe,sp:(x?1.1:1.5)+Tt()*1,dx:1,dz:0},K=[[1,0],[-1,0],[0,1],[0,-1]].filter(([T,U])=>jh(I.kx+T,I.kz+U));[I.dx,I.dz]=K[Math.floor(Tt()*K.length)],Qh(I,!0),Pe.add(R),di.push(I)}Pt("pill").textContent="Semilla #"+i;let C=ya.getContext("2d"),A=160/40,Z=g=>(g+20)*A;C.fillStyle="#1d6fa3",C.fillRect(0,0,160,160),C.fillStyle="#e7cf93",C.fillRect(Z(-19.5),Z(-19.5),39*A,39*A);for(let g=0;g<Ce;g++)for(let x=0;x<Ce;x++){let R=l(g,x);C.fillStyle=R?"#4b4f5a":a[g*Ce+x]===2?"#35b6ea":"#5fbf45",C.fillRect(Z(Ee(g)-.5),Z(Ee(x)-.5),A+.5,A+.5)}C.fillStyle="#2c2f38";for(let g of al)g.h>.5&&g.y0===0&&g.x1-g.x0>.4&&C.fillRect(Z(g.x0),Z(g.z0),(g.x1-g.x0)*A,(g.z1-g.z0)*A)}var jh=(i,t)=>i>=0&&i<=vn&&t>=0&&t<=vn;function B0(i){let t=new he;t.add(Bt(jt(i),.52,.16,.28,0,.11,0)),t.add(Bt(qh,.28,.13,.24,-.03,.255,0));for(let e of[-.08,.08])t.add(Bt(fl,.03,.05,.06,.265,.12,e,!1)),t.add(Bt(dl,.03,.05,.06,-.265,.12,e,!1));for(let[e,n]of[[.15,.145],[-.15,.145],[.15,-.145],[-.15,-.145]])t.add(Bt(jt("#151515"),.1,.1,.03,e,.05,n,!1));return t}function z0(i){let t=new he;t.add(Bt(jt(i),.36,.14,.22,0,.1,0)),t.add(Bt(jt("#222222"),.14,.12,.06,.2,.12,0));for(let[e,n]of[[-.14,-.1],[-.14,.1],[.12,-.1],[.12,.1]])t.add(Bt(jt("#333333"),.025,.2,.025,e,.26,n));return t.add(Bt(jt(te(Ni)),.34,.03,.26,-.01,.37,0)),t.add(Bt(fl,.03,.05,.05,.28,.14,0,!1)),t.add(Bt(dl,.03,.04,.12,-.19,.12,0,!1)),t}function Qh(i,t){let e=i.dx,n=i.dz,s=Es(i.kx)+e*i.s+-n*.21,r=Es(i.kz)+n*i.s+e*.21,o=Math.atan2(-n,e);if(t){i.g.position.set(s,0,r),i.g.rotation.y=o;return}i.tx=s,i.tz=r,i.ta=o}function k0(i){let t=Math.cos(i.g.rotation.y),e=-Math.sin(i.g.rotation.y),n=i.g.position,s=(r,o)=>{let a=r-n.x,l=o-n.z,c=a*t+l*e,h=Math.abs(a*e-l*t);return c>0&&c<.85&&h<.3};if(pt.active){let r=pi();if(s(r.x,r.z))return!0;for(let o of Xn)if(s(o.g.position.x,o.g.position.z))return!0;for(let o of Ge)if(s(o.g.position.x,o.g.position.z))return!0}return!1}function H0(i){let t=1-Math.exp(-i*10);for(let e of di){for(k0(e)||(e.s+=e.sp*i);e.s>=oe;){e.s-=oe,e.kx+=e.dx,e.kz+=e.dz;let{dx:s,dz:r}=e,o=[[s,r],[s,r],[-r,s],[r,-s]].filter(([a,l])=>jh(e.kx+a,e.kz+l));o.length||(o=[[-s,-r]]),[e.dx,e.dz]=o[Math.floor(Math.random()*o.length)]}Qh(e,!1);let n=e.g.position;n.x+=(e.tx-n.x)*t,n.z+=(e.tz-n.z)*t,e.g.rotation.y+=Ss(e.ta-e.g.rotation.y)*t}}function V0(i,t){let e=new he;e.position.set(i,0,t);let n=2.6,s=2,r=new he;r.position.y=n,e.add(r);let o=jt("#f4f4f4");for(let h of[-.22,.22]){for(let u=0;u<28;u++){let f=u/28*Math.PI*2,p=Bt(o,.48,.07,.07,Math.cos(f)*s,Math.sin(f)*s,h);p.rotation.z=f+Math.PI/2,r.add(p)}for(let u=0;u<8;u++){let f=u/8*Math.PI*2,p=Bt(o,s,.04,.04,Math.cos(f)*s/2,Math.sin(f)*s/2,h);p.rotation.z=f,r.add(p)}}for(let h=0;h<24;h++){let u=h/24*Math.PI*2;r.add(Bt(rl[h%rl.length],.08,.08,.5,Math.cos(u)*(s+.07),Math.sin(u)*(s+.07),0,!1))}r.add(Bt(jt("#9aa0a6"),.3,.3,.6,0,0,0));let a=[];for(let h=0;h<8;h++){let u=h/8*Math.PI*2+Math.PI/8,f=new he;f.position.set(Math.cos(u)*s,Math.sin(u)*s,0),f.add(Bt(jt(te(nl)),.3,.26,.3,0,-.2,0)),f.add(Bt(jt("#dddddd"),.34,.04,.34,0,-.05,0)),r.add(f),a.push(f)}let l=Math.hypot(1.1,n),c=Math.atan(1.1/n);for(let h of[-.4,.4])for(let u of[-1,1]){let f=Bt(jt("#e63946"),.12,l,.12,u*.55,n/2,h);f.rotation.z=u*c,e.add(f)}return{root:e,wheel:r,cabins:a}}var bn=new he;bn.add(Bt(jt("#ffd60a"),1.3,.28,.28));bn.add(Bt(jt("#e63946"),.34,.06,1.9,.1,0,0));bn.add(Bt(jt("#e63946"),.22,.32,.05,-.58,.22,0));bn.add(Bt(jt("#e63946"),.18,.05,.72,-.58,.05,0));bn.add(Bt(qh,.3,.14,.22,.22,.2,0));var tu=Bt(jt("#2b2d42"),.04,.62,.08,.68,0,0);bn.add(tu);bn.rotation.order="YXZ";re.add(bn);var eu=[];for(let i=0;i<7;i++){let t=new he,e=3+Math.floor(Math.random()*3);for(let n=0;n<e;n++){let s=1.2+Math.random()*1.6;t.add(Bt(Yh,s,.6+Math.random()*.5,s*.8,(n-e/2)*1.1,Math.random()*.4,(Math.random()-.5)*1.2))}t.position.set(-40+i*12,10+Math.random()*3,-20+Math.random()*40),t.userData.sp=.5+Math.random()*.5,re.add(t),eu.push(t)}var nu=[];for(let i=0;i<4;i++){let t=new he;t.add(Bt(jt("#8d5524"),.95,.2,.32,0,.05,0)),t.add(Bt(jt(["#06d6a0","#ef476f","#118ab2","#ffd60a"][i]),.97,.05,.34,0,.22,0)),t.add(Bt(jt("#ffffff"),.35,.24,.26,-.12,.27,0)),t.add(Bt(jt(["#e63946","#3a86ff","#f77f00","#7b2cbf"][i]),.42,.04,.3,-.12,.51,0)),t.userData={r:23.5+i*.8,a:i*1.6,sp:(i%2?1:-1)*(.05+i*.012)},re.add(t),nu.push(t)}function ml(i){let t=new he,e=(l,c,h,u,f,p,_)=>Bt(jt(l),c,h,u,f,p,_),n=new he;n.position.set(0,.1,-.032),n.add(e(i.pants,.045,.1,.045,0,-.05,0)),n.add(e("#1b1b1b",.06,.02,.05,.01,-.095,0));let s=new he;s.position.set(0,.1,.032),s.add(e(i.pants,.045,.1,.045,0,-.05,0)),s.add(e("#1b1b1b",.06,.02,.05,.01,-.095,0)),t.add(n,s),t.add(e(i.shirt,.07,.11,.13,0,.155,0));let r=new he;r.position.set(0,.2,-.085),r.add(e(i.shirt,.04,.07,.04,0,-.03,0)),r.add(e(i.skin,.035,.035,.035,0,-.08,0));let o=new he;o.position.set(0,.2,.085),o.add(e(i.shirt,.04,.07,.04,0,-.03,0)),o.add(e(i.skin,.035,.035,.035,0,-.08,0)),t.add(r,o),t.add(e(i.skin,.08,.08,.08,0,.25,0)),t.add(e("#111111",.005,.015,.014,.041,.26,-.02)),t.add(e("#111111",.005,.015,.014,.041,.26,.02)),i.hat?(t.add(e(i.hat,.088,.03,.088,0,.295,0)),t.add(e(i.hat,.05,.012,.08,.055,.284,0))):t.add(e(i.hair||"#2b1b12",.085,.025,.085,-.002,.295,0)),i.mask&&(t.add(e(i.mask,.084,.032,.084,0,.228,0)),t.add(e("#111111",.088,.03,.088,0,.298,0)));let a=null;return i.gun&&(a=e("#222222",.028,.075,.022,.012,-.1,0),o.add(a)),{g:t,legL:n,legR:s,armL:r,armR:o,gun:a}}function gl(i,t,e,n){let s=Math.sin(e)*Math.min(1,t*1.4)*.8;i.legL.rotation.z=s,i.legR.rotation.z=-s,i.armL.rotation.z=-s*.7,i.armR.rotation.z=n?Math.PI/2:s*.7}var pt={active:!1,started:!1,hp:100,money:0,kills:0,lastHurt:0,wave:0,weapon:0,cd:0,time:0,dead:!1},js=[{name:"Pistola",cd:.3,dmg:1,spread:.02,auto:!1,pellets:1,life:.9,snd:600},{name:"Metralleta",cd:.085,dmg:.45,spread:.06,auto:!0,pellets:1,life:.8,snd:900},{name:"Escopeta",cd:.75,dmg:.6,spread:.16,auto:!1,pellets:6,life:.35,snd:250}],ht={pos:new N,vy:0,y:0,facing:0,walk:0,aimT:0,model:null,car:null},Ge=[],Ts=[],Ma=[],xa=[],hi=[],Xn=[],Pn=Math.PI/4,Wn=.32,Sa=0,_l=Bt(F0,.07,.07,.07,0,-5,0,!1);re.add(_l);var va=0;ht.model=ml({shirt:"#06b6d4",pants:"#1f2937",skin:"#e0ac69",hat:"#f59e0b",gun:!0});ht.model.g.visible=!1;re.add(ht.model.g);function pi(){return ht.car?ht.car.g.position:ht.pos}var ne=null,ol=null,vs=null,Sn=null;function G0(){if(!ne)try{ne=new(window.AudioContext||window.webkitAudioContext),ol=ne.createBuffer(1,ne.sampleRate*.5,ne.sampleRate);let i=ol.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1;vs=ne.createOscillator(),vs.type="sawtooth",vs.frequency.value=50;let t=ne.createBiquadFilter();t.type="lowpass",t.frequency.value=400,Sn=ne.createGain(),Sn.gain.value=0,vs.connect(t).connect(Sn).connect(ne.destination),vs.start()}catch{ne=null}}function Qs(i,t,e){if(!ne||!Fi)return;let n=ne.createBufferSource();n.buffer=ol;let s=ne.createBiquadFilter();s.type="bandpass",s.frequency.value=i,s.Q.value=.8;let r=ne.createGain(),o=ne.currentTime;r.gain.setValueAtTime(e,o),r.gain.exponentialRampToValueAtTime(.001,o+t),n.connect(s).connect(r).connect(ne.destination),n.start(o),n.stop(o+t)}function Cn(i,t,e,n="square",s=0){if(!ne||!Fi)return;let r=ne.createOscillator();r.type=n;let o=ne.createGain(),a=ne.currentTime;r.frequency.setValueAtTime(i,a),s&&r.frequency.exponentialRampToValueAtTime(i*s,a+t),o.gain.setValueAtTime(e,a),o.gain.exponentialRampToValueAtTime(.001,a+t),r.connect(o).connect(ne.destination),r.start(a),r.stop(a+t)}function tr(i,t,e,n,s,r=2){for(let o=0;o<s;o++){let a=xa.find(l=>!l.alive);if(!a){if(xa.length>240)return;a={m:Bt(jt("#ffffff"),1,1,1,0,0,0,!1)},re.add(a.m),xa.push(a)}a.alive=!0,a.m.visible=!0,a.m.material=jt(n[o%n.length]),a.s=.022+Math.random()*.03,a.m.scale.setScalar(a.s),a.m.position.set(i,t,e),a.vx=(Math.random()-.5)*r,a.vy=Math.random()*r*.7+.4,a.vz=(Math.random()-.5)*r,a.life=a.max=.5+Math.random()*.5}}function W0(i){for(let t of xa){if(!t.alive)continue;t.vy-=5*i;let e=t.m.position;e.x+=t.vx*i,e.y+=t.vy*i,e.z+=t.vz*i,e.y<.01&&(e.y=.01,t.vy*=-.35,t.vx*=.6,t.vz*=.6),t.life-=i,t.m.scale.setScalar(t.s*Math.max(0,t.life/t.max)),t.m.rotation.x+=i*6,t.life<=0&&(t.alive=!1,t.m.visible=!1)}}function iu(i,t,e,n,s,r,o,a,l){let c=Ma.find(u=>!u.alive);c||(c={m:Bt(Rh,.025,.025,.11,0,0,0,!1)},re.add(c.m),Ma.push(c)),c.alive=!0,c.m.visible=!0,c.m.material=o==="p"?Rh:O0;let h=o==="p"?18:9;c.x=i,c.y=t,c.z=e,c.vx=n*h,c.vy=s*h,c.vz=r*h,c.owner=o,c.dmg=a,c.life=l,c.m.position.set(i,t,e),c.m.lookAt(i+n,t+s,e+r)}function Ph(i,t,e,n,s,r,o,a,l){let c=n-i,h=s-t,u=r-e,f=o-i,p=a-t,_=l-e,v=c*c+h*h+u*u,m=v?(f*c+p*h+_*u)/v:0;m=tn(m,0,1);let d=i+c*m-o,E=t+h*m-a,M=e+u*m-l;return Math.sqrt(d*d+E*E+M*M)}function X0(i){for(let t of Ma){if(!t.alive)continue;let e=t.x+t.vx*i,n=t.y+t.vy*i,s=t.z+t.vz*i,r=!1;if(t.owner==="p")for(let o of Ge){if(o.dead)continue;let a=o.g.position;if(Ph(t.x,t.y,t.z,e,n,s,a.x,.16,a.z)<.11){ru(o,t.dmg,t.vx,t.vz),r=!0;break}}else if(!pt.dead){let o=pi(),a=ht.car?.26:.11;Ph(t.x,t.y,t.z,e,n,s,o.x,.16,o.z)<a&&(K0(ht.car?t.dmg*.4:t.dmg),r=!0)}if(!r&&(pl(e,n,s)||n<0)&&(tr(e,Math.max(n,.02),s,["#ffd166","#ffffff","#adb5bd"],4,1.2),r=!0),t.life-=i,t.life<=0&&(r=!0),r){t.alive=!1,t.m.visible=!1;continue}t.x=e,t.y=n,t.z=s,t.m.position.set(e,n,s)}}function q0(i,t){let e=Math.random();if(e>.8)return;let n=e<.18,s=new he;n?(s.add(Bt(jt("#ffffff"),.14,.14,.14)),s.add(Bt(jt("#ef233c"),.15,.04,.05)),s.add(Bt(jt("#ef233c"),.15,.05,.04)),s.add(Bt(jt("#ef233c"),.04,.05,.15))):(s.add(Bt(jt("#2ecc71"),.16,.08,.1)),s.add(Bt(jt("#a3f7bf"),.06,.085,.06))),s.position.set(i,.15,t),re.add(s),hi.push({g:s,health:n,t:0})}var Te={},Ln=!1,er=!1,Lh=!1,Ms={x:0,y:0};function Y0(){let i=(Te.KeyD||Te.ArrowRight?1:0)-(Te.KeyA||Te.ArrowLeft?1:0)+Ms.x,t=(Te.KeyW||Te.ArrowUp?1:0)-(Te.KeyS||Te.ArrowDown?1:0)-Ms.y;return{x:tn(i,-1,1),y:tn(t,-1,1)}}function xl(){return{x:-Math.sin(Pn),z:-Math.cos(Pn)}}function Z0(i,t){let e=xl(),n=null,s=.45;for(let r of Ge){if(r.dead)continue;let o=r.g.position,a=o.x-i,l=o.z-t,c=Math.hypot(a,l);if(c<.05||c>16)continue;let h=Math.acos(tn((a*e.x+l*e.z)/c,-1,1));h<s&&Kh(i,t,o.x,o.z)&&(s=h,n={x:a/c,z:l/c,d:c})}return n||{x:e.x,z:e.z,d:0}}function J0(i){pt.cd-=i;let t=js[pt.weapon],e=Ln&&(t.auto||!Lh)||er;if(Lh=Ln,er=!1,!e||pt.cd>0||pt.dead)return;pt.cd=t.cd;let n,s,r;if(ht.car){let a=ht.car.g.position;n=a.x,s=.3,r=a.z}else n=ht.pos.x,s=ht.y+.19,r=ht.pos.z;let o=Z0(n,r);ht.car?(n+=o.x*.3,r+=o.z*.3):(ht.facing=Math.atan2(-o.z,o.x),ht.aimT=.6,n+=o.x*.14,r+=o.z*.14);for(let a=0;a<t.pellets;a++){let l=Math.atan2(o.z,o.x)+(Math.random()-.5)*t.spread*2;iu(n,s,r,Math.cos(l),(Math.random()-.5)*t.spread*.4,Math.sin(l),"p",t.dmg,t.life)}_l.position.set(n,s,r),va=.05,Qs(t.snd,.13,.45),Ze(8),t_(n,r,9)}function K0(i){pt.dead||(pt.hp-=i,pt.lastHurt=pt.time,Pt("vignette").style.opacity="0.55",setTimeout(()=>Pt("vignette").style.opacity="0",140),Cn(140,.15,.25,"sawtooth",.5),Ze(30),pt.hp<=0&&(pt.hp=0,$0()))}function $0(){pt.dead=!0;let i=pi();tr(i.x,.2,i.z,["#06b6d4","#f59e0b","#1f2937"],24,2.5),ht.model.g.visible=!1,document.pointerLockElement&&document.exitPointerLock(),Pt("deadStats").textContent=`Bajas ${pt.kills} \xB7 $${pt.money}`,setTimeout(()=>Pt("dead").classList.remove("hidden"),700),Cn(300,.8,.3,"triangle",.2)}function su(){if(pt.dead)return;if(ht.car){let s=ht.car,r=s.g.position,o=s.g.rotation.y,a=Math.sin(o)*.38,l=Math.cos(o)*.38;ht.pos.set(r.x-a,0,r.z-l),bs(ht.pos,.08),s.speed=0,Xn.push(s),ht.car=null,ht.model.g.visible=!0,Cn(500,.08,.15);return}let i=null,t=.75,e=null;for(let s of[di,Xn])for(let r of s){let o=r.g.position.distanceTo(ht.pos);o<t&&(t=o,i=r,e=s)}if(!i)return;e.splice(e.indexOf(i),1),i.speed=0,ht.car=i,ht.model.g.visible=!1,Pn=Math.atan2(-Math.cos(i.g.rotation.y),Math.sin(i.g.rotation.y)),Cn(380,.1,.15),Ze(15);let n=i.g.position;au(n.x+.3,n.z+.3,!0)}function j0(i){let t=Y0();if(ht.car){let u=ht.car,f=u.g,p=u.moto,_=p?5:6.5,v=p?5:6;t.y>0?u.speed+=v*t.y*i*(u.speed<0?2:1):t.y<0?u.speed+=v*t.y*i*(u.speed>0?2:.7):u.speed*=1-1.4*i,Te.Space&&(u.speed*=1-4*i),u.speed=tn(u.speed,-2.5,_);let m=2.4*tn(u.speed/1.6,-1,1);f.rotation.y-=t.x*m*i;let d=Math.cos(f.rotation.y),E=-Math.sin(f.rotation.y),M={x:f.position.x,z:f.position.z};f.position.x+=d*u.speed*i,f.position.z+=E*u.speed*i,bs(f.position,.2)&&Math.abs(u.speed)>1&&(Qs(180,.2,.3),Ze(25),u.speed*=-.3);for(let P of[di,Xn])for(let D of P){let C=f.position.x-D.g.position.x,A=f.position.z-D.g.position.z,Z=Math.hypot(C,A);Z<.42&&Z>.001&&(f.position.x+=C/Z*(.42-Z),f.position.z+=A/Z*(.42-Z),Math.abs(u.speed)>1.5&&(Qs(200,.2,.35),Ze(20),tr(D.g.position.x,.2,D.g.position.z,["#adb5bd","#ffd166"],5,1.5)),u.speed*=.4)}for(let P of Ge){if(P.dead)continue;let D=P.g.position;Math.hypot(D.x-f.position.x,D.z-f.position.z)<.3&&Math.abs(u.speed)>2.2&&ru(P,99,d*3,E*3)}for(let P of Ts){let D=P.g.position,C=D.x-f.position.x,A=D.z-f.position.z,Z=Math.hypot(C,A);Z<.32&&Z>.001&&(D.x+=C/Z*.3,D.z+=A/Z*.3,P.flee=3)}if(ht.pos.set(f.position.x,0,f.position.z),Sn&&Fi&&(Sn.gain.setTargetAtTime(.05,ne.currentTime,.1),vs.frequency.setTargetAtTime(40+Math.abs(u.speed)*18,ne.currentTime,.1)),Sa<pt.time-1.2&&Math.abs(u.speed)>.5){let P=Math.atan2(-d,-E)+(u.speed<0?Math.PI:0);Pn+=Ss(P-Pn)*(1-Math.exp(-i*3))}return}if(Sn&&Sn.gain.setTargetAtTime(0,ne.currentTime,.1),pt.dead)return;let e=xl(),n=-e.z,s=e.x,r=e.x*t.y+n*t.x,o=e.z*t.y+s*t.x,a=Math.min(1,Math.hypot(r,o)),c=(Te.ShiftLeft||Te.ShiftRight||a>.95&&ui?1.7:1.05)*a;if(a>.05){let u=Math.hypot(r,o);r/=u,o/=u,ht.pos.x+=r*c*i,ht.pos.z+=o*c*i,ht.aimT<=0&&(ht.facing+=Ss(Math.atan2(-o,r)-ht.facing)*(1-Math.exp(-i*14)))}bs(ht.pos,.08);for(let u of[di,Xn])for(let f of u){let p=ht.pos.x-f.g.position.x,_=ht.pos.z-f.g.position.z,v=Math.hypot(p,_);v<.3&&v>.001&&(ht.pos.x+=p/v*(.3-v),ht.pos.z+=_/v*(.3-v))}Te.Space&&ht.y<=.001&&(ht.vy=1.6,Cn(520,.08,.08,"square",1.6)),ht.vy-=5*i,ht.y=Math.max(0,ht.y+ht.vy*i),ht.y===0&&(ht.vy=Math.max(0,ht.vy)),ht.aimT-=i,ht.walk+=c*i*14;let h=ht.model;h.g.position.set(ht.pos.x,ht.y,ht.pos.z),h.g.rotation.y+=Ss(ht.facing-h.g.rotation.y)*(1-Math.exp(-i*18)),gl(h,a>.05?c:0,ht.walk,ht.aimT>0||Ln);for(let u=hi.length-1;u>=0;u--){let f=hi[u],p=f.g.position;if(Math.hypot(p.x-ht.pos.x,p.z-ht.pos.z)<.3){if(f.health)pt.hp=Math.min(100,pt.hp+35),Cn(660,.18,.2,"triangle",1.5);else{let _=50+Math.floor(Math.random()*11)*10;pt.money+=_,Cn(880,.08,.18,"square"),setTimeout(()=>Cn(1320,.1,.18,"square"),70)}re.remove(f.g),hi.splice(u,1),Ze(10)}}}function Q0(){let i=pi();for(let t=0;t<30;t++){let e=Math.floor(Math.random()*(vn+1)),n=Math.floor(Math.random()*Ce),[s,r]=Math.random()<.5?[Ee(n),Es(e)]:[Es(e),Ee(n)],o=Math.hypot(s-i.x,r-i.z);if(o<9||o>24)continue;let a=ml({shirt:ai(["#2b2d42","#3c096c","#370617","#1b263b","#283618"]),pants:"#14213d",skin:ai(zh),mask:ai(["#c1121f","#d00000","#111111"]),gun:!0});a.g.position.set(s,0,r),re.add(a.g),Ge.push({...a,hp:3,cd:1+Math.random(),side:Math.random()<.5?1:-1,walk:Math.random()*6,alert:!1,wp:null,stuck:0,last:{x:s,z:r},detour:0,dead:!1,aim:0});return}}function ru(i,t,e,n){i.hp-=t,i.alert=!0;let s=i.g.position;tr(s.x,.18,s.z,["#ffffff","#ffd166"],3,1),Pt("cross").classList.add("hit"),setTimeout(()=>Pt("cross").classList.remove("hit"),100),Cn(1200,.05,.12,"square"),i.hp<=0&&!i.dead&&(i.dead=!0,pt.kills++,pt.money+=100,tr(s.x,.15,s.z,["#2b2d42","#c1121f","#14213d","#e0ac69"],22,2.6),Qs(120,.35,.5),q0(s.x,s.z),re.remove(i.g),pt.kills%5===0&&vl(`\xA1Racha de ${pt.kills}!`))}function t_(i,t,e){for(let n of Ge){let s=n.g.position;Math.hypot(s.x-i,s.z-t)<e&&(n.alert=!0)}for(let n of Ts){let s=n.g.position;Math.hypot(s.x-i,s.z-t)<e&&(n.flee=3,n.fx=s.x-i,n.fz=s.z-t)}}function e_(i){let t=pi();for(let e of Ge){if(e.dead)continue;let n=e.g.position,s=t.x-n.x,r=t.z-n.z,o=Math.hypot(s,r)||.001,a=0,l=0,c=0,h=!1;if(!pt.dead&&(e.alert||o<12)){e.alert=!0;let p=o<11&&Kh(n.x,n.z,t.x,t.z);if(e.detour>0?(e.detour-=i,a=-r/o*e.side,l=s/o*e.side,c=.9):p&&o<4?(a=-r/o*e.side,l=s/o*e.side,c=.55):(a=s/o,l=r/o,c=.85),p&&(h=!0,e.cd-=i,e.cd<=0)){e.cd=1+Math.random()*.9;let _=Math.atan2(r,s)+(Math.random()-.5)*.16;iu(n.x+Math.cos(_)*.14,.19,n.z+Math.sin(_)*.14,Math.cos(_),0,Math.sin(_),"e",7,1.4),Qs(500,.1,.18)}}else{(!e.wp||Math.hypot(e.wp.x-n.x,e.wp.z-n.z)<.3)&&(e.wp={x:n.x+(Math.random()-.5)*6,z:n.z+(Math.random()-.5)*6});let p=e.wp.x-n.x,_=e.wp.z-n.z,v=Math.hypot(p,_)||1;a=p/v,l=_/v,c=.4}for(let p of Ge){if(p===e||p.dead)continue;let _=n.x-p.g.position.x,v=n.z-p.g.position.z,m=Math.hypot(_,v);m<.25&&m>.001&&(a+=_/m*.8,l+=v/m*.8)}let u=Math.hypot(a,l)||1;a/=u,l/=u,n.x+=a*c*i,n.z+=l*c*i,bs(n,.08)&&e.wp&&(e.wp=null),e.stuck+=i,e.stuck>.8&&(Math.hypot(n.x-e.last.x,n.z-e.last.z)<c*.25&&c>.5&&(e.detour=1.1,e.side*=-1),e.stuck=0,e.last={x:n.x,z:n.z});let f=h?Math.atan2(-r,s):Math.atan2(-l,a);e.g.rotation.y+=Ss(f-e.g.rotation.y)*(1-Math.exp(-i*10)),e.walk+=c*i*14,gl(e,c,e.walk,h)}Ge=Ge.filter(e=>!e.dead)}function au(i,t,e=!1){let n=ml({shirt:ai(L0),pants:ai(["#264653","#3d405b","#6d597a","#4a4e69","#bc6c25"]),skin:ai(zh),hair:ai(["#2b1b12","#111111","#6b4226","#d4a373"]),hat:Math.random()<.25?ai(Ni):null});n.g.position.set(i,0,t),re.add(n.g);let s={...n,wp:null,walk:Math.random()*6,flee:e?3:0,fx:1,fz:0};return Ts.push(s),s}function n_(i){for(let t of Ts){let e=t.g.position,n,s,r;if(t.flee>0){t.flee-=i;let o=Math.hypot(t.fx,t.fz)||1;n=t.fx/o,s=t.fz/o,r=1.5}else{(!t.wp||Math.hypot(t.wp.x-e.x,t.wp.z-e.z)<.25)&&(t.wp={x:tn(e.x+(Math.random()-.5)*5,-18,18),z:tn(e.z+(Math.random()-.5)*5,-18,18)});let o=t.wp.x-e.x,a=t.wp.z-e.z,l=Math.hypot(o,a)||1;n=o/l,s=a/l,r=.45}e.x+=n*r*i,e.z+=s*r*i,bs(e,.07)&&(t.wp=null,t.fx=-t.fx+(Math.random()-.5),t.fz=-t.fz+(Math.random()-.5)),t.g.rotation.y+=Ss(Math.atan2(-s,n)-t.g.rotation.y)*(1-Math.exp(-i*8)),t.walk+=r*i*14,gl(t,r,t.walk,!1)}}var Ih=null;function vl(i){let t=Pt("banner");t.textContent=i,t.style.opacity="1",clearTimeout(Ih),Ih=setTimeout(()=>t.style.opacity="0",1800)}function ou(){for(let i of[Ge,Ts])for(let t of i)re.remove(t.g);for(let i of hi)re.remove(i.g);Ge=[],Ts=[],hi=[];for(let i of Xn)Pe.remove(i.g);Xn=[],ht.car&&(Pe.remove(ht.car.g),ht.car=null);for(let i of Ma)i.alive=!1,i.m.visible=!1}function lu(){ou(),Object.assign(pt,{hp:100,money:0,kills:0,lastHurt:0,weapon:0,cd:0,dead:!1,started:!0,spawnT:2}),ht.pos.set(-.4,0,-.4),ht.y=0,ht.vy=0,ht.facing=0,ht.model.g.visible=!0;for(let i=0;i<16;i++){let t,e,n=!1;for(let s=0;s<20&&!n;s++)t=(Math.random()-.5)*34,e=(Math.random()-.5)*34,n=!bs({x:t,z:e},.1);n&&au(t,e)}Pt("weapon").textContent=js[0].name,Pt("dead").classList.add("hidden"),vl("\xA1Limpia la ciudad!")}function cu(){G0(),ne&&ne.state==="suspended"&&ne.resume(),(!pt.started||pt.dead)&&lu(),pt.active=!0,document.body.classList.add("playing"),We.enabled=!1,ul.camera=oi,re.fog=Hh,hl(13),ui&&Pt("touch").classList.remove("hidden"),Pt("bPlay").textContent="CONTINUAR",setTimeout(Ea,30),Ze(15)}function yl(){pt.active=!1,document.body.classList.remove("playing"),We.enabled=!0,ul.camera=Mn,re.fog=null,hl(33),Xe.position.copy(Ks).multiplyScalar(55),Xe.target.position.set(0,0,0),Pt("touch").classList.add("hidden"),Pt("prompt").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock(),Sn&&(Sn.gain.value=0),setTimeout(Ea,30)}function i_(i){if(pt.time+=i,j0(i),J0(i),e_(i),n_(i),X0(i),!pt.dead){let s=Math.min(3+Math.floor(pt.kills/4),10);pt.spawnT-=i,Ge.length<s&&pt.spawnT<=0&&(Q0(),pt.spawnT=1.6,Ge.length===1&&pt.kills>0&&vl("\xA1Llegan m\xE1s delincuentes!")),pt.time-pt.lastHurt>4&&(pt.hp=Math.min(100,pt.hp+4*i))}for(let s of hi)s.t+=i,s.g.rotation.y+=i*2.5,s.g.position.y=.15+Math.sin(s.t*4)*.03;let t=!1;if(!ht.car&&!pt.dead){for(let s of[di,Xn])for(let r of s)if(r.g.position.distanceTo(ht.pos)<.75){t=!0;break}}let e=Pt("prompt");t?(e.textContent=ui?"Toca AUTO para subir":"Presiona E para subir",e.classList.remove("hidden")):ht.car&&!pt.dead?(e.textContent=ui?"AUTO para bajar":"E bajar \xB7 Espacio frenar",e.classList.remove("hidden")):e.classList.add("hidden"),Pt("hpFill").style.width=pt.hp+"%",Pt("money").textContent="$"+pt.money,Pt("kills").textContent="Bajas "+pt.kills,s_();let n=pi();Xe.target.position.set(n.x,0,n.z),Xe.position.set(n.x+Ks.x*40,Ks.y*40,n.z+Ks.z*40)}var se=Pt("mini").getContext("2d");function s_(){let t=s=>(s+20)*4;se.drawImage(ya,0,0),se.fillStyle="#e9ecef";for(let s of di)se.fillRect(t(s.g.position.x)-1.5,t(s.g.position.z)-1.5,3,3);se.fillStyle="#8d99ae";for(let s of Xn)se.fillRect(t(s.g.position.x)-1.5,t(s.g.position.z)-1.5,3,3);se.fillStyle="#7CFC8A";for(let s of hi)se.fillRect(t(s.g.position.x)-1.5,t(s.g.position.z)-1.5,3,3);se.fillStyle="#ff2d55";for(let s of Ge)se.beginPath(),se.arc(t(s.g.position.x),t(s.g.position.z),3,0,7),se.fill();let e=pi(),n=ht.car?ht.car.g.rotation.y:ht.model.g.rotation.y;se.save(),se.translate(t(e.x),t(e.z)),se.rotate(-n),se.fillStyle="#06b6d4",se.strokeStyle="#000",se.lineWidth=1.5,se.beginPath(),se.moveTo(7,0),se.lineTo(-5,-5),se.lineTo(-3,0),se.lineTo(-5,5),se.closePath(),se.fill(),se.stroke(),se.restore()}var ri=new N,Dh=new N,Uh=0;function r_(i){let t=pi(),e=!!ht.car,n=xl(),s=-n.z,r=n.x,o=e?0:.11;ri.set(t.x+s*o,e?.22:ht.y+.27,t.z+r*o);let a=e?2.3:1.25,l=Math.sin(Pn)*Math.cos(Wn),c=Math.sin(Wn),h=Math.cos(Pn)*Math.cos(Wn);for(let u=.25;u<=1.0001;u+=.125){let f=ri.x+l*a*u,p=ri.y+c*a*u,_=ri.z+h*a*u;if(pl(f,p,_)){a*=Math.max(.2,u-.15);break}}Dh.set(ri.x+l*a,ri.y+c*a,ri.z+h*a),oi.position.lerp(Dh,1-Math.exp(-i*14)),Uh>0&&(Uh-=i,oi.position.x+=(Math.random()-.5)*.01,oi.position.y+=(Math.random()-.5)*.01),oi.lookAt(ri)}var el=0,Js=0,Nh=-1,a_=new gt("#fff0d6"),o_=new gt("#9fb4ff"),l_=new gt("#e3f3ff"),c_=new gt("#4b5f9a"),h_=new gt("#2f9fd6"),u_=new gt("#0a2740"),f_=new gt("#ffffff"),d_=new gt("#3a4466");function p_(i){Math.abs(i-Nh)<1e-4||(Nh=i,Xe.intensity=2.4+(.28-2.4)*i,Xe.color.lerpColors(a_,o_,i),sl.intensity=1.1+(.32-1.1)*i,sl.color.lerpColors(l_,c_,i),re.background.lerpColors(cl,I0,i),Hh.color.copy(re.background),Zh.color.lerpColors(h_,u_,i),Yh.color.lerpColors(f_,d_,i),Gh.emissiveIntensity=.9*i,Wh.emissiveIntensity=2.2*i,fl.emissiveIntensity=3*i,dl.emissiveIntensity=2*i,Jh.emissiveIntensity=.2+1.2*i,Xh.color.setScalar(1+.9*i),rl.forEach(t=>t.color.copy(t.userData.base).multiplyScalar(.9+1.3*i)),ys.enabled=i>.01,ys.strength=.55*i,ys.threshold=.82,ys.radius=.35)}function Ea(){let i=il.clientWidth,t=il.clientHeight;if(!i||!t)return;ws.setSize(i,t,!1),As.setSize(i,t);let e=i/t,n=Math.max(19,29/e);Mn.left=-n*e,Mn.right=n*e,Mn.top=n,Mn.bottom=-n,Mn.updateProjectionMatrix(),oi.aspect=e,oi.fov=e<1?75:62,oi.updateProjectionMatrix()}new ResizeObserver(Ea).observe(il);Ea();var ll=1+Math.floor(Math.random()*9999);$h(ll);var nr=(i,t)=>Pt(i).classList.toggle("on",t);Pt("bNight").onclick=()=>{Js=Js?0:1,nr("bNight",!!Js),Pt("bNight").textContent=Js?"D\xEDa":"Noche",Ze()};Pt("bRot").onclick=()=>{We.autoRotate=!We.autoRotate,nr("bRot",We.autoRotate),Ze()};Pt("bTitle").onclick=()=>{let i=Pt("title"),t=i.style.opacity!=="0";i.style.opacity=t?"0":"1",nr("bTitle",!t),Ze()};Pt("bNew").onclick=()=>{ou(),pt.started=!1,Pt("bPlay").textContent="JUGAR",ll=1+Math.floor(Math.random()*9999),$h(ll),Ze()};Pt("bVib").onclick=()=>{ga=!ga,nr("bVib",ga),Ze()};Pt("bSound").onclick=()=>{Fi=!Fi,nr("bSound",Fi),!Fi&&Sn&&(Sn.gain.value=0),Ze()};Pt("bPlay").onclick=cu;Pt("bExit").onclick=yl;Pt("bRetry").onclick=()=>{lu()};Pt("bDeadExit").onclick=()=>{Pt("dead").classList.add("hidden"),yl()};addEventListener("keydown",i=>{pt.active?(Te[i.code]=!0,i.code==="KeyE"?su():i.code==="Digit1"||i.code==="Digit2"||i.code==="Digit3"?(pt.weapon=+i.code.slice(-1)-1,Pt("weapon").textContent=js[pt.weapon].name,Cn(300,.06,.1)):i.code==="KeyQ"?(pt.weapon=(pt.weapon+1)%3,Pt("weapon").textContent=js[pt.weapon].name):i.code==="KeyP"?yl():i.code==="KeyN"?Pt("bNight").click():(i.code==="KeyJ"||i.code==="KeyK")&&(Ln=!0),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault()):i.key==="n"||i.key==="N"?Pt("bNight").click():i.key==="r"||i.key==="R"?Pt("bNew").click():i.code==="Enter"?cu():i.code==="Space"&&(i.preventDefault(),Pt("bRot").click())});addEventListener("keyup",i=>{Te[i.code]=!1,(i.code==="KeyJ"||i.code==="KeyK")&&(Ln=!1)});addEventListener("blur",()=>{for(let i in Te)Te[i]=!1;Ln=!1});var yn=null;fi.addEventListener("mousedown",i=>{if(!(!pt.active||ui)){if(document.pointerLockElement===fi){Ln=!0,er=!0;return}yn={x:i.clientX,y:i.clientY,moved:!1,t:performance.now()}}});addEventListener("mousemove",i=>{if(!(!pt.active||ui)){if(document.pointerLockElement===fi){Pn-=i.movementX*.0028,Wn=tn(Wn+i.movementY*.0022,.02,1.15),Sa=pt.time;return}if(yn){let t=i.clientX-yn.x,e=i.clientY-yn.y;Math.abs(t)+Math.abs(e)>5&&(yn.moved=!0),yn.moved&&(Pn-=t*.005,Wn=tn(Wn+e*.004,.02,1.15),Sa=pt.time,yn.x=i.clientX,yn.y=i.clientY)}}});addEventListener("mouseup",()=>{if(pt.active){if(Ln=!1,yn&&!yn.moved&&(er=!0,fi.requestPointerLock))try{let i=fi.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}yn=null}});if(ui){let r=function(c){let h=c.clientX-n,u=c.clientY-s,f=Math.hypot(h,u),p=48;f>p&&(h*=p/f,u*=p/f),Ms.x=h/p,Ms.y=u/p,t.style.transform=`translate(${h}px,${u}px)`},i=Pt("joy"),t=Pt("knob"),e=null,n=0,s=0;i.addEventListener("touchstart",c=>{let h=c.changedTouches[0];e=h.identifier;let u=i.getBoundingClientRect();n=u.left+u.width/2,s=u.top+u.height/2,r(h),c.preventDefault()},{passive:!1}),addEventListener("touchmove",c=>{for(let h of c.changedTouches)h.identifier===e?r(h):a&&h.identifier===a.id&&(Pn-=(h.clientX-a.x)*.007,Wn=tn(Wn+(h.clientY-a.y)*.005,.02,1.15),a.x=h.clientX,a.y=h.clientY,Sa=pt.time);pt.active&&c.preventDefault()},{passive:!1});let o=c=>{for(let h of c.changedTouches)h.identifier===e&&(e=null,Ms.x=Ms.y=0,t.style.transform=""),a&&h.identifier===a.id&&(a=null)};addEventListener("touchend",o),addEventListener("touchcancel",o);let a=null;fi.addEventListener("touchstart",c=>{if(!pt.active)return;let h=c.changedTouches[0];a||(a={id:h.identifier,x:h.clientX,y:h.clientY}),c.preventDefault()},{passive:!1});let l=(c,h,u)=>{let f=Pt(c);f.addEventListener("touchstart",p=>{f.classList.add("act"),h(),p.preventDefault(),p.stopPropagation()},{passive:!1}),f.addEventListener("touchend",p=>{f.classList.remove("act"),u&&u(),p.preventDefault()},{passive:!1})};l("tFire",()=>{Ln=!0,er=!0},()=>{Ln=!1}),l("tJump",()=>{Te.Space=!0},()=>{Te.Space=!1}),l("tCar",()=>{su()}),l("tGun",()=>{pt.weapon=(pt.weapon+1)%3,Pt("weapon").textContent=js[pt.weapon].name,Ze()})}setTimeout(()=>{Pt("hint").style.opacity="0"},6e3);var Oh=new ps,Fh=!0;function hu(){requestAnimationFrame(hu);let i=Math.min(Oh.getDelta(),.05),t=Oh.elapsedTime;el+=(Js-el)*(1-Math.exp(-i*2.5)),p_(el),H0(i);let e=t*.16,n=17;bn.position.set(Math.cos(e)*n,8.5+Math.sin(t*.7)*.4,Math.sin(e)*n),bn.rotation.y=Math.atan2(-Math.cos(e),-Math.sin(e)),bn.rotation.x=.35,tu.rotation.x+=i*40;for(let s of eu)s.position.x+=s.userData.sp*i,s.position.x>42&&(s.position.x=-42);for(let s of nu){let r=s.userData;r.a+=r.sp*i,s.position.set(Math.cos(r.a)*r.r,-.75+Math.sin(t*1.5+r.r)*.03,Math.sin(r.a)*r.r);let o=-Math.sin(r.a)*Math.sign(r.sp),a=Math.cos(r.a)*Math.sign(r.sp);s.rotation.y=Math.atan2(-a,o)}if(Bi){Bi.wheel.rotation.z+=i*.25;for(let s of Bi.cabins)s.rotation.z=-Bi.wheel.rotation.z}if(Oi)for(let s of _a){let r=s.userData;if(r.rr!==void 0){r.a+=r.sp*i,s.position.set(Oi.x+Math.cos(r.a)*r.rr,-.2,Oi.z+Math.sin(r.a)*r.rr),s.rotation.y=-r.a;continue}let o=(t*.8+r.p)%1,a=o*.55;s.position.set(Oi.x+Math.cos(r.a)*a,.6+2.2*o*(1-o),Oi.z+Math.sin(r.a)*a)}if(W0(i),va>0&&(va-=i,va<=0&&(_l.position.y=-5)),pt.active?(i_(i),r_(i)):We.update(),As.render(),Fh){Fh=!1,window.__ok=!0;let s=Pt("loading");s.style.opacity="0",setTimeout(()=>s.remove(),700)}}hu();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
