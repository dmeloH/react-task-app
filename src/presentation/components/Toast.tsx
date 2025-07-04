import { useEffect, useState } from "react";
import "../styles/Toast.css";

interface Props {
  message: string;
  duration?: number;
  onClose: () => void;
}

/**
 * Componente Toast que muestra un mensaje temporalmente en pantalla.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.message - Mensaje a mostrar en el toast.
 * @param {number} [props.duration=3000] - Duración en milisegundos que el toast será visible.
 * @param {() => void} props.onClose - Función que se ejecuta cuando el toast se cierra.
 *
 * El componente utiliza una animación de entrada y salida para mostrar y ocultar el mensaje.
 * Después de la duración especificada, el toast se desvanece y luego ejecuta la función `onClose`.
 */
export default function Toast({ message, duration = 3000, onClose }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <div className={`toast ${visible ? "fade-in" : "fade-out"}`}>{message}</div>
  );
}
