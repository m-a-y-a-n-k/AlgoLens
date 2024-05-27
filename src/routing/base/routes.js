const pages = [
  {
    algo: [
      "BinarySearch",
      "ClosestPair",
      "Exponentiation",
      "Factorial",
      "Factorize",
      "Fibonacci",
      "FloodFill",
      "KnuthShuffle",
      "NQueens",
      "Palindrome",
      "Peak",
      "Sieve",
    ],
  },
  {
    ds: ["Array", "LinkedList", "Lookup", "Queues", "Sets", "Stacks"],
  },
]

const dynamicRoute = (category, subject) => {
  return `${category}/${subject}`
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
