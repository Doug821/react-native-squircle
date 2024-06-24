package com.squircle

import android.view.View

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.SquircleViewManagerDelegate
import com.facebook.react.viewmanagers.SquircleViewManagerInterface

abstract class SquircleViewManagerSpec<T : View> : SimpleViewManager<T>(), SquircleViewManagerInterface<T> {
  private val mDelegate: ViewManagerDelegate<T>

  init {
    mDelegate = SquircleViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<T>? {
    return mDelegate
  }
}
