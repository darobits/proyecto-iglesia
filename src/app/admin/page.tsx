"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminPage() {

  const [tipo, setTipo] = useState<"predica" | "alabanza" | null>(null)

  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("") // predicador o cantante
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const handleUpload = async () => {

    if (!file || !tipo) return alert("Faltan datos")

    const bucket = tipo === "predica" ? "predicas" : "alabanzas"

    const fileName = `${Date.now()}-${file.name}`

    // 1. subir archivo
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, file)

    if (uploadError) {
      console.error(uploadError)
      return alert("Error subiendo archivo")
    }

    // 2. obtener URL
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName)

    const audioUrl = data.publicUrl

    // 3. guardar en DB
    const table = tipo === "predica" ? "predicas" : "alabanzas"

    const payload =
      tipo === "predica"
        ? {
            titulo,
            predicador: autor,
            descripcion,
            fecha,
            audio_url: audioUrl
          }
        : {
            titulo,
            tipo: "audio",
            descripcion,
            fecha,
            audio_url: audioUrl
          }

    const { error: dbError } = await supabase
      .from(table)
      .insert([payload])

    if (dbError) {
      console.error(dbError)
      return alert("Error guardando en DB")
    }

    alert("Contenido subido correctamente")

    // reset
    setTitulo("")
    setAutor("")
    setDescripcion("")
    setFecha("")
    setFile(null)
  }

  return (

    <div className="container py-5">

      <h1 className="mb-4">Panel de Administración</h1>

      {/* =========================
          SELECTOR
      ========================= */}

      <div className="mb-4">

        <p>¿Qué querés subir?</p>

        <button
          className={`btn me-2 ${tipo === "predica" ? "btn-gold" : "btn-outline-light"}`}
          onClick={() => setTipo("predica")}
        >
          Predica
        </button>

        <button
          className={`btn ${tipo === "alabanza" ? "btn-gold" : "btn-outline-light"}`}
          onClick={() => setTipo("alabanza")}
        >
          Alabanza
        </button>

      </div>

      {/* =========================
          FORMULARIO
      ========================= */}

      {tipo && (

        <div className="card-modern p-4">

          <h3 className="mb-3">
            Subir {tipo === "predica" ? "Predica" : "Alabanza"}
          </h3>

          <input
            placeholder="Título"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            className="form-control mb-2"
          />

          <input
            placeholder={tipo === "predica" ? "Predicador" : "Autor / Grupo"}
            value={autor}
            onChange={e => setAutor(e.target.value)}
            className="form-control mb-2"
          />

          <textarea
            placeholder="Descripción"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            className="form-control mb-2"
          />

          <input
            type="date"
            onChange={e => setFecha(e.target.value)}
            className="form-control mb-2"
          />

          <input
            type="file"
            accept="audio/*"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="form-control mb-3"
          />

          <button className="btn btn-gold" onClick={handleUpload}>
            Subir
          </button>

        </div>

      )}

    </div>

  )
}