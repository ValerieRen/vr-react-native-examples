//
//  BlurryTextManager.m
//  BlurryText
//
//  Created by Valerie Ren on 21/12/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "BlurryTextManager.h"
#import "BlurryText.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>

@implementation BlurryTextManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE(RNBlurryText);

RCT_EXPORT_VIEW_PROPERTY(blurRadius, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(text, NSString);

-(dispatch_queue_t) methodQueue
{
	return dispatch_get_main_queue();
}

- (UIImage *)view
{
  BlurryText *blurryText = [[BlurryText alloc] initWithFrame:CGRectMake(0, 64, 100, 100)];
  UIImage * convertedImage = [blurryText getBlurryImageText];
	return convertedImage;
}


@end
