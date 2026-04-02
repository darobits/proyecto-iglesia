"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function AdminPage() {

  const router = useRouter()

  const [tipo, setTipo] = useState<"predica" | "alabanza" | null>(null)
  const [modo, setModo] = useState<"audio" | "youtube">("audio")

  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const isFormValid =
    titulo &&
    autor &&
    descripcion &&
    fecha &&
    (modo === "audio" ? file : youtubeUrl)

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

    if (!isFormValid) {
      return alert("Completá todos los campos obligatorios")
    }

    setLoading(true)

    try {
      let audioUrl: string | null = null

      if (modo === "audio") {

        const bucket = tipo === "predica" ? "predicas" : "alabanzas"
        const fileName = `${Date.now()}-${file!.name}`

        const { error: uploadError } = await supabase.storage
          .from(bucket)
          .upload(fileName, file!)

        if (uploadError) {
          setLoading(false)
          return alert("Error subiendo archivo")
        }

        const { data } = supabase.storage
          .from(bucket)
          .getPublicUrl(fileName)

        audioUrl = data.publicUrl
      }

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
    <div style={{ display: "flex" }}>

      {/* 🔥 SIDEBAR */}
      <aside className="sidebar">

        <h2 className="sidebar-title">Admin</h2>

        <div className="sidebar-item active">Crear</div>

        <div
          className="sidebar-item"
          onClick={() => router.push("/admin/predicas")}
        >
          Predicas
        </div>

        <div
          className="sidebar-item"
          onClick={() => router.push("/admin/alabanzas")}
        >
          Alabanzas
        </div>

      </aside>

      {/* 🔥 CONTENIDO */}
      <main style={{ marginLeft: 240, width: "100%" }}>

        <div className="admin-container">

          <h1 className="admin-title">⚡ Panel de Control</h1>

          <div className="admin-section">
            <button onClick={() => setTipo("predica")}>Predicas</button>
            <button onClick={() => setTipo("alabanza")}>Alabanzas</button>
          </div>

          {tipo && (
            <div className="admin-card">

              <h3>Subir {tipo}</h3>

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

              {/* FORM */}
              <label>Título</label>
              <input
                placeholder="Ej: Estudio de Romanos"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
              />

              <label>{tipo === "predica" ? "Predicador" : "Autor"}</label>
              <input
                placeholder="Ej: Hno Juan Lopez"
                value={autor}
                onChange={e => setAutor(e.target.value)}
              />

              <label>Descripción</label>
              <textarea
                placeholder="Ej: Capitulo 1: 1-10"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
              />

              <label>Fecha</label>
              <input
                type="date"
                value={fecha}
                onChange={e => setFecha(e.target.value)}
                className="date-input"
              />

              {modo === "audio" && (
                <>
                  <label>Seleccionar archivo</label>
                  <input
                    type="file"
                    onChange={e => setFile(e.target.files?.[0] || null)}
                  />
                </>
              )}

              {modo === "youtube" && (
                <>
                  <label>URL YouTube</label>
                  <input
                    placeholder="https://youtube.com/..."
                    value={youtubeUrl}
                    onChange={e => setYoutubeUrl(e.target.value)}
                  />
                </>
              )}

              <button
                className="admin-submit-btn"
                onClick={handleUpload}
                disabled={!isFormValid || loading}
              >
                {loading ? "Subiendo..." : "Subir"}
              </button>

            </div>
          )}

        </div>

      </main>

    </div>
  )
}