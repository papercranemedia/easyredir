export default {
    name: 'story',
    title: 'Story',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      
      {
        name: 'customerSince',
        title: 'Customer Since',
        type: 'string',
      },
      {
        name: 'about',
        title: 'About the Client',
        type: 'blockContent',
      },
      {
        name: 'challenge',
        title: 'The Challenge',
        type: 'blockContent',
      },
      {
        name: 'testimonial',
        title: 'Testimonial Text',
        type: 'blockContent',
      },
      {
        name: 'testimonialAuthor',
        title: 'Testimonial Author',
        type: 'string',
      },
      {
        name: 'authorPosition',
        title: 'Position in Company',
        type: 'string',
      },
      {
        name: 'testimonialLogo',
        title: 'Company Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'result',
        title: 'Result',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
      
    },
  }
  