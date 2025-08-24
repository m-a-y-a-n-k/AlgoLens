const pages = [
  {
    topic: "algo",
    label: "Algorithms 🧠",
    pages: [
      {
        topic: "BinarySearch",
        label: "Binary Search 🔍",
      },
      {
        topic: "ClosestPair",
        label: "Closest Pair 🤏",
      },
      {
        topic: "Exponentiation",
        label: "Exponentiation ⏰",
      },
      {
        topic: "Factorial",
        label: "Factorial ➕",
      },
      {
        topic: "Factorize",
        label: "Factorize ✖️",
      },
      {
        topic: "Fibonacci",
        label: "Fibonacci 🔢",
      },
      {
        topic: "FloodFill",
        label: "Flood Fill 🌊",
      },
      {
        topic: "JumpSearch",
        label: "🏃‍♂️ Jump Search",
      },
      {
        topic: "KnuthShuffle",
        label: "Knuth Shuffle 🃏",
      },
      {
        topic: "NQueens",
        label: "NQueens 👑",
      },
      {
        topic: "Palindrome",
        label: "Palindrome 🔀",
      },
      {
        topic: "Peak",
        label: "Peak ⛰️",
      },
      {
        topic: "Primes",
        label: "Prime Check 🔢",
      },
      {
        topic: "Sieve",
        label: "Sieve 🪣",
      },
      {
        topic: "Sorting",
        label: "Sorting 📊",
      },
      {
        topic: "TowerOfHanoi",
        label: "Tower of Hanoi 🗼",
      },
    ],
  },
  {
    topic: "ds",
    label: "Data Structures 🌳",
    pages: [
      {
        topic: "Array",
        label: "Array 📚",
      },
      {
        topic: "BinaryTree",
        label: "Binary Tree 🌳",
      },
      {
        topic: "LinkedList",
        label: "Linked List 🔗",
      },
      {
        topic: "Lookup",
        label: "Lookup 🔍",
      },
      {
        topic: "Queues",
        label: "Queues 📚",
      },
      {
        topic: "Graph",
        label: "Randomized Graph 📈",
      },
      {
        topic: "Sets",
        label: "Sets 🎰",
      },
      {
        topic: "Stacks",
        label: "Stacks 📚",
      },
    ],
  },
  {
    topic: "physics",
    label: "Physics 🌌",
    pages: [
      {
        topic: "CircularMotion",
        label: "Circular Motion and Angular Momentum 🔄",
      },
      // {
      //   topic: "Optics",
      //   label: "Optics and Light Behavior 🔦",
      // },
      {
        topic: "SolarSystem",
        label: "Planetary Motion : Solar System 🌍",
      },
      {
        topic: "Projectile",
        label: "Projectile Motion 💥",
      },
      {
        topic: "RollingMotion",
        label: "Rolling Motion ⚙️",
      },
      {
        topic: "SimpleHarmonicMotion",
        label: "Simple Harmonic Motion 🌊",
      },
      {
        topic: "SimplePendulum",
        label: "Simple Pendulum ⏱️",
      },
    ],
  },
  {
    topic: "math",
    label: "Mathematics 🧮",
    pages: [
      {
        topic: "EquationPlotter",
        label: "2-D Equation Plotter 📈",
      },
      {
        topic: "3DEquationPlotter",
        label: "3-D Equation Plotter 📈",
      },
      {
        topic: "AdvancedCalculator",
        label: "Advanced Calculator 🔬",
      },
      {
        topic: "Calculator",
        label: "Basic Calculator ➕",
      },
      {
        topic: "NumberSystems",
        label: "Number Systems 🔢",
      },
      {
        topic: "PythagorasTheorem",
        label: "Pythagoras Theorem 📐",
      },
    ],
  },
  {
    topic: "games",
    label: "Game Zone 🎮",
    pages: [
      {
        topic: "PrisonerDilemma",
        label: "Prisoner's Dilemma ⚖️",
      },
      {
        topic: "RockPaperScissors",
        label: "Rock Paper Scissors ✂️",
      },
      {
        topic: "TicTacToe",
        label: "Tic Tac Toe ❌⭕",
      },
      {
        topic: "Chess",
        label: "Chess ♔",
      },
      {
        topic: "Sudoku",
        label: "Sudoku Puzzle 🧩",
      },
      {
        topic: "Tetris",
        label: "🟥🟦🟩🟨 Tetris Boss Rush",
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

const siteSuggestions = []

pages.forEach((category) => {
  category.pages.forEach((subject) => {
    const path = `${dynamicPath(category.topic, subject.topic)}`
    const route = `/${dynamicRoute(category.topic, subject.topic)}`
    const title = `${category.label} : ${subject.label}`
    siteSuggestions.push({
      route,
      title,
      path,
    })
  })
})

export { siteSuggestions, pages }
