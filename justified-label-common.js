var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var textBase = require("ui/text-base");
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
    Object.defineProperty(JustifiedLabel.prototype, "textWrap", {
        get: function () {
            return this._getValue(JustifiedLabel.textWrapProperty);
        },
        set: function (value) {
            this._setValue(JustifiedLabel.textWrapProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    JustifiedLabel.textWrapProperty = new dependencyObservable.Property("textWrap", "JustifiedLabel", new proxy.PropertyMetadata(false, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    return JustifiedLabel;
}(textBase.TextBase));
exports.JustifiedLabel = JustifiedLabel;
function onTextWrapPropertyChanged(data) {
    var v = data.object;
    ensureEnums();
    v.style.whiteSpace = data.newValue ? enums.WhiteSpace.normal : enums.WhiteSpace.nowrap;
}
JustifiedLabel.textWrapProperty.metadata.onSetNativeValue = onTextWrapPropertyChanged;
