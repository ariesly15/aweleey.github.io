---
title: Markdown 简明语法手册
sidebar: auto
---

# Cmd Markdown 简明语法手册

## 斜体和粗体

使用 `*` 和 `**` 表示斜体和粗体。
示例：
这是 _斜体_，这是 **粗体**。

### 这是一个三级标题

#### 这是一个4级标题

## 外链接

使用 \[描述](链接地址) 为文字增加外链接。
示例：
这是去往 [<i class="fa fa-hand-pointer-o"></i>本人博客](http://liyi0215.github.io) 的链接。

## 无序列表

使用 \*，+，- 表示无序列表。
示例：

-   无序列表项 一
-   无序列表项 二
-   无序列表项 三

## 有序列表

使用数字和点表示有序列表。
示例：

1. 有序列表项 一
2. 有序列表项 二
3. 有序列表项 三

## 文字引用

使用 > 表示文字引用。
示例：

> 野火烧不尽，春风吹又生。

## 行内代码块

使用 \`代码`表示行内代码块。 示例： 让我们聊聊`html`。

## 插入图像

使用 \!\[描述](图片链接地址) 插入图像。
示例：
![我的头像](https://www.zybuluo.com/static/img/my_head.jpg)

## 删除线

使用 ~~ 表示删除线。
~~这是一段错误的文本。~~

## 加强的代码块

支持四十一种编程语言的语法高亮的显示，行号显示。
非代码示例：

```shell
$ sudo apt-get install vim-gnome
```

Python 示例：

```python
@requires_authorization
def somefunc(param1='', param2=0):
    '''A docstring'''
    if param1 > param2: # interesting
        print 'Greater'
    return (param2 - param1 + 1) or None
class SomeClass:
    pass
>>> message = '''interpreter
... prompt'''
```

JavaScript 示例：

```javascript
/**
 * Date Format
 */
Date.prototype.format = function(fmt) {
    var o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        's+': this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
            );
    return fmt;
};
```

## 内嵌图标

本站的图标系统对外开放，在文档中输入
<i class="fa fa-weibo"></i>
即显示微博的图标： <i class="fa fa-weibo"></i>
替换 上述 `i 标签` 内的 `fa-weibo` 以显示不同的图标，例如：
<i class="fa fa-renren"></i>
即显示人人的图标： <i class="fa fa-renren"></i>
更多的图标和玩法可以参看 [font-awesome](http://fontawesome.io/icons/) 官方网站。

## 待办事宜 Todo 列表

使用带有 [ ] 或 [x] （未完成或已完成）项的列表语法撰写一个待办事宜列表，并且支持子列表嵌套以及混用 Markdown 语法，例如：

```markdown
    - [ ] **Cmd Markdown 开发**
        - [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
        - [ ] 支持以 PDF 格式导出文稿
        - [x] 新增Todo列表功能 [语法参考](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)
        - [x] 改进 LaTex 功能
            - [x] 修复 LaTex 公式渲染问题
            - [x] 新增 LaTex 公式编号功能 [语法参考](http://docs.mathjax.org/en/latest/tex.html#tex-eq-numbers)
    - [ ] **七月旅行准备**
        - [ ] 准备邮轮上需要携带的物品
        - [ ] 浏览日本免税店的物品
        - [x] 购买蓝宝石公主号七月一日的船票
```

对应显示如下待办事宜 Todo 列表：

-   [ ] **Cmd Markdown 开发**
    -   [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
    -   [ ] 支持以 PDF 格式导出文稿
    -   [x] 新增 Todo 列表功能 [语法参考](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)
    -   [x] 改进 LaTex 功能
        -   [x] 修复 LaTex 公式渲染问题
        -   [x] 新增 LaTex 公式编号功能 [语法参考](http://docs.mathjax.org/en/latest/tex.html#tex-eq-numbers)
-   [ ] **七月旅行准备**
    -   [ ] 准备邮轮上需要携带的物品
    -   [ ] 浏览日本免税店的物品
    -   [x] 购买蓝宝石公主号七月一日的船票

## 表格支持

| 项目   |   价格 | 数量 |
| ------ | -----: | :--: |
| 计算机 | \$1600 |  5   |
| 手机   |   \$12 |  12  |
| 管线   |    \$1 | 234  |

## Html 标签

支持在 Markdown 语法中嵌套 Html 标签，譬如，你可以用 Html 写一个纵跨两行的表格：

```html
<table>
    <tr>
        <th rowspan="2">值班人员</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>李强</td>
        <td>张明</td>
        <td>王平</td>
    </tr>
</table>
```

对应表格如下

<table>
    <tr>
        <th rowspan="2">值班人员</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>李强</td>
        <td>张明</td>
        <td>王平</td>
    </tr>
</table>
