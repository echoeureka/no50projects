# Progress Steps

## 实现要点

- 通过增减 `currentActive` 来控制当前进度
- 通过伪元素绘制和覆盖达到进度样式

## 知识点

- 操作 **DOM** 属性、样式的 API
- 进度条动态设置 `xx%`
- 按钮点击添加缩小更加符合直觉
- 另类的垂直居中

## 改进

- `user-select: none`
- `&::before z-index: -1 => z-index: -2`
