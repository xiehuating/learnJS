## RegExp

|              |                                             | `示例`                                           |
| :----------- | ------------------------------------------- | ------------------------------------------------ |
| `^`          | `匹配输入的开头`                            | `/^This/ 匹配 "This is..."`                      |
| `$`          | `匹配输入的末尾`                            | `/end$/ 匹配 "This is the end"`                  |
|              |                                             |                                                  |
| `*`          | `匹配0次或多次`                             | `/se*/ 匹配 "s"，"seeeee"和"se"`                 |
| `?`          | `匹配0次或1次`                              | `/ap?/ 匹配 "apple"`                             |
| `+`          | `匹配1次或多次`                             | `/ap+/ 匹配 "apple" 但是不匹配 "aie"`            |
|              |                                             |                                                  |
| `{n}`        | `严格匹配n次`                               | `/ap{2}/ 匹配 "apple" 但是不匹配 "apie"`         |
| `{n,}`       | `严格匹配n次或多次`                         | `/ap{2,}/ 匹配 "apple" 和 "appple"`              |
| `{n,m}`      | `匹配n次，至多匹配m次`                      | `/ap{2,4}/ 匹配 "apppppple" 中的四个 "p"`        |
|              |                                             |                                                  |
| `.`          | `除换行外任何字符`                          | `/a.e/ 匹配 "ape" 和 "axe"`                      |
| `[...]`      | `方括号中的任何字符`                        | `/a[px]e/ 匹配 "ape" 和 "axe"`                   |
| `[^…]`       | `除方括号中字符以外的任何字符`              | `/a[^px]e/ 匹配 "ale" 但是不匹配 "axe" 和 "ape"` |
|              |                                             |                                                  |
| `\b`         | `匹配单词边界`                              | `/\bno/ 匹配 "nono" 中的第一个 "no"`             |
| `\B`         | `匹配非单词边界`                            | `/\Bno/ 匹配 "nono" 中的第二个 "no"`             |
| `\d`         | `匹配数字0到9`                              | `/\d{3}/ 匹配 "Now in 123" 中的 "123"`           |
| `\D`         | `匹配任何非数字字符`                        | `/\D{2,4}/ 匹配 "Now in 123" 中的 "Now "`        |
| `\s`         | `匹配单个的空白字符`                        |                                                  |
| `\S`         | `匹配单个的非空白字符`                      |                                                  |
| `\w`         | `匹配任何单词字符（字母、数字、下划线）`    | `/\w/ 匹配 "javascript" 中的 "j"`                |
| `\W`         | `匹配任何非单词字符`                        | `/\W/ 匹配 "100%" 中的 "%"`                      |
|              |                                             |                                                  |
| `\n`         | `匹配一个换行`                              |                                                  |
| `\t`         | 一个制表符                                  |                                                  |
|              |                                             |                                                  |
| `(x)`        | 捕获括号                                    | 记住匹配的字符                                   |
| `(red|blue)` | 查找任何指定的选项                          |                                                  |
|              |                                             |                                                  |
| `?=n`        | 匹配任何其后紧接指定字符串 n 的字符串。     |                                                  |
| `?!n`        | 匹配任何其后没有紧接指定字符串 n 的字符串。 |                                                  |
