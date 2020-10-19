//
//  CustomNotificationMessage.m
//  RCIMLib
//
//  Created by 牛琳果 on 2020/10/19.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "CustomNotificationMessage.h"

@implementation CustomNotificationMessage

+ (NSString *)getObjectName{
    return @"Custom:Notification";
}

+ (RCMessagePersistent)persistentFlag{
    return MessagePersistent_STATUS;
}

@end
