# Expanding Cards

## 实现要点

通过绑定点击事件动态添加删除 `class: active` 来达到切换当前活跃图片，使用 `classList` 相关 API

## 知识点

- `transition`

  - `delay`

- `background`

  - `size`
  - `position`
  - `repeat`

- `position`

  - `relative & absolute`

- `:nth-of-type(idx)`

## 改进

- 给图片文字添加 `user-select: none` 防止选中时怪异现象

- 在使用 `-webkit-transition: all 700ms ease-in` 时应该同时补充 `transition: all 700ms ease-in`

- 手机模式时点击图片会出现蓝色图层，可以使用如下方法避免，测试后得出 `this` 是有效解决办法

  ```css
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none; /* this */
  -webkit-user-select: none;
  ```
