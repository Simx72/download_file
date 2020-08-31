// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}
mimes = [{"ext":".aac","def":"Archivo de audio AAC","mime":"audio/aac"},{"ext":".abw","def":"Documento AbiWord","mime":"application/x-abiword"},{"ext":".arc","def":"Documento de Archivo (múltiples archivos incrustados)","mime":"application/octet-stream"},{"ext":".avi","def":"AVI: Audio Video Intercalado","mime":"video/x-msvideo"},{"ext":".azw","def":"Formato  eBook Amazon Kindle ","mime":"application/vnd.amazon.ebook"},{"ext":".bin","def":"Cualquier tipo de datos binarios","mime":"application/octet-stream"},{"ext":".bz","def":"Archivo BZip","mime":"application/x-bzip"},{"ext":".bz2","def":"Archivo BZip2","mime":"application/x-bzip2"},{"ext":".csh","def":"Script C-Shell","mime":"application/x-csh"},{"ext":".css","def":"Hojas de estilo (CSS)","mime":"text/css"},{"ext":".csv","def":"Valores separados por coma (CSV)","mime":"text/csv"},{"ext":".doc","def":"Microsoft Word","mime":"application/msword"},{"ext":".epub","def":"Publicación Electrónica (EPUB)","mime":"application/epub+zip"},{"ext":".gif","def":"Graphics Interchange Format (GIF)","mime":"image/gif"},{"ext":".htm\n.html","def":"Hipertexto (HTML)","mime":"text/html"},{"ext":".ico","def":"Formato Icon","mime":"image/x-icon"},{"ext":".ics","def":"Formato iCalendar","mime":"text/calendar"},{"ext":".jar","def":"Archivo Java (JAR)","mime":"application/java-archive"},{"ext":".jpeg\n.jpg","def":"Imágenes JPEG","mime":"image/jpeg"},{"ext":".js","def":"JavaScript (ECMAScript)","mime":"application/javascript"},{"ext":".json","def":"Formato JSON","mime":"application/json"},{"ext":".mid\n.midi","def":"Interfaz Digital de Instrumentos Musicales (MIDI)","mime":"audio/midi"},{"ext":".mpeg","def":"Video MPEG","mime":"video/mpeg"},{"ext":".mpkg","def":"Paquete de instalación de Apple","mime":"application/vnd.apple.installer+xml"},{"ext":".odp","def":"Documento de presentación de OpenDocument","mime":"application/vnd.oasis.opendocument.presentation"},{"ext":".ods","def":"Hoja de Cálculo OpenDocument","mime":"application/vnd.oasis.opendocument.spreadsheet"},{"ext":".odt","def":"Documento de texto OpenDocument","mime":"application/vnd.oasis.opendocument.text"},{"ext":".oga","def":"Audio OGG","mime":"audio/ogg"},{"ext":".ogv","def":"Video OGG","mime":"video/ogg"},{"ext":".ogx","def":"OGG","mime":"application/ogg"},{"ext":".pdf","def":"Adobe Portable Document Format (PDF)","mime":"application/pdf"},{"ext":".ppt","def":"Microsoft PowerPoint","mime":"application/vnd.ms-powerpoint"},{"ext":".rar","def":"Archivo RAR","mime":"application/x-rar-compressed"},{"ext":".rtf","def":"Formato de Texto Enriquecido (RTF)","mime":"application/rtf"},{"ext":".sh","def":"Script Bourne shell","mime":"application/x-sh"},{"ext":".svg","def":"Gráficos Vectoriales (SVG)","mime":"image/svg+xml"},{"ext":".swf","def":"Small web format (SWF) o Documento Adobe Flash","mime":"application/x-shockwave-flash"},{"ext":".tar","def":"Aerchivo Tape (TAR)","mime":"application/x-tar"},{"ext":".tif\n.tiff","def":"Formato de archivo de imagen etiquetado (TIFF)","mime":"image/tiff"},{"ext":".ttf","def":"Fuente TrueType","mime":"font/ttf"},{"ext":".vsd","def":"Microsft Visio","mime":"application/vnd.visio"},{"ext":".wav","def":"Formato de audio de forma de onda (WAV)","mime":"audio/x-wav"},{"ext":".weba","def":"Audio WEBM","mime":"audio/webm"},{"ext":".webm","def":"Video WEBM","mime":"video/webm"},{"ext":".webp","def":"Imágenes WEBP","mime":"image/webp"},{"ext":".woff","def":"Formato de fuente abierta web (WOFF)","mime":"font/woff"},{"ext":".woff2","def":"Formato de fuente abierta web (WOFF)","mime":"font/woff2"},{"ext":".xhtml","def":"XHTML","mime":"application/xhtml+xml"},{"ext":".xls","def":"Microsoft Excel","mime":"application/vnd.ms-excel"},{"ext":".xml","def":"XML","mime":"application/xml"},{"ext":".xul","def":"XUL","mime":"application/vnd.mozilla.xul+xml"},{"ext":".zip","def":"Archivo ZIP","mime":"application/zip"},{"ext":".3gp","def":"Contenedor de audio/video 3GPP","mime":"video/3gpp\naudio/3gpp if it doesn't contain video"},{"ext":".3g2","def":"Contenedor de audio/video 3GPP2","mime":"video/3gpp2\naudio/3gpp2 if it doesn't contain video"},{"ext":".7z","def":"Archivo 7-zip","mime":"application/x-7z-compressed"}]

mimes.toggleDot = function () {
  	if ( this[0].ext.charAt(0) == '.' ) {
  		for (var i = 0; i<this.length; i++) {
  			this[i].ext = this[i].ext.substr(1); 
  		}
  	} else {
  		for (var i = 0; i<this.length; i++) {
  			this[i] = '.'+this[i]; 
  		}
  	}
};

mimes.getByExt = function (ext) {
	this.find( el=> el.ext == ext );
};

mimes.getByDef = function (def) {
	this.find( el=> (new RegExp(def, 'g')).test(el.def) );
};

mimes.getByMime = function (mime) {
	this.find( el=> el.mime == mime );
};

mimes.toggleDot();
console.dir (mimes);




function download (name, data, dataType = false) {
// Get MIME, for example "text/plain", find more in 
// https://developer.mozilla.org/en/docs/Web/HTTP/Basics_of_HTTP/MIME_types 


let rx = /(\.)\w*$/
var ext = ''

if ( rx.exec( name ) !== null ) {
	ext += ( rx.exec( name )[0] ).substr(1)
} else {
	ext += 'txt'
}

var mime = ''

if ( dataType ){
	mime = dataType
} else {

	if ( (typeof mimes.getByExt(ext)) != 'undefined' ) {
		mime += mimes.getByExt(ext).mime
	} else {

		let arreglo = new Array()
		for ( let i = 0; i < navigator.mimeTypes.length; i++ ) arreglo[i] = navigator.mimeTypes[i]
			found = arreglo.find(el=>el.suffixes == ext)

		if ( typeof found != 'undefined' ) {
			mime =found.type
		} else if (ext == 'txt') {
			mime = 'text/plain'
		} else {
			throw new Error( `not MIME type found for extension '${ext}' in file '${name}'`)
		}
	}

}

// make download

let link = document.createElement('a');
link.download = name;

let blob = new Blob([data], {type: mime});

let reader = new FileReader();
reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

reader.onload = function() {
  link.href = reader.result; // data url
  link.click();
};

document.body.appendChild(link)


}
