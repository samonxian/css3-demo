## 背景Background

| 属性 | 版本 | 继承性 | 描述 | 
| ---- | ---- | ------ | ---- |
| background | CSS1/3 | 无 | 复合属性。设置或检索对象的背景特性 | 
| background-color | CSS1 | 无 | 设置或检索对象的背景颜色 | 
| background-image | CSS1/3 | 无 | 设置或检索对象的背景图像 | 
| background-repeat | CSS1/3 | 无 | 设置或检索对象的背景图像如何铺排填充 | 
| background-attachment | CSS1/3 | 无 | 设置或检索对象的背景图像是随对象内容滚动还是固定的 | 
| background-position | CSS1/3 | 无 | 设置或检索对象的背景图像位置 | 
| background-origin | CSS3 | 无 | 设置或检索对象的背景图像显示的原点 | 
| background-clip | CSS3 | 无 | 检索或设置对象的背景向外裁剪的区域 | 
| background-size | CSS3 | 无 | 检索或设置对象的背景图像的尺寸大小 |

[详细说明，猛戳](http://www.css88.com/book/css/properties/background/background.htm)

---

##background-attachment

- `fixed` 背景图像相对于窗体固定。
- `scroll` 背景图像相对于元素固定，也就是说当元素内容滚动时背景图像不会跟着滚动，因为背景图像总是要跟着元素本身。但会随元素的祖先元素或窗体一起滚动。
- `local` 背景图像相对于元素内容固定，也就是说当元素随元素滚动时背景图像也会跟着滚动，因为背景图像总是要跟着内容。（CSS3）

[demo,猛戳](http://www.css88.com/book/css/properties/background/background.htm)




