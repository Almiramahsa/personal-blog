<h3 align="left">:hammer_and_wrench: Languages and Tools:</h3>

<div align="left"> 
 
  <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="nextjs"/> 
  </a> 

  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind"/> 
  </a> 
    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
   
  </a> 
 
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/> 
  </a> 
   <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="graphql"/> 
  </a> 

## Work with Graphql-cms

GraphCMS is a headless content management system based on GraphQL technology enabling seamless integration with any application.

## Features

* Build markdown/remark directory to json-file with `graphql-cms build`
* Serve it as an graphql-api `graphql-cms build`
* Control usage with a `graphql-cms-config.js` file

See the example-folder

## Features todo

* Use sharp.js to extract inline-image links in markdown and remark custom fields and create next-gen picture tags with responsive images

## Graphql-api

### Fetch a list of pages

```
{
  pages (
    orderBy: frontmatter_order_ASC,
    where:{
      frontmatter_order__ne: null
    }
    limit: 10
    skip: 10
  ) {
    count,
    nodes {
      id
      content
      slug
      frontmatter {
        order
        title
        meta {
          title
          description
        }
      }
    }
  }
}
```

### Fetch a single page by id or slug

```
{
  page(
    slug:"/services"
    # or id: "xyz"
  ) {
    id
    slug
    content
    contentRaw
    children {
      count
      nodes {
        id
        slug
        frontmatter {
          title
        }
      }
    }
    parent {
      id
      slug
      frontmatter {
        title
      }
    }
    path {
      slug
      frontmatter {
        title
      }
    }
  }
}
```

### Types

```
Page {
  id: ID!
  slug: String!
  content: String
  rawContent: String
  updated: String
  created: String
  frontmatter: Frontmatter
    title: String
    # And other remark-fields defined in your .md files
  children: PageConnection
    count: Int
    nodes: [Page]
  path: [Page]
  parent: Page
}
```
