var label = require("ui/label");
var enums;
function ensureEnums() {
    if (!enums) {
        enums = require("ui/enums");
    }
}
var JustifiedLabel = (function (_super) {
    __extends(JustifiedLabel, _super);
    function JustifiedLabel(options) {
        _super.call(this, options);
    }
    return JustifiedLabel;
}(label.Label));
exports.JustifiedLabel = JustifiedLabel;
