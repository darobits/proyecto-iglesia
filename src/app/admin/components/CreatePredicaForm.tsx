'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"

type Tipo = "audio" | "youtube"

export default function CreatePredicaForm() {

  const [tipo, setTipo] = useState<Tipo>("audio")

  const [titulo, setTitulo] = useState("")
  const [predicador, setPredicador] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")

  const [audio, setAudio] = useState<File | null>(null)
  const [youtubeUrl, setYoutubeUrl] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!titulo || !predicador || !fecha) {
      alert("Completar todos los campos")
      return
    }

    let audio_url = null
    let youtube_url = null

    if (tipo === "audio" && audio) {
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

    if (tipo === "youtube") {
      if (!youtubeUrl) return alert("Ingresar URL de YouTube")
      youtube_url = youtubeUrl
    }

    const { error } = await supabase
      .from("predicas")
      .insert({
        titulo,
        predicador,
        descripcion,
        fecha,
        audio_url,
        youtube_url
      })

    if (error) return alert(error.message)

    alert("Prédica creada")
  }

  return (
    <div className="card predica-card form-card dark-card">

      <h3>Crear Prédica</h3>

      <div className="tipo-selector">

        <button
          type="button"
          className={`btn-tipo ${tipo === "audio" ? "active-audio" : ""}`}
          onClick={() => setTipo("audio")}
        >
          🎧 Audio
        </button>

        <button
          type="button"
          className={`btn-tipo ${tipo === "youtube" ? "active-youtube" : ""}`}
          onClick={() => setTipo("youtube")}
        >
          ▶️ YouTube
        </button>

      </div>

      <form onSubmit={handleSubmit} className="form">

        <div className="form-grid">
          <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" />
          <input value={predicador} onChange={e => setPredicador(e.target.value)} placeholder="Predicador" />
        </div>

        <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Descripción" />

        <div className="form-grid">

          <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />

          {tipo === "audio" ? (
            <input type="file" accept="audio/mp3" onChange={(e) => setAudio(e.target.files?.[0] || null)} />
          ) : (
            <input
              type="text"
              placeholder="URL de YouTube"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
            />
          )}

        </div>

        <button className="btn-go" type="submit">
          Crear Prédica
        </button>

      </form>
    </div>
  )
}