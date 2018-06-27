import React from "react";

export default ({ data }) => 
{
  console.log(data);
  
  const contentTypes = data.allContentfulHomepage.edges[0].node.contentTypes;
 // console.log(contentTypes);
 
	for(var i = 0; i < contentTypes.length; i++){
		
		var obj = contentTypes[i];
		
		if (obj.__typename === 'ContentfulTeaser') {
		console.log(obj.title);
		document.write(
			"<p>" + obj.title + "</p>" + 
			"<p>" + obj.description + "</p>" + 
			"<p>" + obj.button + "</p>" + 
			"<p>" + obj.legalNote + "</p>" + 
			"<p>" + obj.strer + "</p>"
		);
		}
	
		if (obj.__typename === 'ContentfulDirekteinstieg') {
		console.log(obj.title);
		document.write(
			"<p>" + obj.title + "</p>"
		);
		}
		
		if (obj.__typename === 'ContentfulUtilityItems') {
		console.log(obj.title);
		document.write("<p>" + obj.title + "</p>");
		}
		
	}
	
	return null;
}

  /*return (
    <div>
      // The next line is where I’m map the photos data into React components.
      {photos.map(photo => (
        <div>
          <br />
          <br />
          // The next line is where the code drills into the data structure //
          to print a specific thing to the site. // In this case, I’m printing
          each photo to the site by using its URL. // I got this structure from
          the GraphQL query.
          <img src={photo.picture.file.url} />
          <h3>{photo.title}</h3>
        </div>
      ))}
    </div>
  );
};*/

export const query = graphql`
query PhotoQuery {
  allContentfulHomepage(limit:100) {
    edges {
      node {
		contentTypes{
				__typename
				... on ContentfulTeaser{
				  id
				  title
				  description
				  button
				  legalNote
				  strer
				}
				... on ContentfulDirekteinstieg{
				  id
				  title
				  dPicture{
						  file{
							url
						  }
					}
				}
				... on ContentfulUtilityItems{
				  id
				  title
				  picture {
						file{
						  url
						}
				   }
				}
			}
		}
	}
  }
}`;