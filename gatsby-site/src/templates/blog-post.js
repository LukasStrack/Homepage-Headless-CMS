import React, { Component} from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const {
      title
    } = this.props.data.contentfulUtilityItems
	const {
      slug
    } = this.props.data.contentfulUtilityItems
	const {
      url
    } = this.props.data.contentfulUtilityItems.picture.file
    return (
      <div>
        <h1>{title}</h1>
		<h1>{slug}</h1>
		<img src={url}/>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulUtilityItems(slug: {eq: $slug}) {
      title
      slug
	  picture{
		  file{
			  url
		  }
	  }
    }
  }
`
