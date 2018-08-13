const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {

    res.json(
      [
        {
          title: 'Note 1',
          content: 'oogabooga',
          dateCreated: '2018-09-03',
          tags: ['react'],
        },
        {
          title: 'Note 2',
          content: 'I like rusty things',
          dateCreated: '2018-09-03',
          tags: ['spoons'],
        },
        {
          title: 'Note 3',
          content: 'this is coming frome express server',
          dateCreated: '2018-09-03',
          tags: ['david bowie', 'mark cuban'],
        }
      ]
    )
  } catch (err) {
    next(err)
  }
})
