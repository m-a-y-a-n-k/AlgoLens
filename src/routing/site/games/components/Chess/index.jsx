import React, { useState } from "react"
import { Chess } from "chess.js"
import "./styles.css"

const PIECE_UNICODE = {
  p: "♟",
  r: "♜",
  n: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  P: "♙",
  R: "♖",
  N: "♘",
  B: "♗",
  Q: "♕",
  K: "♔",
}

export default function App() {
  const [game] = useState(new Chess())

  const [selected, setSelected] = useState(null)
  const [fenBoard, setFenBoard] = useState(game.board())

  const handleClick = (row, col) => {
    const square = String.fromCharCode(97 + col) + (8 - row)

    if (selected) {
      const move = game.move({ from: selected, to: square, promotion: "q" })
      if (move) {
        setFenBoard(game.board())
      }
      setSelected(null)
    } else {
      const piece = game.get(square)
      if (piece && piece.color === game.turn()) {
        setSelected(square)
      }
    }
  }

  const getSquareColor = (row, col) => {
    return (row + col) % 2 === 0 ? "light" : "dark"
  }

  return (
    <div className="container">
      <h2>Lets Play Chess</h2>
      <div className="board">
        {fenBoard.map((row, rowIdx) =>
          row.map((piece, colIdx) => {
            const square = String.fromCharCode(97 + colIdx) + (8 - rowIdx)
            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`square ${getSquareColor(rowIdx, colIdx)} ${
                  selected === square ? "selected" : ""
                }`}
                onClick={() => handleClick(rowIdx, colIdx)}
              >
                {piece && (
                  <span className="piece">
                    {
                      PIECE_UNICODE[
                        piece.type === piece.type.toUpperCase()
                          ? piece.type
                          : piece.type.toLowerCase()
                      ]
                    }
                  </span>
                )}
              </div>
            )
          })
        )}
      </div>
      <div className="status">
        {game.isCheckmate() && (
          <p>Checkmate! {game.turn() === "w" ? "Black" : "White"} wins</p>
        )}
        {game.isDraw() && <p>Draw!</p>}
        {game.inCheck() && <p>Check!</p>}
        {!game.isGameOver() && (
          <p>Turn: {game.turn() === "w" ? "White" : "Black"}</p>
        )}
      </div>
    </div>
  )
}
