#import "BlurryText.h"
#import <React/RCTLog.h>

@implementation BlurryText

- (void)blurryText {
    RCTLogInfo(@"blurryText self %@ ", self);
    UIGraphicsBeginImageContext(self.bounds.size);
    [self.layer renderInContext: UIGraphicsGetCurrentContext()];
    UIImage * image = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    CIFilter * gaussianBlurFilter = [CIFilter filterWithName:@"CIGaussianBlur"];
    [gaussianBlurFilter setDefaults];
    CIImage * inputImage = [CIImage imageWithCGImage:[image CGImage]];
    [gaussianBlurFilter setValue:inputImage forKey:kCIInputImageKey];
    [gaussianBlurFilter setValue:@(self.blurRadius) forKey:kCIInputRadiusKey];
    CIImage * outputImage = [gaussianBlurFilter outputImage];
    CIContext * context = [CIContext contextWithOptions:nil];
    CGImageRef cgimg = [context createCGImage:outputImage fromRect:[inputImage extent]];
    [self.layer setContents:(__bridge id)cgimg];
    CGImageRelease(cgimg);
}

-(UIImage *)getBlurryImageText {
    RCTLogInfo(@"getBlurryImageText self %@ ", self);
    UIGraphicsBeginImageContext(self.bounds.size);
    [self.layer renderInContext:UIGraphicsGetCurrentContext()];
    UIImage * image = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    CIFilter * gaussianBlurFilter = [CIFilter filterWithName:@"CIGaussianBlur"];
    [gaussianBlurFilter setDefaults];
    CIImage * inputImage = [CIImage imageWithCGImage:[image CGImage]];
    [gaussianBlurFilter setValue:inputImage forKey:kCIInputImageKey];
    [gaussianBlurFilter setValue:@(self.blurRadius) forKey:kCIInputRadiusKey];
    CIImage * outputImage = [gaussianBlurFilter outputImage];
    CIContext * context = [CIContext contextWithOptions:nil];
    CGImageRef cgimg = [context createCGImage:outputImage fromRect:[inputImage extent]];
    UIImage * convertedImage = [UIImage imageWithCGImage:cgimg];
    CGImageRelease(cgimg);
    return convertedImage;
}

@end
