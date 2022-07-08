module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Component UI generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What is your type of component?',
        choices: [
          'Actions',
          'Data display',
          'Data input',
          'Layout',
          'Navigation',
        ],
      },
    ],
    actions: () => {
      return [
        {
          type: 'add',
          templateFile: './index.tsx.hbs',
          path: '../src/ui/{{ type }}/{{properCase name}}/index.tsx',
        },
        {
          type: 'add',
          templateFile: './component.tsx.hbs',
          path: '../src/ui/{{ type }}/{{properCase name}}/{{properCase name}}.tsx',
        },
        {
          type: 'add',
          templateFile: './test.tsx.hbs',
          path: '../src/ui/{{ type }}/{{properCase name}}/{{properCase name}}.spect.test.tsx',
        },
        {
          type: 'add',
          templateFile: './stories.tsx.hbs',
          path: '../src/ui/{{ type }}/{{properCase name}}/{{properCase name}}.stories.tsx',
        },
      ];
    },
  });
};
