import RedBallLinksPreview from './RedBallLinksPreview'
export default {
  title: 'Red Ball List',
  name: 'redBallList',
  type: 'object',
  fields: [
    {
      title: 'List',
      name: 'red_ball_list',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'string',
            },
            {
              title: 'URL',
              name: 'url',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      list: 'red_ball_list',
    },
    prepare(selection) {
      const {list} = selection
      const links = createLinkObjects(list)
      return {
        title: 'Red Ball Links',
        links: links,
      }
    },
    component: RedBallLinksPreview,
  },
}

function createLinkObjects(arr) {
  return arr.map((l) => {
    return {text: l.text, href: l.url}
  })
}
