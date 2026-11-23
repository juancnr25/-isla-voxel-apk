var hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ed=0,Zc=1,td=2;var vu=1,ec=2,pi=3,Ui=0,un=1,Cn=2;var Kn=0,Vs=1,ba=2,$c=3,Jc=4,nd=5,es=100,id=101,sd=102,Kc=103,jc=104,rd=200,ad=201,od=202,ld=203,yl=204,vl=205,cd=206,hd=207,ud=208,fd=209,dd=210,pd=211,md=212,gd=213,_d=214,xd=0,yd=1,vd=2,Sa=3,Md=4,bd=5,Sd=6,Ed=7,Mu=0,Td=1,wd=2,jn=0,tc=1,nc=2,ic=3,sc=4,Ad=5,rc=6;var bu=300,Xs=301,qs=302,Ml=303,bl=304,Ka=306,Sl=1e3,Bn=1001,El=1002,tn=1003,Qc=1004;var Go=1005;var An=1006,Cd=1007;var Sr=1008;var Di=1009,Rd=1010,Pd=1011,ac=1012,Su=1013,Li=1014,Ii=1015,Hn=1016,Eu=1017,Tu=1018,ns=1020,Ld=1021,kn=1023,Id=1024,Dd=1025,is=1026,Ys=1027,Ud=1028,wu=1029,Nd=1030,Au=1031,Cu=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,eh=35840,th=35841,nh=35842,ih=35843,Ru=36196,sh=37492,rh=37496,ah=37808,oh=37809,lh=37810,ch=37811,hh=37812,uh=37813,fh=37814,dh=37815,ph=37816,mh=37817,gh=37818,_h=37819,xh=37820,yh=37821,Zo=36492,vh=36494,Mh=36495,Od=36283,bh=36284,Sh=36285,Eh=36286;var Ea=2300,Ta=2301,$o=2302,Th=2400,wh=2401,Ah=2402;var Pu=3e3,ss=3001,zd=3200,Fd=3201,Lu=0,Bd=1,Rn="",Vt="srgb",gi="srgb-linear",oc="display-p3",ja="display-p3-linear",wa="linear",ut="srgb",Aa="rec709",Ca="p3";var Ms=7680;var Ch=519,kd=512,Hd=513,Vd=514,Iu=515,Gd=516,Wd=517,Xd=518,qd=519,Rh=35044;var Ph="300 es",Tl=1035,mi=2e3,Ra=2001,Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,yr=Math.PI/180,Er=180/Math.PI;function Ks(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Yt(n,e,t){return Math.max(e,Math.min(t,n))}function lc(n,e){return(n%e+e)%e}function Yd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Zd(n,e,t){return n!==e?(t-n)/(e-n):0}function vr(n,e,t){return(1-t)*n+t*e}function $d(n,e,t,i){return vr(n,e,1-Math.exp(-t*i))}function Jd(n,e=1){return e-Math.abs(lc(n,e*2)-e)}function Kd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ep(n,e){return n+Math.random()*(e-n)}function tp(n){return n*(.5-Math.random())}function np(n){n!==void 0&&(Lh=n);let e=Lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(n){return n*yr}function sp(n){return n*Er}function wl(n){return(n&n-1)===0&&n!==0}function rp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ap(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Du={DEG2RAD:yr,RAD2DEG:Er,generateUUID:Ks,clamp:Yt,euclideanModulo:lc,mapLinear:Yd,inverseLerp:Zd,lerp:vr,damp:$d,pingpong:Jd,smoothstep:Kd,smootherstep:jd,randInt:Qd,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:wl,ceilPowerOfTwo:rp,floorPowerOfTwo:Pa,setQuaternionFromProperEuler:ap,normalize:Qt,denormalize:Fs},be=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],x=s[0],p=s[3],d=s[6],E=s[1],M=s[4],I=s[7],D=s[2],R=s[5],A=s[8];return r[0]=o*x+a*E+l*D,r[3]=o*p+a*M+l*R,r[6]=o*d+a*I+l*A,r[1]=c*x+h*E+u*D,r[4]=c*p+h*M+u*R,r[7]=c*d+h*I+u*A,r[2]=f*x+m*E+g*D,r[5]=f*p+m*M+g*R,r[8]=f*d+m*I+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*u+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new je;function Uu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function op(){let n=La("canvas");return n.style.display="block",n}var Ih={};function Mr(n){n in Ih||(Ih[n]=!0,console.warn(n))}var Dh=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uh=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[gi]:{transfer:wa,primaries:Aa,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:ut,primaries:Aa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ja]:{transfer:wa,primaries:Ca,toReference:n=>n.applyMatrix3(Uh),fromReference:n=>n.applyMatrix3(Dh)},[oc]:{transfer:ut,primaries:Ca,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Uh),fromReference:n=>n.applyMatrix3(Dh).convertLinearToSRGB()}},lp=new Set([gi,ja]),at={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!lp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=jr[e].toReference,s=jr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return jr[n].primaries},getTransfer:function(n){return n===Rn?wa:jr[n].transfer}};function Gs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var bs,Ia=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=La("canvas")),bs.width=e.width,bs.height=e.height;let i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gs(t[i]/255)*255):t[i]=Gs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cp=0,Da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jo(s[o].image)):r.push(jo(s[o]))}else r=jo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hp=0,Vn=class n extends Qn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Bn,s=Bn,r=An,o=Sr,a=kn,l=Di,c=n.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ks(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ss?Vt:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sl:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sl:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?ss:Pu}set encoding(e){Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ss?Vt:Rn}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=bu;Vn.DEFAULT_ANISOTROPY=1;var zt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,I=(m+1)/2,D=(d+1)/2,R=(h+f)/4,A=(u+x)/4,ee=(g+p)/4;return M>I&&M>D?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=A/i):I>D?I<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),i=R/s,r=ee/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=A/r,s=ee/r),this.set(i,s,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Al=class extends Qn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ss?Vt:Rn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Al{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ua=class extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cl=class extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==m||h!==g){let p=1-a,d=l*f+c*m+h*g+u*x,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let D=Math.sqrt(M),R=Math.atan2(D,d*E);p=Math.sin(p*R)/D,a=Math.sin(a*R)/D}let I=a*E;if(l=l*p+f*I,c=c*p+m*I,h=h*p+g*I,u=u*p+x*I,p===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qo=new O,Nh=new Gn,_i=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),ea.subVectors(this.max,dr),Ss.subVectors(e.a,dr),Es.subVectors(e.b,dr),Ts.subVectors(e.c,dr),wi.subVectors(Es,Ss),Ai.subVectors(Ts,Es),$i.subVectors(Ss,Ts);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-$i.z,$i.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,$i.z,0,-$i.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-$i.y,$i.x,0];return!el(t,Ss,Es,Ts,ea)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Ss,Es,Ts,ea))?!1:(ta.crossVectors(wi,Ai),t=[ta.x,ta.y,ta.z],el(t,Ss,Es,Ts,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new O,new O,new O,new O,new O,new O,new O,new O],Nn=new O,Qr=new _i,Ss=new O,Es=new O,Ts=new O,wi=new O,Ai=new O,$i=new O,dr=new O,ea=new O,ta=new O,Ji=new O;function el(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ji.fromArray(n,r);let a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var up=new _i,pr=new O,tl=new O,rs=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):up.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(tl)),this.expandByPoint(pr.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new O,nl=new O,na=new O,Ci=new O,il=new O,ia=new O,sl=new O,Tr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nl.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(nl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(na),a=Ci.dot(this.direction),l=-Ci.dot(na),c=Ci.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nl).addScaledVector(na,f),m}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){il.subVectors(t,e),ia.subVectors(i,e),sl.crossVectors(il,ia);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let l=a*this.direction.dot(ia.crossVectors(Ci,ia));if(l<0)return null;let c=a*this.direction.dot(il.cross(Ci));if(c<0||l+c>o)return null;let h=-a*Ci.dot(sl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,m,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,m,g,x,p)}set(e,t,i,s,r,o,a,l,c,h,u,f,m,g,x,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,dp)}lookAt(e,t,i){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ri.crossVectors(i,_n),Ri.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ri.crossVectors(i,_n)),Ri.normalize(),sa.crossVectors(_n,Ri),s[0]=Ri.x,s[4]=sa.x,s[8]=_n.x,s[1]=Ri.y,s[5]=sa.y,s[9]=_n.y,s[2]=Ri.z,s[6]=sa.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],d=i[14],E=i[3],M=i[7],I=i[11],D=i[15],R=s[0],A=s[4],ee=s[8],_=s[12],y=s[1],C=s[5],L=s[9],Q=s[13],T=s[2],U=s[6],B=s[10],V=s[14],F=s[3],Y=s[7],J=s[11],j=s[15];return r[0]=o*R+a*y+l*T+c*F,r[4]=o*A+a*C+l*U+c*Y,r[8]=o*ee+a*L+l*B+c*J,r[12]=o*_+a*Q+l*V+c*j,r[1]=h*R+u*y+f*T+m*F,r[5]=h*A+u*C+f*U+m*Y,r[9]=h*ee+u*L+f*B+m*J,r[13]=h*_+u*Q+f*V+m*j,r[2]=g*R+x*y+p*T+d*F,r[6]=g*A+x*C+p*U+d*Y,r[10]=g*ee+x*L+p*B+d*J,r[14]=g*_+x*Q+p*V+d*j,r[3]=E*R+M*y+I*T+D*F,r[7]=E*A+M*C+I*U+D*Y,r[11]=E*ee+M*L+I*B+D*J,r[15]=E*_+M*Q+I*V+D*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*m-i*l*m)+x*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],d=e[15],E=u*p*c-x*f*c+x*l*m-a*p*m-u*l*d+a*f*d,M=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,I=h*x*c-g*u*c+g*a*m-o*x*m-h*a*d+o*u*d,D=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,R=t*E+i*M+s*I+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return e[0]=E*A,e[1]=(x*f*r-u*p*r-x*s*m+i*p*m+u*s*d-i*f*d)*A,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*d+i*l*d)*A,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*m-i*l*m)*A,e[4]=M*A,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*d-t*l*d)*A,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*A,e[8]=I*A,e[9]=(g*u*r-h*x*r-g*i*m+t*x*m+h*i*d-t*u*d)*A,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*A,e[12]=D*A,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*p+t*u*p)*A,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*p-t*a*p)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,x=o*h,p=o*u,d=a*u,E=l*c,M=l*h,I=l*u,D=i.x,R=i.y,A=i.z;return s[0]=(1-(x+d))*D,s[1]=(m+I)*D,s[2]=(g-M)*D,s[3]=0,s[4]=(m-I)*R,s[5]=(1-(f+d))*R,s[6]=(p+E)*R,s[7]=0,s[8]=(g+M)*A,s[9]=(p-E)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ws.set(s[0],s[1],s[2]).length(),o=ws.set(s[4],s[5],s[6]).length(),a=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);let c=1/r,h=1/o,u=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=mi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),m,g;if(a===mi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ra)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=mi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,m=(i+s)*h,g,x;if(a===mi)g=(o+r)*u,x=-2*u;else if(a===Ra)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ws=new O,On=new wt,fp=new O(0,0,0),dp=new O(1,1,1),Ri=new O,sa=new O,_n=new O,Oh=new wt,zh=new Gn,Na=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Na.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pp=0,Fh=new O,As=new Gn,ui=new wt,ra=new O,mr=new O,mp=new O,gp=new Gn,Bh=new O(1,0,0),kh=new O(0,1,0),Hh=new O(0,0,1),_p={type:"added"},xp={type:"removed"},Gt=class n extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new Na,i=new Gn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ra.copy(e):ra.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(mr,ra,this.up):ui.lookAt(ra,mr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ui),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_p)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new O(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new O,fi=new O,rl=new O,di=new O,Cs=new O,Rs=new O,Vh=new O,al=new O,ol=new O,ll=new O,aa=!1,Bs=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),fi.subVectors(i,t),rl.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(fi),l=zn.dot(rl),c=fi.dot(fi),h=fi.dot(rl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,i,s,r,o,a,l){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),fi.subVectors(e,t),zn.cross(fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Cs.subVectors(s,i),Rs.subVectors(r,i),al.subVectors(e,i);let l=Cs.dot(al),c=Rs.dot(al);if(l<=0&&c<=0)return t.copy(i);ol.subVectors(e,s);let h=Cs.dot(ol),u=Rs.dot(ol);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Cs,o);ll.subVectors(e,r);let m=Cs.dot(ll),g=Rs.dot(ll);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Rs,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Vh.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Vh,a);let d=1/(p+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function cl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var _e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=lc(e,1),t=Yt(t,0,1),i=Yt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=cl(o,r,e+1/3),this.g=cl(o,r,e),this.b=cl(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=Nu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return at.fromWorkingColorSpace(qt.copy(this),e),Math.round(Yt(qt.r*255,0,255))*65536+Math.round(Yt(qt.g*255,0,255))*256+Math.round(Yt(qt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(qt.copy(this),t);let i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Vt){at.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,s=qt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(oa);let i=vr(Pi.h,oa.h,t),s=vr(Pi.s,oa.s,t),r=vr(Pi.l,oa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new _e;_e.NAMES=Nu;var yp=0,as=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Vs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=vl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==vl&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ct=class extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new O,la=new be,yn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),e}};var za=class extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fa=class extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var sn=class extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var vp=0,wn=new wt,hl=new Gt,Ps=new O,xn=new _i,gr=new _i,Ot=new O,ei=class n extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Fa:za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(xn.min,gr.min),xn.expandByPoint(Ot),Ot.addVectors(xn.max,gr.max),xn.expandByPoint(Ot)):(xn.expandByPoint(gr.min),xn.expandByPoint(gr.max))}xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Ot.add(Ps)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<a;y++)c[y]=new O,h[y]=new O;let u=new O,f=new O,m=new O,g=new be,x=new be,p=new be,d=new O,E=new O;function M(y,C,L){u.fromArray(s,y*3),f.fromArray(s,C*3),m.fromArray(s,L*3),g.fromArray(o,y*2),x.fromArray(o,C*2),p.fromArray(o,L*2),f.sub(u),m.sub(u),x.sub(g),p.sub(g);let Q=1/(x.x*p.y-p.x*x.y);isFinite(Q)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(Q),E.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(Q),c[y].add(d),c[C].add(d),c[L].add(d),h[y].add(E),h[C].add(E),h[L].add(E))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let y=0,C=I.length;y<C;++y){let L=I[y],Q=L.start,T=L.count;for(let U=Q,B=Q+T;U<B;U+=3)M(i[U+0],i[U+1],i[U+2])}let D=new O,R=new O,A=new O,ee=new O;function _(y){A.fromArray(r,y*3),ee.copy(A);let C=c[y];D.copy(C),D.sub(A.multiplyScalar(A.dot(C))).normalize(),R.crossVectors(ee,C);let Q=R.dot(h[y])<0?-1:1;l[y*4]=D.x,l[y*4+1]=D.y,l[y*4+2]=D.z,l[y*4+3]=Q}for(let y=0,C=I.length;y<C;++y){let L=I[y],Q=L.start,T=L.count;for(let U=Q,B=Q+T;U<B;U+=3)_(i[U+0]),_(i[U+1]),_(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new yn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new wt,Ki=new Tr,ca=new rs,Wh=new O,Ls=new O,Is=new O,Ds=new O,ul=new O,ha=new O,ua=new be,fa=new be,da=new be,Xh=new O,qh=new O,Yh=new O,pa=new O,ma=new O,vt=class extends Gt{constructor(e=new ei,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ul.fromBufferAttribute(u,e),o?ha.addScaledVector(ul,h):ha.addScaledVector(ul.sub(t),h))}t.add(ha)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(ca.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ca,Wh)===null||Ki.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Gh),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let I=E,D=M;I<D;I+=3){let R=a.getX(I),A=a.getX(I+1),ee=a.getX(I+2);s=ga(this,d,e,i,c,h,u,R,A,ee),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let E=a.getX(p),M=a.getX(p+1),I=a.getX(p+2);s=ga(this,o,e,i,c,h,u,E,M,I),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let I=E,D=M;I<D;I+=3){let R=I,A=I+1,ee=I+2;s=ga(this,d,e,i,c,h,u,R,A,ee),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let E=p,M=p+1,I=p+2;s=ga(this,o,e,i,c,h,u,E,M,I),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Mp(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;ma.copy(a),ma.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:n}}function ga(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ls),n.getVertexPosition(l,Is),n.getVertexPosition(c,Ds);let h=Mp(n,e,t,i,Ls,Is,Ds,pa);if(h){s&&(ua.fromBufferAttribute(s,a),fa.fromBufferAttribute(s,l),da.fromBufferAttribute(s,c),h.uv=Bs.getInterpolation(pa,Ls,Is,Ds,ua,fa,da,new be)),r&&(ua.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),h.uv1=Bs.getInterpolation(pa,Ls,Is,Ds,ua,fa,da,new be),h.uv2=h.uv1),o&&(Xh.fromBufferAttribute(o,a),qh.fromBufferAttribute(o,l),Yh.fromBufferAttribute(o,c),h.normal=Bs.getInterpolation(pa,Ls,Is,Ds,Xh,qh,Yh,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Bs.getNormal(Ls,Is,Ds,u.normal),h.face=u}return h}var os=class n extends ei{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function g(x,p,d,E,M,I,D,R,A,ee,_){let y=I/A,C=D/ee,L=I/2,Q=D/2,T=R/2,U=A+1,B=ee+1,V=0,F=0,Y=new O;for(let J=0;J<B;J++){let j=J*C-Q;for(let le=0;le<U;le++){let W=le*y-L;Y[x]=W*E,Y[p]=j*M,Y[d]=T,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[d]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(le/A),u.push(1-J/ee),V+=1}}for(let J=0;J<ee;J++)for(let j=0;j<A;j++){let le=f+j+U*J,W=f+j+U*(J+1),te=f+(j+1)+U*(J+1),pe=f+(j+1)+U*J;l.push(le,W,pe),l.push(W,te,pe),F+=6}a.addGroup(m,F,_),m+=F,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function en(n){let e={};for(let t=0;t<n.length;t++){let i=Zs(n[t]);for(let s in i)e[s]=i[s]}return e}function bp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ou(n){return n.getRenderTarget()===null?n.outputColorSpace:at.workingColorSpace}var Oi={clone:Zs,merge:en},Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ba=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nn=class extends Ba{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Us=-90,Ns=1,Rl=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Us,Ns,e,t);s.layers=this.layers,this.add(s);let r=new nn(Us,Ns,e,t);r.layers=this.layers,this.add(r);let o=new nn(Us,Ns,e,t);o.layers=this.layers,this.add(o);let a=new nn(Us,Ns,e,t);a.layers=this.layers,this.add(a);let l=new nn(Us,Ns,e,t);l.layers=this.layers,this.add(l);let c=new nn(Us,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ka=class extends Vn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pl=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ss?Vt:Rn),this.texture=new ka(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new os(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Kn});r.uniforms.tEquirect.value=t;let o=new vt(s,r),a=t.minFilter;return t.minFilter===Sr&&(t.minFilter=An),new Rl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},fl=new O,Tp=new O,wp=new je,Fn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=fl.subVectors(i,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(fl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wp.getNormalMatrix(e),s=this.coplanarPoint(fl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new rs,_a=new O,wr=class{constructor(e=new Fn,t=new Fn,i=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],d=s[12],E=s[13],M=s[14],I=s[15];if(i[0].setComponents(l-r,f-c,p-m,I-d).normalize(),i[1].setComponents(l+r,f+c,p+m,I+d).normalize(),i[2].setComponents(l+o,f+h,p+g,I+E).normalize(),i[3].setComponents(l-o,f-h,p-g,I-E).normalize(),i[4].setComponents(l-a,f-u,p-x,I-M).normalize(),t===mi)i[5].setComponents(l+a,f+u,p+x,I+M).normalize();else if(t===Ra)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(_a.x=s.normal.x>0?e.max.x:e.min.x,_a.y=s.normal.y>0?e.max.y:e.min.y,_a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ap(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,p=g.length;x<p;x++){let d=g[x];t?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Ar=class n extends ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],x=[],p=[];for(let d=0;d<h;d++){let E=d*f-o;for(let M=0;M<c;M++){let I=M*u-r;g.push(I,-E,0),x.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let M=E+c*d,I=E+c*(d+1),D=E+1+c*(d+1),R=E+1+c*d;m.push(M,I,R),m.push(I,D,R)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`
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
}`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Cm=`
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,Z0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,K0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define TOON
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
}`,eg=`#define TOON
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
}`,tg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Cp,alphahash_pars_fragment:Rp,alphamap_fragment:Pp,alphamap_pars_fragment:Lp,alphatest_fragment:Ip,alphatest_pars_fragment:Dp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Op,batching_vertex:zp,begin_vertex:Fp,beginnormal_vertex:Bp,bsdfs:kp,iridescence_fragment:Hp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:Zp,color_pars_vertex:$p,color_vertex:Jp,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:em,displacementmap_vertex:tm,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:am,envmap_common_pars_fragment:om,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:Mm,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:fm,fog_fragment:dm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:xm,lights_lambert_pars_fragment:ym,lights_pars_begin:vm,lights_toon_fragment:bm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Em,lights_phong_pars_fragment:Tm,lights_physical_fragment:wm,lights_physical_pars_fragment:Am,lights_fragment_begin:Cm,lights_fragment_maps:Rm,lights_fragment_end:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Um,map_fragment:Nm,map_pars_fragment:Om,map_particle_fragment:zm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:km,morphcolor_vertex:Hm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:Zm,normal_vertex:$m,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:f0,skinbase_vertex:d0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:x0,tonemapping_fragment:y0,tonemapping_pars_fragment:v0,transmission_fragment:M0,transmission_pars_fragment:b0,uv_pars_fragment:S0,uv_pars_vertex:E0,uv_vertex:T0,worldpos_vertex:w0,background_vert:A0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:L0,cube_frag:I0,depth_vert:D0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:O0,equirect_vert:z0,equirect_frag:F0,linedashed_vert:B0,linedashed_frag:k0,meshbasic_vert:H0,meshbasic_frag:V0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:Z0,meshphong_vert:$0,meshphong_frag:J0,meshphysical_vert:K0,meshphysical_frag:j0,meshtoon_vert:Q0,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:ag},de={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Jn={basic:{uniforms:en([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:en([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new _e(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:en([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:en([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:en([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new _e(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:en([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:en([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:en([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:en([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:en([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:en([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:en([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:en([de.lights,de.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Jn.physical={uniforms:en([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var xa={r:0,b:0,g:0};function og(n,e,t,i,s,r,o){let a=new _e(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?x(a,l):M&&M.isColor&&(x(M,1),E=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ka)?(h===void 0&&(h=new vt(new os(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Zs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=at.getTransfer(M.colorSpace)!==ut,(u!==M||f!==M.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vt(new Ar(2,2),new Ft({name:"BackgroundMaterial",uniforms:Zs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=at.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,d){p.getRGB(xa,Ou(n)),i.buffers.color.setClear(xa.r,xa.g,xa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:g}}function lg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(T,U,B,V,F){let Y=!1;if(o){let J=x(V,B,U);c!==J&&(c=J,m(c.object)),Y=d(T,V,B,F),Y&&E(T,V,B,F)}else{let J=U.wireframe===!0;(c.geometry!==V.id||c.program!==B.id||c.wireframe!==J)&&(c.geometry=V.id,c.program=B.id,c.wireframe=J,Y=!0)}F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,ee(T,U,B,V),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(T){return i.isWebGL2?n.bindVertexArray(T):r.bindVertexArrayOES(T)}function g(T){return i.isWebGL2?n.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function x(T,U,B){let V=B.wireframe===!0,F=a[T.id];F===void 0&&(F={},a[T.id]=F);let Y=F[U.id];Y===void 0&&(Y={},F[U.id]=Y);let J=Y[V];return J===void 0&&(J=p(f()),Y[V]=J),J}function p(T){let U=[],B=[],V=[];for(let F=0;F<s;F++)U[F]=0,B[F]=0,V[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:V,object:T,attributes:{},index:null}}function d(T,U,B,V){let F=c.attributes,Y=U.attributes,J=0,j=B.getAttributes();for(let le in j)if(j[le].location>=0){let te=F[le],pe=Y[le];if(pe===void 0&&(le==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),le==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;J++}return c.attributesNum!==J||c.index!==V}function E(T,U,B,V){let F={},Y=U.attributes,J=0,j=B.getAttributes();for(let le in j)if(j[le].location>=0){let te=Y[le];te===void 0&&(le==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),le==="instanceColor"&&T.instanceColor&&(te=T.instanceColor));let pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),F[le]=pe,J++}c.attributes=F,c.attributesNum=J,c.index=V}function M(){let T=c.newAttributes;for(let U=0,B=T.length;U<B;U++)T[U]=0}function I(T){D(T,0)}function D(T,U){let B=c.newAttributes,V=c.enabledAttributes,F=c.attributeDivisors;B[T]=1,V[T]===0&&(n.enableVertexAttribArray(T),V[T]=1),F[T]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,U),F[T]=U)}function R(){let T=c.newAttributes,U=c.enabledAttributes;for(let B=0,V=U.length;B<V;B++)U[B]!==T[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function A(T,U,B,V,F,Y,J){J===!0?n.vertexAttribIPointer(T,U,B,F,Y):n.vertexAttribPointer(T,U,B,V,F,Y)}function ee(T,U,B,V){if(i.isWebGL2===!1&&(T.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let F=V.attributes,Y=B.getAttributes(),J=U.defaultAttributeValues;for(let j in Y){let le=Y[j];if(le.location>=0){let W=F[j];if(W===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(W=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(W=T.instanceColor)),W!==void 0){let te=W.normalized,pe=W.itemSize,we=t.get(W);if(we===void 0)continue;let Ee=we.buffer,Be=we.type,ke=we.bytesPerElement,Ue=i.isWebGL2===!0&&(Be===n.INT||Be===n.UNSIGNED_INT||W.gpuType===Su);if(W.isInterleavedBufferAttribute){let et=W.data,G=et.stride,Dt=W.offset;if(et.isInstancedInterleavedBuffer){for(let Le=0;Le<le.locationSize;Le++)D(le.location+Le,et.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Le=0;Le<le.locationSize;Le++)I(le.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Le=0;Le<le.locationSize;Le++)A(le.location+Le,pe/le.locationSize,Be,te,G*ke,(Dt+pe/le.locationSize*Le)*ke,Ue)}else{if(W.isInstancedBufferAttribute){for(let et=0;et<le.locationSize;et++)D(le.location+et,W.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let et=0;et<le.locationSize;et++)I(le.location+et);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let et=0;et<le.locationSize;et++)A(le.location+et,pe/le.locationSize,Be,te,pe*ke,pe/le.locationSize*et*ke,Ue)}}else if(J!==void 0){let te=J[j];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(le.location,te);break;case 3:n.vertexAttrib3fv(le.location,te);break;case 4:n.vertexAttrib4fv(le.location,te);break;default:n.vertexAttrib1fv(le.location,te)}}}}R()}function _(){L();for(let T in a){let U=a[T];for(let B in U){let V=U[B];for(let F in V)g(V[F].object),delete V[F];delete U[B]}delete a[T]}}function y(T){if(a[T.id]===void 0)return;let U=a[T.id];for(let B in U){let V=U[B];for(let F in V)g(V[F].object),delete V[F];delete U[B]}delete a[T.id]}function C(T){for(let U in a){let B=a[U];if(B[T.id]===void 0)continue;let V=B[T.id];for(let F in V)g(V[F].object),delete V[F];delete B[T.id]}}function L(){Q(),h=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:L,resetDefaultState:Q,dispose:_,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:I,disableUnusedAttributes:R}}function cg(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function hg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,I=o||e.has("OES_texture_float"),D=M&&I,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:I,floatVertexTextures:D,maxSamples:R}}function ug(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Fn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:i,M=E*4,I=d.clippingState||null;l.value=I,I=h(g,f,M,m);for(let D=0;D!==M;++D)I[D]=t[D];d.clippingState=I,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let d=m+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,I=m;M!==x;++M,I+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(p,I),p[I+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function fg(n){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=Xs:a===bl&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ml||a===bl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Pl(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ni=class extends Ba{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=4,Zh=[.125,.215,.35,.446,.526,.582],ts=20,dl=new Ni,$h=new _e,pl=null,ml=0,gl=0,Qi=(1+Math.sqrt(5))/2,Os=1/Qi,Jh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Qi,Os),new O(0,Qi,-Os),new O(Os,0,Qi),new O(-Os,0,Qi),new O(Qi,Os,0),new O(-Qi,Os,0)],Ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pl,ml,gl),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Hn,format:kn,colorSpace:gi,depthBuffer:!1},s=Kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=pg(r,e,t)}return s}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,i,s){let a=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($h),h.toneMapping=jn,h.autoClear=!1;let m=new Ct({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new vt(new os,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy($h),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;ya(s,E*M,d>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Xs||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ya(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,dl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jh[(s-1)%Jh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new vt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ts-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):ts;p>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ts}`);let d=[],E=0;for(let A=0;A<ts;++A){let ee=A/x,_=Math.exp(-ee*ee/2);d.push(_),A===0?E+=_:A<p&&(E+=2*_)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let I=this._sizeLods[s],D=3*I*(s>M-ks?s-M+ks:0),R=4*(this._cubeSize-I);ya(t,D,R,3*I,2*I),l.setRenderTarget(t),l.render(u,dl)}};function dg(n){let e=[],t=[],i=[],s=n,r=n-ks+1+Zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ks?l=Zh[o-n+ks-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,d=1,E=new Float32Array(x*g*m),M=new Float32Array(p*g*m),I=new Float32Array(d*g*m);for(let R=0;R<m;R++){let A=R%3*2/3-1,ee=R>2?0:-1,_=[A,ee,0,A+2/3,ee,0,A+2/3,ee+1,0,A,ee,0,A+2/3,ee+1,0,A,ee+1,0];E.set(_,x*g*R),M.set(f,p*g*R);let y=[R,R,R,R,R,R];I.set(y,d*g*R)}let D=new ei;D.setAttribute("position",new yn(E,x)),D.setAttribute("uv",new yn(M,p)),D.setAttribute("faceIndex",new yn(I,d)),e.push(D),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kh(n,e,t){let i=new rn(n,e,t);return i.texture.mapping=Ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pg(n,e,t){let i=new Float32Array(ts),s=new O(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function jh(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Qh(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function mg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ml||l===bl,h=l===Xs||l===qs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ha(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Ha(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _g(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,d=x.length;p<d;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let E=m.array;x=m.version;for(let M=0,I=E.length;M<I;M+=3){let D=E[M+0],R=E[M+1],A=E[M+2];f.push(D,R,R,A,A,D)}}else if(g!==void 0){let E=g.array;x=g.version;for(let M=0,I=E.length/3-1;M<I;M+=3){let D=M+0,R=M+1,A=M+2;f.push(D,R,R,A,A,D)}}else return;let p=new(Uu(f)?Fa:za)(f,1);p.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xg(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,x){if(x===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*l,x),t.update(g,r,x)}function f(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<x;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,x);let d=0;for(let E=0;E<x;E++)d+=g[E];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function yg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vg(n,e){return n[0]-e[0]}function Mg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let T=function(){L.dispose(),r.delete(h),h.removeEventListener("dispose",T)};x!==void 0&&x.texture.dispose();let E=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],ee=0;E===!0&&(ee=1),M===!0&&(ee=2),I===!0&&(ee=3);let _=h.attributes.position.count*ee,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let C=new Float32Array(_*y*4*g),L=new Ua(C,_,y,g);L.type=Ii,L.needsUpdate=!0;let Q=ee*4;for(let U=0;U<g;U++){let B=D[U],V=R[U],F=A[U],Y=_*y*4*U;for(let J=0;J<B.count;J++){let j=J*Q;E===!0&&(o.fromBufferAttribute(B,J),C[Y+j+0]=o.x,C[Y+j+1]=o.y,C[Y+j+2]=o.z,C[Y+j+3]=0),M===!0&&(o.fromBufferAttribute(V,J),C[Y+j+4]=o.x,C[Y+j+5]=o.y,C[Y+j+6]=o.z,C[Y+j+7]=0),I===!0&&(o.fromBufferAttribute(F,J),C[Y+j+8]=o.x,C[Y+j+9]=o.y,C[Y+j+10]=o.z,C[Y+j+11]=F.itemSize===4?o.w:1)}}x={count:g,texture:L,size:new be(_,y)},r.set(h,x),h.addEventListener("dispose",T)}let p=0;for(let E=0;E<f.length;E++)p+=f[E];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let M=0;M<m;M++)g[M]=[M,0];i[h.id]=g}for(let M=0;M<m;M++){let I=g[M];I[0]=M,I[1]=f[M]}g.sort(Mg);for(let M=0;M<8;M++)M<m&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(vg);let x=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let M=0;M<8;M++){let I=a[M],D=I[0],R=I[1];D!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+M)!==x[D]&&h.setAttribute("morphTarget"+M,x[D]),p&&h.getAttribute("morphNormal"+M)!==p[D]&&h.setAttribute("morphNormal"+M,p[D]),s[M]=R,d+=R):(x&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}let E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",E),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Sg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Va=class extends Vn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:is,h!==is&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===is&&(i=Li),i===void 0&&h===Ys&&(i=ns),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fu=new Vn,Bu=new Va(1,1);Bu.compareFunction=Iu;var ku=new Ua,Hu=new Cl,Vu=new ka,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function js(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qa(n,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Eg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Ag(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Cg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;su.set(i),n.uniformMatrix2fv(this.addr,!1,su),Lt(t,i)}}function Rg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;iu.set(i),n.uniformMatrix3fv(this.addr,!1,iu),Lt(t,i)}}function Pg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;nu.set(i),n.uniformMatrix4fv(this.addr,!1,nu),Lt(t,i)}}function Lg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ig(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Ng(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Bg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Bu:Fu;t.setTexture2D(e||r,s)}function kg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hu,s)}function Hg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vu,s)}function Vg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ku,s)}function Gg(n){switch(n){case 5126:return Eg;case 35664:return Tg;case 35665:return wg;case 35666:return Ag;case 35674:return Cg;case 35675:return Rg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Og;case 36295:return zg;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(n,e){n.uniform1fv(this.addr,e)}function Xg(n,e){let t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function qg(n,e){let t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function Yg(n,e){let t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function Zg(n,e){let t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $g(n,e){let t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jg(n,e){let t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kg(n,e){n.uniform1iv(this.addr,e)}function jg(n,e){n.uniform2iv(this.addr,e)}function Qg(n,e){n.uniform3iv(this.addr,e)}function e_(n,e){n.uniform4iv(this.addr,e)}function t_(n,e){n.uniform1uiv(this.addr,e)}function n_(n,e){n.uniform2uiv(this.addr,e)}function i_(n,e){n.uniform3uiv(this.addr,e)}function s_(n,e){n.uniform4uiv(this.addr,e)}function r_(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fu,r[o])}function a_(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hu,r[o])}function o_(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vu,r[o])}function l_(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ku,r[o])}function c_(n){switch(n){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Zg;case 35675:return $g;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return e_;case 5125:return t_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return l_}}var Ll=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},Il=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c_(t.type)}},Dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},_l=/(\w+)(\])?(\[|\.)?/g;function ru(n,e){n.seq.push(e),n.map[e.id]=e}function h_(n,e,t){let i=n.name,s=i.length;for(_l.lastIndex=0;;){let r=_l.exec(i),o=_l.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ru(t,c===void 0?new Ll(a,n,e):new Il(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Dl(a),ru(t,u)),t=u}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);h_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function au(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var u_=37297,f_=0;function d_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function p_(n){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n),i;switch(e===t?i="":e===Ca&&t===Aa?i="LinearDisplayP3ToLinearSRGB":e===Aa&&t===Ca&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case ja:return[i,"LinearTransferOETF"];case Vt:case oc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ou(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+d_(n.getShaderSource(e),o)}else return s}function m_(n,e){let t=p_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function g_(n,e){let t;switch(e){case tc:t="Linear";break;case nc:t="Reinhard";break;case ic:t="OptimizedCineon";break;case sc:t="ACESFilmic";break;case rc:t="AgX";break;case Ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function __(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function x_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Hs).join(`
`)}function y_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function v_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hs(n){return n!==""}function lu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(M_,S_)}var b_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function S_(n,e){let t=qe[e];if(t===void 0){let i=b_.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}var E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(n){return n.replace(E_,T_)}function T_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function A_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===qs&&(e="ENVMAP_MODE_REFRACTION"),e}function R_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Td:e="ENVMAP_BLENDING_MIX";break;case wd:e="ENVMAP_BLENDING_ADD";break}return e}function P_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function L_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=w_(t),c=A_(t),h=C_(t),u=R_(t),f=P_(t),m=t.isWebGL2?"":__(t),g=x_(t),x=y_(r),p=s.createProgram(),d,E,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hs).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hs).join(`
`),E.length>0&&(E+=`
`)):(d=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),E=[m,uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?qe.tonemapping_pars_fragment:"",t.toneMapping!==jn?g_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,m_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Ul(o),o=lu(o,t),o=cu(o,t),a=Ul(a),a=lu(a,t),a=cu(a,t),o=hu(o),a=hu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let I=M+d+o,D=M+E+a,R=au(s,s.VERTEX_SHADER,I),A=au(s,s.FRAGMENT_SHADER,D);s.attachShader(p,R),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function ee(L){if(n.debug.checkShaderErrors){let Q=s.getProgramInfoLog(p).trim(),T=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(A).trim(),B=!0,V=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,R,A);else{let F=ou(s,R,"vertex"),Y=ou(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+F+`
`+Y)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(T===""||U==="")&&(V=!1);V&&(L.diagnostics={runnable:B,programLog:Q,vertexShader:{log:T,prefix:d},fragmentShader:{log:U,prefix:E}})}s.deleteShader(R),s.deleteShader(A),_=new Ws(s,p),y=v_(s,p)}let _;this.getUniforms=function(){return _===void 0&&ee(this),_};let y;this.getAttributes=function(){return y===void 0&&ee(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,u_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}var I_=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ol(e),t.set(e,i)),i}},Ol=class{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}};function D_(n,e,t,i,s,r,o){let a=new Oa,l=new Nl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function p(_,y,C,L,Q){let T=L.fog,U=Q.geometry,B=_.isMeshStandardMaterial?L.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||B),F=V&&V.mapping===Ka?V.image.height:null,Y=g[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=J!==void 0?J.length:0,le=0;U.morphAttributes.position!==void 0&&(le=1),U.morphAttributes.normal!==void 0&&(le=2),U.morphAttributes.color!==void 0&&(le=3);let W,te,pe,we;if(Y){let Kt=Jn[Y];W=Kt.vertexShader,te=Kt.fragmentShader}else W=_.vertexShader,te=_.fragmentShader,l.update(_),pe=l.getVertexShaderID(_),we=l.getFragmentShaderID(_);let Ee=n.getRenderTarget(),Be=Q.isInstancedMesh===!0,ke=Q.isBatchedMesh===!0,Ue=!!_.map,et=!!_.matcap,G=!!V,Dt=!!_.aoMap,Le=!!_.lightMap,ze=!!_.bumpMap,Me=!!_.normalMap,gt=!!_.displacementMap,Ve=!!_.emissiveMap,S=!!_.metalnessMap,v=!!_.roughnessMap,X=_.anisotropy>0,ae=_.clearcoat>0,se=_.iridescence>0,re=_.sheen>0,Se=_.transmission>0,me=X&&!!_.anisotropyMap,ve=ae&&!!_.clearcoatMap,Ne=ae&&!!_.clearcoatNormalMap,We=ae&&!!_.clearcoatRoughnessMap,ie=se&&!!_.iridescenceMap,tt=se&&!!_.iridescenceThicknessMap,w=re&&!!_.sheenColorMap,ne=re&&!!_.sheenRoughnessMap,fe=!!_.specularMap,oe=!!_.specularColorMap,Te=!!_.specularIntensityMap,Je=Se&&!!_.transmissionMap,nt=Se&&!!_.thicknessMap,Ze=!!_.gradientMap,ue=!!_.alphaMap,P=_.alphaTest>0,ce=!!_.alphaHash,he=!!_.extensions,Ie=!!U.attributes.uv1,Ae=!!U.attributes.uv2,st=!!U.attributes.uv3,rt=jn;return _.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:te,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:we,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:ke,instancing:Be,instancingColor:Be&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:gi,map:Ue,matcap:et,envMap:G,envMapMode:G&&V.mapping,envMapCubeUVHeight:F,aoMap:Dt,lightMap:Le,bumpMap:ze,normalMap:Me,displacementMap:f&&gt,emissiveMap:Ve,normalMapObjectSpace:Me&&_.normalMapType===Bd,normalMapTangentSpace:Me&&_.normalMapType===Lu,metalnessMap:S,roughnessMap:v,anisotropy:X,anisotropyMap:me,clearcoat:ae,clearcoatMap:ve,clearcoatNormalMap:Ne,clearcoatRoughnessMap:We,iridescence:se,iridescenceMap:ie,iridescenceThicknessMap:tt,sheen:re,sheenColorMap:w,sheenRoughnessMap:ne,specularMap:fe,specularColorMap:oe,specularIntensityMap:Te,transmission:Se,transmissionMap:Je,thicknessMap:nt,gradientMap:Ze,opaque:_.transparent===!1&&_.blending===Vs,alphaMap:ue,alphaTest:P,alphaHash:ce,combine:_.combine,mapUv:Ue&&x(_.map.channel),aoMapUv:Dt&&x(_.aoMap.channel),lightMapUv:Le&&x(_.lightMap.channel),bumpMapUv:ze&&x(_.bumpMap.channel),normalMapUv:Me&&x(_.normalMap.channel),displacementMapUv:gt&&x(_.displacementMap.channel),emissiveMapUv:Ve&&x(_.emissiveMap.channel),metalnessMapUv:S&&x(_.metalnessMap.channel),roughnessMapUv:v&&x(_.roughnessMap.channel),anisotropyMapUv:me&&x(_.anisotropyMap.channel),clearcoatMapUv:ve&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:w&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&x(_.sheenRoughnessMap.channel),specularMapUv:fe&&x(_.specularMap.channel),specularColorMapUv:oe&&x(_.specularColorMap.channel),specularIntensityMapUv:Te&&x(_.specularIntensityMap.channel),transmissionMapUv:Je&&x(_.transmissionMap.channel),thicknessMapUv:nt&&x(_.thicknessMap.channel),alphaMapUv:ue&&x(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Me||X),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ae,vertexUv3s:st,pointsUvs:Q.isPoints===!0&&!!U.attributes.uv&&(Ue||ue),fog:!!T,useFog:_.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:he&&_.extensions.derivatives===!0,extensionFragDepth:he&&_.extensions.fragDepth===!0,extensionDrawBuffers:he&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(E(y,_),M(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function E(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function I(_){let y=g[_.type],C;if(y){let L=Jn[y];C=Oi.clone(L.uniforms)}else C=_.uniforms;return C}function D(_,y){let C;for(let L=0,Q=c.length;L<Q;L++){let T=c[L];if(T.cacheKey===y){C=T,++C.usedTimes;break}}return C===void 0&&(C=new L_(n,y,_,r),c.push(C)),C}function R(_){if(--_.usedTimes===0){let y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),_.destroy()}}function A(_){l.remove(_)}function ee(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:I,acquireProgram:D,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:ee}}function U_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function N_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function du(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,m,g,x,p){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=p),e++,d}function a(u,f,m,g,x,p){let d=o(u,f,m,g,x,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,x,p){let d=o(u,f,m,g,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||N_),i.length>1&&i.sort(f||fu),s.length>1&&s.sort(f||fu)}function h(){for(let u=e,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function O_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new du,n.set(i,[o])):s>=r.length?(o=new du,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function z_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new _e};break;case"SpotLight":t={position:new O,direction:new O,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function F_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var B_=0;function k_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function H_(n,e){let t=new z_,i=F_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,o=new wt,a=new wt;function l(h,u){let f=0,m=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let x=0,p=0,d=0,E=0,M=0,I=0,D=0,R=0,A=0,ee=0,_=0;h.sort(k_);let y=u===!0?Math.PI:1;for(let L=0,Q=h.length;L<Q;L++){let T=h[L],U=T.color,B=T.intensity,V=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)f+=U.r*B*y,m+=U.g*B*y,g+=U.b*B*y;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(T.sh.coefficients[Y],B);_++}else if(T.isDirectionalLight){let Y=t.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity*y),T.castShadow){let J=T.shadow,j=i.get(T);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.directionalShadow[x]=j,s.directionalShadowMap[x]=F,s.directionalShadowMatrix[x]=T.shadow.matrix,I++}s.directional[x]=Y,x++}else if(T.isSpotLight){let Y=t.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(U).multiplyScalar(B*y),Y.distance=V,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,s.spot[d]=Y;let J=T.shadow;if(T.map&&(s.spotLightMap[A]=T.map,A++,J.updateMatrices(T),T.castShadow&&ee++),s.spotLightMatrix[d]=J.matrix,T.castShadow){let j=i.get(T);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.spotShadow[d]=j,s.spotShadowMap[d]=F,R++}d++}else if(T.isRectAreaLight){let Y=t.get(T);Y.color.copy(U).multiplyScalar(B),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),s.rectArea[E]=Y,E++}else if(T.isPointLight){let Y=t.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity*y),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){let J=T.shadow,j=i.get(T);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,s.pointShadow[p]=j,s.pointShadowMap[p]=F,s.pointShadowMatrix[p]=T.shadow.matrix,D++}s.point[p]=Y,p++}else if(T.isHemisphereLight){let Y=t.get(T);Y.skyColor.copy(T.color).multiplyScalar(B*y),Y.groundColor.copy(T.groundColor).multiplyScalar(B*y),s.hemi[M]=Y,M++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let C=s.hash;(C.directionalLength!==x||C.pointLength!==p||C.spotLength!==d||C.rectAreaLength!==E||C.hemiLength!==M||C.numDirectionalShadows!==I||C.numPointShadows!==D||C.numSpotShadows!==R||C.numSpotMaps!==A||C.numLightProbes!==_)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=E,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=R+A-ee,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=ee,s.numLightProbes=_,C.directionalLength=x,C.pointLength=p,C.spotLength=d,C.rectAreaLength=E,C.hemiLength=M,C.numDirectionalShadows=I,C.numPointShadows=D,C.numSpotShadows=R,C.numSpotMaps=A,C.numLightProbes=_,s.version=B_++)}function c(h,u){let f=0,m=0,g=0,x=0,p=0,d=u.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){let I=h[E];if(I.isDirectionalLight){let D=s.directional[f];D.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),f++}else if(I.isSpotLight){let D=s.spot[g];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(d),D.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),g++}else if(I.isRectAreaLight){let D=s.rectArea[x];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(d),a.identity(),o.copy(I.matrixWorld),o.premultiply(d),a.extractRotation(o),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),x++}else if(I.isPointLight){let D=s.point[m];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(d),m++}else if(I.isHemisphereLight){let D=s.hemi[p];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function pu(n,e){let t=new H_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function V_(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new pu(n,e),t.set(r,[l])):o>=a.length?(l=new pu(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var zl=class extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`;function X_(n,e,t){let i=new wr,s=new be,r=new be,o=new zt,a=new zl({depthPacking:Fd}),l=new Fl,c={},h=t.maxTextureSize,u={[Ui]:un,[un]:Ui,[Cn]:Cn},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:G_,fragmentShader:W_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new ei;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new vt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let d=this.type;this.render=function(R,A,ee){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let _=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Kn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let Q=d!==pi&&this.type===pi,T=d===pi&&this.type!==pi;for(let U=0,B=R.length;U<B;U++){let V=R[U],F=V.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Y=F.getFrameExtents();if(s.multiply(Y),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null||Q===!0||T===!0){let j=this.type!==pi?{minFilter:tn,magFilter:tn}:{};F.map!==null&&F.map.dispose(),F.map=new rn(s.x,s.y,j),F.map.texture.name=V.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let J=F.getViewportCount();for(let j=0;j<J;j++){let le=F.getViewport(j);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),L.viewport(o),F.updateMatrices(V,j),i=F.getFrustum(),I(A,ee,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===pi&&E(F,ee),F.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(_,y,C)};function E(R,A){let ee=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new rn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,ee,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,ee,m,x,null)}function M(R,A,ee,_){let y=null,C=ee.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)y=C;else if(y=ee.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=y.uuid,Q=A.uuid,T=c[L];T===void 0&&(T={},c[L]=T);let U=T[Q];U===void 0&&(U=y.clone(),T[Q]=U,A.addEventListener("dispose",D)),y=U}if(y.visible=A.visible,y.wireframe=A.wireframe,_===pi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,ee.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=n.properties.get(y);L.light=ee}return y}function I(R,A,ee,_,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===pi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld);let Q=e.update(R),T=R.material;if(Array.isArray(T)){let U=Q.groups;for(let B=0,V=U.length;B<V;B++){let F=U[B],Y=T[F.materialIndex];if(Y&&Y.visible){let J=M(R,Y,_,y);R.onBeforeShadow(n,R,A,ee,Q,J,F),n.renderBufferDirect(ee,null,Q,J,R,F),R.onAfterShadow(n,R,A,ee,Q,J,F)}}}else if(T.visible){let U=M(R,T,_,y);R.onBeforeShadow(n,R,A,ee,Q,U,null),n.renderBufferDirect(ee,null,Q,U,R,null),R.onAfterShadow(n,R,A,ee,Q,U,null)}}let L=R.children;for(let Q=0,T=L.length;Q<T;Q++)I(L[Q],A,ee,_,y)}function D(R){R.target.removeEventListener("dispose",D);for(let ee in c){let _=c[ee],y=R.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}function q_(n,e,t){let i=t.isWebGL2;function s(){let P=!1,ce=new zt,he=null,Ie=new zt(0,0,0,0);return{setMask:function(Ae){he!==Ae&&!P&&(n.colorMask(Ae,Ae,Ae,Ae),he=Ae)},setLocked:function(Ae){P=Ae},setClear:function(Ae,st,rt,Ut,Kt){Kt===!0&&(Ae*=Ut,st*=Ut,rt*=Ut),ce.set(Ae,st,rt,Ut),Ie.equals(ce)===!1&&(n.clearColor(Ae,st,rt,Ut),Ie.copy(ce))},reset:function(){P=!1,he=null,Ie.set(-1,0,0,0)}}}function r(){let P=!1,ce=null,he=null,Ie=null;return{setTest:function(Ae){Ae?ke(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(Ae){ce!==Ae&&!P&&(n.depthMask(Ae),ce=Ae)},setFunc:function(Ae){if(he!==Ae){switch(Ae){case xd:n.depthFunc(n.NEVER);break;case yd:n.depthFunc(n.ALWAYS);break;case vd:n.depthFunc(n.LESS);break;case Sa:n.depthFunc(n.LEQUAL);break;case Md:n.depthFunc(n.EQUAL);break;case bd:n.depthFunc(n.GEQUAL);break;case Sd:n.depthFunc(n.GREATER);break;case Ed:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Ae}},setLocked:function(Ae){P=Ae},setClear:function(Ae){Ie!==Ae&&(n.clearDepth(Ae),Ie=Ae)},reset:function(){P=!1,ce=null,he=null,Ie=null}}}function o(){let P=!1,ce=null,he=null,Ie=null,Ae=null,st=null,rt=null,Ut=null,Kt=null;return{setTest:function(dt){P||(dt?ke(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(dt){ce!==dt&&!P&&(n.stencilMask(dt),ce=dt)},setFunc:function(dt,jt,$n){(he!==dt||Ie!==jt||Ae!==$n)&&(n.stencilFunc(dt,jt,$n),he=dt,Ie=jt,Ae=$n)},setOp:function(dt,jt,$n){(st!==dt||rt!==jt||Ut!==$n)&&(n.stencilOp(dt,jt,$n),st=dt,rt=jt,Ut=$n)},setLocked:function(dt){P=dt},setClear:function(dt){Kt!==dt&&(n.clearStencil(dt),Kt=dt)},reset:function(){P=!1,ce=null,he=null,Ie=null,Ae=null,st=null,rt=null,Ut=null,Kt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,x=[],p=null,d=!1,E=null,M=null,I=null,D=null,R=null,A=null,ee=null,_=new _e(0,0,0),y=0,C=!1,L=null,Q=null,T=null,U=null,B=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Y=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=Y>=1):J.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=Y>=2);let j=null,le={},W=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),pe=new zt().fromArray(W),we=new zt().fromArray(te);function Ee(P,ce,he,Ie){let Ae=new Uint8Array(4),st=n.createTexture();n.bindTexture(P,st),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<he;rt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ce+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return st}let Be={};Be[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ke(n.DEPTH_TEST),l.setFunc(Sa),Ve(!1),S(Zc),ke(n.CULL_FACE),Me(Kn);function ke(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function Ue(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function et(P,ce){return m[P]!==ce?(n.bindFramebuffer(P,ce),m[P]=ce,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ce),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ce)),!0):!1}function G(P,ce){let he=x,Ie=!1;if(P)if(he=g.get(ce),he===void 0&&(he=[],g.set(ce,he)),P.isWebGLMultipleRenderTargets){let Ae=P.texture;if(he.length!==Ae.length||he[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=Ae.length;st<rt;st++)he[st]=n.COLOR_ATTACHMENT0+st;he.length=Ae.length,Ie=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,Ie=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Dt(P){return p!==P?(n.useProgram(P),p=P,!0):!1}let Le={[es]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[sd]:n.FUNC_REVERSE_SUBTRACT};if(i)Le[Kc]=n.MIN,Le[jc]=n.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(Le[Kc]=P.MIN_EXT,Le[jc]=P.MAX_EXT)}let ze={[rd]:n.ZERO,[ad]:n.ONE,[od]:n.SRC_COLOR,[yl]:n.SRC_ALPHA,[dd]:n.SRC_ALPHA_SATURATE,[ud]:n.DST_COLOR,[cd]:n.DST_ALPHA,[ld]:n.ONE_MINUS_SRC_COLOR,[vl]:n.ONE_MINUS_SRC_ALPHA,[fd]:n.ONE_MINUS_DST_COLOR,[hd]:n.ONE_MINUS_DST_ALPHA,[pd]:n.CONSTANT_COLOR,[md]:n.ONE_MINUS_CONSTANT_COLOR,[gd]:n.CONSTANT_ALPHA,[_d]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(P,ce,he,Ie,Ae,st,rt,Ut,Kt,dt){if(P===Kn){d===!0&&(Ue(n.BLEND),d=!1);return}if(d===!1&&(ke(n.BLEND),d=!0),P!==nd){if(P!==E||dt!==C){if((M!==es||R!==es)&&(n.blendEquation(n.FUNC_ADD),M=es,R=es),dt)switch(P){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ba:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ba:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}I=null,D=null,A=null,ee=null,_.set(0,0,0),y=0,E=P,C=dt}return}Ae=Ae||ce,st=st||he,rt=rt||Ie,(ce!==M||Ae!==R)&&(n.blendEquationSeparate(Le[ce],Le[Ae]),M=ce,R=Ae),(he!==I||Ie!==D||st!==A||rt!==ee)&&(n.blendFuncSeparate(ze[he],ze[Ie],ze[st],ze[rt]),I=he,D=Ie,A=st,ee=rt),(Ut.equals(_)===!1||Kt!==y)&&(n.blendColor(Ut.r,Ut.g,Ut.b,Kt),_.copy(Ut),y=Kt),E=P,C=!1}function gt(P,ce){P.side===Cn?Ue(n.CULL_FACE):ke(n.CULL_FACE);let he=P.side===un;ce&&(he=!he),Ve(he),P.blending===Vs&&P.transparent===!1?Me(Kn):Me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Ie=P.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),X(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ke(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){L!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),L=P)}function S(P){P!==ed?(ke(n.CULL_FACE),P!==Q&&(P===Zc?n.cullFace(n.BACK):P===td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),Q=P}function v(P){P!==T&&(F&&n.lineWidth(P),T=P)}function X(P,ce,he){P?(ke(n.POLYGON_OFFSET_FILL),(U!==ce||B!==he)&&(n.polygonOffset(ce,he),U=ce,B=he)):Ue(n.POLYGON_OFFSET_FILL)}function ae(P){P?ke(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function se(P){P===void 0&&(P=n.TEXTURE0+V-1),j!==P&&(n.activeTexture(P),j=P)}function re(P,ce,he){he===void 0&&(j===null?he=n.TEXTURE0+V-1:he=j);let Ie=le[he];Ie===void 0&&(Ie={type:void 0,texture:void 0},le[he]=Ie),(Ie.type!==P||Ie.texture!==ce)&&(j!==he&&(n.activeTexture(he),j=he),n.bindTexture(P,ce||Be[P]),Ie.type=P,Ie.texture=ce)}function Se(){let P=le[j];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function w(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(P){pe.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),pe.copy(P))}function Je(P){we.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),we.copy(P))}function nt(P,ce){let he=u.get(ce);he===void 0&&(he=new WeakMap,u.set(ce,he));let Ie=he.get(P);Ie===void 0&&(Ie=n.getUniformBlockIndex(ce,P.name),he.set(P,Ie))}function Ze(P,ce){let Ie=u.get(ce).get(P);h.get(ce)!==Ie&&(n.uniformBlockBinding(ce,Ie,P.__bindingPointIndex),h.set(ce,Ie))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},j=null,le={},m={},g=new WeakMap,x=[],p=null,d=!1,E=null,M=null,I=null,D=null,R=null,A=null,ee=null,_=new _e(0,0,0),y=0,C=!1,L=null,Q=null,T=null,U=null,B=null,pe.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ke,disable:Ue,bindFramebuffer:et,drawBuffers:G,useProgram:Dt,setBlending:Me,setMaterial:gt,setFlipSided:Ve,setCullFace:S,setLineWidth:v,setPolygonOffset:X,setScissorTest:ae,activeTexture:se,bindTexture:re,unbindTexture:Se,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:fe,texImage3D:oe,updateUBOMapping:nt,uniformBlockBinding:Ze,texStorage2D:w,texStorage3D:ne,texSubImage2D:Ne,texSubImage3D:We,compressedTexSubImage2D:ie,compressedTexSubImage3D:tt,scissor:Te,viewport:Je,reset:ue}}function Y_(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return m?new OffscreenCanvas(S,v):La("canvas")}function x(S,v,X,ae){let se=1;if((S.width>ae||S.height>ae)&&(se=ae/Math.max(S.width,S.height)),se<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let re=v?Pa:Math.floor,Se=re(se*S.width),me=re(se*S.height);u===void 0&&(u=g(Se,me));let ve=X?g(Se,me):u;return ve.width=Se,ve.height=me,ve.getContext("2d").drawImage(S,0,0,Se,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Se+"x"+me+")."),ve}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return wl(S.width)&&wl(S.height)}function d(S){return a?!1:S.wrapS!==Bn||S.wrapT!==Bn||S.minFilter!==tn&&S.minFilter!==An}function E(S,v){return S.generateMipmaps&&v&&S.minFilter!==tn&&S.minFilter!==An}function M(S){n.generateMipmap(S)}function I(S,v,X,ae,se=!1){if(a===!1)return v;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let re=v;if(v===n.RED&&(X===n.FLOAT&&(re=n.R32F),X===n.HALF_FLOAT&&(re=n.R16F),X===n.UNSIGNED_BYTE&&(re=n.R8)),v===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.R8UI),X===n.UNSIGNED_SHORT&&(re=n.R16UI),X===n.UNSIGNED_INT&&(re=n.R32UI),X===n.BYTE&&(re=n.R8I),X===n.SHORT&&(re=n.R16I),X===n.INT&&(re=n.R32I)),v===n.RG&&(X===n.FLOAT&&(re=n.RG32F),X===n.HALF_FLOAT&&(re=n.RG16F),X===n.UNSIGNED_BYTE&&(re=n.RG8)),v===n.RGBA){let Se=se?wa:at.getTransfer(ae);X===n.FLOAT&&(re=n.RGBA32F),X===n.HALF_FLOAT&&(re=n.RGBA16F),X===n.UNSIGNED_BYTE&&(re=Se===ut?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function D(S,v,X){return E(S,X)===!0||S.isFramebufferTexture&&S.minFilter!==tn&&S.minFilter!==An?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function R(S){return S===tn||S===Qc||S===Go?n.NEAREST:n.LINEAR}function A(S){let v=S.target;v.removeEventListener("dispose",A),_(v),v.isVideoTexture&&h.delete(v)}function ee(S){let v=S.target;v.removeEventListener("dispose",ee),C(v)}function _(S){let v=i.get(S);if(v.__webglInit===void 0)return;let X=S.source,ae=f.get(X);if(ae){let se=ae[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(S),Object.keys(ae).length===0&&f.delete(X)}i.remove(S)}function y(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let X=S.source,ae=f.get(X);delete ae[v.__cacheKey],o.memory.textures--}function C(S){let v=S.texture,X=i.get(S),ae=i.get(v);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(X.__webglFramebuffer[se]))for(let re=0;re<X.__webglFramebuffer[se].length;re++)n.deleteFramebuffer(X.__webglFramebuffer[se][re]);else n.deleteFramebuffer(X.__webglFramebuffer[se]);X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[se])}else{if(Array.isArray(X.__webglFramebuffer))for(let se=0;se<X.__webglFramebuffer.length;se++)n.deleteFramebuffer(X.__webglFramebuffer[se]);else n.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let se=0;se<X.__webglColorRenderbuffer.length;se++)X.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[se]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let se=0,re=v.length;se<re;se++){let Se=i.get(v[se]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(v[se])}i.remove(v),i.remove(S)}let L=0;function Q(){L=0}function T(){let S=L;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),L+=1,S}function U(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function B(S,v){let X=i.get(S);if(S.isVideoTexture&&gt(S),S.isRenderTargetTexture===!1&&S.version>0&&X.__version!==S.version){let ae=S.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(X,S,v);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+v)}function V(S,v){let X=i.get(S);if(S.version>0&&X.__version!==S.version){pe(X,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+v)}function F(S,v){let X=i.get(S);if(S.version>0&&X.__version!==S.version){pe(X,S,v);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+v)}function Y(S,v){let X=i.get(S);if(S.version>0&&X.__version!==S.version){we(X,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+v)}let J={[Sl]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[El]:n.MIRRORED_REPEAT},j={[tn]:n.NEAREST,[Qc]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Cd]:n.LINEAR_MIPMAP_NEAREST,[Sr]:n.LINEAR_MIPMAP_LINEAR},le={[kd]:n.NEVER,[qd]:n.ALWAYS,[Hd]:n.LESS,[Iu]:n.LEQUAL,[Vd]:n.EQUAL,[Xd]:n.GEQUAL,[Gd]:n.GREATER,[Wd]:n.NOTEQUAL};function W(S,v,X){if(X?(n.texParameteri(S,n.TEXTURE_WRAP_S,J[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,J[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,J[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,j[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,j[v.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Bn||v.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,R(v.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==tn&&v.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===tn||v.minFilter!==Go&&v.minFilter!==Sr||v.type===Ii&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Hn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(S,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function te(S,v){let X=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));let ae=v.source,se=f.get(ae);se===void 0&&(se={},f.set(ae,se));let re=U(v);if(re!==S.__cacheKey){se[re]===void 0&&(se[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[re].usedTimes++;let Se=se[S.__cacheKey];Se!==void 0&&(se[S.__cacheKey].usedTimes--,Se.usedTimes===0&&y(v)),S.__cacheKey=re,S.__webglTexture=se[re].texture}return X}function pe(S,v,X){let ae=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=n.TEXTURE_3D);let se=te(S,v),re=v.source;t.bindTexture(ae,S.__webglTexture,n.TEXTURE0+X);let Se=i.get(re);if(re.version!==Se.__version||se===!0){t.activeTexture(n.TEXTURE0+X);let me=at.getPrimaries(at.workingColorSpace),ve=v.colorSpace===Rn?null:at.getPrimaries(v.colorSpace),Ne=v.colorSpace===Rn||me===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let We=d(v)&&p(v.image)===!1,ie=x(v.image,We,!1,s.maxTextureSize);ie=Ve(v,ie);let tt=p(ie)||a,w=r.convert(v.format,v.colorSpace),ne=r.convert(v.type),fe=I(v.internalFormat,w,ne,v.colorSpace,v.isVideoTexture);W(ae,v,tt);let oe,Te=v.mipmaps,Je=a&&v.isVideoTexture!==!0&&fe!==Ru,nt=Se.__version===void 0||se===!0,Ze=D(v,ie,tt);if(v.isDepthTexture)fe=n.DEPTH_COMPONENT,a?v.type===Ii?fe=n.DEPTH_COMPONENT32F:v.type===Li?fe=n.DEPTH_COMPONENT24:v.type===ns?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:v.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===is&&fe===n.DEPTH_COMPONENT&&v.type!==ac&&v.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Li,ne=r.convert(v.type)),v.format===Ys&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,v.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ns,ne=r.convert(v.type))),nt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,fe,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,fe,ie.width,ie.height,0,w,ne,null));else if(v.isDataTexture)if(Te.length>0&&tt){Je&&nt&&t.texStorage2D(n.TEXTURE_2D,Ze,fe,Te[0].width,Te[0].height);for(let ue=0,P=Te.length;ue<P;ue++)oe=Te[ue],Je?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,oe.width,oe.height,w,ne,oe.data):t.texImage2D(n.TEXTURE_2D,ue,fe,oe.width,oe.height,0,w,ne,oe.data);v.generateMipmaps=!1}else Je?(nt&&t.texStorage2D(n.TEXTURE_2D,Ze,fe,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,w,ne,ie.data)):t.texImage2D(n.TEXTURE_2D,0,fe,ie.width,ie.height,0,w,ne,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Je&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,fe,Te[0].width,Te[0].height,ie.depth);for(let ue=0,P=Te.length;ue<P;ue++)oe=Te[ue],v.format!==kn?w!==null?Je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,oe.width,oe.height,ie.depth,w,oe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,fe,oe.width,oe.height,ie.depth,0,oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,oe.width,oe.height,ie.depth,w,ne,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,fe,oe.width,oe.height,ie.depth,0,w,ne,oe.data)}else{Je&&nt&&t.texStorage2D(n.TEXTURE_2D,Ze,fe,Te[0].width,Te[0].height);for(let ue=0,P=Te.length;ue<P;ue++)oe=Te[ue],v.format!==kn?w!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,oe.width,oe.height,w,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,oe.width,oe.height,w,ne,oe.data):t.texImage2D(n.TEXTURE_2D,ue,fe,oe.width,oe.height,0,w,ne,oe.data)}else if(v.isDataArrayTexture)Je?(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,fe,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,w,ne,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,ie.width,ie.height,ie.depth,0,w,ne,ie.data);else if(v.isData3DTexture)Je?(nt&&t.texStorage3D(n.TEXTURE_3D,Ze,fe,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,w,ne,ie.data)):t.texImage3D(n.TEXTURE_3D,0,fe,ie.width,ie.height,ie.depth,0,w,ne,ie.data);else if(v.isFramebufferTexture){if(nt)if(Je)t.texStorage2D(n.TEXTURE_2D,Ze,fe,ie.width,ie.height);else{let ue=ie.width,P=ie.height;for(let ce=0;ce<Ze;ce++)t.texImage2D(n.TEXTURE_2D,ce,fe,ue,P,0,w,ne,null),ue>>=1,P>>=1}}else if(Te.length>0&&tt){Je&&nt&&t.texStorage2D(n.TEXTURE_2D,Ze,fe,Te[0].width,Te[0].height);for(let ue=0,P=Te.length;ue<P;ue++)oe=Te[ue],Je?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,w,ne,oe):t.texImage2D(n.TEXTURE_2D,ue,fe,w,ne,oe);v.generateMipmaps=!1}else Je?(nt&&t.texStorage2D(n.TEXTURE_2D,Ze,fe,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,w,ne,ie)):t.texImage2D(n.TEXTURE_2D,0,fe,w,ne,ie);E(v,tt)&&M(ae),Se.__version=re.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function we(S,v,X){if(v.image.length!==6)return;let ae=te(S,v),se=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+X);let re=i.get(se);if(se.version!==re.__version||ae===!0){t.activeTexture(n.TEXTURE0+X);let Se=at.getPrimaries(at.workingColorSpace),me=v.colorSpace===Rn?null:at.getPrimaries(v.colorSpace),ve=v.colorSpace===Rn||Se===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,We=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let ue=0;ue<6;ue++)!Ne&&!We?ie[ue]=x(v.image[ue],!1,!0,s.maxCubemapSize):ie[ue]=We?v.image[ue].image:v.image[ue],ie[ue]=Ve(v,ie[ue]);let tt=ie[0],w=p(tt)||a,ne=r.convert(v.format,v.colorSpace),fe=r.convert(v.type),oe=I(v.internalFormat,ne,fe,v.colorSpace),Te=a&&v.isVideoTexture!==!0,Je=re.__version===void 0||ae===!0,nt=D(v,tt,w);W(n.TEXTURE_CUBE_MAP,v,w);let Ze;if(Ne){Te&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,nt,oe,tt.width,tt.height);for(let ue=0;ue<6;ue++){Ze=ie[ue].mipmaps;for(let P=0;P<Ze.length;P++){let ce=Ze[P];v.format!==kn?ne!==null?Te?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,P,0,0,ce.width,ce.height,ne,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,P,oe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,P,0,0,ce.width,ce.height,ne,fe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,P,oe,ce.width,ce.height,0,ne,fe,ce.data)}}}else{Ze=v.mipmaps,Te&&Je&&(Ze.length>0&&nt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,nt,oe,ie[0].width,ie[0].height));for(let ue=0;ue<6;ue++)if(We){Te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ie[ue].width,ie[ue].height,ne,fe,ie[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,oe,ie[ue].width,ie[ue].height,0,ne,fe,ie[ue].data);for(let P=0;P<Ze.length;P++){let he=Ze[P].image[ue].image;Te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,P+1,0,0,he.width,he.height,ne,fe,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,P+1,oe,he.width,he.height,0,ne,fe,he.data)}}else{Te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ne,fe,ie[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,oe,ne,fe,ie[ue]);for(let P=0;P<Ze.length;P++){let ce=Ze[P];Te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,P+1,0,0,ne,fe,ce.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,P+1,oe,ne,fe,ce.image[ue])}}}E(v,w)&&M(n.TEXTURE_CUBE_MAP),re.__version=se.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Ee(S,v,X,ae,se,re){let Se=r.convert(X.format,X.colorSpace),me=r.convert(X.type),ve=I(X.internalFormat,Se,me,X.colorSpace);if(!i.get(v).__hasExternalTextures){let We=Math.max(1,v.width>>re),ie=Math.max(1,v.height>>re);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,re,ve,We,ie,v.depth,0,Se,me,null):t.texImage2D(se,re,ve,We,ie,0,Se,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,i.get(X).__webglTexture,0,ze(v)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,i.get(X).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(S,v,X){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let ae=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||Me(v)){let se=v.depthTexture;se&&se.isDepthTexture&&(se.type===Ii?ae=n.DEPTH_COMPONENT32F:se.type===Li&&(ae=n.DEPTH_COMPONENT24));let re=ze(v);Me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ae,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ae,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let ae=ze(v);X&&Me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,v.width,v.height):Me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let ae=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let se=0;se<ae.length;se++){let re=ae[se],Se=r.convert(re.format,re.colorSpace),me=r.convert(re.type),ve=I(re.internalFormat,Se,me,re.colorSpace),Ne=ze(v);X&&Me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ve,v.width,v.height):Me(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);let ae=i.get(v.depthTexture).__webglTexture,se=ze(v);if(v.depthTexture.format===is)Me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(v.depthTexture.format===Ys)Me(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ue(S){let v=i.get(S),X=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ke(v.__webglFramebuffer,S)}else if(X){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]=n.createRenderbuffer(),Be(v.__webglDepthbuffer[ae],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Be(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(S,v,X){let ae=i.get(S);v!==void 0&&Ee(ae.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ue(S)}function G(S){let v=S.texture,X=i.get(S),ae=i.get(v);S.addEventListener("dispose",ee),S.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=v.version,o.memory.textures++);let se=S.isWebGLCubeRenderTarget===!0,re=S.isWebGLMultipleRenderTargets===!0,Se=p(S)||a;if(se){X.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[me]=[];for(let ve=0;ve<v.mipmaps.length;ve++)X.__webglFramebuffer[me][ve]=n.createFramebuffer()}else X.__webglFramebuffer[me]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)X.__webglFramebuffer[me]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(re)if(s.drawBuffers){let me=S.texture;for(let ve=0,Ne=me.length;ve<Ne;ve++){let We=i.get(me[ve]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Me(S)===!1){let me=re?v:[v];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<me.length;ve++){let Ne=me[ve];X.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);let We=r.convert(Ne.format,Ne.colorSpace),ie=r.convert(Ne.type),tt=I(Ne.internalFormat,We,ie,Ne.colorSpace,S.isXRRenderTarget===!0),w=ze(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,w,tt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),W(n.TEXTURE_CUBE_MAP,v,Se);for(let me=0;me<6;me++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Ee(X.__webglFramebuffer[me][ve],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else Ee(X.__webglFramebuffer[me],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);E(v,Se)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){let me=S.texture;for(let ve=0,Ne=me.length;ve<Ne;ve++){let We=me[ve],ie=i.get(We);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),W(n.TEXTURE_2D,We,Se),Ee(X.__webglFramebuffer,S,We,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),E(We,Se)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?me=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ae.__webglTexture),W(me,v,Se),a&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Ee(X.__webglFramebuffer[ve],S,v,n.COLOR_ATTACHMENT0,me,ve);else Ee(X.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,me,0);E(v,Se)&&M(me),t.unbindTexture()}S.depthBuffer&&Ue(S)}function Dt(S){let v=p(S)||a,X=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ae=0,se=X.length;ae<se;ae++){let re=X[ae];if(E(re,v)){let Se=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(re).__webglTexture;t.bindTexture(Se,me),M(Se),t.unbindTexture()}}}function Le(S){if(a&&S.samples>0&&Me(S)===!1){let v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],X=S.width,ae=S.height,se=n.COLOR_BUFFER_BIT,re=[],Se=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(S),ve=S.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ne=0;Ne<v.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ne=0;Ne<v.length;Ne++){re.push(n.COLOR_ATTACHMENT0+Ne),S.depthBuffer&&re.push(Se);let We=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(We===!1&&(S.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Ne]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),ve){let ie=i.get(v[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,X,ae,0,0,X,ae,se,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ne=0;Ne<v.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,me.__webglColorRenderbuffer[Ne]);let We=i.get(v[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function ze(S){return Math.min(s.maxSamples,S.samples)}function Me(S){let v=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function gt(S){let v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Ve(S,v){let X=S.colorSpace,ae=S.format,se=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Tl||X!==gi&&X!==Rn&&(at.getTransfer(X)===ut?a===!1?e.has("EXT_sRGB")===!0&&ae===kn?(S.format=Tl,S.minFilter=An,S.generateMipmaps=!1):v=Ia.sRGBToLinear(v):(ae!==kn||se!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),v}this.allocateTextureUnit=T,this.resetTextureUnits=Q,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=F,this.setTextureCube=Y,this.rebindTextures=et,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Me}function Z_(n,e,t){let i=t.isWebGL2;function s(r,o=Rn){let a,l=at.getTransfer(o);if(r===Di)return n.UNSIGNED_BYTE;if(r===Eu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Tu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Rd)return n.BYTE;if(r===Pd)return n.SHORT;if(r===ac)return n.UNSIGNED_SHORT;if(r===Su)return n.INT;if(r===Li)return n.UNSIGNED_INT;if(r===Ii)return n.FLOAT;if(r===Hn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ld)return n.ALPHA;if(r===kn)return n.RGBA;if(r===Id)return n.LUMINANCE;if(r===Dd)return n.LUMINANCE_ALPHA;if(r===is)return n.DEPTH_COMPONENT;if(r===Ys)return n.DEPTH_STENCIL;if(r===Tl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ud)return n.RED;if(r===wu)return n.RED_INTEGER;if(r===Nd)return n.RG;if(r===Au)return n.RG_INTEGER;if(r===Cu)return n.RGBA_INTEGER;if(r===Wo||r===Xo||r===qo||r===Yo)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Wo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Wo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eh||r===th||r===nh||r===ih)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ih)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ru)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sh||r===rh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sh)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===rh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ah||r===oh||r===lh||r===ch||r===hh||r===uh||r===fh||r===dh||r===ph||r===mh||r===gh||r===_h||r===xh||r===yh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ah)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_h)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yh)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zo||r===vh||r===Mh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Zo)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Od||r===bh||r===Sh||r===Eh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Zo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ns?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Bl=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ot=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$_={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},kl=class extends Qn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,x=t.getContextAttributes(),p=null,d=null,E=[],M=[],I=new be,D=null,R=new nn;R.layers.enable(1),R.viewport=new zt;let A=new nn;A.layers.enable(2),A.viewport=new zt;let ee=[R,A],_=new Bl;_.layers.enable(1),_.layers.enable(2);let y=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=E[W];return te===void 0&&(te=new br,E[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=E[W];return te===void 0&&(te=new br,E[W]=te),te.getGripSpace()},this.getHand=function(W){let te=E[W];return te===void 0&&(te=new br,E[W]=te),te.getHandSpace()};function L(W){let te=M.indexOf(W.inputSource);if(te===-1)return;let pe=E[te];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||o),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function Q(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",T);for(let W=0;W<E.length;W++){let te=M[W];te!==null&&(M[W]=null,E[W].disconnect(te))}y=null,C=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",T),x.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let te={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new rn(m.framebufferWidth,m.framebufferHeight,{format:kn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let te=null,pe=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?Ys:is,pe=x.stencil?ns:Li);let Ee={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ee),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new rn(f.textureWidth,f.textureHeight,{format:kn,type:Di,depthTexture:new Va(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Be=e.properties.get(d);Be.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function T(W){for(let te=0;te<W.removed.length;te++){let pe=W.removed[te],we=M.indexOf(pe);we>=0&&(M[we]=null,E[we].disconnect(pe))}for(let te=0;te<W.added.length;te++){let pe=W.added[te],we=M.indexOf(pe);if(we===-1){for(let Be=0;Be<E.length;Be++)if(Be>=M.length){M.push(pe),we=Be;break}else if(M[Be]===null){M[Be]=pe,we=Be;break}if(we===-1)break}let Ee=E[we];Ee&&Ee.connect(pe)}}let U=new O,B=new O;function V(W,te,pe){U.setFromMatrixPosition(te.matrixWorld),B.setFromMatrixPosition(pe.matrixWorld);let we=U.distanceTo(B),Ee=te.projectionMatrix.elements,Be=pe.projectionMatrix.elements,ke=Ee[14]/(Ee[10]-1),Ue=Ee[14]/(Ee[10]+1),et=(Ee[9]+1)/Ee[5],G=(Ee[9]-1)/Ee[5],Dt=(Ee[8]-1)/Ee[0],Le=(Be[8]+1)/Be[0],ze=ke*Dt,Me=ke*Le,gt=we/(-Dt+Le),Ve=gt*-Dt;te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ve),W.translateZ(gt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let S=ke+gt,v=Ue+gt,X=ze-Ve,ae=Me+(we-Ve),se=et*Ue/v*S,re=G*Ue/v*S;W.projectionMatrix.makePerspective(X,ae,se,re,S,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function F(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;_.near=A.near=R.near=W.near,_.far=A.far=R.far=W.far,(y!==_.near||C!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,C=_.far);let te=W.parent,pe=_.cameras;F(_,te);for(let we=0;we<pe.length;we++)F(pe[we],te);pe.length===2?V(_,R,A):_.projectionMatrix.copy(R.projectionMatrix),Y(W,_,te)};function Y(W,te,pe){pe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Er*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let J=null;function j(W,te){if(h=te.getViewerPose(c||o),g=te,h!==null){let pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let we=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,we=!0);for(let Ee=0;Ee<pe.length;Ee++){let Be=pe[Ee],ke=null;if(m!==null)ke=m.getViewport(Be);else{let et=u.getViewSubImage(f,Be);ke=et.viewport,Ee===0&&(e.setRenderTargetTextures(d,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(d))}let Ue=ee[Ee];Ue===void 0&&(Ue=new nn,Ue.layers.enable(Ee),Ue.viewport=new zt,ee[Ee]=Ue),Ue.matrix.fromArray(Be.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Be.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ke.x,ke.y,ke.width,ke.height),Ee===0&&(_.matrix.copy(Ue.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),we===!0&&_.cameras.push(Ue)}}for(let pe=0;pe<E.length;pe++){let we=M[pe],Ee=E[pe];we!==null&&Ee!==void 0&&Ee.update(we,te,c||o)}J&&J(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let le=new zu;le.setAnimationLoop(j),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}};function J_(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Ou(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,M,I){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,I)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,E,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===un&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===un&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E=e.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let M=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=M*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function K_(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){let I=M.program;i.uniformBlockBinding(E,I)}function c(E,M){let I=s[E.id];I===void 0&&(g(E),I=h(E),s[E.id]=I,E.addEventListener("dispose",p));let D=M.program;i.updateUBOMapping(E,D);let R=e.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let M=u();E.__bindingPointIndex=M;let I=n.createBuffer(),D=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,I),I}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=s[E.id],I=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,A=I.length;R<A;R++){let ee=Array.isArray(I[R])?I[R]:[I[R]];for(let _=0,y=ee.length;_<y;_++){let C=ee[_];if(m(C,R,_,D)===!0){let L=C.__offset,Q=Array.isArray(C.value)?C.value:[C.value],T=0;for(let U=0;U<Q.length;U++){let B=Q[U],V=x(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,L+T,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,T),T+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,M,I,D){let R=E.value,A=M+"_"+I;if(D[A]===void 0)return typeof R=="number"||typeof R=="boolean"?D[A]=R:D[A]=R.clone(),!0;{let ee=D[A];if(typeof R=="number"||typeof R=="boolean"){if(ee!==R)return D[A]=R,!0}else if(ee.equals(R)===!1)return ee.copy(R),!0}return!1}function g(E){let M=E.uniforms,I=0,D=16;for(let A=0,ee=M.length;A<ee;A++){let _=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,C=_.length;y<C;y++){let L=_[y],Q=Array.isArray(L.value)?L.value:[L.value];for(let T=0,U=Q.length;T<U;T++){let B=Q[T],V=x(B),F=I%D;F!==0&&D-F<V.boundary&&(I+=D-F),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=I,I+=V.storage}}}let R=I%D;return R>0&&(I+=D-R),E.__size=I,E.__cache={},this}function x(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){let M=E.target;M.removeEventListener("dispose",p);let I=o.indexOf(M.__bindingPointIndex);o.splice(I,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Cr=class{constructor(e={}){let{canvas:t=op(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;let M=this,I=!1,D=0,R=0,A=null,ee=-1,_=null,y=new zt,C=new zt,L=null,Q=new _e(0),T=0,U=t.width,B=t.height,V=1,F=null,Y=null,J=new zt(0,0,U,B),j=new zt(0,0,U,B),le=!1,W=new wr,te=!1,pe=!1,we=null,Ee=new wt,Be=new be,ke=new O,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return A===null?V:1}let G=i;function Dt(b,z){for(let Z=0;Z<b.length;Z++){let $=b[Z],q=t.getContext($,z);if(q!==null)return q}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ce,!1),G===null){let z=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&z.shift(),G=Dt(z,b),G===null)throw Dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Le,ze,Me,gt,Ve,S,v,X,ae,se,re,Se,me,ve,Ne,We,ie,tt,w,ne,fe,oe,Te,Je;function nt(){Le=new gg(G),ze=new hg(G,Le,e),Le.init(ze),oe=new Z_(G,Le,ze),Me=new q_(G,Le,ze),gt=new yg(G),Ve=new U_,S=new Y_(G,Le,Me,Ve,ze,oe,gt),v=new fg(M),X=new mg(M),ae=new Ap(G,ze),Te=new lg(G,Le,ae,ze),se=new _g(G,ae,gt,Te),re=new Sg(G,se,ae,gt),w=new bg(G,ze,S),We=new ug(Ve),Se=new D_(M,v,X,Le,ze,Te,We),me=new J_(M,Ve),ve=new O_,Ne=new V_(Le,ze),tt=new og(M,v,X,Me,re,f,l),ie=new X_(M,re,ze),Je=new K_(G,gt,ze,Me),ne=new cg(G,Le,gt,ze),fe=new xg(G,Le,gt,ze),gt.programs=Se.programs,M.capabilities=ze,M.extensions=Le,M.properties=Ve,M.renderLists=ve,M.shadowMap=ie,M.state=Me,M.info=gt}nt();let Ze=new kl(M,G);this.xr=Ze,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(U,B,!1))},this.getSize=function(b){return b.set(U,B)},this.setSize=function(b,z,Z=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,B=z,t.width=Math.floor(b*V),t.height=Math.floor(z*V),Z===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(U*V,B*V).floor()},this.setDrawingBufferSize=function(b,z,Z){U=b,B=z,V=Z,t.width=Math.floor(b*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,z,Z,$){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,z,Z,$),Me.viewport(y.copy(J).multiplyScalar(V).floor())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,z,Z,$){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,z,Z,$),Me.scissor(C.copy(j).multiplyScalar(V).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){Me.setScissorTest(le=b)},this.setOpaqueSort=function(b){F=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,z=!0,Z=!0){let $=0;if(b){let q=!1;if(A!==null){let xe=A.texture.format;q=xe===Cu||xe===Au||xe===wu}if(q){let xe=A.texture.type,Ce=xe===Di||xe===Li||xe===ac||xe===ns||xe===Eu||xe===Tu,Oe=tt.getClearColor(),Fe=tt.getClearAlpha(),$e=Oe.r,Ge=Oe.g,Xe=Oe.b;Ce?(m[0]=$e,m[1]=Ge,m[2]=Xe,m[3]=Fe,G.clearBufferuiv(G.COLOR,0,m)):(g[0]=$e,g[1]=Ge,g[2]=Xe,g[3]=Fe,G.clearBufferiv(G.COLOR,0,g))}else $|=G.COLOR_BUFFER_BIT}z&&($|=G.DEPTH_BUFFER_BIT),Z&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ve.dispose(),Ne.dispose(),Ve.dispose(),v.dispose(),X.dispose(),re.dispose(),Te.dispose(),Je.dispose(),Se.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Kt),Ze.removeEventListener("sessionend",dt),we&&(we.dispose(),we=null),jt.stop()};function ue(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let b=gt.autoReset,z=ie.enabled,Z=ie.autoUpdate,$=ie.needsUpdate,q=ie.type;nt(),gt.autoReset=b,ie.enabled=z,ie.autoUpdate=Z,ie.needsUpdate=$,ie.type=q}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function he(b){let z=b.target;z.removeEventListener("dispose",he),Ie(z)}function Ie(b){Ae(b),Ve.remove(b)}function Ae(b){let z=Ve.get(b).programs;z!==void 0&&(z.forEach(function(Z){Se.releaseProgram(Z)}),b.isShaderMaterial&&Se.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Z,$,q,xe){z===null&&(z=Ue);let Ce=q.isMesh&&q.matrixWorld.determinant()<0,Oe=Jf(b,z,Z,$,q);Me.setMaterial($,Ce);let Fe=Z.index,$e=1;if($.wireframe===!0){if(Fe=se.getWireframeAttribute(Z),Fe===void 0)return;$e=2}let Ge=Z.drawRange,Xe=Z.attributes.position,Tt=Ge.start*$e,gn=(Ge.start+Ge.count)*$e;xe!==null&&(Tt=Math.max(Tt,xe.start*$e),gn=Math.min(gn,(xe.start+xe.count)*$e)),Fe!==null?(Tt=Math.max(Tt,0),gn=Math.min(gn,Fe.count)):Xe!=null&&(Tt=Math.max(Tt,0),gn=Math.min(gn,Xe.count));let Nt=gn-Tt;if(Nt<0||Nt===1/0)return;Te.setup(q,$,Oe,Z,Fe);let li,yt=ne;if(Fe!==null&&(li=ae.get(Fe),yt=fe,yt.setIndex(li)),q.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*et()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(q.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),Me.setLineWidth(Ke*et()),q.isLineSegments?yt.setMode(G.LINES):q.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else q.isPoints?yt.setMode(G.POINTS):q.isSprite&&yt.setMode(G.TRIANGLES);if(q.isBatchedMesh)yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)yt.renderInstances(Tt,Nt,q.count);else if(Z.isInstancedBufferGeometry){let Ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bo=Math.min(Z.instanceCount,Ke);yt.renderInstances(Tt,Nt,Bo)}else yt.render(Tt,Nt)};function st(b,z,Z){b.transparent===!0&&b.side===Cn&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Kr(b,z,Z),b.side=Ui,b.needsUpdate=!0,Kr(b,z,Z),b.side=Cn):Kr(b,z,Z)}this.compile=function(b,z,Z=null){Z===null&&(Z=b),p=Ne.get(Z),p.init(),E.push(p),Z.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),b!==Z&&b.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(M._useLegacyLights);let $=new Set;return b.traverse(function(q){let xe=q.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){let Oe=xe[Ce];st(Oe,Z,q),$.add(Oe)}else st(xe,Z,q),$.add(xe)}),E.pop(),p=null,$},this.compileAsync=function(b,z,Z=null){let $=this.compile(b,z,Z);return new Promise(q=>{function xe(){if($.forEach(function(Ce){Ve.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){q(b);return}setTimeout(xe,10)}Le.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let rt=null;function Ut(b){rt&&rt(b)}function Kt(){jt.stop()}function dt(){jt.start()}let jt=new zu;jt.setAnimationLoop(Ut),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(b){rt=b,Ze.setAnimationLoop(b),b===null?jt.stop():jt.start()},Ze.addEventListener("sessionstart",Kt),Ze.addEventListener("sessionend",dt),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(z),z=Ze.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,z,A),p=Ne.get(b,E.length),p.init(),E.push(p),Ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(Ee),pe=this.localClippingEnabled,te=We.init(this.clippingPlanes,pe),x=ve.get(b,d.length),x.init(),d.push(x),$n(b,z,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(F,Y),this.info.render.frame++,te===!0&&We.beginShadows();let Z=p.state.shadowsArray;if(ie.render(Z,b,z),te===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(x,b),p.setupLights(M._useLegacyLights),z.isArrayCamera){let $=z.cameras;for(let q=0,xe=$.length;q<xe;q++){let Ce=$[q];Vc(x,b,Ce,Ce.viewport)}}else Vc(x,b,z);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(M,b,z),Te.resetDefaultState(),ee=-1,_=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function $n(b,z,Z,$){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){$&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);let Ce=re.update(b),Oe=b.material;Oe.visible&&x.push(b,Ce,Oe,Z,ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){let Ce=re.update(b),Oe=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ke.copy(Ce.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(Oe)){let Fe=Ce.groups;for(let $e=0,Ge=Fe.length;$e<Ge;$e++){let Xe=Fe[$e],Tt=Oe[Xe.materialIndex];Tt&&Tt.visible&&x.push(b,Ce,Tt,Z,ke.z,Xe)}}else Oe.visible&&x.push(b,Ce,Oe,Z,ke.z,null)}}let xe=b.children;for(let Ce=0,Oe=xe.length;Ce<Oe;Ce++)$n(xe[Ce],z,Z,$)}function Vc(b,z,Z,$){let q=b.opaque,xe=b.transmissive,Ce=b.transparent;p.setupLightsView(Z),te===!0&&We.setGlobalState(M.clippingPlanes,Z),xe.length>0&&$f(q,xe,z,Z),$&&Me.viewport(y.copy($)),q.length>0&&Jr(q,z,Z),xe.length>0&&Jr(xe,z,Z),Ce.length>0&&Jr(Ce,z,Z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function $f(b,z,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let xe=ze.isWebGL2;we===null&&(we=new rn(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Hn:Di,minFilter:Sr,samples:xe?4:0})),M.getDrawingBufferSize(Be),xe?we.setSize(Be.x,Be.y):we.setSize(Pa(Be.x),Pa(Be.y));let Ce=M.getRenderTarget();M.setRenderTarget(we),M.getClearColor(Q),T=M.getClearAlpha(),T<1&&M.setClearColor(16777215,.5),M.clear();let Oe=M.toneMapping;M.toneMapping=jn,Jr(b,Z,$),S.updateMultisampleRenderTarget(we),S.updateRenderTargetMipmap(we);let Fe=!1;for(let $e=0,Ge=z.length;$e<Ge;$e++){let Xe=z[$e],Tt=Xe.object,gn=Xe.geometry,Nt=Xe.material,li=Xe.group;if(Nt.side===Cn&&Tt.layers.test($.layers)){let yt=Nt.side;Nt.side=un,Nt.needsUpdate=!0,Gc(Tt,Z,$,gn,Nt,li),Nt.side=yt,Nt.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(we),S.updateRenderTargetMipmap(we)),M.setRenderTarget(Ce),M.setClearColor(Q,T),M.toneMapping=Oe}function Jr(b,z,Z){let $=z.isScene===!0?z.overrideMaterial:null;for(let q=0,xe=b.length;q<xe;q++){let Ce=b[q],Oe=Ce.object,Fe=Ce.geometry,$e=$===null?Ce.material:$,Ge=Ce.group;Oe.layers.test(Z.layers)&&Gc(Oe,z,Z,Fe,$e,Ge)}}function Gc(b,z,Z,$,q,xe){b.onBeforeRender(M,z,Z,$,q,xe),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(M,z,Z,$,b,xe),q.transparent===!0&&q.side===Cn&&q.forceSinglePass===!1?(q.side=un,q.needsUpdate=!0,M.renderBufferDirect(Z,z,$,q,b,xe),q.side=Ui,q.needsUpdate=!0,M.renderBufferDirect(Z,z,$,q,b,xe),q.side=Cn):M.renderBufferDirect(Z,z,$,q,b,xe),b.onAfterRender(M,z,Z,$,q,xe)}function Kr(b,z,Z){z.isScene!==!0&&(z=Ue);let $=Ve.get(b),q=p.state.lights,xe=p.state.shadowsArray,Ce=q.state.version,Oe=Se.getParameters(b,q.state,xe,z,Z),Fe=Se.getProgramCacheKey(Oe),$e=$.programs;$.environment=b.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(b.isMeshStandardMaterial?X:v).get(b.envMap||$.environment),$e===void 0&&(b.addEventListener("dispose",he),$e=new Map,$.programs=$e);let Ge=$e.get(Fe);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===Ce)return Xc(b,Oe),Ge}else Oe.uniforms=Se.getUniforms(b),b.onBuild(Z,Oe,M),b.onBeforeCompile(Oe,M),Ge=Se.acquireProgram(Oe,Fe),$e.set(Fe,Ge),$.uniforms=Oe.uniforms;let Xe=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=We.uniform),Xc(b,Oe),$.needsLights=jf(b),$.lightsStateVersion=Ce,$.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function Wc(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=Ws.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Xc(b,z){let Z=Ve.get(b);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Jf(b,z,Z,$,q){z.isScene!==!0&&(z=Ue),S.resetTextureUnits();let xe=z.fog,Ce=$.isMeshStandardMaterial?z.environment:null,Oe=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gi,Fe=($.isMeshStandardMaterial?X:v).get($.envMap||Ce),$e=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xe=!!Z.morphAttributes.position,Tt=!!Z.morphAttributes.normal,gn=!!Z.morphAttributes.color,Nt=jn;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Nt=M.toneMapping);let li=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=li!==void 0?li.length:0,Ke=Ve.get($),Bo=p.state.lights;if(te===!0&&(pe===!0||b!==_)){let Tn=b===_&&$.id===ee;We.setState($,b,Tn)}let Mt=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Bo.state.version||Ke.outputColorSpace!==Oe||q.isBatchedMesh&&Ke.batching===!1||!q.isBatchedMesh&&Ke.batching===!0||q.isInstancedMesh&&Ke.instancing===!1||!q.isInstancedMesh&&Ke.instancing===!0||q.isSkinnedMesh&&Ke.skinning===!1||!q.isSkinnedMesh&&Ke.skinning===!0||q.isInstancedMesh&&Ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ke.instancingColor===!1&&q.instanceColor!==null||Ke.envMap!==Fe||$.fog===!0&&Ke.fog!==xe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==We.numPlanes||Ke.numIntersection!==We.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==Ge||Ke.morphTargets!==Xe||Ke.morphNormals!==Tt||Ke.morphColors!==gn||Ke.toneMapping!==Nt||ze.isWebGL2===!0&&Ke.morphTargetsCount!==yt)&&(Mt=!0):(Mt=!0,Ke.__version=$.version);let Yi=Ke.currentProgram;Mt===!0&&(Yi=Kr($,z,q));let qc=!1,fr=!1,ko=!1,Wt=Yi.getUniforms(),Zi=Ke.uniforms;if(Me.useProgram(Yi.program)&&(qc=!0,fr=!0,ko=!0),$.id!==ee&&(ee=$.id,fr=!0),qc||_!==b){Wt.setValue(G,"projectionMatrix",b.projectionMatrix),Wt.setValue(G,"viewMatrix",b.matrixWorldInverse);let Tn=Wt.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,ke.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&Wt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Wt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,fr=!0,ko=!0)}if(q.isSkinnedMesh){Wt.setOptional(G,q,"bindMatrix"),Wt.setOptional(G,q,"bindMatrixInverse");let Tn=q.skeleton;Tn&&(ze.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Wt.setValue(G,"boneTexture",Tn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Wt.setOptional(G,q,"batchingTexture"),Wt.setValue(G,"batchingTexture",q._matricesTexture,S));let Ho=Z.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0&&ze.isWebGL2===!0)&&w.update(q,Z,Yi),(fr||Ke.receiveShadow!==q.receiveShadow)&&(Ke.receiveShadow=q.receiveShadow,Wt.setValue(G,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Zi.envMap.value=Fe,Zi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),fr&&(Wt.setValue(G,"toneMappingExposure",M.toneMappingExposure),Ke.needsLights&&Kf(Zi,ko),xe&&$.fog===!0&&me.refreshFogUniforms(Zi,xe),me.refreshMaterialUniforms(Zi,$,V,B,we),Ws.upload(G,Wc(Ke),Zi,S)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ws.upload(G,Wc(Ke),Zi,S),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Wt.setValue(G,"center",q.center),Wt.setValue(G,"modelViewMatrix",q.modelViewMatrix),Wt.setValue(G,"normalMatrix",q.normalMatrix),Wt.setValue(G,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Tn=$.uniformsGroups;for(let Vo=0,Qf=Tn.length;Vo<Qf;Vo++)if(ze.isWebGL2){let Yc=Tn[Vo];Je.update(Yc,Yi),Je.bind(Yc,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function Kf(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function jf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,z,Z){Ve.get(b.texture).__webglTexture=z,Ve.get(b.depthTexture).__webglTexture=Z;let $=Ve.get(b);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){let Z=Ve.get(b);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Z=0){A=b,D=z,R=Z;let $=!0,q=null,xe=!1,Ce=!1;if(b){let Fe=Ve.get(b);Fe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(G.FRAMEBUFFER,null),$=!1):Fe.__webglFramebuffer===void 0?S.setupRenderTarget(b):Fe.__hasExternalTextures&&S.rebindTextures(b,Ve.get(b.texture).__webglTexture,Ve.get(b.depthTexture).__webglTexture);let $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ce=!0);let Ge=Ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?q=Ge[z][Z]:q=Ge[z],xe=!0):ze.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?q=Ve.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?q=Ge[Z]:q=Ge,y.copy(b.viewport),C.copy(b.scissor),L=b.scissorTest}else y.copy(J).multiplyScalar(V).floor(),C.copy(j).multiplyScalar(V).floor(),L=le;if(Me.bindFramebuffer(G.FRAMEBUFFER,q)&&ze.drawBuffers&&$&&Me.drawBuffers(b,q),Me.viewport(y),Me.scissor(C),Me.setScissorTest(L),xe){let Fe=Ve.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Fe.__webglTexture,Z)}else if(Ce){let Fe=Ve.get(b.texture),$e=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.__webglTexture,Z||0,$e)}ee=-1},this.readRenderTargetPixels=function(b,z,Z,$,q,xe,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){Me.bindFramebuffer(G.FRAMEBUFFER,Oe);try{let Fe=b.texture,$e=Fe.format,Ge=Fe.type;if($e!==kn&&oe.convert($e)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=Ge===Hn&&(Le.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ge!==Di&&oe.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Ii&&(ze.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-$&&Z>=0&&Z<=b.height-q&&G.readPixels(z,Z,$,q,oe.convert($e),oe.convert(Ge),xe)}finally{let Fe=A!==null?Ve.get(A).__webglFramebuffer:null;Me.bindFramebuffer(G.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,z,Z=0){let $=Math.pow(2,-Z),q=Math.floor(z.image.width*$),xe=Math.floor(z.image.height*$);S.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,Z,0,0,b.x,b.y,q,xe),Me.unbindTexture()},this.copyTextureToTexture=function(b,z,Z,$=0){let q=z.image.width,xe=z.image.height,Ce=oe.convert(Z.format),Oe=oe.convert(Z.type);S.setTexture2D(Z,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment),z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,$,b.x,b.y,q,xe,Ce,Oe,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,$,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,$,b.x,b.y,Ce,Oe,z.image),$===0&&Z.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,z,Z,$,q=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xe=b.max.x-b.min.x+1,Ce=b.max.y-b.min.y+1,Oe=b.max.z-b.min.z+1,Fe=oe.convert($.format),$e=oe.convert($.type),Ge;if($.isData3DTexture)S.setTexture3D($,0),Ge=G.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)S.setTexture2DArray($,0),Ge=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);let Xe=G.getParameter(G.UNPACK_ROW_LENGTH),Tt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gn=G.getParameter(G.UNPACK_SKIP_PIXELS),Nt=G.getParameter(G.UNPACK_SKIP_ROWS),li=G.getParameter(G.UNPACK_SKIP_IMAGES),yt=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,yt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,b.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,b.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,b.min.z),Z.isDataTexture||Z.isData3DTexture?G.texSubImage3D(Ge,q,z.x,z.y,z.z,xe,Ce,Oe,Fe,$e,yt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ge,q,z.x,z.y,z.z,xe,Ce,Oe,Fe,yt.data)):G.texSubImage3D(Ge,q,z.x,z.y,z.z,xe,Ce,Oe,Fe,$e,yt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Xe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,li),q===0&&$.generateMipmaps&&G.generateMipmap(Ge),Me.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){D=0,R=0,A=null,Me.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===oc?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===ja?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?ss:Pu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ss?Vt:gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Hl=class extends Cr{};Hl.prototype.isWebGL1Renderer=!0;var Ga=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wa=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Xa=class extends yn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new wt,mu=new wt,va=[],gu=new _i,j_=new wt,_r=new vt,xr=new rs,qa=class extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,j_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),gu.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(gu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),xr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(i),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),mu.multiplyMatrices(i,zs),_r.matrixWorld=mu,_r.raycast(e,va);for(let o=0,a=va.length;o<a;o++){let l=va[o];l.instanceId=r,l.object=this,t.push(l)}va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class n extends ei{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,m=new O,g=new be;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){let d=r+p/i*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let p=x*(i+1);for(let d=0;d<i;d++){let E=d+p,M=E,I=E+i+1,D=E+i+2,R=E+1;a.push(M,I,R),a.push(I,D,R)}}this.setIndex(a),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(c,3)),this.setAttribute("uv",new sn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ya=class extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},an=class extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ma(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Q_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vl=class extends $s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wh:r=e,a=2*t-i;break;case Ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:o=e,l=2*i-t;break;case Ah:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,d=-f*p+2*f*x-f*g,E=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-m)*p+(1.5+m)*x+.5*g,I=m*p-m*x;for(let D=0;D!==a;++D)r[D]=d*o[h+D]+E*o[c+D]+M*o[l+D]+I*o[u+D];return r}},Gl=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Wl=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ma(t,this.TimeBufferType),this.values=Ma(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ma(e.times,Array),values:Ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ea:t=this.InterpolantFactoryMethodDiscrete;break;case Ta:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Q_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$o,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Ta;var ls=class extends Wn{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ea;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Wn{};Xl.prototype.ValueTypeName="color";var ql=class extends Wn{};ql.prototype.ValueTypeName="number";var Yl=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Gn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pr=class extends Wn{InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.DefaultInterpolation=Ta;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Wn{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ea;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Wn{};Zl.prototype.ValueTypeName="vector";var $l=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},ex=new $l,Jl=class{constructor(e){this.manager=e!==void 0?e:ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Za=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},$a=class extends Za{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xl=new wt,_u=new O,xu=new O,Kl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;_u.setFromMatrixPosition(e.matrixWorld),t.position.copy(_u),xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xu),t.updateMatrixWorld(),xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var jl=class extends Kl{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new jl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Js=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=yu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function yu(){return(typeof performance>"u"?Date:performance).now()}var hc="\\[\\]\\.:\\/",tx=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",nx="[^"+hc.replace("\\.","")+"]",ix=/((?:WC+[\/:])*)/.source.replace("WC",uc),sx=/(WCOD+)?/.source.replace("WCOD",nx),rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),ox=new RegExp("^"+ix+sx+rx+ax+"$"),lx=["material","materials","bones","map"],Ql=class{constructor(e,t,i){let s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(e){let t=ox.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);lx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Ql;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fy=new Float32Array(1);var Lr=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Gu={type:"change"},fc={type:"start"},Wu={type:"end"},eo=new Tr,Xu=new Fn,hx=Math.cos(70*Du.DEG2RAD),to=class extends Qn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",re),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gu),i.update(),r=s.NONE},this.update=(function(){let w=new O,ne=new Gn().setFromUnitVectors(e.up,new O(0,1,0)),fe=ne.clone().invert(),oe=new O,Te=new Gn,Je=new O,nt=2*Math.PI;return function(ue=null){let P=i.object.position;w.copy(P).sub(i.target),w.applyQuaternion(ne),a.setFromVector3(w),i.autoRotate&&r===s.NONE&&C(_(ue)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ce=i.minAzimuthAngle,he=i.maxAzimuthAngle;isFinite(ce)&&isFinite(he)&&(ce<-Math.PI?ce+=nt:ce>Math.PI&&(ce-=nt),he<-Math.PI?he+=nt:he>Math.PI&&(he-=nt),ce<=he?a.theta=Math.max(ce,Math.min(he,a.theta)):a.theta=a.theta>(ce+he)/2?Math.max(ce,a.theta):Math.min(he,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),w.setFromSpherical(a),w.applyQuaternion(fe),P.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ie=!1;if(i.zoomToCursor&&R){let Ae=null;if(i.object.isPerspectiveCamera){let st=w.length();Ae=Y(st*c);let rt=st-Ae;i.object.position.addScaledVector(I,rt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let st=new O(D.x,D.y,0);st.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ie=!0;let rt=new O(D.x,D.y,0);rt.unproject(i.object),i.object.position.sub(rt).add(st),i.object.updateMatrixWorld(),Ae=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ae).add(i.object.position):(eo.origin.copy(i.object.position),eo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(eo.direction))<hx?e.lookAt(i.target):(Xu.setFromNormalAndCoplanarPoint(i.object.up,i.target),eo.intersectPlane(Xu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ie=!0);return c=1,R=!1,Ie||oe.distanceToSquared(i.object.position)>o||8*(1-Te.dot(i.object.quaternion))>o||Je.distanceToSquared(i.target)>0?(i.dispatchEvent(Gu),oe.copy(i.object.position),Te.copy(i.object.quaternion),Je.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",Ve),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",v),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",re),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Lr,l=new Lr,c=1,h=new O,u=new be,f=new be,m=new be,g=new be,x=new be,p=new be,d=new be,E=new be,M=new be,I=new O,D=new be,R=!1,A=[],ee={};function _(w){return w!==null?2*Math.PI/60*i.autoRotateSpeed*w:2*Math.PI/60/60*i.autoRotateSpeed}function y(w){let ne=Math.abs(w)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ne)}function C(w){l.theta-=w}function L(w){l.phi-=w}let Q=(function(){let w=new O;return function(fe,oe){w.setFromMatrixColumn(oe,0),w.multiplyScalar(-fe),h.add(w)}})(),T=(function(){let w=new O;return function(fe,oe){i.screenSpacePanning===!0?w.setFromMatrixColumn(oe,1):(w.setFromMatrixColumn(oe,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(fe),h.add(w)}})(),U=(function(){let w=new O;return function(fe,oe){let Te=i.domElement;if(i.object.isPerspectiveCamera){let Je=i.object.position;w.copy(Je).sub(i.target);let nt=w.length();nt*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*fe*nt/Te.clientHeight,i.object.matrix),T(2*oe*nt/Te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(fe*(i.object.right-i.object.left)/i.object.zoom/Te.clientWidth,i.object.matrix),T(oe*(i.object.top-i.object.bottom)/i.object.zoom/Te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function B(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(w,ne){if(!i.zoomToCursor)return;R=!0;let fe=i.domElement.getBoundingClientRect(),oe=w-fe.left,Te=ne-fe.top,Je=fe.width,nt=fe.height;D.x=oe/Je*2-1,D.y=-(Te/nt)*2+1,I.set(D.x,D.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(w){return Math.max(i.minDistance,Math.min(i.maxDistance,w))}function J(w){u.set(w.clientX,w.clientY)}function j(w){F(w.clientX,w.clientX),d.set(w.clientX,w.clientY)}function le(w){g.set(w.clientX,w.clientY)}function W(w){f.set(w.clientX,w.clientY),m.subVectors(f,u).multiplyScalar(i.rotateSpeed);let ne=i.domElement;C(2*Math.PI*m.x/ne.clientHeight),L(2*Math.PI*m.y/ne.clientHeight),u.copy(f),i.update()}function te(w){E.set(w.clientX,w.clientY),M.subVectors(E,d),M.y>0?B(y(M.y)):M.y<0&&V(y(M.y)),d.copy(E),i.update()}function pe(w){x.set(w.clientX,w.clientY),p.subVectors(x,g).multiplyScalar(i.panSpeed),U(p.x,p.y),g.copy(x),i.update()}function we(w){F(w.clientX,w.clientY),w.deltaY<0?V(y(w.deltaY)):w.deltaY>0&&B(y(w.deltaY)),i.update()}function Ee(w){let ne=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),ne=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),ne=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),ne=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),ne=!0;break}ne&&(w.preventDefault(),i.update())}function Be(w){if(A.length===1)u.set(w.pageX,w.pageY);else{let ne=tt(w),fe=.5*(w.pageX+ne.x),oe=.5*(w.pageY+ne.y);u.set(fe,oe)}}function ke(w){if(A.length===1)g.set(w.pageX,w.pageY);else{let ne=tt(w),fe=.5*(w.pageX+ne.x),oe=.5*(w.pageY+ne.y);g.set(fe,oe)}}function Ue(w){let ne=tt(w),fe=w.pageX-ne.x,oe=w.pageY-ne.y,Te=Math.sqrt(fe*fe+oe*oe);d.set(0,Te)}function et(w){i.enableZoom&&Ue(w),i.enablePan&&ke(w)}function G(w){i.enableZoom&&Ue(w),i.enableRotate&&Be(w)}function Dt(w){if(A.length==1)f.set(w.pageX,w.pageY);else{let fe=tt(w),oe=.5*(w.pageX+fe.x),Te=.5*(w.pageY+fe.y);f.set(oe,Te)}m.subVectors(f,u).multiplyScalar(i.rotateSpeed);let ne=i.domElement;C(2*Math.PI*m.x/ne.clientHeight),L(2*Math.PI*m.y/ne.clientHeight),u.copy(f)}function Le(w){if(A.length===1)x.set(w.pageX,w.pageY);else{let ne=tt(w),fe=.5*(w.pageX+ne.x),oe=.5*(w.pageY+ne.y);x.set(fe,oe)}p.subVectors(x,g).multiplyScalar(i.panSpeed),U(p.x,p.y),g.copy(x)}function ze(w){let ne=tt(w),fe=w.pageX-ne.x,oe=w.pageY-ne.y,Te=Math.sqrt(fe*fe+oe*oe);E.set(0,Te),M.set(0,Math.pow(E.y/d.y,i.zoomSpeed)),B(M.y),d.copy(E);let Je=(w.pageX+ne.x)*.5,nt=(w.pageY+ne.y)*.5;F(Je,nt)}function Me(w){i.enableZoom&&ze(w),i.enablePan&&Le(w)}function gt(w){i.enableZoom&&ze(w),i.enableRotate&&Dt(w)}function Ve(w){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",v)),Ne(w),w.pointerType==="touch"?Se(w):X(w))}function S(w){i.enabled!==!1&&(w.pointerType==="touch"?me(w):ae(w))}function v(w){We(w),A.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",v)),i.dispatchEvent(Wu),r=s.NONE}function X(w){let ne;switch(w.button){case 0:ne=i.mouseButtons.LEFT;break;case 1:ne=i.mouseButtons.MIDDLE;break;case 2:ne=i.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case hs.DOLLY:if(i.enableZoom===!1)return;j(w),r=s.DOLLY;break;case hs.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;le(w),r=s.PAN}else{if(i.enableRotate===!1)return;J(w),r=s.ROTATE}break;case hs.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;J(w),r=s.ROTATE}else{if(i.enablePan===!1)return;le(w),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(fc)}function ae(w){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;W(w);break;case s.DOLLY:if(i.enableZoom===!1)return;te(w);break;case s.PAN:if(i.enablePan===!1)return;pe(w);break}}function se(w){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(w.preventDefault(),i.dispatchEvent(fc),we(w),i.dispatchEvent(Wu))}function re(w){i.enabled===!1||i.enablePan===!1||Ee(w)}function Se(w){switch(ie(w),A.length){case 1:switch(i.touches.ONE){case us.ROTATE:if(i.enableRotate===!1)return;Be(w),r=s.TOUCH_ROTATE;break;case us.PAN:if(i.enablePan===!1)return;ke(w),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case us.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;et(w),r=s.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(w),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(fc)}function me(w){switch(ie(w),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Dt(w),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;Le(w),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Me(w),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;gt(w),i.update();break;default:r=s.NONE}}function ve(w){i.enabled!==!1&&w.preventDefault()}function Ne(w){A.push(w.pointerId)}function We(w){delete ee[w.pointerId];for(let ne=0;ne<A.length;ne++)if(A[ne]==w.pointerId){A.splice(ne,1);return}}function ie(w){let ne=ee[w.pointerId];ne===void 0&&(ne=new be,ee[w.pointerId]=ne),ne.set(w.pageX,w.pageY)}function tt(w){let ne=w.pointerId===A[0]?A[1]:A[0];return ee[ne]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",Ve),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",se,{passive:!1}),this.update()}};var no={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ux=new Ni(-1,1,1,-1,0,1),dc=class extends ei{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}},fx=new dc,zi=class{constructor(e){this._mesh=new vt(fx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ux)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var io=class extends vn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oi.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ir=class extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},so=class extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ro=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new be);this._width=i.width,this._height=i.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new io(no),this.copyPass.material.blending=Kn,this.clock=new Js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ir!==void 0&&(o instanceof Ir?i=!0:o instanceof so&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ao=class extends vn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var qu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Qs=class n extends vn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new _e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,o,{type:Hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new rn(r,o,{type:Hn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new rn(r,o,{type:Hn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=qu;this.highPassUniforms=Oi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new be(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=no;this.copyUniforms=Oi.clone(h.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ba,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _e,this.oldClearAlpha=1,this.basic=new Ct,this.fsQuad=new zi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new be(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Qs.BlurDirectionX=new be(1,0);Qs.BlurDirectionY=new be(0,1);var Yu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var oo=class extends vn{constructor(){super();let e=Yu;this.uniforms=Oi.clone(e.uniforms),this.material=new Ya({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new zi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function cf(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Pe=cf(1),ct=n=>n[Math.floor(Pe()*n.length)],$t=n=>n[Math.floor(Math.random()*n.length)],bt=(n,e=.05)=>new _e(n).offsetHSL(0,(Pe()-.5)*e*.5,(Pe()-.5)*e),ft=(n,e,t)=>Math.max(e,Math.min(t,n)),_s=n=>Math.atan2(Math.sin(n),Math.cos(n)),K=n=>document.getElementById(n),Nr=!0,xi=!0,Et=(n=12)=>{if(Nr)try{navigator.vibrate&&navigator.vibrate(n)}catch{}},mn="ontouchstart"in window||matchMedia("(pointer:coarse)").matches,Dr=["#fff4e0","#ffe0b5","#ffb4a2","#ffd166","#8ee3ef","#bde0fe","#ffc8dd","#cdb4db","#caffbf","#fdffb6","#ffffff","#f1c0e8","#a3c4f3","#90dbf4","#f9c74f","#f8961e"],ps=["#e63946","#ef476f","#3a86ff","#7b2cbf","#2a9d8f","#06d6a0","#f77f00","#118ab2","#ff006e","#8338ec"],lo=["#24496b","#1f3b57","#2c5d7c","#30475e"],fs=["#ff3cac","#00f5d4","#fee440","#9b5de5","#f15bb5","#00bbf9"],Fr=["#ef233c","#ffd60a","#06d6a0","#118ab2","#ffffff","#ff7b00","#8338ec","#ff006e","#3a86ff"],dx=["#6fcf4f","#79d65a","#67c94a","#82db63"],Zu=["#2fa84f","#3cb64a","#5bc236","#1f8f3a","#78c850"],px=["#e76f51","#2a9d8f","#e9c46a","#f4a261","#8ecae6","#ffb703","#a8dadc","#cdb4db","#90be6d","#f28482"],Ur=["#e0ac69","#c68642","#8d5524","#f1c27d","#ffdbac"],Br=K("screen"),bi=K("c"),cr=new Cr({canvas:bi,antialias:!0,powerPreference:"high-performance"}),hf=Math.min(window.devicePixelRatio||1,mn?1.5:2);cr.setPixelRatio(hf);cr.shadowMap.enabled=!0;cr.shadowMap.type=ec;cr.toneMapping=jn;var He=new Wa,Tc=new _e("#8fd6f2"),mx=new _e("#060a16");He.background=Tc.clone();var uf=new Ga(Tc.clone(),14,42),qn=new Ni(-20,20,20,-20,.1,500);qn.position.set(40,36,40);qn.zoom=1.05;qn.lookAt(0,0,0);var yi=new nn(62,1,.02,250),ln=new to(qn,bi);ln.enableDamping=!0;ln.dampingFactor=.08;ln.minZoom=.6;ln.maxZoom=5;ln.minPolarAngle=.3;ln.maxPolarAngle=1.25;ln.autoRotate=!0;ln.autoRotateSpeed=.45;ln.screenSpacePanning=!1;var xc=new $a("#e3f3ff","#6b5a44",1.1);He.add(xc);var cn=new Ja("#fff0d6",2.4),Or=new O(28,42,16).normalize();cn.position.copy(Or).multiplyScalar(55);cn.castShadow=!0;cn.shadow.mapSize.set(mn?1024:2048,mn?1024:2048);cn.shadow.bias=-4e-4;cn.shadow.normalBias=.03;He.add(cn);He.add(cn.target);function wc(n){Object.assign(cn.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:1,far:150}),cn.shadow.camera.updateProjectionMatrix()}wc(33);var ys=new ro(cr);ys.setPixelRatio(hf);var Ac=new ao(He,qn);ys.addPass(Ac);var ir=new Qs(new be(512,512),0,.35,.82);ir.enabled=!1;ys.addPass(ir);ys.addPass(new oo);var or=new os(1,1,1),gx=new an({color:16777215,roughness:.85,metalness:0}),_x=new an({color:16777215,roughness:.95,metalness:0}),ff=new an({color:16777215,roughness:.25,metalness:.1,emissive:new _e("#ffc964"),emissiveIntensity:0}),xx=new an({color:16777215,roughness:.25,metalness:.1}),df=new an({color:"#fff4cf",emissive:new _e("#ffd27a"),emissiveIntensity:0}),Cc=new Ct({color:16777215}),Xr=new an({color:"#fffbe6",emissive:new _e("#fff2b0"),emissiveIntensity:0}),qr=new an({color:"#ff3b3b",emissive:new _e("#ff2020"),emissiveIntensity:0}),To=new an({color:"#1d2b3a",roughness:.2,metalness:.3}),pf=new an({color:"#ffffff",roughness:1,transparent:!0,opacity:.93}),mf=new an({color:"#2f9fd6",roughness:.35,metalness:.05}),gf=new an({color:"#c4f1ff",emissive:new _e("#7fdcff"),emissiveIntensity:.2}),$u=new Ct({color:new _e("#ffe066").multiplyScalar(2)}),yx=new Ct({color:new _e("#ff4d6d").multiplyScalar(2)}),vx=new Ct({color:new _e("#fff3b0").multiplyScalar(3)}),yc=fs.map(n=>{let e=new Ct({color:n});return e.userData.base=new _e(n),e}),Ju={},De=n=>Ju[n]||(Ju[n]=new an({color:n,roughness:.5,metalness:.05}));function ge(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new vt(or,n);return l.scale.set(e,t,i),l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function er(n,e,t=!0,i=!0){let s=new qa(or,e,Math.max(n.length,1));s.count=n.length;let r=new Gt,o=new _e;return n.forEach((a,l)=>{r.position.set(a[0],a[1]+a[4]/2,a[2]),r.scale.set(a[3],a[4],a[5]),r.rotation.set(0,a[7]||0,0),r.updateMatrix(),s.setMatrixAt(l,r.matrix),s.setColorAt(l,o.set(a[6]))}),s.castShadow=t,s.receiveShadow=i,s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s}var wo=new vt(new Ar(600,600),mf);wo.rotation.x=-Math.PI/2;wo.position.y=-.72;wo.receiveShadow=!0;He.add(wo);var Hi=22,pn=44,kr=new Array(pn*pn),po=[];function Mn(n,e,t,i,s,r=0){let o={x0:n-t/2,x1:n+t/2,z0:e-i/2,z1:e+i/2,h:s,y0:r};po.push(o);for(let a=Math.floor(o.x0+Hi);a<=Math.floor(o.x1+Hi);a++)for(let l=Math.floor(o.z0+Hi);l<=Math.floor(o.z1+Hi);l++)a<0||l<0||a>=pn||l>=pn||(kr[a*pn+l]||(kr[a*pn+l]=[])).push(o)}var Fi=19.3;function Si(n,e){let t=!1,i=Math.floor(n.x+Hi),s=Math.floor(n.z+Hi);for(let r=i-1;r<=i+1;r++)for(let o=s-1;o<=s+1;o++){if(r<0||o<0||r>=pn||o>=pn)continue;let a=kr[r*pn+o];if(a)for(let l of a){if(l.y0>.25)continue;let c=ft(n.x,l.x0,l.x1),h=ft(n.z,l.z0,l.z1),u=n.x-c,f=n.z-h,m=u*u+f*f;if(m<e*e)if(t=!0,m>1e-9){let g=Math.sqrt(m),x=(e-g)/g;n.x+=u*x,n.z+=f*x}else{let g=[n.x-l.x0,l.x1-n.x,n.z-l.z0,l.z1-n.z],x=Math.min(...g);x===g[0]?n.x=l.x0-e:x===g[1]?n.x=l.x1+e:x===g[2]?n.z=l.z0-e:n.z=l.z1+e}}}return n.x>Fi&&(n.x=Fi,t=!0),n.x<-Fi&&(n.x=-Fi,t=!0),n.z>Fi&&(n.z=Fi,t=!0),n.z<-Fi&&(n.z=-Fi,t=!0),t}function Ao(n,e,t){let i=Math.floor(n+Hi),s=Math.floor(t+Hi);if(i<0||s<0||i>=pn||s>=pn)return!1;let r=kr[i*pn+s];if(!r)return!1;for(let o of r)if(n>o.x0&&n<o.x1&&t>o.z0&&t<o.z1&&e<o.h&&e>o.y0)return!0;return!1}function xs(n,e,t,i,s=.18){let r=Math.hypot(t-n,i-e),o=Math.ceil(r/.25);for(let a=1;a<o;a++){let l=a/o;if(Ao(n+(t-n)*l,s,e+(i-e)*l))return!1}return!0}var vi=36,pt=6,Sn=vi/pt,Bt=vi+1,Rt=n=>n-vi/2,In=n=>n*pt-vi/2,xt=null,si=[],gs=null,ho=[],ms=null,mo=document.createElement("canvas");mo.width=mo.height=160;function _f(n){xt&&(He.remove(xt),xt.traverse(_=>{_.isInstancedMesh&&_.dispose()})),Pe=cf(n),xt=new ot,He.add(xt),si=[],gs=null,ho=[],ms=null,kr=new Array(pn*pn),po=[];let e=[],t=[],i=[],s=[],r=[],o=[],a=new Uint8Array(Bt*Bt),l=(_,y)=>_%pt===0||y%pt===0,c=[[2,2],[2,3],[3,2],[3,3]].sort(()=>Pe()-.5),h=(_,y)=>_+","+y,u={};u[h(...c[0])]="pond",u[h(...c[1])]="ferris";let f=0;for(;f<2;){let _=Math.floor(Pe()*Sn),y=Math.floor(Pe()*Sn);u[h(_,y)]||(u[h(_,y)]="park",f++)}let m=(_,y)=>u[h(Math.floor(_/pt),Math.floor(y/pt))]||"city";t.push([0,-1.4,0,Bt+2,.9,Bt+2,"#f2d59b"]),t.push([0,-.76,0,Bt+2.6,.05,Bt+2.6,"#e9f8ff"]);for(let _=0;_<Bt;_++)for(let y=0;y<Bt;y++){let C=Rt(_),L=Rt(y);if(l(_,y)){if(t.push([C,-.5,L,1,.47,1,bt("#3b3f4a",.03)]),!(_%pt===0&&y%pt===0)){let V=y%pt===0,F=V?_%pt:y%pt;if(F===1||F===pt-1)for(let Y=0;Y<4;Y++){let J=(Y-1.5)*.2;t.push(V?[C,-.03,L+J,.3,.02,.1,"#f2f2f2"]:[C+J,-.03,L,.1,.02,.3,"#f2f2f2"])}else t.push(V?[C,-.03,L,.42,.02,.07,"#f5d547"]:[C,-.03,L,.07,.02,.42,"#f5d547"])}continue}let Q=m(_,y),T=_%pt,U=y%pt;if(Q==="pond"&&T>=2&&T<=4&&U>=2&&U<=4){t.push([C,-.5,L,1,.32,1,"#35b6ea"]),a[_*Bt+y]=2;continue}if(Q==="ferris"){t.push([C,-.5,L,1,.5,1,bt((_+y)%2?"#efe3c8":"#e2d3b2",.02)]);continue}t.push([C,-.5,L,1,.5,1,bt(ct(dx),.05)])}for(let _=0;_<=Sn;_++)for(let y=0;y<=Sn;y++){let C=In(_)+.42,L=In(y)+.42;e.push([C,0,L,.06,.9,.06,"#3d405b"]),r.push([C,.9,L,.16,.09,.16,"#fff4cf"]),Mn(C,L,.08,.08,.9)}function g(_,y,C,L,Q=!1){let T=C*.84,U=bt(ct(Dr)),B=bt(ct(ps)),V=bt(ct(lo),.06);e.push([_,0,y,T,L,T,U]),Mn(_,y,T+.1,T+.1,L);for(let J=.45;J<L-.3;J+=.42)(Pe()<.42?i:s).push([_,J,y,T+.04,.17,T+.04,V]);let F=T/2;for(let[J,j]of[[F,F],[F,-F],[-F,F],[-F,-F]])e.push([_+J,0,y+j,.1,L,.1,U]);if(e.push([_,L,y,T+.1,.1,T+.1,B]),e.push([_+T/2+.03,0,y,.03,.3,.22,"#3b2a20"]),Q){let J=T*.7,j=L+.1;for(let le=0;le<3;le++)e.push([_,j,y,J,.5,J,le%2?B:U]),(Pe()<.7?i:s).push([_,j+.18,y,J+.04,.14,J+.04,V]),j+=.5,J*=.68;e.push([_,j,y,.07,1.6,.07,"#e0e0e0"]),o.push([_,j+1.6,y,.14,.14,.14,"#ff2d2d"]);return}let Y=Pe();if(Y<.33)e.push([_,L+.1,y,T*.55,.45,T*.55,U]),e.push([_,L+.55,y,.05,.9,.05,"#e0e0e0"]),o.push([_,L+1.45,y,.1,.1,.1,"#ff2d2d"]);else if(Y<.62){let J=_+T*.2,j=y-T*.2;e.push([J,L+.1,j,.34,.12,.34,"#5d4037"]),e.push([J,L+.22,j,.3,.38,.3,"#a1887f"]),e.push([J,L+.6,j,.34,.08,.34,B]),e.push([_-T*.2,L+.1,y+T*.2,.3,.2,.3,"#9e9e9e"])}else e.push([_,L+.1,y,T*.7,.3,T*.7,B]),e.push([_,L+.4,y,T*.4,.3,T*.4,B]),C>=2&&o.push([_,L+.7,y,.12,.5,.12,ct(fs)]);Pe()<.3&&o.push([_+T/2+.04,L*.7,y,.04,Math.min(.9,L*.2),T*.45,ct(fs)])}function x(_,y,C){let L=C*.74,Q=.55+Pe()*.35*C,T=bt(ct(Dr)),U=bt(ct(ps)),B=bt(ct(lo),.06);e.push([_,0,y,L,Q,L,T]),Mn(_,y,L+.04,L+.04,Q+.4),(Pe()<.5?i:s).push([_,Q*.45,y,L+.03,.14,L*.5,B]),(Pe()<.5?i:s).push([_,Q*.45,y,L*.5,.14,L+.03,B]),e.push([_+L/2+.01,0,y+L*.22,.04,.3,.14,"#5b3a29"]);let V=L+.12,F=Q;for(let Y=0;Y<3;Y++)e.push([_,F,y,V,.14,V,U]),F+=.14,V-=L*.28;Pe()<.6&&e.push([_+L*.25,Q,y-L*.2,.12,.55,.12,"#8d6e63"])}function p(_,y,C){let L=C*.78,Q=.62+Pe()*.4,T=bt(ct(Dr)),U=bt(ct(ps)),B=bt(ct(lo),.06);e.push([_,0,y,L,Q,L,T]),Mn(_,y,L+.04,L+.04,Q+.3),e.push([_,Q,y,L+.06,.06,L+.06,"#f8f9fa"]);let[V,F]=ct([[1,0],[-1,0],[0,1],[0,-1]]);V?(i.push([_+V*(L/2+.005),.08,y,.02,.34,L*.72,B]),e.push([_+V*(L/2+.12),.46,y,.26,.06,L*.85,U]),o.push([_+V*L*.3,Q+.06,y,.06,.22,L*.7,ct(fs)])):(i.push([_,.08,y+F*(L/2+.005),L*.72,.34,.02,B]),e.push([_,.46,y+F*(L/2+.12),L*.85,.06,.26,U]),o.push([_,Q+.06,y+F*L*.3,L*.7,.22,.06,ct(fs)]))}function d(_,y,C,L){let Q=bt(ct(Dr)),T=bt(ct(ps)),U=bt(ct(lo),.06);Mn(_,y,C*.9,C*.9,L+.3);let B=[[.5,.88],[.3,.66],[.2,.46]],V=0;B.forEach(([F,Y],J)=>{let j=L*F,le=C*Y;e.push([_,V,y,le,j,le,J===2?T:Q]);for(let W=V+.2;W<V+j-.2;W+=.4)(Pe()<.5?i:s).push([_,W,y,le+.04,.15,le+.04,U]);V+=j,e.push([_,V,y,le+.08,.08,le+.08,T]),V+=.08})}function E(_,y,C){let L=bt(ct(Zu),.06);e.push([_,0,y,.12*C,.32*C,.12*C,"#7a4a2a"]),Mn(_,y,.14*C,.14*C,.3*C),Mn(_,y,.6*C,.6*C,1.05*C,.3*C),Pe()<.35?(e.push([_,.25*C,y,.56*C,.3*C,.56*C,L]),e.push([_,.55*C,y,.4*C,.28*C,.4*C,L]),e.push([_,.83*C,y,.24*C,.26*C,.24*C,L])):(e.push([_,.28*C,y,.6*C,.48*C,.6*C,L]),e.push([_+.05*C,.76*C,y-.05*C,.38*C,.24*C,.38*C,bt(ct(Zu),.06)]))}function M(_,y){let C=(Pe()-.5)*.16;e.push([_,-.5,y,.11,.45,.11,"#9c6b3c"]),e.push([_+C,-.05,y,.1,.45,.1,"#a87543"]),e.push([_+C*2,.4,y,.09,.42,.09,"#9c6b3c"]),Mn(_,y,.12,.12,.5);let L=_+C*2,Q=Pe()*Math.PI;e.push([L,.82,y,1.1,.06,.22,bt("#2e9e44"),Q]),e.push([L,.82,y,.22,.06,1.1,bt("#38a84d"),Q]),e.push([L,.72,y,.13,.12,.13,"#6b4423"])}let I=vi/2;for(let _=0;_<Sn;_++)for(let y=0;y<Sn;y++){let C=u[h(_,y)]||"city",L=_*pt+1,Q=y*pt+1;if(C==="city")for(let T=0;T<pt-1;T++)for(let U=0;U<pt-1;U++){let B=L+T,V=Q+U;if(a[B*Bt+V])continue;let F=Pe()<.16?3:Pe()<.5?2:1,Y=W=>{if(T+W>pt-1||U+W>pt-1)return!1;for(let te=0;te<W;te++)for(let pe=0;pe<W;pe++)if(a[(B+te)*Bt+V+pe])return!1;return!0};for(;F>1&&!Y(F);)F--;for(let W=0;W<F;W++)for(let te=0;te<F;te++)a[(B+W)*Bt+V+te]=1;let J=Rt(B)+(F-1)/2,j=Rt(V)+(F-1)/2,le=Math.pow(Math.max(0,1-Math.hypot(J,j)/(I*1.05)),1.2);if(F===3)le>.62?g(J,j,F,6+Pe()*4,!0):Pe()<.5+le?g(J,j,F,2.6+Pe()*6*le+Pe()):d(J,j,F,2.2+Pe()*1.5);else if(F===2)Pe()<.25+.55*le?g(J,j,F,1.6+Pe()*4.5*le+Pe()):Pe()<.5?x(J,j,F):p(J,j,F);else{let W=Pe();W<.14?E(J+(Pe()-.5)*.3,j+(Pe()-.5)*.3,.8+Pe()*.4):le>.55&&W<.4?g(J,j,1,1.5+Pe()*2):W<.6?x(J,j,1):p(J,j,1)}}else if(C==="park"||C==="pond"){for(let T=0;T<pt-1;T++)for(let U=0;U<pt-1;U++){let B=L+T,V=Q+U;a[B*Bt+V]!==2&&(Pe()<(C==="park"?.5:.42)?E(Rt(B)+(Pe()-.5)*.4,Rt(V)+(Pe()-.5)*.4,.75+Pe()*.55):Pe()<.25&&(e.push([Rt(B),0,Rt(V),.5,.12,.18,"#8d5a3b"]),Mn(Rt(B),Rt(V),.5,.18,.12)))}if(C==="pond"){let T=Rt(L+2),U=Rt(Q+2);Mn(T,U,3,3,.35),e.push([T,-.18,U,.7,.3,.7,"#ece6da"]),e.push([T,.12,U,.14,.45,.14,"#ece6da"]),e.push([T,.55,U,.4,.06,.4,"#ece6da"]),ms={x:T,z:U};for(let B=0;B<18;B++){let V=ge(gf,.07,.07,.07,T,.5,U,!1);V.userData={a:B/18*Math.PI*2,p:Pe()},xt.add(V),ho.push(V)}for(let B=0;B<3;B++){let V=Pe()*6.28,F=.75+Pe()*.4,Y=new ot;Y.add(ge(De("#ffffff"),.2,.12,.13,0,.06,0)),Y.add(ge(De("#ffd60a"),.07,.1,.08,.1,.15,0)),Y.position.set(T,-.2,U),Y.userData={a:V,rr:F,sp:.2+Pe()*.25},xt.add(Y),ho.push(Y)}}}else if(C==="ferris"){let T=Rt(L+2),U=Rt(Q+2);gs=Sx(T,U),xt.add(gs.root),Mn(T,U,2.4,1,3);for(let[B,V]of[[-1.9,-1.9],[1.9,1.9]]){let F=T+B,Y=U+V,J=bt(ct(ps));e.push([F,0,Y,.6,.5,.6,bt(ct(Dr))]),e.push([F,.5,Y,.8,.06,.8,J]),o.push([F,.56,Y,.5,.14,.06,ct(fs)]),Mn(F,Y,.62,.62,.6)}for(let[B,V]of[[-2,1.9],[1.9,-2]])E(T+B,U+V,.9)}}let D=vi/2+1;for(let _=0;_<26;_++){let y=_%4,C=(Pe()*2-1)*(vi/2),L=D+(Pe()-.5)*.4,[Q,T]=y===0?[C,L]:y===1?[L,C]:y===2?[C,-L]:[-L,C];y===1&&Math.abs(C-5)<1.2||M(Q,T)}for(let _=0;_<8;_++){let y=_%4,C=(Pe()*2-1)*(vi/2-2),L=D+.1,[Q,T]=y===0?[C,L]:y===1?[L,C]:y===2?[C,-L]:[-L,C];y===1&&Math.abs(C-5)<1.5||(e.push([Q,-.5,T,.05,.7,.05,"#ddd"]),e.push([Q,.2,T,.6,.06,.6,ct(fs)]),e.push([Q+.35,-.5,T,.25,.04,.45,"#ffffff"]))}for(let _=D-.4;_<D+4.5;_+=.32)e.push([_,-.62,5,.28,.06,.9,bt("#a47148",.06)]);for(let _=D+.6;_<D+4.6;_+=1.4)for(let y of[4.55,5.45])e.push([_,-1.1,y,.1,.65,.1,"#6d4c2f"]);xt.add(er(t,_x,!1,!0)),xt.add(er(e,gx,!0,!0)),xt.add(er(i,ff,!1,!0)),xt.add(er(s,xx,!1,!0)),xt.add(er(r,df,!1,!1)),xt.add(er(o,Cc,!1,!1));for(let _=0;_<30;_++){let y=Pe()<.35,C=y?Rc(ct(Fr)):xf(ct(Fr)),L={g:C,moto:y,kx:Math.floor(Pe()*(Sn+1)),kz:Math.floor(Pe()*(Sn+1)),s:Pe()*pt,sp:(y?1.1:1.5)+Pe()*1,dx:1,dz:0},Q=[[1,0],[-1,0],[0,1],[0,-1]].filter(([T,U])=>go(L.kx+T,L.kz+U));[L.dx,L.dz]=Q[Math.floor(Pe()*Q.length)],yf(L,!0),xt.add(C),si.push(L)}K("pill").textContent="Semilla #"+n;let R=mo.getContext("2d"),A=160/40,ee=_=>(_+20)*A;R.fillStyle="#1d6fa3",R.fillRect(0,0,160,160),R.fillStyle="#e7cf93",R.fillRect(ee(-19.5),ee(-19.5),39*A,39*A);for(let _=0;_<Bt;_++)for(let y=0;y<Bt;y++){let C=l(_,y);R.fillStyle=C?"#4b4f5a":a[_*Bt+y]===2?"#35b6ea":"#5fbf45",R.fillRect(ee(Rt(_)-.5),ee(Rt(y)-.5),A+.5,A+.5)}R.fillStyle="#2c2f38";for(let _ of po)_.h>.5&&_.y0===0&&_.x1-_.x0>.4&&R.fillRect(ee(_.x0),ee(_.z0),(_.x1-_.x0)*A,(_.z1-_.z0)*A)}var go=(n,e)=>n>=0&&n<=Sn&&e>=0&&e<=Sn;function xf(n){let e=new ot;e.add(ge(De(n),.52,.16,.28,0,.11,0)),e.add(ge(To,.28,.13,.24,-.03,.255,0));for(let t of[-.08,.08])e.add(ge(Xr,.03,.05,.06,.265,.12,t,!1)),e.add(ge(qr,.03,.05,.06,-.265,.12,t,!1));for(let[t,i]of[[.15,.145],[-.15,.145],[.15,-.145],[-.15,-.145]])e.add(ge(De("#151515"),.1,.1,.03,t,.05,i,!1));return e}function Rc(n){let e=new ot;e.add(ge(De(n),.36,.14,.22,0,.1,0)),e.add(ge(De("#222222"),.14,.12,.06,.2,.12,0));for(let[t,i]of[[-.14,-.1],[-.14,.1],[.12,-.1],[.12,.1]])e.add(ge(De("#333333"),.025,.2,.025,t,.26,i));return e.add(ge(De(ct(ps)),.34,.03,.26,-.01,.37,0)),e.add(ge(Xr,.03,.05,.05,.28,.14,0,!1)),e.add(ge(qr,.03,.04,.12,-.19,.12,0,!1)),e}function yf(n,e){let t=n.dx,i=n.dz,s=In(n.kx)+t*n.s+-i*.21,r=In(n.kz)+i*n.s+t*.21,o=Math.atan2(-i,t);if(e){n.g.position.set(s,0,r),n.g.rotation.y=o;return}n.tx=s,n.tz=r,n.ta=o}function Mx(n){let e=Math.cos(n.g.rotation.y),t=-Math.sin(n.g.rotation.y),i=n.g.position,s=(r,o)=>{let a=r-i.x,l=o-i.z,c=a*e+l*t,h=Math.abs(a*t-l*e);return c>0&&c<.85&&h<.3};if(H.active){let r=St();if(s(r.x,r.z))return!0;for(let o of Ht)if(s(o.g.position.x,o.g.position.z))return!0;for(let o of lt)if(s(o.g.position.x,o.g.position.z))return!0}return!1}function bx(n){let e=1-Math.exp(-n*10);for(let t of si){for(Mx(t)||(t.s+=t.sp*n);t.s>=pt;){t.s-=pt,t.kx+=t.dx,t.kz+=t.dz;let{dx:s,dz:r}=t,o=[[s,r],[s,r],[-r,s],[r,-s]].filter(([a,l])=>go(t.kx+a,t.kz+l));o.length||(o=[[-s,-r]]),[t.dx,t.dz]=o[Math.floor(Math.random()*o.length)]}yf(t,!1);let i=t.g.position;i.x+=(t.tx-i.x)*e,i.z+=(t.tz-i.z)*e,t.g.rotation.y+=_s(t.ta-t.g.rotation.y)*e}}function Sx(n,e){let t=new ot;t.position.set(n,0,e);let i=2.6,s=2,r=new ot;r.position.y=i,t.add(r);let o=De("#f4f4f4");for(let h of[-.22,.22]){for(let u=0;u<28;u++){let f=u/28*Math.PI*2,m=ge(o,.48,.07,.07,Math.cos(f)*s,Math.sin(f)*s,h);m.rotation.z=f+Math.PI/2,r.add(m)}for(let u=0;u<8;u++){let f=u/8*Math.PI*2,m=ge(o,s,.04,.04,Math.cos(f)*s/2,Math.sin(f)*s/2,h);m.rotation.z=f,r.add(m)}}for(let h=0;h<24;h++){let u=h/24*Math.PI*2;r.add(ge(yc[h%yc.length],.08,.08,.5,Math.cos(u)*(s+.07),Math.sin(u)*(s+.07),0,!1))}r.add(ge(De("#9aa0a6"),.3,.3,.6,0,0,0));let a=[];for(let h=0;h<8;h++){let u=h/8*Math.PI*2+Math.PI/8,f=new ot;f.position.set(Math.cos(u)*s,Math.sin(u)*s,0),f.add(ge(De(ct(Fr)),.3,.26,.3,0,-.2,0)),f.add(ge(De("#dddddd"),.34,.04,.34,0,-.05,0)),r.add(f),a.push(f)}let l=Math.hypot(1.1,i),c=Math.atan(1.1/i);for(let h of[-.4,.4])for(let u of[-1,1]){let f=ge(De("#e63946"),.12,l,.12,u*.55,i/2,h);f.rotation.z=u*c,t.add(f)}return{root:t,wheel:r,cabins:a}}var Yn=new ot;Yn.add(ge(De("#ffd60a"),1.3,.28,.28));Yn.add(ge(De("#e63946"),.34,.06,1.9,.1,0,0));Yn.add(ge(De("#e63946"),.22,.32,.05,-.58,.22,0));Yn.add(ge(De("#e63946"),.18,.05,.72,-.58,.05,0));Yn.add(ge(To,.3,.14,.22,.22,.2,0));var vf=ge(De("#2b2d42"),.04,.62,.08,.68,0,0);Yn.add(vf);Yn.rotation.order="YXZ";He.add(Yn);var Mf=[];for(let n=0;n<7;n++){let e=new ot,t=3+Math.floor(Math.random()*3);for(let i=0;i<t;i++){let s=1.2+Math.random()*1.6;e.add(ge(pf,s,.6+Math.random()*.5,s*.8,(i-t/2)*1.1,Math.random()*.4,(Math.random()-.5)*1.2))}e.position.set(-40+n*12,10+Math.random()*3,-20+Math.random()*40),e.userData.sp=.5+Math.random()*.5,He.add(e),Mf.push(e)}var bf=[];for(let n=0;n<4;n++){let e=new ot;e.add(ge(De("#8d5524"),.95,.2,.32,0,.05,0)),e.add(ge(De(["#06d6a0","#ef476f","#118ab2","#ffd60a"][n]),.97,.05,.34,0,.22,0)),e.add(ge(De("#ffffff"),.35,.24,.26,-.12,.27,0)),e.add(ge(De(["#e63946","#3a86ff","#f77f00","#7b2cbf"][n]),.42,.04,.3,-.12,.51,0)),e.userData={r:23.5+n*.8,a:n*1.6,sp:(n%2?1:-1)*(.05+n*.012)},He.add(e),bf.push(e)}function Pc(n){let e=new ot,t=(c,h,u,f,m,g,x)=>ge(De(c),h,u,f,m,g,x),i=new ot;i.position.set(0,.1,-.032),i.add(t(n.pants,.045,.1,.045,0,-.05,0)),i.add(t("#1b1b1b",.06,.02,.05,.01,-.095,0));let s=new ot;s.position.set(0,.1,.032),s.add(t(n.pants,.045,.1,.045,0,-.05,0)),s.add(t("#1b1b1b",.06,.02,.05,.01,-.095,0)),e.add(i,s),e.add(t(n.shirt,.07,.11,.13,0,.155,0));let r=new ot;r.position.set(0,.2,-.085),r.add(t(n.shirt,.04,.07,.04,0,-.03,0)),r.add(t(n.skin,.035,.035,.035,0,-.08,0));let o=new ot;o.position.set(0,.2,.085),o.add(t(n.shirt,.04,.07,.04,0,-.03,0)),o.add(t(n.skin,.035,.035,.035,0,-.08,0)),e.add(r,o),e.add(t(n.skin,.08,.08,.08,0,.25,0)),e.add(t("#111111",.005,.015,.014,.041,.26,-.02)),e.add(t("#111111",.005,.015,.014,.041,.26,.02)),n.hat?(e.add(t(n.hat,.088,.03,.088,0,.295,0)),e.add(t(n.hat,.05,.012,.08,.055,.284,0))):e.add(t(n.hair||"#2b1b12",.085,.025,.085,-.002,.295,0)),n.mask&&(e.add(t(n.mask,.084,.032,.084,0,.228,0)),e.add(t("#111111",.088,.03,.088,0,.298,0)));let a=null,l=null;return n.gun&&(a=t("#222222",.028,.075,.022,.012,-.1,0),o.add(a)),n.bat&&(l=t("#8d5524",.026,.17,.026,0,-.17,0),o.add(l)),n.belt&&e.add(t(n.belt,.072,.02,.132,0,.105,0)),n.scale&&e.scale.setScalar(n.scale),e.rotation.order="YXZ",{g:e,legL:i,legR:s,armL:r,armR:o,gun:a,bat:l}}function _o(n,e,t,i){let s=Math.sin(t)*Math.min(1,e*1.4)*.8;n.legL.rotation.z=s,n.legR.rotation.z=-s,n.armL.rotation.z=-s*.7,n.armR.rotation.z=i?Math.PI/2:s*.7}var it=null,vc=null,nr=null,on=null;function Lc(){if(!it)try{it=new(window.AudioContext||window.webkitAudioContext),vc=it.createBuffer(1,it.sampleRate*.5,it.sampleRate);let n=vc.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1;nr=it.createOscillator(),nr.type="sawtooth",nr.frequency.value=50;let e=it.createBiquadFilter();e.type="lowpass",e.frequency.value=400,on=it.createGain(),on.gain.value=0,nr.connect(e).connect(on).connect(it.destination),nr.start()}catch{it=null}}function Dn(n,e,t){if(!it||!xi)return;let i=it.createBufferSource();i.buffer=vc;let s=it.createBiquadFilter();s.type="bandpass",s.frequency.value=n,s.Q.value=.8;let r=it.createGain(),o=it.currentTime;r.gain.setValueAtTime(t,o),r.gain.exponentialRampToValueAtTime(.001,o+e),i.connect(s).connect(r).connect(it.destination),i.start(o),i.stop(o+e)}function ht(n,e,t,i="square",s=0){if(!it||!xi)return;let r=it.createOscillator();r.type=i;let o=it.createGain(),a=it.currentTime;r.frequency.setValueAtTime(n,a),s&&r.frequency.exponentialRampToValueAtTime(n*s,a+e),o.gain.setValueAtTime(t,a),o.gain.exponentialRampToValueAtTime(.001,a+e),r.connect(o).connect(it.destination),r.start(a),r.stop(a+e)}function ri(n,e,t,i,s,r=2){for(let o=0;o<s;o++){let a=uo.find(l=>!l.alive);if(!a){if(uo.length>240)return;a={m:ge(De("#ffffff"),1,1,1,0,0,0,!1)},He.add(a.m),uo.push(a)}a.alive=!0,a.m.visible=!0,a.m.material=De(i[o%i.length]),a.s=.022+Math.random()*.03,a.m.scale.setScalar(a.s),a.m.position.set(n,e,t),a.vx=(Math.random()-.5)*r,a.vy=Math.random()*r*.7+.4,a.vz=(Math.random()-.5)*r,a.life=a.max=.5+Math.random()*.5}}function Ex(n){for(let e of uo){if(!e.alive)continue;e.vy-=5*n;let t=e.m.position;t.x+=e.vx*n,t.y+=e.vy*n,t.z+=e.vz*n,t.y<.01&&(t.y=.01,e.vy*=-.35,e.vx*=.6,e.vz*=.6),e.life-=n,e.m.scale.setScalar(e.s*Math.max(0,e.life/e.max)),e.m.rotation.x+=n*6,e.life<=0&&(e.alive=!1,e.m.visible=!1)}}function Sf(n,e,t,i,s,r,o,a,l){let c=xo.find(u=>!u.alive);c||(c={m:ge($u,.025,.025,.11,0,0,0,!1)},He.add(c.m),xo.push(c)),c.alive=!0,c.m.visible=!0,c.m.material=o==="p"?$u:yx;let h=o==="p"?18:9;c.x=n,c.y=e,c.z=t,c.vx=i*h,c.vy=s*h,c.vz=r*h,c.owner=o,c.dmg=a,c.life=l,c.m.position.set(n,e,t),c.m.lookAt(n+i,e+s,t+r)}function Ku(n,e,t,i,s,r,o,a,l){let c=i-n,h=s-e,u=r-t,f=o-n,m=a-e,g=l-t,x=c*c+h*h+u*u,p=x?(f*c+m*h+g*u)/x:0;p=ft(p,0,1);let d=n+c*p-o,E=e+h*p-a,M=t+u*p-l;return Math.sqrt(d*d+E*E+M*M)}var Ef="islavoxel_save_v1",Hr=[0,250,600,1100,1800,2700,3800,5200,7e3,9200,12e3],Re={xp:0,money:0,done:[],best:{}};try{let n=JSON.parse(localStorage.getItem(Ef));n&&typeof n.xp=="number"&&(Re=Object.assign(Re,n))}catch{}Re.owned=Re.owned||{};Re.upg=Object.assign({gloves:0,boots:0,vest:0,hp:0},Re.upg||{});function hr(){try{localStorage.setItem(Ef,JSON.stringify(Re))}catch{}}function Tx(n){let e=1;for(;e<Hr.length&&n>=Hr[e];)e++;return e}var hn=()=>Tx(Re.xp),Zn=()=>100+(hn()-1)*15+(Re.upg.hp||0)*25,Tf=()=>(1+(hn()-1)*.12)*(1+.15*(Re.upg.gloves||0)),wx=()=>1+.3*(Re.upg.boots||0);function wf(){let n=hn(),e=Hr[n-1]||0,t=Hr[n]||e+3e3;return{a:e,b:t,f:ft((Re.xp-e)/(t-e),0,1)}}var fn=[{name:"Pu\xF1os",lvl:1,melee:!0},{name:"Pistola",lvl:2,cd:.3,dmg:1,spread:.02,auto:!1,pellets:1,life:.9,snd:600},{name:"Metralleta",lvl:4,cd:.085,dmg:.45,spread:.06,auto:!0,pellets:1,life:.8,snd:900},{name:"Escopeta",lvl:6,cd:.75,dmg:.6,spread:.16,auto:!1,pellets:6,life:.35,snd:250},{name:"Rifle",lvl:8,cd:.9,dmg:3.2,spread:.004,auto:!1,pellets:1,life:1.4,snd:170}],Co=n=>!!fn[n]&&(fn[n].lvl<=hn()||!!(Re.owned&&Re.owned["w"+n])),Ic=[{name:"Cap\xEDtulo 1 \xB7 El barrio",missions:[{id:"m1",title:"Primeros golpes",type:"brawl",count:3,armed:0,bats:0,xp:150,money:150,story:'Unos matones est\xE1n cobrando "cupos" a los vendedores del parque. Nadie se atreve a decirles nada. T\xFA s\xED.',obj:"Derrota a 3 matones a golpes. Las armas no cuentan."},{id:"m2",title:"Plata perdida",type:"collect",count:6,time:110,guards:0,xp:200,money:250,story:"Un cami\xF3n de caudales choc\xF3 y el viento reg\xF3 las bolsas de dinero por toda la cuadra. Rec\xF3gelas antes que los vecinos.",obj:"Recoge 6 bolsas de dinero antes de que acabe el tiempo."},{id:"m3",title:"Mototaxi expr\xE9s",type:"deliver",time:55,needCar:!0,pursuers:0,spawnRide:!0,xp:250,money:300,story:"Do\xF1a Rosa perdi\xF3 su bus y tiene una cita urgente al otro lado de la isla. Cons\xEDguete un veh\xEDculo y ll\xE9vala.",obj:"Recoge a la clienta y ll\xE9vala a su destino en un veh\xEDculo."},{id:"m4",title:"El Chato",type:"boss",boss:{name:"El Chato",hp:14,kind:"brute"},escorts:3,escortArmed:0,escortBats:.5,xp:400,money:600,story:"El jefe de los matones se esconde en un callej\xF3n. Es bajito pero pega como cami\xF3n, y cuando se enoja embiste.",obj:"Llega a la guarida y derrota al Chato."}]},{name:"Cap\xEDtulo 2 \xB7 Calles calientes",missions:[{id:"m5",title:"Limpieza",type:"kill",count:8,armed:.5,bats:.4,xp:350,money:400,story:"La banda de la Viuda tom\xF3 una zona comercial. Los negocios cerraron y la gente tiene miedo de salir.",obj:"Ve a la zona marcada y elimina a 8 delincuentes."},{id:"m6",title:"Carrera nocturna",type:"race",checkpoints:7,night:!0,spawnRide:!0,xp:350,money:450,story:"Para ganarte la confianza del barrio tienes que ganar la carrera clandestina de esta noche. Sin trampas.",obj:"S\xFAbete a un veh\xEDculo y pasa por todos los puntos de control a tiempo."},{id:"m7",title:"La bodega",type:"defend",time:60,radius:3.6,armed:.5,bats:.4,xp:450,money:500,story:"Don Lucho se neg\xF3 a pagar cupo y la banda viene a quemarle la bodega. Qu\xE9date y defi\xE9ndela.",obj:"Defiende la bodega durante 60 segundos sin alejarte."},{id:"m8",title:"La Viuda",type:"boss",boss:{name:"La Viuda",hp:22,kind:"gunner"},escorts:4,escortArmed:.6,escortBats:.3,xp:600,money:900,story:"La Viuda dispara en r\xE1fagas y nunca pelea de cerca. Ac\xE9rcate r\xE1pido, usa coberturas y no le des tregua.",obj:"Encuentra a la Viuda y derr\xF3tala."}]},{name:"Cap\xEDtulo 3 \xB7 El puerto",missions:[{id:"m9",title:"Paquete caliente",type:"deliver",time:80,needCar:!1,pursuers:1,dest:"pier",xp:550,money:700,story:"Interceptaste un paquete con las pruebas contra Don Capo. Ll\xE9valo al muelle, donde espera la lancha de la fiscal\xEDa. Te van a perseguir.",obj:"Recoge el paquete y ll\xE9valo al muelle antes de que acabe el tiempo."},{id:"m10",title:"Maestro de las patadas",type:"brawl",count:6,armed:.3,bats:.5,kickOnly:!0,xp:600,money:700,story:"Los guardaespaldas de Don Capo se creen invencibles. Demu\xE9strales lo contrario con las piernas.",obj:"Derriba a 6 enemigos con patadas."},{id:"m11",title:"Cargamento robado",type:"collect",count:8,time:150,guards:6,item:"box",xp:700,money:900,story:"La banda escondi\xF3 cajas de medicinas robadas del hospital. Recup\xE9ralas todas; est\xE1n vigiladas.",obj:"Recupera 8 cajas antes de que acabe el tiempo."},{id:"m12",title:"Don Capo",type:"boss",boss:{name:"Don Capo",hp:40,kind:"capo"},escorts:6,escortArmed:.7,escortBats:.4,xp:1200,money:2e3,final:!0,story:"Lleg\xF3 la hora. Don Capo te espera con su escopeta y todo lo que le queda de banda. Si cae \xE9l, la isla queda libre.",obj:"Derrota a Don Capo."}]}],lr=Ic.flatMap((n,e)=>n.missions.map(t=>Object.assign(t,{chapter:e}))),Ro=()=>lr.find(n=>!Re.done.includes(n.id)),Ax=n=>{let e=lr.indexOf(n);return e===0||Re.done.includes(lr[e-1].id)},H={active:!1,paused:!1,started:!1,mode:"free",hp:100,armor:0,money:0,kills:0,lastHurt:-9,weapon:0,cd:0,time:0,dead:!1,spawnT:0,combo:0,comboT:0},k={pos:new O,vy:0,y:0,facing:0,walk:0,aimT:0,model:null,car:null,kx:0,kz:0,stun:0},lt=[],ai=[],xo=[],uo=[],Wi=[],Ht=[],Un=Math.PI/4,Pn=.32,yo=0,Mc=0,N=null,Dc=ge(vx,.07,.07,.07,0,-5,0,!1);He.add(Dc);var fo=0;k.model=Pc({shirt:"#06b6d4",pants:"#1f2937",skin:"#e0ac69",hat:"#f59e0b",gun:!0,belt:"#f59e0b"});k.model.g.visible=!1;He.add(k.model.g);function St(){return k.car?k.car.g.position:k.pos}var Cx=K("dmg"),Xi=[],co=new O;function En(n,e,t,i,s="#ffffff",r=18){Xi.length>28&&Xi.shift().el.remove();let o=document.createElement("div");o.className="ft",o.textContent=n,o.style.color=s,o.style.fontSize=r+"px",Cx.appendChild(o),Xi.push({el:o,x:e+(Math.random()-.5)*.08,y:t,z:i,t:0})}function Af(n){let e=Br.clientWidth,t=Br.clientHeight;for(let i=Xi.length-1;i>=0;i--){let s=Xi[i];if(s.t+=n,s.y+=n*.35,co.set(s.x,s.y,s.z).project(yi),s.t>.9||co.z>1){s.el.remove(),Xi.splice(i,1);continue}s.el.style.transform=`translate(${(co.x*.5+.5)*e}px,${(-co.y*.5+.5)*t}px) translate(-50%,-50%) scale(${1+Math.max(0,.25-s.t)*2})`,s.el.style.opacity=String(1-Math.max(0,s.t-.5)/.4)}}function Rx(){for(let n of Xi)n.el.remove();Xi.length=0}function Px(n){for(let e of xo){if(!e.alive)continue;let t=e.x+e.vx*n,i=e.y+e.vy*n,s=e.z+e.vz*n,r=!1;if(e.owner==="p")for(let o of lt){if(o.dying)continue;let a=o.g.position,l=o.isBoss?.15:.11;if(Ku(e.x,e.y,e.z,t,i,s,a.x,a.y+.16*o.sc,a.z)<l){Zr(o,e.dmg,e.vx*.02,e.vz*.02,{gun:!0}),r=!0;break}}else if(!H.dead){let o=St(),a=k.car?.26:.11;Ku(e.x,e.y,e.z,t,i,s,o.x,k.y+.16,o.z)<a&&(k.car?(Vr(k.car,e.dmg*1.4),vo(e.dmg*.3)):vo(e.dmg,e.x,e.z),r=!0)}if(!r&&(Ao(t,i,s)||i<0)&&(ri(t,Math.max(i,.02),s,["#ffd166","#ffffff","#adb5bd"],4,1.2),r=!0),e.life-=n,e.life<=0&&(r=!0),r){e.alive=!1,e.m.visible=!1;continue}e.x=t,e.y=i,e.z=s,e.m.position.set(t,i,s)}}function Lx(n,e,t){if(!t){let s=Math.random();if(s>.85)return;t=s<.14?"health":s<.24?"armor":"cash"}let i=new ot;t==="health"?(i.add(ge(De("#ffffff"),.14,.14,.14)),i.add(ge(De("#ef233c"),.15,.04,.05)),i.add(ge(De("#ef233c"),.15,.05,.04)),i.add(ge(De("#ef233c"),.04,.05,.15))):t==="armor"?(i.add(ge(De("#3a86ff"),.15,.16,.07)),i.add(ge(De("#8ecae6"),.05,.1,.075,0,.01,0))):(i.add(ge(De("#2ecc71"),.16,.08,.1)),i.add(ge(De("#a3f7bf"),.06,.085,.06))),i.position.set(n,.15,e),He.add(i),Wi.push({g:i,kind:t,t:Math.random()*6})}function Ix(n,e,t=1.6,i=99){ri(n,.25,e,["#ff7b00","#ffd60a","#e63946","#333333","#666666"],40,4),Dn(90,.7,.7),ht(60,.6,.4,"sawtooth",.3),ar=.5,Et(60);for(let s of lt){if(s.dying)continue;let r=Math.hypot(s.g.position.x-n,s.g.position.z-e);r<t&&Zr(s,i*(1-r/t)+1,(s.g.position.x-n)*2,(s.g.position.z-e)*2,{launch:1.2})}for(let s of ai){let r=s.g.position;Math.hypot(r.x-n,r.z-e)<t*2&&(s.flee=4,s.fx=r.x-n,s.fz=r.z-e)}}function Vr(n,e){if(n.hp=(n.hp??100)-e,n.hp<=0&&!n.boom){n.boom=!0;let t=n.g.position;Ix(t.x,t.z,1.5,6),k.car===n&&(k.car=null,k.model.g.visible=!0,k.pos.set(t.x+.4,0,t.z+.4),Si(k.pos,.08),vo(25),k.vy=1.5),xt.remove(n.g);let i=Ht.indexOf(n);i>=0&&Ht.splice(i,1),kt("\xA1El veh\xEDculo explot\xF3!")}}function ju(n,e,t){let i=t?Rc($t(Fr)):xf($t(Fr));i.position.set(n,0,e),i.rotation.y=Math.random()*6.28,xt.add(i);let s={g:i,moto:t,hp:100};return Ht.push(s),s}var Uc={jab:{wind:.05,act:.09,rec:.13,dmg:.7,range:.34,arc:1.3,kb:.7,arm:"R",lunge:.7},cross:{wind:.05,act:.09,rec:.14,dmg:.8,range:.34,arc:1.3,kb:.8,arm:"L",lunge:.7},upper:{wind:.09,act:.1,rec:.26,dmg:1.4,range:.36,arc:1.4,kb:1.2,launch:1.5,arm:"R",up:!0,lunge:.9},kick:{wind:.1,act:.11,rec:.28,dmg:1.5,range:.42,arc:1.2,kb:2.4,launch:.7,leg:!0,lunge:1.1},fkick:{wind:.04,act:.2,rec:.18,dmg:2.1,range:.46,arc:1.4,kb:3,launch:1,leg:!0,lunge:2.2}},Ye={type:null,t:0,hit:!1,step:-1,lastEnd:-9,queued:null};function Dx(n){let e=null,t=n,i=k.pos;for(let s of lt){if(s.dying)continue;let r=Math.hypot(s.g.position.x-i.x,s.g.position.z-i.z);r<t&&(t=r,e=s)}return e}function Po(){if(k.car||H.dead||!H.active||H.paused)return;if(Ye.type){Ye.queued="punch";return}let n=["jab","cross","upper"];Ye.step=H.time-Ye.lastEnd<.42?(Ye.step+1)%3:0,Cf(n[Ye.step])}function Yr(){if(!(k.car||H.dead||!H.active||H.paused)){if(Ye.type){Ye.queued="kick";return}Ye.step=-1,Cf(k.y>.04?"fkick":"kick")}}function Cf(n){Ye.type=n,Ye.t=0,Ye.hit=!1;let e=Dx(.95);if(e)k.facing=Math.atan2(-(e.g.position.z-k.pos.z),e.g.position.x-k.pos.x);else{let t=$r();k.facing=Math.atan2(-t.z,t.x)}k.model.g.rotation.y=k.facing,n==="fkick"&&(k.vy=Math.max(k.vy,.7)),Dn(n==="kick"||n==="fkick"?1800:2600,.07,.1)}function Ux(n){let e=Math.cos(k.facing),t=-Math.sin(k.facing),i=k.pos,s=0;for(let r of lt){if(r.dying)continue;let o=r.g.position,a=o.x-i.x,l=o.z-i.z,c=Math.hypot(a,l);if(c>n.range+(r.isBoss?.1:0)||Math.abs(o.y-k.y)>.35||c>.1&&Math.acos(ft((a*e+l*t)/c,-1,1))>n.arc/2)continue;let h=n.leg?wx():1;Zr(r,n.dmg*Tf()*h,e*n.kb*h,t*n.kb*h,{melee:!0,kick:!!n.leg,launch:n.launch||0}),s++}for(let r of ai){let o=r.g.position,a=o.x-i.x,l=o.z-i.z,c=Math.hypot(a,l);c<n.range&&c>.01&&(a*e+l*t)/c>.3&&(o.x+=a/c*.25,o.z+=l/c*.25,r.flee=4,r.fx=a,r.fz=l,En("\xA1Oye!",o.x,.4,o.z,"#ffffff",14),s++,vy())}return s}function Nx(n){if(!Ye.type)return;let e=Uc[Ye.type];if(Ye.t+=n,Ye.t<e.wind+e.act){let t=e.lunge*n;k.pos.x+=Math.cos(k.facing)*t,k.pos.z-=Math.sin(k.facing)*t}if(!Ye.hit&&Ye.t>=e.wind&&Ye.t<=e.wind+e.act&&Ux(e)>0&&(Ye.hit=!0),Ye.t>=e.wind+e.act+e.rec&&(Ye.type=null,Ye.lastEnd=H.time,Ye.queued)){let t=Ye.queued;Ye.queued=null,t==="kick"?Yr():Po()}}function Ox(n){if(!Ye.type)return;let e=Uc[Ye.type],t=Ye.t,i=t<e.wind?t/e.wind*.35:t<e.wind+e.act?1:Math.max(0,1-(t-e.wind-e.act)/e.rec);if(e.leg)n.legR.rotation.z=i*1.55,n.legL.rotation.z=-.35*i,n.armL.rotation.z=-.7*i,n.armR.rotation.z=.6*i;else{let s=e.arm==="R"?n.armR:n.armL,r=e.arm==="R"?n.armL:n.armR;s.rotation.z=i*(e.up?2.6:Math.PI/2),r.rotation.z=1,n.legL.rotation.z=.25,n.legR.rotation.z=-.25}}var zx=new Ct({color:"#1b1b1b"}),Fx=new Ct({color:new _e("#ff4d6d").multiplyScalar(1.2)});function Rf(){let n=new ot,e=new vt(or,zx);e.scale.set(.2,.025,.006),n.add(e);let t=new vt(or,Fx);return t.scale.set(.19,.017,.01),n.add(t),n.visible=!1,He.add(n),{g:n,fg:t}}var Bx={thug:{hp:2.8,speed:1,melee:!0,shoots:!1,reach:.3,dmg:9,wind:.42,cd:1},gunner:{hp:2.6,speed:.85,melee:!1,shoots:!0,dmg:7,cd:1.2},brute:{hp:14,speed:.95,melee:!0,shoots:!1,reach:.38,dmg:18,wind:.5,cd:1.2,boss:!0,scale:1.4},widow:{hp:22,speed:.95,melee:!1,shoots:!0,dmg:8,cd:1.6,boss:!0,scale:1.3},cop:{hp:2.8,speed:1.1,melee:!0,shoots:!1,reach:.32,dmg:6,wind:.4,cd:1.1},swat:{hp:4.5,speed:1.15,melee:!0,shoots:!0,reach:.32,dmg:9,wind:.38,cd:1},capo:{hp:40,speed:.8,melee:!0,shoots:!0,reach:.4,dmg:20,wind:.5,cd:1.3,boss:!0,scale:1.5}};function ii(n={}){let e=St(),t=n.x,i=n.z;if(t===void 0){let u=!1;for(let f=0;f<40&&!u;f++){let m=Math.floor(Math.random()*(Sn+1)),g=Math.floor(Math.random()*Bt);[t,i]=Math.random()<.5?[Rt(g),In(m)]:[In(m),Rt(g)];let x=Math.hypot(t-e.x,i-e.z);u=x>=(n.minD||9)&&x<=(n.maxD||24)}if(!u)return null}let s=n.boss?{brute:"brute",gunner:"widow",capo:"capo"}[n.boss.kind]:n.kind||"thug",r=Bx[s],o=s==="thug"&&Math.random()<(n.bats??.4),a;s==="brute"?a={shirt:"#6a040f",pants:"#3d2b1f",skin:"#c68642",hat:"#111111",belt:"#ffd60a",scale:r.scale}:s==="widow"?a={shirt:"#111111",pants:"#111111",skin:"#f1c27d",hair:"#5a189a",gun:!0,belt:"#c1121f",scale:r.scale}:s==="capo"?a={shirt:"#f8f9fa",pants:"#212529",skin:"#e0ac69",hat:"#212529",gun:!0,belt:"#ffd60a",scale:r.scale}:s==="gunner"?a={shirt:$t(["#2b2d42","#3c096c","#370617","#1b263b"]),pants:"#14213d",skin:$t(Ur),mask:$t(["#c1121f","#111111"]),gun:!0}:s==="cop"?a={shirt:"#1d4e89",pants:"#0b1d3a",skin:$t(Ur),hat:"#0b1d3a",gun:!0,belt:"#ffd60a"}:s==="swat"?a={shirt:"#212529",pants:"#212529",skin:$t(Ur),hat:"#111111",mask:"#111111",gun:!0,belt:"#495057"}:a={shirt:$t(["#5f0f40","#283618","#6c584c","#3a0ca3","#7f5539"]),pants:"#22223b",skin:$t(Ur),mask:$t(["#c1121f","#d00000","#495057"]),bat:o};let l=Pc(a);l.g.position.set(t,0,i),He.add(l.g);let c=n.boss?n.boss.hp:r.hp,h={...l,kind:s,K:r,hp:c,hpMax:c,isBoss:!!r.boss,name:n.boss?n.boss.name:null,sc:r.scale||1,melee:r.melee,shoots:r.shoots,dmg:r.dmg*(o?1.4:1),reach:(r.reach||.3)+(o?.08:0),speed:r.speed*(.9+Math.random()*.2),cd:.6+Math.random(),atk:0,strikeT:0,stun:0,vx:0,vy:0,y:0,vz:0,flash:0,dying:0,fall:0,dead:!1,alert:!!n.alert,side:Math.random()<.5?1:-1,walk:Math.random()*6,wp:null,stuck:0,last:{x:t,z:i},detour:0,chargeCd:2+Math.random()*2,charge:0,burst:0,burstT:0,tag:n.tag||null,bar:r.boss?null:Rf(),rad:.08*(r.scale||1)};return lt.push(h),h}function Zr(n,e,t,i,s={}){if(n.dying)return;let r=n.isBoss&&!s.kick&&!s.gun?.75:1;e*=r,n.hp-=e,n.alert=!0,n.flash=.12;let o=n.isBoss?.35:1;n.vx+=t*o,n.vz+=i*o,s.launch&&(n.vy=Math.max(n.vy,s.launch*(n.isBoss?.3:1)));let a=s.melee?n.isBoss?s.kick?.35:.12:.5:s.gun?.08:.3;n.stun=Math.max(n.stun,a),(!n.isBoss||s.kick)&&(n.atk=0);let l=n.g.position;En(String(Math.max(1,Math.round(e*10))),l.x,l.y+.36*n.sc,l.z,s.kick?"#ff3cac":s.melee?"#ffd60a":"#ffffff",s.kick?22:18),s.melee?(ri(l.x,l.y+.2*n.sc,l.z,["#ffffff","#ffd166"],s.kick?8:5,1.6),ht(s.kick?80:110,.1,.42,"square",.45),Dn(s.kick?260:420,.09,.4),Mc=s.kick?.09:.055,ar=s.kick?.2:.12,Et(s.kick?28:16),H.combo++,H.comboT=1.6,Qx()):ri(l.x,l.y+.18*n.sc,l.z,["#ffffff","#ffd166"],3,1),K("cross").classList.add("hit"),setTimeout(()=>K("cross").classList.remove("hit"),100),n.cop&&Sy(),n.hp<=0&&kx(n,s)}function kx(n,e){if(n.dying=1.4,n.fall=0,n.stun=0,n.bar&&(n.bar.g.visible=!1),n.cop){Dn(140,.3,.45),Ey();return}H.kills++;let t=n.isBoss?N?0:80:e.melee?20:10;Re.xp+=t,H.runXp+=t;let i=n.g.position;t&&En(`+${t} XP`,i.x,i.y+.5,i.z,"#7cf0ff",14),n.isBoss||Lx(i.x,i.z),Dn(140,.3,.45),Kx(),N?iy(n,e):H.kills%5===0&&kt(`\xA1Racha de ${H.kills}!`)}function Qu(n,e){if(!H.dead){if(k.car){e<.42&&(Vr(k.car,n.dmg*.5),Dn(300,.1,.3));return}if(e<n.reach+.06){let t=n.g.position,i=St();vo(n.dmg,t.x,t.z);let s=n.isBoss?1.4:.6,r=Math.hypot(i.x-t.x,i.z-t.z)||1;k.kx+=(i.x-t.x)/r*s,k.kz+=(i.z-t.z)/r*s,k.stun=n.isBoss?.35:.15,ht(150,.1,.35,"square",.5)}else Dn(2e3,.06,.08)}}function pc(n,e,t,i=1,s=7){let r=n.g.position;for(let o=0;o<i;o++){let a=e+(Math.random()-.5)*t;Sf(r.x+Math.cos(a)*.15*n.sc,.19*n.sc,r.z+Math.sin(a)*.15*n.sc,Math.cos(a),0,Math.sin(a),"e",s,1.4)}Dn(n.isBoss?300:500,.1,.2)}function Hx(n){let e=St();for(let t of lt){let i=t.g.position;i.x+=t.vx*n,i.z+=t.vz*n;let s=Math.exp(-n*(t.y>0?1.5:7));if(t.vx*=s,t.vz*=s,t.vy-=6*n,t.y=Math.max(0,t.y+t.vy*n),t.y===0&&t.vy<0&&(t.vy=0),i.y=t.y,Si(i,t.rad),t.dying>0){t.dying-=n,t.fall=Math.min(1,t.fall+n*4.5),t.g.rotation.z=t.fall*Math.PI/2,t.dying<=0&&(ri(i.x,.06,i.z,[t.isBoss?"#ffd60a":"#adb5bd","#ffffff"],10,1.2),He.remove(t.g),t.bar&&He.remove(t.bar.g),t.dead=!0);continue}if(t.bar){let g=t.bar;if(g.g.visible=t.hp<t.hpMax,g.g.visible){let x=ft(t.hp/t.hpMax,0,1);g.g.position.set(i.x,i.y+.4*t.sc,i.z),g.g.rotation.y=Un,g.fg.scale.x=.19*x,g.fg.position.x=-(1-x)*.095}}if(t.g.scale.setScalar(t.sc*(t.flash>0?1.08:1)),t.flash>0&&(t.flash-=n),t.stun>0){t.stun-=n,t.g.rotation.z=.3*Math.min(1,t.stun*4),_o(t,0,0,!1),t.armL.rotation.z=-.5,t.armR.rotation.z=-.5;continue}t.g.rotation.z=0;let r=e.x-i.x,o=e.z-i.z,a=Math.hypot(r,o)||.001;!t.alert&&!t.leaving&&!H.dead&&a<(t.isBoss?7:10)&&(t.alert=!0);let l=0,c=0,h=0,u=!1,f=null;if(t.alert&&!H.dead){t.cd-=n,t.chargeCd-=n,t.cop&&xy(t,a,n);let g=t.melee&&(!t.shoots||a<1.3);if(t.charge>0)t.charge-=n,l=t.cdx,c=t.cdz,h=2.5,f=Math.atan2(-c,l),a<.38*t.sc&&(t.charge=0,Qu(t,0),t.cd=1.2),Math.random()<.4&&ri(i.x,.03,i.z,["#c8b89a"],1,.5);else if(g)if(f=Math.atan2(-o,r),t.atk>0)t.atk-=n,t.atk<=0&&(t.strikeT=.18,t.cd=t.K.cd*(.8+Math.random()*.5),Qu(t,a));else if(a>t.reach){if(l=r/a,c=o/a,h=t.speed*(a>3?1.25:1),a>1.2&&!xs(i.x,i.z,e.x,e.z,.18)){let x=bc(i);x&&(l=x.x,c=x.z)}t.kind==="brute"&&t.chargeCd<=0&&a>1.8&&a<6&&xs(i.x,i.z,e.x,e.z)&&(t.charge=.95,t.chargeCd=4.5,t.cdx=r/a,t.cdz=o/a,En("\xA1EMBESTIDA!",i.x,.7,i.z,"#ff4d6d",16),ht(90,.4,.3,"sawtooth",1.6))}else t.cd<=0?t.atk=t.K.wind:(l=-o/a*t.side,c=r/a*t.side,h=.35);else if(t.shoots)if(a<11&&xs(i.x,i.z,e.x,e.z,.18)){u=!0,f=Math.atan2(-o,r);let p=t.kind==="widow"?4.5:t.kind==="capo"?2.5:4;a>p+1.5?(l=r/a,c=o/a,h=t.speed*.8):a<p-1.5?(l=-r/a,c=-o/a,h=t.speed*.7):(l=-o/a*t.side,c=r/a*t.side,h=.45);let d=Math.atan2(o,r);t.burst>0?(t.burstT-=n,t.burstT<=0&&(t.burst--,t.burstT=.14,pc(t,d,.18,1,6))):t.cd<=0&&(t.kind==="widow"?(t.burst=4,t.burstT=0,t.cd=2):t.kind==="capo"?(pc(t,d,.4,5,6),t.cd=1.5):(pc(t,d,.24,1,5),t.cd=1.3+Math.random()*1))}else{let p=bc(i);p?(l=p.x,c=p.z):(l=r/a,c=o/a),h=t.speed}t.detour>0&&t.charge<=0&&(t.detour-=n,l=-o/a*t.side,c=r/a*t.side,h=Math.max(h,.9))}else{(!t.wp||Math.hypot(t.wp.x-i.x,t.wp.z-i.z)<.3)&&(t.wp={x:i.x+(Math.random()-.5)*5,z:i.z+(Math.random()-.5)*5});let g=t.wp.x-i.x,x=t.wp.z-i.z,p=Math.hypot(g,x)||1;l=g/p,c=x/p,h=.35}for(let g of lt){if(g===t||g.dying)continue;let x=i.x-g.g.position.x,p=i.z-g.g.position.z,d=Math.hypot(x,p);d<.26&&d>.001&&(l+=x/d*.8,c+=p/d*.8)}let m=Math.hypot(l,c);m>.001&&(l/=m,c/=m),i.x+=l*h*n,i.z+=c*h*n,Si(i,t.rad)&&t.wp&&(t.wp=null),t.stuck+=n,t.stuck>.8&&(Math.hypot(i.x-t.last.x,i.z-t.last.z)<h*.25&&h>.5&&t.charge<=0&&(t.detour=1.1,t.side*=-1),t.stuck=0,t.last={x:i.x,z:i.z}),f===null&&h>.01&&(f=Math.atan2(-c,l)),f!==null&&(t.g.rotation.y+=_s(f-t.g.rotation.y)*(1-Math.exp(-n*10))),t.walk+=h*n*14,_o(t,h,t.walk,u),t.atk>0&&(t.armR.rotation.z=-1.2-(1-t.atk/t.K.wind)*.6,Math.random()<.15&&En("!",i.x,i.y+.42*t.sc,i.z,"#ff4d6d",16)),t.strikeT>0&&(t.strikeT-=n,t.armR.rotation.z=1.6)}lt=lt.filter(t=>!t.dead)}var mt=41,Vi=20,ti=null,bn=new Int16Array(mt*mt),mc=0,tr=new Int32Array(mt*mt);function Vx(){ti=new Uint8Array(mt*mt);for(let n=0;n<mt;n++)for(let e=0;e<mt;e++){let t=n-Vi,i=e-Vi;if(Math.abs(t)>19||Math.abs(i)>19){ti[n*mt+e]=1;continue}for(let s of po)if(!(s.y0>0||s.h<.25)&&t>s.x0-.12&&t<s.x1+.12&&i>s.z0-.12&&i<s.z1+.12){ti[n*mt+e]=1;break}}}function Gx(){ti||Vx();let n=St(),e=ft(Math.round(n.x)+Vi,0,mt-1),t=ft(Math.round(n.z)+Vi,0,mt-1);bn.fill(32e3);let i=0,s=0;for(bn[e*mt+t]=0,tr[s++]=e*mt+t;i<s;){let r=tr[i++],o=r/mt|0,a=r%mt,l=bn[r]+1;if(o>0){let c=r-mt;!ti[c]&&bn[c]>l&&(bn[c]=l,tr[s++]=c)}if(o<mt-1){let c=r+mt;!ti[c]&&bn[c]>l&&(bn[c]=l,tr[s++]=c)}if(a>0){let c=r-1;!ti[c]&&bn[c]>l&&(bn[c]=l,tr[s++]=c)}if(a<mt-1){let c=r+1;!ti[c]&&bn[c]>l&&(bn[c]=l,tr[s++]=c)}}}function bc(n){let e=ft(Math.round(n.x)+Vi,0,mt-1),t=ft(Math.round(n.z)+Vi,0,mt-1),i=bn[e*mt+t],s=e,r=t;for(let[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){let m=e+u,g=t+f;if(m<0||g<0||m>=mt||g>=mt)continue;let x=bn[m*mt+g];x<i&&(i=x,s=m,r=g)}if(i>=32e3)return null;let o=s-Vi,a=r-Vi;if(s===e&&r===t)return null;let l=o-n.x,c=a-n.z,h=Math.hypot(l,c)||1;return{x:l/h,z:c/h}}function Pf(n,e,t=!1){let i=Pc({shirt:$t(px),pants:$t(["#264653","#3d405b","#6d597a","#4a4e69","#bc6c25"]),skin:$t(Ur),hair:$t(["#2b1b12","#111111","#6b4226","#d4a373"]),hat:Math.random()<.25?$t(ps):null});i.g.position.set(n,0,e),He.add(i.g);let s={...i,wp:null,walk:Math.random()*6,flee:t?3:0,fx:1,fz:0};return ai.push(s),s}function Wx(n,e,t){for(let i of lt){let s=i.g.position;Math.hypot(s.x-n,s.z-e)<t&&(i.alert=!0)}for(let i of ai){let s=i.g.position;Math.hypot(s.x-n,s.z-e)<t&&(i.flee=3,i.fx=s.x-n,i.fz=s.z-e)}}function Xx(n){for(let e of ai){let t=e.g.position,i,s,r;if(e.flee>0){e.flee-=n;let o=Math.hypot(e.fx,e.fz)||1;i=e.fx/o,s=e.fz/o,r=1.5}else{(!e.wp||Math.hypot(e.wp.x-t.x,e.wp.z-t.z)<.25)&&(e.wp={x:ft(t.x+(Math.random()-.5)*5,-18,18),z:ft(t.z+(Math.random()-.5)*5,-18,18)});let o=e.wp.x-t.x,a=e.wp.z-t.z,l=Math.hypot(o,a)||1;i=o/l,s=a/l,r=.45}t.x+=i*r*n,t.z+=s*r*n,Si(t,.07)&&(e.wp=null,e.fx=-e.fx+(Math.random()-.5),e.fz=-e.fz+(Math.random()-.5)),e.g.rotation.y+=_s(Math.atan2(-s,i)-e.g.rotation.y)*(1-Math.exp(-n*8)),e.walk+=r*n*14,_o(e,r,e.walk,!1)}}var It={},Ln=!1,Gr=!1,ef=!1,sr={x:0,y:0};function qx(){let n=(It.KeyD||It.ArrowRight?1:0)-(It.KeyA||It.ArrowLeft?1:0)+sr.x,e=(It.KeyW||It.ArrowUp?1:0)-(It.KeyS||It.ArrowDown?1:0)-sr.y;return{x:ft(n,-1,1),y:ft(e,-1,1)}}function $r(){return{x:-Math.sin(Un),z:-Math.cos(Un)}}function Yx(n,e){let t=$r(),i=null,s=.45;for(let r of lt){if(r.dying)continue;let o=r.g.position,a=o.x-n,l=o.z-e,c=Math.hypot(a,l);if(c<.05||c>16)continue;let h=Math.acos(ft((a*t.x+l*t.z)/c,-1,1));h<s&&xs(n,e,o.x,o.z)&&(s=h,i={x:a/c,z:l/c,d:c})}return i||{x:t.x,z:t.z,d:0}}function ur(n){if(!Co(n)){let e=fn[n];e&&kt(`${e.name}: se desbloquea en nivel ${e.lvl}`);return}H.weapon=n,K("weapon").textContent=fn[n].name,document.body.classList.toggle("fists",!!fn[n].melee),K("tAtk").textContent=fn[n].melee?"GOLPE":"FUEGO",k.model.gun.visible=!fn[n].melee,ht(300,.06,.1)}function Lf(){for(let n=1;n<=fn.length;n++){let e=(H.weapon+n)%fn.length;if(Co(e)){ur(e),Et();return}}}function Zx(n){H.cd-=n;let e=fn[H.weapon],t=Ln&&!ef||Gr,i=Ln&&e.auto||t;if(ef=Ln,Gr=!1,!i||H.dead)return;if(e.melee){t&&Po();return}if(H.cd>0||Ye.type)return;H.cd=e.cd;let s,r,o;if(k.car){let l=k.car.g.position;s=l.x,r=.3,o=l.z}else s=k.pos.x,r=k.y+.19,o=k.pos.z;let a=Yx(s,o);k.car?(s+=a.x*.3,o+=a.z*.3):(k.facing=Math.atan2(-a.z,a.x),k.aimT=.6,s+=a.x*.14,o+=a.z*.14);for(let l=0;l<e.pellets;l++){let c=Math.atan2(a.z,a.x)+(Math.random()-.5)*e.spread*2;Sf(s,r,o,Math.cos(c),(Math.random()-.5)*e.spread*.4,Math.sin(c),"p",e.dmg,e.life)}Dc.position.set(s,r,o),fo=.05,Dn(e.snd,.13,.45),Et(8),Wx(s,o,9),by(s,o)}function vo(n,e,t){if(H.dead||H.paused)return;if(H.armor>0){let s=Math.min(H.armor,n*.6);H.armor-=s,n-=s}H.hp-=n,H.lastHurt=H.time,K("vignette").style.opacity="0.55",setTimeout(()=>K("vignette").style.opacity="0",140);let i=St();En("-"+Math.round(n),i.x,.45,i.z,"#ff4d6d",16),ht(140,.15,.25,"sawtooth",.5),Et(30),H.hp<=0&&(H.hp=0,$x())}function $x(){H.dead=!0;let n=St();ri(n.x,.2,n.z,["#06b6d4","#f59e0b","#1f2937"],24,2.5),k.model.g.visible=!1,Ye.type=null,document.pointerLockElement&&document.exitPointerLock(),ht(300,.8,.3,"triangle",.2),setTimeout(()=>{N?bo("Ca\xEDste en combate."):ry()},900)}function If(){if(H.dead||H.paused||Ye.type)return;if(k.car){let i=k.car,s=i.g.position,r=i.g.rotation.y;k.pos.set(s.x-Math.sin(r)*.38,0,s.z-Math.cos(r)*.38),Si(k.pos,.08),i.speed=0,Ht.push(i),k.car=null,k.model.g.visible=!0,ht(500,.08,.15);return}let n=null,e=.75,t=null;for(let i of[si,Ht])for(let s of i){let r=s.g.position.distanceTo(k.pos);r<e&&(e=r,n=s,t=i)}if(n)if(t.splice(t.indexOf(n),1),n.speed=0,n.hp=n.hp??100,k.car=n,k.model.g.visible=!1,Un=Math.atan2(-Math.cos(n.g.rotation.y),Math.sin(n.g.rotation.y)),ht(380,.1,.15),Et(15),t===si){let i=n.g.position;Pf(i.x+.3,i.z+.3,!0),sf(n)}else n.police&&(sf(n),n.police=!1,n.maxF=8)}function Jx(n){let e=qx();if(k.car){let g=k.car,x=g.g,p=g.moto,d=g.maxF||(p?5:6.5),E=g.acc||(p?5:6);e.y>0?g.speed+=E*e.y*n*(g.speed<0?2:1):e.y<0?g.speed+=E*e.y*n*(g.speed>0?2:.7):g.speed*=1-1.4*n,It.Space&&(g.speed*=1-4*n),g.speed=ft(g.speed,-2.5,d),x.rotation.y-=e.x*2.4*ft(g.speed/1.6,-1,1)*n;let M=Math.cos(x.rotation.y),I=-Math.sin(x.rotation.y);x.position.x+=M*g.speed*n,x.position.z+=I*g.speed*n,Si(x.position,.2)&&Math.abs(g.speed)>1&&(Dn(180,.2,.3),Et(25),Math.abs(g.speed)>3&&Vr(g,Math.abs(g.speed)*1.5),g.speed*=-.3);for(let D of[si,Ht,Jt])for(let R of D){let A=x.position.x-R.g.position.x,ee=x.position.z-R.g.position.z,_=Math.hypot(A,ee);_<.42&&_>.001&&(x.position.x+=A/_*(.42-_),x.position.z+=ee/_*(.42-_),Math.abs(g.speed)>1.5&&(Dn(200,.2,.35),Et(20),ri(R.g.position.x,.2,R.g.position.z,["#adb5bd","#ffd166"],5,1.5),Vr(g,Math.abs(g.speed)*1.2)),g.speed*=.4)}if(!k.car)return;for(let D of lt){if(D.dying)continue;let R=D.g.position;Math.hypot(R.x-x.position.x,R.z-x.position.z)<.3*D.sc&&Math.abs(g.speed)>2.2&&Zr(D,D.isBoss?3:99,M*3,I*3,{launch:1.2,car:!0})}for(let D of ai){let R=D.g.position,A=R.x-x.position.x,ee=R.z-x.position.z,_=Math.hypot(A,ee);_<.32&&_>.001&&(R.x+=A/_*.3,R.z+=ee/_*.3,D.flee=3,Math.abs(g.speed)>2.5&&!(D.hitT>H.time)&&(D.hitT=H.time+2,My()))}if(g.hp<40&&Math.random()<n*(g.hp<20?20:8)&&ri(x.position.x,.3,x.position.z,["#555555","#888888"],1,.6),k.pos.set(x.position.x,0,x.position.z),on&&xi&&(on.gain.setTargetAtTime(.05,it.currentTime,.1),nr.frequency.setTargetAtTime(40+Math.abs(g.speed)*18,it.currentTime,.1)),yo<H.time-1.2&&Math.abs(g.speed)>.5){let D=Math.atan2(-M,-I)+(g.speed<0?Math.PI:0);Un+=_s(D-Un)*(1-Math.exp(-n*3))}return}if(on&&it&&on.gain.setTargetAtTime(0,it.currentTime,.1),H.dead)return;k.pos.x+=k.kx*n,k.pos.z+=k.kz*n;let t=Math.exp(-n*7);k.kx*=t,k.kz*=t,k.stun>0&&(k.stun-=n);let i=$r(),s=-i.z,r=i.x,o=i.x*e.y+s*e.x,a=i.z*e.y+r*e.x,l=Math.min(1,Math.hypot(o,a)),c=!Ye.type&&k.stun<=0,h=It.ShiftLeft||It.ShiftRight||l>.95&&mn,u=c?(h?1.75:1.05)*l:0;if(l>.05&&c){let g=Math.hypot(o,a);o/=g,a/=g,k.pos.x+=o*u*n,k.pos.z+=a*u*n,k.aimT<=0&&(k.facing+=_s(Math.atan2(-a,o)-k.facing)*(1-Math.exp(-n*14)))}Nx(n),Si(k.pos,.08);for(let g of[si,Ht,Jt])for(let x of g){let p=k.pos.x-x.g.position.x,d=k.pos.z-x.g.position.z,E=Math.hypot(p,d);E<.3&&E>.001&&(k.pos.x+=p/E*(.3-E),k.pos.z+=d/E*(.3-E))}It.Space&&k.y<=.001&&!Ye.type&&(k.vy=1.6,ht(520,.08,.08,"square",1.6)),k.vy-=5*n,k.y=Math.max(0,k.y+k.vy*n),k.y===0&&(k.vy=Math.max(0,k.vy)),k.aimT-=n,k.walk+=u*n*14;let f=k.model;f.g.position.set(k.pos.x,k.y,k.pos.z),f.g.rotation.y+=_s(k.facing-f.g.rotation.y)*(1-Math.exp(-n*18));let m=fn[H.weapon];_o(f,u,k.walk,!m.melee&&(k.aimT>0||Ln)),m.melee&&!Ye.type&&l<.05&&(f.armL.rotation.z=.7,f.armR.rotation.z=.8),Ox(f),f.gun.visible=!m.melee&&!(Ye.type&&!Uc[Ye.type].leg);for(let g=Wi.length-1;g>=0;g--){let x=Wi[g],p=x.g.position;if(Math.hypot(p.x-k.pos.x,p.z-k.pos.z)<.3){if(x.kind==="health")H.hp=Math.min(Zn(),H.hp+35),En("+35 VIDA",p.x,.4,p.z,"#ff7b7b",14),ht(660,.18,.2,"triangle",1.5);else if(x.kind==="armor")H.armor=Math.min(100,H.armor+50),En("+50 CHALECO",p.x,.4,p.z,"#8ecae6",14),ht(520,.18,.2,"triangle",1.3);else{let d=50+Math.floor(Math.random()*11)*10;H.money+=d,Re.money+=d,En("+$"+d,p.x,.4,p.z,"#7CFC8A",15),ht(880,.08,.18,"square"),setTimeout(()=>ht(1320,.1,.18,"square"),70)}He.remove(x.g),Wi.splice(g,1),Et(10)}}}var Mo=hn();function Kx(){let n=hn();if(n>Mo){Mo=n,H.hp=Zn(),kt(`\xA1NIVEL ${n}!`),jx();let e=fn.find(t=>t.lvl===n);e&&setTimeout(()=>kt(`Desbloqueaste: ${e.name}`),1900)}hr()}function jx(){[523,659,784,1047].forEach((n,e)=>setTimeout(()=>ht(n,.16,.18,"square"),e*110))}function Qx(){let n=K("combo");H.combo>=2&&(n.textContent=`COMBO x${H.combo}`,n.style.opacity="1",n.style.transform="scale(1.15)",setTimeout(()=>n.style.transform="scale(1)",90))}var vs=[];function Gi(n,e,t="#ffd60a",i=.6,s=!0){let r=new ot;if(s){let l=new Ct({color:new _e(t).multiplyScalar(1.3),transparent:!0,opacity:.32,depthWrite:!1}),c=new vt(or,l);c.scale.set(.16,6,.16),c.position.y=3,r.add(c)}let o=new vt(new Rr(i*.78,i,28),new Ct({color:new _e(t).multiplyScalar(1.4),transparent:!0,opacity:.75,side:Cn,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.03,r.add(o),r.position.set(n,0,e),He.add(r);let a={g:r,x:n,z:e,r:i,ring:o,color:t};return vs.push(a),a}function rr(n){if(!n)return;He.remove(n.g);let e=vs.indexOf(n);e>=0&&vs.splice(e,1)}function Df(){for(let n of vs)He.remove(n.g);vs.length=0}function Zt(n,e,t,i,s){for(let r=0;r<80;r++){let o=Math.random()*Math.PI*2,a=t+Math.random()*(i-t),l=ft(n+Math.cos(o)*a,-18.3,18.3),c=ft(e+Math.sin(o)*a,-18.3,18.3);if(!(Si({x:l,z:c},.18)||Ao(l,.1,c))&&!(s&&Math.hypot(l-s.x,c-s.z)<s.r))return{x:l,z:c}}return{x:In(3)+.4,z:In(3)+.4}}var tf=n=>ft(Math.round((n+vi/2)/pt),0,Sn);function ey(n,e,t){let i=new ot;return t==="box"?(i.add(ge(De("#c8a165"),.2,.16,.2,0,.08,0)),i.add(ge(De("#ef233c"),.21,.04,.06,0,.1,0)),i.add(ge(De("#ef233c"),.06,.04,.21,0,.1,0))):(i.add(ge(De("#3a7d44"),.17,.15,.17,0,.075,0)),i.add(ge(De("#a3f7bf"),.08,.06,.08,0,.17,0)),i.add(ge(De("#ffd60a"),.06,.02,.02,0,.1,.09))),i.position.set(n,0,e),He.add(i),{g:i,x:n,z:e,mk:Gi(n,e,"#7CFC8A",.3,!0)}}function Nc(n){Ei(),Oc(),N=null,Lo(),Of(),Df(),H.mode="mission",N={def:n,phase:0,t:0,timeLeft:n.time||0,count:0,target:n.count||1,items:[],spawnT:1,outT:0,boss:null,goal:null,spawned:0,prevNight:ni,fin:!1},n.night&&!ni&&K("bNight").click(),ty(),zf(),kt(n.title),K("mpanel").classList.remove("hidden")}function ty(){let n=N.def,e=k.pos;if(n.type==="brawl"&&(ur(0),N.timeLeft=0),n.type==="kill"){let t=Zt(0,0,3,15,{x:e.x,z:e.z,r:9});N.zone=t,N.goal=t,N.zm=Gi(t.x,t.z,"#ff4d6d",1.2)}if(n.type==="collect"){let t=Zt(e.x,e.z,5,10);for(let i=0;i<n.count;i++){let s=Zt(t.x,t.z,1,8,{x:e.x,z:e.z,r:2});N.items.push(ey(s.x,s.z,n.item))}for(let i=0;i<(n.guards||0);i++){let s=N.items[i%N.items.length],r=Zt(s.x,s.z,.5,1.5);ii({x:r.x,z:r.z,kind:Math.random()<.5?"gunner":"thug",bats:.5})}}if(n.type==="deliver"){let t=Zt(e.x,e.z,3,6);if(N.pick=t,N.goal=t,N.pm=Gi(t.x,t.z,"#06b6d4",.55),n.spawnRide){let i=Zt(e.x,e.z,.8,1.6);ju(i.x,i.z,!0)}}if(n.type==="race"){let t=Zt(e.x,e.z,.8,1.6);ju(t.x,t.z,!1)}if(n.type==="defend"){let t=Zt(e.x,e.z,5,9);N.zone=t,N.goal=t,N.zm=Gi(t.x,t.z,"#ffd60a",n.radius),N.timeLeft=n.time}if(n.type==="boss"){let t=Zt(0,0,2,16,{x:e.x,z:e.z,r:10});N.zone=t,N.goal=t,N.zm=Gi(t.x,t.z,"#ff4d6d",1.2)}}function ny(){let n=N.def,e=tf(St().x),t=tf(St().z),i=null,s=null,r=[],o=new Set([e+","+t]);for(let a=0;a<n.checkpoints;a++){let l=[[1,0],[-1,0],[0,1],[0,-1]].filter(([m,g])=>go(e+m,t+g)&&!(i===-m&&s===-g)),c=l.filter(([m,g])=>!o.has(e+m+","+(t+g)));c.length||(c=l);let[h,u]=c[Math.floor(Math.random()*c.length)],f=1+(Math.random()<.35&&go(e+h*2,t+u*2)?1:0);e+=h*f,t+=u*f,i=h,s=u,o.add(e+","+t),r.push({x:In(e),z:In(t)})}N.cps=r,N.ci=0,N.timeLeft=Math.round(10+r.reduce((a,l,c)=>a+Math.hypot(l.x-(c?r[c-1].x:St().x),l.z-(c?r[c-1].z:St().z)),0)/3.6),Uf()}function Uf(){rr(N.cm),rr(N.cm2);let n=N.cps[N.ci];if(!n)return;N.cm=Gi(n.x,n.z,"#00f5d4",.9),N.goal=n;let e=N.cps[N.ci+1];e&&(N.cm2=Gi(e.x,e.z,"#2a6f66",.6,!1))}function gc(n,e,t,i,s,r){let o=Zt(n,e,t,i),a=ii({x:o.x,z:o.z,kind:Math.random()<s?"gunner":"thug",bats:r,alert:!0});return a&&(N.spawned++,ri(o.x,.1,o.z,["#adb5bd"],6,1)),a}function iy(n,e){let t=N.def;if(t.type==="brawl"){if(t.kickOnly&&!e.kick){En("\xA1Solo patadas!",n.g.position.x,.6,n.g.position.z,"#ff4d6d",14);return}if(!e.melee){En("\xA1Solo a golpes!",n.g.position.x,.6,n.g.position.z,"#ff4d6d",14);return}N.count++}else t.type==="kill"&&N.phase===1?N.count++:t.type==="boss"&&n===N.boss&&(K("bossBar").classList.add("hidden"),ds())}function sy(n){if(!N||N.fin)return;let e=N.def,t=St(),i=k.pos;N.t+=n;let s=N.timeLeft>0&&(e.type==="collect"||e.type==="deliver"&&N.phase===1||e.type==="race"&&N.phase===1||e.type==="defend"&&N.phase===1);if(s&&(N.timeLeft-=n,N.timeLeft<=0))return N.timeLeft=0,e.type==="defend"?ds():bo("Se acab\xF3 el tiempo.");let r=lt.filter(c=>!c.dying).length,o=e.obj,a="";switch(e.type){case"brawl":{N.spawnT-=n,r<3&&N.spawned<N.target+6&&N.count+r<N.target+1&&N.spawnT<=0&&(gc(i.x,i.z,3,6,e.armed,e.bats),N.spawnT=1.4),a=`${N.count}/${N.target}`,o=e.kickOnly?"Derriba enemigos con patadas":"Derrota a los matones a golpes",N.goal=null,N.count>=N.target&&ds();break}case"kill":{N.phase===0?(o="Ve a la zona marcada",Math.hypot(t.x-N.zone.x,t.z-N.zone.z)<4&&(N.phase=1,rr(N.zm),N.goal=null,kt("\xA1Elim\xEDnalos!"))):(N.spawnT-=n,r<4&&N.spawned<N.target&&N.spawnT<=0&&(gc(N.zone.x,N.zone.z,2,6,e.armed,e.bats),N.spawnT=1.2),o="Elimina a los delincuentes",a=`${N.count}/${N.target}`,N.count>=N.target&&ds());break}case"collect":{for(let u=N.items.length-1;u>=0;u--){let f=N.items[u];f.g.rotation.y+=n*2,f.g.position.y=Math.sin(N.t*4+u)*.03,Math.hypot(f.x-t.x,f.z-t.z)<(k.car?.5:.32)&&(He.remove(f.g),rr(f.mk),N.items.splice(u,1),N.count++,En("\xA1Recuperado!",f.x,.4,f.z,"#7CFC8A",15),ht(880,.1,.2),setTimeout(()=>ht(1175,.12,.2),80),Et(12))}let c=null,h=1e9;for(let u of N.items){let f=Math.hypot(u.x-t.x,u.z-t.z);f<h&&(h=f,c=u)}N.goal=c,a=`${N.count}/${N.target}`,o=e.item==="box"?"Recupera las cajas":"Recoge las bolsas de dinero",N.count>=N.target&&ds();break}case"deliver":{if(N.phase===0){if(o=e.needCar?"Consigue un veh\xEDculo y recoge a la clienta":"Recoge el paquete",Math.hypot(t.x-N.pick.x,t.z-N.pick.z)<(k.car?.8:.5)){N.phase=1,rr(N.pm),N.timeLeft=e.time;let c=e.dest==="pier"?{x:18.9,z:5}:Zt(-t.x*.8,-t.z*.8,0,5,{x:t.x,z:t.z,r:14});N.dst=c,N.goal=c,N.dm=Gi(c.x,c.z,"#ffd60a",.8),kt(e.needCar?"\xA1Do\xF1a Rosa a bordo!":"\xA1Tienes el paquete!"),ht(700,.12,.2),N.passenger===void 0&&e.needCar&&(N.passenger=!0)}}else{o=e.needCar?"Ll\xE9vala a su destino en veh\xEDculo":"Lleva el paquete al muelle",e.pursuers&&(N.spawnT-=n,r<4&&N.spawnT<=0&&(ii({kind:Math.random()<.6?"gunner":"thug",minD:5,maxD:10,alert:!0}),N.spawnT=5));let c=Math.hypot(t.x-N.dst.x,t.z-N.dst.z)<(k.car?1:.6);c&&e.needCar&&!k.car?o="Debes llegar en un veh\xEDculo":c&&ds()}break}case"race":{if(N.phase===0){o="S\xFAbete al auto que est\xE1 a tu lado";let c=null,h=1e9;for(let u of Ht){let f=u.g.position.distanceTo(i);f<h&&(h=f,c=u)}N.goal=c?{x:c.g.position.x,z:c.g.position.z}:null,k.car&&(N.phase=1,ny(),kt("\xA1YA!"),ht(880,.3,.25,"square"))}else{o=k.car?"Pasa por los puntos de control":"\xA1Vuelve a un veh\xEDculo!";let c=N.cps[N.ci];if(c&&k.car&&Math.hypot(t.x-c.x,t.z-c.z)<1.1){if(N.ci++,ht(990,.1,.2,"square"),Et(10),N.ci>=N.cps.length)return ds();Uf()}a=`${N.ci}/${N.cps.length}`}break}case"defend":{let c=Math.hypot(i.x-N.zone.x,i.z-N.zone.z);if(N.phase===0)o="Llega a la bodega",c<e.radius&&(N.phase=1,N.goal=null,kt("\xA1Ah\xED vienen!"));else if(o="Defiende la bodega",N.spawnT-=n,r<5&&N.spawnT<=0&&(gc(N.zone.x,N.zone.z,6,9,e.armed,e.bats),N.spawnT=2.2),c>e.radius){if(N.outT+=n,o=`\xA1Vuelve a la bodega! ${Math.ceil(6-N.outT)}`,N.goal=N.zone,N.outT>6)return bo("Abandonaste la bodega.")}else N.outT=Math.max(0,N.outT-n),N.goal=null;break}case"boss":{if(N.phase===0){if(o="Ve a la guarida",Math.hypot(t.x-N.zone.x,t.z-N.zone.z)<5){N.phase=1,rr(N.zm),N.goal=null;let c=N.zone;N.boss=ii({x:c.x,z:c.z,boss:e.boss,alert:!0});for(let h=0;h<e.escorts;h++){let u=Zt(c.x,c.z,.8,3);ii({x:u.x,z:u.z,kind:Math.random()<e.escortArmed?"gunner":"thug",bats:e.escortBats,alert:!0})}kt(e.boss.name.toUpperCase()),K("bossName").textContent=e.boss.name,K("bossBar").classList.remove("hidden"),ht(110,.6,.35,"sawtooth",.5)}}else{o=`Derrota a ${e.boss.name}`;let c=N.boss;c&&(K("bossFill").style.width=ft(c.hp/c.hpMax,0,1)*100+"%")}break}}K("mTitle").textContent=e.title,K("mObj").textContent=o,K("mProg").textContent=a;let l=K("mTime");if(s||N.timeLeft>0&&N.phase===1){let c=Math.ceil(N.timeLeft);l.textContent=`${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}`,l.classList.toggle("low",c<=10)}else l.textContent=""}function Oc(){if(Df(),N){for(let n of N.items)He.remove(n.g);N.def.night&&!N.prevNight&&ni&&K("bNight").click()}K("mpanel").classList.add("hidden"),K("bossBar").classList.add("hidden"),K("way").classList.add("hidden")}function ds(){if(!N||N.fin)return;N.fin=!0;let n=N.def,e=!Re.done.includes(n.id),t=hn(),i=e?n.xp:Math.round(n.xp*.3),s=e?n.money:Math.round(n.money*.3);Re.xp+=i,Re.money+=s,H.money+=s,e&&Re.done.push(n.id);let r=Math.round(N.t);(!Re.best[n.id]||r<Re.best[n.id])&&(Re.best[n.id]=r),hr(),Mo=hn(),[523,659,784,1047,1319].forEach((a,l)=>setTimeout(()=>ht(a,.2,.2,"square"),l*120)),Et(80),kt("\xA1MISI\xD3N CUMPLIDA!");let o=N;setTimeout(()=>{N===o&&H.active&&Nf(!0,n,{xp:i,money:s,lBefore:t,first:e,secs:r})},1300)}function bo(n){!N||N.fin||(N.fin=!0,ht(220,.6,.25,"triangle",.5),Nf(!1,N.def,{reason:n}))}function Nf(n,e,t){H.paused=!0,document.pointerLockElement&&document.exitPointerLock(),K("rTitle").textContent=n?e.final?"\xA1LA ISLA ES LIBRE!":"\xA1MISI\xD3N CUMPLIDA!":"MISI\xD3N FALLIDA",K("rTitle").className=n?"ok":"fail",K("rText").textContent=n?e.final?"Don Capo cay\xF3 y la banda se desarm\xF3. Terminaste la campa\xF1a. Puedes repetir misiones o seguir en modo libre.":`${e.title}: completada en ${Math.floor(t.secs/60)}:${String(t.secs%60).padStart(2,"0")}.`:t.reason,K("rRew").innerHTML=n?`<span style="color:#7cf0ff">+${t.xp} XP</span><span style="color:#7CFC8A">+$${t.money}</span>${t.first?"":'<span style="color:#9aa3b5">Repetici\xF3n: 30%</span>'}`:"";let i=hn(),s="";if(n&&i>t.lBefore){s=`\xA1SUBISTE A NIVEL ${i}! Vida m\xE1xima ${Zn()} \xB7 da\xF1o de golpes +${Math.round((Tf()-1)*100)}%`;let a=fn.filter(l=>l.lvl>t.lBefore&&l.lvl<=i);a.length&&(s+=` \xB7 Nueva arma: ${a.map(l=>l.name).join(", ")}`)}K("rLvl").innerHTML=s?`<div class="lvlup">${s}</div>`:"";let r=K("rActs");r.innerHTML="";let o=(a,l,c)=>{let h=document.createElement("button");h.className="big"+(l?" "+l:""),h.textContent=a,h.onclick=c,r.appendChild(h)};if(n){let a=Ro();a&&a!==e&&o("SIGUIENTE","",()=>Uo(a))}else o("REINTENTAR","",()=>Nc(e));o("CAMPA\xD1A","alt",()=>{Wr(),Do()}),o("MEN\xDA","dark",()=>Wr()),oi("ovRes")}var nf=null;function kt(n){let e=K("banner");e.textContent=n,e.style.opacity="1",clearTimeout(nf),nf=setTimeout(()=>e.style.opacity="0",1800)}function Lo(){for(let n of lt)He.remove(n.g),n.bar&&He.remove(n.bar.g);for(let n of ai)He.remove(n.g);for(let n of Wi)He.remove(n.g);lt=[],ai=[],Wi=[];for(let n of Ht)xt.remove(n.g);Ht=[],k.car&&(xt.remove(k.car.g),k.car=null);for(let n of xo)n.alive=!1,n.m.visible=!1;Rx();for(let n of Jt)xt.remove(n.g);Jt=[],ye.heat=0,ye.stars=0,ye.unseen=0,ye.bust=0,No()}function Of(){Object.assign(H,{hp:Zn(),armor:(Re.upg.vest||0)*50,kills:0,lastHurt:-9,cd:0,dead:!1,started:!0,spawnT:2,combo:0,comboT:0,runXp:0,paused:!1}),Ye.type=null,Ye.queued=null,k.pos.set(-.4,0,-.4),k.y=0,k.vy=0,k.facing=0,k.kx=k.kz=0,k.stun=0,k.model.g.visible=!0,k.model.g.rotation.z=0,dn||Cy(),Co(H.weapon)||(H.weapon=0),ur(H.weapon);for(let n=0;n<14;n++){let e=Zt((Math.random()-.5)*30,(Math.random()-.5)*30,0,2);Pf(e.x,e.z)}Mo=hn()}function zc(){Ei(),Oc(),N=null,Lo(),Of(),H.mode="free",zf(),kt("\xA1Limpia la ciudad!")}function zf(){Lc(),it&&it.state==="suspended"&&it.resume(),H.active=!0,H.paused=!1,document.body.classList.add("playing"),ln.enabled=!1,Ac.camera=yi,He.fog=uf,wc(13),mn&&K("touch").classList.remove("hidden"),setTimeout(zo,30),Et(15)}function Wr(){Ei(),Oc(),N=null,H.active=!1,H.paused=!1,H.started=!1,Lo(),k.model.g.visible=!1,document.body.classList.remove("playing"),ln.enabled=!0,Ac.camera=qn,He.fog=null,wc(33),cn.position.copy(Or).multiplyScalar(55),cn.target.position.set(0,0,0),K("touch").classList.add("hidden"),K("prompt").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock(),on&&(on.gain.value=0),hr(),Io(),setTimeout(zo,30)}function So(){!H.active||H.paused||H.dead||(H.paused=!0,document.pointerLockElement&&document.exitPointerLock(),K("pInfo").textContent=N?`Misi\xF3n: ${N.def.title}`:`Modo libre \xB7 ${H.kills} bajas`,on&&(on.gain.value=0),Fo(),oi("ovPause"))}function Fc(){Ei(),H.paused=!1}function ry(){H.paused=!0,K("rTitle").textContent="TE ATRAPARON",K("rTitle").className="fail",K("rText").textContent=`Modo libre terminado con ${H.kills} bajas.`,K("rRew").innerHTML=`<span style="color:#7cf0ff">+${H.runXp||0} XP</span><span style="color:#7CFC8A">$${H.money}</span>`,K("rLvl").innerHTML="";let n=K("rActs");n.innerHTML="";let e=(t,i,s)=>{let r=document.createElement("button");r.className="big"+(i?" "+i:""),r.textContent=t,r.onclick=s,n.appendChild(r)};e("REINTENTAR","",zc),e("MEN\xDA","dark",Wr),oi("ovRes")}function ay(n){if(H.dead)return;let e=Math.min(3+Math.floor(H.kills/4),10);if(H.spawnT-=n,lt.filter(t=>!t.dying).length<e&&H.spawnT<=0&&(ii({kind:Math.random()<.45?"gunner":"thug",bats:.45}),H.spawnT=1.6,H.kills>0&&H.kills%12===0&&!lt.some(t=>t.isBoss))){let t=ii({boss:{name:"Mat\xF3n jefe",hp:12,kind:"brute"},minD:8,maxD:16});t&&(kt("\xA1Apareci\xF3 un jefe!"),t.bar=Rf())}}function Ff(n){H.time+=n,Jx(n),Zx(n),mc-=n,mc<=0&&(Gx(),mc=.35),Hx(n),Xx(n),Px(n),my(n),_y(n),Mi&&(Mi.ring.rotation.z+=n*1.5),N?sy(n):ay(n),!H.dead&&H.time-H.lastHurt>5&&(H.hp=Math.min(Zn(),H.hp+3*n)),H.comboT>0&&(H.comboT-=n,H.comboT<=0&&(H.combo=0,K("combo").style.opacity="0"));for(let s of Wi)s.t+=n,s.g.rotation.y+=n*2.5,s.g.position.y=.15+Math.sin(s.t*4)*.03;for(let s of vs){s.ring.rotation.z+=n*1.5;let r=1+Math.sin(H.time*4)*.06;s.ring.scale.set(r,r,r)}let e=!1;if(!k.car&&!H.dead){for(let s of[si,Ht])for(let r of s)if(r.g.position.distanceTo(k.pos)<.75){e=!0;break}}let t=K("prompt");Xf()?(t.textContent=mn?"Toca AUTO para abrir la tienda":"Presiona E para abrir la tienda",t.classList.remove("hidden")):e?(t.textContent=mn?"Toca AUTO para subir":"Presiona E para subir",t.classList.remove("hidden")):k.car&&!H.dead?(t.textContent=mn?"AUTO para bajar":"E bajar \xB7 Espacio frenar",t.classList.remove("hidden")):t.classList.add("hidden"),oy();let i=St();cn.target.position.set(i.x,0,i.z),cn.position.set(i.x+Or.x*40,Or.y*40,i.z+Or.z*40)}function oy(){let n=Zn();K("hpFill").style.width=H.hp/n*100+"%",K("arRow").style.display=H.armor>0?"block":"none",K("arFill").style.width=H.armor+"%",K("xpFill").style.width=wf().f*100+"%",K("lvl").textContent="NV "+hn(),K("money").textContent="$"+Re.money,K("kills").textContent=N?"":H.kills+" bajas";let e=k.car;K("carRow").style.display=e?"block":"none",e&&(K("carFill").style.width=ft(e.hp??100,0,100)+"%");let t=N&&N.goal,i=K("way");if(t){let s=St(),r=t.x-s.x,o=t.z-s.z,a=Math.hypot(r,o),l=$r(),c=Math.atan2(r*-l.z+o*l.x,r*l.x+o*l.z);i.classList.remove("hidden"),K("wayArrow").style.transform=`rotate(${c}rad)`,K("wayDist").textContent=Math.round(a*8)+" m"}else i.classList.add("hidden");ly()}var Qe=K("mini").getContext("2d");function ly(){let e=s=>(s+20)*4;Qe.drawImage(mo,0,0),dn&&(Qe.fillStyle="#7CFC8A",Qe.font="bold 13px monospace",Qe.fillText("$",e(dn.x)-4,e(dn.z)+5));for(let s of Jt)Qe.fillStyle=Math.floor(ye.flash*6)%2?"#ff2d2d":"#2d6bff",Qe.fillRect(e(s.g.position.x)-2.5,e(s.g.position.z)-2.5,5,5);Qe.fillStyle="#e9ecef";for(let s of si)Qe.fillRect(e(s.g.position.x)-1.5,e(s.g.position.z)-1.5,3,3);Qe.fillStyle="#06b6d4";for(let s of Ht)Qe.fillRect(e(s.g.position.x)-2,e(s.g.position.z)-2,4,4);Qe.fillStyle="#7CFC8A";for(let s of Wi)Qe.fillRect(e(s.g.position.x)-1.5,e(s.g.position.z)-1.5,3,3);for(let s of vs)Qe.strokeStyle=s.color,Qe.lineWidth=2,Qe.beginPath(),Qe.arc(e(s.x),e(s.z),Math.max(3.5,s.r*4),0,7),Qe.stroke();for(let s of lt)s.dying||(Qe.fillStyle=s.cop?"#4dabf7":s.isBoss?"#ffd60a":"#ff2d55",Qe.beginPath(),Qe.arc(e(s.g.position.x),e(s.g.position.z),s.isBoss?4.5:3,0,7),Qe.fill());let t=St(),i=k.car?k.car.g.rotation.y:k.model.g.rotation.y;Qe.save(),Qe.translate(e(t.x),e(t.z)),Qe.rotate(-i),Qe.fillStyle="#06b6d4",Qe.strokeStyle="#000",Qe.lineWidth=1.5,Qe.beginPath(),Qe.moveTo(7,0),Qe.lineTo(-5,-5),Qe.lineTo(-3,0),Qe.lineTo(-5,5),Qe.closePath(),Qe.fill(),Qe.stroke(),Qe.restore()}var Bc=["ovCamp","ovBrief","ovRes","ovPause","ovCtrl","ovShop"];function oi(n){for(let e of Bc)K(e).classList.toggle("hidden",e!==n)}function Ei(){for(let n of Bc)K(n).classList.add("hidden")}function Io(){let n=wf();K("sLvl").textContent="NV "+hn(),K("sXp").style.width=n.f*100+"%",K("sXpTxt").textContent=hn()>=Hr.length?`${Re.xp} XP \xB7 nivel m\xE1ximo`:`${Re.xp} / ${n.b} XP`,K("sMoney").textContent="$"+Re.money;let e=Ro();K("bCamp").textContent=Re.done.length===0?"CAMPA\xD1A":e?"CONTINUAR CAMPA\xD1A":"CAMPA\xD1A \u2713"}function Do(){let n=K("campStats");n.innerHTML=`<span style="color:#f59e0b">Nivel ${hn()}</span><span style="color:#7cf0ff">${Re.xp} XP</span><span style="color:#7CFC8A">$${Re.money}</span><span>${Re.done.length}/${lr.length} misiones</span>`;let e=K("campList");e.innerHTML="";let t=Ro();Ic.forEach(i=>{let s=document.createElement("h3");s.textContent=i.name,e.appendChild(s);let r=document.createElement("div");r.className="mgrid",i.missions.forEach(o=>{let a=Re.done.includes(o.id),l=Ax(o),c=document.createElement("button");c.className="mcard "+(a?"done":o===t?"next":l?"":"lock"),c.innerHTML=`<span class="tag">${a?"\u2713 COMPLETADA":o===t?"\u25BA DISPONIBLE":"\u{1F512} BLOQUEADA"}</span><b>${o.title}</b><small>${o.xp} XP \xB7 $${o.money}${Re.best[o.id]?" \xB7 r\xE9cord "+Re.best[o.id]+" s":""}</small>`,l&&(c.onclick=()=>Uo(o)),r.appendChild(c)}),e.appendChild(r)}),oi("ovCamp")}var Bf=null;function Uo(n){Bf=n,K("bChap").textContent=Ic[n.chapter].name+` \xB7 Misi\xF3n ${lr.indexOf(n)+1}`,K("bTitle2").textContent=n.title,K("bStory").textContent=n.story,K("bObj").textContent=n.obj;let e=!Re.done.includes(n.id);K("bRew").innerHTML=`<span style="color:#7cf0ff">+${e?n.xp:Math.round(n.xp*.3)} XP</span><span style="color:#7CFC8A">+$${e?n.money:Math.round(n.money*.3)}</span>${n.time?`<span>\u23F1 ${n.time} s</span>`:""}${e?"":'<span style="color:#9aa3b5">Repetici\xF3n</span>'}`,oi("ovBrief")}var ye={heat:0,stars:0,unseen:0,bust:0,spawnT:0,carT:0,flash:0},Jt=[],cy=[0,2,3,4,6,8],hy=[0,0,1,2,3,4],kf=new Ct({color:"#ff2d2d"}),Hf=new Ct({color:"#2d6bff"});function Ti(n,e=0,t){let i=ye.stars;ye.heat=Math.min(5.99,Math.max(ye.heat+n,e)),ye.stars=Math.floor(ye.heat),ye.unseen=0,ye.stars>i&&(kt(t?`${t} \xB7 ${"\u2605".repeat(ye.stars)}`:"\u2605".repeat(ye.stars)),ht(880,.12,.15,"square"),setTimeout(()=>ht(660,.14,.15,"square"),130),Et(20),ye.spawnT=Math.min(ye.spawnT,1.5)),No()}function Eo(n){ye.heat=0,ye.stars=0,ye.unseen=0,ye.bust=0;for(let e of lt)e.cop&&(e.alert=!1,e.leaving=!0,e.wp=null,n&&(He.remove(e.g),e.bar&&He.remove(e.bar.g),e.dead=!0));if(n){lt=lt.filter(e=>!e.dead);for(let e of Jt)xt.remove(e.g);Jt=[]}No()}function No(){let n=K("stars");n&&(n.innerHTML="\u2605\u2605\u2605\u2605\u2605".split("").map((e,t)=>`<i class="${t<ye.stars?"on":""}">\u2605</i>`).join(""),n.classList.toggle("hidden",ye.stars===0))}function uy(){let n=St();for(let e of lt){if(!e.cop||e.dying||e.leaving)continue;let t=e.g.position;if(Math.hypot(t.x-n.x,t.z-n.z)<10&&xs(t.x,t.z,n.x,n.z))return!0}for(let e of Jt){let t=e.g.position;if(Math.hypot(t.x-n.x,t.z-n.z)<11&&xs(t.x,t.z,n.x,n.z,.25))return!0}return!1}function fy(){let n=ye.stars>=5&&Math.random()<.6,e=ii({kind:n?"swat":"cop",minD:8,maxD:18,alert:!0});return e&&(e.cop=!0),e}function dy(){let n=new ot;n.add(ge(De("#f8f9fa"),.54,.16,.29,0,.11,0)),n.add(ge(De("#111827"),.2,.161,.292,.17,.11,0)),n.add(ge(De("#111827"),.14,.161,.292,-.2,.11,0)),n.add(ge(To,.28,.13,.25,-.03,.255,0)),n.add(ge(kf,.08,.05,.11,-.03,.345,-.06,!1)),n.add(ge(Hf,.08,.05,.11,-.03,.345,.06,!1));for(let e of[-.08,.08])n.add(ge(Xr,.03,.05,.06,.275,.12,e,!1)),n.add(ge(qr,.03,.05,.06,-.275,.12,e,!1));for(let[e,t]of[[.15,.15],[-.15,.15],[.15,-.15],[-.15,-.15]])n.add(ge(De("#151515"),.1,.1,.03,e,.05,t,!1));return n}function py(){let n=St();for(let e=0;e<40;e++){let t=Math.floor(Math.random()*(Sn+1)),i=Math.floor(Math.random()*Bt),[s,r]=Math.random()<.5?[Rt(i),In(t)]:[In(t),Rt(i)],o=Math.hypot(s-n.x,r-n.z);if(o<11||o>22)continue;let a=dy();a.position.set(s,0,r),a.rotation.y=Math.atan2(-(n.z-r),n.x-s),xt.add(a);let l={g:a,police:!0,speed:0,hp:120,maxF:7.5,state:"chase",dropT:0};return Jt.push(l),l}return null}function my(n){let e=St();for(let t of Jt){let i=t.g,s=i.position,r=e.x-s.x,o=e.z-s.z,a=Math.hypot(r,o)||.001;if(ye.stars===0){t.speed*=1-2*n,a>9&&(xt.remove(i),t.gone=!0);continue}if(t.state==="stopped"){t.speed*=1-5*n;continue}let l=r/a,c=o/a;if(!xs(s.x,s.z,e.x,e.z,.2)){let x=bc(s);x&&(l=x.x,c=x.z)}let h=Math.atan2(-c,l),u=_s(h-i.rotation.y);i.rotation.y+=ft(u,-3*n,3*n);let f=(3.6+ye.stars*.45)*(Math.abs(u)>1.2?.35:1);t.speed+=(f-t.speed)*Math.min(1,n*2);let m=Math.cos(i.rotation.y),g=-Math.sin(i.rotation.y);if(s.x+=m*t.speed*n,s.z+=g*t.speed*n,Si(s,.2)&&(t.speed*=.5),k.car&&a<.48){let x=.48-a;s.x-=r/a*x,s.z-=o/a*x,t.speed>1.5&&(Vr(k.car,6),Dn(220,.2,.35),ar=.15),t.speed*=.3}if(!k.car&&a<2.4&&t.state==="chase"){t.state="stopped",t.speed=0;let x=ye.stars>=4?3:2;for(let p=0;p<x;p++){let d=Zt(s.x,s.z,.3,.8),E=ii({x:d.x,z:d.z,kind:ye.stars>=5?"swat":"cop",alert:!0});E&&(E.cop=!0)}ht(500,.1,.15)}for(let x of lt){if(x.cop||x.dying)continue;let p=x.g.position;Math.hypot(p.x-s.x,p.z-s.z)<.3&&t.speed>2.5&&Zr(x,99,m*2,g*2,{car:!0,launch:1})}}for(let t of Jt)t.state==="stopped"&&!t.gone&&!Ht.includes(t)&&ye.stars>0&&(t.dropT+=n,t.dropT>1.5&&(Ht.push(t),t.gone=!0));Jt=Jt.filter(t=>!t.gone)}var Bi=null,zr=null;function gy(){if(!(Bi||!it))try{Bi=it.createOscillator(),Bi.type="triangle",Bi.frequency.value=850;let n=it.createOscillator();n.frequency.value=1.6;let e=it.createGain();e.gain.value=220,n.connect(e).connect(Bi.frequency),zr=it.createGain(),zr.gain.value=0,Bi.connect(zr).connect(it.destination),Bi.start(),n.start()}catch{Bi=null}}function _y(n){ye.flash+=n;let e=Math.floor(ye.flash*6)%2===0;if(kf.color.set(e?"#ff2d2d":"#3a0000").multiplyScalar(e?2:1),Hf.color.set(e?"#00113a":"#2d6bff").multiplyScalar(e?1:2),gy(),zr){let s=99,r=St();for(let a of Jt)s=Math.min(s,Math.hypot(a.g.position.x-r.x,a.g.position.z-r.z));let o=xi&&ye.stars>0&&!H.paused?ft(1-s/14,0,1)*.045:0;zr.gain.setTargetAtTime(o,it.currentTime,.1)}if(ye.stars===0){let s=St();for(let r of lt)r.cop&&!r.dying&&Math.hypot(r.g.position.x-s.x,r.g.position.z-s.z)>8&&(He.remove(r.g),r.bar&&He.remove(r.bar.g),r.dead=!0);lt=lt.filter(r=>!r.dead);return}if(H.dead)return;ye.bust=Math.max(0,ye.bust-n*.6),uy()?ye.unseen=0:ye.unseen+=n,K("stars").classList.toggle("blink",ye.unseen>2.5),ye.unseen>6+ye.stars*2&&(ye.unseen=0,ye.heat=Math.max(0,ye.stars-1),ye.stars=Math.floor(ye.heat),ye.stars===0?(kt("Los perdiste"),Eo(!1)):kt("\u2605".repeat(ye.stars)),No()),ye.spawnT-=n,ye.carT-=n,lt.filter(s=>s.cop&&!s.dying&&!s.leaving).length<cy[ye.stars]&&ye.spawnT<=0&&(fy(),ye.spawnT=2.6-ye.stars*.3),Jt.filter(s=>s.state==="chase").length<hy[ye.stars]&&ye.carT<=0&&(py(),ye.carT=5-ye.stars*.5)}function xy(n,e,t){n.shoots=ye.stars>=2,ye.stars<=1&&!k.car&&e<.42&&!H.dead&&(ye.bust+=t*1.6,Math.random()<t*3&&En("\xA1ALTO!",n.g.position.x,.45,n.g.position.z,"#8ecae6",15),ye.bust>1.3&&yy())}function yy(){if(H.dead)return;let n=Math.min(Re.money,150+ye.stars*150);if(Re.money-=n,hr(),ht(300,.5,.25,"triangle",.6),Et(60),N)return Eo(!0),bo("Te arrestaron.");kt(`ARRESTADO \xB7 Multa $${n}`),Eo(!0),k.car&&(Ht.push(k.car),k.car=null),k.pos.set(-.4,0,-.4),k.model.g.visible=!0,H.hp=Zn()}function vy(){Ti(.6,1,"Agrediste a un civil")}function sf(n){n.police?Ti(1,2,"Robaste un patrullero"):Math.random()<.5&&Ti(.5,1,"Te vieron robar el auto")}function My(){Ti(.4,1,"Atropellaste a alguien")}function by(n,e){for(let t of ai){let i=t.g.position;if(Math.hypot(i.x-n,i.z-e)<6){Ti(.07,0),ye.heat>=.99&&ye.stars===0&&Ti(0,1,"Disparos en la calle");return}}}function Sy(){Ti(.12,2,"Atacaste a la polic\xEDa")}function Ey(){Ti(.8,2)}var Vf=[{sec:"Armas",items:[{id:"w1",name:"Pistola",desc:"Gratis al llegar a nivel 2.",price:600,weapon:1},{id:"w2",name:"Metralleta",desc:"Disparo autom\xE1tico. Gratis en nivel 4.",price:1800,weapon:2},{id:"w3",name:"Escopeta",desc:"Seis perdigones a corta distancia. Gratis en nivel 6.",price:3200,weapon:3},{id:"w4",name:"Rifle",desc:"Da\xF1o enorme y gran alcance. Gratis en nivel 8.",price:5e3,weapon:4}]},{sec:"Mejoras permanentes",items:[{id:"gloves",name:"Guantes de box",desc:"+15% de da\xF1o en pu\xF1etes por nivel.",price:[400,1e3,2200],upg:"gloves"},{id:"boots",name:"Botas de acero",desc:"+30% de da\xF1o y empuje en patadas por nivel.",price:[700,1800],upg:"boots"},{id:"hp",name:"Entrenamiento",desc:"+25 de vida m\xE1xima por nivel.",price:[800,2e3,3500],upg:"hp"},{id:"vest",name:"Chaleco de inicio",desc:"Empiezas cada partida con 50 de chaleco por nivel.",price:[900,2400],upg:"vest"}]},{sec:"Al instante",ingame:!0,items:[{id:"heal",name:"Botiqu\xEDn",desc:"Recupera toda tu vida.",price:120},{id:"armor",name:"Chaleco antibalas",desc:"Chaleco al 100.",price:220},{id:"lawyer",name:"Abogado",desc:"Borra tu nivel de b\xFAsqueda. Cuesta $250 por estrella.",price:0}]},{sec:"Veh\xEDculos",ingame:!0,items:[{id:"sport",name:"Deportivo",desc:"El m\xE1s r\xE1pido de la isla. Te lo dejan al lado.",price:500},{id:"armoredMoto",name:"Mototaxi blindado",desc:"Aguanta el triple de da\xF1o.",price:700}]}],kc=!1,dn=null,Mi=null;function Ty(n){let e=H.active&&kc;if(n.weapon!==void 0){let t=fn[n.weapon];return hn()>=t.lvl||Re.owned[n.id]?{label:"Ya la tienes",ok:!1,done:!0}:{label:"$"+n.price,ok:Re.money>=n.price,price:n.price}}if(n.upg){let t=Re.upg[n.upg]||0,i=n.price.length;if(t>=i)return{label:`Nivel ${t}/${i} \xB7 M\xE1ximo`,ok:!1,done:!0};let s=n.price[t];return{label:`Nivel ${t}/${i} \xB7 $${s}`,ok:Re.money>=s,price:s}}if(!e)return{label:"Solo en la tienda de la ciudad",ok:!1};if(n.id==="lawyer"){let t=250*ye.stars;return ye.stars?{label:"$"+t,ok:Re.money>=t,price:t}:{label:"No te buscan",ok:!1}}return n.id==="heal"&&H.hp>=Zn()?{label:"Vida llena",ok:!1}:{label:"$"+n.price,ok:Re.money>=n.price,price:n.price}}function Oo(n){kc=!!n,H.active&&(H.paused=!0,document.pointerLockElement&&document.exitPointerLock(),on&&(on.gain.value=0)),Gf(),oi("ovShop")}function wy(){H.active?(Ei(),H.paused=!1):(Ei(),Io())}function Gf(){K("shopMoney").textContent="$"+Re.money,K("shopNote").textContent=kc?"Est\xE1s en la tienda de la ciudad: todo disponible.":"Desde aqu\xED compras armas y mejoras. Botiquines, abogado y veh\xEDculos se compran en la tienda de la ciudad ($ verde en el mapa).";let n=K("shopList");n.innerHTML="";for(let e of Vf){let t=document.createElement("h3");t.textContent=e.sec,n.appendChild(t);let i=document.createElement("div");i.className="mgrid";for(let s of e.items){let r=Ty(s),o=document.createElement("button");o.className="mcard"+(r.done?" done":r.ok?" next":" lock"),o.innerHTML=`<b>${s.name}</b><small>${s.desc}</small><span class="tag">${r.label}</span>`,r.ok&&(o.onclick=()=>Wf(s,r.price)),i.appendChild(o)}n.appendChild(i)}}function Wf(n,e){if(!(Re.money<e)){if(Re.money-=e,n.weapon!==void 0)Re.owned[n.id]=!0,H.active&&ur(n.weapon);else if(n.upg)Re.upg[n.upg]=(Re.upg[n.upg]||0)+1,n.upg==="hp"&&H.active&&(H.hp=Zn());else if(n.id==="heal")H.hp=Zn();else if(n.id==="armor")H.armor=100;else if(n.id==="lawyer")Eo(!0);else if(n.id==="sport"||n.id==="armoredMoto"){let t=Zt(k.pos.x,k.pos.z,.6,1.4),i=n.id==="sport"?Ay($t(["#ef233c","#ffd60a","#3a86ff","#ff006e"])):Rc("#1b1b1b");i.position.set(t.x,0,t.z),xt.add(i),Ht.push(n.id==="sport"?{g:i,hp:150,maxF:9.5,acc:8}:{g:i,moto:!0,hp:300,maxF:5.2})}hr(),[660,880,1320].forEach((t,i)=>setTimeout(()=>ht(t,.08,.18,"square"),i*70)),Et(15),Gf()}}function Ay(n){let e=new ot;e.add(ge(De(n),.6,.12,.3,0,.09,0)),e.add(ge(To,.24,.1,.26,-.06,.2,0)),e.add(ge(De("#111111"),.06,.03,.3,-.3,.2,0)),e.add(ge(De("#111111"),.03,.07,.03,-.29,.16,.1)),e.add(ge(De("#111111"),.03,.07,.03,-.29,.16,-.1));for(let t of[-.09,.09])e.add(ge(Xr,.03,.04,.07,.305,.1,t,!1)),e.add(ge(qr,.03,.04,.08,-.305,.1,t,!1));for(let[t,i]of[[.18,.155],[-.18,.155],[.18,-.155],[-.18,-.155]])e.add(ge(De("#151515"),.1,.1,.03,t,.05,i,!1));return e}function Cy(){Mi&&(He.remove(Mi.g),Mi=null),dn=Zt(2.5,-2.5,.5,3.5);let n=new ot;n.add(ge(De("#2b9348"),.42,.42,.42,0,.21,0)),n.add(ge(De("#ffd60a"),.5,.06,.5,0,.45,0)),n.add(ge(Cc,.04,.2,.3,.23,.25,0,!1));let e=new vt(new Rr(.42,.52,28),new Ct({color:new _e("#7CFC8A").multiplyScalar(1.4),transparent:!0,opacity:.8,side:Cn,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.03,n.add(e);let t=new vt(or,new Ct({color:new _e("#7CFC8A").multiplyScalar(1.2),transparent:!0,opacity:.25,depthWrite:!1}));t.scale.set(.12,5,.12),t.position.y=2.9,n.add(t),n.position.set(dn.x,0,dn.z),He.add(n),Mn(dn.x,dn.z,.44,.44,.5),ti=null,Mi={g:n,ring:e}}var Xf=()=>dn&&!k.car&&!H.dead&&Math.hypot(k.pos.x-dn.x,k.pos.z-dn.z)<.75;function Hc(){H.paused||(Xf()?Oo(!0):If())}var ki=new O,rf=new O,ar=0;function qf(n){let e=St(),t=!!k.car,i=$r(),s=-i.z,r=i.x,o=t?0:.11;t&&Pn<.26&&(Pn+=(.26-Pn)*Math.min(1,n*4)),ki.set(e.x+s*o,t?.34:k.y+.27,e.z+r*o);let a=t?k.car.moto?2:2.3:1.25,l=Math.sin(Un)*Math.cos(Pn),c=Math.sin(Pn),h=Math.cos(Un)*Math.cos(Pn);for(let u=.25;u<=1.0001;u+=.125){let f=ki.x+l*a*u,m=ki.y+c*a*u,g=ki.z+h*a*u;if(Ao(f,m,g)){a*=Math.max(.2,u-.15);break}}if(rf.set(ki.x+l*a,ki.y+c*a,ki.z+h*a),yi.position.lerp(rf,1-Math.exp(-n*14)),ar>0){ar-=n;let u=.035*Math.min(1,ar*7);yi.position.x+=(Math.random()-.5)*u,yi.position.y+=(Math.random()-.5)*u}yi.lookAt(ki)}var _c=0,ni=0,af=-1,Ry=new _e("#fff0d6"),Py=new _e("#9fb4ff"),Ly=new _e("#e3f3ff"),Iy=new _e("#4b5f9a"),Dy=new _e("#2f9fd6"),Uy=new _e("#0a2740"),Ny=new _e("#ffffff"),Oy=new _e("#3a4466");function zy(n){Math.abs(n-af)<1e-4||(af=n,cn.intensity=2.4+(.28-2.4)*n,cn.color.lerpColors(Ry,Py,n),xc.intensity=1.1+(.32-1.1)*n,xc.color.lerpColors(Ly,Iy,n),He.background.lerpColors(Tc,mx,n),uf.color.copy(He.background),mf.color.lerpColors(Dy,Uy,n),pf.color.lerpColors(Ny,Oy,n),ff.emissiveIntensity=.9*n,df.emissiveIntensity=2.2*n,Xr.emissiveIntensity=3*n,qr.emissiveIntensity=2*n,gf.emissiveIntensity=.2+1.2*n,Cc.color.setScalar(1+.9*n),yc.forEach(e=>e.color.copy(e.userData.base).multiplyScalar(.9+1.3*n)),ir.enabled=n>.01,ir.strength=.55*n,ir.threshold=.82,ir.radius=.35)}function zo(){let n=Br.clientWidth,e=Br.clientHeight;if(!n||!e)return;cr.setSize(n,e,!1),ys.setSize(n,e);let t=n/e,i=Math.max(19,29/t);qn.left=-i*t,qn.right=i*t,qn.top=i,qn.bottom=-i,qn.updateProjectionMatrix(),yi.aspect=t,yi.fov=t<1?75:62,yi.updateProjectionMatrix()}new ResizeObserver(zo).observe(Br);zo();var Sc=1+Math.floor(Math.random()*9999);_f(Sc);Io();mn&&(K("help").textContent="Joystick para moverte \xB7 arrastra a la derecha para mirar \xB7 GOLPE, PATADA, SALTO, ARMA y AUTO");var qi=(n,e)=>K(n).classList.toggle("on",e);mn&&document.body.classList.add("touchdev");function Fo(){qi("pNight",!!ni),K("pNight").textContent=ni?"D\xEDa":"Noche",qi("pSound",xi),qi("pVib",Nr)}K("pNight").onclick=()=>{K("bNight").click(),Fo()};K("pSound").onclick=()=>{K("bSound").click(),Fo()};K("pVib").onclick=()=>{K("bVib").click(),Fo()};K("bNight").onclick=()=>{ni=ni?0:1,qi("bNight",!!ni),K("bNight").textContent=ni?"D\xEDa":"Noche",Et()};K("bRot").onclick=()=>{ln.autoRotate=!ln.autoRotate,qi("bRot",ln.autoRotate),Et()};K("bTitle").onclick=()=>{let n=K("title"),e=n.style.opacity!=="0";n.style.opacity=e?"0":"1",qi("bTitle",!e),Et()};K("bNew").onclick=()=>{Lo(),H.started=!1,Sc=1+Math.floor(Math.random()*9999),_f(Sc),ti=null,Mi&&(He.remove(Mi.g),Mi=null),dn=null,Et()};K("bVib").onclick=()=>{Nr=!Nr,qi("bVib",Nr),Et()};K("bSound").onclick=()=>{xi=!xi,qi("bSound",xi),!xi&&on&&(on.gain.value=0),Et()};K("bPause").onclick=()=>{H.paused?Fc():So()};K("bCamp").onclick=()=>{Lc();let n=Ro();Re.done.length>0&&n?Uo(n):Do()};K("bFree").onclick=zc;K("bShop").onclick=()=>Oo(!1);K("bShopClose").onclick=wy;K("bPShop").onclick=()=>Oo(!1);K("bCampClose").onclick=Ei;K("bReset").onclick=()=>{let n=K("bReset");if(n.dataset.c!=="1"){n.dataset.c="1",n.textContent="\xBFSeguro? Toca de nuevo",setTimeout(()=>{n.dataset.c="",n.textContent="Borrar progreso"},3e3);return}Re={xp:0,money:0,done:[],best:{}},hr(),n.dataset.c="",n.textContent="Borrar progreso",Io(),Do()};K("bGo").onclick=()=>{Lc(),Nc(Bf)};K("bBack").onclick=()=>{H.active&&Wr(),Do()};K("bResume").onclick=Fc;K("bQuit").onclick=Wr;K("bCtrl").onclick=()=>oi("ovCtrl");K("bCtrlClose").onclick=()=>{H.active&&H.paused?oi("ovPause"):Ei()};addEventListener("keydown",n=>{if(H.active&&!H.paused){if(It[n.code]=!0,n.repeat)return;n.code==="KeyE"?Hc():n.code==="KeyF"?Po():n.code==="KeyG"?Yr():/^Digit[1-5]$/.test(n.code)?ur(+n.code.slice(-1)-1):n.code==="KeyQ"?Lf():n.code==="KeyP"||n.code==="Escape"?So():n.code==="KeyH"?(So(),oi("ovCtrl")):n.code==="KeyN"?K("bNight").click():(n.code==="KeyJ"||n.code==="KeyK")&&(Ln=!0),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(n.code)&&n.preventDefault()}else if(H.active&&H.paused)(n.code==="KeyP"||n.code==="Escape")&&!K("ovPause").classList.contains("hidden")&&Fc();else{if(!Bc.every(e=>K(e).classList.contains("hidden"))){n.code==="Escape"&&Ei();return}n.key==="n"||n.key==="N"?K("bNight").click():n.key==="r"||n.key==="R"?K("bNew").click():n.code==="Enter"?K("bCamp").click():n.code==="KeyH"?oi("ovCtrl"):n.code==="Space"&&(n.preventDefault(),K("bRot").click())}});addEventListener("keyup",n=>{It[n.code]=!1,(n.code==="KeyJ"||n.code==="KeyK")&&(Ln=!1)});addEventListener("blur",()=>{for(let n in It)It[n]=!1;Ln=!1});document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&H.active&&!H.paused&&!H.dead&&!mn&&of&&So(),of=!!document.pointerLockElement});var of=!1,Xn=null;bi.addEventListener("contextmenu",n=>n.preventDefault());bi.addEventListener("mousedown",n=>{if(!(!H.active||H.paused||mn)){if(n.button===2){Yr();return}if(document.pointerLockElement===bi){Ln=!0,Gr=!0;return}Xn={x:n.clientX,y:n.clientY,moved:!1}}});addEventListener("mousemove",n=>{if(!(!H.active||H.paused||mn)){if(document.pointerLockElement===bi){Un-=n.movementX*.0028,Pn=ft(Pn+n.movementY*.0022,.02,1.15),yo=H.time;return}if(Xn){let e=n.clientX-Xn.x,t=n.clientY-Xn.y;Math.abs(e)+Math.abs(t)>5&&(Xn.moved=!0),Xn.moved&&(Un-=e*.005,Pn=ft(Pn+t*.004,.02,1.15),yo=H.time,Xn.x=n.clientX,Xn.y=n.clientY)}}});addEventListener("mouseup",n=>{if(H.active&&n.button!==2){if(Ln=!1,Xn&&!Xn.moved&&!H.paused&&(Gr=!0,bi.requestPointerLock))try{let e=bi.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}Xn=null}});if(mn){let o=function(c){let h=c.clientX-i,u=c.clientY-s,f=Math.hypot(h,u),m=48;f>m&&(h*=m/f,u*=m/f),sr.x=h/m,sr.y=u/m,e.style.transform=`translate(${h}px,${u}px)`},n=K("joy"),e=K("knob"),t=null,i=0,s=0,r=null;n.addEventListener("touchstart",c=>{let h=c.changedTouches[0];t=h.identifier;let u=n.getBoundingClientRect();i=u.left+u.width/2,s=u.top+u.height/2,o(h),c.preventDefault()},{passive:!1}),addEventListener("touchmove",c=>{for(let h of c.changedTouches)h.identifier===t?o(h):r&&h.identifier===r.id&&(Un-=(h.clientX-r.x)*.007,Pn=ft(Pn+(h.clientY-r.y)*.005,.02,1.15),r.x=h.clientX,r.y=h.clientY,yo=H.time);H.active&&!H.paused&&c.preventDefault()},{passive:!1});let a=c=>{for(let h of c.changedTouches)h.identifier===t&&(t=null,sr.x=sr.y=0,e.style.transform=""),r&&h.identifier===r.id&&(r=null)};addEventListener("touchend",a),addEventListener("touchcancel",a),bi.addEventListener("touchstart",c=>{if(!H.active||H.paused)return;let h=c.changedTouches[0];r||(r={id:h.identifier,x:h.clientX,y:h.clientY}),c.preventDefault()},{passive:!1});let l=(c,h,u)=>{let f=K(c);f.addEventListener("touchstart",m=>{f.classList.add("act"),h(),m.preventDefault(),m.stopPropagation()},{passive:!1}),f.addEventListener("touchend",m=>{f.classList.remove("act"),u&&u(),m.preventDefault()},{passive:!1})};l("tAtk",()=>{Ln=!0,Gr=!0},()=>{Ln=!1}),l("tKick",()=>Yr()),l("tJump",()=>{It.Space=!0},()=>{It.Space=!1}),l("tCar",()=>Hc()),l("tGun",()=>Lf())}setTimeout(()=>{K("hint").style.opacity="0"},6e3);var Ec=new Js,lf=!0;function Yf(n,e){_c+=(ni-_c)*(1-Math.exp(-n*2.5)),zy(_c),bx(n);let t=e*.16,i=17;Yn.position.set(Math.cos(t)*i,8.5+Math.sin(e*.7)*.4,Math.sin(t)*i),Yn.rotation.y=Math.atan2(-Math.cos(t),-Math.sin(t)),Yn.rotation.x=.35,vf.rotation.x+=n*40;for(let s of Mf)s.position.x+=s.userData.sp*n,s.position.x>42&&(s.position.x=-42);for(let s of bf){let r=s.userData;r.a+=r.sp*n,s.position.set(Math.cos(r.a)*r.r,-.75+Math.sin(e*1.5+r.r)*.03,Math.sin(r.a)*r.r);let o=-Math.sin(r.a)*Math.sign(r.sp),a=Math.cos(r.a)*Math.sign(r.sp);s.rotation.y=Math.atan2(-a,o)}if(gs){gs.wheel.rotation.z+=n*.25;for(let s of gs.cabins)s.rotation.z=-gs.wheel.rotation.z}if(ms)for(let s of ho){let r=s.userData;if(r.rr!==void 0){r.a+=r.sp*n,s.position.set(ms.x+Math.cos(r.a)*r.rr,-.2,ms.z+Math.sin(r.a)*r.rr),s.rotation.y=-r.a;continue}let o=(e*.8+r.p)%1,a=o*.55;s.position.set(ms.x+Math.cos(r.a)*a,.6+2.2*o*(1-o),ms.z+Math.sin(r.a)*a)}Ex(n),fo>0&&(fo-=n,fo<=0&&(Dc.position.y=-5))}function Zf(){requestAnimationFrame(Zf);let n=Math.min(Ec.getDelta(),.05),e=Ec.elapsedTime;if(H.active&&H.paused){ys.render();return}if(Mc>0&&(Mc-=n,n*=.08),Yf(n,e),H.active?(Ff(n),qf(n),Af(n)):ln.update(),ys.render(),lf){lf=!1,window.__ok=!0;let t=K("loading");t.style.opacity="0",setTimeout(()=>t.remove(),700)}}Zf();new URLSearchParams(location.search).has("debug")&&(window.__dbg={game:H,player:k,save:Re,melee:Ye,enemies:()=>lt,mission:()=>N,cars:()=>si,parked:()=>Ht,startMission:Nc,startFree:zc,openBrief:Uo,ALL_M:lr,wanted:ye,civs:()=>ai,policeCars:()=>Jt,addHeat:Ti,openShop:Oo,buy:Wf,SHOP:Vf,interact:Hc,shopSpot:()=>dn,weaponOk:Co,maxHp:Zn,setWeapon:ur,pressPunch:Po,pressKick:Yr,enterExitCar:If,keys:It,spawnEnemy:ii,setYaw:n=>Un=n,setFire:n=>Ln=n,step:(n,e=1/30)=>{for(let t=0;t<n&&!H.paused;t++)Yf(e,Ec.elapsedTime),Ff(e),qf(e),Af(e)}});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
