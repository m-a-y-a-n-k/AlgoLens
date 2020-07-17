const routes = [
  "ds/Array",
  "ds/LinkedList",
  "ds/Stacks",
  "ds/Queues",
  "algo/Sieve",
  "algo/BinarySearch",
  "algo/Factorial",
  "algo/NQueens",
  "algo/Exponentiation",
  "algo/FloodFill",
  "algo/Peak",
  "algo/KnuthShuffle",
  "algo/ClosestPair"
];

const siteSugg = routes.map((route)=>{
    let title = route.split('/').join(" : ");
    title = title[0].toUpperCase() + title.substr(1,title.length); 
    return {
        path: `/${route}`,
        title
    }
})

export { routes,siteSugg };
