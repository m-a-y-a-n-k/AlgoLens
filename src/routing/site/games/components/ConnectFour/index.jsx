import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaRedo, FaUser, FaRobot } from "react-icons/fa"
import FavoriteButton from "common/components/FavoriteButton"
import useTrackView from "common/hooks/useTrackView"
import "./ConnectFour.css"

const ROWS = 6
const COLS = 7
const EMPTY = 0
const PLAYER = 1
const AI = 2

const ConnectFour = () => {
  const [board, setBoard] = useState(
    Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(EMPTY))
  )
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER)
  const [winner, setWinner] = useState(null)
  const [winningCells, setWinningCells] = useState([])
  const [gameMode, setGameMode] = useState("ai") // 'ai' or '2player'
  const [scores, setScores] = useState({ player: 0, ai: 0, ties: 0 })
  const [isAIThinking, setIsAIThinking] = useState(false)

  useTrackView({
    id: "games-connect-four",
    label: "Connect Four",
    category: "Game Zone",
    route: "/games/ConnectFour",
  })

  useEffect(() => {
    if (currentPlayer === AI && gameMode === "ai" && !winner && !isAIThinking) {
      setIsAIThinking(true)
      setTimeout(() => {
        makeAIMove()
        setIsAIThinking(false)
      }, 500)
    }
  }, [currentPlayer, gameMode, winner])

  const checkWinner = (board) => {
    // Check horizontal
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS - 3; col++) {
        if (
          board[row][col] !== EMPTY &&
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row][col + 2] &&
          board[row][col] === board[row][col + 3]
        ) {
          return {
            winner: board[row][col],
            cells: [
              [row, col],
              [row, col + 1],
              [row, col + 2],
              [row, col + 3],
            ],
          }
        }
      }
    }

    // Check vertical
    for (let col = 0; col < COLS; col++) {
      for (let row = 0; row < ROWS - 3; row++) {
        if (
          board[row][col] !== EMPTY &&
          board[row][col] === board[row + 1][col] &&
          board[row][col] === board[row + 2][col] &&
          board[row][col] === board[row + 3][col]
        ) {
          return {
            winner: board[row][col],
            cells: [
              [row, col],
              [row + 1, col],
              [row + 2, col],
              [row + 3, col],
            ],
          }
        }
      }
    }

    // Check diagonal (down-right)
    for (let row = 0; row < ROWS - 3; row++) {
      for (let col = 0; col < COLS - 3; col++) {
        if (
          board[row][col] !== EMPTY &&
          board[row][col] === board[row + 1][col + 1] &&
          board[row][col] === board[row + 2][col + 2] &&
          board[row][col] === board[row + 3][col + 3]
        ) {
          return {
            winner: board[row][col],
            cells: [
              [row, col],
              [row + 1, col + 1],
              [row + 2, col + 2],
              [row + 3, col + 3],
            ],
          }
        }
      }
    }

    // Check diagonal (up-right)
    for (let row = 3; row < ROWS; row++) {
      for (let col = 0; col < COLS - 3; col++) {
        if (
          board[row][col] !== EMPTY &&
          board[row][col] === board[row - 1][col + 1] &&
          board[row][col] === board[row - 2][col + 2] &&
          board[row][col] === board[row - 3][col + 3]
        ) {
          return {
            winner: board[row][col],
            cells: [
              [row, col],
              [row - 1, col + 1],
              [row - 2, col + 2],
              [row - 3, col + 3],
            ],
          }
        }
      }
    }

    // Check for tie
    if (board.every((row) => row.every((cell) => cell !== EMPTY))) {
      return { winner: "tie", cells: [] }
    }

    return null
  }

  const dropDisc = (col, player) => {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][col] === EMPTY) {
        const newBoard = board.map((r) => [...r])
        newBoard[row][col] = player
        setBoard(newBoard)

        const result = checkWinner(newBoard)
        if (result) {
          setWinner(result.winner)
          setWinningCells(result.cells)

          if (result.winner === PLAYER) {
            setScores((s) => ({ ...s, player: s.player + 1 }))
          } else if (result.winner === AI) {
            setScores((s) => ({ ...s, ai: s.ai + 1 }))
          } else if (result.winner === "tie") {
            setScores((s) => ({ ...s, ties: s.ties + 1 }))
          }
        } else {
          setCurrentPlayer(player === PLAYER ? AI : PLAYER)
        }
        return true
      }
    }
    return false
  }

  const handleColumnClick = (col) => {
    if (winner || currentPlayer === AI || isAIThinking) return
    dropDisc(col, currentPlayer)
  }

  const makeAIMove = () => {
    const validColumns = []
    for (let col = 0; col < COLS; col++) {
      if (board[0][col] === EMPTY) {
        validColumns.push(col)
      }
    }

    if (validColumns.length === 0) return

    // Simple AI: Try to win, block player, or random
    let bestCol = null

    // Check if AI can win
    for (const col of validColumns) {
      const testBoard = board.map((r) => [...r])
      for (let row = ROWS - 1; row >= 0; row--) {
        if (testBoard[row][col] === EMPTY) {
          testBoard[row][col] = AI
          if (checkWinner(testBoard)?.winner === AI) {
            bestCol = col
          }
          break
        }
      }
      if (bestCol !== null) break
    }

    // Check if need to block player
    if (bestCol === null) {
      for (const col of validColumns) {
        const testBoard = board.map((r) => [...r])
        for (let row = ROWS - 1; row >= 0; row--) {
          if (testBoard[row][col] === EMPTY) {
            testBoard[row][col] = PLAYER
            if (checkWinner(testBoard)?.winner === PLAYER) {
              bestCol = col
            }
            break
          }
        }
        if (bestCol !== null) break
      }
    }

    // Otherwise pick center or random
    if (bestCol === null) {
      const centerCol = Math.floor(COLS / 2)
      if (validColumns.includes(centerCol)) {
        bestCol = centerCol
      } else {
        bestCol = validColumns[Math.floor(Math.random() * validColumns.length)]
      }
    }

    dropDisc(bestCol, AI)
  }

  const resetGame = () => {
    setBoard(
      Array(ROWS)
        .fill()
        .map(() => Array(COLS).fill(EMPTY))
    )
    setCurrentPlayer(PLAYER)
    setWinner(null)
    setWinningCells([])
    setIsAIThinking(false)
  }

  const isWinningCell = (row, col) => {
    return winningCells.some(([r, c]) => r === row && c === col)
  }

  return (
    <div className="connect-four-container">
      <div className="connect-four-header">
        <h1>Connect Four 🔴🟡</h1>
        <p>Connect four discs in a row to win!</p>
        <div className="header-buttons">
          <FavoriteButton
            topic={{
              id: "games-connect-four",
              label: "Connect Four",
              category: "Game Zone",
              route: "/games/ConnectFour",
            }}
          />
        </div>
      </div>

      <div className="connect-four-content">
        <div className="game-controls">
          <div className="mode-selector">
            <button
              className={`mode-btn ${gameMode === "ai" ? "active" : ""}`}
              onClick={() => {
                setGameMode("ai")
                resetGame()
              }}
            >
              <FaRobot /> vs AI
            </button>
            <button
              className={`mode-btn ${gameMode === "2player" ? "active" : ""}`}
              onClick={() => {
                setGameMode("2player")
                resetGame()
              }}
            >
              <FaUser /> 2 Players
            </button>
          </div>

          <div className="scores">
            <div className="score-box player">
              <div className="score-label">
                {gameMode === "ai" ? "You" : "Player 1"}
              </div>
              <div className="score-value">{scores.player}</div>
            </div>
            <div className="score-box ties">
              <div className="score-label">Ties</div>
              <div className="score-value">{scores.ties}</div>
            </div>
            <div className="score-box ai">
              <div className="score-label">
                {gameMode === "ai" ? "AI" : "Player 2"}
              </div>
              <div className="score-value">{scores.ai}</div>
            </div>
          </div>

          <div className="game-status">
            {winner ? (
              <div className="winner-message">
                {winner === "tie"
                  ? "It's a Tie! 🤝"
                  : winner === PLAYER
                  ? `${gameMode === "ai" ? "You" : "Player 1"} Win! 🎉`
                  : `${gameMode === "ai" ? "AI" : "Player 2"} Wins! 🎉`}
              </div>
            ) : (
              <div className="turn-indicator">
                {currentPlayer === PLAYER ? (
                  <span className="player-turn">
                    {gameMode === "ai" ? "Your" : "Player 1's"} Turn
                  </span>
                ) : (
                  <span className="ai-turn">
                    {gameMode === "ai" ? "AI" : "Player 2"}&apos;s Turn
                    {isAIThinking && " 🤔"}
                  </span>
                )}
              </div>
            )}
          </div>

          <button className="reset-btn" onClick={resetGame}>
            <FaRedo /> New Game
          </button>
        </div>

        <div className="board-container">
          <div className="connect-four-board">
            {board.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`cell ${cell === EMPTY ? "clickable" : ""}`}
                  onClick={() => handleColumnClick(colIndex)}
                >
                  {cell !== EMPTY && (
                    <motion.div
                      className={`disc ${cell === PLAYER ? "player" : "ai"} ${
                        isWinningCell(rowIndex, colIndex) ? "winning" : ""
                      }`}
                      initial={{ y: -500, scale: 0 }}
                      animate={{ y: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="instructions">
          <h3>How to Play:</h3>
          <ul>
            <li>Click on a column to drop your disc</li>
            <li>Connect 4 discs horizontally, vertically, or diagonally</li>
            <li>Block your opponent from getting 4 in a row</li>
            <li>
              {gameMode === "ai"
                ? "Beat the AI to prove your strategy!"
                : "Take turns with your friend!"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ConnectFour
