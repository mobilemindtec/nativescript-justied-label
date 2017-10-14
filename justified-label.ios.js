var common = require("./justified-label-common");
var utils = require("utils/utils");
var view = require("ui/core/view");

require("utils/module-merge").merge(common, exports)


var JustifiedLabel = (function (_super) {
    __extends(JustifiedLabel, _super);
    function JustifiedLabel(arguments) {
        _super.apply(this, arguments);
    }
  

    JustifiedLabel.prototype._onTextPropertyChanged = function (oldValue, newValue) {

        console.log("_onTextPropertyChanged " + newValue)
        var data = {
            oldValue: oldValue,
            newValue: newValue
        }

        this.nativeView.text = data.newValue;

        /*
        var paragraphStyles = NSMutableParagraphStyle.alloc().init();
        paragraphStyles.alignment = NSTextAlignmentJustified;      //justified text
        paragraphStyles.firstLineHeadIndent = 10.0;                //must have a value to make it work  
        var attributes = {NSParagraphStyleAttributeName: paragraphStyles};
        var attributedString = NSAttributedString.alloc().initWithStringAttributes(this.nativeView.text, attributes);
        this.nativeView.attributedText = attributedString;                            
        */
        
        this.nativeView.textAlignment = NSTextAlignmentJustified
    };

    

    return JustifiedLabel;
}(common.JustifiedLabel));

exports.JustifiedLabel = JustifiedLabel
