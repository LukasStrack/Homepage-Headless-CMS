const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
		  allContentfulUtilityItems (limit:100) {
			edges {
			  node {
				slug
				picture {
				  file {
					url
				  }
				}
			  }
			}
		  }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulUtilityItems.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}