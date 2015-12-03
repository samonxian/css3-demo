##语法(CSS3)
`border-radius`：[ `length` | `percentage` ]{1,4} [ / [ `length` | `percentage` ]{1,4} ]?
默认值：看每个独立属性
适用于：所有元素
继承性：无
动画性：看每个独立属性
计算值：看每个独立属性
##取值：
`length`：用长度值设置对象的圆角半径长度。不允许负值
`percentage`：用百分比设置对象的圆角半径长度。不允许负值
##说明：
- 设置或检索对象使用圆角边框。提供2个参数，2个参数以“/”分隔，每个参数允许设置1~4个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数
- 水平半径：如果提供全部四个参数值，将按上左(top-left)、上右(top-right)、下右(bottom-right)、下左(bottom-left)的顺序作用于四个角。
- 如果只提供一个，将用于全部的于四个角。
- 如果提供两个，第一个用于上左(top-left)、下右(bottom-right)，第二个用于上右(top-right)、下左(bottom-left)。
- 如果提供三个，第一个用于上左(top-left)，第二个用于上右(top-right)、下左(bottom-left)，第三个用于下右(bottom-right)。
- 垂直半径也遵循以上4点。

##PC兼容性
IE9+、chrome、Firefox等主流浏览器都支持（不考虑低版本如IE6、IE7等）
##手机兼容性（Android && IOS）
都支持

##语法(CSS3)：
`border-image`：`' border-image-source '` || `' border-image-slice '` [ / `' border-image-width '` | / `' border-image-width '`? / `' border-image-outset '` ]? || `' border-image-repeat '`[详情](http://www.360doc.com/content/14/1016/13/2792772_417403574.shtml)
默认值：看每个独立属性
适用于：看每个独立属性
继承性：无
动画性：看每个独立属性
计算值：看每个独立属性
##取值
`' border-image-source '`：
设置或检索对象的边框是否用图像定义样式或图像来源路径。
`' border-image-slice '`：
设置或检索对象的边框背景图的分割方式。
`' border-image-width '`：
设置或检索对象的边框厚度。
`' border-image-outset '`：
设置或检索对象的边框背景图的扩展。
`' border-image-repeat '`：
设置或检索对象的边框图像的平铺方式。
##PC兼容性
IE11+、chrome、Firefox等主流浏览器都支持（不考虑低版本如IE6、IE7等）
##手机兼容性（Android && IOS）
都支持
