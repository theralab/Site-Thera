"use client"

import Link from "next/link"
import { useState } from "react"
import Header from "../components/home/Header/Header"

/* Somente Mobile por agora */

export default function LoginPage() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handlerUsername(e) {
    setUsername(e.target.value)
  }

  function handlerPassword(e) {
    setPassword(e.target.value)
  }

  return (
    <>
      <Header />
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <form
          action={""/*Backend*/}
          method="POST"
          className="bg-gray-200 rounded px-6 py-4 flex flex-col justify-center"
        >
          <h1>Bem-vindo</h1>
          <p className="flex flex-col gap-y-2 my-1">
            <label for="username">Usuário</label>
            <input className="border rounded focus:" type="text" name="username" value={username} onChange={handlerUsername} />
          </p>

          <p className="flex flex-col gap-y-2 my-1">
            <label for="password">Senha</label>
            <input className="border" type="password" name="password" value={password} onChange={handlerPassword} />
          </p>
          <button className="bg-green-500 rounded border px-2 py-1 mt-2 self-end w-1/2" type="submit">Entrar</button>
        </form>
        {/* Criar opções de login com Google/Github */}
        <p>Não possui login? <span className="text-blue-600 underline"><Link href="#">Clique aqui</Link></span></p>
      </div>
    </>
  )
}
