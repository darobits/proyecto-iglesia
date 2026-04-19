'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"

type TipoAlabanza = "audio" | "youtube"

export default function CreateAlabanzaForm() {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")
  const [tipo, setTipo] = useState<TipoAlabanza>("audio")

  const [audio, setAudio] = useState<File | null>(null)
  const [youtube, setYoutube] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!titulo || !fecha) {
      alert("Completar campos obligatorios")
      return
    }

    let audio_url: string | null = null

    if (tipo === "audio") {
      if (!audio) return alert("Debes subir un archivo MP3")

      const fileName = `${Date.now()}-${audio.name}`

      const { error } = await supabase.storage
        .from("alabanzas")
        .upload(fileName, audio)

      if (error) return alert(error.message)

      const { data } = supabase.storage
        .from("alabanzas")
        .getPublicUrl(fileName)

      audio_url = data.publicUrl
    }

    if (tipo === "youtube" && !youtube) {
      return alert("Debes ingresar un link de YouTube")
    }

    const { error } = await supabase
      .from("alabanzas")
      .insert({
        titulo,
        descripcion,
        fecha,
        tipo,
        audio_url,
        youtube_url: tipo === "youtube" ? youtube : null
      })

    if (error) return alert(error.message)

    alert("Alabanza creada correctamente")
  }

  return (
    <div className="card alabanza-create">

      <h3 className="alabanza-title">Crear Alabanza</h3>

      <p className="alabanza-subtitle">Elegí el tipo de archivo:</p>

      {/* SELECTOR */}
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

          <div className="field">
            <label>Título</label>
            <input
              placeholder="Ej: Alabaré a mi Señor"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

        </div>

        <div className="field">
          <label>Descripción</label>
          <textarea
            placeholder="Ej: Coro congregacional del domingo"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className="field">

          {tipo === "audio" ? (
            <>
              <label>Cargar archivo MP3</label>
              <input
                type="file"
                accept="audio/mp3"
                onChange={(e) => setAudio(e.target.files?.[0] || null)}
              />
            </>
          ) : (
            <>
              <label>Link de YouTube</label>
              <input
                placeholder="https://youtube.com/..."
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
            </>
          )}

        </div>

        <button className="btn-go" type="submit">
          Crear Alabanza
        </button>

      </form>
    </div>
  )
}