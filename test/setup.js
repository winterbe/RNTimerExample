// see: https://github.com/mobxjs/mobx-react/issues/186
jest.mock('mobx-react/native', () => require('mobx-react/custom'));