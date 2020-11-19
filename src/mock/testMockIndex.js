const exmaineList = {
  'list': [
    {
      'sort': 1,
      'articleId': 111,
      'title': '标题',
      'categoryName': '新闻资讯',
      'publisher': 'XXXX',
      'publisterAccountType': 1,
      'publishTime': '2020-9-7 10:32:12',
      'auditStatus': 0,
      'recommendId': [1, 2, 3]
    },
    {
      'sort': 2,
      'articleId': 112,
      'title': '标题',
      'categoryName': '新闻资讯',
      'publisher': 'XXXX',
      'publisterAccountType': 1,
      'publishTime': '2020-9-7 10:32:12',
      'auditStatus': 1,
      'recommendId': [2]
    }
  ]
}
const categoryList = {
  'categoryList': [
    {
      'categoryId': 1,
      'name': '动态',
      'parentName': 'APP资讯',
      'status': 0,
      'createTime': '2020-09-03 12:00:00',
      'updateTime': '2020-09-03 12:00:00',
      'hasChildren': true
    },
    {
      'categoryId': 2,
      'name': '百科',
      'parentName': 'APP资讯',
      'status': 0,
      'createTime': '2020-09-03 12:00:00',
      'updateTime': '2020-09-03 12:00:00',
      'hasChildren': true
    }
  ]
}
const exmaine = {
  exmaineList,
  categoryList
}
export default exmaine
