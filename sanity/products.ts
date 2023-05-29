export const products = {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'male',
      type: 'document',
      title: 'Male Products',
      fields: [
        {
          name: 'title',
          title: 'Product title',
          type: 'string',
        },
        {
          name: 'cathegory',
          title: 'Product cathegory',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Product description',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Product image',
          type: 'image',
        },
        {
          name: 'price',
          title: 'Product price',
          type: 'number',
        },
      ],
    },
    {
      name: 'female',
      type: 'document',
      title: 'Female Products',
      fields: [
        {
          name: 'title',
          title: 'Product title',
          type: 'string',
        },
        {
          name: 'cathegory',
          title: 'Product cathegory',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Product description',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Product image',
          type: 'image',
        },
        {
          name: 'price',
          title: 'Product price',
          type: 'number',
        },
      ],
    },
  ],
};
