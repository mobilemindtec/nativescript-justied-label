var label = require("ui/label");
var view = require("ui/core/view");

export class JustifiedLabel extends label.Label{
    
}

exports.textProperty = new view.Property({ 
	name: "text", 
	defaultValue: "",
	valueChanged: function(target, newValue, oldValue){
		target._onTextPropertyChanged(newValue, oldValue)
	}
});
exports.textProperty.register(JustifiedLabel);

