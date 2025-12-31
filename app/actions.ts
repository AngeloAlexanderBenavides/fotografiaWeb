'use server'

export async function saveEmail(email: string) {
  // --- GUÍA RÁPIDA PARA GUARDAR EN GOOGLE SHEETS (GRATIS) ---
  // 1. Crea un Google Form nuevo.
  // 2. Crea una sola pregunta tipo "Respuesta corta" llamada "Email".
  // 3. Ve a la pestaña "Respuestas" y haz clic en el icono de Google Sheets para crear la hoja vinculada.
  // 4. En el formulario, haz clic en los 3 puntos (arriba derecha) -> "Obtener enlace pre-rellenado".
  // 5. Escribe un email de prueba (ej: test@test.com) y dale a "Obtener enlace".
  // 6. Copia el enlace y pégalo en un bloc de notas. Se verá algo así:
  //    https://docs.google.com/forms/d/e/1FAIpQLSf...ID_LARGO.../viewform?usp=pp_url&entry.12345678=test@test.com
  
  // 7. Extrae los dos datos que necesitamos:
  const GOOGLE_FORM_ID = "1FAIpQLSeRbTzdjBge5w2jhI7A_jBSfbrpig8zn5FWPodBZePJuBhpuQ" // Lo que está entre /d/e/ y /viewform
  const GOOGLE_ENTRY_ID = "entry.1440890220" // Lo que está después de &entry. (incluye el número)

  console.log(`[LEAD CAPTURADO] Email: ${email} - Fecha: ${new Date().toISOString()}`)

  // Si no has configurado los IDs, solo guardamos en log y terminamos
  if (GOOGLE_FORM_ID === "TU_FORM_ID_AQUI") {
    console.log("⚠️ Google Form no configurado. El email solo se guardó en los logs del servidor.")
    return { success: true }
  }

  try {
    // Enviamos los datos a Google Forms (que los guardará en el Sheet)
    const url = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`
    const formData = new URLSearchParams()
    formData.append(GOOGLE_ENTRY_ID, email)

    await fetch(url, {
      method: 'POST',
      body: formData,
    })
    
    return { success: true }
  } catch (error) {
    console.error("Error enviando a Google Sheets:", error)
    // No fallamos la petición al usuario aunque falle el guardado externo
    return { success: true }
  }
}