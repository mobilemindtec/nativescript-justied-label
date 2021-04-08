var common = require("./justified-label-common")

export class JustifiedLabel extends common.JustifiedLabel{
    
    createNativeView() {
        this.nativeView = new com.telerik.justifiedlabel.JustifyTextView(this._context);
        this.nativeView.setSingleLine(true);
        this.nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
        return this.nativeView
    };

    _onTextPropertyChanged(oldValue, newValue){
        this._nativeView.setText(newValue)
    }
}
