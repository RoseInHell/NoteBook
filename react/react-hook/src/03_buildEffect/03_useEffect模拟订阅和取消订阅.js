import React, { useState, useEffect } from 'react'

export default function EffectHookCancelDemo() {

  useEffect(() => {
    console.log("订阅一些事件");

    return () => {
      console.log('取消了一些事件')
    }
  })

  return (
    <div>
      
    </div>
  )
}
