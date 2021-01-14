#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface BlurryText : UILabel

@property (nonatomic) NSNumber blurRadius;

- (void)blurryText;
- (UIImage *) getBlurryImageText;

@end
