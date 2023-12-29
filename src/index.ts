import { baseAttrsMap } from "./style";
const fs = require("fs");
type anyKey = {
  [key: string]: string;
};
// 已应用的类名
let appClass: Array<string> = [];
// 提取模板字符串中的class属性值
const classRegex = /class="([^"]*)"/g;
// 提取class属性值上的每个类名
const classValueRegex = /['"]?([\w-]+)['"]?/g;
// 样式文件是否已有数据
let isWrited: boolean = false;
// 缓存.vue文件template模板字符串
let templateMap: anyKey = {};
// 路径正则
let pathRegExp =
  /(^[a-zA-Z]:[\\\S|*\S]?.+(\.css|\.scss|\.less)$)|(^(.\/|\/|~\/|..\/)([^/\0]+\/)*[^/\0]*((\.css)|(\.scss)|(\.less))$)/;
// 属性值的分隔符
let attrValueDecollator: string = "-";
// 排除指定的分割符
let excludeattrDecollators: Array<string> = [attrValueDecollator];

/**
 * 配置项
 * */
type Tconfig = {
  fileName?: string;
  prefix?: string;
  attrMapExtension?: anyKey;
  outputPath?: string;
  attrDecollator?: string;
};
// 输出文件名
let fileName: string = "ecss.css";
// 文件扩展名
// 类名前缀
let prefix: string = "ecss";
// 应用样式属性映射
let appAttrMap = baseAttrsMap;
// 输出文件的位置
let outputPath: string = "";
// 属性间的分割符
let attrDecollator = "--";
// 初始化基本数据
function init(config?: Tconfig) {
  fileName = config?.fileName || fileName;
  // 刷新输出路径
  outputPath = "./" + fileName;
  prefix = config?.prefix || prefix;

  if (config?.attrDecollator) {
    if (
      !excludeattrDecollators.includes(config.attrDecollator.replace(/\s/g, ""))
    ) {
      attrDecollator = config.attrDecollator;
    }
  }

  if (config?.outputPath && pathRegExp.test(config?.outputPath)) {
    outputPath = config.outputPath;
    fileName = outputPath.replace(/\\|\//g, "/").split("/").pop() || fileName;
  }

  // 是否增加样式匹配项
  if (config?.attrMapExtension) {
    appAttrMap = Object.assign(appAttrMap, config.attrMapExtension);
  }
}
// 插件方法
export default function vitePluginVueEcss(config?: Tconfig) {
  init(config);
  // 先创建样式文件
  addStyleContent("");
  return {
    name: "vite-plugin-vue-ecss",
    transform(source: any, id: string) {
      if (!id.endsWith(".vue")) {
        return null;
      }
      // // 截取模板
      let templateString = cutOutTemplate(source);
      // 比较模板是否有修改
      let isEdit = templateIsEdit(id, templateString);
      if (isEdit) {
        // 缓存模板字符串
        templateMap[id] = templateString;
        // 获取带有前缀的类名
        let classNames = getPrefixClass(templateString);
        // 匹配样式
        matchStyle(classNames);
      }
      return source;
    },
  };
}
// 截取模板字符串
function cutOutTemplate(source: string) {
  const templateRegex = /<template>([\s\S]+)<\/template>/;
  const match = source.match(templateRegex);
  let templateString = "";
  if (match) {
    templateString = match[1].trim();
  } else {
    console.log("No template found in the file.");
  }
  return templateString;
}
// 判断模板字符串是否有修改
function templateIsEdit(id: string, newTemplateString: string) {
  return !(templateMap[id] === newTemplateString);
}

//获取具有前缀的类名
function getPrefixClass(templateString: string) {
  const matches = templateString.match(classRegex);
  const classNames: string[] = [];
  if (matches) {
    const classValues = matches.map((match) =>
      match.replace('class="', "").replace('"', "")
    );
    classValues.forEach((className) => {
      // 使用正则表达式匹配类名的部分
      const classValueArr: Array<string> = className.match(classValueRegex) || [
        "",
      ];
      let prefixClass = classValueArr
        .map((className) => {
          // 去除多层字符串
          return className.replace(/(['"])(.*?)\1/g, "$2");
        })
        .filter((className: string) => {
          return className.startsWith(prefix + attrDecollator);
        });
      classNames.push(...prefixClass);
    });
  }
  return classNames;
}

// 匹配样式
function matchStyle(classNames: string[]) {
  // 单个vue文件的样式内容
  let cssFileContent = "";
  // 遍历带有前缀的类名
  classNames.forEach((name: string) => {
    // 判断类名是否已经存在
    if (!appClass.includes(name)) {
      appClass.push(name);
      let attrs: Array<string> = name
        ?.replace(prefix, "")
        .split(attrDecollator)
        .filter((item) => item);
      // 样式内容
      let classContent = "";
      attrs.forEach((item) => {
        let attrNameAndValue = item
          .split(attrValueDecollator)
          .filter((item) => item);
        let attr: string = attrNameAndValue[0] || "";
        let value: string = attrNameAndValue[1] || "";
        let attrName = appAttrMap[attr];
        if (attrName && value) {
          classContent += `    ${attrName}: ${value} !important;\n`;
        }
      });
      cssFileContent += `.${name} {\n${classContent}}\n`;
    }
  });
  if (cssFileContent) {
    addStyleContent(cssFileContent);
  }
}
// 添加样式内容
function addStyleContent(content) {
  fs.appendFile(outputPath, content, (err) => {
    if (err) {
      console.error("Error appending content to file:", err);
    } else {
      console.log("Content appended to file successfully.");
    }
  });
}
