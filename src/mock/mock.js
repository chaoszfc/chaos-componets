const mockjs = require('mockjs')
import testMockIndex from './testMockIndex'
function requestSuccess(data) {
  return {
    code: '0000',
    success: true,
    msg: '',
    data
  }
}

//如果是开发环境，执行mock
if( process.env.NODE_ENV === 'development' ) {
  // console.log(process.env);
  mockjs.mock('/test/mock', 'get', () => {
    return requestSuccess(testMockIndex.testList)
  })
}
