const pages = [
  {
    topic: "algo",
    label: "Algorithms",
    pages: [
      {
        topic: "BinarySearch",
        label: "Binary Search",
      },
      {
        topic: "ClosestPair",
        label: "Closest Pair",
      },
      {
        topic: "Exponentiation",
        label: "Exponentiation",
      },
      {
        topic: "Factorial",
        label: "Factorial",
      },
      {
        topic: "Factorize",
        label: "Factorize",
      },
      {
        topic: "Fibonacci",
        label: "Fibonacci",
      },
      {
        topic: "FloodFill",
        label: "Flood Fill",
      },
      {
        topic: "KnuthShuffle",
        label: "Knuth Shuffle",
      },
      {
        topic: "NQueens",
        label: "NQueens",
      },
      {
        topic: "Palindrome",
        label: "Palindrome",
      },
      {
        topic: "Peak",
        label: "Peak",
      },
      {
        topic: "Primality",
        label: "Prime Check",
      },
      {
        topic: "Sieve",
        label: "Sieve",
      },
      {
        topic: "SortingVisualiser",
        label: "Sorting Visualiser",
      },
    ],
  },
  {
    topic: "ds",
    label: "Data Structures",
    pages: [
      {
        topic: "Array",
        label: "Array",
      },
      {
        topic: "LinkedList",
        label: "Linked List",
      },
      {
        topic: "Lookup",
        label: "Lookup",
      },
      {
        topic: "Queues",
        label: "Queues",
      },
      {
        topic: "Sets",
        label: "Sets",
      },
      {
        topic: "Stacks",
        label: "Stacks",
      },
    ],
  },
  {
    topic: "physics",
    label: "Physics",
    pages: [
      {
        topic: "CircularMotion",
        label: "Circular Motion and Angular Momentum",
      },
      {
        topic: "Projectile",
        label: "Projectile Motion",
      },
      {
        topic: "SolarSystem",
        label: "Planetary Motion : Solar System",
      },
    ],
  },
  {
    topic: "math",
    label: "Mathematics",
    pages: [
      {
        topic: "EquationPlotter",
        label: "2-D Equation Plotter",
      },
      {
        topic: "3DEquationPlotter",
        label: "3-D Equation Plotter",
      },
    ],
  },
  {
    topic: "games",
    label: "Game Zone",
    pages: [
      // {
      //   topic: "Breakout",
      //   label: "Brick Breaker",
      // },
      {
        topic: "PrisonerDillema",
        label: "Prisoner's Dillema",
      },
      {
        topic: "RockPaperScissors",
        label: "Rock Paper Scissors",
      },
      {
        topic: "TicTacToe",
        label: "Tic Tac Toe",
      },
    ],
  },
]

const dynamicRoute = (categoryTopic, subjectTopic) => {
  return `${categoryTopic}/${subjectTopic}`
}

const dynamicPath = (categoryTopic, subjectTopic) => {
  return `site/${categoryTopic}/components/${subjectTopic}`
}

const siteSugg = []

pages.forEach((category) => {
  category.pages.forEach((subject) => {
    const path = `${dynamicPath(category.topic, subject.topic)}`
    const route = `/${dynamicRoute(category.topic, subject.topic)}`
    const title = `${category.label} : ${subject.label}`
    siteSugg.push({
      route,
      title,
      path,
    })
  })
})

export { siteSugg, pages }
