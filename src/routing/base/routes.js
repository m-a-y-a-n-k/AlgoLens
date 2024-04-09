import constants from "common/helpers/constants"

const pages = [
  {
    algo: [
      "Sieve",
      "BinarySearch",
      "Factorial",
      "NQueens",
      "Exponentiation",
      "FloodFill",
      "Peak",
      "KnuthShuffle",
      "ClosestPair",
    ],
  },
  {
    ds: ["Array", "LinkedList", "Stacks", "Queues", "Sets", "Lookup"],
  },
]

const dynamicRoute = (category, subject) => {
  return `${constants.BRAND_NAME}/${category}/${subject}`
}

const dynamicPath = (category, subject) => {
  return `site/${category}/components/${subject}`
}

const siteSugg = []

pages.forEach((page) => {
  Object.keys(page).forEach((category) => {
    page[category].forEach((subject) => {
      const path = `${dynamicPath(category, subject)}`
      const route = `/${dynamicRoute(category, subject)}`
      const title = `${category.toUpperCase()} : ${subject}`
      siteSugg.push({
        route,
        title,
        path,
      })
    })
  })
})

export { siteSugg }
