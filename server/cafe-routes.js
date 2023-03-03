const express = require('express')
const fs = require('fs').promises
const cafeRouter = express.Router()

cafeRouter.get('/:id', async (req, res) => {
  try {
    const data = await fs.readFile('server/data/data.json', 'utf-8')
    const cuisinesData = JSON.parse(data)
    const cafeData = cuisinesData.cuisines.filter((cuisine) => {
      if (cuisine.hasOwnProperty('fastFood')) {
        return cuisine.cafe[Number(req.params.id) - 1]
      }
    })
    console.log('fastFoodData: ', cafeData)
    // .cuisines.fastFood
    // .find(
    //     (item) => item.id === Number(req.params.id))
    // console.log(fastFoodData);
    // res.render()
  } catch (err) {
    console.log(err)
  }
})
module.exports = cafeRouter
