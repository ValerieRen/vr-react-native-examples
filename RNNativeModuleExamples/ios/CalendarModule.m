//
//  CalendarModule.m
//  NativeModules
//
//  Created by Valerie Ren on 04/12/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "CalendarModule.h"
#import <React/RCTLog.h>

@implementation CalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name 
                location:(NSString *)location 
                successCallback: (RCTResponseSenderBlock)successCallback)
{
    NSString *response = [[NSString alloc] initWithFormat:@"Pretending to create an event %@ at %@", name, location];
    successCallback(@[response]);
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
