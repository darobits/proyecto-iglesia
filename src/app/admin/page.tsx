"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminPage() {

  const [tipo, setTipo] = useState<"predica" | "alabanza" | null>(null)
  const [modo, setModo] = useState<"audio" | "youtube">("audio")

  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const resetForm = () => {
    setTitulo("")
    setAutor("")
    setDescripcion("")
    setFecha("")
    setFile(null)
    setYoutubeUrl("")
  }

  const handleUpload = async () => {

    if (!tipo) return alert("Seleccioná tipo")

    if (!titulo || !autor || !fecha) {
      return alert("Completá los campos obligatorios")
    }

    setLoading(true)

    try {
      let audioUrl: string | null = null

      // ========================
      // AUDIO
      // ========================
      if (modo === "audio") {

        if (!file) {
          setLoading(false)
          return alert("Falta archivo")
        }

        const bucket = tipo === "predica" ? "predicas" : "alabanzas"
        const fileName = `${Date.now()}-${file.name}`

        const { error: uploadError } = await supabase.storage
          .from(bucket)
          .upload(fileName, file)

        if (uploadError) {
          setLoading(false)
          return alert("Error subiendo archivo")
        }

        const { data } = supabase.storage
          .from(bucket)
          .getPublicUrl(fileName)

        audioUrl = data.publicUrl
      }

      // ========================
      // INSERT DB
      // ========================
      const table = tipo === "predica" ? "predicas" : "alabanzas"

      const payload = {
        titulo,
        descripcion,
        fecha,
        audio_url: audioUrl,
        youtube_url: modo === "youtube" ? youtubeUrl : null,
        ...(tipo === "predica"
          ? { predicador: autor }
          : { autor })
      }

      const { error } = await supabase.from(table).insert([payload])

      if (error) {
        setLoading(false)
        return alert("Error guardando")
      }

      alert("Subido correctamente 🚀")
      resetForm()

    } catch (err) {
      console.error(err)
      alert("Error inesperado")
    }

    setLoading(false)
  }

  return (
    <div className="admin-container">

      <h1 className="admin-title">⚡ Panel de Control</h1>

      {/* SELECTOR */}
      <div className="admin-section">

        <button onClick={() => setTipo("predica")}>
          Predicas
        </button>

        <button onClick={() => setTipo("alabanza")}>
          Alabanzas
        </button>

      </div>

      {/* FORM */}
      {tipo && (
        <div className="admin-card">

          <h3>Subir {tipo}</h3>

          {/* =========================
              TOGGLE LIMPIO Y CORRECTO
          ========================= */}
          <div className="admin-toggle">

            <button
              type="button"
              className={`toggle-btn audio ${modo === "audio" ? "active" : ""}`}
              onClick={() => setModo("audio")}
            >
              Audio
            </button>

            <button
              type="button"
              className={`toggle-btn youtube ${modo === "youtube" ? "active" : ""}`}
              onClick={() => setModo("youtube")}
            >
              YouTube
            </button>

          </div>

          {/* INPUTS */}

          <input
            placeholder="Título"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />

          <input
            placeholder={tipo === "predica" ? "Predicador" : "Autor"}
            value={autor}
            onChange={e => setAutor(e.target.value)}
          />

          <textarea
            placeholder="Descripción"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
          />

          <input
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />

          {/* AUDIO */}
          {modo === "audio" && (
            <input
              type="file"
              onChange={e => setFile(e.target.files?.[0] || null)}
            />
          )}

          {/* YOUTUBE */}
          {modo === "youtube" && (
            <input
              placeholder="URL YouTube"
              value={youtubeUrl}
              onChange={e => setYoutubeUrl(e.target.value)}
            />
          )}

          {/* BOTON */}
          <button
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Subiendo..." : "Subir"}
          </button>

        </div>
      )}

    </div>
  )
}