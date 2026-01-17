// 转换前：
source = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
];
// 转换为:
tree = [
  {
    id: 1,
    pid: 0,
    name: "body",
    children: [
      {
        id: 2,
        pid: 1,
        name: "title",
        children: [
          {
            id: 3,
            pid: 1,
            name: "div",
          },
        ],
      },
    ],
  },
];

function objToTree(data) {
  let result = [];
  if (!Array.isArray(data)) {
    return result;
  }
  let map = {}; //将当前对象的id对应的对象存储起来
  data.forEach((item) => {
    map[item.id] = item;
  });
  data.forEach((item) => {
    let parentId = item.pid;
    let parent = map[parentId];
    if (parentId) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result
}
