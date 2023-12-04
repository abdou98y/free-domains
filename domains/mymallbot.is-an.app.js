// for more details watch the file `./domains.d.ts`

addSubDomain({
    description: 'mymallbot', // describe your project in this field
    domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
    subdomain: 'mymallbot', // desired subdomain name
    owner: {
      repo: '<https://URL/to/the/repository/with/your/project/sources/if/it/is/public>',
      email: 'abdou39y@gmail.com',
    },
    record: {
      CNAME: 'abdou98y.github.io', // e.g.: <your-github-account>.github.io
      A: ['185.186.25.61'],
    },
  })