var common = require("./justified-label-common");
global.moduleMerge(common, exports);
var JustifiedLabel = (function (_super) {
    __extends(JustifiedLabel, _super);
    function JustifiedLabel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(JustifiedLabel.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    JustifiedLabel.prototype._createUI = function () {
        this._android = new com.telerik.justifiedlabel.JustifyTextView(this._context);
        this._android.setSingleLine(true);
        this._android.setEllipsize(android.text.TextUtils.TruncateAt.END);
    };
    return JustifiedLabel;
}(common.JustifiedLabel));
exports.JustifiedLabel = JustifiedLabel;
