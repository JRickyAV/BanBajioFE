import { useState, useEffect } from "react";

const API_URL = "http://127.0.0.1:5000"; // Change to your WSL2 IP

export const useProyectos = () => {
  const [proyectos, setProyectos] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch(`${API_URL}/Proyecto/1`);
        const data = await response.json();
        setProyectos(data);
      } catch (error) {
        console.error("Error fetching proyectos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProyectos();
  }, []);

  return { proyectos, loading };
};
