'use client'

type Props = {
  open: boolean
  title: string
  description: string
  confirmText: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
}

export default function ModalConfirm({
  open,
  title,
  description,
  confirmText,
  cancelText = "Cancelar",
  onConfirm,
  onCancel
}: Props) {
  if (!open) return null

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onCancel}>
            {cancelText}
          </button>

          <button className="btn-danger" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}