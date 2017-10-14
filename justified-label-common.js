var label = require("ui/label");
var view = require("ui/core/view");

var JustifiedLabel = (function (_super) {
    __extends(JustifiedLabel, _super);
    function JustifiedLabel() {
        _super.apply(this, arguments);
    }

    JustifiedLabel.prototype._onTextPropertyChanged = function(newValue, oldValue){
        
    }

    return JustifiedLabel;
}(label.Label));

exports.textProperty = new view.Property({ 
	name: "text", 
	defaultValue: "",
	valueChanged: function(target, newValue, oldValue){
		target._onTextPropertyChanged(newValue, oldValue)
	}
});
exports.textProperty.register(JustifiedLabel);

exports.JustifiedLabel = JustifiedLabel;
