//
//  CustomStatusMessage.m
//  RCIMLib
//
//  Created by ada1234 on 2020/10/14.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "CustomStatusMessage.h"

@implementation CustomStatusMessage

+ (NSString *)getObjectName{
    return @"Custom:Status";
}

+ (RCMessagePersistent)persistentFlag{
    return MessagePersistent_STATUS;
}

@end
