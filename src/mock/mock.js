import Mock from 'mockjs'
import testMockIndex from './testMockIndex'
function requestSuccess(data) {
  return {
    code: '0000',
    success: true,
    msg: '',
    data:data
  }
}

//如果是开发环境，执行mock
if( process.env.NODE_ENV === 'development' ) {
  console.log(Mock);
  Mock.mock('/test/mock', 'get', () => {
    return requestSuccess(testMockIndex.categoryList)
  })
  Mock.mock('/list/guixuList', 'get', () => {
    return requestSuccess(testMockIndex.guixuList)
  })
}
