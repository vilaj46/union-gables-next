import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'hwbiz02h',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
  const {alt, asset} = source
  if (asset === undefined) {
    return {
      alt,
      src: '',
    }
  } else {
    return {
      alt,
      src: builder.image(asset._ref).url(),
    }
  }
}

export default urlFor
