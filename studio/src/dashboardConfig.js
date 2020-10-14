export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8730a7c68f4a32a859ebfc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xntb2usq',
                  apiId: '2646772f-0b1a-4280-886b-f687c40e157a'
                },
                {
                  buildHookId: '5f8730a8c68f4a2f8959f7ff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6ehqo4ig',
                  apiId: '4b068c3e-4f88-4f39-82be-e035e5850198'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DevelopmentGoalsForum/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6ehqo4ig.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
