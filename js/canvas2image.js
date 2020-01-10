/**
 * covert canvas to image
 * and save the image file
 */
var Canvas2Image = function () {
    var $support = function () {
        let canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
        return {
            canvas: !!ctx,
            imageData: !!ctx.getImageData,
            dataURL: !!canvas.toDataURL,
            btoa: !!window.btoa
        };
    }();

    let downloadMime = 'image/octet-stream';

    function scaleCanvas(canvas, width, height) {
        let w = canvas.width, h = canvas.height;
        if (width == undefined) width = w;
        if (height == undefined) height = h;
        let retCanvas = document.createElement('canvas');
        let retCtx = retCanvas.getContext('2d');
        retCanvas.width = width;
        retCanvas.height = height;
        retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
        return retCanvas;
    }

    /**
     * AZ:移动截图范围
     * @param canvas
     * @param width
     * @param height
     * @param shift 偏移量
     * @returns {HTMLCanvasElement}
     */
    function scaleCanvasWithShift(canvas, width, height, shift) {
        // Source Image 源图片
        let sx = shift, sy = 0;
        let w = canvas.width - shift;
        let h = canvas.height;
        if (width == undefined) width = w;
        if (height == undefined) height = h;
        width = w;

        // Destination Image 目标图片
        let dx = 0, dy = 0;
        let dw = width;
        let dh = height;
        let retCanvas = document.createElement('canvas');
        let retCtx = retCanvas.getContext('2d');
        retCanvas.width = width;
        retCanvas.height = height;
        console.log("scaleCanvasWithShift:[" + sx + "," + sy + "]" + w + "x" + h + " -> [" + dx + "," + dy + "]" + dw + "x" + dh);
        retCtx.drawImage(canvas, sx, sy, w, h, dx, dy, dw, dh);
        return retCanvas;
    }

    function getDataURL(canvas, type, width, height) {
        canvas = scaleCanvas(canvas, width, height);
        return canvas.toDataURL(type);
    }

    function getDataURLWithShift(canvas, type, width, height, shift) {
        canvas = scaleCanvasWithShift(canvas, width, height, shift);
        return canvas.toDataURL(type);
    }

    function saveFile(strData) {
        strData.replace('image/jpeg', 'image/octet-stream');
        document.location.href = strData;
    }

    let _fixType = function (type) {
        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
        var r = type.match(/png|jpeg|bmp|gif/)[0];
        return 'image/' + r;
    };

    let saveFileToName = function (data, fileName, shift) {
        var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href = data;
        save_link.download = fileName;
        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        save_link.dispatchEvent(event);
    };

    // AZ Add:兼容Edge下载
    function downloadFile(fileName, content) {
        let aLink = document.createElement('a');
        let blob = base64ToBlob(content); //new Blob([content]);
        let evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);
        aLink.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));//兼容火狐
    }

    //AZ Add:base64转blob
    function base64ToBlob(code) {
        let parts = code.split(';base64,');
        let contentType = parts[0].split(':')[1];
        let raw = window.atob(parts[1]);
        let rawLength = raw.length;
        let uInt8Array = new Uint8Array(rawLength);
        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], {type: contentType});
    }

    function genImage(strData) {
        let img = document.createElement('img');
        img.src = strData;
        return img;
    }

    function fixType(type) {
        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
        let r = type.match(/png|jpeg|bmp|gif/)[0];
        return 'image/' + r;
    }

    function encodeData(data) {
        if (!window.btoa) throw 'btoa undefined'
        let str = '';
        if (typeof data == 'string') {
            str = data;
        } else {
            for (var i = 0; i < data.length; i++) {
                str += String.fromCharCode(data[i]);
            }
        }
        return btoa(str);
    }

    function getImageData(canvas) {
        let w = canvas.width, h = canvas.height;
        return canvas.getContext('2d').getImageData(0, 0, w, h);
    }

    function makeURI(strData, type) {
        return 'data:' + type + ';base64,' + strData;
    }


    /**
     * create bitmap image
     * 按照规则生成图片响应头和响应体
     */
    var genBitmapImage = function (oData) {
        // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
        // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
        let biWidth = oData.width;
        let biHeight = oData.height;
        let biSizeImage = biWidth * biHeight * 3;
        let bfSize = biSizeImage + 54; // total header size = 54 bytes

        //  typedef struct tagBITMAPFILEHEADER {
        //  	WORD bfType;
        //  	DWORD bfSize;
        //  	WORD bfReserved1;
        //  	WORD bfReserved2;
        //  	DWORD bfOffBits;
        //  } BITMAPFILEHEADER;
        var BITMAPFILEHEADER = [
            // WORD bfType -- The file type signature; must be "BM"
            0x42, 0x4D,
            // DWORD bfSize -- The size, in bytes, of the bitmap file
            bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
            // WORD bfReserved1 -- Reserved; must be zero
            0, 0,
            // WORD bfReserved2 -- Reserved; must be zero
            0, 0,
            // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
            54, 0, 0, 0
        ];

        //  typedef struct tagBITMAPINFOHEADER {
        //  	DWORD biSize;
        //  	LONG  biWidth;
        //  	LONG  biHeight;
        //  	WORD  biPlanes;
        //  	WORD  biBitCount;
        //  	DWORD biCompression;
        //  	DWORD biSizeImage;
        //  	LONG  biXPelsPerMeter;
        //  	LONG  biYPelsPerMeter;
        //  	DWORD biClrUsed;
        //  	DWORD biClrImportant;
        //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
        var BITMAPINFOHEADER = [
            // DWORD biSize -- The number of bytes required by the structure
            40, 0, 0, 0,
            // LONG biWidth -- The width of the bitmap, in pixels
            biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
            // LONG biHeight -- The height of the bitmap, in pixels
            biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
            // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
            1, 0,
            // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
            // has a maximum of 2^24 colors (16777216, Truecolor)
            24, 0,
            // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
            0, 0, 0, 0,
            // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
            biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
            // LONG biXPelsPerMeter, unused
            0, 0, 0, 0,
            // LONG biYPelsPerMeter, unused
            0, 0, 0, 0,
            // DWORD biClrUsed, the number of color indexes of palette, unused
            0, 0, 0, 0,
            // DWORD biClrImportant, unused
            0, 0, 0, 0
        ];

        let iPadding = (4 - ((biWidth * 3) % 4)) % 4;
        let aImgData = oData.data;
        let strPixelData = '';
        let biWidth4 = biWidth << 2;
        let y = biHeight;
        let fromCharCode = String.fromCharCode;
        do {
            let iOffsetY = biWidth4 * (y - 1);
            let strPixelRow = '';
            for (let x = 0; x < biWidth; x++) {
                let iOffsetX = x << 2;
                strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +
                    fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +
                    fromCharCode(aImgData[iOffsetY + iOffsetX]);
            }
            for (let c = 0; c < iPadding; c++) {
                strPixelRow += String.fromCharCode(0);
            }
            strPixelData += strPixelRow;
        } while (--y);
        var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);
        return strEncoded;
    };

    /**
     * saveAsImage
     * @param canvasElement
     * @param {String} image type
     * @param {Number} [optional] png width
     * @param {Number} [optional] png height
     */
    var saveAsImage = function (canvas, width, height, type) {
        if ($support.canvas && $support.dataURL) {
            if (typeof canvas == "string") {
                canvas = document.getElementById(canvas);
            }
            if (type == undefined) {
                type = 'png';
            }
            type = fixType(type);
            if (/bmp/.test(type)) {
                var data = getImageData(scaleCanvas(canvas, width, height));
                var strData = genBitmapImage(data);
                saveFile(makeURI(strData, downloadMime));
            } else {
                var strData = getDataURL(canvas, type, width, height);
                azSaveFile(strData.replace(type, downloadMime));
            }
        }
    };

    var saveAsImageToName = function (canvas, width, height, type, fileName, shift) {
        if ($support.canvas && $support.dataURL) {
            if (typeof canvas == "string") {
                canvas = document.getElementById(canvas);
            }
            if (type == undefined) type = 'png';
            type = fixType(type);
            if (/bmp/.test(type)) {
                var data = getImageData(scaleCanvas(canvas, width, height));
                var strData = genBitmapImage(data);
                saveFile(makeURI(strData, downloadMime));
            } else {
                var strData = getDataURLWithShift(canvas, type, width, height, shift);
                //saveFileToName(strData.replace(type, downloadMime), fileName);
                downloadFile(fileName, strData.replace(type, downloadMime)); // AZ:兼容Edge下载
            }
        }
    };

    var convertToImage = function (canvas, width, height, type) {
        if ($support.canvas && $support.dataURL) {
            if (typeof canvas == "string") {
                canvas = document.getElementById(canvas);
            }
            if (type == undefined) {
                type = 'png';
            }
            type = fixType(type);

            if (/bmp/.test(type)) {
                let data = getImageData(scaleCanvas(canvas, width, height));
                let strData = genBitmapImage(data);
                return genImage(makeURI(strData, 'image/bmp'));
            } else {
                let strData = getDataURL(canvas, type, width, height);
                return genImage(strData);
            }
        }
    };
    return {
        saveAsImageToName: saveAsImageToName,
        saveAsImage: saveAsImage,
        saveAsPNG: function (canvas, width, height) {
            return saveAsImage(canvas, width, height, 'png');
        },
        saveAsJPEG: function (canvas, width, height) {
            return saveAsImage(canvas, width, height, 'jpeg');
        },
        saveAsGIF: function (canvas, width, height) {
            return saveAsImage(canvas, width, height, 'gif');
        },
        saveAsBMP: function (canvas, width, height) {
            return saveAsImage(canvas, width, height, 'bmp');
        },

        convertToImage: convertToImage,
        convertToPNG: function (canvas, width, height) {
            return convertToImage(canvas, width, height, 'png');
        },
        convertToJPEG: function (canvas, width, height) {
            return convertToImage(canvas, width, height, 'jpeg');
        },
        convertToGIF: function (canvas, width, height) {
            return convertToImage(canvas, width, height, 'gif');
        },
        convertToBMP: function (canvas, width, height) {
            return convertToImage(canvas, width, height, 'bmp');
        }
    };
}();