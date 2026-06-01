# 图形编程配置
>图形化编程是Dobot+最核心的内容，通过配置生成对应积木，可以降低脚本编写难度。找到`src/config/Blocks.json`，通过指定参数来自定义你想要的积木。

本章节将介绍如何配置动态生成积木，你将会了解到
* 如何自定义积木外观
* 如何配置积木转代码
* 如何支持多线程
* 如何自定义菜单栏图标
* 如何添加积木弹窗页面
* 如何做国际化翻译
* 如何在线调试积木

## 自定义积木
我们支持执行积木、返回值积木、判断积木、结束积木
json配置
```js
{
    "block_name": "SetModbusIODigitOutput",
    "block_color": "#4D7DDD",
    "block_type": "shape_statement"
}
```

说明
|字段|类型|默认值|必填|说明|
|---|---|---|----|-----|
|block_name|string|无|是| 积木函数名，只支持纯字母|
|block_color|十六进制颜色字符串|无|是|积木颜色|
|block_type| BLOCK_TYPE |无|是|积木形状，指明积木使用逻辑|

**BLOCK_TYPE**
|类型|说明|样式|
|-|-|-|
|shape_statement|无输出的代码快|![](../../assets/imgs/blocks-statement.png)|
|output_number|输出数字的代码块|![](../../assets/imgs/blocks-output-num.png)|
|output_string|输出字符串的代码块|![](../../assets/imgs/blocks-output-string.png)|
|output_boolean|输出布尔值的代码块|![](../../assets/imgs/blocks-boolean.png)|
|shape_end|流程结束的代码块|![](../../assets/imgs/blocks-end.png)|
|shape_hat|流程开始的代码块|![](../../assets/imgs/blocks-start.png)|


**注意**
`block_name`配置时，不同积木不可重复，重复会导致积木数据被覆盖
`block_color`配置时，相同插件建议使用统一颜色
支持积木自定义参数类型
json配置

 ```js
 [
    {
      "message": "设置扩展IO数字输出 %1 %2",
      "params": [
        {
          "param_type": "field_dropdown",
          "data_type": "",
          "name": "name",
          "default": "",
          "options": [
            {
              "label": "Modbus_IO1",
              "value": "default"
            }
          ],
          "update": {
            "type": "lua",
            "function": "GetModbusArr",
            "args": {
              "type": "custom",
              "value": "do"
            }
          }
        },
        {
          "param_type": "field_dropdown",
          "data_type": "",
          "name": "do",
          "default": "",
          "options": [
            {
              "label": "DO_101",
              "value": "default"
            }
          ],
          "update": {
            "type": "lua",
            "function": "GetModbusDOArr",
            "args": {
              "type": "field",
              "value": "name"
            }
          }
        },
      ]
    }
  ]
```

**说明**
|字段	|类型|	默认值|	必填|	说明|
|-|-|-|-|-|
|message	|string|	无|	是|	积木采用%n的方式插值|
|params	|ParamsType[]|	无|	是|	积木参数定义|

**ParamsType**
|字段|	类型|	默认值	|必填|	说明|
|---|------|---------|-|----|
|param_type|	InputType|	无|	是|	参数类型|
|data_type|	`math_number`\|`text`|	无	|否|	数据类型|
|name|	string	|无	|否	|输入框name|
|default|	string|	无	|否|	参数默认值|
|options|	`{label:string,value:string}[]`|	无	|否	|参数填充形状类型为'field_dropdown'时，需要填写此字段；label 为显示给用户看的选项，value 为该选项对应实际的值，用作转代码|
|update	|updateType|	无|	否|	积木需要更新时，主动触发的HTTP接口调用|

**InputType**

|类型|说明|
|-|-|
|input_value|输入框|
|field_dropdown|下拉框|
|input_statement|嵌套声明|

## 积木转代码

`configs/Blocks.json`

```js
{
    "block_code":["DO({do},{status})"]
}
```

说明
|字段|类型|默认值|必填|说明|
|-|-|-|-|-|
|block_code|string[]|	无|	是|	积木转代码|

**注意**
`shape_statement`、`shape_end`类型积木转代码最后需要添加换行符 "/n"
多线程积木
转代码参数为数组形式，根据传入的顺序，依次转为主线程转代码（src0.lua），子线程转代码（src1.lua）（src2.lua）...
参阅[积木高级配置](/api/blocky)以学习复杂积木配置方法，例如焊接场景

## 自定义菜单栏图标
如果需要显示自定义菜单栏积木组的图标，可以将图标资源放入`Resources/images`
在`Blocks.json`中指明图标的名称，插件安装后会将图标信息同步给图形化界面。
json配置

```js
{
    "block_menuIcon": "grip.png"
}
```

说明
|字段|	类型	|默认值	|必填	|说明|
|-|-|-|-|-|
|block_menuIcon|	string|	无|	否|	菜单栏图标地址 ,不配置时显示默认图标|


## 积木弹窗页面
Dobot+积木支持弹窗页面，用于复杂参数场景下的二次处理，单机积木显示弹窗。

`configs/Blocks.json`
```js
{
    block_page: "template.html"
}
```
说明
|字段|	类型	|默认值|	必填|	说明|
|-|-|-|-|-|
|block_page|	string|	无|	否|	积木是否有配置页面，传入静态页面地址，将显示可单击图标|

## 国际化翻译
`Resources/i18n/client`可以配置积木翻译

* 在`Resources/i18n/client/zh.json`中`blocks`字段中添加
  ```js
  {
    "blocks": {
      "tr_dobot_set_extio": "设置扩展IO数字输出 %1 %2"
    }
  }
  ```

* 在`Resources/i18n/client/en.json`中`blocks`字段中添加
  ```js
  {
    "blocks": {
     "tr_dobot_set_extio": "Set extended IO digital output %1 %2"
    }
  }
  ```

* 在积木中中使用
  ```js
  {
    "block_configs": [
      {
        "message": "%{tr_dobot_set_extio}",
      }
    ]
  }
  ```
**注意**
message配置时，%n是用作插值占位，数量必须跟params内配置项相同，不然积木将无法加载
params内第一位配置项使用%1占位，第二位配置项使用%2占位，以此延续。

## 在线调试积木
我们支持在线调试积木的配置参数，可以实时预览积木的效果，执行以下命令，在浏览器中打开对应网址后点击积木模块

```bash
dpt gui
```
- 单击左侧菜单中的积木名可查看积木配置详情
![](../../assets/imgs/blocks-detail.png)

- 点击 + 号可以创建新的积木
![](../../assets/imgs/blocks-create.png)

- 在插件成功创建后可在页面预览积木效果
![](../../assets/imgs/blocks-preview.png)

- 鼠标悬停左侧积木菜单，可见删除按钮，点击红色删除按钮，可删除不需要的积木