import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"

const Test = () => (
  <div>
    <Header title="Header of Test Page"></Header>
    <h1>This is a test page!</h1>
    <button onClick={() => navigate("/")}>Navigate Home</button>
  </div>
)

export default Test
