import { useEffect, useState } from "react";
import "../styles/Toast.css";

interface Props {
  message: string;
  duration?: number;
  onClose: () => void;
}

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
