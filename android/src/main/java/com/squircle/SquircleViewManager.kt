package com.squircle

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

@ReactModule(name = SquircleViewManager.NAME)
class SquircleViewManager :
  SquircleViewManagerSpec<SquircleView>() {
  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): SquircleView {
    return SquircleView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: SquircleView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "SquircleView"
  }
}
