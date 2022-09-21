module.exports = {
  description: 'generate a view',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: 'path please',
    },
    {
      type: 'input',
      name: 'file',
      message: 'file name please',
    },
    {
      type: 'input',
      name: 'name',
      message: 'view name please',
    },
    // {
    //   type: 'checkbox',
    //   name: 'blocks',
    //   message: 'Blocks:',
    //   choices: [
    //     {
    //       name: '<template>',
    //       value: 'template',
    //       checked: true,
    //     },
    //     {
    //       name: '<script>',
    //       value: 'script',
    //       checked: true,
    //     },
    //     {
    //       name: 'style',
    //       value: 'style',
    //       checked: true,
    //     },
    //   ],
    // },
  ],
  actions: (data) => {
    const path='{{path}}'
    const file = '{{file}}'
    const name = '{{name}}'
    const actions = [
      {
        type: 'add',
        path: `${path}/${file}/${name}.vue`,
        templateFile: 'example/index.hbs',
        data: {
          file:file,
          name: name,
          // template: data.blocks.includes('template'),
          // script: data.blocks.includes('script'),
          // style: data.blocks.includes('style'),
        },
      },
    ]

    return actions
  },
}
