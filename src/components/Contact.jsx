import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { useLang } from '../context/LangContext'
import styles from './Contact.module.css'

const INITIAL = { name: '', email: '', subject: '', message: '' }

function validate(fields, errors) {
  const errs = {}
  if (!fields.name.trim()) errs.name = errors.name
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = errors.email
  if (!fields.subject) errs.subject = errors.subject
  if (!fields.message.trim()) errs.message = errors.message
  return errs
}

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const [fields, setFields] = useState(INITIAL)
  const [fieldErrors, setFieldErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const set = (key) => (e) => {
    setFields(f => ({ ...f, [key]: e.target.value }))
    if (fieldErrors[key]) setFieldErrors(fe => ({ ...fe, [key]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(fields, c.errors)
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs)
      return
    }

    // EmailJS 연동 포인트 — 아래 주석을 교체하세요
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', fields, 'PUBLIC_KEY')

    setShowModal(true)
    setFields(INITIAL)
    setFieldErrors({})
  }

  return (
    <>
      <section className={styles.section} id="contact">
        <div className="container">
          <div className={styles.header}>
            <p className={styles.eyebrow}>{c.eyebrow}</p>
            <h2 className={styles.title}>{c.title}</h2>
            <p className={styles.subtitle}>{c.subtitle}</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <Field label={c.labelName} error={fieldErrors.name}>
                <input
                  type="text"
                  placeholder={c.placeholderName}
                  value={fields.name}
                  onChange={set('name')}
                  className={fieldErrors.name ? styles.inputError : ''}
                />
              </Field>
              <Field label={c.labelEmail} error={fieldErrors.email}>
                <input
                  type="email"
                  placeholder={c.placeholderEmail}
                  value={fields.email}
                  onChange={set('email')}
                  className={fieldErrors.email ? styles.inputError : ''}
                />
              </Field>
            </div>
            <Field label={c.labelSubject} error={fieldErrors.subject}>
              <select
                value={fields.subject}
                onChange={set('subject')}
                className={fieldErrors.subject ? styles.inputError : ''}
              >
                <option value="">{c.labelSubject}</option>
                {c.subjectOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </Field>
            <Field label={c.labelMessage} error={fieldErrors.message}>
              <textarea
                rows={5}
                placeholder={c.placeholderMessage}
                value={fields.message}
                onChange={set('message')}
                className={fieldErrors.message ? styles.inputError : ''}
              />
            </Field>
            <button type="submit" className={styles.submit}>{c.submit}</button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalIcon}><CheckCircle size={28} strokeWidth={1.5} /></div>
            <h3 className={styles.modalTitle}>{c.successTitle}</h3>
            <p className={styles.modalBody}>{c.successBody}</p>
            <button className={styles.modalClose} onClick={() => setShowModal(false)}>
              {c.successClose}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function Field({ label, error, children }) {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      {children}
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  )
}
