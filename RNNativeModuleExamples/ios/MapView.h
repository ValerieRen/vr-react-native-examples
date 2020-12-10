#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface MapView: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end
