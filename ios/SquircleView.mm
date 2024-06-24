#ifdef RCT_NEW_ARCH_ENABLED
#import "SquircleView.h"

#import <react/renderer/components/RNSquircleViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNSquircleViewSpec/EventEmitters.h>
#import <react/renderer/components/RNSquircleViewSpec/Props.h>
#import <react/renderer/components/RNSquircleViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"
#import "Utils.h"

using namespace facebook::react;

@interface SquircleView () <RCTSquircleViewViewProtocol>

@end

@implementation SquircleView {
    UIView * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<SquircleViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const SquircleViewProps>();
    _props = defaultProps;

    _view = [[UIView alloc] init];

    self.contentView = _view;
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<SquircleViewProps const>(_props);
    const auto &newViewProps = *std::static_pointer_cast<SquircleViewProps const>(props);

    if (oldViewProps.color != newViewProps.color) {
        NSString * colorToConvert = [[NSString alloc] initWithUTF8String: newViewProps.color.c_str()];
        [_view setBackgroundColor: [Utils hexStringToColor:colorToConvert]];
    }

    [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> SquircleViewCls(void)
{
    return SquircleView.class;
}

@end
#endif
