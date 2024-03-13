"use strict";
const small = 1;
const medium = 2;
const large = 3;
var diffSize;
(function (diffSize) {
    diffSize[diffSize["Small"] = 1000] = "Small";
    diffSize[diffSize["Medium"] = 1001] = "Medium";
    diffSize[diffSize["Large"] = 1002] = "Large";
})(diffSize || (diffSize = {}));
console.log(diffSize.Large);
//# sourceMappingURL=enum.js.map