# 属性

## AnimationOptions
常用于地图涉及动画的移动方法的选项，如 `map.panBy` 和 `map.easeTo`，用于控制动画的持续时间等功能。所有属性都是可选的
### 参数
*animate\<boolean>*: 如果为 false，则不会发生任何动画。

*duration\<number>*: 持续时间，单位毫秒。

*easing\<Function>*: 缓动函数。

*essential\<boolean>*: 如果为true，则动画被认为是必不可少的，并且不会受到`prefers-reduced-motion`的影响。

*offset\<PointLike>*: 在动画结束时，目标中心相对于真实地图容器中心的偏移。