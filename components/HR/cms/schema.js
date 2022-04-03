import HR from '../index'

export default {
  name: 'break',
  type: 'object',
  title: 'Break',
  preview: {
    component: HR,
  },
  fields: [
    {
      name: 'style',
      type: 'string',
      options: {
        list: ['break'],
      },
      initialValue: 'break',
    },
  ],
}
