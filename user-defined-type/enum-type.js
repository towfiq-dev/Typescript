"use strict";
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
//console.log(RequestType.deleteData);
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
    RequestType2[RequestType2["id"] = 101] = "id";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
