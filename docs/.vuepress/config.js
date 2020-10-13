module.exports = {
    title: 'Tingel\'s Notes',
    description: 'Tingel a real jack of all trades writes here in his personal blog about varios interests like data science, music, harp, blues, trombone, dixiland, gardening, male evolution, man kind project',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About me', link: '/about/' },
          { text: 'Data Science', link: '/datascience/' },
          {
            text: 'Wood Working',
            items: [
              { text: 'Playground Material', items: [
                { text: 'Pickler Triangle', link: '/woodworking/w_pickler_dreieck' },
                { text: 'Montessori Ramp', link: '/woodworking/w_ramp' },
                { text: 'Waldorf Spielständer', link: '/woodworking/w_spielstaender' }
              ] }
            ]
          }
        ],
        sidebar: {
            '/datascience/': [
                '',
                'ds_binary_classification'
            ]
        },
        lastUpdated: 'Last Updated', // string | boolean
    } 
  }