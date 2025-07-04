/**
 * Props para el componente ConfirmModal.
 */
interface Props {
  /** Mensaje que se mostrará en el cuerpo del modal. */
  message: string;
  /** Función que se ejecuta al confirmar la acción. */
  onConfirm: () => void;
  /** Función que se ejecuta al cancelar la acción. */
  onCancel: () => void;
}

/**
 * Componente modal de confirmación reutilizable.
 * 
 * Muestra un mensaje con botones "Sí" y "No" que ejecutan funciones según la decisión del usuario.
 *
 * @param message - Texto que se mostrará al usuario como pregunta o advertencia.
 * @param onConfirm - Función que se invoca cuando el usuario confirma.
 * @param onCancel - Función que se invoca cuando el usuario cancela.
 * @returns Un modal centrado con fondo borroso y botones de acción.
 */
export default function ConfirmModal({ message, onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl px-6 py-7 w-full max-w-lg animate-fadeIn">
        <p className="text-center text-gray-800 text-xl font-medium mb-5">
          {message}
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
          >
            Sí
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
