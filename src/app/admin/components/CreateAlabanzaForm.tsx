'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"

type TipoAlabanza = "audio" | "youtube"

export default function CreateAlabanzaForm() {
  const [titulo, setTitulo] = useState<string>("")
  const [descripcion, setDescripcion] = useState<string>("")
  const [fecha, setFecha] = useState<string>("")
  const [tipo, setTipo] = useState<TipoAlabanza>("audio")
  const [audio, setAudio] = useState<File | null>(null)
  const [youtube, setYoutube] = useState<string>("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!titulo || !fecha) {
      alert("Completar campos obligatorios")
      return
    }

    let audio_url: string | null = null

    if (tipo === "audio") {
      if (!audio) {
        alert("Debes subir un archivo MP3")
        return
      }

      const fileName = `${Date.now()}-${audio.name}`

      const { error: uploadError } = await supabase.storage
        .from("alabanzas")
        .upload(fileName, audio)

      if (uploadError) return alert(uploadError.message)

      const { data } = supabase.storage
        .from("alabanzas")
        .getPublicUrl(fileName)

      audio_url = data.publicUrl
    }

    if (tipo === "youtube" && !youtube) {
      alert("Debes ingresar un link de YouTube")
      return
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
    <form onSubmit={handleSubmit}>
      <h2>Crear Alabanza</h2>

      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value as TipoAlabanza)}
      >
        <option value="audio">Audio MP3</option>
        <option value="youtube">YouTube</option>
      </select>

      {tipo === "audio" ? (
        <input
          type="file"
          accept="audio/mp3"
          onChange={(e) => setAudio(e.target.files?.[0] || null)}
        />
      ) : (
        <input
          placeholder="Link YouTube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
      )}

      <button type="submit">Crear</button>
    </form>
  )
}