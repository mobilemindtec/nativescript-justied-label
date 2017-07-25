var common = require("./justified-label-common");
global.moduleMerge(common, exports);
var JustifiedLabel = (function (_super) {
    __extends(JustifiedLabel, _super);
    function JustifiedLabel() {
        _super.apply(this, arguments);
    }
    JustifiedLabel.prototype.createNativeView = function () {
        this.nativeView = new com.telerik.justifiedlabel.JustifyTextView(this._context);
        this.nativeView.setSingleLine(true);
        this.nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
        console.log("*************************")
        console.log(this.nativeView)
        console.log("*************************")
        return this.nativeView
    };
    return JustifiedLabel;
}(common.JustifiedLabel));
exports.JustifiedLabel = JustifiedLabel;
