package cn.rongcloud.imlib.react;

import android.os.Parcel;

import io.rong.imlib.MessageTag;
import io.rong.message.TextMessage;

@MessageTag(value = "Custom:Notification", flag = MessageTag.STATUS)
public class CustomNotificationMessage extends TextMessage {

    private static final String TAG = "CustomNotificationMessage";

    public static final Creator<CustomNotificationMessage> CREATOR = new Creator<CustomNotificationMessage>() {
        public CustomNotificationMessage createFromParcel(Parcel source) {
            return new CustomNotificationMessage(source);
        }

        public CustomNotificationMessage[] newArray(int size) {
            return new CustomNotificationMessage[size];
        }
    };

    public static CustomNotificationMessage obtain(String text) {
        CustomNotificationMessage message = new CustomNotificationMessage();
        message.setContent(text);
        return message;
    }

    public CustomNotificationMessage() {
    }

    public CustomNotificationMessage(byte[] data) {
        super(data);
    }

    public CustomNotificationMessage(Parcel in) {
        super(in);
    }

    public CustomNotificationMessage(String content) {
        super(content);
    }

    public String toString() {
        return TAG + "{content='" + getContent() + '\'' + ", extra='" + this.extra + '\'' + '}';
    }
}
