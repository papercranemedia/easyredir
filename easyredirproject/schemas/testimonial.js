export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'company',
        title: 'Company',
        description: 'Add the company name here',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'company',
          maxLength: 96,
        },
      },
      {
        name: 'logoImage',
        title: 'Logo',
        description: 'Please upload an image of the company logo here. Ensure that it is already grey toned and optimized prior to upload',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      
      {
        name: 'person',
        title: 'Person',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'websiteLink',
        title: 'Website Link',
        type: 'url',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'company',
        media: 'logoImage',
      },
      
    },
  }
  