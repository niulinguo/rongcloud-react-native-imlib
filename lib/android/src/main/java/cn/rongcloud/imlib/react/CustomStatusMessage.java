package cn.rongcloud.imlib.react;

import android.os.Parcel;

import io.rong.imlib.MessageTag;
import io.rong.message.TextMessage;

@MessageTag(value = "Custom:Status", flag = MessageTag.STATUS)
public class CustomStatusMessage extends TextMessage {

    private static final String TAG = "CustomStatusMessage";

    public static final Creator<CustomStatusMessage> CREATOR = new Creator<CustomStatusMessage>() {
        public CustomStatusMessage createFromParcel(Parcel source) {
            return new CustomStatusMessage(source);
        }

        public CustomStatusMessage[] newArray(int size) {
            return new CustomStatusMessage[size];
        }
    };

    public static CustomStatusMessage obtain(String text) {
        CustomStatusMessage message = new CustomStatusMessage();
        message.setContent(text);
        return message;
    }

    public CustomStatusMessage() {
    }

    public CustomStatusMessage(byte[] data) {
        super(data);
    }

    public CustomStatusMessage(Parcel in) {
        super(in);
    }

    public CustomStatusMessage(String content) {
        super(content);
    }

    public String toString() {
        return TAG + "{content='" + getContent() + '\'' + ", extra='" + this.extra + '\'' + '}';
    }
}
