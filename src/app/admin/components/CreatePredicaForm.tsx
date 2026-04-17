'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function CreatePredicaForm() {
  const [titulo, setTitulo] = useState("")
  const [predicador, setPredicador] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")
  const [audio, setAudio] = useState<File | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!titulo || !predicador || !fecha) {
      alert("Completar todos los campos")
      return
    }

    let audio_url = null

    if (audio) {
      const fileName = `${Date.now()}-${audio.name}`

      const { error } = await supabase.storage
        .from("predicas")
        .upload(fileName, audio)

      if (error) return alert(error.message)

      const { data } = supabase.storage
        .from("predicas")
        .getPublicUrl(fileName)

      audio_url = data.publicUrl
    }

    const { error } = await supabase
      .from("predicas")
      .insert({
        titulo,
        predicador,
        descripcion,
        fecha,
        audio_url
      })

    if (error) return alert(error.message)

    alert("Predica creada")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Prédica</h2>

      <input placeholder="Título" onChange={(e) => setTitulo(e.target.value)} />
      <input placeholder="Predicador" onChange={(e) => setPredicador(e.target.value)} />

      <textarea placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)} />

      <input type="date" onChange={(e) => setFecha(e.target.value)} />

      <input type="file" accept="audio/mp3" onChange={(e) => setAudio(e.target.files?.[0] || null)} />

      <button type="submit">Crear</button>
    </form>
  )
}