var common = require("./justified-label-common")
var utils = require("@nativescript/core/utils/utils")
var view = require("@nativescript/core/ui/core/view")

Object.assign(module.exports, require("./justified-label-common"))


export class JustifiedLabel extends common.JustifiedLabel{
  

    _onTextPropertyChanged(oldValue, newValue) {

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
    }
}

